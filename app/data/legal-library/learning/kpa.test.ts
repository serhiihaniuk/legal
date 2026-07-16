import { describe, expect, it } from "vitest"

import { listProvisions } from "../query"
import { getLegalLearningCurriculum, getLegalLearningModules } from "."
import { kpaArticleIndex, kpaArticleSections } from "./kpa"

describe("canonical KPA learning", () => {
  it("registers a real generic curriculum and module list", () => {
    const curriculum = getLegalLearningCurriculum("kpa")
    const modules = getLegalLearningModules("kpa")

    expect(curriculum?.documentId).toBe("kpa")
    expect(curriculum?.modules).toHaveLength(15)
    expect(modules).toHaveLength(15)
    expect(modules.map((module) => module.id)).toEqual([
      "system",
      "anatomy",
      "principles",
      "authority",
      "party",
      "initiation",
      "files-evidence",
      "time-service",
      "summons",
      "silence",
      "decisions",
      "appeal",
      "delay",
      "extraordinary",
      "court",
    ])
  })

  it("projects all corpus identity and navigation facts without changing authored metadata", () => {
    const provisions = listProvisions("kpa").filter(
      (provision) => provision.kind === "article"
    )
    const articleOrder = new Map(
      provisions.map((provision, index) => [
        provision.locator.replace(/^Art\.\s*/u, ""),
        index,
      ])
    )

    expect(provisions).toHaveLength(306)
    expect(kpaArticleIndex).toHaveLength(306)

    for (const [index, provision] of provisions.entries()) {
      const article = provision.locator.replace(/^Art\.\s*/u, "")
      const entry = kpaArticleIndex[index]
      const section = kpaArticleSections.find((candidate) => {
        const start = articleOrder.get(candidate.start)
        const end = articleOrder.get(candidate.end)
        const current = articleOrder.get(article)
        return (
          start !== undefined &&
          end !== undefined &&
          current !== undefined &&
          current >= start &&
          current <= end
        )
      })

      expect(entry.article).toBe(article)
      expect(entry.pdfPage).toBe(provision.startPdfPage)
      expect(entry.status).toBe(
        provision.status === "active" ? "active" : "repealed"
      )
      expect(entry.previousArticle).toBe(
        index > 0
          ? provisions[index - 1].locator.replace(/^Art\.\s*/u, "")
          : null
      )
      expect(entry.nextArticle).toBe(
        index + 1 < provisions.length
          ? provisions[index + 1].locator.replace(/^Art\.\s*/u, "")
          : null
      )
      expect(entry.searchToken).toBe(`${provision.locator}.`)
      expect(section).toBeDefined()
      expect(entry.division).toBe(section?.division)
      expect(entry.chapter).toBe(section?.chapter)
      expect(entry.sectionFocus).toBe(section?.learnerFocus)
      expect(entry.sectionPractice).toBe(section?.practicalUse)
      expect(entry.keywords).toEqual([
        ...(section?.keywords ?? []),
        entry.shortTitle,
        `art. ${article}`,
        entry.status,
      ])
    }
  })
})
