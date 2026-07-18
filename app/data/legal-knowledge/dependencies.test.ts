import { describe, expect, it } from "vitest"

import { buildKnowledgeGraph } from "./dependencies"
import {
  defineKnowledgeUnit,
  type KnowledgeClaimBasis,
  type KnowledgeRelationship,
} from "./contracts"

function mapTopicUnit(
  id: string,
  nodeId: string,
  options: {
    basis?: KnowledgeClaimBasis
    relationship?: KnowledgeRelationship
  } = {}
) {
  return defineKnowledgeUnit({
    id,
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId },
    },
    summary: `${nodeId} summary`,
    claims: [
      {
        id: "summary",
        kind: "practical-inference",
        text: `${nodeId} claim`,
        basis: [
          options.basis ?? {
            reference: {
              kind: "official-source",
              sourceId: "eli-kpa",
            },
            locator: "source",
          },
        ],
      },
    ],
    relationships: options.relationship ? [options.relationship] : [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: { nodeId },
  })
}

describe("knowledge dependency graph", () => {
  it("derives an authored-unit edge from a typed map reference", () => {
    const source = mapTopicUnit("map-topic:source", "source")
    const dependent = mapTopicUnit("map-topic:dependent", "dependent", {
      basis: {
        reference: { kind: "map-node", nodeId: "source" },
        locator: "summary",
      },
    })

    const graph = buildKnowledgeGraph([dependent, source])
    const edge = graph.outbound.find(
      (dependency) => dependency.fromUnitId === dependent.id
    )

    expect(edge).toMatchObject({
      targetKey: "map-topic:source",
      status: "unit",
      targetUnitId: source.id,
    })
    expect(graph.inbound).toEqual([
      {
        unitId: source.id,
        dependencies: [edge],
      },
    ])
    expect(graph.diagnostics).toEqual([])
  })

  it("keeps source bases as source edges and reports unknown unit targets", () => {
    const source = mapTopicUnit("map-topic:source", "source")
    const unresolved = mapTopicUnit("map-topic:unresolved", "unresolved", {
      basis: {
        reference: { kind: "map-node", nodeId: "missing" },
        locator: "summary",
      },
      relationship: {
        kind: "related",
        target: {
          family: "map-topic",
          reference: { kind: "map-node", nodeId: "missing" },
        },
      },
    })

    const graph = buildKnowledgeGraph([source, unresolved])

    expect(
      graph.outbound.find((dependency) => dependency.fromUnitId === source.id)
    ).toMatchObject({ status: "source" })
    expect(graph.diagnostics).toEqual([
      expect.objectContaining({
        code: "unresolved-reference",
        fromUnitId: unresolved.id,
        targetKey: "map-topic:missing",
      }),
      expect.objectContaining({
        code: "unresolved-reference",
        fromUnitId: unresolved.id,
        targetKey: "map-topic:missing",
      }),
    ])
  })

  it("detects cycles and duplicate identities deterministically", () => {
    const first = mapTopicUnit("map-topic:first", "first", {
      relationship: {
        kind: "next",
        target: {
          family: "map-topic",
          reference: { kind: "map-node", nodeId: "second" },
        },
      },
    })
    const second = mapTopicUnit("map-topic:second", "second", {
      relationship: {
        kind: "next",
        target: {
          family: "map-topic",
          reference: { kind: "map-node", nodeId: "first" },
        },
      },
    })

    const graph = buildKnowledgeGraph([first, second, first])

    expect(graph.diagnostics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: "duplicate-unit-id" }),
        expect.objectContaining({ code: "duplicate-subject" }),
        expect.objectContaining({
          code: "dependency-cycle",
          unitIds: ["map-topic:first", "map-topic:second"],
        }),
      ])
    )
  })
})
