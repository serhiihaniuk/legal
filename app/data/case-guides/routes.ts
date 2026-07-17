import type { CaseGuideRoute, CaseGuideRouteId } from "~/data/case-guides/types"
import { defineLegalTextContent } from "~/data/legal-library/legal-text"
import { blueCardCaseGuide } from "./editorial/routes/blue-card"
import { businessCaseGuide } from "./editorial/routes/business"
import { cukrCaseGuide } from "./editorial/routes/cukr"
import { familyCaseGuide } from "./editorial/routes/family"
import { longTermEuCaseGuide } from "./editorial/routes/long-term-eu"
import { otherCaseGuide } from "./editorial/routes/other"
import { permanentCaseGuide } from "./editorial/routes/permanent"
import { studentCaseGuide } from "./editorial/routes/student"
import { workCaseGuide } from "./editorial/routes/work"

/** Compatibility projection for the stable case-guide routes. */
export const caseGuideRoutes: readonly CaseGuideRoute[] =
  defineLegalTextContent(
    [
      cukrCaseGuide.body,
      workCaseGuide.body,
      blueCardCaseGuide.body,
      studentCaseGuide.body,
      businessCaseGuide.body,
      familyCaseGuide.body,
      permanentCaseGuide.body,
      longTermEuCaseGuide.body,
      otherCaseGuide.body,
    ],
    "case-guides"
  )

export const defaultCaseGuideRouteId: CaseGuideRouteId = "cukr"

export const caseGuideRouteById = new Map(
  caseGuideRoutes.map((route) => [route.id, route])
)

export function getCaseGuideRoute(id?: string) {
  return (
    (id ? caseGuideRouteById.get(id as CaseGuideRouteId) : undefined) ??
    caseGuideRouteById.get(defaultCaseGuideRouteId)!
  )
}
