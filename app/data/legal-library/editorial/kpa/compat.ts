import type { KpaArticleExplanation, KpaArticleRuleExplanation } from "./index"

export type { KpaArticleExplanation, KpaArticleRuleExplanation }

/** Lazy compatibility boundary for the legacy KPA route data shape. */
export async function getKpaArticleExplanation(article: string) {
  return (await import("./index")).getKpaArticleExplanation(article)
}

export async function getKpaArticleExplanations(articles: readonly string[]) {
  return (await import("./index")).getKpaArticleExplanations(articles)
}
