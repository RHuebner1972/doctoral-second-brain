# Install Doctoral Second Brain (subscribers)

You need an **active subscription** and an accepted GitHub invite. The public internet cannot install this plugin.

## 1. Subscribe and claim access

1. Sign in with GitHub on the billing site.
2. Choose Monthly ($29) or Annual ($199).
3. After Stripe confirms payment, open **Account** and click **Refresh access**.
4. Accept the GitHub team or collaborator invitation (email or github.com/notifications).
5. Copy your license token and set it in your environment:

```bash
# Windows PowerShell
setx DOCTORAL_BRAIN_LICENSE_TOKEN "your-token"
```

```bash
# macOS / Linux
export DOCTORAL_BRAIN_LICENSE_TOKEN="your-token"
```

## 2. Let Claude Code clone a private repo

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

## 3. Add the marketplace and install

In Claude Code:

```
/plugin marketplace add RHuebner1972/doctoral-second-brain
/plugin install doctoral-brain@doctoral-brain
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
| HTTPS clone asks for a password | Run `gh auth setup-git` and set `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1`. |
