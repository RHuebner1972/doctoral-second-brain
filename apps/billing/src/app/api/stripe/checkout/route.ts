import { auth } from "@/auth";
import { getCustomerById } from "@/lib/db";
import { automaticTaxEnabled, stripe } from "@/lib/stripe";
import { z } from "zod";

const bodySchema = z.object({
  interval: z.enum(["month", "year"]),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user.customerId) {
    return Response.json({ error: "Sign in required" }, { status: 401 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Choose monthly or annual" }, { status: 400 });
  }

  const priceId =
    parsed.data.interval === "year"
      ? process.env.STRIPE_PRICE_ANNUAL
      : process.env.STRIPE_PRICE_MONTHLY;
  if (!priceId) {
    return Response.json({ error: "Price is not configured" }, { status: 500 });
  }

  const customer = await getCustomerById(session.user.customerId);
  if (!customer) {
    return Response.json({ error: "Account not found" }, { status: 404 });
  }

  const appUrl = process.env.APP_URL ?? new URL(req.url).origin;
  const checkout = await stripe().checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    client_reference_id: customer.id,
    customer: customer.stripe_customer_id ?? undefined,
    customer_email: customer.stripe_customer_id ? undefined : customer.email,
    metadata: { customer_id: customer.id },
    subscription_data: {
      metadata: { customer_id: customer.id },
    },
    success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/pricing`,
    allow_promotion_codes: true,
    ...(automaticTaxEnabled() ? { automatic_tax: { enabled: true } } : {}),
  });

  if (!checkout.url) {
    return Response.json({ error: "Checkout could not start" }, { status: 500 });
  }
  return Response.json({ url: checkout.url });
}
