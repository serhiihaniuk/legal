# 2026-07-18 All-Pages Content Review

Status: inventory generated, review not declared complete.

Machine-readable lane ledgers live in `lanes/`. The date-root `index.json`
contains the completion gate; keep `"declaredComplete": false` until every entry
has accepted author and cross-review records or an explicit blocker.
Generated lane boundaries, including the current `ustawa o cudzoziemcach`
midpoint split, are recorded in `index.json` and must not be hardcoded in
review instructions.

Rubric source: `.omx/plans/all-pages-legal-content-review.md`.

The review must not be treated as complete while any ledger entry remains
pending or any teaching knowledge unit remains `draft` without an explicit
blocked review state.

## Editorial conventions for this batch

- Keep a Polish legal term in its correct Polish form. Introduce it through a
  natural Ukrainian sentence instead of attaching Ukrainian endings to a
  Polish or English stem. Use English only when it is part of an official name.
- Explain the legal mechanism in connected prose before a checklist. Lists are
  reserved for genuinely parallel conditions, ordered actions, evidence
  registers, deadlines, and comparisons; they may not replace the explanation.
- Apply the learning chain only as far as the norm supports it: fact, legal
  concept, conditions, evidence, action and deadline, consequence, remedy. Do
  not invent a missing step merely to complete the template.
- A remedy governed by another provision may be included as procedural context
  only when the relationship is material and is labelled as context or a
  practical inference. It must not be presented as the text of the reviewed
  provision.
- Prefer the existing `description`, `summary`, and lesson-paragraph fields for
  a mechanism explanation. A schema change needs a product-level reason; the
  review does not add fields merely to make the prose fit a template.
- Replace a generic warning such as “this does not guarantee the result” with
  the precise false shortcut and the next check. Example: a `formularz`
  structures declarations but does not prove `cel pobytu`; each substantive
  condition still needs evidence.
- Treat case guides and the study plan as the style anchor for condition-to-
  evidence reasoning. Keep every example anonymized and state fact-dependent
  uncertainty explicitly.

## Reviewer evidence

An accepted review attests to the exact current file hash and, for a provision,
the exact source-text hash and edition in the lane ledger. A reviewer must read
the source provision and its material context; passing a structural validator
alone is not an author review. Any later edit invalidates the attestation and
requires another review.

After the final inventory is regenerated, accepted reviews can be recorded one
entry at a time with `content-review:mark-author` / `content-review:mark-cross`
or as an explicitly bounded batch with the corresponding `*-batch` CLI command.
A batch always requires a lane plus `--all`, `--document-id`, `--family`, or
`--path-prefix`; it validates every selected content/source hash before writing
anything. Batch marking is only a recording shortcut after the named reviewer
has actually read every selected entry.

Baseline validation also rejects repeated placeholder question marks, the
Unicode replacement character, common mojibake, and adjacent Latin/Cyrillic
letters inside one word. A Polish legal term must remain Polish; place it next
to a natural Ukrainian explanation instead of adding a Cyrillic ending.
