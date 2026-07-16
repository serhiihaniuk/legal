import { fireEvent, render, screen, within } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import {
  defineDocumentHeadings,
  DocumentArticle,
  DocumentHeader,
  tableOfContentsFromHeadings,
} from "./document-content"
import { DefinitionRowGrid, DefinitionRows } from "./definition-rows"
import {
  MobileSectionSelect,
  SectionNavigationList,
} from "./section-navigation"

describe("shared document patterns", () => {
  it("derives table-of-contents entries from the rendered heading model", () => {
    const headings = defineDocumentHeadings({
      overview: { id: "overview", title: "Огляд", tocLabel: "Про сторінку" },
      details: { id: "details", title: "Деталі", depth: 3 },
    })

    expect(tableOfContentsFromHeadings(headings)).toEqual([
      { href: "#overview", label: "Про сторінку" },
      { href: "#details", label: "Деталі", depth: 3 },
    ])
  })

  it("preserves article, header, and definition-list semantics", () => {
    const { container } = render(
      <DocumentArticle width="grow">
        <DocumentHeader badges={<span>Перевірено</span>}>
          <h1>Назва</h1>
        </DocumentHeader>
        <DefinitionRows
          items={[{ id: "act", term: "Акт", description: "KPA" }]}
        />
        <DefinitionRowGrid
          items={[
            { id: "fact", term: "Факт", description: "Подання" },
            { id: "effect", term: "Наслідок", description: "Wezwanie" },
          ]}
        />
      </DocumentArticle>
    )

    expect(container.querySelector("article.typeset-docs.flex-1")).toBeTruthy()
    expect(screen.getByRole("heading", { name: "Назва" })).toBeTruthy()
    expect(screen.getAllByRole("term")).toHaveLength(3)
    expect(screen.getAllByRole("definition")).toHaveLength(3)
  })

  it("uses one option model for sidebar and mobile selection", () => {
    const onValueChange = vi.fn()
    const options = [
      { value: "first", label: "Перший" },
      { value: "second", label: "Другий" },
    ] as const

    render(
      <>
        <SectionNavigationList
          options={options}
          value="first"
          onValueChange={onValueChange}
        />
        <MobileSectionSelect
          label="Розділ"
          options={options}
          value="first"
          onValueChange={onValueChange}
        />
      </>
    )

    fireEvent.click(screen.getByRole("button", { name: "Другий" }))
    fireEvent.change(screen.getByLabelText("Розділ"), {
      target: { value: "second" },
    })

    expect(onValueChange).toHaveBeenNthCalledWith(1, "second")
    expect(onValueChange).toHaveBeenNthCalledWith(2, "second")
    expect(
      within(screen.getByLabelText("Розділ")).getAllByRole("option")
    ).toHaveLength(2)
  })
})
