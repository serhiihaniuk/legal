# Summary

The corpus pipeline has a sensible conceptual split between immutable source configurations, generated extraction facts, reviewed editorial content, explicit current-edition pointers, and application registries. A schema-v2 document config drives a Node-only builder that fetches official metadata/PDF bytes, extracts normalized pages and provisions, validates them, stages artifacts, and publishes edition directories atomically (`scripts/legal-corpus/build-document.mjs:180-289`). The higher-level workflow adds work-order preparation, edition comparison, Git-based write-scope checks, manual legal-status evidence, and explicit promotion (`scripts/legal-corpus/lib/workflow.mjs:219-358`; `scripts/legal-corpus/workflow.mjs:187-233`). However, promotion validation does not revalidate corpus facts or editorial files; it largely trusts mutable work-order declarations and previously written diagnostics (`scripts/legal-corpus/lib/workflow.mjs:437-480`). Update preparation can also compare editions from different documents, and dependant discovery is unimplemented despite the documentation promising it. The unit tests cover many pure functions and safety guards, but not the real network builder, filesystem publication, complete CLI lifecycle, crash recovery, or promotion transaction. The strongest parts worth retaining are explicit document/edition identities, stable provision IDs and hashes, staging with rollback, fail-closed current-edition pointers, exact write scopes, and an explicit human approval token.

# Inventory

- **Command surface → npm lifecycle commands**
  - `corpus:build` and KPA convenience build invoke `scripts/legal-corpus/build-document.mjs`.
  - `corpus:prepare`, `corpus:validate`, `corpus:diff`, and `corpus:promote` invoke `scripts/legal-corpus/workflow.mjs`.
  - `corpus:generate` invokes `scripts/legal-corpus/generate-registry.mjs`.
  - Tests are `test:corpus`, `test:editorial`, and `test:previews` (`package.json:7-16`).

- **Configuration inputs → immutable-edition descriptions**
  - Five schema-v2 JSON files exist under `legal-corpus/documents/`: KPA, `ustawa o cudzoziemcach`, `PPSA`, `powierzanie pracy`, and the temporary-residence application regulation.
  - Each config provides stable `documentId`, immutable `editionId`, citation, official ELI/API/PDF URLs, legal-state dates, extraction profile, and expected counts/coverage; representative structure is `legal-corpus/documents/kpa-2025-1691.json:1-24`.
  - `scripts/legal-corpus/lib/config.mjs` validates schema version, lowercase IDs, real calendar dates, HTTPS URLs, supported profiles, extraction expectations, and optional structured legal-status evidence (`scripts/legal-corpus/lib/config.mjs:3-16`, `43-80`, `147-210`, `223-290`).

- **Build stage → config and official sources to generated edition artifacts**
  - Reads: the passed `legal-corpus/documents/<edition>.json`; existing `app/data/legal-corpus/<editionId>/manifest.json`; existing `public/legal-sources/<editionId>/manifest.json` and `source.pdf`, when present (`scripts/legal-corpus/build-document.mjs:76-124`, `180-213`).
  - Fetches: `config.source.metadataUrl` and `config.source.pdfUrl` concurrently (`scripts/legal-corpus/build-document.mjs:210-213`).
  - Transforms: PDF → normalized one-based pages via PDF.js; pages → article/paragraph/annex provisions; provisions → structure, hashes, statistics, compatibility articles, diagnostics, and manifest (`scripts/legal-corpus/build-document.mjs:226-263`).
  - Stages in OS temp storage, then writes:
    - `app/data/legal-corpus/<editionId>/manifest.json`
    - `metadata.json`
    - `pages.json`
    - `provisions.json`
    - `structure.json`
    - `diagnostics.json`
    - `articles.json`
    - `public/legal-sources/<editionId>/manifest.json`
    - `public/legal-sources/<editionId>/source.pdf`
    (`scripts/legal-corpus/build-document.mjs:264-289`).
  - Existing data/public directories are renamed to backups before staged directories are installed; an in-process error attempts rollback (`scripts/legal-corpus/build-document.mjs:131-172`).

