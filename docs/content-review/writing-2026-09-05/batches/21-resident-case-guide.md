# EU resident case guide

## Reader question and completed example

The guide explains how established periods of stay become qualifying years, how absences differ from that calculation, and why income records need a history rather than one annual total. Read the complete replacement overview, stages, document definitions and reference material against `legal-explanatory-writing`.

The fictional adult applicant has two years on an art. 144 student permit, followed by four years on ordinary work-related residence permits without gaps. By 1 August 2026 those six calendar years give five qualifying years. Two short trips total at most 24 days when both boundary dates are included. This deliberately stays far from the ordinary continuity limits and does not claim to settle disputed boundary-day calculations.

The signed MOS application and UPO are dated 3 August 2026. The initial bank statement ends on 30 June without the June salary. A later statement shows the payment of 3200 zł net on 10 July, connected to June through the payroll record and confirmed payment schedule. The representative receives a fourteen-day request on 17 August; the response on 28 August precedes the 31 August deadline. The evidence discrepancy is resolved without inventing a positive decision.

- Keeps the six stable stages and the current reading layout. Four authored modules own the overview, stages, document definitions and reference material.
- Reuses 31 document definitions across stages and the register. Shared procedural records are selected explicitly. The resident's application, housing, signature, personal actions and processing references use the resident provisions rather than temporary or permanent residence filing rules.
- Distinguishes mandatory housing evidence from meldunek, and limits użyczenie to the statutory relationships. Employment and ZUS are conditional sources in this example. Language evidence is conditional on age at filing.
- Explains the three-year income window before filing, historical thresholds, the precisely scoped two-year exception, and the distinction between a missing payment and a statement that ends too early.
- Distinguishes qualifying past studies from a current study-related initiation barrier. Other EU periods and Blue Card rules remain separate alternatives with explicit limits to this ordinary Polish-history example.
- Separates the indefinite permit, five-year card, subsequent card application, Polish work right and potential loss of status. The response period is not confused with the office's processing period.

Existing linked application and stay-history guides already contain filled period comparisons. The resident application example shows why two years of studies plus three years of work are insufficient. This batch reuses those guides rather than presenting a new fictional official form. Their full original-form fidelity audit remains open.

## Official checks and scope

Checks are scoped to 6 September 2026. The atlas baseline remains 18 July 2026. These are author checks, not distinct legal-review attestations.

- [Foreigners act, Dz.U. 2025 poz. 1079](https://eli.gov.pl/eli/DU/2025/1079/ogl), official reading text dated 7 April 2026, with the later amendments shown by ELI. Reviewed art. 211–219i, 222a–222d, 140 ust. 2, 230 and 243. Distinguishes the new MOS wording from bracketed old provisions. Income for two years applies to the exact case referenced by art. 211 ust. 2, not every holder of Blue Card.
- [MOS amendment, Dz.U. 2025 poz. 1794](https://eli.gov.pl/eli/DU/2025/1794/ogl), including art. 12 on pending proceedings; [commencement notice, M.P. 2026 poz. 370](https://eli.gov.pl/eli/MP/2026/370/ogl); [UdSC MOS guidance](https://www.gov.pl/web/udsc/info-mos). The example is a new application after 27 April 2026. It does not require an older paper proceeding to be filed again.
- [Resident application regulation, Dz.U. 2026 poz. 487](https://eli.gov.pl/eli/DU/2026/487/ogl). Application and biometric forms remain linked from the existing document guide. This batch makes no claim of a complete visual audit of all seventeen PDF pages.
- [Language certificates, Dz.U. 2023 poz. 1076](https://eli.gov.pl/eli/DU/2023/1076/ogl), read with art. 211 ust. 3–4; [amendment, Dz.U. 2025 poz. 622](https://eli.gov.pl/eli/DU/2025/622/ogl), art. 30. The policealna transition does not cover this new August 2026 proceeding. A permissible university diploma is a different category.
- [Income thresholds, Dz.U. 2024 poz. 1044](https://eli.gov.pl/eli/DU/2024/1044/ogl), effective from 1 January 2025; [historical thresholds, Dz.U. 2021 poz. 1296](https://eli.gov.pl/eli/DU/2021/1296/ogl), repealed from that date. The old 776/600 zł thresholds explain 2023–2024, and 1010/823 zł the later period. The statutory test requires exceeding the applicable threshold.
- [UdSC resident guidance](https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2), specifically its explanation of stable income and fluctuations. Some procedural and Blue Card summaries on that page are narrower or older than the current statute. Those summaries were not copied as universal filing or income rules.
- [Stamp-duty act, Dz.U. 2025 poz. 1154](https://eli.gov.pl/eli/DU/2025/1154/ogl), current reading text dated 3 August 2026, annex part III item 4: 640 zł. [Card-fee regulation, Dz.U. 2022 poz. 1583](https://eli.gov.pl/eli/DU/2022/1583/ogl), § 2: standard 100 zł. Permit and card payments, reductions and exemptions remain separate.
- [Employment act, Dz.U. 2025 poz. 621](https://eli.gov.pl/eli/DU/2025/621/ogl), art. 3 ust. 1 pkt 7; [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/eli/DU/2025/1691/ogl), representation, delivery, deadline counting and appeal. The Polish resident permit is not EU citizenship or a universal work permit for other countries.
- [Special-law amendment, Dz.U. 2026 poz. 203](https://eli.gov.pl/eli/DU/2026/203/ogl), with the [RPO publication of the MSWiA reply](https://bip.brpo.gov.pl/pl/content/rpo-cudzoziemcy-postepowania-legalizacyjne-przewleklosc-mswia-odpowiedz). Administrative use of the office-deadline suspension and courts' treatment of it are distinguished. The cross-module follow-up from batch 20 remains open.

## Verification

Document coverage checks include the resident route. They compare stage entries with the shared register, require all register documents to occur in a stage, verify reverse case contexts, and reject temporary/permanent filing references in the resident document register. They check the resident application, housing requirement and conditional language, employment, civil-status and ZUS evidence.

The old UI test put all nine guides into one five-second test and reproduced a timeout. Each guide now gets its own test with the same assertions. The same correction applies to the sixty-one document rendering checks. Default concurrent corpus imports also produced timeouts in three law-resolution tests; a run with two workers passed all 169 application tests. The worker limit is now explicit. No timeout was increased, assertion removed or GitHub workflow restored.

Browser checks at 1440 and 360 px confirmed meaningful content, all six stage headings, initially folded reference sections, independently opened matrix and register, and no document-level horizontal overflow. Opened the filing documents, followed the resident application link, inspected its filled period table, expanded its case context and returned to the resident case. Browser logs contained no errors. Reset the temporary viewport override.

`npm run verify` passed: application and script type checks, generated knowledge and reader checks, lint, formatting, 169 application tests, 68 corpus tests with the existing Windows symlink skip, 15 review-tool tests, editorial coverage validation and the client/server production build. The existing font, environment-option and bundle-size warnings remain. These checks do not prove the pending visual or independent legal review.

`node scripts/content-review/writing-inventory.mjs --check` passed with 107 accepted writing files out of 1,790. The four resident modules have exact raw-file SHA-256 records. `git diff --check` passed.

## Remaining work

CUKR and other purposes remain as complete case-guide reviews. Map topics, law learning modules, individual provision commentary, remaining interface copy, the full extraction/layout audit and distinct legal review remain open. A passing test or matching writing hash does not close those requirements.
