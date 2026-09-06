# Working notes, missed deadlines and work notifications

Reviewed on 2026-09-06 against `legal-explanatory-writing`.

## Questions and examples

| Guide | Reader's question and completed example |
| --- | --- |
| case-assessment | What should another worker be able to understand from an internal case note? A filled fictional note compares a contract naming company A with an employer annex naming B. It separates documents, the applicant's explanation and an unresolved question, then assigns a specific follow-up. The internal reminder is distinguished from a legal deadline. |
| deadline-obstacle | What explains a missed deadline, and which date starts the period for requesting restoration? A filled chronology separates delivery of a decision, the appeal deadline, hospitalization, the claimed end of the obstacle, issue of the hospital certificate and submission of the request with the appeal. Timely submission does not itself establish absence of fault. |
| ukraine-work-notification | What does a notification establish, who can use this procedure and what happens after a change or failed submission? Selected fictional fields compare the contract date, actual start, employer location, working conditions and submitted version. The guide distinguishes temporary protection, the transitional provision, changed conditions and a system failure. |

All three authored files and their complete rendered explanations were read. The internal note and two comparison tables are filled illustrative records. They are not official forms, a reproduction of praca.gov.pl or a medical document. Personal identifiers are omitted. Practical conclusions preserve the facts that remain unresolved.

## Case integration

The new shared document definitions were read in full. The deadline evidence is conditional in the procedure stage, decision stage and full register of all nine cases. Each entry points to the document guide and states that applicability of restoration must first be established. Reverse document references expose all nine cases.

The work and CUKR guides reuse one notification definition in their stages and registers. The old entry described the notification as proving lawful work. The replacement explains that it records what was notified and when, while stay and actual work conditions require separate verification. The entry is conditional on using the notification procedure.

These are focused integrations. None of the nine complete case routes receives writing acceptance from this batch.

## Official sources and timing

Checked on 2026-09-06:

- [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/eli/DU/2025/1691/ogl) and its [official code text](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf). Read art. 57–60, 77–81 and 107, with the appeal provisions in art. 129, 130 and 134. The example uses the ordinary 14-day appeal period and excludes the triggering day. The dates 21 August and 31 August 2026 are Friday and Monday. The guide distinguishes the two competence rules in art. 59 and the requested stay of execution in art. 60. Art. 77 and 80 concern the authority's evidentiary work; they do not prescribe a firm's internal note template.
- [Work statute, Dz.U. 2025 poz. 621](https://eli.gov.pl/eli/DU/2025/621/ogl) and the [current consolidated reading text](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf). Read the relevant definitions and art. 3 and 5a, including eligible status, seven-day filing, the separate system-failure provision, required fields, changed conditions and PUP competence. The text includes the four amendments currently listed by ELI: Dz.U. 2025 poz. 1794 and Dz.U. 2026 poz. 203, 473 and 734.
- [Dz.U. 2026 poz. 203](https://eli.gov.pl/eli/DU/2026/203/ogl) and its [published text](https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf). Read art. 40, 41 and 54. The guide distinguishes previously compliant notifications from new work and explains the three-year extension for Ukrainian citizens lawfully staying without temporary protection, counted from 5 March 2026. The act's listed future exceptions do not postpone these provisions.
- Read the relevant changes in [Dz.U. 2026 poz. 473](https://eli.gov.pl/eli/DU/2026/473/ogl), art. 8, and [Dz.U. 2026 poz. 734](https://eli.gov.pl/eli/DU/2026/734/ogl), art. 5. Their changes to other work-permit and contract-transmission provisions do not remove the notification's contract-type change requirement in art. 5a ust. 5. ELI gives entry into force on 8 July and 20 June 2026 respectively for the relevant provisions.
- [Urząd Pracy m.st. Warszawy guidance](https://psz.praca.gov.pl/web/8188476/powiadomienie-o-podjeciu-pracy-przez-obywatela-ukrainy). Used the main guidance, updated 26 March 2026, for filing, ordinary correction, repeated notification and late-submission distinctions. Its automatically generated introductory summary was not used. The guide identifies this as administrative guidance and directs actual submitted-data errors to the competent PUP rather than inventing a correction procedure.

These are scoped checks, dated 06.09.2026 on the three guides. The atlas baseline remains 18.07.2026. No edition is promoted, and no independent legal-review attestation is renewed. The existing corpus discrepancies recorded in batches 09 and 13 remain open.

## Verification

- `npm run verify` passed, including both typechecks, generated-data checks, lint, formatting, 93 application tests, 68 passing corpus tests with one skipped, 15 review-tool tests, editorial validation and the production build. An earlier attempt encountered three existing five-second test timeouts while loading corpus modules. The complete rerun passed without timeout or configuration changes.
- Final wording adjustments passed five document-rendering tests, five document-coverage tests, editorial validation and targeted formatting. `git diff --check` passed.
- All three guides rendered meaningful content and fit at 1280 px and 360 px without page-level horizontal overflow. Both mobile comparison regions scrolled 40 px with the keyboard. The filled internal note and deadline chronology were also inspected visually.
- The work-notification guide opened the work case, its decision-stage reference returned to the guide, and the typed Art. 5a reference opened the expected provision. The missed-deadline guide listed all nine case destinations; its work-case link and the procedure-stage return link worked. No browser console errors were recorded. The temporary viewport setting was restored.
- Rechecked the reading-guide page raised in the user's screenshot. Its current version answers which law text applies, explains the terminology and contains the completed KPA publication example on the same page. Desktop/mobile rendering and the direct KPA reader link worked. This confirms the implementation recorded in batch 02; no duplicate rewrite was introduced.
