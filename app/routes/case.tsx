import { Link, useNavigate, useParams } from "react-router"

import {
  CaseStudyContent,
  caseStudyTableOfContents,
} from "~/features/case-guides"
import { DocsLayout } from "~/components/layout"
import { LegalText } from "~/components/references"
import { Button } from "~/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { caseGuideCases, getCaseGuideCase } from "~/data/case-guide-navigation"
import { caseGuideRoutes, getCaseGuideRoute } from "~/data/case-guide-routes"
import { legalData } from "~/data/legal-data"

function scrollToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
}

export default function CasePage() {
  const { routeId } = useParams()
  const navigate = useNavigate()
  const route = getCaseGuideRoute(routeId)
  const activeCase = getCaseGuideCase(route.id)
  const caseRoutes = caseGuideRoutes.filter((item) =>
    activeCase.routeIds.includes(item.id)
  )
  const toc = caseStudyTableOfContents(route)

  function selectRoute(id: string | number | null) {
    if (typeof id !== "string" || id === route.id) return
    navigate(`/cases/${id}`)
    scrollToTop()
  }

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
      <div data-not-typeset className="border-b pb-4">
        <nav
          aria-label="Види справ на малому екрані"
          className="-mx-4 mb-4 flex gap-1 overflow-x-auto overflow-y-hidden px-4 lg:hidden"
        >
          {caseGuideCases.map((item) => (
            <Button
              key={item.id}
              nativeButton={false}
              variant={item.id === activeCase.id ? "secondary" : "ghost"}
              size="sm"
              className="flex-none"
              render={<Link to={`/cases/${item.defaultRouteId}`} />}
            >
              {item.label}
            </Button>
          ))}
        </nav>
        <p className="mb-2 text-xs font-medium text-muted-foreground">
          {activeCase.label} · оберіть підставу
        </p>
        <Tabs value={route.id} onValueChange={selectRoute}>
          <div className="-mx-4 overflow-x-auto overflow-y-hidden px-4">
            <TabsList
              variant="line"
              className="h-10 w-max min-w-full justify-start"
            >
              {caseRoutes.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="flex-none px-3"
                >
                  {item.tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>

      <CaseStudyContent
        key={route.id}
        route={route}
        updatedAt={legalData.updatedAt}
      />
    </DocsLayout>
  )
}
