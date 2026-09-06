# Special applications, annexes and settlement evidence

Reviewed on 2026-09-06 against `legal-explanatory-writing`. Read all six complete guides and rendered pages. Acceptance covers these document guides. Changes to three case routes are focused integration corrections, not acceptance of those entire routes.

## Questions and completed examples

| Guide | Question answered | Example |
| --- | --- | --- |
| Family application for a relative abroad | Who files this paper application, and whose details belong in each block? | Selected fields distinguish a husband in Poland with a Blue Card from his wife in Ukraine. The form records her current location separately from their planned home in Poland. |
| Family-application consent | Who gives consent, and what authority does it grant? | A completed comparison corrects the two people's reversed roles. The wife gives consent to the husband. The explanation corrects the old claim that consent does not authorize later representation: the specified consent is equivalent to authority to act in that proceeding. |
| Researcher annex | Does an institution's international activity mean this researcher participates in a mobility programme? | The filled comparison changes Tak to Nie after the institution confirms that this person's agreement is outside the programme. Ordinary research and long-term researcher mobility remain distinct. |
| Trainee/volunteer annex | Which organisation completes and signs this annex? | The comparison replaces an intermediary agency with the actual host. The signature remains explicitly pending. Registration data do not establish the host's required approval or the programme conditions. |
| ICT application | Does corporate ownership establish all conditions for an intra-corporate transfer? | A filled working comparison establishes the companies' ownership link but finds only 11 months of the specialist's previous employment before the planned transfer. The missing month is not supplied by the corporate documents. |
| Settlement intention | How can a person explain a permanent move while finishing commitments abroad? | A fictional Polish letter distinguishes an existing lease, a documented future employment end date and a plan to seek work. Housing ownership, employment and family ties are not converted into a universal checklist. |

Five examples are selected-field comparisons, and one is a fictional letter fragment. They show completed reasoning without impersonating a client record, official MOS screen or signed official form. Original form links retain the actual layouts.

## Official sources checked

