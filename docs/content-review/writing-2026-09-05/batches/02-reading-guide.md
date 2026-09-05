# Reading guide with answers on the page

Reviewed on 2026-09-05 against `legal-explanatory-writing`.

## Purpose and complete-page review

The former eight pages repeated a generic introduction, named a few concepts and deferred the full explanation to another page. The user could not tell why this module existed. Each topic now answers a question that arises at work, explains its terms and includes a completed example. The related reading continues that explanation through an act or evidence document.

| Topic | Question and concrete example |
| --- | --- |
| sources | Which edition applies? The KPA publication visibly separates its December publication date from the November cutoff for included changes and points out the transitional provision. |
| norm | What does a rule establish? A missing required signature and insufficient evidence of income have different meanings even when both prompt a request from the authority. |
| kpa | Why does a residence case cite KPA? An employer's changed remuneration connects the permit condition to the procedure for collecting evidence. |
| stay | How do current stay and a new permit differ? A short language course does not establish the conditions of the university-study route. The example leaves work eligibility open. |
| work | Does lawful stay permit this work? A valid card and a contract with employer B do not by themselves explain work under a decision naming A. |
| evidence | Why can a large package leave a condition unproved? A move explains two addresses but does not supply evidence for the new accommodation. |
| remedies | What does the received letter do? A labelled fictional Polish request for employment evidence calls for a response; it is not a refusal to appeal. |
| capstone | What is happening in the case now? A post-filing contract amendment is traced through the chronology, evidence record, request and submitted reply. |

All eight topic files and their shared presentation were read in full. Polish terms are explained at the relevant point. Statutory references use explicit typed targets, validated when the topic collection is assembled. Examples preserve unresolved facts and do not promise a permit. The Polish letter fragment has a language attribute and is labelled fictional.

Topic files own the prose. Small shared components render examples and related reading. The table of contents uses the authored headings, without a second list to maintain. Existing `?module=` values and the `#study-material` anchor remain valid. Sidebars show questions without course numbering. Previous and next links name their destinations.

## Official sources and limits

Checked on 2026-09-05:

- [KPA official publication](https://eli.gov.pl/eli/DU/2025/1691/ogl) and [PDF](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf). The publication date, included changes and quoted transitional provisions support the sources example. Reviewed procedural mechanisms in art. 1, 37, 54, 64 § 2, 73, 75, 77, 80, 104, 123, 127 and 141. The seven-day minimum is limited to the cited formal-defect rule.
- [Ustawa o cudzoziemcach](https://eli.gov.pl/eli/DU/2025/1079/ogl) and [PDF](https://eli.gov.pl/api/acts/DU/2025/1079/text/O/D20251079.pdf). Reviewed the general temporary-stay rule in art. 98, work conditions in art. 114, the decision contents and exceptions in art. 118, and change of permit in art. 120. The examples introduce no new salary thresholds or automatic eligibility conclusions.
- [Powierzanie pracy cudzoziemcom](https://eli.gov.pl/eli/DU/2025/621/ogl) and the [Sejm consolidated reading text](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf). Reviewed the distinction between lawful stay, a stay basis permitting work and the required work authorization in art. 2 and 3. Future-wording notes in the PDF were not treated as current rules.
- [PPSA](https://eli.gov.pl/eli/DU/2026/143/ogl) and [PDF](https://eli.gov.pl/api/acts/DU/2026/143/text/O/D20260143.pdf). Art. 52 supports the distinction between administrative remedies and the separate court procedure. This short explanation does not supply a universal judicial deadline or omit the need to identify the applicable remedy.

These are focused checks of the mechanisms explained. They do not establish a complete September legal baseline or independently approve the wider corpus. The visible atlas date remains 18.07.2026. No source edition was promoted and no independent legal-review attestation was added.

## Verification

- `npm run verify` passed, including both typechecks, generated-data checks, lint, formatting, 91 application tests, 68 passing corpus tests with one skipped, 15 review-tool tests, editorial checks and production build.
- Tests verify that every topic renders its paragraphs and examples, every table-of-contents target exists once, evidence-document destinations exist and adjacent links retain their stable URLs.
- Browser checks covered the eight direct topic URLs and an invalid-topic fallback at 360 px. All showed meaningful content and an example without page-level horizontal overflow. The desktop page at 1440 px also fit its column.
- Desktop topic switching reset the reading position; the example table-of-contents link landed below the sticky header. The mobile shadcn selector changed the route and closed. Native next-topic, typed Art. 64 § 2 and related KPA reading links opened the expected content. Keyboard tabbing reached related reading with a visible focus outline.
- No browser console errors were recorded. Existing build warnings remain unchanged.
