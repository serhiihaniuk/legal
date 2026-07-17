import type { LegalDocumentId } from "../contracts"
import { getLegalLearningModules } from "../learning"

export const genericPracticeModules = [
  { id: "case-workflow", label: "Робочий алгоритм" },
] as const

export type GenericPracticeId = (typeof genericPracticeModules)[number]["id"]

export function getDocumentHomePath(documentId: LegalDocumentId): string {
  if (documentId === "kpa") return "/law/kpa/learn/system"
  const firstModuleId = getLegalLearningModules(documentId)[0]?.id ?? "overview"
  return `/law/${encodeURIComponent(documentId)}/learn/${encodeURIComponent(firstModuleId)}`
}

export function getDocumentLearningPath(
  documentId: LegalDocumentId,
  moduleId: string
): string {
  return `/law/${encodeURIComponent(documentId)}/learn/${encodeURIComponent(moduleId)}`
}

export function getDocumentPracticePath(
  documentId: LegalDocumentId,
  practiceId: string
): string {
  return `/law/${encodeURIComponent(documentId)}/practice/${encodeURIComponent(practiceId)}`
}

export function getDocumentProvisionPath(
  documentId: LegalDocumentId,
  provisionId: string
): string {
  return `/law/${encodeURIComponent(documentId)}/provisions/${encodeURIComponent(provisionId)}`
}
