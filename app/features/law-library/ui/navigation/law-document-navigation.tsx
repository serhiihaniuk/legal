import { useMemo, type ComponentProps } from "react"
import { useNavigate } from "react-router"

import {
  DocsSidebar,
  DocsSidebarBackLink,
  DocsSidebarItem,
  DocsSidebarList,
  DocsSidebarSection,
} from "~/components/layout"
import {
  MobileSectionSelect,
  type SectionNavigationOption,
} from "~/components/patterns/section-navigation"
import { Badge } from "~/components/ui/badge"
import {
  genericPracticeModules,
  getDocumentHomePath,
  getDocumentLearningPath,
  getDocumentPracticePath,
  getDocumentProvisionPath,
  getLegalLearningModules,
  listProvisions,
} from "~/data/legal-library"
import type { LegalDocument } from "~/data/legal-library"
import {
  getProvisionOutline,
  type ProvisionOutlineGroup,
} from "~/data/legal-library/navigation/provision-outline"
import { kpaGuideModules } from "~/data/legal-library/learning/kpa"

export type LawDocumentSection = "learning" | "provisions" | "practice"

type SectionLink = {
  id: LawDocumentSection
  label: string
  href: string
}

function articleCountLabel(count: number) {
  const lastTwoDigits = count % 100
  const lastDigit = count % 10
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${count} статей`
  if (lastDigit === 1) return `${count} стаття`
  if (lastDigit >= 2 && lastDigit <= 4) return `${count} статті`
  return `${count} статей`
}

function ProvisionNavigation({
  document,
  groups,
  currentProvisionId,
}: {
  document: LegalDocument
  groups: ProvisionOutlineGroup[]
  currentProvisionId?: string
}) {
  if (!groups.length) return null

  return (
    <DocsSidebarSection
      title={document.id === "kpa" ? "Розділи кодексу" : "Структура акта"}
      meta={articleCountLabel(document.provisionIds.length)}
    >
      <DocsSidebarList>
        {groups.map((group) => {
          const active = group.provisions.some(
            (provision) => provision.id === currentProvisionId
          )
          const first = group.provisions[0]
          const range =
            group.start === group.end
              ? group.start
              : `${group.start}–${group.end}`
          return (
            <DocsSidebarItem
              key={group.id}
              href={getDocumentProvisionPath(document.id, first.id)}
              active={active}
              size="default"
              className="min-h-12 items-start px-2 py-2"
            >
              <span className="grid min-w-0 flex-1 gap-1">
                <span className="text-[0.78rem] leading-5 font-medium break-words">
                  {group.title}
                </span>
                <span className="flex flex-wrap items-center gap-1.5">
                  <span className="text-navigation-meta leading-4 font-normal text-muted-foreground tabular-nums">
                    {range}
                  </span>
                  <Badge
                    variant="outline"
                    className="h-5 px-1.5 text-micro font-normal text-muted-foreground"
                  >
                    {articleCountLabel(group.provisions.length)}
                  </Badge>
                </span>
              </span>
            </DocsSidebarItem>
          )
        })}
      </DocsSidebarList>
    </DocsSidebarSection>
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
  const outline = useMemo(
    () => getProvisionOutline(document.id, provisions),
    [document.id, provisions]
  )
  const learningModules = useMemo(() => {
    if (document.id === "kpa") return kpaGuideModules
    return getLegalLearningModules(document.id)
  }, [document.id])
  const firstProvision = provisions[0]
  const activeOutlineGroup = outline.find((group) =>
    group.provisions.some((provision) => provision.id === currentProvisionId)
  )
  const sectionLinks: SectionLink[] = [
    {
      id: "learning",
      label: "Навчання",
      href: getDocumentHomePath(document.id),
    },
    {
      id: "provisions",
      label: "Статті",
      href: firstProvision
        ? getDocumentProvisionPath(
            document.id,
            currentProvisionId ?? firstProvision.id
          )
        : getDocumentHomePath(document.id),
    },
    {
      id: "practice",
      label: "Практикум",
      href: getDocumentPracticePath(document.id, genericPracticeModules[0].id),
    },
  ]

  function goToSection(section: LawDocumentSection) {
    const link = sectionLinks.find((item) => item.id === section)
    if (link) navigate(link.href)
  }

  const sectionOptions: readonly SectionNavigationOption<LawDocumentSection>[] =
    sectionLinks.map((item) => ({ value: item.id, label: item.label }))
  const outlineOptions: readonly SectionNavigationOption[] = outline.map(
    (group) => ({
      value: group.firstProvisionId,
      label: group.title,
      selectLabel: `${group.title} · ${group.start}–${group.end}`,
    })
  )
  const learningOptions: readonly SectionNavigationOption[] =
    learningModules.map((module) => ({
      value: module.id,
      label: module.title,
      selectLabel: `${module.order}. ${module.title}`,
    }))
  const practiceOptions: readonly SectionNavigationOption[] =
    genericPracticeModules.map((practice) => ({
      value: practice.id,
      label: practice.label,
    }))

  const navigation = (
    <DocsSidebar
      ariaLabel={`Навігація документа ${document.shortName}`}
      className="hidden lg:block"
    >
      <DocsSidebarBackLink to="/law">До бібліотеки права</DocsSidebarBackLink>
      <DocsSidebarSection title="Розділи" className="mt-0">
        <DocsSidebarList>
          {sectionLinks.map((item) => (
            <DocsSidebarItem
              key={item.id}
              href={item.href}
              active={activeSection === item.id}
            >
              {item.label}
            </DocsSidebarItem>
          ))}
        </DocsSidebarList>
      </DocsSidebarSection>

      {activeSection === "provisions" ? (
        <ProvisionNavigation
          document={document}
          groups={outline}
          currentProvisionId={currentProvisionId}
        />
      ) : null}

      {activeSection === "learning" ? (
        <DocsSidebarSection title={`Модулі ${document.shortName}`}>
          <DocsSidebarList>
            {learningModules.map((module) => (
              <DocsSidebarItem
                key={module.id}
                href={getDocumentLearningPath(document.id, module.id)}
                active={activeModuleId === module.id}
              >
                <span className="grid gap-0.5">
                  <span className="text-sm">{module.title}</span>
                  <span className="text-xs text-muted-foreground">
                    Модуль {module.order}
                  </span>
                </span>
              </DocsSidebarItem>
            ))}
          </DocsSidebarList>
        </DocsSidebarSection>
      ) : null}

      {activeSection === "practice" ? (
        <DocsSidebarSection title={`Практикум ${document.shortName}`}>
          <DocsSidebarList>
            {genericPracticeModules.map((practice) => (
              <DocsSidebarItem
                key={practice.id}
                href={getDocumentPracticePath(document.id, practice.id)}
                active={activePracticeId === practice.id}
              >
                {practice.label}
              </DocsSidebarItem>
            ))}
          </DocsSidebarList>
        </DocsSidebarSection>
      ) : null}
    </DocsSidebar>
  )

  if (!mobileOnly) return navigation

  return (
    <div className="grid min-w-0 gap-3 pb-2 lg:hidden">
      <DocsSidebarBackLink to="/law">До бібліотеки права</DocsSidebarBackLink>
      <MobileSectionSelect
        label="Розділ документа"
        value={activeSection}
        options={sectionOptions}
        onValueChange={goToSection}
      />

      {activeSection === "provisions" ? (
        <MobileSectionSelect
          label="Структура акта"
          value={
            activeOutlineGroup?.firstProvisionId ?? firstProvision?.id ?? ""
          }
          options={outlineOptions}
          onValueChange={(provisionId) => {
            if (provisionId) {
              navigate(getDocumentProvisionPath(document.id, provisionId))
            }
          }}
        />
      ) : null}

      {activeSection === "learning" ? (
        <MobileSectionSelect
          label="Модуль документа"
          value={activeModuleId ?? learningModules[0]?.id ?? ""}
          options={learningOptions}
          onValueChange={(moduleId) =>
            navigate(getDocumentLearningPath(document.id, moduleId))
          }
        />
      ) : null}

      {activeSection === "practice" ? (
        <MobileSectionSelect
          label="Практикум документа"
          value={activePracticeId ?? genericPracticeModules[0].id}
          options={practiceOptions}
          onValueChange={(practiceId) =>
            navigate(getDocumentPracticePath(document.id, practiceId))
          }
        />
      ) : null}
    </div>
  )
}

export function LawDocumentMobileNavigation(
  props: Omit<ComponentProps<typeof LawDocumentNavigation>, "mobileOnly">
) {
  return <LawDocumentNavigation {...props} mobileOnly />
}
