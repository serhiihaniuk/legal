# Restructure Plan: POC → Maintainable Project

Read this when: implementing or reviewing any restructure phase.
Source of truth for: the phase order, per-phase scope, gates, and the decisions behind them.
Evidence: five audit reports in [evidence/](./evidence/) (UI, data, pipeline, intent, tooling), 2026-07-16.

## Goal

Keep the product exactly as it is for users; restructure the code so it can be developed
continuously. Two named pain points drive this: ad-hoc UI component architecture, and a
corpus pipeline whose trust model has gaps.

## Hard constraints (never regress)

- Official PDF is the visual source of truth; extracted text is a locator/learning aid.
- Building or fetching an edition never makes it current automatically; promotion stays an
  explicit human-approved step (`<documentId>@<editionId>` token).
- URL-addressable entities (documents, provisions, modules, map nodes, case routes) keep
  their routes; existing compat redirects keep working.
- DESIGN.md visual language: warm paper, navy/ink, serif headings, flat surfaces,
  documentation layout, semantic tokens only. `components/ui` (shadcn/Base UI kit) is
  infrastructure — do not reorganize it by feature.
- Literal ID typing derived from the lightweight reference registry.
- Ukrainian explanations with Polish legal vocabulary preserved verbatim.
- SSR stays on (react-router.config.ts), `~/*` alias stays.

## Decisions (made 2026-07-16, orchestrator)

- **Lint**: oxlint (fast, zero-infra; react + react-hooks + a11y + typescript rules).
- **App tests**: Vitest + Testing Library + happy-dom, colocated `*.test.ts(x)`.
- **UI architecture**: light feature folders (`app/features/<domain>/`), shared
  `app/components/{layout,patterns,references}/`, routes as thin adapters (loader + meta +
  composition only). No FSD, no state library — URL + local state is sufficient here.
- **Data**: finish the migrations the repo's own docs declare — KPA folds into the
  canonical legal-library families; `query.ts` splits into parse/domain/query modules.
- **Pipeline**: harden trust *inside* the existing lifecycle (prepare/validate/diff/promote)
  rather than replacing it — the domain model is right, the enforcement is incomplete.
- **Scripts typing**: `tsconfig.scripts.json` with checkJs; errors fixed during Phase 1
  (pipeline work), not Phase 0.
- **Typed references stay**: the typed-citation layer (registry-checked literal IDs,
  deterministic previews, edition pinning) is correct and is not up for redesign. What
  remains open about links is presentation and lifecycle, below.

## Open decisions (owner, due before Phase 3 UI work)

- **Internal-link rendering policy.** The docs contradict each other:
  UX-CONTENT-REVIEW.md (decision, line ~6) and AGENTS.md (~172) say internal materials
  are not linked from educational prose (prose links reserved for external official
  sources); DESIGN.md defines typed internal references embedded in sentences. Typed
  references are DATA — whether each renders as an interactive link is a per-context
  presentation choice, so both rules can coexist once made explicit.
  Orchestrator recommendation: quiet-in-prose (styled text + hover preview, no
  navigation-blue), full links in reference/source sections and provision pages.
  Whatever is decided: Phase 3 step 2 implements it in the consolidated reference API,
  and all three docs are updated to state the same policy.
- **Citation attribution review.** Owner samples the ambiguous-citation packet produced
  by Phase 1 step 7 (below) and confirms or fixes misattributed codemod-era citations.

## Phases

Each step is sized for one focused Pi implementation run. Every step ends with the full
gate green and a conventional commit. Orchestrator reviews at each phase boundary.

### Phase 0 — Safety net (branch `restructure/phase-0-tooling`)

1. `npm run verify` = typecheck + lint + format:check + test + test:corpus +
   test:editorial + test:previews + build.
2. Add oxlint + config; fix or explicitly waive surfaced violations.
3. Add Vitest + Testing Library; 3–4 seed tests proving the harness (cn, one kit
   primitive, one document-library query, one legal-link resolution).
4. `format:check` (non-mutating); keep globs ts/tsx to avoid churn.
5. Delete stale `tsconfig.app.json` / `tsconfig.node.json` (src/ ghosts); add
   `tsconfig.scripts.json` (checkJs) and REPORT its error count without fixing.
6. Hygiene: `shadcn` → devDependencies; Dockerfile → `node:22-alpine`; real README
   replacing starter text (link DESIGN.md / AGENTS.md / docs/architecture).
7. CI workflow if a git remote exists; otherwise `verify` is the gate.
   Scope guard: no changes to `app/` components/data or script logic in this phase.

