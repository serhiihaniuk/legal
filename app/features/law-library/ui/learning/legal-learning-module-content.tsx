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
    title: "Розібраний приклад",
    tocLabel: "Розібраний приклад",
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

export function getLegalLearningContentToc(module: LegalLearningModuleView) {
  return legalLearningContentToc.filter((item) => {
    if (item.href === `#${legalLearningHeadings.example.id}`)
      return Boolean(module.caseExample)
    if (item.href === `#${legalLearningHeadings.nuances.id}`)
      return Boolean(module.pitfalls.length || module.method.length)
    return true
  })
}

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
      className="not-typeset grid grid-cols-2 items-start gap-4 border-t pt-6"
      aria-label="Навігація між модулями"
    >
      {navigation.previousControl ?? (
        <Button
          type="button"
          className="h-auto min-h-11 min-w-0 text-left whitespace-normal"
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
          className="h-auto min-h-11 min-w-0 text-left whitespace-normal"
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
