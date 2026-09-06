# Editorial improvement log

## 2026-09-06 Student case, funds and ended-study notice

- Reworked the student case around one fictional master's application. Its six stages connect admissibility, the university annex, two tuition receipts, a completed budget, an evidence response and the decision. The route distinguishes full-time study, other educational purposes, mobility, work rights and changed study status.
- Reused 32 document definitions across the stages and register. Added a guide for the art. 113 notice with a fictional Polish fragment, and a filled bank-document comparison to the income-evidence guide. Corrected a broken map destination and extended coverage checks to the student case.
- Source checks and limits are recorded in `content-review/writing-2026-09-05/batches/17-student-case-guide.md`. The affected pages have a scoped 06.09.2026 check date; the atlas baseline and independent-review status remain separate. Six complete cases remain pending.
- Full verification passed with 97 application tests and the production build. Desktop/mobile controls, the bank table's keyboard scrolling, document and case links, and the exact art. 113 destination were checked. No page-level horizontal overflow or browser console errors were found.

## 2026-09-06 Blue Card case and notification

- Reworked the complete Blue Card case around a fictional programmer proving qualifications through experience. The six stages connect the contract, salary calculation, two annexes, evidence correction, response deadline and decision. UKR, mobility and permits granted before 1 June 2025 have explicit distinctions.
- Added a notification document guide with a filled fictional Polish fragment. The 35 case documents resolve to canonical guides and reverse case references. Twenty unchanged filing and procedure definitions are shared with the work guide.
- Recorded the official checks in `content-review/writing-2026-09-05/batches/16-blue-card-case-guide.md`. The guide and new document are checked on 06.09.2026; the atlas baseline and independent-review status remain separate. Seven complete case guides remain pending.
- Full verification passed with 96 application tests and the production build. Desktop/mobile reading, folded references, stage anchors, checkboxes, document/case links and the art. 134 destination were checked. No page overflow or browser console errors were found. Rechecked that the source-selection lesson directly answers the question raised in the screenshot.

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

## 2026-09-05 income, housing and family records

- Reworked four complete guides with filled payroll/bank comparisons, selected lease clauses, a family-evidence record and selected marriage-extract fields. Explained financial periods, housing rights, family exceptions and surname changes.
- Added shared conditional income, insurance and housing rows to the family case stages and register, with typed document and provision links. The complete case review remains pending.
- Recorded official ELI, KAS, UdSC, USC and voivodeship source checks in `content-review/writing-2026-09-05/batches/08-family-and-finances.md`. The atlas baseline remains 18.07.2026; independent review is not renewed.
- Full verification passed with 91 application tests and a production build. All four desktop/mobile examples fit. Table keyboard scrolling, case/document navigation and conditional labels passed without browser console errors.

## 2026-09-06 study documents, translation and apostille

- Reworked six complete guides with filled university-annex, certificate, progress, tuition, translation and apostille examples. Updated the student case's shared document definitions, conditional evidence and earlier-procedure references.
- Recorded official ELI, UdSC, higher-education, translator, HCCH and treaty checks in `content-review/writing-2026-09-05/batches/09-study-and-foreign-documents.md`. The atlas baseline remains 18.07.2026. Full case and independent legal reviews remain pending.
- Full verification passed with 91 application tests and a production build. All six desktop/mobile examples fit. Keyboard scrolling, case/document navigation and the official university form were checked without browser console errors. The university annex's reported end-page discrepancy remains recorded for the corpus audit.

## 2026-09-06 qualifications and language evidence

- Reworked qualification evidence, job descriptions, the Blue Card applicant annex and Polish-language proof. Added three fictional Polish document fragments and a filled language-document comparison. Corrected the affected Blue Card and resident-case document definitions, including alternative qualification methods and conditional language evidence.
- Separated stage document titles from checkbox labels and made wrapped title links one click target. Checkboxes retain their document names for assistive technology. Added a navigation-and-selection regression test.
- Recorded official ELI, professions-list, NAWA, UdSC and voivodeship checks in `content-review/writing-2026-09-05/batches/10-qualifications-and-language.md`. Scoped checks are dated 06.09.2026; the atlas baseline remains 18.07.2026 and independent review is not renewed.
- Full verification passed with 92 application tests and a production build. Desktop/mobile examples, table keyboard scrolling, case/document navigation, checkbox selection and the original annex destination passed browser checks without console errors.

## 2026-09-06 identity and residence-status evidence

