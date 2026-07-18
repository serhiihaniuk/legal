import { createHash } from "node:crypto"

import { CorpusValidationError } from "./errors.mjs"

/**
 * @typedef {import("./types.mjs").Page} Page
 * @typedef {import("./types.mjs").Provision} Provision
 */

export const SUPERSCRIPT_DIGITS = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
}

const ASCII_TO_SUPERSCRIPT = Object.fromEntries(
  Object.entries(SUPERSCRIPT_DIGITS).map(([superscript, digit]) => [
    digit,
    superscript,
  ])
)

const ARTICLE_PATTERN =
  /^Art\.\s+(\d+)(?:\s*([a-z]{1,2})|\s+([0-9]+)|\s*([⁰¹²³⁴⁵⁶⁷⁸⁹]+))?\s*\./gim
const ARTICLE_LOCATOR_PATTERN =
  /^Art\.\s*(\d+)(?:\s*([a-z]{1,2})|\s+([0-9]+)|\s*([⁰¹²³⁴⁵⁶⁷⁸⁹]+))?\s*\.?$/iu
const REPEALED_ARTICLE_PATTERN =
  /^Art\.\s+\d+\s*(?:[a-z]{1,2})?\s*(?:[0-9]+|[⁰¹²³⁴⁵⁶⁷⁸⁹]+)?\s*\.\s*\(uchylon(?:y|a|e)\)/iu
const PARAGRAPH_PATTERN = /^§\s*(\d+)([a-z]{0,2})?\s*\./gimu
const ANNEX_PATTERN = /^Załącznik nr\s+(\d+[a-z]?)/imu
const URL_SAFE_DOCUMENT_ID = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/
const TEMPORAL_PAGE_BOUNDARY = "\u0000LEGAL_CORPUS_PAGE_BOUNDARY\u0000"
const OLD_TEMPORAL_BLOCK_PATTERN = /\[[\s\S]*?\]/gu
const CURRENT_TEMPORAL_BLOCK_PATTERN = /<([\s\S]*?)>/gu
const TEMPORAL_ARTICLE_HEADING_PATTERN =
  /(?:^|\n)\s*Art\.\s+(\d+)(?:\s*([a-z]{1,2})|\s+([0-9]+)|\s*([\u2070\u00b9\u00b2\u00b3\u2074-\u2079]+))?\s*\./gmu

/**
 * @param {unknown} value
 * @returns {string}
 */
