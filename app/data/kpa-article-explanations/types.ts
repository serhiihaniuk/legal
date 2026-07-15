import type { LegalTextValue } from "~/data/legal-library/legal-text"

export type KpaArticleRuleExplanation = {
  locator: string
  explanation: LegalTextValue
}

export type KpaArticleExplanation = {
  article: string
  summary: LegalTextValue
  rules: KpaArticleRuleExplanation[]
  legalEffect: LegalTextValue
  foreignersCase: LegalTextValue
}
