import { auth } from "@/auth";
import { getCustomerById } from "@/lib/db";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user.customerId) {
    return Response.json({ error: "Sign in required" }, { status: 401 });
  }

  const customer = await getCustomerById(session.user.customerId);
  if (!customer?.stripe_customer_id) {
    return Response.json({ error: "No billing account yet" }, { status: 400 });
  }

  const appUrl = process.env.APP_URL ?? new URL(req.url).origin;
  const portal = await stripe().billingPortal.sessions.create({
    customer: customer.stripe_customer_id,
    return_url: `${appUrl}/dashboard`,
    configuration: process.env.STRIPE_PORTAL_CONFIGURATION_ID || undefined,
  });

  return Response.json({ url: portal.url });
}
