import type { LegalDocumentId } from "../contracts"

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

export function getLegalLearningCurriculum(
  documentId: LegalDocumentId
): LegalLearningCurriculum | undefined {
  if (documentId === "kpa") return undefined
  return legalLearningCurricula[documentId]
}

export function getLegalLearningModules(
  documentId: LegalDocumentId
): readonly LegalLearningModule[] {
  return getLegalLearningCurriculum(documentId)?.modules ?? []
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
