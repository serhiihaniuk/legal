import { describe, expect, it } from "vitest"
import { allNodes } from "./index"
import {
  legalMapChapters,
  legalMapChapterForHash,
  legalMapChapterForNode,
  legalMapChapterNodes,
  legalMapCompatibilityDestinations,
  legalMapTopicCount,
} from "./journey"

describe("map contents ownership", () => {
  it("assigns every authored node once or gives it a compatibility destination", () => {
    const ids = legalMapChapters.flatMap((chapter) => chapter.nodeIds)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids).toHaveLength(legalMapTopicCount)
    expect(
      [...ids, ...legalMapCompatibilityDestinations.keys()].sort()
    ).toEqual(allNodes.map((node) => node.id).sort())
    for (const chapter of legalMapChapters) {
      expect(legalMapChapterNodes(chapter).map((node) => node.id)).toEqual(
        chapter.nodeIds
      )
    }
  })

  it("keeps old anchors while separating present status, routes and procedural remedies", () => {
    expect(legalMapChapterForHash("#stage-evidence")?.order).toBe(5)
    expect(legalMapChapterForHash("#stage-filing")?.order).toBe(6)
    expect(legalMapChapterForNode("pending-stay")?.id).toBe("status")
    expect(legalMapChapterForNode("cukr-route-2026")?.id).toBe("route")
    expect(legalMapChapterForNode("evidence-matrix")?.id).toBe("filing")
    expect(legalMapChapterForNode("principle-two-instance")?.id).toBe(
      "protection"
    )
    expect(legalMapChapterForNode("missing")).toBeUndefined()
    expect(legalMapChapterForHash("#stage-missing")).toBeUndefined()
  })
})
