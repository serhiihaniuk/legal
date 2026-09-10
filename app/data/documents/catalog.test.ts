import { describe, expect, it } from "vitest"
import { caseGuideRoutes } from "~/data/case-guides/routes"
import { unwrapCaseGuideDocument } from "~/data/case-guides/document-use"
import { documentById, documentCatalog } from "./catalog"

describe("document context projection", () => {
  it("resolves every explicitly authored guide document and derives its backlink", () => {
    for (const route of caseGuideRoutes) {
      for (const document of [
        ...route.documents,
        ...route.stages.flatMap((stage) =>
          stage.documents.map(unwrapCaseGuideDocument)
        ),
      ]) {
        if (typeof document.item === "string") continue
        for (const part of document.item.parts) {
          if (!("target" in part) || part.target.kind !== "evidence-document")
            continue
          const entry = documentById.get(part.target.documentId)
          expect(entry, part.target.documentId).toBeDefined()
          expect(
            entry!.caseContexts.some((context) => context.routeId === route.id)
          ).toBe(true)
        }
      }
    }
    for (const entry of documentCatalog) {
      expect(entry.caseContexts.length).toBe(
        new Set(entry.caseContexts.map((context) => context.routeId)).size
      )
    }
  })

  it("connects travel history to every route and resolves the student's selected evidence", () => {
    expect(
      documentById
        .get("stay-history")!
        .caseContexts.map((context) => context.routeId)
        .sort()
    ).toEqual(caseGuideRoutes.map((route) => route.id).sort())
    expect(
      documentById
        .get("bank-funds-certificate")!
        .caseContexts.some((context) => context.routeId === "student")
    ).toBe(true)
    expect(
      documentById
        .get("health-insurance")!
        .caseContexts.some((context) => context.routeId === "student")
    ).toBe(true)
  })
})
