# Map contents review

Latest implementation note, batch 55: the UKR ordinary-work article explains its eligibility and procedure next to the CUKR comparison and detailed route. Shared document guides now include the biometric exception. Removed the unused case profile rather than maintaining a competing copy. Next are goal-of-stay, temporary-common and temporary-goals. The findings below preserve the original pre-migration audit; completed changes are recorded in numbered batches.

Reviewed on 06.09.2026. This is an information-architecture review, not acceptance of the legal claims in the existing pages. It precedes the map rewrite requested by the user. No topic receives writing or independent legal acceptance from this document.

## Findings

The map has 63 authored topics. Its public journey lists 62 in nine stages. The remaining topic, `study-loop`, is still a resolvable page with a weekly learning schedule, but has no journey placement. That content conflicts with the reference-book audience and the user's instruction against mandatory learning progression.

The nine headings are a useful starting index, but describing them as successive stages makes several placements misleading. Evidence is needed before filing and during proceedings. Procedural participation is not something that starts at stage seven. Court protection also concerns inactivity before a decision. Keep one contents index and an illustrative case sequence, but label the index as subject chapters. The case sequence should explain the connections without implying a mandatory order.

There are two competing hierarchies. `journey.ts` determines the sidebar, while `data.ts` supplies older subject groups, parent paths and child links. The page can therefore show a stage, a subject badge and an unrelated-looking parent path together. For example, `wsa` is a child of the topic titled "Після остаточного рішення", although its content also concerns inactivity. A topic needs one primary contents location; other connections should be explicit related references, not competing parentage.

The renderer also contributes to the thin prose. `LegalNodeGuide` requires the same eight arrays for every topic, and `LegalNodeContent` gives them fixed headings. A short definition can become five one-sentence sections. Rewriting sentences inside this contract alone will preserve the problem. Authored chapters need topic-specific headings and room for a completed example or comparison. Sources, typed references and navigation remain shared.

Several current pages have different names but nearly identical jobs. `decision-reading` and `decision-workflow` both move through the operative part, facts, evidence, law and appeal instruction. `wezwanie` and `wezwanie-workflow` overlap too, although reading the demand and preparing a response can remain distinct if the second page demonstrates a completed response. Overview and detail pages should be separate only when each explains something different.

Several broad topics conceal distinct subjects. `study-research` combines studies, research and internships. `other-stay` compresses multiple statutory categories into one paragraph and an article range. `deadlines-delivery` combines service, calculation and restoration of deadlines. `organ-party` combines competence, party status, representation and disqualification. Those subjects need named subsections first, and separate pages where the explanation is independently useful. Do not create empty child pages merely to make the contents longer.

## Module boundaries

| Module | Question it owns | Content that belongs elsewhere |
| --- | --- | --- |
| Map | What does this legal concept mean, how does it work, and how does it connect to the case? | A second document catalog or a repeated full case guide. |
| Law library | What does this act or provision say, and how is its original document structured? | A generic introduction that hides the act's identity. |
| Documents | What does this material look like, what does it establish, and how do you read it? | A duplicate explanation of the entire legal procedure. |
| Cases | How do the conditions, evidence and procedural events work together for this type of case? | Isolated definitions without the case context. |
| Reading guide | Which existing article answers the reader's current question? | A parallel collection of thin summaries or a compulsory course. |

The map can use a short document fragment to explain a legal distinction. Its document reference should open the existing document guide for the full specimen. The map can use a bounded case example without duplicating all six stages of a case guide.

## Target contents

Retain nine subject chapters and the stable existing chapter IDs. The ordering below is an index, not a legal sequence. Move evidence before filing in the contents. Preserve old stage anchors as compatibility anchors when implementing the change.

