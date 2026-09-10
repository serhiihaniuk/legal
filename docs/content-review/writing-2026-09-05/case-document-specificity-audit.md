# Case document specificity audit

Reviewed 10 September 2026, before the new ZUS destinations were registered. This is a source-code and runtime navigation audit, not acceptance of the legal accuracy of every case.

## What was checked

Loaded the canonical `caseGuideRoutes` through Vite SSR, inspected each route's document register, stage documents, nested typed evidence references and referenced catalog entries. Read the relevant document guides and the case profiles that select a concrete example.

The snapshot contained nine routes, 332 register rows and 67 catalog documents. Nested case references reached 66 distinct document IDs. Every referenced ID resolved. Every stage document appeared in its route register. These checks establish link integrity, not that the destination explains the requested document.

| Route | Register rows | Main specificity finding |
| --- | ---: | --- |
| `cukr` | 29 | No comparable umbrella failure in its core packet. Its PESEL history, application, fees, UPO and notification already have identifiable purposes. |
| `work` | 39 | Current personal insurance leads to the whole ZUS collection; payroll and employer checks lead to broad collections. |
| `blue-card` | 40 | Same ZUS/payroll issue; its experience-only example leads to a qualifications collection beginning with a graduate diploma. |
| `student` | 37 | The actual bank certificate in the example leads to the whole income collection. |
| `business` | 41 | A single ZUS row combines individual reports, salary payments and company debt. Registry and economic-proof rows also hide separately obtained materials. |
| `family` | 38 | Sponsor's residence decision and evidence explaining two addresses are combined in one family collection. |
| `permanent` | 34 | Mostly identifiable conditional evidence; the linked filing-certificate guide does not cover its own permit category. |
| `long-term-eu` | 36 | History ZUS, tax records, employer earnings confirmation and bank history need concrete destinations. Filing-certificate category mismatch also applies. |
| `other` | 38 | The graduate's diploma and the particular insurance policy with extension lead to broad collections. |

All paths below are relative to the repository. Case object keys are stable locators; line numbers would change during the concurrent rewrite. Stage names are the actual `CaseGuideStageId` values.

## Highest-priority document choices

### ZUS is several independently obtained documents

| Case object in `app/data/case-guides/editorial/*/documents.ts` | Stages | Existing target and problem | Concrete destination needed | Conditionality to preserve |
| --- | --- | --- | --- | --- |
| `residentDocuments.zus` in `resident` | `evidence` | `zus-confirmation`, even though the row needs personal historical periods and monthly bases | Issued personal ZUS certificate/information for the defined period, requested through US-7; distinguish the request from the response | Evidence for the employment/insurance facts in this example; do not make US-7 a universal statutory attachment |
| `workDocuments.zus` | `evidence` | Same collection, but the requested fact is existing personal health-insurance registration | Current personal insurance confirmation from eZUS or the appropriate issued confirmation | Only where proving existing public insurance; preserve the separate future-employment rule already explained in the case |
| `blueCardDocuments.zus` | `evidence` | Same collection for present personal coverage | Current personal insurance confirmation | Only when insurance runs through ZUS; do not substitute the ordinary work-permit future-insurance rule |
| `businessDocuments.contributions` | `evidence`, `procedure` | “Відомості ZUS, виплати та стан розрахунків компанії” points to one ZUS collection | Separate named-worker monthly RCA information for the employment-year example, wage-payment evidence, and payer no-arrears certificate if debt is actually being checked | The first supports the selected employment evidence; debt certificates or deferment/installment decisions arise from a separate issue, not automatically in every case |

The new ZUS overview improves understanding but does not solve these links by itself. A reader arriving from a current-insurance row should not first have to select history, RCA or payer debt. Keep the overview as an explanation of the family of documents. Case rows should open the concrete document.

