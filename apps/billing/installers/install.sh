#!/usr/bin/env bash
# Doctoral Second Brain — one-line installer (macOS / Linux / WSL)
#
#   curl -fsSL __APP_URL__/install.sh | bash
#   curl -fsSL __APP_URL__/install.sh | bash -s -- --token <license-token>
#
# What this does, in order, and stops at the first thing it cannot fix:
#   1. Confirms Claude Code and the GitHub CLI are installed.
#   2. Signs you in to GitHub if needed and lets git use that sign-in.
#   3. Confirms your GitHub account can see the private plugin repo
#      (this is what an active subscription grants).
#   4. Adds the private marketplace and installs the plugin.
#   5. Stores your license token (optional) and the HTTPS preference.
#
# Nothing here touches your subscription. Access is granted by the
# billing dashboard after Stripe confirms payment; this script only
# checks that it worked and finishes the install.

set -euo pipefail

MARKETPLACE="${DOCTORAL_BRAIN_MARKETPLACE:-RHuebner1972/doctoral-second-brain}"
PLUGIN_REF="${DOCTORAL_BRAIN_PLUGIN_REF:-doctoral-brain@doctoral-brain}"
DASHBOARD_URL="${DOCTORAL_BRAIN_DASHBOARD:-__DASHBOARD_URL__}"
TOKEN="${DOCTORAL_BRAIN_LICENSE_TOKEN:-}"

while [ $# -gt 0 ]; do
  case "$1" in
    --token) TOKEN="${2:-}"; shift 2 ;;
    --marketplace) MARKETPLACE="${2:-}"; shift 2 ;;
    --plugin) PLUGIN_REF="${2:-}"; shift 2 ;;
    -h|--help) sed -n '2,20p' "$0"; exit 0 ;;
    *) echo "Unknown option: $1" >&2; exit 2 ;;
  esac
done

bold()  { printf '\033[1m%s\033[0m\n' "$*"; }
ok()    { printf '  \033[32m✓\033[0m %s\n' "$*"; }
warn()  { printf '  \033[33m!\033[0m %s\n' "$*"; }
fail()  { printf '  \033[31m✗\033[0m %s\n' "$*" >&2; exit 1; }
have()  { command -v "$1" >/dev/null 2>&1; }

# Pick the shell rc file we may append to.
rc_file() {
  case "${SHELL:-}" in
    */zsh)  echo "$HOME/.zshrc" ;;
    */fish) echo "$HOME/.config/fish/config.fish" ;;
    *)      echo "$HOME/.bashrc" ;;
  esac
}
persist_export() {  # persist_export NAME VALUE
  local rc; rc="$(rc_file)"
  local line
  case "$rc" in
    *config.fish) line="set -gx $1 \"$2\"" ;;
    *)            line="export $1=\"$2\"" ;;
  esac
  mkdir -p "$(dirname "$rc")"; touch "$rc"
  if ! grep -qs "^[[:space:]]*\(export \|set -gx \)$1[= ]" "$rc"; then
    printf '\n# Doctoral Second Brain\n%s\n' "$line" >> "$rc"
  fi
  export "$1=$2"
}

bold "Doctoral Second Brain installer"
echo

# 1. Prerequisites -----------------------------------------------------------
bold "1/5  Checking prerequisites"
if have claude; then
  ok "Claude Code found ($(claude --version 2>/dev/null | head -n1 || echo 'version unknown'))"
else
  fail "Claude Code is not installed. Install it first (https://docs.claude.com/en/docs/claude-code/setup), then re-run this script."
fi

if have gh; then
  ok "GitHub CLI found"
else
  echo "  GitHub CLI (gh) is not installed. It is the simplest way to let Claude Code clone the private plugin."
  if have brew; then
    echo "  Installing with Homebrew..."; brew install gh >/dev/null && ok "GitHub CLI installed"
  elif have apt-get; then
    echo "  Install it with: sudo apt-get install gh   (https://github.com/cli/cli#installation)"; exit 1
  else
    fail "Install the GitHub CLI from https://cli.github.com and re-run."
  fi
fi

# 2. GitHub sign-in ----------------------------------------------------------
bold "2/5  GitHub sign-in"
if gh auth status >/dev/null 2>&1; then
  ok "Signed in to GitHub as $(gh api user -q .login 2>/dev/null || echo '?')"
else
  if [ -t 0 ]; then
    echo "  Not signed in. Opening GitHub sign-in (use the SAME account you used on the billing site)..."
    gh auth login --hostname github.com --git-protocol https --web
  else
    fail "Not signed in to GitHub and no terminal to prompt. Run:  gh auth login  then re-run this script."
  fi
fi
gh auth setup-git >/dev/null 2>&1 && ok "git will use your GitHub sign-in"
persist_export CLAUDE_CODE_PLUGIN_PREFER_HTTPS 1
ok "CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1 saved to $(rc_file)"

# 3. Access check ------------------------------------------------------------
bold "3/5  Checking subscriber access"
if gh repo view "$MARKETPLACE" --json name >/dev/null 2>&1; then
  ok "Your GitHub account can see $MARKETPLACE"
else
  echo "  Your GitHub account cannot see $MARKETPLACE yet." >&2
  echo "  Usual causes, in order:" >&2
  echo "    - The GitHub invite has not been accepted: check github.com/notifications or your email." >&2
  echo "    - The invite was sent to a different GitHub account than the one signed in here." >&2
  echo "    - Payment has not been confirmed yet: open $DASHBOARD_URL and click Refresh access." >&2
  fail "Fix one of the above, then re-run this script."
fi

# 4. Install -----------------------------------------------------------------
bold "4/5  Installing the plugin"
installed_via_cli=0
if claude plugin --help >/dev/null 2>&1; then
  if claude plugin marketplace add "$MARKETPLACE" >/dev/null 2>&1 || claude plugin marketplace update >/dev/null 2>&1; then
    if claude plugin install "$PLUGIN_REF" >/dev/null 2>&1; then
      installed_via_cli=1
      ok "Plugin installed: $PLUGIN_REF"
    fi
  fi
fi
if [ "$installed_via_cli" -eq 0 ]; then
  warn "Could not finish the install from the command line. Paste these two lines inside Claude Code:"
  echo
  echo "      /plugin marketplace add $MARKETPLACE"
  echo "      /plugin install $PLUGIN_REF"
  echo
fi

# 5. License token -----------------------------------------------------------
bold "5/5  License token"
if [ -n "$TOKEN" ]; then
  persist_export DOCTORAL_BRAIN_LICENSE_TOKEN "$TOKEN"
  ok "DOCTORAL_BRAIN_LICENSE_TOKEN saved to $(rc_file)"
else
  warn "No token given. Optional: copy it from $DASHBOARD_URL and re-run with  --token <value>  (or set DOCTORAL_BRAIN_LICENSE_TOKEN)."
fi

echo
bold "Done."
echo "  Open a new terminal (so the saved settings load), start Claude Code, and run:"
echo
echo "      /doctoral-brain:setup"
echo
echo "  That writes your Learner Profile once so the skills stop re-asking about your program."
echo "  To update later, while subscribed:  /plugin marketplace update"
