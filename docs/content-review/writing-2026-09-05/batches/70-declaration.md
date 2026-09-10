# Batch 70: declaration article audit

Status: implemented and independently reviewed on 10.09.2026. The initial source audit below was conducted against checkpoint `49a0b06`; final accepted hashes and corrections follow it. The global legal baseline and the remaining project scope are unchanged.

## Scope and placement

Read `app/data/legal-map/editorial/topics/declaration.ts`, `work-instruments.ts` and `work-entry.ts`, the map/journey placement, and the installed `legal-explanatory-writing` skill. Keep stable node `declaration`, export `declarationTopic` and knowledge ID `map-topic:declaration`.

The parent topics already explain choosing a work instrument and checking access to work. This child should explain the life of an actual registered oświadczenie: eligibility, filing, registration, the contract and actual start, later changes, and continuation after its stated period. No new map split is needed. A separate guide for the registered document is a possible next batch, not part of this audit.

The existing article has generic fields, no completed example and no visible record. Its Georgian transition is incomplete, the nonstart clock refers to the submitted rather than registered date, and continuation is named without explaining its conditions. The Ukrainian paragraph needs the already-authored post-March 2026 distinction, not a bare reference to work-law art. 5a.

## Official sources checked

Page numbers below are physical PDF pages, starting at 1.

