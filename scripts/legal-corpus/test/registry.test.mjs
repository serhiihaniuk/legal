import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import {
  generateRegistry,
  groupEditions,
  renderReferenceRegistry,
  renderRegistry,
  scanCorpusEditions,
  writeGeneratedFile,
} from "../generate-registry.mjs"

/**
 * @param {string} documentId
 * @param {string} editionId
 */
const manifest = (documentId, editionId) => ({
  id: editionId,
  schemaVersion: 2,
  documentId,
  editionId,
  shortName: documentId,
  title: documentId,
  citation: editionId,
})

/**
 * @param {{ documentId: string, editionId: string, id?: string, order?: number }} options
 */
const provision = ({ documentId, editionId, id = `${documentId}-art-1`, order = 1 }) => ({
  id,
  documentId,
  editionId,
  kind: "article",
  locator: "Art. 1",
  parentId: null,
  childIds: [],
  order,
  startPdfPage: 1,
  endPdfPage: 1,
  status: "active",
  sourcePdfSha256: "a".repeat(64),
  sourceTextHash: "b".repeat(64),
  text: "Art. 1. Tekst.",
})

/**
 * @param {string} root
 * @param {string} directory
 * @param {Record<string, unknown>} editionManifest
 * @param {Array<Record<string, unknown>>} provisions
 */
async function writeEdition(root, directory, editionManifest, provisions) {
  const target = path.join(root, directory)
  await mkdir(target, { recursive: true })
  await writeFile(path.join(target, "manifest.json"), JSON.stringify(editionManifest))
  await writeFile(path.join(target, "provisions.json"), JSON.stringify(provisions))
}

/**
 * @param {(root: string) => Promise<any>} callback
 */
async function withTempCorpus(callback) {
  const root = await mkdtemp(path.join(os.tmpdir(), "legal-registry-"))
  try {
    return await callback(root)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

test("rejects missing and ambiguous current-edition pointers", async () => {
  await withTempCorpus(async (root) => {
    await writeEdition(root, "alpha-2025-1", manifest("alpha", "alpha-2025-1"), [provision({ documentId: "alpha", editionId: "alpha-2025-1" })])
    const editions = await scanCorpusEditions(root)
    assert.throws(() => groupEditions(editions, {}), /missing explicit current-edition pointer/)

    await writeEdition(root, "alpha-2026-2", manifest("alpha", "alpha-2026-2"), [provision({ documentId: "alpha", editionId: "alpha-2026-2" })])
    const ambiguous = await scanCorpusEditions(root)
    assert.throws(() => groupEditions(ambiguous, {}), /ambiguous editions/)
    assert.throws(() => groupEditions(ambiguous, { alpha: "alpha-2027-3" }), /exactly one scanned edition/)
  })
})

test("rejects a provision whose document or edition identity differs from its manifest", async () => {
  await withTempCorpus(async (root) => {
    await writeEdition(
      root,
      "alpha-2025-1",
      manifest("alpha", "alpha-2025-1"),
      [provision({ documentId: "beta", editionId: "alpha-2025-1" })]
    )
    await assert.rejects(() => scanCorpusEditions(root), /mismatched document or edition/)
  })
})

test("renders deterministic imports and preserves source provision order", async () => {
  await withTempCorpus(async (root) => {
    await writeEdition(
      root,
      "alpha-2025-1",
      manifest("alpha", "alpha-2025-1"),
      [
        provision({ documentId: "alpha", editionId: "alpha-2025-1", id: "alpha-art-2", order: 2 }),
        provision({ documentId: "alpha", editionId: "alpha-2025-1", id: "alpha-art-1", order: 1 }),
      ]
    )
    const editions = await scanCorpusEditions(root)
    const groups = groupEditions(editions, { alpha: "alpha-2025-1" })
    const first = renderRegistry(groups, root, path.join(root, "registry.generated.ts"))
    const second = renderRegistry(groups, root, path.join(root, "registry.generated.ts"))
    assert.equal(first, second)
    assert.ok(first.indexOf('provisionIds: ["alpha-art-2", "alpha-art-1"]') > 0)

    const lightweight = renderReferenceRegistry(groups)
    assert.match(lightweight, /Lightweight IDs only/u)
    assert.doesNotMatch(lightweight, /import .*provisions\.json/u)
    assert.match(lightweight, /"alpha-art-1"/u)
  })
})

test("writes generated registry files via temp file + rename, leaving no partial file on failure", async () => {
  await withTempCorpus(async (root) => {
    const target = path.join(root, "registry.generated.ts")
    await writeFile(target, "// old content\n", "utf8")

    // Pre-occupy the write's temp path with a directory so the write fails
    // before any rename is attempted.
    const blockedTempPath = `${target}.tmp-${process.pid}`
    await mkdir(blockedTempPath, { recursive: true })
    try {
      await assert.rejects(() => writeGeneratedFile(target, "// new content\n"))
      assert.equal(await readFile(target, "utf8"), "// old content\n")
    } finally {
      await rm(blockedTempPath, { recursive: true, force: true })
    }
  })
})

test("generateRegistry accepts an explicit currentEditions override instead of reading the pointer file", async () => {
  await withTempCorpus(async (root) => {
    await writeEdition(
      root,
      "app/data/legal-corpus/alpha-2025-1",
      manifest("alpha", "alpha-2025-1"),
      [provision({ documentId: "alpha", editionId: "alpha-2025-1" })]
    )
    await writeEdition(
      root,
      "app/data/legal-corpus/alpha-2026-2",
      manifest("alpha", "alpha-2026-2"),
      [provision({ documentId: "alpha", editionId: "alpha-2026-2" })]
    )
    // No current-editions.json exists on disk at all; the override must be
    // used in its place, as promoteEdition relies on for pending-state writes.
    const result = await generateRegistry({
      projectRoot: root,
      currentEditions: { alpha: "alpha-2026-2" },
    })
    assert.match(result.referenceSource, /currentEditionId: "alpha-2026-2"/)
    const written = await readFile(result.referenceOutputPath, "utf8")
    assert.equal(written, result.referenceSource)
  })
})
