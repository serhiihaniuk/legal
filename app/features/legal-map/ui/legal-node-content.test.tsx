// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { allNodes, nodeById } from "~/data/legal-map"
import { resolveMapTopicPublication } from "~/data/legal-knowledge"
import { legalMapNodeToc } from "../model/legal-map-model"
import { LegalNodeContent } from "./legal-node-content"

afterEach(cleanup)

describe("map article contents", () => {
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
    const node = nodeById.get("start-case")
    if (!node) throw new Error("Missing start-case fixture")
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