- **Extraction library → supported source shapes**
  - `polish-statute-art-v1` recognizes line-leading `Art.` locators, including lettered and superscript suffixes (`scripts/legal-corpus/lib/extraction.mjs:20-27`, `69-121`).
  - `polish-regulation-paragraph-v1` recognizes line-leading `§` units and numbered annexes near the start of a page (`scripts/legal-corpus/lib/extraction.mjs:192-257`).
  - Output provisions receive deterministic document-scoped IDs, normalized source-text hashes, PDF hashes, order and page spans; current profiles generate flat roots with no children (`scripts/legal-corpus/lib/extraction.mjs:259-303`).
  - PDF extraction uses `pdfjs-dist`, disables workers, and records normalized text, character count, and text-layer availability per page (`scripts/legal-corpus/lib/extraction.mjs:306-330`).

- **Artifact construction → compatibility and navigation**
  - `scripts/legal-corpus/lib/artifacts.mjs` creates deterministic root/order/parent/children/previous/next maps (`scripts/legal-corpus/lib/artifacts.mjs:3-50`).
  - It projects article provisions back into the legacy `articles.json` shape (`scripts/legal-corpus/lib/artifacts.mjs:52-62`).
  - It constructs extraction statistics and a manifest containing source identity, legal-status evidence, checksum, counts, local PDF URL, and `builtAt` (`scripts/legal-corpus/lib/artifacts.mjs:64-87`, `89-179`).

- **Corpus validation → generated facts against config and source**
  - `scripts/legal-corpus/lib/validation.mjs` compares ELI identity with the metadata URL, citation with `displayAddress`, status/in-force facts, and PDF magic bytes (`scripts/legal-corpus/lib/validation.mjs:88-200`).
  - It enforces expected page/provision counts and minimum text coverage (`scripts/legal-corpus/lib/validation.mjs:203-241`).
  - It validates provision IDs, locators, ordering, page bounds, PDF/text checksums, status values, hierarchy consistency/cycles, and generated structure consistency.
  - Fatal diagnostics block publication; warnings are persisted in `diagnostics.json`.

- **Prepare stage → build plus editorial work packet**
  - Reads: Git `HEAD`; the config; builder outputs `manifest.json`, `diagnostics.json`, and `provisions.json`; for updates, old `provisions.json`; and `legal-corpus/prompts/add-or-update-document.md` (`scripts/legal-corpus/lib/workflow.mjs:233-250`, `268-280`, `327-357`).
  - Writes:
    - rebuilt edition artifacts through `build-document.mjs`;
    - `app/data/legal-corpus/<newEditionId>/edition-diff.json`;
    - by default `legal-corpus/work-orders/<documentId>-<editionId>.json`;
    - matching `.md` filled from the prompt template.
  - The work order starts with unresolved review state and `recommendation: "HOLD"` and records exact editorial scope plus all generated paths (`scripts/legal-corpus/lib/workflow.mjs:283-325`).
  - `legal-corpus/work-orders/` is created on demand and is not currently present in the repository.

- **Diff stage → edition-to-edition classification**
  - Reads old/new `provisions.json` and old/new `manifest.json` from `app/data/legal-corpus/<editionId>/` (`scripts/legal-corpus/workflow.mjs:133-147`).
  - Requires matching `documentId`, then classifies stable IDs as added, changed, removed, or unchanged based on normalized text hash plus locator/status/hierarchy fields (`scripts/legal-corpus/workflow.mjs:148-161`; `scripts/legal-corpus/lib/workflow.mjs:91-130`).
  - Writes only when `--output` is supplied; otherwise emits JSON to stdout.

