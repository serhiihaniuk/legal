# Employment documents and insurance evidence

Reviewed on 2026-09-05 against `legal-explanatory-writing`.

## Questions and completed examples

The four guide files and their shared page renderer were read in full. Their explanations now distinguish a proposed condition, an agreed condition and evidence that the condition was performed.

| Document | Question answered | Visible specimen |
| --- | --- | --- |
| Employer annex | Which form is this, who supplies its data and who signs it in MOS? | Filled Polish job, contract, working-time and monthly gross-remuneration fields. The text explains why the application's annex 1 is annex 2 of the regulation. |
| Employment contract | Which agreed terms apply to the period being checked? | A contract clause and an amendment signed in August but effective in September. The reasoning distinguishes gross rates from a bank transfer after deductions. |
| Health insurance | What person, period and coverage do these records establish? | A policy period beside the matching paid contribution. The records do not establish coverage after their stated end date. |
| ZUS records | Is this registration, a monthly report or a selected extract of recorded data? | A current-registration extract whose recent creation date does not turn it into evidence of the previous year's continuity. |

The specimens are labelled fictional fragments. They contain no client identifiers, simulated official seals or claims that they reproduce the entire form. Monetary amounts illustrate how to read fields, not statutory thresholds. Polish terms are defined where the distinction matters. Worked examples end with the actual finding and what remains unproved.

The insurance and ZUS guides explain the work-route mechanism in art. 114 ust. 4a. A current ZUS file is not universally mandatory when the insurance condition can be met through the proposed work. The text does not extend that mechanism automatically to study or EU resident cases.

Existing typed references continue to supply the case backlinks. The work case already links these documents and qualifies its insurance evidence. This batch does not claim that the complete work case or the other eight cases have been reviewed. The unnecessary vertical rule beside the shared evidence-limit paragraph was removed.

## Official sources checked

Checked on 2026-09-05:

- [UdSC instructions for the employer's electronic annex](https://www.gov.pl/web/udsc/informacja-dla-pracodawcow-na-temat-koniecznosci-elektronicznego-podpisywania-zalacznikow-do-wnioskow-o-udzielenie-zezwolenia-na-pobyt-czasowy-i-prace-w-polsce): employer email, form completion, authorized signing and completion before submitting the principal application. The instructions state the MOS launch date of 27 April 2026.
- [Official residence-application regulation PDF](https://eli.gov.pl/api/acts/DU/2026/553/text/O/D20260553.pdf): § 2 ust. 2 and annex 2, the employer form on PDF pages 16–25. The job, contract, working-time and remuneration fields are on page 19. The local original-PDF reader opened the form at page 16 with its original layout.
- [Foreigners act](https://eli.gov.pl/eli/DU/2025/1079/ogl), its [publication PDF](https://eli.gov.pl/api/acts/DU/2025/1079/text/O/D20251079.pdf) and [Sejm reading text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 106 and 106d for annexes and signatures, art. 114 ust. 1 pkt 1 and ust. 4a for work-route insurance, art. 118 for decision conditions, art. 144 ust. 1 pkt 2 lit. a and art. 211 ust. 1 pkt 2 for the other cited insurance conditions. MOS operation is corroborated by UdSC and the 2026 regulation; future-wording typography alone was not treated as commencement evidence.
- [Kodeks pracy publication](https://eli.gov.pl/eli/DU/2025/277/ogl) and [Sejm reading text](https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20250000277/U/D20250277Lj.pdf): art. 29 for agreed terms and written amendments. The fictional amendment states its effective date explicitly.
- [Work-entrustment act reading text](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf): art. 5 for written contracts and understandable language, including the separate sworn-translation rule for a foreign-language contract.
- [ZUS electronic confirmations for insured persons](https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych): selecting the data, current registrations, contribution bases, saved files and the qualified ZUS seal.
- [ZUS registration guidance](https://www.zus.pl/en/firmy/zgloszenie-platnika/firmy/zgloszenie-ubezpieczonego/czlonka-rodziny-ubezpieczonego) and [ZUS RCA instructions](https://www.zus.pl/documents/10182/167567/ZUS_RCA.pdf/7e556412-65dd-41a9-9680-ed15adf5c5fc): the different roles of ZUA, ZZA and the named monthly report. No tax or payroll calculation was added.

These focused checks do not establish a new atlas-wide legal baseline. The visible atlas date remains 18.07.2026. No source edition was promoted and no independent legal-review attestation was added.

## Verification

- `npm run verify` passed, including typechecks, generated-data checks, lint, formatting, 91 application tests, corpus and review-tool tests, editorial checks and the production build.
- All four direct document URLs rendered their new specimens at 360 px without page overflow. Every present table-of-contents anchor resolved and each Polish specimen retained its language attribute.
- Desktop inspection covered the annex explanation and specimen, the section jump below the header, and the original form reader. The document's case-reference disclosure opened and its work-case link returned to `/cases/work`.
- No browser console errors were recorded. Existing build warnings remain unchanged.
