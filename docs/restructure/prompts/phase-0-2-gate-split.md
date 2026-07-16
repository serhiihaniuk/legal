You are finishing Phase 0 of the restructure (follow-up 0.2) on the existing branch restructure/phase-0-tooling. Stay on that branch.

Context: the earlier Task 2 (typing one bare citation) was correctly abandoned — the file is one of five never migrated to typed references; that migration is now planned separately (docs/restructure/PLAN.md, Phase 2 step 5). Your job is only to restructure the gates per the updated "Gates" section of docs/restructure/PLAN.md. Read that section first.

One task, one commit:

In package.json:
- "test:editorial" becomes: node scripts/legal-editorial/validate.mjs --incomplete
- add "test:editorial:strict": node scripts/legal-editorial/validate.mjs
- "verify" chain becomes: typecheck && lint && format:check && test && test:corpus && test:editorial && build  (test:previews REMOVED from this chain)
- add "verify:content": npm run test:editorial:strict && npm run test:previews

Do NOT modify any validator in scripts/ and do NOT touch app/.

Also update .github/workflows/verify.yml only if it references test:previews directly (it should just run npm run verify — leave it if so).

Commit as: "chore: split code gate from content gate"

Finish by running npm run verify end to end — it must be fully green — and run npm run verify:content once, expecting it to fail, to confirm it reports the two known content debts (editorial coverage, bare citations) rather than erroring for a different reason.

Print a final summary: the commit, verify result per gate, and the two failure reasons verify:content reported.
