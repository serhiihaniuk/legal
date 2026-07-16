import { ArrowLeft } from "lucide-react"
import { useMemo, type ReactNode } from "react"
import {
  Link,
  useLoaderData,
  useNavigate,
  useParams,
  useSearchParams,
  type LoaderFunctionArgs,
} from "react-router"

import { DocsLayout, type TocItem } from "~/components/docs-layout"
import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
} from "~/components/law-document-navigation"
import {
  DocsSidebar,
  DocsSidebarBackLink,
  DocsSidebarItem,
} from "~/components/docs-sidebar-navigation"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  KpaArticlesContent,
  kpaArticlesToc,
} from "~/components/kpa-articles-content"
import {
  KpaLearningContent,
  kpaLearningContentToc,
} from "~/components/kpa-learning-content"
import {
  KpaPracticeContent,
  kpaPracticeToc,
} from "~/components/kpa-practice-content"
import {
  getKpaArticleExplanation,
  getKpaArticleExplanations,
} from "~/data/legal-library/editorial/kpa/compat"
import { kpaArticleIndex, kpaArticleSections } from "~/data/kpa-article-index"
import { getDocument, listProvisions } from "~/data/legal-library"
import {
  kpaGuideModuleArticles,
  type KpaGuideModuleId,
} from "~/data/kpa-guide-module-articles"
import { kpaGuideModules } from "~/data/kpa-guide-data"

type KpaMode = "learning" | "articles" | "practice"

const modes: Array<{ id: KpaMode; label: string }> = [
  { id: "learning", label: "Навчання" },
  { id: "articles", label: "Статті" },
  { id: "practice", label: "Практикум" },
]

const practiceNavigation = [
  { id: "case-algorithm", label: "Алгоритм справи" },
  { id: "wezwanie-anatomy", label: "Анатомія wezwania" },
  { id: "practice-check", label: "Самоперевірка" },
]

const kpaProvisionIdByArticle = new Map(
  listProvisions("kpa").map((provision) => [
    provision.locator.replace(/^Art\.\s*/u, ""),
    provision.id,
  ])
)

export async function loader({ request, params }: LoaderFunctionArgs) {
  const searchParams = new URL(request.url).searchParams
  const routeMode: KpaMode | undefined = params.practiceId
    ? "practice"
    : params.moduleId
      ? "learning"
      : undefined
  const requestedMode = routeMode ?? searchParams.get("view")
  const mode: KpaMode = modes.some((item) => item.id === requestedMode)
    ? (requestedMode as KpaMode)
    : "learning"
  const requestedArticle = searchParams.get("article")
  const selectedArticle = kpaArticleIndex.some(
    (item) => item.article === requestedArticle
  )
    ? (requestedArticle as string)
    : (kpaArticleIndex[0]?.article ?? "1")
  const requestedModule = params.moduleId ?? searchParams.get("module")
  const selectedModule = kpaGuideModules.some(
    (item) => item.id === requestedModule
  )
    ? (requestedModule as KpaGuideModuleId)
    : ((kpaGuideModules[0]?.id ?? "system") as KpaGuideModuleId)
  const [explanation, moduleArticleExplanations] = await Promise.all([
    mode === "articles"
      ? getKpaArticleExplanation(selectedArticle)
      : Promise.resolve(undefined),
    mode === "learning"
      ? getKpaArticleExplanations(
          kpaGuideModuleArticles[selectedModule].articles
        )
      : Promise.resolve([]),
  ])

  if (mode === "articles" && !explanation) {
    throw new Response("KPA article explanation not found", { status: 404 })
  }

  return { explanation, moduleArticleExplanations }
}

type KpaNavigationSection = (typeof kpaArticleSections)[number] & {
  articleCount: number
}

type KpaNavigationGroup = {
  division: string
  articleCount: number
  sections: KpaNavigationSection[]
}

const kpaSectionsWithCounts: KpaNavigationSection[] = kpaArticleSections.map(
  (section) => ({
    ...section,
    articleCount: kpaArticleIndex.filter(
      (entry) =>
        entry.division === section.division && entry.chapter === section.chapter
    ).length,
  })
)

