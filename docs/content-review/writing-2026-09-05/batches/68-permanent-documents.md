# Batch 68: permanent-residence document audit

Status: authored, independently reviewed and verified on 10.09.2026. The starting audit below was read-only against batch 67 base `ffe258d57e94b46f569e400a76ef486beafb8d60`. Its unresolved facts describe that starting version. The implemented choices and final review scope are recorded at the end. The global legal baseline is unchanged.

## Scope read

- `app/data/case-guides/editorial/routes/permanent.ts`
- `app/data/case-guides/editorial/permanent/documents.ts`
- `app/data/case-guides/editorial/permanent/stages.ts`
- `app/data/case-guides/editorial/permanent/reference.ts`
- Full document guides: `housing-evidence`, `residential-lease`, `settlement-intention`, `karta-polaka`, `permanent-application`.
- Stage renderer `app/features/case-guides/ui/case-stage-documents.tsx` and the `documentUse` helper.

The route has six legacy document lists. Convert all six to explicit `documentUse` entries. The existing renderer already supports visible lists without checkboxes; no new UI component is needed.

## Preserve the selected fiction

The adult Belarusian applicant has a valid Karta Polaka matching the passport. The card has not been annulled or replaced. The applicant moved to Wrocław on 01.08.2026, started work and rented a home for 01.08.2026–31.07.2027. The national visa allows stay through 30.09.2026.

The applicant personally signed and submitted the MOS application on 17.08.2026 and saved UPO. The application states an intention to settle permanently. The representative received a request on 20.08.2026 asking whether the move lasts only for the lease year. The 14-day response deadline is 03.09.2026. On 31.08.2026 the response explained the permanent plan and supplied the signed lease and work contract. No further lease has been signed. Renewal by agreement or another home remains a plan.

The case does not state a grant, decision date, card collection, biometric appointment or certificate-issuance date. Do not turn those future branches into completed events. Do not import the separate lease guide's rent or family circumstances, the settlement overview's foreign employment, or guide-only Karta Polaka issue/expiry years into this case.

## Document changes

Line locators below refer to the audited base.

| Location                                               | Current record                                                    | Proposed treatment                                                                                                                                                                                                                             |
| ------------------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `permanent/documents.ts:35`                            | `status-documents`, visa or decision                              | Use concrete `visa` for this national visa. Keep passport as a separate record.                                                                                                                                                                |
| `permanent/documents.ts:44`                            | Current Karta Polaka plus possible issue/change decisions         | Keep `karta-polaka` for the selected card. Any additional decision remains conditional on an actual discrepancy.                                                                                                                               |
| `permanent/documents.ts:54`                            | `settlement-intention` presented as explanation plus evidence     | Initial explanation belongs to `permanent-application`; the 31 August explanation belongs to `response-letter`. Link lease and employment contract separately. Retain the overview as explanatory navigation, not a single submitted document. |
| `permanent/documents.ts:66`                            | Actual signed lease points to `housing-evidence`                  | Retarget to `residential-lease`, with the case's exact dates. Separate the lease's existing terms from the applicant's future housing plan.                                                                                                    |
| `permanent/documents.ts:75`                            | Employment contract plus unspecified confirmed work circumstances | Keep concrete `employment-contract`. Explain what this contract supports without inventing payroll, ZUS records or a separate employer certificate.                                                                                            |
| `permanent/documents.ts:84`                            | Civil-status documents for other categories                       | Remove from the selected Karta Polaka packet. Retain only in a clearly conditional category explanation.                                                                                                                                       |
| `permanent/documents.ts:115`                           | Exemption or 640 zł proof, linked as one payment record           | The selected case uses the Karta Polaka exemption. Review the card and application basis; do not list a nonexistent 640 zł receipt. Keep paid-permit variants outside this packet.                                                             |
| `permanent/documents.ts:26` and filing/decision stages | Card-fee proof appears twice                                      | Keep the actual initial 100 zł proof if author supplies the payment fact. At a later stage review the existing proof, without an instruction to pay again.                                                                                     |
| `permanent/documents.ts:127`                           | Special filing certificate                                        | Keep `proceeding-certificate`, explicitly the permanent-residence variant. It is a later issued document, separate from initial UPO. Do not invent issuance.                                                                                   |
| `permanent/documents.ts:151`                           | Decision, delivery and finality in one owner field                | Link the decision and delivery evidence separately. The finality calculation is a working conclusion. No decision has occurred in the selected story.                                                                                          |
| `permanent/documents.ts:160`                           | Residence card and Karta Polaka return                            | Separate later card review from return of the existing Karta Polaka. Only name a return receipt once its actual method is selected.                                                                                                            |

