# Batch 41: court complaint and judgment documents

## Coverage gap

The catalog explained administrative appeals and orders, but had no dedicated document page for a complaint to WSA or a court judgment. The WSA article introduced those materials without giving each a reusable document entry.

Added /documents/judicial-complaint and /documents/court-judgment. Both use the existing guide and specimen components. Each contains a clearly fictional Polish fragment, explanations of its parts and a completed example with a bounded result. The complaint example distinguishes confirmed filing from a favorable judgment. The judgment example distinguishes annulment of a refusal from the grant of a permit.

The complaint guide explains the subject, requested outcome, objection, reasons, copies, signature, representation, filing record, fees and the effect of submission. It preserves the statutory deadline protection for a complaint filed directly with the court on time. The judgment guide explains sentencja, uzasadnienie, rejection versus dismissal, finality, the request for reasons and the separate cassation deadline. It distinguishes a party argument reproduced in reasons from the court's own finding.

## Integration

- Added typed document IDs, catalog entries, aliases, companion links and generated knowledge registration.
- Added both documents to the WSA map node's explicit document list, producing reverse map references.
- Added shared conditional requirements to the decision stage and document register of all nine case routes. They are not filing attachments. Three routes use explicit registers and were updated alongside their stage lists.
- Extended the existing cross-module coverage test to require illustrated guides, exactly one conditional occurrence in each register and decision stage, no filing-stage occurrence, and reverse case/map references.
- Updated the review tool's expected document count from 65 to 67 and tested the two new inventory identities. This preserves its completeness check rather than removing it.

Existing accepted case and WSA text was retained. Their writing hashes were refreshed only for these reviewed document references and register entries. Previous evidence remains in batches 1-40 and git history; this batch does not repeat a full legal review of all nine routes.

## Official-source verification

Checked 10 September 2026 against [PPSA status](https://eli.gov.pl/eli/DU/2026/143/ogl) and its [updated statutory text](https://eli.gov.pl/api/acts/DU/2026/143/text/U/D20260143Lj.pdf), incorporating Dz.U. 2026 poz. 846. The amendment's commencement was verified in batch 40. Future electronic-delivery wording marked for October 2029 was not presented as current.

Scoped checks cover art. 34-37, 46-61, 64a-64e, 83, 138-145, 149-153, 168-177, 219-220 and 243-246. In particular, verified the content of sentencja under art. 138, the request for reasons under art. 141, delivery under art. 142, finality under art. 168-171, and ordinary cassation requirements under art. 175 and 177. Fictional specimens are authored teaching material, not court quotations. No individual judgment was treated as source evidence.

Only the two new guides carry the 10 September review date. The global legal-state baseline remains 18 July 2026. No corpus edition was changed and no new independent acceptance was granted.

## Verification

- Type checking, script type checking, knowledge registration, source-reader check, lint and formatting passed.
- All 198 application tests passed. The targeted document suite passed 19 tests.
- Corpus checks passed with the existing Windows symlink skip.
- The first full verification stopped at the stale expected catalog count. After correction, all 15 content-review tests passed. Editorial validation and the production build then passed.
- Reference previews passed for 67 documents, five acts, 2,573 provisions, 63 map references, nine routes and seven official sources.
- Inspected the complaint specimen at 1440 px and judgment specimen at 360 px. Both fit their viewports. Keyboard navigation from the judgment to its companion complaint guide worked; browser errors were empty. Each new page exposes ten usage contexts, the WSA topic and nine case routes.

A separate validation of the saved legal-review ledger found 143 stale-hash or missing-entry issues accumulated across earlier batches. Regenerated its 1,715 entries with the existing generator. Baseline validation now passes. The generator retained hash-valid reviews and reset changed entries to pending: 94 previous cross-review acceptances were invalidated (three KPA modules and 91 teaching-page entries). Both new guides have pending author/cross status in that legal ledger. Historical review records remain in git. Writing acceptance and independent legal acceptance are different records.

Writing acceptance is 146 of 1,804 files. This is author writing review, not independent legal acceptance. Remaining map articles, law modules, provision commentary, PDF layout audit and independent review remain open. Additional procedural document gaps, including a dedicated ponaglenie guide, still need assessment.
