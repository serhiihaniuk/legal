# Blue Card case and notification

Reviewed on 2026-09-06 against `legal-explanatory-writing`.

## Question and completed examples

The guide answers how to prepare and follow an ordinary new Blue Card application under art. 127. It connects the occupation, qualifications, contract, remuneration and insurance with the evidence, filing, correspondence and eventual decision. All six stages remain addressable. The conditions, document register, deadlines, alternatives and sources remain folded by default.

One fictional case runs through the guide. An adult Indian citizen has an ordinary residence and work permit for company A until 30 September 2026. He applies on 17 August for the same programming job, with a two-year contract and 14,000 zł gross monthly pay. He has no diploma and relies on three years of relevant experience within the preceding seven years. The initial letter says only IT specialist. A later letter explains development, testing and maintenance work and is compared with the original employment records. A request delivered on 20 August gives 14 days; the response on 1 September precedes the 3 September deadline. The example does not promise a grant or a decision date.

The guide explains the alternative qualification methods, regulated professions, the two annexes, insurance, local profession restrictions, UPO, formal defects, evidential gaps, personal actions and appeals. It distinguishes a new permit from one granted before 1 June 2025 and ordinary filing from mobility. UKR has an explicit separate eligibility and biometric explanation. The fictional applicant does not have UKR or benefit from the special extensions of Ukrainian permits.

A new document guide explains the Blue Card holder's written notification. Its filled fictional Polish fragment identifies two events: the end of employment with company A on 31 August and the start with company B on 1 September. Submission on 3 September is distinguished from merely dating the letter. The example explains the selected attachments and the separate assessment of whether the new work meets the permit conditions. It is a selected teaching fragment, with identifying details omitted, not an official form or a complete letter to submit unchanged.

## Documents and architecture

The Blue Card route imports focused document, stage and reference files. Its 35 distinct document IDs are used in the relevant stages and resolve to document guides with reverse case references. The applicant annex and employer annex remain separate. Notification appears conditionally after the decision. The register also includes correspondence, delivery, response and dispatch evidence, working records and conditional missed-deadline evidence.

Twenty common filing and procedure definitions moved from the work guide to a shared file. A separate typed document-reference helper keeps this authoring code independent of the runtime document catalog. A deep comparison of the complete work route before and after extraction confirms unchanged data. The shared fee entry is specific to the work and Blue Card permits used here; it is not a generic fee for every temporary-residence route.

Six new writing acceptances cover the Blue Card route, its three supporting files, the shared document definitions and the new notification guide. The work document file's acceptance hash is refreshed for the extraction. The catalog and inventory now contain 58 document guides. No independent legal attestation is created.

## Official checks

Checked on 2026-09-06. Earlier scoped checks reused for common material are identified below.

