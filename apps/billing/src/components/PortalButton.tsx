"use client";

import { useState } from "react";

export function PortalButton() {
  const [pending, setPending] = useState(false);

  async function openPortal() {
    setPending(true);
    const response = await fetch("/api/stripe/portal", { method: "POST" });
    const data = (await response.json()) as { url?: string; error?: string };
    if (data.url) {
      window.location.href = data.url;
      return;
    }
    setPending(false);
    alert(data.error ?? "Billing portal is not available yet.");
  }

  return (
    <button className="button secondary" type="button" onClick={openPortal} disabled={pending}>
      {pending ? "Opening…" : "Manage billing"}
    </button>
  );
}
