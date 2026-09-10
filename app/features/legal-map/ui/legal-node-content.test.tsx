// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { allNodes, nodeById } from "~/data/legal-map"
import { resolveMapTopicPublication } from "~/data/legal-knowledge"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { legalMapNodeToc } from "../model/legal-map-model"
import { LegalNodeContent } from "./legal-node-content"

afterEach(cleanup)

describe("map article contents", () => {
  it("preserves the complete worked examples, letters and tables in map articles", () => {
    for (const id of ["wezwanie", "wezwanie-workflow"]) {
      const node = nodeById.get(id)
      const guide = resolveMapTopicPublication(id)?.guide
      if (!node || guide?.kind !== "article")
        throw new Error(`Missing article: ${id}`)
      expect(node.related).toContain("evidence-matrix")
      const { container, unmount } = render(
        <MemoryRouter>
          <LegalNodeContent
            node={node}
            onNodeSelect={() => {}}
            onOverviewSelect={() => {}}
          />
        </MemoryRouter>
      )
      const examples = guide.sections.flatMap((section) =>
        section.example ? [section.example] : []
      )
      expect(examples.length).toBeGreaterThan(0)
      for (const example of examples) {
        for (const text of [
          ...example.facts,
          ...example.reasoning,
          example.conclusion,
        ]) {
          expect(container.textContent).toContain(legalTextPlainText(text))
        }
        const sample = example.sample
        if (!sample) throw new Error("Missing specimen")
        const figure = Array.from(container.querySelectorAll("figure")).find(
          (element) =>
            element
              .querySelector("figcaption")
              ?.textContent?.includes(sample.title)
        )
        expect(figure?.textContent).toContain(sample.note)
        if (sample.kind === "letter") {
          expect(
            figure?.querySelector(`[lang=${sample.language}]`)
          ).not.toBeNull()
          for (const paragraph of sample.paragraphs)
            expect(figure?.textContent).toContain(paragraph)
        } else {
          expect(
            figure?.querySelector('[role="region"]')?.getAttribute("tabindex")
          ).toBe("0")
          expect(figure?.querySelectorAll("tbody tr").length).toBe(
            sample.rows.length
          )
          for (const row of sample.rows)
            for (const cell of row.cells)
              expect(figure?.textContent).toContain(legalTextPlainText(cell))
        }
        for (const row of example.rows ?? []) {
          expect(container.textContent).toContain(
            legalTextPlainText(row.evidence)
          )
          expect(container.textContent).toContain(
            legalTextPlainText(row.meaning)
          )
        }
      }
      unmount()
    }
  })

  it("renders authored sections and matching contents without the legacy template", () => {
    const articles = allNodes.filter(
      (node) => resolveMapTopicPublication(node.id)?.guide.kind === "article"
    )
    expect(articles.length).toBeGreaterThan(0)
    for (const node of articles) {
      const { container, unmount } = render(
        <MemoryRouter>
          <LegalNodeContent
            node={node}
            onNodeSelect={() => {}}
            onOverviewSelect={() => {}}
          />
        </MemoryRouter>
      )
      for (const item of legalMapNodeToc(node)) {
        expect(container.querySelector(item.href), item.href).not.toBeNull()
      }
      const sections = container.querySelectorAll(
        'section[id^="node-section-"]'
      )
      expect(sections.length).toBeGreaterThan(0)
      for (const section of sections) {
        const title = section.querySelector("h2")?.textContent
        expect(
          legalMapNodeToc(node).find((item) => item.href === `#${section.id}`)
            ?.label
        ).toBe(title)
      }
      expect(container.querySelector("#node-model")).toBeNull()
      expect(container.querySelector("#node-workflow")).toBeNull()
      expect(container.textContent).not.toContain("[object Object]")
      unmount()
    }
  })

  it("preserves not-yet-migrated article content during the rewrite", () => {
    const node = nodeById.get("legal-anatomy")
    if (!node) throw new Error("Missing legal-anatomy fixture")
    const { container } = render(
      <MemoryRouter>
        <LegalNodeContent
          node={node}
          onNodeSelect={() => {}}
          onOverviewSelect={() => {}}
        />
      </MemoryRouter>
    )
    expect(container.querySelector("#node-model")?.textContent).toContain(
      "Що регулює"
    )
    expect(container.querySelector("#node-workflow")).not.toBeNull()
    for (const item of legalMapNodeToc(node))
      expect(container.querySelector(item.href)).not.toBeNull()
  })
})
