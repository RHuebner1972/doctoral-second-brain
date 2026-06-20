---
name: apa-citations
description: Format citations and references in APA 7th edition — in-text, reference list entries, and common edge cases.
triggers:
  - cite this
  - APA format
  - reference list
  - in-text citation
  - format this source
  - APA 7th
  - how do I cite
  - reference entry
  - doi
  - et al
phase: all
output_type: template
---

# APA 7th Edition Citation Guide

## Overview

APA 7th edition (Publication Manual, 2020) is the standard citation format for most social sciences, education, and business doctoral programs. This skill formats in-text citations and reference list entries on demand, explains the rules behind the formatting, and handles common edge cases that trip up doctoral students.

---

## How to Use This Skill

Provide the source information (author, title, year, journal, DOI, publisher, URL) and specify:
- What type of source it is (journal article, book, chapter, dissertation, website, report, etc.)
- Whether you need an in-text citation, a reference list entry, or both

---

## In-Text Citation Rules

### Basic Format
| Scenario | Format |
|---|---|
| One author | (Smith, 2018) |
| Two authors | (Smith & Jones, 2018) |
| Three or more authors | (Smith et al., 2018) — *always* in APA 7th |
| Organization as author | (American Psychological Association [APA], 2020) → subsequent: (APA, 2020) |
| No author | Use shortened title in quotes: ("Article Title," 2018) |
| No date | (Smith, n.d.) |
| Multiple sources, same citation | Alphabetical by first author, separated by semicolons: (Jones, 2020; Smith, 2018) |
| Direct quote | Include page, paragraph, or section: (Smith, 2018, p. 45) or (Smith, 2018, para. 3) |
| Secondary source | (Jones, 2015, as cited in Smith, 2018) — cite Smith in reference list |

### Narrative vs. Parenthetical
- **Narrative:** Smith (2018) argued that...
- **Parenthetical:** Research suggests that... (Smith, 2018)

---

## Reference List Entries

### Journal Article (Most Common)
```
Author, A. A., & Author, B. B. (Year). Title of article in sentence case.
    Journal Name in Title Case, Volume(Issue), Page–Page. https://doi.org/xxxxx
```
**Example:**
> Liden, R. C., Wayne, S. J., Zhao, H., & Henderson, D. (2008). Servant leadership: Development of a multidimensional measure and multi-level assessment. *Leadership Quarterly*, *19*(2), 161–177. https://doi.org/10.1016/j.leaqua.2008.01.006

**Rules:**
- Article title: sentence case (only first word, proper nouns, and word after colon capitalized)
- Journal name and volume number: italicized
- Issue number: in parentheses, not italicized
- Include DOI as a URL whenever available

### Book
```
Author, A. A. (Year). Title of book in sentence case. Publisher.
```
**Example:**
> Creswell, J. W., & Poth, C. N. (2018). *Qualitative inquiry and research design: Choosing among five approaches* (4th ed.). SAGE.

**Rules:**
- Book title and subtitle: italicized, sentence case
- Include edition if not the first: (4th ed.)
- Publisher: omit location in APA 7th (removed from APA 6th)

### Chapter in an Edited Book
```
Author, A. A. (Year). Title of chapter. In E. E. Editor & F. F. Editor (Eds.),
    Title of book (pp. xx–xx). Publisher.
```
**Example:**
> Greenleaf, R. K. (1977). The servant as leader. In L. C. Spears (Ed.), *Reflections on leadership* (pp. 1–34). Wiley.

### Dissertation or Thesis
```
Author, A. A. (Year). Title of dissertation [Doctoral dissertation, Institution Name].
    Database Name. URL or DOI
```
**Example:**
> Jones, M. R. (2021). *Servant leadership and faculty retention in community colleges* [Doctoral dissertation, University of Phoenix]. ProQuest Dissertations & Theses.

### Website / Webpage
```
Author, A. A. (Year, Month Day). Title of page. Site Name. URL
```
**Example:**
> American Psychological Association. (2020, October 1). *What is psychology?* https://www.apa.org/topics/psychology

**Rules:**
- Include retrieval date only if content changes over time (e.g., wikis, live databases)
- If no individual author, use the organization name

### Government or Institutional Report
```
Author, A. A., or Agency Name. (Year). *Title of report* (Report No. XXX). Publisher. URL
```
**Example:**
> National Center for Education Statistics. (2022). *Digest of education statistics 2021* (NCES 2022-174). U.S. Department of Education. https://nces.ed.gov/programs/digest/

### Conference Paper or Presentation
```
Author, A. A. (Year, Month Day–Day). Title of contribution [Type]. Conference Name,
    Location. URL
```

---

## Common Edge Cases

| Issue | Rule |
|---|---|
| Author has same last name | Include first initials: (J. Smith, 2018; T. Smith, 2020) |
| Two works same author same year | Add a, b: (Smith, 2018a, 2018b); alphabetize by title |
| Work with no page numbers (e-book) | Use chapter number: (Smith, 2018, Chapter 3) or paragraph: (para. 5) |
| Translated work | Original Author. (Year of original). *Title* (Translator, Trans.). Publisher. (Original work published Year) |
| Retracted article | Add "[Retracted]" after title |
| Personal communications (emails, interviews) | In-text only — not in reference list: (J. Smith, personal communication, March 15, 2023) |
| Classical/religious works | Use standard citations per APA 7th Ch. 10 |

---

## Reference List Formatting Rules

- **Hanging indent:** First line flush left; subsequent lines indented 0.5 inches
- **Alphabetical order:** By first author's last name
- **Multiple works, same author:** Chronological (earliest first)
- **Title italics:** Books, journals, reports, dissertations — italicized. Articles and chapters — not italicized
- **DOI:** Always include if available, formatted as a hyperlink: https://doi.org/xxxxx
- **No "Retrieved from" before DOIs** (removed in APA 7th)
- **Hanging indent is set automatically** in Word: Format → Paragraph → Special: Hanging

---

## Quick Reference: Is It Italicized?

| Source Type | Italicize the Title? |
|---|---|
| Book | Yes |
| Journal name | Yes |
| Journal article title | No |
| Chapter title | No |
| Report | Yes |
| Dissertation | Yes |
| Website page title | Yes (if standalone work) |

---

## Next Steps

- Paste source information and Claude will format the entry
- Use Zotero, Mendeley, or EndNote to manage a large reference library
- Always verify DOIs are active before submission
- Cross-check formatted references against the APA 7th Publication Manual (2020) for edge cases
