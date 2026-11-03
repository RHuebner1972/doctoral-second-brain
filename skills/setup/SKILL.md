---
name: setup
description: Use when a learner first installs Doctoral Second Brain, says "set up," "set me up," "start here," "update my profile," or "you keep asking me the same questions," or when a skill needs degree type, field, methodology, phase, or style guide and no Learner Profile is in context. Creates or updates the Learner Profile that every other skill reads first.
---

# Setup — the Learner Profile

## Purpose

Ask the stable facts about the learner and their study once, write them to a profile file, and let every other skill read that file instead of re-asking. The profile is loaded into context automatically at the start of each Claude Code session by the plugin's SessionStart hook.

## Where the profile lives

- **Default:** `~/.doctoral-brain/profile.md` — follows the learner across projects.
- **Project override:** `.doctoral-brain/profile.md` in the current working folder — use when the learner keeps more than one study, or shares a machine. If both exist, the project file wins.

Ask which they want only if the learner mentions more than one study or a shared machine; otherwise write the default.

## Process

### 1. Check what exists

Look for the profile at both paths. If one exists, read it, show it to the learner in a short table, and ask what to change. Do not re-ask what it already answers.

### 2. Interview — one question block, not a quiz

Ask these together, in one message, and tell the learner they can skip any line:

1. Degree and program (PhD / EdD / DBA / other; institution; department or school)
2. Dissertation working title, or the topic in one sentence
3. Field and sub-field
4. Current phase: Foundations · Proposal · Data collection · Analysis & writing · Defense & publication
5. Methodology and design, if chosen (e.g., qualitative phenomenology; quantitative correlational survey; convergent mixed methods)
6. Theoretical or conceptual framework, if chosen
7. Style guide and edition the program requires (default APA 7th); any program template or chapter model (default five-chapter)
8. Chair and committee: names optional; what matters is known preferences or recurring feedback (e.g., "chair wants every claim cited," "methodologist dislikes passive voice")
9. Key deadlines in the next six months
10. How they like to work with Claude: level of hand-holding, tone, preferred output length, anything to always or never do

### 3. Write the profile

Write the file in exactly this shape. Omit any line the learner skipped rather than inventing a value.

```markdown
# Learner Profile — Doctoral Second Brain
<!-- Written by /doctoral-brain:setup. Edit freely; skills read this first. -->
updated: <YYYY-MM-DD>

## Learner
- Degree: <PhD | EdD | DBA | other> · <institution> · <school/department>
- Field: <field> / <sub-field>
- Phase: <Foundations | Proposal | Data collection | Analysis & writing | Defense & publication>

## Study
- Working title: <title or one-sentence topic>
- Methodology: <approach and design, or "undecided">
- Framework: <theory or conceptual framework, or "undecided">
- Research questions: <numbered, if written>

## Program conventions
- Style guide: <APA 7th | other>
- Chapter model: <five-chapter | other; name of template if any>
- Other requirements: <anything the program mandates>

## Committee
- Chair preferences: <known preferences or recurring feedback>
- Committee notes: <per member, if useful>

## Deadlines
- <date>: <milestone>

## Working preferences
- <how the learner wants Claude to work with them>
```

### 4. Confirm and explain

Show the written profile once. Then tell the learner, in three sentences:

- the file path, and that they can edit it directly at any time;
- that it loads automatically at the start of each session, so skills will stop re-asking;
- to run `/doctoral-brain:setup` again when the phase, methodology, or committee changes.

## How other skills use the profile

Every skill in this plugin opens with a *Learner Profile* note: if the profile is in context, the skill uses its values and does not re-ask them; if the skill needs a value the profile lacks, it asks for that value only. The profile is context, not a script — a learner's message in the conversation always overrides it.

## Privacy

The profile holds academic facts about the learner's program and study. Do not write health, financial, or personal-life details into it, even if the learner mentions them during setup; those belong in the conversation, not in a file skills read on every session.

## Remember / decide / do next

- Remember: the profile is the single place stable facts live.
- Decide: default path or project path.
- Do next: write the file, confirm it, and point the learner at the first skill that fits their phase (e.g., `research-gap` for Foundations; `problem-statement-review` for Proposal; `writing-session-plan` for Analysis & writing).
