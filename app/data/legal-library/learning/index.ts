import type { LegalDocumentId } from "../contracts"

import { documentReadingGuides } from "./document-reading-guides"
import { kpaLearningCurriculum } from "./kpa"
import { ppsaLearningCurriculum } from "./ppsa"
import { workActLearningCurriculum } from "./powierzanie-pracy"
import { temporaryResidenceApplicationLearningCurriculum } from "./rozporzadzenie-wniosek-pobyt-czasowy"
import type {
  AuthoredLearningDocumentId,
  LegalLearningCurriculum,
  LegalLearningModule,
} from "./types"
import { foreignersActLearningCurriculum } from "./ustawa-o-cudzoziemcach"

export const legalLearningCurricula = {
  kpa: kpaLearningCurriculum,
  ppsa: ppsaLearningCurriculum,
  "ustawa-o-cudzoziemcach": foreignersActLearningCurriculum,
  "powierzanie-pracy": workActLearningCurriculum,
  "rozporzadzenie-wniosek-pobyt-czasowy":
    temporaryResidenceApplicationLearningCurriculum,
} as const satisfies Record<
  AuthoredLearningDocumentId,
  LegalLearningCurriculum<AuthoredLearningDocumentId>
>

export function getDocumentReadingGuide(documentId: LegalDocumentId) {
  return documentReadingGuides[documentId as keyof typeof documentReadingGuides]
}

export function getLegalLearningCurriculum(
  documentId: LegalDocumentId
): LegalLearningCurriculum | undefined {
  const curriculum = legalLearningCurricula[documentId]
  return {
    ...curriculum,
    modules: getLegalLearningModules(documentId),
  }
}

export function getLegalLearningModules(
  documentId: LegalDocumentId
): readonly LegalLearningModule[] {
  const curriculum = legalLearningCurricula[documentId]
  const readingGuide = getDocumentReadingGuide(documentId)
  return [
    ...(readingGuide ? [readingGuide.module] : []),
    ...curriculum.modules.map((module) => ({
      ...module,
      order: module.order + (readingGuide ? 1 : 0),
    })),
  ]
}

export function getLegalLearningModule(
  documentId: LegalDocumentId,
  moduleId: string
): LegalLearningModule | undefined {
  return getLegalLearningModules(documentId).find(
    (module) => module.id === moduleId
  )
}

export {
  concatLegalLearningText,
  createLegalLearningTextAuthor,
  joinLegalLearningText,
  legalLearningPlainText,
  legalLearningProvisionReferences,
  legalLearningTextSlice,
} from "./legal-text"
export type { LegalLearningText } from "./legal-text"

export type {
  AuthoredLearningDocumentId,
  LegalLearningCoursePhase,
  LegalLearningCurriculum,
  LegalLearningModule,
  LegalLearningSection,
} from "./types"
