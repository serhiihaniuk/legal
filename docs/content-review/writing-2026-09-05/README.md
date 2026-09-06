# Complete writing and content review

Batch 38 adds the missing outgoing appeal and zażalenie document guides with Polish specimens and conditional links from all nine cases. Writing acceptance is 140 of 1,802 files. The remaining map dispositions, law modules, corpus layout audit and independent legal review remain pending; see `batches/38-outgoing-remedies.md`.

The user requested completion of the outstanding writing, document coverage, worked examples, source-text layout, and independent legal-review work, with periodic commits and pushes to main. This record tracks that scope. It does not replace the implementation plan or retroactively approve the old legal-review ledger.

## Acceptance evidence

| Requirement | Evidence needed | Current state |
| --- | --- | --- |
| Every authored page meets `legal-explanatory-writing` | Read each complete file and rendered page. Record the learner question, definitions, mechanism, distinctions, completed examples where useful, and qualifications. Preserve exact Polish source wording. | In progress; `inventory.json` lists every known authored file. |
| Every case has appropriate document coverage | For all nine guides, compare each stage and register with official requirements. Record mandatory, conditional, and working documents; verify typed links in both directions. | All nine existing guides reviewed in batches 15–23. Other purposes now follows a graduate case and distinguishes conditional special-purpose forms. Independent legal acceptance remains separate. |
| Complex documents have useful explanations and examples | Read every document guide. Explain fields, what the document proves, what it leaves open, and a completed discrepancy example where needed. Simple documents need no artificial expansion. | All 65 existing guides have writing acceptance after batch 38, including outgoing appeals and complaints. Examples include filled working records and selected fictional fragments; original-form and interface fidelity limits remain recorded in the batches. |
| Original laws remain readable and faithful | Audit every current provision and PDF page for structure, notes, tables, forms, and lost text. Retain original layout where flowing text is unsuitable. Record anomalies and visual checks. | Reader implemented; corpus-wide visual audit pending. |
| Legal statements and independent review are current for their stated edition | Record exact official sources, status, amendments, timing, and transitions for each reviewed topic. Obtain a distinct review, with current hashes, before marking independent review accepted. | Existing 2026-07-18 ledger failed strict validation with 95 issues at the initial inventory check. Later edits have not renewed its hashes or attestations; that count is not a current result. |
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

Batch 15 rewrites the complete work guide around one dated fictional case. Its six stages reuse a register of 34 documents, with conditional requirements and separate filing, evidence, correspondence and decision records. The guide has its own 06.09.2026 verification date. Its four authored files receive writing acceptance; eight other complete cases remain pending.

Batch 16 rewrites Blue Card around a programmer proving qualifications through experience. Its six stages use 35 documents and explain the separate annexes, salary calculation, evidence correction, UKR exception and old-permit work-change rules. A new notification guide includes a filled Polish fragment. Work and Blue Card share twenty unchanged filing and procedure definitions.

Batch 17 rewrites the student case around a first-year master's application and a missing tuition receipt. The six stages use 32 documents and connect the university annex, a completed budget, the response deadline and obligations after the decision. A new notice guide contains a fictional Polish fragment; the financial-evidence guide adds a filled bank-document comparison.

Batch 18 rewrites the business case around a shareholder and board member whose company proves a year of qualifying employment. Its six stages use 36 document entries. A new corporate work-permit guide contains a fictional Polish fragment; the business-evidence guide adds a filled employee comparison. The company and personal conditions, and the different economic tests for work and residence, remain distinct.

Batch 19 rewrites the family case around a wife joining a husband with pobyt stały, two addresses and a dated response. Its six stages use 33 document entries. The family-evidence guide now contains filled address and maintenance comparisons. Sponsor status, the applicant's location and conditional paper forms are explained separately.

Batch 20 rewrites permanent residence around a Karta Polaka holder and a one-year lease. Its six stages use 29 document entries with permanent-residence filing rules. A new Karta Polaka guide contains a filled comparison of the card, visa and settlement evidence. Permit fees, personal actions, return of Karta Polaka and the ten-year residence card remain separate questions.

Batch 21 rewrites the EU resident guide around two years of studies, four years of work and a salary payment recorded in the following month. Its six stages reuse 31 document definitions. Qualifying years, continuity, the income window, housing and language evidence remain separate checks. Local UI coverage now reports every guide and document separately; bounded corpus-import concurrency avoids the reproduced timeouts without relaxing assertions.

