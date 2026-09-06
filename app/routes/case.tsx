import { Link, useParams } from "react-router"

import {
  CaseStudyContent,
  CaseRouteNavigation,
  caseStudyTableOfContents,
} from "~/features/case-guides"
import { DocsLayout } from "~/components/layout"
import { LegalText } from "~/components/references"
import { Button } from "~/components/ui/button"
import { caseGuideCases, getCaseGuideCase } from "~/data/case-guides/navigation"
import { getCaseGuideRoute } from "~/data/case-guides/routes"
import { legalData } from "~/data/legal-map/data"

export function meta() {
  return [{ title: "Гайди по справах — Legalizacja" }]
}

export default function CasePage() {
  const { routeId } = useParams()
  const route = getCaseGuideRoute(routeId)
  const activeCase = getCaseGuideCase(route.id)
  const toc = caseStudyTableOfContents(route)

  const navigation = (
    <nav aria-label="Види справ" className="pb-10">
      <p className="px-2 text-xs font-medium text-muted-foreground">Справи</p>
      <ul className="mt-2 grid gap-0.5 text-[0.8rem] font-medium">
        {caseGuideCases.map((item) => {
          const isActive = item.id === activeCase.id

          return (
            <li key={item.id}>
              <Button
                nativeButton={false}
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                className="h-auto min-h-8 w-full justify-start px-2 py-1 text-left whitespace-normal"
                render={<Link to={`/cases/${item.defaultRouteId}`} />}
              >
                <span>
                  <span className="block">{item.label}</span>
                  {isActive ? (
                    <span className="mt-1 block text-xs font-normal text-muted-foreground">
                      <LegalText text={item.description} />
                    </span>
                  ) : null}
                </span>
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )

  return (
    <DocsLayout navigation={navigation} toc={toc}>
      <CaseRouteNavigation routeId={route.id} />

      <CaseStudyContent
        key={route.id}
        route={route}
        updatedAt={legalData.updatedAt}
      />
    </DocsLayout>
  )
}
