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
  it.each(["work", "blue-card", "student", "business"])(
    "keeps the %s register complete and places each document at the relevant stage",
    (routeId) => {
      const route = caseGuideRoutes.find((route) => route.id === routeId)!
      const registerIds = route.documents.flatMap((document) =>
        ids(document.item)
      )
      expect(new Set(registerIds).size).toBe(registerIds.length)
      for (const stage of route.stages) {
        for (const material of stage.materials) {
          if (material.href.startsWith("/map/"))
            expect(
              allNodes.some((node) => node.id === material.href.slice(5)),
              material.href
            ).toBe(true)
        }
        const stageIds = stage.documents.flatMap((document) =>
          ids(document.item)
        )
        expect(new Set(stageIds).size, stage.id).toBe(stageIds.length)
        for (const document of stage.documents) {
          const id = ids(document.item)[0]
          expect(
            route.documents.find((entry) => ids(entry.item).includes(id))
          ).toEqual(document)
          expect(
            documentById
              .get(id)
              ?.caseContexts.some((context) => context.routeId === routeId)
          ).toBe(true)
        }
      }
      const at = (stageId: string) =>
        route.stages
          .find((stage) => stage.id === stageId)!
          .documents.flatMap((document) => ids(document.item))
      expect(at("status")).toContain("status-documents")
      expect(at("filing")).toEqual(
        expect.arrayContaining([
          "mos-application",
          routeId === "student" ? "study-annex" : "employment-annex-1",
          "upo",
        ])
      )
      expect(at("filing")).not.toContain("proceeding-certificate")
      expect(at("filing")).not.toContain("fingerprint-record")
      expect(at("evidence")).toEqual(
        expect.arrayContaining([
          "health-insurance",
          ...(routeId === "student"
            ? ["income-evidence", "housing-evidence", "tuition-payment"]
            : routeId === "business"
              ? [
                  "business-evidence",
                  "employment-contract",
                  "income-evidence",
                  "housing-evidence",
                  "zus-confirmation",
                  "qualification-evidence",
                ]
              : ["zus-confirmation", "qualification-evidence"]),
          "sworn-translation",
        ])
      )
      expect(at("procedure")).toEqual(
        expect.arrayContaining([
          "authority-summons",
          "delivery-proof",
          "proceeding-certificate",
          "fingerprint-record",
        ])
      )
      expect(at("decision")).toEqual(
        expect.arrayContaining(["administrative-decision", "residence-card"])
      )
      expect(
        new Set(
          route.stages.flatMap((stage) =>
            stage.documents.flatMap((document) => ids(document.item))
          )
        )
      ).toEqual(new Set(registerIds))
      if (routeId === "blue-card") {
        expect(at("filing")).toContain("blue-card-annex")
        expect(at("decision")).toContain("blue-card-notification")
        expect(at("filing")).not.toContain("blue-card-notification")
        expect(
          route.documents.find((document) =>
            ids(document.item).includes("blue-card-notification")
          )?.level
        ).toBe("conditional")
      }
      if (routeId === "business") {
        expect(at("status")).toContain("corporate-work-permit")
        expect(at("decision")).toContain("temporary-residence-notification")
        expect(at("filing")).not.toContain("temporary-residence-notification")
        for (const id of [
          "employment-annex-1",
          "crbr-information",
          "corporate-work-permit",
          "employment-contract",
          "qualification-evidence",
        ] as const)
          expect(
            route.documents.find((entry) => ids(entry.item).includes(id))?.level
          ).toBe("conditional")
      }
      if (routeId === "student") {
        expect(at("filing")).not.toContain("study-progress")
        expect(at("filing")).not.toContain("temporary-residence-notification")
        expect(at("decision")).toContain("temporary-residence-notification")
        for (const id of [
          "study-confirmation",
          "study-progress",
          "tuition-payment",
          "temporary-residence-notification",
        ] as const)
          expect(
            route.documents.find((entry) => ids(entry.item).includes(id))?.level
          ).toBe("conditional")
      }
    }
  )
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
  it("connects missed-deadline evidence to the relevant case stages without making it universally required", () => {
    const evidence = documentById.get("deadline-obstacle")!
    for (const route of caseGuideRoutes) {
      for (const documents of [
        route.documents,
        ...route.stages
          .filter((stage) => ["procedure", "decision"].includes(stage.id))
          .map((stage) => stage.documents),
      ]) {
        const requirement = documents.find((doc) =>
          ids(doc.item).includes("deadline-obstacle")
        )
        expect(requirement?.level, route.id).toBe("conditional")
      }
      expect(
        evidence.caseContexts.some((context) => context.routeId === route.id)
      ).toBe(true)
    }
  })
})
