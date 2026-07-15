import { ArrowLeft } from "lucide-react"
import { useMemo, type ComponentProps } from "react"
import { Link, useNavigate } from "react-router"

import { kpaArticleIndex, kpaArticleSections } from "~/data/kpa-article-index"
import {
  genericPracticeModules,
  getDocumentHomePath,
  getLegalLearningModules,
  getDocumentLearningPath,
  getDocumentPracticePath,
  getDocumentProvisionPath,
  listProvisions,
} from "~/data/legal-library"
import type {
  LegalDocument,
  LegalProvision,
  LegalProvisionKind,
} from "~/data/legal-library"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"

export type LawDocumentSection = "learning" | "provisions" | "practice"

type KpaNavigationSection = (typeof kpaArticleSections)[number] & {
  articleCount: number
  provisionIds: string[]
  firstProvisionId?: string
}

type KpaNavigationGroup = {
  division: string
  articleCount: number
  sections: KpaNavigationSection[]
}

type ProvisionNavigationGroup = {
  id: string
  kind: LegalProvisionKind
  provisions: LegalProvision[]
  range: string
  count: number
}

const PROVISION_KIND_ORDER: LegalProvisionKind[] = [
  "article",
  "paragraph",
  "section",
  "point",
  "annex",
  "other",
]

const provisionKindInfo: Record<
  LegalProvisionKind,
  { title: string; countNoun: string }
> = {
  article: { title: "Artykuły", countNoun: "artykułów" },
  paragraph: { title: "Paragrafy", countNoun: "paragrafów" },
  section: { title: "Sekcje", countNoun: "sekcji" },
  point: { title: "Punkty", countNoun: "punktów" },
  annex: { title: "Załączniki", countNoun: "załączników" },
  other: { title: "Pozostałe", countNoun: "pozycji" },
}

const MAX_PROVISION_NAVIGATION_LINKS = 14

