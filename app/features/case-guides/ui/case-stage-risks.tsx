import type { CaseGuideStage } from "~/data/case-guides/types"
import { LegalText } from "~/components/references"
import { CaseStageDisclosure } from "./case-stage-disclosure"

export function CaseStageRisks({ stage }: { stage: CaseGuideStage }) {
  if (stage.risks.length === 0) return null
  return (
    <CaseStageDisclosure
      id={`risks-${stage.id}`}
      title="Що може ускладнити справу"
      count={stage.risks.length}
    >
      <ul className="flex flex-col gap-5 text-sm leading-6">
        {stage.risks.map((risk) => (
          <li key={risk.title} className="flex flex-col gap-2">
            <h4 className="font-medium">{risk.title}</h4>
            <p className="text-muted-foreground">
              <LegalText text={risk.explanation} />
            </p>
            <p>
              <span className="font-medium">Що перевірити. </span>
              <LegalText text={risk.check} />
            </p>
          </li>
        ))}
      </ul>
    </CaseStageDisclosure>
  )
}
