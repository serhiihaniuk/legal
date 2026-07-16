import type { CaseGuideRoute } from "~/data/case-guide-types"

export const caseStudySectionIds = {
  overview: "case-overview",
  facts: "case-facts",
  choice: "case-choice",
  stages: "case-stages",
  conditions: "case-conditions",
  registers: "case-registers",
  branches: "case-branches",
  sources: "case-sources",
} as const

export const caseStudyToc = [
  { href: `#${caseStudySectionIds.overview}`, label: "Огляд маршруту" },
  { href: `#${caseStudySectionIds.facts}`, label: "Факти для перевірки" },
  { href: `#${caseStudySectionIds.choice}`, label: "Чому ця підстава" },
  { href: `#${caseStudySectionIds.stages}`, label: "Етапи справи" },
  { href: `#${caseStudySectionIds.conditions}`, label: "Матриця умов" },
  { href: `#${caseStudySectionIds.registers}`, label: "Документи і строки" },
  { href: `#${caseStudySectionIds.branches}`, label: "Негативні гілки" },
  { href: `#${caseStudySectionIds.sources}`, label: "Офіційні джерела" },
] as const

export function caseStudyTableOfContents(route: CaseGuideRoute) {
  const stages = route.stages.map((stage, index) => ({
    href: `#case-stage-${stage.id}`,
    label: `${index + 1}. ${stage.title}`,
    depth: 3 as const,
  }))

  return [...caseStudyToc.slice(0, 4), ...stages, ...caseStudyToc.slice(4)]
}

export function caseStudyStageNavigation(route: CaseGuideRoute) {
  return route.stages.map((stage, index) => ({
    href: `#case-stage-${stage.id}`,
    label: `${index + 1}. ${stage.title}`,
  }))
}
