# Source-first legal knowledge architecture implementation plan

**Status:** **Active — the single source of truth for implementation.**  
**Supersedes:** the retired restructuring plan, its completed execution prompts, and the stale session handoff.  
**Accepted architecture:** [Multi-document legal library architecture](../architecture/legal-library.md)  
**Scope:** authored knowledge units and their deterministic publication; preserve the existing legal corpus, public routes, compatibility Adapters, and legal-source safety rules.

This is an implementation plan, not a replacement for the accepted library architecture or for the official source. It turns the source-first editorial decisions into mergeable work. A generated edition or an AI-produced draft is never a legal conclusion and never promotes itself to current law.

## 1. Goal and current problem

### Goal

Make every published piece of legal knowledge independently reviewable, source-traceable, and safe to publish in parallel, while keeping one resolved publication contract for every learner-facing surface:

- a full page or route;
- a typed hover preview;
- a compact source register with exact locators; and
- a deterministic dependency/review result.

The result should let a reviewer inspect one unit on one page without reconstructing its meaning from a large neighboring file or a manually maintained index. The same authored claim must not acquire different summaries, sources, or dependencies merely because it is rendered in the map, a case, a document guide, or a learning module.

### Current problem

The provision explanation split is a good foundation and must be preserved: current reviewed explanations live as one unit per provision under `app/data/legal-library/editorial/<documentId>/articles/`, with a document-level projection for existing callers. The locality problem is elsewhere:

- A map page's ownership is spread across `app/data/legal-map/data.ts`, `app/data/legal-map/node-guides.ts` and its family files, `app/data/legal-map/journey.ts`, and preview projections in `app/data/references/reference-previews.ts`. A reviewer cannot change one topic without tracing several parallel structures.
- Large authored families still concentrate unrelated review work in `app/data/case-guides/routes.ts`, `app/data/legal-library/learning/kpa.ts` and the other learning files, and `app/data/document-library/guides.ts`.
- Aggregate/editorial indexes such as `app/data/legal-library/editorial/<documentId>/index.ts` and family registries are vulnerable to merge conflicts and manual drift. A dependency is easy to copy into a second list instead of deriving it from the typed reference that already states the dependency.

These are authoring and publication-locality problems, not a reason to replace the corpus pipeline, duplicate generated source text beside prose, or redesign stable URLs.

## 2. Source-first flow

### Source flow that remains authoritative

```text
official ELI / Sejm metadata and PDF
        ↓ deterministic preparation
immutable generated edition (manifest, pages, provisions, structure, hashes)
        ↓ legal-library query/resolution
LegalProvision + official PDF/ELI locator
```

- The official PDF remains the visual source of truth. Extracted pages and provision text are locators and learning aids.
- An edition is immutable and keyed by `LegalEditionId`; generated artifacts never overwrite authored prose.
- A provision is generated source data, not an explanation. Authored text must refer to it through a typed document/provision subject and exact locator.
- `sourcePdfSha256` and normalized provision hashes support comparison and review discovery. An unchanged source hash does **not** automatically validate unchanged legal effect, interpretation, case law, administrative practice, entry into force, or transitional rules.
- Promotion to the current edition remains explicit human approval after legal-status, timing, source, editorial, and scope review. Fetching, building, validating, or generating an edition never promotes it.

### Target publication flow

```text
source provision / official source
        ↓ typed claim basis and authored summary
one authored knowledge unit
        ↓ deterministic reference and edition resolution
resolved publication Module
        ↓
full page/route + hover preview + source register + dependency/review packet
```

The source is evidence for an authored unit, not a substitute for its explanation. A resolved publication Module combines the unit's family-specific body with resolved source facts, typed references, review status, edition metadata, preview data, and derived dependencies. Routes and preview renderers consume this Module; they do not import an editorial file, generated JSON, or an aggregate index directly.

## 3. Decisions (not open design questions)

### 3.1 Authored-unit boundary

