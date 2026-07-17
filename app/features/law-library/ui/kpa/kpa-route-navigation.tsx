import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router"

import {
  DocsSidebar,
  DocsSidebarBackLink,
  DocsSidebarItem,
} from "~/components/layout"
import {
  MobileSectionSelect,
  SectionNavigationList,
} from "~/components/patterns/section-navigation"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { kpaArticleIndex } from "~/data/legal-library/learning/kpa"
import type { KpaMode } from "../../model/kpa/kpa-route"
import {
  articleCountLabel,
  kpaNavigationGroups,
  kpaNavigationSectionCount,
  modeNavigationOptions,
  moduleNavigationOptions,
  practiceNavigation,
  sectionCountLabel,
} from "../../model/kpa/kpa-route"

function scrollToSection(id: string) {
  requestAnimationFrame(() => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  })
}

function NavigationRow({
  children,
  active,
  onClick,
}: {
  children: ReactNode
  active?: boolean
  onClick: () => void
}) {
  return (
    <DocsSidebarItem
      active={active}
      onClick={onClick}
      ariaPressed={active}
      className="min-h-8 px-2 py-1 text-[0.8rem] leading-5"
    >
      {children}
    </DocsSidebarItem>
  )
}

export function KpaNavigation({
  mode,
  onModeChange,
  selectedModule,
  onModuleChange,
  selectedArticle,
  onArticleChange,
}: {
  mode: KpaMode
  onModeChange: (mode: KpaMode) => void
  selectedModule: string
  onModuleChange: (id: string) => void
  selectedArticle: string
  onArticleChange: (article: string) => void
}) {
  const currentArticle = kpaArticleIndex.find(
    (entry) => entry.article === selectedArticle
  )

  return (
    <DocsSidebar ariaLabel="Навігація KPA">
      <DocsSidebarBackLink to="/law">До бібліотеки права</DocsSidebarBackLink>

      <section>
        <p className="px-2 text-xs font-medium text-muted-foreground">
          Розділи
        </p>
        <SectionNavigationList
          options={modeNavigationOptions}
          value={mode}
          onValueChange={onModeChange}
          itemClassName="min-h-8 px-2 py-1 text-navigation leading-5"
        />
      </section>

      {mode === "learning" ? (
        <section className="mt-8">
          <p className="px-2 text-xs font-medium text-muted-foreground">
            Модулі KPA
          </p>
          <SectionNavigationList
            options={moduleNavigationOptions}
            value={selectedModule}
            onValueChange={onModuleChange}
            itemClassName="min-h-8 px-2 py-1 text-navigation leading-5"
          />
        </section>
      ) : null}

      {mode === "articles" ? (
        <section className="mt-8">
          <div className="px-2">
            <p className="text-xs font-medium text-foreground">
              Розділи кодексу
            </p>
            <p className="mt-1 text-[0.7rem] leading-4 text-muted-foreground">
              {sectionCountLabel(kpaNavigationSectionCount)} ·{" "}
              {articleCountLabel(kpaArticleIndex.length)}
            </p>
          </div>

          <div className="mt-5 grid gap-6">
            {kpaNavigationGroups.map((group) => (
              <section key={group.division} aria-label={group.division}>
                <div className="flex items-start justify-between gap-2 px-2">
                  <h3 className="min-w-0 text-[0.7rem] leading-4 font-semibold tracking-wide text-muted-foreground uppercase">
                    {group.division}
                  </h3>
                  <span className="shrink-0 text-micro leading-4 text-muted-foreground tabular-nums">
                    {articleCountLabel(group.articleCount)}
                  </span>
                </div>

                <ul className="mt-2 grid gap-1">
                  {group.sections.map((section) => {
                    const active =
                      currentArticle?.division === section.division &&
                      currentArticle.chapter === section.chapter

                    return (
                      <li key={section.id}>
                        <Button
                          type="button"
                          variant={active ? "secondary" : "ghost"}
                          size="sm"
                          disabled={section.articleCount === 0}
                          aria-current={active ? "page" : undefined}
                          onClick={() => {
                            const first = kpaArticleIndex.find(
                              (entry) =>
                                entry.division === section.division &&
                                entry.chapter === section.chapter
                            )
                            if (first) onArticleChange(first.article)
                          }}
                          className="h-auto min-h-12 w-full items-start justify-start px-2 py-2 text-left whitespace-normal"
                        >
                          <span className="grid min-w-0 flex-1 gap-1">
                            <span className="text-[0.78rem] leading-5 font-medium break-words">
                              {section.chapter}
                            </span>
                            <span className="flex flex-wrap items-center gap-1.5">
                              <span className="text-navigation-meta leading-4 font-normal text-muted-foreground tabular-nums">
                                art. {section.start}–{section.end}
                              </span>
                              <Badge
                                variant="outline"
                                className="h-5 px-1.5 text-micro font-normal text-muted-foreground"
                              >
                                {articleCountLabel(section.articleCount)}
                              </Badge>
                            </span>
                          </span>
                        </Button>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
          </div>
        </section>
      ) : null}

      {mode === "practice" ? (
        <section className="mt-8">
          <p className="px-2 text-xs font-medium text-muted-foreground">
            У цьому практикумі
          </p>
          <ul className="mt-2 grid gap-0.5">
            {practiceNavigation.map((item) => (
              <NavigationRow
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </NavigationRow>
            ))}
          </ul>
        </section>
      ) : null}
    </DocsSidebar>
  )
}

export function MobileKpaNavigation({
  mode,
  onModeChange,
  selectedModule,
  onModuleChange,
}: {
  mode: KpaMode
  onModeChange: (mode: KpaMode) => void
  selectedModule: string
  onModuleChange: (id: string) => void
}) {
  return (
    <div className="grid min-w-0 gap-3 lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        nativeButton={false}
        render={<Link to="/law" />}
        aria-label="До бібліотеки права"
        className="h-auto min-h-9 w-full justify-start px-2 py-2 text-left whitespace-normal"
      >
        <ArrowLeft data-icon="inline-start" aria-hidden="true" />
        До бібліотеки права
      </Button>

      <MobileSectionSelect
        label="Розділ гайда"
        value={mode}
        options={modeNavigationOptions}
        onValueChange={onModeChange}
      />

      {mode === "learning" ? (
        <MobileSectionSelect
          label="Модуль KPA"
          value={selectedModule}
          options={moduleNavigationOptions}
          onValueChange={onModuleChange}
        />
      ) : null}
    </div>
  )
}
