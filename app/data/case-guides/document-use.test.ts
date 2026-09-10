import { describe, expect, it } from "vitest"
import {
  isCaseGuideDocumentUse,
  unwrapCaseGuideDocument,
  documentUse,
} from "./document-use"
import type { CaseGuideDocument } from "./types"

const document: CaseGuideDocument = {
  item: "Документ",
  level: "required",
  status: "потрібний доказ",
  owner: "Заявник",
  proves: "Факт",
  law: "Правова роль",
}

describe("stage document use", () => {
  it("preserves one document definition across separately authored actions", () => {
    const submit = documentUse(document, "submit", "Додайте до заяви.")
    const review = documentUse(
      document,
      "review",
      "Використайте наявне у справі."
    )
    expect(isCaseGuideDocumentUse(submit)).toBe(true)
    expect(isCaseGuideDocumentUse(document)).toBe(false)
    expect(unwrapCaseGuideDocument(submit)).toBe(document)
    expect(unwrapCaseGuideDocument(review)).toBe(document)
    expect(unwrapCaseGuideDocument(document)).toBe(document)
    expect(document).not.toHaveProperty("action")
  })

  it("rejects an action without an explanation of this use", () => {
    expect(() => documentUse(document, "update", "  ")).toThrow(
      "A stage document use needs an explicit instruction."
    )
  })
})
