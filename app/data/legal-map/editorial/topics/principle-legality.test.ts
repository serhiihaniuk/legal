import { describe, expect, it } from "vitest"

import { principleLegalityTopic } from "."
import { legalNodeGuides } from "~/data/legal-map/node-guides"
import { nodeById } from "~/data/legal-map"

describe("principle-legality map topic", () => {
  it("feeds the legacy map projections from one authored unit", () => {
    const node = nodeById.get("principle-legality")

    expect(node?.title).toBe(principleLegalityTopic.body.title)
    expect(node?.summary).toBe(principleLegalityTopic.summary)
    expect(legalNodeGuides["principle-legality"]).toBe(
      principleLegalityTopic.body.guide
    )
  })

  it("keeps its legal basis typed and edition-aware", () => {
    expect(
      principleLegalityTopic.claims.flatMap((claim) =>
        claim.basis.map((basis) => basis.reference)
      )
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          kind: "legal-provision",
          documentId: "kpa",
          provisionId: "kpa-art-6",
          editionId: "kpa-2025-1691",
        }),
        expect.objectContaining({
          kind: "legal-provision",
          documentId: "kpa",
          provisionId: "kpa-art-7",
          editionId: "kpa-2025-1691",
        }),
      ])
    )
  })
})