- Reworked passport, visa, residence-status and PESEL UKR guides. Added filled passport-replacement, visa-day, card-expiry and registry-discrepancy comparisons.
- Reused shared CUKR document definitions for PESEL checks and gmina corrections. Distinguished required status verification from a universal certificate upload and the passport's data from PESEL records.
- Recorded exact official checks and the identity-confirmation transition in `content-review/writing-2026-09-05/batches/11-identity-and-status.md`. Scoped checks are dated 06.09.2026; the atlas baseline and independent-review status remain unchanged.
- Full verification passed with 92 application tests and a production build. Desktop/mobile examples, keyboard table scrolling and document/case/provision navigation passed without browser console errors.

## 2026-09-06 residence applications and biometric records

- Reworked permanent-residence, resident and CUKR applications, digital photos, fingerprint records and signature specimens. Added six filled comparisons and direct links to original form layouts. Explained application fields, residence accounting, registry corrections, filing effects and separate biometric age thresholds.
- Recorded the official ELI and UdSC checks in `content-review/writing-2026-09-05/batches/12-residence-applications-and-biometrics.md`. Scoped checks are dated 06.09.2026; the atlas baseline and independent-review status remain unchanged.
- The rendered photo page now explains ordinary requirements before the example and exceptions. The CUKR heading correctly identifies submission as the event affecting an existing case. An optional-form rendering test now supplies its own prose fixture.
- Full verification passed with 92 application tests and a production build. Final content adjustments passed the five document-rendering tests, editorial validation and another build. All six desktop/mobile pages fit, all six mobile tables scroll by keyboard, and document/case/provision links worked without browser console errors.

## 2026-09-06 special applications and annexes

- Reworked family applications and consent, ICT applications, researcher and trainee/volunteer annexes, and settlement intention. Added five selected-field comparisons and a Polish letter fragment. Corrected the consent's representation effect, signing roles, programme distinctions and conditional settlement evidence.
- Reused six document definitions across the family, other-purposes and permanent case stages and registers. Complete case-route review remains pending.
- Recorded official ELI, original-form, UdSC and voivodeship checks in `content-review/writing-2026-09-05/batches/13-special-applications-and-annexes.md`. Scoped checks are dated 06.09.2026; the atlas baseline and independent-review status remain unchanged. Form-boundary, sponsor-status and extraction discrepancies remain open for the corpus audit.
- Full verification passed with 92 application tests and a production build. All six desktop/mobile pages fit, all five mobile comparison regions scroll by keyboard, and case/document/provision links worked without browser console errors. A final term explanation passed focused rendering, editorial and formatting checks.

## 2026-09-06 working notes, missed deadlines and notifications

- Reworked the three remaining document guides: internal case assessment, evidence about a deadline obstacle and work notification. Added a filled internal note and two working comparisons. Distinguished internal reminders from legal deadlines, the end of an obstacle from a certificate date, and submitted notification data from proof of all work conditions.
- Added shared conditional deadline evidence to the procedure and decision stages and registers of all nine case guides. Work and CUKR now reuse a conditional notification entry. Complete case-route review remains pending.
- Recorded official ELI and Warsaw PUP checks in `content-review/writing-2026-09-05/batches/14-working-notes-deadlines-and-notifications.md`. Scoped checks are dated 06.09.2026; the atlas baseline and independent-review status remain unchanged.
- Full verification passed with 93 application tests and a production build. Final wording passed ten focused tests and editorial validation. Desktop/mobile pages, keyboard table scrolling and case/document/provision navigation passed without browser console errors. Rechecked the revised reading-guide page and its direct act-reader link.

## 2026-09-06 complete work case guide

- Reworked the six-stage work guide around one fictional case, including a dated salary change, a two-part request, a timely response and comparison of granted conditions. Distinguished continued stay from continued work, application defects from missing evidence, and the applicant's notification deadline from the employer's.
- Split the authored route into overview, stages, document definitions and references. The six stages and register reuse 34 document definitions with mandatory, conditional and working-record roles. The guide now displays its scoped verification date.
- Recorded official ELI and UdSC checks in `content-review/writing-2026-09-05/batches/15-work-case-guide.md`. This guide's review is dated 06.09.2026; the atlas baseline and independent-review status remain unchanged. Eight complete case routes remain pending.
- Full verification passed with 94 application tests. Final wording and the additional date-isolation test passed 18 focused tests, type checking, editorial validation and another production build. Desktop/mobile rendering, disclosures and document/case/provision navigation passed without browser console errors.

## 2026-09-06 complete business case guide