| Order | Chapter | What its opening article must explain |
| --- | --- | --- |
| 1 | Як пов'язані факти, норми та докази | How a factual account becomes a legal question; how the applicable act, conditions and evidence fit together. Include one completed miniature analysis. |
| 2 | Особа, в'їзд і поточне перебування | Which information describes the person, which authorizes entry, and which explains current stay. Distinguish present status from a future application. |
| 3 | Підстави та види дозволів на перебування | How temporary purposes, permanent residence, EU resident status and special Ukrainian routes differ. Explain the choice through factual differences, not only article ranges. |
| 4 | Право працювати та обов'язки роботодавця | Separate the worker's access to employment, the employer's instrument and duties, and the actual organization of work. |
| 5 | Документи, умови та оцінка доказів | Explain the difference between possessing a document and proving a fact, using a filled condition/fact/evidence comparison. |
| 6 | Учасники справи та подання заяви | Explain who applies, who may represent them, which authority handles the matter, what filing establishes, and what formal completeness means. |
| 7 | Листування, строки та перебіг провадження | Explain service, response, participation, procedural changes and delay. These mechanisms can recur throughout a case. |
| 8 | Рішення, карта та зміни після рішення | Explain what the authority decided, the relationship between permission and its document, and where later changes create new questions. |
| 9 | Оскарження та інші засоби захисту | Distinguish administrative appeals, special review and court review by the problem each addresses. Include protection before a final decision. |

Chapters 1, 2 and 3 do not need to repeat the same introductory advice. Chapter 1 teaches the method; chapter 2 explains the existing legal position; chapter 3 compares a requested new position. Chapter 4 is a separate question even when employment is the purpose in chapter 3.

## Disposition of every existing topic

Numbers refer to the target chapters above. "Retain" means retain a distinct topic, not accept its current writing. Every unchanged URL remains available until its replacement and incoming references have been handled.

