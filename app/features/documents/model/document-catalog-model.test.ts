import { describe, expect, it } from "vitest"

import { documentById } from "~/data/documents/catalog"

import {
  categoryNavigationOptions,
  documentCatalogToc,
  documentDetailToc,
  pluralizeUkrainian,
} from "./document-catalog-model"

describe("document catalog model", () => {
  it("keeps the overview table of contents stable", () => {
    expect(documentCatalogToc).toEqual([
      { href: "#documents-overview", label: "Що є в каталозі" },
      { href: "#documents-list", label: "Усі документи" },
    ])
  })

  it("derives the detail table of contents from document data", () => {
    const document = documentById.get("passport")
    expect(document).toBeDefined()

    expect(documentDetailToc(document!)).toEqual([
      { href: "#document-overview", label: "Що це за документ" },
      { href: "#document-purpose", label: "Роль і межі доказу" },
      { href: "#document-elements", label: "Як перевіряти" },
      { href: "#document-contexts", label: "Де використовується" },
      { href: "#document-regulation", label: "Правове регулювання" },
      { href: "#document-sources", label: "Офіційні джерела" },
    ])

    const zusDocument = documentById.get("zus-confirmation")
    expect(zusDocument).toBeDefined()
    expect(documentDetailToc(zusDocument!).map((item) => item.href)).toContain(
      "#document-obtain"
    )
  })

  it("keeps category options and Ukrainian plural forms deterministic", () => {
    expect(categoryNavigationOptions[0]).toEqual({
      value: "all",
      label: "Усі документи",
    })
    expect(pluralizeUkrainian(1, ["сторінка", "сторінки", "сторінок"])).toBe(
      "1 сторінка"
    )
    expect(pluralizeUkrainian(4, ["сторінка", "сторінки", "сторінок"])).toBe(
      "4 сторінки"
    )
    expect(pluralizeUkrainian(18, ["сторінка", "сторінки", "сторінок"])).toBe(
      "18 сторінок"
    )
  })
})