- Every published authored unit has **one independently reviewable file**. The file may use shared typed helpers, but its learner-facing claims and family-specific body are reviewed as one unit.
- Every unit has one common editorial envelope containing only: identity, subject, summary, verification/review metadata, typed claim basis, and typed relationships. The envelope is not a universal body template.
- There is **no universal body schema**. A provision explanation, map topic, case route, evidence-document guide, and learning module keep the body shape that teaches their own subject well. Shared rendering may consume a resolved Module, but it must not flatten unlike bodies into mandatory sections.
- A provision explanation has exactly one primary provision subject: one stable document/provision pair (and its checked edition). Related provisions are typed claims or relationships, not additional primary subjects.
- A map topic has a map-topic subject and one or many typed bases. Its bases can identify the provisions, evidence documents, official sources, or other typed knowledge needed to support that topic; the topic is not relabelled as one of those bases.
- Case routes, document guides, and learning modules similarly name their own stable subject and use typed bases/relationships for legal and evidence dependencies.

### 3.2 Claims, references, and dependencies

- Each material claim records a typed basis: statute/provision, official guidance, case law, practical inference, or an explicitly labelled item requiring verification. A legal basis includes its document, provision, edition compatibility, and precise locator where applicable.
- Relationships and claim references use the existing typed reference registries and runtime guards. A bare article number, title match, or surrounding prose never creates a link.
- The dependency graph is derived from typed references in the envelope and family body. It is not a second hand-authored `dependsOn` list. A migration may temporarily report a legacy dependency for comparison, but the published graph has one derivation rule.
- Inbound and outbound dependencies, unresolved references, mismatched document/edition pairs, cycles, and stale source compatibility are deterministic diagnostics. Reviewers fix the unit or its typed reference, not a generated graph.

### 3.3 Publication and previews

- A route resolves an authored unit plus its generated source facts into a `PublishedKnowledgeModule`. It does not compose a second page model by copying fields from the unit.
- A hover preview normally derives from the same unit summary and the same resolved source fallback used by the publication Module. There is no separate hover-content file.
- Without matching reviewed editorial content, the preview and page use a visibly labelled source-only fallback: exact locator, edition/source metadata, and bounded generated source excerpt. They do not invent interpretation.
- Full pages, previews, source registers, and dependency packets use one resolution result, so edition mismatch and review status cannot be hidden by a surface-specific fallback.

### 3.4 Indexes, routes, and compatibility

- Registries, document projections, publication manifests, and dependency graphs are deterministic/generated outputs. Reviewers never hand-edit aggregate indexes to make a unit appear published.
- Stable public routes remain stable. Existing compatibility Adapters remain at the route boundary and delegate to resolved Modules; this plan does not remove bookmarked URLs or create a second content store for compatibility.
- The `legal-library` query/resolution Module remains the only application-facing path to generated corpus facts. Raw generated text is not copied into editable knowledge-unit directories.

## 4. Target layout and ownership

The exact filenames can be introduced incrementally, but the ownership and generated/authored separation below are normative:

```text
legal-corpus/
  documents/<editionId>.json                 # authored source configuration
  work-orders/<documentId>-<editionId>.json  # generated review packet input

app/data/legal-corpus/<editionId>/            # generated, immutable edition facts
  manifest.json
  metadata.json
  pages.json
  provisions.json
  structure.json
  diagnostics.json
  edition-diff.json
public/legal-sources/<editionId>/source.pdf  # generated official visual source

app/data/legal-library/editorial/<documentId>/
  articles/                                   # existing provision units; preserve
    article-<provisionId>.ts                  # one primary provision explanation
  index.ts                                    # deterministic/generated projection

app/data/legal-map/editorial/topics/
  <topicId>.ts                               # one map-topic authored unit
app/data/case-guides/editorial/routes/
  <routeId>.ts                               # one case-route authored unit
app/data/document-library/editorial/guides/
  <documentId>.ts                             # one document-guide authored unit
app/data/legal-library/learning/modules/
  <moduleId>.ts                               # one learning-module authored unit

app/data/legal-knowledge/                      # shared publication implementation
  contracts.ts                                # envelope, typed bases, relationships
  resolve.ts                                  # resolved publication Module
  generated/                                  # registries/graph; never hand-edit
    units.ts
    dependencies.ts
    publication-manifest.ts
```

The family directories above own authored body shape and local terminology. The shared contracts and resolver own only cross-family semantics. `app/data/legal-library/editorial/<documentId>/articles/` remains the canonical home for existing provision explanations; it is not moved merely to make the new layout look uniform.

