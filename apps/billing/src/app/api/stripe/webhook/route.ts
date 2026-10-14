import { claimStripeEvent } from "@/lib/db";
import { applySubscriptionFromStripe, linkCheckoutSession } from "@/lib/reconcile";
import { stripe, subscriptionIdFromInvoice } from "@/lib/stripe";
import type Stripe from "stripe";

function invoiceIdFromCharge(charge: Stripe.Charge) {
  const raw = (charge as { invoice?: string | { id?: string } | null }).invoice;
  if (typeof raw === "string") return raw;
  return raw?.id ?? null;
}

async function reconcileFromCharge(charge: Stripe.Charge) {
  const invoiceId = invoiceIdFromCharge(charge);
  if (!invoiceId) return;
  const invoice = await stripe().invoices.retrieve(invoiceId);
  const subscriptionId = subscriptionIdFromInvoice(invoice);
  if (subscriptionId) await applySubscriptionFromStripe(subscriptionId);
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!secret || !signature) {
    return new Response("Webhook verification is not configured", { status: 400 });
  }

  const raw = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(raw, signature, secret);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const firstTime = await claimStripeEvent(event.id, event.type);
  if (!firstTime) {
    return Response.json({ received: true, duplicate: true });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.payment_status === "unpaid") break;
      const fresh = await stripe().checkout.sessions.retrieve(session.id);
      await linkCheckoutSession(fresh);
      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      await applySubscriptionFromStripe(sub.id);
      break;
    }
    case "invoice.paid":
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const subscriptionId = subscriptionIdFromInvoice(invoice);
      if (subscriptionId) await applySubscriptionFromStripe(subscriptionId);
      break;
    }
    case "charge.refunded": {
      const charge = event.data.object as Stripe.Charge;
      await reconcileFromCharge(charge);
      break;
    }
    case "charge.dispute.created": {
      const dispute = event.data.object as Stripe.Dispute;
      const chargeId = typeof dispute.charge === "string" ? dispute.charge : dispute.charge.id;
      const charge = await stripe().charges.retrieve(chargeId);
      await reconcileFromCharge(charge);
      break;
    }
    default:
      break;
  }

  return Response.json({ received: true });
}
