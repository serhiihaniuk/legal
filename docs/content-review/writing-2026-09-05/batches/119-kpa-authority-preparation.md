# Batch 119: KPA authority module preparation

Status: prepared on 23 September 2026. Implementation, independent final review and application verification remain pending. This record does not accept a rewritten module or change the source edition or atlas baseline.

## Target and reader question

Target only `app/data/legal-library/learning/modules/kpa/authority.ts`, stable module ID `authority`, order 4. The inspected legacy file has SHA256 `668DA4081B5B0C43FA2BE371D74CF9FB1C6CDAE7E632AB9E35B980A7E3F6E11E`.

The reader needs to understand which authority may handle a matter, what happens when an application reaches another authority, and why excluding one employee usually does not move the matter to another authority.

The existing module was read in full. Relevant accepted explanations were also inspected in map topics `organ-party.ts`, `initiation.ts` and the competence ground in `invalidity.ts`. The existing `procedural-order`, `dispatch-proof`, `delivery-proof` and `case-file-index` document roles inform the mapping below. These are reuse references, not new acceptance of their entire content.

## Concrete gaps in the present explanation

- Definitions of rzeczowa, miejscowa and instancyjna are short labels. Explain the separate questions: type of matter, territorial connection, and the authority responsible at the relevant procedural stage. An office building, department and employee are not interchangeable with the authority.
- Article 19's `z urzędu` means the authority checks competence on its own initiative. Replace the literal Ukrainian `з уряду`.
- The moving-between-voivodeships example ends with instructions to check a special provision. It supplies neither the selected rule nor a completed result. Do not carry that incomplete scenario into the rewritten example or invent a universal rule that a move automatically transfers every pending residence case.
- Explain article 65 forwarding separately from article 66's several matters and return of an application. Their documents and consequences differ.
- The current reference to preserving the continuity of deadlines is too broad. Article 65 § 2 protects timely filing under its stated condition. It does not establish that every processing clock runs from receipt by the wrong authority or cure a defective submission channel or signature.
- UPO, an office receipt stamp and postal dispatch proof establish different events. Name the actual selected record and date instead of treating them as interchangeable proof of first filing.
- Distinguish employee exclusion under article 24 from authority exclusion under article 25. A brother of the applicant assigned as an ordinary employee does not automatically disqualify the whole authority.
- Keep competence disputes and extraordinary remedies as bounded explanations. Neither dissatisfaction with an evidence request nor a suspected competence defect lets the reader treat a decision as already invalid.

Use authored `lesson.sections` and one completed example. Existing module contracts support this; no shared rendering redesign is required. Remove duplicated orientation and exercises rather than flattening them into more prose.

## Fresh official source check

The following checks were made on 23 September 2026. PDF page numbers below are physical PDF pages.

