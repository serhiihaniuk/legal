import type { CaseGuideRouteId } from "~/data/case-guides/types"
import type { EvidenceDocumentReference } from "~/data/document-library/contracts"
import type {
  ExplanationReviewStatus,
  LegalClaimKind,
  LegalDocumentId,
  LegalEditionId,
  LegalProvisionReference,
} from "~/data/legal-library/contracts"
import {
  defineLegalTextContent,
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { LegalReference } from "~/data/references/legal-references"

/** Authored families that can produce a learner-facing knowledge publication. */
export type KnowledgeUnitFamily =
  | "provision-explanation"
  | "map-topic"
  | "case-guide"
  | "evidence-document"
  | "learning-module"

/** A learning module has no generated registry yet, so its module ID is explicit. */
export type LearningModuleReference<
  D extends LegalDocumentId = LegalDocumentId,
> = {
  kind: "learning-module"
  documentId: D
  moduleId: string
}

export type MapTopicReference = {
  kind: "map-node"
  nodeId: string
}

export type CaseGuideReference = {
  kind: "case-route"
  routeId: CaseGuideRouteId
}

/**
 * The one primary thing an authored unit explains. A unit may cite many other
 * references, but it cannot silently change its subject while being rendered.
 */
export type KnowledgeUnitSubject =
  | {
      family: "provision-explanation"
      reference: LegalProvisionReference
    }
  | {
      family: "map-topic"
      reference: MapTopicReference
    }
  | {
      family: "case-guide"
      reference: CaseGuideReference
    }
  | {
      family: "evidence-document"
      reference: EvidenceDocumentReference
    }
  | {
      family: "learning-module"
      reference: LearningModuleReference
    }

/** New authored content must not use the legacy untyped KPA article adapter. */
export type KnowledgeSourceReference = Exclude<
  LegalReference,
  { kind: "legacy-kpa-article" }
>

export type KnowledgeClaimKind = LegalClaimKind | "requires-verification"

export type KnowledgeClaimBasis = {
  reference: KnowledgeSourceReference
  /** Exact Art. / § / section locator within the referenced source, when useful. */
  locator?: string
  note?: LegalTextValue
}

export type KnowledgeClaim = {
  /** Optional stable label for review packets; array position remains the fallback. */
  id?: string
  kind: KnowledgeClaimKind
  text: LegalTextValue
  basis: readonly KnowledgeClaimBasis[]
}

export type KnowledgeRelationshipKind =
  "related" | "prerequisite" | "evidence" | "example" | "next"

export type KnowledgeRelationship = {
  kind: KnowledgeRelationshipKind
  target: KnowledgeUnitSubject
}

export type KnowledgeReview = {
  reviewStatus: ExplanationReviewStatus
  language: "uk"
  legalStateDate: string
  verifiedAt: string
  /** Required for provision explanations; optional for other unit families. */
  sourceEditionId?: string
}

export type KnowledgeUnitEnvelope<
  Subject extends KnowledgeUnitSubject = KnowledgeUnitSubject,
> = {
  id: string
  subject: Subject
  summary: LegalTextValue
  claims: readonly KnowledgeClaim[]
  relationships: readonly KnowledgeRelationship[]
  review: KnowledgeReview
}

export type KnowledgeUnit<
  Body,
  Subject extends KnowledgeUnitSubject = KnowledgeUnitSubject,
> = KnowledgeUnitEnvelope<Subject> & {
  /** Family-specific content; the shared envelope deliberately stays small. */
  body: Body
}

type ProvisionSubject<D extends LegalDocumentId> = {
  family: "provision-explanation"
  reference: Extract<LegalProvisionReference, { documentId: D }>
}

export type ProvisionKnowledgeReview<D extends LegalDocumentId> = Omit<
  KnowledgeReview,
  "sourceEditionId"
> & {
  sourceEditionId: LegalEditionId<D>
}

export type ProvisionKnowledgeUnit<
  Body,
  D extends LegalDocumentId = LegalDocumentId,
> = Omit<KnowledgeUnit<Body, ProvisionSubject<D>>, "review"> & {
  review: ProvisionKnowledgeReview<D>
}

/** Stable, deterministic identity used by future registries and dependency graphs. */
export function knowledgeSubjectKey(subject: KnowledgeUnitSubject): string {
  switch (subject.family) {
    case "provision-explanation":
      return [
        subject.family,
        subject.reference.documentId,
        subject.reference.provisionId,
        subject.reference.editionId ?? "current",
      ].join(":")
    case "map-topic":
      return `${subject.family}:${subject.reference.nodeId}`
    case "case-guide":
      return `${subject.family}:${subject.reference.routeId}`
    case "evidence-document":
      return `${subject.family}:${subject.reference.documentId}`
    case "learning-module":
      return [
        subject.family,
        subject.reference.documentId,
        subject.reference.moduleId,
      ].join(":")
  }
}

function assertNonEmptyText(value: LegalTextValue, field: string): void {
  if (!legalTextPlainText(value).trim()) {
    throw new Error(`Knowledge unit ${field} must not be empty`)
  }
}

/**
 * Authoring guard for one reviewable unit. It checks only cross-family
 * invariants; the family-specific body remains owned by its family module.
 */
export function defineKnowledgeUnit<
  const T extends KnowledgeUnit<unknown, KnowledgeUnitSubject>,
>(unit: T): T {
  if (!unit.id.trim()) {
    throw new Error("Knowledge unit id must not be empty")
  }
  assertNonEmptyText(unit.summary, `summary (${unit.id})`)

  for (const [index, claim] of unit.claims.entries()) {
    assertNonEmptyText(claim.text, `claim ${index} (${unit.id})`)
    if (claim.basis.length === 0) {
      throw new Error(
        `Knowledge unit ${unit.id} claim ${claim.id ?? index} must include at least one typed basis`
      )
    }
    // KnowledgeSourceReference excludes the legacy KPA adapter at compile time.
  }

  const relationshipKeys = new Set<string>()
  for (const relationship of unit.relationships) {
    const key = `${relationship.kind}:${knowledgeSubjectKey(relationship.target)}`
    if (relationshipKeys.has(key)) {
      throw new Error(
        `Knowledge unit ${unit.id} contains duplicate ${relationship.kind} relationship to ${knowledgeSubjectKey(relationship.target)}`
      )
    }
    relationshipKeys.add(key)
  }

  if (
    unit.subject.family === "provision-explanation" &&
    !unit.review.sourceEditionId?.trim()
  ) {
    throw new Error(
      `Knowledge unit ${unit.id} provision explanation requires sourceEditionId`
    )
  }

  return defineLegalTextContent(unit, `knowledge-unit.${unit.id}`)
}