Generated `pages.json`, `provisions.json`, and source PDF files remain under edition-keyed corpus/source paths. They must not be placed beside editable Ukrainian prose, and no authored unit may copy the generated source text as a second maintained version. The resolver obtains source text, PDF page, ELI link, and hashes through the legal-library Interface.

A generated index may expose the old public shape for compatibility, but it is an output of the unit files and registries. Its generated status and regeneration command must be visible; no review packet may ask a reviewer to edit it manually.

## 5. Implementation phases

Every phase is a small, mergeable change with a reviewable exit condition. A phase may be split into more commits, but it must not combine unrelated source-pipeline, route, and content migrations. Existing public routes and legal-source rules are regression constraints in every phase.

### Phase 1 — contracts and baseline metrics

**Work**

- Define the common envelope, family subject discriminants, typed claim-basis union, typed relationships, review/edition metadata, and `PublishedKnowledgeModule` contract.
- Inventory current units and aggregate indexes at the concrete paths in Section 1. Record unit counts, duplicate identities, missing summaries/bases, direct generated-data imports, manually duplicated dependencies, and route/preview coverage.
- Add representative compile-time/runtime fixtures for one provision, one map topic, one case route, one document guide, and one learning module. Fixtures must include a source-only and a stale-edition case.

**Exit criteria**

- A reviewer can identify a unit's stable identity, family body, subject, source edition, review status, and typed bases without opening an aggregate index.
- The baseline metrics are committed as review evidence and the contracts reject an untyped citation or an ambiguous subject.
- No route or current legal content changes are included in this phase.

**Verification**

- Required gates: `npm run verify` and `npm run verify:content`.
- Also run `npm run typecheck` and `npm run build` when the contract changes affect TypeScript or route imports.
- A planned `npm run knowledge:metrics` command may automate the baseline later; until implemented, its name is a plan only, not an available command.

### Phase 2 — typed claim basis and deterministic dependency graph

**Work**

- Extend or reuse the typed reference contracts for legal provisions, evidence documents, map topics, case routes, learning modules, and official sources.
- Validate each claim's basis, exact locator, source edition compatibility, status, and relationship target at authoring and runtime boundaries.
- Generate the unit registry, outbound/inbound dependency graph, unresolved-reference diagnostics, and review-dependant set from typed references. Do not add a parallel manual `dependsOn` field.
- Add a deterministic fixture showing that a cross-document reference cannot pair the wrong provision or edition.

**Exit criteria**

- Removing a typed reference removes the corresponding derived dependency; no manually duplicated dependency is required to keep the graph correct.
- Registry and graph output is byte-stable for the same inputs and reviewers can trace every edge back to a typed field and locator.
- Unknown, stale, mismatched, and cyclic references fail closed with actionable diagnostics.

**Verification**

- Required gates: `npm run verify` and `npm run verify:content`.
- Run the graph/reference fixtures plus `npm run typecheck` and `npm run build`.
- `npm run knowledge:validate` and `npm run knowledge:graph` are planned future commands only until they are added to the repository.

### Phase 3 — resolved provision publication vertical slice

**Work**

- Select one reviewed provision explanation already under `app/data/legal-library/editorial/<documentId>/articles/`.
- Resolve its generated `LegalProvision`, exact PDF/ELI locator, claim bases, source register, review metadata, and derived dependencies into one `PublishedKnowledgeModule`.
- Make the canonical provision page and its compatibility route consume that Module. Derive the hover preview from its summary; exercise the matching reviewed, draft/stale, and source-only fallbacks without creating preview content files.
- Keep the existing article explanation fields and public routes compatible while proving the new boundary.

**Exit criteria**

- One provision can be reviewed from one file and one rendered page: the page, hover, source register, and dependency packet agree on subject, edition, status, summary, and locator.
- The local PDF opens on the exact recorded page, the official ELI link remains visible, and generated text is labelled as a learning aid.
- An unmatched edition never receives prose silently; unchanged hashes are not treated as legal-effect approval.

**Verification**

- Required gates: `npm run verify` and `npm run verify:content`.
- Run `npm run typecheck` and `npm run build`, then manually check the canonical provision URL and its stable compatibility URL at desktop and 360 px widths, including keyboard focus and hover/fallback states.
- A future `npm run knowledge:review-packet -- <unit>` command may produce the packet described in Section 7; it is not available until implemented.

