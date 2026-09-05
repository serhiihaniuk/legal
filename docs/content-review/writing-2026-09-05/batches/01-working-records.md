# Filled working records and response example

Reviewed on 2026-09-05 against `legal-explanatory-writing`.

## Reader questions and changes

| Page | Question answered | Completed example and distinction |
| --- | --- | --- |
| `evidence-matrix` | What does a matrix look like, and why keep one? | A filled four-column matrix separates agreed income, incomplete payment history, and a bank balance. A missing February record is not treated as proof that no payment occurred. |
| `requirements-table` | How do the authority's requests become a usable record? | Two fictional requests retain their own deadline, proposed material, and actual submission state. Received and submitted are separate events. The date is supplied by the fictional letter, not calculated as a universal period. |
| `response-letter` | How does a response connect the request to its attachments? | A Polish specimen answers two numbered points and lists attachments. It distinguishes a request to ZUS from evidence of insurance and does not promise that either the deadline or the requirement has been satisfied. |
| `stay-history` | How are unconfirmed travel dates recorded? | A filled chronology distinguishes a used journey, a return booking, and later presence in Poland. The existing residence-period example now identifies the specific university-study basis instead of implying that any education counts by half. |
| `case-file-index` | How can a register reveal a missing attachment? | A filled package index identifies the third attachment mentioned in the response but absent from the stored copy. A dispatch receipt does not establish the package's contents by itself. |

All five files were read in full. The shared example renderer was reviewed in its document-page context. Added labelled table and letter specimens; existing prose examples remain available. Removed the example wrapper's unnecessary left rule and indentation. No real client material or personal identifiers were used.

## Official sources and limits

- [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/eli/DU/2025/1691/ogl), with its [official PDF](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf): requests and deadlines, submission, access to files, collection and evaluation of evidence, particularly art. 50, 54, 57, 63, 64, 73, 75, 77 and 80. The publication also records transitional provisions of the 2025 amendment. The tables are authored methods of organising records, not forms prescribed by KPA.
- [Ustawa o cudzoziemcach, Dz.U. 2025 poz. 1079](https://eli.gov.pl/eli/DU/2025/1079/ogl), with its [official PDF](https://eli.gov.pl/api/acts/DU/2025/1079/text/O/D20251079.pdf): art. 211 and art. 212 ust. 1 pkt 3 lit. b support the bounded residence-period example. The example identifies a permit under art. 144 and assumes confirmed periods without relevant interruptions.
- [UdSC guidance on rezydent długoterminowy UE](https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2): reviewed the explanations of regular income and credited residence periods. The initial direct fetch failed; the indexed official page subsequently opened successfully. No additional thresholds or exceptions were copied into these pages.

This batch checks the explanation and its cited mechanisms. It is not an independent legal review or an exhaustive audit of later amendments. The atlas baseline stays at 18.07.2026; page-specific verification dates remain 05.09.2026. No corpus edition was promoted and no independent attestations were renewed.

## Verification

- `npm run verify` passed: typechecks, generated registry/source-layout checks, lint, formatting, 89 application tests, 68 passing corpus tests with one skipped, 15 review-tool tests, editorial validation and production build.
- After the final desktop-width and residence-example clarification, typecheck, the document test file and production build were repeated.
- Browser inspection at 1440 px confirmed that the filled matrix fits its reading column. All five routes rendered specimens at 360 px without page-level horizontal overflow. The table region scrolls horizontally and accepts keyboard arrow scrolling; its accessible name matches the table caption.
- No browser console errors were recorded. Tests validate column/cell consistency, rendered table headings, complete Polish letter text, and all existing document section/TOC anchors.

The wider review remains open. These five specimens do not establish coverage for every complex document.
