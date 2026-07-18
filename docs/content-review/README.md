# Content Review Ledger

The all-pages legal content audit uses a date-root index at
`docs/content-review/2026-07-18/index.json` and lane ledgers under
`docs/content-review/2026-07-18/lanes/`.

## Commands

- `npm run content-review:generate` regenerates the inventory and pending lane
  ledgers from the current repository state.
- `npm run content-review:validate` checks that every current entry is assigned
  exactly once and that stored content/source hashes are fresh.
- `npm run content-review:validate:strict` also requires accepted author and
  cross-review records, and fails draft teaching knowledge units unless the
  entry is explicitly blocked.
- `npm run content-review:mark-author -- --id <entry-id> --reviewer <name>`
  records an author review attested to the current hashes.
- `npm run content-review:mark-cross -- --id <entry-id> --reviewer <name>`
  records an independent cross-review attested to the current hashes.

`npm run verify:content` runs the ledger validator with `--if-complete`: strict
ledger checks activate only after `docs/content-review/2026-07-18/index.json`
declares `"declaredComplete": true`.

## Lane Rules

- `kpa`: all KPA provision entries and KPA learning modules.
- `foreigners-a`: `ustawa o cudzoziemcach` provision index 1 through
  `ceil(active edition provision count / 2)`. The exact generated boundary is
  recorded in `index.json` under `summary.laneBoundaries`.
- `foreigners-b`: the remaining `ustawa o cudzoziemcach` provisions after that
  generated midpoint, plus its learning modules.
- `ppsa`: PPSA provisions and learning modules.
- `employment-regulation`: employment-act and residence-application regulation
  provisions plus their learning modules.
- `teaching-pages`: map topics, document guides, case guides, study plan,
  journey/group copy, route copy, and shared renderers with authored wording.

Each entry stores its path, family, lane, content identity, current edition,
official source URLs where applicable, source text hash, authored content hash,
and author/cross-review status with hash attestations.
