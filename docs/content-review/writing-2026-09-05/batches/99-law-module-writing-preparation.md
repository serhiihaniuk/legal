# Law-learning modules: inventory and first rewrite

Prepared on 12.09.2026. Read-only product inspection; only this preparation file is authored. This is not a review of all 43 modules and does not renew their legal or writing acceptance.

## Inventory verified

The current filesystem and writing inventory agree on 43 modules:

| Act                                        | Module files | Writing acceptance recorded |
| ------------------------------------------ | -----------: | --------------------------: |
| KPA                                        |           15 |                           1 |
| Ustawa o cudzoziemcach                     |            9 |                           0 |
| Work act                                   |            7 |                           0 |
| PPSA                                       |            7 |                           0 |
| Temporary-residence application regulation |            5 |                           0 |
| Total                                      |           43 |                           1 |

The accepted module is `app/data/legal-library/learning/modules/kpa/delay.ts`. Its current SHA-256, `9f1df569fe251bc48bebbda9d066557b9c5c5216f1744a05c773a984c9909b07`, matches the inventory and batch 24 acceptance. The other 42 entries are pending. A module's internal `reviewStatus: reviewed` is not a substitute for a matching writing review. This count concerns module files only, not the 1,478 provision explanations displayed through related readers.

Read the prior review README, batch 02's reading-guide boundary, batch 24's completed delay review, and the recorded remaining scope in batches 75–76. Batch 24 explicitly leaves the embedded provision commentary outside its renewed writing acceptance. Do not reopen that accepted module merely to make every page look identical.

## Three candidate modules read in full

### KPA anatomy

File: `app/data/legal-library/learning/modules/kpa/anatomy.ts`.

Reader question: how does a reader locate a precise KPA unit, identify the operative words, follow its references and derive a result without treating an article number as the whole rule?

The current module explains useful distinctions, but repeatedly asks the reader to underline, rewrite a formula and create a table. Its layers, method and lesson restate the same method. The example gives a letter date of 2 July, service on 8 July and a supposed Saturday endpoint, but supplies no year, final date or completed action. It is not an auditable completed chronology. If read as 2026, 8 July plus 14 days reaches Wednesday 22 July, not Saturday. Do not silently supply a different year to rescue the draft.

The map's `legal-anatomy` article already explains norm elements with the missing-signature example under KPA 63–64. The law module should instead offer close reading of actual KPA language and linked units. It should not reproduce that map article or the generic reading-guide introduction.

### KPA system

File: `app/data/legal-library/learning/modules/kpa/system.ts`.

Reader question: which kinds of administrative matters does KPA regulate, and which specific question is displaced by a special rule?

The existing prose mostly contrasts substantive permit conditions with procedure. That distinction is useful but already explained by the map's `special-vs-kpa` article and the reading guide. Its example says that two documents have different work-start dates, but names neither date, resolves no discrepancy and identifies no actual permit condition. It remains a conceptual illustration rather than a completed evidentiary comparison.

A later rewrite should read the actual opening provisions: individual decision proceedings, certificates and the separate complaints/petitions procedure are not identical outputs. A short completed classification of named communications would add more than another generic lex-specialis paragraph. Preserve the point that a special rule displaces the particular procedural question, not the entire code. Verify any certificate or complaint provisions used beyond articles 1–5; do not infer their remedy rules from the opening list alone.

### Work-act participants and definitions

File: `app/data/legal-library/learning/modules/powierzanie-pracy/uczestnicy-i-definicje.ts`.

Reader question: which statutory subject does each real company or person represent, and how does a definition incorporated from another act change that identification?

The module has two short sections followed by questions, steps, evidence lists and an instruction to draw a role map. There is no authored factual example or resolved comparison. The provision scope says articles 2–6, while the substantive explanation is mainly about article 2. A future rewrite must either explain the additional scope or narrow it honestly.

The existing temporary-work and outsourcing map articles already explain actual organization and supervision. This law module can add close reading of the work act's definitions, including the express reference from article 2 pkt 7–8 to the temporary-workers act's definitions. A completed named-role table should identify the contract party, user-employer or service recipient from selected documents, then state what remains unresolved about work eligibility. Do not turn every client's contact or work premises into proof of temporary employment.

## Renderer mismatch is part of the first pilot

This is an observed data-to-rendering issue, not a conclusion inferred from screenshots:

- `app/data/legal-library/learning/types.ts` requires `exercise` and has no authored completed-example or sample field in `LegalLearningModule`.
- `app/features/law-library/model/learning/legal-learning-view.ts`, function `buildLegalLearningModuleView`, flattens section paragraphs. It then repeats selected paragraphs as generic layers. For a module that is not an existing document-reading introduction, it builds the displayed example using `caseQuestion` as facts, formatted steps or questions as analysis, and outcome plus exercise as the lesson. These are not authored facts and reasoning.
- `app/features/law-library/ui/learning/legal-learning-module-content.tsx` labels that block as a full case example. `legal-learning-example.tsx` displays the generated content as facts, analysis and result. `legal-learning-mechanism.tsx` displays both the flattened paragraphs and layers, so editing one paragraph can leave duplicate text in the visible page.
- KPA has a separate adapter in `app/features/law-library/ui/kpa/kpa-learning-content.tsx`. It preserves the explicit `lesson.caseExample`, but its `KpaGuideLesson` contract in `app/data/legal-library/learning/kpa.ts` still has only four text fields for the example and no filled sample or authored section headings. It also maps the old layers into the common view. Fixing only the generic adapter would miss the proposed KPA pilot.

The pilot must include the minimum shared contract, adapter and renderer changes needed to preserve authored sections and a real completed example, including a filled specimen or table where useful. Do not postpone this mechanism change and merely insert better prose into fields that the adapter will relabel incorrectly. Preserve existing IDs, routes and useful source/provision navigation. Avoid forcing all 43 modules into a single migration or granting acceptance to unchanged pages.

Use a deliberate legacy-compatible migration boundary. An authored page must not fall through to the synthetic question-as-facts example. Add focused projection/rendering assertions that preserve authored facts, analysis, conclusion and sample, render paragraphs once, and do not fabricate a completed example from an exercise. Do not weaken existing tests to keep the misleading synthesis. The exact new type should be selected after root reads both adapters; this preparation does not prescribe a parallel content implementation.

## First substantive batch

Start with KPA `anatomy` only, together with the required shared support above. It is small enough for complete review and demonstrates the distinction between the map's conceptual explanation and an act-specific close reading. Subsequent candidates are `system`, then the work-act definitions module; this is an editorial work order, not mandatory progression for readers.

The anatomy pilot should explain the actual KPA locator, the starting event, the consequence of a cross-reference and the limit of the resulting conclusion. Use one bounded chronology rather than a survey of every remedy. A possible replacement example assumes effective service on the duly appointed representative on 08.08.2026, a specified 14-day response period, the nominal endpoint on Saturday 22 August, and the resulting Monday 24 August endpoint. The response is actually lodged on 21 August. The author must verify the chosen service and filing facts and applicable rule; this proposal does not assert a particular MOS or postal workflow. The result concerns timeliness only, not success on the underlying application. A filled Polish working table can show each date and its role; it is not an issued authority document.

An equally sound source-reading example may be selected if it better avoids overlap with the time/service module. In either case, the year, applicable provisions, relevant event, completed act and bounded outcome must be explicit. Do not repeat the map's KPA 64 signature specimen.

## Source verification and acceptance still needed

Reopened the official [KPA consolidated text, Dz.U. 2025 poz. 1691](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf) for the opening scope and the location of article 57. Before the anatomy rewrite is accepted, verify the current act status/amendments and read the exact selected service, day-counting, weekend and filing provisions in full, including KPA 40 and 57 if the proposed example is used. For the system rewrite, check articles 1–5 and every additional provision actually used, potentially 217 and 222–227. Scope the review to those claims; no whole-code revalidation follows.

Reopened the [current work act](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf), physical pages 3–5, to confirm that article 2 pkt 7–8 expressly incorporates definitions from the temporary-workers act. Before rewriting that candidate, verify article 2's full current definitions, the actual selected article 3–6 claims, and [Dz.U. 2025 poz. 236](https://eli.gov.pl/api/acts/DU/2025/236/text/O/D20250236.pdf), article 2. This preparation does not independently accept the existing module's entire legal scope.

After implementation, require full authored-file reading, separate legal/editorial review, relevant data and UI tests, production build, and desktop/mobile inspection of `/law/kpa/learn/anatomy`. Verify the actual specimen, source links, direct navigation, keyboard behavior and viewport width. Inspect embedded provision commentary separately; successful rendering does not accept its prose or source fidelity.

Only the three candidate modules listed above were read in full. Other modules were inventoried, not reviewed. No product edits, tests, build, global baseline change or commit were performed for this preparation.
