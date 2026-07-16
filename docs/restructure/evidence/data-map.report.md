# Summary

The data layer contains two distinct strata: machine-generated legal-source artifacts under `app/data/legal-corpus/**`, and hand-authored educational/editorial data elsewhere under `app/data/**`. Generated status is explicit in registry headers—“Do not edit by hand”—and in the corpus workflow’s enumerated output paths (`app/data/legal-corpus/registry.generated.ts:1-2`, `scripts/legal-corpus/lib/workflow.mjs:196-205`). The canonical consumption path is generated JSON → generated registry → `legal-library/query.ts` validation/adaptation → routes and components. UI code generally respects that boundary: no component or route imports corpus JSON or `registry.generated.ts` directly; the closest exception is the legacy KPA compatibility facade `app/data/legal-corpus.ts`. Hand-authored content is divided into overlapping families: canonical legal-library editorial explanations, learning curricula, legacy KPA explanations, evidence-document guides, map data, and loose case-guide files. The strongest typing is in `legal-library`, where document, edition, and provision IDs are derived from the lightweight generated reference registry (`app/data/legal-library/contracts.ts:1-18`). The main redesign risk is not raw-corpus leakage but coexistence of parallel authored models—especially KPA versus the newer editorial/learning system—and several adapter layers linking document, case-guide, map, and legal-library domains. The inspected `app/data` tree is approximately 116,965 lines, dominated by generated corpus JSON and large authored editorial/course files.

# Inventory

- **Generated legal corpus → five promoted document editions**
  - `app/data/legal-corpus/kpa-2025-1691/`
  - `app/data/legal-corpus/powierzanie-pracy-2025-621/`
  - `app/data/legal-corpus/ppsa-2026-143/`
  - `app/data/legal-corpus/rozporzadzenie-wniosek-pobyt-czasowy-2026-553/`
  - `app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079/`
  - Each edition contains generated `manifest.json`, `metadata.json`, `pages.json`, `articles.json`, `provisions.json`, `structure.json`, and `diagnostics.json`; the new regulation also has `edition-diff.json`.
  - The workflow explicitly defines these as generated edition paths (`scripts/legal-corpus/lib/workflow.mjs:196-205`), while `build-document.mjs` targets `app/data/legal-corpus` (`scripts/legal-corpus/build-document.mjs:194`).
  - Approximate family size from `wc -l`: **45 files / 67,281 lines**. Largest files include `ustawa-o-cudzoziemcach-2025-1079/structure.json` (11,488), `provisions.json` (10,194), and KPA/PPSA structure/provision files of roughly 4,900–6,200 lines.

- **Generated corpus registries → compile-time registration**
  - `app/data/legal-corpus/registry.generated.ts` (100 lines) imports every edition’s `manifest.json` and `provisions.json`, then builds `legalLibraryRegistry`; its header says it is generated and discovers data from each manifest/provision pair (`app/data/legal-corpus/registry.generated.ts:1-14`).
  - `app/data/legal-corpus/reference-registry.generated.ts` (29 lines) is the lightweight ID-only registry; its header says it avoids loading corpus text (`app/data/legal-corpus/reference-registry.generated.ts:1-3`).
  - Both are rendered by `scripts/legal-corpus/generate-registry.mjs`; output paths are declared at `scripts/legal-corpus/generate-registry.mjs:9-13`, and generated headers at `scripts/legal-corpus/generate-registry.mjs:214-233`.
  - `package.json:7-14` exposes build, prepare, validate, diff, generate, and promote commands.

- **Canonical legal-library contracts and query layer → generated data adapter**
  - `app/data/legal-library/contracts.ts` (202 lines) defines document/edition/provision identities, manifests, corpus provisions, editorial explanations, resolution unions, and PDF locators.
  - `LegalDocumentId`, `LegalEditionId`, and `LegalProvisionId` are derived from `reference-registry.generated.ts`, preserving document-specific provision identity (`app/data/legal-library/contracts.ts:1-18`).
  - `app/data/legal-library/query.ts` (825 lines) is the canonical runtime adapter. It imports the full generated registry and performs manifest/provision shape checks before returning typed domain values (`app/data/legal-library/query.ts:1-18`, `app/data/legal-library/query.ts:64-145`).
  - `app/data/legal-library/reference-registry.ts` wraps the lightweight registry for typed reference checks.
  - Supporting hand-authored modules include `legal-text.ts` (366), `provision-outline.ts` (344), `official-sources.ts` (57), `navigation.ts` (35), and barrel `index.ts` (35).