The smallest plan needs no new document ID. Create a dedicated settlement statement guide only if authoring deliberately introduces an actual standalone signed statement. The current story can explain the intent in the application and response. Ordinary written explanations should not silently become a formal statement under KPA art. 75 § 2.

## Resolve the submission history before migration

The initial list at `permanent/stages.ts:104` contains the broad intention record but not explicit lease or employment records. The request already concerns the one-year lease. The procedure list at line 183 lacks those two documents, although the response prose says they were supplied on 31 August.

A coherent proposed history, selected by the parent for the next authoring pass, is: 17 August included the digital copy of the existing lease; 20 August requested its original and an explanation of the continuing plan; 31 August supplied that same lease original, the employment contract for the first time, and the new explanation. This fits the statutory originals procedure, but **the current fiction does not explicitly establish the initial lease upload or a request for its original**. The author must state these clarifications. The employment contract does not need an invented earlier submission.

Do not label the same lease or contract as newly signed on 31 August. Do not request another copy merely because the document occurs at another stage. For each occurrence specify whether the user prepares it, submits a digital copy, presents an original, or reviews material already in the file.

Other author facts that remain unstated:

- The 100 zł card-fee payment date and proof, and any representative-fee payment or exemption.
- Whether the employment contract is specifically an umowa o pracę. Preserve the existing broad contract label until this is selected.
- The method used for the 31 August response and its exact receipt. Do not infer that initial MOS submission proves the later response was sent through MOS.
- Whether foreign-language attachments actually require translations in this packet.
- Any later personal appearance, issued certificate, decision, finality or card return. These can remain clearly conditional; no invented dates are needed.

## Stage plan

1. **Status:** review passport, the selected national visa and Karta Polaka; record the chronology. Distinguish the visa's stay function from the card's selected permit basis.
2. **Qualification:** review that card and the concrete lease/work facts supporting intent. Keep the matrix and assessment as working records. Exclude other-category civil-status documents from this packet.
3. **Filing:** submit the application, digital photo, passport pages, selected card and any explicitly chosen initial lease/contract copies. Name the actual representative document and applicable payment proof. Save UPO and the filed version. Explain the permit-fee exemption without manufacturing a payment document.
4. **Evidence:** read the existing lease and work contract against the plan; update the assessment. Do not automatically resubmit them or demand a future lease.
5. **Proceeding:** review the actual request and its delivery, submit the 31 August response and explicitly identified attachments/originals, save its actual receipt. Separate this completed exchange from conditional biometrics and the special filing certificate.
6. **Decision:** explain what to review if a decision arrives. Keep appeals, judicial proceedings and restoration of a missed deadline conditional. Separate decision, service, Karta Polaka return, existing card-fee proof and eventual residence card.

## Related reference corrections

In `permanent/reference.ts`, the current-stay condition points to a generic status bundle; use the selected visa. The intent condition labels one overview link as explanation, lease and work materials; make those actual references distinct. The procedure condition points to the file index while naming application, UPO, requests and replies; an index does not replace those documents. The no-refusal condition points to an administrative decision before a decision exists. Explain the assessment and the authority's checks without inventing an applicant's universal security certificate.

`permanent-application.ts` already explains the initial justification, copies and later originals. Its example's combined lease/work row may receive a small split into typed concrete references during implementation. Its text does not establish when those two materials were filed in the case.

## Official evidence checked live on 10.09.2026

