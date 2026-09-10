# CUKR document-use migration

Implemented on 10.09.2026 following the read-only audit by legacy_case_audit below. The initial audit and proposed lists are retained as source and scope evidence. Final changes, independent review and verification follow them.

## Read scope

Read the complete CUKR route, document register, six stages and reference file:

- `app/data/case-guides/editorial/routes/cukr.ts`
- `app/data/case-guides/editorial/cukr/documents.ts`
- `app/data/case-guides/editorial/cukr/stages.ts`
- `app/data/case-guides/editorial/cukr/reference.ts`

Read the complete guides `cukr-application`, `pesel-ukr-confirmation`, `fingerprint-record`, `signature-specimen`, `residence-card`, `temporary-residence-notification` and `ukraine-work-notification`. Also inspected the shared UPO, fingerprint and work-notification definitions, document-use actions and catalog searches for a readiness-information destination. Applied the installed legal-explanatory-writing skill. This is not a fresh review of every shared procedural guide.

## Preserve the selected fiction

The adult Ukrainian applicant lives in Wroclaw. UKR has been uninterrupted since 15.03.2024, with no exits. Original identity confirmation used a passport. The passport was replaced in April 2026; the obsolete PESEL passport data were corrected on 12.05.2026. Existing fingerprints and signature are recorded. Employment under an umowa o pracę and a proper PUP notification are established separately.

The two payments were made on 14.05.2026, 100 zł and 340 zł. The applicant signed the special MOS application with their own Profil Zaufany and filed it on 15.05.2026 with a photo and both payment proofs. UPO, PDF/XML and the submitted files were saved. A previously pending temporary-residence-and-work case existed. No additional summons, response packet or ordinary fingerprint appointment occurred in this example.

The card was issued on 10.08.2026. The authority made collection information available on 17.08.2026. The applicant personally collected the card on 28.08.2026. The move occurred on 01.09.2026 and the issuing wojewoda was notified on 04.09.2026, with submission evidence retained. These are separate events. Keep the existing positive outcome and identify adverse branches as alternatives.

## Source checks

