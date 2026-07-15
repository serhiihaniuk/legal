import { useSearchParams } from "react-router"

import { DocsLayout } from "~/components/docs-layout"
import { StudyPlanContent, studyPlanToc } from "~/components/study-plan-content"
import { studyModules } from "~/data/study-plan-data"

function scrollToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
}

function StudyNavigation({
  selectedId,
  onSelect,
}: {
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <nav aria-label="Навігація плану навчання" className="pb-10">
      <p className="px-2 text-xs font-medium text-muted-foreground">
        Вісім модулів
      </p>
      <ol className="mt-2 grid gap-0.5">
        {studyModules.map((module, index) => (
          <li key={module.id}>
            <button
              type="button"
              onClick={() => onSelect(module.id)}
              data-active={selectedId === module.id}
              className="grid min-h-10 w-full grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-2 rounded-md border border-transparent px-2 py-2 text-left text-[0.8rem] font-medium hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none data-[active=true]:border-accent data-[active=true]:bg-accent"
            >
              <span className="text-muted-foreground">{index + 1}</span>
              <span>{module.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
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
    <label className="grid min-w-0 gap-1.5 lg:hidden">
      <span className="text-xs font-medium text-muted-foreground">
        Модуль курсу
      </span>
      <select
        value={selectedId}
        onChange={(event) => onSelect(event.target.value)}
        className="h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {studyModules.map((module, index) => (
          <option key={module.id} value={module.id}>
            {index + 1}. {module.title}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function StudyPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedId = searchParams.get("module")
  const selectedModule =
    studyModules.find((module) => module.id === requestedId) ?? studyModules[0]

  function selectModule(id: string) {
    setSearchParams({ module: id })
    scrollToTop()
  }

  return (
    <DocsLayout
      navigation={
        <StudyNavigation
          selectedId={selectedModule.id}
          onSelect={selectModule}
        />
      }
      toc={studyPlanToc}
    >
      <MobileStudyNavigation
        selectedId={selectedModule.id}
        onSelect={selectModule}
      />
      <StudyPlanContent
        selectedId={selectedModule.id}
        onSelectModule={selectModule}
      />
    </DocsLayout>
  )
}
