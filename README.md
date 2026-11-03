# Doctoral Second Brain

A paid Claude Code plugin for individual doctoral learners — from first-year coursework through dissertation defense.

**Install requires an active subscription.** The plugin source is private. There is no free marketplace install.

| Plan | Price |
|---|---|
| Monthly | $29 / month |
| Annual | $199 / year |

Subscribe, connect GitHub, accept the invite, then paste one line into a terminal (the dashboard shows it):

```bash
curl -fsSL https://<billing-site>/install.sh | bash      # macOS / Linux
irm https://<billing-site>/install.ps1 | iex             # Windows PowerShell
```

Then, in Claude Code, run `/doctoral-brain:setup` once. Full steps and the manual path: [docs/INSTALL.md](docs/INSTALL.md).

## How access works

1. Sign in with GitHub on the billing site (`apps/billing`).
2. Pay in Stripe Checkout. Entitlement `doctoral_brain_full` activates only after Stripe confirms the subscription.
3. The billing app invites your GitHub account to the private plugin team (read only).
4. In Claude Code: `/plugin marketplace add <private-owner/repo>` then `/plugin install doctoral-brain@doctoral-brain`.
5. Canceling removes GitHub access at the end of the paid period (plus a 3-day grace if a renewal is past due).

Claude’s plugin marketplace cannot charge money. Access control is the private repository plus Stripe entitlements.

## Skills

Once installed, invoke a skill with `/doctoral-brain:<skill-name>`. The library covers research and scholarship (including problem-statement lenses), writing, planning, focus and wellbeing, defense, publication, and second-brain knowledge work. Full registry: [CLAUDE.md](CLAUDE.md).

## What is in 1.3.0

- **Learner Profile.** `/doctoral-brain:setup` writes `~/.doctoral-brain/profile.md` once; a SessionStart hook loads it every session, and every skill reads it instead of re-asking about degree, field, methodology, phase, style guide, and committee.
- **Independent six-lens review.** `/doctoral-brain:problem-statement-review` dispatches a subagent that runs Lenses 1–6 in fixed order in a fresh context and returns one consolidated memo. Diagnoses only; never rewrites.
- **Self-check on drafting skills.** Problem statement, research questions, literature review, chapter draft, Chapter 1, Methods, conclusions, and abstract now end with a required Self-check block (Passed / Fixed / Flagged / Confidence) scored against the skill's own checklist.
- **One-line installer.** The billing site serves `/install.sh` and `/install.ps1`; they check Claude Code and GitHub access, install the plugin, and save the HTTPS preference and license token.

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