Batch 22 rewrites CUKR around a passport correction, signed MOS application, termination of a pending temporary proceeding and personal card collection. Its six stages reuse 23 typed document definitions and one preparation action. The notification guide adds a filled Polish address-change fragment. Card issuance, collection information and the start of the permit are separate events. Mobile document titles and status badges now wrap without competing for a narrow row.

After batch 22, 111 of 1,793 inventoried files have current writing acceptance, including all 61 document guides and eight complete case guides. The corpus audit must address the university and family annex page ranges, the family form's sponsor-status choices and the split words in extracted Polish text recorded in batches 09 and 13.

The official RPO/MSWiA correspondence checked in batch 20 identifies a court-practice issue concerning the statutory suspension of office deadlines. Review all art. 100d explanations across cases, the map and law modules against that issue before final legal acceptance. Writing acceptance does not settle this question.

Batch 23 completes the ninth case guide with a graduate job-search example, a missing insurance attachment and a timely response. It adds a filled search-correspondence record and a diploma-date example. The guide separates the graduate filing package from researcher, trainee/volunteer and ICT forms, and explains the other special categories without turning them into one permit. The current graduate work exemption is distinguished from older full-time-only guidance and from the residence requirement.

After batch 23, 116 of 1,797 inventoried files have current writing acceptance, including all 62 document guides and all nine existing case guides. This is writing and scoped source-review progress, not independent legal acceptance.

1. All map topics, remaining law learning modules, and provision explanations. Reconcile art. 100d explanations with the recorded court-practice issue.
2. Remaining interface copy and behavior. The mobile case subtype bar does not bring a later selected subtype into view on direct loading.
3. Full extraction and original-layout audit, including the recorded annex and split-word discrepancies, then distinct independent legal review.
4. Final completeness audit against every row above, final verification and delivery.

Batch 24 rewrites the inactivity map topic and KPA delay module with a shared explanation of the special residence-office suspension and a completed nonfinal court example. The map renderer now presents each model field once in paragraphs. Official-source checks distinguish statutory text, administrative guidance and court reasoning. The current inventory has 119 accepted files out of 1,798. Case-guide deadline reconciliation remains the immediate next task; no case-file acceptance was renewed by this batch.

Batch 25 reconciles the eight ordinary case guides with that shared explanation. Their ordinary periods and applicant-response dates remain distinct. The family and business deadline registers now include the ordinary period; the business and graduate personal-appearance consequences are corrected under art. 106i. Bounded amendment evidence renews 17 previously accepted writing hashes; the inventory remains 119 of 1,798. The immediate next interface task is the offscreen selected subtype on mobile. Remaining map and law writing, original-source layout and independent legal review retain their full scope.

Batch 26 fixes active case-navigation visibility and hides the two navigation scrollbars while retaining horizontal scrolling. Direct loads, Back and resizing now keep the selected subtype visible. The inventory records 121 accepted files out of 1,799. The user's next priority is the map module, beginning with a contents and organization audit before rewriting its overview and individual topics. Module landing pages must explain their subjects as standalone articles. Remaining source-layout and independent legal review stay open.

The map contents audit is recorded in [map-contents.md](map-contents.md). It assigns every one of the 63 existing topics a destination and purpose, identifies overlaps and missing dedicated explanations, and sets the migration order. The target uses subject chapters, with the case sequence explained separately, and preserves existing IDs during migration. These organization decisions precede individual rewrites. They do not mark the current map prose as reviewed or change the live navigation yet. The legacy weekly learning page, competing tree/journey hierarchy and incorrect external reference in `goal-of-stay` are explicitly tracked.

Batch 27 implements the primary chapter assignments, stable chapter anchors, direct/Back navigation and weekly-schedule redirect. The homepage now explains the subjects and their connections with a completed fictional document comparison. Removed competing header paths and repeated stage metadata. Four reviewed interface/overview files bring writing acceptance to 125 of 1,799. The flexible article contract, detailed topic rewrites, planned splits/merge and coverage gaps remain next, followed by the full source-layout and independent legal review.

Batch 28 implements authored map sections and matching page contents. The first migrated article, `other-stay`, now distinguishes named and residual grounds, explains the graduate route and gives a completed accommodation example. Its source check includes temporary-protection limits. The misplaced article 114 link is corrected. One article receives writing acceptance, bringing the total to 126 of 1,800; the shared renderer change does not accept unmigrated text. Study/research and family classifications, deeper parent articles, the decision merge and remaining map gaps continue next. Law-module rewrites, original-source layout and independent legal review remain open.
