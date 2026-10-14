import { auth } from "@/auth";
import { getEntitlement } from "@/lib/db";
import { FEATURE_KEY } from "@/lib/env";
import { reconcileCustomerFromStripe } from "@/lib/reconcile";

export async function POST() {
  const session = await auth();
  if (!session?.user.customerId) {
    return Response.json({ error: "Sign in required" }, { status: 401 });
  }

  await reconcileCustomerFromStripe(session.user.customerId);
  const entitlement = await getEntitlement(session.user.customerId, FEATURE_KEY);
  if (!entitlement?.active) {
    return Response.json(
      { error: "Subscription is not active yet. If you just paid, wait a moment and try again." },
      { status: 402 },
    );
  }

  return Response.json({
    ok: true,
    licenseToken: entitlement.license_token,
  });
}
