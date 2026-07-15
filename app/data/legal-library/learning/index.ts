import type { LegalDocumentId } from "../contracts"

import { documentReadingGuides } from "./document-reading-guides"
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
  if (documentId === "kpa") return undefined
  return documentReadingGuides[documentId]
}

export function getLegalLearningCurriculum(
  documentId: LegalDocumentId
): LegalLearningCurriculum | undefined {
  if (documentId === "kpa") return undefined
  const curriculum = legalLearningCurricula[documentId]
  return {
    ...curriculum,
    modules: getLegalLearningModules(documentId),
  }
}

export function getLegalLearningModules(
  documentId: LegalDocumentId
): readonly LegalLearningModule[] {
  if (documentId === "kpa") return []
  const curriculum = legalLearningCurricula[documentId]
  const readingGuide = documentReadingGuides[documentId]
  return [
    readingGuide.module,
    ...curriculum.modules.map((module) => ({
      ...module,
      order: module.order + 1,
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

export type {
  AuthoredLearningDocumentId,
  LegalLearningCurriculum,
  LegalLearningModule,
  LegalLearningSection,
} from "./types"
