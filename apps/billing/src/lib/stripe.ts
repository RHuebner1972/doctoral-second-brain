import Stripe from "stripe";

let client: Stripe | null = null;

export function stripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is required");
  }
  if (!client) {
    client = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return client;
}

export function automaticTaxEnabled() {
  return process.env.STRIPE_AUTOMATIC_TAX === "true";
}

export function periodEndFromSubscription(sub: Stripe.Subscription): Date | null {
  const raw = sub.items.data[0]?.current_period_end ?? null;
  return raw ? new Date(raw * 1000) : null;
}

export function priceIdFromSubscription(sub: Stripe.Subscription): string | null {
  return sub.items.data[0]?.price?.id ?? null;
}

export function subscriptionIdFromInvoice(invoice: Stripe.Invoice): string | null {
  const parent = invoice.parent;
  if (parent && parent.type === "subscription_details") {
    const sub = parent.subscription_details?.subscription;
    return typeof sub === "string" ? sub : sub?.id ?? null;
  }
  const legacy = (invoice as { subscription?: string | { id: string } | null }).subscription;
  return typeof legacy === "string" ? legacy : legacy?.id ?? null;
}

export function randomSuffix(length = 8) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}
