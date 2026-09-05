import type {
  CaseGuideDeadline,
  CaseGuideStage,
} from "~/data/case-guides/types"
import { CaseDeadlineList } from "./case-deadline-list"

function StageMarker({ continues }: { continues: boolean }) {
  return (
    <>
      {continues ? (
        <svg
          aria-hidden="true"
          className="absolute top-3 left-[11px] h-full w-px text-border"
          viewBox="0 0 1 100"
          preserveAspectRatio="none"
        >
          <path
            d="M .5 0 V 100"
            fill="none"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ) : null}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 size-6 text-muted-foreground"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="11.5"
          cy="12"
          r="6"
          className="fill-background"
          stroke="currentColor"
        />
        <circle cx="11.5" cy="12" r="2" fill="currentColor" />
      </svg>
    </>
  )
}

export function CaseDeadlineTimeline({
  deadlines,
  stages,
}: {
  deadlines: CaseGuideDeadline[]
  stages: Pick<CaseGuideStage, "id" | "title">[]
}) {
  const groups = stages
    .map((stage) => ({
      stage,
      deadlines: deadlines.filter((deadline) => deadline.stageId === stage.id),
    }))
    .filter((group) => group.deadlines.length)

  return (
    <ol
      data-not-typeset
      aria-label="Строки за етапами справи"
      className="not-typeset mt-6"
    >
      {groups.map((group, index) => (
        <li
          key={group.stage.id}
          className="relative pb-7 pl-8 last:pb-0 sm:pl-10"
        >
          <StageMarker continues={index < groups.length - 1} />
          <h4 className="pb-3 text-sm leading-6 font-medium text-muted-foreground">
            {group.stage.title}
          </h4>
          <div className="border-t">
            <CaseDeadlineList deadlines={group.deadlines} headingLevel={5} />
          </div>
        </li>
      ))}
    </ol>
  )
}