Official distinctions were verified in [US-7](https://www.zus.pl/en/-/wniosek-us-7), [personal insurance-history service](https://www.zus.pl/en/-/jak-uzyskac-zaswiadczenie-o-przebiegu-ubezpieczen-spolecznych), [eZUS confirmations](https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych), [RCA/DRA reporting](https://www.zus.pl/en/firmy/rozliczenia-z-zus/dokumenty-rozliczeniowe), and [payer no-arrears service](https://www.zus.pl/en/baza-wiedzy/katalog-uslug/katalog-uslug-firmy/rozliczenia-skladek/rozliczenia-na-koncie-platnika/zaswiadczenie-o-niezaleganiu-w-oplacaniu-skladek).

### Income and available money are different document requests

The existing `income-evidence` guide is useful as a comparison article. It covers PIT-11, a submitted annual PIT, payroll, bank history, an employer certificate and student funds. These have different issuers, periods and evidentiary roles. A broader title in a case row does not select the needed one.

| Exact case key | Stages | What the example or request actually needs | Recommended change |
| --- | --- | --- | --- |
| `residentDocuments.income` | `filing`, `evidence`, `procedure` | Income history over its defined period; the worked defect is June payroll and the matching July bank payment | Separately identify employer employment/earnings confirmation, monthly payroll information, bank transaction history, and applicable submitted annual PIT with submission proof. Tax-authority income confirmation, if requested, is another document, not PIT-11. Keep the period and source of income explicit; do not require every listed proof in every resident case. |
| `workDocuments.income` | `evidence` | Payroll calculation and actual salary payments for specified months | Open payroll information and bank payment/history guidance. A student bank-balance certificate or PIT overview is an unnecessary choice here. Preserve conditional status when work is already performed or payment is checked. |
| `blueCardDocuments.income` | `evidence` | Actual payroll/payment comparison | Same concrete pair, conditional. Do not replace the contractual annual gross remuneration test with net transfers. |
| `studentDocuments.money` | `filing`, `evidence`, `procedure` | The example uses a bank certificate dated 12.08 showing 50,000 zł after tuition payments | Select the bank funds certificate as the actual document. Scholarship, credit-limit and employer earnings certificates are alternatives for other financing facts, not additional mandatory rows. Its issuance-date/bank requirements must remain attached to this study use. |
| `businessDocuments.money` | `filing`, `evidence` | Personal income and legal basis of remuneration, separate from company funds | Identify the actual remuneration basis, for example the relevant company resolution if that is the authored fact, then earnings calculation and payment evidence. Do not silently make it an employment contract. The case should name the selected basis before choosing the document. |
| `familyDocuments.income` | `qualification`, `filing`, `evidence` | Husband's income supporting two persons | State the actual source and use its employer/payroll/payment documents where it is employment. Preserve the route's statutory exceptions. Do not infer a contract type from the word income. |
| `otherDocuments.funds` | `filing`, `evidence` | Available maintenance/return funds for the graduate | Choose the actual funds document after the case identifies its financing. Do not route a savings proof through an article focused first on salary history, or import the resident's multiyear income test. |

Suggested new document boundaries are employer employment/earnings certificate, payroll information, bank transaction history, bank funds certificate, and tax income documents. PIT-11 and the taxpayer's annual return should remain distinguishable even if one tax-guide overview connects them. Avoid generating one guide per bank, payroll provider or PIT form without an actual reader need.

## Other concrete mismatches

| Exact key | Stages | Finding and bounded correction |
| --- | --- | --- |
| `blueCardDocuments.qualifications` | `qualification`, `filing`, `evidence`, `procedure` | The profile explicitly has no diploma and proves programmer experience. Its row says education OR experience and opens `qualification-evidence`, whose first section is a Polish graduate's diploma. Give this example the employer's professional-experience confirmation with dates, duties and supporting employment records. Keep higher education as an alternative outside this packet. A professional licence is a separate conditional branch. |
| `otherDocuments.diploma` | `qualification`, `filing`, `evidence`, `decision` | The row already names a completed Polish higher-education diploma, but opens the same mixed qualifications guide. A diploma document destination can carry the current completed example and distinguish completion date from issue date. |
| `workDocuments.qualifications`; `businessDocuments.qualification` | `qualification`, `evidence` | These need a regulated-profession admission/recognition document when applicable, not the graduate/Blue Card collection. Keep conditional. Do not invent one universal licence covering all professions. |
| `familyDocuments.sponsor` | `status`, `qualification`, `filing`, `evidence`, `procedure`, `decision` | Its label explicitly combines the husband's status and evidence of family life. For this example, link his permanent-residence decision and card using the existing `administrative-decision` and `residence-card` destinations. Separate the explanation of two addresses and its housing/temporary-work materials. Keep `family-evidence` as the explanation of how those facts fit together, not the only document link. |
| `businessDocuments.registry` | `qualification`, `filing`, `evidence`, `decision` | `business-register-information` explains KRS/CEIDG but the row also promises share ownership, appointment and representation documents. For the actual spółka, identify KRS information, the relevant share/appointment document, and authority for the particular signature. Do not label all of these “KRS”. Separate documents are conditional on the fact not established by the register. |
| `workDocuments.company`; `blueCardDocuments.company` | `qualification`, `evidence` | KRS/CEIDG is a legitimate choice by business form. Extra signer authorization is separately obtained if needed. The existing procedural `power-of-attorney` guide should not automatically be reused for company authority without checking its scope. |
| `workDocuments.business`; `blueCardDocuments.business` | `evidence` | Both point to `business-evidence`, which begins with the entrepreneur's art.142 economic alternatives. The case needs employer activity or refusal-related facts. Name the requested employer document: a relevant fulfilled order/accounting record, tax no-arrears certificate, ZUS no-arrears certificate, or relief decision according to the actual issue. Do not impose the entrepreneur's twelve-salary/two-worker test on an ordinary employer. |
| `businessDocuments.business` | `qualification`, `filing`, `evidence`, `procedure` | The actual case selects a year of two eligible employees, while the destination also covers company income and business plans. Keep an explanatory comparison at group level, then concrete employee contracts, eligibility facts, monthly records and payments in the selected packet. Do not add a compulsory business plan or annual company income document when this alternative is already the chosen one. |
| `otherDocuments.insurance` | `filing`, `evidence`, `procedure` | The worked case is specifically a private policy plus an already-issued, paid extension and insurer confirmation. Open that document set directly. Current ZUS registration is not an alternative explanation of the defect shown in this example. |
| `permanentDocuments.certificate`; `residentDocuments.certificate` | `procedure` | The cases cite their own certificate provisions, but `proceeding-certificate` describes the temporary-stay art.108 certificate and its official form, then generic KPA certificates. Add the correct category-specific certificate explanation/form or a correctly selected variant. This is a destination-content mismatch, not merely an unattractive title. Verify the permanent/resident forms before implementing them. |

The shared temporary-stay `certificate` is used by work, Blue Card, student, business, family and other routes at `procedure`. Its present guide does cover that special filing certificate. The ordinary KPA certificate should remain distinguishable, but those six case links do not need six duplicate guides.

## Broad explanations that should remain

A useful overview and a precise case destination can coexist. These are not reasons to create a new document for every alternative:

- `status-documents` explains how decisions, visas, cards and filing evidence fit together. At the actual case step, use the known permit decision/card or visa directly. The `visa` document already exists but had no nested typed case reference in this snapshot. Work/Blue Card use current work permits; student/family/business use visas; resident uses historical study/work decisions; other uses the current student decision. Permanent's chosen current document must be established before selecting its link.
- `health-insurance` remains a valid explanation of public and private coverage. For a concrete example select the relevant confirmation or full policy. Do not require public and private insurance together. Family-member registration requires the applicant's inclusion to be visible, not merely the sponsor's insurance.
- `housing-evidence` legitimately compares lease, other rights of use and expense evidence. Student's housing-cost calculation differs from resident's title to premises. Existing rows mostly name this distinction correctly. Select the actual lease in examples; do not turn every alternative into a mandatory new attachment.
- `civil-status-record` can explain marriage and birth records together. Family's row already selects `Odpis aktu małżeństwa`; permanent/resident civil-status rows are conditional on which relationship is legally relevant. No automatic requirement to split all civil records into separate guides was found.
- `polish-language-proof` has statutory alternatives. A visible case label can name its selected state B1 certificate without making every other permitted document mandatory.
- `study-confirmation`, `study-progress`, `tuition-payment` and the dedicated MOS study annex already distinguish acceptance, progress, payment and the signed institutional annex. Payment versus a statement of free study is a legitimate alternative, not two cumulative requirements.
- `work-organisation-evidence`, `settlement-intention`, `job-search-evidence` and `deadline-obstacle` concern facts established through variable materials. They should explain which fact each material shows; they are not single universally issued certificates.
- Application types, application annexes, fees, procedural decisions, appeals, service/submission evidence and working notes mostly have usable dedicated destinations. A fee receipt does not need one new guide per amount; service evidence does not need one new guide per delivery provider.

CUKR's register avoids the specific ZUS/income failure. `cukrDocuments.correction` is an action with `guidance: pesel-ukr-confirmation`, not a purported document. Its status history and passport correction are already separate from the application and payment documents. The final card row bundles readiness information and receipt date for explaining a sequence; these are related controls rather than an unidentified initial attachment.

## Suggested implementation order and acceptance

1. Finish the ZUS split and repoint its four case uses by actual purpose.
2. Separate the resident's employer certificate, tax evidence, payroll and bank history. Reuse those concrete destinations for work, Blue Card and family where the facts match.
3. Add the bank funds certificate and select it for the existing student example; resolve the graduate's financing facts before changing its link.
4. Separate professional-experience confirmation from the diploma and regulated-profession branch.
5. Correct sponsor/registry compound rows and permanent/resident filing certificates.
6. Keep overview articles as explanations, with navigation to the concrete materials. Do not use an overview as the sole destination of a row naming an independently requested document.

For each migrated row verify: exact document name; issuer; person/company concerned; reporting period; required versus conditional status; whether the record is an application, draft, submitted report or issued answer; and the fact it does not prove. Check the case's worked example against the document example. Avoid displaying unrelated examples at the top of the destination.

The current type system verifies that a target ID exists. It does not verify that a label promising a personal ZUS history links to that history, or that a compound row contains every promised document. Add bounded semantic coverage for the migrated rows: expected concrete IDs by case key and stage, plus a check that explanatory collections cannot silently substitute for a specific required document. Preserve natural alternative evidence and explicit action guidance rather than banning every collection link.

No product files were changed for this audit. The checks above ran on the live working-tree data; concurrent subsequent edits should be compared against this snapshot. New document recommendations are editorial boundaries, not declarations that every named form is legally mandatory.

## Implementation checkpoint, 10.09.2026

The resident pilot and document split were delivered in `8000dfe`. Batch 61 applies explicit document actions to all six ordinary-work stages. Known decisions/cards, contract and aneks, personal current eZUS, and conditional payroll/bank evidence now have specific labels and destinations. Repeated rows identify review, updating or the requested original, rather than another complete submission.

Batch 62 corrects the filing-certificate destination for permanent residence and EU resident status. One guide now explains the three statutory forms and the two case rows name their own variant. These label corrections do not migrate the remaining permanent-residence stage lists. Business, family, student and graduate distinctions above remain open.

Batch 63 completes the Blue Card migration with six explicit lists. Current/previous/new contracts, original/clarified experience letters, the applicant annex and personal eZUS have distinct roles. Conditional payroll and bank records remain outside the selected response packet. The new experience guide supplies the precise destination that the diploma-led overview could not provide. Independent review and responsive navigation checks passed.

Batch 64 migrates the student case. It selects the issued bank funds certificate, separates both tuition receipts, university allocation confirmation, future fee schedule and working budget, and makes the lease/private-policy facts explicit. All six stages distinguish new attachments from reuse. The existing tuition, housing and insurance guides remain broader destinations; focused catalog coverage is still an improvement item. Business, family, graduate and permanent-residence stage migrations remain open.

Batch 65 completes business with six explicit document-use lists, three new corporate guides, distinct employee periods and personal paid-appointment income/insurance. Both contracts were filed initially; B's missing nine reporting months are added in the reply. Untriggered CRBR and qualification packets are excluded. Independent content review and desktop/mobile checks passed. Family, graduate and permanent-residence migrations remain open, as do the narrower catalog destinations recorded above.

Batch 66 completes the family migration. Husband's decision/card and employment records, wife's visa and paid private policy, and the signed family-home lease have explicit destinations. The reply adds a work-location confirmation and rent payments; initial records are reused. Three focused guides explain the policy, lease and employer confirmation. The paper-abroad packet remains a separate alternative. Independent bounded review and full application checks passed. Graduate and permanent-residence migrations remain open; earlier insurance/housing references still need their concrete destinations reconciled.