| Existing topic ID | Chapter | Editorial disposition and distinct purpose |
| --- | --- | --- |
| `start-case` | 1 | Retain. Turn a factual account into a dated question with a completed example. |
| `legal-anatomy` | 1 | Retain. Explain a provision's conditions, exception and consequence on actual source wording. |
| `special-vs-kpa` | 1 | Retain. Explain which question the special act answers and which procedural question KPA answers. |
| `two-keys` | 1 | Retain a short conceptual comparison. Detailed employment instruments belong in chapter 4. |
| `source-check` | 1 | Retain. Demonstrate finding an edition and a later amendment; reuse the source-record specimen. |
| `person-status` | 2 | Retain. Explain nationality, identity, personal status and representation issues without choosing a permit. |
| `entry-current-basis` | 2 | Retain as the chapter's substantive comparison, with dated entry and later-stay events. |
| `visa` | 2 | Retain. Distinguish visa validity, permitted stay and purpose using a readable specimen reference. |
| `visa-free` | 2 | Retain. Explain the permitted-stay calculation and its boundary with other bases, with a worked chronology. |
| `ukr-baseline-2026` | 2 | Retain current-status explanation. Route comparison belongs in chapter 3. |
| `pending-stay` | 2 | Move from filing. It answers what the current stay rests on while a case is pending; link to filing conditions. |
| `goal-of-stay` | 3 | Retain as comparison of factual purposes. Do not duplicate the general reasoning article. |
| `temporary-common` | 3 | Retain common temporary-residence concepts and explain which details remain route-specific. |
| `temporary-goals` | 3 | Retain as an informative parent article comparing purposes; details belong to named child topics. |
| `stay-work` | 3 | Retain the residence basis. Refer to chapter 4 for separate employment instruments and duties. |
| `blue-card` | 3 | Retain. Explain the differences that matter compared with the ordinary employment route. |
| `business-stay` | 3 | Retain. Separate the person's role from the business evidence and the applicable economic test. |
| `study-research` | 3 | Split the explanation into named studies, research, internship/volunteer and mobility subjects after source review. Keep this URL as their comparison article. |
| `family-stay` | 3 | Parent comparison rewritten in batch 30 by sponsor status, relationship and child-related dates. Includes completed comparisons and typed document references; detailed regimes remain separate work. |
| `other-stay` | 3 | Replace the catch-all paragraph with named categories, starting with graduates, short-term circumstances and seasonal residence. Other special grounds need explicit scope, not an unexplained range. |
| `permanent-resident` | 3 | Retain as a comparison of permanent residence and long-term EU resident status, distinct from their detailed conditions. |
| `permanent` | 3 | Retain. Explain the categories and evidence that distinguish them; reuse the complete case guide for the full process. |
| `long-term-eu` | 3 | Retain. Explain qualifying periods, continuity and other conditions with completed calculations. |
| `ukraine-routes-2026` | 3 | Move from current status. Compare continuing UKR, CUKR and ordinary residence without implying a compulsory transition. |
| `cukr-route-2026` | 3 | Move from current status. This is a requested route with conditions and consequences, not a description of current UKR alone. |
| `ukraine-ordinary-2026` | 3 | Move with the Ukrainian route comparison. Keep only its specific differences and reuse ordinary work-residence content. |
| `work-entry` | 4 | Retain as the employment chapter's explanation of the questions that must be distinguished. |
| `work-instruments` | 4 | Retain a comparison of instruments with concrete differences; do not repeat the chapter introduction. |
| `work-permit` | 4 | Retain. Explain the relevant employer/worker relationship and scope of the permission. |
| `declaration` | 4 | Retain. Explain the registration, qualifying circumstances and later employer events. |
| `seasonal` | 4 | Retain the employment instrument. Link to the separately explained seasonal residence category. |
| `delegation` | 4 | Retain. Define the cross-border employment arrangement and distinguish it from ordinary Polish employment. |
| `employer-duties` | 4 | Retain. Organize duties by the event that makes each relevant; refer to actual notification specimens. |
| `temporary-work` | 4 | Retain. Explain the roles of agency, worker and user employer with one completed arrangement. |
| `outsourcing-case` | 4 | Retain as the completed comparison of actual work organization, not another instrument category. |
| `document-matrix` | 5 | Retain the legal reasoning behind the matrix; use the existing document guide for its filled working-record specimen. |
| `document-types` | 5 | Retain. Explain the evidentiary differences between materials instead of repeating the document catalog. |
| `foreign-documents` | 5 | Retain. Give translation, authentication and evidentiary content distinct explanations. |
| `case-file` | 5 | Retain. Separate the authority's file, access to it and the worker's own chronology. |
| `evidence` | 5 | Retain. Explain submission, assessment and contradictions through a completed evidence comparison. |
| `organ-party` | 6 | Parent article rewritten in batch 31 with named authority, party, representation, signature/service and disqualification sections. Completed examples and the existing power-of-attorney specimen explain the distinctions. |
| `initiation` | 6 | Retain. Explain filing, initiation and possible formal consequences as distinct events. |
| `mos-procedure` | 6 | Retain. Explain the filing channel, signature, receipt and applicable exceptions using existing source forms. |
| `evidence-matrix` | 6 | Move and rename visibly around formal versus substantive completeness. Its stable ID is misleading but does not require a broken URL. Cross-link from evidence and wezwanie. |
| `kpa-principles` | 7 | Retain as the chapter's explanation of procedural duties and rights that apply throughout a case. |
| `principle-legality` | 7 | Retain as a concrete example of legal basis and factual determination. |
| `principle-trust` | 7 | Retain. Explain information and justified reliance through a bounded example. |
| `principle-participation` | 7 | Retain. Explain participation and the opportunity to address material before a decision. |
| `principle-two-instance` | 9 | Move beside appeals. Distinguish two-instance review and finality without duplicating appeal instructions. |
| `deadlines-delivery` | 7 | Completed in batch 32 as a connecting article. Six named sections distinguish the recipient, paper and electronic service, calculation, timely filing and restoration, with dated examples. |
| `wezwanie` | 7 | Completed in batch 33: annotated fictional demand, distinct actions and consequences, exact legal references. |
| `wezwanie-workflow` | 7 | Completed in batch 33: initial reply, supplement, two filled records and separate personal attendance. Stable URL retained. |
| `inactivity` | 7 | Retain the recently reviewed topic. Court references must remain reachable here, not only after a decision. |
| `decision-appeal` | 8 | Done in batch 35: classifies decisions, procedural orders, demands, notices and certificates with three completed letter examples. Detailed appeal work remains in chapter 9. |
| `decision-reading` | 8 | Completed in batch 34: primary decision article with a fictional refusal, omitted evidence, timely appeal, correction and finality distinctions. |
| `decision-workflow` | 8 | Merged in batch 34. Old URL redirects to the primary article's completed example. Duplicate authored unit removed; reference ID retained. |
| `appeal` | 9 | Retain. Explain ordinary administrative appeal, its subject and possible outcomes. |
| `complaint` | 9 | Retain the zażalenie topic with a clear visible title. Its ID must not make readers confuse it with a court complaint. |
| `extraordinary-wsa` | 9 | Rewrite as a comparison of remedies. Remove the assumption that all court review starts after a final decision. |
| `reopening` | 9 | Retain. Explain a qualifying defect in the earlier proceeding and its distinct review path. |
| `invalidity` | 9 | Retain. Explain the identified category of serious defect and the limits of this remedy. |
| `wsa` | 9 | Retain. Explain judicial review as its own topic, with routes from decisions and inactivity. |
| `study-loop` | Outside map | Retire the weekly exercise page. Preserve its URL by routing to the optional reading guide after incoming-reference review. Do not silently assign it to chapter 1. |

