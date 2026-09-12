import { describe, expect, it } from "vitest"
import { createHash } from "node:crypto"
import { legalLibraryRegistry } from "~/data/legal-corpus/registry.generated"
import { sourceNoteRanges } from "~/data/legal-library/source-layout"
import { getDocument, listProvisions } from "~/data/legal-library"
import { parseProvisionBlocks, separateSourceNotes } from "./source-text-model"

describe("structured source text", () => {
  it("ends work article 71 before the next chapter and preserves all four paragraphs", () => {
    const provision = listProvisions("powierzanie-pracy").find(
      (item) => item.locator === "Art. 71"
    )!
    const source = separateSourceNotes(
      provision.text,
      sourceNoteRanges(provision)
    )
    const blocks = parseProvisionBlocks(source.text)
    expect(blocks.map((block) => block.marker)).toEqual([
      "1.",
      "2.",
      "3.",
      "4.",
    ])
    expect(blocks[3].text).toMatch(/na podstawie umowy o pracę\.$/u)
    expect(provision.text).not.toContain("Rozdział 7")
    expect(provision.startPdfPage).toBe(57)
    expect(provision.endPdfPage).toBe(57)
    expect(
      listProvisions("powierzanie-pracy").find(
        (item) => item.locator === "Art. 72"
      )?.startPdfPage
    ).toBe(58)
  })

  it("retains original nested markers and keeps inline legal references inside sentences", () => {
    const blocks = parseProvisionBlocks(
      "Art. 40. 1. Warunki:\n1) pierwszy punkt:\na) litera,\nb) druga litera;\n2) art. 303 ust. 1 pozostaje odniesieniem.\n1a. Dodatkowy ustęp.\n§ 2. Kolejny paragraf."
    )
    expect(blocks.map((b) => b.marker)).toEqual([
      "1.",
      "1)",
      "a)",
      "b)",
      "2)",
      "1a.",
      "§ 2.",
    ])
    expect(blocks[4].text).toBe("art. 303 ust. 1 pozostaje odniesieniem.")
    expect(new Set(blocks.map((b) => b.key)).size).toBe(blocks.length)
    expect(
      parseProvisionBlocks("Art. 40 ust. 2. Cudzo-\nziemiec.")[0]
    ).toMatchObject({ marker: "2.", text: "Cudzoziemiec." })
  })

  it("keeps Art. 1 separate from the title notes in the current foreigners act", () => {
    const p = listProvisions("ustawa-o-cudzoziemcach").find(
      (p) => p.locator === "Art. 1"
    )!
    const source = separateSourceNotes(p.text, sourceNoteRanges(p))
    expect(parseProvisionBlocks(source.text)).toHaveLength(1)
    expect(source.text).not.toContain("dyrektywy")
    expect(source.text.trim()).toMatch(/w tych sprawach\.$/)
    expect(source.notes.map((n) => n.text).join("")).toContain(
      "dyrektywy Rady 2001/40/WE"
    )
    expect(
      parseProvisionBlocks("Art. 9. Cytat w przypisie.", false)[0].text
    ).toBe("Art. 9. Cytat w przypisie.")
  })

  it("matches the current source hash and preserves every character through the partition across the corpus", () => {
    let annotated = 0
    for (const id of Object.keys(legalLibraryRegistry)) {
      const document = getDocument(id)
      if (!document) continue
      for (const p of listProvisions(document.id)) {
        const ranges = sourceNoteRanges(p)
        if (!ranges.length) continue
        annotated++
        expect(createHash("sha256").update(p.text).digest("hex")).toBe(
          p.sourceTextHash
        )
        let cursor = 0,
          reconstructed = ""
        for (const r of ranges) {
          expect(r.start).toBeGreaterThanOrEqual(cursor)
          expect(r.end).toBeLessThanOrEqual(p.text.length)
          reconstructed +=
            p.text.slice(cursor, r.start) + p.text.slice(r.start, r.end)
          cursor = r.end
        }
        reconstructed += p.text.slice(cursor)
        expect(reconstructed).toBe(p.text)
        const source = separateSourceNotes(p.text, ranges)
        expect(new Set(source.notes.map((n) => n.page)).size).toBe(
          source.notes.length
        )
        expect(
          source.text.length +
            source.notes.reduce((sum, n) => sum + n.text.length, 0)
        ).toBe(p.text.length)
        expect(sourceNoteRanges({ ...p, sourceTextHash: "stale" })).toEqual([])
      }
    }
    expect(annotated).toBeGreaterThan(400)
  })

  it("rejects invalid note ranges without dropping source text", () => {
    expect(
      separateSourceNotes("text", [{ start: 0, end: 8, page: 1 }])
    ).toEqual({ text: "text", notes: [] })
  })
})
