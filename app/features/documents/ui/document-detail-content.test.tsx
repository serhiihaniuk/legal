import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { documentById, documentCatalog } from "~/data/documents/catalog"
import { documentDetailToc } from "../model/document-catalog-model"
import { DocumentDetailContent } from "./document-detail-content"
import { DocumentCatalogOverview } from "./document-catalog-overview"

afterEach(cleanup)

describe("document explanations", () => {
  it("renders every authored section and example at a reachable table-of-contents anchor", () => {
    for (const document of documentCatalog) {
      const { container, unmount } = render(
        <MemoryRouter>
          <DocumentDetailContent document={document} />
        </MemoryRouter>
      )
      for (const entry of documentDetailToc(document)) {
        expect(
          container.querySelector(entry.href),
          `${document.id}: ${entry.href}`
        ).not.toBeNull()
      }
      for (const section of document.guide.explanation ?? []) {
        expect(
          screen.getByRole("heading", { name: section.title })
        ).toBeTruthy()
        if (section.example)
          expect(
            screen.getByRole("heading", { name: section.example.title })
          ).toBeTruthy()
      }
      unmount()
    }
  })

  it("keeps the passport concise and gives travel history completed reasoning", () => {
    const passport = documentById.get("passport")!
    expect(passport.guide.explanation).toBeUndefined()
    const history = documentById.get("stay-history")!
    render(
      <MemoryRouter>
        <DocumentDetailContent document={history} />
      </MemoryRouter>
    )
    expect(screen.getByText("18.05.2025")).toBeTruthy()
    expect(
      screen.getByText(
        /точна дата ще не встановлена|Фактична дата ще не встановлена/
      )
    ).toBeTruthy()
    expect(screen.getByText(/Робочий підсумок становить 4/)).toBeTruthy()
  })

  it("shows form requirements even when no obtain instructions are authored", () => {
    const photo = documentById.get("digital-photo")!
    expect(photo.guide.howToObtain).toBeUndefined()
    const { container } = render(
      <MemoryRouter>
        <DocumentDetailContent document={photo} />
      </MemoryRouter>
    )
    expect(container.querySelector("#document-obtain")?.textContent).toContain(
      "Параметри фотографії"
    )
    expect(
      documentDetailToc(photo).some(
        (entry) => entry.href === "#document-obtain"
      )
    ).toBe(true)
  })

  it("renders complete, labelled specimens without dropping table cells or letter paragraphs", () => {
    for (const document of documentCatalog) {
      const samples = (document.guide.explanation ?? []).flatMap((section) =>
        section.example?.sample ? [section.example.sample] : []
      )
      if (!samples.length) continue
      const { container, unmount } = render(
        <MemoryRouter>
          <DocumentDetailContent document={document} />
        </MemoryRouter>
      )
      for (const sample of samples) {
        if (sample.kind === "table") {
          const table = screen.getByRole("table", { name: sample.title })
          expect(within(table).getAllByRole("columnheader")).toHaveLength(
            sample.columns.length
          )
          expect(within(table).getAllByRole("row")).toHaveLength(
            sample.rows.length + 1
          )
          for (const row of sample.rows)
            expect(row.cells, `${document.id}: ${row.id}`).toHaveLength(
              sample.columns.length
            )
          expect(within(table).getAllByRole("cell")).toHaveLength(
            sample.columns.length * sample.rows.length
          )
          expect(
            screen.getByRole("region", { name: sample.title }).tabIndex
          ).toBe(0)
        } else {
          const letter = container.querySelector(
            `figure [lang="${sample.language}"]`
          )
          expect(letter).not.toBeNull()
          for (const paragraph of sample.paragraphs)
            expect(letter?.textContent).toContain(paragraph)
        }
        expect(screen.getByText(sample.note)).toBeTruthy()
      }
      unmount()
    }
  })

  it("offers native links in each catalog category", () => {
    const { container } = render(
      <MemoryRouter>
        <DocumentCatalogOverview category="all" />
      </MemoryRouter>
    )
    for (const document of documentCatalog) {
      expect(
        container.querySelector(`a[href="/documents/${document.id}"]`)
      ).not.toBeNull()
    }
    expect(
      screen.getByRole("heading", { name: "Навчання, мова і кваліфікації" })
    ).toBeTruthy()
  })
})
