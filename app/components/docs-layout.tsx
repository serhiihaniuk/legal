import { useEffect, useMemo, useState, type ReactNode } from "react"

import { ScrollArea } from "~/components/ui/scroll-area"

export type TocItem = {
  href: string
  label: string
  depth?: 2 | 3 | 4
}

function DocsTableOfContents({ toc }: { toc: readonly TocItem[] }) {
  const itemIds = useMemo(
    () => toc.map((item) => item.href.replace(/^#/, "")),
    [toc]
  )
  const [activeId, setActiveId] = useState(itemIds[0] ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    for (const id of itemIds) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [itemIds])

  return (
    <div className="flex flex-col gap-2 p-4 pt-0 text-sm">
      <p className="h-6 bg-background text-xs font-medium text-muted-foreground">
        На цій сторінці
      </p>
      {toc.map((item) => {
        const id = item.href.replace(/^#/, "")
        return (
          <a
            key={item.href}
            href={item.href}
            data-active={activeId === id}
            data-depth={item.depth ?? 2}
            className="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground data-[active=true]:font-medium data-[active=true]:text-foreground data-[depth=3]:pl-4 data-[depth=4]:pl-6"
          >
            {item.label}
          </a>
        )
      })}
    </div>
  )
}

export function DocsLayout({
  navigation,
  children,
  toc,
}: {
  navigation: ReactNode
  children: ReactNode
  toc: readonly TocItem[]
}) {
  return (
    <div className="container-wrapper flex flex-1 flex-col px-2">
      <div className="min-h-min flex-1 items-start px-0 [--sidebar-width:calc(var(--spacing)*72)] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-menu-width:calc(var(--spacing)*64)] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <aside className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overflow-hidden overscroll-none bg-transparent lg:flex">
          <div className="absolute top-12 right-2 bottom-0 hidden h-full w-px bg-[linear-gradient(to_bottom,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)] lg:flex" />
          <ScrollArea
            showScrollbar={false}
            className="h-full w-(--sidebar-menu-width) pt-12 pr-2 pl-2.5"
          >
            {navigation}
          </ScrollArea>
        </aside>

        <div
          data-slot="docs"
          className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
        >
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="h-(--top-spacing) shrink-0" />
            <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8">
              {children}
            </div>
          </div>

          <aside className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
            <div className="h-(--top-spacing) shrink-0" />
            <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
              <DocsTableOfContents toc={toc} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
