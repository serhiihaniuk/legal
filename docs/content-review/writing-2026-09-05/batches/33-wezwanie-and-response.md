# Reading a demand and completing a response

Changed on 06.09.2026 following the map contents audit.

## Distinct purposes

`wezwanie` now explains how to identify the requested action, recipient, deadline and consequence. A labelled fictional Polish demand separates current employment documents, insurance evidence and personal attendance. The explanation distinguishes formal defects, unproven substantive conditions and missed personal actions.

`wezwanie-workflow` is now a completed response example. The same fictional letter is served on 03.08.2026. An initial response on 10.08 contains the contract, an annex and evidence of a request to ZUS. A supplement on 14.08 supplies the insurance document. Personal actions occur separately on 17.08. Two filled tables and two Polish letter fragments show what is available, what was submitted and what remains unresolved. The conclusion concerns completion of the letter's demands, not entitlement to a permit. Both URLs remain stable. Removed old data-tree overrides that replaced the authored related topics.

## Source checks and scope

Checked on 06.09.2026:

- [KPA official text](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), articles 50–56, 57, 63–64, 77 and 80. The explanation preserves the necessity of a summons, required contents, qualified personal-attendance rules, urgent communication conditions, the limited costs rule, minimum formal-correction period and assessment of the whole evidence. The prior batch checked the consolidation and original-act amendment metadata; this batch reused that baseline and reread the relevant provisions.
- [Ustawa o cudzoziemcach updated text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), dated 07.04.2026, articles 106e–106j and 114. The ordinary new-MOS example distinguishes the minimum periods for documents and personal actions. The article 106i consequence is umorzenie, with its priority conditions and exceptions, rather than a generic refusal on the merits. Article 106j excludes specified applications; old cases require transitional analysis.
- [UdSC MOS questions and answers](https://www.gov.pl/web/udsc/mos-qa) and [initial-signature explanation](https://www.gov.pl/web/udsc/konsekwencje-podpisania-wniosku-o-udzielenie-zezwolenia-pobytowego-w-module-obslugi-spraw-przez-osobe-nieuprawniona) confirm commencement on 27.04.2026 and special initial-filing requirements. The sample does not present ordinary email as a valid response channel or assert that every initial defect can be cured by a summons.

The legal-state date is scoped to these articles. The global atlas baseline, corpus edition and independent legal acceptance are unchanged. All fragments and dates are fictional. The ZUS document's content is an explicit fact of the example, not an assertion that any ZUS attachment proves insurance.

## Shared presentation and validation

Moved the existing document specimen and worked-example renderers into shared patterns. Both document guides and map articles now use them. Examples remain in the reading column with their facts, specimen, explanation and conclusion. No explanation window or repeated action icons were added.

Map article validation rejects incomplete examples, unlabelled specimens and malformed tables. Literal paragraphs in explicitly labelled letter samples retain their wording, including their own numbered attachments. The bare-citation guard still checks titles, notes and surrounding explanations. Tests cover this narrow distinction rather than disabling reference checks for the article.

## Verification

Full `npm run verify` passed with 189 application tests in 38 files, 68 corpus tests and one existing skip, 15 content-review tests, type checking, registry checks, lint, formatting, editorial validation and production build. Reference previews passed for five acts, 2,573 provisions, 62 document guides, 63 map nodes and nine case routes. After removing the old related-topic overrides, type checking, map rendering tests, previews and production build were repeated.

The document regression test preserves every existing labelled specimen. New map tests verify all letter paragraphs, table cells, annotation rows and conclusions. Desktop and 360 px browser checks found no page overflow or console errors. The table region retained a visible keyboard focus indicator and moved horizontally with ArrowRight. Inspected the annotated demand and the response on mobile, and checked contents and document navigation.

Writing acceptance covers the two articles and the shared example presentation. It does not imply completion of the remaining map articles, source-PDF layout audit or independent legal review.
