# Retire the weekly schedule from internal publication

Completed on 12.09.2026. This is removal of obsolete product content, not acceptance of the old article's prose or legal claims.

## Finding and change

Batch 27 already redirected `/map/study-loop` to the optional `/study` reading guide. No current chapter or authored inbound reference used the old article. However, data, guide and knowledge registries still exposed it internally. That contradicted the decision to remove mandatory learning schedules.

ukr_filing_review audited the references, removed the topic and its registrations, then regenerated the knowledge registry. Root independently inspected the diff. The public redirect remains. Historical batch records remain unchanged.

The ownership test now allows a compatibility destination whose retired source node no longer exists. It still checks that every current nonredirected node belongs to exactly one chapter. A separate regression assertion checks that the old ID is absent from the node registry, knowledge registry and publication resolver. The existing route test checks the redirect.

## Verification

Focused journey, map route, registry and publication tests passed, 13 tests in four files. All 15 review-ledger tests passed. The combined batch 77–78 full verification passed with 246 application tests, type checks, lint, formatting, source-reader checks, 68 passing corpus tests and one existing skip, editorial checks and production build.

Root opened the old URL at 360 px. It reached `/study` and rendered the current reading-guide article without viewport overflow or recorded browser errors. Active inventories are regenerated with the retired file removed; removal does not count as a reviewed file. No global legal baseline changes.
