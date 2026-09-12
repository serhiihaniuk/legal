# Seasonal document guides

## Scope and review

Completed on 12.09.2026. Three dedicated guides explain the registration certificate, arrival statement and seasonal work permit. Each has a filled fictional Polish specimen, field explanations, acquisition and verification guidance, and explicit limits of what the document establishes. The specimens show selected fields, not original forms or an authenticated praca.gov.pl interface. The orchard chronology matches batch 73.

The seasonal map article links to each exact document. Reverse contexts return to the seasonal topic. Submission receipts and service evidence remain separate from completeness and the decision itself. The guides distinguish the fields required for the certificate under art. 50 from the permit under art. 55. An accommodation address in the arrival statement does not make a housing contract an automatic attachment.

ukr_work_sources authored the guides. legacy_case_audit independently reviewed the complete guides and the final map delta against official sources and accepted these SHA-256 values:

| File | Accepted SHA-256 |
| --- | --- |
| seasonal-registration-certificate.ts | 6fbc6881d9124e1f2422d3739964a87960627adac04b7e9c1355110be343efd7 |
| seasonal-arrival-statement.ts | bbc3f4677221ade593872a057d7d23bc231a743607e202583d5c2f36ea6083bd |
| seasonal-work-permit.ts | 62c0d51c2a17b4d3cdf4d81fa9de3b7e44180634e8a29a2bc71c9eb843bd10a5 |
| seasonal.ts | 2768d1a543ac8a6cf7cca9ef956a547803bd412ec27ef7ee7c6bc89e7e0dc3a7 |

## Sources checked on 12.09.2026

- [Work act, Dz.U. 2025 poz. 621](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf), arts. 8, 17, 45–60. ELI reports the act in force; the compiled text has the 17.06.2026 header.
- [Attachments, Dz.U. 2025 poz. 1629](https://eli.gov.pl/api/acts/DU/2025/1629/text/O/D20251629.pdf), sections 5 and 8. Conditional attachments and originals requested by the authority remain distinct.
- [Seasonal PKD activities, Dz.U. 2025 poz. 1654](https://eli.gov.pl/api/acts/DU/2025/1654/text/O/D20251654.pdf), annex, code 01.24.Z.
- [Ministerial communication of 28 May 2025](https://www.gov.pl/attachment/fc45e79c-2206-483b-9ff2-f1c7d94a1038), point 1(b), seasonal contract-copy component launch on 1 July 2025.

The scoped check does not renew the old whole-project legal attestations or change the global baseline of 18.07.2026.

## Verification

The application part of npm run verify passed after correcting two mixed legal/document reference tags: type checks, registry and reader checks, lint, formatting, 244 application tests and 68 corpus tests. The review-tool tests then exposed the old explicit inventory expectation of 85 documents. Updated both expectations to 88, regenerated and validated the 1,736-entry ledger, then passed all 15 review-tool tests, editorial validation and the production build. Reference previews passed for 88 documents, 63 map nodes and nine cases.

All three guides were checked at desktop 1440 px and mobile 360 px without viewport overflow. Inspected the certificate desktop and arrival/permit mobile specimens visually. Keyboard activation opened the arrival guide from the certificate, the seasonal topic from the permit's reverse context, and the permit from the map. The final browser error list was empty. Local screenshots remain under untracked output/.

Writing acceptance is scoped to these files. Remaining employment topics, law-module writing, corpus source-layout audit and whole-project legal acceptance remain open. Delegowanie is the next article; its source preparation is complete but its rewrite belongs to batch 75.