- **Validate stage → work-order assertions and Git scope**
  - Reads the work order, its referenced manifest and diagnostics, Git paths changed since the captured base commit, and untracked paths (`scripts/legal-corpus/workflow.mjs:53-105`; `scripts/legal-corpus/lib/workflow.mjs:437-463`).
  - Checks exact editorial scope, no fatal diagnostic entries, complete structured legal-status evidence, review completion, empty review unresolved list, and the exact recommendation string (`scripts/legal-corpus/lib/workflow.mjs:437-480`).
  - Writes the validation result back into the same work-order JSON (`scripts/legal-corpus/workflow.mjs:164-177`).

- **Registry generation → generated artifacts to TypeScript runtime/type indexes**
  - Reads every complete `app/data/legal-corpus/*/{manifest,provisions}.json` pair plus `app/data/legal-library/current-editions.json` (`scripts/legal-corpus/generate-registry.mjs:41-81`, `236-251`).
  - Rejects malformed identities, incomplete manifest/provision pairs, duplicate/cross-document provision IDs, mismatched provision ownership, invalid page bounds, missing/unknown current pointers, and ambiguous editions (`scripts/legal-corpus/generate-registry.mjs:83-132`, `136-173`).
  - Writes `app/data/legal-corpus/registry.generated.ts` and `app/data/legal-corpus/reference-registry.generated.ts` concurrently (`scripts/legal-corpus/generate-registry.mjs:252-255`).
  - The full registry imports manifests and provision text; the reference registry contains lightweight IDs only (`scripts/legal-corpus/generate-registry.mjs:183-234`).

- **Promotion stage → explicit current-edition transition**
  - Reads and revalidates the work order/Git scope, checks `--approve <documentId>@<editionId>`, and reads `app/data/legal-library/current-editions.json`.
  - Writes the current pointer atomically, runs registry generation, attempts pointer/registry rollback if generation throws, then writes `legal-corpus/promotions/<documentId>-<editionId>.json` (`scripts/legal-corpus/workflow.mjs:187-233`).
  - `legal-corpus/promotions/` is created on demand and is not currently present.

- **End-to-end data flow**
  - `legal-corpus/documents/*.json`
    → official metadata/PDF URLs
    → PDF.js normalized pages
    → profile extraction
    → provision/source hashes and structure
    → validation/diagnostics
    → staged `app/data/legal-corpus/<editionId>/*` plus `public/legal-sources/<editionId>/*`
    → optional old/new `edition-diff.json`
    → work-order JSON/Markdown and human editorial changes
    → work-order validation
    → explicit update of `app/data/legal-library/current-editions.json`
    → regenerated `registry.generated.ts` and `reference-registry.generated.ts`
    → application `legal-library` query/resolution module.

- **Corpus tests → what is covered**
  - `scripts/legal-corpus/test/corpus.test.mjs` covers schema/HTTPS validation, structured legal evidence, metadata contradictions and missing dates, article-ID normalization, paragraph/annex extraction, duplicate/page-bound failures, compatibility article projection, and deterministic navigation structure (`scripts/legal-corpus/test/corpus.test.mjs:71-290`).
  - `scripts/legal-corpus/test/registry.test.mjs` covers missing/ambiguous current pointers, manifest/provision ownership mismatch, deterministic rendering, source-order preservation, and the lightweight registry contract (`scripts/legal-corpus/test/registry.test.mjs:57-111`).
  - `scripts/legal-corpus/test/workflow.test.mjs` covers diff classification, traversal/absolute/glob/generated scope rejection, symlink rejection where supported, extra changed-file detection, and legal-status evidence shape/preservation (`scripts/legal-corpus/test/workflow.test.mjs:16-135`).
  - Untested: live ELI fetching; PDF.js extraction from real PDFs; fetch timeout/content-type behavior; whole `build-document` execution; staging/install/rollback; existing-edition replacement; CLI argument parsing; prepare/validate/promote integration; wrong-document update preparation; real Git diff semantics; work-order and promotion-record writing; registry partial-write/rollback behavior; crash interruption; and determinism of committed real artifacts across repeated builds.

