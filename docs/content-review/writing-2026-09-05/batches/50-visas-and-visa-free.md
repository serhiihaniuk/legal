# Batch 50: visa limits and visa-free day counting

Rewrote /map/visa and /map/visa-free as standalone articles. The visa article explains C and D, territorial scope, calendar validity, permitted days, entries and later changes to the visa. A completed three-row comparison shows why ten days spent on a single-entry visa leave unused days but do not provide a second entry.

The visa-free article separates eligibility by nationality and passport conditions from the rolling 90/180 calculation. It corrects the former universal biometric-passport requirement. A completed five-row calculation compares return on 29 and 30 June, follows the proposed trip through 27 September and shows why 28 September exceeds the limit. The conclusion concerns days, not admission or permission to work.

Both articles distinguish other residence bases and connect existing document guides without duplicating their examples. Routes and chapter placement are unchanged. No renderer changes were needed.

## Source scope

Checked on 10 September 2026:

- [Visa Code, consolidated 28 June 2024](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628): Articles 2, 24, 30 and 34. Definitions, validity and entries, absence of automatic admission, annulment and revocation. Consolidation metadata and text were read in the browser after the web extractor encountered a JavaScript challenge.
- [Regulation 2018/1806, consolidated 30 December 2025](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02018R1806-20251230): Article 4 and Annex II, including footnote 13 concerning Ukrainian biometric passports. The requirement is not generalized to every nationality. Metadata and text were read in the browser.
- [Schengen Borders Code, consolidated 12 October 2025](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02016R0399-20251012): Article 6, including rolling days, entry and exit dates, excluded long-stay periods and other admission conditions.
- [Foreigners act, compiled text dated 7 April 2026](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): Articles 59 and 60 on national visas and their purposes. The article 108 distinction uses the scoped verification recorded in batch 49.
- [MSWiA entry and stay guidance](https://www.gov.pl/web/mswia/warunki-wjazdu-i-pobytu-cudzoziemcow-w-polsce): only the distinction between a national visa or residence permit and short visits to other Schengen states. Older material elsewhere on this page was not adopted as a new baseline.
- [European Commission short-stay calculator guidance](https://home-affairs.ec.europa.eu/policies/schengen/border-crossing/short-stay-calculator_en): checking and planning modes, input dates and calculation limits. The worked example was calculated independently, not submitted to the calculator.

Scoped page dates are 10 September 2026. The global baseline remains 18 July 2026. Independent legal acceptance remains pending.

## Verification

Full repository verification passed, including typecheck, lint, formatting, 202 application tests, corpus checks, editorial checks and production build. Reference previews passed for 2,573 provisions, 67 evidence documents and 63 map nodes.

An independent UTC calendar calculation checked every date from 30 June through 27 September. Each rolling window contains exactly 90 stay days. The five displayed boundary calculations were checked separately.

Both direct routes rendered their authored sections and completed tables. Desktop and mobile screenshots were inspected at 1440 px and 360 px. Neither page had horizontal page overflow or browser console errors. Both table regions accepted keyboard focus and moved horizontally with ArrowRight. Desktop table-of-contents links reached the corresponding example sections. Temporary viewport overrides were reset.

Writing inventory and review ledgers were regenerated and validated. The writing inventory records 157 accepted files out of 1,805. This does not grant independent legal attestations.

Next: pending-stay and the remaining current-status topics. Remaining map articles, law modules, provision commentary, the original PDF-layout audit and independent legal review remain open.
