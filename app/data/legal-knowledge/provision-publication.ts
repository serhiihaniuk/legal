import {
  getDocument,
  getEdition,
  getExplanation,
  getProvision,
  parseLegalProvisionReference,
} from "~/data/legal-library"
import type {
  LegalDocument,
  LegalEdition,
  LegalExplanation,
  LegalExplanationResolution,
  LegalProvision,
} from "~/data/legal-library/contracts"
import { getEditorialExplanation } from "~/data/legal-library/editorial"
import type { LegalProvisionReference } from "~/data/legal-library/contracts"

export type ProvisionPublicationStatus = "reviewed" | "draft" | "source-only"

export type ProvisionPublication = {
  reference: LegalProvisionReference
  document: LegalDocument
  edition: LegalEdition
  provision: LegalProvision
  explanation: LegalExplanationResolution
  reviewedExplanation?: LegalExplanation
  previewExplanation?: LegalExplanation
  previewStatus: ProvisionPublicationStatus
  sourceTextExcerpt: string
}

function boundedSourceExcerpt(value: string): string {
  const normalized = value.replace(/\s+/gu, " ").trim()
  if (normalized.length <= 220) return normalized
  return `${normalized.slice(0, 219).trimEnd()}…`
}

/**
 * Resolve one provision's generated source facts and authored editorial state
 * once. Routes, previews, and future review packets should consume this result
 * instead of independently selecting source and explanation fallbacks.
 */
export async function resolveProvisionPublication(
  value: unknown
): Promise<ProvisionPublication | undefined> {
  const reference = parseLegalProvisionReference(value)
  if (!reference) return undefined

  const document = getDocument(reference.documentId)
  if (!document) return undefined
  const editionId = reference.editionId ?? document.currentEditionId
  const edition = getEdition(document.id, editionId)
  const provision = getProvision(document.id, reference.provisionId, editionId)
  if (!edition || !provision) return undefined

  const [explanation, editorial] = await Promise.all([
    getExplanation(reference),
    getEditorialExplanation(document.id, provision.id),
  ])
  const reviewedExplanation =
    explanation.status === "reviewed" ? explanation.explanation : undefined
  const matchingEditorial =
    editorial?.sourceEditionId === edition.editionId ? editorial : undefined
  const previewStatus: ProvisionPublicationStatus = reviewedExplanation
    ? "reviewed"
    : matchingEditorial
      ? "draft"
      : "source-only"

  return {
    reference,
    document,
    edition,
    provision,
    explanation,
    reviewedExplanation,
    previewExplanation: matchingEditorial,
    previewStatus,
    sourceTextExcerpt: boundedSourceExcerpt(provision.text),
  }
}
