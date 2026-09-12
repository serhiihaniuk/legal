# KPA anatomy: scoped source and author notes

Prepared on 12.09.2026 for batch 99. This records the source work and authored anatomy pilot. It is not a writing-ledger acceptance, a review of the other learning modules or a revalidation of the embedded provision commentary. Root owns shared rendering, tests, browser verification and acceptance recording.

## Reader question and changed scope

File: `app/data/legal-library/learning/modules/kpa/anatomy.ts`.

The lesson explains how the reader locates a precise KPA unit, reads the operative condition and action, follows connected provisions and reaches a bounded result. The legacy July example omitted the year and a completed deadline calculation. Its Saturday assertion did not fit July 2026. The replacement explicitly uses August 2026 and a confirmed completed response.

Five authored sections cover the locator, operative words, linked time rules, scoped exceptions/references, and the applicable edition. The concrete nested locator uses KPA article 124 § 1 pkt 6 lit. b; it does not purport to explain the remedies for all postanowienia. The required compatibility layers and method remain coherent explanatory text. Homework/checklist arrays are empty. The pilot supplies `lesson.sections`, empty `lesson.paragraphs`, and the shared completed-example table contract added by root.

## Primary sources actually read

1. [Official KPA text, Dz.U. 2025 poz. 1691](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf). The PDF is 46 physical pages, with compilation header 04.12.2025. The T URL works; no guessed U URL is used.
   - Physical page 10, article 40 § 1–3; page 11, § 4–5, read to preserve the limits. The lesson uses § 2's first, second and third sentences distinctly: service on the appointed representative; only one if several; the party may identify that representative. Section 3 is a separate multiple-party application situation, with the exception identifying one party to receive letters. It is not a general appointment of that person for all procedural acts.
   - Physical page 14, article 57 in full. Section 1 concerns a period specified in days and excludes the triggering day. Sections 2, 3 and 3a separately cover weeks, months and years. Section 4 moves a Saturday/statutory non-working endpoint to the next day that is neither. It does not remove intermediate weekends from the day count. Section 5 lists the specific time-preserving acts; pkt 1 requires the named e-delivery sending and receipt conditions, not an arbitrary email timestamp. No electronic or postal channel is simulated in the completed example.
   - Physical page 28, article 124 in full, especially § 1 pkt 6 lit. b. This is used only to explain the actual nested address and the need to read its introductory words. No conclusion that every postanowienie admits sprzeciw is made.
   - Physical page 1, consolidation notice: 2025/769 is included and the notice reproduces its relevant transition/commencement provisions. The source text therefore has to be distinguished from a change merely becoming discoverable online.
2. [KPA base-act ELI metadata](https://eli.gov.pl/api/acts/DU/1960/168), obtained live through PowerShell `Invoke-RestMethod` after the web tool returned an internal error. The status is `akt posiada tekst jednolity`, latest consolidated text is DU/2025/1691, latest listed amending act is DU/2025/769 with effective date 13.07.2025. No later amending act was listed in that response. This is a bounded metadata observation, not an inference that every provision of KPA was substantively rechecked.
3. [Amendment 2025/769, official Sejm API PDF](https://api.sejm.gov.pl/eli/acts/DU/2025/769/text.pdf), and [ELI status/commencement page](https://eli.gov.pl/eli/DU/2025/769/ogl). The original ELI O PDF request returned an internal error; the official Sejm API copy was opened successfully. Article 1 was read in full across physical pages 1–5. It changes specified KPA provisions, including article 124 through pkt 6, but not articles 40 or 57. The principal commencement is 13.07.2025; the stated 2026 exceptions concern other listed provisions. Transition article 31 ust. 1 and commencement article 48 are reproduced on page 1 of the consolidated notice. The lesson's chronology is a current August 2026 illustration, not a claim about every pending older case.

4. [Statutory non-working days, Dz.U. 2025 poz. 296](https://eli.gov.pl/api/acts/DU/2025/296/text/O/D20250296.pdf), physical page 2, article 1. Read the holiday list and Sundays for the selected August calendar: 24 August is not a listed statutory holiday. This auxiliary check supports the chosen endpoint; no employment scheduling rule is added to the lesson.

No case law is cited. The labels of norm elements and the document-reading sequence are explanatory analysis; the specific recipient and day-count consequences come from the cited KPA text. Short Polish operative phrases are not presented as the entire legal norm.

## Completed fictional chronology

Selected facts are explicitly assumed or established for the illustration:

- Wezwanie dated 03.08.2026 specifies 14 days from service for written explanations. The lesson does not derive a universal 14-day period from article 57.
- Proper service on the only duly appointed representative took place on 08.08.2026. Its validity is assumed and its date is evidenced in the fictional case. The example does not infer service from reading a document, a forwarded email or a particular MOS workflow.
- The client saw the representative's copy on 10.08. This does not restart the period after the selected proper representative service.
- Day 1 is 09.08; nominal day 14 is Saturday 22.08. The resulting endpoint is Monday 24.08. The selected dates and weekdays were checked with the local Gregorian calendar; 8 and 22 August are Saturdays.
- The response was actually lodged with the competent authority on 21.08, with retained filing confirmation. No assumed sending date or future action supplies the conclusion.
- The Polish table is an illustrative preparer's completed record, not an authority document, a response template or a replacement for receipt evidence.

Outcome: the response was timely. The sufficiency of its contents and the substantive outcome remain outside this calculation. The example is distinct from the map's formal signature-cure scenario.

## Verification boundary

Only the anatomy product file and this source note are owned by this author. Prettier was run on the authored file. No tests, build, generated files, ledger changes or commits were performed. The full draft was sent to Copernicus for independent reading. Root handles final integration and acceptance; this note does not mark the batch accepted.
