# Editorial improvement log

## 2026-09-05 homepage redesign

- Committed the earlier editorial work as `703e8dd` before starting the redesign.
- Replaced the homepage with a serif headline, a restrained monochrome layout, and six numbered section links. Descriptions address working staff and explain what each section contains.
- Added a small SVG illustration with a single arrival animation and a static reduced-motion version. Adjusted the heading and stacked layout for phones; kept the existing navigation and design tokens.
- Validation: `npm run verify` passed, including typechecks, lint, formatting, 57 application tests, corpus/editorial checks, and the production build. Checked desktop, tablet, and 360 px layouts without horizontal overflow. All six section destinations rendered in the production browser with no console errors. The section jump, mobile menu, keyboard focus, and Enter activation worked.
- The earlier dependency, build-warning, and independent-review-ledger notes below still apply. This pass changes homepage presentation and navigation copy, not legal rules.

## 2026-09-05

- Created the installed `legal-explanatory-writing` skill for Ukrainian explanations of Polish law aimed at working legalization staff. It prioritizes definitions, mechanisms, concrete explanations, and optional reading over exercises or course completion.
- Installed dependencies with `npm ci` and started the development server at `http://127.0.0.1:5173`. The skill passed its validator.
- Rewrote the KPA introduction and `wezwanie` explanations with clearer definitions and completed examples about conflicting document dates and a missing signature. Added typed provision references and removed the duplicated outcome from the KPA question row.
- Converted `/study` into an optional reading guide. Removed assignments, assessment criteria, repetition schedules, and completion gates; retained topic URLs and navigation. Updated the header, homepage, and project guidance.
- Removed internal terminology from document-page copy and made long law-reference labels wrap on phones.
- Checked the [official KPA text](https://eli.gov.pl/eli/DU/2025/1691/ogl) and the [original act's amendment references](https://eli.gov.pl/api/acts/DU/1960/168/references) on 2026-09-05. Relevant provisions: art. 1-5, 50-56, 63-64, 77, 80, and 104; the consolidated publication also records the 2025 amendment's transitional rule. This was a focused explanation review, not a new atlas-wide baseline. The displayed legal-state date remains 18.07.2026.
- Validation: `npm run verify` passed, including 57 application tests and the corpus/editorial checks. Reference-preview validation passed. Final typecheck and production build passed after the presentation adjustments. Browser checks confirmed the revised KPA text, reading-guide navigation, a new provision link, and no horizontal overflow on checked pages at 360 px and desktop widths.
- Pending: the separate strict content-review ledger reports 11 stale file hashes, including one untouched navigation file. Its previous independent attestations were not renewed. Installation also reported 19 dependency vulnerabilities (10 moderate, 9 high); dependency remediation is outside this editorial pass. Existing build warnings concern large bundles and the deprecated `envFile` option.
- Next editorial pass: replace inferred definitions and generic examples in non-KPA explanations, preserve their authored section headings, and deepen the form-versus-evidence explanation.
