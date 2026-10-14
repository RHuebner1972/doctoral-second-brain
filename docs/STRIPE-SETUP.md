# Stripe products, prices, and Customer Portal

Use a **separate Stripe sandbox** for local development. Do not build against live keys until the end-to-end checklist in [LAUNCH.md](LAUNCH.md) passes.

Recommended catalog (one product, two billing intervals — not two tiers):

| Plan | Amount | Interval | Entitlement |
|---|---|---|---|
| Doctoral Second Brain — Monthly | $29.00 USD | month | `doctoral_brain_full` |
| Doctoral Second Brain — Annual | $199.00 USD | year | `doctoral_brain_full` |

## Create the catalog

From `apps/billing`:

```bash
cp .env.example .env.local
# set STRIPE_SECRET_KEY to a sandbox restricted key (rk_test_...)
npm run stripe:setup
```

The script creates the product and prices if they do not already exist (matched by `lookup_key`), then prints IDs to put in `.env.local`:

```
STRIPE_PRICE_MONTHLY=price_...
STRIPE_PRICE_ANNUAL=price_...
```

It also upserts a Customer Portal configuration that allows:

- payment method updates
- invoice history
- cancel at period end
- switching between the monthly and annual prices

Copy the portal configuration id if you pin one:

```
STRIPE_PORTAL_CONFIGURATION_ID=bpc_...
```

## Restricted API key

Create a [restricted key](https://docs.stripe.com/keys#manage-your-api-keys) with:

- Checkout Sessions: write
- Customers: write
- Subscriptions: read
- Invoices: read
- Customer Portal: write
- Webhook Endpoints: read (optional)

Never use a `sk_live_` key in git or in the browser.

## Webhooks

Endpoint: `https://<your-billing-host>/api/stripe/webhook`

Subscribe only to events the app handles:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`
- `charge.refunded`
- `charge.dispute.created`

Locally:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Put the signing secret in `STRIPE_WEBHOOK_SECRET`.

The handler verifies the signature on the raw body, dedupes by event id, then **retrieves** the subscription from Stripe before changing entitlements. The checkout success page never grants GitHub access.

## Customer Portal

In the Stripe Dashboard, enable the Customer Portal and allow customers to update payment methods and cancel. The setup script creates a matching configuration; the dashboard “Manage billing” button opens a portal session for the signed-in Stripe customer.

## Tax

If you will charge US or EU students, enable [Stripe Tax](https://docs.stripe.com/billing/taxes/collect-taxes) and add an active registration **before** turning on `STRIPE_AUTOMATIC_TAX=true`. Without a registration, Stripe calculates $0 tax and does not error. The app leaves automatic tax **off** until that env flag is set.
