import { describe, expect, it } from "vitest"

import { getExplanation, listProvisions } from "../../query"
import {
  getKpaArticleExplanation,
  getKpaArticleExplanations,
  loadKpaExplanations,
} from "."

describe("canonical KPA editorial", () => {
  it("covers every current provision by its stable ID", async () => {
    const explanations = await loadKpaExplanations()
    const provisions = listProvisions("kpa")

    expect(provisions).toHaveLength(306)
    expect(Object.keys(explanations)).toHaveLength(306)
    for (const provision of provisions) {
      expect(explanations[provision.id]).toBeDefined()
    }
  })

  it("returns canonical explanations in requested article order", async () => {
    const explanation = await getKpaArticleExplanation("1")

    expect(explanation).toMatchObject({
      documentId: "kpa",
      provisionId: "kpa-art-1",
      summary: expect.anything(),
      legalEffect: expect.anything(),
      foreignersCase: expect.anything(),
    })
    expect(explanation?.rules).toEqual(expect.any(Array))
    expect(explanation?.claims).toEqual(expect.any(Array))

    const ordered = await getKpaArticleExplanations(["10", "1", "10"])
    expect(ordered.map((entry) => entry.provisionId)).toEqual([
      "kpa-art-10",
      "kpa-art-1",
      "kpa-art-10",
    ])
  })

  it("resolves KPA through the generic explanation query", async () => {
    const resolution = await getExplanation("kpa", "kpa-art-1")

    expect(resolution.status).toBe("reviewed")
    if (resolution.status === "reviewed") {
      expect(resolution.explanation.documentId).toBe("kpa")
      expect(resolution.explanation.provisionId).toBe("kpa-art-1")
      expect(resolution.explanation.sourceEditionId).toBe("kpa-2025-1691")
      expect(resolution.explanation.legalStateDate).toBe("2026-07-18")
      expect(resolution.explanation.verifiedAt).toBe("2026-07-18")
      expect(resolution.explanation.reviewStatus).toBe("reviewed")
      expect(resolution.explanation.language).toBe("uk")
      expect(resolution.explanation.claims).toEqual([
        expect.objectContaining({
          kind: "statute-text",
          text: resolution.explanation.summary,
          sourceLocator: "Art. 1",
        }),
        expect.objectContaining({
          kind: "practical-inference",
          text: resolution.explanation.foreignersCase,
          sourceLocator: "Art. 1",
        }),
      ])
    }
  })
})
