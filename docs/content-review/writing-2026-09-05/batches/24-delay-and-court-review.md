# Batch 24: delay, office deadlines and court review

Date: 2026-09-06. This batch reviews the map topic `inactivity`, KPA module `delay`, and their shared residence-office deadline explanation. It does not complete the corresponding case-guide reconciliation or the independent legal review.

## Reader question and changes

When does waiting become bezczynność or przewlekłość, and what changes when the residence-office deadline is suspended?

The pages now define both forms of delay, explain the role and timing of ponaglenie, distinguish the statutory deadline from an estimate, and separate the authority's clock from the applicant's response deadline. The KPA module explains the two seven-day periods and the premature-ponaglenie rule. It preserves the separate PPSA conditions for court review.

The shared content keeps the statutory suspension, administrative interpretation and nonfinal court example in separate fields. Typed claim records identify statute text, official guidance and case law with exact source locations. Both pages use the same authored paragraphs rather than maintaining different descriptions of the special rule.

The completed example uses the operative part of a published judgment. It identifies the finding of inactivity, the order to finish the administrative case, the absence of a gross violation, the rejected monetary claims and the separate reimbursement of court costs. The judgment's nonfinal status and the starting event for its 60-day order remain explicit. No permit outcome is invented.

## Official sources checked

- [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/eli/DU/2025/1691/ogl), official text PDF pages 8–9: art. 35–38. Checked the general periods, exclusions, notice, definitions, premature filing, forwarding and consideration periods, different procedure without a higher authority, and employee liability.
- [PPSA, Dz.U. 2026 poz. 143](https://eli.gov.pl/eli/DU/2026/143/ogl), current codified PDF dated 20.07.2026: art. 53 § 2b, 54 § 1 and 149. Checked prior ponaglenie, filing through the authority, findings, orders, gross violation, the conditional ruling on rights, and discretionary monetary consequences. Future electronic-filing annotations in the PDF were not treated as current rules.
- [Special act, Dz.U. 2025 poz. 337](https://eli.gov.pl/eli/DU/2025/337/ogl), codified PDF dated 22.05.2026, pages 57–58: art. 100d ust. 1–4. Checked the listed proceedings before wojewoda, 04.03.2027 date, effective procedural acts and statutory remedy restrictions. The wording refers to foreigners, not only Ukrainian citizens.
- [Amending act, Dz.U. 2026 poz. 203](https://eli.gov.pl/eli/DU/2026/203/ogl): active status and entry-into-force information. The current codified special-act text and MSWiA's explanation identify the extension of art. 100d; later commencement exceptions were not applied early.
- [MSWiA reply of 30.06.2026](https://bip.brpo.gov.pl/sites/default/files/2026-08/Odpowiedz_MSWiA_cudzoziemcy_legalizacja_pobytu_przewleklosc_30_06_2026.pdf), pages 7–9, and the [RPO publication updated 26.08.2026](https://bip.brpo.gov.pl/pl/content/rpo-cudzoziemcy-postepowania-legalizacyjne-przewleklosc-mswia-odpowiedz): the ministry distinguishes its continued application of art. 100d from possible judicial refusal to apply it to delay after 30.06.2024. This is attributed official guidance, not a universal rule that every complaint succeeds.
- [WSA w Poznaniu, II SAB/Po 314/25, 12.03.2026](https://orzeczenia.nsa.gov.pl/doc/1E120C483B): read the operative part and relevant reasoning on prior ponaglenie, art. 100d and the relief granted. CBOSA still marks the judgment `nieprawomocne`. The published reasoning has inconsistent application/complaint dates; the example deliberately does not reconstruct a precise filing chronology from them. The decision is evidence of a specific judicial approach, not a final judgment establishing a universal outcome.

The scoped legal check is 06.09.2026. The KPA module can now display its own date instead of inheriting the older curriculum date. The global atlas baseline remains 18.07.2026.

## Presentation and verification

Read the authored files and their actual rendering paths. The map renderer previously printed the legal model twice, once by joining its fields into paragraphs and again in labelled grid rows. It now renders each field once, as paragraphs under headings. Reference-preview fixtures reuse the same component. No field was removed to make the page shorter.

- `npm run verify` passed after the content changes; the final delivery run repeated it after claim metadata and paragraph-spacing adjustments. Both include type checking, script types, knowledge registry, source-layout consistency, lint, formatting, 172 application tests, corpus tests, review-tool tests, editorial coverage and production build. Detailed terminal evidence is in ignored `.reference/batch24-verify-delivery.log`.
- Browser checks at 1440 × 1000 and 360 × 800 for `/map/inactivity` and `/law/kpa/learn/delay`: meaningful content, expected shared explanation and case, correct module date, no document-width overflow and no browser errors.
- Clicking the KPA reference navigated to `/law/kpa/provisions/kpa-art-37`. External links point to the checked ELI, MSWiA and CBOSA sources.
- `/map/principle-legality` also rendered all model fields once at desktop/mobile widths without overflow. This checks the shared renderer; it does not grant editorial acceptance to that topic.
- Screenshots inspected: desktop map model and mobile KPA example. The map paragraphs retain a visible gap, and mobile text wraps within the reading column.

## Remaining work

Reconcile the existing art. 100d passages in the ordinary case guides with this shared explanation. Their short statements about restricted remedies must not imply that court review is categorically impossible. Continue the other map topics, law modules and provision explanations. The provision commentary embedded within the KPA module has not received fresh writing acceptance in this batch. All corpus-wide source-layout anomalies and the distinct independent legal review remain open.

Writing acceptance is limited to the two complete authored topics and the shared deadline content. The renderer and curriculum contract changes are verified implementation work; their other reader-facing copy remains part of the interface audit.
