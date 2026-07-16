import { createHash } from "node:crypto"

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
  Object.entries(SUPERSCRIPT_DIGITS).map(([superscript, digit]) => [digit, superscript])
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

export function normalizeText(value) {
  return String(value)
    .replaceAll("\u00ad", "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex")
}

function superscriptValue(value) {
  return value
    .split("")
    .map((digit) => SUPERSCRIPT_DIGITS[digit])
    .join("")
}

function articleLabelFromMatch(match) {
  const number = match[1]
  const letters = match[2]?.toLowerCase() ?? ""
  const asciiSuperscript = match[3]
    ? match[3].split("").map((digit) => ASCII_TO_SUPERSCRIPT[digit]).join("")
    : ""
  const superscript = match[4] ?? asciiSuperscript
  return `${number}${letters}${superscript}`
}

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
 */
export function normalizeArticleLocator(value) {
  const match = parseArticleLocator(value)
  return `Art. ${articleLabelFromMatch(match)}`
}

export function articleValueFromLocator(value) {
  return normalizeArticleLocator(value).slice("Art. ".length)
}

/**
 * Convert an article locator into a stable URL-safe key. A superscript suffix
 * is separated from the base number (`39¹` -> `39-1`) so it cannot be confused
 * with the ordinary article `391`.
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
  if (!normalizedLocator) throw new TypeError(`Unsupported provision locator: ${locator}`)
  return `${documentId}-${kind}-${normalizedLocator}`
}

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
  const byLocator = new Map()
  for (const item of items) {
    const described = describe(item)
    const key = `${described.kind}:${described.locator}`
    const occurrences = byLocator.get(key) ?? []
    occurrences.push(described)
    byLocator.set(key, occurrences)
  }

  const duplicates = [...byLocator.values()].filter((occurrences) => occurrences.length > 1)
  if (duplicates.length === 0) return

  const fatal = duplicates.map((occurrences) => {
    const { kind, locator } = occurrences[0]
    return {
      severity: "fatal",
      code: "extraction.duplicate-locator",
      message: `Duplicate ${kind} locator ${locator} found on pages ${occurrences
        .map((occurrence) => `${occurrence.startPdfPage}-${occurrence.endPdfPage}`)
        .join(" and ")}`,
      path: "extraction",
      details: {
        kind,
        locator,
        occurrences: occurrences.map(({ startPdfPage, endPdfPage }) => ({ startPdfPage, endPdfPage })),
      },
    }
  })
  const error = new Error(
    `Extraction found ${fatal.length} duplicate locator(s): ${duplicates
      .map((occurrences) => `${occurrences[0].kind} ${occurrences[0].locator}`)
      .join(", ")}`
  )
  error.name = "CorpusValidationError"
  error.diagnostics = { fatal }
  throw error
}

/**
 * Extract article-shaped compatibility facts from normalized PDF pages.
 * Article-level records are the only promoted unit in profile v1; nested
 * paragraph/point records are intentionally left for a later profile revision.
 */
export function extractArticles(pages) {
  const articles = []
  let current = null

  for (const page of pages) {
    const matches = Array.from(page.text.matchAll(ARTICLE_PATTERN))

    if (matches.length === 0) {
      if (current && page.text) {
        current.textParts.push(page.text)
        current.endPdfPage = page.pdfPage
      }
      continue
    }

    const leading = page.text.slice(0, matches[0].index).trim()
    if (current && leading) {
      current.textParts.push(leading)
      current.endPdfPage = page.pdfPage
    }

    matches.forEach((match, index) => {
      if (current) articles.push(current)

      const next = matches[index + 1]
      const end = next?.index ?? page.text.length
      const article = articleLabelFromMatch(match)
      current = {
        article,
        pdfPage: page.pdfPage,
        endPdfPage: page.pdfPage,
        textParts: [page.text.slice(match.index, end).trim()],
      }
    })
  }

  if (current) articles.push(current)

  assertNoDuplicateLocators(articles, (article) => ({
    kind: "article",
    locator: `Art. ${article.article}`,
    startPdfPage: article.pdfPage,
    endPdfPage: article.endPdfPage,
  }))

  return articles.map(({ textParts, ...article }) => {
    const text = normalizeText(textParts.join("\n"))
    return {
      ...article,
      status: articleStatus(text),
      text,
    }
  })
}

function extractParagraphLedUnits(pages) {
  const units = []
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

    markers.forEach((marker, index) => {
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
    })
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

export function extractProvisions(
  pages,
  {
    documentId,
    editionId,
    sourcePdfSha256,
    profile = "polish-statute-art-v1",
  } = {}
) {
  if (!documentId || !editionId || !sourcePdfSha256) {
    throw new TypeError(
      "extractProvisions requires documentId, editionId, and sourcePdfSha256"
    )
  }

  const units = profile === "polish-regulation-paragraph-v1"
    ? extractParagraphLedUnits(pages)
    : extractArticles(pages).map((article) => ({
        kind: "article",
        locator: `Art. ${article.article}`,
        startPdfPage: article.pdfPage,
        endPdfPage: article.endPdfPage,
        status: article.status,
        text: article.text,
      }))

  return units.map((unit, index) => {
    const text = normalizeText(unit.text)
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
      status: unit.status,
      sourcePdfSha256,
      sourceTextHash: sha256(text),
      text,
    }
  })
}

export async function extractPages(pdfBytes, getDocument) {
  const loadingTask = getDocument({
    data: pdfBytes,
    disableWorker: true,
    useSystemFonts: true,
  })
  const pdf = await loadingTask.promise
  const pages = []

  try {
    for (let pdfPage = 1; pdfPage <= pdf.numPages; pdfPage += 1) {
      const page = await pdf.getPage(pdfPage)
      const content = await page.getTextContent()
      const rawText = content.items
        .map((item) => {
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
