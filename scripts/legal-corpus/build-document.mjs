#!/usr/bin/env node

import { createHash } from "node:crypto"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs"

const ARTICLE_PATTERN = /^Art\.\s+(\d+)(?:\s*([a-z]{1,2})|\s+([1-9]))?\s*\./gm
const SUPERSCRIPT_DIGITS = {
  1: "¹",
  2: "²",
  3: "³",
  4: "⁴",
  5: "⁵",
  6: "⁶",
  7: "⁷",
  8: "⁸",
  9: "⁹",
}

function normalizeText(value) {
  return value
    .replaceAll("\u00ad", "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"))
}

async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8")
}

async function fetchBytes(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "legalizacja-atlas-local-corpus/1.0" },
  })

  if (!response.ok) {
    throw new Error(`ELI request failed: ${response.status} ${url}`)
  }

  return new Uint8Array(await response.arrayBuffer())
}

async function extractPages(pdfBytes) {
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

function extractArticles(pages) {
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
      current = {
        article: `${match[1]}${match[2] ?? SUPERSCRIPT_DIGITS[match[3]] ?? ""}`,
        pdfPage: page.pdfPage,
        endPdfPage: page.pdfPage,
        textParts: [page.text.slice(match.index, end).trim()],
      }
    })
  }

  if (current) articles.push(current)

  const seenArticles = new Set()
  const deduplicated = [...articles]
    .reverse()
    .filter((article) => {
      if (seenArticles.has(article.article)) return false
      seenArticles.add(article.article)
      return true
    })
    .reverse()

  return deduplicated.map(({ textParts, ...article }) => {
    const text = normalizeText(textParts.join("\n"))
    return {
      ...article,
      status:
        /^Art\.\s+\d+\s*[a-z]{0,2}\s*\d?\s*\.\s*\(uchylon(?:y|a|e)\)/i.test(
          text
        )
          ? "repealed"
          : "active",
      text,
    }
  })
}

async function main() {
  const configArgument = process.argv[2]
  if (!configArgument) {
    throw new Error(
      "Usage: node scripts/legal-corpus/build-document.mjs <document-config.json>"
    )
  }

  const projectRoot = process.cwd()
  const configPath = path.resolve(projectRoot, configArgument)
  const config = await readJson(configPath)
  const documentId = config.id
  const dataDirectory = path.join(
    projectRoot,
    "app/data/legal-corpus",
    documentId
  )
  const publicDirectory = path.join(
    projectRoot,
    "public/legal-sources",
    documentId
  )
  await Promise.all([
    mkdir(dataDirectory, { recursive: true }),
    mkdir(publicDirectory, { recursive: true }),
  ])

  const [metadataBytes, pdfBytes] = await Promise.all([
    fetchBytes(config.metadataUrl),
    fetchBytes(config.pdfUrl),
  ])
  const metadata = JSON.parse(new TextDecoder().decode(metadataBytes))
  const pdfSha256 = createHash("sha256").update(pdfBytes).digest("hex")

  await writeFile(path.join(publicDirectory, "source.pdf"), pdfBytes)

  const pages = await extractPages(pdfBytes.slice())
  const articles = extractArticles(pages)
  const manifest = {
    ...config,
    localPdfUrl: `/legal-sources/${documentId}/source.pdf`,
    pageCount: pages.length,
    textLayerPageCount: pages.filter((page) => page.hasTextLayer).length,
    detectedArticleCount: articles.length,
    pdfSha256,
    builtAt: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"),
    eli: {
      identifier: metadata.ELI,
      status: metadata.status,
      inForce: metadata.inForce,
      legalStatusDate: metadata.legalStatusDate,
      textHTML: metadata.textHTML,
      textPDF: metadata.textPDF,
    },
  }

  await Promise.all([
    writeJson(path.join(dataDirectory, "manifest.json"), manifest),
    writeJson(path.join(dataDirectory, "metadata.json"), metadata),
    writeJson(path.join(dataDirectory, "pages.json"), pages),
    writeJson(path.join(dataDirectory, "articles.json"), articles),
    writeJson(path.join(publicDirectory, "manifest.json"), manifest),
  ])

  process.stdout.write(
    `${JSON.stringify({
      document: documentId,
      pages: pages.length,
      pagesWithText: manifest.textLayerPageCount,
      articles: articles.length,
      pdfSha256,
    })}\n`
  )
}

await main()
