import { describe, expect, it } from "vitest"
import { principleLegalityTopic } from "~/data/legal-map/editorial/topics/principle-legality"

import { resolveMapTopicPublication } from "./map-topic-publication"

describe("map-topic publication resolution", () => {
  it("uses the authored unit for the map page publication", () => {
    const publication = resolveMapTopicPublication("principle-legality")

    expect(publication).toMatchObject({
      title: "Законність і факти",
      status: "reviewed",
      summary: principleLegalityTopic.summary,
      unit: {
        id: "map-topic:principle-legality",
        subject: {
          family: "map-topic",
          reference: { kind: "map-node", nodeId: "principle-legality" },
        },
      },
    })
    expect(publication?.guide).toBe(publication?.unit.body.guide)
    expect(publication?.node.id).toBe("principle-legality")
  })

  it("fails closed for a structural node that has not been authored yet", () => {
    expect(resolveMapTopicPublication("praca")).toBeUndefined()
    expect(resolveMapTopicPublication("missing-node")).toBeUndefined()
  })

  it("keeps the merged decision article as the only authored publication", () => {
    expect(resolveMapTopicPublication("decision-workflow")).toBeUndefined()
    const article = resolveMapTopicPublication("decision-reading")?.guide
    expect(article?.kind).toBe("article")
    if (article?.kind !== "article") throw new Error("Missing merged article")
    expect(
      article.sections.find((section) => section.id === "completed-analysis")
        ?.example?.sample?.kind
    ).toBe("letter")
  })
})
