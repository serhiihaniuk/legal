You are migrating ONE editorial file to typed legal references: app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-04.ts. This is Phase 2 step 5 of docs/restructure/PLAN.md (read that step first).

Branch: git checkout -b content/citations-part-04 (from main).

STUDY THE PATTERN FIRST: read app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-05.ts and part-02.ts — these are fully migrated siblings. Note how they create authors (createLegalTextAuthor), wrap prose in law.text`...` template literals, cite registry-known provisions with .article(number, label) / .articleRange(...), and cite provisions or acts OUTSIDE the registry with .external(label, URL) using the URL constants the siblings define.

Rules for part-04.ts:
- Wrap citations ONLY. Every character of prose (Ukrainian and Polish) outside the citation wrapping must remain byte-identical. Do not rephrase, fix, or "improve" any text.
- Default attribution is this file's own act (ustawa-o-cudzoziemcach). A citation belongs to a different act ONLY when the surrounding text explicitly says so (KPA, PPSA, powierzanie pracy, specustawa/CUKR, rozporządzenie). When the text is ambiguous, keep the default and add the citation to the review list (below).
- Use .article() only when the provision number exists in the reference registry for that act (the typecheck will enforce this — a nonexistent ID is a compile error). Otherwise use .external() with the appropriate URL constant, copying the sibling files' choices.
- Do not touch any other file.

Produce a review list: create docs/restructure/citation-review/part-04.md listing every citation where (a) you attributed to a NON-default act, or (b) the attribution was ambiguous — one line each: the quoted text fragment, your chosen act, and why. The owner reviews this list.

Verification, in order:
1. npm run typecheck — green (proves every .article() ID exists).
2. npm run test:previews — must no longer report ANY failure pointing into part-04.ts. It MAY still fail on the other unmigrated files (parts 03, 08, 09, 11) — that is expected and fine; quote the first remaining failure so we know which file is next.
3. npm run verify — green.

Commits: "feat: type citations in foreigners act editorial part 04" plus "docs: record part 04 citation attribution review". Do not push.

Final summary: citation count converted, .article vs .external split, review-list entry count, and the verification results.
