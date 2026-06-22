---
name: data-management-organization
description: Organize, document, version-control, and preserve your research data with naming conventions, metadata, and FAIR principles for long-term accessibility and reproducibility.
when_to_use: When you're starting data collection, organizing existing research data, preparing data for analysis, sharing data with collaborators, or archiving data for long-term preservation and reproducibility.
phase: all
output_type: [framework, checklist, template, plan]
---

# Data Management & Organization: Structure, Version Control, and Preservation

Data is the foundation of your research. How you organize, document, and preserve it determines whether your research is reproducible, shareable, and useful to others (and to future-you). This skill guides you through building a data management system aligned with FAIR principles (Findable, Accessible, Interoperable, Reusable) and professional research standards.

## Why Data Management Matters

**For Your Research:**
- Facilitates analysis (you spend less time hunting for files)
- Enables reproducibility (clear documentation means you—or others—can retrace steps)
- Reduces errors (organized structure minimizes file confusion)
- Accelerates discovery (well-named files are discoverable)

**For Your Career:**
- Demonstrates research integrity (funders, journals increasingly require data management plans)
- Enables data sharing and collaborative research
- Supports publication (many journals now require data availability statements)
- Creates reusable research infrastructure for future projects

**For Science:**
- Advances the field (data shared openly multiplies its impact)
- Builds trust (transparent, documented data shows good faith)
- Saves other researchers' time (they don't have to recreate what you've done)

---

## Part 1: Data Inventory & Assessment

### 1.1 Identify Your Data

Start by cataloging what data you have or will collect:

**Data Types You May Have:**

| Data Type | Examples | Format | Storage Considerations |
|---|---|---|---|
| **Raw data** | Interview recordings, survey responses, observational field notes, sensor readings, administrative records | Audio, .csv, .xlsx, .txt, .jpg, .pdf | Preserve original; never edit directly |
| **Processed/derived data** | Transcripts, coded data, aggregated datasets, cleaned variables | .txt, .xlsx, .csv, .Rdata, .sav | Version-controlled; document transformations |
| **Analysis files** | Code scripts, statistical output, analysis logs | .R, .py, .do, .txt (log files) | Reproducible; linked to raw data |
| **Documentation** | Data dictionaries, codebooks, metadata, protocols | .docx, .md, .txt, .xlsx | Comprehensive; updated as data evolves |
| **Instrument files** | Survey questionnaires, interview protocols, observation rubrics | .docx, .pdf, .xlsx | Versioned; final versions preserved |
| **Analysis output** | Tables, figures, statistical summaries | .xlsx, .png, .pdf, .txt | Linked to analysis script |

**Data Inventory Template:**

| Data File Name | Data Type | Format | # Records | Collection Date(s) | Collection Method | Sensitivity Level |
|---|---|---|---|---|---|---|
| INT_2024_01.mp3 | Raw (interview recording) | Audio | 1 participant | 1/15/2024 | Voice recording | Confidential |
| INT_2024_TRANSCRIPT.docx | Processed (transcript) | Text | 1 participant | 1/22/2024 | Manual transcription | Confidential |
| SURVEY_RESPONSES.xlsx | Raw (survey) | Spreadsheet | 147 respondents | 1/10–2/28/2024 | Online form (Qualtrics) | Confidential |
| SURVEY_CLEANED.csv | Processed (cleaned) | CSV | 145 respondents | 3/1/2024 | Data cleaning script | Confidential |

### 1.2 Assess Data Sensitivity & Risk

Classify your data by sensitivity level (affects storage, access controls, documentation requirements):

**Classification Levels:**

| Level | Definition | Examples | Storage Requirements | Access Control |
|---|---|---|---|---|
| **Public** | No restrictions; can be shared openly | Aggregate statistics, public records, non-sensitive findings | Standard folder | Open; can publish/share |
| **Internal** | Organizational use only; not sensitive | Methods notes, non-identifying analysis output | Restricted folder | Team members only |
| **Confidential** | Contains identifiers or sensitive information; legally protected | Names, IDs, interview recordings, health data, special populations | Encrypted storage, password-protected | Named individuals + IRB approval |
| **Restricted** | Highly sensitive; special protections required | Biometric data, genetic data, extreme personal vulnerability | Encrypted + multi-factor auth + audit logs | Principal investigator + designated team members |