## Gaps to address before calling the contents complete

These are gaps in dedicated map treatment or discoverability. They are not claims that the subjects are absent everywhere in the application.

| Subject | Existing material | Required map treatment |
| --- | --- | --- |
| Residence permission versus the physical card, collection, validity and replacement | Case guides, document guides, scattered residence paragraphs | A chapter 8 article explaining the different objects and events, with links to existing specimens. |
| Changes after a decision, notification, amendment, withdrawal and expiry | Route-specific case stages and brief temporary-residence passages | A chapter 8 comparison that distinguishes the mechanisms before referring to route-specific rules. |
| Suspension and termination of proceedings | Mentions in decisions, remedies and case guides | Named chapter 7 explanations, with the triggering event and procedural result clearly distinguished. |
| Missed procedural deadline | Batch 32 adds a named restoration section in `deadlines-delivery` and links the existing evidence specimen | Connecting treatment completed, including the seven-day chronology, absence-of-fault condition, simultaneous missed act, competent organ and stay-of-execution limits. |
| Employment without a separate work permit and notification-based work | General work topic, Ukrainian topics and notification guides | A named comparison within chapter 4, not a fifth generic permit instrument. |
| Distinct study, research, internship, volunteer and mobility routes | One broad map topic; law modules and conditional form guides | Named explanations with an explicit source/form mapping. Do not imply that one university document covers them all. |
| Graduates and the other categories hidden by `other-stay` | Graduate case guide and document guides; thin map paragraph | An informative category overview plus complete treatment of the materially different grounds. |
| Family cases under different sponsor regimes | Family case guide, brief map qualification | A comparison with clear scope. Verify separately whether EU-citizen family rules need a new source before adding detailed claims. |

Detailed international protection, citizenship, criminal law and tax law remain outside the agreed first-version scope. Related residence categories can explain their boundary without expanding the atlas into those subjects.

## Article contracts for the rewrite

The map homepage must answer what the map covers and explain the relationship between its chapters. It should contain one completed example showing why current stay, requested residence, employment and procedural evidence are separate questions. The contents follows this explanation and describes the actual subject of each chapter. Replace the current three-icon legend and repeated instructions to expand a stage.

Each broad parent topic must be an article of its own. It defines the shared concept, compares the branches using the fact that distinguishes them, and explains one example before the child-topic navigation. A page that says only "each basis has its own conditions" fails this contract.

Each narrow topic must answer one identifiable question. Use a definition, the mechanism, its relevant conditions and limits, and a completed example where needed. Choose headings for that topic. Do not force every article to populate eight generic headings. Exact legal text stays in the law reader; the topic explains its meaning and uses typed references to it.

Each example states its fictional facts or fragment, completed reasoning and bounded conclusion. It must not promise a permit or consist only of questions for the reader. Existing document specimens and complete cases should be reused where they already perform this job.

## Migration and verification order

1. Establish one primary chapter assignment and explicit overview/detail relationships. Keep existing IDs and record every merge or retirement destination. No empty new public pages.
2. Change the shared map article contract to support authored chapters and examples. Keep the legacy renderer during migration so no unconverted topic loses content. Remove repeated stage metadata from the reading introduction and derive the on-page contents from rendered headings.
3. Rewrite the map homepage and broad chapter introductions against these contracts. Derive counts from published navigation rather than hardcoded badges.
4. Rewrite the residence comparison branch, beginning with `other-stay`, then the adjacent study/research and family classifications. Recheck official sources for every changed legal assertion.
5. Work through the remaining chapter dispositions and gap list. Merge repeated decision analysis and retire the learning schedule only when their replacements and incoming references are ready.
6. Check every published topic has exactly one primary chapter or an explicit compatibility destination; every displayed child belongs to its parent; every related reference resolves; every contents label matches the destination's purpose.
7. Check chapter selection, direct URLs, old anchors, previous/next navigation where present, mobile controls, keyboard use and absence of horizontal page overflow. Run required code/build checks for implementation batches and record writing acceptance only for completed reviewed content.

The structural audit also exposed a source-link issue in `goal-of-stay`: the visible `art. 114` employment-residence reference currently points to the Ukrainian special-act PDF. Correct it against the intended act during that topic's source review. Its presence is another reason not to treat navigation completeness as legal accuracy.