- [Foreigners act, Dz.U. 2025 poz. 1079](https://eli.gov.pl/eli/DU/2025/1079/ogl), current official reading PDF dated 7 April 2026. Read the definitions in art. 3 and the Blue Card provisions in art. 127–138b. Reused the batch 15 checks of art. 98–108 and 112a. The applicant annex is art. 106 ust. 4; the employer annex is ust. 2. The personal-appearance minimum in art. 106e is seven days, while art. 106f provides fourteen days for the specified evidence request. Art. 133 ust. 1a has two precise exceptions to the notification-related revocation ground; it is not a general excuse for missing any duty.
- [Blue Card amendment, Dz.U. 2025 poz. 619](https://eli.gov.pl/eli/DU/2025/619/ogl), effective 1 June 2025. Read art. 20 in the original publication. It distinguishes pending cases, the qualification and decision-content provisions applicable to them, and permits granted by decisions before commencement. The latter retain the previous art. 134 and 135 rules.
- [Professional-experience list, M.P. 2025 poz. 549](https://eli.gov.pl/eli/MP/2025/549/ogl), all three pages of the official publication. Programista aplikacji, code 251401, is on page 2. This list governs the three-year experience route and is different from a local restricted-profession list.
- [GUS announcement, M.P. 2026 poz. 192](https://eli.gov.pl/eli/MP/2026/192/ogl), complete one-page publication of 9 February 2026. The 2025 average is 8,903.56 zł. The calculation for a 2026 application is 13,355.34 zł monthly and 160,264.08 zł annually at 150%. Equality meets the stated threshold. The GUS web article and a MOS Blue Card page did not load reliably; the published announcement and statute support the guide instead.
- [UKR transition, Dz.U. 2026 poz. 203](https://eli.gov.pl/eli/DU/2026/203/ogl), effective 5 March 2026. Read art. 45 ust. 1 and 3–6 on pages 40–41. For the specified lawful temporary-protection stay with UKR, it removes the relevant protection restriction and changes the biometric procedure. The ordinary example is explicitly outside that exception. This does not extend the guide into a complete protection-law manual.
- [UdSC MOS information](https://www.gov.pl/web/udsc/info-mos), launch on 27 April 2026, signatures, submission, UPO and subsequent personal actions. The commencement checks from batches 10 and 15 remain applicable; an older PDF's bracketed future text is not proof of commencement by itself.
- [Forms, Dz.U. 2026 poz. 553](https://eli.gov.pl/eli/DU/2026/553/ogl). Reused the original-form checks from batch 10: the applicant's qualification form is regulation annex 3, pages 25–27; the employer form is regulation annex 2. These numbers differ from the names of annexes inside the application. No new form-layout fidelity claim is made.
- [Work act, Dz.U. 2025 poz. 621](https://eli.gov.pl/eli/DU/2025/621/ogl), current official text obtained in batch 14. Read art. 21 on continuing the same authorized work and art. 31 on local profession lists. No county or empty local restriction list is invented.
- [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/eli/DU/2025/1691/ogl), official text from batch 14. Representation, delivery, requests, calculation and preservation of deadlines, restoration, evidence and appeals support the common procedure. The fictional response deadline excludes the delivery day and ends on Thursday, 3 September 2026.
- [Special act, Dz.U. 2025 poz. 337](https://eli.gov.pl/eli/DU/2025/337/ogl), official reading text dated 22 May 2026, checked in batch 15. Art. 100d qualifies the displayed ordinary processing period through 4 March 2027. It does not suspend the applicant's response deadline.
- [Stamp duty, Dz.U. 2025 poz. 1154](https://eli.gov.pl/eli/DU/2025/1154/ogl), annex III item 2b, supports 440 zł for the selected permit. [Card fee, Dz.U. 2022 poz. 1583](https://eli.gov.pl/eli/DU/2022/1583/ogl), § 2, supports the separate standard 100 zł amount. Reused batches 05, 06 and 15 for payment, relief and exemption distinctions.

The guide and new document have scoped verification dates of 06.09.2026. The atlas baseline remains 18.07.2026. The older independent-review ledger is not renewed.

## Verification

- Final `npm run verify` passed: both type checks, generated registry and source-layout checks, lint, formatting, 96 application tests, 68 corpus tests with one skipped, 15 review-tool tests, editorial validation and the production build. The earlier run exposed the review tool's old fixed document count; its inventory expectation now includes the new 58th guide. Existing environment-option, PDF-font and bundle-size warnings remain.
- Read the complete rendered route, all six stages, nine conditions, 35 document entries, eleven deadlines, twelve risks and four alternatives. Read the notification guide and its complete fictional fragment. The final UKR additions and source entry were checked against the original publication and in the rendered guide.
- Checked the stage anchor and expanded controls at 1440 px and 360 px. Conditions, deadline entries and the notification fragment fit without page-level horizontal overflow.
- A stage checkbox changes independently of its document link. The new notification link opens its guide; its reverse case reference returns to Blue Card. The checklist was left unselected. A typed art. 134 link opened that exact provision on desktop. No browser console errors were recorded; the viewport override was restored.
- Rechecked the user's questioned `/study?module=sources` page. Its current version directly answers which edition to use, explains ELI and publication terms, and includes the completed KPA date example from batch 02. It no longer sends the reader through the generic introduction in the screenshot.

Seven complete case guides, remaining map and law explanations, interface copy, the full source-layout audit and independent review remain pending.
