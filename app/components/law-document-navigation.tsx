import { useMemo, type ComponentProps } from "react"
import { Link, useNavigate } from "react-router"

import { listProvisions } from "~/data/legal-library"
import {
  genericLearningModules,
  genericPracticeModules,
  getDocumentHomePath,
  getDocumentLearningPath,
  getDocumentPracticePath,
  getDocumentProvisionPath,
} from "~/data/legal-library"
import type { LegalDocument } from "~/data/legal-library"
import { Button } from "~/components/ui/button"

export type LawDocumentSection = "learning" | "provisions" | "practice"

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
  const firstProvision = useMemo(
    () => listProvisions(document.id)[0],
    [document.id]
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

          {activeSection === "learning" && document.id !== "kpa" ? (
            <section className="mt-8">
              <p className="px-2 text-xs font-medium text-muted-foreground">
                Модулі {document.shortName}
              </p>
              <ul className="mt-2 grid gap-0.5">
                {genericLearningModules.map((module) => (
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
                        <span className="text-sm">{module.label}</span>
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
              value={activeModuleId ?? genericLearningModules[0].id}
              onChange={(event) =>
                navigate(
                  getDocumentLearningPath(document.id, event.target.value)
                )
              }
              className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
              aria-label="Модуль документа"
            >
              {genericLearningModules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.order}. {module.label}
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
