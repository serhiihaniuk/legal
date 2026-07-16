You are finishing Phase 0 of the restructure (follow-up 0.1) on the existing branch restructure/phase-0-tooling. Stay on that branch. Read docs/restructure/PLAN.md "Phase 0" for context if needed.

Three small tasks, one commit each:

1. Retire the formatting baseline: remove the 23 baselined source-file entries from .prettierignore (keep only genuine non-source ignores like lockfiles/coverage), then run `npx prettier --write` on exactly those 23 files. Commit the pure-whitespace result as "style: reformat baselined files and retire the ignore list". Verify `npm run format:check` passes with the ignores gone.

2. Fix the single bare legal citation that test:previews reports at app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-04.ts line 17: convert it to a typed reference using the same author API used throughout that file (createLegalTextAuthor / .article / .external — copy the pattern of neighboring entries in the same file). Change ONLY that citation. Commit as "fix: type the bare citation in foreigners act part 04". Verify `npm run test:previews` passes.

3. Make the verify chain honest about editorial coverage: in package.json change "test:editorial" to run the validator in incomplete mode (node scripts/legal-editorial/validate.mjs --incomplete) and add "test:editorial:strict" running it without the flag. Do NOT modify the validator itself. Commit as "chore: gate editorial structure now, full coverage at content completion".

Finish by running `npm run verify` end to end. It must be fully green. Print a final summary: commits made, verify result per gate, and confirmation that .prettierignore contains no app/ or scripts/ entries.