function normalizeKpaArticle(value: string) {
  return value
    .replace(/^Art\.\s*/u, "")
    .replace(/\s+\(.*$/u, "")
    .replace(/\s+/gu, "")
    .replace(/\.$/u, "")
    .trim()
}

function articleCountLabel(count: number) {
  const lastTwoDigits = count % 100
  const lastDigit = count % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${count} статей`
  if (lastDigit === 1) return `${count} стаття`
  if (lastDigit >= 2 && lastDigit <= 4) return `${count} статті`
  return `${count} статей`
}

function provisionRangeLabel(
  first: LegalProvision,
  last: LegalProvision
) {
  return first.locator === last.locator
    ? first.locator
    : `${first.locator}–${last.locator}`
}

function buildKpaNavigationGroups(
  provisions: readonly LegalProvision[]
): KpaNavigationGroup[] {
  const provisionByArticle = new Map(
    provisions.map((provision) => [
      normalizeKpaArticle(provision.locator),
      provision,
    ])
  )
  const sections: KpaNavigationSection[] = kpaArticleSections.map((section) => {
    const entries = kpaArticleIndex.filter(
      (entry) =>
        entry.division === section.division && entry.chapter === section.chapter
    )
    const sectionProvisions = entries
      .map((entry) => provisionByArticle.get(normalizeKpaArticle(entry.article)))
      .filter((provision): provision is LegalProvision => provision !== undefined)

    return {
      ...section,
      articleCount: entries.length,
      provisionIds: sectionProvisions.map((provision) => provision.id),
      firstProvisionId: sectionProvisions[0]?.id,
    }
  })

  return sections.reduce<KpaNavigationGroup[]>((groups, section) => {
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
  }, [])
}

function buildProvisionNavigationGroups(
  provisions: readonly LegalProvision[]
): ProvisionNavigationGroup[] {
  const ordered = [...provisions].sort((a, b) => a.order - b.order)
  const byKind = new Map<LegalProvisionKind, LegalProvision[]>()

  for (const provision of ordered) {
    const bucket = byKind.get(provision.kind) ?? []
    bucket.push(provision)
    byKind.set(provision.kind, bucket)
  }

  const buckets = PROVISION_KIND_ORDER.flatMap((kind) => {
    const kindProvisions = byKind.get(kind)
    return kindProvisions
      ? [{ kind, provisions: kindProvisions }]
      : []
  })
  const targetLinkCount = Math.min(MAX_PROVISION_NAVIGATION_LINKS, ordered.length)
  const slots = new Map<LegalProvisionKind, number>(
    buckets.map((bucket) => [bucket.kind, 1])
  )
  let remainingSlots = targetLinkCount - buckets.length

  while (remainingSlots > 0) {
    let bestBucketIndex = -1
    let bestDensity = -1

    buckets.forEach((bucket, index) => {
      const currentSlots = slots.get(bucket.kind) ?? 1
      if (currentSlots >= bucket.provisions.length) return
      const density = bucket.provisions.length / currentSlots
      if (density > bestDensity) {
        bestBucketIndex = index
        bestDensity = density
      }
    })

    if (bestBucketIndex < 0) break
    const kind = buckets[bestBucketIndex].kind
    slots.set(kind, (slots.get(kind) ?? 1) + 1)
    remainingSlots -= 1
  }

  return buckets.flatMap((bucket) => {
    const bucketSlots = slots.get(bucket.kind) ?? 1
    const chunkSize = Math.max(1, Math.ceil(bucket.provisions.length / bucketSlots))

    return Array.from(
      { length: Math.ceil(bucket.provisions.length / chunkSize) },
      (_, chunkIndex) => {
        const chunk = bucket.provisions.slice(
          chunkIndex * chunkSize,
          (chunkIndex + 1) * chunkSize
        )
        const first = chunk[0]
        const last = chunk[chunk.length - 1]
        return {
          id: `${bucket.kind}-${first.id}`,
          kind: bucket.kind,
          provisions: chunk,
          range: provisionRangeLabel(first, last),
          count: chunk.length,
        }
      }
    )
  })
}

function ProvisionNavigation({
  document,
  currentProvisionId,
  kpaNavigationGroups,
  provisionNavigationGroups,
}: {
  document: LegalDocument
  currentProvisionId?: string
  kpaNavigationGroups: KpaNavigationGroup[]
  provisionNavigationGroups: ProvisionNavigationGroup[]
}) {
  if (document.id === "kpa") {
    return (
      <section className="mt-8" aria-label="Індекс статей KPA">
        <div className="px-2">
          <p className="text-xs font-medium text-foreground">Розділи кодексу</p>
          <p className="mt-1 text-[0.7rem] leading-4 text-muted-foreground">
            {kpaArticleSections.length} розділів · {articleCountLabel(kpaArticleIndex.length)}
          </p>
        </div>

        <div className="mt-5 grid gap-6">
          {kpaNavigationGroups.map((group) => {
            const sections = group.sections.filter(
              (section) => section.firstProvisionId
            )
            if (sections.length === 0) return null

            return (
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
                  {sections.map((section) => {
                    const active = section.provisionIds.includes(
                      currentProvisionId ?? ""
                    )
                    const firstProvisionId = section.firstProvisionId
                    if (!firstProvisionId) return null

                    return (
                      <li key={section.id}>
                        <Button
                          variant={active ? "secondary" : "ghost"}
                          size="sm"
                          nativeButton={false}
                          render={
                            <Link
                              to={getDocumentProvisionPath(
                                document.id,
                                firstProvisionId
                              )}
                            />
                          }
                          aria-current={active ? "page" : undefined}
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
            )
          })}
        </div>
      </section>
    )
  }

  if (provisionNavigationGroups.length === 0) return null

  return (
    <section className="mt-8" aria-label={`Індекс положень ${document.shortName}`}>
      <div className="px-2">
        <p className="text-xs font-medium text-foreground">Індекс положень</p>
        <p className="mt-1 text-[0.7rem] leading-4 text-muted-foreground">
          Діапазони за видом положення
        </p>
      </div>

      <div className="mt-5 grid gap-5">
        {PROVISION_KIND_ORDER.map((kind) => {
          const groups = provisionNavigationGroups.filter(
            (group) => group.kind === kind
          )
          if (groups.length === 0) return null
          const kindInfo = provisionKindInfo[kind]

          return (
            <section key={kind} aria-label={kindInfo.title}>
              <h3 className="px-2 text-[0.7rem] leading-4 font-semibold tracking-wide text-muted-foreground uppercase">
                {kindInfo.title}
              </h3>
              <ul className="mt-2 grid gap-1">
                {groups.map((group) => {
                  const active = group.provisions.some(
                    (provision) => provision.id === currentProvisionId
                  )
                  const firstProvision = group.provisions[0]
                  return (
                    <li key={group.id}>
                      <Button
                        variant={active ? "secondary" : "ghost"}
                        size="sm"
                        nativeButton={false}
                        render={
                          <Link
                            to={getDocumentProvisionPath(
                              document.id,
                              firstProvision.id
                            )}
                          />
                        }
                        aria-current={active ? "page" : undefined}
                        className="h-auto min-h-10 w-full items-start justify-start px-2 py-2 text-left whitespace-normal"
                      >
                        <span className="grid min-w-0 flex-1 gap-1">
                          <span className="text-[0.78rem] leading-5 font-medium break-words">
                            {group.range}
                          </span>
                          <span className="flex flex-wrap items-center gap-1.5">
                            <Badge
                              variant="outline"
                              className="h-5 px-1.5 text-[0.65rem] font-normal text-muted-foreground"
                            >
                              {group.count} {kindInfo.countNoun}
                            </Badge>
                          </span>
                        </span>
                      </Button>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export function LawDocumentNavigation({
  document,
  activeSection,
  activeModuleId,
  activePracticeId,
  currentProvisionId,
  mobileOnly = false,
}: {
  document: LegalDocument
  activeSection: LawDocumentSection
  activeModuleId?: string
  activePracticeId?: string
  currentProvisionId?: string
  mobileOnly?: boolean
}) {
  const navigate = useNavigate()
  const provisions = useMemo(() => listProvisions(document.id), [document.id])
  const learningModules = useMemo(
    () => getLegalLearningModules(document.id),
    [document.id]
  )
  const firstProvision = provisions[0]
  const kpaNavigationGroups = useMemo(
    () => (document.id === "kpa" ? buildKpaNavigationGroups(provisions) : []),
    [document.id, provisions]
  )
  const provisionNavigationGroups = useMemo(
    () => (document.id === "kpa" ? [] : buildProvisionNavigationGroups(provisions)),
    [document.id, provisions]
  )
  const provisionId = currentProvisionId ?? firstProvision?.id
  const sectionLinks = [
    {
      id: "learning" as const,
      label: "Навчання",
      href: getDocumentHomePath(document.id),
    },
    {
      id: "provisions" as const,
      label: "Статті",
      href: provisionId
        ? getDocumentProvisionPath(document.id, provisionId)
        : getDocumentHomePath(document.id),
    },
    {
      id: "practice" as const,
      label: "Практикум",
      href:
        document.id === "kpa"
          ? "/law/kpa/practice/case-workflow"
          : getDocumentPracticePath(document.id, "case-workflow"),
    },
  ]

  function goToSection(section: LawDocumentSection) {
    const link = sectionLinks.find((item) => item.id === section)
    if (link) navigate(link.href)
  }

  return (
    <>
      {!mobileOnly ? (
        <nav
          aria-label={`Навігація документа ${document.shortName}`}
          className="hidden pb-10 lg:block"
        >
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<Link to="/law" />}
            aria-label="До бібліотеки права"
            className="mb-6 h-auto min-h-9 w-full justify-start px-2 py-2 text-left whitespace-normal"
          >
            <ArrowLeft data-icon="inline-start" aria-hidden="true" />
            До бібліотеки права
          </Button>
          <p className="px-2 text-xs font-medium text-muted-foreground">
            Розділи
          </p>
          <ul className="mt-2 grid gap-0.5">
            {sectionLinks.map((item) => (
              <li key={item.id}>
                <Button
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  size="sm"
                  nativeButton={false}
                  render={<Link to={item.href} />}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className="h-auto min-h-10 w-full justify-start px-2 py-2 text-left whitespace-normal"
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>

          {activeSection === "provisions" ? (
            <ProvisionNavigation
              document={document}
              currentProvisionId={currentProvisionId}
              kpaNavigationGroups={kpaNavigationGroups}
              provisionNavigationGroups={provisionNavigationGroups}
            />
          ) : null}

          {activeSection === "learning" && document.id !== "kpa" ? (
            <section className="mt-8">
              <p className="px-2 text-xs font-medium text-muted-foreground">
                Модулі {document.shortName}
              </p>
              <ul className="mt-2 grid gap-0.5">
                {learningModules.map((module) => (
                  <li key={module.id}>
                    <Button
                      variant={
                        activeModuleId === module.id ? "secondary" : "ghost"
                      }
                      size="sm"
                      nativeButton={false}
                      render={
                        <Link
                          to={getDocumentLearningPath(document.id, module.id)}
                        />
                      }
                      aria-current={
                        activeModuleId === module.id ? "page" : undefined
                      }
                      className="h-auto min-h-9 w-full justify-start px-2 py-1.5 text-left whitespace-normal"
                    >
                      <span className="grid gap-0.5">
                        <span className="text-sm">{module.title}</span>
                        <span className="text-xs text-muted-foreground">
                          Модуль {module.order}
                        </span>
                      </span>
                    </Button>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {activeSection === "practice" && document.id !== "kpa" ? (
            <section className="mt-8">
              <p className="px-2 text-xs font-medium text-muted-foreground">
                Практикум {document.shortName}
              </p>
              <ul className="mt-2 grid gap-0.5">
                {genericPracticeModules.map((practice) => (
                  <li key={practice.id}>
                    <Button
                      variant={
                        activePracticeId === practice.id ? "secondary" : "ghost"
                      }
                      size="sm"
                      nativeButton={false}
                      render={
                        <Link
                          to={getDocumentPracticePath(document.id, practice.id)}
                        />
                      }
                      aria-current={
                        activePracticeId === practice.id ? "page" : undefined
                      }
                      className="h-auto min-h-9 w-full justify-start px-2 py-1.5 text-left whitespace-normal"
                    >
                      {practice.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </nav>
      ) : null}

      <div className="grid min-w-0 gap-3 pb-2 lg:hidden">
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
            Розділ документа
          </span>
          <select
            value={activeSection}
            onChange={(event) =>
              goToSection(event.target.value as LawDocumentSection)
            }
            className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
            aria-label="Розділ документа"
          >
            {sectionLinks.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        {activeSection === "learning" && document.id !== "kpa" ? (
          <label className="grid min-w-0 gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Модуль документа
            </span>
            <select
              value={activeModuleId ?? learningModules[0]?.id ?? ""}
              onChange={(event) =>
                navigate(
                  getDocumentLearningPath(document.id, event.target.value)
                )
              }
              className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
              aria-label="Модуль документа"
            >
              {learningModules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.order}. {module.title}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        {activeSection === "practice" && document.id !== "kpa" ? (
          <label className="grid min-w-0 gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Практикум документа
            </span>
            <select
              value={activePracticeId ?? genericPracticeModules[0].id}
              onChange={(event) =>
                navigate(
                  getDocumentPracticePath(document.id, event.target.value)
                )
              }
              className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
              aria-label="Практикум документа"
            >
              {genericPracticeModules.map((practice) => (
                <option key={practice.id} value={practice.id}>
                  {practice.label}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>
    </>
  )
}

export function LawDocumentMobileNavigation(
  props: Omit<ComponentProps<typeof LawDocumentNavigation>, "mobileOnly">
) {
  return <LawDocumentNavigation {...props} mobileOnly />
}
