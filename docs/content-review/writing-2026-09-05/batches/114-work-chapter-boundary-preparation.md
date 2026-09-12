# Batch 114: chapter heading included in work article 71

Status: preparation only, 12 September 2026. No importer, generated corpus, reader or test changes were made. This source-fidelity issue is separate from the accepted batch 109 explanation and batch 113 commentaries.

## Reproduction and source boundary

Open `/law/powierzanie-pracy/provisions/powierzanie-pracy-art-71`, then read the end of ustęp 4 under "Текст норми". The displayed paragraph continues after the employment-contract sentence with the next chapter's heading, "Rozdział 7", and its title about individual accounts and data processing.

The parent supplied `C:/Users/Serge/.agent-browser/tmp/screenshots/screenshot-1789247155934.png`. I inspected that image. It shows the chapter title inside the paragraph marked `4.` and a separate collapsed PDF-notes control. This investigation did not start another browser session.

Primary source: [official compiled work act, DU 2025/621](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf), physical pages 57–58. Article 71 ends on page 57 with "na podstawie umowy o pracę." Page 58 begins with the page header/date, the separate chapter 7 heading and title, then article 72. The chapter heading is outside article 71 and is not part of ustęp 4. The live official PDF text and the stored page extraction agree on this boundary. The web tool's PDF screenshot request failed; no claim of a separately rendered primary-PDF image inspection is made.

The active registry selects `powierzanie-pracy-2025-621-u-2026-07-18`. Its source PDF SHA256 is `62cb831058c5d3e3efe99669b1115b53007b34af8ad6f79fbaad5b7410d12002`. The edition config pins the same source hash and retains its July legal-state and check dates. This is an extraction-boundary finding, not a new legal-state baseline.

## Persisted data

The error is present before rendering in both:

- `app/data/legal-corpus/powierzanie-pracy-2025-621-u-2026-07-18/articles.json`, article `71`.
- `app/data/legal-corpus/powierzanie-pracy-2025-621-u-2026-07-18/provisions.json`, id `powierzanie-pracy-art-71`.

The provision currently has `startPdfPage: 57`, `endPdfPage: 58` and `sourceTextHash: 4c145d1bf6762a92e0b6c36306b98501cb2f6ef68497a44f73a9a4a65dd5cfc1`. Its text includes the page 58 header/date and chapter title after the final statutory sentence. Article 71's substantive text does not extend onto page 58.

`pages.json` provides an exact comparison: page 57 ends with the final sentence of article 71, while page 58 contains the chapter title immediately before article 72. Keep the complete page text and official PDF available as source evidence even when correcting the article extraction.

The corresponding entry in `app/data/legal-library/source-layout.generated.json` is bound to that same text hash. Its only range is `[1636, 1675)` on page 58, containing the page header and date. The chapter heading begins after that range and therefore remains in the displayed body.

## Supported cause

`scripts/legal-corpus/lib/extraction.mjs` uses `ARTICLE_PATTERN` to recognize article starts. In `extractArticles`, around lines 684–689, it takes all text before the first article match on the next page and appends that `leading` text to the previous article, updating its ending page. On page 58, the first match is article 72, so the preceding chapter heading is appended to article 71. The same-page slice around lines 703–711 also runs to the next article start rather than a chapter boundary.

`extractProvisions`, around lines 882–926, carries the accumulated article text and page bounds into the provision and calculates its hash. The persisted error is therefore consistent with the importer logic; it is not invented by the explanation module or the browser.

The reader makes the contamination look like part of ustęp 4:

- `scripts/legal-corpus/build-source-layout.mjs` classifies smaller PDF text as notes. It does not identify structural chapter headings. In this entry, it separates the header/date only.
- `app/features/law-library/ui/provision/source-text-model.ts`, `separateSourceNotes`, removes only the supplied ranges from the body.
- `parseProvisionBlocks` appends unmarked lines to the preceding numbered block and normalizes whitespace. Thus the remaining chapter title becomes part of the last `4.` block.

The importer validator's `provisions.embedded-article-heading` check in `scripts/legal-corpus/lib/validation.mjs`, around lines 976–997, counts article headings. This chapter heading introduces no extra `Art.` match, so that check does not detect this case. No validator or test was executed during this investigation.

## Bounded corroboration

A read-only scan of the active work corpus found a line beginning `Rozdział` in article texts 25, 34, 39, 44, 60, 71, 77, 83, 86 and 101. This supports checking both same-page and next-page boundaries. These other occurrences have not each been compared against the primary PDF, so they are candidates for inspection, not ten accepted corrections. Article 101 requires particular caution because amending provisions may legitimately contain quoted structural headings.

An incidental extraction spelling, `po dmiotu`, is also visible in the existing article 71 text and screenshot. It is not the cause of the chapter-boundary issue and was not corrected or separately audited here.

## Candidate correction and verification scope

Correct the source segmentation upstream, using an explicitly recognized structural boundary or a narrowly configured, source-verified boundary. Article 71 should end at its final sentence on page 57; the chapter title should remain available in the PDF/page text and, if represented by the corpus model, structural metadata for the following chapter. Do not silently classify a chapter heading as a footnote merely to hide it.

Do not globally truncate every article at the word `Rozdział`. That word can appear in citations, quoted amendments and legitimate provision text. A repair must distinguish a real top-level heading from those uses, preserve genuine continuation text before a heading, and handle both same-page and next-page chapter starts. A narrow configurable correction for the verified boundary is safer than an unverified corpus-wide deletion if the current extraction model cannot yet establish that distinction.

Implementation should include:

1. A fixture reproducing the actual page 57 ending and page 58 chapter/title/article 72 sequence. Check article 71's exact ending and page range, and that article 72 remains complete.
2. A same-page structural-boundary fixture and counterexamples with an inline chapter reference, a quoted amendment heading and genuine article continuation on the next page. Preserve ignored versus excluded article-occurrence behavior and temporal-selection checks.
3. Source comparison of the other active-work candidates before accepting any collateral regeneration differences. Keep provision IDs, order and count stable unless an independently justified change requires otherwise.
4. Regeneration through the existing corpus workflow, with review of changed article/provision text, bounds, source-text hashes and derived manifests. Preserve the pinned official PDF and avoid an unrelated legal-state promotion.
5. Regeneration and checking of the source-layout data after hashes change. Its stale-hash guard otherwise returns no note ranges, which could expose unrelated PDF notes in the reader.
6. A real article 71 reader regression: four numbered paragraphs remain, ustęp 4 ends with its own sentence, and the next chapter title is absent from that paragraph. Retain the page-source evidence and existing no-character-loss checks for the note partition.
7. Parent-run corpus checks, relevant application tests, typecheck/build and desktop/mobile browser review. Verify the direct provision URL, source page links, chapter navigation and article 72 after the repair.

No fix, generated-file acceptance, broad corpus acceptance or execution result is claimed by this preparation record.
