import type {
  CaseGuideDeadline,
  CaseGuideStageId,
} from "~/data/case-guides/types"
import { CaseDeadlineList } from "./case-deadline-list"
import { CaseStageDisclosure } from "./case-stage-disclosure"

export function CaseStageDeadlines({
  deadlines,
  stageId,
}: {
  deadlines: CaseGuideDeadline[]
  stageId: CaseGuideStageId
}) {
  if (deadlines.length === 0) return null
  return (
    <CaseStageDisclosure
      id={`deadlines-${stageId}`}
      title="Строки та наслідки"
      count={deadlines.length}
    >
      <CaseDeadlineList deadlines={deadlines} />
    </CaseStageDisclosure>
  )
}