| Source                                                                                                                     | Exact locators and scope                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Current work act, Dz.U. 2025 poz. 621](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf)                    | Compiled text dated 17.06.2026, incorporating 2025/1794 and 2026/203, 473, 734. Art. 61–62, pp. 49–51: eligibility and declared fields. Art. 64–67, pp. 52–54: authority, later registered start, refusal, processing and remedies. Art. 68–71, pp. 55–57: contract, changes, notifications and continuation. Art. 102–103, p. 97: pre-June 2025 proceedings and existing entries. Art. 109, p. 99: technical rollout. |
| [Citizenships, Dz.U. 2025 poz. 1617](https://eli.gov.pl/api/acts/DU/2025/1617/text/O/D20251617.pdf)                        | § 2: Armenia, Belarus, Moldova and Ukraine. § 3 preserves Georgian work on entries made before commencement, to their stated end. § 4 separately preserves old rules for pending proceedings. § 5: 01.12.2025. Do not describe the Georgian transition as limited only to entries already registered by that date.                                                                                                     |
| [Documents, Dz.U. 2025 poz. 1629](https://eli.gov.pl/api/acts/DU/2025/1629/text/O/D20251629.pdf)                           | § 7: passport pages, fee evidence, conditional agency/regulated-profession documents. § 8: electronic documents/copies; originals and further evidence on request; comparator, financial resources and known convictions statements; translation rule excluding travel documents. § 9: 01.12.2025.                                                                                                                     |
| [Fees, Dz.U. 2025 poz. 1622](https://eli.gov.pl/api/acts/DU/2025/1622/text/O/D20251622.pdf)                                | § 2 pkt 5: 400 zł for a declaration. § 3: pending proceedings retain old rules. § 4: 01.12.2025.                                                                                                                                                                                                                                                                                                                       |
| [Minister's communication of 28.05.2025, poz. 15](https://www.gov.pl/attachment/fc45e79c-2206-483b-9ff2-f1c7d94a1038)      | Pkt 2, pp. 1–2: declaration contract-copy component launched 01.07.2025. Distinct from the wojewoda work-permit component, launched 01.08.2025.                                                                                                                                                                                                                                                                        |
| [July amendment, Dz.U. 2026 poz. 473](https://eli.gov.pl/api/acts/DU/2026/473/text/O/D20260473.pdf)                        | Art. 8 pkt 2 adds work-law art. 69 pkt 5. Art. 20 and [ELI metadata](https://eli.gov.pl/eli/DU/2026/473/ogl) confirm commencement on 08.07.2026. Both an agreed change from a civil contract to employment and a PIP decision finding employment are covered.                                                                                                                                                          |
| [Contract-system amendment, Dz.U. 2026 poz. 734](https://eli.gov.pl/api/acts/DU/2026/734/text/T/D20260734L.pdf)            | Art. 5 pkt 2 changes work-law art. 68 ust. 1 pkt 2; [ELI metadata](https://eli.gov.pl/eli/DU/2026/734/ogl) confirms 20.06.2026. Art. 6 has separate rollout/communication provisions for new eUmowy functions. Enactment does not prove every new function is operational. Use the established praca.gov.pl copy route in the fiction.                                                                                 |
| [Current Kraków employment-office guidance](https://gupkrakow.praca.gov.pl/oswiadczenie-o-powierzeniu-pracy-cudzoziemcowi) | Sections on employer duties, changes and notifications corroborate Polish contract transmission, minimum/comparator distinctions and art. 69–70. It states 2026 minimum amounts of 4806 zł monthly and 31.40 zł hourly. Local correction recommendations must not become nationwide statutory deadlines.                                                                                                               |
| [Visa-free work-permit restriction, Dz.U. 2026 poz. 1072](https://eli.gov.pl/api/acts/DU/2026/1072/text/O/D20261072.pdf)   | §§ 1–3: Venezuela, Georgia and Colombia; work on a zezwolenie na pracę during visa-free stay, effective 22.08.2026. Earlier actual work may continue only to the end of that visa-free stay. The instrument named here is a work permit, not an oświadczenie. Do not extend this rule to the Moldovan declaration example.                                                                                             |

## Corrections the rewrite must retain

- Separate submission, entry and actual commencement. Entry is not a residence title, and a filing receipt is not proof of entry.
- Explain the 24-month period and start within six months of filing as eligibility limits. Corporate functions and seasonal activity are outside this route; temporary agency work has its own recorded user-employer details.
- Keep refusal separate from leaving a declaration without examination. Processing periods belong to art. 66; art. 67 excludes KPA art. 37 and makes the employer the sole party.
- Preserve the conjunction in the salary refusal wording. Separately explain the comparator statement and ongoing minimum-pay obligation. The example may satisfy both without deciding a disputed lower-pay case.
- Distinguish the seven-day actual-start notice from the fourteen-day nonstart notice anchored to the registered start. Definitive nonstart or early termination is a separate notice that annuls the entry by law. Do not invent a seven-day deadline for that latter notice.
- Do not turn permitted changes into an unrestricted new job or employer. A changed position name requires unchanged duties; increasing hours also requires the related pay adjustment.
- Continuation requires at least three months of actual employment under an umowa o pracę, the timely qualifying application, unchanged employer/position and proper formal status. It ends on permit issuance or service of refusal, not refusal becoming final. Voluntary suspension excludes it. Residence remains a separate question.

## Proposed article sections

1. Who can use the declaration and what it authorizes.
2. What the employer submits and what registration changes.
3. Reading the registered conditions before actual work starts.
4. Start, nonstart and early termination as different events.
5. Changes that fit the existing entry and changes that do not.
6. Continuing employment after the declared period, with one completed example.

Use subject-specific Ukrainian headings. Keep ordinary navigation in related controls. Legal and actual document references in prose must remain typed. A concise Polish record fragment can illustrate registered conditions without pretending to reproduce a mandatory official layout.

## Proposed fiction, coordinated with the author

This is a new illustrative case, not an alteration of another route. A Moldovan warehouse employee works directly for Polish firm A. No agency, seasonal activity, corporate function or separate exemption is selected. A compatible Polish work visa permits stay through 30.11.2026.

| Date       | Record or event                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 18.03.2026 | Employer submits the declaration.                                                                                                                                                                                                                      |
| 25.03.2026 | Entry records work from 01.04 to 31.08.2026, warehouse position, umowa o pracę, full time/40 hours weekly, 5500 zł gross monthly. The employer has established 5200 zł for comparable work. These are fictional facts, not universal pay requirements. |
| 30.03.2026 | Contract is signed on those conditions; its Polish copy is transmitted through praca.gov.pl.                                                                                                                                                           |
| 01.04.2026 | Actual employment begins.                                                                                                                                                                                                                              |
| 03.04.2026 | Employer sends the actual-start notification.                                                                                                                                                                                                          |
| 20.08.2026 | After more than three months of employment, the same employer submits a formally complete work-permit application for the same position and employment contract.                                                                                       |
| 10.09.2026 | Application remains pending, without voluntary suspension. The employee continues on unchanged conditions. No grant or refusal has occurred.                                                                                                           |

The completed conclusion should explain why work can continue after August in these selected circumstances. It must not say the declaration was extended or that the pending work-permit application extended residence. A contrasting change of employer or missing qualifying employment history can be explained briefly without inventing another full case.

## Remaining limits and verification

No live praca.gov.pl account or newly expanded eUmowy function was tested. No blanket assertion about absence of every possible local restriction or annual limit was verified. Do not add one. Regulated-profession and agency attachments remain outside the selected warehouse packet. Do not invent a universally required diploma or extra employer certificate.

The source audit supports authoring this bounded article, not accepting it. Independent full reading, typed-reference/publication checks, formatting, build and browser checks remain with the implementation batch. Only this pending note was changed by the audit agent.

## Implemented article and independent review

The article now explains eligibility, registration, contract transmission, notifications, permitted changes and conditional continuation in six subject sections. It includes a completed fictional Polish record and dated chronology, with an explicit destination for the registered document.

Independent reviewer ukr_filing_review read both complete authored files against the listed primary sources. Review corrected the agency attachment: the user employer prepares confirmation of agreed referral; the regulation does not require it to be a contract. The guide's date wording and range reference were corrected separately. No remaining scoped content/source blockers were found.

Accepted article SHA-256: F3C9708D88E22AE28B2E8841AC1977D2807929078086FD086C099ED510CD5E0F. This acceptance concerns the rewritten article on 10.09.2026, not the global legal-review ledger or every local restriction. Runtime verification is recorded with batch 71.
