import { describe, expect, it } from "vitest"

import {
  buildCanonicalPdfHref,
  buildCanonicalPdfLocator,
  getDocument,
  getEdition,
  getExplanation,
  getNext,
  getNextProvision,
  getPrevious,
  getPreviousProvision,
  getProvision,
  isLegalDocumentId,
  isLegalDocumentReference,
  isLegalEditionId,
  isLegalProvisionId,
  isLegalProvisionReference,
  listDocuments,
  listEditions,
  listProvisions,
  parseLegalDocumentReference,
  parseCorpusProvision,
  parseLegalProvisionReference,
  parseLegalReference,
  resolveLegalReference,
} from "."

const KPA_EDITION = "kpa-2025-1691"
const KPA_PROVISION = "kpa-art-64"
const PPSA_OVERLAY_EDITION = "ppsa-2026-143-with-2026-846"

describe("legal-library queries", () => {
  it("accepts future provisions only with a valid effective date", () => {
    const raw = {
      id: "ppsa-art-65a",
      documentId: "ppsa",
      editionId: PPSA_OVERLAY_EDITION,
      kind: "article",
      locator: "Art. 65a",
      parentId: null,
      childIds: [],
      order: 74,
      startPdfPage: 18,
      endPdfPage: 19,
      status: "future",
      effectiveDate: "2029-10-01",
      sourcePdfSha256: "a".repeat(64),
      sourceTextHash: "b".repeat(64),
      text: "Art. 65a. Przyszły tekst.",
    }

    expect(
      parseCorpusProvision(raw, "ppsa", PPSA_OVERLAY_EDITION)?.effectiveDate
    ).toBe("2029-10-01")
    expect(
      parseCorpusProvision(
        { ...raw, effectiveDate: undefined },
        "ppsa",
        PPSA_OVERLAY_EDITION
      )
    ).toBeUndefined()
    expect(
      parseCorpusProvision(
        { ...raw, effectiveDate: "2029-02-31" },
        "ppsa",
        PPSA_OVERLAY_EDITION
      )
    ).toBeUndefined()
    expect(
      parseCorpusProvision(
        { ...raw, status: "active" },
        "ppsa",
        PPSA_OVERLAY_EDITION
      )
    ).toBeUndefined()
  })

  it("loads future-only PPSA provisions from the pending generated edition", () => {
    const futureIds = ["ppsa-art-65a", "ppsa-art-65b"] as const

    for (const provisionId of futureIds) {
      const provision = getProvision("ppsa", provisionId, PPSA_OVERLAY_EDITION)
      expect(provision?.status).toBe("future")
      expect(provision?.effectiveDate).toBe("2029-10-01")
    }
  })

  it("lists registered documents, current editions, and provisions", () => {
    const documents = listDocuments()
    expect(documents.length).toBeGreaterThan(1)
    expect(documents.map((document) => document.id)).toEqual(
      [...documents.map((document) => document.id)].sort((a, b) =>
        a.localeCompare(b)
      )
    )

    const kpa = getDocument("kpa")
    expect(kpa?.currentEditionId).toBe(KPA_EDITION)
    expect(listEditions("kpa").map((edition) => edition.editionId)).toContain(
      KPA_EDITION
    )
    expect(listProvisions("kpa")).not.toHaveLength(0)
    expect(getProvision("kpa", KPA_PROVISION)?.editionId).toBe(KPA_EDITION)
    expect(getProvision("kpa", KPA_PROVISION, KPA_EDITION)?.id).toBe(
      KPA_PROVISION
    )
  })

  it("keeps previous/next behavior and aliases identical", () => {
    const provisions = listProvisions("kpa")
    const first = provisions[0]
    const second = provisions[1]
    expect(first).toBeDefined()
    expect(second).toBeDefined()
    if (!first || !second) return

    expect(getPreviousProvision("kpa", first.id)).toBeNull()
    expect(getPrevious("kpa", first.id)).toBeNull()
    expect(getNextProvision("kpa", first.id)?.id).toBe(second.id)
    expect(getNext("kpa", first.id)?.id).toBe(second.id)
    expect(getPreviousProvision("kpa", second.id)?.id).toBe(first.id)
    expect(getPrevious("kpa", second.id)?.id).toBe(first.id)
    expect(getNextProvision("kpa", "not-a-provision")).toBeUndefined()
  })

  it("supports both canonical PDF locator overloads", () => {
    const edition = getEdition("kpa", KPA_EDITION)
    const provision = getProvision("kpa", KPA_PROVISION, KPA_EDITION)
    expect(edition).toBeDefined()
    expect(provision).toBeDefined()
    if (!edition || !provision) return

    const fromObjects = buildCanonicalPdfLocator(edition.manifest, provision)
    const fromIds = buildCanonicalPdfLocator("kpa", KPA_EDITION, KPA_PROVISION)
    expect(fromObjects).toEqual(fromIds)
    expect(fromObjects?.href).toBe(provision.canonicalPdfLocator)
    expect(buildCanonicalPdfHref("kpa", KPA_EDITION, KPA_PROVISION)).toBe(
      fromObjects?.href
    )
    expect(
      buildCanonicalPdfLocator("kpa", "unknown-edition", KPA_PROVISION)
    ).toBeUndefined()
  })

  it("resolves amendment-overlay source spans only on affected PPSA provisions", () => {
    const art53 = getProvision("ppsa", "ppsa-art-53", PPSA_OVERLAY_EDITION)
    const art264 = getProvision("ppsa", "ppsa-art-264", PPSA_OVERLAY_EDITION)
    const art54 = getProvision("ppsa", "ppsa-art-54", PPSA_OVERLAY_EDITION)
    const edition = getEdition("ppsa", PPSA_OVERLAY_EDITION)

    expect(
      edition?.manifest.sourceMaterials?.map((source) => source.id)
    ).toContain("du-2026-846")
    expect(
      edition?.manifest.legalStatusEvidence?.entryIntoForce?.some((entry) =>
        entry.locator.includes("Art. 35 pkt 1")
      )
    ).toBe(true)
    expect(art53?.text).toContain("art. 3 § 2 pkt 4a i 4b")
    expect(art264?.text).toContain(
      "ministra właściwego do spraw finansów\npublicznych"
    )
    expect(art53?.sourceSpans?.some((span) => span.role === "amendment")).toBe(
      true
    )
    expect(art264?.sourceSpans?.some((span) => span.role === "amendment")).toBe(
      true
    )
    expect(art54?.sourceSpans?.some((span) => span.role === "amendment")).toBe(
      false
    )
  })

  it("guards IDs and references, including cross-document mismatches", () => {
    expect(isLegalDocumentId("kpa")).toBe(true)
    expect(isLegalDocumentId("unknown-document")).toBe(false)
    expect(isLegalEditionId("kpa", KPA_EDITION)).toBe(true)
    expect(isLegalEditionId("kpa", "ppsa-2026-143")).toBe(false)
    expect(isLegalProvisionId("kpa", KPA_PROVISION)).toBe(true)
    expect(isLegalProvisionId("kpa", "unknown-provision")).toBe(false)

    const documentReference = { kind: "legal-document", documentId: "kpa" }
    const provisionReference = {
      kind: "legal-provision",
      documentId: "kpa",
      provisionId: KPA_PROVISION,
    }
    expect(isLegalDocumentReference(documentReference)).toBe(true)
    expect(isLegalProvisionReference(provisionReference)).toBe(true)
    expect(parseLegalDocumentReference(documentReference)).toEqual(
      documentReference
    )
    expect(parseLegalProvisionReference(provisionReference)).toEqual(
      provisionReference
    )
    expect(parseLegalReference(provisionReference)).toEqual(provisionReference)

    expect(
      resolveLegalReference({
        kind: "legal-provision",
        documentId: "kpa",
        provisionId: "unknown-provision",
      }).status
    ).toBe("unknown-provision")
    expect(
      resolveLegalReference({
        kind: "legal-provision",
        documentId: "kpa",
        provisionId: "ustawa-o-cudzoziemcach-art-1",
      }).status
    ).toBe("mismatched-provision")
    expect(
      resolveLegalReference({
        kind: "legal-provision",
        documentId: "kpa",
        provisionId: KPA_PROVISION,
        editionId: "ppsa-2026-143",
      }).status
    ).toBe("unknown-edition")
  })

  it("resolves the reviewed current editorial state", async () => {
    const reviewed = await getExplanation("kpa", KPA_PROVISION)
    expect(reviewed.status).toBe("reviewed")
    if (reviewed.status === "reviewed") {
      expect(reviewed.explanation.reviewStatus).toBe("reviewed")
      expect(reviewed.requestedEditionId).toBe(KPA_EDITION)
    }

    const unknown = await getExplanation("kpa", "kpa-art-does-not-exist")
    expect(unknown.status).toBe("unknown-provision")
  })
})
