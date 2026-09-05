# Editorial improvement log

## 2026-09-05 document guidance alignment

- Removed the vertical border and extra indentation from the shared document-review block in case guides. "Що звірити" and missing-document guidance now align with the document details above. Content and spacing between sections remain unchanged.

## 2026-09-05 source reader cleanup

- Removed the repeated link, copy, and explanation icon stacks from source passages. Short points now take only the space their text needs. Existing passage anchors still work.
- Removed the duplicate explanation Sheet. Kept the original Ukrainian explanation above the Polish source, including the explanation of individual points, legal consequence, and case context.
- Validation: `npm run verify` passed with 88 application tests and the production build. Checked Art. 23 in the browser: one explanation, compact source points, and no horizontal overflow. Legal wording and source files are unchanged.

## 2026-09-05 original law reader

- Committed all earlier work as `c605786` before this implementation.
- Replaced the dense source-text column with readable paragraphs, original numbering, and nested points. Added passage links, copying, and a Sheet containing the selected passage with the existing reviewed Ukrainian explanation of its article.
- Separated smaller PDF text from the reading body in 443 provisions across the five current editions. Page-labelled disclosures retain that text. The generated ranges require the exact source-text hash; the original corpus, editions, and PDF files remain unchanged.
- Annexes open in a wider original-PDF view. Forms keep their fields, tables, and signature areas; their raw text extraction is a secondary tab. Every provision retains access to its source PDF and official ELI page.
- Checked the [official foreigners act PDF](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf) for the Art. 1 body and title-note layout. This is a presentation change, not a new legal review. The legal baseline remains 18.07.2026. Source notes may be fragments continued on adjacent pages; the PDF retains their full context.
- Validation: `npm run verify` passed, including 88 application tests, 69 corpus tests, 15 content-review tests, deterministic reader-metadata validation, typechecks, lint, formatting, editorial checks, and production build. Browser checks covered mobile reading, explanation focus, passage deep links, and the form's default PDF tab without horizontal overflow. Existing build warnings and the separate independent-review-ledger gap remain.

## 2026-09-05 shared frame regression fix

- Restored the shared positioning and column-divider rules accidentally removed during the homepage CSS update. Removed unintended borders on the inner reading body and restored document-header rules. Crosses again sit on the shared frame intersections.
- Checked the law reader at desktop and 360 px, and verified that the homepage still matches the header edges. No page overflow or browser errors. Typecheck and production build passed.

## 2026-09-05 folded case references

- Made the conditions matrix and all following sections separate shadcn accordions, collapsed by default across all nine case guides. Kept every section anchor and the authored content. Contents links open their destination, including the deadline heading inside the document register.
- Checked independent expansion, default states across all guides, direct deadline navigation, and keyboard collapse. Typecheck, ten case-content tests, and the production build passed. Mobile deadline navigation opens and scrolls to the heading without page overflow. No legal content changed.

## 2026-09-05 deadline timeline numbering

- Removed stage numbers from the shared deadline timeline. It includes only stages with listed deadlines, so full-guide numbers created confusing jumps such as 01 to 05. Stage titles and chronological grouping remain.
- The regression test checks exact stage headings and every deadline field across all nine guides. Typecheck, the focused test, and production build passed. The work guide rendered without horizontal overflow or browser errors. No legal content changed.

## 2026-09-05 homepage frame and law section tabs

- Aligned the homepage outer frame with the shared header width and inset. Reused the shared thin crosses at section and footer intersections, added a closing bottom rule, removed the isolated directory divider, and limited illustration growth.
- Replaced the two-option law section Select with visible shadcn tabs. Longer module indexes remain comboboxes, and KPA retains its three-option section Select.
- Checked exact desktop edge alignment, the homepage section jump, mobile wrapping, and tab navigation between explanations and the act reader. No legal content changes.
- Typecheck, all 82 application tests, and production build passed. Browser checks found no console errors or horizontal overflow at the checked 360, 1280, and 2200 px widths.

