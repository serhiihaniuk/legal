import test from "node:test"
import assert from "node:assert/strict"
import { spawn } from "node:child_process"
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import { buildDocument } from "../build-document.mjs"
import {
  prepareWorkOrder,
  promoteEdition,
  readJson,
  verifyPromotionArtifacts,
  writeJson,
} from "../lib/workflow.mjs"

/** @param {string} root @param {string} command @param {string[]} args @returns {Promise<void>} */
async function run(root, command, args) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: "ignore" })
    child.once("error", reject)
    child.once("exit", (code) => code === 0 ? resolve(undefined) : reject(new Error(`${command} exited ${code}`)))
  })
}

/** @param {string} root @param {string} editionId @param {string} citation @returns {Promise<string>} */
async function writeConfig(root, editionId, citation = "Dz.U. 2026 poz. 1") {
  const configPath = path.join(root, "legal-corpus/documents", `${editionId}.json`)
  await writeJson(configPath, {
    schemaVersion: 2,
    documentId: "alpha",
    editionId,
    shortName: "Alpha fixture",
    title: "Alpha fixture act",
    citation,
    source: {
      provider: "fixture",
      officialPageUrl: "https://fixture.test/act",
      metadataUrl: "https://fixture.test/metadata",
      pdfUrl: "https://fixture.test/source.pdf",
    },
    checkedAt: "2026-07-15",
    legalStateDate: "2026-07-15",
    extraction: {
      profile: "polish-statute-art-v1",
      expectedProvisionCount: 1,
      expectedTextCoverage: 0.1,
      expectedPageCount: 1,
    },
  })
  return path.relative(root, configPath).replaceAll("\\", "/")
}

/** @param {string} text @returns {typeof fetch} */
function makeFetch(text) {
  const metadata = new TextEncoder().encode(JSON.stringify({
    ELI: "DU/2026/1",
    displayAddress: "Dz.U. 2026 poz. 1",
    status: "obowiązujący",
    inForce: "IN_FORCE",
    legalStatusDate: "2026-07-15",
    textPDF: true,
  }))
  const pdf = new TextEncoder().encode("%PDF-1.4 lifecycle fixture")
  return /** @type {typeof fetch} */ (async (input) => {
    const url = String(input)
    const bytes = url.endsWith("metadata") ? metadata : pdf
    return /** @type {Response} */ ({
      ok: true,
      status: 200,
      headers: new Headers({ "content-type": url.endsWith("metadata") ? "application/json" : "application/pdf" }),
      arrayBuffer: async () => bytes.buffer,
    })
  })
}

/** @param {() => string} getText @returns {typeof import("pdfjs-dist/legacy/build/pdf.mjs").getDocument} */
function makeDocumentLoader(getText) {
  return /** @type {any} */ (() => ({
    promise: Promise.resolve({
      numPages: 1,
      getPage: async () => ({
        getTextContent: async () => ({ items: [{ str: getText(), hasEOL: false }] }),
      }),
    }),
    destroy: async () => {},
  }))
}