- **Registry consumption flow**
  - Corpus scripts generate edition JSON and both registries.
  - `reference-registry.generated.ts` supplies literal ID unions to `legal-library/contracts.ts`.
  - `registry.generated.ts` supplies manifests and raw provisions to `legal-library/query.ts`.
  - `query.ts` validates unknown JSON records, constructs `LegalDocument`, `LegalEdition`, and `LegalProvision`, and resolves editorial explanations.
  - `app/data/legal-library/index.ts` exports the public API used by routes/components.
  - Primary consumers are `app/routes/law.tsx`, `law-document.tsx`, `law-provision.tsx`, `law-document-index.tsx`, `law-document-practice.tsx`, `kpa.tsx`, plus `app/components/law-library-navigation.tsx`, `law-document-navigation.tsx`, `legal-provision-selector.tsx`, and `kpa-articles-content.tsx`.

- **Hand-authored editorial explanations → provision-scoped legal commentary**
  - `app/data/legal-library/editorial/**` contains **41 files / about 30,654 lines**.
  - Families exist for `ustawa-o-cudzoziemcach`, `ppsa`, `powierzanie-pracy`, and `rozporzadzenie-wniosek-pobyt-czasowy`; each family has an index and multiple `part-*.ts` slices.
  - `define-editorial-part.ts` turns authored entries into `LegalExplanation` records and injects document, edition, legal-state, verification, and language metadata (`app/data/legal-library/editorial/define-editorial-part.ts:10-39`, `:41-65`).
  - `editorial/index.ts` lazily imports document-specific tables and resolves them by typed provision ID (`app/data/legal-library/editorial/index.ts:7-31`).
  - `legal-library/query.ts` is the external consumer; components do not import editorial parts directly.

- **Hand-authored learning curricula → document/module teaching content**
  - `app/data/legal-library/learning/**` contains **11 files / about 2,796 lines**.
  - Document curricula: `ustawa-o-cudzoziemcach.ts` (593), `powierzanie-pracy.ts` (473), `ppsa.ts` (422), and `rozporzadzenie-wniosek-pobyt-czasowy.ts` (229).
  - `document-reading-guides.ts` adds a common introductory module (540 lines).
  - `types.ts` defines authored curriculum/section/module shapes (`app/data/legal-library/learning/types.ts:5-42`); `view-types.ts` defines a separate presentation-oriented `LegalLearningModuleView` (`app/data/legal-library/learning/view-types.ts:4-71`).
  - `index.ts` eagerly registers all four non-KPA curricula and explicitly excludes KPA (`app/data/legal-library/learning/index.ts:1-26`, `:28-65`).
  - `view-model.ts` adapts curriculum plus reviewed provisions into UI data.
  - Consumers: `app/routes/law-document.tsx` imports the view model; `app/components/legal-learning-module-content.tsx` and `kpa-learning-content.tsx` consume learning view/text types.

- **Legacy hand-authored KPA explanations → parallel article-commentary family**
  - `app/data/kpa-article-explanations/**` contains **5 files / 6,397 lines**.
  - Three approximately 2,100-line authored parts carry article summaries, rules, effects, and foreigner examples; `types.ts` defines this compact shape (`app/data/kpa-article-explanations/types.ts:3-14`).
  - `index.ts` lazily loads fixed 102-entry parts and validates them against `kpaArticleIndex` (`app/data/kpa-article-explanations/index.ts:1-31`, `:33-74`).
  - Consumers: `app/routes/kpa.tsx`, `app/components/kpa-articles-content.tsx`, `kpa-learning-content.tsx`, and `kpa-module-article-guide.tsx`.
  - `legal-library/query.ts:1` also imports this legacy family so KPA explanations can participate in canonical resolution.