const kpaNavigationGroups = kpaSectionsWithCounts.reduce<KpaNavigationGroup[]>(
  (groups, section) => {
    const group = groups.find((item) => item.division === section.division)

    if (group) {
      group.sections.push(section)
      group.articleCount += section.articleCount
    } else {
      groups.push({
        division: section.division,
        articleCount: section.articleCount,
        sections: [section],
      })
    }

    return groups
  },
  []
)

function articleCountLabel(count: number) {
  const lastTwoDigits = count % 100
  const lastDigit = count % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${count} статей`
  if (lastDigit === 1) return `${count} стаття`
  if (lastDigit >= 2 && lastDigit <= 4) return `${count} статті`
  return `${count} статей`
}

function sectionCountLabel(count: number) {
  const lastTwoDigits = count % 100
  const lastDigit = count % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${count} розділів`
  if (lastDigit === 1) return `${count} розділ`
  if (lastDigit >= 2 && lastDigit <= 4) return `${count} розділи`
  return `${count} розділів`
}

function scrollToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
}

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

function KpaNavigation({
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
        <ul className="mt-2 grid gap-0.5">
          {modes.map((item) => (
            <NavigationRow
              key={item.id}
              active={mode === item.id}
              onClick={() => onModeChange(item.id)}
            >
              {item.label}
            </NavigationRow>
          ))}
        </ul>
      </section>

      {mode === "learning" ? (
        <section className="mt-8">
          <p className="px-2 text-xs font-medium text-muted-foreground">
            Модулі KPA
          </p>
          <ul className="mt-2 grid gap-0.5">
            {kpaGuideModules.map((module) => (
              <NavigationRow
                key={module.id}
                active={selectedModule === module.id}
                onClick={() => onModuleChange(module.id)}
              >
                {module.title}
              </NavigationRow>
            ))}
          </ul>
        </section>
      ) : null}

      {mode === "articles" ? (
        <section className="mt-8">
          <div className="px-2">
            <p className="text-xs font-medium text-foreground">
              Розділи кодексу
            </p>
            <p className="mt-1 text-[0.7rem] leading-4 text-muted-foreground">
              {sectionCountLabel(kpaArticleSections.length)} ·{" "}
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
                  <span className="shrink-0 text-[0.65rem] leading-4 text-muted-foreground tabular-nums">
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
                              <span className="text-[0.68rem] leading-4 font-normal text-muted-foreground tabular-nums">
                                art. {section.start}–{section.end}
                              </span>
                              <Badge
                                variant="outline"
                                className="h-5 px-1.5 text-[0.65rem] font-normal text-muted-foreground"
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

function MobileKpaNavigation({
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

      <label className="grid min-w-0 gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Розділ гайда
        </span>
        <select
          value={mode}
          onChange={(event) => onModeChange(event.target.value as KpaMode)}
          className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
        >
          {modes.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      {mode === "learning" ? (
        <label className="grid min-w-0 gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Модуль KPA
          </span>
          <select
            value={selectedModule}
            onChange={(event) => onModuleChange(event.target.value)}
            className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
          >
            {kpaGuideModules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.order}. {module.title}
              </option>
            ))}
          </select>
        </label>
      ) : null}
    </div>
  )
}

export default function KpaGuide() {
  const { explanation, moduleArticleExplanations } =
    useLoaderData<typeof loader>()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const params = useParams()
  const canonicalLawMode = Boolean(params.moduleId || params.practiceId)
  const kpaDocument = getDocument("kpa")
  const routeMode: KpaMode | undefined = params.practiceId
    ? "practice"
    : params.moduleId
      ? "learning"
      : undefined
  const requestedMode = routeMode ?? searchParams.get("view")
  const mode: KpaMode = modes.some((item) => item.id === requestedMode)
    ? (requestedMode as KpaMode)
    : "learning"
  const requestedModule = params.moduleId ?? searchParams.get("module")
  const selectedModule = kpaGuideModules.some(
    (item) => item.id === requestedModule
  )
    ? (requestedModule as string)
    : (kpaGuideModules[0]?.id ?? "system")
  const requestedArticle = searchParams.get("article")
  const selectedArticle = kpaArticleIndex.some(
    (item) => item.article === requestedArticle
  )
    ? (requestedArticle as string)
    : (kpaArticleIndex[0]?.article ?? "1")

  const toc = useMemo<readonly TocItem[]>(() => {
    if (mode === "articles") return kpaArticlesToc
    if (mode === "practice") return kpaPracticeToc
    return kpaLearningContentToc
  }, [mode])

  function changeMode(nextMode: KpaMode) {
    if (canonicalLawMode) {
      if (nextMode === "learning") {
        navigate(`/law/kpa/learn/${selectedModule}`)
      } else if (nextMode === "practice") {
        navigate("/law/kpa/practice/case-workflow")
      } else {
        const provisionId = kpaProvisionIdByArticle.get(selectedArticle)
        navigate(
          provisionId ? `/law/kpa/provisions/${provisionId}` : "/law/kpa"
        )
      }
      scrollToTop()
      return
    }

    const next = new URLSearchParams(searchParams)
    if (nextMode === "learning") {
      next.delete("view")
      next.set("module", selectedModule)
      next.delete("article")
    } else {
      next.set("view", nextMode)
      next.delete("module")
      if (nextMode === "articles") next.set("article", selectedArticle)
      else next.delete("article")
    }
    setSearchParams(next)
    scrollToTop()
  }

  function changeModule(id: string) {
    if (canonicalLawMode) {
      navigate(`/law/kpa/learn/${id}`)
      scrollToTop()
      return
    }

    const next = new URLSearchParams(searchParams)
    next.delete("view")
    next.set("module", id)
    next.delete("article")
    setSearchParams(next)
    scrollToTop()
  }

  function changeArticle(article: string) {
    if (canonicalLawMode) {
      const provisionId = kpaProvisionIdByArticle.get(article)
      navigate(provisionId ? `/law/kpa/provisions/${provisionId}` : "/law/kpa")
      scrollToTop()
      return
    }

    const next = new URLSearchParams(searchParams)
    next.set("view", "articles")
    next.set("article", article)
    next.delete("module")
    setSearchParams(next)
    scrollToTop()
  }

  return (
    <DocsLayout
      navigation={
        canonicalLawMode && kpaDocument ? (
          <LawDocumentNavigation
            document={kpaDocument}
            activeSection={mode === "practice" ? "practice" : "learning"}
            activeModuleId={selectedModule}
            activePracticeId={params.practiceId}
          />
        ) : (
          <KpaNavigation
            mode={mode}
            onModeChange={changeMode}
            selectedModule={selectedModule}
            onModuleChange={changeModule}
            selectedArticle={selectedArticle}
            onArticleChange={changeArticle}
          />
        )
      }
      toc={toc}
    >
      {canonicalLawMode && kpaDocument ? (
        <LawDocumentMobileNavigation
          document={kpaDocument}
          activeSection={mode === "practice" ? "practice" : "learning"}
          activeModuleId={selectedModule}
          activePracticeId={params.practiceId}
        />
      ) : (
        <MobileKpaNavigation
          mode={mode}
          onModeChange={changeMode}
          selectedModule={selectedModule}
          onModuleChange={changeModule}
        />
      )}

      {mode === "learning" ? (
        <KpaLearningContent
          selectedId={selectedModule}
          articleExplanations={moduleArticleExplanations}
          onSelectModule={changeModule}
        />
      ) : null}
      {mode === "articles" ? (
        <KpaArticlesContent
          selectedArticle={selectedArticle}
          explanation={explanation!}
          onSelectArticle={changeArticle}
        />
      ) : null}
      {mode === "practice" ? <KpaPracticeContent /> : null}
    </DocsLayout>
  )
}
