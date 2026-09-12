# Temporary-work period documents

Completed 12.09.2026 using the legal-explanatory-writing skill. The reader question is which record identifies actual work for a user employer, who creates it, and how to compare periods after an agency changes.

## Implemented scope

Three separate guides now distinguish the agency's Świadectwo pracy for employment, its article 25a certificate for civil work, and the user employer's article 14a register. Each has a completed fictional Polish specimen. The employment and register guides preserve the accepted A/2025 and B/January–June 2026 history for the same U. The separate civil example preserves a gap between March and May; it corrects a working comparison, not the issuer's already correct documents.

The employment guide distinguishes ordinary Kodeks pracy deadlines from the agency's special articles 18a–18b rules and explains the correction route. Pay information on the employee's request is distinguished from current employment-income evidence. The civil guide explains its own end-of-work issue rule and the alternatives in article 11b. The register guide distinguishes actual periods, daily hours, planned placements and retention.

Root registered all three IDs and guide bodies, generated the knowledge registry, and linked the documents from the temporary-work article. Its document list explains their actual roles and excludes unnecessary residence filings and civil-period evidence absent from the example. The guides have reciprocal links and reverse map context. Counts changed from 90 to 93 document guides; no coverage assertion was weakened.

## Official-source verification

Scoped source checks are dated 12.09.2026. This does not renew the atlas-wide legal baseline of 18.07.2026.

- [Temporary-workers act, Dz.U. 2025 poz. 236](https://eli.gov.pl/api/acts/DU/2025/236/text/O/D20250236.pdf): articles 11a–11b, 14, 14a, 18a–18b, 20 and 25a. Issuers, employment/civil alternatives, actual periods, deadlines and retention were checked. The act does not prescribe a national register table or worker handover deadline for the internal register.
- [Kodeks pracy, compiled ELI text](https://eli.gov.pl/api/acts/DU/2025/277/text/U/D20250277Lj.pdf), preparation date 18.08.2026, physical pages 78–79: articles 97 and 97¹. Ordinary issue, optional pay/qualification information, correction and labour-court routes were checked.
- [Employment-certificate regulation, Dz.U. 2024 poz. 1016](https://eli.gov.pl/api/acts/DU/2024/1016/text/O/D20241016.pdf): § 2, § 7 and the auxiliary model. Root visually inspected all six model/instruction pages, physical pages 5–10. The model separates employer/employment periods, temporary users and periods, work, termination, entitlements, supplementary information, signature and correction instructions. The guide reproduces selected fictional fields only. The model is auxiliary, not an exclusive mandatory blank.
- [Foreign-worker employment act, Dz.U. 2025 poz. 621](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf), article 3(1)(6): the example's permanent-residence work access. That status does not remove temporary-work duration restrictions.

The independent reviewer also checked current ELI metadata and the amendment chains for the temporary-workers act and certificate regulation. No later change to the specific record rules was found. No full-act or whole-branch legal acceptance is claimed.

## Independent acceptance

ukr_filing_review authored the two certificates; ukr_work_sources authored the user register. legacy_case_audit independently read all three complete guides against the official sources and reviewed reciprocal links and root's map integration. Root read all three and their final link deltas. Accepted SHA-256 values:

- app/data/document-library/editorial/guides/employment-certificate.ts: f7c93df820c12610eac6954f764b8eff42588757413cd84b84768b393754ebd9.
- app/data/document-library/editorial/guides/temporary-civil-work-certificate.ts: cb4dff31a174204c15914b1a6bf844e9e737b75f25bfde542b453b66721ec3f8.
- app/data/document-library/editorial/guides/temporary-work-period-register.ts: 435ee95c973a1857b4b09fff4ebcac6cc9a3e0a870cfb2d3fe463b57caab6de7.
- app/data/legal-map/editorial/topics/temporary-work.ts: 09b8f08b22d7bb78bf18261aad29bf859ef0c22ce9ce1e8a1159120c3668792e.

## Verification

The first typecheck caught an unsupported language property on a table sample and two mixed-reference paragraphs using the statute-only text helper. Root removed the unsupported property and used the evidence-aware helper. The reviewer checked both final deltas. Displayed specimen contents and legal claims did not change.

Full npm run verify passed after those corrections: 250 application tests across 41 files, 70 passing corpus tests and one existing skip, 15 review tests, editorial checks and production build. The final reciprocal-link-only changes received renewed typecheck and reference-preview validation. Previews passed for 93 evidence documents, 62 map nodes, 9 cases and 2,573 provisions. Build was renewed after final links.

Root inspected each guide at 1440 px and its Polish specimen at 360 px. No viewport overflow occurred. The register table scrolls independently by keyboard (ArrowRight moved it 40 px at 360 px viewport). Direct example-section anchors landed below the header at 81–82 px. Keyboard navigation passed from civil certificate to register, register to map through its expanded usage list, and map to employment certificate. Browser errors and warning/error console entries were absent. Screenshots and command logs are local ignored QA output; the QA browser was closed.

## Remaining work

Writing acceptance is now 207 of 1,830 active authored files, including all 93 existing document guides. The missing KRAZ, agency arrangements, work-notification, posting-permit and A1 guides remain open. Other map and law writing, extraction fidelity and whole-project independent legal acceptance remain part of the active goal.
