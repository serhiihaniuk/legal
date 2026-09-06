# Authority, party status and representation

Changed on 06.09.2026 following the map contents audit.

## Reader question and organization

The parent page now explains who decides the case, whose own rights are involved, and who may act for that person. Its six sections distinguish the organ from the office and authorized employee; territorial competence; party status; appointed and statutory representatives; signatures and service; and disqualification.

The former generic fields and checklist were replaced with connected explanations. Four completed fictional examples cover different addresses, an employer's attachment, forwarding a served letter, and a caseworker related to the applicant. Existing typed document references lead to the employer attachment, power-of-attorney specimen, payment evidence and service evidence. The page keeps its stable URL and filing-chapter assignment. It introduces distinct questions without creating empty child routes.

## Source verification

Checked on 06.09.2026:

- [KPA consolidation](https://eli.gov.pl/eli/DU/2025/1691/ogl) and [official text](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), dated 04.12.2025. Read relevant parts of articles 17, 19–21, 24–26, 28–34, 40, 65, 73, 156 and 268a. The article distinguishes legal interest from practical involvement, transfer from a wrong authority from invalid filing, and employee disqualification from disqualification of the organ. The former unsupported suggestion that competence violations require an additional qualification was removed; the page identifies the statutory nullity ground and its limits without promising automatic invalidity.
- [Original KPA metadata](https://api.sejm.gov.pl/eli/acts/DU/1960/168), retrieved through the official API in PowerShell after the web endpoint failed, lists 2025/1691 as the latest consolidation and 2025/769 as the latest amendment. The consolidation's commencement and transition notes were inspected. No new corpus edition was promoted.
- [Updated foreigners-act text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), dated 07.04.2026: articles 22(2), 104, 106d(3–4), 113a and 139k. The ordinary temporary-residence party rule is separated from the intra-corporate-transfer exception. Territorial examples concern an ordinary application by a person in Poland, not every special application.
- [UdSC notice of 04.05.2026](https://www.gov.pl/web/udsc/konsekwencje-podpisania-wniosku-o-udzielenie-zezwolenia-pobytowego-w-module-obslugi-spraw-przez-osobe-nieuprawniona) confirms the commencement of the MOS signature rules on 27.04.2026 and explains the consequences of an unauthorized signature. That administrative explanation is attributed in the article and scoped to the ordinary capable adult's electronic application. Statutory-representative and special-filing qualifications are retained.

The page does not replace detailed guidance on every competence dispute, legal-capacity question, remedy or special filing procedure. The linked document guide retains the filled limited-authority specimen. The atlas-wide legal-state date and independent legal-review ledger are unchanged.

## Verification

The first reference check caught three bare paragraph locators. They were replaced with explicit typed KPA references. Reference-preview validation then passed for all five acts, 2,573 provisions, 62 documents, 63 authored map nodes and nine case routes.

Browser checks at 1440 px and 360 px found meaningful content and no horizontal overflow. The representation contents link updated the URL hash and placed its heading below the header. Keyboard activation of the power-of-attorney reference opened the document guide. Inspected the desktop representation section and mobile introduction; after the reference corrections, the browser error list was empty. Final project verification is recorded below.

Final `npm run verify` passed after the citation corrections: type checks, registry checks, lint, formatting, 186 application tests in 38 files, corpus tests, content-review tests, editorial validation and production build. The writing inventory check records 129 of 1,800 files accepted. Acceptance covers only this topic's current hash and does not grant independent legal approval.
