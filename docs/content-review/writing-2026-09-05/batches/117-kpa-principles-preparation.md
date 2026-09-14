# KPA principles learning module: preparation

Prepared on 14.09.2026. This is an implementation plan and scoped source audit, not acceptance of a rewritten module. No product files, legal-state baseline, tests or browser state were changed for this preparation.

## Target and reader question

Rewrite only `app/data/legal-library/learning/modules/kpa/principles.ts`, preserving module ID `principles`, order 3 and knowledge-unit ID `learning-module:kpa:principles`. The current file was read in full; SHA256 is `1D2210B0A53FA13B157310752E60A5E34308396C06B8D484EE1EA9D123F6C69A`.

The module should answer: how do general KPA principles change a concrete action in an administrative case, and how do they connect to the provision governing that action? Explain the ordinary procedure before its limits. A general principle neither creates an entitlement to a permit nor removes a substantive condition.

The legal explanatory writing skill, relevant DESIGN reading/navigation rules, the existing KPA module contract and adapter were read. `lesson.sections` already supports subject-based explanations without changing the shared contract. The `system` module is an existing implementation precedent. The current principles provision mapping in `learning/kpa.ts` already contains 6, 7, 7a, 7b, 8, 9, 10, 11, 12, 13, 14, 14a, 15 and 16; no mapping expansion is needed merely to retain that scope. Concrete supporting citations can appear inline.

## Gaps in the current explanation

- The page repeats lists of principles in layers, orientation paragraphs, method and checklist. It does not explain several principles advertised by its article range: 7a, 7b, 13 and 14a. Writing, automation, two-instance review and decision statuses are named without enough explanation to distinguish their effects.
- The example supplies new adverse institutional information and an immediate refusal, then tells the reader what to check. It identifies neither the disputed information nor the response that was unavailable. It has no completed evidentiary or procedural outcome.
- The example's conclusion makes influence on the decision sound like a universal condition for establishing a breach. Separate the concrete failure, the available remedy and the remedy's own conditions. KPA art. 128 does not require a detailed legal argument for every ordinary appeal. Art. 145 § 1 pkt 4 has its own condition of non-participation without the party's fault. Neither provision supports a universal formula that every breach must change the merits.
- The practical layer's phrase about not departing from settled practice is hard to parse. Explain art. 8 § 2 through the same factual and legal state. Different facts or changed law concern comparability, not a statutory list of justified departures.
- Informing the party, explaining the grounds of an action, giving access to material and accepting the party's position are distinct. Art. 9 does not promise a favourable result; art. 10 does not require agreement with every assertion.
- The ordinary participation guarantee is broader than an adverse-decision notice. Its limits must stay beside it. There is no universal seven-day response period in art. 10.
- Replace imperatives, learner questions and mixed routine vocabulary such as `organ`, `wynik` and `legalizacji` with connected Ukrainian explanations. Keep Polish legal terms when they name the concept. Replace manually assembled authored-text objects with the existing typed author helpers.

## Existing accepted material and duplication boundary

Read the accepted map overview `kpa-principles.ts`, the participation article's operative sections and completed example, and the batch93/94 reports. Their source and review scopes are dated 12.09.2026, not renewed globally by this preparation.

The map overview already has a completed example about an unnecessary certificate for a decision's date held by the same authority. Participation has the omitted employment aneks example. Trust explains art. 111 completion of an omitted remedy instruction; two-instance review compares three decision statuses. Legality uses Karta Polaka settlement intention. The module should explain connections among principles rather than reproduce those complete articles or append all their remedy procedures.

Suggested structure, with headings refined by the author:

1. Legal basis, relevant facts and the difference between legal and factual doubt. Connect 6/7/7b to 77/80. Give 7a and 81a their actual scope and exceptions.
2. Predictable conduct and understandable information. Explain 8/9/11, including same-state comparability and why information is not an eligibility promise.
3. Participation changes the material considered. Connect 10 to 73, 77, 78, 79a, 80 and 81. Keep the ordinary right distinct from a particular evidence action or a missing condition.
4. Thoroughness, speed and lawful agreement. Explain 12/13 and the voluntary, legally bounded mediation mechanism in 96a. Do not invent a normal duration for every case or a power to negotiate statutory eligibility.
5. Recording the action and understanding its status. Explain 14/14a and 15/16 briefly. A written record, a service-quality assessment, an appeal and judicial review have different functions.
6. The completed institutional-record example below, followed by a short explanation that correction before a decision and review after a decision are different procedural positions.

