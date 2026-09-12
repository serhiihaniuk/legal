# Batch 114: independent source review of work chapter boundaries

Reviewed 12 September 2026. This record verifies ten article endings against the pinned official PDF. It is not acceptance of an importer implementation, regenerated corpus, legal-state update or adjacent commentary. The root agent owns the repair and execution checks. I changed only this record inside the repository.

## Source and visual evidence

Source: [official compiled work act, DU 2025/621](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf). The pinned local source is `public/legal-sources/powierzanie-pracy-2025-621-u-2026-07-18/source.pdf`. Its bytes were checked and have SHA256 `62cb831058c5d3e3efe99669b1115b53007b34af8ad6f79fbaad5b7410d12002`, matching the edition configuration and generated provisions. The PDF has 100 physical pages and the compilation date 17 June 2026.

I rendered and visually inspected physical pages 30, 36, 37, 38, 40, 48, 49, 57, 58, 68, 73, 75, 96 and 97 from those pinned bytes. Each image was read, rather than inferred from a text search. Temporary review images are at `C:/Users/Serge/AppData/Local/Temp/legal-batch114-mpw0iezw/work-<page>.png`. They are outside the repository and are not committed artifacts. They can be reproduced from the pinned PDF; the source hash and page numbers are the durable evidence.

All ten trailing chapter headings are real structural headings outside the preceding article. Six begin on the same page as the preceding article's final sentence. Four begin on the next page. The latter four currently inflate the article's ending page.

## Exact boundaries

Line numbers below are one-based lines in the pinned edition's `pages.json` text, not typographic line numbers printed on the PDF. Cut offsets are zero-based exclusive offsets in the original generated article/provision text. The retained text ends at that offset, before the following newline and removed material. The JSON below supplies textual anchors for configuration; the offsets are audit evidence rather than a recommendation to hard-code offsets.

| Article | Retained final page and line | Next chapter page and first line | Chapter | Original exclusive cut offset | Resulting page range |
| --- | --- | --- | --- | --- | --- |
| 25 | 30:6 | 30:7 | 2 | 563 | 29–30 |
| 34 | 36:15 | 36:16 | 3 | 647 | 36 |
| 39 | 37:35 | 38:3 | 4 | 511 | 37 |
| 44 | 40:28 | 40:29 | 5 | 994 | 40 |
| 60 | 48:34 | 49:3 | 6 | 1097 | 48 |
| 71 | 57:32 | 58:3 | 7 | 1635 | 57 |
| 77 | 68:16 | 68:17 | 8 | 502 | 68 |
| 83 | 73:19 | 73:20 | 9 | 458 | 73 |
| 86 | 75:17 | 75:18 | 10 | 728 | 75 |
| 101 | 96:35 | 97:3 | 11 | 5409 | 94–96 |

The visual checks establish the following:

- Article 25's ustęp 2 continues at the top of page 30 and ends before the centered chapter 2 heading. Preserve that genuine continuation and the page-30 reference.
- Article 34 ends after its temporary-worker time-limit sentence on page 36. Chapter 3 and article 35 follow on that same page.
- Article 39 ends at the bottom of page 37. Page 38 starts with chapter 4 and then article 40.
- Article 44's point 3 ends before chapter 5 on page 40. Article 45 follows below the heading.
- Article 60's ustęp 5 ends on page 48. Page 49 starts with chapter 6 and article 61.
- Article 71's ustęp 4 ends on page 57. Page 58 starts with chapter 7 and article 72.
- Article 77 is complete on page 68 before chapter 8 and article 78.
- Article 83's point 2 ends on page 73 before chapter 9 and article 84.
- Article 86's ustęp 3 ends on page 75 before chapter 10 and article 87. Preserve its code citation and full stop.
- Article 101's last quoted replacement ends on page 96 with the closing quotation mark and final full stop. Page 97 starts with chapter 11 and article 102.

## Configurable anchors

These entries use the root's proposed `articleEndBoundaries` shape. `endMarker` is retained. `expectedTrailingText` is the complete normalized removed suffix, including the next-page header/date where present. Strings are copied from the pinned extraction, preserving Polish spelling, punctuation and newlines. They do not repair unrelated extraction spacing inside retained sentences.

