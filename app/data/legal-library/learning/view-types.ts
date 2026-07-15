import type { LegalProvisionReference } from "../contracts"
import type { LegalLearningText } from "./legal-text"

export type LegalLearningCoursePhase = {
  number: string
  title: string
  description: LegalLearningText
  modules: string
}

export type LegalLearningLayer = {
  label: string
  text: LegalLearningText
}

export type LegalLearningTerm = {
  term: string
  meaning: LegalLearningText
}

export type LegalLearningArticleGroup = {
  reference: LegalLearningText
  role: LegalLearningText
  target?: LegalProvisionReference
}

export type LegalLearningProvisionGuideItem = {
  id: string
  reference: string
  title: LegalLearningText
  summary: LegalLearningText
  rules: readonly { locator: string; explanation: LegalLearningText }[]
  legalEffect: LegalLearningText
  foreignersCase: LegalLearningText
  target?: LegalProvisionReference
}

export type LegalLearningModuleView = {
  order: number
  title: string
  polish: LegalLearningText
  provisionScope: LegalLearningText
  legalState: string
  outcome: LegalLearningText
  stage: string
  positionIntro: LegalLearningText
  question: LegalLearningText
  neededWhen: LegalLearningText
  boundary: LegalLearningText
  courseTitle?: string
  courseDescription?: string
  coursePhases?: readonly LegalLearningCoursePhase[]
  mechanismParagraphs: readonly LegalLearningText[]
  layers: readonly LegalLearningLayer[]
  terms: readonly LegalLearningTerm[]
  articleGroups: readonly LegalLearningArticleGroup[]
  provisionGuide: {
    countLabel: string
    title: string
    description: string
    items: readonly LegalLearningProvisionGuideItem[]
  }
  caseExample: {
    title: LegalLearningText
    facts: LegalLearningText
    analysis: LegalLearningText
    lesson: LegalLearningText
  }
  pitfalls: readonly LegalLearningText[]
  method: readonly LegalLearningText[]
}