This is a proposed arrangement, not a mandatory six-section template. Keep required legacy contract fields coherent and concise; the authored sections and completed example should carry the actual explanation.

## Proposed completed example

Use a separate fictional ordinary KPA proceeding started in June 2026. A relevant fact is the issue date of an earlier administrative decision from another authority. The example isolates that fact and does not determine a residence entitlement, continuity of stay, service or finality. The party is present in Poland, acts personally and has access to the selected material; no applicable participation or access exclusion is assumed in this illustration.

Proposed chronology, subject to author confirmation before writing:

- The earlier decision itself is dated 14.01.2025. It is not amended during the example.
- A letter from the authority that holds the earlier record, dated 03.08.2026 and received by the deciding authority on 04.08, incorrectly reports 14.01.2026. The current authority has not yet decided the case.
- On 05.08 the party receives information about the new material and the opportunity to comment by 14.08. This date is selected for the fictional letter, not attributed to a general statutory minimum. The party inspects the letter on 06.08.
- On 07.08 the party submits a signed explanation identifying the conflicting year and a copy of the earlier decision. If the author describes certification, select the actual art. 76a § 2b procedure: the party shows the original and requests certification by an authorised employee. Do not imply that certification establishes all facts recited in the decision.
- The deciding authority asks the source authority to clarify the discrepancy. Its clarification dated 10.08 and received on 11.08 confirms a transcription error in the 03.08 letter and the correct issue date 14.01.2025. This is a corrected information letter, not correction of the earlier decision under art. 113.
- On 12.08 the deciding authority evaluates the earlier decision, the party's explanation and the source authority's clarification together. It communicates the limited finding to the party. No decision ending the current case has been issued in this example.

A useful Polish specimen would be a completed working comparison, explicitly not an official form or a new attachment. Suggested rows:

| Materiał lub czynność | Ustalona treść | Znaczenie w sprawie |
| --- | --- | --- |
| Pismo instytucji z 3.08, wpływ 4.08.2026 | Wskazano datę wydania 14.01.2026. | Nowy materiał wymagał udostępnienia stronie i porównania z decyzją. |
| Wgląd do akt 6.08.2026 | Strona zapoznała się z pismem i wskazała rozbieżność roku. | Możliwość udziału została wykorzystana przed decyzją. |
| Wyjaśnienie i kopia decyzji, złożone 7.08.2026 | Decyzja wskazuje datę wydania 14.01.2025. | Konkretny dokument pozwalał sprawdzić treść późniejszej informacji. |
| Wyjaśnienie instytucji z 10.08, wpływ 11.08.2026 | Instytucja potwierdziła błąd w przepisaniu roku w swoim piśmie. | Nie zmieniono wcześniejszej decyzji. |
| Ocena i informacja organu z 12.08.2026 | Przyjęto datę wydania 14.01.2025 po łącznej ocenie materiału. | Ustalono jeden fakt; nie rozstrzygnięto całej sprawy. |

The analysis should explain the completed causal sequence. Participation disclosed the discrepancy; a concrete document enabled verification; cooperation obtained clarification; assessment of the whole record corrected the factual basis. The party's objection alone did not establish the year, and the source institution's first letter did not become unchallengeable merely because it came from an authority. Art. 76 § 3 permits contrary evidence even where an item meets art. 76's requirements. Do not automatically classify every institutional letter as a public document under that provision.

If this example is adopted, preserve the distinction between drafting, receipt, viewing, submission and the final limited assessment. No computed appeal deadline, foreigner work right or permit outcome is needed.

## Actual document destinations

The relevant existing guide descriptions were inspected:

- `administrative-decision` identifies the earlier decision and distinguishes its issue date from service and status. Link only that actual document, not the source institution's information letters.
- `case-file-index` fits the proposed Polish working comparison. It is a working record, not proof that a document was filed or an obligatory attachment.
- `response-letter` currently has the title and main scope "Відповідь на wezwanie". The proposed art. 10 comment is not automatically a response to a wezwanie. Keep the signed explanation plainly named unless the author establishes a matching scope; do not silently turn the notice into a summons to obtain a convenient link.
- `authority-summons` is likewise not a destination for every art. 10 notice. No dedicated case-file-access-request guide was found in the current guide directory. Do not substitute a working index for an access request.
- The two institutional letters and the comment opportunity notice can remain clearly named ordinary records. This module does not require creating a guide for every letter. Existing typed legal references explain their procedural function.

These destination checks do not renew each guide's full legal review.

## Official sources freshly checked on 14.09.2026

