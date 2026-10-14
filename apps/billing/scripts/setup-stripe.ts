import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is required");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const listed = await stripe.products.list({ limit: 100, active: true });
const existingProduct = listed.data.find((item) => item.name === "Doctoral Second Brain");
const product =
  existingProduct ??
  (await stripe.products.create({
    name: "Doctoral Second Brain",
    description: "Individual subscription for the Doctoral Second Brain Claude plugin.",
    metadata: { entitlement: "doctoral_brain_full" },
  }));

async function ensurePrice(lookupKey: string, unitAmount: number, interval: "month" | "year") {
  const existing = await stripe.prices.list({ lookup_keys: [lookupKey], limit: 1 });
  if (existing.data[0]) return existing.data[0];
  return stripe.prices.create({
    product: product.id,
    currency: "usd",
    unit_amount: unitAmount,
    recurring: { interval },
    lookup_key: lookupKey,
    nickname: interval === "year" ? "Annual" : "Monthly",
    metadata: { entitlement: "doctoral_brain_full" },
  });
}

const monthly = await ensurePrice("doctoral_brain_monthly", 2900, "month");
const annual = await ensurePrice("doctoral_brain_annual", 19900, "year");

const portal = await stripe.billingPortal.configurations.create({
  business_profile: {
    headline: "Manage your Doctoral Second Brain subscription",
  },
  features: {
    invoice_history: { enabled: true },
    payment_method_update: { enabled: true },
    subscription_cancel: {
      enabled: true,
      mode: "at_period_end",
    },
    subscription_update: {
      enabled: true,
      default_allowed_updates: ["price"],
      proration_behavior: "create_prorations",
      products: [
        {
          product: product.id,
          prices: [monthly.id, annual.id],
        },
      ],
    },
  },
});

console.log("Stripe catalog ready.");
console.log(`STRIPE_PRICE_MONTHLY=${monthly.id}`);
console.log(`STRIPE_PRICE_ANNUAL=${annual.id}`);
console.log(`STRIPE_PORTAL_CONFIGURATION_ID=${portal.id}`);
console.log("Enable Stripe Tax registrations before setting STRIPE_AUTOMATIC_TAX=true.");
