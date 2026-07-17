import { describe, expect, it } from "vitest"

import { getCaseGuideRoute } from "~/data/case-guides/routes"

import {
  caseStudySectionIds,
  caseStudyStageNavigation,
  caseStudyTableOfContents,
  caseStudyToc,
} from "."

describe("case-guides public API", () => {
  it("inserts route stages into the stable section table of contents", () => {
    const route = getCaseGuideRoute("cukr")
    const stageNavigation = caseStudyStageNavigation(route)
    const tableOfContents = caseStudyTableOfContents(route)
    const stagesIndex = tableOfContents.findIndex(
      (item) => item.href === `#${caseStudySectionIds.stages}`
    )

    expect(stageNavigation).toHaveLength(route.stages.length)
    expect(tableOfContents.slice(stagesIndex + 1, stagesIndex + 3)).toEqual([
      { ...stageNavigation[0], depth: 3 },
      { ...stageNavigation[1], depth: 3 },
    ])
    expect(tableOfContents.at(-1)).toEqual(caseStudyToc.at(-1))
  })
})
