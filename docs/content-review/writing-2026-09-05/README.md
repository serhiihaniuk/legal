# Complete writing and content review

The user requested completion of the outstanding writing, document coverage, worked examples, source-text layout, and independent legal-review work, with periodic commits and pushes to main. This record tracks that scope. It does not replace the implementation plan or retroactively approve the old legal-review ledger.

## Acceptance evidence

| Requirement | Evidence needed | Current state |
| --- | --- | --- |
| Every authored page meets `legal-explanatory-writing` | Read each complete file and rendered page. Record the learner question, definitions, mechanism, distinctions, completed examples where useful, and qualifications. Preserve exact Polish source wording. | In progress; `inventory.json` lists every known authored file. |
| Every case has appropriate document coverage | For all nine guides, compare each stage and register with official requirements. Record mandatory, conditional, and working documents; verify typed links in both directions. | Pending route-by-route review. |
| Complex documents have useful explanations and examples | Read all 57 guides. Explain fields, what the document proves, what it leaves open, and a completed discrepancy example where needed. Simple documents need no artificial expansion. | All 57 guides have current writing acceptance after batch 14. Examples include filled working records and selected fictional fragments; original-form and interface fidelity limits remain recorded in the batches. |
| Original laws remain readable and faithful | Audit every current provision and PDF page for structure, notes, tables, forms, and lost text. Retain original layout where flowing text is unsuitable. Record anomalies and visual checks. | Reader implemented; corpus-wide visual audit pending. |
| Legal statements and independent review are current for their stated edition | Record exact official sources, status, amendments, timing, and transitions for each reviewed topic. Obtain a distinct review, with current hashes, before marking independent review accepted. | Existing 2026-07-18 ledger fails strict validation with 95 issues as of this pass. No independent attestations renewed. |
| Changes are verified and delivered | Run relevant content and application checks, inspect desktop/mobile rendering and navigation, and push completed batches to main. | Reader checkpoint `3fea511` and specimen batch `5c501e3` pushed. Reading-guide verification is recorded in batch 02. |

## How progress is recorded

- `node scripts/content-review/writing-inventory.mjs` inventories current content and interface copy. It combines the existing inventory with authored Cyrillic prose outside the old fixed file lists. `--check` detects drift.
- `reviews.json` contains only files actually reviewed against the writing skill, their exact SHA-256, and the batch evidence path. A changed file returns to pending. Writing acceptance does not mean independent legal acceptance.
- Keep source checks and concrete findings in `batches/`. A green build, a matching hash, or a keyword scan cannot establish writing or legal quality.
- The atlas legal baseline remains 18.07.2026 until a complete source review supports changing it. Page-specific checks must state their narrower scope.
- Generated Polish legal text is not rewritten to satisfy prose preferences. Extraction and source-layout verification have a separate acceptance requirement.

## Next work

User clarifications to preserve: show what complex documents and working records actually look like, with filled illustrative specimens rather than only prose scenarios. Five specimens are complete in batch 01, four employment/insurance specimens in batch 03, four correspondence examples in batch 04, four representation/filing examples in batch 05, three decision/card examples in batch 06, four company examples in batch 07, four income/housing/family examples in batch 08, and six study/translation/authentication examples in batch 09. Batches 10–14 complete the remaining document-guide reviews. Several examples are working comparisons or selected fictional fragments, not faithful interface or official-form reproductions; the batch records state those limits. Batch 02 replaces the eight reading-guide introductions with complete answers and worked examples. Neither request is satisfied by adding more generic introductions.

Batch 10 adds four filled qualification and language examples. It also corrects the relevant Blue Card and resident-case document rows and separates document-title navigation from checklist selection.

Batch 11 adds four identity and residence-status explanations with filled working comparisons. The CUKR guide now distinguishes registry checks from certificate uploads and explains the September identity-confirmation issue.

Batch 12 rewrites the permanent-residence, resident and CUKR applications together with photo, fingerprint and signature records. Six filled comparisons explain the selected form fields, residence accounting, registry corrections and the different biometric rules. The original form layouts remain available through explicit source links.

Batch 13 adds six complete explanations and filled examples for family applications and consent, ICT, researcher and trainee/volunteer annexes, and settlement intention. Their repeated case entries now share the corrected conditional requirements. Original-form and extraction discrepancies are recorded in the batch evidence.

Batch 14 adds a filled internal case note, a missed-deadline chronology and a work-notification comparison. Conditional deadline evidence now appears at the relevant stages of all nine case guides. Work and CUKR share a corrected notification entry.

After batch 14, 74 of 1,764 inventoried files have current writing acceptance, including all 57 document guides. Focused document-integration fixes do not constitute complete case-route acceptance. The corpus audit must address the university and family annex page ranges, the family form's sponsor-status choices and the split words in extracted Polish text recorded in batches 09 and 13.

1. Work-route document journey: employer annex, contract, insurance, ZUS, representation, filing, and procedural correspondence.
2. Remaining eight case routes and their document guides.
3. All map topics, reading-guide modules, and law explanations, provision by provision.
4. Remaining interface copy, full extraction audit, and independent legal review.
5. Final completeness audit against every row above, then final verification and push.
