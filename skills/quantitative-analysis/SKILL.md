---
name: quantitative-analysis
description: Guide quantitative researchers through statistical test selection, data analysis procedures, results reporting, and interpretation.
when_to_use: Use when the user is analyzing quantitative data, needs guidance on choosing statistical tests, reporting results, interpreting p-values and effect sizes, or troubleshooting statistical assumptions.
phase: analysis
output_type: [framework, checklist, template]
---

# Quantitative Data Analysis

## Purpose
Systematically analyze quantitative data using appropriate statistical tests, report results with transparency, and interpret findings in context of research questions and theoretical implications.

## Process

### Step 1 — Prepare Your Data

**Data Entry & Cleaning**

- **Data Entry**
  - Double-enter sensitive data or verify a random sample (10%) for accuracy
  - Use consistent coding (e.g., "1 = Male, 2 = Female" not "M, F" mixed with numbers)
  - Missing data: decide on coding (−99, blank, "NA") before entry

- **Data Screening**
  - Check for impossible values (e.g., age = 999, Likert scale response = 7 on 1–5 scale)
  - Identify outliers (unusually high/low values)
  - Document missing data patterns (random vs. systematic?)

- **Data Transformation** (if needed)
  - Reverse-code items if necessary (e.g., negative-worded survey items)
  - Create composite scores (summing or averaging item responses)
  - Create derived variables (e.g., age groups from continuous age)

**Quality Check**
- Descriptive statistics: means, SDs, min/max for all variables
- Frequency distributions: any data entry errors visible?
- Verify data reflects your sample (n, demographics match recruitment)

---

### Step 2 — Check Statistical Assumptions

**Different tests have different assumptions. Check yours:**

**Assumptions for Parametric Tests** (t-tests, ANOVA, correlation)

