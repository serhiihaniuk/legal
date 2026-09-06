import { useEffect, useRef, type ReactNode } from "react"
import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import { caseGuideCases, getCaseGuideCase } from "~/data/case-guides/navigation"
import { caseGuideRoutes } from "~/data/case-guides/routes"
import type { CaseGuideRouteId } from "~/data/case-guides/types"
import { cn } from "~/lib/utils"

function ScrollableCaseNavigation({
  activeId,
  label,
  className,
  children,
}: {
  activeId: string
  label: string
  className?: string
  children: ReactNode
}) {
  const navigation = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = navigation.current
    const active = container?.querySelector<HTMLElement>(
      '[aria-current="page"]'
    )
    if (!container || !active) return

    function revealActive() {
      if (!container || !active || container.clientWidth === 0) return
      const viewport = container.getBoundingClientRect()
      const item = active.getBoundingClientRect()
      const style = getComputedStyle(container)
      const left = viewport.left + parseFloat(style.paddingLeft || "0")
      const right = viewport.right - parseFloat(style.paddingRight || "0")
      const delta =
        item.left < left
          ? item.left - left
          : item.right > right
            ? item.right - right
            : 0
      if (delta !== 0) container.scrollBy({ left: delta, behavior: "instant" })
    }

    revealActive()
    const observer = new ResizeObserver(revealActive)
    observer.observe(container)
    observer.observe(active)
    return () => observer.disconnect()
  }, [activeId])

  return (
    <nav
      ref={navigation}
      aria-label={label}
      className={cn(
        "-mx-4 no-scrollbar overflow-x-auto overflow-y-hidden px-4",
        className
      )}
    >
      {children}
    </nav>
  )
}

function scrollToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
}

export function CaseRouteNavigation({
  routeId,
}: {
  routeId: CaseGuideRouteId
}) {
  const activeCase = getCaseGuideCase(routeId)
  const caseRoutes = caseGuideRoutes.filter((item) =>
    activeCase.routeIds.includes(item.id)
  )

  return (
    <div data-not-typeset className="border-b pb-4">
      <ScrollableCaseNavigation
        label="Види справ на малому екрані"
        activeId={activeCase.id}
        className="mb-4 flex gap-1 lg:hidden"
      >
        {caseGuideCases.map((item) => (
          <Button
            key={item.id}
            nativeButton={false}
            variant={item.id === activeCase.id ? "secondary" : "ghost"}
            size="sm"
            className="flex-none"
            aria-current={item.id === activeCase.id ? "page" : undefined}
            render={<Link to={`/cases/${item.defaultRouteId}`} />}
          >
            {item.label}
          </Button>
        ))}
      </ScrollableCaseNavigation>
      <p className="mb-2 text-xs font-medium text-muted-foreground">
        {activeCase.label} · оберіть підставу
      </p>
      <ScrollableCaseNavigation label="Підстави перебування" activeId={routeId}>
        <div className="flex min-w-max border-b">
          {caseRoutes.map((item) => {
            const isActive = item.id === routeId
            return (
              <Link
                key={item.id}
                to={`/cases/${item.id}`}
                aria-current={isActive ? "page" : undefined}
                onClick={isActive ? undefined : scrollToTop}
                className={cn(
                  "relative inline-flex h-10 flex-none items-center justify-center px-3 text-sm font-medium whitespace-nowrap text-foreground/60 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                  "after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-foreground after:opacity-0 after:transition-opacity",
                  isActive && "text-foreground after:opacity-100"
                )}
              >
                {item.tab}
              </Link>
            )
          })}
        </div>
      </ScrollableCaseNavigation>
    </div>
  )
}
