# Batch 64: student documents and the financial calculation

## Audit before authoring

A separate read-only reviewer inspected the full student route, register, six stages and relevant document destinations on 10.09.2026. This audit is not acceptance of the student module. Authoring and bounded independent review are complete. Verification results appear below.

The case keeps the national visa through 30.09.2026, first-year full-time master's programme from 01.10.2026 through 30.09.2028, filing on 17.08, demand served on 20.08 and response on 01.09. The two tuition payments are 3,000 zł each on 05.08 and 10.08. The 12.08 bank certificate shows 50,000 zł after both payments. Housing costs are 1,200 zł monthly. The existing financial calculation totals 49,000 zł.

## Required changes

- Link the selected visa directly to its guide.
- Add a focused issued bank certificate of funds guide. Transaction-history statements and PIT are different documents.
- Distinguish the first submitted transfer confirmation, the omitted second confirmation, the university's allocation confirmation and future fee schedule.
- Clarify the fictional housing and insurance instruments explicitly. The author may select a signed lease at the existing all-in cost and a private policy covering treatment in Poland. This is a clarification of fictional facts, not evidence that the old text specified those documents. Do not infer ZUS employment.
- Keep the institution's signed MOS annex distinct from conditional supplementary study confirmation. Progress records are not initial attachments before classes start.
- Give all six stages visible document actions. Preserve the imperfect initial submission; identify actual new response attachments and reuse existing materials without implying automatic duplicate submission. Requested originals remain separate.
- Correct the shorter-study exception under art. 145(2): it refers to the period in ust. 1, ordinarily 15 months here, not one year.
- State the exact 15-month budget interval and fee-schedule entries behind the existing 12,000 zł future tuition figure.

## Audit sources

- [Foreigners Act](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), pp. 185–186 and 195: art. 144 and 145, financial/insurance conditions and permit duration.
- [Financial regulation, Dz.U. 2022 poz. 78](https://eli.gov.pl/api/acts/DU/2022/78/text/O/D20220078.pdf), §§ 2–4: eligible bank certificate, issuer, freshness and applicable 2,500 zł return amount.
- [UdSC university Q&A](https://www.gov.pl/web/udsc/qa-dla-uczelni), questions 1, 8, 14 and 16: electronic annex and academic-results information.

## Acceptance

A separate reviewer read all four final student files and accepted their exact hashes without blockers. Root inspected the changed filing/response sequence and financial explanation. The bank guide and bounded overview delta were accepted separately. Writing hashes are in reviews.json. Global baseline remains 18.07.2026. This is not whole-project legal acceptance.

## Bank guide review

The author and a separate reader completed the new bank-funds guide and the bounded income-overview delta. Independent source review found no blocker. Final SHA-256 values before runtime verification:

- bank-funds-certificate.ts: b79c481b86e5c3c0e8c2967a53fc01d1b8eac5a954183182f2a647e50e824306
- income-evidence.ts: 8bdd45d3c687df7c9988bea2fceecdf08737e615b6c1506d61ad751da0470acf

The new guide distinguishes the issued certificate from transaction history and payment proof. It explains eligible institutions, the filing-date rule, currency conversion and reuse of the 12 August certificate in the 1 September response without claiming a new balance date. The fictional Polish specimen preserves both tuition payments and the 50,000 zł available amount. The unrelated PIT overview text remains unchanged.

The reviewer also checked [PKO BP certificate ordering](https://www.pkobp.pl/klient-indywidualny/aplikacja-iko-ipko/dyspozycje) and [PKO BP balance definitions](https://www.pkobp.pl/klient-indywidualny/aplikacja-iko-ipko/centrum-wsparcia-bankowosci-elektronicznej/korzystanie). Those pages support the attributed bank-service example and distinction between available funds, accounting balance and blocks. These are instructions for that bank, not a universal banking interface.

The student-case audit additionally identified an old personal-appearance consequence. Art. 106i concerns umorzenie postępowania with statutory preconditions and exceptions. The correction must be checked together with the summons under art. 106e.

## Completed migration and checks

All six stages now identify the action for each document. Tuition has four named records; the old first receipt remains in the file, while the second receipt, university allocation confirmation, future schedule and applicant calculation are submitted on 1 September. The issued bank certificate remains a separate document. The private policy and lease are explicit fictional choices, not inferred employment or ZUS coverage.

Corrected the art. 145(2) period and art. 106i consequence. The completed budget covers 01.10.2026–31.12.2027, with future fees of 6,000 zł in March and October 2027. Its 49,000 zł total is illustrative; earlier expenses, later spending and the actual decision period can change the result. The text states those limits.

Type checks, knowledge/source registries, lint and formatting passed. The application run passed 224 tests and found one obsolete catalog expectation linking the student to income-evidence. Replaced that expected destination with bank-funds-certificate and reran the complete catalog test file successfully; all 225 application tests are accounted for. Corpus checks, 15 review tests, editorial validation, production build and reference previews passed. Preview coverage includes 77 document guides. The legal-review inventory was regenerated without granting new legal acceptances, and baseline validation passes.

At 360×844 and 1440×1000, browser review found six visible lists with 4/7/14/12/21/13 rows, no checkboxes or hidden rows, and no page overflow or runtime errors. Local screenshots: output/student-qa-case-mobile.png, output/student-qa-case-desktop.png, output/student-qa-bank-mobile.png and output/student-qa-bank-desktop.png. Root inspected the mobile response list. Pointer and keyboard navigation opened the concrete bank guide; its usage-context link returned to /cases/student. Direct routes and the specimen were readable. The reviewer closed the dedicated browser session. A further mobile specimen screenshot is output/student-qa-bank-specimen-mobile.png.

Writing acceptance is 185 of 1,815 files. The case now names its exact materials, but tuition, housing and private insurance retain existing broader guide destinations. Their focused-guide coverage remains a separate improvement item. Business, family, graduate and permanent-residence stage migrations, map/law writing, original-source visual fidelity and full legal acceptance remain open.
