import type {
  LegalDocumentId,
  LegalExplanation,
  LegalProvision,
  LegalProvisionReference,
} from "~/data/legal-library/contracts"
import { getDocumentReadingGuide } from "~/data/legal-library/learning"
import {
  legalLearningPlainText,
  legalLearningProvisionReferences,
  type LegalLearningText,
} from "~/data/legal-library/learning/legal-text"
import type {
  LegalLearningCoursePhase,
  LegalLearningModule,
  LegalLearningPublication,
  LegalLearningExample,
  LegalLearningSection,
} from "~/data/legal-library/learning/types"
import { parseLegalProvisionReference } from "~/data/legal-library/query"

export type LegalLearningLayer = {
  label: string
  text: LegalLearningText
}

export type LegalLearningTerm = {
  term: string
  meaning: LegalLearningText
}

export type LegalLearningArticleGroup = {
  reference: LegalLearningText
  role: LegalLearningText
  target?: LegalProvisionReference
}

export type LegalExplanationView = {
  id: string
  reference: string
  title: LegalLearningText
  target?: LegalProvisionReference
  explanation: LegalExplanation
}

export function toLegalExplanationView({
  explanation,
  reference,
  title = explanation.summary,
  target,
  id = `provision-${explanation.provisionId}`,
}: {
  explanation: LegalExplanation
  reference: string
  title?: LegalLearningText
  target?: LegalProvisionReference
  id?: string
}): LegalExplanationView {
  return { id, reference, title, target, explanation }
}

export type LegalLearningModuleView = {
  order: number
  title: string
  polish: LegalLearningText
  provisionScope: LegalLearningText
  legalState: string
  explanationReview?: { legalStateDate: string; verifiedAt: string }
  outcome: LegalLearningText
  stage: string
  positionIntro?: LegalLearningText
  question?: LegalLearningText
  neededWhen: LegalLearningText
  boundary?: LegalLearningText
  courseTitle?: string
  courseDescription?: string
  coursePhases?: readonly LegalLearningCoursePhase[]
  mechanismParagraphs: readonly LegalLearningText[]
  mechanismSections?: readonly LegalLearningSection[]
  layers: readonly LegalLearningLayer[]
  terms: readonly LegalLearningTerm[]
  articleGroups: readonly LegalLearningArticleGroup[]
  provisionGuide: {
    countLabel: string
    title: string
    description: string
    items: readonly LegalExplanationView[]
  }
  caseExample?: LegalLearningExample
  pitfalls: readonly LegalLearningText[]
  method: readonly LegalLearningText[]
}

type ReviewedProvision = {
  provision: LegalProvision
  explanation: LegalExplanation
}

function explanationTitle(
  provision: LegalProvision,
  explanation: LegalExplanation
): string {
  const withoutLocator = legalLearningPlainText(explanation.summary)
    .replace(
      new RegExp(
        `^(?:art\\.|§|załącznik(?: nr)?)\\s*${provision.locator.replace(/\D/g, "")}\\s*`,
        "i"
      ),
      ""
    )
    .trim()
  const title = withoutLocator.split(/[.;:]/)[0]?.trim()
  if (!title) return `Пояснення ${provision.locator}`
  return title.charAt(0).toLocaleUpperCase("uk") + title.slice(1)
}

export function findModuleProvisions(
  module: LegalLearningModule,
  provisions: readonly LegalProvision[]
): LegalProvision[] {
  const authoredTexts: LegalLearningText[] = [
    module.provisionScope,
    module.outcome,
    module.caseQuestion,
    module.placeInWork,
    ...(module.caseExample
      ? [
          module.caseExample.title,
          module.caseExample.facts,
          module.caseExample.analysis,
          module.caseExample.lesson,
          ...(module.caseExample.sample?.kind === "table"
            ? module.caseExample.sample.rows.flatMap((row) => row.cells)
            : (module.caseExample.sample?.paragraphs ?? [])),
        ]
      : []),
    ...(module.terms ?? []).flatMap((term) => [term.term, term.meaning]),
    ...module.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.questions ?? []),
      ...(section.steps ?? []),
      ...(section.evidence ?? []),
      ...(section.warning ? [section.warning] : []),
    ]),
  ]
  const explicitProvisionIds = new Set(
    authoredTexts
      .flatMap(legalLearningProvisionReferences)
      .map((reference) => reference.provisionId)
  )

  return provisions
    .filter((provision) => explicitProvisionIds.has(provision.id))
    .slice(0, 10)
}

export function buildLegalLearningModuleView({
  documentId,
  module,
  legalState,
  reviewedProvisions,
}: {
  documentId: LegalDocumentId
  module: LegalLearningPublication
  legalState: string
  reviewedProvisions: readonly ReviewedProvision[]
}): LegalLearningModuleView {
  const readingGuide = getDocumentReadingGuide(documentId)
  const isReadingModule = readingGuide?.module.id === module.id

  const provisionGuideItems = reviewedProvisions.map(
    ({ provision, explanation }) =>
      toLegalExplanationView({
        explanation,
        reference: provision.locator,
        title: explanationTitle(provision, explanation),
        target: parseLegalProvisionReference({
          kind: "legal-provision",
          documentId,
          provisionId: provision.id,
        }),
      })
  )

  const terms = module.terms ?? (isReadingModule ? readingGuide.terms : [])
  const firstSection = module.sections[0]

  return {
    order: module.order,
    title: module.title,
    polish: module.polish,
    provisionScope: module.provisionScope,
    legalState,
    explanationReview:
      module.sourceReview?.reviewStatus === "reviewed"
        ? {
            legalStateDate: module.sourceReview.legalStateDate,
            verifiedAt: module.sourceReview.verifiedAt,
          }
        : undefined,
    outcome: module.outcome,
    stage: isReadingModule
      ? "Орієнтація в документі"
      : (firstSection?.title ?? "Робота з правовим механізмом"),
    question: module.caseQuestion,
    neededWhen: module.placeInWork,
    courseTitle: isReadingModule
      ? `Карта курсу: ${readingGuide?.module.title ?? module.title}`
      : undefined,
    courseDescription: isReadingModule
      ? readingGuide?.courseDescription
      : undefined,
    coursePhases: isReadingModule ? readingGuide?.phases : undefined,
    mechanismParagraphs: [],
    mechanismSections: module.sections,
    layers: [],
    terms,
    articleGroups: reviewedProvisions.length
      ? reviewedProvisions.map(({ provision, explanation }) => ({
          reference: provision.locator,
          role: explanation.summary,
          target: parseLegalProvisionReference({
            kind: "legal-provision",
            documentId,
            provisionId: provision.id,
          }),
        }))
      : [
          {
            reference: module.provisionScope,
            role: module.outcome,
          },
        ],
    provisionGuide: {
      countLabel: reviewedProvisions.length
        ? `${reviewedProvisions.length} перевірених норм у цьому модулі`
        : "Перевірене пояснення норм готується",
      title:
        documentId === "rozporzadzenie-wniosek-pobyt-czasowy"
          ? "Параграф за параграфом"
          : "Стаття за статтею",
      description: reviewedProvisions.length
        ? "Розкрийте норму, щоб побачити її реальну структуру, правовий наслідок і місце в роботі зі справою. Пояснення звірене з локальним офіційним текстом."
        : "Окремі пояснення норм для цього модуля ще не доступні. Польський текст можна прочитати в розділі статей акта.",
      items: provisionGuideItems,
    },
    caseExample:
      module.caseExample ??
      (isReadingModule ? readingGuide.caseExample : undefined),
    pitfalls: [],
    method: [],
  }
}
