# Company records and actual activity

Reviewed on 2026-09-05 against `legal-explanatory-writing`.

## Questions and visible examples

The four complete company-category guides were read and their rendered pages inspected.

| Guide | Question answered | Filled example |
| --- | --- | --- |
| KRS or CEIDG | Which entity is the party, and who could act for it on the relevant date? | A fictional KRS representation fragment requires two board members. A company replaces its singly signed letter with a new letter signed by both authorized members. |
| CRBR | Does common ownership also establish representation or daily work management? | A record separates a person's 60% and 70% holdings, the absence of authority to sign for the other company, and the separate work-management question. |
| Business evidence | Which economic condition does the material address? | A business-plan fragment separates a future 120,000 zł contract, purchased equipment, available financing and an unresolved lease. The example follows the missing lease through completion. |
| Work organisation | Does the actual division of work match the contract? | Contract wording is compared with daily assignments, schedule changes and the billing record. The companies confirm a recurring practice that differs from the contract. |

The examples contain invented entities and amounts. The KRS specimen is a selected fictional fragment, not a full official extract. The other specimens are working records, not reproductions of registry interfaces or complete statutory forms. No client documents or identifying data were used.

## Corrections and case integration

The registry guide defines the two registries, the board and representation. It separates current entries from authority on a past date and identifies the special rules for a company's contract with its own board member. It does not invent a universal extract expiry period or treat one signature issue as proof that all company contracts are invalid.

The CRBR guide distinguishes beneficial control from representation and work management. It retains the statutory presumption that registry data are true and requires a discrepancy to be explained. It does not imply that all sole proprietors must report to CRBR.

The business-evidence guide explains the income, qualifying employment and future-performance alternatives in art. 142. It preserves the relevant periods and worker categories. It distinguishes accounting results, cash, investment and projections, and does not compute a current monetary threshold from an unverified wage figure. Personal residence conditions and role qualification remain separate.

The work-organisation guide explains temporary work, the user employer, SLA and KPI. It treats client acceptance and safety requirements differently from recurring individual work directions. It preserves original evidence and uses the statutory refusal provision without treating a single indicator as an automatic finding of an offence.

Four repeated business-case rows combined KRS/CEIDG, CRBR and company resolutions under a required label. They now use two shared definitions: registry/role evidence and conditional CRBR evidence. The latter is relevant when ownership or control needs explanation and the entity is covered by CRBR. Typed links remain present in the stages and document register. Existing work-case links to the registry and work-organisation guides remain intact. This focused change does not accept the complete business or work case guide.

## Official sources checked

Checked on 2026-09-05:

- [Ministry of Justice KRS guidance](https://www.gov.pl/web/sprawiedliwosc/uzyskiwanie-informacji-z-krs): current and full extracts, electronic information and the verification features required for a self-obtained printout. The older general gov.pl service page was also inspected, but its older service workflow was not copied.
- [Ministry of Justice CEIDG description](https://www.gov.pl/web/sprawiedliwosc/centralna-ewidencja-i-informacja-o-dzialalnosci-gospodarczej): scope covering natural-person entrepreneurs. This replaces the old guide URL that repeatedly failed to open. The Biznes.gov.pl search service returned 403 to the web reader, so its current interface was not verified or described.
- [KSH publication](https://eli.gov.pl/eli/DU/2024/18/ogl) and [reading text dated 2026-06-03](https://eli.gov.pl/api/acts/DU/2024/18/text/U/D20240018Lj.pdf): art. 205 on representation and art. 210, including its special and sole-member rules. The example expressly concerns ordinary company representation.
- [Ministry of Finance CRBR description](https://www.gov.pl/web/finanse/centralny-rejestr-beneficjentow-rzeczywistych), [AML publication](https://eli.gov.pl/eli/DU/2025/644/ogl) and [reading text dated 2026-07-28](https://eli.gov.pl/api/acts/DU/2025/644/text/U/D20250644Lj.pdf): definition of the beneficial owner, entities covered by art. 58, information under art. 59 and the public, presumptively true and free data under art. 67–70. The guide does not introduce a general discrepancy-reporting obligation for every legalization worker.
- [Foreigners-act publication](https://eli.gov.pl/eli/DU/2025/1079/ogl) and [reading text dated 2026-04-07](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 142 and its income, employment and future-performance alternatives, personal conditions and special scope; art. 117a pkt 4 on work for a third party. The latter is not art. 117 pkt 3, which concerns permit limits in this text.
- [Podlaski UW business guidance](https://www.gov.pl/web/uw-podlaski/dzialalnosc-gospodarcza): examples of financial records, business plans, contracts and investments. Its document examples are supplementary; no universal checklist or paper-filing instructions were imported.
- [Current PIP agency guidance](https://www.pip.gov.pl/dla-pracodawcow/pytania-i-odpowiedzi/swiadczenie-jakich-uslug-wymaga-uzyskania-wpisu-do-rejestru-agencji-zatrudnienia): agency services under the 2025 labour-market act and work for and under the direction of the user employer. An older PIP outsourcing article was read for context; its superseded 2004-act references were not used as current law.
- [Official KPA text](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf): art. 75 § 1, art. 77 § 1 and art. 80 on evidence, collection and assessment.

These are scoped source checks for the edited explanations. The atlas baseline remains 18.07.2026. No corpus edition was promoted and no independent-review attestation was added. A complete amendment and transitional-rule audit of the atlas remains pending.

## Verification

- `npm run verify` passed after the final code/content edits: typechecks, generated-data checks, lint, formatting, 91 application tests, 69 corpus tests, 15 review-tool tests, editorial checks and production build. Existing font-parser and bundle-size warnings remain.
- The first check rejected a specimen's contract-paragraph label as a bare legal citation and a plain article reference in a source note. The specimen now identifies the contract clause in words, without inventing a legal destination. The source note leaves article numbers in the typed citation. A navigation test was updated for the new CRBR link label.
- All four document pages and specimens were inspected at desktop and 360 px widths. Page widths matched the viewport content width; tables stayed in their own scrolling regions. The business-plan table moved 80 px with keyboard arrows.
- Checked document section anchors resolved. Keyboard navigation followed the business-evidence usage link to the business case and a CRBR link back to its guide.
- The related-document link opened the work-organisation guide, and its typed legal reference opened the correct art. 117a provision without page overflow.
- All three affected expanded business-case stages displayed the conditional CRBR label and its scope. The register uses the same shared definitions.
- Browser console error logs for the verification tab were empty.

Writing acceptance covers only the four complete document-guide files.
