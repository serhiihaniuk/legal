# Batch 121: KPA initiation source notes

Status: authored draft pending independent full review and root integration checks. This note does not accept the module or adjacent provision commentary.

Legal state and source verification: 23 September 2026. Product scope is only `app/data/legal-library/learning/modules/kpa/initiation.ts`, stable ID `initiation`, order 6. The atlas baseline and source editions remain unchanged.

## Reader question and authored result

The module explains what starts an administrative proceeding, what makes a request procedurally usable, and why a signature defect, a procedural bar, an incorrect addressee, and an unproved substantive condition lead to different actions. Six authored sections replace the old layered lesson and exercise prompts. The required legacy layer fields remain concise orientation; method, checklist, questions, and find-in-text exercises are empty.

The completed example uses an ordinary KPA proceeding in which paper is allowed. It does not simulate a MOS application. The applicant is a party, the organ is competent, and every formal element except the handwritten signature is stipulated as satisfied. The result is the timely cure of that one defect. There is no residence or work entitlement, merits decision, or universal ruling on the retroactive date of commencement.

## KPA source, status, and amendment check

- Base act metadata: <https://eli.gov.pl/api/acts/DU/1960/168>. Fresh reads report `inForce: IN_FORCE`, status `akt posiada tekst jednolity`, and `changeDate: 2025-12-12T14:35:06`. The amending-act list starts with Dz.U. 2025 poz. 769, effective 13 July 2025. No later amending act appeared in that list on the verification date. The metadata result is a checked source state, not a promise that the list can never change.
- Official consolidated text: <https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf>. Read the actual 46-page PDF, printed date 4 December 2025. Use the `T` endpoint; a guessed `U` endpoint is not the verified source.
- Amendment: <https://eli.gov.pl/api/acts/DU/2025/769/text/O/D20250769.pdf>. Article 1 on physical pages 1–5 was read during the same 23 September source session for the adjacent KPA work. It does not amend the selected articles 14, 57, 61–66, 77 or 80. Article 31(1), physical page 19, preserves prior wording for KPA cases initiated and unfinished before commencement. Article 48, physical page 21, supplies the general 30-day commencement rule and its stated exceptions. The selected August 2026 fiction does not cross that transition.

Physical-page locators in the consolidated PDF:

| Page  | Provision      | Verified scope used in the module                                                                                                                                                                                                                                                |
| ----- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4     | 14 § 1a–1d     | Paper and electronic writing, general signature rules, and the difference between a party's signature and an authority's qualified seal. Special statutes may set narrower signature rules.                                                                                      |
| 14    | 57 § 1 and § 4 | Exclude the event day when counting days; move the end if it falls on Saturday or a statutory non-working day.                                                                                                                                                                   |
| 14–15 | 61 § 1–4       | Request or ex officio initiation; the particularly important party-interest exception and required consent; ordinary request-delivery date; electronic proof-issuance date; notice to all parties.                                                                               |
| 15    | 61a            | Appealable postanowienie refusing initiation for a non-party request or another justified procedural obstacle. Not a merits refusal or an automatic alternative to curing a missing signature.                                                                                   |
| 15    | 62             | Same factual state, same legal basis and same competent organ are cumulative conditions for common proceedings concerning several parties.                                                                                                                                       |
| 15    | 63 § 1–4       | General channels, ordinary-email consequence unless special law provides otherwise, minimum content, signature, the annotated substitute signature where the person cannot sign, mandatory electronic format where separately prescribed, and confirmation of filing on request. |
| 15    | 64 § 1–2       | Missing address only when it cannot be established from available data; other statutory defects require a cure request with at least seven days and a warning.                                                                                                                   |
| 15    | 65             | Prompt forwarding and simultaneous reasoned notification; timely filing with the wrong organ preserves the filing deadline. No assertion that all processing clocks start at the wrong organ.                                                                                    |
| 15–16 | 66             | Own-competence part and separate applications; 14 days from notification service to preserve the first filing date; appealable return in the specified cases; the prior court-declination exception.                                                                             |
| 18    | 77 § 1 and 80  | Collection and consideration of the complete evidence and assessment of whether the fact is proved. These support the formal-versus-evidentiary distinction, not a new evidence checklist.                                                                                       |

