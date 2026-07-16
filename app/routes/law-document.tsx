import { ArrowLeft, ArrowRight } from "lucide-react"
import {
  Link,
  redirect,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router"

import {
  LegalLearningModuleContent,
  legalLearningContentToc,
} from "~/features/law-library/ui/legal-learning-module-content"
import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
} from "~/components/law-document-navigation"
import { DocsLayout } from "~/components/docs-layout"
import { OfficialSourceLink } from "~/components/official-source"
import { Button } from "~/components/ui/button"
import {
  getDocument,
  getDocumentHomePath,
  getDocumentLearningPath,
  getEdition,
  getExplanation,
  getLegalLearningCurriculum,
  getLegalLearningModule,
  listProvisions,
} from "~/data/legal-library"
import {
  buildLegalLearningModuleView,
  findModuleProvisions,
} from "~/features/law-library/model/legal-learning-view"
import { officialSourceIdByLegalDocument } from "~/data/legal-library/official-sources"

const legacyTechnicalModuleIds = new Set([
  "overview",
  "reading",
  "structure",
  "source",
])

export async function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  if (document.id === "kpa") {
    throw new Response("KPA uses its authored learning route", { status: 404 })
  }

  const curriculum = getLegalLearningCurriculum(document.id)
  if (!curriculum) {
    throw new Response("Learning curriculum not found", { status: 404 })
  }

  const module = getLegalLearningModule(document.id, params.moduleId ?? "")
  if (!module) {
    if (legacyTechnicalModuleIds.has(params.moduleId ?? "")) {
      throw redirect(getDocumentHomePath(document.id))
    }
    throw new Response("Learning module not found", { status: 404 })
  }

  const edition = getEdition(document.id, document.currentEditionId)
  if (!edition) throw new Response("Legal edition not found", { status: 404 })

  const provisions = listProvisions(document.id)
  const candidateProvisions = findModuleProvisions(module, provisions)
  const explanationResults = await Promise.all(
    candidateProvisions.map((provision) =>
      getExplanation({
        kind: "legal-provision",
        documentId: document.id,
        provisionId: provision.id,
      })
    )
  )
  const reviewedProvisions = explanationResults.flatMap((result, index) =>
    result.status === "reviewed"
      ? [
          {
            provision: candidateProvisions[index],
            explanation: result.explanation,
          },
        ]
      : []
  )

  const moduleIndex = curriculum.modules.findIndex(
    (candidate) => candidate.id === module.id
  )
  const legalState =
    edition.manifest.legalStateDate ?? edition.manifest.checkedAt

  return {
    document,
    module,
    moduleView: buildLegalLearningModuleView({
      documentId: document.id,
      module,
      legalState,
      reviewedProvisions,
    }),
    previousModule:
      moduleIndex > 0 ? curriculum.modules[moduleIndex - 1] : undefined,
    nextModule:
      moduleIndex < curriculum.modules.length - 1
        ? curriculum.modules[moduleIndex + 1]
        : undefined,
  }
}

export default function LawDocumentLearningRoute() {
  const { document, module, moduleView, previousModule, nextModule } =
    useLoaderData<typeof loader>()

  return (
    <DocsLayout
      navigation={
        <LawDocumentNavigation
          document={document}
          activeSection="learning"
          activeModuleId={module.id}
        />
      }
      toc={legalLearningContentToc}
    >
      <LawDocumentMobileNavigation
        document={document}
        activeSection="learning"
        activeModuleId={module.id}
      />

      <LegalLearningModuleContent
        module={moduleView}
        navigation={{
          previousControl: previousModule ? (
            <Button
              variant="ghost"
              nativeButton={false}
              render={
                <Link
                  to={getDocumentLearningPath(document.id, previousModule.id)}
                />
              }
            >
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              Модуль {previousModule.order}
            </Button>
          ) : (
            <Button variant="ghost" disabled>
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              Початок
            </Button>
          ),
          nextControl: nextModule ? (
            <Button
              variant="ghost"
              nativeButton={false}
              render={
                <Link
                  to={getDocumentLearningPath(document.id, nextModule.id)}
                />
              }
            >
              Модуль {nextModule.order}
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          ) : (
            <Button variant="ghost" disabled>
              Кінець
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          ),
        }}
      />

      <footer
        data-not-typeset
        className="not-typeset mt-10 border-t pt-6 text-sm text-muted-foreground"
      >
        <p className="mb-3">
          Пояснення допомагає читати акт. Для конкретної справи перевірте точний
          текст, дату факту, wejście w życie та przepisy przejściowe.
        </p>
        <OfficialSourceLink
          sourceId={officialSourceIdByLegalDocument[document.id]}
          label="Офіційна сторінка ELI"
        />
      </footer>
    </DocsLayout>
  )
}
