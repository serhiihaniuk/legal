You are implementing Phase 0 of a planned restructure of this repository (legalizacja-atlas).

FIRST read, in order: docs/restructure/PLAN.md (the "Phase 0" section and "Hard constraints"), then docs/restructure/evidence/tooling-audit.report.md. AGENTS.md conventions apply.

Work on a new branch: git checkout -b restructure/phase-0-tooling

SCOPE GUARD (hard): do NOT modify anything under app/ except where a lint fix is purely mechanical and behavior-preserving; do NOT change any logic in scripts/**. This phase is tooling only.

Tasks (from PLAN.md Phase 0):

1. Commit the currently untracked docs/restructure/ directory FIRST as "docs: add restructure plan and audit evidence".
2. Add oxlint as devDependency with a minimal config enabling react, react-hooks, jsx-a11y, typescript rules at correctness level; add "lint" script. Run it; fix mechanical violations (unused imports etc.); for rules that would force behavior changes, disable the rule in config with a one-line justification comment instead.
3. Add vitest + @testing-library/react + happy-dom as devDependencies; "test": "vitest run" script; write 3-4 colocated seed tests proving the harness: app/lib/utils (cn), one components/ui primitive renders (e.g. badge), one document-library query function, one legal-library reference resolution. Behavior-stating test names, no vague names.
4. Add "format:check": prettier --check with the same ts/tsx globs as format. Do NOT reformat the repository.
5. Delete tsconfig.app.json and tsconfig.node.json after verifying nothing references them (grep). Add tsconfig.scripts.json with allowJs+checkJs+strict covering scripts/**/*.mjs and a "typecheck:scripts" script; run it, COUNT the errors, and record the count in your final report — do NOT fix them (Phase 1 owns that).
6. package.json hygiene: move "shadcn" to devDependencies. Dockerfile: node:20-alpine -> node:22-alpine in all stages.
7. Replace README.md starter text with a short real introduction: what the product is (Ukrainian-language educational legal atlas for legalization of foreigners in Poland), stack, key commands (dev/build/verify/corpus lifecycle), and links to DESIGN.md, AGENTS.md, docs/architecture/, docs/restructure/PLAN.md.
8. Add "verify": typecheck + lint + format:check + test + test:corpus + test:editorial + test:previews + build (fail-fast chain with &&).
9. Add .github/workflows/verify.yml: on push and pull_request; node 22; npm ci; npm run verify.

Verification: npm run verify must pass green at the end. If a sub-step cannot pass (e.g. test:previews environment issue), do not delete it from verify — report the failure honestly in your final summary.

Commits: conventional style matching git log (e.g. "chore: add oxlint baseline", "test: seed vitest harness"). One commit per logical unit. Do NOT push.

Final output: print a summary with (a) commits made, (b) verify result per gate, (c) tsconfig.scripts.json error count, (d) anything you could not complete and why.
