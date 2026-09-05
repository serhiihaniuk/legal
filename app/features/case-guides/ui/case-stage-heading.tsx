import { LegalText } from "~/components/references"
import type { CaseGuideStage } from "~/data/case-guides/types"

export function CaseStageHeading({
  stage,
  number,
  total,
}: {
  stage: CaseGuideStage
  number: number
  total: number
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium text-muted-foreground">
        Етап {String(number).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </p>
      <h3
        id={`case-stage-${stage.id}-heading`}
        className="text-xl font-semibold tracking-tight sm:text-2xl"
      >
        {stage.title}
      </h3>
      <p className="text-base leading-7 text-muted-foreground">
        <LegalText text={stage.question} />
      </p>
      <p className="text-sm leading-6 text-muted-foreground">
        Веде етап: <LegalText text={stage.actor} />
      </p>
    </div>
  )
}
