# Work case guide

Reviewed on 2026-09-06 against `legal-explanatory-writing`.

## Question and completed example

The guide answers how to prepare and follow an ordinary adult applicant's temporary residence and work case. It explains the relationship between current status, permission to keep working, the new application, evidence, correspondence and the eventual decision.

The complete route and its new document, stage and reference files were read. Six existing stages and their anchors remain. One fictional case now runs through them: continued work in company A, a permit expiring on 31 August 2026, filing on 3 August, and an annex explaining a change from 5,500 to 6,000 zł gross. A request delivered on 7 August requires two materials within 14 days. The response on 18 August addresses both points before 21 August. The final stage compares hypothetical granted conditions with the current contract. It does not promise a grant, a particular permit duration or a processing date.

The guide defines the procedural distinctions where they matter. A draft differs from a signed submission with UPO; UPO differs from the authority's certificate; formal defects differ from missing evidence and failure to perform a required personal action. A contract change, a payment record and insurance evidence answer different questions. The chapter on the decision distinguishes the applicant's and employer's notification duties.

## Documents and implementation

The route now imports three focused files instead of repeating the same document definitions inside a 4,215-line route object. The register contains 34 distinct evidence-document IDs. Each stage uses those same definitions, and every register item has a document-guide destination and reverse case reference.

- Filing includes the application, passport scans, photo, employer annex, representation where applicable, separate payment evidence and UPO after submission.
- The authority's certificate and biometric records appear in the procedure stage, not as documents the applicant must create before filing.
- Contract, actual work organization, business activity, insurance, ZUS, remuneration, regulated qualifications and translation are distinguished. Their status describes the relevant condition rather than making every possible document a mandatory upload.
- Correspondence includes the request, delivery evidence, requirements table, reply, attachment index and submission evidence. Deadline-restoration evidence remains conditional.
- The final stage includes the decision and card, with conditional work-notification evidence. The status stage includes the previous decision and residence documents.

Existing document guides supply the filled document examples. This batch adds the connected case example; it does not claim to reproduce MOS or an official form. Shared document-check text was reviewed in the earlier document batches. The common case components still have their separate pending interface-copy review.

An optional route verification date now displays `Гайд перевірено: 06.09.2026` on this guide. Other routes retain the atlas baseline. The four authored work files receive writing acceptance. No independent legal attestation is created.

## Official sources and timing

Checked on 2026-09-06, with the earlier scoped checks identified below:

