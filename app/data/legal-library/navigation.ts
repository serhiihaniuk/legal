import type { LegalDocumentId } from "./contracts"

export const genericLearningModules = [
  { id: "overview", label: "Про акт", order: 1 },
  { id: "reading", label: "Як читати норму", order: 2 },
  { id: "structure", label: "Структура акта", order: 3 },
  { id: "source", label: "Редакція і джерело", order: 4 },
] as const

export type GenericLearningModuleId =
  (typeof genericLearningModules)[number]["id"]

export const genericPracticeModules = [
  { id: "case-workflow", label: "Робочий алгоритм" },
] as const

export type GenericPracticeId = (typeof genericPracticeModules)[number]["id"]

export function getDocumentHomePath(documentId: LegalDocumentId): string {
  if (documentId === "kpa") return "/law/kpa/learn/system"
  return `/law/${encodeURIComponent(documentId)}/learn/overview`
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
