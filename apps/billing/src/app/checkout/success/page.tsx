export default function CheckoutSuccessPage() {
  return (
    <main className="panel">
      <h1>Payment submitted</h1>
      <p>
        Stripe still has to confirm the subscription. Access is not granted from this
        page. Open your account, wait a few seconds, then use Refresh access if the
        GitHub invite has not arrived.
      </p>
      <div className="actions">
        <a className="button" href="/dashboard">Go to your account</a>
      </div>
    </main>
  );
}
