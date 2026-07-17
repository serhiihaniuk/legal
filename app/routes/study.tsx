import { useSearchParams } from "react-router"

import { DocsLayout, DocsSidebar } from "~/components/layout"
import {
  MobileSectionSelect,
  SectionNavigationList,
  type SectionNavigationOption,
} from "~/components/patterns/section-navigation"
import { StudyPlanContent, studyPlanToc } from "~/features/study"
import { studyModules } from "~/data/study/plan-data"
import { useUrlSelection } from "~/hooks/use-url-selection"

export function meta() {
  return [{ title: "План навчання — Legalizacja" }]
}

const studyNavigationOptions: readonly SectionNavigationOption[] =
  studyModules.map((module, index) => ({
    value: module.id,
    label: module.title,
    selectLabel: `${index + 1}. ${module.title}`,
  }))

function StudyNavigation({
  selectedId,
  onSelect,
}: {
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <DocsSidebar ariaLabel="Навігація плану навчання" label="Вісім модулів">
      <SectionNavigationList
        options={studyNavigationOptions}
        value={selectedId}
        onValueChange={onSelect}
        ordered
        variant="numbered"
        renderOption={(option, index) => (
          <>
            <span className="text-muted-foreground">{index + 1}</span>
            <span>{option.label}</span>
          </>
        )}
      />
    </DocsSidebar>
  )
}

function MobileStudyNavigation({
  selectedId,
  onSelect,
}: {
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <div className="lg:hidden">
      <MobileSectionSelect
        label="Модуль курсу"
        value={selectedId}
        options={studyNavigationOptions}
        onValueChange={onSelect}
        size="comfortable"
      />
    </div>
  )
}

export default function StudyPage() {
  const [searchParams] = useSearchParams()
  const requestedId = searchParams.get("module")
  const selectedModule =
    studyModules.find((module) => module.id === requestedId) ?? studyModules[0]
  const selection = useUrlSelection({
    value: selectedModule.id,
    to: (id: string) => ({ pathname: "/study", search: `?module=${id}` }),
  })

  return (
    <DocsLayout
      navigation={
        <StudyNavigation
          selectedId={selection.value}
          onSelect={selection.select}
        />
      }
      toc={studyPlanToc}
    >
      <MobileStudyNavigation
        selectedId={selection.value}
        onSelect={selection.select}
      />
      <StudyPlanContent
        selectedId={selection.value}
        onSelectModule={selection.select}
      />
    </DocsLayout>
  )
}