1. [KPA base-act metadata](https://eli.gov.pl/api/acts/DU/1960/168) reported `IN_FORCE`, status `akt posiada tekst jednolity`, and changeDate `2025-12-12T14:35:06`. Its `Akty zmieniające` list begins with DU/2025/769, effective 13 July 2025; no later amendment was listed in the inspected response.
2. [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), 46 pages, printed compilation date 4 December 2025, was read for the passages below. Use the working `T` endpoint, not an assumed `U` endpoint.
3. [DU/2025/769 metadata](https://eli.gov.pl/api/acts/DU/2025/769) reports the act in force and entry into force on 13 July 2025. [Original amendment](https://eli.gov.pl/api/acts/DU/2025/769/text/O/D20250769.pdf), article 1 on pages 1–5, was reread in full. It does not change KPA articles 17–27, 63–66, 145 or 156. It does amend article 124, relevant if a full postanowienie specimen is added later. Article 31(1), page 19, preserves prior wording for KPA cases initiated and unfinished before entry into force. Article 48, page 21, sets the general 30-day commencement after publication on 12 June 2025; its exceptions do not concern article 1. The proposed example below starts in August 2026 and avoids a pre-commencement case.

### Exact provisions and limits

| Source locator | Explanation to retain or add | Boundary |
| --- | --- | --- |
| KPA 17–18, page 5 | Higher authority and organ naczelny are legal categories; article 17 gives general allocations. | Do not call every supervisory institution an appeal authority or imply article 18 supplies a universal appeal route. A special act can govern the concrete route. |
| KPA 19–21, page 5 | Authority checks rzeczowa and miejscowa competence itself; rzeczowa follows provisions defining its tasks. Article 21 contains distinct territorial rules and ordered fallback criteria. | The general residence/address criterion is not the sole rule for all matters, and article 21's zakład pracy branch is not a universal employer-address rule for foreigners. |
| KPA 22–23, page 6 | The resolver of a competence dispute depends on the authorities involved. Pending resolution, article 23 allows only urgent acts justified by its stated interests, with notification to the dispute resolver. | Do not say every dispute goes to a minister or that the entire proceeding simply continues normally. No need reproduce the full resolver catalogue. |
| KPA 24, page 6 | Statutory employee exclusions; spouse and relatives/affines to the second degree in § 1 pkt 2. Under § 3 the direct superior excludes where other circumstances capable of raising impartiality doubts are made plausible. | Disagreement alone does not establish such circumstances. § 2 preserves specified grounds after the relevant relationship ends. § 4 permits only its defined urgent acts by the excluded employee. |
| KPA 25–26, page 7 | Authority exclusion concerns the specified property interests of its head or the designated higher-authority official and related persons. Direct superior appoints another employee under 26 § 1; authority exclusion follows the separate 26 § 2 route. | Include 26 § 3's inability of the authority to act after employee exclusions if explaining why replacement is not always sufficient. Do not equate an ordinary employee's family connection with article 25. |
| KPA 27, page 7 | Collegial member exclusion has its own actors, quorum consequences and SKO rules. | A short boundary is enough; do not apply the ordinary employee replacement model mechanically to a collegial authority. |
| KPA 63 § 4 and 65, page 15 | Confirmation of filing on request; prompt forwarding to the competent authority with simultaneous reasoned notification; timely filing protection under 65 § 2. | Article 65 notification is not automatically a postanowienie, and no new merits decision or full filing package is implied. |
| KPA 66 §§ 1–2, page 15; §§ 3–4, page 16 | For several matters the authority handles its part and instructs separate applications. A separate application complying with that notification within 14 days of its service retains the first application's date. Return under § 3 takes the form of an appealable postanowienie. | Keep the § 4 restriction where the ordinary court already declined jurisdiction. Do not generalize the 14-day rule to all forwarding. |
| KPA 145 § 1 pkt 3, page 31; 156–158, page 33 | A decision by an excluded employee/authority and a competence violation are distinct statutory grounds in different extraordinary procedures. | No automatic annulment. If naming invalidity, keep 156 § 2 limits beside it; detailed remedy procedure remains in its own topic. |
| KPA 268a, page 46 | An authorized employee may act in the authority's name within written authorization. | The employee's signature does not turn that employee into a separate authority. Do not infer authorization merely from a job title. |

### Special residence example boundary

The accepted map uses foreigners-law article 104 and article 22 to illustrate a special territorial rule and higher authority. Freshly inspected [compiled DU/2025/1079](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf) returned a 495-page file dated 7 April 2026. Article 104 is on page 110 and visibly contains old and activation-dependent wording. [MP/2026/370](https://eli.gov.pl/api/acts/MP/2026/370/text.pdf), its sole page, expressly activates article 104(1–1b) on 27 April 2026. Thus the angle-bracket wording must not be treated as still future merely because of the PDF margin note.

The base [foreigners-act metadata](https://eli.gov.pl/api/acts/DU/2013/1650) reports `IN_FORCE` and changeDate `2026-08-12T00:00:00`; its amendment list includes 203 and 1794. This preparation did not complete a provision-by-provision audit of all later foreigners amendments or the pending-case transition. Before retaining a newly dated residence-specific claim, the author must finish that bounded check, including article 22(2), and examine the relevant transition in 1794. Do not use the metadata date alone as proof that every amendment appears in the fetched PDF.

For a minimal KPA rewrite, explain the general special-rule principle without reproducing a residence transfer scenario. No work-permit jurisdiction, MOS packet, filing actor or portal behavior is required in the proposed completed example.

## Recommended completed example and Polish specimen

Use a separate ordinary KPA matter begun in August 2026. State that the authority's subject-matter and territorial competence is established and undisputed. The issue examined is only the assigned employee's exclusion. The employee is not the authority's head, a higher-authority manager or a collegial member. No urgent action is necessary, and another eligible employee is available.

Proposed fictional chronology, not an existing client case:

| Date | Completed event | Bounded significance |
| --- | --- | --- |
| 20 August 2026 | The competent authority assigns the matter to employee A. | Assignment identifies the person handling the matter; it does not create a new authority. |
| 21 August | A discloses that the applicant is A's brother. The direct superior receives that information. | The stipulated sibling relationship falls within article 24 § 1 pkt 2. It is not merely disagreement with A's proposed assessment. |
| 24 August | The direct superior assigns employee B under article 26 § 1. A undertakes no further ordinary case activity. | The same competent authority retains the matter; no transfer to another voivodeship or second application follows from these facts. |
| 25 August | B carries out the next ordinary procedural act. The private case index is updated with the reassignment record. | The completed result is proper replacement of the employee. There is no invented merits decision, permit grant or finding that every procedure requirement was met. |

Suggested short Polish specimen is a preparer's completed working comparison, expressly not a prescribed authority form or a full exclusion order:

> Ustalenie: pracownik A jest bratem wnioskodawcy. Podstawa wyłączenia: art. 24 § 1 pkt 2 KPA. Bezpośredni przełożony wyznaczył 24 sierpnia 2026 r. pracownika B do prowadzenia sprawy na podstawie art. 26 § 1 KPA. Organ pozostał ten sam. Pracownik B podjął kolejną czynność 25 sierpnia. Nie rozstrzygnięto jeszcze sprawy co do istoty.

Explain that the working note summarizes the selected underlying records; it does not itself prove kinship or replace the superior's action. Do not invent a universally required civil-status certificate, fee, application, signature format or separate appeal against exclusion. No names, identifiers or case numbers are needed. Dates are fictional and do not illustrate a statutory four-day replacement deadline. The two-day weekend is not a legal clock calculation.

## Exact document destinations

| Actual item or role | Existing destination | Use in this module |
| --- | --- | --- |
| Private chronology/index of the selected records | `case-file-index` | Suitable for the completed specimen's working-record role. It is not the authority's metryka or proof that a document was filed. |
| Receipt of a permitted paper filing, or actual postal dispatch if separately chosen | `dispatch-proof` | Conditional illustration of the event established by that specific record. Do not add UPO to the exclusion example. |
| Proof of service of an article 66 notification | `delivery-proof` | Conditional explanation of the event starting 66 § 2's 14 days. No such notification occurs in the recommended exclusion example. |
| Return under article 66 § 3 | `procedural-order` | Actual postanowienie role, only in the return explanation. Not a destination for the article 65 forwarding notification. |
| A previously issued decision examined for a competence/exclusion defect | `administrative-decision` | Optional bounded discussion, absent from the selected example. Do not add a fictional decision simply to populate metadata. |

No dedicated guide for the article 65 forwarding notification, employee exclusion or the superior's reassignment record was identified in the inspected guide set. Name these actual records plainly in the explanation. Do not misroute them to `response-letter`, which explains a response to wezwanie, or present an umbrella guide as their exact form. New catalogue guides are not a prerequisite for this module rewrite.

## Implementation and review boundary

Preserve stable module identity, order and neighbouring modules. Suggested subject sections are the authority/office/employee distinction, competence rules, forwarding versus return, impartiality and replacement, then disputes and remedy boundaries. The example can sit with the exclusion explanation rather than become another introductory block.

If articles 24–27 and 268a become substantive authored references, align the existing module provision panel narrowly during integration. No source corpus, edition date, adjacent provision commentary or global baseline update is authorized by this preparation. Use typed references for the exact act and locator.

No figure is necessary. A small completed comparison table conveys the selected record and result; avoid a universal organ hierarchy diagram because special statutes change the route. No real signatures, official logos or simulated portal screenshots are needed.

The implementation must receive a full independent read, exact final hash, appropriate project checks and desktop/mobile verification. Those are future tasks. This preparation ran no tests, build or browser and changed no product file.