- Reworked the six-stage business guide around two qualifying employees, an excluded contractor and a missing year of submitted records. The dated response closes an evidence gap. It does not invent historical employment. Personal income, insurance and housing remain separate from the company's evidence.
- Split the route into overview, stages, 36 reusable document entries and references. Added a corporate work-permit guide with a fictional Polish fragment, plus a filled employment comparison in the business-evidence guide. The catalogue now contains 60 document guides.
- Recorded official ELI and Podlaski UW checks in `content-review/writing-2026-09-05/batches/18-business-case-guide.md`. Scoped checks are dated 06.09.2026; the atlas baseline and independent-review status remain unchanged. Five complete case routes remain pending.
- Full verification passed with 98 application tests and a production build. Desktop/mobile examples, keyboard table scrolling, checklist selection and case/document/provision navigation passed. Fresh loads had no browser console errors after an earlier development hot-reload mismatch.

## 2026-09-06 complete family case guide

- Reworked the six-stage family guide around a wife joining a husband with pobyt stały, a two-address discrepancy and a dated evidence response. The guide distinguishes sponsor status, family relationship, the applicant's location and additional conditions.
- Split the route into overview, stages, 33 reusable document entries and references. Added a filled maintenance comparison to the family-evidence guide and aligned its address example. Conditional paper forms remain distinct from MOS requirements.
- Recorded official ELI, UdSC and Podlaski UW checks in `content-review/writing-2026-09-05/batches/19-family-case-guide.md`. Scoped checks are dated 06.09.2026; the atlas baseline and independent-review status remain unchanged. Four complete case routes remain pending.
- Full verification passed with 99 application tests and a production build. Desktop/mobile pages, filled examples, keyboard table scrolling, checklist selection and case/document/provision navigation passed without browser console errors.

## 2026-09-06 permanent residence and Karta Polaka

- Reworked the six-stage permanent-residence guide around a Karta Polaka holder, one-year lease, permanent settlement plan and dated response. Distinguishes the exact statutory category, visa, evidence, filing and post-decision document duties.
- Split the route into overview, stages, 29 reusable document entries and references. Selected shared evidence records explicitly and supplied permanent-residence filing rules. Added a Karta Polaka guide with a filled working comparison; the catalogue now contains 61 document guides.
- Recorded official ELI, UdSC and RPO/MSWiA checks in `content-review/writing-2026-09-05/batches/20-permanent-case-guide.md`. Added a cross-module follow-up about judicial treatment of the office-deadline suspension. Scoped checks are dated 06.09.2026; the atlas baseline and independent-review status remain unchanged.
- Full verification passed with 100 application tests, 68 corpus tests, 15 review-tool tests and a production build. Desktop/mobile reading, disclosures, keyboard table scrolling, checklist independence and case/document/provision navigation passed without browser console errors. Inventory validation confirms 103 reviewed files out of 1,787; three complete case guides remain pending.

## 2026-09-06 EU resident case guide

- Reworked the six-stage resident guide around qualifying studies and work periods, two short trips, a missing salary transfer and a dated response. Explains the income window, historical thresholds, language transition, housing requirement and indefinite permit separately from the five-year card.
- Split the route into overview, stages, 31 reusable document definitions and reference material. Added resident coverage assertions for stage/register consistency, reverse links, conditional evidence and correct filing provisions.
- Recorded official ELI, UdSC and RPO/MSWiA checks in `content-review/writing-2026-09-05/batches/21-resident-case-guide.md`. Scoped legal checks are dated 06.09.2026. The atlas baseline, corpus-wide visual audit and independent legal review remain unchanged.
- Split the all-guide and all-document rendering loops into individual tests after reproducing their timeouts. Limited concurrent test workers to two after concurrent corpus imports also timed out. Assertions and timeout limits remain intact; the removed GitHub workflow stays removed.
- Full verification passed with 169 application tests, 68 corpus tests, 15 review-tool tests and the production build. Desktop/mobile reading, independent disclosures and case/document navigation passed without browser errors. Inventory validation confirms 107 reviewed files out of 1,790. CUKR and other purposes remain as complete case-guide reviews.

## 2026-09-06 CUKR case guide

