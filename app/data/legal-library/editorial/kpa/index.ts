import type { LegalExplanation } from "../../contracts"

import { kpaEditorialProvisionIndex } from "./provision-index"

const PART_SIZE = 102
const PART_COUNT = 3

type KpaExplanation = LegalExplanation<"kpa">
type ExplanationPart = Readonly<Record<string, KpaExplanation>>

const partLoaders = [
  async () => (await import("./part-1")).kpaArticleExplanationsPart1,
  async () => (await import("./part-2")).kpaArticleExplanationsPart2,
  async () => (await import("./part-3")).kpaArticleExplanationsPart3,
] as const

function validatePart(partIndex: number, explanations: ExplanationPart) {
  const expectedProvisionIds = kpaEditorialProvisionIndex
    .slice(partIndex * PART_SIZE, (partIndex + 1) * PART_SIZE)
    .map((entry) => entry.provisionId)
  const actualProvisionIds = Object.values(explanations).map(
    (entry) => entry.provisionId
  )

  if (
    JSON.stringify(actualProvisionIds) !== JSON.stringify(expectedProvisionIds)
  ) {
    throw new Error(
      `Invalid KPA explanation coverage in part ${partIndex + 1}.`
    )
  }
}

async function loadPart(partIndex: number) {
  const explanations = await partLoaders[partIndex]()
  validatePart(partIndex, explanations)
  return explanations
}

async function loadAllParts() {
  if (kpaEditorialProvisionIndex.length !== PART_SIZE * PART_COUNT) {
    throw new Error(
      `Invalid KPA explanation coverage: expected ${PART_SIZE * PART_COUNT} indexed articles.`
    )
  }

  return Promise.all(partLoaders.map((_, partIndex) => loadPart(partIndex)))
}

/** Canonical KPA table used by the generic legal-library editorial loader. */
export async function loadKpaExplanations(): Promise<
  Readonly<Record<string, KpaExplanation>>
> {
  const parts = await loadAllParts()
  return Object.assign({}, ...parts)
}

export type KpaArticleRuleExplanation = {
  locator: string
  explanation: KpaExplanation["rules"][number]["explanation"]
}

/** Legacy article-shaped view retained only for the existing KPA screens. */
export type KpaArticleExplanation = {
  article: string
  summary: KpaExplanation["summary"]
  rules: KpaArticleRuleExplanation[]
  legalEffect: KpaExplanation["legalEffect"]
  foreignersCase: KpaExplanation["foreignersCase"]
}

function toCompatibilityView(
  article: string,
  explanation: KpaExplanation
): KpaArticleExplanation {
  return {
    article,
    summary: explanation.summary,
    rules: explanation.rules.map((rule) => ({ ...rule })),
    legalEffect: explanation.legalEffect,
    foreignersCase: explanation.foreignersCase,
  }
}

export async function getKpaArticleExplanation(article: string) {
  const articleIndex = kpaEditorialProvisionIndex.findIndex(
    (entry) => entry.article === article
  )
  if (articleIndex < 0) return undefined

  const partIndex = Math.floor(articleIndex / PART_SIZE)
  const explanations = await loadPart(partIndex)
  const explanation =
    explanations[kpaEditorialProvisionIndex[articleIndex].provisionId]
  return explanation ? toCompatibilityView(article, explanation) : undefined
}

export async function getKpaArticleExplanations(articles: readonly string[]) {
  const partIndexes = new Set<number>()
  for (const article of new Set(articles)) {
    const articleIndex = kpaEditorialProvisionIndex.findIndex(
      (entry) => entry.article === article
    )
    if (articleIndex >= 0) partIndexes.add(Math.floor(articleIndex / PART_SIZE))
  }

  const loadedParts = new Map<number, ExplanationPart>(
    await Promise.all(
      [...partIndexes].map(
        async (partIndex) => [partIndex, await loadPart(partIndex)] as const
      )
    )
  )

  return articles.flatMap((article) => {
    const articleIndex = kpaEditorialProvisionIndex.findIndex(
      (entry) => entry.article === article
    )
    if (articleIndex < 0) return []
    const explanation = loadedParts.get(Math.floor(articleIndex / PART_SIZE))?.[
      kpaEditorialProvisionIndex[articleIndex].provisionId
    ]
    return explanation ? [toCompatibilityView(article, explanation)] : []
  })
}
