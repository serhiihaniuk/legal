import test from "node:test"
import assert from "node:assert/strict"

import {
  assertOverlayBaseSource,
  assertRebuildAllowed,
  fetchBytes,
  parseArguments,
  resolveBuiltAt,
  resolveFetchTimeoutMs,
} from "../build-document.mjs"

/**
 * @param {(url: string, options: { signal: AbortSignal }) => Promise<unknown>} implementation
 * @param {() => Promise<void>} callback
 */
async function withFetch(implementation, callback) {
  const original = globalThis.fetch
  globalThis.fetch = /** @type {typeof fetch} */ (implementation)
  try {
    await callback()
  } finally {
    globalThis.fetch = original
  }
}

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
  assert.deepEqual(parseArguments([]), {
    configPath: undefined,
    forceRebuild: false,
  })
  assert.throws(
    () => parseArguments(["a.json", "b.json"]),
    /Unexpected argument/
  )
})

test("assertRebuildAllowed permits a first build but rejects rebuilding existing artifacts without --force-rebuild", () => {
  assert.doesNotThrow(() =>
    assertRebuildAllowed({
      editionId: "alpha-2026-1",
      existingManifests: [],
      forceRebuild: false,
    })
  )
  assert.throws(
    () =>
      assertRebuildAllowed({
        editionId: "alpha-2026-1",
        existingManifests: [{ pdfSha256: "a".repeat(64) }],
        forceRebuild: false,
      }),
    (/** @type {any} */ error) => {
      assert.equal(error.name, "CorpusValidationError")
      assert.match(error.message, /--force-rebuild/)
      assert.equal(
        error.diagnostics.fatal[0].code,
        "identity.edition-already-built"
      )
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

test("assertOverlayBaseSource accepts only the declared base edition and checksum", () => {
  const options = {
    baseEditionId: "ppsa-2026-143",
    documentId: "ppsa",
    pdfSha256: "a".repeat(64),
  }
  assert.doesNotThrow(() =>
    assertOverlayBaseSource({
      ...options,
      manifest: {
        editionId: options.baseEditionId,
        documentId: options.documentId,
        pdfSha256: options.pdfSha256,
      },
    })
  )
  assert.throws(
    () =>
      assertOverlayBaseSource({
        ...options,
        manifest: {
          editionId: options.baseEditionId,
          documentId: options.documentId,
          pdfSha256: "b".repeat(64),
        },
      }),
    (/** @type {any} */ error) => {
      assert.equal(
        error.diagnostics.fatal[0].code,
        "overlay.base-source-mismatch"
      )
      assert.deepEqual(error.diagnostics.fatal[0].details.mismatches, [
        "pdfSha256",
      ])
      return true
    }
  )
})

test("resolveBuiltAt preserves the original builtAt when the rebuilt PDF checksum is unchanged", () => {
  const existingManifests = [
    { pdfSha256: "a".repeat(64), builtAt: "2026-01-01T00:00:00Z" },
    { pdfSha256: "a".repeat(64), builtAt: "2026-01-01T00:00:00Z" },
  ]
  assert.equal(
    resolveBuiltAt({
      existingManifests,
      pdfSha256: "a".repeat(64),
      now: "2026-07-16T00:00:00Z",
    }),
    "2026-01-01T00:00:00Z"
  )
})

test("resolveBuiltAt uses the fresh timestamp for a first build or a genuinely changed checksum", () => {
  assert.equal(
    resolveBuiltAt({
      existingManifests: [],
      pdfSha256: "a".repeat(64),
      now: "2026-07-16T00:00:00Z",
    }),
    "2026-07-16T00:00:00Z"
  )
  assert.equal(
    resolveBuiltAt({
      existingManifests: [
        { pdfSha256: "b".repeat(64), builtAt: "2026-01-01T00:00:00Z" },
      ],
      pdfSha256: "a".repeat(64),
      now: "2026-07-16T00:00:00Z",
    }),
    "2026-07-16T00:00:00Z"
  )
})

test("resolveFetchTimeoutMs falls back to the default for a missing or invalid override", () => {
  assert.equal(resolveFetchTimeoutMs({}), 60_000)
  assert.equal(
    resolveFetchTimeoutMs({ LEGAL_CORPUS_FETCH_TIMEOUT_MS: "not-a-number" }),
    60_000
  )
  assert.equal(
    resolveFetchTimeoutMs({ LEGAL_CORPUS_FETCH_TIMEOUT_MS: "-5" }),
    60_000
  )
  assert.equal(
    resolveFetchTimeoutMs({ LEGAL_CORPUS_FETCH_TIMEOUT_MS: "15000" }),
    15_000
  )
})

test("fetchBytes aborts a hung request with a clear timeout error instead of stalling indefinitely", async () => {
  await withFetch(
    (url, options) =>
      new Promise((_resolve, reject) => {
        options.signal.addEventListener("abort", () => {
          const error = new Error("The operation was aborted")
          error.name = "TimeoutError"
          reject(error)
        })
      }),
    async () => {
      await assert.rejects(
        () => fetchBytes("https://example.test/slow", { timeoutMs: 5 }),
        /timed out after 5ms/
      )
    }
  )
})

test("fetchBytes rejects a response whose content-type clearly does not match what was expected", async () => {
  await withFetch(
    async () => ({
      ok: true,
      status: 200,
      headers: new Headers({ "content-type": "text/html; charset=utf-8" }),
      arrayBuffer: async () => new ArrayBuffer(0),
    }),
    async () => {
      await assert.rejects(
        () =>
          fetchBytes("https://example.test/metadata", {
            expectedContentType: /application\/json/iu,
          }),
        /unexpected|content-type/i
      )
    }
  )
})

test("fetchBytes tolerates a missing content-type header instead of failing a correct response", async () => {
  const expectedBytes = new TextEncoder().encode("%PDF-1.4 fixture")
  await withFetch(
    async () => ({
      ok: true,
      status: 200,
      headers: new Headers(),
      arrayBuffer: async () => expectedBytes.buffer,
    }),
    async () => {
      const bytes = await fetchBytes("https://example.test/source.pdf", {
        expectedContentType: /application\/pdf/iu,
      })
      assert.deepEqual(bytes, expectedBytes)
    }
  )
})
