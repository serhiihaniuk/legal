You are continuing the citation migration (Phase 2 step 5 of docs/restructure/PLAN.md — read that step). Two jobs this run: repair one latent citation in part-06, and migrate part-03.

Branch: git checkout -b content/citations-part-03 (from main).

JOB 1 — one-token repair in app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-06.ts:
The entry at index [34], rules[0].explanation contains a bare "art. 99" mention INSIDE an already-typed template literal (discovered at the part-04 gate; it crashes test:previews on module load). Wrap only that mention with the file's existing author, following the file's own conventions. Change nothing else in the file. Commit: "fix: type the latent art. 99 citation in foreigners act part 06".

JOB 2 — full migration of app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-03.ts:
Same rules as the part-04 migration (its spec is docs/restructure/prompts/citations-part-04.md — read it and apply everything under "Rules for part-04.ts" to part-03.ts; the migrated part-04.ts is now on main and is an additional sibling pattern to study, including its RYNEK_PRACY_SLUZBY_ZATRUDNIENIA_URL constant if part-03 cites that act):
- wrap-only, prose byte-identical outside wrapping;
- default attribution = ustawa-o-cudzoziemcach; other acts only when the prose explicitly names them;
- .article() only for registry-known IDs (typecheck enforces); .external() with sibling URL constants otherwise;
- review list at docs/restructure/citation-review/part-03.md: every non-default or ambiguous attribution, plus a note recording the part-06 repair.
Commit: "feat: type citations in foreigners act editorial part 03" and "docs: record part 03 citation attribution review".

Verification, in order:
1. npm run typecheck — green.
2. npm run test:previews — must not report any failure pointing into part-03.ts OR part-06.ts. If it surfaces ANOTHER latent bare mention in an already-migrated file (the fail-fast pattern from the plan), repair that one the same one-token way, add it to the review list, and re-run — loop until the first failure (if any) points only at parts 08, 09, or 11. Quote that first remaining failure.
3. npm run verify — green.

Do not push. Final summary: part-06 repair confirmation, part-03 citation count and .article/.external split, any additional latent repairs made, review-list entry count, verification results, and which file test:previews now fails on first.
