# Annex page boundaries in the residence forms

Source-layout correction checked on 12.09.2026. This closes the page-range defects recorded in batches 09 and 13. It does not close their other form-field or extraction findings, or the full corpus audit.

## Cause and correction

The paragraph-led importer appended text before the next annex heading to the previous provision. On a new form page that text contained only the Dziennik Ustaw header and sometimes the form's page counter. Appending it incorrectly extended the previous annex onto the new page.

The importer now recognizes this exact header-only prefix when the next marker is an annex. It does not discard actual preceding content. Regression tests cover headers with and without a form counter, and preserve genuine continuation when two annexes share a page.

Rebuilt the existing 2026/553 edition with the explicit force-rebuild option. The official PDF bytes remain unchanged, SHA-256 56ad73becd064acea037fdd001767e688f991a6c088578b2da29a65c52ddc57e. The builder retained its original build timestamp and added the current generator's base-source provenance field to both manifests. Historical edition-diff.json was preserved after rebuilding. No new edition was promoted and no legal-state date changed.

## Source and independent review

The [official forms PDF](https://eli.gov.pl/api/acts/DU/2026/553/text/O/D20260553.pdf) has 72 physical pages. Root checked the university boundary on pages 34/35 and the family boundary on 68/69. ukr_filing_review independently inspected all ten transitions: 15/16, 24/25, 27/28, 29/30, 31/32, 34/35, 54/55, 68/69, 70/71 and 71/72. Each next page begins a new annex. Previous fields and signatures remain included.

All 20 provision IDs and start pages remain unchanged. Ten annex endings change. Their new text is an exact prefix of the previous text; the removed suffix contains only the next page's header and optional counter. Annex 11 and the nine regulatory paragraphs are unchanged. Structure changes match those ten end pages.

The corrected annex ranges are 4–15, 16–24, 25–27, 28–29, 30–31, 32–34, 35–54, 55–68, 69–70, 71 and 72.

Independent review accepted these SHA-256 values:

- extraction.mjs: 96755d045c5b089cc96e397d206972e01da730f066c19daf9608c4fb8d089dcb
- corpus.test.mjs: e5722353f77855ee94a521cf359bd8eeaf73dc742de77912ca80ab1c328ea8b3
- provisions.json: 41dfa8163df3ac36db374a02623a0747c2c3571164976a94ee3f7a2d1b0f53e1
- structure.json: 0b0efd4c826934c3fd4e752001246355ff9b92d7d44aa35d69db95e567fff181

## Verification

All 29 focused corpus tests passed, including the two new regressions. Script typechecking and source-reader verification passed. Root checked the university reader at 1440 px and family reader at 360 px: the visible ranges are 32–34 and 55–68, the original PDF remains selected, and its iframe opens the correct first page. Keyboard selection of the extracted-text tab also worked. Neither viewport overflowed; final browser errors were empty.

Full verification passed: type checks, generated registry and reader checks, lint, formatting, 246 application tests, 70 passing corpus tests with one existing skip, 15 review-tool tests, editorial validation and production build. Final previews and baseline-ledger validation also passed. This correction adds no authored writing acceptance.

Ledger regeneration invalidated the ten old author/cross attestations whose source-text hashes changed. They remain pending until the corresponding explanations receive full renewed review. The bounded boundary check does not silently reapprove them.
