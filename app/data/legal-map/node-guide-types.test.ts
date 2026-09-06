import { describe, expect, it } from "vitest"
import { defineLegalMapArticle, type LegalMapArticle } from "./node-guide-types"

const article: LegalMapArticle = {
  kind: "article",
  introduction: ["Вступ"],
  sections: [{ id: "first", title: "Пояснення", paragraphs: ["Зміст"] }],
}

describe("map article authoring", () => {
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
