import type { SourceNoteRange } from "~/data/legal-library/contracts"
export type { SourceNoteRange } from "~/data/legal-library/contracts"
export type SourceBlock = {
  label: string
  marker: string
  text: string
  depth: number
  key: string
}

export function normalizeLegalProvisionSourceText(text: string) {
  return text
    .replace(/\r\n?/gu, "\n")
    .replace(/(?<=\p{L})-[ \t]*\n[ \t]*(?=\p{Ll})/gu, "")
    .replace(/\s+/gu, " ")
    .trim()
}

export function separateSourceNotes(
  text: string,
  ranges: readonly SourceNoteRange[]
) {
  const notes: { page: number; text: string }[] = []
  const body: string[] = []
  let cursor = 0
  for (const range of ranges) {
    if (
      range.start < cursor ||
      range.end > text.length ||
      range.start >= range.end
    ) {
      return { text, notes: [] }
    }
    body.push(text.slice(cursor, range.start))
    const previous = notes.at(-1)
    if (previous?.page === range.page)
      previous.text += text.slice(range.start, range.end)
    else
      notes.push({ page: range.page, text: text.slice(range.start, range.end) })
    cursor = range.end
  }
  body.push(text.slice(cursor))
  return { text: body.join(""), notes }
}

export function parseProvisionBlocks(
  source: string,
  stripLocator = true
): SourceBlock[] {
  const normalized = source.replace(/\r\n?/gu, "\n")
  const text = stripLocator
    ? normalized
        .replace(
          /^\s*Art\.\s*\d+[a-z]{0,2}[⁰¹²³⁴⁵⁶⁷⁸⁹]*\s*(?:\.\s*|(?=ust))/iu,
          ""
        )
        .replace(/^ust(?:ęp)?\.?\s*(\d+[a-z]?)\.?\s*/iu, "$1. ")
    : normalized
  const blocks: SourceBlock[] = []
  let ustep = "",
    point = "",
    letter = ""
  for (const line of text.split("\n")) {
    if (!line.trim()) continue
    const match = line.match(
      /^\s*(?:(§\s*\d+[a-z]?\.)|(\d+[a-z]?\.)|(\d+[a-z]?\))|([a-z]\))|([–—−-]))\s+(.+)$/u
    )
    if (match) {
      const marker = match[1] ?? match[2] ?? match[3] ?? match[4] ?? match[5]
      const depth = match[1] || match[2] ? 0 : match[3] ? 1 : match[4] ? 2 : 3
      if (depth === 0) {
        ustep = marker
        point = ""
        letter = ""
      }
      if (depth === 1) {
        point = marker
        letter = ""
      }
      if (depth === 2) letter = marker
      const label = match[2] ? `ust. ${marker.slice(0, -1)}` : marker
      blocks.push({
        marker,
        label,
        depth,
        text: match[6],
        key: [ustep, point, letter, blocks.length + 1]
          .filter(Boolean)
          .join("-")
          .replace(/[^\p{L}\p{N}-]/gu, ""),
      })
    } else {
      const previous = blocks.at(-1)
      if (previous) previous.text += `\n${line}`
      else
        blocks.push({
          label: "",
          marker: "",
          depth: 0,
          text: line,
          key: "text",
        })
    }
  }
  return blocks.map((block) => ({
    ...block,
    text: normalizeLegalProvisionSourceText(block.text),
  }))
}
