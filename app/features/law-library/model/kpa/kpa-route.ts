import {
  getKpaArticleExplanation,
  getKpaArticleExplanations,
} from "~/data/legal-library/editorial/kpa/compat"
import type { LegalExplanation } from "~/data/legal-library/contracts"
import { listProvisions } from "~/data/legal-library"
import {
  kpaArticleIndex,
  kpaArticleSections,
  kpaGuideModuleArticles,
  type KpaGuideModuleId,
  kpaGuideModules,
} from "~/data/legal-library/learning/kpa"

export type KpaMode = "learning" | "articles" | "practice"

export const modes: readonly { id: KpaMode; label: string }[] = [
  { id: "learning", label: "Навчання" },
  { id: "articles", label: "Статті" },
  { id: "practice", label: "Практикум" },
]

export const modeNavigationOptions = modes.map((mode) => ({
  value: mode.id,
  label: mode.label,
}))

export const moduleNavigationOptions = kpaGuideModules.map((module) => ({
  value: module.id,
  label: module.title,
  selectLabel: `${module.order}. ${module.title}`,
}))

export const practiceNavigation = [
  { id: "case-algorithm", label: "Алгоритм справи" },
  { id: "wezwanie-anatomy", label: "Анатомія wezwania" },
  { id: "practice-check", label: "Самоперевірка" },
] as const

export type KpaRouteParams = {
  moduleId?: string
  practiceId?: string
}

export type KpaRouteState = {
  canonicalLawMode: boolean
  mode: KpaMode
  selectedModule: KpaGuideModuleId
  selectedArticle: string
}

export type KpaSelection =
  | { kind: "mode"; value: KpaMode }
  | { kind: "module"; value: string }
  | { kind: "article"; value: string }

export type KpaRouteLoaderData = {
  explanation?: LegalExplanation<"kpa">
  moduleArticleExplanations: LegalExplanation<"kpa">[]
}

export type KpaNavigationSection = (typeof kpaArticleSections)[number] & {
  articleCount: number
}

export type KpaNavigationGroup = {
  division: string
  articleCount: number
  sections: KpaNavigationSection[]
}

export const kpaProvisionIdByArticle = new Map(
  listProvisions("kpa").map((provision) => [
    provision.locator.replace(/^Art\.\s*/u, ""),
    provision.id,
  ])
)

const kpaSectionsWithCounts: KpaNavigationSection[] = kpaArticleSections.map(
  (section) => ({
    ...section,
    articleCount: kpaArticleIndex.filter(
      (entry) =>
        entry.division === section.division && entry.chapter === section.chapter
    ).length,
  })
)

export const kpaNavigationSectionCount = kpaArticleSections.length

export const kpaNavigationGroups = kpaSectionsWithCounts.reduce<
  KpaNavigationGroup[]
>((groups, section) => {
  const group = groups.find((item) => item.division === section.division)

  if (group) {
    group.sections.push(section)
    group.articleCount += section.articleCount
  } else {
    groups.push({
      division: section.division,
      articleCount: section.articleCount,
      sections: [section],
    })
  }

  return groups
}, [])

export function articleCountLabel(count: number) {
  const lastTwoDigits = count % 100
  const lastDigit = count % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${count} статей`
  if (lastDigit === 1) return `${count} стаття`
  if (lastDigit >= 2 && lastDigit <= 4) return `${count} статті`
  return `${count} статей`
}

export function sectionCountLabel(count: number) {
  const lastTwoDigits = count % 100
  const lastDigit = count % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${count} розділів`
  if (lastDigit === 1) return `${count} розділ`
  if (lastDigit >= 2 && lastDigit <= 4) return `${count} розділи`
  return `${count} розділів`
}

export function resolveKpaRouteState({
  params,
  searchParams,
}: {
  params: KpaRouteParams
  searchParams: URLSearchParams
}): KpaRouteState {
  const canonicalLawMode = Boolean(params.moduleId || params.practiceId)
  const routeMode: KpaMode | undefined = params.practiceId
    ? "practice"
    : params.moduleId
      ? "learning"
      : undefined
  const requestedMode = routeMode ?? searchParams.get("view")
  const mode: KpaMode = modes.some((item) => item.id === requestedMode)
    ? (requestedMode as KpaMode)
    : "learning"
  const requestedModule = params.moduleId ?? searchParams.get("module")
  const selectedModule = kpaGuideModules.some(
    (item) => item.id === requestedModule
  )
    ? (requestedModule as KpaGuideModuleId)
    : ((kpaGuideModules[0]?.id ?? "system") as KpaGuideModuleId)
  const requestedArticle = searchParams.get("article")
  const selectedArticle = kpaArticleIndex.some(
    (item) => item.article === requestedArticle
  )
    ? (requestedArticle as string)
    : (kpaArticleIndex[0]?.article ?? "1")

  return { canonicalLawMode, mode, selectedModule, selectedArticle }
}

export function toKpaSelectionUrl({
  selection,
  state,
  searchParams,
}: {
  selection: KpaSelection
  state: KpaRouteState
  searchParams: URLSearchParams
}) {
  if (state.canonicalLawMode) {
    if (selection.kind === "module") {
      return `/law/kpa/learn/${selection.value}`
    }
    if (selection.kind === "article") {
      const provisionId = kpaProvisionIdByArticle.get(selection.value)
      return provisionId ? `/law/kpa/provisions/${provisionId}` : "/law/kpa"
    }
    if (selection.value === "learning") {
      return `/law/kpa/learn/${state.selectedModule}`
    }
    if (selection.value === "practice") {
      return "/law/kpa/practice/case-workflow"
    }
    const provisionId = kpaProvisionIdByArticle.get(state.selectedArticle)
    return provisionId ? `/law/kpa/provisions/${provisionId}` : "/law/kpa"
  }

  const next = new URLSearchParams(searchParams)
  if (selection.kind === "module") {
    next.delete("view")
    next.set("module", selection.value)
    next.delete("article")
  } else if (selection.kind === "article") {
    next.set("view", "articles")
    next.set("article", selection.value)
    next.delete("module")
  } else if (selection.value === "learning") {
    next.delete("view")
    next.set("module", state.selectedModule)
    next.delete("article")
  } else {
    next.set("view", selection.value)
    next.delete("module")
    if (selection.value === "articles") {
      next.set("article", state.selectedArticle)
    } else {
      next.delete("article")
    }
  }
  return `?${next.toString()}`
}

export async function loadKpaRouteData({
  request,
  params,
}: {
  request: Request
  params: KpaRouteParams
}): Promise<KpaRouteLoaderData> {
  const state = resolveKpaRouteState({
    params,
    searchParams: new URL(request.url).searchParams,
  })
  const [explanation, moduleArticleExplanations] = await Promise.all([
    state.mode === "articles"
      ? getKpaArticleExplanation(state.selectedArticle)
      : Promise.resolve(undefined),
    state.mode === "learning"
      ? getKpaArticleExplanations(
          kpaGuideModuleArticles[state.selectedModule].articles
        )
      : Promise.resolve([]),
  ])

  if (state.mode === "articles" && !explanation) {
    throw new Response("KPA article explanation not found", { status: 404 })
  }

  return { explanation, moduleArticleExplanations }
}
