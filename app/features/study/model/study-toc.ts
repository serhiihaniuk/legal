import type { StudyModule } from "~/data/study/plan-data"
import type { TocItem } from "~/components/layout"

export function studyPlanToc(module: StudyModule): TocItem[] {
  return [
    { href: "#study-overview", label: module.title },
    ...module.sections.map((section) => ({
      href: `#study-${section.id}`,
      label: section.title,
    })),
    { href: "#study-example", label: module.example.title },
    { href: "#study-reading", label: "Матеріали до теми" },
    { href: "#study-sources", label: "Офіційні джерела" },
  ]
}
