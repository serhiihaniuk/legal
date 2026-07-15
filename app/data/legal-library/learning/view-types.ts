import type { LegalProvisionReference } from "../contracts"
import type { LegalLearningInlineReference } from "./types"

export type LegalLearningCoursePhase = {
  number: string
  title: string
  description: string
  modules: string
}

export type LegalLearningLayer = {
  label: string
  text: string
}

export type LegalLearningTerm = {
  term: string
  meaning: string
}

export type LegalLearningArticleGroup = {
  reference: string
  role: string
  target?: LegalProvisionReference
}

export type LegalLearningProvisionGuideItem = {
  id: string
  reference: string
  title: string
  summary: string
  rules: readonly { locator: string; explanation: string }[]
  legalEffect: string
  foreignersCase: string
  target?: LegalProvisionReference
}

export type LegalLearningModuleView = {
  order: number
  title: string
  polish: string
  provisionScope: string
  legalState: string
  inlineReferences: readonly LegalLearningInlineReference[]
  outcome: string
  stage: string
  positionIntro: string
  question: string
  neededWhen: string
  boundary: string
  courseTitle?: string
  courseDescription?: string
  coursePhases?: readonly LegalLearningCoursePhase[]
  mechanismParagraphs: readonly string[]
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
    title: string
    facts: string
    analysis: string
    lesson: string
  }
  pitfalls: readonly string[]
  method: readonly string[]
}
