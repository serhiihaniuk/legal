# Batch 61: concrete documents in the ordinary work case

## Reader question

The reader needs to know which documents are actually used in the employment example and whether their later appearance means another submission. The selected facts concern continued employment with company A, a contractual change from 5,500 to 6,000 zł gross, filing on 03.08.2026 and a response on 18.08.2026 to a request for the original aneks and insurance evidence.

## Scope and review

This batch migrates the ordinary work case to the accepted resident document-use model. It does not migrate the remaining cases or declare every document in their registers mandatory. The source audit separates statutory filing attachments, substantive evidence, internal checks and documents obtained after filing.

The independent pre-edit audit identified the known previous decision and card hidden behind a status collection, current personal insurance hidden behind the ZUS collection, and the missing substantive attachments in the response-stage list. It also identified the need to distinguish the contract amendment from the employer's application annex.

All six stages now display their document lists directly. Each of the 60 uses states whether the reader prepares, submits, reviews or updates the material. The initial packet contains scans of the contract and aneks. The later response contains the requested original aneks and current personal eZUS confirmation. July payroll and a matching August bank transaction remain conditional inquiries outside the example's two requested attachments. KRS describes the selected company, while organisation and professional-qualification questions remain conditional explanations.

A separate reviewer read the final four authored files and checked the packet against the example's dates, amounts and official sources. The review accepted the contract/aneks distinction, submission timing, conditional evidence and absence of duplicate fees. Root's mobile check then corrected the passport title so a reference to the original passport is not labelled as scans; the filing instruction still specifies digital copies of every page.

## Sources checked on 10.09.2026

- https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf: articles 106d and 106f separate formal attachments from evidence; article 114(4a) covers insurance arising through employment; articles 117 and 117a govern employer-related issues without importing the entrepreneur's article 142 financial alternatives.
- https://www.gov.pl/web/udsc/info-mos: official filing instructions and the electronic application channel.
- https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych: current personal insurance confirmation and its identified insured-person data.

No authenticated ZUS account was accessed. This is a scoped document-selection check, not a new global legal baseline.

## Verification

Full `npm run verify` passed with 41 application test files and 219 tests, script checks, corpus tests, editorial validation and production build. Reference preview validation passed. Regression coverage checks visible stage lists, the actual response packet, scans versus originals, specific document destinations and conditional evidence. Existing disclosure, checkbox and recovery tests remain on an explicit legacy fixture for the cases that still use that format.

Chromium checks at 1440 and 360 px showed six open lists, readable content, no page overflow and no browser errors. Filing and procedure links target the contract guide and personal eZUS confirmation. These are browser-emulation checks, not physical-device testing.

Accepted authored hashes: route `0ca32a33b47663715203da5721e5f30e608cb29a86fbf61dfe9952d432653234`; documents `58c679137130a51fc9c9b7959af30499f040a0cdaa188f165fe1632d8b497f07`; stages `1d561f0d8845996e9cc7a8fe31610834ee9ba60732343ad678df6a0de40d6e03`; reference `aa4f5a812e9c30566f1ecfc9da929c6123af4d90fbc717175030eb38b10d1046`. The reviewer accepted the final passport correction separately. Writing acceptance remains 183 of 1,813 files after batch 62; these batches renew existing reviewed files, rather than accepting unrelated files.

## Remaining work

Blue Card, business, family, student, graduate and permanent-residence document distinctions remain in the saved specificity audit. The resident and ordinary work patterns must be applied by actual facts rather than by mechanically replacing all collection IDs. The map/law writing, source-layout audit and whole-project independent legal acceptance remain open.
