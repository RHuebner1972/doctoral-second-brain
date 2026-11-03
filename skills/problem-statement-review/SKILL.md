---
name: problem-statement-review
description: Use when a doctoral student pastes a draft problem statement and asks for a full review, "run all the lenses," "the complete lens protocol," "a committee read," or wants every weakness surfaced at once rather than one lens at a time. Dispatches the independent problem-statement-review agent, which runs Lenses 1–6 in fixed order in a fresh context and returns one consolidated memo. Diagnoses only; never rewrites.
---

# Problem Statement Review (all six lenses)

> **Learner Profile.** If a `<doctoral-brain-learner-profile>` block is in context, take degree type, field, phase, methodology, framework, style guide, and committee preferences from it and do not ask for them. Ask only for what this skill needs that the profile lacks. A message from the learner in this conversation overrides the profile. If no profile is in context and this skill needs those facts, offer `/doctoral-brain:setup` once, then continue with what the learner gives you.

## Purpose

Give the learner what a careful committee would give them: an independent read of the draft through all six lenses, in the order they are designed to run, by a reviewer who has not been part of drafting it.

The six lens skills are diagnostic and ordered (Mirror → Anatomy → Evidence Audit → Symptom or Root Cause → Assumption Excavation → Adversarial Committee). Run one at a time in the main conversation they work, but the order is held only by convention and the reviewer has already seen the drafting. This skill moves the whole protocol into a separate agent so the order is structural and the reviewer is cold.

## When to use this instead of a single lens

- The learner asks for "all the lenses," "the full protocol," "a complete review," or "what would a committee say."
- The learner is about to send the draft to their chair and wants everything surfaced first.
- The learner has run one or two lenses already and wants the rest done consistently.

Use a single lens skill instead when the learner names one lens, or wants to work through the lenses interactively.

## Process

1. **Confirm there is a draft.** If the learner has not pasted a problem statement, ask for it and stop. Do not run the review on a summary or a description of the draft.
2. **Collect context in one line** if the conversation has it or the Learner Profile is in context: degree type (PhD / EdD / DBA), field, intended methodology. Do not ask for it if it is absent; the review runs without it.
3. **Dispatch the reviewer.** Use the Agent tool with `subagent_type: problem-statement-review` (the plugin's agent). The prompt is exactly:

   ```
   Review the following draft problem statement through all six lenses in order and return the consolidated memo.

   Context: <the one-line context, or "none supplied">

   --- DRAFT BEGINS ---
   <the learner's draft, verbatim>
   --- DRAFT ENDS ---
   ```

   Pass the draft verbatim. Do not summarize it, correct it, or add notes about what you think of it.
4. **Return the memo unchanged.** Present the agent's memo to the learner as it came back. Add nothing above it; add at most two sentences below it on how to work through it (start with the Cross-lens findings; answer the closing questions before touching the draft).
5. **Fallback.** If the Agent tool is not available, say so in one sentence, then run the six lens skills yourself in order (`lens-1-mirror` through `lens-6-adversarial-committee`), and assemble the same memo format the agent uses. Do not skip lenses to save space.

## Hard constraints

- Never rewrite the learner's problem statement, in the dispatch or afterward.
- Never add sources, authors, or facts about the field.
- Never soften the memo. If the learner finds it harsh, that is the Adversarial Committee doing its job; point them to the Mirror and Anatomy sections, which are neutral.

## Remember / decide / do next

- Remember: the memo is a diagnosis, not a grade. ABSENT, UNCITED, and the three hardest questions are the work list.
- Decide: which Cross-lens finding to resolve first.
- Do next: answer the closing questions in writing, then revise, then run `jacobs-problem-statement-evaluator` if a scored rubric is wanted.
