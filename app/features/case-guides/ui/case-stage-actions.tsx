import { LegalText } from "~/components/references"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import type { CaseGuideStage } from "~/data/case-guides/types"

export function CaseStageActions({ stage }: { stage: CaseGuideStage }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h4 className="text-sm font-semibold">Послідовність дій</h4>
        <ol className="mt-3 flex list-decimal flex-col gap-3 pl-5 text-base leading-7 marker:text-muted-foreground">
          {stage.actions.map((action) => (
            <li key={legalTextPlainText(action)} className="pl-1">
              <LegalText text={action} />
            </li>
          ))}
        </ol>
      </div>
      <dl className="border-l-2 pl-4 text-sm leading-6">
        <dt className="font-semibold">Результат етапу</dt>
        <dd className="mt-1 text-muted-foreground">
          <LegalText text={stage.outcome} />
        </dd>
      </dl>
    </div>
  )
}
