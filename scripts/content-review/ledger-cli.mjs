#!/usr/bin/env node

import process from "node:process"

import {
  DEFAULT_REPOSITORY_ROOT,
  DEFAULT_REVIEW_DIR,
  generateLedgers,
  markReview,
  markReviews,
  validateLedgers,
} from "./ledger.mjs"

/**
 * @typedef {import("./ledger.mjs").ValidationResult} ValidationResult
 * @typedef {import("./ledger.mjs").ReviewStatus} ReviewStatus
 * @typedef {{ _: string[] } & Record<string, string | boolean | string[]>} CliArgs
 */

/**
 * @param {string[]} argv
 * @returns {CliArgs}
 */
function parseArgs(argv) {
  /** @type {CliArgs} */
  const args = { _: [] }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (!value.startsWith("--")) {
      args._.push(value)
      continue
    }
    const key = value.slice(2)
    if (key === "strict" || key === "if-complete" || key === "all") {
      args[key] = true
      continue
    }
    const next = argv[index + 1]
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for ${value}`)
    }
    args[key] = next
    index += 1
  }
  return args
}

/**
 * @param {CliArgs} args
 * @param {string} key
 * @returns {string | undefined}
 */
function stringArg(args, key) {
  const value = args[key]
  return typeof value === "string" ? value : undefined
}

/**
 * @param {CliArgs} args
 * @param {string} key
 * @returns {boolean}
 */
function booleanArg(args, key) {
  return args[key] === true
}

/**
 * @param {CliArgs} args
 * @returns {ReviewStatus}
 */
function statusArg(args) {
  return /** @type {ReviewStatus} */ (stringArg(args, "status") ?? "accepted")
}

/**
 * @param {ValidationResult} result
 */
function printValidation(result) {
  const mode = result.strict ? "strict" : "baseline"
  if (result.ok) {
    console.log(
      `Content review ledger ${mode} validation passed (${result.summary.total} entries)`
    )
    return
  }
  console.error(
    `Content review ledger ${mode} validation failed (${result.issues.length} issue(s))`
  )
  for (const issue of result.issues.slice(0, 50)) {
    const target = issue.path ? ` ${issue.path}` : ""
    console.error(`- ${issue.code}:${target} ${issue.message}`)
  }
  if (result.issues.length > 50) {
    console.error(`... ${result.issues.length - 50} more issue(s)`)
  }
}

const args = parseArgs(process.argv.slice(2))
const command = args._[0]
const repositoryRoot =
  stringArg(args, "repository-root") ?? DEFAULT_REPOSITORY_ROOT
const reviewDir = stringArg(args, "review-dir") ?? DEFAULT_REVIEW_DIR

try {
  if (command === "generate") {
    const result = generateLedgers({ repositoryRoot, reviewDir })
    console.log(
      `Generated content review ledgers at ${reviewDir} (${result.summary.total} entries)`
    )
  } else if (command === "validate") {
    const result = validateLedgers({
      repositoryRoot,
      reviewDir,
      strict: booleanArg(args, "strict"),
      ifComplete: booleanArg(args, "if-complete"),
    })
    printValidation(result)
    if (!result.ok) process.exitCode = 1
  } else if (command === "mark-author" || command === "mark-cross") {
    const entry = markReview({
      repositoryRoot,
      reviewDir,
      lane: stringArg(args, "lane") ?? null,
      id: stringArg(args, "id") ?? null,
      path: stringArg(args, "path") ?? null,
      phase: command === "mark-author" ? "authorReview" : "crossReview",
      reviewer: stringArg(args, "reviewer") ?? "",
      status: statusArg(args),
      blocker: stringArg(args, "blocker") ?? null,
    })
    console.log(`${command} updated ${entry.id}`)
  } else if (
    command === "mark-author-batch" ||
    command === "mark-cross-batch"
  ) {
    const entries = markReviews({
      repositoryRoot,
      reviewDir,
      lane: stringArg(args, "lane") ?? "",
      documentId: stringArg(args, "document-id") ?? null,
      family: stringArg(args, "family") ?? null,
      pathPrefix: stringArg(args, "path-prefix") ?? null,
      all: booleanArg(args, "all"),
      phase: command === "mark-author-batch" ? "authorReview" : "crossReview",
      reviewer: stringArg(args, "reviewer") ?? "",
      status: statusArg(args),
      blocker: stringArg(args, "blocker") ?? null,
    })
    console.log(`${command} updated ${entries.length} entries`)
  } else {
    console.error(
      [
        "Usage:",
        "  node scripts/content-review/ledger-cli.mjs generate",
        "  node scripts/content-review/ledger-cli.mjs validate [--strict|--if-complete]",
        "  node scripts/content-review/ledger-cli.mjs mark-author --id <entry-id> --reviewer <name> [--status accepted|blocked|changes-requested] [--blocker <text>]",
        "  node scripts/content-review/ledger-cli.mjs mark-cross --id <entry-id> --reviewer <name> [--status accepted|blocked|changes-requested] [--blocker <text>]",
        "  node scripts/content-review/ledger-cli.mjs mark-author-batch --lane <lane> (--all|--document-id <id>|--family <family>|--path-prefix <path>) --reviewer <name>",
        "  node scripts/content-review/ledger-cli.mjs mark-cross-batch --lane <lane> (--all|--document-id <id>|--family <family>|--path-prefix <path>) --reviewer <name>",
      ].join("\n")
    )
    process.exitCode = 1
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
}
