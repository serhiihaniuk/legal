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

## Decisions resolved at gates

- **Internal-link rendering policy — DECIDED (owner, 2026-07-16): quiet but
  perceivable.** In educational prose, typed internal references render quietly — no
  navigation-blue — but with enough affordance that a reader understands it is a link
  (subtle underline or equivalent token-driven treatment, hover state, hover preview).
  Reference/source sections and provision pages keep full link treatment. Rationale:
  typed references are DATA; per-context rendering lets UX-CONTENT-REVIEW's
  "calm prose" rule and DESIGN.md's inline typed references coexist. Phase 3 step 2
  implements this as explicit per-context variants in the consolidated reference API,
  chooses the exact visual treatment against the existing theme tokens, and updates
  UX-CONTENT-REVIEW.md, AGENTS.md, and DESIGN.md to state this one policy.

## Open decisions (owner)

- **Citation attribution review.** Owner samples the ambiguous-citation packet produced
  by Phase 1 step 7 (below) and confirms or fixes misattributed codemod-era citations.
- **Sourced-URL verification.** Four externally sourced citation URLs need one-click
  browser verification (see docs/restructure/citation-review/).

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
5. **Citation migration (content; may run in parallel with Phase 1)**: five ustawa
   editorial files were authored without typed references (parts 03, 04, 08, 09, 11 —
   zero `createLegalTextAuthor` usage; discovered at the Phase 0 gate when
   `test:previews` failed on the first bare citation). Migrate them one file per run,
   following the sibling-part author pattern; each run must end with `test:previews`
   passing for that file's citations and cross-act mentions flagged for the Phase 1
   step-7 audit packet. `verify:content` (below) goes green only when this completes.
   Part-04 landed 2026-07-16 (196 tokens; review list at
   docs/restructure/citation-review/part-04.md). The part-04 gate also revealed that
   ALREADY-migrated files can hide single latent bare mentions (part-06 turned out to
   hold three) — the fail-fast validator masks them, so each migration run also repairs
   any latent mention the validator surfaces next, until previews reports zero
   bare-citation failures repo-wide.
   **Part-03 reclassified (2026-07-16 gate):** it is NOT wrappable prose — all 46
   entries are `reviewStatus: "draft"` boilerplate from a `draftArticle()` factory,
   never given the "review: finalize" pass its siblings got. Wrap-only migration does
   not apply; it needs an editorial finalization pass first (content-completion debt,
   owner-scheduled). Draft entries are exempt from the bare-citation check by design,
   so part-03 does not block previews; the validator picks it up automatically once
   its entries become reviewed.
   **WRAPPING COMPLETE (2026-07-16):** `test:previews` is green repo-wide (1,421
   provisions). Parts 04 and 08 migrated; part-06's five latents repaired. Parts 09
   and 11 turned out to be draft-status like part-03 (real prose, but never given the
   "review: finalize" pass — validator-exempt by design), so they join part-03 in the
   content-completion debt: finalize the editorial review first, then the wrapping
   recipe applies. Four externally sourced URLs await owner verification in
   docs/restructure/citation-review/ (labor-market act; Decision 1/80 — weakest
   sourcing, an Irish-government PDF since the decision was never OJ-published; TEU
   art. 50 and the Withdrawal Agreement — canonical CELEX links that could not be
   machine-verified due to EUR-Lex bot-gating).

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

Two gate chains, split deliberately (decided at the Phase 0 gate, 2026-07-16):

- **`verify` (code gate, always green)**: typecheck + lint + format:check + test +
  test:corpus + test:editorial in `--incomplete` mode (structural editorial checks:
  IDs, duplicates, status vocabulary) + build. Red `verify` blocks any commit.
- **`verify:content` (content gate, red until content completion)**: strict editorial
  coverage + reference previews. Red today for known, tracked reasons: editorial
  coverage 736/1115 and the five unmigrated citation files (Phase 2 step 5). Goes
  green at the content-completion milestone, after which it merges into `verify`.
  A permanently red gate teaches people to ignore gates — hence the split.

Per step: `npm run verify` green + conventional commit. Per phase: orchestrator diff
review + browser pass on affected routes + phase branch merged. Baseline tag
`pre-restructure` before Phase 0.