export function normalizeText(value) {
  return String(value)
    .replaceAll("\u00ad", "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

/**
 * @param {string | Uint8Array} value
 * @returns {string}
 */
export function sha256(value) {
  return createHash("sha256").update(value).digest("hex")
}

/**
 * @param {string} message
 * @param {string} code
 * @param {string} path
 * @param {unknown} [details]
 * @returns {never}
 */
function failTemporalSelection(message, code, path, details = undefined) {
  throw new CorpusValidationError(message, {
    fatal: [
      {
        severity: "fatal",
        code,
        path,
        message,
        ...(details === undefined ? {} : { details }),
      },
    ],
  })
}

/**
 * @param {any} range
 * @param {number} index
 * @returns {boolean}
 */
function rangeContains(range, index) {
  return index >= range.first && index <= range.last
}

/**
 * @param {any[]} sources
 * @param {"old" | "current"} kind
 * @param {number} index
 * @returns {any}
 */
function sourceForTemporalBlock(sources, kind, index) {
  const rangeField = kind === "old" ? "oldBlockRange" : "currentBlockRange"
  const matches = sources.filter((source) =>
    rangeContains(source[rangeField], index)
  )
  if (matches.length !== 1) {
    failTemporalSelection(
      `Temporal ${kind} block ${index} must map to exactly one effective-date source`,
      "temporal-selection.source-range-mismatch",
      `temporalTextSelection.sources.${rangeField}`,
      {
        kind,
        index,
        matchingSourceIds: matches.map((source) => source.sourceId),
      }
    )
  }
  return matches[0]
}

/**
 * Retain page separators when an obsolete block crosses page boundaries. The
 * selected text still maps to the original PDF pages even though the old
 * wording itself is removed.
 * @param {string} value
 * @returns {string}
 */
function retainedPageBoundaries(value) {
  return [...value.matchAll(new RegExp(TEMPORAL_PAGE_BOUNDARY, "gu"))]
    .map((match) => match[0])
    .join("")
}

/**
 * @param {Page[]} pages
 * @param {any} selection
 * @param {string} [leaveSourceId]
 * @returns {{ pages: Page[], introducedArticleLocatorsBySourceId: Map<string, Set<string>> }}
 */
function transformTemporalText(pages, selection, leaveSourceId = undefined) {
  const introducedArticleLocatorsBySourceId = new Map(
    selection.sources.map((/** @type {any} */ source) => [
      source.sourceId,
      new Set(),
    ])
  )
  let oldBlockCount = 0
  let currentBlockCount = 0
  let joined = pages.map((page) => page.text).join(TEMPORAL_PAGE_BOUNDARY)

  joined = joined.replace(OLD_TEMPORAL_BLOCK_PATTERN, (block) => {
    oldBlockCount += 1
    const source = sourceForTemporalBlock(
      selection.sources,
      "old",
      oldBlockCount
    )
    return source.sourceId === leaveSourceId
      ? block
      : retainedPageBoundaries(block)
  })
  joined = joined.replace(
    CURRENT_TEMPORAL_BLOCK_PATTERN,
    (block, selectedText) => {
      currentBlockCount += 1
      const source = sourceForTemporalBlock(
        selection.sources,
        "current",
        currentBlockCount
      )
      for (const match of selectedText.matchAll(
        TEMPORAL_ARTICLE_HEADING_PATTERN
      )) {
        introducedArticleLocatorsBySourceId
          .get(source.sourceId)
          ?.add(`Art. ${articleLabelFromMatch(match)}`)
      }
      return source.sourceId === leaveSourceId ? block : selectedText
    }
  )

  if (
    oldBlockCount !== selection.expectedOldBlockCount ||
    currentBlockCount !== selection.expectedCurrentBlockCount
  ) {
    failTemporalSelection(
      "Temporal marker inventory differs from the pinned extraction configuration",
      "temporal-selection.block-count-mismatch",
      "temporalTextSelection",
      {
        expectedOld: selection.expectedOldBlockCount,
        observedOld: oldBlockCount,
        expectedCurrent: selection.expectedCurrentBlockCount,
        observedCurrent: currentBlockCount,
      }
    )
  }

  const selectedPageText = joined.split(TEMPORAL_PAGE_BOUNDARY)
  if (selectedPageText.length !== pages.length) {
    failTemporalSelection(
      "Temporal selection did not preserve the source PDF page inventory",
      "temporal-selection.page-boundary-mismatch",
      "temporalTextSelection",
      { expected: pages.length, observed: selectedPageText.length }
    )
  }

  return {
    pages: pages.map((page, index) => {
      const text = normalizeText(selectedPageText[index])
      return { ...page, text, characterCount: text.length }
    }),
    introducedArticleLocatorsBySourceId,
  }
}

/**
 * Resolve consolidated-text editorial markers against explicit, checksum-
 * pinned effective-date sources. Counterfactual page sets are retained only
 * in memory so the builder can identify every provision whose compiled text
 * depends on each source.
 * @param {Page[]} pages
 * @param {any} selection
 * @returns {{
 *   pages: Page[],
 *   traces: Array<{
 *     sourceId: string,
 *     effectiveDate: string,
 *     locator: string,
 *     textMarkers: string[],
 *     expectedProvisionCount: number,
 *     introducedArticleLocators: Set<string>,
 *     counterfactualPages: Page[],
 *   }>,
 * }}
 */
export function selectTemporalText(pages, selection) {
  if (!selection) return { pages, traces: [] }
  if (selection.kind !== "bracket-angle-v1") {
    failTemporalSelection(
      `Unsupported temporal text selection ${selection.kind}`,
      "temporal-selection.unsupported-kind",
      "temporalTextSelection.kind"
    )
  }

  const selected = transformTemporalText(pages, selection)
  return {
    pages: selected.pages,
    traces: selection.sources.map((/** @type {any} */ source) => ({
      sourceId: source.sourceId,
      effectiveDate: source.effectiveDate,
      locator: source.locator,
      textMarkers: source.textMarkers ?? [],
      expectedProvisionCount: source.expectedProvisionCount,
      introducedArticleLocators:
        selected.introducedArticleLocatorsBySourceId.get(source.sourceId) ??
        new Set(),
      counterfactualPages: transformTemporalText(
        pages,
        selection,
        source.sourceId
      ).pages,
    })),
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function superscriptValue(value) {
  return value
    .split("")
    .map(
      (digit) =>
        SUPERSCRIPT_DIGITS[
          /** @type {keyof typeof SUPERSCRIPT_DIGITS} */ (digit)
        ]
    )
    .join("")
}

/**
 * @param {RegExpMatchArray} match
 * @returns {string}
 */
function articleLabelFromMatch(match) {
  const number = match[1]
  const letters = match[2]?.toLowerCase() ?? ""
  const asciiSuperscript = match[3]
    ? match[3]
        .split("")
        .map((digit) => ASCII_TO_SUPERSCRIPT[digit])
        .join("")
    : ""
  const superscript = match[4] ?? asciiSuperscript
  return `${number}${letters}${superscript}`
}

/**
 * @param {unknown} value
 * @returns {RegExpMatchArray}
 */
function parseArticleLocator(value) {
  const match = String(value).trim().match(ARTICLE_LOCATOR_PATTERN)
  if (!match) {
    throw new TypeError(`Unsupported article locator: ${value}`)
  }
  return match
}

/**
 * Return the canonical learner-facing locator while retaining article letters
 * and representing source-layer numeric suffixes as superscript digits.
 * @param {unknown} value
 * @returns {string}
 */
export function normalizeArticleLocator(value) {
  const match = parseArticleLocator(value)
  return `Art. ${articleLabelFromMatch(match)}`
}

/**
 * @param {unknown} value
 * @returns {string}
 */
export function articleValueFromLocator(value) {
  return normalizeArticleLocator(value).slice("Art. ".length)
}

/**
 * Convert an article locator into a stable URL-safe key. A superscript suffix
 * is separated from the base number (`39¹` -> `39-1`) so it cannot be confused
 * with the ordinary article `391`.
 * @param {unknown} value
 * @returns {string}
 */
export function normalizeArticleKey(value) {
  const article = articleValueFromLocator(value)
  const match = article.match(/^(\d+)([a-z]{0,2})([⁰¹²³⁴⁵⁶⁷⁸⁹]*)$/u)
  if (!match) throw new TypeError(`Unsupported article locator: ${value}`)
  const suffix = match[3]
    ? `-${superscriptValue(match[3]).split("").join("-")}`
    : ""
  return `${match[1]}${match[2]}${suffix}`
}

/**
 * @param {string} documentId
 * @param {unknown} locator
 * @param {string} [kind]
 * @returns {string}
 */
export function createProvisionId(documentId, locator, kind = "article") {
  if (!URL_SAFE_DOCUMENT_ID.test(documentId)) {
    throw new TypeError(`Unsupported document ID: ${documentId}`)
  }

  if (kind === "article") {
    return `${documentId}-art-${normalizeArticleKey(locator)}`
  }
  if (kind === "paragraph") {
    const match = String(locator).match(/^§\s*(\d+[a-z]{0,2})/iu)
    if (!match) throw new TypeError(`Unsupported paragraph locator: ${locator}`)
    return `${documentId}-par-${match[1].toLowerCase()}`
  }
  if (kind === "annex") {
    const match = String(locator).match(/^Załącznik nr\s+(\d+[a-z]?)/iu)
    if (!match) throw new TypeError(`Unsupported annex locator: ${locator}`)
    return `${documentId}-annex-${match[1].toLowerCase()}`
  }

  const normalizedLocator = normalizeText(locator)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
  if (!normalizedLocator)
    throw new TypeError(`Unsupported provision locator: ${locator}`)
  return `${documentId}-${kind}-${normalizedLocator}`
}

/**
 * @param {string} text
 * @returns {"active" | "repealed"}
 */
function articleStatus(text) {
  return REPEALED_ARTICLE_PATTERN.test(text) ? "repealed" : "active"
}

/**
 * A duplicate article/paragraph/annex locator means extraction cannot tell
 * which occurrence is the real provision. Keeping the first or last
 * occurrence silently, as this extractor once did, can retain the wrong page
 * span while the provision count still happens to match the config's
 * expectation, so expected-count validation never gets a chance to catch it.
 * Throwing here, before that count comparison ever runs, makes the ambiguity
 * itself fatal and carries both page positions so a human can resolve it in
 * the source PDF or extraction profile.
 * @template T
 * @param {T[]} items
 * @param {(item: T) => { locator: string, kind: string, startPdfPage: number, endPdfPage: number }} describe
 */
function assertNoDuplicateLocators(items, describe) {
  /** @type {Map<string, Array<{ locator: string, kind: string, startPdfPage: number, endPdfPage: number }>>} */
  const byLocator = new Map()
  for (const item of items) {
    const described = describe(item)
    const key = `${described.kind}:${described.locator}`
    const occurrences = byLocator.get(key) ?? []
    occurrences.push(described)
    byLocator.set(key, occurrences)
  }

  const duplicates = [...byLocator.values()].filter(
    (occurrences) => occurrences.length > 1
  )
  if (duplicates.length === 0) return

  /** @type {import("./types.mjs").Diagnostic[]} */
  const fatal = duplicates.map((occurrences) => {
    const { kind, locator } = occurrences[0]
    return {
      severity: /** @type {const} */ ("fatal"),
      code: "extraction.duplicate-locator",
      message: `Duplicate ${kind} locator ${locator} found on pages ${occurrences
        .map(
          (occurrence) => `${occurrence.startPdfPage}-${occurrence.endPdfPage}`
        )
        .join(" and ")}`,
      path: "extraction",
      details: {
        kind,
        locator,
        occurrences: occurrences.map(({ startPdfPage, endPdfPage }) => ({
          startPdfPage,
          endPdfPage,
        })),
      },
    }
  })
  throw new CorpusValidationError(
    `Extraction found ${fatal.length} duplicate locator(s): ${duplicates
      .map((occurrences) => `${occurrences[0].kind} ${occurrences[0].locator}`)
      .join(", ")}`,
    { fatal }
  )
}

/**
 * @typedef {{ article: string, pdfPage: number, endPdfPage: number, textParts: string[] }} ArticleAccumulator
 * @typedef {{ locator: string, pdfPage: number, matchIndex: number }} ArticleOccurrence
 * @typedef {{ locator: string, startMarker: string, endMarker?: string, effectiveDate: string }} FutureTextExclusion
 * @typedef {{ locator: string, status: string, effectiveDate?: string }} ProvisionStatusOverride
 */

/**
 * Extract article-shaped compatibility facts from normalized PDF pages.
 * Article-level records are the only promoted unit in profile v1; nested
 * paragraph/point records are intentionally left for a later profile revision.
 * @param {RegExpMatchArray} match
 * @returns {string}
 */
function articleLocatorFromMatch(match) {
  return `Art. ${articleLabelFromMatch(match)}`
}

/**
 * @param {RegExpMatchArray} match
 * @param {Page} page
 * @param {ArticleOccurrence[]} occurrences
 * @returns {boolean}
 */
function matchesArticleOccurrence(match, page, occurrences) {
  const locator = articleLocatorFromMatch(match)
  return occurrences.some(
    (occurrence) =>
      occurrence.locator === locator &&
      occurrence.pdfPage === page.pdfPage &&
      occurrence.matchIndex === (match.index ?? 0)
  )
}

/**
 * @param {ArticleOccurrence} occurrence
 * @returns {string}
 */
function articleOccurrenceKey(occurrence) {
  return `${occurrence.locator}|${occurrence.pdfPage}|${occurrence.matchIndex}`
}

/**
 * @param {string} message
 * @param {string} code
 * @param {string} path
 * @param {unknown} [details]
 * @returns {never}
 */
function failExtraction(message, code, path, details = undefined) {
  throw new CorpusValidationError(message, {
    fatal: [
      {
        severity: "fatal",
        code,
        path,
        message,
        ...(details === undefined ? {} : { details }),
      },
    ],
  })
}

/**
 * @param {string} text
 * @param {string} marker
 * @returns {number[]}
 */
function literalMatchIndexes(text, marker) {
  const indexes = []
  let offset = 0
  while (offset <= text.length - marker.length) {
    const index = text.indexOf(marker, offset)
    if (index === -1) break
    indexes.push(index)
    offset = index + Math.max(marker.length, 1)
  }
  return indexes
}

/**
 * Remove a future-dated fragment only when its exact semantic boundaries occur
 * once inside the configured provision. A stale or ambiguous selector is fatal
 * so a changed official PDF cannot silently reintroduce future wording.
 * @param {Array<{ article: string, pdfPage: number, endPdfPage: number, status: string, text: string }>} articles
 * @param {FutureTextExclusion[]} exclusions
 */
function applyFutureTextExclusions(articles, exclusions) {
  const matched = new Set()
  const transformed = articles.map((article) => {
    const locator = `Art. ${article.article}`
    const applicable = exclusions
      .map((exclusion, index) => ({ exclusion, index }))
      .filter(({ exclusion }) => exclusion.locator === locator)
    if (applicable.length === 0) return article

    const ranges = applicable.map(({ exclusion, index }) => {
      const startMarker = normalizeText(exclusion.startMarker)
      const startMatches = literalMatchIndexes(article.text, startMarker)
      if (startMatches.length !== 1) {
        failExtraction(
          `Future text exclusion for ${locator} expected one start marker but found ${startMatches.length}`,
          "extraction.future-text-start-mismatch",
          `extraction.futureTextExclusions[${index}].startMarker`,
          { locator, observed: startMatches.length }
        )
      }
      const start = startMatches[0]
      let end = article.text.length
      if (exclusion.endMarker !== undefined) {
        const endMarker = normalizeText(exclusion.endMarker)
        const suffixStart = start + startMarker.length
        const suffix = article.text.slice(suffixStart)
        const endMatches = literalMatchIndexes(suffix, endMarker)
        if (endMatches.length !== 1) {
          failExtraction(
            `Future text exclusion for ${locator} expected one following end marker but found ${endMatches.length}`,
            "extraction.future-text-end-mismatch",
            `extraction.futureTextExclusions[${index}].endMarker`,
            { locator, observed: endMatches.length }
          )
        }
        end = suffixStart + endMatches[0]
      }
      matched.add(index)
      return { start, end, index }
    })

    const ordered = [...ranges].sort((left, right) => left.start - right.start)
    for (let index = 1; index < ordered.length; index += 1) {
      if (ordered[index].start < ordered[index - 1].end) {
        failExtraction(
          `Future text exclusions for ${locator} overlap`,
          "extraction.future-text-overlap",
          `extraction.futureTextExclusions[${ordered[index].index}]`,
          { locator }
        )
      }
    }

    let text = article.text
    for (const range of [...ordered].sort(
      (left, right) => right.start - left.start
    )) {
      text = `${text.slice(0, range.start)}\n${text.slice(range.end)}`
    }
    text = normalizeText(text)
    return { ...article, status: articleStatus(text), text }
  })

  const unmatched = exclusions
    .map((exclusion, index) => ({ exclusion, index }))
    .filter(({ index }) => !matched.has(index))
  if (unmatched.length > 0) {
    failExtraction(
      `Future text exclusions target missing provisions: ${unmatched
        .map(({ exclusion }) => exclusion.locator)
        .join(", ")}`,
      "extraction.future-text-provision-mismatch",
      "extraction.futureTextExclusions",
      { locators: unmatched.map(({ exclusion }) => exclusion.locator) }
    )
  }
  return transformed
}

/**
 * @param {Page[]} pages
 * @param {{
 *   ignoredArticleOccurrences?: ArticleOccurrence[],
 *   excludedArticleOccurrences?: ArticleOccurrence[],
 *   futureTextExclusions?: FutureTextExclusion[],
 * }} [options]
 */
export function extractArticles(
  pages,
  {
    ignoredArticleOccurrences = [],
    excludedArticleOccurrences = [],
    futureTextExclusions = [],
  } = {}
) {
  /** @type {ArticleAccumulator[]} */
  const articles = []
  /** @type {ArticleAccumulator | null} */
  let current = null
  const observedIgnored = new Set()
  const observedExcluded = new Set()

  for (const page of pages) {
    const matches = Array.from(page.text.matchAll(ARTICLE_PATTERN)).flatMap(
      (match) => {
        const locator = articleLocatorFromMatch(match)
        const occurrence = {
          locator,
          pdfPage: page.pdfPage,
          matchIndex: match.index ?? 0,
        }
        const ignored = matchesArticleOccurrence(
          match,
          page,
          ignoredArticleOccurrences
        )
        const excluded = matchesArticleOccurrence(
          match,
          page,
          excludedArticleOccurrences
        )
        if (ignored && excluded) {
          failExtraction(
            `Article occurrence ${locator} on page ${page.pdfPage} cannot be both ignored and excluded`,
            "extraction.article-occurrence-conflict",
            "extraction",
            occurrence
          )
        }
        if (ignored) {
          observedIgnored.add(articleOccurrenceKey(occurrence))
          return []
        }
        if (excluded) observedExcluded.add(articleOccurrenceKey(occurrence))
        return [{ match, excluded }]
      }
    )

    if (matches.length === 0) {
      if (current && page.text) {
        current.textParts.push(page.text)
        current.endPdfPage = page.pdfPage
      }
      continue
    }

    const leading = page.text.slice(0, matches[0].match.index).trim()
    if (current && leading) {
      current.textParts.push(leading)
      current.endPdfPage = page.pdfPage
    }

    // A plain loop (rather than matches.forEach) keeps `current`'s reassignment
    // in the same function scope as the narrowing checks above and below, so
    // TypeScript's control-flow analysis can track it across iterations.
    for (const [index, boundary] of matches.entries()) {
      if (current) articles.push(current)

      if (boundary.excluded) {
        current = null
        continue
      }

      const match = boundary.match
      const next = matches[index + 1]?.match
      const end = next?.index ?? page.text.length
      const article = articleLabelFromMatch(match)
      current = {
        article,
        pdfPage: page.pdfPage,
        endPdfPage: page.pdfPage,
        textParts: [page.text.slice(match.index, end).trim()],
      }
    }
  }

  if (current) articles.push(current)

  /** @type {Array<[string, ArticleOccurrence[], Set<string>]>} */
  const configuredOccurrences = [
    ["ignoredArticleOccurrences", ignoredArticleOccurrences, observedIgnored],
    [
      "excludedArticleOccurrences",
      excludedArticleOccurrences,
      observedExcluded,
    ],
  ]
  for (const [field, configured, observed] of configuredOccurrences) {
    const missing = configured.filter(
      (occurrence) => !observed.has(articleOccurrenceKey(occurrence))
    )
    if (missing.length > 0) {
      failExtraction(
        `Configured ${field} did not match ${missing.length} source occurrence(s)`,
        "extraction.article-occurrence-mismatch",
        `extraction.${field}`,
        { missing }
      )
    }
  }

  assertNoDuplicateLocators(articles, (article) => ({
    kind: "article",
    locator: `Art. ${article.article}`,
    startPdfPage: article.pdfPage,
    endPdfPage: article.endPdfPage,
  }))

  const normalized = articles.map(({ textParts, ...article }) => {
    const text = normalizeText(textParts.join("\n"))
    return {
      ...article,
      status: articleStatus(text),
      text,
    }
  })
  return applyFutureTextExclusions(normalized, futureTextExclusions)
}

/**
 * @typedef {{ index: number, kind: string, locator: string, startPdfPage: number, endPdfPage: number, textParts: string[] }} ParagraphUnitAccumulator
 */

/**
 * @param {Page[]} pages
 */
function extractParagraphLedUnits(pages) {
  /** @type {ParagraphUnitAccumulator[]} */
  const units = []
  /** @type {ParagraphUnitAccumulator | null} */
  let current = null

  for (const page of pages) {
    const markers = [...page.text.matchAll(PARAGRAPH_PATTERN)].map((match) => ({
      index: match.index ?? 0,
      kind: "paragraph",
      locator: `§ ${match[1]}${match[2] ?? ""}`,
    }))
    const annex = page.text.match(ANNEX_PATTERN)
    if (annex && (annex.index ?? Infinity) < 1000) {
      markers.push({
        index: annex.index ?? 0,
        kind: "annex",
        locator: `Załącznik nr ${annex[1]}`,
      })
    }
    markers.sort((left, right) => left.index - right.index)

    if (markers.length === 0) {
      if (current && page.text) {
        current.textParts.push(page.text)
        current.endPdfPage = page.pdfPage
      }
      continue
    }

    const leading = page.text.slice(0, markers[0].index).trim()
    if (current && leading) {
      current.textParts.push(leading)
      current.endPdfPage = page.pdfPage
    }

    // A plain loop (rather than markers.forEach) keeps `current`'s reassignment
    // in the same function scope as the narrowing checks above and below, so
    // TypeScript's control-flow analysis can track it across iterations.
    for (const [index, marker] of markers.entries()) {
      if (current) units.push(current)
      const next = markers[index + 1]
      current = {
        ...marker,
        startPdfPage: page.pdfPage,
        endPdfPage: page.pdfPage,
        textParts: [
          page.text.slice(marker.index, next?.index ?? page.text.length).trim(),
        ],
      }
    }
  }
  if (current) units.push(current)

  assertNoDuplicateLocators(units, (unit) => ({
    kind: unit.kind,
    locator: unit.locator,
    startPdfPage: unit.startPdfPage,
    endPdfPage: unit.endPdfPage,
  }))

  return units.map(({ textParts, index: _index, ...unit }) => {
    const text = normalizeText(textParts.join("\n"))
    return {
      ...unit,
      status: /^§[^.]*\.\s*\(uchylon(?:y|a|e)\)/iu.test(text)
        ? "repealed"
        : "active",
      text,
    }
  })
}

/**
 * @param {Page[]} pages
 * @param {{
 *   documentId: string,
 *   editionId: string,
 *   sourcePdfSha256: string,
 *   profile?: string,
 *   ignoredArticleOccurrences?: ArticleOccurrence[],
 *   excludedArticleOccurrences?: ArticleOccurrence[],
 *   futureTextExclusions?: FutureTextExclusion[],
 *   provisionStatusOverrides?: ProvisionStatusOverride[],
 * }} [options]
 * @returns {Provision[]}
 */
export function extractProvisions(
  pages,
  {
    documentId,
    editionId,
    sourcePdfSha256,
    profile = "polish-statute-art-v1",
    ignoredArticleOccurrences = [],
    excludedArticleOccurrences = [],
    futureTextExclusions = [],
    provisionStatusOverrides = [],
  } = /** @type {any} */ ({})
) {
  if (!documentId || !editionId || !sourcePdfSha256) {
    throw new TypeError(
      "extractProvisions requires documentId, editionId, and sourcePdfSha256"
    )
  }

  const units =
    profile === "polish-regulation-paragraph-v1"
      ? extractParagraphLedUnits(pages)
      : extractArticles(pages, {
          ignoredArticleOccurrences,
          excludedArticleOccurrences,
          futureTextExclusions,
        }).map((article) => ({
          kind: "article",
          locator: `Art. ${article.article}`,
          startPdfPage: article.pdfPage,
          endPdfPage: article.endPdfPage,
          status: article.status,
          text: article.text,
        }))

  const overridesByLocator = new Map()
  for (const [index, override] of provisionStatusOverrides.entries()) {
    const existing = overridesByLocator.get(override.locator)
    if (existing) {
      failExtraction(
        `Provision status override for ${override.locator} is duplicated`,
        "extraction.duplicate-status-override",
        `extraction.provisionStatusOverrides[${index}].locator`
      )
    }
    overridesByLocator.set(override.locator, { override, index })
  }
  const matchedOverrides = new Set()

  const provisions = units.map((unit, index) => {
    const text = normalizeText(unit.text)
    const statusOverride = overridesByLocator.get(unit.locator)
    if (statusOverride) matchedOverrides.add(statusOverride.index)
    return {
      id: createProvisionId(documentId, unit.locator, unit.kind),
      documentId,
      editionId,
      kind: unit.kind,
      locator: unit.locator,
      parentId: null,
      childIds: [],
      order: index + 1,
      startPdfPage: unit.startPdfPage,
      endPdfPage: unit.endPdfPage,
      status: statusOverride?.override.status ?? unit.status,
      ...(statusOverride?.override.effectiveDate
        ? { effectiveDate: statusOverride.override.effectiveDate }
        : {}),
      sourcePdfSha256,
      sourceTextHash: sha256(text),
      text,
    }
  })
  if (matchedOverrides.size !== provisionStatusOverrides.length) {
    const missing = provisionStatusOverrides.filter(
      (_override, index) => !matchedOverrides.has(index)
    )
    failExtraction(
      `Provision status overrides target missing locators: ${missing
        .map((override) => override.locator)
        .join(", ")}`,
      "extraction.status-override-mismatch",
      "extraction.provisionStatusOverrides",
      { locators: missing.map((override) => override.locator) }
    )
  }
  return provisions
}

/**
 * @param {Uint8Array} pdfBytes
 * @param {(options: { data: Uint8Array, disableWorker: boolean, useSystemFonts: boolean }) => { promise: Promise<any>, destroy: () => Promise<void> }} getDocument
 *   Injected rather than imported directly, so tests can pass a stub without loading real PDF.js.
 * @returns {Promise<Page[]>}
 */
export async function extractPages(pdfBytes, getDocument) {
  const loadingTask = getDocument({
    data: pdfBytes,
    disableWorker: true,
    useSystemFonts: true,
  })
  const pdf = await loadingTask.promise
  /** @type {Page[]} */
  const pages = []

  try {
    for (let pdfPage = 1; pdfPage <= pdf.numPages; pdfPage += 1) {
      const page = await pdf.getPage(pdfPage)
      const content = await page.getTextContent()
      const rawText = content.items
        .map((/** @type {any} */ item) => {
          if (!("str" in item)) return ""
          return `${item.str}${item.hasEOL ? "\n" : " "}`
        })
        .join("")
      const text = normalizeText(rawText)

      pages.push({
        pdfPage,
        text,
        characterCount: text.length,
        hasTextLayer: text.length > 0,
      })
    }
  } finally {
    await loadingTask.destroy()
  }

  return pages
}
