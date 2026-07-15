import type { LegalDocumentId } from "../contracts"
import { defineLegalTextContent } from "../legal-text"
import type { LegalLearningText } from "./legal-text"

export type AuthoredLearningDocumentId = Exclude<LegalDocumentId, "kpa">

export type LegalLearningSection = {
  id: string
  title: string
  paragraphs: readonly LegalLearningText[]
  questions?: readonly LegalLearningText[]
  steps?: readonly LegalLearningText[]
  evidence?: readonly LegalLearningText[]
  warning?: LegalLearningText
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
  exercise: LegalLearningText
}

export type LegalLearningCurriculum<
  D extends AuthoredLearningDocumentId = AuthoredLearningDocumentId,
> = {
  documentId: D
  title: string
  description: string
  modules: readonly LegalLearningModule[]
}

export function defineLegalLearningContent<const T>(content: T): T {
  return defineLegalTextContent(content, "legal-learning")
}

export function defineLegalLearningCurriculum<
  const D extends AuthoredLearningDocumentId,
>(curriculum: LegalLearningCurriculum<D>): LegalLearningCurriculum<D> {
  return defineLegalLearningContent(curriculum)
}