### Phase 1 — Pipeline trust hardening (`restructure/phase-1-pipeline`)

1. **Promotion re-verifies**: `corpus:promote` reruns corpus-fact validation on the
   edition artifacts and runs the editorial validator; self-attested work-order fields
   alone can no longer promote. Date/HTTPS validation for work-order evidence (reuse
   config.mjs validators).
2. **Identity + immutability**: prepare checks old-edition manifest documentId before
   diffing; rebuilding an existing editionId requires `--force-rebuild` and preserves
   original `builtAt` when the source checksum is unchanged (idempotent rebuilds).
3. **Determinism + atomicity**: duplicate locators become fatal diagnostics (not silent
   keep-first/last); registry files written tmp+rename atomically; promotion order =
   generate registries → write pointer → write promotion record, with recovery notes.
4. **Dependant discovery**: implement `reviewDependants` by scanning typed references
   (editorial parts, learning, case guides, map node guides) for changed/removed
   provision IDs; remove the KPA exclusion from the editorial validator (after Phase 2
   lands KPA, re-run; until then flag KPA status explicitly instead of skipping).
5. **Robustness**: fetch timeout/abort/content-type checks; module-relative repo root;
   `--dry-run` for prepare/promote; fix checkJs errors in scripts/.
6. **Lifecycle integration test**: full prepare→validate→promote against a small fixture
   document with injected fetch (no network), covering staging, rollback, tamper
   detection, and the new re-verification.
7. **Citation attribution audit tooling**: reusing the step-4 reference scanner, emit a
   review packet of ambiguous citations — article numbers that exist in more than one
   act, restricted to content transformed by the historical `refactor.mjs` codemod
   (whose act attribution was heuristic). A misattributed link resolves and typechecks
   fine, so no validator can catch it; only sampled human review can. Owner reviews the
   packet (see Open decisions).

### Phase 2 — Data layer: finish declared migrations (`restructure/phase-2-data`)

1. KPA explanations → `legal-library/editorial/kpa/` as `LegalExplanation` entries
   (content unchanged; metadata added; source files deleted).
2. KPA curriculum → `legal-library/learning/`; drop `Exclude<"kpa">`; retire
   `kpa-guide-data`/`kpa-article-index` specials and the `legal-corpus.ts` compat facade;
   editorial validator covers KPA.
3. Split `legal-library/query.ts` (825 lines) into corpus-parsing / domain-construction /
   public-query modules; public API unchanged (barrel re-export).
4. Ownership fixes: `document-guides.ts` moves into `document-library/`; the three
   explanation shapes collapse to `LegalExplanation` + one view adapter; view-types move
   out of `app/data` to the feature that renders them (prepared in Phase 3 structure).

### Phase 3 — UI architecture (`restructure/phase-3-ui`)

1. Extract shared patterns first: document shell (`typeset` wrapper), badge header,
   definition/reference row grid, section-nav + mobile-select pair driven by ONE
   `useUrlSelection` model, TOC-from-headings. Named variants replace repeated inline
   class strings; arbitrary `text-[0.6*rem]` values become named scale tokens in app.css.
2. Create `app/features/<domain>/` (law-library, legal-map, case-guides, documents,
   study); shared `components/{layout,patterns,references}`; references get one public
   API (LegalLink/LegalText/Preview/OfficialSource consolidated). The consolidated API
   implements the decided internal-link rendering policy as explicit per-context
   variants (prose / reference-section / provision-page), and UX-CONTENT-REVIEW.md,
   AGENTS.md, and DESIGN.md are updated to state that one policy.
3. Decompose monoliths one per run, using the new patterns:
   case-study-content (890) → case-guides feature; legal-map-content (711); kpa.tsx route
   (578, after Phase 2 it composes law-library); document-catalog-content (540);
   legal-learning-module-content (493); law-provision.tsx (435).
4. Route hygiene: every route exports `meta` (title from loader data); routes reduced to
   loader + meta + composition; localization fixes (error boundary, sheet close label).
   Visual regression check per step: dev server + manual pass on the touched routes
   (screenshots before/after).

### Phase 4 — content model (SEPARATE, not this restructure)

UX-CONTENT-REVIEW.md's deepest finding — no single canonical knowledge model across
map/case/document content — is content work with its own editorial review cycle. It gets
its own plan after Phase 2 makes the canonical families the only families.

## Gates

Per step: `npm run verify` green + conventional commit. Per phase: orchestrator diff
review + browser pass on affected routes + phase branch merged. Baseline tag
`pre-restructure` before Phase 0.