```json
[
  {
    "locator": "Art. 25",
    "pdfPage": 30,
    "endMarker": "umowy nie stanowią inaczej.",
    "expectedTrailingText": "Rozdział 2\nZezwolenie na pracę cudzoziemca na rzecz polskiego podmiotu powierzającego\npracę cudzoziemcowi",
    "reason": "Article 25 ends on page 30 before the separate chapter 2 heading and article 26."
  },
  {
    "locator": "Art. 34",
    "pdfPage": 36,
    "endMarker": "2003 r. o zatrudnianiu pracowników tymczasowych.",
    "expectedTrailingText": "Rozdział 3\nZezwolenie na pracę w związku z pełnieniem określonej funkcji",
    "reason": "Article 34 ends on page 36 before the separate chapter 3 heading and article 35."
  },
  {
    "locator": "Art. 39",
    "pdfPage": 37,
    "endMarker": "w związku z udzieloną mu prokurą.",
    "expectedTrailingText": "©Kancelaria Sejmu s. 38/100\n2026-06-17\nRozdział 4\nZezwolenie na pracę w związku z delegowaniem cudzoziemca przez podmiot\nzagraniczny na terytorium Rzeczypospolitej Polskiej",
    "reason": "Article 39 ends on page 37; page 38 begins the separate chapter 4 before article 40."
  },
  {
    "locator": "Art. 44",
    "pdfPage": 40,
    "endMarker": "i w innym celu niż wykonanie usługi.",
    "expectedTrailingText": "Rozdział 5\nZezwolenie na pracę sezonową",
    "reason": "Article 44 ends on page 40 before the separate chapter 5 heading and article 45."
  },
  {
    "locator": "Art. 60",
    "pdfPage": 48,
    "endMarker": "się ostateczna, starosta z urzędu unieważnia wpis do ewidencji wniosków.",
    "expectedTrailingText": "©Kancelaria Sejmu s. 49/100\n2026-06-17\nRozdział 6\nOświadczenie o powierzeniu pracy cudzoziemcowi",
    "reason": "Article 60 ends on page 48; page 49 begins the separate chapter 6 before article 61."
  },
  {
    "locator": "Art. 71",
    "pdfPage": 57,
    "endMarker": "na podstawie umowy o pracę.",
    "expectedTrailingText": "©Kancelaria Sejmu s. 58/100\n2026-06-17\nRozdział 7\nIndywidualne konta oraz przetwarzanie danych w systemach\nteleinformatycznych",
    "reason": "Article 71 ends on page 57; page 58 begins the separate chapter 7 before article 72."
  },
  {
    "locator": "Art. 77",
    "pdfPage": 68,
    "endMarker": "na terytorium Rzeczypospolitej Polskiej.",
    "expectedTrailingText": "Rozdział 8\nSzczególne działania w zakresie aktywizacji zawodowej i integracji społecznej\ncudzoziemców",
    "reason": "Article 77 ends on page 68 before the separate chapter 8 heading and article 78."
  },
  {
    "locator": "Art. 83",
    "pdfPage": 73,
    "endMarker": "2) pomocy prawnej i administracyjnej w zakresie dostępu do rynku pracy.",
    "expectedTrailingText": "Rozdział 9\nPrzepisy karne",
    "reason": "Article 83 ends on page 73 before the separate chapter 9 heading and article 84."
  },
  {
    "locator": "Art. 86",
    "pdfPage": 75,
    "endMarker": "o wykroczenia (Dz. U. z 2024 r. poz. 977 i 1544 oraz z 2025 r. poz. 620).",
    "expectedTrailingText": "Rozdział 10\nZmiany w przepisach",
    "reason": "Article 86 ends on page 75 before the separate chapter 10 heading and article 87."
  },
  {
    "locator": "Art. 101",
    "pdfPage": 96,
    "endMarker": "cudzoziemców w stosunku do obywateli polskich.”.",
    "expectedTrailingText": "©Kancelaria Sejmu s. 97/100\n2026-06-17\nRozdział 11\nPrzepisy przejściowe i przepis końcowy",
    "reason": "Article 101's quoted replacement and the amending article end on page 96; page 97 begins the separate chapter 11 before article 102."
  }
]
```

## Article 101 and quoted text

The preparation record treated article 101 cautiously because it amends another statute. Visual review now resolves that uncertainty: the trailing chapter 11 is not quoted replacement text. It is a genuine structural heading. There is no quoted `Rozdział` heading inside this article that can honestly be described as the observed counterexample.

The real preservation requirement is its extensive quoted replacement text, including the final `„17. Minister właściwy do spraw pracy...` block. Preserve all of that block through its closing `”.`, together with the earlier quoted provisions and intervening source material on pages 94–96. A synthetic fixture containing a quoted chapter heading remains appropriate to prove that the importer never cuts on a generic chapter-word regex without explicit configuration. Do not mislabel that synthetic fixture as a quotation from article 101.

## Schema and implementation review criteria

Before the root repair, the article profile accepted source-specific ignored/excluded article occurrences and future-text exclusions, but had no article-ending boundary option. The existing occurrence distinction matters: an ignored intra-article reference must remain text, while an excluded future article may still serve as a boundary. A chapter-ending correction should not repurpose either mechanism.

The proposed optional boundary entries fit this source-specific approach if validation requires a nonempty article locator, positive in-range page, unique nonempty ending marker, nonempty expected suffix and reason. The extractor should reject a missing or repeated marker, missing target article, duplicate configured target, wrong page or any difference in the expected removed suffix. It should establish that the marker belongs to the designated page, then retain the marker and adjust only the ending page. Source pages and PDF bytes must remain unchanged.

The root patch still needs independent review after it is saved. This record supplies source acceptance for exactly these ten cuts, not implementation acceptance. I ran source-reading and image-rendering scripts only; no application tests, corpus tests, build, regeneration, code edits or generated-file edits were performed.
