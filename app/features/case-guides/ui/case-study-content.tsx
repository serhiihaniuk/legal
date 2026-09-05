import type { CaseGuideRoute } from "~/data/case-guides/types"
import { caseStudySectionIds } from "../model/case-study-navigation"
import { DocumentArticle } from "~/components/patterns/document-content"
import { Separator } from "~/components/ui/separator"
import { CaseStages } from "./case-stages"
import { CaseOverview } from "./case-overview"
import { CasePreparation } from "./case-preparation"
import { CaseReferenceSections } from "./case-reference-sections"
import { CaseAlternatives } from "./case-alternatives"
import { CaseOfficialSources } from "./case-official-sources"

export function CaseStudyContent({
  route,
  updatedAt,
}: {
  route: CaseGuideRoute
  updatedAt: string
}) {
  return (
    <DocumentArticle>
      <CaseOverview route={route} updatedAt={updatedAt} />
      <Separator data-not-typeset />
      <CasePreparation route={route} />
      <section
        id={caseStudySectionIds.stages}
        aria-labelledby="case-stages-heading"
      >
        <h2 id="case-stages-heading">Справа від першої перевірки до карти</h2>
        <p>
          Ідіть по етапах або відкрийте потрібний зі змісту сторінки. Кожен етап
          пояснює дії, потрібні документи, можливі труднощі та результат, з яким
          справа переходить далі.
        </p>
        <CaseStages stages={route.stages} deadlines={route.deadlines} />
      </section>
      <CaseReferenceSections route={route} />
      <CaseAlternatives route={route} />
      <CaseOfficialSources route={route} />
    </DocumentArticle>
  )
}
