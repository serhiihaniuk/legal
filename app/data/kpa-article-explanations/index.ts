import { kpaArticleIndex } from "~/data/kpa-article-index"

import type { KpaArticleExplanation } from "./types"

const PART_SIZE = 102

const partLoaders = [
  async () => (await import("./part-1")).kpaArticleExplanationsPart1,
  async () => (await import("./part-2")).kpaArticleExplanationsPart2,
  async () => (await import("./part-3")).kpaArticleExplanationsPart3,
]

function validatePart(
  partIndex: number,
  explanations: KpaArticleExplanation[]
) {
  const expectedArticles = kpaArticleIndex
    .slice(partIndex * PART_SIZE, (partIndex + 1) * PART_SIZE)
    .map((entry) => entry.article)
  const actualArticles = explanations.map((entry) => entry.article)

  if (JSON.stringify(actualArticles) !== JSON.stringify(expectedArticles)) {
    throw new Error(
      `Invalid KPA explanation coverage in part ${partIndex + 1}.`
    )
  }
}

export async function getKpaArticleExplanation(article: string) {
  const articleIndex = kpaArticleIndex.findIndex(
    (entry) => entry.article === article
  )

  if (articleIndex < 0) return undefined

  const partIndex = Math.floor(articleIndex / PART_SIZE)
  const explanations = await partLoaders[partIndex]()
  validatePart(partIndex, explanations)

  return explanations.find((entry) => entry.article === article)
}

export async function getKpaArticleExplanations(articles: readonly string[]) {
  const requested = new Set(articles)
  const partIndexes = new Set<number>()

  for (const article of requested) {
    const articleIndex = kpaArticleIndex.findIndex(
      (entry) => entry.article === article
    )

    if (articleIndex >= 0) {
      partIndexes.add(Math.floor(articleIndex / PART_SIZE))
    }
  }

  const loadedParts = await Promise.all(
    [...partIndexes].map(async (partIndex) => {
      const explanations = await partLoaders[partIndex]()
      validatePart(partIndex, explanations)
      return explanations
    })
  )
  const explanationsByArticle = new Map<string, KpaArticleExplanation>(
    loadedParts
      .flat()
      .filter((entry) => requested.has(entry.article))
      .map((entry) => [entry.article, entry] as const)
  )

  return articles.flatMap((article) => {
    const explanation = explanationsByArticle.get(article)
    return explanation ? [explanation] : []
  })
}

export type { KpaArticleExplanation, KpaArticleRuleExplanation } from "./types"
