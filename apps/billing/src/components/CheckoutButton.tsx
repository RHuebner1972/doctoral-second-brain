"use client";

import { useState } from "react";

export function CheckoutButton({
  interval,
  label,
}: {
  interval: "month" | "year";
  label: string;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function start() {
    setPending(true);
    setError(null);
    const response = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interval }),
    });
    const data = (await response.json()) as { url?: string; error?: string };
    if (!response.ok || !data.url) {
      setError(data.error ?? "Checkout could not start.");
      setPending(false);
      return;
    }
    window.location.href = data.url;
  }

  return (
    <div>
      <button className="button" type="button" onClick={start} disabled={pending}>
        {pending ? "Opening checkout…" : label}
      </button>
      {error ? <p className="status-bad">{error}</p> : null}
    </div>
  );
}
