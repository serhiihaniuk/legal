# Reconciliation of existing document destinations

Authored, independently reviewed and verified on 10.09.2026. The starting audit below followed graduate checkpoint ffe258d57e94b46f569e400a76ef486beafb8d60. Batch 68 and this reconciliation form the next checkpoint. No global legal-baseline change is claimed.

The focused residential-lease and private-policy guides now exist. Some earlier migrated cases still link their specific selected documents to broader collections:

| Location                                        | Current selected document                                                                             | Destination to evaluate                            |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| student/documents.ts and student/reference.ts   | Signed lease, 1,200 zł per month including housing charges; period covers the existing student budget | residential-lease                                  |
| student/documents.ts and student/reference.ts   | Paid private policy covering treatment in Poland with its conditions                                  | private-health-insurance-policy                    |
| business/documents.ts and business/reference.ts | Applicant's signed residential lease, distinct from company premises                                  | residential-lease                                  |
| resident/documents.ts                           | Generic title about legal entitlement, although the filing stage expressly selects a current lease    | Name the selected lease and link residential-lease |

Student and business facts already select these instruments. Do not invent new amounts or change their packet dates. The resident filing stage explicitly uses a lease; narrow the register title while keeping the separate explanation of other possible legal titles. Preserve the resident-specific rule about who may grant acceptable użyczenie and the original presented at personal appearance.

Before implementation, verify the scoped statutory claims that each destination needs. In particular, add a bounded student-insurance explanation for art. 144(1)(2)(a), and ensure the lease guide explains its different role for student cost calculations, business accommodation and the resident's legal-title attachment. The family and graduate specimens are separate examples; changing a link must not silently add their facts to earlier cases.

Verify every changed case row and condition reference, generated reverse contexts, visible filing/reuse actions, mobile layout and the exact document destination. Existing broader guides remain useful explanatory overviews. Update semantic tests and independent-review evidence only for actually reviewed changes. Map/law writing, source fidelity and whole-project legal review retain their full scope.

## Implemented result

Student, business and resident registers and condition references now lead to residential-lease. The student policy leads to private-health-insurance-policy. The resident row names the already selected signed lease; the earlier stage rules still separate the initial digital copy from the current document presented at appearance. No new rent, policy dates, payments or document submissions were added to these cases.

The lease guide now explains student housing costs and the Belarus exception, business personal accommodation, resident legal-title and użyczenie rules, and the permanent case's one-year lease. The family specimen remains explicitly separate. The private-policy guide adds the student insurance rule without inventing a ZUS document for private coverage.

Official sources checked live on 10.09.2026:

- [Foreigners act](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 142 ust. 1 pkt 2, art. 144 ust. 1 pkt 2 lit. a and ust. 1a–1c, art. 219a, 219d and 219e. Physical pages 182, 185, 299–302. The permanent lease paragraph is covered by batch 68's art. 195 review.
- [Belarus housing-cost exception](https://eli.gov.pl/eli/DU/2020/1688/ogl) and [issued text](https://eli.gov.pl/api/acts/DU/2020/1688/text.pdf).
- [MOS activation notice](https://eli.gov.pl/api/acts/MP/2026/370/text.pdf), effective 27.04.2026.

Reviewer ukr_work_sources independently accepted the six case deltas authored by legacy_case_audit, after reading their stage and guide context. Reviewer legacy_case_audit independently read and accepted both complete destination guides authored by root. Exact hashes are stored in reviews.json and checked before acceptance. Review does not renew unchanged legal topics throughout those routes.

Semantic coverage tests passed with the concrete destinations. No new document IDs were created. Full verification and final browser results follow after the run.

Browser checks confirmed the student lease and policy links in its open filing list, including keyboard navigation to the policy guide. Business and resident filing lists link the selected lease directly. The lease guide's related-case disclosure includes student, business, resident and permanent routes. New paragraphs and the Polish response example remain readable at 360 × 844 and 1440 × 1000, with no viewport overflow or recorded console errors. Preview validation passed for 84 evidence documents and nine case routes; the writing inventory remains 192 accepted files out of 1,822.

Full verification passed together with batch 68: 239 application tests in 41 files, typechecks, corpus/review/editorial checks and production build. Review ledgers and writing inventory validate. No new guide or knowledge-unit ID was created, so counts remain 84 documents, 198 knowledge units and 1,732 review-ledger entries. Log: .reference/batch68-verify.log. The full map/law writing, original-source fidelity and independent legal-review requirements remain open.
