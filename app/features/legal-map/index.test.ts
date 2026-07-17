import { describe, expect, it } from "vitest"

import { legalMapJourney } from "~/data/legal-map/journey"

import {
  legalMapNodeToc,
  legalMapOverviewToc,
  resolveLegalMapNode,
  stageForNode,
} from "."

describe("legal-map public API", () => {
  it("resolves canonical nodes, stages, and conditional node sections", () => {
    const node = resolveLegalMapNode("start-case")
    expect(node?.id).toBe("start-case")
    expect(stageForNode(node)).toBe("orientation")
    expect(resolveLegalMapNode("missing-node")).toBeUndefined()

    if (!node) return
    const toc = legalMapNodeToc(node)
    expect(toc[0]).toEqual({
      href: "#node-overview",
      label: "Що це і де в справі",
    })
    expect(toc.at(-1)).toEqual({
      href: "#node-regulation",
      label: "Правова основа",
    })
    expect(toc.some((item) => item.href === "#node-materials")).toBe(
      Boolean(node.documents?.length || node.checkpoints?.length)
    )
  })

  it("derives overview navigation from the journey registry", () => {
    expect(legalMapOverviewToc).toHaveLength(legalMapJourney.length + 1)
    expect(legalMapOverviewToc.at(-1)).toEqual({
      href: `#stage-${legalMapJourney.at(-1)?.id}`,
      label: `${legalMapJourney.at(-1)?.order}. ${legalMapJourney.at(-1)?.title}`,
    })
  })
})
