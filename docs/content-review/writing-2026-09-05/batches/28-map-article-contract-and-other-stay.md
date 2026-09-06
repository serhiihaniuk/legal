# Authored map articles and other residence circumstances

Changed on 06.09.2026 after the contents audit and chapter migration.

## Reader question and changes

The old `other-stay` page did not explain which circumstances differed or what their evidence established. It grouped separate statutory chapters and wrongly suggested that every qualifying circumstance had to be expressly named. The replacement distinguishes the named grounds, the residual provision, graduate and researcher routes, and short-term residence. A completed fictional accommodation example explains the gap, the new document and the limited conclusion. It does not claim that the entire application is sufficient.

The shared guide type now distinguishes an authored article from the old fixed-field guide. Migrated articles have their own headings and stable section IDs; the contents uses the same sections. An authoring guard rejects missing sections, duplicate or invalid anchors and blank prose. The old renderer preserves unconverted content, without inserting its headings or repeated workflow into a migrated article. No other topic receives writing acceptance through this renderer change.

Corrected the `goal-of-stay` employment-residence reference from the Ukrainian special-act PDF to the typed foreigners-act article 114. This is a locator correction only, not a full review of that topic.

## Legal verification

Checked the following official sources on 06.09.2026:

- [ELI publication](https://eli.gov.pl/eli/DU/2025/1079/ogl) and [Sejm text with amendments](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), dated 07.04.2026. Read article 99 for temporary-protection admissibility, article 176 for the distinct trafficking-victim chapter, article 181 for short-term grounds and duration, article 185a and chapter 10a for seasonal residence, articles 186 and 187 for the named and residual circumstances, article 188 for differentiated evidence conditions, and articles 190 and 190a for graduate duration and special admission barriers. The revised page uses exact typed locators rather than the former broad range.
- [ELI original-act API](https://api.sejm.gov.pl/eli/acts/DU/2013/1650) listed the amending acts. Checked [2025/1794](https://eli.gov.pl/eli/DU/2025/1794/ogl), its text and commencement metadata, and [2026/203](https://eli.gov.pl/eli/DU/2026/203/ogl), especially the foreigners-act amendments in article 12 and the temporary-protection exceptions in article 45. Those exceptions do not list the graduate permit. The article does not treat UKR plus a diploma as sufficient eligibility.
- [UdSC graduate explanation](https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-czasowy--absolwent) corroborates the purpose and one-time nine-month duration. Its outdated labour-market-test passage and personal paper-filing wording were not reused. The statute supplies the conditions and boundaries. The MOS introduction search result was visible, but opening that page failed; it is not evidence for this acceptance.

The page's review date is scoped to this article. The atlas-wide baseline remains unchanged. Illustrative documents are invented and contain no client identifiers. Full work-rights rules, financial thresholds, detailed trafficking protection, all remaining residence categories and independent legal review are not covered by this batch.

## Verification

Full `npm run verify` passed with 186 application tests in 38 files, corpus/editorial checks and the production build. New tests reject invalid article structure, match every authored article's contents links to actual rendered sections and preserve an unconverted article. The reference-preview fixture now renders the complete map article instead of only its legacy model subsection.

Browser checks at 1440 px and 360 px showed no horizontal overflow or browser errors. Selecting the example in the desktop contents updated the hash and placed the heading below the sticky header. Inspected desktop example and mobile introduction screenshots. The five authored sections and updated mobile topic label render correctly. Keyboard activation of the article 176 reference opened the correct provision route. The browser tool's center click missed a wrapped inline link; this was not a failed route.

The final `npm run verify` and `npm run test:previews` both passed after all content changes. The preview check exposed inconsistent metadata for the 2025/1794 amendment: different contextual notes prevented ordinary links from resolving to one description. A canonical official-source entry now supplies the same verified commencement note to typed references and ordinary links. The preview fixture checks that agreement.

Writing acceptance covers `other-stay` only. Broad parent rewrites, study/research and family splits, the decision-analysis merge and the remaining map gaps continue under the contents audit. Law-module rewrites, original-source layout review and independent legal review remain part of the full goal.
