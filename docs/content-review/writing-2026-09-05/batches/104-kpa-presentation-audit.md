# Batch 104: KPA explanation presentation audit

Preparation and read-only inspection completed on 12.09.2026. No product changes, legal acceptance, tests, build or browser verification were performed. This record concerns the presentation of three previously accepted modules, not a new verification of their legal sources or the remaining KPA modules.

## Finding

The closing lists contain useful authored explanations. They are not homework generated from questions or exercises. There is one concrete duplication in the KPA adapter: the beginner warning appears near the opening and again in the closing list. Keep the opening warning and remove its second projection. Do not delete the authored closing material merely because the headings sound generic.

The numbered heading "Послідовність перевірки" is also a poor fit for the three reviewed lists. Their items mainly state distinctions and limits; they are not a sequence of tasks. A neutral heading such as "Орієнтири для висновку" with an unordered list would describe these items more accurately. This is a presentation refinement, not evidence of synthetic content. No whole-curriculum removal or rewrite is justified by this inspection.

## Reads and actual route

Read the complete authored `modules/kpa/system.ts`, `anatomy.ts` and `delay.ts`, including their layers, methods, explanations, terms, article roles, examples and source envelopes. Also read the imported `residenceOfficeDeadlines` explanations and claims in `app/data/shared/residence-office-deadlines.ts`; the delay module's rendered explanation cannot be assessed from its local file alone.

Read the complete `kpa-learning-content.tsx`, `legal-learning-nuances.tsx`, `legal-learning-mechanism.tsx`, `legal-learning-overview.tsx` and `legal-learning-module-content.tsx`. Inspected the KPA route chain, the generic view projection and the existing KPA rendering regression test. Applied the legal-explanatory-writing skill. This is a source-code presentation inspection, not a claim to have read all 15 KPA modules or to have exercised the current browser page.

`app/routes.ts:12` gives `/law/kpa/learn/:moduleId` its own compatibility route. `law-kpa-compat.tsx` exports `kpa.tsx`, which renders `KpaGuideRoute`; that component renders `KpaLearningContent` for learning mode. The generic `law-document.tsx` route is therefore not the route responsible for the headings in question. Its generic builder currently supplies empty `pitfalls` and `method` arrays, and its table of contents omits an absent nuances section. Do not alter that builder to solve this KPA-specific duplication.

## Authored material versus adapter output

At `kpa-learning-content.tsx:71`, the optional opening question comes from an authored question. All three reviewed modules have empty question arrays. Their completed examples come directly from `lesson.caseExample`. The adapter does not turn a question into example facts or turn homework into analysis.

At lines 74–76, authored `lesson.sections` replace the legacy paragraph/layer presentation. System and anatomy therefore retain their own five subject-specific sections. They do not also display the three old layer-law summaries. `legal-learning-mechanism.tsx` renders their paragraphs, optional local steps, evidence and warnings in the authored sections; it does not render section questions as exercises.

Delay still uses the legacy paragraph form. Its six lesson paragraphs include the ordinary delay distinctions, excluded periods, the duty to explain delay and the imported special-rule/court distinction. Its three layer-law paragraphs add the ordinary time limits, the separate transmission and consideration periods for ponaglenie, and the route to court. These paragraphs contain useful details and should not disappear as a side effect of tidying headings. The full delay explanation and its qualified court example were read, not only the layer labels.

At `kpa-learning-content.tsx:118–123`, all three authored layer pitfalls and the authored method array are passed to the closing section. `legal-learning-nuances.tsx:17–35` renders them directly. It adds the heading and list formatting, not legal statements or assignments.

## Evidence from the three modules

| Module  | Useful closing content                                                                                                                                                                                                               | Relationship to the full explanation                                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| System  | A draft's correct classification does not establish formal completeness or a right to a positive result. The method distinguishes the subject of the request, its procedure and the expected response.                               | These are concise limits on the completed four-draft comparison. They recap the explanation but do not assign another exercise.                                         |
| Anatomy | A timely reply and sufficient evidence are different questions. KPA's time calculation does not create a universal 14-day deadline.                                                                                                  | Both qualifications limit the worked service-and-deadline example. The method states how the cited unit, condition and related provisions support a bounded conclusion. |
| Delay   | Premature ponaglenie has its own consequence; a dispute about delay does not replace the applicant's reply or establish permit conditions. The method explains why periods need factual grounds and why proof of ponaglenie matters. | These are procedural explanations, not a request to submit practice work. Several details deserve to remain visible even though related themes occur earlier.           |

The repeated beginner warning is different from that useful thematic recap. `kpa-learning-content.tsx:73` puts the exact same value into `boundary` that lines 118–119 put into `pitfalls`. `legal-learning-overview.tsx:90–96` renders it under "Важливе застереження"; `legal-learning-nuances.tsx:19–23` renders it again verbatim.