The [ELI record for Dz.U. 2025 poz. 337](https://eli.gov.pl/eli/DU/2025/337/ogl) reports the act as in force and links the compiled text, whose header is dated 22.05.2026. Do not read bracketed replacement text without checking commencement. [MP 2026 poz. 371](https://eli.gov.pl/api/acts/MP/2026/371/text.pdf) activates the specified CUKR provisions on 04.05.2026. The selected 15 May filing is after launch.

Checked [the current compiled special act](https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf), physical PDF pages 21–33: 42c eligibility; 42f–42h application and registry; 42i pending temporary case; 42k–42o procedure; 42p–42r issuance and collection; 42u address; 42v work. Registered UKR history, current identity data and uploaded attachments have different roles. The pending temporary case ends by operation of law on CUKR filing. Card validity runs from issuance; collection changes the residence basis. The collection limit runs from availability of collection information. Refusal is a decision. The positive path must not invent one. These locators support the distinctions below; they do not establish an individual's registry history.

[Dz.U. 2026 poz. 530, annex part E, physical PDF page 9](https://eli.gov.pl/api/acts/DU/2026/530/text/O/D20260530.pdf#page=9) identifies photo, card-fee proof and stamp-duty proof, followed by an optional other-attachments field. That field does not justify copying another permit's packet.

[UdSC CUKR FAQ](https://www.gov.pl/web/udsc/cukr-QA), questions 23–27, 31–34 and 40–43, confirms the 100/340 amounts, registry correction through a gmina and transfer of existing biometrics. MOS's eligibility check does not list which particular field is missing. Do not invent a detailed MOS error screen or downloadable biometric report. The FAQ's broad signature wording includes podpis osobisty; the adult's own signature options in 42f(5)/42g(1) are narrower. The selected Profil Zaufany is consistent with both. Preserve it.

[Dz.U. 2026 poz. 203, articles 25–26, physical PDF page 37](https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf#page=37) distinguishes self-declared identity from other-document/passport cases. Unconfirmed self-declared identity had a 31 August deadline and a 1 September UKR-to-NUE consequence. Article 26 has its own scope, 60-day trigger and exception. The selected passport-confirmed applicant must not acquire the alternative's identity failure. [The ELI commencement record](https://eli.gov.pl/eli/DU/2026/203/ogl) also separates general 5 March commencement from later exceptions.

## Document identities to fix before wrapping the arrays

1. Narrow `card` to the actual CUKR card. It currently also names the readiness notice and collection date. Add a separate `kind: "action"` control for reading the authority's collection information, with guidance to an expanded CUKR section in `residence-card`. Preserve its actual date without inventing a standard certificate, email, SMS or MOS download. Record collection in the existing working chronology. A readiness message is not the plastic card.
2. Expand `residence-card.ts` before using it as the final destination. Its introduction and checks currently direct every reader toward a permit decision. Add the CUKR exception and a completed three-date reading example. Keep ordinary permit explanations. This bounded addition is preferable to an almost duplicate card guide.
3. Represent `registry`, `fingerprints` and `signature` as registry-review actions with their existing guides where feasible. They are not applicant-created annexes. The fingerprint guide's ordinary form and signature guide's ordinary form must not become required CUKR PDFs through the case label. Keep `correction` as an action and state what happened on 12 May.
4. Narrow CUKR `upo` to its receipt. `application` already represents the saved application; its instruction can cover PDF/XML and submitted attachments. The shared label "UPO та збережена заява" currently conflates these roles. Do not modify shared definitions used by other routes merely for this case.
5. The selected work check concerns an existing employment contract, the employer's sent PUP notification and its receipt. The current `work` row combines the last two. Prefer concrete local rows using `employment-contract`, `ukraine-work-notification` and a distinctly named `dispatch-proof` for the PUP receipt. Do not call the employer's receipt the applicant's CUKR UPO. All are reviewed for employment context and remain outside the selected CUKR upload packet.

## Six proposed documentUse lists

Use the existing actions `prepare`, `submit`, `review` and `update`. Every repeated entry must name its new stage role. The sequences below are recommendations, not authored code.

| Stage           | Selected materials and action                                                                                                                                                                                                                                         | Reuse and exclusions                                                                                                                                                                                                                                                                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`        | `passport` review against current registry; registry/history review; `correction` update for the completed 12 May correction; `chronology` update; fingerprints/signature registry review; existing employment contract, sent PUP notification and its receipt review | No files submitted to CUKR at this stage. No new biometric event or identity certificate. Contract and notification dates remain unspecified.                                                                                                                                                                                                                   |
| `qualification` | Registry/history and chronology review; `assessment` prepare; `matrix` prepare                                                                                                                                                                                        | Remove `d.upo` here. The selected CUKR receipt does not exist before 15 May, and the fiction does not identify a receipt for the old case. Record the known pending case without inventing its application, receipt or discontinuance notice.                                                                                                                   |
| `filing`        | Application submit on 15 May; photo submit; both proofs from 14 May submit; UPO review after sending; local index update with the actual uploaded files                                                                                                               | Applicant signs and submits. Archive the saved application and its PDF/XML with the receipt. No all-page passport upload, employment annex, income, insurance, housing, private matrix or biometric form. The index remains a working record unless the fiction expressly says it was submitted.                                                                |
| `evidence`      | Registry/history review for continuing facts; chronology and matrix update; existing employment materials review if retained                                                                                                                                          | Explain that no supplemental demand or reply occurred. Reuse prior records without another upload. Authority security checks are not a privately obtained clearance certificate. Do not claim the private matrix confirms their result.                                                                                                                         |
| `procedure`     | UPO review for the filing date; collection-information action review for 17 August; chronology update for issuance and collection information                                                                                                                         | The physical card is not yet in the applicant's hands. Conditional `summons`, `order`, `complaint`, `delivery`, `requirements`, `response`, `index`, `dispatch`, `obstacle` may remain with explicit triggers. Review received documents; prepare/update analysis; submit a response or complaint only in its alternative. None occurred in this selected path. |
| `decision`      | Passport review/present at collection; actual CUKR card review on 28 August; chronology update; address notification prepare/submit after the 1 September move; distinct submission proof review for 4 September                                                      | Existing fees are not paid again. Refusal, delivery, appeal, judicial complaint, court judgment and deadline obstacle remain conditional. A positive decision, appeal or court judgment is not added to the selected outcome. Collection information may be reviewed again only to compare dates.                                                               |

The existing procedure/decision alternatives should retain their legal guidance. The migration should not make them appear to be steps already completed by this applicant. In particular, no ordinary temporary-permit appearance, article 108 certificate or paper application should be introduced just to fill a stage.

## Unresolved facts and implementation limits

- The exact April passport issue date, old passport expiry and method of the 12 May correction are not supplied. Keep the established correction; do not choose an article 26 breach or invent a correction certificate.
- The exact identity-history document held by the applicant is unspecified. The case establishes registry verification, not a separately requested historical certificate. A general PESEL assignment paper cannot be relabelled as proof of every historical date.
- The old temporary case's filing date, identifier, receipt and any later administrative notice are unspecified. Do not invent them to justify the qualification-stage UPO row.
- The channel and wording of collection information are unspecified. Preserve "made available on 17 August" rather than equating it to the applicant reading an email that day.
- There is no separate collection certificate in the selected facts. A working chronology may record the established event without claiming to be an authority's receipt.
- The destination city and notification channel after the September move are unspecified. The existing address-guide specimen mentions Poznan, but that illustrative detail need not become a case fact. No new lease or replacement-card application is selected.
- No employment start or PUP-submission date is given. The guide's September employment example belongs to another fiction. Do not import it or claim a new notification was required merely because the applicant collected CUKR.

## Next bounded work and verification

Author the four CUKR files plus the bounded residence-card guide addition. Keep the existing registry/action distinction and select no new event without an explicit fictional clarification. Add semantic coverage for the initial packet, no supplemental packet, three card dates, registry actions and address notification. Verify all six lists use `documentUse`; keep the count of migrated routes evidence-based. Then run the repository checks and desktop/mobile rendering, including direct card-guide navigation and conditional rows. None of those implementation checks was run or accepted in this planning audit.

## Implementation and independent review

The four authored CUKR files now use documentUse in all six stages. Registry/history, correction, fingerprints and signature are guided actions. The employer contract, sent notification and its receipt are distinct from the applicant's CUKR packet. The 15 May submission contains the application, photo and two payment proofs; its UPO is an output after sending. Private indexes and matrix records are not additional uploads. The selected case has no supplemental demand or response packet.

The readiness action, physical card and collection chronology are separate. The card row names its actual annotation, Poprzednio posiadacz ochrony czasowej. The 4 September address notification has a separate dispatch record. Conditional refusal, complaint and response records remain explicitly conditional. All selected dates and the positive outcome are preserved.

The residence-card guide now qualifies ordinary decision-based rules and adds a completed CUKR three-date comparison. It explains issuance-based validity, collection-based permit creation, the child exception, the 60-day collection rule and the address notification. No positive decision, collection certificate, message channel or printed expiry was invented. The illustration is a fictional working record, not an official form.

Independent reviewer legacy_case_audit read all five files completely and checked final corrections against current special-act sources. Reviewer ukr_filing_review separately refreshed the retained ordinary-card provisions and the UdSC explanation on 10 September. The old template citation on the UdSC page is expressly excluded as evidence of current card design. A child-rule PDF pointer and the printed annotation were corrected before acceptance.

Accepted SHA-256:

- documents.ts: FAD7369ECCCCA9480C1B4FCD3C88FB6D233D9F4AEA0CF8921626B2ED8D172859
- stages.ts: EC773B557246E8D9742B61485D9B45CC1DBE4284F7FE6C55F2AB19DE86EDFCED
- reference.ts: E918F417DD6AA432BB20168DB1D7C2D6149440A27B84D58A70D15E4E635C9B5B
- routes/cukr.ts: 7DE91C3680CA189E9880B10DE75994C1090678A8582555528DBDAD6C8CE13C7A
- residence-card.ts: D69A3BD2B3DC4C684DC68392108F4EC66234A41ED8C5AD86C411F00164F02CCD

The shared coverage assertion now checks every stage of all nine cases, without a migration allowlist. CUKR regression checks distinguish the four submitted destinations, prefiling records, registry actions and readiness from the physical card. Record uniqueness concerns actual materials, not a guide ID: different PUP, response and address receipts may share the dispatch-proof guide. Focused typecheck and 55 document/case rendering tests passed after updating the old assumptions.

Browser inspection confirmed six visible document lists before disclosure interaction (9, 4, 6, 6, 12 and 12 entries). The selected packet reads directly at 360 px, with no horizontal overflow. Keyboard navigation from the actual card row reaches the expanded card guide and its fictional comparison. Final verification and delivery remain to be recorded below.

## Final verification and pause

Full npm run verify passed on 10.09.2026, including type checks, generated registry/source-reader checks, lint/format, application tests, corpus/review-tooling/editorial checks and production build. Reference previews passed for 85 documents and nine cases. Baseline ledger validation passed with 1,733 entries. Desktop and mobile checks found no horizontal overflow or browser errors; all six stage lists were visible without opening document disclosures, and the card-guide link and comparison worked. The temporary browser session is closed.

Initial focused failures were a test-only widened string type and old expectations that guide IDs were unique and registry checks were uploaded-document links. The tests now check actual record uniqueness, separate action guidance and the real initial packet. Focused typecheck plus 55 tests then passed, followed by the full run. No further authored changes followed the accepted hashes.

The user requested finishing this task, pushing, then pausing. This batch is complete; do not start the next content batch until the user resumes. The broad writing, corpus fidelity and independent edition-review objective remains unfinished and is preserved in the README.
