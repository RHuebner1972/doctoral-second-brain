#!/usr/bin/env bash
# Doctoral Second Brain — SessionStart hook.
# Prints the Learner Profile so it lands in Claude's context for the session.
# Project-level profile wins over the home-level one. Prints a one-line note
# when neither exists. Never fails the session: exit 0 on every path.

set -u

project_profile="${PWD}/.doctoral-brain/profile.md"
home_profile="${HOME}/.doctoral-brain/profile.md"

emit() {
  local path="$1"
  printf '<doctoral-brain-learner-profile source="%s">\n' "$path"
  # Cap at 200 lines so a runaway file cannot flood context.
  head -n 200 "$path"
  printf '\n</doctoral-brain-learner-profile>\n'
  printf 'Doctoral Second Brain: the Learner Profile above is in context. Skills use its values and do not re-ask them; a message from the learner in this conversation overrides it.\n'
}

if [ -r "$project_profile" ]; then
  emit "$project_profile"
elif [ -r "$home_profile" ]; then
  emit "$home_profile"
else
  printf 'Doctoral Second Brain: no Learner Profile found. When a skill needs degree type, field, methodology, phase, or style guide, offer /doctoral-brain:setup once rather than asking those questions inline.\n'
fi

exit 0