## 2026-09-05 shared navigation selects

- Replaced the shared native select with shadcn Select for short lists and a filterable Combobox for longer indexes. This covers the law library, KPA guide, document catalog, map, and reading guide. Long selected labels and options wrap; popups fit the viewport.
- Added the official Select primitive, adapted its utility import to the project, and retained the existing dependency set. Preserved controlled route values, disabled options, and visible labels.
- Full verification passed, including 82 application tests and the production build. Added tests for filtering, empty results, selection callbacks, disabled options, Escape, and externally changed route values. Browser checks covered module selection by keyboard, section selection, and all affected modules at 360 px. No remaining authored native selects or horizontal overflow found.

## 2026-09-05 case summary grids

- Removed paired applicability cells and boxed metric grids across all nine guides. Applicability now reads as prose. Moved the compact filing and legal-reference details beside the choice of basis, where readers use them.
- Replaced the choice-of-basis columns with a continuous comparison and made stage document metadata read in one column. Preserved every authored value, typed reference, guide anchor, and document control. Removed the unused case grid adapter.
- Typecheck, eight case-guide tests, and production build passed. Checked the business guide on desktop and all nine routes at 360 px; each retained four reference details and had no horizontal overflow. This pass changes presentation, not legal rules.

## 2026-09-05 case starting situation

