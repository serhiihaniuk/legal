import { describe, expect, it } from "vitest"
import { defineLegalMapArticle, type LegalMapArticle } from "./node-guide-types"

const article: LegalMapArticle = {
  kind: "article",
  introduction: ["Вступ"],
  sections: [{ id: "first", title: "Пояснення", paragraphs: ["Зміст"] }],
}

describe("map article authoring", () => {
  it("rejects unfinished examples and malformed document specimens", () => {
    const example = {
      title: "Приклад",
      facts: ["Факт"],
      reasoning: ["Пояснення"],
      conclusion: "Висновок",
    }
    const withExample = (
      value: (typeof article.sections)[number]["example"]
    ) => ({
      ...article,
      sections: [{ ...article.sections[0], example: value }],
    })
    expect(() =>
      defineLegalMapArticle(withExample({ ...example, reasoning: [] }))
    ).toThrow("Incomplete")
    expect(() =>
      defineLegalMapArticle(
        withExample({
          ...example,
          sample: {
            kind: "letter",
            title: "Лист",
            note: " ",
            language: "pl",
            paragraphs: ["Treść"],
          },
        })
      )
    ).toThrow("Unlabelled")
    expect(() =>
      defineLegalMapArticle(
        withExample({
          ...example,
          sample: {
            kind: "table",
            title: "Таблиця",
            note: "Умовний приклад",
            columns: ["Вимога", "Доказ"],
            rows: [{ id: "one", cells: ["Тільки одна клітинка"] }],
          },
        })
      )
    ).toThrow("Invalid map sample table")
  })

  it("rejects duplicate or unusable section anchors", () => {
    expect(() =>
      defineLegalMapArticle({
        ...article,
        sections: [...article.sections, ...article.sections],
      })
    ).toThrow("duplicate")
    expect(() =>
      defineLegalMapArticle({
        ...article,
        sections: [{ ...article.sections[0], id: "bad anchor" }],
      })
    ).toThrow("Invalid")
  })

  it("rejects empty sections and blank paragraphs before publication", () => {
    expect(() => defineLegalMapArticle({ ...article, sections: [] })).toThrow(
      "sections"
    )
    expect(() =>
      defineLegalMapArticle({
        ...article,
        sections: [{ ...article.sections[0], paragraphs: [] }],
      })
    ).toThrow("Empty")
    expect(() =>
      defineLegalMapArticle({ ...article, introduction: [" "] })
    ).toThrow("paragraph")
  })
})
