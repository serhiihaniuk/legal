import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { studyModules } from "~/data/study/plan-data"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { getEvidenceDocument } from "~/data/document-library/query"
import { studyPlanToc } from "../model/study-toc"
import { StudyPlanContent } from "./study-plan-content"

afterEach(cleanup)

describe("reading guide", () => {
  it("keeps every explanation and example on its own page with reachable section links", () => {
    for (const module of studyModules) {
      const { container, unmount } = render(
        <MemoryRouter>
          <StudyPlanContent module={module} />
        </MemoryRouter>
      )
      expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
        module.title
      )
      expect(container.textContent).toContain(
        legalTextPlainText(module.summary)
      )
      for (const section of module.sections)
        for (const paragraph of section.paragraphs)
          expect(
            container.querySelector(`#study-${section.id}`)?.textContent
          ).toContain(legalTextPlainText(paragraph))
      for (const paragraph of module.example.paragraphs)
        expect(
          container.querySelector("#study-example")?.textContent
        ).toContain(legalTextPlainText(paragraph))
      for (const entry of studyPlanToc(module))
        expect(
          container.querySelectorAll(entry.href),
          `${module.id}: ${entry.href}`
        ).toHaveLength(1)
      expect(container.querySelector("#study-material")).not.toBeNull()
      if (module.example.fragment) {
        const fragment = container.querySelector(
          `figure [lang="${module.example.fragment.language}"]`
        )
        for (const line of module.example.fragment.lines)
          expect(fragment?.textContent).toContain(line)
      }
      unmount()
    }
  })

  it("links directly to existing evidence documents and identifies adjacent topics", () => {
    for (const [index, module] of studyModules.entries()) {
      const { container, unmount } = render(
        <MemoryRouter>
          <StudyPlanContent module={module} />
        </MemoryRouter>
      )
      for (const item of module.reading) {
        expect(
          screen
            .getByRole("link", { name: new RegExp(item.label) })
            .getAttribute("href")
        ).toBe(item.href)
        if (item.href.startsWith("/documents/"))
          expect(
            getEvidenceDocument(item.href.slice("/documents/".length)),
            item.href
          ).toBeDefined()
      }
      const adjacent = within(
        screen.getByRole("navigation", { name: "Інші питання путівника" })
      ).getAllByRole("link")
      const expected = [
        studyModules[index - 1],
        studyModules[index + 1],
      ].filter((item) => item !== undefined)
      expect(adjacent.map((link) => link.getAttribute("href"))).toEqual(
        expected.map((item) => `/study?module=${item.id}`)
      )
      for (const [linkIndex, item] of expected.entries())
        expect(adjacent[linkIndex].textContent).toContain(item.title)
      const sourceLinks = container.querySelectorAll(
        '#study-sources a[href^="https://"]'
      )
      expect(sourceLinks).toHaveLength(module.sources.length)
      unmount()
    }
  })
})
