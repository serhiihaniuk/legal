import type { CaseGuideCase, CaseGuideRouteId } from "~/data/case-guides/types"

export const caseGuideCases: CaseGuideCase[] = [
  {
    id: "temporary-stay",
    label: "Karta pobytu",
    description:
      "Zezwolenia na pobyt czasowy — підстава залежить від реальної головної мети перебування.",
    routeIds: [
      "cukr",
      "work",
      "blue-card",
      "student",
      "business",
      "family",
      "other",
    ],
    defaultRouteId: "cukr",
  },
  {
    id: "permanent-stay",
    label: "Pobyt stały",
    description:
      "Окрема безстрокова підстава; не є наступним автоматичним етапом після pobytu czasowego.",
    routeIds: ["permanent"],
    defaultRouteId: "permanent",
  },
  {
    id: "resident-eu",
    label: "Rezydent UE",
    description:
      "Довготерміновий статус, для якого окремо аналізуються роки перебування, доходи й страхування.",
    routeIds: ["long-term-eu"],
    defaultRouteId: "long-term-eu",
  },
]

export function getCaseGuideCase(routeId: CaseGuideRouteId) {
  return (
    caseGuideCases.find((item) => item.routeIds.includes(routeId)) ??
    caseGuideCases[0]
  )
}
