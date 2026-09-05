import { describe, expect, it } from "vitest"
import { lawCatalogGuides, provisionCountLabel } from "./catalog-guide"
import {
  listDocuments,
  getDocumentReadingGuide,
  getDocumentHomePath,
} from "./index"
import { loader } from "~/routes/law-document-practice"

describe("law catalog and legacy example routes", () => {
  it("covers every available act once and keeps old example URLs useful", () => {
    expect(lawCatalogGuides.map((item) => item.id).sort()).toEqual(
      listDocuments()
        .map((item) => item.id)
        .sort()
    )
    for (const document of listDocuments().filter(
      (item) => item.id !== "kpa"
    )) {
      expect(getDocumentReadingGuide(document.id)?.caseExample).toBeTruthy()
      const response = loader({
        params: { documentId: document.id, practiceId: "case-workflow" },
        request: new Request("http://localhost"),
        context: {},
        url: new URL("http://localhost"),
        pattern: "/law/:documentId/practice/:practiceId",
      })
      expect(response.status).toBe(302)
      expect(response.headers.get("Location")).toBe(
        getDocumentHomePath(document.id) + "#legal-learning-example"
      )
    }
  })
  it("rejects invalid bookmarked modules instead of silently redirecting", () => {
    expect(() =>
      loader({
        params: { documentId: "ppsa", practiceId: "unknown" },
        request: new Request("http://localhost"),
        context: {},
        url: new URL("http://localhost"),
        pattern: "/law/:documentId/practice/:practiceId",
      })
    ).toThrow()
  })
  it("distinguishes annexes and paragraphs from articles", () => {
    expect(provisionCountLabel(1, "annex")).toBe("1 додаток")
    expect(provisionCountLabel(9, "paragraph")).toBe("9 параграфів")
    expect(provisionCountLabel(306, "article")).toBe("306 статей")
    expect(provisionCountLabel(20)).toBe("20 положень")
  })
})