- **Hand-authored evidence document library**
  - `app/data/document-library/**` contains **8 files / 497 lines**, with the large content source outside the directory in `app/data/document-guides.ts` (779 lines).
  - `contracts.ts` defines 18 literal `EvidenceDocumentId` values, categories, guide records, references, and resolution unions (`app/data/document-library/contracts.ts:4-80`).
  - `registry.ts` imports `documentGuides`, validates exact ID coverage, aliases, and related IDs, then builds `Map` registries (`app/data/document-library/registry.ts:1-7`, `:31-100`).
  - `query.ts`, `navigation.ts`, `compatibility.ts`, and barrel `index.ts` provide access and migration compatibility.
  - Consumers: `app/routes/documents.tsx`, `app/components/document-catalog-content.tsx`; legal references and previews also import it through `app/data/legal-references.ts`, `reference-previews.ts`, and fixtures.

- **Loose hand-authored case-guide family**
  - `app/data/case-guide-types.ts` (125 lines) defines route/case/stage/condition/document/deadline/source models.
  - `app/data/case-guide-routes.ts` (2,090 lines) is the main authored route dataset.
  - `app/data/case-guide-navigation.ts` (43 lines) provides navigation lookup.
  - Direct UI consumers are `app/routes/case.tsx` and `app/components/case-study-content.tsx`.
  - `document-index.ts` and `legal-references.ts` also depend on case-guide IDs/routes, creating backlinks and typed cross-domain references.

- **Other adjacent authored/legacy data**
  - `app/data/legal-types.ts` (97 lines) contains atlas-wide `OfficialSource`, map node, case document/deadline, case study, and root dataset types.
  - `app/data/legal-data.ts` (1,973) and node-guide files feed `legal-map-content.tsx`.
  - `app/data/kpa-article-index.ts` (518), `kpa-guide-data.ts` (1,773), and `kpa-guide-module-articles.ts` (216) support the legacy KPA course.
  - `app/data/document-index.ts` (165) adapts document-library records with case-guide backlinks; consumers are `routes/documents.tsx` and `document-catalog-content.tsx`.
  - `app/data/legal-corpus.ts` (32) is an explicit legacy compatibility facade for the old KPA source reader (`app/data/legal-corpus.ts:7-14`).

# Problems

- **HIGH — KPA has a parallel editorial and learning architecture instead of using the canonical document families.** The newer curriculum deliberately excludes KPA—`AuthoredLearningDocumentId = Exclude<LegalDocumentId, "kpa">` (`app/data/legal-library/learning/types.ts:5`)—while KPA maintains separate `kpa-article-explanations`, `kpa-guide-data`, `kpa-guide-module-articles`, and article-index shapes. Canonical query code compensates by importing `getKpaArticleExplanation` directly (`app/data/legal-library/query.ts:1`). This makes KPA a permanent special case across storage, loading, adaptation, and UI.

- **HIGH — Equivalent provision explanation concepts are duplicated.** `KpaArticleExplanation` has `summary`, `rules`, `legalEffect`, and `foreignersCase` (`app/data/kpa-article-explanations/types.ts:8-14`); `LegalExplanation` repeats the same fields plus editorial metadata and claims (`app/data/legal-library/contracts.ts:123-141`); `LegalLearningProvisionGuideItem` repeats them again as a view shape (`app/data/legal-library/learning/view-types.ts:27-36`). Changes to an explanation contract therefore require parallel adapters and increase semantic drift risk.

- **HIGH — The canonical query module is an oversized integration hub.** `app/data/legal-library/query.ts` is 825 lines and imports generated corpus data, legacy KPA explanations, editorial loaders, legal-text formatting, contracts, validation, resolution, and navigation-level construction (`app/data/legal-library/query.ts:1-18`). The quote “The generated registry is the trusted source of the JSON shape” appears beside a localized assertion (`app/data/legal-library/query.ts:115-117`), but runtime parsing, domain conversion, editorial resolution, and public querying remain colocated.

- **MEDIUM — Generated and authored assets share the same `app/data` deployment tree.** Generated edition JSON and registries sit immediately beside hand-authored `legal-library`, KPA, map, document, and case-guide content. The distinction is policy-based rather than structural: generated registries have “Do not edit by hand” headers (`app/data/legal-corpus/registry.generated.ts:1`), while JSON artifacts themselves do not. The workflow protects generated paths (`scripts/legal-corpus/lib/workflow.mjs:196-205`), but ordinary editors can still mistake corpus JSON for authored application data.

- **MEDIUM — Core ID types depend on generated application artifacts.** `legal-library/contracts.ts` imports `reference-registry.generated.ts` and derives every document, edition, and provision union from it (`app/data/legal-library/contracts.ts:1-18`). This delivers excellent literal safety, but it means foundational contracts cannot be typechecked or reused independently of a successful corpus-generation step.

