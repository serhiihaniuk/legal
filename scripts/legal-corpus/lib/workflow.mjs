import { spawn } from "node:child_process"
import { lstat, mkdir, readFile, realpath, rename, writeFile } from "node:fs/promises"
import path from "node:path"

import { buildObservedFacts } from "./artifacts.mjs"
import { validateConfig, validateDate, validateHttpsUrl } from "./config.mjs"
import { sha256 } from "./extraction.mjs"
import { validateCorpusFacts } from "./validation.mjs"
import { generateRegistry } from "../generate-registry.mjs"

const FORBIDDEN_SCOPE_PREFIXES = [
  "app/data/legal-corpus/",
  "public/legal-sources/",
  "build/",
  ".react-router/",
  ".git/",
]
const FORBIDDEN_SCOPE_FILES = new Set([
  "app/data/legal-library/current-editions.json",
  "app/data/legal-corpus/registry.generated.ts",
  "app/data/legal-corpus/reference-registry.generated.ts",
])
const GLOB_PATTERN = /[*?{}[\]]/u

export async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"))
}

export async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8")
}

export function normalizeRepositoryPath(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error("Approved paths must be non-empty strings")
  }
  if (path.isAbsolute(value) || /^[a-zA-Z]:[\\/]/u.test(value)) {
    throw new Error(`Approved path must be repository-relative: ${value}`)
  }
  if (GLOB_PATTERN.test(value)) {
    throw new Error(`Approved path cannot contain a glob: ${value}`)
  }

  const normalized = path.posix.normalize(value.replaceAll("\\", "/"))
  if (
    normalized === "." ||
    normalized === ".." ||
    normalized.startsWith("../") ||
    normalized.endsWith("/")
  ) {
    throw new Error(`Approved path cannot traverse or name a directory: ${value}`)
  }
  if (
    FORBIDDEN_SCOPE_FILES.has(normalized) ||
    FORBIDDEN_SCOPE_PREFIXES.some((prefix) => normalized.startsWith(prefix))
  ) {
    throw new Error(`Approved path is generated, internal, or promotion-owned: ${normalized}`)
  }
  return normalized
}

async function assertNoSymlink(projectRoot, repositoryPath) {
  const root = await realpath(projectRoot)
  const segments = repositoryPath.split("/")
  let cursor = root

  for (const segment of segments) {
    cursor = path.join(cursor, segment)
    try {
      const info = await lstat(cursor)
      if (info.isSymbolicLink()) {
        throw new Error(`Approved path crosses a symlink: ${repositoryPath}`)
      }
      if (info.isDirectory() && segment === segments.at(-1)) {
        throw new Error(`Approved path must name a file: ${repositoryPath}`)
      }
    } catch (error) {
      if (error?.code === "ENOENT") break
      throw error
    }
  }
}

export async function validateApprovedWriteScope(paths, projectRoot) {
  if (!Array.isArray(paths) || paths.length === 0) {
    throw new Error("approvedWriteScope must contain exact editorial file paths")
  }
  const normalized = [...new Set(paths.map(normalizeRepositoryPath))]
  for (const repositoryPath of normalized) {
    await assertNoSymlink(projectRoot, repositoryPath)
  }
  return normalized
}

export function diffProvisionLists(oldProvisions, newProvisions) {
  const oldById = new Map(oldProvisions.map((item) => [item.id, item]))
  const newById = new Map(newProvisions.map((item) => [item.id, item]))
  const added = []
  const changed = []
  const removed = []
  const unchanged = []

  for (const [id, current] of newById) {
    const previous = oldById.get(id)
    if (!previous) {
      added.push(id)
      continue
    }
    const structuralChange =
      previous.locator !== current.locator ||
      previous.status !== current.status ||
      previous.parentId !== current.parentId ||
      JSON.stringify(previous.childIds) !== JSON.stringify(current.childIds)
    if (
      previous.sourceTextHash !== current.sourceTextHash ||
      structuralChange
    ) {
      changed.push(id)
    } else {
      unchanged.push(id)
    }
  }
  for (const id of oldById.keys()) {
    if (!newById.has(id)) removed.push(id)
  }

  const sort = (items) => items.sort((left, right) => left.localeCompare(right))
  return {
    added: sort(added),
    changed: sort(changed),
    removed: sort(removed),
    unchanged: sort(unchanged),
  }
}

