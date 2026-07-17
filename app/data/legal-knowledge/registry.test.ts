import { describe, expect, it } from "vitest"

import {
  authoredKnowledgeGraph,
  authoredKnowledgeUnits,
  knowledgeUnitById,
  knowledgeUnitBySubjectKey,
} from "./registry"

describe("authored knowledge registry", () => {
  it("loads generated units in deterministic order", () => {
    const unitIds = authoredKnowledgeUnits.map((unit) => unit.id)
    const sortedUnitIds = [...unitIds].sort((left, right) =>
      left.localeCompare(right, "en")
    )

    expect(unitIds).toEqual(sortedUnitIds)
    expect(new Set(unitIds).size).toBe(unitIds.length)
    expect(unitIds).toEqual(
      expect.arrayContaining([
        "map-topic:entry-current-basis",
        "map-topic:principle-legality",
        "map-topic:source-check",
        "map-topic:visa",
      ])
    )
    expect(knowledgeUnitById.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits.find(
        (unit) => unit.id === "map-topic:principle-legality"
      )
    )
    expect(knowledgeUnitBySubjectKey.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits.find(
        (unit) => unit.id === "map-topic:principle-legality"
      )
    )
  })

  it("publishes every typed basis and relationship in the deterministic graph", () => {
    const expectedEdgeCount = authoredKnowledgeUnits.reduce(
      (count, unit) =>
        count +
        unit.claims.reduce(
          (claimCount, claim) => claimCount + claim.basis.length,
          0
        ) +
        unit.relationships.length,
      0
    )

    expect(authoredKnowledgeGraph.units.map((unit) => unit.id)).toEqual(
      authoredKnowledgeUnits.map((unit) => unit.id)
    )
    expect(authoredKnowledgeGraph.outbound).toHaveLength(expectedEdgeCount)
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