### Phase 4 — one map-topic vertical slice

**Work**

- Select one representative map topic from the current `app/data/legal-map/` family data.
- Author it as one topic unit with a map-topic subject, an explicit summary, family-specific body, and one or many typed legal/evidence/topic bases.
- Resolve its page, preview, source register, and dependencies through the same publication Module without treating a base provision as the topic subject.
- Preserve the existing map URL and compatibility behavior while comparing learner-visible output.

**Exit criteria**

- The selected topic is independently reviewable from one file; its claims have typed bases and its inbound/outbound edges are generated.
- The page and preview share the resolved summary/source fallback and do not depend on a hand-maintained preview copy.
- The old and new rendered topic agree on the approved content and route contract, or an intentional content difference is recorded for review.

**Verification**

- Required gates: `npm run verify` and `npm run verify:content`.
- Run `npm run typecheck` and `npm run build`; manually check the topic's canonical and compatibility/deep-link routes, source links, keyboard behavior, and 360 px layout.

### Phase 5 — parallel map migration

**Work**

- Split the remaining map topics into one-unit files under the map-topic ownership directory. Divide work by disjoint topic-file sets so reviewers can work in parallel without sharing a large data file.
- Move topic-specific prose, typed bases, relationships, and review metadata out of `data.ts`/family guide collections. Keep journey structure as a generated projection from topic relationships and stable journey metadata, not a second copy of topic content.
- Derive map previews and backlinks from resolved Modules and generated registries. Retire manual topic indexes only after generated parity is proven.

**Exit criteria**

- Every published map topic has one unit file, one stable identity, valid typed bases, and a generated registry entry.
- Every existing map route resolves the expected topic, and no map page imports a large aggregate content file for its authored body.
- The generated journey, preview projection, and dependency graph are reproducible and have no unresolved or duplicate topic IDs.

**Verification**

- Required gates: `npm run verify` and `npm run verify:content` on each parallel batch and on the merged result.
- Run `npm run typecheck` and `npm run build`; browser-check overview, representative topic pages, direct deep links, previews, and desktop/360 px overflow.
- A planned `npm run knowledge:parity -- --family map` command may automate old/new output comparison; it must not be described as available before implementation.

### Phase 6 — split other authored families

**Work**

- Split case routes from `app/data/case-guides/routes.ts` into one case-route file each, retaining the case-specific stage, evidence, deadline, and negative-branch body rather than forcing a provision-like template.
- Split learning modules from the large files under `app/data/legal-library/learning/` into one learning-module file each, retaining the module's own teaching sequence and typed legal text.
- Split document guides from `app/data/document-library/guides.ts` into one guide file each, retaining evidence-document identity and document-specific anatomy.
- Resolve all three families through the same publication Module; derive their registries, previews, backlinks, and dependency/review sets rather than maintaining copied aggregate lists.

**Exit criteria**

- Every published case route, document guide, and learning module is a one-file review unit with a valid family subject and typed bases.
- Their bodies remain family-specific; no universal body template or copied generated source text is introduced.
- Existing route output, compatibility Adapters, official sources, and learner-facing language are preserved except for reviewed content corrections.

**Verification**

- Required gates: `npm run verify` and `npm run verify:content`.
- Run `npm run typecheck` and `npm run build`; manually check one complex and one ordinary unit in each family, all affected direct routes, previews/source registers, keyboard behavior, and 360 px layout.
- Planned family-specific packet/parity commands remain future work until present in `package.json` and documentation.

### Phase 7 — cleanup, manual-index retirement, and reviewer tooling

**Work**

- Remove migrated content from the former large authored files and retire hand-maintained aggregate editorial indexes, duplicate preview content, and legacy manual dependency lists. Keep only compatibility Adapters required by public routes or documented external callers.
- Make generated registries, publication manifests, and dependency/review packets reproducible in a clean checkout. Record exact approved write scope in packets and fail closed on extra changed files.
- Add reviewer tooling for one-unit packets, source/PDF locators, inbound/outbound references, rendered page/preview capture, and review status transitions. Keep legal promotion as a separate explicit human action.
- Update architecture/readme references only after the implementation is actually present; do not leave a future command documented as if it exists.

