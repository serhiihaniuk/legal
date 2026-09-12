# Employer duties and event-specific notifications

## Status and scope

Completed on 12.09.2026. Source preparation below was followed by a complete rewrite, independent review and application verification. The accepted hash and remaining source limits are recorded at the end.

The audit read the complete current `app/data/legal-map/editorial/topics/employer-duties.ts`, checked its document destinations, and verified the official sources below. It prepares the employment chapter's shared explanation of duties triggered by hiring, changes, interruptions and termination. It does not replace the separate instrument articles or repeat the seasonal research completed in batches 73 and 74.

The initial source audit changed no product files. Its findings are retained below; the later implementation and verification are recorded separately.

## Reader question and proposed boundary

The page should answer: what must the employer do after identifying the worker's actual basis of access to work, and which event creates a new action?

Keep ordinary work permits, registered declarations and temporary-protection notifications distinct. A work permit and a permit for temporary residence and work have different notification rules. Explain that distinction briefly, then use the existing residence article for its full mechanism. General employment, tax and social-insurance law should not become an unbounded payroll checklist on this page.

## Official sources checked

| Source | Verified scope |
| --- | --- |
| [Work act, Dz.U. 2025 poz. 621](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf) | Current compiled text, header 17.06.2026, incorporates 2025/1794 and 2026/203, 473, 734. Arts. 4–5a on PDF pp. 11–14; 17–20 on pp. 25–28; 33 on pp. 35–36; 68–70 on pp. 55–57; 84 on pp. 74–75; 109 on p. 99. Page numbers are physical PDF pages, counted from one. |
| [Work-act status](https://eli.gov.pl/eli/DU/2025/621/ogl) | In force; general commencement 01.06.2025. This date does not establish when each technical component became operational. |
| [Contract transmission amendment, Dz.U. 2026 poz. 734](https://eli.gov.pl/api/acts/DU/2026/734/text.pdf) and [status](https://eli.gov.pl/eli/DU/2026/734/ogl) | Art. 5 changes work-law arts. 17(1)(2) and 68(1)(2). Art. 6 separately governs rollout and the communication for new eUmowy functions. Relevant amendment commenced 20.06.2026. |
| [Ministerial communication of 28.05.2025, poz. 15](https://www.gov.pl/attachment/fc45e79c-2206-483b-9ff2-f1c7d94a1038) | Points 1–2: contract-copy components launched 01.08.2025 for wojewoda permits and 01.07.2025 for declarations and seasonal permits. |
| [Ministerial communication of 29.04.2026, poz. 7](https://www.gov.pl/attachment/745cc004-b156-4c03-a19a-ae071b579952) | Art. 19 permit non-start, interruption and end reports through the art. 20(1) system launched 01.06.2026. It does not mention art. 18 or 33. |
| [Ministerial communication of 29.04.2026, poz. 8](https://www.gov.pl/attachment/3f96f9df-8924-4ec3-83bd-157f7d1533c2) | Art. 70(2–3) reports that the worker will not start or has ended work launched 01.06.2026. Its express scope should not be expanded to every notification. |
| [Official praca.gov.pl help](https://www.praca.gov.pl/eurzad/html/pomoc/zatrudnianie_cudzoziemcow.htm) | Current names and codes for the contract-copy service and notifications. New declaration forms coexist with legacy forms. |
| [Gdańsk authority: three permit notifications](https://wsc.gdansk.uw.gov.pl/pl/system/files/pliki/3_rodzaje_powiadomien_-_broszura_informacyjna.pdf) | Permit report names, triggers, seven-day deadline and example fields. The local e-Doręczenia fallback is not a verified nationwide fallback. |
| [PUP Brzeg: declaration duties](https://psz.praca.gov.pl/web/powiatowy-urzad-pracy-w-brzegu/rynek-pracy/aktualnosci/-/asset_publisher/8VCc6CLiHUaO/content/wazna-informacja-dla-pracodawcow-zatrudniajacych-cudzoziemcow-na-podstawie-oswiadczen-o-powierzeniu-pracy?p_r_p_assetEntryId=65663063) | Actual start, non-start, final non-start and early end must be distinguished. The art. 70(2) report invalidates the entry by law. |
| [Ukraine transition, Dz.U. 2026 poz. 203](https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf) and [status](https://eli.gov.pl/eli/DU/2026/203/ogl) | Arts. 19, 40–41; relevant commencement 05.03.2026. Earlier notifications and the three-year application to legally staying Ukrainian citizens outside temporary protection require separate treatment. |
| [PIP amendment status, Dz.U. 2026 poz. 473](https://eli.gov.pl/eli/DU/2026/473/ogl) | Relevant changes effective 08.07.2026. Current compiled work-act arts. 33(2)(3) and 69(5) include both agreed conversion to employment and the specified PIP decision finding employment. |
| [Foreigners act, Dz.U. 2025 poz. 1079](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf) | Bounded comparison only: art. 119(2), PDF p. 150; art. 121(1–4), pp. 153–154. Employer and worker notices have different deadlines. |

## Event and document mapping

The actor in the following permit rows is the entity to which the work permit was issued. The recipient is the issuing authority, normally the wojewoda for the selected ordinary Polish-employer permit. Do not apply these rows merely because an employee holds a residence card.

| Event | Actual report | Trigger and deadline |
| --- | --- | --- |
| Ordinary permit: no start | `Powiadomienie o niepodjęciu pracy przez cudzoziemca` (`ZC-PNPC`) | Work has not started within two months of the permit's initial validity date. Report within seven days of the art. 19 circumstance. |
| Ordinary permit: interruption | `Powiadomienie o przerwie w pracy cudzoziemca` (`ZC-PPPC`) | The interruption exceeds two months. Report within seven days of that circumstance. |
| Ordinary permit: early end | `Powiadomienie o zakończeniu pracy przez cudzoziemca` (`ZC-PZPC`) | Work ends more than two months before permit expiry. Report within seven days of the event. |
| Ordinary permit: art. 18 change | Notification of the specified change to the issuing authority | Art. 18 covers the named entity details, transfer of an undertaking and a position-name change without changed duties. Art. 20 states seven days. The exact current channel needs the transition check below. |
| Ordinary permit: temporary different work | Advance notification under art. 33(1) to the issuing wojewoda | Before different work begins, within the provision's maximum of 30 days in a calendar year and with its other conditions retained. This is not a seven-day-afterward notice. The exact current channel needs the transition check below. |

The actor in declaration rows is the Polish entity whose declaration was registered. The recipient is the starosta who made that registration.

| Event | Actual report | Trigger and deadline |
| --- | --- | --- |
| Actual start | `Powiadomienie o podjęciu pracy przez cudzoziemca` (`PSZ-PPPC`) | Seven days after actual start, art. 70(1)(1). |
| Work has not started | `Powiadomienie o niepodjęciu pracy przez cudzoziemca` (`PSZ-PNPC`) | Fourteen days after the start date recorded in the register, art. 70(1)(2). |
| Final non-start or early end | `Powiadomienie, że cudzoziemiec zakończył pracę lub nie podejmie pracy` (`PSZ-PZPC`) | Art. 70(2) states the event without a numerical deadline. This report invalidates the entry by law under art. 70(5). Do not equate it with the preceding delayed-start report. |

Legacy declaration forms `PSZ-PPPO` and `PSZ-PZPO` also appear in the official help. Select the form belonging to the actual registered case. A current example should not silently reuse a legacy code.

For temporary protection, the actual document is `Powiadomienie o powierzeniu pracy cudzoziemcowi` (`PSZ-PPWPU`). The Polish employer reports to the PUP competent for its seat or permanent residence. Work-law art. 5a gives seven days after actual start and seven days after the specified repeat-report events: contract type, position/type of work, reduced working time/hours, or reduced monthly/hourly pay. Use the existing `ukraine-work-notification` guide for detail. Preserve the textual scope of the statutory list rather than inventing a report for every change of data.

## Contract, information and record duties

- Art. 4 requires identity and stay verification. The ordinary retention period continues for two years from the end of the calendar year in which the employment relationship ended, unless separate law requires longer. This is not a universal two-year deletion date for all payroll records.
- Art. 4(5) exempts only art. 3(1)(1–5) from art. 4(2–4). Do not extend it to everyone with unrestricted access to work, including Polish permanent or long-term EU residence permits.
- Art. 5 distinguishes a written version understandable to the worker before signing a Polish contract from the sworn Polish translation retained when the contract is in a foreign language. These are different document functions.
- The current article omits the understandable written notice about the right to join a trade union, art. 5(4).
- The corporate-function exception qualifies the written-contract rule. Art. 17(2) separately excludes specified duties for the named corporate functions. Avoid a universal sentence that every permit holder requires the same contract-upload steps.
- Under arts. 17(1)(2) and 68(1)(2), the recipient is respectively the permit's issuing authority or the declaration's registering authority. Polish contract/copy transmission precedes work. The permit provision has the separate seven-day rule for `umowa o pomocy przy zbiorach`; do not duplicate the seasonal explanation here.
- `Przekazanie kopii Umowy z Cudzoziemcem` (`PGP-UZC`) is the verified copy service. The amended statute also names the contract-system alternative, but enactment does not establish operational availability of every new eUmowy function.
- Preserve the obligations to reflect the authorized conditions, adjust applicable remuneration, increase remuneration proportionately with the specified increase in hours, give the worker the relevant decision or registered declaration, supply requested inspection records, and pay arrears for performed work. These are not all notifications.
- Separate statutory duties from practical evidence. A payroll calculation, executed bank payment and ZUS record establish different facts. None is a universal substitute for the others.

## Residence and exemption boundaries

For a temporary residence and work permit, foreigners art. 119(2) gives the employer 15 working days for the specified changes. Art. 121(4) gives the employer named in the permit 15 calendar days after loss of that work. The worker's own art. 121(1) notice has a 15-working-day deadline. The recipient is the relevant wojewoda; the second-instance situation has its own express direction. These duties must not be folded into the seven-day work-permit reports.

Work-law art. 5a now covers temporary protection. Under 2026/203 art. 41 its rules also apply correspondingly for three years from 05.03.2026 to legally staying Ukrainian citizens who do not have temporary protection. Art. 40 preserves the specified earlier notification arrangements. Avoid saying every Ukrainian worker must obtain a fresh notification merely because the statute changed. Ordinary permit/declaration duties should not automatically be imposed on an independently exempt employment relationship.

## Current destination problems

| Current label and target | Required correction |
| --- | --- |
| Generic `документ pobytowy` to `residence-card` | Identify the actual selected visa, card or other status evidence. A card guide does not describe every basis of stay. |
| Generic `письмова umowa` to `employment-contract` | The destination explains `umowa o pracę`. Retain that link when the selected contract is employment; do not relabel it as every civil contract. |
| `зрозумілий переклад/версія` to `sworn-translation` | Separate understandable written content from a sworn Polish translation of a foreign-language contract. |
| `доказ виплат і ZUS` to `zus-confirmation` | Select existing `payroll-statement`, `bank-statement` and the actual ZUS document for the fact being explained. Keep the ZUS overview clearly labelled as an overview when needed. |
| Notification content to `dispatch-proof` | Submission evidence is separate from the submitted notification. Dedicated ordinary permit and declaration notification guides remain missing. |

`ukraine-work-notification` already exists. `temporary-residence-notification` and `blue-card-notification` concern different residence duties and should not be used as generic employer notification destinations. Any future guide split should follow the completed example's actual records, not create empty pages for every conceivable document.

## Limits identified during source preparation

1. Work-law art. 109 retains a technical transition for arts. 18(2) and 33(1), among other actions. The verified 29.04.2026 communication poz. 7 expressly activates art. 19 reporting; poz. 8 covers art. 70(2–3). Neither establishes rollout for arts. 18 or 33. Verify the applicable current channel before writing a categorical portal instruction for these events. No dedicated current form code was verified for them in this audit.
2. The 20.06.2026 amendment permits the contract-system alternative and separately provides for rollout. No launch communication confirming every new eUmowy function was verified. The established `PGP-UZC` copy route is sufficient for a bounded example.
3. Do not convert a local authority's fallback filing instruction into national law. The Gdańsk sheet mentions e-Doręczenia if the notification option is unavailable; the statute's system-malfunction rule and the particular case must still be distinguished.
4. Final prose, specimen dates, references and rendered navigation were still unreviewed at this stage. Their later acceptance is recorded below.

## Additional channel and form check

ukr_filing_review independently checked the live 2025 and 2026 ministerial journals and targeted official portal documentation on 12.09.2026. The 2025 journal listed 37 entries; the 2026 journal listed 18, with its latest revision on 20 August. The verified 29 April notices cover art. 19 and art. 70(2–3), not art. 18(2) or art. 33(1). No subsequent relevant notice or documented dedicated form was found. Current art. 109 still names these provisions. This is an unverified activation gap, not proof that a live system lacks those functions. Avoid categorical current portal instructions for them.

Root also downloaded and visually inspected the one-page June 2026 Gdańsk notification sheet cited above. It shows ZC-PNPC, ZC-PPPC and ZC-PZPC with their distinct events. Its local fallback instruction remains administrative guidance for that authority. The image is evidence of the published explanatory sheet, not inspection of the authenticated submission interface.

## Completed article and independent acceptance

Six authored sections explain checks before work, understandable contract content and contract transmission, work-permit events, the other instruments, actual performance and retained records, and a completed two-worker comparison. The fictional June 2026 permit and registered declaration both cover July through December. The workers actually start on 1 July and end on 15 August. The employer submits the two different end notices on 17 August. A filled Polish working register identifies the submitted notices and their separate submission receipts.

The independent full read found an omitted consequence in art. 22(1)(6) and the art. 22(3) exception. The final article explains that reasons and a declaration of intended use matter for non-start and interruption notices; this exception does not cover early ending. Review also clarified the instruments' June issue dates, explained unieważnienie wpisu in Ukrainian and restored ongoing information and prompt-correction duties. Root read the article and these final changes.

legacy_case_audit accepted app/data/legal-map/editorial/topics/employer-duties.ts at SHA-256 59a2180abf744a0f5317e1303fbee531378cea8cbcf795d827dccbc253664e20. The acceptance is bounded to this article and its checked sources, not the project-wide legal baseline. The channel activation gaps above remain qualified in the article. Dedicated ordinary-permit and declaration notification guides remain separate catalog gaps.

## Verification

The combined batch 77–78 full verification passed with 246 application tests, type checks, lint, formatting, reader checks, 68 passing corpus tests and one existing skip, 15 review-tool tests, editorial validation and build. After the final source-review paragraphs changed, typecheck, editorial validation, previews and build were checked again. Previews cover 89 documents and 62 map nodes after retirement of the old weekly schedule.

Root inspected the desktop article at 1440 px and the Polish specimen at 360 px. Neither viewport overflowed. The table scrolled with ArrowRight while the page stayed at 360 px. Direct loading of the completed-example anchor placed its heading below the fixed header. Keyboard activation opened the registered-declaration guide; Back preserved the article anchor. Final source paragraphs and browser errors were checked after the review correction.

Writing acceptance reaches 201 of 1,826 active files together with batch 78. The removed weekly-schedule file is not counted as reviewed. Global legal baseline remains 18.07.2026; this article's scoped source check is dated 12.09.2026.
