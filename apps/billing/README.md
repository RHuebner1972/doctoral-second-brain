# Doctoral Brain billing

Subscriber site for Doctoral Second Brain: GitHub sign-in, Stripe Checkout, entitlements, and private repository access.

## Local setup

1. Create a Stripe sandbox and a GitHub OAuth app (callback `http://localhost:3000/api/auth/callback/github`).
2. Provision Postgres (local or Supabase) and copy `.env.example` to `.env.local`.
3. Generate `AUTH_SECRET` (`openssl rand -base64 32`).
4. Install and migrate:

```bash
npm install
npx dotenv -e .env.local -- npm run db:migrate
npx dotenv -e .env.local -- npm run stripe:setup
```

5. Copy the printed Stripe price IDs into `.env.local`.
6. Forward webhooks: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
7. `npm run dev`

Do not grant plugin access from the checkout success page. Confirm via webhook or **Refresh access**, which retrieves the subscription from Stripe.

## Deploy

Deploy `apps/billing` to Vercel. Set the same environment variables. Point the Stripe webhook at `/api/stripe/webhook`. After an active Stripe Tax registration exists, you may set `STRIPE_AUTOMATIC_TAX=true`.
