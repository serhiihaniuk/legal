import { ArrowLeft, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

import {
  DocumentArticle,
  defineDocumentHeadings,
  tableOfContentsFromHeadings,
} from "~/components/patterns/document-content"
import { Button } from "~/components/ui/button"
import { LegalLearningExample } from "~/features/law-library/ui/learning/legal-learning-example"
import { LegalLearningMechanism } from "~/features/law-library/ui/learning/legal-learning-mechanism"
import { LegalLearningNuances } from "~/features/law-library/ui/learning/legal-learning-nuances"
import { LegalLearningOverview } from "~/features/law-library/ui/learning/legal-learning-overview"
import { LegalLearningProvisions } from "~/features/law-library/ui/learning/legal-learning-provisions"
import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"

const legalLearningHeadings = defineDocumentHeadings({
  overview: { id: "legal-learning-overview", title: "Про тему" },
  position: {
    id: "legal-learning-position",
    title: "Де ця тема знаходиться в правовій роботі",
    tocLabel: "Місце в процедурі",
  },
  mechanism: {
    id: "legal-learning-mechanism",
    title: "Як працює цей правовий механізм",
    tocLabel: "Як це працює",
  },
  provisions: {
    id: "legal-learning-provisions",
    title: "Як норми ділять цю тему",
    tocLabel: "Норми крок за кроком",
  },
  example: {
    id: "legal-learning-example",
    title: "Повний приклад у справі іноземця",
    tocLabel: "Повний приклад",
  },
  nuances: {
    id: "legal-learning-nuances",
    title: "Нюанси й типові помилки",
    tocLabel: "Нюанси й помилки",
  },
})

export const legalLearningContentToc = tableOfContentsFromHeadings(
  legalLearningHeadings
)

type ModuleNavigation = {
  previousLabel?: string
  nextLabel?: string
  onPrevious?: () => void
  onNext?: () => void
  previousControl?: ReactNode
  nextControl?: ReactNode
}

function ModuleNavigationControls({
  navigation,
}: {
  navigation: ModuleNavigation
}) {
  return (
    <nav
      data-not-typeset
      className="not-typeset flex items-center justify-between gap-4 border-t pt-6"
      aria-label="Навігація між модулями"
    >
      {navigation.previousControl ?? (
        <Button
          type="button"
          variant="ghost"
          disabled={!navigation.onPrevious}
          onClick={navigation.onPrevious}
        >
          <ArrowLeft data-icon="inline-start" aria-hidden="true" />
          {navigation.previousLabel ?? "Початок"}
        </Button>
      )}
      {navigation.nextControl ?? (
        <Button
          type="button"
          variant="ghost"
          disabled={!navigation.onNext}
          onClick={navigation.onNext}
        >
          {navigation.nextLabel ?? "Кінець"}
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      )}
    </nav>
  )
}

export function LegalLearningModuleContent({
  module,
  navigation,
}: {
  module: LegalLearningModuleView
  navigation: ModuleNavigation
}) {
  return (
    <DocumentArticle>
      <LegalLearningOverview
        module={module}
        headings={{
          overview: legalLearningHeadings.overview,
          position: legalLearningHeadings.position,
        }}
      />
      <LegalLearningMechanism
        module={module}
        heading={legalLearningHeadings.mechanism}
      />
      <LegalLearningProvisions
        module={module}
        heading={legalLearningHeadings.provisions}
      />
      <LegalLearningExample
        module={module}
        heading={legalLearningHeadings.example}
      />
      <LegalLearningNuances
        module={module}
        heading={legalLearningHeadings.nuances}
      />
      <ModuleNavigationControls navigation={navigation} />
    </DocumentArticle>
  )
}