**Exit criteria**

- There is one source path for each published authored unit and one deterministic path for each aggregate projection.
- Reviewers never hand-edit a registry, dependency graph, preview aggregate, or publication manifest.
- A clean regeneration produces no unrelated diff; all stable and compatibility routes work; the one-page review packet is sufficient to accept or block a unit.
- `npm run verify` and `npm run verify:content` are green at the final merge gate, with no app-code or legal-content changes hidden in documentation-only cleanup.

**Verification**

- Required gates: `npm run verify` and `npm run verify:content`, plus `npm run typecheck` and `npm run build`.
- Run the full route/deep-link, source/PDF, preview, graph, responsive, keyboard, and no-console-error checks in the final acceptance matrix.
- Any new command is documented as planned/not-yet-existing until it is implemented and verified in the repository.

## 6. Parallel review workflow

1. **Prepare the source context.** Deterministic preparation identifies the official ELI/PDF, immutable edition, provision locator or other canonical subject, source PDF hash, normalized source hash, legal-state date, and any changed/removed source units. Preparation never promotes the edition.
2. **Create one unit.** An author works in one approved unit file and records typed claims, bases, relationships, summary, and review metadata. The author does not edit generated corpus files or aggregate indexes.
3. **Generate the review packet.** The resolver expands the unit against the selected edition and registries, computes outbound/inbound refs and dependants, resolves the source register, builds the publication Module, and captures the rendered page/preview.
4. **Review locally.** A reviewer checks the one unit's full body against the official source/PDF and legal timing, confirms each claim's category and locator, inspects the rendered page and hover fallback, and records `reviewed`, `draft`, `stale`, `blocked`, or `superseded` deliberately. A source hash match alone is never the approval reason.
5. **Merge in parallel.** Independent units can be reviewed and merged concurrently because their identities, files, and packets are disjoint. Shared contract or resolver changes are small prerequisite changes reviewed separately. Generated indexes/graphs are regenerated after merge and are not conflict-resolution surfaces.
6. **Run deterministic gates.** Validation rejects unknown/mismatched references, duplicate identities, stale edition claims presented as current, missing official sources, out-of-scope changes, and non-reproducible generated outputs. The full `npm run verify` and `npm run verify:content` gates remain mandatory.
7. **Promote explicitly.** Only an authorized human may promote a validated edition/current pointer. Promotion is separate from authoring and from packet generation; no unchanged hash, successful build, or AI review response can perform it.

## 7. Review-packet contract

A packet is generated evidence for one unit and one resolved publication. It is not an editable aggregate and is not a substitute for human legal judgment. It must contain:

| Packet field | Required content |
| --- | --- |
| Unit identity | Exact repository-relative unit path, stable unit ID, family, subject discriminant, owner/reviewer scope, and changed-file list. |
| Canonical source/PDF locator | Official ELI/Sejm URL, document and immutable edition IDs, local PDF path, one-based PDF page/range, provision/document/topic locator, and what the locator should be checked against. |
| Full unit | The complete authored envelope and family-specific body as reviewed, including summary, relationships, review status, and no elided claims. |
| Claim bases | Every material claim with its typed basis (`statute-text`, official guidance, case law, practical inference, or unresolved/check-required), typed target, exact locator, source note, and edition compatibility. |
| Outbound references | Every typed reference emitted by the unit, with resolved target, relationship/claim field, and resolution status. |
| Inbound references | Every generated dependant that points to the unit, including route/preview/learning/document/map/case use where applicable; no manually copied inbound list. |
| Edition and hash metadata | `sourceEditionId`, legal-state date, source PDF SHA-256, normalized provision/source hash, `verifiedAt`, review status, source checked date, and historical/stale markers. |
| Resolved publication | The resolved `PublishedKnowledgeModule` identity, source-only/reviewed fallback state, generated source excerpt bounds, and publication validation diagnostics. |
| Rendered evidence | Canonical full-page/route URL or render, hover preview output, source register, official-source links, and responsive/keyboard check notes or captures. |
| Gate result | Type/reference checks, dependency diagnostics, scope check, `npm run verify`, `npm run verify:content`, and reviewer decision with unresolved questions. |

