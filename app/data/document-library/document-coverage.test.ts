import { describe, expect, it } from "vitest"
import { allNodes } from "~/data/legal-map"
import { caseGuideRoutes } from "~/data/case-guides/routes"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import { documentById } from "~/data/documents/catalog"
import { documentFormLinks } from "./form-links"
const ids = (value: LegalTextValue) =>
  typeof value === "string"
    ? []
    : value.parts.flatMap((part) =>
        "target" in part && part.target.kind === "evidence-document"
          ? [part.target.documentId]
          : []
      )
describe("document coverage across learning modules", () => {
  it("gives every named map document an explicit guide and a reverse map context", () => {
    for (const node of allNodes)
      for (const mention of node.documents ?? []) {
        const references = ids(mention)
        expect(
          references.length,
          `${node.id}: ${legalTextPlainText(mention)}`
        ).toBeGreaterThan(0)
        for (const id of references)
          expect(
            documentById
              .get(id)
              ?.contexts.some((context) => context.node.id === node.id)
          ).toBe(true)
      }
  })
  it("covers all eleven regulation forms without confusing application and regulation numbering", () => {
    expect(documentFormLinks.map((form) => form.reference.provisionId)).toEqual(
      Array.from(
        { length: 11 },
        (_, i) => `rozporzadzenie-wniosek-pobyt-czasowy-annex-${i + 1}`
      )
    )
    for (const form of documentFormLinks)
      expect(documentById.has(form.documentId)).toBe(true)
    expect(documentFormLinks[0].documentId).toBe("mos-application")
    expect(documentFormLinks[1].documentId).toBe("employment-annex-1")
    expect(documentFormLinks[5].documentId).toBe("study-annex")
  })
  it("uses the application for the actual permit and keeps special forms conditional", () => {
    for (const [routeId, application] of [
      ["cukr", "cukr-application"],
      ["permanent", "permanent-application"],
      ["long-term-eu", "resident-application"],
    ] as const) {
      const route = caseGuideRoutes.find((route) => route.id === routeId)!
      const documentIds = route.documents.flatMap((doc) => ids(doc.item))
      expect(documentIds).toContain(application)
      expect(documentIds).not.toContain("mos-application")
      expect(documentIds).not.toContain("study-annex")
      expect(documentIds).not.toContain("employment-annex-1")
    }
    const family = caseGuideRoutes.find((route) => route.id === "family")!
    for (const id of [
      "family-abroad-application",
      "family-application-consent",
    ])
      expect(
        family.documents.find((doc) =>
          ids(doc.item).some((value) => value === id)
        )?.level
      ).toBe("conditional")
    const blue = caseGuideRoutes.find((route) => route.id === "blue-card")!
    expect(blue.documents.flatMap((doc) => ids(doc.item))).toEqual(
      expect.arrayContaining(["blue-card-annex", "employment-annex-1"])
    )
    const student = caseGuideRoutes.find((route) => route.id === "student")!
    expect(
      student.stages
        .find((stage) => stage.id === "filing")!
        .documents.flatMap((doc) => ids(doc.item))
    ).toContain("study-annex")
  })
  it("places response materials in every procedure stage, with preparation actions kept explicit", () => {
    for (const route of caseGuideRoutes) {
      expect(
        route.stages
          .find((stage) => stage.id === "procedure")!
          .documents.flatMap((doc) => ids(doc.item))
      ).toEqual(
        expect.arrayContaining([
          "response-letter",
          "dispatch-proof",
          "requirements-table",
        ])
      )
      for (const document of [
        ...route.documents,
        ...route.stages.flatMap((stage) => stage.documents),
      ]) {
        if (document.kind === "action") {
          expect(document.guidance).toBeDefined()
          expect(documentById.has(document.guidance!)).toBe(true)
        } else
          expect(
            ids(document.item).length,
            `${route.id}: ${legalTextPlainText(document.item)}`
          ).toBeGreaterThan(0)
      }
    }
  })
})
