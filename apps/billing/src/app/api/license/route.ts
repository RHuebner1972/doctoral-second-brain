import { auth } from "@/auth";
import { getEntitlement } from "@/lib/db";
import { FEATURE_KEY } from "@/lib/env";

export async function GET() {
  const session = await auth();
  if (!session?.user.customerId) {
    return Response.json({ error: "Sign in required" }, { status: 401 });
  }

  const entitlement = await getEntitlement(session.user.customerId, FEATURE_KEY);
  return Response.json({
    feature: FEATURE_KEY,
    active: entitlement?.active ?? false,
    licenseToken: entitlement?.active ? entitlement.license_token : null,
  });
}