A packet may name planned tooling, but it must label any command that does not yet exist as planned. It must never claim that a generated hash proves legal effect or that an AI draft is human approval.

## 8. Non-goals

- No automated eligibility decision, legal conclusion, outcome prediction, or substitute for individual advice.
- No replacement of the official ELI/PDF with generated text, OCR, a database, or an HTTP source updater.
- No universal body template for unlike knowledge families.
- No inferred internal links from titles, article numbers, aliases, or prose.
- No automatic current-edition promotion, including promotion based on unchanged hashes, a successful build, or an AI response.
- No removal or redesign of stable public routes and compatibility Adapters.
- No hand editing of generated corpus artifacts, registries, publication manifests, or dependency graphs.
- No broad search control or unrelated visual redesign.
- No mass legal-content rewrite, new legal claim, or source-date change without the project's official-source review workflow.
- No original client documents or identifying case data.

## 9. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| A matching normalized hash hides a legal amendment, changed effect, case-law shift, or transitional rule. | Treat hashes as comparison evidence only; require legal-state, in-force, amendment, and transition review before promotion. |
| A claim is attributed to the wrong act or edition. | Document-dependent typed references, exact locators, runtime guards, source-edition matching, and fail-closed packets. |
| Splitting files creates duplicate identities or weakens cross-unit context. | Stable IDs, generated registries, duplicate rejection, derived inbound/outbound graph, and family-specific bodies with typed relationships. |
| Generated indexes become merge-conflict or manual-drift surfaces. | Generate them deterministically after unit merges; forbid reviewer edits and include reproducibility/scope checks. |
| Preview/page divergence reintroduces duplicated prose. | Both derive from the same resolved Module summary/source fallback; no preview content file. |
| Parallel reviewers make incompatible shared-contract changes. | Land contract/resolver changes as small prerequisite units; partition content by disjoint unit files and regenerate aggregates only after merge. |
| Route migration strands bookmarks or compatibility callers. | Preserve stable routes and route Adapters; require a deep-link matrix in every vertical slice and final gate. |
| A one-file unit becomes a universal miniature template. | Keep the envelope minimal and body discriminated by family; reject empty/template-only sections in editorial review. |
| Draft or stale material appears current. | Carry `reviewStatus`, `sourceEditionId`, legal-state date, and visible fallback/status through every publication surface. |

## 10. Final acceptance criteria and gates

The implementation is accepted only when all of the following are true:

- This file is the only active implementation plan; repository entry points and the accepted architecture link here, while obsolete plan/prompt/handoff artifacts are retired and historical evidence/audit records remain unchanged.
- Official ELI/PDF → immutable generated edition → generated provision remains intact; generated source and authored prose remain separate; explicit human promotion is preserved.
- Every published authored unit is one independently reviewable file with the common envelope and a family-specific body. Existing provision explanations remain under `app/data/legal-library/editorial/<documentId>/articles/`.
- Provision units have one primary provision subject. Map units have a map-topic subject plus typed one-or-many bases. Case, document, and learning subjects are equally explicit.
- Claims and relationships use typed references; the dependency graph and all aggregate registries are deterministic/generated, with no hand-maintained duplicate `dependsOn` lists.
- Routes consume resolved publication Modules. Full pages, hover previews, source registers, and dependency packets agree, with source-only fallback when matching reviewed prose is unavailable.
- Stable public routes and compatibility Adapters pass their deep-link matrix; no raw generated JSON or copied source text is imported by authored pages.
- One-page review is possible from the packet contract, and disjoint units can be reviewed/merged in parallel without editing aggregate indexes.
- Every phase's exit criteria and verification gate has passed, including `npm run verify` and `npm run verify:content`; final `npm run typecheck` and `npm run build` are green.
- Legal-state date, official sources, exact locators, legal timing, and review statuses are visible where required. An unchanged hash is never recorded as proof of unchanged legal effect, and no edition becomes current without explicit human approval.

### Gate rule

A phase is not complete merely because its files compile. At each phase boundary the owner must provide: the diff limited to the approved phase, the relevant review packet or baseline evidence, deterministic validation output, route/source checks where applicable, and the required green commands. Any unresolved legal source, timing, edition, reference, scope, or rendering issue blocks the phase and is recorded rather than silently downgraded.
