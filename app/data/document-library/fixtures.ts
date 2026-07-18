import { evidenceDocumentIds, type EvidenceDocumentId } from "./contracts"
import {
  getEvidenceDocument,
  getEvidenceDocumentByAlias,
  listEvidenceDocuments,
  resolveEvidenceDocumentReference,
} from "./query"
import { getEvidenceDocumentPath } from "./navigation"
import { createEvidenceDocumentTextAuthor } from "./legal-text"

export type DocumentLibraryFixture = {
  ids: readonly EvidenceDocumentId[]
  aliases: readonly string[]
  relatedIds: readonly EvidenceDocumentId[]
  canonicalPaths: readonly string[]
  unknownReferenceStatus: "unknown-document"
  authoredReference: {
    kind: "evidence-document"
    documentId: EvidenceDocumentId
  }
}

/**
 * Deterministic runtime/compile fixture for the public Document library
 * contract. Importing this module validates all public editorial records.
 */
export function validateDocumentLibraryFixture(): DocumentLibraryFixture {
  const documents = listEvidenceDocuments()
  const ids = documents.map((document) => document.id)
  if (
    ids.length !== new Set(ids).size ||
    ids.length !== evidenceDocumentIds.length ||
    evidenceDocumentIds.some((id) => !ids.includes(id))
  ) {
    throw new Error("Evidence Document IDs are not unique and complete")
  }

  const aliases = documents.flatMap((document) => [
    document.title,
    ...document.aliases,
  ])
  for (const alias of aliases) {
    const resolved = getEvidenceDocumentByAlias(alias)
    if (!resolved)
      throw new Error(`Unresolved Evidence Document alias: ${alias}`)
  }

  const relatedIds = documents.flatMap((document) =>
    document.relatedDocuments.map((relatedId) => {
      if (!getEvidenceDocument(relatedId)) {
        throw new Error(`Unresolved related EvidenceDocumentId: ${relatedId}`)
      }
      return relatedId
    })
  )

  const canonicalPaths = documents.map((document) => {
    const path = getEvidenceDocumentPath(document.id)
    const expected = `/documents/${document.id}`
    if (path !== expected) {
      throw new Error(
        `Unexpected canonical Evidence Document path: ${document.id}`
      )
    }
    return path
  })

  const unknownReference = resolveEvidenceDocumentReference({
    kind: "evidence-document",
    documentId: "unknown-document",
  })
  if (unknownReference.status !== "unknown-document") {
    throw new Error("Unknown Evidence Document references must fail closed")
  }

  const author = createEvidenceDocumentTextAuthor()
  const authored = author.text`Додайте ${author.document("passport", "паспорт")}.`
  const target = authored.parts.find((part) => "target" in part)?.target
  if (
    !target ||
    target.kind !== "evidence-document" ||
    target.documentId !== "passport"
  ) {
    throw new Error("Evidence Document author did not emit a typed reference")
  }

  return Object.freeze({
    ids: Object.freeze(ids),
    aliases: Object.freeze(aliases),
    relatedIds: Object.freeze(relatedIds),
    canonicalPaths: Object.freeze(canonicalPaths),
    unknownReferenceStatus: unknownReference.status,
    authoredReference: target,
  })
}

export const documentLibraryFixture = validateDocumentLibraryFixture()