- [Foreigners act, Dz.U. 2025 poz. 1079](https://eli.gov.pl/eli/DU/2025/1079/ogl) and [current Sejm reading text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): checked active ELI metadata and the listed amendments. Read the relevant definitions in art. 3; art. 106 ust. 5–6, 106c–106d, 106k–106l; art. 139a and 139o; art. 151 and 151b; art. 157a and 157g; art. 158–160, 168 and 168a; and art. 195. The current reading text contains both earlier and replacement MOS wording. The guides use the activated provisions for new applications.
- Art. 168 ust. 3 and 168a ust. 3 expressly establish the consent's effect as pełnomocnictwo in the proceeding. Art. 168 ust. 2 and 168a ust. 2 retain the exception when the filer is already the legal representative. The corrected guide does not require a second document merely because representation continues after filing.
- Art. 106l limits the special paper family form to art. 159 ust. 1 or art. 160 pkt 1, 3, 4 or 6 with the beneficiary abroad. An ordinary spouse case under art. 158 ust. 1 pkt 1 is not added to that list. Art. 106l ust. 7 concerns biometrics at this filing stage, not a permanent exemption from later personal actions.
- Art. 106d ust. 3 and 4 distinguish the applicant's researcher annex from an organisation's trainee/volunteer annex and their signing rules. The generic wording in a form footer is not used to extend personal-signature access to every adult applicant.
- Art. 139a ust. 1–3 and 139o ust. 1–2 were read for previous employment, qualifications, written work conditions and all remuneration comparisons. The ICT guide cites art. 139o ust. 2 for the mobility remuneration rule. No unverified salary amount is supplied.
- [Temporary-residence forms, Dz.U. 2026 poz. 553](https://eli.gov.pl/eli/DU/2026/553/ogl) and [official PDF](https://eli.gov.pl/api/acts/DU/2026/553/text/O/D20260553.pdf): active, effective 27.04.2026. Read the relevant forms and instructions. The local original was visually inspected for annex 4 on PDF pages 28–29, annex 5 on 30–31, selected ICT company/job/history fields on 42–44, selected family role blocks on 55 and 57–59, and the complete consent form on 69–70. Form ranges are ICT 35–54, family 55–68 and consent 69–70. Application annex numbers 3 and 4 differ from regulation annex numbers 4 and 5.
- [UdSC MOS notice](https://www.gov.pl/web/udsc/info-mos): checked the 27.04.2026 start, paper exceptions for ICT and the specified family applications, institutional links and signing. The activation and earlier-proceeding rules in [Dz.U. 2025 poz. 1794](https://eli.gov.pl/api/acts/DU/2025/1794/text.pdf), art. 12, 17 and 19, and [M.P. 2026 poz. 370](https://eli.gov.pl/eli/MP/2026/370/ogl) were checked in batch 12 and reused for the unchanged distinction. This is not a new corpus edition promotion.
- [Podlaski UW guidance for Karta Polaka holders](https://www.gov.pl/web/uw-podlaski/posiadacz-karty-polaka): used the material guidance on evidence of an intention to settle, read with art. 195 ust. 1 pkt 3 and 9. The page also contains older paper-filing instructions; those are not copied into the current guide.

These are scoped source checks as of 06.09.2026. The atlas baseline remains 18.07.2026. No independent legal attestation is renewed.

## Case integration

- The family route reuses two conditional document definitions in its stages and register. The paper form retains its precise scope; consent retains both its representation effect and the legal-representative exception.
- The other-purposes route reuses separate trainee/volunteer, researcher and ICT definitions. The applicant signs the researcher annex; the host signs the trainee/volunteer annex; the ICT host files the special paper application.
- The permanent route reuses one conditional settlement-intention definition. It names the relevant grounds instead of presenting this evidence as a generic control for every permanent-residence case.
- The existing generic case stages still require full review. For example, the family filing stage's broad personal-action row and its generic MOS title need to be reconciled with the paper route. This batch does not accept those surrounding descriptions.

## Verification

- `npm run verify` passed: both typechecks, data and corpus-reader checks, lint, formatting, 92 application tests, 69 corpus tests (68 passed and one skipped), 15 review-tool tests, editorial validation and production build. Existing parser, dependency deprecation and large-bundle warnings remain.
- Read all six complete rendered document pages. All fit at desktop 1280 px and mobile 360 px without page-wide horizontal overflow. Inspected representative desktop and mobile layouts.
- All five comparison regions scroll horizontally by keyboard at mobile width. The settlement letter uses normal wrapping.
- Followed the family application's source link into annex 8. The reader opens the original-PDF tab and retains its iframe. Followed the consent guide's typed art. 168 ust. 3 link and read the Polish provision.
- Followed settlement evidence to the permanent case, opened the stage document disclosure, checked its conditional label and returned to the document. Opened the family filing disclosure and followed its corrected consent link.
- Section navigation places the settlement heading below the fixed header. The browser console error log was empty. Restored the original browser viewport.
- A final wording edit explains Umowa Wystąpienia in Ukrainian. Focused rendering tests, editorial validation and formatting were checked after that edit.

## Findings retained for the corpus audit

- The family reader reports annex 8 as PDF pages 55–69, while annex 9 begins on page 69. The family's actual range ends on page 68. Audit annex boundaries together with the university annex end-page discrepancy recorded in batch 09.
- The family form's sponsor-status checklist in C.I.4 on pages 57–58 does not visibly offer permanent-residence or long-term EU resident status, although art. 159 ust. 1 pkt 1 lit. a–b includes these statuses. Preserve the official source and investigate the mismatch. Do not invent a checkbox or infer that the statute excludes these sponsors. This batch's example uses the available temporary-residence category for a Blue Card holder.
- The rendered Polish art. 168 still contains split words such as `Rzeczy pospolitej`, `r odziny` and `przeds tawiciela`. These are extraction defects for the corpus audit, not text to rewrite as Ukrainian explanation.

The full case-route review, corpus fidelity/layout audit and distinct independent legal review remain open.
