# Batch 124 preparation: KPA summons

Status: preparation only. The current module has not been rewritten or accepted by this record. No product, registry, source edition or shared component changes are authorized by this note.

Prepared on 23 September 2026. Proposed authored scope is `app/data/legal-library/learning/modules/kpa/summons.ts`, stable ID `summons`, order 9, plus its future source note. The legal-explanatory-writing skill and relevant DESIGN rules were read. Root owns integration and verification.

## Actual content read

Full module: `app/data/legal-library/learning/modules/kpa/summons.ts`.

Related explanatory content read:

- `app/data/legal-map/editorial/topics/wezwanie.ts`.
- `app/data/legal-map/editorial/topics/wezwanie-workflow.ts`.
- `app/data/document-library/editorial/guides/authority-summons.ts`.
- `app/data/document-library/editorial/guides/response-letter.ts`.
- Relevant role descriptions in `dispatch-proof.ts`, `case-file-index.ts` and `deadline-obstacle.ts`.

The two map articles already separate documentary demands and personal actions. Their completed residence example has documents submitted on 10 and 14 August and personal appearance on 17 August. The authority-summons guide uses a study-confirmation and academic-leave example. The response-letter guide uses an employment contract, amendment and a still-missing insurance confirmation. These are useful destinations, but copying any of these examples would add little.

The legacy module has three short lesson paragraphs, orientation layers, a method list, checklist, question and find-in-text prompts. It mentions articles 50–56 but does not explain much of their operation. Its paired signature-defect/date-discrepancy example has no actual response or completed procedural outcome. Signature cure is now covered by accepted batch121, and electronic delivery/calculation by batch123. The replacement should teach the summons itself.

## Reader question and concrete gaps

The reader needs to understand who is being called, in what role, for which action, and why a written reply sometimes answers the demand but sometimes cannot replace the specified personal action.

Required additions:

1. Explain the necessity test in 50 § 1 and the organ's duty to reduce burden in § 2. Article 54 prescribes the contents of the summons; it does not itself establish a permit condition or make every requested document mandatory.
2. Explain participant role. A party's written explanation, witness testimony and an expert opinion are distinct acts. A company letter is not automatically testimony by the individual who knows the facts. A representative cannot replace the witness's own knowledge merely because 50 mentions several ways of acting.
3. Give the territorial rule in 51, local assistance under 52 and the actual exception under 53. Distance is not a universal exemption, and a recipient's request does not itself cancel an appointment.
4. Explain illness or another insurmountable obstacle under 50 § 3. The organ may act at the person's location if the circumstances permit. This is neither automatic postponement nor universal permission to substitute an email.
5. Read the full structure of 54, including capacity, purpose, permitted mode, fixed appearance time versus deadline, consequences, signature and the qualified personal-data notice in § 1a. Avoid turning this into a bare checklist.
6. Explain 55 urgent telephone or other communication: urgency, required content and sender identification, and absence of doubt about timely receipt of the proper content. Do not equate every informal phone conversation with a valid summons or dismiss all telephone summonses.
7. State the consequence by its actual legal basis. Missing a formal cure, not proving a material condition and unjustified witness non-attendance have different rules. There is no universal seven-day response period or automatic permit refusal.
8. Explain 56 reimbursement and its party-specific qualification, as well as the request before the decision and loss of claim if late. Do not promise payment for every applicant journey.

## Current official KPA verification

Base metadata was freshly fetched during this preparation: <https://eli.gov.pl/api/acts/DU/1960/168>. It reports `inForce: IN_FORCE`, status `akt posiada tekst jednolity`, and `changeDate: 2025-12-12T14:35:06`. The first two listed amending acts are 2025/769, effective 13 July 2025, and 2023/803. No later amendment appears in the checked list.

Official consolidated PDF: <https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf>, 46 physical pages, printed 4 December 2025. Freshly read physical pages 13, 15, 16, 18 and 19 for the provisions below. Page 12 was also opened to check the surrounding delivery boundary; it is not the substantive basis of the proposed example.

Amendment and transition: <https://eli.gov.pl/api/acts/DU/2025/769/text/O/D20250769.pdf>. Article 1 was read during the same 23 September source session for the preceding KPA batches. It does not change articles 50–56. Article 31(1), physical page 19, preserves prior provisions for proceedings initiated and unfinished before commencement; article 48, physical page 21, supplies commencement. The same transitional text is reproduced on physical page 1 of the current consolidated PDF. The proposed ordinary proceeding begins in 2026 and does not cross this transition.

