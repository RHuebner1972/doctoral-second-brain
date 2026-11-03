# Doctoral Second Brain — one-line installer (Windows PowerShell)
#
#   irm __APP_URL__/install.ps1 | iex
#   & ([scriptblock]::Create((irm __APP_URL__/install.ps1))) -Token <license-token>
#
# Steps: check Claude Code + GitHub CLI → sign in to GitHub → confirm the private
# repo is visible (what an active subscription grants) → add marketplace and
# install → save the HTTPS preference and optional license token.

param(
  [string]$Token = $env:DOCTORAL_BRAIN_LICENSE_TOKEN,
  [string]$Marketplace = $(if ($env:DOCTORAL_BRAIN_MARKETPLACE) { $env:DOCTORAL_BRAIN_MARKETPLACE } else { "RHuebner1972/doctoral-second-brain" }),
  [string]$PluginRef = $(if ($env:DOCTORAL_BRAIN_PLUGIN_REF) { $env:DOCTORAL_BRAIN_PLUGIN_REF } else { "doctoral-brain@doctoral-brain" }),
  [string]$Dashboard = $(if ($env:DOCTORAL_BRAIN_DASHBOARD) { $env:DOCTORAL_BRAIN_DASHBOARD } else { "__DASHBOARD_URL__" })
)

$ErrorActionPreference = "Stop"
function Step($t) { Write-Host "`n$t" -ForegroundColor White }
function Ok($t)   { Write-Host "  [ok] $t" -ForegroundColor Green }
function Warn($t) { Write-Host "  [!]  $t" -ForegroundColor Yellow }
function Fail($t) { Write-Host "  [x]  $t" -ForegroundColor Red; exit 1 }
function Have($c) { return [bool](Get-Command $c -ErrorAction SilentlyContinue) }

Write-Host "Doctoral Second Brain installer" -ForegroundColor White

Step "1/5  Checking prerequisites"
if (Have "claude") { Ok "Claude Code found" } else { Fail "Claude Code is not installed. Install it first (https://docs.claude.com/en/docs/claude-code/setup), then re-run." }
if (-not (Have "gh")) {
  if (Have "winget") { Write-Host "  Installing GitHub CLI with winget..."; winget install --id GitHub.cli -e --silent | Out-Null }
  if (-not (Have "gh")) { Fail "Install the GitHub CLI from https://cli.github.com, open a new PowerShell window, and re-run." }
}
Ok "GitHub CLI found"

Step "2/5  GitHub sign-in"
gh auth status 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "  Not signed in. Opening GitHub sign-in (use the SAME account you used on the billing site)..."
  gh auth login --hostname github.com --git-protocol https --web
  if ($LASTEXITCODE -ne 0) { Fail "GitHub sign-in did not complete." }
}
gh auth setup-git | Out-Null
Ok "Signed in; git will use your GitHub sign-in"
[Environment]::SetEnvironmentVariable("CLAUDE_CODE_PLUGIN_PREFER_HTTPS", "1", "User")
$env:CLAUDE_CODE_PLUGIN_PREFER_HTTPS = "1"
Ok "CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1 saved for your user"

Step "3/5  Checking subscriber access"
gh repo view $Marketplace --json name 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "  Your GitHub account cannot see $Marketplace yet. Usual causes:" -ForegroundColor Yellow
  Write-Host "    - The GitHub invite has not been accepted (github.com/notifications or email)."
  Write-Host "    - The invite went to a different GitHub account than the one signed in here."
  Write-Host "    - Payment not confirmed yet: open $Dashboard and click Refresh access."
  Fail "Fix one of the above, then re-run."
}
Ok "Your GitHub account can see $Marketplace"

Step "4/5  Installing the plugin"
$viaCli = $false
claude plugin --help 2>$null | Out-Null
if ($LASTEXITCODE -eq 0) {
  claude plugin marketplace add $Marketplace 2>$null | Out-Null
  if ($LASTEXITCODE -ne 0) { claude plugin marketplace update 2>$null | Out-Null }
  claude plugin install $PluginRef 2>$null | Out-Null
  if ($LASTEXITCODE -eq 0) { $viaCli = $true }
}
if ($viaCli) { Ok "Plugin installed: $PluginRef" }
else {
  Warn "Could not finish the install from the command line. Paste these two lines inside Claude Code:"
  Write-Host ""
  Write-Host "      /plugin marketplace add $Marketplace"
  Write-Host "      /plugin install $PluginRef"
  Write-Host ""
}

Step "5/5  License token"
if ($Token) {
  [Environment]::SetEnvironmentVariable("DOCTORAL_BRAIN_LICENSE_TOKEN", $Token, "User")
  Ok "DOCTORAL_BRAIN_LICENSE_TOKEN saved for your user"
} else {
  Warn "No token given. Optional: copy it from $Dashboard and re-run with -Token <value>."
}

Write-Host "`nDone." -ForegroundColor White
Write-Host "  Open a new terminal, start Claude Code, and run:`n"
Write-Host "      /doctoral-brain:setup`n"
Write-Host "  That writes your Learner Profile once so the skills stop re-asking about your program."
Write-Host "  To update later, while subscribed:  /plugin marketplace update"
