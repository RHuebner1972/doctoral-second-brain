export default function TermsPage() {
  return (
    <main className="section legal">
      <h1>Terms of Service</h1>
      <p>
        Doctoral Second Brain is a paid individual subscription. By checking out or
        installing the plugin you agree to the End User License Agreement, these terms,
        and the refund policy.
      </p>
      <p>
        Full text lives with the plugin source: <a href="https://github.com/RHuebner1972/doctoral-second-brain/blob/main/TERMS.md">TERMS.md</a>,{" "}
        <a href="https://github.com/RHuebner1972/doctoral-second-brain/blob/main/LICENSE">LICENSE</a>, and{" "}
        <a href="https://github.com/RHuebner1972/doctoral-second-brain/blob/main/docs/REFUND-POLICY.md">refund policy</a>.
      </p>
      <p>
        Entitlement <code>doctoral_brain_full</code> is active when Stripe reports
        <code>active</code> or <code>trialing</code>, plus a 3-day grace if a renewal is
        <code>past_due</code>. Canceling ends updates when the paid period expires.
        Local copies must not be shared.
      </p>
      <p>Questions: <a href="mailto:rich.huebner@nantasket.ai">rich.huebner@nantasket.ai</a></p>
    </main>
  );
}