| Physical page | Provision                 | Verified rule and writing limit                                                                                                                                                                                                                         |
| ------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13            | 50 § 1–3                  | Necessity for resolving the case or an official action; effort to avoid burden; possible action at the person's location for the specified obstacle when circumstances allow. Do not create an unconditional remote-participation right.                |
| 13            | 51 § 1–2                  | Compulsory personal appearance is ordinarily limited to the gmina or city of residence or stay and a neighbouring gmina or city. It is not a rule about the organ's substantive competence.                                                             |
| 13            | 52                        | The conducting organ asks the competent territorial government or local-government organ for local summons and the specified action. It must identify the circumstances or action. A recipient does not select a new competent merits organ.            |
| 13            | 53                        | Articles 51–52 do not apply where the nature of the case or action requires performance before the organ conducting the proceeding. Travel distance alone cannot resolve this exception.                                                                |
| 13            | 54 § 1–2                  | Six required content categories, qualified GDPR notice, and signing employee's name and official position. Fixed day/hour/place and a period for written performance are alternatives appropriate to the action.                                        |
| 13            | 55 § 1–2                  | Urgent communication still requires the specified content and identified official. Legal effects require no doubt about proper content reaching the addressee in appropriate time.                                                                      |
| 13            | 56 § 1–2                  | Attendance costs follow the cited civil-cost rules. Party attendance has the stated ex officio or mistaken-summons-without-fault qualification. Claim is made to the organ conducting the case before its decision, on pain of loss.                    |
| 15            | 63–64                     | Proper submission and signature are separate from the summons's purpose. Formal cure under 64 § 2 has at least seven days and its own warning; it is not the default consequence for every missing evidentiary document.                                |
| 16            | 67 § 2 pkt 2, 68–69       | Examination is recorded in a protocol identifying people, roles, act and findings. It is read and presented for signature. This supports the proposed completed examination, not a new protocol-form guide.                                             |
| 18            | 77 § 1 and § 3, 79, 80–81 | Complete evidence assessment; the assisting organ's limited evidence power; advance party notification and participation in witness examination; opportunity to address evidence. Attendance does not itself establish the whole substantive condition. |
| 18–19         | 82–83                     | Witness exclusions, refusal rights and warnings. Role and knowledge cannot be replaced with a general company statement. Keep the explanation bounded; no need to reproduce every witness rule on the summons page.                                     |
| 19            | 86                        | Party examination is subsidiary and excludes witness coercive measures. Do not impose the witness's coercive regime on every party explanation.                                                                                                         |
| 19            | 88                        | The conditional fine rule, appealable order and separate request for release from the fine. This is not an automatic sanction for every unfulfilled summons.                                                                                            |

If the author states amounts, 88 § 1 currently says up to PLN 50 and up to PLN 200 on repeated non-compliance. Explain the conditions beside them. If the author explains § 2, its seven days run from receipt of notification of the punishment; do not conflate that application with the appeal against the order. There is no need to add a penalty to the proposed example.

For 56, the official linked civil-cost text was opened at <https://eli.gov.pl/api/acts/DU/2025/1228/text/T/D20251228L.pdf>. This preparation does not verify current numerical reimbursement rates, detailed cost calculations or all later amendments of that separate statute. The module can accurately explain KPA 56's entitlement categories and request deadline without a numerical specimen. A numerical reimbursement example would require a separate relevant-source check.

## Residence boundary if retained

The old module is general KPA. A concise residence qualification is useful, but another MOS walkthrough would duplicate accepted content.

Freshly read current compiled foreigners-act PDF: <https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf>, printed 7 April 2026, physical pages 126–129:

- 106e: appearance for travel document or the named substitute, fingerprints and signature specimen; at least seven days from service; combined requests permitted.
- 106f: necessary supporting documents, at least 14 days from service, time needed to obtain the document considered; originals required in the specified 106d(2) case.
- 106h and 106i: specific exceptions, substituted actions and qualified discontinuance, not an automatic merits refusal for any missed appearance.
- 106j: exact excluded applications. These ordinary new-procedure rules are not universal across every temporary-residence application.

The source chain freshly checked in batch123 on the same date remains relevant: 1794 article 12 preserves specified pending cases, while the one-page <https://eli.gov.pl/api/acts/MP/2026/370/text.pdf> activated the relevant MOS provisions on 27 April 2026. If the author retains any residence claims, refresh base-act metadata and the relevant amendment chain during authorship and name the actual provisions. Do not quietly import the general local-assistance example into fingerprints or another special personal action.

## Proposed article structure

Suggested subject sections, adjusted as prose requires:

1. What a wezwanie requires and why the participant's role matters.
2. How content, permitted mode and consequence belong together.
3. Personal appearance, territorial limits and help from another organ.
4. Urgent contact and a genuine obstacle to participation.
5. What the actual response accomplishes, what non-compliance can cause, and attendance costs.

Definitions should explain `wezwanie`, `wyjaśnienia`, `zeznania`, `osobiste stawiennictwo`, `pomoc prawna` in the limited 52 sense, and `rygor`. Avoid presenting a general checklist as a completed example. Stable ID and order remain; no new shared contract is needed. Core panel already contains 50–56. If the final prose substantively teaches 88 sanctions, consider adding 88 to the root-owned panel; use exact typed inline references for the narrower supporting 63/64, 67–69 and 79 provisions.

## Proposed completed example: local examination of a witness

This is a proposal for authorship, not a new accepted case. It intentionally differs from the signature cure, electronic calendar and existing three-demand residence examples.

Facts to select explicitly:

