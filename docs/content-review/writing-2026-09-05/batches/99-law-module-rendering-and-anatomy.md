# Authored law modules and the KPA anatomy pilot

Completed on 12.09.2026. Preparation is recorded in [the module inventory](99-law-module-writing-preparation.md); the scoped primary-source checks are in [the anatomy source notes](99-kpa-anatomy-source-notes.md).

## What changed for the reader

The shared law-module adapter no longer constructs a completed example from a question, analysis instructions and an exercise. Examples now have authored facts, analysis and a conclusion, with an optional table or letter specimen. Existing genuine document-reading examples remain available. If a legacy module has no authored example, the page and its table of contents omit that section.

The generic renderer preserves each authored section's title, paragraphs, procedural steps, evidence and qualification together. It no longer repeats opening paragraphs as generic layers or invents definitions from the Polish subtitle. Legacy questions and exercises are not republished as completed reasoning. This changes presentation; it does not accept the unrevised prose of those modules.

The separate KPA path supports the same authored sections and specimens. Its legacy paragraph/layer rendering remains available for modules awaiting review. The generic KPA curriculum also retains the authored sections and complete example. Example prose uses the reading column instead of a narrow numbered grid. The existing accessible specimen renderer handles tables and letters.

## Anatomy content and independent review

Ohm rewrote the anatomy module into five sections explaining the exact unit, condition and operative words, connected deadline rules, exceptions and references, and the applicable edition. The example assumes proper service on an appointed representative on 08.08.2026. Its nominal endpoint is Saturday 22.08; the statutory calculation gives Monday 24.08. The response was actually lodged on 21.08, with retained confirmation. The completed Polish table distinguishes the letter date, service, the client's later reading and the actual response. Timeliness does not establish substantive sufficiency.

Copernicus independently read every field, section and specimen row. A wording correction distinguishes the whole article's week/month/year rules from its first paragraph. Root read the complete draft and final changes. Independently accepted anatomy SHA256: `B48EF4E27EEF0472EC4280C698AEAD4E0922C4C74CDAF2F3173118D62295357E`.

Official source checks cover KPA 1691, articles 40, 57 and the precise 124 § 1 pkt 6 lit. b locator; amendment 769 and current ELI amendment relations; and holiday statute 296 for the chosen calendar. These checks are dated 12.09.2026. Root also read the relevant compiled KPA passages. The module's article panel now lists 40, 57 and 124 rather than the unrelated prior set. The embedded commentary has not received renewed acceptance. Global legal-state metadata is unchanged.

Copernicus also independently read the shared implementation and regression tests. This bounded review found no remaining blocker; it does not accept every unchanged module or every shared-copy sentence.

## Verification

The initial full verification passed with 271 application tests. Browser navigation then exposed an uncontrolled Accordion warning: a new module supplied a different initial open item to the mounted previous list. The Accordion now remounts when its actual item IDs change. A regression test verifies that the new first item opens. Final `npm run verify` passed with both typechecks, generated checks, lint, formatting, 272 application tests, 70 corpus tests with one skipped, 15 review tests, editorial validation and production build. Reference previews passed for 106 documents, 62 map nodes, nine cases and 2,573 provisions. The baseline review ledger passed with 1,753 entries; this does not mean strict legal acceptance. The isolated browser session was closed.

Focused coverage checks exact section content once, preserved table and letter specimens, no synthetic example or dead example anchor, references inside examples/evidence, generic KPA projection, the actual KPA adapter and module transitions. The source corpus and provision identities remain unchanged.

Browser checks used an isolated batch99 session. The actual KPA specimen was inspected at 1440×1000 and 360×800. Neither viewport overflowed; the mobile table's own region scrolled with ArrowRight. The first screenshot after resizing retained the old scroll position, so a fresh image was taken at the actual specimen. Final images: `C:/Users/Serge/.agent-browser/tmp/screenshots/screenshot-1789239236399.png` and `C:/Users/Serge/.agent-browser/tmp/screenshots/screenshot-1789239332182.png`.

The generic entry/current-stay module rendered its three authored sections without a synthetic example. Keyboard navigation opened its real reading-guide example. After the Accordion fix, the same transition produced no browser error or console warning; only Vite and React DevTools messages remained. Desktop table-of-contents links had no missing target, and both generic pages had no viewport overflow.

## Remaining scope

Writing acceptance is 234 of 1,843 active files. Two of 43 law modules have matching acceptance, leaving 41. The other law modules, 1,478 provision explanations, remaining shared copy, source-layout fidelity and whole-project legal acceptance remain open. The next content batch is the KPA scope module. The full goal remains active.
