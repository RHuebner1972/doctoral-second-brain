import { randomUUID } from "node:crypto";
import type Stripe from "stripe";
import {
  attachStripeCustomer,
  getCustomerById,
  getCustomerByStripeId,
  getEntitlement,
  getGithubLink,
  getSubscriptionByStripeId,
  listSubscriptions,
  recordAccessGrant,
  upsertEntitlement,
  upsertSubscription,
} from "./db";
import { FEATURE_KEY } from "./env";
import { computeGraceUntil, isEntitlementActive, pickBestSubscription } from "./entitlements";
import { grantGithubAccess, revokeGithubAccess } from "./github";
import { periodEndFromSubscription, priceIdFromSubscription, stripe } from "./stripe";

export async function applySubscriptionFromStripe(stripeSubscriptionId: string) {
  const sub = await stripe().subscriptions.retrieve(stripeSubscriptionId);
  const stripeCustomerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  let customer = await getCustomerByStripeId(stripeCustomerId);
  const metadataCustomerId = sub.metadata?.customer_id;
  if (!customer && metadataCustomerId) {
    await attachStripeCustomer(metadataCustomerId, stripeCustomerId);
    customer = await getCustomerById(metadataCustomerId);
  }
  if (!customer) {
    return null;
  }

  const existing = await getSubscriptionByStripeId(sub.id);
  const graceUntil = computeGraceUntil({
    status: sub.status,
    existingGraceUntil: existing?.grace_until ?? null,
  });

  const row = await upsertSubscription({
    customerId: customer.id,
    stripeSubscriptionId: sub.id,
    status: sub.status,
    priceId: priceIdFromSubscription(sub),
    currentPeriodEnd: periodEndFromSubscription(sub),
    graceUntil,
  });

  await syncCustomerEntitlement(customer.id);
  return row;
}

export async function linkCheckoutSession(session: Stripe.Checkout.Session) {
  const stripeCustomerId = typeof session.customer === "string" ? session.customer : session.customer?.id;
  const customerId = session.client_reference_id ?? session.metadata?.customer_id;
  if (!stripeCustomerId || !customerId) return;

  const local = await getCustomerById(customerId);
  if (!local) return;
  await attachStripeCustomer(local.id, stripeCustomerId);

  const subscriptionId =
    typeof session.subscription === "string" ? session.subscription : session.subscription?.id;
  if (subscriptionId) {
    await applySubscriptionFromStripe(subscriptionId);
  }
}

export async function syncCustomerEntitlement(customerId: string) {
  const rows = await listSubscriptions(customerId);
  const best = pickBestSubscription(
    rows.map((row) => ({ ...row, graceUntil: row.grace_until })),
  );
  const active = best
    ? isEntitlementActive({ status: best.status, graceUntil: best.grace_until })
    : false;

  const existing = await getEntitlement(customerId, FEATURE_KEY);
  const licenseToken = existing?.license_token ?? (active ? randomUUID() : null);

  await upsertEntitlement({
    customerId,
    featureKey: FEATURE_KEY,
    active,
    sourceSubscriptionId: best?.id ?? null,
    licenseToken,
  });

  await syncGithubAccess(customerId, active);
}

export async function syncGithubAccess(customerId: string, active: boolean) {
  const link = await getGithubLink(customerId);
  if (!link) return;

  if (!process.env.GITHUB_TOKEN) {
    await recordAccessGrant({
      customerId,
      githubUsername: link.github_username,
      state: "error",
      error: "GITHUB_TOKEN is not configured",
    });
    return;
  }

  const result = active
    ? await grantGithubAccess(link.github_username)
    : await revokeGithubAccess(link.github_username);

  await recordAccessGrant({
    customerId,
    githubUsername: link.github_username,
    state: result.ok ? (active ? result.state : "revoked") : "error",
    error: result.ok ? null : result.error,
  });
}

export async function reconcileCustomerFromStripe(customerId: string) {
  const customer = await getCustomerById(customerId);
  if (!customer?.stripe_customer_id) return;
  const list = await stripe().subscriptions.list({
    customer: customer.stripe_customer_id,
    status: "all",
    limit: 20,
  });
  for (const sub of list.data) {
    await applySubscriptionFromStripe(sub.id);
  }
  await syncCustomerEntitlement(customerId);
}
