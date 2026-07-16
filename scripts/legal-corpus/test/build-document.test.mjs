import test from "node:test"
import assert from "node:assert/strict"

import {
  assertRebuildAllowed,
  parseArguments,
  resolveBuiltAt,
} from "../build-document.mjs"

test("parseArguments accepts a config path with an optional --force-rebuild flag in either order", () => {
  assert.deepEqual(parseArguments(["legal-corpus/documents/alpha.json"]), {
    configPath: "legal-corpus/documents/alpha.json",
    forceRebuild: false,
  })
  assert.deepEqual(
    parseArguments(["legal-corpus/documents/alpha.json", "--force-rebuild"]),
    { configPath: "legal-corpus/documents/alpha.json", forceRebuild: true }
  )
  assert.deepEqual(
    parseArguments(["--force-rebuild", "legal-corpus/documents/alpha.json"]),
    { configPath: "legal-corpus/documents/alpha.json", forceRebuild: true }
  )
  assert.deepEqual(parseArguments([]), { configPath: undefined, forceRebuild: false })
  assert.throws(
    () => parseArguments(["a.json", "b.json"]),
    /Unexpected argument/
  )
})

test("assertRebuildAllowed permits a first build but rejects rebuilding existing artifacts without --force-rebuild", () => {
  assert.doesNotThrow(() =>
    assertRebuildAllowed({ editionId: "alpha-2026-1", existingManifests: [], forceRebuild: false })
  )
  assert.throws(
    () =>
      assertRebuildAllowed({
        editionId: "alpha-2026-1",
        existingManifests: [{ pdfSha256: "a".repeat(64) }],
        forceRebuild: false,
      }),
    (error) => {
      assert.equal(error.name, "CorpusValidationError")
      assert.match(error.message, /--force-rebuild/)
      assert.equal(error.diagnostics.fatal[0].code, "identity.edition-already-built")
      return true
    }
  )
  assert.doesNotThrow(() =>
    assertRebuildAllowed({
      editionId: "alpha-2026-1",
      existingManifests: [{ pdfSha256: "a".repeat(64) }],
      forceRebuild: true,
    })
  )
})

test("resolveBuiltAt preserves the original builtAt when the rebuilt PDF checksum is unchanged", () => {
  const existingManifests = [
    { pdfSha256: "a".repeat(64), builtAt: "2026-01-01T00:00:00Z" },
    { pdfSha256: "a".repeat(64), builtAt: "2026-01-01T00:00:00Z" },
  ]
  assert.equal(
    resolveBuiltAt({ existingManifests, pdfSha256: "a".repeat(64), now: "2026-07-16T00:00:00Z" }),
    "2026-01-01T00:00:00Z"
  )
})

test("resolveBuiltAt uses the fresh timestamp for a first build or a genuinely changed checksum", () => {
  assert.equal(
    resolveBuiltAt({ existingManifests: [], pdfSha256: "a".repeat(64), now: "2026-07-16T00:00:00Z" }),
    "2026-07-16T00:00:00Z"
  )
  assert.equal(
    resolveBuiltAt({
      existingManifests: [{ pdfSha256: "b".repeat(64), builtAt: "2026-01-01T00:00:00Z" }],
      pdfSha256: "a".repeat(64),
      now: "2026-07-16T00:00:00Z",
    }),
    "2026-07-16T00:00:00Z"
  )
})
