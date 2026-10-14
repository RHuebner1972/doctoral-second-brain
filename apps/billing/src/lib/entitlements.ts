import { PAST_DUE_GRACE_DAYS } from "./env";

export const ACTIVE_STATUSES = new Set(["active", "trialing"]);

export function computeGraceUntil(input: {
  status: string;
  existingGraceUntil?: Date | null;
  now?: Date;
}): Date | null {
  const now = input.now ?? new Date();
  if (input.status !== "past_due") return null;
  if (input.existingGraceUntil) return input.existingGraceUntil;
  return new Date(now.getTime() + PAST_DUE_GRACE_DAYS * 24 * 60 * 60 * 1000);
}

export function isEntitlementActive(input: {
  status: string;
  graceUntil?: Date | null;
  now?: Date;
}): boolean {
  if (ACTIVE_STATUSES.has(input.status)) return true;
  if (input.status !== "past_due" || !input.graceUntil) return false;
  return (input.now ?? new Date()) < input.graceUntil;
}

export function pickBestSubscription<T extends { status: string; graceUntil?: Date | null }>(
  rows: T[],
  now = new Date(),
): T | null {
  const active = rows.find((row) => isEntitlementActive({ ...row, now }));
  return active ?? rows[0] ?? null;
}
