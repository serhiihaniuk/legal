# Session handoff — 2026-07-17

## Current main

`main` is at `ecf6820` and is thirteen commits ahead of local `origin/main`. No push command was issued by this implementation session.

Merged work:

- `09c1a49` — Phase 1c reference graph
- `568d7a6` — landing redesign
- `c12c2ef` — Phase 2 step 1, KPA editorial unification
- `2c9bfc8` — Phase 2 step 2, KPA learning unification
- `d6b6c41` — Phase 2 step 3, legal-library query split
- `d1deda9` — Phase 2 step 4, ownership and explanation-view cleanup
- `16d07ad` — Phase 3 step 1, shared documentation UI patterns
- `7b802ec` — Phase 3 step 2, feature and shared-component public APIs
- `329d9d9` — typed-reference treatment audit and quiet-link follow-up
- `0af4912` — Phase 3 step 3a, case-guide monolith decomposition
- `d93e980` — Phase 3 step 3b, legal-map monolith decomposition
- `5e9a36e` — Phase 3 step 3c, KPA route decomposition
- `ecf6820` — Phase 3 step 3d, document catalog decomposition

The working tree remains intentionally uncommitted while the migration is reviewed. The editorial finalization and route-meta pass are complete; `npm run verify` and `npm run verify:content` both pass. No files are staged.

## Completed Phase 2 data-layer restructure

### Step 1 — KPA editorial

All 306 reviewed KPA explanations live in `app/data/legal-library/editorial/kpa/` as
canonical `LegalExplanation<"kpa">` entries. Learner-facing fields remained byte-identical
and the legacy explanation directory was removed.

### Step 2 — KPA learning and compatibility retirement

KPA is registered in generic learning and editorial validation. Its article projection is
derived from the generated registry's promoted current edition. The four legacy root KPA
data/manifest compatibility files were deleted. All 306 legacy article projections matched
mechanically.

Implementation: `ca8ad4de6355f4e3c5a65df694bd30eedb46e87c`.

### Step 3 — query module split

`query.ts` remains the stable public facade. Internals now have one-way parsing, domain
construction, and public query layers. Public exports, overloads, aliases, lazy editorial
loading, PDF locators, and resolution statuses remain unchanged.

Implementation: `d6a7efb0fec45abfe3eb8b9a1309ca3b7d72daad`.

### Step 4 — ownership and view shapes

- `app/data/document-guides.ts` moved byte-for-byte (apart from its local contract import) to
  `app/data/document-library/guides.ts`.
- `KpaArticleExplanation` and the duplicated learning provision explanation shape were
  removed. KPA compatibility loaders now return canonical `LegalExplanation<"kpa">`.
- One feature-owned `toLegalExplanationView` adapter wraps an unchanged
  `LegalExplanation` with rendering-only context; it does not copy explanation fields.
- Learning presentation types/model moved from `app/data` to
  `app/features/law-library/model/legal-learning-view.ts`.
- The renderer moved to `app/features/law-library/ui/legal-learning-module-content.tsx`.
- An unused duplicate KPA article-guide component was removed.
- Architecture documents were updated.

Implementation: `38fa0d9e986f3dcaa1f4b73b9d449bb4400c6c7b`.

Focused adapter/editorial/document-library tests and full `npm run verify` pass. Browser
checks passed for KPA article and learning views, a PPSA learning view, and the document
catalog at desktop and 360 × 800 mobile widths, with no errors or horizontal overflow.

## Completed Phase 3 step 1 — shared patterns

- Added shared typeset `DocumentArticle` and badge-aware `DocumentHeader` patterns.
- Added semantic stacked and two-column definition/reference row components.
- Added shared desktop section navigation and mobile native-select patterns.
- Added `useUrlSelection`; KPA compatibility and study selectors now use one URL-backed
  transition model for desktop and mobile controls.
- Added heading definitions that derive TOC entries for law-library, generic practice,
  study, and legal-learning pages.
- Replaced repeated `0.65rem` / `0.68rem` arbitrary values with named Tailwind v4 text
  tokens in `app/app.css`.
- Updated `DESIGN.md` with the shared-pattern ownership rule.

Implementation: `ac9af24d9e8347e67441ab3be5a60bf5b6efa7d7`.

Nine Vitest files / 18 tests and full `npm run verify` pass. Before/after law-library
screenshots showed no visible regression. Production-runtime checks passed for KPA and study
URL selection plus `/law`, `/documents`, `/map`, KPA provision, and PPSA learning routes at
360 × 800, with no runtime errors or horizontal overflow.

## Completed Phase 3 step 2 — public ownership boundaries

- Added public feature Interfaces for `law-library`, `legal-map`, `case-guides`, `documents`,
  and `study`; routes now import those boundaries rather than deep or flat implementations.
- Moved law-library navigation, KPA content, provision selector, and study UI into their
  feature ownership. Root component paths remain re-export-only compatibility adapters.
- Moved the documentation frame to `app/components/layout/` with one public Interface.
- Consolidated `LegalLink`, structured `LegalText`, reference arrows, lazy previews, and
  official sources under `app/components/references/`; former direct paths re-export it.
- Implemented explicit `prose`, `reference-section`, and `provision-page` link contexts.
  A follow-up audit at `329d9d9` retained those semantic contexts but gave all typed
  references the same quiet inherited-color treatment without navigation-blue.
