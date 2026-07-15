import {
  getEdition,
  listDocuments,
  listEditions,
} from "~/data/legal-library"

import type { LegalCorpusManifest } from "~/data/legal-library"

/** Compatibility shape retained for the existing KPA source reader. */
export type LegalSourceManifest = LegalCorpusManifest

/**
 * The old consumer passed an edition id despite the historical parameter name
 * `documentId`. Accept both an edition id and a document id/current edition.
 */
export function getLegalSourceManifest(documentIdOrEditionId: string | undefined) {
  if (!documentIdOrEditionId) return undefined

  for (const document of listDocuments()) {
    const editionId = document.editionIds.find((candidate) => candidate === documentIdOrEditionId)
    if (editionId) return getEdition(document.id, editionId)?.manifest
  }

  const document = listDocuments().find((candidate) => candidate.id === documentIdOrEditionId)
  if (document) return getEdition(document.id, document.currentEditionId)?.manifest

  for (const candidate of listDocuments()) {
    const edition = listEditions(candidate.id).find((item) => item.editionId === documentIdOrEditionId)
    if (edition) return edition.manifest
  }
  return undefined
}
