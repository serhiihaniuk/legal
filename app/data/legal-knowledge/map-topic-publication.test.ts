import { describe, expect, it } from "vitest"

import { resolveMapTopicPublication } from "./map-topic-publication"

describe("map-topic publication resolution", () => {
  it("uses the authored unit for the map page publication", () => {
    const publication = resolveMapTopicPublication("principle-legality")

    expect(publication).toMatchObject({
      title: "Законність і факти",
      status: "reviewed",
      summary:
        "Organ діє на підставі права та вживає дій для точного з’ясування фактичного стану.",
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
    expect(resolveMapTopicPublication("document-matrix")).toBeUndefined()
    expect(resolveMapTopicPublication("missing-node")).toBeUndefined()
  })
})