| Assumption | Check Method | Solution if Violated |
|-----------|--------------|---------------------|
| **Normality** | Shapiro-Wilk test; Q-Q plots; histogram | Transform data; use non-parametric test; large n → Central Limit Theorem |
| **Homogeneity of Variance** | Levene's test | Welch's t-test (doesn't assume equal variances); robust estimation |
| **Independence** | Study design (each participant = 1 observation?) | If not independent (nested, repeated measures), use hierarchical or mixed models |
| **Linearity** (for correlation/regression) | Scatterplot | Transformation; non-linear models; or report correlation despite violation |

**Assumptions for Non-Parametric Tests** (Mann-Whitney U, Kruskal-Wallis)
- Fewer assumptions (don't require normality)
- Use if parametric assumptions violated
- Less statistical power, so larger effects needed to detect significance

**Example Assumption Check**

```
Normality Testing:
I assessed normality using Shapiro-Wilk tests (SW) on all continuous 
variables. The pretest measure violated normality, SW(45) = 0.88, p = .001. 
The histogram showed right skew. I attempted square-root transformation; 
normality improved but remained non-ideal. Given this violation and my 
sample size (N = 90), I used both parametric (t-test) and non-parametric 
(Mann-Whitney U) tests. Results were consistent, increasing confidence in findings.
```

---

### Step 3 — Choose Appropriate Statistical Tests

**Decision Tree by Research Question**

| Research Question | Design | Appropriate Test |
|-------------------|--------|-----------------|
| Do groups differ on one outcome? | 2 groups | t-test (independent samples) |
| Do groups differ on one outcome? | 3+ groups | ANOVA or Kruskal-Wallis |
| Is there a relationship between 2 variables? | Continuous × Continuous | Correlation (r) or regression |
| Which variables predict an outcome? | Multiple predictors | Multiple regression or logistic regression |
| Do outcomes change over time? | Repeated measures | Repeated measures ANOVA or mixed models |
| Do groups differ on multiple outcomes? | Multiple DVs | MANOVA (multivariate ANOVA) |

**Common Tests in Dissertations**

**1. Independent Samples t-test**
- Compares means between 2 independent groups
- Example: Does intervention group score differently than control group on posttest?

**2. ANOVA (Analysis of Variance)**
- Compares means across 3+ groups
- Example: Do students differ in achievement by grade level (6th, 7th, 8th)?

**3. Correlation**
- Examines relationship between 2 continuous variables
- Example: Does teacher experience correlate with student achievement?
- Pearson r for continuous; Spearman ρ for ordinal/non-normal

**4. Multiple Regression**
- Predicts outcome from multiple predictors
- Example: Which factors (SES, prior achievement, teacher quality) predict graduation?

**5. Logistic Regression**
- Predicts binary outcome (yes/no, pass/fail) from predictors
- Example: Does participation in intervention predict graduation (yes/no)?

**6. Repeated Measures ANOVA**
- Examines change over time within participants
- Example: Do students improve in motivation from pretest to posttest?

**7. Mixed Models (Hierarchical Linear Modeling)**
- Accounts for nested data (students nested in classrooms nested in schools)
- Example: How do classroom factors predict student growth, accounting for school context?

---

### Step 4 — Conduct & Report Analyses

**General Reporting Format**

```
[Test Name], t(df) or F(df1, df2) or χ²(df) = [value], p = [p-value], 
[effect size measure] = [value]

Example:
An independent samples t-test comparing pretest scores between intervention 
(M = 78.3, SD = 8.2) and control (M = 74.1, SD = 9.1) groups was significant, 
t(88) = 2.34, p = .021, d = .50.
```

**Always Report**
1. **Descriptive statistics** (means, SDs, n per group)
2. **Test statistic & degrees of freedom** (t, F, χ², etc.)
3. **p-value** (exact value, not just "p < .05")
4. **Effect size** (Cohen's d, η², φ, etc.)

**Interpretation Framework**

| p-value | Interpretation |
|---------|----------------|
| p < .001 | Very strong evidence against null; highly unlikely due to chance |
| p < .01 | Strong evidence; unlikely due to chance |
| p < .05 | Moderate evidence; conventional threshold (α = .05) |
| p > .05 | Insufficient evidence to reject null (not "accepting null"; non-significant) |

**Effect Sizes** (Practical Significance)

Cohen's d (for t-tests, ANOVA)
- d = 0.20: small effect
- d = 0.50: medium effect
- d = 0.80: large effect

Eta-squared η² (for ANOVA)
- η² = 0.01: small
- η² = 0.06: medium
- η² = 0.14: large

Pearson r (for correlation)
- r = ±.10: small
- r = ±.30: medium
- r = ±.50: large

---

### Step 5 — Report Descriptive Statistics

**Before any inferential tests, present descriptive statistics:**

**Table Format**

```
Table 1
Descriptive Statistics for Pretest & Posttest Scores by Group

                           Intervention (n=45)    Control (n=45)
                        M        SD      Range   M       SD     Range
────────────────────────────────────────────────────────────────
Pretest Score         75.2      9.1     52–93  73.8    10.2    48–91
Posttest Score        82.4      8.5     61–98  76.1     9.3    54–92
Gain Score             7.2      6.3    −2–22    2.3     5.8   −8–18
```

**Include**
- N per group
- Means (M) and standard deviations (SD)
- Range (min–max) or quartiles
- Any missing data noted

---

### Step 6 — Present & Interpret Key Findings

**Results Section Structure**

1. **Preliminary Analyses** (data screening, assumption checks)
2. **Descriptive Findings** (table of means & SDs)
3. **Main Analyses** (answering research questions in order)
4. **Post-Hoc Tests** (if applicable)
5. **Additional Analyses** (sensitivity checks, moderation tests, etc.)

**Example Results Section**

```
Results

Data Screening
The dataset contained no missing values. Shapiro-Wilk tests indicated 
normality was satisfied for most variables; the pretest score approached 
non-normality, SW(90) = 0.92, p = .051. Homogeneity of variance was 
satisfied, Levene's F(1, 88) = 1.23, p = .270. Given the robust nature 
of t-tests with large samples, I proceeded with parametric testing.

Descriptive Statistics
Descriptive statistics are presented in Table 1. The intervention group 
(M = 78.3, SD = 8.2) entered the study with slightly higher pretest scores 
than the control group (M = 74.1, SD = 9.1), though this difference was 
not statistically significant, t(88) = 2.12, p = .074.

Primary Analysis: Effect of Intervention on Posttest Achievement
I hypothesized that the intervention group would achieve higher posttest 
scores than the control group. An independent samples t-test supported this 
hypothesis. The intervention group (M = 82.4, SD = 8.5) scored significantly 
higher than the control group (M = 76.1, SD = 9.3), t(88) = 3.45, p = .001, 
d = 0.73. This represents a medium-to-large effect size, suggesting the 
intervention had a meaningful impact on achievement.

Analysis of Covariance (ANCOVA)
To account for baseline differences, I conducted an ANCOVA with posttest 
score as the outcome, group (intervention vs. control) as the factor, and 
pretest score as the covariate. Results were similar to the unadjusted 
analysis, F(1, 87) = 10.23, p = .002, ηp² = .11, confirming the intervention 
effect persisted after controlling for baseline achievement.
```

---

### Step 7 — Interpret Effect Sizes, Not Just p-values

**Why Effect Sizes Matter**

- **p-value** tells you *whether* a difference exists (probability)
- **Effect size** tells you *how much* difference exists (practical significance)

**Example**: A study with 10,000 participants might find p < .001 with d = 0.10 (tiny effect). Is this meaningful? Not practically.

**Reporting Both**
```
Bad: "The groups differed significantly, t(88) = 3.45, p = .001."
→ Missing effect size; unclear magnitude

Good: "The intervention group scored significantly higher than the control 
group, t(88) = 3.45, p = .001, d = 0.73. This medium-to-large effect 
suggests the intervention had a meaningful impact."
→ Includes effect size; provides practical context
```

---

### Step 8 — Handle Non-Significant Findings

**How to Report Non-Significant Results**

```
Good: "I hypothesized that the intervention would improve motivation. 
However, motivation did not differ between groups, t(88) = 1.12, p = .265, 
d = 0.24. This null finding suggests the intervention did not affect 
motivation as predicted."

Better (if adequate power): "Despite adequate statistical power (1−β = .85), 
the motivation difference was non-significant, suggesting a true null effect 
or a smaller effect than anticipated."
```

**Non-Significant ≠ No Difference**
- It means: insufficient evidence to conclude a difference exists
- Possible reasons: real null effect, small sample, or truly small effect
- Report effect size anyway (helps readers understand magnitude)

---

### Step 9 — Address Assumptions Violations

**If Assumptions Violated**

**Normality Violated**
- Use non-parametric test (Mann-Whitney U instead of t-test; Kruskal-Wallis instead of ANOVA)
- Report both parametric and non-parametric; if results agree, confidence increases
- Transformations (log, square root) sometimes help

**Homogeneity of Variance Violated**
- Use Welch's t-test (doesn't assume equal variances) instead of standard t-test
- Report: "Welch's t-test, which does not assume equal variances, revealed..."

**Independence Violated** (nested data, repeated measures)
- Use hierarchical linear modeling (HLM) or mixed models
- Account for clustering in data

**Document in Results**
```
I assessed assumptions of the independent samples t-test. Shapiro-Wilk 
testing indicated the posttest score violated normality, SW(90) = 0.89, p = .008. 
To address this, I report both parametric (t-test) and non-parametric 
(Mann-Whitney U) results. Both tests yielded consistent conclusions, 
supporting the robustness of findings.
```

---

### Step 10 — Sensitivity & Robustness Checks

**Strengthen Your Analysis**

- **Outlier Analysis**: Remove extreme outliers; re-run analysis. Do conclusions change?
- **Subgroup Analysis**: Does effect hold across demographic subgroups?
- **Alternative Specifications**: Use different operationalizations of variables; re-test
- **Missing Data**: How were missing data handled? Does listwise vs. multiple imputation change results?

**Example Sensitivity Check**

```
Sensitivity Analysis
I examined whether results held when excluding participants with extreme 
posttest scores (±3 SD from mean). Two participants were identified and 
removed. Results remained significant, t(86) = 3.21, p = .002, d = 0.69, 
and conclusions were unchanged. This suggests findings are robust to outliers.
```

---

### Step 11 — Connect Results to Research Questions

**Explicitly Address Each RQ**

| Research Question | Finding | Interpretation |
|-------------------|---------|----------------|
| Does intervention improve achievement? | p = .001, d = 0.73 | Yes; medium-to-large effect |
| Does effect differ by gender? | Gender × Treatment interaction: p = .542 | No; effect does not significantly vary by gender |
| What predicts posttest achievement? | Regression: prior achievement (β = .62, p < .001), treatment (β = .28, p = .003) | Prior achievement is strongest predictor; treatment adds meaningful variance |

---

## Quantitative Analysis Checklist

- [ ] Screen and clean data; document any transformations
- [ ] Check statistical assumptions appropriate to planned tests
- [ ] Report violations; justify decisions (parametric vs. non-parametric)
- [ ] Provide descriptive statistics (M, SD, n, range) before inferential tests
- [ ] Report exact p-values (not just "p < .05")
- [ ] Report effect sizes for all major analyses
- [ ] Interpret both statistical AND practical significance
- [ ] Handle non-significant findings appropriately
- [ ] Conduct sensitivity/robustness checks
- [ ] Address each research question explicitly
- [ ] Report alternative analyses (if assumptions violated)
- [ ] Organize Results section logically (preliminary → main → post-hoc)

---

## Results Reporting Checklist

✓ All analyses have descriptive statistics (M, SD, n)  
✓ All inferential tests report: test statistic, df, p-value, effect size  
✓ p-values are exact (not just "p < .05") and appropriately interpreted  
✓ Effect sizes are included and interpreted (not just p-values)  
✓ Assumptions violations are documented and addressed  
✓ Non-significant findings are reported (not hidden)  
✓ Results align with research questions  
✓ Statistical findings are presented without premature interpretation (save for Discussion)  
✓ Tables/figures enhance clarity (not just numbers in text)  
✓ Sufficient detail for replication
