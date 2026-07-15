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

  // Keep the last complete occurrence, matching the historical KPA projection
  // behavior while allowing validation to reject any resulting duplicate ID.
  const seenArticles = new Set()
  return [...articles]
    .reverse()
    .filter((article) => {
      if (seenArticles.has(article.article)) return false
      seenArticles.add(article.article)
      return true
    })
    .reverse()
    .map(({ textParts, ...article }) => {
      const text = normalizeText(textParts.join("\n"))
      return {
        ...article,
        status: articleStatus(text),
        text,
      }
    })
}

export function extractProvisions(
  pages,
  { documentId, editionId, sourcePdfSha256 } = {}
) {
  if (!documentId || !editionId || !sourcePdfSha256) {
    throw new TypeError(
      "extractProvisions requires documentId, editionId, and sourcePdfSha256"
    )
  }

  return extractArticles(pages).map((article, index) => {
    const locator = `Art. ${article.article}`
    const text = normalizeText(article.text)
    return {
      id: createProvisionId(documentId, locator, "article"),
      documentId,
      editionId,
      kind: "article",
      locator,
      parentId: null,
      childIds: [],
      order: index + 1,
      startPdfPage: article.pdfPage,
      endPdfPage: article.endPdfPage,
      status: article.status,
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