- [Ustawa o cudzoziemcach, Dz.U. 2025 poz. 1079](https://eli.gov.pl/eli/DU/2025/1079/ogl), ELI metadata and its [consolidated reading text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), dated 7 April 2026. Checked the relevant permit, filing and procedure provisions in art. 98–108 and 112a, and the work conditions, refusal grounds, decision and subsequent duties in art. 114–126. ELI lists the amendments Dz.U. 2025 poz. 1794 and Dz.U. 2026 poz. 203. The MOS commencement is checked separately below; bracketed future text in an older PDF is not treated as proof of commencement.
- In particular, art. 114 separates comparable pay from the full monthly minimum regardless of hours. Its ust. 4 exemption concerns pkt 3 and 4, not all conditions; ust. 4a covers insurance arising from the intended work and ust. 4b permits the stated aggregation. Art. 119, 120, 121 and 123 distinguish changes requiring an amended permit, notification duties and limited protection against revocation. The applicant has 15 working days after job loss; the employer's separate art. 121 ust. 4 period is 15 calendar days.
- [UdSC's MOS information](https://www.gov.pl/web/udsc/info-mos) confirms the 27 April 2026 launch and the application, employer-signature, UPO and personal-appearance flow. The adult applicant's signature follows the exact art. 106d ust. 3 text. The Q&A URL did not load reliably and is not used as the guide's source. A voivodeship page with mixed older filing instructions was removed from the source list.
- [Work statute, Dz.U. 2025 poz. 621](https://eli.gov.pl/eli/DU/2025/621/ogl), using the current official reading text already obtained in batch 14. Read art. 21 on continuing the same previously authorized work and art. 31 on local profession lists. Batch 14 checks of art. 3 and 5a and the amendments Dz.U. 2026 poz. 203, 473 and 734 support the shared conditional notification entry. No particular county is invented, and no claim is made that its current restricted-profession list is empty.
- [Minimum remuneration, Dz.U. 2025 poz. 1242](https://eli.gov.pl/eli/DU/2025/1242/ogl), published text in full: § 1 sets the 2026 monthly minimum at 4,806 zł and § 3 establishes commencement on 1 January 2026. The figure is tied to the dated example.
- [Opłata skarbowa, Dz.U. 2025 poz. 1154](https://eli.gov.pl/eli/DU/2025/1154/ogl), current reading text dated 3 August 2026. Annex III, item 2b supports 440 zł for this permit category; the general temporary-residence amount is not substituted for it. Batch 05 supplies the general payment and exemption checks. [Card fees, Dz.U. 2022 poz. 1583](https://eli.gov.pl/eli/DU/2022/1583/ogl), § 2, and foreigners act art. 235–239 were checked in batch 06 and reused for the separate 100 zł payment and exceptions.
- [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/eli/DU/2025/1691/ogl), official code text obtained in batch 14. Relevant provisions concern representation, delivery, requirements, time calculation, restoration, evidence, decisions and appeals: art. 32–33, 40, 54, 57–60, 64, 73, 77, 80, 107, 129 and 130. The response example excludes the day of delivery; 21 August 2026 is a Friday. The right to appeal and execution of a decision remain separate questions.
- [Special act, Dz.U. 2025 poz. 337](https://eli.gov.pl/eli/DU/2025/337/ogl), current official reading text dated 22 May 2026. Read art. 100d, including the suspension through 4 March 2027, effective actions during that period and the stated limits on inactivity remedies. This concerns the covered proceedings before a wojewoda and does not suspend the applicant's response deadline. The ordinary art. 112a periods are qualified beside their display.
- [Application forms, Dz.U. 2026 poz. 553](https://eli.gov.pl/eli/DU/2026/553/ogl). Reused the original-form checks from the document batches. The guide distinguishes the employer annex's name within an application from the numbering of forms in the regulation. No new source-layout fidelity claim is made.

The atlas baseline remains 18.07.2026. This is one guide's scoped source check, not a replacement for the pending complete corpus and independent review.

## Verification

- `npm run verify` passed: type checks, registry and source-layout checks, lint, formatting, 94 application tests, 68 corpus tests with one skipped, 15 review-tool tests, editorial validation and production build. Existing Vite environment-option and bundle-size warnings remain.
- Final wording and date-display coverage passed type checking, 18 focused case/document tests, editorial validation and another production build. The additional date test confirms that the reviewed guide's date does not replace another guide's baseline.
- Read the rendered overview, all six stages, the eight condition entries, all 34 register entries, 13 deadlines, 12 risks, three alternative outcomes and source notes. Inspected expanded procedure documents and their shared checking guidance.
- Desktop at 1440 px and mobile at 360 px had no page-level horizontal overflow. The mobile matrix and register use stacked entries. Inspected the guide header, stage documents and mobile conditions visually.
- The procedure-stage checkbox changed independently of its title link. The title opened the wezwanie document guide, whose case reference returned to the work guide. A typed art. 106d reference opened the expected law provision. Direct stage navigation worked. No browser console errors were recorded; the temporary viewport override was restored.
- Rechecked `/study?module=sources`, the topic page raised in the user's screenshot. It gives the answer, ELI definitions and the completed KPA publication example directly on the page, as implemented in batch 02. It fits at 360 px.

Eight complete case guides, the remaining content and interface copy, the full source-layout audit and independent review remain open.
