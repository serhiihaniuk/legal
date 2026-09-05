# Correspondence, delivery and submission evidence

Reviewed on 2026-09-05 against `legal-explanatory-writing`.

## Questions and completed examples

All four guide files were read in full and inspected in the browser. Each page now explains which event the document establishes and which conclusions require other material.

| Document | Question answered | Visible example |
| --- | --- | --- |
| Wezwanie | What does each demand require, and why can different demands have different consequences? | A fictional Polish letter fragment requests current university confirmation and an explanation of an earlier interruption. The completed response supplies separate evidence for each period. |
| Delivery proof | Which date starts this deadline? | A letter dated 10 August 2026 is properly served on 12 August. The stated seven-day formal-defect period runs from 13 through 19 August under the example's explicit assumptions. |
| Dispatch proof | What was actually sent with this response? | A posting receipt and a saved package are compared with an attachment list. The listed amendment was omitted, so the first receipt does not prove that it was sent. |
| UPO | Which submitted version does this receipt concern? | A working comparison separates submitted PDF/XML files and their UPO from a later file saved only locally. The old receipt does not establish submission of the later changes. |

The specimens contain no client identifiers or imitation official seals. Their captions identify them as fictional fragments or working records. The UPO comparison is not a reproduction of an official UPO form; a faithful visual specimen remains unavailable in this batch.

The wezwanie guide distinguishes formal defects, requests for substantive evidence and personal procedural actions. The delivery guide separates actual receipt, service on a representative, postal notice and electronic service. It explains deadline restoration separately from counting an unexpired period. The dispatch guide qualifies postal and electronic submission rules and does not imply that every courier or ordinary email preserves a deadline. The UPO guide distinguishes a receipt, a later filing certificate and a residence decision.

## Official sources checked

Checked on 2026-09-05:

- [KPA publication](https://eli.gov.pl/eli/DU/2025/1691/ogl) and [official PDF](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf): art. 40 § 2, 44 and 46 for service; art. 50 and 54 for demands; art. 57 for counting and preserving deadlines; art. 58 and 59 for restoration; art. 63 for submission channels and confirmation; art. 64 § 2 for formal defects.
- [Foreigners-act reading text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 106d ust. 5–6 for signing and UPO, art. 106e for personal actions, art. 106f for evidence requests, and art. 106i for consequences and exceptions. The text limits these explanations to procedures to which the provisions apply. MOS operation is corroborated by the UdSC guidance, not inferred from future-wording typography in a PDF.
- [UdSC MOS questions and answers](https://www.gov.pl/web/udsc/mos-qa): questions 34–42 and 61 on drafts, transmitted applications, downloadable PDF/XML, UPO, synchronization status, later filing certificates and inability to edit an already transmitted application.
- [Official e-Doręczenia questions and answers](https://www.gov.pl/web/e-doreczenia/pytania-i-odpowiedzi) and [message preparation guidance](https://www.gov.pl/web/e-doreczenia/jak-przygotowac-wiadomosc-elektroniczna-w-e-doreczeniach): distinct dispatch and receipt proofs, downloadable records and attachments. The pages do not apply postal notice rules to electronic service.

These focused checks do not establish a new atlas-wide legal baseline. The visible atlas date remains 18.07.2026. No source edition was promoted and no independent legal-review attestation was added.

## Verification

- `npm run verify` passed, including typechecks, lint, formatting, generated-data and editorial checks, 91 application tests, corpus and review-tool tests, and the production build.
- All four direct document URLs rendered their specimens at 360 px without horizontal page overflow. Present table-of-contents anchors resolved. The UPO comparison remained keyboard-scrollable inside its labelled region.
- Desktop inspection covered the delivery example and section navigation. The wezwanie page's related-document link opened the requirements table, and keyboard activation of its typed art. 106f reference opened the correct provision.
- A fresh browser session rendered all four documents without console errors. Earlier development-time syntax and citation-validation errors were fixed before this check. Existing build warnings remain unchanged.
