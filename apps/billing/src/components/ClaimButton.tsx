"use client";

import { useState } from "react";

export function ClaimButton() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function claim() {
    setPending(true);
    setMessage(null);
    const response = await fetch("/api/github/claim", { method: "POST" });
    const data = (await response.json()) as { ok?: boolean; error?: string };
    setMessage(data.ok ? "Access refreshed from Stripe. Check GitHub for the invite." : data.error ?? "Claim failed.");
    setPending(false);
    if (data.ok) window.location.reload();
  }

  return (
    <div>
      <button className="button" type="button" onClick={claim} disabled={pending}>
        {pending ? "Checking Stripe…" : "Refresh access"}
      </button>
      {message ? <p>{message}</p> : null}
    </div>
  );
}
