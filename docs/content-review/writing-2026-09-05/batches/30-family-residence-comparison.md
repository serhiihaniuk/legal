# Family residence by relationship and sponsor status

Changed on 06.09.2026 following the map contents audit.

## Reader question and organization

The family parent page now explains which person's citizenship or permit matters, how the family relationship changes the ground, and why dates matter for children. Six named sections replace the generic legal-model fields. The stable `/map/family-stay` URL and primary chapter remain unchanged.

The article separates marriage to a Polish citizen, reunification with a foreign resident, children's temporary and permanent grounds, other relatives and partnerships, the separate EU-family regime, and events after a permit. It does not treat all these situations as one application checklist. Detailed route and procedural explanations remain in their existing guides.

Two completed fictional comparisons explain the two-year permit history and a child's birth date relative to the parent's permits. Typed references connect civil-status records, permit decisions, residence chronology, family-life evidence, an application for a relative abroad and consent to that application. The family-life reference opens the existing filled discrepancy example about different addresses. No client records were introduced.

## Source verification

Checked on 06.09.2026:

- [Sejm updated foreigners-act text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), dated 07.04.2026. Read the relevant parts of articles 158, 159, 160, 161, 169, 187 and 195. Distinctions include the particular sponsor category requiring two years of consecutive permits, different financial exceptions, the parent's status at a child's birth, and different conditions after divorce or death. The final review made the citizenship and shared-residence limits of article 160 point 1 explicit.
- The original-act amendment metadata had been checked in batch 29 on the same date. The source text includes amendments 2025/1794 and 2026/203. This review did not change the atlas-wide edition or date.
- [MSWiA EU-family card explanation](https://www.gov.pl/web/mswia/karta-pobytowa-dla-czlonka-rodziny-obywatela-ue) confirms that this card documents a separate residence right. Its procedural details and fees were not copied into the parent article.
- [Original EU-family act metadata](https://api.sejm.gov.pl/eli/acts/DU/2006/1043) identified a newer consolidation than the initially inspected 2024 text. The [2026/1065 publication](https://eli.gov.pl/eli/DU/2026/1065/ogl), published 06.08.2026, and its [official text](https://eli.gov.pl/api/acts/DU/2026/1065/text/T/D20261065L.pdf) were checked for the scope and family definitions, including defined returning Polish-citizen families. The article now links to that consolidation. Web opening of the metadata endpoints failed; the official API returned the metadata through PowerShell.

This is an orientation and comparison article. It does not claim complete coverage of international-protection family exceptions, every refusal ground, employment rights, financial thresholds or EU-family procedures. Those need their own explanations. Independent legal review remains pending.

## Verification

Browser checks at 360 px and 1440 px found meaningful content and no horizontal overflow. Inspected the desktop children section. The table-of-contents link set `#node-section-children` and placed the heading below the fixed header. Keyboard activation of the family-evidence reference opened `/documents/family-evidence`. The browser error list was empty.

Reference-preview validation passed for all five acts, 2,573 provision records, 62 documents, 63 authored map nodes and nine case routes. Full project verification is recorded after the final run below. Writing acceptance is scoped to the family topic file, not the whole chapter or independent legal ledger.

Final `npm run verify` passed after the content and source-link corrections: type checks, registry checks, lint, formatting, all 186 application tests in 38 files, corpus tests, content-review tests, editorial validation and production build. The writing inventory check records 128 of 1,800 files accepted. The shared checkpoint icon removal is included in this delivery and was checked separately on desktop and mobile.
