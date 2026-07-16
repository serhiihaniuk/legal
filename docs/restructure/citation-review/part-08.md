# Citation attribution review — part-08.ts

Source: `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-08.ts`
Default act: `ustawa-o-cudzoziemcach` (this file's own act).

## Non-default attribution

- **"Art. 35 ust. 6 rozporządzenia nr 2017/2226"** (entry
  `ustawa-o-cudzoziemcach-art-248a`, claim `Art. 248a`) — chosen target:
  external citation to Regulation (EU) 2017/2226 establishing an Entry/Exit
  System (EES), `foreignersLaw.external("Art. 35", EES_2017_2226_URL)`, URL
  `https://eur-lex.europa.eu/eli/reg/2017/2226/oj`. Why: the prose explicitly
  names the regulation by number ("rozporządzenia nr 2017/2226"), which is
  not in the reference registry. Not ambiguous: this exact URL is the one
  already used for the same regulation in `part-02.ts` and `part-10.ts`
  (`EES_2017_2226_URL`), so this citation reuses an established sibling
  constant rather than introducing a new one.

## PROMINENT: one entry left unmigrated — needs a new external URL

- **Entry `ustawa-o-cudzoziemcach-art-244`** (`claims[0].text` and
  `rules[1].explanation`, both containing "Art. 50 TUE / Art. 18 ust. 4
  Umowy Wystąpienia") was **not migrated** and still contains bare
  citations. The prose describes annotations placed on a `karta pobytu`
  referencing Art. 50 of the Treaty on European Union (TUE) and Art. 18(4)
  of the EU–UK Withdrawal Agreement ("Umowy Wystąpienia") — both
  international instruments with no act in the reference registry and no
  existing `.external()` URL constant in any sibling file to reuse. Typing
  them requires sourcing two new authoritative URLs (e.g. EUR-Lex), which
  this migration run was **not authorized to do** — the task's web-search
  allowance covered only the Decision 1/80 citation in part-06 (job 2).
  **This is flagged for owner action**: either authorize sourcing the TUE
  and Withdrawal Agreement URLs (same verification bar as the Decision
  1/80 and part-04 labor-market precedents), or provide them directly, so a
  follow-up run can finish this one entry. Until then, `part-08.ts` cannot
  reach zero bare-citation failures on its own — `test:previews` will stop
  at this entry once everything else upstream of it is clean.
