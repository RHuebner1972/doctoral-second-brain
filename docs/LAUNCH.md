# Launch sequence and cutover

Do this in order. Do not take live payments until the end-to-end checklist passes on a Stripe sandbox.

## 1. Legal (done in this repo)

- [LICENSE](../LICENSE) — commercial EULA
- [TERMS.md](../TERMS.md)
- [REFUND-POLICY.md](REFUND-POLICY.md)

Have counsel review before public launch.

## 2. GitHub

Follow [GITHUB-ACCESS.md](GITHUB-ACCESS.md):

- [ ] Repository visibility set to **Private**
- [ ] Team `doctoral-brain-subscribers` (or collaborator fallback) with **read** on this repo
- [ ] Fine-scoped token or GitHub App stored as `GITHUB_TOKEN`
- [ ] Anonymous clone fails

## 3. Stripe

Follow [STRIPE-SETUP.md](STRIPE-SETUP.md):

- [ ] Sandbox restricted key in the billing app
- [ ] `npm run stripe:setup` created monthly `$29` and annual `$199` prices
- [ ] Customer Portal allows cancel-at-period-end and plan switching
- [ ] Webhook endpoint subscribed to the listed events
- [ ] Stripe Tax left **off** until a registration is active

## 4. Billing app

From `apps/billing`:

- [ ] `DATABASE_URL` points at Postgres / Supabase
- [ ] `npm run db:migrate`
- [ ] GitHub OAuth callback matches `APP_URL`
- [ ] Deployed to Vercel with the same env vars
- [ ] `AUTH_SECRET` is unique per environment

## 5. End-to-end test (sandbox)

Use Stripe test card `4242 4242 4242 4242`.

1. Sign in with a **throwaway GitHub user** (not an org owner).
2. Subscribe monthly. Land on `/checkout/success`.
3. Confirm the dashboard still shows inactive until the webhook runs.
4. Wait for `checkout.session.completed` + `customer.subscription.created` (or click **Refresh access**).
5. Confirm `doctoral_brain_full` is active and a license token appears.
6. Accept the GitHub invite. Clone the private repo. Install in Claude Code per [INSTALL.md](INSTALL.md).
7. Cancel in the Customer Portal (at period end).
8. In Stripe, expire / void so the subscription becomes `canceled` immediately, or refund the invoice.
9. Confirm the webhook (or Refresh access) sets entitlement inactive and removes the GitHub member.
10. Confirm `/plugin marketplace update` and a fresh clone fail for that user.
11. Repeat once with `invoice.payment_failed` and verify the **3-day grace** keeps access, then revoke after `grace_until`.

If any step grants access from the success page alone, stop — that is a bug.

## 6. Soft launch

Invite a small doctoral cohort. Watch webhook logs, GitHub invites, and support email. Adjust pricing copy only; the entitlement key stays `doctoral_brain_full`.

## 7. Public cutover

- [ ] Switch Stripe keys to live (restricted `rk_live_`)
- [ ] New live webhook secret
- [ ] This repository is private
- [ ] [README.md](../README.md) does **not** document a free `/plugin marketplace add` against a public clone
- [ ] Optional: a separate public marketing repo or nantasket.ai page that lists skills and links to subscribe — **no skill source**
- [ ] Announce that MIT no longer applies; commercial terms do

## What launch does not solve

- Students can still copy files they already downloaded. The EULA and license-check skill cover that socially, not technically.
- Anthropic’s marketplace cannot collect your revenue.
- Cohort / university seats are out of scope until you add them on the same entitlement table.
