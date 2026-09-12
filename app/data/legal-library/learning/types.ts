import type { LegalDocumentId } from "../contracts"
import { defineLegalTextContent } from "../legal-text"
import type { LegalLearningText } from "./legal-text"
import type { DocumentSample } from "~/data/document-library/contracts"
import type {
  KnowledgeReview,
  KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"

export type AuthoredLearningDocumentId = LegalDocumentId

export type LegalLearningCoursePhase = {
  number: string
  title: string
  description: LegalLearningText
  modules: string
}

export type LegalLearningSection = {
  id: string
  title: string
  paragraphs: readonly LegalLearningText[]
  questions?: readonly LegalLearningText[]
  steps?: readonly LegalLearningText[]
  evidence?: readonly LegalLearningText[]
  warning?: LegalLearningText
}

export type LegalLearningExample = {
  title: LegalLearningText
  facts: LegalLearningText
  analysis: LegalLearningText
  lesson: LegalLearningText
  sample?: DocumentSample
}

export type LegalLearningModule = {
  id: string
  order: number
  title: string
  polish: LegalLearningText
  provisionScope: LegalLearningText
  outcome: LegalLearningText
  caseQuestion: LegalLearningText
  placeInWork: LegalLearningText
  sections: readonly LegalLearningSection[]
  caseExample?: LegalLearningExample
  terms?: readonly { term: string; meaning: LegalLearningText }[]
  exercise?: LegalLearningText
}

export type LegalLearningPublication = LegalLearningModule & {
  sourceReview?: KnowledgeReview
}

export function publishLegalLearningModule(
  unit: KnowledgeUnit<LegalLearningModule>
): LegalLearningPublication {
  return { ...unit.body, sourceReview: unit.review }
}

export type LegalLearningCurriculum<
  D extends AuthoredLearningDocumentId = AuthoredLearningDocumentId,
> = {
  documentId: D
  title: string
  description: string
  modules: readonly LegalLearningPublication[]
}

export function defineLegalLearningContent<const T>(content: T): T {
  return defineLegalTextContent(content, "legal-learning")
}

export function defineLegalLearningCurriculum<
  const D extends AuthoredLearningDocumentId,
>(curriculum: LegalLearningCurriculum<D>): LegalLearningCurriculum<D> {
  return defineLegalLearningContent(curriculum)
}
