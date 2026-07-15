import { Menu } from "lucide-react"
import { Link, useLocation } from "react-router"

import { Button } from "~/components/ui/button"
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
  { label: "KPA", href: "/guide/kpa" },
  { label: "Карта права", href: "/map" },
  { label: "Документи", href: "/documents" },
  {
    label: "Прикладова справа",
    href: "/cases/cukr",
    activePrefix: "/cases/",
  },
  { label: "План навчання", href: "/study" },
]

function isActive(pathname: string, href: string, activePrefix?: string) {
  return href === "/"
    ? pathname === href
    : pathname.startsWith(activePrefix ?? href)
}

export function SiteHeader() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container-wrapper px-6">
        <div className="flex h-(--header-height) items-center">
          <nav
            className="hidden items-center gap-0 lg:flex"
            aria-label="Головна навігація"
          >
            {routes.map((item) => (
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
                  className="lg:hidden"
                  aria-label="Відкрити меню"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="w-[min(22rem,90vw)]">
              <SheetHeader className="border-b">
                <SheetTitle>Legalizacja</SheetTitle>
                <SheetDescription>Навчальний атлас права</SheetDescription>
              </SheetHeader>
              <nav className="grid px-4" aria-label="Мобільна навігація">
                {routes.map((item) => (
                  <SheetClose
                    key={item.href}
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
        </div>
      </div>
    </header>
  )
}
