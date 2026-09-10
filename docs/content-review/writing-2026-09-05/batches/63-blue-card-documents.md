# Batch 63: evidence in the Blue Card example

## Reader question

The programmer in this case has no diploma and relies on professional experience. The old qualification row sent the reader to a collection beginning with a graduate's diploma. Current insurance and payment checks also led to broad ZUS and income collections. The reader needed to identify the actual initial packet and the later clarification without choosing another document inside each destination.

## Scope

The case retains its ordinary residence/work permit through 30.09.2026, filing on 17.08.2026, experience from 01.09.2021 to 31.08.2024, new contract dated 12.08.2026 at 14,000 zł gross, demand served on 20.08.2026 and response on 01.09.2026. The evidence sequence distinguishes the first generic IT specialist letter from the clarified letter dated 27.08.2026. The applicant's signed qualification annex remains a separate document.

The migration applies explicit document actions to all six stages. A focused professional-experience guide explains the former employer's letter, the tasks and periods it establishes, its limits, and a completed fictional example. The existing qualification overview retains the alternative education and regulated-profession paths.

## Verification and acceptance

The case author and a separate read-only reviewer checked all four changed case files. The reviewer also read the complete new experience guide and the bounded change to the qualification overview. Acceptance covers this migration; it does not revalidate every historical claim in the case or the complete legal baseline. Exact writing hashes are recorded in reviews.json.

Checked on 10.09.2026:

- [Foreigners Act](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 3 pkt 6a, 106d, 106f, 127–129, 132 and 138a. Experience, insurance, contracts, salary, attachments and requested originals remain distinct.
- [Professional list](https://eli.gov.pl/api/acts/MP/2025/549/text/O/M20250549.pdf): programmer code 251401 and the relevant experience route.
- [GUS announcement](https://eli.gov.pl/api/acts/MP/2026/192/text/O/M20260192.pdf): 8,903.56 zł and the retained salary calculation.
- [Application forms](https://eli.gov.pl/api/acts/DU/2026/553/text/O/D20260553.pdf), pages 25–27: the applicant's qualification annex is a separate signed document.
- [MOS guidance](https://www.gov.pl/web/udsc/info-mos) and [personal ZUS confirmations](https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych): filing evidence and current personal insurance records.
- [Podlaski qualification guidance](https://www.gov.pl/web/uw-podlaski/wysokie-kwalifikacje): only the qualification explanation was used. The page mixes updated MOS material with an older attachment list; that list was not used to establish filing requirements.

The primary letter, its clarification and three employment contracts have different labels and roles. Initial filing includes the available evidence. The response adds the clarified letter and corrected applicant annex, and refers to previously submitted material. Conditional July payroll and bank records do not establish the new October salary. Requested originals remain required under art. 106f when applicable.

## Application verification

At 360×844 and 1440×1000, all six lists have visible rows (6, 9, 16, 14, 16 and 12), with no checkboxes or hidden document items. Pointer and keyboard activation of the clarified-letter reference opens the specific experience guide; its usage link returns to Blue Card. No page overflow or runtime errors. Screenshots remain local in output/blue-card-qa-case-mobile.png, output/blue-card-qa-case-desktop.png, output/blue-card-qa-guide-mobile.png and output/blue-card-qa-guide-desktop.png. Root also inspected the mobile specimen.

Type checks, registry checks, lint, formatting, 222 application tests and corpus tests passed. The first full verification stopped because the legal-review inventory and its count still expected 75 document guides. Updated the count to 76, added the new guide to the inventory regression check and regenerated stale ledger entries. All 15 review tests and baseline validation then passed. Regeneration does not grant independent acceptance.

Production build and reference previews passed, including all 76 document guides. Writing acceptance is 184 of 1,814 files. Global baseline remains 18.07.2026. Other case migrations, map/law writing, the corpus-wide visual audit and whole-project legal acceptance remain open.
