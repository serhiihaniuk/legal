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
      "map-topic:decision-workflow",
      "map-topic:evidence",
      "map-topic:extraordinary-wsa",
      "map-topic:inactivity",
      "map-topic:initiation",
      "map-topic:invalidity",
      "map-topic:kpa-principles",
      "map-topic:legal-anatomy",
      "map-topic:organ-party",
      "map-topic:principle-legality",
      "map-topic:principle-participation",
      "map-topic:principle-trust",
      "map-topic:principle-two-instance",
      "map-topic:reopening",
      "map-topic:source-check",
      "map-topic:special-vs-kpa",
      "map-topic:start-case",
      "map-topic:study-loop",
      "map-topic:wezwanie",
      "map-topic:wezwanie-workflow",
      "map-topic:wsa",
    ])
    expect(knowledgeUnitById.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits[14]
    )
    expect(knowledgeUnitBySubjectKey.get("map-topic:principle-legality")).toBe(
      authoredKnowledgeUnits[14]
    )
  })

  it("publishes the deterministic graph for the generated registry", () => {
    expect(authoredKnowledgeGraph.units.map((unit) => unit.id)).toEqual([
      "map-topic:appeal",
      "map-topic:complaint",
      "map-topic:deadlines-delivery",
      "map-topic:decision-appeal",
      "map-topic:decision-reading",
      "map-topic:decision-workflow",
      "map-topic:evidence",
      "map-topic:extraordinary-wsa",
      "map-topic:inactivity",
      "map-topic:initiation",
      "map-topic:invalidity",
      "map-topic:kpa-principles",
      "map-topic:legal-anatomy",
      "map-topic:organ-party",
      "map-topic:principle-legality",
      "map-topic:principle-participation",
      "map-topic:principle-trust",
      "map-topic:principle-two-instance",
      "map-topic:reopening",
      "map-topic:source-check",
      "map-topic:special-vs-kpa",
      "map-topic:start-case",
      "map-topic:study-loop",
      "map-topic:wezwanie",
      "map-topic:wezwanie-workflow",
      "map-topic:wsa",
    ])
    expect(authoredKnowledgeGraph.outbound).toHaveLength(46)
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
