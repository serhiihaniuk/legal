import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, mkdir, rm, symlink, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import {
  diffProvisionLists,
  makeLegalStatusEvidence,
  normalizeRepositoryPath,
  validateApprovedWriteScope,
  validateChangedFileSet,
  validateLegalStatusEvidence,
} from "../lib/workflow.mjs"

test("classifies edition changes by stable provision id and source hash", () => {
  const result = diffProvisionLists(
    [
      { id: "act-art-1", sourceTextHash: "a", locator: "Art. 1", status: "active", parentId: null, childIds: [] },
      { id: "act-art-2", sourceTextHash: "b", locator: "Art. 2", status: "active", parentId: null, childIds: [] },
      { id: "act-art-3", sourceTextHash: "c", locator: "Art. 3", status: "active", parentId: null, childIds: [] },
    ],
    [
      { id: "act-art-1", sourceTextHash: "a", locator: "Art. 1", status: "active", parentId: null, childIds: [] },
      { id: "act-art-2", sourceTextHash: "changed", locator: "Art. 2", status: "active", parentId: null, childIds: [] },
      { id: "act-art-4", sourceTextHash: "d", locator: "Art. 4", status: "active", parentId: null, childIds: [] },
    ]
  )
  assert.deepEqual(result, {
    added: ["act-art-4"],
    changed: ["act-art-2"],
    removed: ["act-art-3"],
    unchanged: ["act-art-1"],
  })
})

test("rejects broad, traversal, absolute, glob, and generated write scopes", () => {
  for (const value of [
    "../secret.ts",
    "C:/secret.ts",
    "app/data/**/*.ts",
    "app/data/legal-corpus/edition/manifest.json",
    "public/legal-sources/edition/source.pdf",
    "app/data/legal-library/current-editions.json",
    ".",
  ]) {
    assert.throws(() => normalizeRepositoryPath(value))
  }
  assert.equal(
    normalizeRepositoryPath("app/data/legal-library/editorial/kpa/art-1.ts"),
    "app/data/legal-library/editorial/kpa/art-1.ts"
  )
})

test("rejects a scope that crosses a symlink", async (t) => {
  if (process.platform === "win32") {
    t.skip("Creating symlinks may require Windows developer mode")
    return
  }
  const root = await mkdtemp(path.join(os.tmpdir(), "legal-scope-"))
  try {
    await mkdir(path.join(root, "real"))
    await writeFile(path.join(root, "real", "file.ts"), "")
    await symlink(path.join(root, "real"), path.join(root, "linked"))
    await assert.rejects(
      () => validateApprovedWriteScope(["linked/file.ts"], root),
      /symlink/u
    )
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})

test("fails closed on changed paths outside the approved set", () => {
  assert.deepEqual(
    validateChangedFileSet(
      ["app/data/editorial/a.ts", "app/routes/unrelated.tsx"],
      ["app/data/editorial/a.ts"]
    ),
    ["app/routes/unrelated.tsx"]
  )
  assert.deepEqual(
    validateChangedFileSet(
      ["app/data/legal-corpus/edition/manifest.json"],
      ["app/data/legal-corpus/edition/manifest.json"]
    ),
    []
  )
})

test("requires complete structured legal-status evidence", () => {
  const complete = {
    status: "obowiązujący",
    inForce: "IN_FORCE",
    consolidatedTextIdentifier: "DU/2025/1",
    checkedAt: "2026-07-14",
    sourceUrl: "https://eli.gov.pl/example",
    amendmentsCheckedThrough: "2026-07-14",
    entryIntoForce: [{ locator: "Art. 10", result: "in force" }],
    transitionalRules: [{ locator: "Art. 11", result: "checked" }],
    unresolved: [],
  }
  assert.deepEqual(validateLegalStatusEvidence(complete), [])
  assert.ok(
    validateLegalStatusEvidence({ ...complete, unresolved: ["transition"] })
      .length > 0
  )
})

test("preserves complete manifest legal-status evidence for the next work order", () => {
  const complete = {
    status: "obowiązujący",
    inForce: "IN_FORCE",
    legalStateDate: "2026-07-15",
    consolidatedTextIdentifier: "DU/2026/553",
    checkedAt: "2026-07-15",
    sourceUrls: ["https://eli.gov.pl/eli/DU/2026/553/ogl"],
    amendmentsCheckedThrough: "2026-07-15",
    entryIntoForce: [{ locator: "ELI official page", result: "entered into force" }],
    transitionalRules: [{ locator: "final provisions", result: "express result recorded" }],
    unresolved: [],
    amendmentReview: { result: "none listed" },
  }
  assert.deepEqual(
    makeLegalStatusEvidence({ legalStatusEvidence: complete }),
    complete
  )
  assert.ok(
    validateLegalStatusEvidence({ ...complete, sourceUrls: ["http://eli.gov.pl"] }).length > 0
  )
})
