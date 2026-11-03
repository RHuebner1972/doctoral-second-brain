# Install Doctoral Second Brain (subscribers)

You need an **active subscription** and an accepted GitHub invite. The public internet cannot install this plugin.

## 1. Subscribe and claim access

1. Sign in with GitHub on the billing site.
2. Choose Monthly ($29) or Annual ($199).
3. After Stripe confirms payment, open **Account** and click **Refresh access**.
4. Accept the GitHub team or collaborator invitation (email or github.com/notifications).

## 2. Install with one line

The billing site serves an installer at `/install.sh` and `/install.ps1`. The dashboard shows the exact line for your deployment. It checks for Claude Code and the GitHub CLI, signs you in to GitHub if needed, confirms your account can see the private repo, adds the marketplace, installs the plugin, and saves `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1` (and your license token, if you pass one).

```bash
# macOS / Linux / WSL
curl -fsSL https://<billing-site>/install.sh | bash
# with the license token from your dashboard:
curl -fsSL https://<billing-site>/install.sh | bash -s -- --token <token>
```

```powershell
# Windows PowerShell
irm https://<billing-site>/install.ps1 | iex
```

If the script cannot finish the install from the command line (older Claude Code builds have no `claude plugin` subcommand), it prints the two slash commands to paste inside Claude Code.

Then start Claude Code and run `/doctoral-brain:setup` once. It writes your Learner Profile (`~/.doctoral-brain/profile.md`) so the skills stop asking about your degree, field, methodology, and style guide.

## 3. Manual install (alternative)

Claude Code uses the git credentials already on your machine. It will not prompt for a password.

```bash
gh auth login
gh auth setup-git
```

If you do not use SSH keys:

```bash
# Windows PowerShell (user-level)
setx CLAUDE_CODE_PLUGIN_PREFER_HTTPS "1"
```

```bash
export CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1
```

Confirm you can clone (replace with the private repo you were invited to):

```bash
gh repo view RHuebner1972/doctoral-second-brain
```

In Claude Code:

```
/plugin marketplace add RHuebner1972/doctoral-second-brain
/plugin install doctoral-brain@doctoral-brain
```

Optionally store your license token:

```bash
# Windows PowerShell
setx DOCTORAL_BRAIN_LICENSE_TOKEN "your-token"
# macOS / Linux
export DOCTORAL_BRAIN_LICENSE_TOKEN="your-token"
```

Invoke a skill with `/doctoral-brain:<skill-name>`.

## 4. Stay updated

While your subscription is active:

```
/plugin marketplace update
```

If you cancel, GitHub access is removed at the end of the paid period (or after a 3-day failed-payment grace). Updates and reinstalls will fail. Do not share the skill files.

## Troubleshooting

| Symptom | What to do |
|---|---|
| Checkout succeeded but no invite | Wait for the webhook, then **Refresh access** on the dashboard. Do not treat the success page as proof. |
| Invite never arrived | Confirm the GitHub account you signed in with. Check spam for GitHub notifications. |
| `Could not clone` / 404 | Invite not accepted, or subscription inactive. |
| Installer says your account cannot see the repo | Same cause; accept the invite with the GitHub account you used on the billing site, or click **Refresh access**. |
| Skills keep asking about my program | Run `/doctoral-brain:setup`; check `~/.doctoral-brain/profile.md` exists and a new session was started. |
| HTTPS clone asks for a password | Run `gh auth setup-git` and set `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1`. |