- **Editorial validator → authored coverage against current corpus**
  - `scripts/legal-editorial/validate.mjs` reads `app/data/legal-library/current-editions.json`, current non-KPA `provisions.json` files, and `app/data/legal-library/editorial/**/part-*.ts` (`scripts/legal-editorial/validate.mjs:5-18`, `145-175`, `249-274`).
  - It lexically extracts only part-level `documentId`/`editionId` and entry-level `provisionId`/`reviewStatus` (`scripts/legal-editorial/validate.mjs:56-68`, `151-160`).
  - It checks current document/edition membership, review-status vocabulary, duplicate authored provisions, and complete one-entry-per-current-provision coverage; `--incomplete` downgrades non-reviewed/missing entries to warnings (`scripts/legal-editorial/validate.mjs:277-388`, `392-448`).
  - KPA is explicitly excluded from its expected corpus (`scripts/legal-editorial/validate.mjs:168-172`).

- **Reference-preview validator → runtime resolution against application registries**
  - `scripts/reference-previews/validate.mjs` starts Vite in SSR middleware mode and loads `app/data/reference-preview.fixture.ts` through the application alias/runtime (`scripts/reference-previews/validate.mjs:5-20`).
  - The fixture enumerates every registered legal document, edition and provision, evidence document, map node, case route, and official source (`app/data/reference-preview.fixture.ts:86-186`).
  - It validates stable cache identity, status vocabulary, title/summary limits, HTTPS sources, exact requested edition, reviewed/draft/source-only behavior, known external-source metadata, and fail-closed unknown/insecure/malformed references (`app/data/reference-preview.fixture.ts:45-83`, `211-260`).

# Problems

- **HIGH — Promotion does not revalidate the corpus or editorial content.** `validateWorkOrder` reads only the referenced manifest and diagnostics, then trusts work-order fields such as `review.completedAt` and `recommendation` (`scripts/legal-corpus/lib/workflow.mjs:450-471`: “`Work order is not READY_FOR_EXPLICIT_PROMOTION`”). It does not reread `provisions.json`, `structure.json`, `source.pdf`, editorial files, or run `validateCorpusFacts`/`validateEditorial`. **Failure scenario:** after preparation, `provisions.json` is manually altered while the old diagnostics remain clean; because generated paths are allowed in scope checking (`scripts/legal-corpus/workflow.mjs:77-85`), promotion can accept the tampered artifact, and registry generation performs only partial provision validation.

- **HIGH — Editorial approval is self-attested rather than mechanically connected to editorial validation.** Promotion checks mutable work-order strings but never invokes `scripts/legal-editorial/validate.mjs`; that validator itself is exposed only as a separate npm script (`package.json:15`). **Failure scenario:** a reviewer sets `completedAt`, clears `review.unresolved`, and changes the recommendation without supplying complete or valid explanation files; promotion proceeds because no editorial coverage/schema check runs in the lifecycle.

- **HIGH — Update preparation can diff unrelated documents.** Standalone `corpus:diff` compares manifests and rejects different `documentId` values (`scripts/legal-corpus/workflow.mjs:142-150`), but `prepareWorkOrder` reads only the old edition’s `provisions.json` and never its manifest (`scripts/legal-corpus/lib/workflow.mjs:268-281`). **Failure scenario:** `--old-edition kpa-2025-1691` is accidentally used while preparing a new `PPSA` edition; the packet reports a mass add/remove diff instead of stopping on identity mismatch.

- **HIGH — Dependant discovery is promised but not implemented.** Both prepare and standalone diff hardcode `reviewDependants: []` (`scripts/legal-corpus/lib/workflow.mjs:256-267`; `scripts/legal-corpus/workflow.mjs:151-157`), while the documented workflow says updates should identify editorial dependants. **Failure scenario:** a removed provision remains referenced by an explanation, curriculum, case, or typed cross-link, yet the generated review packet does not ask anyone to inspect it.

