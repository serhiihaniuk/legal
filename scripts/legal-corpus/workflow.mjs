#!/usr/bin/env node

import path from "node:path"
import process from "node:process"

import { resolveRepoRoot } from "./lib/repo-root.mjs"
import {
  diffProvisionLists,
  discoverReviewDependants,
  prepareWorkOrder,
  previewPromotion,
  promoteEdition,
  readJson,
  runCapture,
  runEditorialValidator,
  validateChangedFileSet,
  validateWorkOrder,
  verifyPromotionArtifacts,
  writeJson,
} from "./lib/workflow.mjs"
import { auditCitations } from "./lib/reference-scanner.mjs"

/** @typedef {{ _: string[], [key: string]: string | boolean | string[] }} CliOptions */

/**
 * @param {string[]} argv
 * @returns {{ command: string, options: CliOptions }}
 */
function parseArguments(argv) {
  const [command, ...rest] = argv
  /** @type {CliOptions} */
  const options = { _: /** @type {string[]} */ ([]) }
  for (let index = 0; index < rest.length; index += 1) {
    const value = rest[index]
    if (!value.startsWith("--")) {
      options._.push(value)
      continue
    }
    const key = value.slice(2)
    const next = rest[index + 1]
    if (!next || next.startsWith("--")) options[key] = true
    else {
      options[key] = next
      index += 1
    }
  }
  return { command, options }
}

/**
 * @param {CliOptions} options
 * @param {string} name
 * @returns {string}
 */
function required(options, name) {
  const value = options[name]
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required --${name}`)
  }
  return value
}

/**
 * @param {unknown} value
 * @returns {string[]}
 */
function scopeValues(value) {
  if (typeof value !== "string") {
    throw new Error("Missing required --scope path[,path]")
  }
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

/**
 * @param {string} projectRoot
 * @param {string} baseCommit
 * @returns {Promise<string[]>}
 */
async function changedPaths(projectRoot, baseCommit) {
  const [trackedOutput, untrackedOutput] = await Promise.all([
    runCapture(projectRoot, "git", ["diff", "--name-only", baseCommit, "--"]),
    runCapture(projectRoot, "git", [
      "ls-files",
      "--others",
      "--exclude-standard",
    ]),
  ])
  return [
    ...new Set(
      `${trackedOutput}\n${untrackedOutput}`
        .split(/\r?\n/u)
        .map((item) => item.trim())
        .filter(Boolean)
    ),
  ].sort((left, right) => left.localeCompare(right))
}

/**
 * @param {any} workOrder
 * @param {string} workOrderPath
 * @returns {string[]}
 */
function allowedValidationPaths(workOrder, workOrderPath) {
  const promptPath = workOrderPath.replace(/\.json$/u, ".md")
  return [
    ...workOrder.approvedWriteScope,
    ...workOrder.generatedPaths,
    workOrder.configPath,
    workOrderPath.replaceAll("\\", "/"),
    promptPath.replaceAll("\\", "/"),
  ]
}

/**
 * @param {string} projectRoot
 * @param {string} workOrderPath
 * @param {{ verifyArtifacts?: boolean }} [options]
 */
async function validateWithScope(projectRoot, workOrderPath, options = {}) {
  const result = await validateWorkOrder({ projectRoot, workOrderPath })
  const baseCommit = result.workOrder.baseCommit
  if (!baseCommit) {
    result.errors.push("Work order baseCommit is required for scope validation")
  } else {
    const changed = await changedPaths(projectRoot, baseCommit)
    const extras = validateChangedFileSet(
      changed,
      allowedValidationPaths(result.workOrder, workOrderPath)
    )
    if (extras.length > 0) {
      result.errors.push(
        `Changed files outside approved scope: ${extras.join(", ")}`
      )
    }
    result.changedPaths = changed
  }
  if (options.verifyArtifacts) {
    // Promotion trusts neither the work order's stored diagnostics nor its
    // self-attested review state: it re-verifies corpus facts against the
    // edition artifacts actually on disk and mechanically runs the editorial
    // validator, rather than only checking the work order's own claims.
    result.errors.push(
      ...(await verifyPromotionArtifacts({
        projectRoot,
        workOrder: result.workOrder,
      }))
    )
    try {
      const currentEditions = await readJson(
        path.join(projectRoot, "app/data/legal-library/current-editions.json")
      )
      const candidateCurrentEditions = {
        ...currentEditions,
        [result.workOrder.documentId]: result.workOrder.newEditionId,
      }
      result.errors.push(
        ...(await runEditorialValidator(
          projectRoot,
          candidateCurrentEditions,
          result.workOrder.documentId
        ))
      )
    } catch (error) {
      result.errors.push(
        `Cannot validate candidate editorial corpus: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }
  result.passed = result.errors.length === 0
  return result
}

/**
 * @param {string} projectRoot
 * @param {CliOptions} options
 * @returns {Promise<void>}
 */
async function commandPrepare(projectRoot, options) {
  const dryRun = Boolean(options["dry-run"])
  const result = await prepareWorkOrder({
    projectRoot,
    mode: /** @type {"add" | "update"} */ (required(options, "mode")),
    configPath: required(options, "config"),
    oldEditionId:
      typeof options["old-edition"] === "string"
        ? options["old-edition"]
        : undefined,
    approvedWriteScope: scopeValues(options.scope),
    outputBase:
      typeof options.output === "string"
        ? path.resolve(projectRoot, options.output)
        : undefined,
    forceRebuild: Boolean(options["force-rebuild"]),
    dryRun,
  })
  if (dryRun) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
    return
  }
  process.stdout.write(
    `${JSON.stringify({
      workOrder: path.relative(projectRoot, result.workOrderPath),
      prompt: path.relative(projectRoot, result.promptPath),
      diff: path.relative(projectRoot, result.editionDiffPath),
      recommendation: result.workOrder.recommendation,
    })}\n`
  )
}