For system this repeats the sentence beginning "Назва «wniosek» не робить кожну заяву...". For anatomy it repeats the qualification about proper service and the date on which a client reads a forwarded document. For delay it repeats the warning ending "Спеціальні строки та правила їх зупинення розглянуто нижче." The second occurrence is especially misleading because it appears after those explanations. This is an adapter duplication, not an authored need to repeat the warning at that position.

## Smallest correction and verification scope

Change the KPA adapter's closing `pitfalls` projection to the practical and advanced warnings only. Preserve `boundary`, all authored fields, typed references, the method array and the complete examples. Do not use a broad text-deduplication pass: two separately authored paragraphs may intentionally explain related points, and plain-text equality can discard distinct reference semantics.

The neutral method heading and unordered list are optional accompanying copy changes in `legal-learning-nuances.tsx`. The outer "Нюанси й типові помилки" title can remain without claiming that the prose is homework. If the maintainer chooses to rename it, "Межі висновку" is a better description of the reviewed warnings, but this inspection does not establish that it fits every unreviewed consumer.

Extend `kpa-learning-content.test.tsx` with the three actual modules: the beginner warning should appear once in the opening, practical and advanced warnings once in the closing section, and every authored method item should remain. Preserve the existing system/anatomy assertions that each section paragraph appears once and their actual sample/facts/analysis/result remain visible. Add a delay assertion retaining its lesson paragraphs, three layer-law paragraphs and court example. These tests would protect the content from removal disguised as a copy cleanup.

After implementation, inspect the three direct KPA module pages and their table of contents. No source date should change for this presentation correction. System and anatomy currently state 12.09.2026; delay and the imported judgment-status note retain their separately checked 06.09.2026 scope. The audit does not renew either legal baseline.

## Saved correction reviewed

The maintainer selected only the concrete duplication correction. Both headings and the existing method-list presentation remain unchanged. Independently inspected the saved adapter and test diff on 12.09.2026. The adapter removes only `layers.beginner.pitfall` from the closing array; the opening boundary, practical and advanced warnings, method, paragraphs, layers, terms and examples retain their previous mappings.

The new parameterized test covers anatomy, system and delay. It requires the exact beginner warning to occur once on the page, inside the opening section and outside the closing section. It checks that the closing section still contains both distinct warnings and every authored method item. The earlier system/anatomy section-and-specimen assertions remain intact. The additional delay paragraph/layer assertion suggested above was not added; the reviewed adapter diff does not change those mappings.

No blocker was found in this exact presentation delta. This is a code-and-copy review of the saved change, not a report that tests or browser checks passed. The maintainer runs those checks separately. No authored legal content or legal-state date changed as part of this correction.

Reviewed SHA256 values:

- `app/features/law-library/ui/kpa/kpa-learning-content.tsx`: `EC8A75D9B8934FE0AEBC3CB14DE5390872206DEFD8CD98A80864DB26647FBF76`.
- `app/features/law-library/ui/kpa/kpa-learning-content.test.tsx`: `452CD3417035148F10D5734D92DA75F00C47C8B575C09CC6A62D50A1224825CE`.

The final test hash includes `afterEach(cleanup)` and its two imports. The maintainer's focused run exposed retained DOM between cases, so the previous role queries encountered earlier renders. Independently inspected this final delta: cleanup isolates each render without removing or weakening any assertion. The maintainer reports ten focused tests passing after the correction; this reviewer did not rerun them. The presentation review remains accepted at the adapter hash above and the updated test hash.

## Separate unresolved provision-accordion repetition

The maintainer's browser inspection found another repeated passage in the generic provision accordion. A source read confirms its cause. In `legal-learning-view.ts:99–115`, `explanationTitle` derives a title from the first segment of `explanation.summary`, splitting on a period, semicolon or colon after removing a leading locator. At line 177 the generic builder passes that derived title into the provision view. It is not a separately authored short heading.

`legal-learning-provisions.tsx:106–114` displays that derived title and the full summary together inside the accordion trigger. The full summary then appears again in the expanded content at lines 127–134. Thus the beginning of the summary can appear as a title immediately before the whole paragraph, and opening the item repeats that paragraph again. This issue is separate from the KPA beginner-warning projection fixed above. The shared renderer also accepts independently supplied titles, so a generic removal of every title would discard meaningful headings in other callers.

Leave this unresolved in batch 104. A targeted follow-up should distinguish a real short title from a title derived from summary text, decide where the summary needs to remain visible, and verify closed and open items. Preserve legal explanations, typed provision links and genuinely authored headings. This record establishes the source-code mechanism and attributes the visible finding to the maintainer; it does not claim this reviewer performed the browser inspection or implemented a correction.

## Root integration verification

The correction was integrated and verified with batch 103. Full verification passed with 300 application tests and production build; ten focused publication/KPA tests also passed after explicit DOM cleanup. All three actual KPA pages rendered at 360 pixels with the warning appearing once, retained closing text and examples, valid contents targets and no viewport overflow. Delay was also inspected at 1440 pixels. Existing scoped dates remained unchanged. Browser errors were empty. The [batch 103 completion report](103-work-access.md) records the commands, screenshots and broader acceptance limits. These checks do not close the separate accordion repetition above.
