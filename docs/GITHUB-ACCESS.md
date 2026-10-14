# GitHub access for subscribers

Paid students clone the plugin from a **private** repository. Stripe never talks to Claude. GitHub team membership is the install gate.

## 1. Make the plugin repository private

This repository *is* the commercial plugin (skills, `CLAUDE.md`, `.claude-plugin/`).

Before you take payments:

1. On GitHub: **Settings → General → Danger zone → Change repository visibility → Private**.
2. Confirm that anonymous `git clone` of `RHuebner1972/doctoral-second-brain` fails.
3. Create a GitHub **Team** in the owning organization (or use collaborator invites on a user-owned repo).

Recommended names:

| Resource | Value |
|---|---|
| Private plugin repo | `doctoral-second-brain` (this repo, set to private) or `doctoral-second-brain-pro` |
| Team slug | `doctoral-brain-subscribers` |
| Team permission on the repo | **Read** (pull only) |

If the plugin lives under a personal account rather than an org, the billing app falls back to **read-only collaborator** invites on the repo. Teams are preferred: one membership covers the marketplace repo and future private packages.

## 2. Create a fine-scoped token or GitHub App

The billing app needs permission to add and remove team members (or collaborators).

**GitHub App (preferred)** or a fine-grained PAT, scoped to:

- Repository access: the private plugin repo only
- Permissions:
  - **Administration**: Read and write (collaborator invites), *or*
  - **Members** (org): Read and write (team memberships)
  - **Metadata**: Read

Store the token as `GITHUB_TOKEN` in the billing app environment. Never commit it.

## 3. Environment variables

```
GITHUB_TOKEN=
GITHUB_OWNER=RHuebner1972
GITHUB_REPO=doctoral-second-brain
GITHUB_TEAM_SLUG=doctoral-brain-subscribers
```

Leave `GITHUB_TEAM_SLUG` empty only if you are inviting collaborators on a user-owned repo.

## 4. What the app does

| Entitlement state | GitHub action |
|---|---|
| `doctoral_brain_full` active + GitHub linked | Invite / add with **pull** access |
| Subscription canceled, unpaid past grace, refunded, or disputed | Remove from the team (or collaborator list) |

Invites are idempotent. Students must **accept** the GitHub email or notification before `git clone` works.

## 5. Student install after the invite

See [INSTALL.md](INSTALL.md). They need `gh auth login` or SSH configured so Claude Code can clone without an interactive password prompt. `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1` helps machines without SSH keys.