- Updated `AGENTS.md`, `DESIGN.md`, `UX-CONTENT-REVIEW.md`, and architecture docs to state
  the settled rendering and ownership policies.

Implementation: `9ff400ad8e7da2fc4b62b620d821ac206a75199e`.

The reference audit added deterministic context markers and renderer coverage. Full
`npm run verify` passes; production inspection found no primary-blue typed links, runtime
errors, or horizontal overflow. Hover/focus and navigation semantics remain unchanged.

## Completed Phase 3 step 3a — case-guide decomposition

- Replaced the 889-line root `case-study-content.tsx` implementation with a seven-line
  compatibility re-export.
- Moved stable section and stage navigation into `features/case-guides/model/`.
- Split route composition, stage disclosures/checklists, document and deadline registers,
  the condition matrix, and shared document status behavior into coherent feature UI units.
- Preserved the `features/case-guides` public Interface and added compatibility/navigation
  contract tests.

Implementation: `c38d743c6670df7267c7511ea7f0aff42007f51c`.

Full `npm run verify` passes. SSR `<main>` output matched byte-for-byte for all nine case
routes. Desktop before/after screenshots were byte-identical. Six representative routes at
360 × 800 had no runtime errors or horizontal overflow, and stage disclosure/checklist
interaction remained functional.

## Completed Phase 3 step 3b — legal-map decomposition

- Replaced the 724-line root `legal-map-content.tsx` implementation with a compatibility
  re-export.
- Moved map model helpers, node/stage resolution, TOC derivation, path traversal, and
  statement deduplication into `features/legal-map/model/`.
- Split desktop/mobile map navigation, overview route, and node detail content into feature
  UI modules while preserving the existing public Interface.
- Added compatibility, node-resolution, stage, and conditional-TOC tests.

Implementation: `5586f281bdf787044cfdc68fec669311c45926c9`.

Full `npm run verify` passes. SSR `<main>` output matched byte-for-byte for all 63 map
routes (overview plus 62 nodes). Desktop before/after screenshots were byte-identical.
Mobile checks passed for overview and representative nodes with no runtime errors or
horizontal overflow; node selection and “show stage on map” transitions remained functional.

## Completed Phase 3 step 3c — KPA route decomposition

- Reduced `app/routes/kpa.tsx` from 556 lines to a loader and feature composition.
- Moved KPA route state resolution, legacy/canonical URL transition mapping, loader data
  loading, article navigation grouping, and labels into `features/law-library/model/kpa-route.ts`.
- Moved the desktop/mobile KPA navigation and route-level composition into feature UI modules.
- Preserved the compatibility route re-export, canonical `/law/kpa/*` redirects, article
  selection, learning/practice modes, mobile selectors, typed references, and SSR output.
- Added focused tests for legacy query preservation, canonical URL mapping, and safe fallbacks.

Implementation: `1993f0b14b5104c3554cd46117863e9cd2ef9898`.

Full `npm run verify` passes. SSR `<main>` output matched byte-for-byte for nine legacy and
canonical KPA URLs. Desktop before/after screenshots were byte-identical. Mobile checks
passed for legacy and canonical learning, article, and practice routes with no runtime
errors or horizontal overflow; mode transitions produced the expected URLs.

## Completed Phase 3 step 3d — document catalog decomposition

- Replaced the 543-line root `document-catalog-content.tsx` implementation with a compatibility export.
- Moved catalog model helpers into `features/documents/model/` and split navigation, overview,
  and detail content into feature UI modules.
- Preserved catalog/detail selection, category navigation, context arrows, typed legal references,
  official-source entries, previous/next controls, and the existing public feature API.
- Added focused model tests for TOCs, category options, and Ukrainian pluralization.

Implementation: `50182a8`.

Full `npm run verify` passes. SSR `<main>` output matched byte-for-byte for the catalog and
three representative document routes. Desktop before/after screenshots were byte-identical.
Mobile catalog and detail routes rendered without runtime errors; category and document selectors
produced the expected paths without changing the existing responsive behavior.

## User-owned dirty files — preserve

The checkout contains a large pre-existing migration diff across legacy adapters, feature
folders, routes, and documentation. Do not stage, commit, reset, or discard it. The
editorial, legal-text, validator, fixture, and route-meta changes made in this continuation
remain unstaged alongside that migration work.

## Content and verification status

The current editorial corpus now validates at 1,421/1,421 provisions with zero missing or
duplicate IDs. Runtime resolution and reference previews report all 1,421 current provisions
as reviewed; no draft, blocked, stale, superseded, or source-only editorial status remains.
Parts 01b, 03, 09, and 11 were finalized against their current local corpus editions, and
legacy suffixed editorial parts are included by the validator with later canonical parts
winning intentional partition overlaps.

`npm run verify:content` is green. The labor-market, TEU Article 50, and Withdrawal
Agreement URLs were verified in the browser on 2026-07-17. The Decision 1/80 reproduction
PDF remains the only external citation awaiting owner acceptance; it is not used as the
sole basis for the current editorial coverage claim.

## Next implementation unit

The shared learning-module implementation is now under
`app/features/law-library/ui/learning/`, with the old root implementation retained only as
migration history. Route metadata is now exported by every application route, including
compatibility routes; direct route checks for the library, provision, KPA, documents, map,
cases, and study pages passed with Ukrainian titles and rendered `<main>` content. The next
focused review is the Decision 1/80 source acceptance, without changing the legal-state
baseline (`14.07.2026`).
