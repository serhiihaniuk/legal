# Batch 51: residence during pending proceedings

Rewrote /map/pending-stay as a standalone article. It explains the conditions for lawful stay during a residence application, timely correction of formal defects after a visa expires, and the distinction between filing, UPO, a certificate and proof of the conditions for granting a permit.

The article distinguishes administrative finality from the first refusal and from a later court challenge. A completed six-row timeline follows filing, visa expiry, correction, certificate issuance, refusal and a timely admissible appeal. The conclusion establishes stay on the analysis date without treating the visa as extended or granting work and re-entry rights.

Separate sections explain the transition from older stamps to certificates, suspension at the party's request and the qualified departure period after specified final decisions. The article preserves the late-filing exception, another valid residence basis and prior return proceedings. It does not call every negative letter a refusal or add 30 days mechanically.

Replaced the old reference to Dz.U. 2026 poz. 203 as the source of article 222a with the relevant 2025 amendment and commencement notice. The typed article reference now opens the existing article 222a reader. Existing UPO, certificate, visa, residence-card, decision and appeal guides remain connected. Route and chapter placement are unchanged.

## Source scope

Checked on 10 September 2026:

- [Foreigners act, compiled text dated 7 April 2026](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): articles 105(1), 106c(6), 108, 206, 222a and 299(6)–(8a). Conditions, dates, certificate content, suspension and departure qualifications. The ELI record remains in force and lists two amendments after the consolidated act; the compiled text includes 2025/1794 and 2026/203.
- [Amendment of 21 November 2025, Dz.U. 2025 poz. 1794](https://eli.gov.pl/api/acts/DU/2025/1794/text/O/D20251794.pdf): articles 12, 14, 17 and 19. Earlier pending proceedings, the specific resident-stamp transition and deferred commencement.
- [Commencement communiqué, M.P. 2026 poz. 370](https://eli.gov.pl/api/acts/MP/2026/370/text.pdf): 27 April 2026 commencement for the listed MOS, certificate and corresponding employment provisions.
- [Temporary-residence certificate form, Dz.U. 2026 poz. 386](https://eli.gov.pl/api/acts/DU/2026/386/text.pdf): distinct filing and issuance dates, confirmation scope and the suspension exception.
- [KPA, Dz.U. 2025 poz. 1691](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf): articles 16, 64, 127a and 129. Administrative finality, formal defects, waiver and the ordinary appeal deadline. ELI identifies the consolidated act as in force.
- [UdSC MOS FAQ](https://www.gov.pl/web/udsc/mos-qa): UPO after a signed submission and a certificate after verification and approval. Used only for this system sequence.
- [Employment act, compiled text dated 17 June 2026](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf): article 3(3), particularly point 2. A work permit or registered declaration and the prior right to work are distinct from pending-stay documentation. No broader employment review is claimed.

The scoped page date is 10 September 2026. The global baseline remains 18 July 2026. Independent legal acceptance remains pending.

## Verification

The first full run found two tests that still assumed pending-stay used the old template. Updated its public navigation expectation to the authored section. Changed the legacy-renderer test to check the complete text and section anchors of all remaining legacy guides instead of tying it to a page being migrated. The focused five tests and the subsequent full repository verification passed, including 202 application tests, typecheck, lint, formatting, corpus checks, editorial checks and production build.

Reference previews passed for 2,573 provisions, 67 evidence documents and 63 map nodes. The direct page rendered six authored sections and the six-row table. Desktop and mobile screenshots were inspected at 1440 px and 360 px. No horizontal page overflow or console errors appeared. The example section anchor worked, the table accepted keyboard focus and ArrowRight scrolling, and the article 222a reference opened the correct provision heading and route. Temporary viewport overrides were reset.

Writing inventory and review ledgers were regenerated and validated. Current writing acceptance is 158 of 1,805 files. Independent legal attestations are not granted by this rewrite.

Next: status UKR and its connections to ordinary residence routes. Remaining map articles, law modules, provision commentary, the original PDF-layout audit and independent legal review remain open.
