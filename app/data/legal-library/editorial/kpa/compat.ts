/** Lazy compatibility boundary for the legacy KPA route. */
export async function getKpaArticleExplanation(article: string) {
  return (await import("./index")).getKpaArticleExplanation(article)
}

export async function getKpaArticleExplanations(articles: readonly string[]) {
  return (await import("./index")).getKpaArticleExplanations(articles)
}
