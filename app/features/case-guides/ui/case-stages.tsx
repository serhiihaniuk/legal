import type {
  CaseGuideDeadline,
  CaseGuideStage,
} from "~/data/case-guides/types"
import { LegalText } from "~/components/references"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { CaseStageDocuments } from "./case-stage-documents"
import { CaseStageRisks } from "./case-stage-risks"
import { CaseStageMaterials } from "./case-stage-materials"
import { CaseStageDeadlines } from "./case-stage-deadlines"
import { CaseStageHeading } from "./case-stage-heading"
import { CaseStageActions } from "./case-stage-actions"

export function CaseStages({
  stages,
  deadlines,
}: {
  stages: CaseGuideStage[]
  deadlines: CaseGuideDeadline[]
}) {
  return (
    <div data-not-typeset className="mt-8 divide-y">
      {stages.map((stage, index) => (
        <section
          key={stage.id}
          id={`case-stage-${stage.id}`}
          aria-labelledby={`case-stage-${stage.id}-heading`}
          className="flex scroll-mt-24 flex-col gap-6 py-10 first:pt-0 sm:gap-7 sm:py-12"
        >
          <CaseStageHeading
            stage={stage}
            number={index + 1}
            total={stages.length}
          />
          <div className="flex flex-col gap-4 text-base leading-7">
            {stage.explanation.map((paragraph) => (
              <p key={legalTextPlainText(paragraph)}>
                <LegalText text={paragraph} />
              </p>
            ))}
          </div>
          <CaseStageActions stage={stage} />
          <div className="divide-y border-y">
            <CaseStageDocuments stage={stage} />
            <CaseStageDeadlines
              stageId={stage.id}
              deadlines={deadlines.filter(
                (deadline) => deadline.stageId === stage.id
              )}
            />
            <CaseStageRisks stage={stage} />
          </div>
          <CaseStageMaterials stage={stage} />
        </section>
      ))}
    </div>
  )
}
