import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { caseGuideRoutes } from "~/data/case-guides/routes"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { CaseDeadlineTimeline } from "./case-deadline-timeline"

afterEach(cleanup)

describe("deadline timeline", () => {
  it("keeps suspended office periods separate from applicant deadlines in all eight ordinary cases", () => {
    const ordinary = caseGuideRoutes.filter((route) => route.id !== "cukr")
    expect(ordinary).toHaveLength(8)
    for (const route of ordinary) {
      const office = route.deadlines.filter((deadline) =>
        legalTextPlainText(deadline.law).includes("100d")
      )
      expect(office, route.id).toHaveLength(1)
      const deadline = office[0]!
      const period = legalTextPlainText(deadline.period)
      expect(period, route.id).toContain(
        ["permanent", "long-term-eu"].includes(route.id)
          ? "6 місяців"
          : "60 днів"
      )
      const { container, unmount } = render(
        <MemoryRouter>
          <CaseDeadlineTimeline deadlines={office} stages={route.stages} />
        </MemoryRouter>
      )
      expect(container.textContent).toContain("04.03.2027")
      expect(container.textContent).toContain("30.06.2024")
      expect(container.textContent).toContain("строки заявника")
      expect(
        screen.getByRole("link", { name: /листі MSWiA/ }).getAttribute("href")
      ).toBe(
        "https://bip.brpo.gov.pl/sites/default/files/2026-08/Odpowiedz_MSWiA_cudzoziemcy_legalizacja_pobytu_przewleklosc_30_06_2026.pdf"
      )
      expect(
        route.stages
          .find((stage) => stage.id === "procedure")
          ?.explanation.map(legalTextPlainText)
          .join(" ")
      ).toContain("30.06.2024")
      expect(
        route.deadlines.some(
          (item) =>
            item.stageId === "decision" &&
            legalTextPlainText(item.period).includes("14 днів")
        ),
        route.id
      ).toBe(true)
      unmount()
    }
  })

  it("does not apply the ordinary residence-office suspension to CUKR card issuance", () => {
    const cukr = caseGuideRoutes.find((route) => route.id === "cukr")!
    expect(
      cukr.deadlines.some((deadline) =>
        legalTextPlainText(deadline.law).includes("100d")
      )
    ).toBe(false)
    expect(
      cukr.stages
        .flatMap((stage) => stage.explanation)
        .map(legalTextPlainText)
        .join(" ")
    ).not.toContain("100d")
  })

  it("names stages without skipped numbering and preserves every deadline across all guides", () => {
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
        ).toBe(stage.title)
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
