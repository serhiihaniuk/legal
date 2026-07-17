import { describe, expect, it } from "vitest"

import { createLegalTextAuthor } from "~/data/legal-library/legal-text"

import {
  defineKnowledgeUnit,
  knowledgeSubjectKey,
  type ProvisionKnowledgeUnit,
} from "./contracts"

const kpaLaw = createLegalTextAuthor("kpa")

const kpaProvision = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-6",
  editionId: "kpa-2025-1691",
} as const

const review = {
  reviewStatus: "reviewed",
  language: "uk",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
} as const

describe("source-first knowledge unit contract", () => {
  it("keeps one provision subject and its source edition together", () => {
    const unit = defineKnowledgeUnit({
      id: "provision:kpa-art-6",
      subject: {
        family: "provision-explanation",
        reference: kpaProvision,
      },
      summary: kpaLaw.text`${kpaLaw.article("6")} закріплює принцип законності.`,
      claims: [
        {
          kind: "statute-text",
          text: kpaLaw.text`${kpaLaw.article("6")} визначає правову основу дій органу.`,
          basis: [{ reference: kpaProvision, locator: "Art. 6" }],
        },
      ],
      relationships: [],
      review: {
        ...review,
        sourceEditionId: "kpa-2025-1691",
      },
      body: {
        kind: "provision-explanation",
        paragraphs: ["Це тіло належить лише поясненню норми."],
      },
    })

    const typedUnit: ProvisionKnowledgeUnit<
      { kind: string; paragraphs: readonly string[] },
      "kpa"
    > = unit

    expect(typedUnit.subject.reference.provisionId).toBe("kpa-art-6")
    expect(typedUnit.review.sourceEditionId).toBe("kpa-2025-1691")
    expect(knowledgeSubjectKey(typedUnit.subject)).toBe(
      "provision-explanation:kpa:kpa-art-6:kpa-2025-1691"
    )
  })

  it("allows a map topic to have a different body shape and typed bases", () => {
    const unit = defineKnowledgeUnit({
      id: "map-topic:principle-legality",
      subject: {
        family: "map-topic",
        reference: { kind: "map-node", nodeId: "principle-legality" },
      },
      summary: "Тема пояснює, що орган діє на підставі права.",
      claims: [
        {
          kind: "practical-inference",
          text: "Перевірка починається з правової підстави конкретної дії.",
          basis: [{ reference: kpaProvision, locator: "Art. 6" }],
        },
      ],
      relationships: [],
      review,
      body: {
        kind: "map-topic-explanation",
        legalModel: {
          rule: "Підстава",
          workflow: ["Факт", "Норма", "Дія"],
        },
      },
    })

    expect(knowledgeSubjectKey(unit.subject)).toBe(
      "map-topic:principle-legality"
    )
    expect(unit.body.kind).toBe("map-topic-explanation")
  })

  it("rejects a claim without a typed basis", () => {
    expect(() =>
      defineKnowledgeUnit({
        id: "map-topic:missing-basis",
        subject: {
          family: "map-topic",
          reference: { kind: "map-node", nodeId: "missing-basis" },
        },
        summary: "Пояснення",
        claims: [
          {
            kind: "practical-inference",
            text: "Твердження без джерела.",
            basis: [],
          },
        ],
        relationships: [],
        review,
        body: {},
      })
    ).toThrow("at least one typed basis")
  })

  it("rejects duplicate relationships to the same subject", () => {
    const target = {
      family: "map-topic" as const,
      reference: { kind: "map-node" as const, nodeId: "related-topic" },
    }

    expect(() =>
      defineKnowledgeUnit({
        id: "map-topic:duplicate-relations",
        subject: {
          family: "map-topic",
          reference: { kind: "map-node", nodeId: "duplicate-relations" },
        },
        summary: "Пояснення",
        claims: [],
        relationships: [
          { kind: "related", target },
          { kind: "related", target },
        ],
        review,
        body: {},
      })
    ).toThrow("duplicate related relationship")
  })

  it("requires an edition for a provision explanation", () => {
    expect(() =>
      defineKnowledgeUnit({
        id: "provision:kpa-art-6-without-edition",
        subject: {
          family: "provision-explanation",
          reference: kpaProvision,
        },
        summary: "Пояснення",
        claims: [
          {
            kind: "statute-text",
            text: "Зміст норми.",
            basis: [{ reference: kpaProvision }],
          },
        ],
        relationships: [],
        review,
        body: {},
      })
    ).toThrow("requires sourceEditionId")
  })

  it("rejects a bare legal citation in authored text", () => {
    expect(() =>
      defineKnowledgeUnit({
        id: "map-topic:bare-citation",
        subject: {
          family: "map-topic",
          reference: { kind: "map-node", nodeId: "bare-citation" },
        },
        summary: "Art. 6 без типізованого посилання.",
        claims: [],
        relationships: [],
        review,
        body: {},
      })
    ).toThrow("Bare legal citation")
  })
})