[ELI base-act metadata](https://eli.gov.pl/api/acts/DU/1960/168) returned `status: akt posiada tekst jednolity`, `inForce: IN_FORCE` and `changeDate: 2025-12-12T14:35:06`. Its first listed amending act remains DU/2025/769, with date 13.07.2025; no later amendment is listed. The [official act page](https://eli.gov.pl/eli/DU/1960/168/ogl) and [KPA consolidated PDF](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf) were opened live. The PDF has 46 physical pages and header date 04.12.2025. Its first page expressly includes 769 and reproduces the relevant transition and commencement provisions.

The [769 metadata](https://eli.gov.pl/api/acts/DU/2025/769) reports the amendment in force, promulgated 12.06.2025, with entry into force 13.07.2025. Fresh reading of the [original amendment](https://eli.gov.pl/api/acts/DU/2025/769/text/O/D20250769.pdf) covered its complete art. 1 on physical pages 1–5, art. 31 ust. 1 on page 19 and art. 48 on page 21. Art. 1 does not amend KPA arts. 6–16. It does add the mediation provisions in 96a § 1a–1b and change 96b. Art. 31 ust. 1 preserves the prior version for KPA cases already initiated and unfinished at commencement. A June 2026 example avoids that transition. The transition must still qualify any explanation of the newly added mediation duties if old cases are discussed.

Exact scoped passages in the current KPA PDF:

| Physical pages | Provisions | Required limits |
| --- | --- | --- |
| 3–5 | 6–16, including 7a/7b/14a | Principles govern procedure; 7 does not itself create a universal applicant burden. 7a concerns imposing an obligation or restricting/removing a right, with legal doubt and its stated exceptions. |
| 4 | 8 § 1–2, 9, 10 § 1–3, 11, 12, 13, 14 § 1a–1d/2 | Same factual/legal state for settled practice; participation at every stage; narrow urgency exception and recorded reasons; thoroughness together with speed; agreement only where the case permits it; electronic form does not establish a universal filing channel. |
| 5 | 14a, 15, 16 | Office assessment is not a remedy. Two instances have special exceptions. Ostateczność and prawomocność describe review status, not correctness. |
| 17–18 | 73–76a, 77–81a | Access and its precise exclusions; evidence including documents; 76 § 3 contrary evidence; 76a § 2b actual certification; exhaustive collection and joint assessment; 79a only on the party's request and party-dependent unmet/unproved premises as of sending; 81a requires irreducible factual doubt in its specified category of case and preserves every listed exclusion. |
| 20–21 | 96a § 1–4, 96b | Character of case, voluntary mediation and lawful limits; newly added recorded assessment is not a rule that every foreigner's case can end in settlement. |
| 24–25 | 107 § 1/3–5 | Full reasoning identifies proved facts, relied-on evidence and reasons for rejecting other evidence, with the actual statutory exceptions. |
| 27 | 122d § 1 | Arts. 10 and 79a do not apply to cases settled silently. This is not a general exception for delayed applications. |
| 28–29 | 127 § 1/1a/3, 127a, 128 | Ordinary appeal, same-authority reconsideration and exceptions are distinct. No general duty to give a detailed appeal justification. Do not reproduce full remedy mechanics here. |
| 31–32 | 145 § 1 pkt 4, 147, 148 | Non-participation without fault is a distinct reopening ground, only on the party's demand and with its own time rule. Mentioning it is not a finding that all reopening conditions or cancellation requirements are satisfied. |

The [current compiled foreigners act](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), physical page 16, was also read for the exact text of art. 10 ust. 1–2. Ust. 1 excludes only KPA 73 § 1/1a, 79 and 81 when the foreigner is abroad and has no case representative resident in Poland. Ust. 2 has a different scope for the specified proceedings of the foreign minister. This is a passage check, not a new audit of all later amendments to that act. The proposed generic KPA example needs neither exception. If the author adds a broader foreigners-law paragraph, refresh its amendment scope before final acceptance rather than relying on the generic phrase "special rules may apply".

## Completion requirements for the author and root

Read the final full module, every Polish specimen cell, typed references, claims and review envelope independently. Confirm the selected fiction and document identities. Only then record scoped author/independent acceptance for the new hash and review date. Preserve the edition date and atlas-wide baseline.

Root should verify the actual module page with authored headings and the completed specimen shown once, correct provision links, no resurrected exercises or synthetic examples, readable mobile table and no overflow. Run the checks required for the implemented change and record them in the editorial log. This preparation ran no tests or browser checks and accepts no unchanged provision commentary, guide or shared interface copy.