- **MEDIUM — Evidence-document content and its registry are split across directory boundaries.** `document-library/registry.ts` imports the actual dataset from `~/data/document-guides` (`app/data/document-library/registry.ts:6`), while contracts, queries, fixtures, and registry live in `document-library/`. The registry then performs exact fixture-style coverage validation—“Document guide IDs do not match…” (`app/data/document-library/registry.ts:40-49`). Ownership is unclear because the content is outside the family that validates and serves it.

- **MEDIUM — Case guides inherit and rewrite legacy atlas types rather than owning a clean contract.** `CaseGuideDocument` and `CaseGuideDeadline` use `Omit` over `CaseDocument` and `CaseDeadline`, then replace most text fields with `LegalTextValue` (`app/data/case-guide-types.ts:1-27`). `CaseGuideSource` similarly rewrites `OfficialSource.note` (`app/data/case-guide-types.ts:29-31`). This couples the case-guide domain simultaneously to `legal-types.ts` and `legal-library/legal-text.ts`.

- **MEDIUM — Multiple registry styles coexist without a common convention.** The corpus uses generated object registries, editorial uses lazy loader records (`app/data/legal-library/editorial/index.ts:9-20`), learning uses an eager object registry (`app/data/legal-library/learning/index.ts:13-25`), KPA uses a positional lazy-loader array (`app/data/kpa-article-explanations/index.ts:7-12`), and evidence documents use runtime `Map`s (`app/data/document-library/registry.ts:93-100`). These are individually reasonable but complicate generic tooling, validation, and future feature placement.

- **LOW — Presentation contracts live in the data layer beside authored source contracts.** `LegalLearningModuleView` and its nested UI-oriented types occupy `app/data/legal-library/learning/view-types.ts:4-71`, while `view-model.ts` produces them. Components consequently import a data-layer presentation model directly, e.g. `app/components/legal-learning-module-content.tsx:18`.

- **LOW — Compatibility adapters preserve ambiguous historical APIs.** `app/data/legal-corpus.ts` states, “Compatibility shape retained for the existing KPA source reader” and accepts either document or edition ID because the old parameter name was misleading (`app/data/legal-corpus.ts:7-14`). `kpa-articles-content.tsx:26` still imports this facade, keeping legacy semantics alive.

# Notables

- **Strong generated-data boundary in UI:** no inspected route or component imports `app/data/legal-corpus/**.json` or `registry.generated.ts` directly. Raw structures are contained behind `legal-library/query.ts`; the KPA component reaches only the compatibility facade.
- **Good source-versus-editorial separation:** generated corpus provisions are treated as source locators, while reviewed explanations are hand-authored and lazily loaded through `editorial/index.ts`.
- **Useful runtime integrity checks:** corpus manifests and provisions are validated for shape, IDs, page ranges, statuses, and SHA-256 fields (`app/data/legal-library/query.ts:70-145`). Evidence documents validate exact ID coverage, alias uniqueness, and relation integrity (`app/data/document-library/registry.ts:31-91`).
- **Strong literal identity typing:** document-specific edition/provision IDs flow from the lightweight generated registry into references and editorial entries (`app/data/legal-library/contracts.ts:4-18`). A redesign should preserve this safety even if generation output moves behind a cleaner package boundary.
- **Lazy loading is already used for heavy authored content:** both KPA explanation parts (`app/data/kpa-article-explanations/index.ts:7-12`) and document editorial tables (`app/data/legal-library/editorial/index.ts:9-20`) are dynamically imported.
- **Large authored files are an architectural constraint:** editorial parts reach roughly 1,700 lines each; KPA explanation parts exceed 2,000 lines; `case-guide-routes.ts` is 2,090 lines. Any restructuring should retain deterministic splitting and avoid forcing a single eager bundle.
- **Generated registry tests exist:** `scripts/legal-corpus/test/registry.test.mjs` tests deterministic full and lightweight registry rendering, while workflow tests protect generated write scopes.
- **The corpus workflow distinguishes generation from promotion:** `current-editions.json` and workflow promotion logic imply that fetching/building an edition does not automatically make it current; a redesign must preserve that legal-safety constraint.
- **No files were modified; large JSON and authored datasets were inventoried and sampled rather than read in full.**