- **HIGH — Rebuilding an “immutable” edition silently replaces it and is not idempotent.** The README says editions are immutable (`legal-corpus/README.md:3-4`, `35-36`), but publication renames any existing edition directories to backups and replaces them (`scripts/legal-corpus/build-document.mjs:148-161`). `builtAt` is regenerated on every run (`scripts/legal-corpus/build-document.mjs:127-129`, `255-262`), so identical source bytes still change committed output; changed official metadata can also overwrite `metadata.json` while the same PDF checksum allows the edition identity to pass. **Failure scenario:** rerunning a pinned edition months later rewrites audit metadata and build time, losing the exact earlier snapshot under the same edition ID.

- **HIGH — Extractor ambiguity is silently discarded before validation can see it.** Article extraction explicitly keeps only the last duplicate occurrence (`scripts/legal-corpus/lib/extraction.mjs:171-180`), and paragraph/annex extraction keeps only the first duplicate (`scripts/legal-corpus/lib/extraction.mjs:241-247`). The comment claims validation may reject duplicates, but the duplicates have already been removed. **Failure scenario:** a repeated `Art. 10` in an annex or malformed PDF text causes the wrong occurrence/page span to be retained while expected provision count still matches.

- **MEDIUM — Promotion is not one crash-safe transaction.** The pointer is written first, registries second, and promotion record last (`scripts/legal-corpus/workflow.mjs:200-232`). In-process registry errors trigger rollback, but termination between steps cannot. **Failure scenario:** process termination after pointer replacement but before registry generation leaves the pointer and generated registries inconsistent; termination after registry generation but before record writing leaves a promoted edition without its audit record.

- **MEDIUM — Registry outputs can be partially overwritten.** The two generated TypeScript files are written directly and concurrently with `Promise.all`, without temporary files or a rename transaction (`scripts/legal-corpus/generate-registry.mjs:252-255`). **Failure scenario:** one write succeeds and the other fails because of disk/permission interruption, leaving full and lightweight registries describing different states.

- **MEDIUM — Work-order legal evidence validation is weaker than config validation.** Config evidence uses real calendar-date and HTTPS validation (`scripts/legal-corpus/lib/config.mjs:43-80`, `159-202`), while work-order validation accepts any non-empty strings for `checkedAt`, `amendmentsCheckedThrough`, and optional legal dates (`scripts/legal-corpus/lib/workflow.mjs:371-389`). **Failure scenario:** values such as `"yesterday"` or `"2026-99-99"` satisfy promotion validation despite being invalid evidence dates.

- **MEDIUM — The editorial validator validates coverage, not the documented editorial contract.** It extracts only four fields (`scripts/legal-editorial/validate.mjs:151-160`) and therefore does not validate `verifiedAt`, legal-state date, claim kinds, source locators, related references, or authoritative HTTPS source links. **Failure scenario:** every provision has a `"reviewed"` entry but its claims are unsourced, stale, or linked over HTTP; `test:editorial` still passes.

- **MEDIUM — KPA is hardcoded out of generic editorial validation.** `if (documentId === "kpa") continue` excludes the largest corpus from current-edition coverage checks (`scripts/legal-editorial/validate.mjs:168-172`). **Failure scenario:** KPA editorial data becomes stale or incomplete after an edition change without this validator reporting it.

- **MEDIUM — Prepare accepts a dirty baseline instead of proving a clean starting state.** It records only `git rev-parse HEAD` (`scripts/legal-corpus/lib/workflow.mjs:233-240`); later validation accepts all changes under approved/generated paths since that commit (`scripts/legal-corpus/workflow.mjs:53-105`). **Failure scenario:** pre-existing unreviewed edits inside an approved editorial file are silently included in the packet’s accepted change set.

- **MEDIUM — Network handling is minimal and can stall or accept mislabeled responses.** `fetchBytes` has no timeout, retry, abort signal, or content-type validation (`scripts/legal-corpus/build-document.mjs:60-69`). PDF magic and JSON parsing catch some wrong bodies later, but not indefinite requests. **Failure scenario:** an ELI endpoint hangs and blocks preparation indefinitely, or a proxy returns syntactically valid but unintended JSON that only partially satisfies identity checks.