- Replaced the shared profile grid and blue callout with a continuous explanation and quiet fact rows. Preserved the existing case sections and anchors.
- Expanded the work example to explain purpose of stay, contract conditions, employer representation, and the unresolved right to work. Added explicit document references. Kept other routes' authored facts intact; detailed explanations are optional per fact.
- Checked [the ELI codified act](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf) and [Podlaski Urząd Wojewódzki guidance](https://www.gov.pl/web/uw-podlaski/pobyt-czasowy-i-praca) on 05.09.2026 for the introductory distinctions concerning purpose, pay, insurance, and application evidence. The MOS FAQ could not be opened directly; no new rule depends on that page. The atlas-wide legal-state date remains 18.07.2026 and independent attestations were not renewed.
- Typecheck, 12 focused tests, editorial validation, reference-preview validation, and production build passed. Checked desktop and 360 px rendering, document navigation, and browser errors. No horizontal overflow or browser errors found.

## 2026-09-05 header grid and closing rule

- Aligned the header to the shared documentation shell: logo above the left sidebar, global navigation above the reading area, and matching vertical dividers. Kept a visible logo and menu button on mobile.
- Added shared decorative crosses at every visible top and bottom intersection. Final crosses are 13 px with a 1 px stroke. Added a matching bottom rule across the documentation grid.
- Checked desktop alignment, bottom intersections, mobile menu navigation, and overflow at 360, 1024, 1280, and 2200 px. Fixed the mobile menu's link/button semantics. Typecheck and production build passed. No content changes or commit.


## 2026-09-05 act-first library catalog

- Put Polish act names and citations first in the catalog and sidebar, with Ukrainian descriptions below. Made the act reader the primary action and explanations secondary. Updated direct act URLs to open the first provision in source order.
- Revised the introduction and navigation labels around reading legal documents. Legal explanations and source text remain unchanged.
- Validation: typecheck and build passed. Checked the catalog at desktop and 360 px, sidebar navigation, and all five direct act routes. No overflow or console errors observed. No commit.


## 2026-09-05 shared shell and section combobox

- Made the centered 100rem documentation shell the shared default for law, documents, cases, the map, and the topic guide. Removed the law-only variant; each page still chooses its reading width.
- Replaced the provision index's native section selector with the existing shadcn combobox. Supports title filtering, wrapped options, keyboard selection, and an empty state while keeping the selected section's provision list below it.
- Validation: typecheck, production build, and the updated navigation test passed. Confirmed identical 1600 px shells across five modules at a 2200 px viewport and no overflow at 360 px. Checked combobox filtering, keyboard selection, and provision navigation inside the Sheet. No legal content changes or commit.


## 2026-09-05 law library navigation and reading

- Reworked the five-act catalog around workplace questions. Each entry explains the act's role and limits, with separate routes to Ukrainian explanations and Polish provisions. Added a completed example connecting a wezwanie, the permit condition, and employment evidence.
- Constrained the law-library layout on wide screens. Replaced the searchable provision dropdown with a section-based Sheet, kept the current provision marked, and distinguished paragraphs and annexes from articles. Shortened provision headings and gave rule explanations the full reading width.
- Kept the authored KPA case breakdown. Replaced generic practice worksheets with redirects to completed examples, preserved bookmarked URLs, and added topic names to previous/next navigation.
- Checked the five official ELI act records on 05.09.2026 and the example's [KPA art. 54](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf#page=13) and [foreigners act art. 114](https://eli.gov.pl/api/acts/DU/2025/1079/text/O/D20251079.pdf#page=65). This was an interface and orientation pass, not a fresh legal review of every provision. The atlas baseline remains 18.07.2026; independent-review attestations remain unchanged.
- Validation: full verify passed with 80 application tests, followed by a final production build and reference-preview checks. Browser checks covered catalog, act explanation, provision, annex, KPA case breakdown, and legacy example redirect at desktop and 360 px. Checked index selection, keyboard open/Escape and restored focus. No horizontal overflow or browser errors observed. No commit.


## 2026-09-05 document coverage across modules

- Expanded the document catalog from 34 to 57 entries. Added missing official attachments, separate CUKR/permanent/resident applications, response letters, dispatch evidence, working records, and explanations of status and work-organisation materials.
- Linked every named document in the map explicitly. Map backlinks now use authored IDs instead of title matching. Connected all eleven forms in regulation 553 to document guides in both directions and corrected employer-attachment references to regulation annex 2.
- Added the appropriate forms and response materials to case stages and registers. Kept conditional use explicit, including family applications from abroad and ICT. Moved CUKR account setup and registry updates into preparation actions.
- Checked official [regulation 553](https://eli.gov.pl/eli/DU/2026/553/ogl), [permanent form 488](https://eli.gov.pl/eli/DU/2026/488/ogl), [resident form 487](https://eli.gov.pl/eli/DU/2026/487/ogl), [foreigners act](https://eli.gov.pl/eli/DU/2025/1079/ogl), [KPA](https://eli.gov.pl/eli/DU/2025/1691/ogl), and [UdSC CUKR guidance](https://www.gov.pl/web/udsc/cukr-QA) on 05.09.2026. Page-level dates record this scoped check; the atlas baseline remains 18.07.2026.
- Validation: full verify passed with 76 application tests; final build and reference previews passed for 57 documents. Production browser checks covered all 57 document pages and nine case routes at 360 px without overflow, plus form/guide navigation and the linked map list. No console errors. Fixed review-inventory extraction so cited acts cannot replace document IDs. Independent-review attestations remain unchanged. No commit.


## 2026-09-05 documents and deadline timeline

- Expanded the document catalog from 18 to 34 entries. Added travel history, evidence records, study materials, income, housing, insurance, qualifications, language proof, and other missing topics. Simple entries remain short; complex topics have completed examples.
- Split document-page rendering into focused components. Grouped catalog links by subject, saved category selection in the URL, and replaced legacy case-title matching with backlinks from explicit references in the current guides.
- Rebuilt the deadline register as an SVG timeline grouped by case stage. Actions and periods appear together, with triggers, consequences, and sources underneath. Stage disclosures reuse the same entry component. Legal deadline text was preserved.
- Checked the [official foreigners act](https://eli.gov.pl/eli/DU/2025/1079/ogl), [KPA](https://eli.gov.pl/eli/DU/2025/1691/ogl), [UdSC resident guidance](https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2), relevant Podlaski UW guidance for study, family, business and Karta Polaka, and MSZ apostille guidance on 05.09.2026. The new pages record this scoped check; the atlas-wide baseline remains 18.07.2026.
- Validation: full npm verify passed with 72 application tests and a production build; reference previews resolve all 34 entries. Production browser checks covered all document pages and nine case timelines at 360 px, plus the desktop timeline. No overflow or console errors. Keyboard disclosure and category navigation passed. Changes remain uncommitted; independent-review attestations were not renewed.

## 2026-09-05 case documents and stage layout

- Linked document names in all nine guides to the existing document pages, including separate destinations within grouped rows. Kept provision links in the legal-basis fields. Added shared checks and explanations for missing or inconsistent documents.
- Replaced assumed condition statuses with questions about facts to establish. Associated deadlines with stages and added permit-specific evidence problems and alternative paths. Corrected the Blue Card contract requirement, the family filing exception, and the work guide's processing-deadline suspension.
- After visual feedback, replaced the stack of tables, bordered steps, deadline callouts, and filled controls with a consistent stage layout. Explanations and ordered steps remain visible; documents, deadlines, and complications use matching independent disclosures. Related reading is quieter. Preserved document families, tabs, guide order, anchors, and checkboxes.
- Checked official sources on 05.09.2026: [foreigners act](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), [KPA](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf), [special act, including the processing suspension](https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf), [MOS filing](https://www.gov.pl/web/udsc/info-mos), [CUKR questions](https://www.gov.pl/web/udsc/cukr-QA), [family filing](https://www.gov.pl/web/uw-podlaski/polaczenie-z-rodzina), [student status changes](https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-czasowy--przekwalifikowanie-wniosku), and [resident-period calculation](https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2). This scoped check leaves the atlas baseline at 18.07.2026 and does not renew independent review attestations.
- Validation: `npm run verify` passed, including 65 application tests and the production build. All nine production routes rendered six stages at 360 px without horizontal overflow. Checked the revised desktop layout, a document-page transition, and independent keyboard disclosure of deadlines. The fresh production browser recorded no console errors.

## 2026-09-05 case-guide refinement

- Preserved the original document families, subtype tabs, section order, document controls, and detailed guide flow. Added direct jumps to the stages and document/deadline registers.
- Split the large page and stage components into focused components for the overview, preparation, registers, alternatives, official sources, stage documents, risks, and related materials. Authored case data and stable URLs remain the source of content and navigation.
- Rewrote the introduction and six stage explanations, actions, and outcomes in `Pobyt + praca`. Added a completed salary-discrepancy example and clearer distinctions between current stay/work rights, formal defects, substantive evidence, the decision, and the card. The other eight guides retain their authored content in this retry.
- Checked the [official foreigners act](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf), including the work-permit conditions, and [KPA](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf), including formal defects, evidence collection, and appeals, on 2026-09-05. The salary example is a practical illustration, not a statutory rule. This is a focused explanation edit, not a new legal baseline; the displayed date remains 18.07.2026. Added the KPA source to the work guide.
- Validation: `npm run verify` passed with 60 application tests and a production build. New tests preserve document families, guide anchors and reading order, and independent document/risk disclosures. All nine production routes rendered six stages at 360 px without page overflow or console errors. Document-family switching, jump links, and keyboard opening of stage documents worked. Existing build warnings and the separate independent-review-ledger gap remain.

## 2026-09-05 shared line styling

- Extended the homepage's fine lines into the shared header and reading layout across the library, map, documents, case guides, and reading guide. Added page edges, continuous column dividers, and plain rules below shared page introductions.
- Centered cross marks at real line intersections after visual feedback. Removed standalone crosses beside introductions. Decorative rules use theme colors, stay outside the text, and disappear in print.
- Fixed a reading-guide button that overflowed at 360 px by allowing its label to wrap.
- Validation: the full `npm run verify` passed, followed by a final typecheck and build after the alignment and wrapping fixes. Browser checks covered the homepage and six main destinations at desktop and 360 px widths with no horizontal overflow; the fresh browser session recorded no console errors. Existing build warnings and the independent-review-ledger gap remain as noted below.

## 2026-09-05 homepage redesign

- Committed the earlier editorial work as `703e8dd` before starting the redesign.
- Replaced the homepage with a serif headline, a restrained monochrome layout, and six numbered section links. Descriptions address working staff and explain what each section contains.
- Added a small SVG illustration with a single arrival animation and a static reduced-motion version. Adjusted the heading and stacked layout for phones; kept the existing navigation and design tokens.
- Validation: `npm run verify` passed, including typechecks, lint, formatting, 57 application tests, corpus/editorial checks, and the production build. Checked desktop, tablet, and 360 px layouts without horizontal overflow. All six section destinations rendered in the production browser with no console errors. The section jump, mobile menu, keyboard focus, and Enter activation worked.
- The earlier dependency, build-warning, and independent-review-ledger notes below still apply. This pass changes homepage presentation and navigation copy, not legal rules.

## 2026-09-05

- Created the installed `legal-explanatory-writing` skill for Ukrainian explanations of Polish law aimed at working legalization staff. It prioritizes definitions, mechanisms, concrete explanations, and optional reading over exercises or course completion.
- Installed dependencies with `npm ci` and started the development server at `http://127.0.0.1:5173`. The skill passed its validator.
- Rewrote the KPA introduction and `wezwanie` explanations with clearer definitions and completed examples about conflicting document dates and a missing signature. Added typed provision references and removed the duplicated outcome from the KPA question row.
- Converted `/study` into an optional reading guide. Removed assignments, assessment criteria, repetition schedules, and completion gates; retained topic URLs and navigation. Updated the header, homepage, and project guidance.
- Removed internal terminology from document-page copy and made long law-reference labels wrap on phones.
- Checked the [official KPA text](https://eli.gov.pl/eli/DU/2025/1691/ogl) and the [original act's amendment references](https://eli.gov.pl/api/acts/DU/1960/168/references) on 2026-09-05. Relevant provisions: art. 1-5, 50-56, 63-64, 77, 80, and 104; the consolidated publication also records the 2025 amendment's transitional rule. This was a focused explanation review, not a new atlas-wide baseline. The displayed legal-state date remains 18.07.2026.
- Validation: `npm run verify` passed, including 57 application tests and the corpus/editorial checks. Reference-preview validation passed. Final typecheck and production build passed after the presentation adjustments. Browser checks confirmed the revised KPA text, reading-guide navigation, a new provision link, and no horizontal overflow on checked pages at 360 px and desktop widths.
- Pending: the separate strict content-review ledger reports 11 stale file hashes, including one untouched navigation file. Its previous independent attestations were not renewed. Installation also reported 19 dependency vulnerabilities (10 moderate, 9 high); dependency remediation is outside this editorial pass. Existing build warnings concern large bundles and the deprecated `envFile` option.
- Next editorial pass: replace inferred definitions and generic examples in non-KPA explanations, preserve their authored section headings, and deepen the form-versus-evidence explanation.
# 2026-09-05 filled document examples

- Added filled specimens to the evidence matrix, requirements table, travel chronology, file index and response letter. The examples distinguish missing evidence, unconfirmed dates, received files and actual submission. The Polish letter is a labelled fictional fragment.
- Recorded the official KPA, foreigners-act and UdSC checks, writing review and remaining legal-review limits in `content-review/writing-2026-09-05/batches/01-working-records.md`. The atlas baseline remains 18.07.2026.
- Full verification passed with 89 application tests; final typecheck, focused tests and build passed after the last adjustment. Browser checks covered desktop fit, all five routes at 360 px, keyboard table scrolling and console errors.

## 2026-09-05 reading guide with complete answers

- Rewrote all eight reading-guide topics around work questions, definitions and completed examples. Preserved direct URLs and replaced generic section labels with topic headings. Small shared components render the examples and related reading.
- Recorded focused official-source checks, the unchanged 18.07.2026 atlas baseline and the remaining independent-review gap in `content-review/writing-2026-09-05/batches/02-reading-guide.md`.
- Full verification passed with 91 application tests and a production build. Browser checks covered all eight mobile routes, fallback selection, desktop section jumps, topic switching, typed law links and related reading without page overflow or console errors.

## 2026-09-05 employment and insurance specimens

- Reworked the employer annex, employment contract, health-insurance and ZUS guides around the actual data and periods they establish. Added four filled Polish fragments with completed explanations. Clarified annex numbering, electronic signing, amendment dates and insurance arising from proposed employment.
- Recorded the official ELI, UdSC and ZUS checks in `content-review/writing-2026-09-05/batches/03-employment-and-insurance.md`. The atlas baseline remains 18.07.2026 and independent legal review is still pending.
- Full verification passed with 91 application tests and a production build. All four mobile routes fit without horizontal overflow. Desktop section navigation, the official form layout and the document-to-case backlink were checked without browser console errors.

## 2026-09-05 correspondence examples

- Reworked wezwanie, delivery proof, dispatch proof and UPO around the event or submitted version each record establishes. Added four visible examples with completed findings. Kept formal defects, substantive evidence, personal actions and deadline restoration distinct.
- Recorded focused KPA, foreigners-act, UdSC and e-Doręczenia checks in `content-review/writing-2026-09-05/batches/04-correspondence.md`. The atlas baseline remains 18.07.2026. Independent legal review and a faithful official UPO visual specimen remain pending.
- Full verification passed with 91 application tests and a production build. Checked mobile fit, keyboard table scrolling, section anchors, related-document navigation and a typed provision link. A fresh browser session recorded no console errors.

## 2026-09-05 representation and filing examples

- Reworked pełnomocnictwo, the MOS application, the filing certificate and stamp-duty proof with four filled examples. Clarified personal signing, paper-procedure exceptions, draft versus submission, certificate issue rules and payment allocation.
- Added the certificate to later work-case document checks and the register. It is absent from the initial filing attachments. Corrected representation and fee descriptions in the affected work-case rows.
- Recorded official KPA, foreigners-act, fee, form and UdSC checks in `content-review/writing-2026-09-05/batches/05-representation-and-filing.md`. The atlas baseline remains 18.07.2026; full work-route and independent legal reviews remain pending.
- Full verification passed with 91 application tests and a production build. All four mobile pages fit, the comparison scrolls by keyboard, and document/case/provision links work without browser console errors.

## 2026-09-05 decisions and card examples

- Reworked the decision, residence-card and card-payment guides with filled examples. Explained evidence assessment, appeal and finality, the card's relationship to the decision, fee reductions and payment recipients.
- Replaced four repeated work-case payment rows with one conditional definition. The standard 100 zł amount now retains reductions and exemptions; collection instructions first check the existing payment.
- Recorded the official KPA, foreigners-act, fee-regulation and UdSC checks in `content-review/writing-2026-09-05/batches/06-decisions-and-cards.md`. The atlas baseline remains 18.07.2026. Full case-route, card-design specimen and independent-review work remain open.
- Full verification passed with 91 application tests and a production build. Desktop/mobile specimens, keyboard table scrolling, case/document/provision navigation and conditional stage labels passed browser checks without console errors.

## 2026-09-05 company records and activity

- Reworked all four company-category document guides. Added a fictional KRS fragment and filled ownership, business-plan and work-organisation records. The explanations separate control, representation, actual management, financial results and future plans.
- Split four repeated business-case document rows into shared registry/role and conditional CRBR definitions. Updated the link-label test and preserved the document destinations.
- Recorded official KRS, CEIDG, KSH, AML, foreigners-act, PIP, KPA and voivodeship checks in `content-review/writing-2026-09-05/batches/07-company-records.md`. The atlas baseline remains 18.07.2026. Complete case and independent legal reviews remain open.
- Full verification passed with 91 application tests and a production build. All four desktop/mobile pages fit, table keyboard scrolling worked, and case/document navigation and conditional labels passed without browser console errors.