- Ordinary KPA proceeding begun in 2026, with no special personal-action rule. The conducting organ is in Wrocław. An individual witness now lives and stays in Gdańsk, not Wrocław or a neighbouring gmina. The witness is not the party, the party's representative or an expert.
- The narrow evidentiary issue is whether the witness personally saw a specified work handover on 1 June 2026. Its relevance to the hypothetical case is stipulated; no claim about a permit, employment legality or the whole employment period is made.
- A summons served on 25 August calls that individual as a witness for 10 September at the conducting organ. Its selected fragment states role, purpose and personal mode; full statutory particulars are assumed and not printed as real identities.
- On 27 August the witness submits a signed response identifying current residence and stay, explaining the territorial issue and requesting local examination under 52. Proper filing and receipt are stipulated with retained proof. This response does not give testimony and does not itself cancel 10 September.
- On 31 August the conducting organ confirms that the nature of this act does not require examination before it, cancels the original appearance and requests the competent local organ's assistance, specifying the factual question. This selected positive assessment of 53 must be explicit.
- The local summons and the party's examination notice are properly served on 2 September for 14 September. All parties receive the required opportunity to participate; do not use the witness's summons as a substitute for the party notice required by 79.
- On 14 September the individual attends locally and is examined after the proper witness warnings. The protocol is read and signed. It records only the individual's direct observation of the selected handover, distinguishing it from information heard from others. The assisting organ sends that record to the conducting organ.
- Completed result: the required witness act occurred through local assistance. The 27 August letter was a procedural response, not a replacement witness examination. The evidence does not establish the whole substantive claim and no merits decision is invented.

Possible Polish specimen is a four-row completed working comparison with selected fragments, explicitly not a full official form:

| Document/event                     | Illustrative fragment                                                                                                                                                                        | Meaning                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Original summons                   | `Wezwanie do osobistego stawiennictwa w charakterze świadka w dniu 10.09.2026 w celu złożenia zeznań dotyczących przekazania pracy w dniu 01.06.2026.`                                       | Identifies the individual witness and requested act; the fragment omits the full office particulars, hour, address, signature and warning. |
| Actual response of 27 August       | `Mieszkam i przebywam w Gdańsku. Proszę o przeprowadzenie przesłuchania przy pomocy właściwego organu miejscowego zgodnie z art. 52 KPA. Proszę o potwierdzenie sposobu wykonania wezwania.` | Request about the mode. It is not testimony or a unilateral cancellation.                                                                  |
| Organ's response and local summons | `31.08.2026 odwołano pierwotny termin. Po zwróceniu się o pomoc wyznaczono przesłuchanie w Gdańsku na 14.09.2026.`                                                                           | A working summary of separate official actions, not an invented statutory form or grant.                                                   |
| Completed act                      | `14.09.2026 świadek stawił się i złożył zeznania. Protokół odczytano i podpisano; przekazano go organowi prowadzącemu.`                                                                      | Records completion without deciding the entire case.                                                                                       |

Before final authorship, make the handover fact natural and precise enough to understand without adding a legal conclusion. The protocol need not reproduce testimony if the example's point is the change of venue. No personal names, case identifiers, street addresses or signatures are required. The dates leave more than seven days between party notice and examination; no new deadline-arithmetic lesson is needed.

## Actual document destinations and gaps

- `authority-summons` is the exact existing guide for the original and local wezwanie. Distinguish these as two actual letters, not one amended file inferred from the working table.
- `delivery-proof` explains proof of service of the selected letters. The example can stipulate proper service without selecting a new electronic mechanism.
- `response-letter` currently describes a party/applicant response. It is appropriate in general prose about a party answering documentary demands, but do not label the witness's local-examination request as that exact guide without checking its actor scope. The witness's actual signed procedural letter can be named plainly.
- `dispatch-proof` explains evidence of the 27 August submission. It does not prove the factual allegation in the letter.
- `case-file-index` and `requirements-table` are working records, not official protocols. Use only where that distinction is explicit; neither should be attached to a label meaning `protokół przesłuchania świadka`.
- `deadline-obstacle` is currently an evidence-set guide focused on restoration after a missed period. Do not label it as a specific medical certificate or imply that it supplies the special pre-appearance document required by a residence rule.
- `procedural-order` and `procedural-complaint` can support the bounded 88 explanation if retained. They are not events in this example.
- No dedicated current guide was found for a witness-examination protocol, a 52 inter-organ request, a witness's venue request or a 56 reimbursement request. Name these actual records plainly rather than routing them to a broad or wrong-role document. New dedicated guides would be a separate scope decision, not a prerequisite for this module rewrite.

## Boundaries and next authoring work

This preparation does not accept the older map or guides as freshly reviewed in full legal scope. Their examples were read to avoid duplication and misleading destinations. It does not determine a particular territorial organ's substantive competence, reimbursement amount or real witness rights in a named client case.

The next author should refresh sources on the actual authorship date, agree the completed example, write the full module and source note, then obtain independent full prose/specimen review. Root retains checks, publication and browser verification. No tests, builds, browser operation, product edits or commit were performed for this preparation.