- [Current foreigners act compilation](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 195 ust. 1 pkt 9 links valid Karta Polaka and settlement intent; art. 203d separates required digital attachments, optional early evidence and UPO; art. 203f calls for evidence/originals with at least 14 days. Art. 206 distinguishes the special certificate and conditional lawful stay. Art. 229 ust. 2 and 7 concerns first-card issuance and prior Karta Polaka return. PDF physical pages 265, 276–278, 281–282 and 320–321. The April compilation's marked MOS wording must be read with the activation notice below.
- [MOS activation, M.P. 2026 poz. 370](https://eli.gov.pl/api/acts/MP/2026/370/text/O/M20260370.pdf): activation on 27.04.2026.
- [UdSC MOS questions and answers, question 19](https://www.gov.pl/web/udsc/mos-qa): official operational guidance lists the 100 zł card-fee proof among initial uploads. Keep the separately established statutory permit-fee exemption; do not apply the generic fee paragraph blindly. This page was not used to establish the later response channel.
- [Stamp-duty act, Dz.U. 2025 poz. 1154](https://eli.gov.pl/api/acts/DU/2025/1154/text/O/D20251154.pdf): annex part III, item 3, physical page 26, exempts the Karta Polaka holder intending permanent settlement from the 640 zł permit duty.
- [Karta Polaka act, Dz.U. 2026 poz. 76](https://eli.gov.pl/api/acts/DU/2026/76/text/O/D20260076.pdf): art. 20 ust. 3, physical page 8, return within 14 days after the permanent decision becomes final.
- [Podlaski authority, Karta Polaka route](https://www.gov.pl/web/uw-podlaski/posiadacz-karty-polaka): selected card and settlement-intent evidence, with possible further clarification. This page mixes updated MOS information with old photographic/formal instructions; its three-photo instruction was not adopted.
- [KPA](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf): art. 75 and 80, physical pages 17–18, evidence and assessment of the whole file. A set of documents should not be presented as an issued certificate.
- [Civil Code compilation](https://eli.gov.pl/api/acts/DU/2025/1071/text/U/D20251071Lj.pdf): art. 659–660, physical page 139, definite or indefinite lease; the writing rule concerns a term exceeding one year. The case's exactly one-year lease must not be described as violating that rule.

## Verification still required after authoring

Resolve the initial-copy/original sequence, migrate all six lists, and independently read the final complete route and affected document guides. Then run runtime publication/coverage tests, typecheck and build. Browser QA must check six visible lists at 360 and 1440 px, concrete document links and return navigation, packet timing, overflow and console errors. None of those implementation checks is claimed by this audit.

## Implemented result and independent review

All six permanent-residence stages now use visible document lists. The 17 August packet includes the signed MOS application with its justification, passport scans, photo, Karta Polaka copy, existing lease copy, representative authority and the selected 100 zł card-fee proof. The permit-fee exemption is a guidance action, not a fictitious 640 zł receipt. The separate representative-fee question remains explicit; no kinship or payment fact was invented.

The representative received the 20 August request about permanent settlement and the lease original. The timely 31 August reply gives that same original, an explanation and the existing umowa o pracę for the first time. There is no new housing agreement, repeated initial application or invented later decision. The application justification and reply are actual places for explaining intent; the settlement guide is an overview, not a required document bundle.

The settlement guide now contains a completed fictional Polish reply matching those events. The separate foreign-employment story was replaced. The lease guide explains why a one-year contract does not itself decide permanent intent, while keeping future housing plans distinct from current rights. Batch 69 records that shared guide's review hash.

The case author and settlement-guide author worked separately. Reviewer legacy_case_audit read the final four case files and full settlement guide, accepted their exact hashes without blockers, and checked the cited official provisions. Reviewer ukr_work_sources also checked the settlement guide against the authored case. The hashes are stored in reviews.json; the acceptance script rejects subsequent drift. This is writing and scoped source acceptance, not whole-project legal acceptance.

Focused runtime coverage and UI continuity tests passed: 51 tests in two files. They verify six open lists, concrete destinations, the absence of the work contract from the initial list and its presence in the response, and direct lease navigation. Final verification results follow after the full run.

Browser checks used the running development site at 360 × 844 and 1440 × 1000. All six lists rendered without a document disclosure. The initial list exposed the nine concrete document links, and keyboard activation of its lease link opened the lease guide. The completed settlement response and the separate family lease example rendered without viewport overflow. No browser errors were recorded. Local screenshots are under ignored/untracked output and are not part of the commit.

Final verification passed: npm run verify (typechecks, generated-registry and source-reader checks, lint/format, 239 application tests in 41 files, corpus tests, review tooling tests, editorial validation and production build), preview validation, review-ledger validation and writing-inventory check. One old catalog assertion still expected the generic student insurance guide; it was updated to require the selected private-policy guide, then the full run passed. Log: .reference/batch68-verify.log. Existing build notices about envFile remain unrelated to this content change.
