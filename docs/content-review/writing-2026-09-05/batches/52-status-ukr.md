# Batch 52: status UKR, records and continuity

Rewrote /map/ukr-baseline-2026 as a standalone six-section article. It distinguishes temporary protection, the PESEL identifier, current UKR data, historical continuity, identity confirmation, employment notification and the choice of a residence permit. The article remains in the chapter about the person and current stay. The companion UKR/CUKR/ordinary-permit comparison remains in the permit chapter and is next for review.

Replaced the vague instruction to update a photo by August with the two separate statutory rules. A completed four-row comparison follows two fictional workers with similar July confirmations but different original identification evidence and different September records. It establishes what follows from the verified facts without treating NUE as proof that every possible residence basis is absent.

The source review found a newer EU extension and a material corrigendum. The page now explains the protection horizon of 4 March 2028, the additional year's application from 5 March 2027, and the corrected dates of 4 and 5 August 2026 for the continuity exception and the military-obligation requirement. It does not describe a proposal or press release as the legal act. It distinguishes correction of a mistaken register entry from new acquisition after an actual loss of protection.

## Source scope

Checked on 10 September 2026:

- [Polish protection act, compiled text dated 18 March 2026](https://eli.gov.pl/api/acts/DU/2025/223/text/U/D20250223Lj.pdf): definition of a beneficiary; articles 106, 109a, 109b and 110a. Residence basis, exclusions, cessation events, international-protection distinction and registration deadline. The compiled text incorporates 2026/203.
- [Transition act, Dz.U. 2026 poz. 203](https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf): articles 24(1)(2), 25, 26, 41, 45 and 54. Existing UKR transition, statement-based identification versus other identity documents, work for lawfully staying Ukrainian citizens outside temporary protection, eligible permit categories and commencement. ELI identifies the act as in force from 5 March 2026 with listed exceptions.
- [Council Implementing Decision (EU) 2026/1912](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32026D1912): original articles 1–3, publication on 4 August and entry into force on 5 August 2026. EUR-Lex marks the act in force and corrected.
- [Corrigendum, OJ L 2026/90680](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32026D1912R(01)): the continuity cutoff changes from 30 July to 4 August; application of article 2 changes from 31 July to 5 August. Read the published correction and checked it against the [consolidated text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02026D1912-20260804). Web extraction encountered a JavaScript check, so these texts were read through the normal browser after it loaded the official pages.
- [Employment act, compiled text dated 17 June 2026](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf): articles 3(1)(12) and 5a. Right to work, separate notification, specified changes and system-failure qualification. No full employment review is claimed.

The [UdSC extension notice dated 6 August](https://www.gov.pl/web/udsc/przedluzenie-ochrony-czasowej-do-4-marca-2028-r) helped locate the new decision but still repeats the original July dates. The article follows the published corrigendum. The Council's July announcement expressly anticipated later adoption; it was not used as proof of enactment. These differences are recorded for maintainers rather than copied into reader-facing advice.

The scoped page date is 10 September 2026. The global baseline remains 18 July 2026. Independent legal acceptance remains pending.

## Verification

Full repository verification passed, including typecheck, formatting, lint, 202 application tests, corpus and editorial checks, and production build. Reference previews passed for 2,573 provisions, 67 evidence documents and 63 map nodes. The rewritten article uses existing rendering and navigation contracts.

Inspected desktop and mobile rendering at 1440 px and 360 px. The direct route displays the six authored sections and four-row comparison. The section anchor works; the table accepts keyboard focus and ArrowRight scrolling. No horizontal page overflow or browser console errors appeared. Temporary viewport overrides were reset after inspection.

Writing inventory and review ledgers were regenerated and validated. Current writing acceptance is 159 of 1,805 files. This author review does not grant independent legal acceptance.

## Next work and affected references

Review ukraine-routes-2026 and cukr-route-2026 next, including the difference between the EU protection horizon and separately legislated Polish CUKR filing or procedural deadlines. Do not globally replace 2027 with 2028. The companion overview still has a July-dated statement about the old protection horizon. The legacy caseStudy profile in app/data/legal-map/data.ts also contains a broad photo-update statement that needs correction or removal as its projection is reviewed.

The other chapter-two articles have been rewritten, but this does not finish the map. Remaining map articles, law modules, provision commentary, the corpus-wide original PDF-layout audit and independent legal review remain open.
