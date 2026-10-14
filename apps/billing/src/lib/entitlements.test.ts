import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { computeGraceUntil, isEntitlementActive, pickBestSubscription } from "./entitlements";

describe("entitlement status", () => {
  it("treats active and trialing as entitled", () => {
    assert.equal(isEntitlementActive({ status: "active" }), true);
    assert.equal(isEntitlementActive({ status: "trialing" }), true);
  });

  it("revokes canceled and unpaid subscriptions", () => {
    assert.equal(isEntitlementActive({ status: "canceled" }), false);
    assert.equal(isEntitlementActive({ status: "unpaid" }), false);
    assert.equal(isEntitlementActive({ status: "incomplete" }), false);
  });

  it("keeps past_due active only during the stored grace window", () => {
    const now = new Date("2026-10-14T12:00:00Z");
    const future = new Date("2026-10-16T12:00:00Z");
    const past = new Date("2026-10-13T12:00:00Z");
    assert.equal(isEntitlementActive({ status: "past_due", graceUntil: future, now }), true);
    assert.equal(isEntitlementActive({ status: "past_due", graceUntil: past, now }), false);
    assert.equal(isEntitlementActive({ status: "past_due", now }), false);
  });

  it("pins grace_until on the first past_due event", () => {
    const now = new Date("2026-10-14T00:00:00Z");
    const existing = new Date("2026-10-15T00:00:00Z");
    assert.equal(computeGraceUntil({ status: "active", now }), null);
    assert.deepEqual(computeGraceUntil({ status: "past_due", existingGraceUntil: existing, now }), existing);
    const created = computeGraceUntil({ status: "past_due", now });
    assert.ok(created);
    assert.equal(created.toISOString(), "2026-10-17T00:00:00.000Z");
  });

  it("prefers an entitled subscription when several exist", () => {
    const now = new Date("2026-10-14T12:00:00Z");
    const best = pickBestSubscription(
      [
        { status: "canceled" },
        { status: "past_due", graceUntil: new Date("2026-10-16T00:00:00Z") },
      ],
      now,
    );
    assert.equal(best?.status, "past_due");
  });
});