## Evidence and status

Inspected the full journey registry, the canonical map tree and indexes, all authored topic titles, the map overview/navigation/reader contracts, and the full bodies of the topics identified above as overlapping or over-broad. Searches checked where proposed gap subjects are already mentioned. The disposition table inventories every current topic; it does not imply that all 63 bodies received sentence-level or legal review.

Primary implementation files: `app/data/legal-map/journey.ts`, `app/data/legal-map/data.ts`, `app/data/legal-map/editorial/topics/`, `app/data/legal-map/node-guide-types.ts`, `app/features/legal-map/model/legal-map-model.ts`, and the map feature's navigation, overview and node-content components.

This audit changes the rewrite order and gives it an explicit coverage record. At the time of the audit, the target structure and migrations above were not live. Implementation status is recorded below; the audit itself grants no writing acceptance.

Coverage verification compared the disposition table with authored `map-topic` IDs and journey assignments: 63 unique dispositions match all 63 authored topics; the 62 journey entries have no duplicate or unknown IDs; only `study-loop` is outside the journey. Chapter counts in the table describe current-topic assignments before the planned merges and additions, not final published page counts.

## Implementation status after batch 27

- Live: primary chapter assignments, evidence-before-filing order, chapter labels and descriptions, derived counts, one chapter location in article headers, compatible URL anchors and Back behavior.
- Live: the rewritten map overview with a completed example and a source-linked evidence explanation; the old weekly schedule redirects to the optional reading guide.
- Preserved for migration: the older data tree still stores canonical nodes and relationships, but its paths and subject groups no longer create competing visible hierarchy. Related topics remain accessible as flat navigation.
- Pending: flexible authored article sections, deeper chapter and parent articles, category splits, decision-analysis merge, missing map coverage, the recorded source-link correction and full topic-by-topic legal review.
- The decisions chapter currently remains titled "Рішення та його наслідки". Add the card/post-decision wording only when those articles exist. No empty pages were created to satisfy the target contents.

## Implementation status after batch 28

- The flexible article contract is live. Authored headings supply the on-page contents, and invalid or empty sections fail during authoring. Unconverted articles retain their content until reviewed separately.
- `other-stay` now explains distinct grounds and a completed graduate accommodation example. The residual circumstance provision is distinguished from named grounds. Detailed branch splits remain open.
- The misplaced `goal-of-stay` article 114 link now points to the foreigners act. The rest of that topic still awaits its rewrite.
- Study/research and family classifications, deeper parent articles, missing coverage and the decision-analysis merge remain next in the audit order. Batch 28 does not represent legal acceptance of all map topics.

## Progress through batch 37

The later batches recorded in the writing-review README address study/research and family classifications, delivery and deadlines, demands and responses, the decision-analysis merge and authority-document classification. The missing postanowienie catalog entry is now illustrated and linked from the classification article and all nine case routes. Each batch records its source and verification scope. These changes do not close the remaining topic dispositions or grant independent legal acceptance.

Batch 37 rewrites `appeal` and `complaint` as distinct articles about ordinary decision review and separately appealable orders. Their completed examples explain filing, proof and limits of the selected remedy. Dedicated outgoing appeal and complaint document guides remain a catalog gap; the map examples do not count as those guides.

Batch 38 closes that catalog gap with two illustrated document guides and typed references from these map articles. All nine case registers and relevant stages now include the outgoing documents conditionally. The remaining map dispositions are unchanged.

Batch 39 completes the writing dispositions for `extraordinary-wsa`, `reopening` and `invalidity`. The comparison no longer puts all court review after a final decision; the two detailed articles have distinct grounds, procedure, limits and filled examples. The detailed `wsa` page remains next. The user requested a stop for today after this batch; full legal acceptance and the other recorded dispositions remain pending.

Batch 40 completes the `wsa` writing disposition. Its six sections explain judicial review, routes from decisions and inactivity, filing and representation, a completed fictional complaint, judgment effects and subsequent remedies. The catalog still needs separate judicial-complaint and court-judgment guides with conditional case references. Other map dispositions, source-layout work and independent legal acceptance remain open.

Batch 41 adds the judicial-complaint and court-judgment document guides identified after the WSA rewrite. Both have fictional specimens and explicit WSA map references; all nine case routes use them conditionally after a decision. The broader content disposition audit remains open.
