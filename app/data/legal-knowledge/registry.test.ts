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
      "map-topic:appeal",
      "map-topic:complaint",
      "map-topic:deadlines-delivery",
      "map-topic:decision-appeal",
      "map-topic:decision-reading",
      "map-topic:evidence",
      "map-topic:initiation",
      "map-topic:kpa-principles",
      "map-topic:organ-party",
      "map-topic:principle-legality",
      "map-topic:principle-participation",
      "map-topic:principle-trust",
      "map-topic:principle-two-instance",
      "map-topic:wezwanie",
    ])
    expect(knowledgeUnitById.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits[9]
    )
    expect(knowledgeUnitBySubjectKey.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits[9]
    )
  })

  it("publishes the deterministic graph for the generated registry", () => {
    expect(authoredKnowledgeGraph.units.map((unit) => unit.id)).toEqual([
      "map-topic:appeal",
      "map-topic:complaint",
      "map-topic:deadlines-delivery",
      "map-topic:decision-appeal",
      "map-topic:decision-reading",
      "map-topic:evidence",
      "map-topic:initiation",
      "map-topic:kpa-principles",
      "map-topic:organ-party",
      "map-topic:principle-legality",
      "map-topic:principle-participation",
      "map-topic:principle-trust",
      "map-topic:principle-two-instance",
      "map-topic:wezwanie",
    ])
    expect(authoredKnowledgeGraph.outbound).toHaveLength(24)
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