- Reworked all six stages around a passport correction, CUKR filing, the end of a pending ordinary temporary proceeding and personal collection. The completed fictional case distinguishes issuance, readiness information and the start of the permit, then follows a September address notice.
- Split the route into overview, stages, 23 typed document definitions with one preparation action, and reference material. Added coverage assertions for the required filing package, conditional records and stage/register consistency. The existing notification guide now contains a Polish CUKR address-change fragment.
- Recorded official ELI and UdSC checks in `content-review/writing-2026-09-05/batches/22-cukr-case-guide.md`. Scoped checks are dated 06.09.2026. The atlas baseline and independent-review status remain unchanged.
- Fixed mobile register title/status wrapping and scoped specimen tests to each labelled letter. Full verification passed with 170 application tests, 68 corpus tests, 15 review-tool tests and the production build. Layout checks passed at 360 and 1440 px; a separate browser run verified case/document navigation in both directions without browser errors.
- Inventory validation records 111 accepted files out of 1,793. Other purposes is the last complete case-guide review. Map and law writing, remaining interface copy, source-layout fidelity and independent legal review remain open.

## 2026-09-06 Graduate and other-purpose case guide

- Replaced the undefined other-purpose profile with a six-stage graduate job-search case. A dated insurance correction reaches a completed response without inventing a positive decision. Other statutory categories and conditional forms remain distinct.
- Reused the temporary-residence document records with a 340 zł fee override. Added typed job-search evidence with a filled correspondence table and extended the diploma guide with a Polish completion-date example and the current graduate work exemption.
- Recorded ELI, MOS and RPO/MSWiA checks in `content-review/writing-2026-09-05/batches/23-other-purposes-case-guide.md`. Scoped legal checks are dated 06.09.2026; the global baseline and independent-review status remain unchanged.
- Full delivery verification passed with 172 application tests, 68 corpus tests, 15 review-tool tests and the production build. Desktop/mobile pages have no page overflow, the example table supports keyboard scrolling, and case/document navigation works in both directions without browser errors.
- Inventory validation records 116 accepted files out of 1,797, including all nine case guides and 62 document guides. Map and law writing, shared interface work, source-layout fidelity and independent legal review remain open. The later selected case subtype is not automatically visible in the mobile bar on direct loading; this is recorded for the interface pass.

## 2026-09-06 Delay and court review

- Rewrote the inactivity map topic and KPA delay module. They explain ordinary deadlines, premature ponaglenie, the two seven-day processing periods, special residence-office suspension and the separate court assessment.
- Both pages reuse typed statutory, official-guidance and case-law content. The completed judicial example preserves the nonfinal status, the starting event for the court's order and the distinction between finding inactivity and granting a permit.
- Removed duplicated legal-model output and the paired label/content grid from the shared map renderer. The reviewed KPA module displays its own 06.09.2026 date without advancing the atlas baseline.
- Full delivery verification and desktop/mobile browser checks passed. Source checks and limits are recorded in `content-review/writing-2026-09-05/batches/24-delay-and-court-review.md`.
- The inventory records 119 accepted files out of 1,798. Corresponding case-guide deadline passages, remaining authored topics, original-source layout and independent legal review remain open.

## 2026-09-06 Case-office deadline reconciliation

- All eight ordinary residence guides now share the suspension and court-review qualification in their procedure stages and deadline registers. Their ordinary periods and fictional response dates remain specific to each case. CUKR keeps its separate issuance rules.
- Family and business now state the ordinary 60-day period and starting conditions. Business and graduate personal-appearance rows now explain termination under art. 106i with its conditions, instead of naming the wrong procedural outcome.
- Checked ELI texts, MOS commencement and the MSWiA reply published by RPO. Sources, amendment scope and verification are recorded in `content-review/writing-2026-09-05/batches/25-case-office-deadlines.md`. The global baseline and independent-review status remain unchanged.
- Full verification passed with 174 application tests and a successful production build. Business desktop/mobile and EU resident mobile checks confirmed the revised paragraphs, disclosure controls and absence of page overflow or browser errors.
- Renewed 17 writing hashes against their previously accepted versions and the bounded amendments. Inventory remains 119 accepted files out of 1,798. Remaining authored topics, interface work, original-source layout and independent legal review remain open.

## 2026-09-06 Case navigation visibility

- The selected case subtype is now revealed on direct mobile loading, route changes, browser Back and resizing. Only the navigation container scrolls horizontally; the document keeps its vertical position.
- Both case navigation strips hide their scrollbar with the existing utility and retain horizontal scrolling. Full verification passed with 176 application tests and the production build. Browser checks covered 360 px and 1440 px without page overflow or errors.
- Evidence is recorded in `content-review/writing-2026-09-05/batches/26-case-navigation.md`. The writing inventory records 121 accepted files out of 1,799. No legal content or legal-state date changed.
