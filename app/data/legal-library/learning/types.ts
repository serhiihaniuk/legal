import type { LegalDocumentId } from "../contracts"

export type AuthoredLearningDocumentId = Exclude<LegalDocumentId, "kpa">

export type LegalLearningSection = {
  id: string
  title: string
  paragraphs: readonly string[]
  questions?: readonly string[]
  steps?: readonly string[]
  evidence?: readonly string[]
  warning?: string
}

export type LegalLearningModule = {
  id: string
  order: number
  title: string
  polish: string
  provisionScope: string
  outcome: string
  caseQuestion: string
  placeInWork: string
  sections: readonly LegalLearningSection[]
  exercise: string
}

export type LegalLearningCurriculum<
  D extends AuthoredLearningDocumentId = AuthoredLearningDocumentId,
> = {
  documentId: D
  title: string
  description: string
  modules: readonly LegalLearningModule[]
}

export function defineLegalLearningCurriculum<
  const D extends AuthoredLearningDocumentId,
>(curriculum: LegalLearningCurriculum<D>): LegalLearningCurriculum<D> {
  return curriculum
}
