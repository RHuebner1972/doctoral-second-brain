---
name: advanced-literature-synthesis
description: Conduct meta-synthesis, systematic reviews, evidence mapping, and advanced literature reviews that synthesize across multiple studies and identify patterns at scale.
when_to_use: When you're synthesizing a large body of literature systematically, planning a meta-synthesis or meta-analysis, mapping evidence across a topic, or conducting a more rigorous literature review that goes beyond thematic summary.
phase: proposal
output_type: [framework, checklist, template, plan]
---

# Advanced Literature Synthesis: Meta-Synthesis, Systematic Reviews, and Evidence Mapping

Beyond a traditional narrative literature review lies a world of advanced synthesis methods that allow you to aggregate, compare, and interpret findings across multiple studies with rigor and transparency. This skill guides you through systematic review, meta-synthesis (for qualitative studies), meta-analysis (for quantitative studies), and evidence mapping—each a powerful way to answer "what does the research collectively say about this question?"

## When to Use Advanced Synthesis vs. Narrative Review

### Narrative Literature Review
**Best for:** Conceptual frameworks, exploratory questions, complex or emerging topics
- **Structure:** Thematic or chronological
- **Process:** Selective sampling of literature
- **Rigor:** Editorial (reviewer judgment)
- **Scope:** 30–100 studies typical
- **Output:** Scholarly argument about the state of the field

### Systematic Review / Meta-Analysis (Quantitative)
**Best for:** Questions with a clear comparison (e.g., "Does intervention X improve outcome Y?")
- **Structure:** Highly standardized protocol
- **Process:** Exhaustive searching, explicit inclusion/exclusion criteria
- **Rigor:** Statistical aggregation, bias assessment
- **Scope:** 10–100+ studies depending on available evidence
- **Output:** Pooled estimate of effect size with confidence intervals

### Meta-Synthesis (Qualitative)
**Best for:** Integrating qualitative findings to answer interpretive questions (e.g., "How do people experience phenomenon X?")
- **Structure:** Systematic protocol adapted for qualitative heterogeneity
- **Process:** Exhaustive searching, explicit sampling strategy
- **Rigor:** Transparent analysis, quality appraisal of included studies
- **Scope:** 10–50+ qualitative studies
- **Output:** Synthesized understanding, meta-themes, conceptual framework

### Evidence Mapping (Scoping Review)
**Best for:** Charting a broad topic where systematic review would be too narrow (e.g., "What does evidence say about school climate across contexts?")
- **Structure:** Broader scope, less depth per study
- **Process:** Systematic searching, mapping to framework
- **Rigor:** Transparent process, descriptive synthesis
- **Scope:** 50–200+ studies
- **Output:** Visual evidence map, categorized summary, gaps identified

---

## Part 1: Systematic Review Fundamentals

### 1.1 Anatomy of a Systematic Review

A systematic review follows an explicit, replicable protocol to minimize bias:

**Key Components:**

1. **Protocol Registration** (before you search)
   - Register your protocol with PROSPERO (prospero.crd.york.ac.uk)
   - State your research question, inclusion criteria, search strategy, outcomes
   - Prevents selective reporting; shows objectivity

2. **Research Question (PICO Format)**
   - **P**opulation: Who? (e.g., adults, teachers, low-income families)
   - **I**ntervention: What? (e.g., training program, policy, therapy)
   - **C**omparator: Against what? (e.g., standard care, no intervention)
   - **O**utcome: What are you measuring? (e.g., job satisfaction, student achievement)
   
   Example: *In secondary teachers (P), does professional development on culturally responsive teaching (I) versus standard PD (C) improve classroom inclusion practices (O)?*

3. **Inclusion/Exclusion Criteria** (operationalized, binary)
   
   | Category | Criteria | Rationale |
   |---|---|---|
   | **Study design** | Randomized controlled trials, quasi-experimental | High internal validity; comparable across studies |
   | **Participants** | Secondary teachers; 5+ years experience | Reduces heterogeneity; enough experience to assess impact |
   | **Intervention** | Minimum 2 days PD; culturally responsive focus | Sufficient dose; on-topic |
   | **Outcomes** | Measured classroom practices or student achievement | Observable, measurable effects |
   | **Language** | English-language publications | Feasibility (translation resources limited) |
   | **Time** | Published 2015–2025 | Recent evidence; current context |
   | **Setting** | Secondary schools (grades 6–12) in developed nations | Relevance to research question |
   | **Publication type** | Peer-reviewed journal articles | Quality gate |

