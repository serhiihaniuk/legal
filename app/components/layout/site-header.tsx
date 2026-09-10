import { ShellIntersections } from "./shell-intersections"
import { Menu } from "lucide-react"
import { Link, useLocation } from "react-router"

import { Button } from "~/components/ui/button"
import { Brand } from "~/components/brand"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { cn } from "~/lib/utils"

const routes = [
  { label: "Legalizacja", href: "/" },
  { label: "Право", href: "/law" },
  { label: "Карта права", href: "/map" },
  { label: "Документи", href: "/documents" },
  {
    label: "Справи",
    href: "/cases/cukr",
    activePrefix: "/cases/",
  },
  { label: "Путівник по темах", href: "/study" },
]

function isActive(pathname: string, href: string, activePrefix?: string) {
  return href === "/"
    ? pathname === href
    : pathname.startsWith(activePrefix ?? href)
}

export function SiteHeader() {
  const { pathname } = useLocation()

  return (
    <header
      data-home={pathname === "/" ? "" : undefined}
      className="atlas-site-header sticky top-0 z-50 w-full bg-background"
    >
      <div className="atlas-shell container-wrapper px-2">
        <div className="atlas-header-grid relative grid h-(--header-height) grid-cols-[1fr_auto] items-center border-x border-[var(--atlas-line)] lg:grid-cols-[var(--atlas-sidebar-width)_minmax(0,1fr)] xl:grid-cols-[var(--atlas-sidebar-width)_minmax(0,1fr)_var(--atlas-sidebar-width)]">
          <div className="atlas-header-brand flex h-full items-center px-2.5">
            <Button
              variant="ghost"
              nativeButton={false}
              render={<Link to="/" />}
              className="px-2.5"
            >
              <Brand />
            </Button>
          </div>
          <nav
            className="atlas-header-navigation hidden h-full items-center gap-0 px-6 lg:flex"
            aria-label="Головна навігація"
          >
            {routes.slice(1).map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                className="px-2.5"
                nativeButton={false}
                render={<Link to={item.href} />}
              >
                <span
                  className={cn(
                    "relative",
                    isActive(pathname, item.href, item.activePrefix) &&
                      "font-semibold"
                  )}
                >
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="mr-4 lg:hidden"
                  aria-label="Відкрити меню"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="w-[min(22rem,90vw)]">
              <SheetHeader className="border-b">
                <SheetTitle>
                  <Brand />
                </SheetTitle>
                <SheetDescription>Навчальний атлас права</SheetDescription>
              </SheetHeader>
              <nav className="grid px-4" aria-label="Мобільна навігація">
                {routes.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={
                      <Link
                        to={item.href}
                        className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium hover:bg-muted"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          {pathname !== "/" && <ShellIntersections />}
        </div>
      </div>
    </header>
  )
}
