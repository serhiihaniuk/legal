# CUKR case guide and address notification

## Reader question and completed example

The guide explains how a person with temporary protection prepares and files a CUKR application, what happens to a pending ordinary residence case, and which event changes the person's status. The complete overview, six stages, document definitions and reference material were reviewed against `legal-explanatory-writing`.

The fictional adult has continuous UKR from 15 March 2024, no trips, and identity originally established with a passport. A replacement passport leaves old details in PESEL. The record is corrected on 12 May 2026. Both payments are made on 14 May, and the signed MOS application is sent on 15 May with UPO and the submitted files retained. The pending ordinary temporary-residence case ends by law at that filing event.

The example distinguishes three later dates: card issuance on 10 August, availability of collection information on 17 August, and personal collection on 28 August. Collection creates the residence permit; the card's three-year validity has already begun at issuance. A move on 1 September is notified on 4 September with proof of submission. These are fictional completed events, not a prediction of processing time.

- Four bounded authored modules own the overview, stages, documents and reference material. All six stable stage identifiers remain intact.
- One register supplies 24 entries: 23 typed document references and one preparatory action. Every document occurs in a relevant stage. Internal records, registry checks, conditional correspondence and mandatory filing attachments have different statuses.
- The required filing set is the CUKR application, digital photograph and proof of the two payments. It does not copy the ordinary work-residence package, employer annex, income evidence, passport scans or ordinary biometric appointment into CUKR.
- The guide distinguishes the adult category from the child born in Poland category, registry signature specimen from electronic signature, the two identity-confirmation transitions, and pre-collection protection from post-collection residence and work rights.
- Refusal, wezwanie, response records and restoration evidence remain conditional. The sixty-day collection rule is not presented as an ordinary response deadline that can automatically be restored.
- The existing temporary-residence notification guide now also explains the CUKR address obligation. Its added fictional Polish letter fragment follows the completed September move. The page distinguishes this notice from cessation of the purpose of an ordinary temporary permit.

The specimen omits identifying data and actual addresses. Its note explains that a real notice needs the applicable identification, address and signature details. It is an illustrative fragment, not a reproduction of an official form or a guaranteed sufficient submission.

## Official checks and scope

Author checks are scoped to 6 September 2026. The atlas baseline remains 18 July 2026. This record does not constitute distinct independent legal acceptance.

- [Special act, Dz.U. 2025 poz. 337](https://eli.gov.pl/eli/DU/2025/337/ogl), with its [official reading text](https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf), updated 22 May 2026 and listing later amendments. Reviewed art. 42c–42x and their conditions, including the protection basis, critical UKR dates, child category, refusal, MOS attachments and registry checks. The signature specimen locator is art. 42g ust. 2 pkt 2 lit. b; it is distinct from electronic signing of the application.
- Art. 42i explains the pending temporary proceeding; art. 42l the 180-day period; art. 42o competence and refusal; art. 42p validity; art. 42r personal collection and its sixty-day consequence; art. 42s fees; art. 42t withdrawal; art. 42u address notice; and art. 42v–42x work, business and timely filing. The guide keeps those events and consequences separate.
- [Commencement notice, M.P. 2026 poz. 371](https://eli.gov.pl/eli/MP/2026/371/ogl), including the one-page official text: CUKR begins on 4 May 2026. [Application regulation, Dz.U. 2026 poz. 530](https://eli.gov.pl/eli/DU/2026/530/ogl), effective from that date. The original form remains linked through the existing application guide; this batch does not claim a corpus-wide visual form audit.
- [Amendment, Dz.U. 2026 poz. 203](https://eli.gov.pl/eli/DU/2026/203/ogl), art. 25–26. Identity originally established only by oświadczenie has the 31 August deadline and the stated 1 September consequence. Other or expired documents have a separate sixty-day rule from passport issuance, with the already-confirmed identity exception. Updating an old passport number is not described as restoring lost protection.
- [UdSC CUKR questions and answers](https://www.gov.pl/web/udsc/cukr-QA), operational guidance on signing, retained UPO/PDF/XML, payments, registry preparation, trips and collection. The example uses Profil Zaufany, which avoids treating all potentially described signing methods as interchangeable. Guidance and statutory conditions remain separately identified.

Neutral shared KPA records are reused for correspondence, evidence and appeal. CUKR-specific overrides avoid importing ordinary temporary-residence filing provisions into its register. No independent legal-review attestation or global source date was changed.

## Verification and corrections

`npm run verify` passed on the final application changes: application and script type checks, generated knowledge and source-reader checks, lint, formatting, 170 application tests, 68 corpus tests with the existing Windows symlink skip, 15 review-tool tests, editorial coverage validation and the client/server production build. Existing font, environment-option and bundle-size warnings remain.

CUKR coverage assertions check the exact required filing references, unique register references, stage/register closure, reverse case contexts, conditional refusal and address evidence, and exclusion of ordinary temporary-residence filing references. They supplement source review rather than prove legal correctness.

Adding a second letter exposed a specimen test that always selected the first letter on a page. It now scopes each assertion to the figure carrying that specimen's title. A bare article citation introduced in a source note was corrected after validation rejected it. Both corrections are included in the successful final run.

At 360 px, a long status badge competed with the document title and could clip. The mobile register now places the status below the full-width title, and the shared shadcn badge wraps within its available width. The desktop table remains intact. React review found no added effects, state, fetching or runtime dependencies in these two class changes.

Browser checks at 360 and 1440 px confirmed all six stage headings, initially folded reference sections, meaningful content and no document-level horizontal overflow. The mobile screenshot shows the address title and status fully readable. Desktop badge measurements found no clipped visible labels. The temporary in-app viewport override was reset.

In-app locator clicks scrolled to a document reference without completing navigation in this test session. A separate `agent-browser` run successfully followed the CUKR register link to the notification page, expanded its four case contexts and returned through the CUKR backlink. That run and the fresh in-app page reported no browser errors. This observation is recorded as a test-tool discrepancy rather than silently counted as successful in-app navigation.

The writing registry records the exact raw-file SHA-256 of the four CUKR modules and renews the notification guide's changed hash. Inventory validation and `git diff --check` are required before committing this batch.

## Remaining work

Other purposes is the last complete case-guide review. Map topics, law learning modules, individual provision commentary, remaining interface copy, the full extraction/layout audit and distinct independent legal review remain open. The art. 100d court-practice follow-up recorded in batch 20 also remains open.
