#!/usr/bin/env node

import path from "node:path"
import process from "node:process"

import {
  diffProvisionLists,
  prepareWorkOrder,
  promoteEdition,
  readJson,
  runCapture,
  runEditorialValidator,
  validateChangedFileSet,
  validateWorkOrder,
  verifyPromotionArtifacts,
  writeJson,
} from "./lib/workflow.mjs"

function parseArguments(argv) {
  const [command, ...rest] = argv
  const options = { _: [] }
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

function required(options, name) {
  const value = options[name]
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required --${name}`)
  }
  return value
}

function scopeValues(value) {
  if (typeof value !== "string") {
    throw new Error("Missing required --scope path[,path]")
  }
  return value.split(",").map((item) => item.trim()).filter(Boolean)
}

async function changedPaths(projectRoot, baseCommit) {
  const [trackedOutput, untrackedOutput] = await Promise.all([
    runCapture(projectRoot, "git", [
      "diff",
      "--name-only",
      baseCommit,
      "--",
    ]),
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
      result.errors.push(`Changed files outside approved scope: ${extras.join(", ")}`)
    }
    result.changedPaths = changed
  }
  if (options.verifyArtifacts) {
    // Promotion trusts neither the work order's stored diagnostics nor its
    // self-attested review state: it re-verifies corpus facts against the
    // edition artifacts actually on disk and mechanically runs the editorial
    // validator, rather than only checking the work order's own claims.
    result.errors.push(
      ...(await verifyPromotionArtifacts({ projectRoot, workOrder: result.workOrder }))
    )
    result.errors.push(...(await runEditorialValidator(projectRoot)))
  }
  result.passed = result.errors.length === 0
  return result
}

async function commandPrepare(projectRoot, options) {
  const result = await prepareWorkOrder({
    projectRoot,
    mode: required(options, "mode"),
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
  })
  process.stdout.write(
    `${JSON.stringify({
      workOrder: path.relative(projectRoot, result.workOrderPath),
      prompt: path.relative(projectRoot, result.promptPath),
      diff: path.relative(projectRoot, result.editionDiffPath),
      recommendation: result.workOrder.recommendation,
    })}\n`
  )
}

async function commandDiff(projectRoot, options) {
  const oldEditionId = required(options, "old")
  const newEditionId = required(options, "new")
  const oldProvisions = await readJson(
    path.join(projectRoot, "app/data/legal-corpus", oldEditionId, "provisions.json")
  )
  const newProvisions = await readJson(
    path.join(projectRoot, "app/data/legal-corpus", newEditionId, "provisions.json")
  )
  const oldManifest = await readJson(
    path.join(projectRoot, "app/data/legal-corpus", oldEditionId, "manifest.json")
  )
  const newManifest = await readJson(
    path.join(projectRoot, "app/data/legal-corpus", newEditionId, "manifest.json")
  )
  if (oldManifest.documentId !== newManifest.documentId) {
    throw new Error("Edition diff requires two editions of the same document")
  }
  const result = {
    documentId: newManifest.documentId,
    oldEditionId,
    newEditionId,
    provisions: diffProvisionLists(oldProvisions, newProvisions),
    reviewDependants: [],
  }
  if (typeof options.output === "string") {
    await writeJson(path.resolve(projectRoot, options.output), result)
  }
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
}

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

async function commandPromote(projectRoot, options) {
  const workOrderPath = required(options, "work-order")
  const approvedBy = required(options, "approved-by")
  const approval = required(options, "approve")
  const result = await validateWithScope(projectRoot, workOrderPath, {
    verifyArtifacts: true,
  })
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
  })
  process.stdout.write(`${JSON.stringify(record)}\n`)
}

async function main() {
  const projectRoot = process.cwd()
  const { command, options } = parseArguments(process.argv.slice(2))
  switch (command) {
    case "prepare":
      return commandPrepare(projectRoot, options)
    case "diff":
      return commandDiff(projectRoot, options)
    case "validate":
      return commandValidate(projectRoot, options)
    case "promote":
      return commandPromote(projectRoot, options)
    default:
      throw new Error(
        "Usage: workflow.mjs prepare|diff|validate|promote [options]"
      )
  }
}

try {
  await main()
} catch (error) {
  process.stderr.write(`${error?.stack ?? error}\n`)
  process.exitCode = 1
}