- **MEDIUM — No dry-run exists for mutating lifecycle commands.** The CLI exposes only `prepare|diff|validate|promote` (`scripts/legal-corpus/workflow.mjs:236-250`); prepare immediately builds and writes artifacts/work orders, validate rewrites its work order, and promote changes pointers. **Failure scenario:** an operator cannot safely preview generated paths, diffs, or promotion changes before touching committed data.

- **MEDIUM — Critical lifecycle behavior has only unit-level coverage.** Test declarations show pure-function cases but no full builder or workflow command test (`scripts/legal-corpus/test/corpus.test.mjs:71-290`; `scripts/legal-corpus/test/workflow.test.mjs:16-135`). **Failure scenario:** a change breaks staging, CLI ordering, Git interaction, or rollback while every existing corpus test remains green.

- **LOW — Repository-root handling is inconsistent and execution-directory dependent.** Builder, workflow, and generator derive the project root from `process.cwd()` rather than their module location (`scripts/legal-corpus/build-document.mjs:188-200`; `scripts/legal-corpus/generate-registry.mjs:236-244`). **Failure scenario:** invoking a script from a subdirectory resolves config and output paths under the wrong directory.

- **LOW — Documentation has visible implementation drift.** The README’s artifact list omits `provisions.json`, `structure.json`, and `diagnostics.json` (`legal-corpus/README.md:6-12`), while the prompt still calls itself a “target template for a future deterministic preparation script” even though prepare already fills it (`legal-corpus/prompts/add-or-update-document.md:3`). **Failure scenario:** maintainers follow stale documentation and misunderstand which artifacts are canonical or whether the workflow is active.

# Notables

- The separation between stable `documentId`, immutable `editionId`, generated source facts, editorial prose, and explicit current pointers is the right domain model and should survive the redesign (`legal-corpus/documents/kpa-2025-1691.json:2-4`; `app/data/legal-library/current-editions.json:1-7`).
- The official PDF is consistently retained as the visual source of truth, while extracted text is explicitly treated as a locator/learning aid (`legal-corpus/README.md:21-22`).
- Schema-v2 config validation is unusually strong for a POC: real date checking, HTTPS enforcement, named profiles, explicit expected extraction facts, and structured entry-into-force/transitional evidence (`scripts/legal-corpus/lib/config.mjs:43-80`, `95-210`).
- Provision identity is deterministic and document-scoped, including careful handling of lettered and superscript article numbers (`scripts/legal-corpus/lib/extraction.mjs:69-121`).
- Generated provision records carry both PDF and normalized text hashes, one-based bounded pages, explicit status, order, and hierarchy fields; these are good audit and diff primitives.
- The builder validates before publication and stages both application data and public source artifacts, with rollback for ordinary in-process filesystem failures (`scripts/legal-corpus/build-document.mjs:241-289`).
- Write-scope controls reject absolute paths, traversal, globs, directories, generated/promotion-owned paths, and symlink crossings (`scripts/legal-corpus/lib/workflow.mjs:29-89`); this is worth keeping and extending with a clean-baseline requirement.
- Current editions are explicit rather than inferred from filenames, and registry generation fails closed on missing, unknown, or ambiguous pointers (`scripts/legal-corpus/generate-registry.mjs:136-173`).
- Two generated registries are a useful performance boundary: one imports full manifests/provisions, while the other contains IDs only (`scripts/legal-corpus/generate-registry.mjs:183-234`).
- The explicit approval token `<documentId>@<editionId>` and named reviewer record are good human-control mechanisms (`scripts/legal-corpus/workflow.mjs:187-198`, `218-232`).
- The reference-preview fixture is broad integration evidence rather than a superficial unit test: it traverses actual runtime registries, lazy editorial imports, all reference categories, historical editions, source-only fallbacks, cache identity, and malformed input (`app/data/reference-preview.fixture.ts:86-260`).
- The redesign must preserve Node-only ingestion, committed generated artifacts, local PDFs, KPA compatibility projection, official-source links, old editions, and the rule that building or fetching an edition never makes it current automatically.