export async function runCapture(projectRoot, command, args = []) {
  return await new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
    })
    let stdout = ""
    let stderr = ""
    child.stdout.on("data", (chunk) => { stdout += chunk })
    child.stderr.on("data", (chunk) => { stderr += chunk })
    child.once("error", reject)
    child.once("exit", (code) => {
      if (code === 0) resolve(stdout.trim())
      else reject(new Error(`${command} exited with code ${code}: ${stderr.trim()}`))
    })
  })
}

export async function runNode(projectRoot, script, args = []) {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], {
      cwd: projectRoot,
      stdio: "inherit",
    })
    child.once("error", reject)
    child.once("exit", (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${script} exited with code ${code}`))
    })
  })
}

export function makeLegalStatusEvidence(manifest) {
  const sourceEvidence = manifest.legalStatusEvidence ?? {}
  if (validateLegalStatusEvidence(sourceEvidence).length === 0) {
    // A reviewed/generated packet is authoritative input for the next work
    // order. Do not erase its structured findings while preparing it.
    return structuredClone(sourceEvidence)
  }

  const unresolved = new Set(sourceEvidence.unresolved ?? [])
  unresolved.add("amendmentsCheckedThrough")
  unresolved.add("entryIntoForce")
  unresolved.add("transitionalRules")
  return {
    status: sourceEvidence.status ?? manifest.eli?.status ?? null,
    inForce: sourceEvidence.inForce ?? manifest.eli?.inForce ?? null,
    legalStatusDate:
      sourceEvidence.legalStatusDate ?? manifest.eli?.legalStatusDate ?? null,
    legalStateDate: sourceEvidence.legalStateDate ?? manifest.legalStateDate ?? null,
    consolidatedTextIdentifier:
      sourceEvidence.consolidatedTextIdentifier ?? manifest.eli?.identifier ?? null,
    checkedAt: sourceEvidence.checkedAt ?? manifest.checkedAt,
    sourceUrls:
      sourceEvidence.sourceUrls ??
      (sourceEvidence.sourceUrl ? [sourceEvidence.sourceUrl] : [manifest.officialPageUrl]),
    sourceUrl: sourceEvidence.sourceUrl ?? manifest.officialPageUrl,
    amendmentsCheckedThrough: null,
    entryIntoForce: [],
    transitionalRules: [],
    unresolved: [...unresolved].sort(),
  }
}

export function generatedEditionPaths(editionId) {
  return [
    `app/data/legal-corpus/${editionId}/articles.json`,
    `app/data/legal-corpus/${editionId}/diagnostics.json`,
    `app/data/legal-corpus/${editionId}/edition-diff.json`,
    `app/data/legal-corpus/${editionId}/manifest.json`,
    `app/data/legal-corpus/${editionId}/metadata.json`,
    `app/data/legal-corpus/${editionId}/pages.json`,
    `app/data/legal-corpus/${editionId}/provisions.json`,
    `app/data/legal-corpus/${editionId}/structure.json`,
    `public/legal-sources/${editionId}/manifest.json`,
    `public/legal-sources/${editionId}/source.pdf`,
  ]
}

function fillTemplate(template, values) {
  let output = template
  for (const [key, value] of Object.entries(values)) {
    output = output.replaceAll(`{{${key}}}`, String(value))
  }
  return output
}

export async function prepareWorkOrder({
  projectRoot,
  mode,
  configPath,
  oldEditionId,
  approvedWriteScope,
  outputBase,
  forceRebuild = false,
  dryRun = false,
}) {
  if (mode !== "add" && mode !== "update") {
    throw new Error("prepare mode must be add or update")
  }
  if (mode === "update" && !oldEditionId) {
    throw new Error("update mode requires --old-edition")
  }
  const absoluteConfig = path.resolve(projectRoot, configPath)
  const config = await readJson(absoluteConfig)

  if (mode === "update") {
    // Standalone `corpus:diff` already rejects mismatched documentId (workflow.mjs
    // commandDiff); prepare must fail the same way, and before the expensive build
    // below (and before the scope/git checks that follow), or `--old-edition`
    // pointed at the wrong document silently produces a mass add/remove diff
    // instead of stopping on the identity mismatch.
    const oldManifest = await readJson(
      path.join(projectRoot, "app/data/legal-corpus", oldEditionId, "manifest.json")
    )
    if (oldManifest.documentId !== config.documentId) {
      throw new Error(
        `--old-edition ${oldEditionId} belongs to document ${oldManifest.documentId}, but ${configPath} configures document ${config.documentId}. Update preparation cannot diff editions from different documents.`
      )
    }
  }

  const editionDirectory = path.join(
    projectRoot,
    "app/data/legal-corpus",
    config.editionId
  )
  const base =
    outputBase ??
    path.join(
      projectRoot,
      "legal-corpus/work-orders",
      `${config.documentId}-${config.editionId}`
    )
  const workOrderPath = `${base}.json`
  const promptPath = `${base}.md`
  const editionDiffPath = path.join(editionDirectory, "edition-diff.json")

  if (dryRun) {
    // A real prepare's diff summary requires the new edition's actually
    // extracted provisions, which only exist after a build -- and building
    // writes committed artifacts, which a dry run must not do. So the dry
    // run reports exactly what would be built and written (paths, mode,
    // identities) without invoking build-document.mjs or writing anything.
    return {
      dryRun: true,
      mode,
      documentId: config.documentId,
      oldEditionId: mode === "update" ? oldEditionId : null,
      newEditionId: config.editionId,
      wouldBuild: {
        configPath: path.relative(projectRoot, absoluteConfig).replaceAll("\\", "/"),
        forceRebuild,
        artifactPaths: generatedEditionPaths(config.editionId),
      },
      wouldWrite: {
        workOrderPath: path.relative(projectRoot, workOrderPath).replaceAll("\\", "/"),
        promptPath: path.relative(projectRoot, promptPath).replaceAll("\\", "/"),
        editionDiffPath: path.relative(projectRoot, editionDiffPath).replaceAll("\\", "/"),
      },
      note: "Dry run: nothing was built or written. A provision-level diff summary requires an actual build; rerun without --dry-run.",
    }
  }

  const scope = await validateApprovedWriteScope(approvedWriteScope, projectRoot)
  const baseCommit = await runCapture(projectRoot, "git", ["rev-parse", "HEAD"])

  await runNode(projectRoot, "scripts/legal-corpus/build-document.mjs", [
    configPath,
    ...(forceRebuild ? ["--force-rebuild"] : []),
  ])
  const [manifest, diagnostics, provisions] = await Promise.all([
    readJson(path.join(editionDirectory, "manifest.json")),
    readJson(path.join(editionDirectory, "diagnostics.json")),
    readJson(path.join(editionDirectory, "provisions.json")),
  ])
  if (diagnostics.fatal?.length) {
    throw new Error("Cannot prepare a work order with fatal corpus diagnostics")
  }

  let editionDiff = {
    documentId: config.documentId,
    oldEditionId: null,
    newEditionId: config.editionId,
    provisions: {
      added: provisions.map(({ id }) => id).sort(),
      changed: [],
      removed: [],
      unchanged: [],
    },
    reviewDependants: [],
  }
  if (mode === "update") {
    const oldProvisions = await readJson(
      path.join(
        projectRoot,
        "app/data/legal-corpus",
        oldEditionId,
        "provisions.json"
      )
    )
    editionDiff = {
      ...editionDiff,
      oldEditionId,
      provisions: diffProvisionLists(oldProvisions, provisions),
    }
  }
  await writeJson(editionDiffPath, editionDiff)

  const legalStatusEvidence = makeLegalStatusEvidence(manifest)
  const workOrder = {
    schemaVersion: 1,
    baseCommit,
    mode,
    documentId: config.documentId,
    oldEditionId: mode === "update" ? oldEditionId : null,
    newEditionId: config.editionId,
    legalStateDate: config.legalStateDate,
    checkedAt: config.checkedAt,
    source: manifest.source,
    configPath: path.relative(projectRoot, absoluteConfig).replaceAll("\\", "/"),
    artifacts: {
      manifest: `app/data/legal-corpus/${config.editionId}/manifest.json`,
      provisions: `app/data/legal-corpus/${config.editionId}/provisions.json`,
      structure: `app/data/legal-corpus/${config.editionId}/structure.json`,
      diagnostics: `app/data/legal-corpus/${config.editionId}/diagnostics.json`,
      editionDiff: `app/data/legal-corpus/${config.editionId}/edition-diff.json`,
    },
    legalStatusEvidence,
    approvedWriteScope: scope,
    generatedPaths: generatedEditionPaths(config.editionId),
    review: {
      completedAt: null,
      status: "HOLD",
      unresolved: [...legalStatusEvidence.unresolved],
    },
    validation: { passed: false, checkedAt: null },
    recommendation: "HOLD",
  }
  await writeJson(workOrderPath, workOrder)

  const template = await readFile(
    path.join(
      projectRoot,
      "legal-corpus/prompts/add-or-update-document.md"
    ),
    "utf8"
  )
  const prompt = fillTemplate(template, {
    MODE: mode,
    WORK_ORDER_PATH: path.relative(projectRoot, workOrderPath).replaceAll("\\", "/"),
    DOCUMENT_ID: workOrder.documentId,
    OLD_EDITION_ID_OR_NONE: workOrder.oldEditionId ?? "none",
    NEW_EDITION_ID: workOrder.newEditionId,
    LEGAL_STATE_DATE: workOrder.legalStateDate,
    CHECKED_AT: workOrder.checkedAt,
    LEGAL_STATUS_EVIDENCE_PATH: path.relative(projectRoot, workOrderPath).replaceAll("\\", "/"),
    SOURCE_PROVIDER: manifest.source.provider,
    OFFICIAL_PAGE_URL: manifest.source.officialPageUrl,
    METADATA_URL: manifest.source.metadataUrl,
    PDF_URL: manifest.source.pdfUrl,
    CONFIG_PATH: workOrder.configPath,
    NEW_EDITION_MANIFEST_PATH: workOrder.artifacts.manifest,
    PROVISIONS_PATH: workOrder.artifacts.provisions,
    STRUCTURE_PATH: workOrder.artifacts.structure,
    DIAGNOSTICS_PATH: workOrder.artifacts.diagnostics,
    CHANGED_PROVISIONS_PATH_OR_NONE: workOrder.artifacts.editionDiff,
    APPROVED_WRITE_SCOPE: scope.join("\n"),
    PROVISION_ID: "<generated provision ID>",
  })
  await mkdir(path.dirname(promptPath), { recursive: true })
  await writeFile(promptPath, prompt, "utf8")
  return { workOrder, workOrderPath, promptPath, editionDiffPath }
}

export function validateChangedFileSet(changedPaths, allowedPaths) {
  const canonical = (item) =>
    path.posix.normalize(String(item).replaceAll("\\", "/"))
  const allowed = new Set(allowedPaths.map(canonical))
  return changedPaths
    .map(canonical)
    .filter((item) => item && !allowed.has(item))
    .sort((left, right) => left.localeCompare(right))
}

/**
 * Validate work-order legal-status evidence to the same bar as config.mjs's
 * schema-v2 evidence: `checkedAt`, `amendmentsCheckedThrough`, and the
 * optional legal dates go through the shared real-calendar-date check
 * (`"yesterday"` and `"2026-99-99"` both fail), and source URLs go through
 * the shared HTTPS check. Self-attested work-order strings are otherwise as
 * easy to tamper with as the fields config.mjs already hardens.
 * @param {Record<string, unknown> | null | undefined} evidence
 * @returns {string[]}
 */
export function validateLegalStatusEvidence(evidence) {
  /** @type {Array<Record<string, unknown>>} */
  const diagnostics = []
  const errors = []
  for (const field of ["status", "inForce"]) {
    if (typeof evidence?.[field] !== "string" || !evidence[field].trim()) {
      errors.push(`legalStatusEvidence.${field} is required`)
    }
  }
  validateDate(evidence?.checkedAt, "legalStatusEvidence.checkedAt", diagnostics)
  validateDate(
    evidence?.amendmentsCheckedThrough,
    "legalStatusEvidence.amendmentsCheckedThrough",
    diagnostics
  )
  if (evidence?.legalStateDate !== undefined) {
    validateDate(evidence.legalStateDate, "legalStatusEvidence.legalStateDate", diagnostics)
  }
  if (evidence?.legalStatusDate !== undefined && evidence.legalStatusDate !== null) {
    validateDate(evidence.legalStatusDate, "legalStatusEvidence.legalStatusDate", diagnostics)
  }
  if (typeof evidence?.consolidatedTextIdentifier !== "string" || !evidence.consolidatedTextIdentifier.trim()) {
    errors.push("legalStatusEvidence.consolidatedTextIdentifier is required")
  }

  const sourceUrls = evidence?.sourceUrls ?? (evidence?.sourceUrl ? [evidence.sourceUrl] : [])
  if (!Array.isArray(sourceUrls) || sourceUrls.length === 0) {
    errors.push("legalStatusEvidence.sourceUrls requires an explicit official URL")
  } else {
    sourceUrls.forEach((value, index) =>
      validateHttpsUrl(value, `legalStatusEvidence.sourceUrls[${index}]`, diagnostics)
    )
  }
  errors.push(...diagnostics.map((entry) => String(entry.message)))

  for (const field of ["entryIntoForce", "transitionalRules"]) {
    const entries = evidence?.[field]
    if (!Array.isArray(entries) || entries.length === 0) {
      errors.push(`legalStatusEvidence.${field} requires an explicit result`)
      continue
    }
    if (
      entries.some(
        (entry) =>
          !entry ||
          typeof entry !== "object" ||
          typeof entry.locator !== "string" ||
          !entry.locator.trim() ||
          typeof entry.result !== "string" ||
          !entry.result.trim()
      )
    ) {
      errors.push(
        `legalStatusEvidence.${field} entries require locator and result`
      )
    }
  }
  if (!Array.isArray(evidence?.unresolved) || evidence.unresolved.length > 0) {
    errors.push("legalStatusEvidence.unresolved must be an empty array")
  }
  return errors
}

export async function validateWorkOrder({ projectRoot, workOrderPath }) {
  const workOrder = await readJson(path.resolve(projectRoot, workOrderPath))
  const errors = []
  let scope = []
  try {
    scope = await validateApprovedWriteScope(
      workOrder.approvedWriteScope,
      projectRoot
    )
  } catch (error) {
    errors.push(error.message)
  }

  const [manifest, diagnostics] = await Promise.all([
    readJson(path.join(projectRoot, workOrder.artifacts.manifest)),
    readJson(path.join(projectRoot, workOrder.artifacts.diagnostics)),
  ])
  if (
    manifest.documentId !== workOrder.documentId ||
    manifest.editionId !== workOrder.newEditionId
  ) {
    errors.push("Work order identity does not match generated manifest")
  }
  if (diagnostics.fatal?.length) {
    errors.push("Corpus diagnostics contain fatal entries")
  }
  errors.push(...validateLegalStatusEvidence(workOrder.legalStatusEvidence))
  if (!workOrder.review?.completedAt) {
    errors.push("Editorial review completedAt is required")
  }
  if (workOrder.review?.unresolved?.length) {
    errors.push("Editorial review still contains unresolved issues")
  }
  if (workOrder.recommendation !== "READY_FOR_EXPLICIT_PROMOTION") {
    errors.push("Work order is not READY_FOR_EXPLICIT_PROMOTION")
  }

  return {
    passed: errors.length === 0,
    checkedAt: new Date().toISOString(),
    errors,
    approvedWriteScope: scope,
    workOrder,
  }
}

/**
 * @param {unknown} error
 * @returns {string}
 */
function errorMessage(error) {
  return error instanceof Error ? error.message : String(error)
}

/**
 * Re-run corpus fact validation against the edition's own artifacts on disk,
 * instead of trusting the work order's record of a validation that ran
 * earlier against a since-possibly-edited edition directory. A hand-edited
 * `provisions.json` or `structure.json` (or a config file changed after
 * `prepare`) fails here even though the work order's stored diagnostics are
 * still clean.
 * @param {{ projectRoot: string, workOrder: Record<string, any> }} options
 * @returns {Promise<string[]>}
 */
export async function verifyPromotionArtifacts({ projectRoot, workOrder }) {
  const errors = []
  let config
  try {
    config = validateConfig(await readJson(path.join(projectRoot, workOrder.configPath)))
  } catch (error) {
    errors.push(`Edition config re-validation failed: ${errorMessage(error)}`)
    return errors
  }

  const editionDirectory = path.join(
    projectRoot,
    "app/data/legal-corpus",
    workOrder.newEditionId
  )
  const publicDirectory = path.join(
    projectRoot,
    "public/legal-sources",
    workOrder.newEditionId
  )
  let metadata
  let pages
  let provisions
  let structure
  let pdfBytes
  try {
    ;[metadata, pages, provisions, structure, pdfBytes] = await Promise.all([
      readJson(path.join(editionDirectory, "metadata.json")),
      readJson(path.join(editionDirectory, "pages.json")),
      readJson(path.join(editionDirectory, "provisions.json")),
      readJson(path.join(editionDirectory, "structure.json")),
      readFile(path.join(publicDirectory, "source.pdf")),
    ])
  } catch (error) {
    errors.push(`Cannot read edition artifacts on disk for re-verification: ${errorMessage(error)}`)
    return errors
  }

  const pdfSha256 = sha256(pdfBytes)
  const observed = buildObservedFacts(pages, provisions)
  const result = validateCorpusFacts({
    config,
    metadata,
    pdfBytes,
    pdfSha256,
    pages,
    provisions,
    structure,
    observed,
  })
  for (const entry of result.fatal) {
    const location = entry.path ? ` (${entry.path})` : ""
    errors.push(`Corpus fact re-verification failed at promotion: [${entry.code}] ${entry.message}${location}`)
  }
  return errors
}

/**
 * Run the editorial validator (`scripts/legal-editorial/validate.mjs`) in
 * `--incomplete` mode as a child process, mechanically connecting promotion
 * to editorial validation instead of trusting a self-attested work-order
 * review state. `--incomplete` still treats missing/non-reviewed coverage as
 * warnings; only structural errors (unknown provisions, bad IDs, duplicate
 * entries, invalid status vocabulary, and similar) fail promotion here.
 * @param {string} projectRoot
 * @returns {Promise<string[]>}
 */
export async function runEditorialValidator(projectRoot) {
  try {
    await runCapture(projectRoot, process.execPath, [
      "scripts/legal-editorial/validate.mjs",
      "--incomplete",
    ])
    return []
  } catch (error) {
    return [`Editorial validation failed: ${errorMessage(error)}`]
  }
}

/**
 * @param {string} filePath
 * @param {unknown} value
 * @returns {Promise<void>}
 */
export async function writeJsonAtomically(filePath, value) {
  const temporary = `${filePath}.tmp-${process.pid}`
  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, "utf8")
  await rename(temporary, filePath)
}

/**
 * Compute promotion's --dry-run preview: whether promotion would proceed,
 * and exactly which durable files a real promotion would touch (pointer,
 * registries, promotion record), without performing any of those writes.
 * Pure given already-gathered validation/pointer state, so the CLI's I/O
 * (reading the work order, running scope/artifact/editorial validation,
 * reading the pointer file) stays in workflow.mjs while this shape is
 * testable without any of it.
 * @param {{
 *   workOrder: Record<string, any>,
 *   approval: string,
 *   validation: { passed: boolean, errors: string[] },
 *   currentPointers: Record<string, string>,
 * }} options
 */
export function previewPromotion({ workOrder, approval, validation, currentPointers }) {
  const expectedApproval = `${workOrder.documentId}@${workOrder.newEditionId}`
  const approvalMatches = approval === expectedApproval
  return {
    dryRun: true,
    wouldPromote: validation.passed && approvalMatches,
    documentId: workOrder.documentId,
    newEditionId: workOrder.newEditionId,
    expectedApproval,
    approvalMatches,
    validation,
    pointerTransition: {
      documentId: workOrder.documentId,
      from: currentPointers[workOrder.documentId] ?? null,
      to: workOrder.newEditionId,
    },
    wouldWrite: {
      pointerPath: "app/data/legal-library/current-editions.json",
      registryPath: "app/data/legal-corpus/registry.generated.ts",
      referenceRegistryPath: "app/data/legal-corpus/reference-registry.generated.ts",
      promotionRecordPath: `legal-corpus/promotions/${workOrder.documentId}-${workOrder.newEditionId}.json`,
    },
  }
}

/**
 * Promote a validated, approved work order: write the current-editions
 * pointer, regenerate the application registries, and record the approval.
 *
 * Ordering and crash recovery: registries are (re)generated first, from the
 * *pending* pointer state held only in memory, and written atomically before
 * the pointer file itself is touched. If the process is killed before the
 * pointer write below, `current-editions.json` still names exactly the
 * edition it named before promotion started, so nothing durable on disk
 * claims a promotion that never finished; re-running `corpus:promote` simply
 * redoes the idempotent registry write and completes the pointer swap. The
 * previous pointer-first ordering could instead leave `current-editions.json`
 * naming an edition whose registries were never regenerated to match it. If
 * the pointer write itself fails (as opposed to the process dying), the
 * registries are rolled back to the original pointer state so a thrown error
 * never leaves live registries describing an edition that was never actually
 * promoted.
 * @param {{
 *   projectRoot: string,
 *   workOrder: Record<string, any>,
 *   workOrderPath: string,
 *   approvedBy: string,
 * }} options
 * @returns {Promise<Record<string, unknown>>}
 */
export async function promoteEdition({ projectRoot, workOrder, workOrderPath, approvedBy }) {
  const pointerPath = path.join(
    projectRoot,
    "app/data/legal-library/current-editions.json"
  )
  const originalPointers = await readJson(pointerPath)
  const promotedPointers = {
    ...originalPointers,
    [workOrder.documentId]: workOrder.newEditionId,
  }

  await generateRegistry({ projectRoot, currentEditions: promotedPointers })
  try {
    await writeJsonAtomically(pointerPath, promotedPointers)
  } catch (error) {
    await generateRegistry({ projectRoot, currentEditions: originalPointers })
    throw error
  }

  const record = {
    schemaVersion: 1,
    documentId: workOrder.documentId,
    editionId: workOrder.newEditionId,
    approvedBy,
    approvedAt: new Date().toISOString(),
    workOrder: workOrderPath.replaceAll("\\", "/"),
    baseCommit: workOrder.baseCommit,
  }
  const recordPath = path.join(
    projectRoot,
    "legal-corpus/promotions",
    `${record.documentId}-${record.editionId}.json`
  )
  await writeJson(recordPath, record)
  return record
}
