import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const DEFAULT_PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..")

/**
 * The scanner intentionally handles the small, stable authoring grammar used
 * by legal-text.ts. It does not execute application TypeScript.
 *
 * Supported:
 *   const law = createLegalTextAuthor("document-id")
 *   const learningLaw = createLegalLearningTextAuthor("document-id")
 *   law.article("N", ...)
 *   law.articleRange("A", "B", ...)
 *
 * `articleRange` records the two endpoint provisions, matching the runtime
 * citation target shape; it intentionally does not expand every article
 * between the endpoints.
 *
 * Both `createLegalTextAuthor` and the learning-family alias
 * `createLegalLearningTextAuthor` are resolved from same-file declarations.
 * Deliberately unsupported patterns are dynamic author factories, imported
 * author aliases, non-literal article arguments, and calls split through an
 * intermediate variable. They are reported in `unsupportedPatterns` rather
 * than guessed. This keeps the graph deterministic and fail-visible.
 */

const EDITORIAL_PART_PATTERN = /^part-[^/]+\.ts$/u
const AUTHOR_PATTERN = /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*createLegal(?:Learning)?TextAuthor\(\s*(["'])([^"']+)\2\s*\)/gu
const CALL_PATTERN = /([A-Za-z_$][\w$]*)\s*\.\s*(articleRange|article)\s*\(\s*(["'])([^"']+)\3(?:\s*,\s*(["'])([^"']+)\5)?/gu
const UNSUPPORTED_AUTHOR_PATTERN = /createLegal(?:Learning)?TextAuthor\(\s*([^"')\s][^)]*)\)/gu
const UNSUPPORTED_CALL_PATTERN = /([A-Za-z_$][\w$]*)\s*\.\s*(articleRange|article)\s*\(\s*([^"'\s][^,)]*)/gu

/** @typedef {{ file: string, line: number }} ReferenceLocation */
/** @typedef {{ provisionId: string, documentId: string, articleNumber: string, file: string, line: number, method: "article" | "articleRange", family: string }} ScannedCitation */

/** @param {string} quote @param {string} value @returns {string} */
function literalValue(quote, value) {
  return quote === '"' ? JSON.parse(`"${value}"`) : value.replaceAll("\\'", "'").replaceAll("\\\\", "\\")
}

/** @param {string} source @param {number} index @returns {number} */
function lineAt(source, index) {
  return source.slice(0, index).split(/\r?\n/u).length
}

/** @param {string} file @returns {string} */
function familyForFile(file) {
  if (file === "app/data/legal-map/data.ts") return "legal-map/data.ts"
  if (/^app\/data\/legal-map\/node-guides-[^/]+\.ts$/u.test(file)) return "legal-map/node-guides-*.ts"
  if (file.startsWith("app/data/legal-library/editorial/")) return "editorial"
  if (file.startsWith("app/data/legal-library/learning/")) return "learning"
  if (file === "app/data/case-guides/routes.ts") return "case-guides/routes.ts"
  // Temporary fixture aliases retained for existing scanner unit tests.
  if (file === "app/data/legal-data.ts") return "legal-data.ts"
  if (/^app\/data\/legal-node-guides-[^/]+\.ts$/u.test(file)) return "legal-node-guides-*.ts"
  if (file === "app/data/case-guide-routes.ts") return "case-guide-routes.ts"
  return "other"
}

/** @param {string} file @returns {boolean} */
function isPriorityFile(file) {
  return file === "app/data/legal-map/data.ts"
    || /^app\/data\/legal-map\/node-guides-[^/]+\.ts$/u.test(file)
    // Temporary fixture aliases retained for existing scanner unit tests.
    || file === "app/data/legal-data.ts"
    || /^app\/data\/legal-node-guides-[^/]+\.ts$/u.test(file)
}

/** @param {string} directory @returns {Promise<string[]>} */
async function walk(directory) {
  try {
    const entries = (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))
    const files = []
    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name)
      if (entry.isDirectory()) files.push(...await walk(entryPath))
      else files.push(entryPath)
    }
    return files
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") return []
    throw error
  }
}

/**
 * Return the exact authored app/data files covered by Phase 1c.
 * @param {string} projectRoot
 * @returns {Promise<string[]>}
 */
export async function listReferenceSourceFiles(projectRoot) {
  const dataRoot = path.join(projectRoot, "app/data")
  const editorialFiles = (await walk(path.join(dataRoot, "legal-library/editorial")))
    .filter((/** @type {string} */ file) => EDITORIAL_PART_PATTERN.test(path.basename(file)))
  const learningFiles = (await walk(path.join(dataRoot, "legal-library/learning")))
    .filter((/** @type {string} */ file) => path.extname(file) === ".ts" && path.dirname(file) === path.join(dataRoot, "legal-library/learning"))
  const fixedRelative = [
    "case-guides/routes.ts",
    "legal-map/data.ts",
  ]
  const legacyFixedRelative = [
    "case-guide-routes.ts",
    "legal-data.ts",
  ]
  const legalMapRoot = path.join(dataRoot, "legal-map")
  const nodeGuideFiles = (await walk(legalMapRoot)).filter((/** @type {string} */ file) => /^node-guides-[^/]+\.ts$/u.test(path.basename(file)) && path.dirname(file) === legalMapRoot)
  // Temporary fixture aliases retained for existing scanner unit tests.
  const legacyNodeGuideFiles = (await walk(dataRoot)).filter((/** @type {string} */ file) => /^legal-node-guides-[^/]+\.ts$/u.test(path.basename(file)) && path.dirname(file) === dataRoot)
  const fixedFiles = [
    ...fixedRelative.map((relative) => path.join(dataRoot, relative)),
    ...nodeGuideFiles,
    ...legacyFixedRelative.map((relative) => path.join(dataRoot, relative)),
    ...legacyNodeGuideFiles,
  ]
  const all = [...editorialFiles, ...learningFiles, ...fixedFiles]
  const existing = []
  for (const file of all) {
    try {
      await readFile(file)
      existing.push(file)
    } catch (error) {
      if (!(error && typeof error === "object" && "code" in error && error.code === "ENOENT")) throw error
    }
  }
  return [...new Set(existing)].sort((left, right) => left.localeCompare(right))
}

/**
 * Scan typed article and article-range calls without importing app/data.
 * @param {{ projectRoot?: string, files?: string[] }} [options]
 * @returns {Promise<{ references: Record<string, ReferenceLocation[]>, citations: ScannedCitation[], files: string[], stats: { filesScanned: number, citationCalls: number, provisionReferences: number, provisionsCovered: number }, unsupportedPatterns: Array<{ file: string, line: number, pattern: string }> }>}
 */
export async function scanTypedReferences({ projectRoot = DEFAULT_PROJECT_ROOT, files } = {}) {
  const root = path.resolve(projectRoot)
  const absoluteFiles = files
    ? files.map((file) => path.isAbsolute(file) ? file : path.join(root, file))
    : await listReferenceSourceFiles(root)
  /** @param {string} file @returns {string} */
  const relative = (file) => path.relative(root, file).replaceAll(path.sep, "/")
  /** @type {Record<string, ReferenceLocation[]>} */
  const references = {}
  /** @type {ScannedCitation[]} */
  const citations = []
  /** @type {Array<{ file: string, line: number, pattern: string }>} */
  const unsupportedPatterns = []

  for (const absoluteFile of [...new Set(absoluteFiles)].sort((a, b) => a.localeCompare(b))) {
    const file = relative(absoluteFile)
    const source = await readFile(absoluteFile, "utf8")
    /** @type {Map<string, string>} */
    const authors = new Map()
    for (const match of source.matchAll(AUTHOR_PATTERN)) authors.set(match[1], literalValue(match[2], match[3]))

    for (const match of source.matchAll(UNSUPPORTED_AUTHOR_PATTERN)) {
      if (!/^(["']).*\1$/u.test(match[1].trim())) unsupportedPatterns.push({ file, line: lineAt(source, match.index ?? 0), pattern: "dynamic createLegalTextAuthor argument" })
    }
    for (const match of source.matchAll(UNSUPPORTED_CALL_PATTERN)) {
      if (!authors.has(match[1])) unsupportedPatterns.push({ file, line: lineAt(source, match.index ?? 0), pattern: "author alias or non-literal citation call" })
    }

    for (const match of source.matchAll(CALL_PATTERN)) {
      const author = match[1]
      const documentId = authors.get(author)
      if (!documentId) {
        unsupportedPatterns.push({ file, line: lineAt(source, match.index ?? 0), pattern: "citation author has no same-file createLegalTextAuthor declaration" })
        continue
      }
      const method = /** @type {"article" | "articleRange"} */ (match[2])
      const first = literalValue(match[3], match[4])
      const second = match[6] ? literalValue(match[5], match[6]) : undefined
      const line = lineAt(source, match.index ?? 0)
      const numbers = method === "articleRange" ? [first, second] : [first]
      if (method === "articleRange" && second === undefined) {
        unsupportedPatterns.push({ file, line, pattern: "articleRange without two literal article numbers" })
        continue
      }
      for (const articleNumber of numbers) {
        if (articleNumber === undefined) continue
        const provisionId = `${documentId}-art-${articleNumber}`
        const location = { file, line }
        ;(references[provisionId] ??= []).push(location)
        citations.push({ provisionId, documentId, articleNumber, file, line, method, family: familyForFile(file) })
      }
    }
  }

  for (const locations of Object.values(references)) locations.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
  citations.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || a.provisionId.localeCompare(b.provisionId))
  const uniqueProvisionReferences = citations.length
  return {
    references,
    citations,
    files: [...new Set(absoluteFiles.map(relative))].sort((a, b) => a.localeCompare(b)),
    stats: {
      filesScanned: absoluteFiles.length,
      citationCalls: new Set(citations.map((citation) => `${citation.file}:${citation.line}:${citation.method}`)).size,
      provisionReferences: uniqueProvisionReferences,
      provisionsCovered: Object.keys(references).length,
    },
    unsupportedPatterns: unsupportedPatterns.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || a.pattern.localeCompare(b.pattern)),
  }
}

/** @deprecated Use scanTypedReferences. */
export const scanAuthoredReferences = scanTypedReferences

/**
 * @param {Record<string, ReferenceLocation[]>} references
 * @param {string[]} provisionIds
 * @returns {Array<{ provisionId: string, references: ReferenceLocation[] }>}
 */
export function findReviewDependants(references, provisionIds) {
  return [...new Set(provisionIds)].sort((a, b) => a.localeCompare(b)).map((provisionId) => ({
    provisionId,
    references: (references[provisionId] ?? []).map((reference) => ({ ...reference })),
  }))
}

/**
 * Parse the generated lightweight registry without executing TypeScript.
 * @param {string} source
 * @returns {Map<string, Set<string>>} article number -> registered document IDs
 */
export function parseReferenceRegistrySource(source) {
  /** @type {Map<string, Set<string>>} */
  const articles = new Map()
  // Generated registries use bare keys where the document ID is a valid
  // identifier and quoted keys where it contains a hyphen.
  const groupPattern = /^  (?:"([^"]+)"|([A-Za-z_$][\w$-]*)): \{([\s\S]*?)^  \},?$/gmu
  for (const group of source.matchAll(groupPattern)) {
    const documentId = group[1] ?? group[2]
    const provisionBlock = group[3].match(/provisionIds:\s*\[([\s\S]*?)\]/u)?.[1] ?? ""
    for (const idMatch of provisionBlock.matchAll(/"[^"]+-art-([^"]+)"/gu)) {
      const articleNumber = idMatch[1]
      const acts = articles.get(articleNumber) ?? new Set()
      acts.add(documentId)
      articles.set(articleNumber, acts)
    }
  }
  return articles
}

/**
 * @param {{ projectRoot?: string, registryPath?: string }} [options]
 * @returns {Promise<{ packet: string, ambiguous: Array<ScannedCitation & { competingActs: string[], chosenAct: string, priority: boolean }>, stats: { filesScanned: number, citationsFound: number, ambiguousCitations: number, priorityAmbiguousCitations: number, priorityFiles: number }, scan: Awaited<ReturnType<typeof scanTypedReferences>> }>}
 */
export async function auditCitations({ projectRoot = DEFAULT_PROJECT_ROOT, registryPath } = {}) {
  const root = path.resolve(projectRoot)
  const scan = await scanTypedReferences({ projectRoot: root })
  const registryFile = registryPath ?? path.join(root, "app/data/legal-corpus/reference-registry.generated.ts")
  const registry = parseReferenceRegistrySource(await readFile(registryFile, "utf8"))
  /** @type {Array<ScannedCitation & { competingActs: string[], chosenAct: string, priority: boolean }>} */
  const ambiguous = []
  for (const citation of scan.citations) {
    const acts = [...(registry.get(citation.articleNumber) ?? [])].sort((a, b) => a.localeCompare(b))
    if (acts.length < 2) continue
    const priority = isPriorityFile(citation.file)
    ambiguous.push({ ...citation, chosenAct: citation.documentId, competingActs: acts.filter((act) => act !== citation.documentId), priority })
  }
  ambiguous.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || a.provisionId.localeCompare(b.provisionId))
  /** @type {Map<string, Array<ScannedCitation & { competingActs: string[], chosenAct: string, priority: boolean }>>} */
  const byFile = new Map()
  for (const file of scan.files) byFile.set(file, [])
  for (const citation of ambiguous) byFile.get(citation.file)?.push(citation)
  const lines = [
    "# Ambiguous typed citations",
    "",
    "Generated by `scripts/legal-corpus/workflow.mjs audit-citations`; do not edit by hand.",
    "",
    "The scanner is lexical and deterministic. An ambiguous citation is an article number present in more than one registered act; `chosen act` is the author document resolved from the same-file `createLegalTextAuthor()` declaration.",
    "",
    "## Coverage",
    "",
    `- Files scanned: ${scan.stats.filesScanned}`,
    `- Provision references found: ${scan.stats.provisionReferences}`,
    `- Provisions covered: ${scan.stats.provisionsCovered}`,
    `- Ambiguous citation references: ${ambiguous.length}`,
    `- Priority ambiguous references (codemod-era families): ${ambiguous.filter((item) => item.priority).length}`,
    `- Priority files: ${new Set(ambiguous.filter((item) => item.priority).map((item) => item.file)).size}`,
    "",
    "## Scanned files",
    "",
  ]
  for (const file of scan.files) lines.push(`- \`${file}\``)
  lines.push("", "## Review by file", "")
  for (const [file, citations] of byFile) {
    const priority = isPriorityFile(file)
    lines.push(`### \`${file}\`${priority ? " — PRIORITY" : ""}`, "")
    if (!citations.length) lines.push("No ambiguous typed citations.", "")
    else for (const citation of citations) lines.push(`- line ${citation.line}, \`${citation.provisionId}\` (article ${citation.articleNumber}): chosen act \`${citation.chosenAct}\`; competing acts: ${citation.competingActs.map((act) => `\`${act}\``).join(", ")}${citation.priority ? " — PRIORITY" : ""}`)
  }
  if (scan.unsupportedPatterns.length) {
    lines.push("## Unsupported patterns reported", "", "The following patterns were not inferred:", "")
    for (const item of scan.unsupportedPatterns) lines.push(`- \`${item.file}:${item.line}\` — ${item.pattern}`)
    lines.push("")
  }
  return {
    packet: `${lines.join("\n")}\n`,
    ambiguous,
    stats: {
      filesScanned: scan.stats.filesScanned,
      citationsFound: scan.stats.provisionReferences,
      ambiguousCitations: ambiguous.length,
      priorityAmbiguousCitations: ambiguous.filter((/** @type {any} */ item) => item.priority).length,
      priorityFiles: new Set(ambiguous.filter((item) => item.priority).map((item) => item.file)).size,
    },
    scan,
  }
}
