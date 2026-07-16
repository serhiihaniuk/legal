import test from "node:test"
import assert from "node:assert/strict"
import { access } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { pathToFileURL } from "node:url"

import { resolveRepoRoot } from "../lib/repo-root.mjs"

test("resolveRepoRoot derives the repository root two directories above the module, regardless of an unrelated working directory", () => {
  const fakeRoot = path.join(os.tmpdir(), "example-repo")
  const moduleUrl = pathToFileURL(
    path.join(fakeRoot, "scripts", "legal-corpus", "build-document.mjs")
  ).href
  assert.equal(resolveRepoRoot(moduleUrl), fakeRoot)
})

test("resolveRepoRoot resolves this repository's actual root from build-document.mjs's own module location", async () => {
  const buildDocumentUrl = new URL("../build-document.mjs", import.meta.url).href
  const root = resolveRepoRoot(buildDocumentUrl)
  await assert.doesNotReject(() => access(path.join(root, "package.json")))
  await assert.doesNotReject(() => access(path.join(root, "scripts/legal-corpus/build-document.mjs")))
})
