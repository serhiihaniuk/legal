export type KpaArticleRuleExplanation = {
  locator: string
  explanation: string
}

export type KpaArticleExplanation = {
  article: string
  summary: string
  rules: KpaArticleRuleExplanation[]
  legalEffect: string
  foreignersCase: string
}
