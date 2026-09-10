# Batch 42: a factual description before the legal conclusion

## What changed

Rewrote `/map/start-case` as a standalone article with four subject-specific sections. It distinguishes a fact, a party's assertion, evidence and a legal conclusion; separates an event date from the document and receipt dates; and explains how a working chronology becomes a concrete legal question.

The completed fictional example contains a filled four-row chronology. It separates the contract's planned start date from the reported first day of work and leaves the state of an earlier proceeding unresolved. Its conclusion identifies the missing information instead of deciding work authorization from a contract alone. Typed links connect the chronology and evidence-matrix document guides. The stable route and primary chapter remain unchanged.

Removed the repeated legacy model, workflow and checkpoint prose. Replaced the implication that facts must always be documented with the open evidence rule and the authority's duty to consider the complete material. The public API and legacy-rendering tests now use `legal-anatomy`, which still uses the legacy format. Their assertions remain intact; the shared authored-article test includes the migrated page automatically.

## Source scope

Checked on 10 September 2026 against [KPA status](https://eli.gov.pl/eli/DU/2025/1691/ogl) and [the official text](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), pages 17-18 of the PDF. The bounded statutory claims concern art. 75 § 1, art. 77 § 1 and § 4, and art. 80. The status page identifies the consolidation as obowiązujący. The chronology method and specimen are authored teaching material, not a prescribed statutory form. No substantive residence or employment eligibility is decided in the example.

The article's review date is 10 September 2026. The global legal baseline remains 18 July 2026. Writing review does not confer independent legal acceptance.

## Remaining work

This batch completes one foundation article. `legal-anatomy`, `special-vs-kpa`, the other pending map topics, law modules, provision commentary, original PDF-layout audit and independent legal review remain open. Continue with the legal-norm article, using one actual rule and its conditions, exceptions and procedural consequence rather than another generic checklist.

## Verification and checkpoint

Full `npm run verify` passed, including type checking, script checks, knowledge and source-reader validation, lint, formatting, all 198 application tests, corpus and review-tool tests, editorial validation and production build. Reference previews and saved-ledger validation passed. Initial checks caught a bare citation in a source note and two tests using the migrated article as a legacy fixture; both causes were corrected before the passing run.

Browser review at 1440 px and 360 px found no page overflow or browser errors. The authored headings match the page contents. Keyboard navigation opened the chronology guide. The specimen's focusable container scrolled horizontally with ArrowRight on mobile while the page remained 360 px wide.

Writing acceptance is 147 of 1,804 files. Regenerating the legal ledger invalidated this changed page's old author and cross-review attestations; both are now pending. No new independent acceptance was granted.
