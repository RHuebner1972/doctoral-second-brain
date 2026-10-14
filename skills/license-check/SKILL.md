---
name: license-check
description: Soft-check whether this Doctoral Second Brain install has an active subscriber license token. Honesty tooling, not DRM.
when_to_use: Use when the user asks if their plugin license is valid, their subscription status, or whether they need to renew access.
phase: all
output_type: [checklist, reflection]
---

# License Check

This skill is a **soft reminder**, not enforcement. Skill files already on disk remain readable after a subscription ends. Do not claim you can lock the plugin locally.

## Process

1. Look for `DOCTORAL_BRAIN_LICENSE_TOKEN` in the environment or a local note the student pasted.
2. If the token is **missing**, say:
   - Access to updates and reinstalls requires an active individual subscription.
   - They should sign in to the billing dashboard, confirm `doctoral_brain_full` is active, copy the license token, and store it as `DOCTORAL_BRAIN_LICENSE_TOKEN`.
   - GitHub team access is what actually gates `git clone` and `/plugin marketplace update`.
3. If a token **is present**, treat it as a claim of purchase only. Do not invent a validation result unless the student asks you to open their dashboard and they provide a current status.
4. If they say they canceled, tell them:
   - Updates stop when the paid period (plus the 3-day `past_due` grace) ends.
   - Local copies must not be shared or posted.
   - Renewing and using **Refresh access** restores the GitHub invite.

## Remember / decide / do next

- Remember: this check cannot revoke files already installed.
- Decide: whether they need to renew or just set the token.
- Do next: open the billing dashboard or set the environment variable.
