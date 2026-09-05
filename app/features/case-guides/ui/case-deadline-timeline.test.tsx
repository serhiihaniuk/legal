import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { caseGuideRoutes } from "~/data/case-guides/routes"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { CaseDeadlineTimeline } from "./case-deadline-timeline"

afterEach(cleanup)

describe("deadline timeline", () => {
  it("groups every deadline by its case stage without losing any field", () => {
    for (const route of caseGuideRoutes) {
      const { unmount } = render(
        <MemoryRouter>
          <CaseDeadlineTimeline
            deadlines={route.deadlines}
            stages={route.stages}
          />
        </MemoryRouter>
      )
      const timeline = screen.getByRole("list", {
        name: "Строки за етапами справи",
      })
      const groups = [...timeline.children]
      const expected = route.stages.filter((stage) =>
        route.deadlines.some((deadline) => deadline.stageId === stage.id)
      )
      expect(groups.length).toBe(expected.length)
      expected.forEach((stage, index) => {
        const group = groups[index] as HTMLElement
        expect(
          within(group).getByRole("heading", { level: 4 }).textContent
        ).toContain(stage.title)
        const rows = [...group.querySelectorAll("ul > li")]
        const deadlines = route.deadlines.filter(
          (deadline) => deadline.stageId === stage.id
        )
        expect(rows.length).toBe(deadlines.length)
        deadlines.forEach((deadline, rowIndex) => {
          const row = rows[rowIndex]!
          for (const field of [
            deadline.action,
            deadline.period,
            deadline.trigger,
            deadline.consequence,
            deadline.law,
          ]) {
            expect(row.textContent).toContain(legalTextPlainText(field))
          }
        })
      })
      unmount()
    }
  })
})
