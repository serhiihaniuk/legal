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
  parseLegalProvisionReference,
  parseLegalReference,
  resolveLegalReference,
} from "."

const KPA_EDITION = "kpa-2025-1691"
const KPA_PROVISION = "kpa-art-64"

async function findExplanationWithStatus(
  status: "source-only" | "stale-explanation"
) {
  for (const document of listDocuments()) {
    for (const provision of listProvisions(document.id)) {
      const resolution = await getExplanation(
        document.id,
        provision.id,
        document.currentEditionId
      )
      if (resolution.status === status) return resolution
    }
  }
  return undefined
}

describe("legal-library queries", () => {
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

  it("resolves reviewed, source-only, and stale editorial states", async () => {
    const reviewed = await getExplanation("kpa", KPA_PROVISION)
    expect(reviewed.status).toBe("reviewed")

    const sourceOnly = await findExplanationWithStatus("source-only")
    expect(sourceOnly?.status).toBe("source-only")
    expect(sourceOnly?.provision).toBeDefined()

    const stale = await findExplanationWithStatus("stale-explanation")
    expect(stale?.status).toBe("stale-explanation")
    expect(stale?.provision).toBeDefined()
  })
})
