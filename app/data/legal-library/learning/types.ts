import type { LegalDocumentId } from "../contracts"
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

const bareLegalCitationPattern =
  /(?:\b[Aa]rt\.\s*\d|(?:^|[\s(])§{1,2}\s*\d|\bzałącznik(?:i|a|u|iem|ach|ami)?(?:\s+nr)?\s*\d)/u

function assertNoBareLegalCitations(value: unknown, path: string): void {
  if (typeof value === "string") {
    if (bareLegalCitationPattern.test(value)) {
      throw new Error(
        `Bare legal citation at ${path}. Use createLegalLearningTextAuthor() and an explicit typed citation token.`
      )
    }
    return
  }
  if (!value || typeof value !== "object") return
  if (
    "kind" in value &&
    value.kind === "authored-legal-learning-text" &&
    "parts" in value &&
    Array.isArray(value.parts)
  ) {
    value.parts.forEach((part, index) => {
      if (part && typeof part === "object" && "target" in part) {
        return
      }
      assertNoBareLegalCitations(
        part && typeof part === "object" && "text" in part ? part.text : part,
        `${path}.parts[${index}]`
      )
    })
    return
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      assertNoBareLegalCitations(item, `${path}[${index}]`)
    )
    return
  }
  Object.entries(value).forEach(([key, item]) =>
    assertNoBareLegalCitations(item, `${path}.${key}`)
  )
}

export function defineLegalLearningContent<const T>(content: T): T {
  assertNoBareLegalCitations(content, "legal-learning")
  return content
}

export function defineLegalLearningCurriculum<
  const D extends AuthoredLearningDocumentId,
>(curriculum: LegalLearningCurriculum<D>): LegalLearningCurriculum<D> {
  return defineLegalLearningContent(curriculum)
}
