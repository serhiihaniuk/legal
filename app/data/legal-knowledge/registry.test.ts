import { describe, expect, it } from "vitest"

import {
  authoredKnowledgeGraph,
  authoredKnowledgeUnits,
  knowledgeUnitById,
  knowledgeUnitBySubjectKey,
} from "./registry"

describe("authored knowledge registry", () => {
  it("loads the generated units without a hand-maintained content index", () => {
    expect(authoredKnowledgeUnits.map((unit) => unit.id)).toEqual([
      "map-topic:principle-legality",
    ])
    expect(knowledgeUnitById.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits[0]
    )
    expect(knowledgeUnitBySubjectKey.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits[0]
    )
  })

  it("publishes the deterministic graph for the generated registry", () => {
    expect(authoredKnowledgeGraph.units.map((unit) => unit.id)).toEqual([
      "map-topic:principle-legality",
    ])
    expect(authoredKnowledgeGraph.outbound).toHaveLength(4)
    expect(authoredKnowledgeGraph.outbound).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          status: "source",
          targetKey: "source:legal-provision:kpa:kpa-art-6:kpa-2025-1691",
        }),
        expect.objectContaining({
          status: "source",
          targetKey: "source:legal-provision:kpa:kpa-art-7:kpa-2025-1691",
        }),
      ])
    )
    expect(authoredKnowledgeGraph.diagnostics).toEqual([])
  })
})
