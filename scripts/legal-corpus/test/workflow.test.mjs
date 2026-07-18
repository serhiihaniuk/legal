import test from "node:test"
import assert from "node:assert/strict"
import {
  mkdtemp,
  mkdir,
  readFile,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import { buildObservedFacts, buildStructure } from "../lib/artifacts.mjs"
import { createProvisionId, sha256 } from "../lib/extraction.mjs"
import {
  diffProvisionLists,
  discoverReviewDependants,
  makeLegalStatusEvidence,
  renderReviewDependants,
  normalizeRepositoryPath,
  prepareWorkOrder,
  previewPromotion,
  promoteEdition,
  readJson,
  runEditorialValidator,
  validateApprovedWriteScope,
  validateChangedFileSet,
  validateLegalStatusEvidence,
  verifyPromotionArtifacts,
  writeJson,
} from "../lib/workflow.mjs"

/**
 * @param {(root: string) => Promise<any>} callback
 */
async function withTempCorpus(callback) {
  const root = await mkdtemp(path.join(os.tmpdir(), "legal-promotion-"))
  try {
    return await callback(root)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

/**
 * @param {string} root
 * @param {{ documentId: string, editionId: string, provisionId: string }} options
 */
async function writeEditorialFixture(
  root,
  { documentId, editionId, provisionId }
) {
  const editorialPath = path.join(
    root,
    "app/data/legal-library/editorial",
    documentId,
    "articles/article-art-1.ts"
  )
  await mkdir(path.dirname(editorialPath), { recursive: true })
  await writeFile(
    editorialPath,
    `export const part = {
  documentId: "${documentId}",
  editionId: "${editionId}",
  entries: [{ provisionId: "${provisionId}", reviewStatus: "reviewed" }],
}\n`,
    "utf8"
  )
}

/**
 * Write a complete, internally consistent edition (config, manifest,
 * metadata, pages, provisions, structure, local PDF) under a temp project
 * root, mirroring what build-document.mjs would have staged. Returns the
 * promotion work order fields verifyPromotionArtifacts/promoteEdition need,
 * plus the raw provisions/structure so tests can tamper with a copy.
 * @param {string} root
 * @param {{ documentId?: string, editionId?: string }} [options]
 */
async function writeCorpusFixture(
  root,
  { documentId = "alpha", editionId = "alpha-2026-1" } = {}
) {
  const pdfBytes = new TextEncoder().encode(
    `%PDF-1.4 fixture bytes for ${editionId}`
  )
  const pdfSha256 = sha256(pdfBytes)
  const pages = [
    {
      pdfPage: 1,
      text: "Art. 1. Tekst przepisu.",
      characterCount: 24,
      hasTextLayer: true,
    },
  ]
  const locator = "Art. 1"
  const text = `${locator}. Tekst przepisu.`
  const provisions = [
    {
      id: createProvisionId(documentId, locator, "article"),
      documentId,
      editionId,
      kind: "article",
      locator,
      parentId: null,
      childIds: [],
      order: 1,
      startPdfPage: 1,
      endPdfPage: 1,
      status: "active",
      sourcePdfSha256: pdfSha256,
      sourceTextHash: sha256(text),
      text,
    },
  ]
  const observed = buildObservedFacts(pages, provisions)
  const structure = buildStructure(provisions, {
    schemaVersion: 2,
    documentId,
    editionId,
    profile: "polish-statute-art-v1",
  })
  const config = {
    schemaVersion: 2,
    documentId,
    editionId,
    shortName: documentId,
    title: documentId,
    citation: "Dz.U. 2026 poz. 1",
    source: {
      provider: "eli",
      officialPageUrl: "https://eli.gov.pl/eli/DU/2026/1/ogl",
      metadataUrl: "https://api.sejm.gov.pl/eli/acts/DU/2026/1",
      pdfUrl: "https://eli.gov.pl/api/acts/DU/2026/1/text/T/D20260001L.pdf",
    },
    checkedAt: "2026-07-15",
    legalStateDate: "2026-07-15",
    extraction: {
      profile: "polish-statute-art-v1",
      expectedProvisionCount: provisions.length,
      expectedTextCoverage: observed.textCoverage,
      expectedPageCount: pages.length,
    },
  }
  const metadata = {
    ELI: "DU/2026/1",
    status: "obowiązujący",
    inForce: "IN_FORCE",
    legalStatusDate: "2026-07-15",
    textPDF: true,
  }
  const manifest = {
    id: editionId,
    schemaVersion: 2,
    documentId,
    editionId,
    shortName: documentId,
    title: documentId,
    citation: config.citation,
    pdfSha256,
  }

  const configPath = path.join(
    root,
    "legal-corpus/documents",
    `${editionId}.json`
  )
  await writeJson(configPath, config)

  const editionDirectory = path.join(root, "app/data/legal-corpus", editionId)
  const publicDirectory = path.join(root, "public/legal-sources", editionId)
  await mkdir(editionDirectory, { recursive: true })
  await mkdir(publicDirectory, { recursive: true })
  await writeJson(path.join(editionDirectory, "manifest.json"), manifest)
  await writeJson(path.join(editionDirectory, "metadata.json"), metadata)
  await writeJson(path.join(editionDirectory, "pages.json"), pages)
  await writeJson(path.join(editionDirectory, "provisions.json"), provisions)
  await writeJson(path.join(editionDirectory, "structure.json"), structure)
  await writeFile(path.join(publicDirectory, "source.pdf"), pdfBytes)
  await writeJson(path.join(publicDirectory, "manifest.json"), manifest)

  return {
    documentId,
    editionId,
    provisions,
    structure,
    editionDirectory,
    publicDirectory,
    workOrder: {
      documentId,
      newEditionId: editionId,
      configPath: path.relative(root, configPath).replaceAll("\\", "/"),
    },
  }
}

test("classifies edition changes by stable provision id and source hash", () => {
  const result = diffProvisionLists(
    [
      {
        id: "act-art-1",
        sourceTextHash: "a",
        locator: "Art. 1",
        status: "active",
        parentId: null,
        childIds: [],
      },
      {
        id: "act-art-2",
        sourceTextHash: "b",
        locator: "Art. 2",
        status: "active",
        parentId: null,
        childIds: [],
      },
      {
        id: "act-art-3",
        sourceTextHash: "c",
        locator: "Art. 3",
        status: "active",
        parentId: null,
        childIds: [],
      },
    ],
    [
      {
        id: "act-art-1",
        sourceTextHash: "a",
        locator: "Art. 1",
        status: "active",
        parentId: null,
        childIds: [],
      },
      {
        id: "act-art-2",
        sourceTextHash: "changed",
        locator: "Art. 2",
        status: "active",
        parentId: null,
        childIds: [],
      },
      {
        id: "act-art-4",
        sourceTextHash: "d",
        locator: "Art. 4",
        status: "active",
        parentId: null,
        childIds: [],
      },
    ]
  )
  assert.deepEqual(result, {
    added: ["act-art-4"],
    changed: ["act-art-2"],
    removed: ["act-art-3"],
    unchanged: ["act-art-1"],
  })
})

test("classifies a future provision effective-date change as structural", () => {
  const base = {
    id: "act-art-1a",
    sourceTextHash: "a",
    locator: "Art. 1a",
    status: "future",
    effectiveDate: "2029-10-01",
    parentId: null,
    childIds: [],
  }

  assert.deepEqual(
    diffProvisionLists([base], [{ ...base, effectiveDate: "2030-01-01" }]),
    {
      added: [],
      changed: ["act-art-1a"],
      removed: [],
      unchanged: [],
    }
  )
})

test("prepare and standalone diff dependant discovery share typed file/line references", async () => {
  await withTempCorpus(async (root) => {
    const sourcePath = path.join(root, "app/data/legal-data.ts")
    await mkdir(path.dirname(sourcePath), { recursive: true })
    await writeFile(
      sourcePath,
      [
        'const alphaLaw = createLegalTextAuthor("alpha")',
        'alphaLaw.text`${alphaLaw.article("1")}`',
      ].join("\n")
    )
    const dependants = await discoverReviewDependants({
      projectRoot: root,
      provisionIds: ["alpha-art-1", "alpha-art-removed"],
    })
    assert.deepEqual(dependants, [
      {
        provisionId: "alpha-art-1",
        references: [{ file: "app/data/legal-data.ts", line: 2 }],
      },
      { provisionId: "alpha-art-removed", references: [] },
    ])
    assert.match(renderReviewDependants(dependants), /alpha-art-1/u)
    assert.match(
      renderReviewDependants(dependants),
      /app\/data\/legal-data\.ts:2/u
    )
    assert.match(renderReviewDependants(dependants), /alpha-art-removed/u)
  })
})

test("prepare's identity check rejects an --old-edition manifest whose documentId differs from the new config, before any build runs", async () => {
  await withTempCorpus(async (root) => {
    const oldEditionId = "beta-2025-1"
    await writeJson(
      path.join(root, "app/data/legal-corpus", oldEditionId, "manifest.json"),
      {
        documentId: "beta",
        editionId: oldEditionId,
      }
    )
    const configPath = path.join(
      root,
      "legal-corpus/documents/alpha-2026-1.json"
    )
    await writeJson(configPath, {
      documentId: "alpha",
      editionId: "alpha-2026-1",
    })

    await assert.rejects(
      () =>
        prepareWorkOrder({
          projectRoot: root,
          mode: "update",
          configPath: path.relative(root, configPath),
          oldEditionId,
          approvedWriteScope: [
            "app/data/legal-library/editorial/alpha/art-1.ts",
          ],
        }),
      (/** @type {any} */ error) => {
        assert.match(error.message, /beta/)
        assert.match(error.message, /alpha/)
        return true
      }
    )
    // The mismatch is caught before the (expensive, networked) build step, so
    // no edition directory was ever created for the misconfigured update.
    await assert.rejects(() =>
      readJson(
        path.join(root, "app/data/legal-corpus/alpha-2026-1/manifest.json")
      )
    )
  })
})

test("prepare --dry-run reports planned build/write paths and touches nothing", async () => {
  await withTempCorpus(async (root) => {
    const oldEditionId = "alpha-2025-0"
    await writeJson(
      path.join(root, "app/data/legal-corpus", oldEditionId, "manifest.json"),
      {
        documentId: "alpha",
        editionId: oldEditionId,
      }
    )
    const configPath = path.join(
      root,
      "legal-corpus/documents/alpha-2026-1.json"
    )
    await writeJson(configPath, {
      documentId: "alpha",
      editionId: "alpha-2026-1",
      supplementalSources: [
        { localFilename: "effective-date-mp-2026-370.pdf" },
      ],
    })

    const preview = await prepareWorkOrder({
      projectRoot: root,
      mode: "update",
      configPath: path.relative(root, configPath),
      oldEditionId,
      approvedWriteScope: ["app/data/legal-library/editorial/alpha/art-1.ts"],
      dryRun: true,
    })

    assert.equal(preview.dryRun, true)
    assert.equal(preview.mode, "update")
    assert.equal(preview.oldEditionId, oldEditionId)
    assert.equal(preview.newEditionId, "alpha-2026-1")
    assert.ok(
      preview.wouldBuild.artifactPaths.includes(
        "app/data/legal-corpus/alpha-2026-1/provisions.json"
      )
    )
    assert.ok(
      preview.wouldBuild.artifactPaths.includes(
        "public/legal-sources/alpha-2026-1/effective-date-mp-2026-370.pdf"
      )
    )
    assert.ok(
      preview.wouldWrite.workOrderPath.endsWith("alpha-alpha-2026-1.json")
    )

    // A dry run never builds or writes: no edition directory, no work order.
    await assert.rejects(() =>
      readJson(
        path.join(root, "app/data/legal-corpus/alpha-2026-1/manifest.json")
      )
    )
    await assert.rejects(() =>
      readJson(path.join(root, preview.wouldWrite.workOrderPath))
    )
  })
})

test("previews a promotion's pointer transition and target files without writing anything", () => {
  const preview = previewPromotion({
    workOrder: { documentId: "alpha", newEditionId: "alpha-2026-1" },
    approval: "alpha@alpha-2026-1",
    validation: { passed: true, errors: [] },
    currentPointers: { alpha: "alpha-2025-0" },
  })
  assert.equal(preview.dryRun, true)
  assert.equal(preview.wouldPromote, true)
  assert.deepEqual(preview.pointerTransition, {
    documentId: "alpha",
    from: "alpha-2025-0",
    to: "alpha-2026-1",
  })
  assert.equal(
    preview.wouldWrite.pointerPath,
    "app/data/legal-library/current-editions.json"
  )
  assert.equal(
    preview.wouldWrite.promotionRecordPath,
    "legal-corpus/promotions/alpha-alpha-2026-1.json"
  )
})

test("validates only the promotion target when other candidate editorials are co-staged", async () => {
  await withTempCorpus(async (root) => {
    const fixtures = []
    for (const documentId of ["alpha", "beta", "gamma"]) {
      fixtures.push({
        documentId,
        old: await writeCorpusFixture(root, {
          documentId,
          editionId: `${documentId}-2025-0`,
        }),
        candidate: await writeCorpusFixture(root, {
          documentId,
          editionId: `${documentId}-2026-1`,
        }),
      })
    }
    const [alpha, beta, gamma] = fixtures
    const pointerPath = path.join(
      root,
      "app/data/legal-library/current-editions.json"
    )
    await mkdir(path.dirname(pointerPath), { recursive: true })
    const pointerBytes = `${JSON.stringify(
      Object.fromEntries(
        fixtures.map(({ documentId, old }) => [documentId, old.editionId])
      ),
      null,
      2
    ).replaceAll("\n", "\r\n")}\r\n`
    await writeFile(pointerPath, pointerBytes, "utf8")
    for (const { documentId, candidate } of fixtures) {
      await writeEditorialFixture(root, {
        documentId,
        editionId: candidate.editionId,
        provisionId: `${documentId}-art-1`,
      })
    }

    const candidateCurrentEditions = {
      ...(await readJson(pointerPath)),
      alpha: alpha.candidate.editionId,
    }
    const globalErrors = await runEditorialValidator(
      root,
      candidateCurrentEditions
    )
    assert.match(
      globalErrors.join("\n"),
      new RegExp(`\\[wrong-edition\\] beta-art-1.*${beta.candidate.editionId}`)
    )
    assert.match(
      globalErrors.join("\n"),
      new RegExp(
        `\\[wrong-edition\\] gamma-art-1.*${gamma.candidate.editionId}`
      )
    )
    assert.deepEqual(
      await runEditorialValidator(root, candidateCurrentEditions, "alpha"),
      []
    )
    assert.equal(await readFile(pointerPath, "utf8"), pointerBytes)

    await writeEditorialFixture(root, {
      documentId: "alpha",
      editionId: alpha.candidate.editionId,
      provisionId: "alpha-art-missing",
    })
    const invalidCandidateErrors = await runEditorialValidator(
      root,
      candidateCurrentEditions,
      "alpha"
    )
    assert.match(invalidCandidateErrors.join("\n"), /\[unknown-provision\]/u)
    assert.equal(await readFile(pointerPath, "utf8"), pointerBytes)
  })
})

test("flags a promotion preview as blocked when the approval token or validation does not pass", () => {
  const blockedByApproval = previewPromotion({
    workOrder: { documentId: "alpha", newEditionId: "alpha-2026-1" },
    approval: "alpha@wrong-edition",
    validation: { passed: true, errors: [] },
    currentPointers: {},
  })
  assert.equal(blockedByApproval.wouldPromote, false)
  assert.equal(blockedByApproval.approvalMatches, false)
  assert.equal(blockedByApproval.pointerTransition.from, null)

  const blockedByValidation = previewPromotion({
    workOrder: { documentId: "alpha", newEditionId: "alpha-2026-1" },
    approval: "alpha@alpha-2026-1",
    validation: {
      passed: false,
      errors: ["corpus fact re-verification failed"],
    },
    currentPointers: {},
  })
  assert.equal(blockedByValidation.wouldPromote, false)
  assert.equal(blockedByValidation.approvalMatches, true)
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

test("rejects work-order evidence dates that are not real calendar dates", () => {
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

  const yesterday = validateLegalStatusEvidence({
    ...complete,
    checkedAt: "yesterday",
  })
  assert.ok(
    yesterday.some((message) =>
      message.includes("legalStatusEvidence.checkedAt")
    )
  )

  const impossibleDate = validateLegalStatusEvidence({
    ...complete,
    amendmentsCheckedThrough: "2026-99-99",
  })
  assert.ok(
    impossibleDate.some((message) =>
      message.includes("legalStatusEvidence.amendmentsCheckedThrough")
    )
  )

  const badOptionalDate = validateLegalStatusEvidence({
    ...complete,
    legalStateDate: "2026-99-99",
  })
  assert.ok(
    badOptionalDate.some((message) =>
      message.includes("legalStatusEvidence.legalStateDate")
    )
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
    entryIntoForce: [
      { locator: "ELI official page", result: "entered into force" },
    ],
    transitionalRules: [
      { locator: "final provisions", result: "express result recorded" },
    ],
    unresolved: [],
    amendmentReview: { result: "none listed" },
  }
  assert.deepEqual(
    makeLegalStatusEvidence({ legalStatusEvidence: complete }),
    complete
  )
  assert.ok(
    validateLegalStatusEvidence({
      ...complete,
      sourceUrls: ["http://eli.gov.pl"],
    }).length > 0
  )
})

test("re-verifies corpus facts on disk and rejects a tampered provisions.json or structure.json at promotion", async () => {
  await withTempCorpus(async (root) => {
    const fixture = await writeCorpusFixture(root)
    assert.deepEqual(
      await verifyPromotionArtifacts({
        projectRoot: root,
        workOrder: fixture.workOrder,
      }),
      []
    )

    const provisionsPath = path.join(
      fixture.editionDirectory,
      "provisions.json"
    )
    const tamperedProvisions = fixture.provisions.map((provision) => ({
      ...provision,
    }))
    tamperedProvisions[0].text =
      "Art. 1. Hand-edited text that no longer matches the stored hash."
    await writeJson(provisionsPath, tamperedProvisions)
    const provisionErrors = await verifyPromotionArtifacts({
      projectRoot: root,
      workOrder: fixture.workOrder,
    })
    assert.ok(provisionErrors.length > 0)
    assert.ok(
      provisionErrors.some((message) =>
        message.includes("provisions.source-text-checksum-mismatch")
      )
    )

    // Restore provisions.json, then tamper structure.json instead.
    await writeJson(provisionsPath, fixture.provisions)
    const structurePath = path.join(fixture.editionDirectory, "structure.json")
    await writeJson(structurePath, { ...fixture.structure, rootIds: [] })
    const structureErrors = await verifyPromotionArtifacts({
      projectRoot: root,
      workOrder: fixture.workOrder,
    })
    assert.ok(structureErrors.length > 0)
    assert.ok(
      structureErrors.some((message) =>
        message.includes("structure.roots-mismatch")
      )
    )
  })
})

test("re-verifies each local supplemental source PDF checksum at promotion", async () => {
  await withTempCorpus(async (root) => {
    const fixture = await writeCorpusFixture(root)
    const manifestPath = path.join(fixture.editionDirectory, "manifest.json")
    const manifest = await readJson(manifestPath)
    const supplementalBytes = new TextEncoder().encode(
      "%PDF-1.4 supplemental effective-date evidence"
    )
    const supplementalPdfSha256 = sha256(supplementalBytes)
    const supplementalFilename = "effective-date-evidence.pdf"
    const supplementalLocalPdfUrl = `/legal-sources/${fixture.editionId}/${supplementalFilename}`

    manifest.sourceMaterials = [
      {
        id: "base",
        role: "base",
        pdfSha256: manifest.pdfSha256,
        localPdfUrl: `/legal-sources/${fixture.editionId}/source.pdf`,
      },
      {
        id: "effective-date",
        role: "effective-date",
        pdfSha256: supplementalPdfSha256,
        effectiveDate: "2026-07-15",
        localPdfUrl: supplementalLocalPdfUrl,
      },
    ]
    const [provision] = fixture.provisions
    const provisions = [
      {
        ...provision,
        sourceSpans: [
          {
            sourceId: "base",
            role: "base",
            locator: provision.locator,
            startPdfPage: provision.startPdfPage,
            endPdfPage: provision.endPdfPage,
            sourcePdfSha256: provision.sourcePdfSha256,
          },
          {
            sourceId: "effective-date",
            role: "effective-date",
            locator: "official effective-date evidence",
            effectiveDate: "2026-07-15",
            sourcePdfSha256: supplementalPdfSha256,
          },
        ],
      },
    ]
    await writeJson(manifestPath, manifest)
    await writeJson(
      path.join(fixture.editionDirectory, "provisions.json"),
      provisions
    )
    const supplementalPath = path.join(
      fixture.publicDirectory,
      supplementalFilename
    )
    await writeFile(supplementalPath, supplementalBytes)

    assert.deepEqual(
      await verifyPromotionArtifacts({
        projectRoot: root,
        workOrder: fixture.workOrder,
      }),
      []
    )

    await writeFile(
      supplementalPath,
      new TextEncoder().encode("%PDF-1.4 tampered evidence")
    )
    const errors = await verifyPromotionArtifacts({
      projectRoot: root,
      workOrder: fixture.workOrder,
    })
    assert.ok(
      errors.some((message) =>
        message.includes(
          "Source material effective-date local PDF checksum differs from manifest"
        )
      )
    )
  })
})

test("promotes registries before the pointer, so a registry failure never advances the pointer", async () => {
  await withTempCorpus(async (root) => {
    const old = await writeCorpusFixture(root, {
      documentId: "alpha",
      editionId: "alpha-2025-0",
    })
    const pointerPath = path.join(
      root,
      "app/data/legal-library/current-editions.json"
    )
    await writeJson(pointerPath, { alpha: old.editionId })

    // The edition named by newEditionId was never built onto disk, so
    // registry generation fails before any durable write happens.
    const workOrder = {
      documentId: "alpha",
      newEditionId: "alpha-2026-1",
      baseCommit: "deadbeef",
    }
    await assert.rejects(
      () =>
        promoteEdition({
          projectRoot: root,
          workOrder,
          workOrderPath: "legal-corpus/work-orders/alpha-alpha-2026-1.json",
          approvedBy: "reviewer",
        }),
      /exactly one scanned edition/
    )

    assert.deepEqual(await readJson(pointerPath), { alpha: old.editionId })
    await assert.rejects(() =>
      readFile(
        path.join(root, "legal-corpus/promotions", "alpha-alpha-2026-1.json")
      )
    )
  })
})

test("rolls registries back to the original pointer state if the pointer write fails", async () => {
  await withTempCorpus(async (root) => {
    const oldFixture = await writeCorpusFixture(root, {
      documentId: "alpha",
      editionId: "alpha-2025-0",
    })
    const newFixture = await writeCorpusFixture(root, {
      documentId: "alpha",
      editionId: "alpha-2026-1",
    })
    const pointerPath = path.join(
      root,
      "app/data/legal-library/current-editions.json"
    )
    await writeJson(pointerPath, { alpha: oldFixture.editionId })

    // Pre-occupy the pointer's atomic-write temp path with a directory so the
    // write inside promoteEdition fails deterministically.
    const blockedTempPath = `${pointerPath}.tmp-${process.pid}`
    await mkdir(blockedTempPath, { recursive: true })
    try {
      const workOrder = {
        documentId: "alpha",
        newEditionId: newFixture.editionId,
        baseCommit: "deadbeef",
      }
      await assert.rejects(() =>
        promoteEdition({
          projectRoot: root,
          workOrder,
          workOrderPath: "legal-corpus/work-orders/alpha-alpha-2026-1.json",
          approvedBy: "reviewer",
        })
      )

      assert.deepEqual(await readJson(pointerPath), {
        alpha: oldFixture.editionId,
      })
      const referenceRegistry = await readFile(
        path.join(
          root,
          "app/data/legal-corpus/reference-registry.generated.ts"
        ),
        "utf8"
      )
      assert.match(
        referenceRegistry,
        new RegExp(`currentEditionId: "${oldFixture.editionId}"`)
      )
      assert.doesNotMatch(
        referenceRegistry,
        new RegExp(`currentEditionId: "${newFixture.editionId}"`)
      )
      await assert.rejects(() =>
        readFile(
          path.join(
            root,
            "legal-corpus/promotions",
            `alpha-${newFixture.editionId}.json`
          )
        )
      )
    } finally {
      await rm(blockedTempPath, { recursive: true, force: true })
    }
  })
})

test("promotes an edition by regenerating registries, then the pointer, then the record", async () => {
  await withTempCorpus(async (root) => {
    const oldFixture = await writeCorpusFixture(root, {
      documentId: "alpha",
      editionId: "alpha-2025-0",
    })
    const newFixture = await writeCorpusFixture(root, {
      documentId: "alpha",
      editionId: "alpha-2026-1",
    })
    const pointerPath = path.join(
      root,
      "app/data/legal-library/current-editions.json"
    )
    await writeJson(pointerPath, { alpha: oldFixture.editionId })

    const workOrder = {
      documentId: "alpha",
      newEditionId: newFixture.editionId,
      baseCommit: "deadbeef",
    }
    const record = await promoteEdition({
      projectRoot: root,
      workOrder,
      workOrderPath: "legal-corpus/work-orders/alpha-alpha-2026-1.json",
      approvedBy: "reviewer",
    })

    assert.equal(record.documentId, "alpha")
    assert.equal(record.editionId, newFixture.editionId)
    assert.equal(record.approvedBy, "reviewer")

    assert.deepEqual(await readJson(pointerPath), {
      alpha: newFixture.editionId,
    })
    const referenceRegistry = await readFile(
      path.join(root, "app/data/legal-corpus/reference-registry.generated.ts"),
      "utf8"
    )
    assert.match(
      referenceRegistry,
      new RegExp(`currentEditionId: "${newFixture.editionId}"`)
    )

    const recordPath = path.join(
      root,
      "legal-corpus/promotions",
      `alpha-${newFixture.editionId}.json`
    )
    assert.deepEqual(await readJson(recordPath), record)
  })
})
