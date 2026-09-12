# Batch 108: module overview presentation review

Independent pre-implementation review on 12.09.2026. Scope is the shared overview layout and the origin of its opening text. No product edits, test execution, build, browser verification or new legal-source acceptance by this reviewer.

## Finding before implementation

The proposed correction improves the reading order without requiring changes to authored legal claims. The generic adapter currently copies a body section title into an opening eyebrow that describes the module's place in legal work. Those are different roles. The overview then places its question, work context and warning in narrow label/value rows. The text itself remains useful; the duplicated heading and rigid presentation are the defects.

Make `LegalLearningModuleView.stage` optional. For ordinary generic modules, omit the first-section-title fallback and the generic "Робота з правовим механізмом" substitute. Preserve the actual body heading in `mechanismSections`. Preserve the explicitly supplied KPA stage. Render the overview question, work context and warning as separate normal paragraphs, using their existing typed values. Render the outcome directly without "Про що це пояснення:". No blocker was found in this design.

## Reads and exact evidence

Read the complete `legal-learning-overview.tsx` and `legal-learning-view.ts`, the KPA caller's overview mapping, and the actual opening fields of the accepted `instrumenty-dostepu.ts` and `system.ts` modules. Also inspected the relevant KPA stage definition, current test references to these fields and the reading-layout principles in `DESIGN.md`. This is an overview review, not a new full legal review of those modules or an inventory of every learning page.

In the generic builder, `firstSection = module.sections[0]` currently supplies `stage` through `firstSection?.title` (`legal-learning-view.ts:167,183–185` at inspection). For `instrumenty-dostepu`, this repeats "Чотири види дозволу відповідають різній організації роботи" before the unrelated position heading. That exact sentence properly introduces the first body section about permit models. Keeping it there and omitting its generated opening copy preserves the authored structure.

The same module's outcome explains the distinction between a permit, registered declaration and status-based access. Its case question asks why different documents produce different conclusions for the same warehouse work. Its `placeInWork` identifies the task of establishing the work basis after identifying the participants and actual work. These are different pieces of introductory content. Their shared subject does not justify deleting or deduplicating them.

KPA differs. `kpa-learning-content.tsx` supplies `stage: moduleContext.stage`, `positionIntro: layers.beginner.practice`, the optional first authored question, `neededWhen: layers.practical.practice` and `boundary: layers.beginner.pitfall`. System's stage is explicitly "Сфера застосування KPA" in `learning/kpa.ts:1208`. Its introduction distinguishes requests with similar document names; its practical context explains why the distinction matters before choosing a form; its warning says the word `wniosek` does not turn every application into an organisational proposal. Retain all three paragraphs and that stage. The absence of a question in this module should not create an empty paragraph or placeholder.

The generic reading-guide branch's fixed "Орієнтація в документі" is a deliberate classification selected by `isReadingModule`, not copied from a body section. It may remain conditional if the maintainer wants to retain that distinction. This review recommends removing the copied first-section heading, not changing course phases, phase descriptions or reading-guide selection.

## Layout and content preservation

`legal-learning-overview.tsx:59` prepends a stock bold label to the outcome. Removing the label leaves a complete explanatory paragraph in both inspected modules. It does not remove the outcome itself, the module title, Polish terminology, legal scope or source-review dates.

The three rows at lines 76–97 use a fixed 11rem label column at the small breakpoint. Their values are connected explanation rather than comparable tabular data. Normal paragraphs in one reading column match the project's article layout and free the text from that label-column width. Keep the actual question as text, not as a task or a synthesized heading. Keep the boundary as its own paragraph close to the context it qualifies. Do not merge strings, convert typed references to plain text or infer links from words.

The optional `positionIntro` still precedes the remaining overview paragraphs. Course-phase presentation remains outside this change. Section IDs and table-of-contents targets should remain stable; this correction does not need navigation changes or new headings.

## Focused regression checks for the implementation

- A generic module with a first section should have no copied stage, while that section's actual heading and paragraphs remain present once in the body. The deliberately classified reading-guide branch should follow the maintainer's chosen behavior without changing its phase data.
- The KPA caller should retain its explicit stage, authored introduction, practical context and opening warning. Existing batch 104 coverage should continue to verify that the warning is not repeated in the closing list.
- The overview should retain exact outcome, question, work-context and warning text. Cover optional stage/question/boundary absence, typed references and their destinations. Do not assert that visually equal text with different targets may be collapsed.
- The stock outcome prefix and label/value grid should disappear. Date distinctions, provision scope, Polish title text, course phases and section anchors should remain. Use desktop and 360px browser checks to assess the resulting paragraph flow; tests alone cannot establish readability.

No product patch had been inspected when this pre-implementation finding was recorded. Final acceptance requires the actual saved diff and the maintainer's relevant checks. No module or corpus legal-state date should change for this presentation correction.

## Final saved implementation review

Read the final complete overview renderer and the saved model, shared UI test, model test and KPA test diffs on 12.09.2026. The implementation is accepted within the presentation scope above. No blocker was found.

`stage` is optional. Ordinary generic modules no longer copy their first section title or receive a substitute stage; the deliberately selected reading-guide orientation remains. The authored body sections and course-phase data retain their previous mappings. The KPA caller still supplies its explicit stage.

The overview renders the outcome directly. It preserves the exact values of position introduction, question, work context and boundary as separate paragraphs in that order. Optional absent fields create no placeholder paragraph. The section heading and ID remain, and the source-review dates, provision scope, Polish text and complete phase block are unchanged. `LearningText` still renders all authored values, so this layout change neither flattens typed references nor adds inferred links.

The added shared UI test checks the exact paragraph sequence with an absent stage and verifies the actual destinations of two typed references. It also checks that the outcome remains and its stock prefix disappears. The model test now asserts that an ordinary module's stage is undefined while its existing section/example preservation checks remain. The KPA test adds an exact explicit-stage assertion for anatomy, system and delay; their existing opening-warning, closing-material and specimen checks are retained. No existing assertion was removed.

The maintainer reports 28 focused tests passing after these changes. This reviewer inspected the tests but did not execute them. The maintainer's before/after browser review remains separate; this record does not claim visual verification or renewed acceptance of the legal content.

Final reviewed SHA256 values:

- `app/features/law-library/ui/learning/legal-learning-overview.tsx`: `F171F40782D6000CC7F65A0CF4A16A3B76805A8D4BB313FAF25FB4470824E772`.
- `app/features/law-library/model/learning/legal-learning-view.ts`: `1EED6276DA58FDF547F569BEBB0020913EB33F8878ED3CB3DE441BDC2A672907`.
- `app/features/law-library/ui/learning/legal-learning-module-content.test.tsx`: `8BDB64DE87C4831D304B05764F563DAA1E8C69B2C44FC089F3AEE7BD5B6F3719`.
- `app/features/law-library/model/learning/legal-learning-view.test.ts`: `EC7BACD8BE50298F606BFB74375392DDF9E3801D804D2B1327E9DCD3CCAB2D61`.
- `app/features/law-library/ui/kpa/kpa-learning-content.test.tsx`: `7BEA55C7877559E20BDACDACF0946EE0E9A20F66DC58959AC9DE2BB9D062F680`.
