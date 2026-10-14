import { auth, signIn } from "@/auth";
import { CheckoutButton } from "@/components/CheckoutButton";

export default async function PricingPage() {
  const session = await auth();

  return (
    <main className="section">
      <h2>Individual subscription</h2>
      <p>One person, one GitHub account, full plugin access while the subscription is active.</p>
      <div className="price-grid">
        <article className="price">
          <p>Monthly</p>
          <strong>$29</strong>
          <p>Billed every month. Cancel in the billing portal.</p>
          {session ? (
            <CheckoutButton interval="month" label="Subscribe monthly" />
          ) : (
            <SignInFirst />
          )}
        </article>
        <article className="price">
          <p>Annual</p>
          <strong>$199</strong>
          <p>Two months free compared with paying monthly.</p>
          {session ? (
            <CheckoutButton interval="year" label="Subscribe annually" />
          ) : (
            <SignInFirst />
          )}
        </article>
      </div>
    </main>
  );
}

function SignInFirst() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/pricing" });
      }}
    >
      <button className="button" type="submit">Sign in with GitHub to subscribe</button>
    </form>
  );
}
