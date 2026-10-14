import { auth } from "@/auth";
import { ClaimButton } from "@/components/ClaimButton";
import { PortalButton } from "@/components/PortalButton";
import { getEntitlement, getGithubLink, latestAccessGrant, listSubscriptions } from "@/lib/db";
import { FEATURE_KEY } from "@/lib/env";
import { pickBestSubscription } from "@/lib/entitlements";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user.customerId) redirect("/api/auth/signin?callbackUrl=/dashboard");

  const customerId = session.user.customerId;
  const [entitlement, link, grant, subscriptions] = await Promise.all([
    getEntitlement(customerId, FEATURE_KEY),
    getGithubLink(customerId),
    latestAccessGrant(customerId),
    listSubscriptions(customerId),
  ]);
  const current = pickBestSubscription(
    subscriptions.map((row) => ({ ...row, graceUntil: row.grace_until })),
  );
  const marketplace = process.env.PLUGIN_MARKETPLACE ?? "RHuebner1972/doctoral-second-brain";
  const installRef = process.env.PLUGIN_INSTALL_REF ?? "doctoral-brain@doctoral-brain";

  return (
    <main className="panel">
      <h1>Your account</h1>
      <p>Payment confirmation comes from Stripe. This page never grants access on its own.</p>

      <dl>
        <div className="stat">
          <dt>GitHub</dt>
          <dd>{link?.github_username ?? session.user.githubUsername ?? "Not connected"}</dd>
        </div>
        <div className="stat">
          <dt>Entitlement</dt>
          <dd className={entitlement?.active ? "status-ok" : "status-bad"}>
            {FEATURE_KEY} · {entitlement?.active ? "active" : "inactive"}
          </dd>
        </div>
        <div className="stat">
          <dt>Subscription</dt>
          <dd>{current ? `${current.status}${current.price_id ? ` · ${current.price_id}` : ""}` : "None yet"}</dd>
        </div>
        <div className="stat">
          <dt>GitHub access</dt>
          <dd>{grant ? `${grant.state}${grant.last_error ? ` — ${grant.last_error}` : ""}` : "Not granted"}</dd>
        </div>
        <div className="stat">
          <dt>License token</dt>
          <dd>
            {entitlement?.active && entitlement.license_token ? (
              <code className="token">{entitlement.license_token}</code>
            ) : (
              "Issued after the subscription is active"
            )}
          </dd>
        </div>
      </dl>

      <div className="actions" style={{ margin: "1.5rem 0" }}>
        <ClaimButton />
        <PortalButton />
        <a className="button secondary" href="/pricing">Change plan</a>
      </div>

      {entitlement?.active ? (
        <>
          <h2>Install in Claude Code</h2>
          <ol className="steps">
            <li>Accept the GitHub team or collaborator invite.</li>
            <li>Run <code>gh auth login</code> (or load an SSH key).</li>
            <li>Set <code>CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1</code> if you do not use SSH.</li>
            <li>In Claude Code: <code>/plugin marketplace add {marketplace}</code></li>
            <li>Then: <code>/plugin install {installRef}</code></li>
            <li>
              Store the license token as <code>DOCTORAL_BRAIN_LICENSE_TOKEN</code> in your environment.
            </li>
          </ol>
        </>
      ) : (
        <p>
          Subscribe on the <a href="/pricing">pricing page</a>. After Stripe confirms, use
          Refresh access to send the GitHub invite.
        </p>
      )}
    </main>
  );
}