/**
 * @param {string} projectRoot
 * @param {CliOptions} options
 * @returns {Promise<void>}
 */
async function commandAuditCitations(projectRoot, options) {
  const result = await auditCitations({ projectRoot })
  const output =
    typeof options.output === "string"
      ? path.resolve(projectRoot, options.output)
      : path.join(
          projectRoot,
          "docs/restructure/citation-review/ambiguous-citations.md"
        )
  if (!options["dry-run"]) {
    const { mkdir, writeFile } = await import("node:fs/promises")
    await mkdir(path.dirname(output), { recursive: true })
    await writeFile(output, result.packet, "utf8")
  }
  process.stdout.write(
    `${JSON.stringify(
      {
        ...result.stats,
        output: path.relative(projectRoot, output).replaceAll("\\", "/"),
        dryRun: Boolean(options["dry-run"]),
      },
      null,
      2
    )}\n`
  )
}

/**
 * @param {string} projectRoot
 * @param {CliOptions} options
 * @returns {Promise<void>}
 */
async function commandDiff(projectRoot, options) {
  const oldEditionId = required(options, "old")
  const newEditionId = required(options, "new")
  const oldProvisions = await readJson(
    path.join(
      projectRoot,
      "app/data/legal-corpus",
      oldEditionId,
      "provisions.json"
    )
  )
  const newProvisions = await readJson(
    path.join(
      projectRoot,
      "app/data/legal-corpus",
      newEditionId,
      "provisions.json"
    )
  )
  const oldManifest = await readJson(
    path.join(
      projectRoot,
      "app/data/legal-corpus",
      oldEditionId,
      "manifest.json"
    )
  )
  const newManifest = await readJson(
    path.join(
      projectRoot,
      "app/data/legal-corpus",
      newEditionId,
      "manifest.json"
    )
  )
  if (oldManifest.documentId !== newManifest.documentId) {
    throw new Error("Edition diff requires two editions of the same document")
  }
  const provisions = diffProvisionLists(oldProvisions, newProvisions)
  const result = {
    documentId: newManifest.documentId,
    oldEditionId,
    newEditionId,
    provisions,
    reviewDependants: await discoverReviewDependants({
      projectRoot,
      provisionIds: [...provisions.changed, ...provisions.removed],
    }),
  }
  if (typeof options.output === "string") {
    await writeJson(path.resolve(projectRoot, options.output), result)
  }
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
}

/**
 * @param {string} projectRoot
 * @param {CliOptions} options
 * @returns {Promise<void>}
 */
async function commandValidate(projectRoot, options) {
  const workOrderPath = required(options, "work-order")
  const result = await validateWithScope(projectRoot, workOrderPath)
  const absolute = path.resolve(projectRoot, workOrderPath)
  const workOrder = await readJson(absolute)
  workOrder.validation = {
    passed: result.passed,
    checkedAt: result.checkedAt,
    errors: result.errors,
    changedPaths: result.changedPaths ?? [],
  }
  await writeJson(absolute, workOrder)
  process.stdout.write(`${JSON.stringify(workOrder.validation, null, 2)}\n`)
  if (!result.passed) process.exitCode = 1
}

/**
 * @param {string} projectRoot
 * @param {CliOptions} options
 * @returns {Promise<void>}
 */
async function commandPromote(projectRoot, options) {
  const workOrderPath = required(options, "work-order")
  const approvedBy = required(options, "approved-by")
  const approval = required(options, "approve")
  const dryRun = Boolean(options["dry-run"])
  const result = await validateWithScope(projectRoot, workOrderPath, {
    verifyArtifacts: true,
  })

  if (dryRun) {
    const pointerPath = path.join(
      projectRoot,
      "app/data/legal-library/current-editions.json"
    )
    const currentPointers = await readJson(pointerPath).catch(() => ({}))
    const preview = previewPromotion({
      workOrder: result.workOrder,
      approval,
      validation: { passed: result.passed, errors: result.errors },
      currentPointers,
    })
    process.stdout.write(`${JSON.stringify(preview, null, 2)}\n`)
    if (!preview.wouldPromote) process.exitCode = 1
    return
  }

  if (!result.passed) {
    throw new Error(`Promotion blocked: ${result.errors.join("; ")}`)
  }
  const expectedApproval = `${result.workOrder.documentId}@${result.workOrder.newEditionId}`
  if (approval !== expectedApproval) {
    throw new Error(`--approve must exactly equal ${expectedApproval}`)
  }

  const record = await promoteEdition({
    projectRoot,
    workOrder: result.workOrder,
    workOrderPath,
    approvedBy,
    verifyArtifacts: true,
  })
  process.stdout.write(`${JSON.stringify(record)}\n`)
}

async function main() {
  const projectRoot = resolveRepoRoot(import.meta.url)
  const { command, options } = parseArguments(process.argv.slice(2))
  switch (command) {
    case "prepare":
      return commandPrepare(projectRoot, options)
    case "diff":
      return commandDiff(projectRoot, options)
    case "audit-citations":
      return commandAuditCitations(projectRoot, options)
    case "validate":
      return commandValidate(projectRoot, options)
    case "promote":
      return commandPromote(projectRoot, options)
    default:
      throw new Error(
        "Usage: workflow.mjs prepare|diff|validate|promote|audit-citations [options]"
      )
  }
}

try {
  await main()
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.stack : error}\n`)
  process.exitCode = 1
}
