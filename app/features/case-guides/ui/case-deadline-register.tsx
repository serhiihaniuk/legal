import type {
  CaseGuideDeadline,
  CaseGuideStage,
} from "~/data/case-guides/types"
import { CaseDeadlineTimeline } from "./case-deadline-timeline"

export function DeadlineRegister({
  deadlines,
  stages,
}: {
  deadlines: CaseGuideDeadline[]
  stages: CaseGuideStage[]
}) {
  if (!deadlines.length)
    return (
      <p className="mt-5 border-y py-4 text-sm text-muted-foreground">
        Точний строк з’явиться лише після вибору конкретної підстави і події,
        яка запускає відлік.
      </p>
    )
  return <CaseDeadlineTimeline deadlines={deadlines} stages={stages} />
}