The general article 61 date is explained for a procedurally proper, permitted paper request delivered to the competent organ. The defective-request example deliberately does not settle disputed consequences of retroactivity for every deadline or substantive rule.

## Electronic delivery: current law and future amendment

Sources actually checked:

- Base metadata: <https://eli.gov.pl/api/acts/DU/2020/2320>. Fresh read reports the act in force and `changeDate: 2026-05-06T10:47:47`. Listed amendment Dz.U. 2026 poz. 507 has the general effective date 14 October 2026; the preceding listed amendment is Dz.U. 2024 poz. 1841, effective 1 January 2025.
- Current consolidated text: <https://eli.gov.pl/api/acts/DU/2026/3/text/T/D20260003L.pdf>, printed 7 January 2026.
- Later amendment: <https://eli.gov.pl/api/acts/DU/2026/507/text/O/D20260507.pdf>. Article 10, physical page 23, changes article 152(1) and (2) of the electronic-delivery act in connection with CEIDG wording. It does not change articles 41 or 147. Article 31, physical pages 27–28, sets general commencement six months after publication with enumerated exceptions; article 10 is not among those exceptions. The October rule is not described as effective on 23 September.

Article 41(1)(2), physical page 19 of the consolidated delivery act, requires issuance of proof of receipt after correspondence reaches a public entity's electronic-delivery address. This is the specific cross-reference made by KPA 61 § 3a. A sender's ordinary-email outbox is not equated with that evidence.

Article 147(2) and (4), physical page 27, supplied the general transitional equivalence for correspondence sent by a natural person or non-public entity through ePUAP to a public entity until 31 December 2025. The module states that this expired equivalence alone does not authorize every ePUAP filing in 2026. It expressly avoids declaring every special ePUAP service invalid. The separate public-to-public transition in article 147(1), which lasts longer, is not imported into the non-public applicant rule.

No actual electronic submission, user account or current service interface was used. This section explains statutory channels, not portal availability. The paper example does not depend on electronic delivery.

## Temporary-residence boundary

Sources:

- Base metadata: <https://eli.gov.pl/api/acts/DU/2013/1650>. Fresh read reports the act in force, with `changeDate: 2026-08-12T00:00:00`. The returned amendment list includes 203, 622, 621, 619 and 1794; its array order is not treated as a chronological legal conclusion.
- Current compiled foreigners act: <https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf>, 495 physical pages, printed 7 April 2026.
- MOS amendment and transition: <https://eli.gov.pl/api/acts/DU/2025/1794/text/O/D20251794.pdf>.
- Activation: <https://eli.gov.pl/api/acts/MP/2026/370/text.pdf>, full one-page communiqué, item 1, effective availability on 27 April 2026.
- Later amendment checked for the selected provisions: <https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf>, article 12, physical pages 25–26. Its changes to the foreigners act do not amend the selected articles 99, 106c–106l or 108. The note makes no independent acceptance claim about its other regimes.

Selected compiled-text locators:

