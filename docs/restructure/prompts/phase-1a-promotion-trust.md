You are implementing Phase 1 (part A: promotion trust) of the restructure. Read first: docs/restructure/PLAN.md "Phase 1" items 1 and 3, then docs/restructure/evidence/pipeline-map.report.md (Problems section) — it contains exact file:line references for every defect you are fixing.

Branch: git checkout -b restructure/phase-1a-promotion-trust (from main).

Scope: scripts/legal-corpus/** and package.json only. Do NOT touch app/ or other scripts/ families beyond what these tasks name.

Tasks:

1. Promotion re-verifies facts instead of trusting the work order. In the promote path (scripts/legal-corpus/workflow.mjs + lib/workflow.mjs): before any write, (a) re-run the corpus fact validation (lib/validation.mjs) against the edition's artifacts on disk — a tampered or hand-edited provisions.json/structure.json must fail promotion with a clear message; (b) run the editorial validator (scripts/legal-editorial/validate.mjs) in --incomplete mode as a child process and fail promotion on structural errors. Keep the explicit human approval token exactly as is.

2. Work-order evidence held to config-grade validation: checkedAt, amendmentsCheckedThrough, and optional legal dates must pass the same real-calendar-date and HTTPS checks lib/config.mjs already implements — export and reuse those validators, do not duplicate them. "yesterday" or "2026-99-99" must fail.

3. Atomic, correctly ordered promotion writes:
   - generate-registry.mjs writes both generated TypeScript files via temp file + rename (atomic), never direct concurrent writes;
   - promotion order becomes: generate registries first, then write the current-editions pointer, then the promotion record — so a crash mid-promotion never leaves a pointer referencing unregenerated registries. Adjust rollback accordingly and document the crash-recovery reasoning in a short comment where the ordering is decided.

4. Tests (node --test, alongside the existing suites): a tampered provisions.json is rejected at promote; invalid evidence dates are rejected; registry writes are atomic (simulate a write failure and prove no partial file remains); the new promotion ordering. Follow the existing test style in scripts/legal-corpus/test/.

Constraints: new/edited code must be clean under tsconfig.scripts.json checkJs (add JSDoc types as needed); do not attempt to fix the pre-existing ~374 diagnostics elsewhere. npm run verify and npm run test:corpus must be green at the end.

Commits: conventional, one per task (e.g. "fix: revalidate corpus facts at promotion", "fix: hold work-order evidence to config-grade validation", "fix: make promotion writes atomic and ordered", "test: cover promotion trust behaviors"). Do not push.

Final summary: commits, which failure scenarios from the pipeline evidence report are now mechanically impossible, verification results, and anything deferred.
