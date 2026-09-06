# Outgoing appeal and complaint documents

Completed on 06.09.2026.

## Reader questions and coverage

Added `administrative-appeal` and `procedural-complaint` as separate document guides. They explain what the submitted letter contains, how its attachments support a particular objection, and why a draft, a submission receipt and a changed decision establish different facts.

The appeal guide includes a fictional Polish letter about an insurer's payment certificate omitted from the authority's reasoning. The complaint guide includes a fictional partial challenge to refusal of access to a copy of the applicant's own contract attached to excluded materials. Both specimens omit identifying details and signatures explicitly. Neither is presented as a ready-to-submit form. Each example ends with a timely filing and a defined unresolved issue, rather than a promised permit or restored access.

All nine case registers use shared conditional definitions. The appeal appears at the decision stage and the complaint at the procedure stage. Neither is an initial filing attachment. The existing fictional case narratives are unchanged and do not claim that an appeal or complaint actually occurred. The corresponding map articles now have typed references, which also supply reverse document usage.

The two complete guides were reviewed against legal-explanatory-writing. For existing case and map files, this batch reviews the new references and their conditional placement; earlier reviews continue to cover the unchanged explanations. Writing acceptance is 140 of 1,802 files, including all 65 current document guides. This closes the two document gaps recorded in batch 37, not every remaining content requirement.

## Official checks

Checked the [official KPA consolidation](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), dated 04.12.2025, for articles 57, 63–64, 73–74, 127–130 and 141–144. The checks cover written form, the difference between detailed grounds and clear dissatisfaction, filing through the issuing authority, time calculation, limited availability of a complaint, and execution. The same-day amendment/status checks in batch 37 remain relevant. The appeal example expressly concerns a case opened in 2026.

For CUKR placement, checked articles 42k, 42o, 42q and 42t of the [updated Ukraine assistance act](https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf), dated 22.05.2026. Refusal is a decision and the act identifies the higher authority. The new entries remain conditional and do not replace the special card, application or service rules.

The guides carry scoped checks dated 06.09.2026. The global 18.07.2026 baseline, selected source editions and independent legal-review attestations are unchanged.

## Reference dependency repair

Using the evidence-document author inside a document guide reproduced an initialization failure: its ID guard imported the query module, which imported the registry and guides being initialized. Moved the guard to the existing contracts module beside the ID list. Authoring, query and navigation now use that guard without requiring the built catalog to validate an ID. The query export remains compatible. The new coverage test loads both linked guides and therefore exercises the formerly failing import path.

## Verification

The application suite passed 196 tests in 38 files, including the new assertion for both guides, all nine conditional stage/register integrations, initial-filing exclusions and reverse references. Corpus tests passed 68 with one existing skip. Type checks, script type checks, registry checks, lint and formatting passed.

The first complete run stopped because the content-review inventory still expected 63 documents. Updated its explicit count and test to 65. All 15 content-review tests then passed, as did editorial validation, reference previews and the production build. Preview counts are five acts, 2,573 provisions, 65 documents, 63 map references, nine cases and seven official sources. The old independent-review ledger was not regenerated or reapproved.

Browser inspection at 1440 and 360 px confirmed readable Polish specimens, matching section navigation and no page overflow. The desktop example anchor lands below the header. Keyboard activation of the complaint guide's appeal reference opens the new appeal guide. The browser error list was empty. Catalog navigation exposes both titles and the usage panels report the corresponding map topic plus all nine cases.

Remaining work includes the other map dispositions, law learning modules, provision commentary, the recorded source-PDF layout issues and independent legal review.