| Physical page | Provision        | Boundary retained                                                                                                                                                                                                                                                                            |
| ------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 107           | 99(1)(1)         | A Polish permanent-residence permit or Polish long-term EU resident permit held on the application date is the named refusal-to-initiate example. A foreign state's status is not silently included.                                                                                         |
| 124–125       | 106c(1)–(5)      | Ordinary new temporary-residence application through the MOS electronic form; specified annexes/evidence and exclusion of the first two sentences of KPA 63 § 1; other-channel application left unexamined except the two named paper exceptions.                                            |
| 125–126       | 106d(3)–(6)      | Proper signatures and automatically generated UPO jointly matter. The ordinary applicant uses a qualified or trusted signature. Statutorily named representatives and annex signers have their own signature rules. A draft or employer-only annex does not complete the applicant's filing. |
| 129           | 106j and 106k(1) | The excluded ICT/long-term mobility and specified abroad-family categories; host-submitted paper route for the appropriate transfer/mobility cases.                                                                                                                                          |
| 132           | 106l(1)          | Specified family categories abroad, with paper filing by the designated family member. No universal choice to replace MOS with paper.                                                                                                                                                        |
| 136           | 108(1)–(2)       | Timely application and no formal defects or timely cure are conditions for the lawful-stay effect through finality. Suspension at the party's request is the stated exception. UPO alone proves neither all conditions nor a right to work.                                                  |

Article 12 of amendment 1794, physical page 40, was read with its enumerated scope: pending cases at the relevant changes retain prior provisions as specified there. Article 17 on that page and the communiqué explain why marginal activation annotations in the compiled text must be read with the actual 27 April launch. The module does not direct someone to refile a pending old application through MOS.

The module does not teach the entire MOS workflow, all refusal grounds, all representation cases, later correspondence, personal appearance or every transitional residence category. Those are boundaries of this article, not unresolved assumptions used by its paper example.

## Completed example and actual document roles

| Date           | Selected fact                                                                                                                          | Limited consequence                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 24 August 2026 | Competent organ receives the permitted paper request with all required elements except the handwritten signature.                      | The selected defect is identified. No universal commencement-retroactivity finding. |
| 27 August      | Proper service of a cure request requiring an unchanged signed counterpart within seven days, with the statutory warning.              | Service establishes the selected deadline's starting event.                         |
| 31 August      | Applicant actually signs the unchanged counterpart, submits it with the response, and obtains office acceptance confirmation that day. | The promised act is actually performed and filing is evidenced. No backdating.      |
| 1 September    | Organ examines the counterpart and finds the signature.                                                                                | The selected defect is cured in time; merits remain undecided.                      |
| 3 September    | Thursday, the seventh day after service-day exclusion.                                                                                 | The selected deadline expires after the actual cure.                                |

The weekday arithmetic was checked independently during preparation/review. The statutory holiday list was reread in <https://eli.gov.pl/api/acts/DU/2025/296/text/O/D20250296.pdf>, article 1, physical page 2. No listed September holiday displaces the Thursday endpoint. The fiction assumes effective service; it does not derive validity of service from the date alone.

Typed destinations used:

- `authority-summons`: the actual cure request, not a generic mandatory attachment.
- `delivery-proof`: evidence of delivery of the request or competence notification.
- `response-letter`: the covering response; it is distinct from the signed application that actually cures the defect.
- `dispatch-proof`: explicitly office acceptance in the example, not a postal dispatch being misdescribed as delivery.
- `procedural-order` and `procedural-complaint`: conditional roles for KPA 61a and 66(3), absent from the selected cure packet.
- `administrative-decision`: the distinct merits outcome, not claimed to have happened in the example.
- `mos-application` and `upo`: only the separately identified special electronic route. Neither is substituted for the paper application.

There is no dedicated generic-paper-application guide. The article names that actual paper document plainly rather than linking it to MOS. The table is a completed instructional comparison of separate records, not a new official combined form or an obligatory submission bundle.

## Integration and acceptance boundaries

Recommended main KPA provision panel: 14, 57, 61, 61a, 62, 63, 64, 65, 66. The foreigners and electronic-delivery citations remain explicit inline boundary references. Parent owns panel mapping, route/render tests, knowledge generation, browser inspection, editorial log and commit.

Author has formatted only the owned module and this source note. No tests, builds, browser actions, generated files or shared-file changes are part of this authorship task. The module and note are submitted for independent full review. Existing provision commentary repairs performed by root are separate work and are not accepted by this note.
