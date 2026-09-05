# Income, housing and family documents

Reviewed on 2026-09-05 against `legal-explanatory-writing`.

## Questions and filled examples

Read the four complete guides and their rendered pages.

| Guide | Question answered | Filled example |
| --- | --- | --- |
| Income and funds | Which source, period and payment does each financial record establish? | Payroll and bank entries identify two salary payments and separate a one-off loan. The missing February payment is located in the March history. |
| Housing | Does the material establish an address, a right to use the premises, or housing costs? | Selected Polish lease clauses show the actual period, rent and separately charged utilities after the parties genuinely replace gratuitous use with paid rental. |
| Family evidence | Which document establishes status, the legal relationship and the circumstances of family life? | A completed evidence record explains two addresses during temporary work in another city. Both actual addresses remain in the case. |
| Civil-status record | How do the fields explain different surnames without changing old documents? | Selected fields from a fictional full marriage extract connect the surname before marriage with the surname after marriage. The example also requires matching the other identifying details. |

The financial and family specimens are working comparisons. The lease and marriage specimens are selected fictional fragments, not complete forms for signing or faithful visual reproductions. No client documents or identifying data were used. The civil-record guide links to the official blank forms; their field labels were checked against the ministry's published full marriage form. Its security design has not been reproduced or visually audited in this batch.

## Corrections and case integration

The income guide defines PIT-11, PIT-37, gross and net amounts, tax income, bank history and balance. It keeps remuneration, stable regular income and sufficient student funds distinct. The resident-income exception is tied to the specific case in art. 212 ust. 1 pkt 1, rather than every Blue Card holder. UPO confirms submission, not the correctness of every reported amount. No current monetary threshold was introduced.

The housing guide distinguishes meldunek, najem, użyczenie and tytuł prawny. It preserves the full statutory family list for gratuitous use in a resident case, including siblings, which the shorter UdSC FAQ list omits. Family accommodation and student housing costs retain their own roles. The example requires actual paid rental and keeps the earlier agreement in the record; it does not suggest changing a document's title or date to evade a condition.

The family guide distinguishes the Polish-spouse and foreign-family provisions, the sponsor's decision and card, and the scope of the qualifying relationship. It explains the six-month protection exception and the different Blue Card mobility exception: the latter does not remove the insurance condition. Different addresses prompt a factual explanation, not an automatic finding of a sham marriage.

The civil-record guide distinguishes the registry entry from an issued extract, current abbreviated content from the history in a full extract, and birth surname from surname immediately before marriage. It separates the issue date from the event date and treats Podlaski UW's three-month document instruction as local published guidance, not a universal expiry rule. Translation, authentication and transcription remain separate questions. A self-printed electronic extract is not described as a paper USC extract.

The family case mentioned income, insurance and housing in prose but lacked corresponding document rows. Added three shared conditional definitions to qualification, filing, evidence and the register, with typed document destinations and scoped legal references. The financial rule points to art. 163. This is a focused integration fix; the complete family case remains pending writing and coverage review.

## Official sources checked

Checked on 2026-09-05:

- [Foreigners-act publication](https://eli.gov.pl/eli/DU/2025/1079/ogl) and [reading text dated 2026-04-07](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 158, 159, 163 and 169 for family qualification, exceptions, income and marriage circumstances; art. 211, 212 and 219a for resident income periods and housing. The art. 159 exceptions were read individually. The MOS activation check for the relevant 2026 changes is recorded in batch 05; this batch does not introduce a new filing regime.
- [UdSC resident guidance](https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2): longer-term income assessment, fluctuations and housing evidence. The exact statutory income exception and full family list take precedence over the abbreviated FAQ wording.
- [Podlaski UW study guidance](https://www.gov.pl/web/uw-podlaski/studia): financial documents, their issue dates and housing costs. Its numerical minima and paper-filing instructions were not copied.
- [Podlaski UW family guidance](https://www.gov.pl/web/uw-podlaski/polaczenie-z-rodzina): examples of relationship, income, insurance and accommodation evidence and the stated three-month instruction for civil records. These examples are not treated as one compulsory package for every family category.
- [KAS guide to 2025 employment income for Ukrainian citizens](https://www.podatki.gov.pl/poradniki-i-informatory/rozliczenie-dochodow-przychodow-uzyskanych-w-2025-roku-z-zatrudnienia-w-polsce-informator-dla-obywateli-ukrainy): payer information and annual PIT-37/PIT-36 returns. The guide does not expand into individual tax-residence advice.
- [KAS UPO instructions](https://www.podatki.gov.pl/narzedzia/jak-pobrac-urzedowe-poswiadczenie-odbioru-upo), updated 2026-08-03: reference number, processing status 200 and submission confirmation.
- [Prawo o aktach stanu cywilnego, Dz.U. 2026 poz. 393](https://eli.gov.pl/eli/DU/2026/393/ogl) and [official consolidated text](https://eli.gov.pl/api/acts/DU/2026/393/text/T/D20260393L.pdf): publication status, the legal-state date of 2026-03-09, art. 2, 44, 48 and 104. The current publication replaces the older consolidated citation. The ELI reading-text URL was unavailable; the PDF linked from the publication supplied the official text.
- [Current gov.pl extract service](https://www.gov.pl/web/gov/uzyskaj-odpis-aktu-stanu-cywilnego-urodzenia-malzenstwa-zgonu): extract types and electronic versus paper form. Its older legal citation was checked against the current act separately; older ePUAP service instructions were not copied.
- [Ministry of Digital Affairs blank forms](https://www.gov.pl/web/cyfryzacja/wzory-blankietow-odpisow-aktu-stanu-cywilnego), including the [full marriage form](https://www.gov.pl/attachment/3dca0041-e2a2-4258-bdd9-1f180423528e): personal data, birth surname, post-marriage surnames and additional entries.
- [Official KPA text](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf): collection and assessment of the full body of evidence under art. 77 and 80.

These checks support the edited topics. The atlas baseline remains 18.07.2026. No corpus edition was promoted and no independent legal-review attestation was added. The complete amendment and transitional-rule audit remains pending.

## Verification

- Final `npm run verify` passed after all content edits: typechecks, generated-data checks, lint, formatting, 91 application tests, 69 corpus tests (68 passed, one skipped), 15 review-tool tests, editorial checks and production build. Existing font-parser and bundle-size warnings remain.
- Inspected all four filled examples at desktop and 360 px widths. The page width matched the viewport content width. Wide tables remained in their own scrolling regions; the income table moved 80 px using keyboard arrows.
- Checked section anchors on the housing, civil-record and family pages. Related-document keyboard navigation opened the family evidence guide from the civil-record guide.
- Keyboard navigation followed the family document's usage link into the case, then followed the income link from the qualification stage back to its guide. The income guide's expanded usage list includes the family case.
- Expanded all three affected case-stage document disclosures. Each contains income, insurance and housing links with the expected destinations. The qualification stage visibly retains the conditional labels and exceptions. The register uses the shared definitions too.
- The family case fitted both desktop and mobile widths. The verification tab's browser console error log was empty.

Writing acceptance covers only the four complete document-guide files.
