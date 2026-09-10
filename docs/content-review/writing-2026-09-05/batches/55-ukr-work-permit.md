# Batch 55: ordinary work and residence permit with UKR

Rewrote /map/ukraine-ordinary-2026 as a six-section article answering how a person with UKR can obtain an ordinary permit through work, which conditions remain applicable, and what changes during filing and after grant. It now explains the specific access exception, work-permit exemption, full monthly salary requirement, evidence, MOS filing, register fingerprints, continuing protection and the decision's work conditions.

A completed fictional example compares a half-time contract for 3,000 zł with the 4,806 zł monthly residence-permit threshold for 2026. Its filled table distinguishes an insufficient initial amount, an unexplained 5,000 zł annex and an actual agreed pay change supported by matching documents. The conclusion concerns that condition alone. It does not suggest falsifying a salary or treating a higher figure as a guaranteed permit.

## Companion pages and duplicate removal

Corrected the passport guide's broad personal-appearance statement and added the UKR exception to the MOS and fingerprint guides. Read the full guides and preserved their existing completed examples and guide-wide source dates. New source notes state that the 10 September check concerns article 45 only. This is a bounded legal correction, not a new certification of every existing claim in those guides. Prior writing evidence:

- app/data/document-library/editorial/guides/passport.ts: docs/content-review/writing-2026-09-05/batches/11-identity-and-status.md
- app/data/document-library/editorial/guides/mos-application.ts: docs/content-review/writing-2026-09-05/batches/05-representation-and-filing.md
- app/data/document-library/editorial/guides/fingerprint-record.ts: docs/content-review/writing-2026-09-05/batches/12-residence-applications-and-biometrics.md

Removed the unused legalData.caseStudy object and its private source table, obsolete helper constants and CaseTimelineEvent/CaseRoute/CaseStudy types. Repository-wide inspection found no runtime, test or script consumer of that property or whole-object serialization. Current cases come from getCaseGuideRoute and nine authored routes. CaseDocument and CaseDeadline remain because the current contracts extend them. The removed copy contained stale UKR/CUKR statements; rewriting an unused duplicate would preserve the maintenance problem. The remaining map data prose has not received blanket writing acceptance.

## Official sources checked on 10 September 2026

- [Transition act, Dz.U. 2026 poz. 203](https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf), articles 40–41, 45(1), 45(3–6) and 54. The UKR exception removes the protection bar only for listed categories; it does not waive all entry conditions. Fingerprints come from the register or are collected after grant when absent/untransferable. The signature specimen and electronic filing remain distinct. Article 41's post-protection work bridge applies to Ukrainian citizens for three years from 5 March 2026, not every former UKR holder.
- [Foreigners act, compiled text dated 7 April 2026](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), articles 98–99, 106c–106e, 108, 113–115, 117a, 118 and 121. Work purpose beyond three months, retained insurance/monthly minimum, limited exemption, evidence, signatures, final-decision limit and applicant-requested suspension, employer-specific versus exempt decisions, cessation of purpose versus lost work with a named employer. The MOS notice below confirms commencement of the delayed electronic-filing provisions.
- [Protection act, compiled text dated 18 March 2026](https://eli.gov.pl/api/acts/DU/2025/223/text/U/D20250223Lj.pdf), articles 106 and 109b. Filing an ordinary application does not itself end protection; independent cessation events can occur. Grant of temporary residence is distinct from CUKR collection. The article does not invent an exact service/finality date for every possible grant situation.
- [Employment act, current compiled text](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf), articles 3(1)(12) and 5a. Temporary-protection work access, notification deadline and changed-condition triggers. Grant of a residence decision itself is not listed as a new notification trigger. Independent source checking found amendments 2025/1794, 2026/203, 473 and 734 represented in the text. Amendments 473 and 734 affect other listed provisions, not these triggers. The existing work case guide already states the notification and named-employer rules correctly; no patch was needed there.
- [Minimum-pay regulation, Dz.U. 2025 poz. 1242](https://eli.gov.pl/api/acts/DU/2025/1242/text/O/D20251242.pdf), section 1. Monthly minimum 4,806 zł from 1 January 2026. The example labels its year and distinguishes the residence-permit threshold from part-time pay rules.
- [UdSC MOS notice](https://www.gov.pl/web/udsc/info-mos). 27 April commencement, electronic employer annex, signature and UPO sequence. Its generic personal-appearance paragraph is qualified by article 45 rather than copied as a universal requirement. Two older MOS-specific endpoints failed direct retrieval; the accessible general notice and statute supplied the evidence used.

The map article's scoped date is 10 September 2026. The global baseline remains 18 July 2026.

## Independent checking

Two subagents independently checked the work/notification rules and filing/biometric rules. A third inspected all consumers of the legacy case data. The work-source reviewer read the completed article and requested an explicit protection-to-work-exemption reference, the article 108 suspension qualification and clearer terminology for the combined residence/work permit. All three changes were applied. The filing reviewer identified the three companion corrections. I reviewed those diffs, read the cited statutory text and inspected the affected pages. These bounded checks do not constitute completed project-wide independent legal acceptance or a professional legal opinion.

## Verification

Full npm run verify passed, including typecheck, script types, registry and reader validation, lint/format checks, 202 application tests in 39 files, corpus and review tests, editorial validation and production build. Initial checks found bare citations in the new source notes and an unused source table exposed by removal of the legacy object; both were fixed before the passing run. Reference previews passed for five acts, 2,573 provisions, 67 documents, 63 map nodes and nine case routes.

Inspected the article at 1440 px and 360 px. All six sections render; the contents link reaches the biometric section beneath the header. The example table accepts focus and ArrowRight scrolling while page width remains 360 px. A typed article 114 link opens the intended provision. Inspected the passport and MOS corrections on desktop and fingerprints on mobile with no page overflow. Browser error check was empty. Existing case routes remain covered by the full application and reference checks.

Writing hashes and review ledgers are regenerated separately. The three companion records preserve prior writing acceptance with the bounded corrections above; the map article adds one newly reviewed file.

## Next work

Continue through the residence chapter from goal-of-stay and temporary-common, then reconcile temporary-goals and their detailed branches. Their current generic sections need the same subject-specific explanation and completed examples. Other map chapters, 43 law-learning modules, 1,478 provision commentary files, complete original PDF-layout verification and independent legal acceptance remain open.