**Risk Assessment:**

For each data file, assess risks:

```
Data File: INT_2024_01.mp3
Sensitivity: Confidential (contains identifiable voices, personal disclosures)
Risk if breached: Participant privacy violation, potential harm to vulnerable population
Mitigation strategies:
  ☐ Store in password-protected folder on encrypted drive
  ☐ De-identify in transcript (use pseudonyms)
  ☐ Transcribe to enable deletion of audio after analysis
  ☐ Limit access to [PI name, research assistant name]
  ☐ Destroy after [7 years] per IRB protocol
```

---

## Part 2: Folder Structure & Naming Conventions

### 2.1 Project-Level Folder Structure

Establish a consistent structure from the start:

```
PROJECT_NAME/
├── 00_PROTOCOL_&_MATERIALS/          ← IRB approval, instruments, protocols
│   ├── IRB_Approval_Letter.pdf
│   ├── Interview_Protocol_v3.docx
│   ├── Survey_Instrument_Final.pdf
│   └── Informed_Consent_Form.docx
│
├── 01_RAW_DATA/                       ← Original, unedited data (NEVER modify)
│   ├── Interviews/
│   │   ├── INT_2024_001_Recording.mp3
│   │   ├── INT_2024_002_Recording.mp3
│   │   └── [...]
│   ├── Survey/
│   │   └── Survey_Responses_2024.xlsx
│   ├── Observations/
│   │   └── OBS_Field_Notes_ClassA.txt
│   └── Administrative/
│       └── Enrollment_Data_2024.xlsx
│
├── 02_PROCESSED_DATA/                 ← Cleaned, transformed, coded data
│   ├── Interviews/
│   │   ├── INT_2024_001_Transcript.docx
│   │   ├── INT_2024_001_Coded.docx
│   │   └── [...]
│   ├── Survey/
│   │   ├── Survey_2024_Cleaned.csv
│   │   ├── Survey_2024_Variables_Created.xlsx
│   │   └── Survey_2024_Frequencies.xlsx
│   └── Combined/
│       └── Master_Dataset_2024.csv
│
├── 03_ANALYSIS/                       ← Code, scripts, analysis output
│   ├── R_Scripts/
│   │   ├── 01_DataImport_Cleaning.R
│   │   ├── 02_DescriptiveStats.R
│   │   ├── 03_RegressionAnalysis.R
│   │   └── 04_Visualization.R
│   ├── Analysis_Output/
│   │   ├── Descriptive_Stats_Table.xlsx
│   │   ├── Regression_Model_Results.txt
│   │   ├── Figure_1_Distribution.png
│   │   └── [...]
│   └── Analysis_Log.txt               ← Record of analyses run, dates, results
│
├── 04_DOCUMENTATION/                  ← Data dictionaries, codebooks, methods
│   ├── Data_Dictionary.xlsx           ← Variable names, definitions, units
│   ├── Codebook_Interview_Themes.docx ← Codes used, definitions, examples
│   ├── Data_Management_Plan.docx
│   ├── README.txt                     ← Overview of data, how to use it
│   └── Processing_Log.docx            ← What transformations were applied
│
├── 05_OUTPUTS/                        ← Dissertation chapters, figures, tables
│   ├── Chapter_3_Methods.docx
│   ├── Chapter_4_Results.docx
│   ├── Table_1_Demographics.docx
│   └── Figure_1_Model.png
│
└── 06_ARCHIVE/                        ← Old versions, superseded files (kept for transparency)
    ├── Survey_2024_v1_Raw.xlsx
    ├── INT_Codes_v1.docx
    └── [...]
```

### 2.2 File Naming Conventions

Use standardized, descriptive naming (not "data.xlsx" or "analysis_FINAL_v3.R"):

**Naming Convention Template:**

```
[PROJECT]_[TYPE]_[IDENTIFIER]_[DATE]_[VERSION].[EXTENSION]

Where:
  [PROJECT] = 3-4 letter code (e.g., LEAD, CRET, INC)
  [TYPE] = Brief data type (INT=interview, SRV=survey, OBS=observation, CST=coded, ANA=analysis)
  [IDENTIFIER] = Specific identifier (participant #, site, theme)
  [DATE] = Collection or creation date (YYYY-MM-DD)
  [VERSION] = Version number (v1, v2, v3)
  [EXTENSION] = File type (.mp3, .docx, .csv, .R, etc.)
```

