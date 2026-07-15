import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import { groupEditions, renderRegistry, scanCorpusEditions } from "../generate-registry.mjs"

const manifest = (documentId, editionId) => ({
  id: editionId,
  schemaVersion: 2,
  documentId,
  editionId,
  shortName: documentId,
  title: documentId,
  citation: editionId,
})

const provision = ({ documentId, editionId, id = `${documentId}-art-1`, order = 1 } = {}) => ({
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

async function writeEdition(root, directory, editionManifest, provisions) {
  const target = path.join(root, directory)
  await mkdir(target, { recursive: true })
  await writeFile(path.join(target, "manifest.json"), JSON.stringify(editionManifest))
  await writeFile(path.join(target, "provisions.json"), JSON.stringify(provisions))
}

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
  })
})
