# Batch 65: business case document specificity

## Audit checkpoint

Read-only audit by a separate reviewer, 10.09.2026. No business product edits or acceptance yet. Student delivery checkpoint is 0c25241.

The selected case concerns a shareholder and board member of a sp. z o.o. relying on the statutory employment test. Do not turn every alternative company-income or business-plan document into a mandatory condition.

Findings to resolve before implementation:

- Split the combined registry/shareholding/appointment row into the actual KRS record, appointment resolution and selected shareholding record. CEIDG does not describe this company form.
- Separate employee A/B contracts, monthly RCA reports, wage calculations and actual payments. Current employment confirmations concern those employees. The applicant's own income is board remuneration, not automatically salary under an employment contract.
- Company ZUS non-arrears and tax-account material have separate subjects. They must not masquerade as employee history or become universal initial requirements.
- Make the actual initial packet and response explicit. The current business umbrella hides whether employee B's contract was already filed.
- Select the applicant's actual insurance basis explicitly. The existing example already uses a rental instrument for housing.
- Keep untriggered CRBR and regulated-profession materials conditional.
- Do not use a complete August 2026 RCA as an already-filed attachment to the application of 10 August or response of 28 August. For this company, the ordinary reporting deadline is the following month's 15th. Clarify the actual submitted periods and use other employment evidence for the current endpoint.

Possible factual clarification for source review: initial April–June 2026 filed reports; add missing August 2025–March 2026 and July 2026 reports in the response, with contracts/current-employment evidence for the period through filing. This is a proposed fictional packet, not an established statement in the current page. Do not implement without reconciling the full case dates and twelve-month condition.

The reviewer checked ZUS reporting timing at https://www.zus.pl/en/firmy/rozliczenia-z-zus/dokumenty-rozliczeniowe/termin-skladania-dokumentow-i-oplacania-skladek. Full source/mapping notes and implementation acceptance remain pending.

## Completed read-only mapping

The full audit identifies a national visa through 30.09.2026 and an existing issued corporate work permit through 31.12.2026. Review that permit for current work; this residence application does not request it again. The shareholder owns 40%; choose the actual shareholding record before drafting. The selected employee contracts are indefinite and full-time, with no established amendments.

Proposed initial 10.08 packet: application/company annex, passport/photo, selected corporate records, both A/B employment contracts, evidence of the qualifying employee category, A's historical records, B's selected three RCA months, the applicant's own remuneration/insurance/residential lease and appropriate fees/representation. Preserve the incomplete B history. The 18.08 summons has a 01.09 deadline. In the 28.08 reply identify B's missing months, wage/payment evidence and current employment confirmation; reference the initial contract unless a new copy or original was actually requested.

RCA does not establish citizenship or actual payment. Current employment confirmations supplement contracts/history and should identify dates, full-time/indefinite terms and continuing employment. The applicant's remuneration resolution and personal payment records have a different subject. Office rent does not establish his residential costs. UPO and the proceeding certificate are later outputs, not initial attachments.

Source evidence checked by the independent reviewer:

- [Current foreigners statute](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), pp. 181–184: art. 142(3), selected employment alternative under art. 142(1)(3)(a), separate refusal checks under art. 143(2) and work boundaries under art. 143a.
- [Podlaski business guidance](https://www.gov.pl/web/uw-podlaski/dzialalnosc-gospodarcza): employment contracts and ZUS records as examples only. The page mixes branches and older filing instructions; do not import its whole list or regional-income wording.
- [ZUS report descriptions](https://www.zus.pl/firmy/rozliczenia-z-zus/dokumenty-rozliczeniowe): individual RCA versus aggregate DRA.
- [ZUS no-arrears certificates](https://www.zus.pl/firmy/rozliczenia-z-zus/zaswiadczenie-o-niezaleganiu): payer account, not employee history.
- [CRBR](https://www.gov.pl/web/finanse/centralny-rejestr-beneficjentow-rzeczywistych): beneficial ownership, not replacement corporate representation evidence.
- [Work Act](https://eli.gov.pl/api/acts/DU/2025/621/text/O/D20250621.pdf), art. 35–39: keep the existing corporate work permit's economic test separate from this residence application.

Before authoring, select the actual initial RCA months, shareholding record, personal remuneration documents and insurance basis. The business files remain unchanged and unaccepted at this checkpoint.

## Completed migration and acceptance

The audit above records the starting state. The migration is now complete for this selected fictional case. The three initial B months and nine missing months were explicitly adopted, with July reports already submitted to ZUS on 07.08.2026. No completed August report is invented. Both employee contracts are initial attachments. Employment confirmations cover the filing endpoint independently of monthly reports.

The six stages have 5, 10, 27, 15, 20 and 13 visible document-use rows. Each row names the actual material and whether it is reviewed, prepared, submitted, updated or shown as an original. The reply adds the missing B records; it refers to previously filed contracts and personal documents. Conditional remedies and missed-deadline evidence remain conditional. CRBR and professional-qualification packets are absent from the selected example. Company no-arrears evidence is a separate conditional item, absent from initial submission and the reply.

Three new document guides explain appointment, shareholding and board remuneration. Each includes a completed fictional Polish fragment, issuer/competence, obtaining the document, relevant dates and evidentiary limits. The guide examples are expressly separate from the case facts. Payment records do not become employment contracts, and share capital does not become personal income.

Personal health insurance is selected explicitly: paid appointment without a separate employment or mandate contract, a national visa issued for work, and Polish legislation applying to the applicant. Employee A/B contributions do not establish his own insurance. The applicant's residential lease is separate from office premises.

Additional official sources checked on 10.09.2026:

- [Current KSH](https://eli.gov.pl/api/acts/DU/2024/18/text/U/D20240018Lj.pdf), art. 187–188, 201–205, 210, 247–248. The separate reviewer read the full guides and source provisions. Root verified the current list-signature and remuneration provisions directly.
- [Health insurance act](https://eli.gov.pl/eli/DU/2025/1461/ogl), art. 3(1)(2) and 66(1)(35a), together with [ZUS paid-appointment FAQ](https://www.zus.pl/o-zus/o-nas/programy-transformacji-cyfrowej-zus/zmiany-od-2022-r./faq). The work-purpose visa is an explicit factual condition, not inferred from permission to work.
- [ZUS personal confirmations](https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych) for the selected current registration document.

Independent full-content acceptance covers the four business files and three new guides. Exact final hashes are stored in reviews.json. The final reference.ts hash is 89589adbb9f3869271608bf4c6780c95a5ca845892c2241a6034c25ee842fb3d after merging duplicate source entries; the reviewer accepted that delta separately. The merged note preserves both verification scopes and dates.

## Verification and remaining limits

Full npm run verify passed: type checks, generated registry checks, lint, formatting, 41 application test files with 230 tests, 68 passing corpus tests with one existing skip, 15 review tests, editorial validation and production build. Reference previews and baseline ledger validation passed. The final source merge received another 22-test coverage run, typecheck and build. The unique-source assertion prevents the duplicate URL that caused a React key warning.

Browser checks at 360 × 844 and 1440 × 1000 passed for the six lists, three guide links, return backlink and Polish specimens. No page overflow. The duplicate source warning was reproduced, fixed and cleared on a fresh load. Root inspected the mobile remuneration specimen. Screenshots are local QA artifacts under output/business-qa-* and are not committed.

Writing acceptance is 188 of 1,818 files; the document catalog has 80 guides and the knowledge registry 194 units. Generated review ledgers were refreshed without granting new whole-project legal attestations. The global baseline remains 18.07.2026; this source check is scoped to 10.09.2026.

Remaining work includes the family, graduate and permanent-residence stage migrations; narrower insurance, housing and tuition destinations; broader map/law writing; original-PDF layout audit; and full independent legal acceptance. The existing corporate-work-permit and business-evidence guides were not reaccepted wholesale by this batch. A company-side executed-payment specimen would improve the current bank-statement guide, whose existing detailed example concerns personal receipts.
