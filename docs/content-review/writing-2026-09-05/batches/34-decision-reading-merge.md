# One decision article with a completed analysis

Changed on 06.09.2026 following the map contents audit.

## Content and organization

Merged `decision-workflow` into `decision-reading`. The primary article now explains the operative part, factual and legal reasons, evidence assessment, correction versus appeal, finality and execution. A completed fictional example compares a refusal's reasons with an insurance supplement already received by the authority. The example identifies the omitted evidence, calculates the ordinary appeal deadline and records a timely appeal. It does not promise a permit or invent the appellate outcome.

The old workflow URL redirects to `/map/decision-reading#node-section-completed-analysis`. Its stable node ID remains available for references through a small compatibility projection, but the duplicate authored unit and guide have been removed. Chapter eight lists the primary decision article once. The knowledge registry was regenerated, and the authored-topic count changed from 63 to 62. There remain 63 structural/reference node IDs, of which two have compatibility destinations rather than primary chapter entries.

## Official verification

Checked on 06.09.2026 against the [official KPA consolidation](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), dated 04.12.2025. Read articles 16, 57, 77, 80, 104, 107–113, 127–130 and 138. The [original-act metadata](https://api.sejm.gov.pl/eli/acts/DU/1960/168) was fetched directly after the browser service failed to open its JSON. It lists 2025/1691 as the latest consolidation and 2025/769 as the latest amendment, effective 13.07.2025. No source edition was promoted.

The revised text preserves these distinctions:

- A decision may determine the merits or otherwise end the case at that instance. Refusal and discontinuance therefore have different meanings.
- Article 107 requires reasons that identify the accepted facts, supporting evidence and reasons for rejecting other evidence. The completed example challenges an omitted later document without claiming that the earlier ZUS request itself proves insurance.
- Articles 111 and 113 have different objects. The article 111 postanowienie has the stated effect on the period for the named remedy; the text does not apply that effect to every correction request.
- The article 112 protection concerns a party that followed an incorrect instruction. It is not presented as an unlimited postponement.
- A first-instance decision whose reasons were omitted because it fully granted the request is final under article 127 § 1a. Finality, legal finality and enforceability remain separate. The article 130 exceptions and the article 127a effect of the last party's waiver are explicit.
- Article 128 does not generally require a professionally drafted list of appeal grounds. The article 138 outcome remains conditional on the case and the applicable grounds.

The refusal fragment is fictional and explicitly incomplete. Its insurance coverage and receipt dates are stipulated facts. This is a KPA reading example, not a full review of the substantive requirements for a residence permit. The legal-state date is scoped to this article; the atlas baseline and independent legal acceptance are unchanged.

## Verification

The bare-reference guard initially rejected three paragraph references written without typed targets. They now use explicit article-and-paragraph citations. The first full run then found the old authored-topic count in the review inventory checks. Updated that count to 62 and added assertions that the primary article remains in the inventory while the retired article does not. Route and publication tests separately verify the redirect, example anchor and absence of a duplicate authored publication.

Reference previews passed for five acts, 2,573 provisions, 62 documents, 63 reference nodes and nine case routes. Desktop navigation to the old URL reached the completed example with the heading below the header. Inspected the fictional Polish fragment and its annotation rows at 360 px. Document width matched the viewport, keyboard activation opened the case-assessment document, and the browser error list was empty.

Full `npm run verify` passed with 191 application tests in 38 files, 68 corpus tests and one existing skip, 15 content-review tests, type checks, registry checks, lint, formatting, editorial validation and the production build. Writing acceptance is 134 of 1,799 files. The total decreased because the duplicate authored unit was removed. The remaining decision classification article, other map dispositions, source-reader layout audit and independent legal review are still open.
