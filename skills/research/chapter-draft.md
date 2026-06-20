---
name: chapter-draft
description: Generate scholarly first drafts of any dissertation chapter section using the learner's inputs.
triggers:
  - write chapter
  - draft this section
  - help me write
  - chapter 1
  - chapter 2
  - chapter 3
  - chapter 4
  - chapter 5
  - draft my introduction
  - write the background
  - help me draft
phase: proposal | analysis | defense
output_type: draft
---

# Chapter Draft Generator

## Overview

This skill generates scholarly first drafts of any dissertation section. It does not replace your thinking — it converts your inputs into properly structured, APA-formatted academic prose. You provide the substance; Claude provides the structure, transitions, scholarly register, and draft language. Always review, revise, and infuse your own voice.

---

## How to Use This Skill

**Tell Claude:**
1. Which chapter and section you need drafted
2. Your key inputs for that section (facts, claims, sources, ideas)
3. Your methodology and degree type (PhD/EdD/DBA)
4. Whether you want a full draft or a structured outline to write from

The more input you provide, the more accurate and usable the draft will be.

---

## Chapter 1 Sections

### Background of the Study
**What you need to provide:**
- The broad domain (e.g., higher education leadership, nursing turnover)
- Why it matters now (trends, statistics, current events)
- 2–3 foundational or authoritative sources

**Draft structure:**
```
[Opening context sentence — why this domain matters]
[Trend or statistic that signals urgency — cite source]
[Narrowing sentence — move from broad to specific]
[Bridge to problem statement — what this means for practice/scholarship]
```

### Purpose Statement
**Template:**
```
The purpose of this [qualitative/quantitative/mixed methods] [design] study
is to [explore/examine/describe/determine] [the phenomenon or relationship]
of [population] in [context]. At this stage of the research,
[key construct] will be generally defined as [working definition from the literature].
```

### Significance of the Study
**Structure:**
```
Theoretical significance: This study contributes to [body of literature] by [what it adds].
Practical significance: Findings may inform [practitioners] by [what they can do with this].
Policy significance (if applicable): Results may guide [policy area] by [what changes].
```

---

## Chapter 2 Sections

### Thematic Section Draft Protocol
**What you need to provide:**
- The theme name and what it covers
- 4–8 sources (abstracts, summaries, or key claims)
- The synthesis point you want to make

**Draft structure:**
```
[Opening claim sentence — what this theme establishes]
[Synthesis of foundational work — 2–3 sources]
[Development of the literature — how understanding evolved]
[Tensions or debates — where scholars disagree]
[Limitations of existing work — methodological or contextual gaps]
[Closing synthesis — what we know and what we don't; bridge to next section]
```

### Theoretical Framework Section Draft
Provide: framework name, originator, core propositions, 2–3 empirical studies using it, and how it connects to your RQs.

```
[Framework name] was developed by [Theorist(s)] as a means of explaining
[core claim]. The framework proposes that [key components/propositions].
Empirical support for this framework includes [cite 2–3 studies and findings].
[Framework name] is applicable to the current study because [specific connection
to your phenomenon, population, or RQs]. Specifically, [component X] informs
[your data collection / analysis approach].
```

---

## Chapter 3 Sections

### Research Design and Rationale
Provide: methodology, design name, your RQ, degree type.

```
A [qualitative/quantitative/mixed methods] [design] design was selected for this study.
[Design name] is appropriate when the goal is to [what this design is for],
which aligns with the purpose of this study to [restate purpose].
[Creswell & Poth, 2018; or other methodologist] defined [design] as [definition].
An alternative approach — [alternative design] — was considered but determined
to be less appropriate because [reason]. This design reflects a [worldview]
perspective, which holds that [brief philosophical stance].
```

### Participants and Sampling
Provide: who you're studying, inclusion/exclusion criteria, sample size, sampling method.

**Qualitative sampling:**
```
Participants for this study were [description]. Purposive sampling was employed
to ensure participants had direct experience with [phenomenon]. Inclusion criteria
required that participants [list criteria]. A sample of [N] participants was
deemed appropriate based on the principle of saturation (Fusch & Ness, 2015),
wherein data collection continues until no new themes emerge.
```

**Quantitative sampling:**
```
The target population consisted of [description]. A priori power analysis
using G*Power indicated that a minimum sample of [N] was required to detect
a [medium] effect size at α = .05 with 80% power. Participants were recruited
via [method].
```

---

## Chapter 4 Sections

### Qualitative Findings — Theme Presentation
Provide: theme name, 3–5 supporting quotes from your data, your interpretation.

```
**Theme [N]: [Theme Name]**

[Theme name] emerged as a prominent pattern in participant accounts,
reflecting [what the theme captures]. [N] of [total] participants
described experiences that aligned with this theme.

[Participant pseudonym] articulated this experience: "[direct quote]"
(Interview [N]). Similarly, [another participant] noted, "[quote]."

These accounts collectively suggest [interpretation — what this means,
how it connects to the phenomenon]. This finding aligns with [theoretical
framework or literature source], which proposed that [connection].
```

### Quantitative Results — Hypothesis Testing
Provide: hypothesis, test used, results (F/t/r statistic, p-value, effect size).

```
Research Question [N] asked: [restate RQ].
The null hypothesis stated that [H₀]. To test this hypothesis,
[statistical test] was conducted.

Results indicated [support for / failure to reject] the null hypothesis,
[test statistic] = [value], p = [value], [effect size] = [value].
[Interpretation — what this means in plain terms].
Table [N] presents the [descriptive statistics / regression coefficients /
comparison of means] for this analysis.
```

---

## Chapter 5 Sections

### Discussion of Findings
Provide: finding summary, relevant literature, your interpretation.

```
The finding that [summary of finding] is consistent with [Author, year],
who [what that source found/argued]. This alignment suggests that
[interpretation — what can be inferred or generalized].

However, this finding diverges from [Author, year], who reported [different finding].
This discrepancy may be explained by [contextual, methodological, or theoretical reason].

From the perspective of [theoretical framework], this finding supports the proposition
that [framework claim], thereby [extending / challenging / refining] the theoretical
understanding of [construct].
```

### Recommendations for Future Research
```
Several directions for future research emerge from this study's findings and limitations.

First, future researchers should examine [specific RQ or context] using
[method or population] to [what this would contribute]. Second, the finding
that [X] warrants replication in [different setting or population] to determine
whether [what you want to know]. Finally, longitudinal designs would allow
researchers to examine [process or change over time] that cross-sectional
studies cannot capture.
```

---

## Drafting Principles

- Draft in third person throughout (no "I" in most programs — check your institutional guidelines)
- Every factual claim needs a citation
- Use hedging language where appropriate: *may suggest*, *appears to*, *indicates*
- Avoid contractions, colloquialisms, and informal transitions
- Use the `academic-voice` skill to edit drafts for tone and register
- Always treat Claude's drafts as starting material — revise, add your voice, verify citations

---

## Next Steps

1. Save draft sections with version numbers: `chapter1-background-v1.md`
2. Use `academic-voice` to edit for scholarly register
3. Use `argument-builder` if a section feels logically weak
4. Use `peer-review-response` after committee feedback
