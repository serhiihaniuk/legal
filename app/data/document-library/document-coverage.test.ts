import { describe, expect, it } from "vitest"
import { allNodes } from "~/data/legal-map"
import { caseGuideRoutes as authoredCaseGuideRoutes } from "~/data/case-guides/routes"
import {
  isCaseGuideDocumentUse,
  unwrapCaseGuideDocument,
} from "~/data/case-guides/document-use"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import { documentById } from "~/data/documents/catalog"
import { documentFormLinks } from "./form-links"

const caseGuideRoutes = authoredCaseGuideRoutes.map((route) => ({
  ...route,
  stages: route.stages.map((stage) => ({
    ...stage,
    documents: stage.documents.map(unwrapCaseGuideDocument),
  })),
}))

const ids = (value: LegalTextValue) =>
  typeof value === "string"
    ? []
    : value.parts.flatMap((part) =>
        "target" in part && part.target.kind === "evidence-document"
          ? [part.target.documentId]
          : []
      )
describe("document coverage across learning modules", () => {
  it("requires explicit document actions throughout migrated case guides", () => {
    for (const route of authoredCaseGuideRoutes) {
      for (const stage of route.stages) {
        for (const entry of stage.documents) {
          if (!["long-term-eu", "work", "blue-card"].includes(route.id))
            continue
          expect(isCaseGuideDocumentUse(entry), stage.id).toBe(true)
          if (!isCaseGuideDocumentUse(entry)) continue
          expect(
            legalTextPlainText(entry.instruction).trim().length
          ).toBeGreaterThan(0)
          expect(route.documents).toContain(entry.document)
        }
      }
    }
  })

  it("keeps one resident backlink for repeated uses of each specific evidence document", () => {
    for (const id of [
      "employment-income-certificate",
      "tax-income-certificate",
      "bank-statement",
      "zus-insurance-history",
      "zus-health-registration",
    ] as const) {
      const contexts = documentById
        .get(id)
        ?.caseContexts.filter((context) => context.routeId === "long-term-eu")
      expect(contexts, id).toHaveLength(1)
      expect(contexts![0]).toHaveProperty("item")
      expect(contexts![0]).not.toHaveProperty("instruction")
      expect(contexts![0]).not.toHaveProperty("action")
    }
  })

  it("names the work example's evidence without turning optional payment checks into filing requirements", () => {
    const route = authoredCaseGuideRoutes.find((route) => route.id === "work")!
    const registerIds = route.documents.flatMap((document) =>
      ids(document.item)
    )
    for (const collection of [
      "status-documents",
      "zus-confirmation",
      "income-evidence",
      "qualification-evidence",
      "business-evidence",
    ]) {
      expect(registerIds).not.toContain(collection)
    }
    const filing = route.stages.find((stage) => stage.id === "filing")!
    const contractDocuments = route.documents.filter((entry) =>
      ids(entry.item).includes("employment-contract")
    )
    expect(contractDocuments).toHaveLength(2)
    expect(
      new Set(contractDocuments.map((entry) => legalTextPlainText(entry.item)))
        .size
    ).toBe(2)
    for (const document of contractDocuments) {
      const use = filing.documents.find(
        (entry) => unwrapCaseGuideDocument(entry) === document
      )!
      expect(isCaseGuideDocumentUse(use)).toBe(true)
      if (isCaseGuideDocumentUse(use)) expect(use.action).toBe("submit")
    }
    for (const id of ["payroll-statement", "bank-statement"] as const) {
      const document = route.documents.find((entry) =>
        ids(entry.item).includes(id)
      )!
      expect(document, id).toBeDefined()
      expect(document.level, id).toBe("conditional")
      expect(filing.documents.map(unwrapCaseGuideDocument)).not.toContain(
        document
      )
      expect(
        documentById
          .get(id)
          ?.caseContexts.filter((context) => context.routeId === "work")
      ).toHaveLength(1)
    }
    const insurance = route.documents.find((entry) =>
      ids(entry.item).includes("zus-health-registration")
    )!
    expect(insurance).toBeDefined()
    expect(insurance.level).not.toBe("required")
    expect(
      route.stages
        .find((stage) => stage.id === "procedure")!
        .documents.map(unwrapCaseGuideDocument)
    ).toContain(insurance)
    for (const stage of route.stages) {
      const references = stage.documents.flatMap((entry) =>
        ids(unwrapCaseGuideDocument(entry).item)
      )
      expect(references).not.toContain("zus-insurance-history")
      expect(references).not.toContain("tax-income-certificate")
    }
  })

  it("selects the Blue Card example's experience letters and keeps payment checks conditional", () => {
    const route = authoredCaseGuideRoutes.find(
      (route) => route.id === "blue-card"
    )!
    const registerIds = route.documents.flatMap((document) =>
      ids(document.item)
    )
    for (const collection of [
      "status-documents",
      "qualification-evidence",
      "income-evidence",
      "zus-confirmation",
    ]) {
      expect(registerIds).not.toContain(collection)
    }
    const experience = route.documents.filter((document) =>
      ids(document.item).includes("professional-experience-confirmation")
    )
    expect(experience).toHaveLength(2)
    expect(
      new Set(experience.map((document) => legalTextPlainText(document.item)))
        .size
    ).toBe(2)
    const filing = route.stages.find((stage) => stage.id === "filing")!
    const response = route.stages.find((stage) => stage.id === "procedure")!
    const submitted = (stage: typeof filing) =>
      stage.documents
        .filter(isCaseGuideDocumentUse)
        .filter((use) => use.action === "submit")
        .map((use) => use.document)
    const initialLetters = submitted(filing).filter((document) =>
      experience.includes(document)
    )
    const responseLetters = submitted(response).filter((document) =>
      experience.includes(document)
    )
    expect(initialLetters).toHaveLength(1)
    expect(responseLetters).toHaveLength(1)
    expect(responseLetters[0]).not.toBe(initialLetters[0])
    expect(
      submitted(response).flatMap((document) => ids(document.item))
    ).toContain("blue-card-annex")
    expect(
      submitted(filing).flatMap((document) => ids(document.item))
    ).toContain("zus-health-registration")
    for (const id of ["payroll-statement", "bank-statement"] as const) {
      const document = route.documents.find((entry) =>
        ids(entry.item).includes(id)
      )!
      expect(document, id).toBeDefined()
      expect(document.level, id).toBe("conditional")
      expect(submitted(filing)).not.toContain(document)
      expect(submitted(response)).not.toContain(document)
    }
    expect(
      documentById
        .get("professional-experience-confirmation")
        ?.caseContexts.filter((context) => context.routeId === "blue-card")
    ).toHaveLength(1)
  })

  it("places remedies and court results in their conditional stages with illustrated guides and reverse references", () => {
    for (const [id, stageId, nodeId] of [
      ["administrative-appeal", "decision", "appeal"],
      ["procedural-complaint", "procedure", "complaint"],
      ["judicial-complaint", "decision", "wsa"],
      ["court-judgment", "decision", "wsa"],
    ] as const) {
      const document = documentById.get(id)
      expect(document).toBeDefined()
      expect(
        document?.guide.explanation?.some(
          (section) => section.example?.sample?.kind === "letter"
        )
      ).toBe(true)
      expect(
        document?.contexts.some((context) => context.node.id === nodeId)
      ).toBe(true)
      for (const route of caseGuideRoutes) {
        const stage = route.stages.find((candidate) => candidate.id === stageId)
        expect(stage, route.id).toBeDefined()
        for (const entries of [route.documents, stage?.documents ?? []]) {
          const matches = entries.filter((entry) =>
            ids(entry.item).includes(id)
          )
          expect(matches, `${route.id}: ${id}`).toHaveLength(1)
          expect(matches[0]?.level).toBe("conditional")
        }
        const filing = route.stages.find(
          (candidate) => candidate.id === "filing"
        )
        expect(
          filing?.documents.flatMap((entry) => ids(entry.item))
        ).not.toContain(id)
        expect(
          document?.caseContexts.some((context) => context.routeId === route.id)
        ).toBe(true)
      }
    }
  })
  it("connects received procedural orders to every case without making them filing attachments", () => {
    const order = documentById.get("procedural-order")!
    expect(
      order.guide.explanation?.some(
        (section) => section.example?.sample?.kind === "letter"
      )
    ).toBe(true)
    expect(
      order.contexts.some((context) => context.node.id === "decision-appeal")
    ).toBe(true)
    for (const route of caseGuideRoutes) {
      const procedure = route.stages.find((stage) => stage.id === "procedure")!
      for (const entries of [route.documents, procedure.documents]) {
        const matches = entries.filter((entry) =>
          ids(entry.item).includes("procedural-order")
        )
        expect(matches, route.id).toHaveLength(1)
        expect(matches[0].level, route.id).toBe("conditional")
      }
      expect(
        route.stages
          .find((stage) => stage.id === "filing")!
          .documents.flatMap((entry) => ids(entry.item)),
        route.id
      ).not.toContain("procedural-order")
      expect(
        order.caseContexts.some((context) => context.routeId === route.id),
        route.id
      ).toBe(true)
    }
  })
  it("uses the graduate package without making special-purpose forms universal", () => {
    const route = caseGuideRoutes.find((route) => route.id === "other")!
    const registerIds = route.documents.flatMap((entry) => ids(entry.item))
    const filing = route.stages.find(
      (stage) => stage.id === "filing"
    )!.documents
    const filingIds = filing.flatMap((entry) => ids(entry.item))
    expect(new Set(registerIds).size).toBe(registerIds.length)
    expect(
      new Set(
        route.stages.flatMap((stage) =>
          stage.documents.flatMap((entry) => ids(entry.item))
        )
      )
    ).toEqual(new Set(registerIds))
    expect(filingIds).toEqual(
      expect.arrayContaining([
        "mos-application",
        "qualification-evidence",
        "job-search-evidence",
        "health-insurance",
        "housing-evidence",
        "income-evidence",
        "upo",
      ])
    )
    for (const id of [
      "qualification-evidence",
      "health-insurance",
      "housing-evidence",
      "income-evidence",
    ] as const)
      expect(filing.find((entry) => ids(entry.item).includes(id))?.level).toBe(
        "required"
      )
    for (const id of [
      "research-annex",
      "trainee-volunteer-annex",
      "ict-application",
    ] as const) {
      expect(
        route.documents.find((entry) => ids(entry.item).includes(id))?.level
      ).toBe("conditional")
      expect(filingIds).not.toContain(id)
    }
    for (const id of [
      "study-annex",
      "employment-annex-1",
      "proceeding-certificate",
      "fingerprint-record",
    ])
      expect(filingIds).not.toContain(id)
    expect(
      legalTextPlainText(
        filing.find((entry) => ids(entry.item).includes("stamp-duty-proof"))!
          .item
      )
    ).toContain("340 zł")
    for (const id of registerIds) expect(documentById.has(id)).toBe(true)
  })
  it("keeps CUKR registry checks separate from filing attachments and collection", () => {
    const route = caseGuideRoutes.find((route) => route.id === "cukr")!
    const at = (stageId: string) =>
      route.stages.find((stage) => stage.id === stageId)!.documents
    const registerIds = route.documents.flatMap((entry) => ids(entry.item))
    expect(new Set(registerIds).size).toBe(registerIds.length)
    expect(
      new Set(
        route.stages.flatMap((stage) =>
          stage.documents.flatMap((entry) => ids(entry.item))
        )
      )
    ).toEqual(new Set(registerIds))
    expect(
      at("filing")
        .filter((entry) => entry.level === "required")
        .flatMap((entry) => ids(entry.item))
    ).toEqual([
      "cukr-application",
      "digital-photo",
      "stamp-duty-proof",
      "residence-card-fee-proof",
    ])
    expect(at("status").flatMap((entry) => ids(entry.item))).toEqual(
      expect.arrayContaining([
        "passport",
        "pesel-ukr-confirmation",
        "fingerprint-record",
        "signature-specimen",
      ])
    )
    for (const excluded of [
      "employment-annex-1",
      "mos-application",
      "proceeding-certificate",
    ])
      expect(registerIds).not.toContain(excluded)
    expect(
      at("decision").find((entry) =>
        ids(entry.item).includes("administrative-decision")
      )?.level
    ).toBe("conditional")
    expect(at("filing").flatMap((entry) => ids(entry.item))).not.toContain(
      "temporary-residence-notification"
    )
    expect(at("decision").flatMap((entry) => ids(entry.item))).toContain(
      "temporary-residence-notification"
    )
    for (const entry of route.documents) {
      if (entry.kind === "action")
        expect(entry.guidance && documentById.has(entry.guidance)).toBe(true)
      else expect(ids(entry.item)).toHaveLength(1)
      if (typeof entry.law !== "string") {
        const wrongProcedure = entry.law.parts.some(
          (part) =>
            "target" in part &&
            part.target.kind === "legal-provision" &&
            /^ustawa-o-cudzoziemcach-art-(105|106|108)/.test(
              part.target.provisionId
            )
        )
        expect(wrongProcedure).toBe(false)
      }
    }
  })
  it.each([
    "work",
    "blue-card",
    "student",
    "business",
    "family",
    "permanent",
    "long-term-eu",
  ])(
    "keeps the %s register complete and places each document at the relevant stage",
    (routeId) => {
      const route = caseGuideRoutes.find((route) => route.id === routeId)!
      const registerIds = route.documents.flatMap((document) =>
        ids(document.item)
      )
      expect(new Set(route.documents).size).toBe(route.documents.length)
      for (const stage of route.stages) {
        for (const material of stage.materials) {
          if (material.href.startsWith("/map/"))
            expect(
              allNodes.some((node) => node.id === material.href.slice(5)),
              material.href
            ).toBe(true)
        }
        expect(new Set(stage.documents).size, stage.id).toBe(
          stage.documents.length
        )
        for (const document of stage.documents) {
          const id = ids(document.item)[0]
          expect(route.documents).toContain(document)
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
      expect(at("status")).toEqual(
        expect.arrayContaining(
          ["work", "blue-card"].includes(routeId)
            ? ["administrative-decision", "residence-card"]
            : ["status-documents"]
        )
      )
      expect(at("filing")).toEqual(
        expect.arrayContaining([
          routeId === "long-term-eu"
            ? "resident-application"
            : routeId === "permanent"
              ? "permanent-application"
              : "mos-application",
          routeId === "long-term-eu"
            ? "housing-evidence"
            : routeId === "permanent"
              ? "karta-polaka"
              : routeId === "family"
                ? "civil-status-record"
                : routeId === "student"
                  ? "study-annex"
                  : "employment-annex-1",
          "upo",
        ])
      )
      expect(at("filing")).not.toContain("proceeding-certificate")
      expect(at("filing")).not.toContain("fingerprint-record")
      expect(at("evidence")).toEqual(
        expect.arrayContaining([
          ...(routeId === "permanent"
            ? [
                "karta-polaka",
                "settlement-intention",
                "housing-evidence",
                "employment-contract",
              ]
            : ["long-term-eu", "work", "blue-card"].includes(routeId)
              ? ["zus-health-registration"]
              : ["health-insurance"]),
          ...(routeId === "long-term-eu"
            ? [
                "employment-income-certificate",
                "tax-income-certificate",
                "bank-statement",
                "housing-evidence",
                "polish-language-proof",
                "zus-insurance-history",
              ]
            : routeId === "permanent"
              ? []
              : routeId === "student"
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
                  : routeId === "family"
                    ? [
                        "family-evidence",
                        "civil-status-record",
                        "income-evidence",
                        "housing-evidence",
                      ]
                    : routeId === "blue-card"
                      ? [
                          "professional-experience-confirmation",
                          "payroll-statement",
                          "bank-statement",
                        ]
                      : routeId === "work"
                        ? ["payroll-statement", "bank-statement"]
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
      if (routeId === "family") {
        expect(at("filing")).not.toContain("employment-annex-1")
        expect(at("decision")).toContain("temporary-residence-notification")
        expect(at("filing")).toEqual(
          expect.arrayContaining([
            "family-abroad-application",
            "family-application-consent",
          ])
        )
        for (const id of [
          "family-abroad-application",
          "family-application-consent",
          "apostille-legalisation",
          "sworn-translation",
          "income-evidence",
          "health-insurance",
          "housing-evidence",
        ] as const)
          expect(
            route.documents.find((entry) => ids(entry.item).includes(id))?.level
          ).toBe("conditional")
      }
      if (routeId === "long-term-eu") {
        for (const id of [
          "mos-application",
          "employment-annex-1",
          "temporary-residence-notification",
        ])
          expect(registerIds).not.toContain(id)
        for (const id of [
          "employment-contract",
          "polish-language-proof",
          "civil-status-record",
          "zus-insurance-history",
        ] as const)
          expect(
            route.documents.find((entry) => ids(entry.item).includes(id))?.level
          ).toBe("conditional")
        expect(
          route.documents.find((entry) =>
            ids(entry.item).includes("housing-evidence")
          )?.level
        ).toBe("required")
        const references = route.documents.flatMap((entry) =>
          typeof entry.law === "string"
            ? []
            : entry.law.parts.flatMap((part) =>
                "target" in part && part.target.kind === "legal-provision"
                  ? [part.target.provisionId]
                  : []
              )
        )
        expect(
          references.some((id) =>
            /^ustawa-o-cudzoziemcach-art-(106|203)/.test(id)
          )
        ).toBe(false)
        expect(references).toEqual(
          expect.arrayContaining([
            "ustawa-o-cudzoziemcach-art-219a",
            "ustawa-o-cudzoziemcach-art-219d",
            "ustawa-o-cudzoziemcach-art-222a",
            "ustawa-o-cudzoziemcach-art-229",
          ])
        )
      }
      if (routeId === "permanent") {
        for (const id of [
          "mos-application",
          "employment-annex-1",
          "polish-language-proof",
          "health-insurance",
          "temporary-residence-notification",
        ])
          expect(registerIds).not.toContain(id)
        for (const id of [
          "karta-polaka",
          "settlement-intention",
          "employment-contract",
          "housing-evidence",
          "civil-status-record",
        ] as const)
          expect(
            route.documents.find((entry) => ids(entry.item).includes(id))?.level
          ).toBe("conditional")
        expect(at("decision")).toContain("karta-polaka")
        const references = route.documents.flatMap((entry) =>
          typeof entry.law === "string"
            ? []
            : entry.law.parts.flatMap((part) =>
                "target" in part && part.target.kind === "legal-provision"
                  ? [part.target.provisionId]
                  : []
              )
        )
        expect(
          references.some((id) => /^ustawa-o-cudzoziemcach-art-106/.test(id))
        ).toBe(false)
        expect(references).toEqual(
          expect.arrayContaining([
            "ustawa-o-cudzoziemcach-art-203d",
            "ustawa-o-cudzoziemcach-art-206",
            "ustawa-o-cudzoziemcach-art-229",
          ])
        )
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
