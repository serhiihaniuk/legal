# Batch 106: provision accordion presentation review

Independent review completed on 12.09.2026. Scope is the shared presentation defect recorded in batch 104, removal of generated overview groups, the trigger-width correction and removal of inferred prose links. The maintainer explicitly included these final two corrections after browser QA and source inspection. No legal-source renewal, product edits, tests, build or commit by this reviewer. The exact final saved implementation and test changes are accepted within this scope.

## Source reads and design

Read the complete `legal-learning-provisions.tsx` renderer and `legal-learning-view.ts` model, the KPA caller's complete provision mapping, the model tests, the shared module-content tests and the KPA content tests. Traced both callers of `toLegalExplanationView`. The KPA caller supplies an existing article-index title, while the generic caller constructs a title from the summary. The helper also substitutes the entire summary when a title is absent. The KPA index uses an authored `titleByArticle` entry where available and a chapter-based fallback otherwise (`learning/kpa.ts:1131–1137`). These index titles are independent of the explanation summary; this review does not claim every title is individually authored.

The current accordion trigger renders title and summary together. The expanded content repeats that summary under "Що встановлює ця частина" before the rules, legal effect and case explanation. The proposed correction addresses this repetition directly:

- Make the rendering title optional. Only a separately supplied title should populate it.
- Remove the generic `explanationTitle` transformation and the helper's summary fallback.
- Keep the summary in the trigger so it remains available in both collapsed and expanded states. Render an actual optional title above it when supplied.
- Remove only the repeated expanded summary section. Preserve rules, locators, legal effect, foreigner-case explanation and the full-article link.
- Let the KPA caller pass `entry?.shortTitle`; an absent entry must not fall back to its summary.

This design preserves the authored explanation object and typed reference targets. It does not need string equality, sentence splitting or plain-text deduplication, which could erase the difference between references sharing the same visible label. No legal-content changes are needed.

## Explicit extension to generated overview groups

The generic module builder also sets each overview `articleGroups` role to `explanation.summary`. Those groups appear above the accordion. With no reviewed provisions it instead copies `module.outcome` into a fallback group. Neither branch supplies independently authored provision-role explanations. The maintainer explicitly extended batch 106 to remove these generated generic groups, so the same summary will not remain repeated immediately above the corrected accordion.

The KPA caller supplies `lesson.articles`, whose roles are authored explanations. Preserve that mapping and its visible overview. Conditionally render the overview introduction and definition list only when `articleGroups` is nonempty. Keep the provision-guide availability message when there are no reviewed explanations. This is a caller-specific structural correction, not a rule that any similar-looking prose may be deleted. Tests should distinguish generic empty groups from retained authored groups.

The initial review identified a legacy string-locator linking path in `ProvisionText`. The maintainer then included its removal in this batch because the project requires explicit reference targets. The final renderer uses `LegalText` directly for explanation prose. Explicit locator links and typed prose references retain their supplied targets; plain strings remain plain strings. No replacement label-based transformation was introduced.

## Regression evidence required

The model checks should show that an explicit authored title survives and an absent title remains absent, including through the generic builder. The canonical explanation object should retain its identity and all fields.

The renderer checks should cover an item without a title and one with an authored title. Inspect the accordion item itself: the full summary should occur once when initially open, after collapse and after reopening. Rules, legal effect, case explanation and the full explanation link must remain available when open. A typed summary reference should retain its actual destination. Existing default-open navigation, quiet reference styling, authored sections and completed specimen tests should remain intact.

The KPA caller should preserve its existing article-index title. Source review of the changed mapping can establish the missing-entry fallback, while a concrete KPA render check should establish that an available short title remains visible. This is presentation coverage, not renewed acceptance of the article's legal claims.

## Final saved-diff review

Read all three implementation diffs and both changed test diffs after formatting. No blocker was found. The helper preserves the canonical explanation object without deriving a title. The generic builder stops generating title and role copies. The KPA mapping preserves the existing index title and authored `lesson.articles` roles. The renderer conditionally displays an available title, keeps the summary in the trigger and removes only its repeated expanded section. Rules, legal effect, case explanation, typed targets and full-explanation navigation remain. Empty reviewed lists still render the availability message.