/** @param {(root: string) => Promise<void>} callback @returns {Promise<void>} */
async function withRoot(callback) {
  const root = await mkdtemp(path.join(os.tmpdir(), "legal-lifecycle-"))
  try {
    return await callback(root)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

test("proves the no-network prepare/validate/promote lifecycle and rebuild safety", async () => {
  await withRoot(async (root) => {
    await mkdir(path.join(root, "app/data"), { recursive: true })
    await writeJson(path.join(root, "app/data/legal-library/current-editions.json"), { alpha: "alpha-2025-0" })
    await writeSource(root, "app/data/legal-data.ts", [
      'const law = createLegalTextAuthor("alpha")',
      'law.text`${law.article("1")}`',
    ].join("\n"))
    const oldConfigPath = await writeConfig(root, "alpha-2025-0")
    const newConfigPath = await writeConfig(root, "alpha-2026-1")
    await writeSource(root, "legal-corpus/prompts/add-or-update-document.md", "# fixture work order\n{{DOCUMENT_ID}}\n{{REVIEW_DEPENDANTS}}\n")
    let activeText = "Art. 1. Old fixture text."
    const fetchImpl = makeFetch(activeText)
    const oldLoader = makeDocumentLoader(() => activeText)

    await run(root, "git", ["init"])
    await run(root, "git", ["config", "user.email", "fixture@example.test"])
    await run(root, "git", ["config", "user.name", "Fixture"])
    await buildDocument({ projectRoot: root, configPath: oldConfigPath, fetchImpl, getDocumentImpl: oldLoader, emit: false })
    await run(root, "git", ["add", "."])
    await run(root, "git", ["commit", "-m", "fixture baseline"])

    // Dry-run is a read-only plan: no new edition, work-order or diff is created.
    const dryRun = await prepareWorkOrder({
      projectRoot: root,
      mode: "update",
      configPath: newConfigPath,
      oldEditionId: "alpha-2025-0",
      approvedWriteScope: ["app/data/legal-library/editorial/alpha/part-00.ts"],
      dryRun: true,
    })
    assert.equal(dryRun.dryRun, true)
    await assert.rejects(() => readFile(path.join(root, "app/data/legal-corpus/alpha-2026-1/manifest.json")))

    activeText = "Art. 1. New fixture text."
    const newLoader = makeDocumentLoader(() => activeText)
    const prepared = await prepareWorkOrder({
      projectRoot: root,
      mode: "update",
      configPath: newConfigPath,
      oldEditionId: "alpha-2025-0",
      approvedWriteScope: ["app/data/legal-library/editorial/alpha/part-00.ts"],
      fetchImpl: makeFetch(activeText),
      getDocumentImpl: newLoader,
    })
    const diff = await readJson(prepared.editionDiffPath)
    assert.ok(diff.provisions.changed.includes("alpha-art-1"))
    assert.deepEqual(diff.reviewDependants, [{
      provisionId: "alpha-art-1",
      references: [{ file: "app/data/legal-data.ts", line: 2 }],
    }])
    const prompt = await readFile(prepared.promptPath, "utf8")
    assert.match(prompt, /Generated typed-reference dependants/u)
    assert.match(prompt, /app\/data\/legal-data\.ts:2/u)

    const manifestPath = path.join(root, "app/data/legal-corpus/alpha-2026-1/manifest.json")
    const firstManifest = await readJson(manifestPath)
    await buildDocument({ projectRoot: root, configPath: newConfigPath, forceRebuild: true, fetchImpl: makeFetch(activeText), getDocumentImpl: newLoader, emit: false })
    const rebuiltManifest = await readJson(manifestPath)
    assert.equal(rebuiltManifest.builtAt, firstManifest.builtAt)

    const workOrder = await readJson(prepared.workOrderPath)
    workOrder.legalStatusEvidence = {
      status: "obowiązujący",
      inForce: "IN_FORCE",
      legalStateDate: "2026-07-15",
      legalStatusDate: "2026-07-15",
      consolidatedTextIdentifier: "DU/2026/1",
      checkedAt: "2026-07-15",
      sourceUrls: ["https://fixture.test/act"],
      sourceUrl: "https://fixture.test/act",
      amendmentsCheckedThrough: "2026-07-15",
      entryIntoForce: [{ locator: "Art. 1", result: "checked" }],
      transitionalRules: [{ locator: "final provisions", result: "none" }],
      unresolved: [],
    }
    workOrder.review = { completedAt: "2026-07-16T00:00:00Z", status: "READY", unresolved: [] }
    workOrder.recommendation = "READY_FOR_EXPLICIT_PROMOTION"
    await writeJson(prepared.workOrderPath, workOrder)

    // Validate the prepared packet, then prove promotion re-verifies disk facts.
    const validated = await (await import("../lib/workflow.mjs")).validateWorkOrder({ projectRoot: root, workOrderPath: prepared.workOrderPath })
    assert.equal(validated.passed, true)
    assert.deepEqual(await verifyPromotionArtifacts({ projectRoot: root, workOrder: validated.workOrder }), [])

    const provisionsPath = path.join(root, "app/data/legal-corpus/alpha-2026-1/provisions.json")
    const tampered = await readJson(provisionsPath)
    tampered[0].text = "Art. 1. Tampered after validation."
    await writeJson(provisionsPath, tampered)
    await assert.rejects(
      () => promoteEdition({
        projectRoot: root,
        workOrder: validated.workOrder,
        workOrderPath: prepared.workOrderPath,
        approvedBy: "fixture-reviewer",
        verifyArtifacts: true,
      }),
      /Promotion blocked by corpus re-verification.*provisions\.source-text-checksum-mismatch/u,
    )
    assert.deepEqual(await readJson(path.join(root, "app/data/legal-library/current-editions.json")), { alpha: "alpha-2025-0" })
    await assert.rejects(() => readFile(path.join(root, "legal-corpus/promotions/alpha-alpha-2026-1.json")))
    await buildDocument({ projectRoot: root, configPath: newConfigPath, forceRebuild: true, fetchImpl: makeFetch(activeText), getDocumentImpl: newLoader, emit: false })

    const record = await promoteEdition({
      projectRoot: root,
      workOrder: validated.workOrder,
      workOrderPath: prepared.workOrderPath,
      approvedBy: "fixture-reviewer",
      verifyArtifacts: true,
    })
    assert.deepEqual(await readJson(path.join(root, "app/data/legal-library/current-editions.json")), { alpha: "alpha-2026-1" })
    assert.match(await readFile(path.join(root, "app/data/legal-corpus/reference-registry.generated.ts"), "utf8"), /currentEditionId: "alpha-2026-1"/u)
    assert.deepEqual(await readJson(path.join(root, "legal-corpus/promotions/alpha-alpha-2026-1.json")), record)
  })
})

/** @param {string} root @param {string} relative @param {string} source @returns {Promise<void>} */
async function writeSource(root, relative, source) {
  const file = path.join(root, relative)
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, source, "utf8")
}
