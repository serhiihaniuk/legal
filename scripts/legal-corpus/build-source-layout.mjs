import fs from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { normalizeText } from './lib/extraction.mjs'

const root = process.cwd()
const corpus = path.join(root, 'app/data/legal-corpus')
const registry = await fs.readFile(path.join(corpus, 'registry.generated.ts'), 'utf8')
const editions = [...registry.matchAll(/currentEditionId: "([^"]+)"/g)].map(match => match[1])
/** @type {Record<string, {textHash: string, ranges: {start: number, end: number, page: number}[]} >} */
const result = {}
const fingerprint = (/** @type {string} */ text) => text.replace(/[\s\u00ad]/gu, '')
for (const edition of editions) {
  const provisions = JSON.parse(await fs.readFile(path.join(corpus, edition, 'provisions.json'), 'utf8'))
  const bytes = await fs.readFile(path.join(root, 'public/legal-sources', edition, 'source.pdf'))
  const hash = createHash('sha256').update(bytes).digest('hex')
  if (provisions.some((/** @type {{sourcePdfSha256: string}} */ p) => p.sourcePdfSha256 !== hash)) throw new Error(`PDF hash mismatch: ${edition}`)
  const task = getDocument({data: new Uint8Array(bytes), useSystemFonts: true})
  const pdf = await task.promise
  /** @type {{text: string, size: number, page: number}[]} */
  const lines = []
  /** @type {Map<number, number>} */
  const sizes = new Map()
  for (let page = 1; page <= pdf.numPages; page++) {
    const content = await (await pdf.getPage(page)).getTextContent()
    let text = '', size = 0
    for (const item of content.items) {
      if (!('str' in item)) continue
      text += `${item.str}${item.hasEOL ? '\n' : ' '}`
      if (item.str.trim()) {
        size = Math.max(size, item.height)
        const rounded = Math.round(item.height * 10) / 10
        if (provisions.some((/** @type {{kind: string, startPdfPage: number, endPdfPage: number}} */ p) => p.kind !== "annex" && page >= p.startPdfPage && page <= p.endPdfPage)) sizes.set(rounded, (sizes.get(rounded) ?? 0) + item.str.length)
      }
      if (item.hasEOL) {
        lines.push({text: normalizeText(text), size, page})
        text = ''; size = 0
      }
    }
    if (text.trim()) lines.push({text: normalizeText(text), size, page})
  }
  const bodySize = [...sizes].sort((a,b) => b[1]-a[1])[0][0]
  /** @type {Map<number, Map<string, boolean>>} */
  const pageLines = new Map()
  for (const line of lines) {
    const key = fingerprint(line.text)
    if (!key) continue
    const map = pageLines.get(line.page) ?? new Map()
    // Never classify a short isolated superscript or a mixed-size body line as a note.
    const note = key.length >= 3 && !/^\d+[).]?$/.test(key) && line.size < bodySize * .91
    map.set(key, map.has(key) ? map.get(key) && note : note)
    pageLines.set(line.page, map)
  }
  let count = 0
  for (const provision of provisions) {
    if (provision.kind === 'annex') continue
    /** @type {{start: number, end: number, page: number}[]} */
    const ranges = []
    let start = 0
    let currentPage = provision.startPdfPage
    for (const line of provision.text.split('\n')) {
      const end = start + line.length + (start + line.length < provision.text.length ? 1 : 0)
      const key = fingerprint(line)
      for (let page = currentPage; page <= provision.endPdfPage; page++) {
        const match = pageLines.get(page)?.get(key)
        if (match !== undefined) currentPage = page
        if (match === true) {
          const previous = ranges.at(-1)
          if (previous && previous.end === start && previous.page === page) previous.end = end
          else ranges.push({start, end, page})
          break
        }
        if (match !== undefined) break
      }
      start = end
    }
    if (ranges.length) {
      result[`${edition}/${provision.id}`] = {textHash: createHash('sha256').update(provision.text).digest('hex'), ranges}
      count++
    }
  }
  await task.destroy()
  console.log(`${edition}: ${count} provisions with smaller source text (body ${bodySize}pt)`)
}
const output = path.join(root,'app/data/legal-library/source-layout.generated.json')
const serialized = JSON.stringify(result, null, 2)+'\n'
if (process.argv.includes('--check')) {
  if (await fs.readFile(output, 'utf8') !== serialized) throw new Error('Source layout is stale. Run npm run corpus:reader.')
} else await fs.writeFile(output, serialized)
