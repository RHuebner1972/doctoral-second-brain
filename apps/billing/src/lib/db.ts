import postgres from "postgres";

const globalForSql = globalThis as unknown as { sql?: ReturnType<typeof postgres> };

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required");
  }
  if (!globalForSql.sql) {
    globalForSql.sql = postgres(process.env.DATABASE_URL, {
      max: 5,
      prepare: false,
    });
  }
  return globalForSql.sql;
}

export type Customer = {
  id: string;
  email: string;
  stripe_customer_id: string | null;
  auth_user_id: string;
};

export type SubscriptionRow = {
  id: string;
  customer_id: string;
  stripe_subscription_id: string;
  status: string;
  price_id: string | null;
  current_period_end: Date | null;
  grace_until: Date | null;
};

export type EntitlementRow = {
  id: string;
  customer_id: string;
  feature_key: string;
  active: boolean;
  source_subscription_id: string | null;
  license_token: string | null;
};

export type GithubLink = {
  customer_id: string;
  github_id: string;
  github_username: string;
};

export type AccessGrant = {
  id: string;
  customer_id: string;
  github_username: string;
  state: string;
  last_granted_at: Date | null;
  last_revoked_at: Date | null;
  last_error: string | null;
};

export async function upsertCustomerFromGithub(input: {
  authUserId: string;
  email: string;
  githubId: string;
  githubUsername: string;
}): Promise<Customer> {
  const db = getDb();
  const [customer] = await db<Customer[]>`
    insert into customers (email, auth_user_id)
    values (${input.email.toLowerCase()}, ${input.authUserId})
    on conflict (auth_user_id) do update set email = excluded.email
    returning id, email, stripe_customer_id, auth_user_id
  `;
  await db`
    insert into github_links (customer_id, github_id, github_username)
    values (${customer.id}, ${input.githubId}, ${input.githubUsername})
    on conflict (customer_id) do update
      set github_id = excluded.github_id,
          github_username = excluded.github_username
  `;
  return customer;
}

export async function getCustomerById(id: string) {
  const [row] = await getDb()<Customer[]>`
    select id, email, stripe_customer_id, auth_user_id
    from customers where id = ${id}
  `;
  return row ?? null;
}

export async function getCustomerByStripeId(stripeCustomerId: string) {
  const [row] = await getDb()<Customer[]>`
    select id, email, stripe_customer_id, auth_user_id
    from customers where stripe_customer_id = ${stripeCustomerId}
  `;
  return row ?? null;
}

export async function attachStripeCustomer(customerId: string, stripeCustomerId: string) {
  await getDb()`
    update customers
    set stripe_customer_id = ${stripeCustomerId}
    where id = ${customerId} and (
      stripe_customer_id is null or stripe_customer_id = ${stripeCustomerId}
    )
  `;
}

export async function getGithubLink(customerId: string) {
  const [row] = await getDb()<GithubLink[]>`
    select customer_id, github_id, github_username
    from github_links where customer_id = ${customerId}
  `;
  return row ?? null;
}

export async function listSubscriptions(customerId: string) {
  return getDb()<SubscriptionRow[]>`
    select id, customer_id, stripe_subscription_id, status, price_id, current_period_end, grace_until
    from subscriptions
    where customer_id = ${customerId}
    order by updated_at desc
  `;
}

export async function getSubscriptionByStripeId(stripeSubscriptionId: string) {
  const [row] = await getDb()<SubscriptionRow[]>`
    select id, customer_id, stripe_subscription_id, status, price_id, current_period_end, grace_until
    from subscriptions
    where stripe_subscription_id = ${stripeSubscriptionId}
  `;
  return row ?? null;
}

export async function upsertSubscription(input: {
  customerId: string;
  stripeSubscriptionId: string;
  status: string;
  priceId: string | null;
  currentPeriodEnd: Date | null;
  graceUntil: Date | null;
}) {
  const [row] = await getDb()<SubscriptionRow[]>`
    insert into subscriptions (
      customer_id, stripe_subscription_id, status, price_id, current_period_end, grace_until, updated_at
    ) values (
      ${input.customerId}, ${input.stripeSubscriptionId}, ${input.status},
      ${input.priceId}, ${input.currentPeriodEnd}, ${input.graceUntil}, now()
    )
    on conflict (stripe_subscription_id) do update set
      status = excluded.status,
      price_id = excluded.price_id,
      current_period_end = excluded.current_period_end,
      grace_until = excluded.grace_until,
      updated_at = now()
    returning id, customer_id, stripe_subscription_id, status, price_id, current_period_end, grace_until
  `;
  return row;
}

export async function upsertEntitlement(input: {
  customerId: string;
  featureKey: string;
  active: boolean;
  sourceSubscriptionId: string | null;
  licenseToken?: string | null;
}) {
  const [row] = await getDb()<EntitlementRow[]>`
    insert into entitlements (
      customer_id, feature_key, active, source_subscription_id, license_token, updated_at
    ) values (
      ${input.customerId}, ${input.featureKey}, ${input.active},
      ${input.sourceSubscriptionId}, ${input.licenseToken ?? null}, now()
    )
    on conflict (customer_id, feature_key) do update set
      active = excluded.active,
      source_subscription_id = excluded.source_subscription_id,
      license_token = coalesce(entitlements.license_token, excluded.license_token),
      updated_at = now()
    returning id, customer_id, feature_key, active, source_subscription_id, license_token
  `;
  return row;
}

export async function getEntitlement(customerId: string, featureKey: string) {
  const [row] = await getDb()<EntitlementRow[]>`
    select id, customer_id, feature_key, active, source_subscription_id, license_token
    from entitlements
    where customer_id = ${customerId} and feature_key = ${featureKey}
  `;
  return row ?? null;
}

export async function recordAccessGrant(input: {
  customerId: string;
  githubUsername: string;
  state: string;
  error?: string | null;
}) {
  const granted = input.state === "invited" || input.state === "member";
  await getDb()`
    insert into access_grants (
      customer_id, github_username, state, last_granted_at, last_revoked_at, last_error, updated_at
    ) values (
      ${input.customerId}, ${input.githubUsername}, ${input.state},
      ${granted ? new Date() : null}, ${input.state === "revoked" ? new Date() : null},
      ${input.error ?? null}, now()
    )
  `;
}

export async function latestAccessGrant(customerId: string) {
  const [row] = await getDb()<AccessGrant[]>`
    select id, customer_id, github_username, state, last_granted_at, last_revoked_at, last_error
    from access_grants
    where customer_id = ${customerId}
    order by updated_at desc
    limit 1
  `;
  return row ?? null;
}

export async function claimStripeEvent(eventId: string, type: string) {
  const inserted = await getDb()`
    insert into stripe_events (id, type)
    values (${eventId}, ${type})
    on conflict (id) do nothing
    returning id
  `;
  return inserted.length > 0;
}