**Examples:**

| Purpose | File Name | Breakdown |
|---|---|---|
| Raw interview recording (participant 001, 1/15/2024) | INT_2024_001_2024-01-15_v1.mp3 | INT=interview; 2024=project; 001=participant; date collected; v1=original |
| Interview transcript (participant 001, transcribed 1/22) | INT_2024_001_CST_2024-01-22_v1.docx | CST=coded; transcribed 1/22 |
| Survey data (raw export from Qualtrics) | SRV_2024_RAW_2024-02-28_v1.xlsx | SRV=survey; RAW=original; exported 2/28 |
| Survey data (cleaned, missing values handled) | SRV_2024_CLEANED_2024-03-05_v1.csv | CLEANED=processed version; 3/5 date is cleaning date |
| R analysis script (descriptive statistics) | ANA_LEAD_Descriptive_2024-03-10_v2.R | ANA=analysis; LEAD=project; v2=revised |
| Statistical output (regression table) | OUT_LEAD_Regression_2024-03-10_v1.xlsx | OUT=output; regression model results |

**Naming Rules:**
- [ ] No spaces (use underscores: LEAD_DATA not LEAD DATA)
- [ ] No special characters (use: - _ . not ! @ # $ % ^ &)
- [ ] Lowercase for readability (LEAD_data_v1, not LEAD_DATA_V1)
- [ ] Dates always YYYY-MM-DD (ISO standard; sorts chronologically)
- [ ] Version numbers incremental (v1, v2, v3; not v1.0, v1.1, v2.0)
- [ ] No "FINAL" in names (final becomes outdated when you revise; version numbers are clearer)

### 2.3 Folder Naming Conventions

**Folders:** Use numbers + descriptive names to sort chronologically

```
01_RAW_DATA           (numbers ensure sort order)
02_PROCESSED_DATA
03_ANALYSIS
04_DOCUMENTATION
```

**Sub-folders:** Use descriptive names (numbers only if showing sequence)

```
PROJECT/
├── 01_RAW_DATA/
│   ├── Interviews/        (by data type)
│   ├── Survey/
│   ├── Observations/
│   └── Administrative/
```

---

## Part 3: Documentation & Metadata

### 3.1 Data Dictionary (Critical)

A data dictionary defines every variable in your dataset:

**Data Dictionary Template (for quantitative data):**

| Variable Name | Variable Label | Data Type | Values / Range | Units | Coding | Missing Codes | Notes |
|---|---|---|---|---|---|---|---|
| PARTICIPANT_ID | Participant identifier | Integer | 001–150 | — | Sequential | — | Assigned at enrollment |
| AGE | Age in years | Integer | 18–85 | Years | Actual age | 99 = missing | Calculated from DOB |
| GENDER | Gender identity | Categorical | 1=Male; 2=Female; 3=Non-binary; 4=Decline | — | 1,2,3,4 | 9 = missing | Self-reported |
| INCOME | Annual household income | Categorical | 1=$0–30k; 2=$30–60k; 3=$60–100k; 4=$100k+ | USD | 1,2,3,4 | 9 = missing | Select one best category |
| SATISFACTION | Overall job satisfaction | Integer | 1–5 scale | — | 1=Very dissatisfied to 5=Very satisfied | 9 = missing | Single-item measure; higher = more satisfied |
| SCORE_PRETEST | Pre-test score on knowledge assessment | Integer | 0–100 | Points | Actual score | 999 = not administered | Administered at baseline |

**Codebook Template (for qualitative data):**

```
CODE NAME: Teacher Autonomy
CODE DEFINITION: Instances where participants describe control over classroom decisions, curriculum choices, or instructional practices
EXEMPLAR QUOTE: "I can decide how to teach this content. The district gives us the standard, but how I get there—that's up to me."
SIMILAR CODES: Teacher Agency, Decision-Making Authority
CONTRASTING CODES: Mandated Curriculum, Top-Down Direction
FREQUENCY: 23 instances across 12 interviews
VARIATIONS: Autonomy described positively (n=18), constrained/threatened (n=5)
```

### 3.2 README File (Essential)

Include a README.txt in your main project folder:

```
PROJECT NAME: Teacher Leadership in Inclusive Schools
PI: Dr. Your Name
Project Code: TLIS
Data Collection Period: January 2024 – August 2024
Last Updated: 2024-08-15

OVERVIEW:
This project examines how teachers in inclusive schools develop and enact leadership roles. 
Data consist of interviews with 50 elementary teachers, classroom observations, and school 
administrative records.

FOLDER STRUCTURE:
  01_RAW_DATA/ — Original data files (unmodified)
  02_PROCESSED_DATA/ — Transcripts, cleaned data, coded data
  03_ANALYSIS/ — R scripts and statistical output
  04_DOCUMENTATION/ — Data dictionary, codebook, protocols
  05_OUTPUTS/ — Dissertation chapters, tables, figures

DATA SUMMARY:
  - Interviews: 50 (audio recordings + transcripts)
  - Observations: 15 classroom sessions
  - Administrative records: Enrollment, teacher qualifications, school characteristics
  - Total raw data: ~45 GB (mostly video)
  - Processed data: ~2 GB

KEY FILES:
  - Data_Dictionary.xlsx — Variable definitions and coding
  - Codebook_Interview_Themes.docx — Interview codes and definitions
  - INT_2024_001_CST_v1.docx — Example coded interview transcript

DATA SENSITIVITY:
  All data contain identifiable information (names, voices, school names).
  Access restricted to: [PI], [Research Assistant 1], [Research Assistant 2]
  Storage: Encrypted drive (Z:\TLIS) + backup (OneDrive encrypted folder)
  Destruction date: 2032-08-31 (7 years per IRB protocol)

ANALYSIS WORKFLOW:
  1. Raw data (interviews, observations) collected
  2. Data processed: audio transcribed, observations coded
  3. Data cleaned: transcripts de-identified, variables checked
  4. Analysis: R scripts run in order (01_DataImport → 02_Descriptive → 03_Regression)
  5. Output: Tables, figures, interpretations created

REPRODUCIBILITY:
  To reproduce analysis:
    1. Open R project: TLIS_Analysis.Rproj
    2. Run scripts in order: 01_DataImport_Cleaning.R → 02_DescriptiveStats.R → etc.
    3. All output files will be created in 03_ANALYSIS/Analysis_Output/

CONTACT:
  PI: Dr. Your Name (your.email@institution.edu)
  Phone: 000-000-0000
  
For questions about data, contact the PI.
```

### 3.3 Processing Log (Transparency)

Document every transformation applied to data:

```
PROCESSING LOG — TLIS Project
===============================

DATE: 2024-03-05
ACTION: Imported SRV_2024_RAW_2024-02-28_v1.xlsx into R
SCRIPT: 01_DataImport_Cleaning.R (lines 1–30)
RESULT: Loaded 147 survey responses; assigned to object "survey_raw"
NOTES: One response (ID 142) had incomplete data; kept for now, will assess during cleaning

DATE: 2024-03-05
ACTION: Removed duplicate responses (same IP, timestamp < 2 min apart)
SCRIPT: 01_DataImport_Cleaning.R (lines 40–65)
RESULT: Identified 2 duplicates (IDs 089, 127); deleted; n=145 remaining
NOTES: Reviewed original responses to confirm duplicates

DATE: 2024-03-06
ACTION: Identified missing values; assessed missingness pattern
SCRIPT: 01_DataImport_Cleaning.R (lines 80–120)
RESULT: 
  - Age: 2 missing (1.4%)
  - Income: 5 missing (3.4%)
  - Satisfaction: 1 missing (0.7%)
  - All missing completely at random (MCAR assumption met)
DECISION: Impute age/income using multiple imputation; delete satisfaction (only 1 missing)

DATE: 2024-03-07
ACTION: Imputed missing values using multiple imputation (mice package; m=20 imputations)
SCRIPT: 01_DataImport_Cleaning.R (lines 130–150)
RESULT: Created 20 imputed datasets; saved as "survey_imputed_m20"
NOTES: Convergence diagnostic (Gelman-Rubin statistic) all < 1.05 ✓

DATE: 2024-03-10
ACTION: Created derived variables (z-score satisfaction, dichotomized income)
SCRIPT: 02_DescriptiveStats.R (lines 10–40)
RESULT: 
  - SATISFACTION_Z (standardized satisfaction score)
  - INCOME_BINARY (1=low income [<$60k], 0=higher income [≥$60k])
SAVED: SRV_2024_CLEANED_2024-03-10_v1.csv

```

---

## Part 4: Version Control

### 4.1 File Versioning System

**Problem:** Multiple versions of a file; unclear which is current; difficult to track changes

**Solution:** Implement version control

**Option 1: Manual Versioning** (simple, for small projects)

```
SRV_2024_RAW_2024-02-28_v1.xlsx         ← Original import
SRV_2024_RAW_2024-02-28_v2.xlsx         ← Remove duplicates
SRV_2024_CLEANED_2024-03-05_v1.csv      ← Impute missing values, save as clean
SRV_2024_CLEANED_2024-03-05_v2.csv      ← Recoded income variable (error corrected)
SRV_2024_CLEANED_2024-03-10_v1.csv      ← Final version used in analysis
```

**Version Control Log (to track changes):**

```
VERSION CONTROL LOG — Survey Data
===================================

v1 (2024-02-28): Original export from Qualtrics
  - 147 responses
  - No modifications
  
v2 (2024-03-05): Removed duplicate responses
  - 2 duplicates identified and removed (IDs 089, 127)
  - n=145 remaining
  - Reason: Same IP address; timestamp 1–2 minutes apart; likely test responses
  
CLEANED_v1 (2024-03-05): Handled missing values
  - 2 missing ages imputed using mice (m=20)
  - 5 missing incomes imputed
  - 1 missing satisfaction deleted (listwise for this variable)
  - Exported to CSV for R analysis
  
CLEANED_v2 (2024-03-05): ERROR CORRECTION
  - Discovered income coding error: $50k cutoff should be $60k
  - Recoded income variable (n=12 cases affected)
  - Corrected and saved
  
CLEANED_v1_FINAL (2024-03-10): Final version for analysis
  - Used in all statistical analyses reported in dissertation
  - No further modifications
```

**Option 2: Git/GitHub** (professional, for collaborative projects)

For projects with multiple collaborators or code-heavy analysis:

```bash
# Initialize repository
git init TLIS_Analysis
cd TLIS_Analysis

# Stage and commit changes
git add INT_2024_001_CST_v1.docx
git commit -m "Add coded interview #001 with thematic codes"

# View history
git log --oneline
# Output:
# a4f8c2e Add coded interview #001 with thematic codes
# 3d6a1b9 Add raw interview recordings
# 2e5c4a3 Add interview protocol and informed consent forms
```

Benefits of Git:
- Full change history (who changed what, when, why)
- Easy collaboration (multiple people editing same file)
- Rollback (revert to previous version if needed)
- Branching (work on analysis variants without affecting main)

### 4.2 Backup & Storage Strategy

**The 3-2-1 Backup Rule:**
- 3 copies of important data (original + 2 backups)
- 2 different storage media (e.g., encrypted drive + cloud)
- 1 copy offsite (in case of physical disaster)

**Implementation:**

| Copy | Location | Storage Type | Frequency | Access |
|---|---|---|---|---|
| **Original** | Computer/lab drive | Local encrypted disk | Daily (automatic) | Research team |
| **Backup 1** | Institutional secure server | Network storage (encrypted, backed up by IT) | Weekly (automatic) | Research team |
| **Backup 2** | Cloud storage (OneDrive, Box) | Cloud (encrypted, accessible remotely) | Daily (automatic sync) | Research team |
| **Archive** | External hard drive (offsite) | Portable storage (encrypted) | Upon project completion | Secure location (safety deposit box, department safe) |

**Storage Solution Comparison:**

| Solution | Cost | Security | Accessibility | Collaboration | Best For |
|---|---|---|---|---|---|
| **External hard drive** | $100–300 | Good (if encrypted) | Limited (only your computer) | No | Backup copy, archive |
| **Institutional server** | Free | Excellent (IT-managed) | Good (campus network) | Yes | Primary analysis, shared projects |
| **OneDrive/Google Drive** | Free–$6/month | Good (encrypted, 2FA) | Excellent (any device) | Yes | Active work, synchronization |
| **Box/Dropbox** | $10–20/month | Excellent (enterprise-level) | Excellent | Yes | Sensitive data, compliance requirements |
| **Secure FTP server** | Variable | Excellent | Good | Limited | Sharing with external collaborators |

---

## Part 5: De-Identification & Confidentiality

### 5.1 De-Identification Strategies

Before sharing or archiving data, remove personally identifiable information (PII):

**Identifying Information to Remove:**
- Names, initials, identifying nicknames
- Specific dates (dates of birth, dates of participation) → replace with year/month or age
- Specific location details (specific school names, street addresses) → replace with region/district code
- Contact information (phone numbers, emails, social media handles)
- Unique identifiers beyond study ID (student ID numbers, employee IDs, medical record #s)
- Distinctive characteristics that could identify (e.g., "the only male PE teacher in a 5-teacher district")

**De-Identification Example (Interview Transcript):**

**Original:**
```
On March 15, 2024, I interviewed Sarah Chen, the elementary PE teacher at Jackson Heights 
School in the Riverside district. She mentioned that she lives at 234 Maple Street and can 
be reached at (555) 123-4567 or sarah.chen@email.com. Sarah said...
```

**De-Identified:**
```
In March 2024, I interviewed a female elementary PE teacher [Pseudonym: "Elena"] from a 
rural school district in the Southwest region. Elena said...
```

**De-Identification Checklist:**

| Information Type | Original | De-Identified | Process |
|---|---|---|---|
| Names | Sarah Chen | Elena (pseudonym) | Replace with research pseudonym; document mapping in key file (encrypted, separate from data) |
| Dates | March 15, 2024 | March 2024 | Remove specific day; keep only month/year |
| Locations | Jackson Heights School, Riverside district | Rural Southwest region | Generalize to region/state level |
| Contact Info | (555) 123-4567, sarah.chen@email.com | [removed] | Delete entirely |
| Identifiable details | "only male PE teacher in 5-teacher district" | "PE teacher" | Remove specificity that could re-identify |

### 5.2 Encryption & Access Control

**For Confidential Data (contains names/identifiers):**

- [ ] Encrypt entire storage device (BitLocker on Windows; FileVault on Mac)
- [ ] Encrypt specific files/folders (7-Zip, WinRAR with password protection)
- [ ] Restrict access permissions (only named individuals can access)
- [ ] Use password managers (LastPass, 1Password) to securely store passwords
- [ ] Enable multi-factor authentication (MFA) for cloud storage accounts

**Storage Locations by Sensitivity:**

```
PUBLIC DATA (no restrictions):
  └─ Standard folder on lab computer
     └─ Shareable via email, cloud, repository

INTERNAL DATA (team only):
  └─ Shared folder on institutional server
     └─ Access restricted to research team
     └─ IT maintains access logs

CONFIDENTIAL DATA (identified or sensitive):
  └─ Encrypted folder (BitLocker) on secure drive
  └─ OR secure institutional folder (Box, secure server)
  └─ Multi-factor authentication required
  └─ Access log maintained
  └─ Only named individuals can access
  └─ Separate from code/analysis files when possible
```

---

## Part 6: Data Preservation & Archiving

### 6.1 Long-Term Preservation

**Problem:** Data degrades over time; file formats become obsolete; storage media fails

**Solution:** Plan for long-term preservation

**Formats for Preservation:**

| Data Type | Best Preservation Format | Why | Lifespan |
|---|---|---|---|
| Text documents | .txt, .md, .pdf (with OCR for scans) | Open standard; readable for decades | 50+ years |
| Spreadsheets | .csv (not .xlsx) | Plain text; no proprietary dependencies | 50+ years |
| Audio | .wav (not .mp3) | Lossless; higher fidelity; less compression | 30+ years |
| Video | .mp4 with metadata | Widely supported; reasonable fidelity | 20+ years |
| Code | .R, .py, .do (plain text) | Version-agnostic; self-documenting | 50+ years |
| Images | .tif (not .jpg) | Lossless; no degradation over time | 50+ years |

**Preservation Checklist:**

- [ ] Convert proprietary formats to open standards (e.g., .xlsx → .csv; .docx → .txt/.md)
- [ ] Create metadata file (author, date, description, how to use) in plain text
- [ ] Store on stable media (external hard drive, not USB stick which degrades)
- [ ] Test readability every 5–7 years (ensure files still open)
- [ ] Store multiple copies geographically separated
- [ ] Include README and codebook (so future user understands structure)

### 6.2 Data Repository & Sharing

**When to Archive & Share:**

Upon dissertation completion or publication (or per funder requirements), consider depositing data in a trusted repository:

**Recommended Data Repositories:**

| Repository | Discipline | Cost | Data Types | Access Control |
|---|---|---|---|---|
| **Open Science Framework (OSF)** | All | Free | All types | Public, private, or restricted to collaborators |
| **Zenodo** | All | Free (unlimited) | All types | Public; recommended by CERN |
| **Figshare** | All | Free (<20 GB) | Figures, datasets, presentations | Public/restricted |
| **ICPSR** | Social Sciences | Paid (institutional membership) | Quantitative, qualitative, audio | Public/restricted per data agreement |
| **Dataverse** | All | Free (various institutions host) | All types | Customizable access |
| **IRB-Approved Repositories** | Health/Sensitive data | Variable | Restricted data with governance | Restricted access, audit logs |

**Data Sharing Checklist:**

- [ ] Obtain IRB approval for sharing (or amendment)
- [ ] De-identify all data (remove names, dates, locations)
- [ ] Create comprehensive codebook/README
- [ ] Write data use agreement (if needed for sensitive data)
- [ ] Include citation information (how should others cite your data?)
- [ ] Deposit in trusted repository with persistent identifier (DOI)
- [ ] Update dissertation/publication with data availability statement

**Example Data Availability Statement:**

```
Data Availability:
The datasets and code used in this study are available at:
  - Dataset: https://doi.org/10.5281/zenodo.12345678
  - Code: https://github.com/yourname/TLIS_Analysis
  
De-identified data are available to qualified researchers upon request 
and completion of a data use agreement. For questions, contact 
[PI Name] at [PI Email].

Original audio recordings and identified data will not be shared, as per 
IRB protocol #2024-001, to protect participant confidentiality. These 
materials will be destroyed on [date] per protocol.
```

---

## Part 7: Data Management Plan (DMP)

### 7.1 Writing a Data Management Plan

Funders (NSF, NIH, DOE) increasingly require data management plans. Even without funder requirement, writing a DMP forces clarity about your data strategy:

**DMP Template:**

```
DATA MANAGEMENT PLAN
Project: [Project Title]
PI: [Your Name]
Funding Agency: [e.g., NSF, NIH, or none]
Project Period: [Start Date] – [End Date]

1. TYPES OF DATA & SAMPLES
Describe the type, format, and volume of data to be collected:
  - 50 semi-structured interviews (audio, ~2 hours each; ~100 GB total)
  - 15 classroom observations (field notes, ~10 pages each)
  - Administrative records (enrollment, teacher qualifications; CSV format; ~5 MB)

2. DATA & SAMPLE SIZE
  - Interview audio files: 50 × 2 hours = 100 hours ≈ 100 GB
  - Interview transcripts: 50 × 20 pages = 1,000 pages ≈ 50 MB
  - Observation notes: 15 × 10 pages ≈ 150 pages ≈ 10 MB
  - Administrative data: 5 MB
  - Code and analysis scripts: 50 MB
  - Total: ≈ 100 GB

3. DATA & COLLECTION METHODS
Data will be collected through:
  - In-person interviews (audio recording via digital recorder; saved to secure drive)
  - Classroom observations (handwritten notes; digitized and typed)
  - School administrative records (requested in CSV format; de-identified)

4. STANDARDS FOR DATA & METADATA
Data will be organized using consistent standards:
  - File naming: [TYPE]_[PROJECT]_[IDENTIFIER]_[DATE]_[VERSION].[EXT]
    Example: INT_TLIS_001_2024-03-15_v1.mp3
  - Metadata: Data Dictionary (INT_Definitions.xlsx) and Codebook (INT_Codes.docx)
  - Folder structure: See Appendix A (01_RAW_DATA, 02_PROCESSED, 03_ANALYSIS, etc.)
  - Data documentation: README.txt at project root

5. POLICIES FOR ACCESS & SHARING
Data contains identifiable information; sharing will be restricted.
  - Public sharing: De-identified summary statistics and findings (in dissertation/articles)
  - Restricted sharing: De-identified qualitative and quantitative data available to qualified researchers 
    upon request and execution of data use agreement
  - Not shared: Original audio recordings, identified data (destroyed per IRB protocol at project end)
  - Access timeline: De-identified data shared within 6 months of publication

6. POLICIES FOR RE-USE, RE-DISTRIBUTION, & PRODUCTION OF DERIVATIVES
Data is provided for educational and non-commercial research use only:
  - Researchers must cite original dataset (provide DOI)
  - Researchers must sign data use agreement
  - Researchers may produce derivative works (publications, presentations) if properly credited
  - Resale or redistribution without permission is prohibited

7. PLANS FOR ARCHIVING & PRESERVATION
Data will be preserved for 7 years per IRB protocol (#2024-001), then destroyed:
  - During active period (2024–2031): Stored on encrypted institutional server 
    (daily backups by IT department) and external hard drive (offsite storage)
  - Data formats: Converted to open standards (.csv, .txt, .wav) to ensure 
    long-term readability
  - Readability testing: Verified annually for technical integrity
  - After retention period: All data securely destroyed; certificates of destruction 
    obtained for audio recordings

APPENDIX A: FOLDER STRUCTURE
[Include folder structure diagram from Section 2.1]

APPENDIX B: FILE NAMING CONVENTIONS
[Include naming template and examples from Section 2.2]

APPENDIX C: DATA DICTIONARY
[Include sample from Section 3.1]
```

---

## Part 8: Your Data Management Checklist

### Pre-Data Collection
- [ ] Folder structure created (01_RAW_DATA, 02_PROCESSED, etc.)
- [ ] Naming conventions documented (shared with team)
- [ ] Encryption set up (for confidential data)
- [ ] Backup strategy planned (3-2-1 rule)
- [ ] Data Management Plan written (if funder required)
- [ ] IRB protocol specifies data retention/destruction timeline
- [ ] Data security agreement signed (if collaboration with other institutions)

### During Data Collection
- [ ] Each data file named per convention (e.g., INT_2024_001_CST_2024-03-15_v1.mp3)
- [ ] New files immediately moved to appropriate folder (01_RAW_DATA, etc.)
- [ ] Metadata recorded (date collected, method, notes)
- [ ] Processing log updated (what transformations applied)
- [ ] Backup run weekly (or daily if high-volume collection)
- [ ] Participants' contact information stored separately (not with data)

### During Data Processing
- [ ] Original raw data NEVER edited directly (create copy for processing)
- [ ] Processing documented (what changed, why, when)
- [ ] De-identification mapping created (names → pseudonyms; stored separately)
- [ ] Data dictionary/codebook updated as variables created
- [ ] Version control employed (v1, v2, v3 indicating state of file)

### Before Analysis
- [ ] All data files located (none missing or lost)
- [ ] Data completeness checked (n matches expected sample)
- [ ] Missing data patterns assessed
- [ ] Data quality checked (outliers, impossible values flagged)
- [ ] Clean dataset created (separate from raw data)

### Before Publication/Sharing
- [ ] De-identification verified (no identifiers in shareable data)
- [ ] Codebook/README finalized
- [ ] Data use agreement drafted (if sharing restricted data)
- [ ] Data repository selected
- [ ] Data deposited; DOI obtained
- [ ] Data availability statement written for dissertation/articles

---

## Summary

Professional data management is an investment that pays dividends: faster analysis, reproducible results, shareable findings, and a legacy of careful scholarship. By organizing from the start, documenting thoroughly, versioning intentionally, and preserving thoughtfully, you set yourself—and the research community—up for success.

**Key Principles:**
1. **Organize** — Consistent folder structure and naming conventions
2. **Document** — Comprehensive data dictionaries, codebooks, README files
3. **Protect** — Encryption, access control, backup strategy
4. **Version** — Track changes; maintain history
5. **De-Identify** — Remove PII before sharing
6. **Preserve** — Plan for long-term access; use open formats
7. **Share** — Deposit in trusted repository; enable future research

Your data is your research. Manage it with care.
