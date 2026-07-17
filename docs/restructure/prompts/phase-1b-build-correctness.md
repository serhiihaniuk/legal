You are implementing Phase 1 (part B: build-side correctness) of the restructure. Read first: docs/restructure/PLAN.md "Phase 1" items 2 and 5, then docs/restructure/evidence/pipeline-map.report.md Problems section (exact file:line references for each defect). Phase 1a (promotion trust) is already merged — build on the current state of scripts/legal-corpus/.

Scope: scripts/legal-corpus/** and legal-corpus/README.md only. Never touch app/.

Tasks, one conventional commit each:

1. Prepare identity check: when prepare is given --old-edition, load the OLD edition's manifest and require its documentId to match the new config's documentId — fail with a clear message otherwise (closes "update preparation can diff unrelated documents").

2. Edition immutability + idempotent rebuilds: rebuilding an editionId whose artifacts already exist fails unless --force-rebuild is passed; with --force-rebuild, when the source PDF checksum is unchanged, preserve the original manifest builtAt so identical sources produce identical committed output (closes "immutable edition silently replaced / builtAt churn").

3. Duplicate-locator ambiguity is fatal: in lib/extraction.mjs, a duplicate article/paragraph locator becomes a fatal diagnostic carrying both page positions, instead of silently keeping first/last occurrence. Ensure expected-count validation cannot mask it (closes "extractor ambiguity silently discarded").

4. Network robustness: fetchBytes gets a timeout via AbortSignal (default 60s, configurable), and a content-type sanity check with clear error messages (closes "network handling can stall indefinitely").

5. Execution-directory independence: builder, workflow, and generator derive the repo root from their module location (import.meta.url), not process.cwd() (closes "repository-root handling is execution-directory dependent").

6. --dry-run for prepare and promote: print exactly what would be built/written/changed (paths, diff summary, pointer transition) and touch nothing. Also fix the README drift: legal-corpus/README.md's artifact list must name provisions.json, structure.json, diagnostics.json.

7. checkJs cleanup for scripts/legal-corpus/** only: drive the remaining typecheck:scripts diagnostics in THIS subtree toward zero with JSDoc types (current repo-wide baseline ~341). Do not touch scripts/legal-editorial or scripts/reference-previews. Report before/after counts; if some diagnostics would require behavior changes, leave them and list them.

Tests for tasks 1-6 in the existing node --test style (scripts/legal-corpus/test/). Gates at the end: npm run verify green AND npm run test:corpus green. New/edited code clean under typecheck:scripts. Do not push.

Final summary: commits, which evidence-report failure scenarios are now mechanically impossible, diagnostics before/after, verification results, anything deferred.