4. **Search Strategy** (comprehensive, transparent)
   - Define databases (ERIC, PubMed, PsycINFO, etc.)
   - Write search strings with controlled vocabulary (MeSH, ERIC descriptors) + free text
   - Document number of results per database
   - Set date limits
   
   Example search string:
   ```
   (professional development OR training OR "in-service education") 
   AND (culturally responsive OR "culturally sustaining" OR "culturally relevant")
   AND (teacher* OR educator*)
   AND (classroom OR school)
   Filters: English, 2015–2025, peer-reviewed
   ```

5. **Study Selection** (two independent reviewers)
   - Title/abstract screening (both reviewers; resolve disagreements)
   - Full-text review (both reviewers; explicit exclusion reasons)
   - Calculate inter-rater agreement (Cohen's kappa ≥ 0.60)
   - Document PRISMA flow diagram (see below)

6. **Quality Appraisal** (bias risk assessment)
   - Use standard tool (e.g., Cochrane Risk of Bias tool, ROBINS-I)
   - Rate each study: low, some concerns, high risk
   - Don't exclude studies based on quality; note quality in analysis

7. **Data Extraction** (standardized form)
   - Study characteristics (author, year, setting, sample size)
   - Intervention details (duration, content, delivery)
   - Outcome measures (instrument, timing of measurement)
   - Results (effect size, confidence intervals, p-values)

8. **Analysis & Synthesis**
   - **Meta-analysis (if homogeneous):** Pool effect sizes, create forest plot
   - **Narrative synthesis (if heterogeneous):** Summarize by category, identify patterns

9. **PRISMA Checklist & Flow Diagram**
   - Use PRISMA 2020 checklist (27 items; ensures transparent reporting)
   - Flow diagram: databases searched → records identified → duplicates removed → records screened → full-text reviewed → studies included in synthesis

### 1.2 PRISMA Flow Diagram Template

```
                         ┌─────────────────────────────────────┐
                         │ Records identified from database     │
                         │ searching (n=1,247)                 │
                         │                                      │
                         │ Additional records identified by     │
                         │ hand-searching (n=43)                │
                         └─────────────────────────────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────────────────┐
                         │ Total records after deduplication   │
                         │ (n=1,180)                            │
                         └─────────────────────────────────────┘
                                      │
                    ┌─────────────────┴─────────────────┐
                    ▼                                   ▼
        ┌───────────────────┐          ┌───────────────────┐
        │ Records screened  │          │ Records excluded  │
        │ (n=1,180)         │          │ (n=945)            │
        └───────────────────┘          └───────────────────┘
                    │
                    ▼
        ┌───────────────────┐
        │ Full texts        │
        │ assessed for      │
        │ eligibility       │
        │ (n=235)           │
        └───────────────────┘
                    │
        ┌───────────┴──────────┐
        ▼                      ▼
┌────────────────┐    ┌───────────────────┐
│ Studies        │    │ Studies excluded  │
│ included in    │    │ (n=189) with      │
│ synthesis      │    │ reasons:          │
│ (n=46)         │    │ - Wrong outcome   │
└────────────────┘    │   (n=78)          │
        │             │ - No control      │
        ├─────────────┤   (n=67)          │
        │             │ - Study design    │
        │ Included in │   (n=34)          │
        │ meta-       │ - Not peer-       │
        │ analysis    │   reviewed (n=10) │
        │ (n=46)      │                   │
        └─────────────┘ └───────────────────┘
```

---

## Part 2: Meta-Analysis for Quantitative Evidence

### 2.1 When Meta-Analysis is Appropriate

**Yes, conduct meta-analysis if:**
- Studies measure the same outcome (or sufficiently similar comparisons)
- Effect sizes are reported (or can be calculated from data)
- Studies are sufficiently similar (not too heterogeneous)
- You have 5+ studies with extractable data

**No, don't conduct meta-analysis if:**
- Studies measure very different outcomes
- Heterogeneity is extreme (I² > 75% without explanation)
- Studies are from completely different contexts/populations
- Fewer than 5 studies with comparable data

### 2.2 Effect Size Calculation & Interpretation

**Common Effect Size Metrics:**

| Type | Formula | Interpretation | When Used |
|---|---|---|---|
| **Cohen's d** | (M₁ - M₂) / pooled SD | Standardized difference between means | Comparing group means; comparing across studies |
| **Correlation (r)** | — | Strength of relationship (-1 to +1) | Correlational studies; converting to d: d = 2r / √(1-r²) |
| **Odds Ratio (OR)** | (odds of outcome in group 1) / (odds in group 2) | Relative odds between groups | Binary outcomes; health/education interventions |
| **Risk Ratio (RR)** | (risk in group 1) / (risk in group 2) | Relative probability | Binary outcomes; more interpretable than OR for common outcomes |
| **Hedges' g** | Cohen's d adjusted for small samples | Like Cohen's d but less biased in small studies | Preferred for meta-analysis |

**Interpretation Guidelines (Cohen's d / Hedges' g):**
- 0.0–0.2: Small effect (barely noticeable)
- 0.2–0.5: Small-to-medium effect
- 0.5–0.8: Medium effect (practically meaningful)
- 0.8+: Large effect (substantial practical significance)

**Example Data Extraction for Meta-Analysis:**

| Study | Year | N (Intervention) | N (Control) | M₁ | SD₁ | M₂ | SD₂ | Cohen's d | 95% CI |
|---|---|---|---|---|---|---|---|---|---|
| Author A | 2022 | 45 | 48 | 72.3 | 10.1 | 68.9 | 11.4 | 0.31 | [0.02, 0.60] |
| Author B | 2021 | 120 | 118 | 65.2 | 8.5 | 61.3 | 9.2 | 0.44 | [0.20, 0.68] |
| Author C | 2020 | 67 | 65 | 78.1 | 7.3 | 74.6 | 8.1 | 0.46 | [0.15, 0.77] |

### 2.3 Forest Plot Creation & Interpretation

A forest plot displays effect sizes across studies visually:

```
Study                           Effect Size (Cohen's d) [95% CI]
═══════════════════════════════════════════════════════════════════

Author A (2022)                 ◆────────────────────────────
                                [-0.02            0.31            0.64]

Author B (2021)                   ◆──────────────────────────
                                  [0.20            0.44            0.68]

Author C (2020)                   ◆────────────────────────────
                                  [0.15            0.46            0.77]

───────────────────────────────────────────────────────────────────

Pooled Effect (Random Effects)    ◆────────────────────
                                  [0.25            0.41            0.57]

═══════════════════════════════════════════════════════════════════
```

**How to Read:**
- Diamond (◆) = point estimate of effect
- Horizontal line = confidence interval (if it crosses zero, not significant)
- Vertical line at 0 = no effect (neutral)
- Right of line = effect favors intervention
- Left of line = effect favors control

### 2.4 Heterogeneity Assessment (I²)

**What is I²?**
The proportion of variability in effect sizes due to differences between studies (not sampling error).

**Interpretation:**
- I² = 0–25%: Low heterogeneity (studies agree)
- I² = 25–50%: Low-to-moderate heterogeneity
- I² = 50–75%: Moderate-to-high heterogeneity
- I² = 75%+: High heterogeneity (studies very different)

**What to Do About Heterogeneity:**

**If low (I² < 50%):**
- Use fixed-effects model
- Report pooled effect with confidence interval
- Conclude effect is consistent across studies

**If moderate-to-high (I² > 50%):**
- Use random-effects model (more conservative)
- Investigate sources of heterogeneity (see subgroup analysis below)
- Consider meta-regression
- Consider NOT pooling if too extreme

### 2.5 Subgroup Analysis (Explaining Heterogeneity)

If studies differ, explore why:

**Question:** Does effect size differ by study characteristics?

**Examples:**
- Effect size by study quality (high vs. low risk of bias)
- Effect size by intervention duration (brief vs. intensive)
- Effect size by participant age (younger vs. older)
- Effect size by outcome type (knowledge vs. behavior)

**Subgroup Analysis Table:**

| Subgroup | N Studies | Pooled d | 95% CI | I² | Test for Subgroup Diff (p) |
|---|---|---|---|---|---|
| **By Intervention Duration** | | | | | |
| Brief (< 1 day) | 8 | 0.22 | [0.05, 0.39] | 34% | p = 0.03 |
| Moderate (1–5 days) | 15 | 0.48 | [0.31, 0.65] | 48% | |
| Intensive (> 5 days) | 23 | 0.61 | [0.45, 0.77] | 52% | |

**Interpretation:** Longer interventions have stronger effects. This explains some heterogeneity.

### 2.6 Publication Bias Assessment

**Problem:** Studies with positive findings are more likely to be published (file drawer problem).

**Assessment Methods:**

1. **Funnel Plot** (visual)
   ```
   Effect Size
        ↑
        │     ◆
        │   ◆   ◆
        │  ◆     ◆
        │ ◆       ◆
        │◆         ◆
        │──────────────→ Precision (1/SE)
        
   Symmetric (no bias)    Asymmetric (publication bias?)
   ```

2. **Egger's Test** (statistical)
   - Tests if small studies have disproportionately large effects
   - p < 0.05 suggests publication bias
   - Interpret cautiously; other factors can cause asymmetry

3. **Trim-and-Fill** (adjustment)
   - Estimates number of "missing" studies
   - Recalculates pooled effect if missing studies included
   - Shows sensitivity of conclusions to publication bias

---

## Part 3: Meta-Synthesis for Qualitative Evidence

### 3.1 When to Conduct Meta-Synthesis

Meta-synthesis is systematic synthesis of qualitative research findings—different from meta-analysis.

**Appropriate when:**
- Multiple qualitative studies address related questions
- Studies use diverse qualitative approaches (phenomenology, grounded theory, thematic analysis)
- Goal is synthesized understanding (not numerical aggregation)
- 8+ studies available (minimum for meaningful synthesis)

### 3.2 Meta-Synthesis Process

**Step 1: Systematic Search & Screening**
- Follow same search strategy as quantitative review
- Inclusion criteria: peer-reviewed qualitative studies on topic
- Screen by title/abstract, then full-text
- Document reasons for exclusion

**Step 2: Quality Appraisal**
- Use CASP Qualitative Checklist or similar tool
- Assess: research aims clear, design appropriate, data collection rigorous, analysis thorough, reflexivity addressed, ethical considerations, credibility of findings
- Don't exclude based on quality; note in synthesis

**Step 3: Data Extraction**
- Study characteristics: author, year, country, context
- Research question or aim
- Sample: participants, size, demographics
- Methodology: data collection (interviews, focus groups, observation), analysis approach
- Key findings: quotes, themes, conceptual categories
- Author interpretations and theoretical contributions

**Step 4: Synthesis Approaches**

**Approach A: Thematic Synthesis** (aggregating themes across studies)
1. List all themes/codes from each study
2. Group similar themes across studies
3. Identify meta-themes (patterns across themes)
4. Create synthesized narrative
5. Example output: "Teachers' experiences of inclusion cluster around three meta-themes: challenges (lack of training, resource constraints), supports (collaborative planning, admin backing), and student outcomes (social-emotional benefits, academic gains)"

**Approach B: Meta-Ethnography** (interpretive synthesis for ethnographic studies)
1. Extract key concepts from each ethnography
2. Identify relationships between concepts (analogies, contrasts)
3. Translate concepts across studies (what does "community" mean in study A vs. study B?)
4. Synthesize into higher-level interpretation
5. Example output: A conceptual model showing how institutional context shapes community engagement strategies across three schools

**Approach C: Grounded Theory Synthesis** (building conceptual framework)
1. Extract codes and categories from each study
2. Identify core category (overarching concept)
3. Show relationships between categories
4. Develop synthesized theory grounded in multi-study data
5. Example output: A process model showing how teacher identity develops through stages of pedagogical practice

**Approach D: Critical Interpretive Synthesis** (for complex, contested topics)
1. Identify conflicting or divergent findings across studies
2. Explore reasons for disagreement (context, methodology, epistemology)
3. Develop interpretation that accounts for diversity
4. Highlight unresolved tensions
5. Example output: "Research on student motivation shows competing perspectives: deficit-based studies emphasize lack of effort/ability; asset-based studies emphasize systemic barriers. Meta-synthesis suggests both operate simultaneously—student motivation is not binary but context-dependent."

### 3.3 Meta-Synthesis Quality Standards

| Standard | How to Achieve |
|---|---|
| **Transparency** | Document all decisions (search strategy, screening criteria, synthesis process) |
| **Systematicity** | Follow explicit protocol; use standardized tools |
| **Rigor** | Multiple reviewers; audit trail; clear reasoning |
| **Reflexivity** | Acknowledge researcher positionality; how might your assumptions shape synthesis? |
| **Coherence** | Synthesized interpretation should be coherent (internally consistent, logically structured) |
| **Relevance** | Findings should be meaningful to users (researchers, practitioners, policymakers) |

---

## Part 4: Evidence Mapping (Scoping Review)

### 4.1 When to Conduct an Evidence Map

Evidence mapping provides a broad, visual overview of evidence across a topic—less depth than systematic review, but greater breadth.

**Best for:**
- Emerging topics where evidence is scattered
- Topics too broad for single systematic review (e.g., "What interventions improve teacher retention?")
- Policy questions requiring comprehensive landscape overview
- Identifying gaps before conducting focused systematic review

### 4.2 Evidence Mapping Process (Simplified)

**1. Define the Question**
Broader than systematic review. Example: "What evidence exists on school climate interventions, in what contexts, and what outcomes do they measure?"

**2. Systematic Search**
Same rigor as systematic review: multiple databases, transparent search strings, documented results.

**3. Screening & Selection**
Title/abstract: include broadly unless clearly out of scope
Full-text: apply inclusion criteria (but looser than systematic review)
Document number of studies at each stage

**4. Data Extraction**
- Study characteristics (author, year, country, study design)
- Intervention/topic focus
- Outcome measures
- Study population
- Key findings (1–2 sentences)

**5. Categorization**
Create framework to organize evidence:

| Intervention Type | Target Population | Outcome Category | # Studies | Examples |
|---|---|---|---|---|
| **School-wide policies** | Elementary | School safety | 12 | [list authors] |
| | | Academic achievement | 8 | |
| | Secondary | School safety | 15 | |
| | | Academic achievement | 6 | |
| **Classroom practices** | Elementary | Social-emotional | 22 | |
| | | Academic | 18 | |
| | Secondary | Social-emotional | 14 | |
| | | Academic | 11 | |

**6. Visualization**
Create evidence map (visual summary):
- Bubble plot (x-axis: intervention type, y-axis: outcome type, bubble size: # studies)
- Heat map (showing concentration of evidence by intervention × outcome × population)
- Word cloud (frequent terms in intervention studies)

**7. Summary**
Narrative summary highlighting:
- How much evidence exists (# studies, design types)
- Where gaps are (combinations with few studies)
- What outcomes are measured (and what's missing)
- Recommendations for future research

---

## Part 5: Reporting Your Synthesis

### 5.1 Standard Structure for Synthesis Paper

**Title:** Clear, includes methodology and topic
Example: "Culturally Responsive Teaching and Teacher Efficacy: A Meta-Analysis of Quantitative Research"

**Abstract:**
- Background (problem, why it matters)
- Objective (research question)
- Methods (synthesis approach, # studies, databases)
- Results (pooled effect size OR main themes/meta-themes)
- Conclusions (what we learned, implications)

**Introduction:**
- Context (why this topic matters)
- Literature (prior reviews or related work)
- Gap (what this synthesis adds)
- Research question (explicit)

**Methods:**
- Protocol registration (if applicable)
- Search strategy (databases, search terms, date range, # results per database)
- Inclusion/exclusion criteria (and rationale)
- Study selection process (# reviewers, inter-rater agreement)
- Quality appraisal (tool used, ratings for each study)
- Data extraction process (standardized form)
- Analysis approach (meta-analysis, meta-synthesis, narrative synthesis)

**Results:**
- PRISMA flow diagram
- Study characteristics table (author, year, design, sample size, intervention, outcomes)
- Quality appraisal summary
- Synthesis findings (pooled effect with CI, forest plot for meta-analysis; meta-themes for meta-synthesis)
- Heterogeneity analysis
- Subgroup analysis results
- Publication bias assessment

**Discussion:**
- Summary of findings (relate back to research question)
- Comparison to prior reviews/literature
- Implications for practice
- Implications for research (what's still unknown)
- Limitations (quality of included studies, publication bias, generalizability)
- Conclusions

**References:**
- All included studies marked with [*] for easy identification

### 5.2 PRISMA Checklist (Key Items)

Use PRISMA 2020 checklist when reporting systematic review:

- [ ] Title: indicates systematic review or meta-analysis
- [ ] Abstract: structured, includes PICO, methods, results, conclusion
- [ ] Protocol: state if registered (PROSPERO); provide registration number and URL
- [ ] Information sources: specify databases, search dates, language
- [ ] Search strategy: complete, reproducible search terms
- [ ] Study selection: inclusion/exclusion criteria; how many reviewers; agreement measure
- [ ] Data extraction: standardized form; extracted items described
- [ ] Quality appraisal: tool used; items assessed; criteria for rating
- [ ] Synthesis methods: statistical (meta-analysis) or narrative; heterogeneity assessment
- [ ] Reporting bias assessment: method used (funnel plot, Egger's test, etc.)
- [ ] Results: flow diagram; study characteristics table; risk of bias summary; synthesis results
- [ ] Discussion: summary of evidence; strength of evidence assessment; implications; limitations

---

## Part 6: Tools & Resources

### 6.1 Software for Meta-Analysis
- **RevMan** (free; Cochrane's tool)
- **Comprehensive Meta-Analysis** ($395; user-friendly)
- **MetaWin** (ecological data)
- **R packages** (metafor, meta; free; steep learning curve)

### 6.2 Software for Meta-Synthesis
- **NVivo** ($1,400; qualitative data management; can track themes across studies)
- **QDA Miner** ($350; code and organize qualitative data)
- **Covidence** (cloud-based; systematic review management; helps organize studies and track screening)
- **DistillerSR** (specialized for systematic review management)

### 6.3 Registration & Reporting
- **PROSPERO** (prospero.crd.york.ac.uk): Register protocol before conducting systematic review
- **PRISMA** (prisma-statement.org): Reporting guidelines checklist
- **Open Science Framework** (osf.io): Pre-register analysis plan

### 6.4 Quality Assessment Tools
- **Cochrane Risk of Bias tool** (RCTs)
- **ROBINS-I** (observational studies with comparison groups)
- **CASP Qualitative Checklist** (qualitative studies)
- **AHRQ Quality Assessment Tool** (various designs)

---

## Part 7: Your Advanced Synthesis Checklist

### Quick Synthesis Selection

**Choose Systematic Review + Meta-Analysis if:**
- [ ] Clear, narrow research question (PICO format)
- [ ] Intervention or exposure with measurable outcome
- [ ] Multiple RCTs or quasi-experimental studies available
- [ ] Studies measure same outcome (or convertible to common metric)
- [ ] Goal: estimate effect size, answer "does it work?"

**Choose Meta-Synthesis if:**
- [ ] Multiple qualitative studies on related phenomenon
- [ ] Goal: integrate findings into deeper understanding
- [ ] Studies use diverse qualitative methods
- [ ] 8+ qualitative studies available

**Choose Evidence Mapping if:**
- [ ] Broad topic; not narrow enough for systematic review
- [ ] Need landscape overview, not depth
- [ ] Goal: identify evidence gaps, chart landscape
- [ ] Policy/research agenda-setting purpose

### Pre-Synthesis Checklist

- [ ] Research question clearly defined (PICO or equivalent)
- [ ] Protocol written (or registered in PROSPERO if systematic review)
- [ ] Inclusion/exclusion criteria operationalized and pilot-tested
- [ ] Search strategy drafted and peer-reviewed
- [ ] 2+ reviewers recruited for screening and extraction
- [ ] Standardized forms created (study selection form, data extraction form)
- [ ] Quality appraisal tool selected and assigned
- [ ] Analysis approach determined (meta-analysis, meta-synthesis, narrative, evidence map)
- [ ] Software identified and learned
- [ ] Timeline established (realistic estimate of effort)

### During Synthesis

- [ ] Document all decisions (audit trail)
- [ ] Calculate inter-rater agreement for screening/extraction
- [ ] Track which studies had quality concerns
- [ ] Assess heterogeneity throughout
- [ ] Test for publication bias
- [ ] Conduct sensitivity analyses (exclude low-quality studies; exclude outlier studies)

### Before Publication

- [ ] Complete PRISMA checklist
- [ ] Create flow diagram
- [ ] Write results transparently (don't hide inconvenient findings)
- [ ] Discuss limitations honestly (especially quality, publication bias)
- [ ] Pre-register results with OSF if not done during protocol phase
- [ ] Submit for peer review

---

## Summary

Advanced literature synthesis goes beyond summarizing the state of the field—it synthesizes across multiple studies using rigorous, transparent, replicable methods. Whether you're conducting meta-analysis for quantitative evidence, meta-synthesis for qualitative findings, or evidence mapping for landscape overview, the key principles remain:

1. **Transparency** — Document every decision so others could replicate your work
2. **Systematicity** — Follow a pre-defined protocol; minimize bias
3. **Rigor** — Assess quality, check for bias, explore heterogeneity
4. **Reflexivity** — Acknowledge your role in the synthesis process
5. **Relevance** — Synthesize toward a meaningful question; communicate findings to users

Your synthesis is a scholarly contribution: it answers a question no single study can answer alone.
