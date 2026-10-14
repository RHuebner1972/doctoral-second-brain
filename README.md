# Doctoral Second Brain

A paid Claude Code plugin for individual doctoral learners — from first-year coursework through dissertation defense.

**Install requires an active subscription.** The plugin source is private. There is no free marketplace install.

| Plan | Price |
|---|---|
| Monthly | $29 / month |
| Annual | $199 / year |

Subscribe, connect GitHub, and install from the private marketplace. See [docs/INSTALL.md](docs/INSTALL.md).

## How access works

1. Sign in with GitHub on the billing site (`apps/billing`).
2. Pay in Stripe Checkout. Entitlement `doctoral_brain_full` activates only after Stripe confirms the subscription.
3. The billing app invites your GitHub account to the private plugin team (read only).
4. In Claude Code: `/plugin marketplace add <private-owner/repo>` then `/plugin install doctoral-brain@doctoral-brain`.
5. Canceling removes GitHub access at the end of the paid period (plus a 3-day grace if a renewal is past due).

Claude’s plugin marketplace cannot charge money. Access control is the private repository plus Stripe entitlements.

## Skills

Once installed, invoke a skill with `/doctoral-brain:<skill-name>`. The library covers research and scholarship (including problem-statement lenses), writing, planning, focus and wellbeing, defense, publication, and second-brain knowledge work. Full registry: [CLAUDE.md](CLAUDE.md).

## Operator docs

| Doc | Purpose |
|---|---|
| [docs/LAUNCH.md](docs/LAUNCH.md) | Launch sequence and end-to-end test |
| [docs/STRIPE-SETUP.md](docs/STRIPE-SETUP.md) | Products, prices, portal, webhooks |
| [docs/GITHUB-ACCESS.md](docs/GITHUB-ACCESS.md) | Private repo and team invites |
| [docs/INSTALL.md](docs/INSTALL.md) | Student install |
| [TERMS.md](TERMS.md) / [LICENSE](LICENSE) / [docs/REFUND-POLICY.md](docs/REFUND-POLICY.md) | Commercial terms |

## License

Commercial end-user license for active individual subscribers. Not MIT. See [LICENSE](LICENSE).
