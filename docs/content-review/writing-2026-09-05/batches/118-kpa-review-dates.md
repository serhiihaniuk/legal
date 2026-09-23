# KPA explanation and source dates

Completed 23.09.2026. The KPA curriculum projection dropped knowledge-unit review metadata, and the KPA route renderer displayed a single legacy date. A freshly reviewed explanation could therefore hide its verification date and confuse it with the underlying source edition.

The projection now preserves each unit's `review` as `sourceReview`. The existing KPA renderer supplies reviewed explanation metadata to the shared header and obtains the source date from the current edition manifest. Unreviewed units do not receive a reviewed explanation badge. Module order, IDs, body validation and source editions are unchanged. No new state, effect or request was added.

Regression tests reproduced missing metadata and the absent rendered review date before the fix. The actual KPA manifest is dated 14.07.2026, distinct from the atlas baseline of 18.07.2026. The renderer test uses that source date and the reviewed module's own dates. Principles was added to existing authored-section and specimen publication tests.

Copernicus independently reviewed the four implementation/test files before root extended the existing publication cases to principles. No production change followed that review. Full verification and responsive browser checks are recorded in [batch 117](117-kpa-principles.md). All 318 application tests passed. This metadata repair does not grant writing or legal acceptance to other modules or the shared renderer.