The model test uses an actual work-act article 2 explanation to check object identity, absent generated title and empty generated groups. The helper's existing explicit-title assertion remains, with an added absent-title assertion. The shared UI tests cover supplied and undefined titles, initial open state, collapse and reopening, one summary within the accordion, retained explanation fields/link, and removal of the empty role list. A separate typed-text test supplies identical visible title and summary words with different provision targets and verifies that both links remain distinct. The empty-review test retains the preparation notice without manufacturing an outcome row. Existing navigation, reference-style, authored-section and specimen assertions were not removed.

The final trigger places the locator and rule count together in a wrapping top row. Optional title and summary occupy the available width beneath them, instead of the earlier narrow middle column. The saved markup retains the accordion trigger, chevron and explicit links. This reviewer inspected the layout code; the maintainer identified the width problem in browser QA and owns final visual verification.

The KPA test file is unchanged in this batch. Its earlier section/specimen and warning tests remain; preservation of the KPA index-title and article-role mappings was verified by reading the caller and renderer diff, not by claiming a new dedicated KPA title assertion exists. The final shared test fixture gives its intended prose link an explicit typed reference. A new regression test supplies ordinary text mentioning both `Art. 6` and `Art. 64` under an article 6 item and checks that only the explicit locator becomes a link. Both equal-label typed targets remain covered. The maintainer reports 27 focused tests passing across the model, shared content and KPA files after these changes. This reviewer inspected the final tests but did not execute them or perform browser verification.

Reviewed SHA256 values:

- `app/features/law-library/model/learning/legal-learning-view.ts`: `E90735C8A0AE307546E76C86136B9CA865E2C2AEB729DD9D053E78B5D20BF976`.
- `app/features/law-library/model/learning/legal-learning-view.test.ts`: `4D553C5296F469D3395F36F5AFD607E00539CB3F0436686063AC0DF896D70D30`.
- `app/features/law-library/ui/learning/legal-learning-provisions.tsx`: `62C1335E6AD066A69F338BD11CD12B9962D685F097948D3AD4A4F536736147D8`.
- `app/features/law-library/ui/learning/legal-learning-module-content.test.tsx`: `3FE236BFB493A5818199766C4881BF5F40A6A67E0AC7CC23EC8A862BCCCBADB0`.
- `app/features/law-library/ui/kpa/kpa-learning-content.tsx`: `14C61BB1E1AEAA9285DFE7B96AC841226AC872701F2451EADBE125A69DABC327`.
- Unchanged `app/features/law-library/ui/kpa/kpa-learning-content.test.tsx`: `452CD3417035148F10D5734D92DA75F00C47C8B575C09CC6A62D50A1224825CE`.

## String-reference inference removed in the final patch

The previous `ProvisionText` turned every occurrence of the current item's reference label in a plain string into a link to that item's target. Its `includes`/`indexOf` matching did not check word boundaries or establish which act the surrounding prose named. For example, a synthetic plain string containing `Art. 20` also contains the locator prefix `Art. 2`; passing that prefix and the article 2 target would link the prefix inside article 20. This was a code-path observation, not evidence that a specific published paragraph exhibited the error.

The maintainer removed this helper completely in the final patch. Summary, rule explanation, legal effect, case explanation and authored overview-role prose now use `LearningText` directly with `context="prose"`. Typed parts preserve actual destinations. Plain citations no longer receive guessed targets. Article locators, rule locator rows and the full-explanation control still use their explicit item targets, so the change does not remove navigation to the actual provision.

The new plain-citation regression directly covers the removed inference, while the earlier equal-visible-label test covers preservation of independently typed destinations. Read the final complete renderer and test diff after this change. No remaining blocker was found within the expanded presentation scope; this record makes no claim about other renderers or whether every desirable prose reference in the corpus has already been authored.
