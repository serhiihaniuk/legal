import type {
  LegalDocumentId,
  LegalExplanation,
  LegalProvision,
} from "../contracts"
import { parseLegalProvisionReference } from "../query"
import { getDocumentReadingGuide } from "./index"
import {
  concatLegalLearningText,
  joinLegalLearningText,
  legalLearningPlainText,
  legalLearningProvisionReferences,
  legalLearningTextSlice,
  type LegalLearningText,
} from "./legal-text"
import type { LegalLearningModule } from "./types"
import type { LegalLearningModuleView, LegalLearningTerm } from "./view-types"

type ReviewedProvision = {
  provision: LegalProvision
  explanation: LegalExplanation
}

function uniqueStrings(items: readonly (string | undefined)[]): string[] {
  return [...new Set(items.filter((item): item is string => Boolean(item)))]
}

function uniqueTexts(
  items: readonly (LegalLearningText | undefined)[]
): LegalLearningText[] {
  const seen = new Set<string>()
  return items.filter((item): item is LegalLearningText => {
    if (item === undefined) return false
    const plainText = legalLearningPlainText(item)
    if (seen.has(plainText)) return false
    seen.add(plainText)
    return true
  })
}

function sentenceContaining(
  text: LegalLearningText,
  token: string
): LegalLearningText | undefined {
  const plainText = legalLearningPlainText(text)
  for (const match of plainText.matchAll(/[^.!?]+[.!?]?/gu)) {
    const sentence = match[0].trim()
    if (!sentence.toLocaleLowerCase("pl").includes(token)) continue
    const leadingSpace = match[0].length - match[0].trimStart().length
    const start = (match.index ?? 0) + leadingSpace
    return legalLearningTextSlice(text, start, start + sentence.length)
  }
  return undefined
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

function buildTerms(
  module: LegalLearningModule,
  paragraphs: readonly LegalLearningText[]
): LegalLearningTerm[] {
  return uniqueStrings(
    legalLearningPlainText(module.polish)
      .split(/[;,]/)
      .map((term) => term.trim())
  )
    .slice(0, 6)
    .map((term) => {
      const token = term.split(/\s+/)[0]?.toLocaleLowerCase("pl")
      const matchingSentence = token
        ? paragraphs
            .map((paragraph) => sentenceContaining(paragraph, token))
            .find((sentence) => sentence !== undefined)
        : undefined
      return {
        term,
        meaning:
          matchingSentence ??
          `Поняття ${term} треба читати у визначеній групі норм і перевіряти за фактами конкретної справи.`,
      }
    })
}

function normalizedLocator(locator: string): string {
  return locator
    .toLocaleLowerCase("pl")
    .replace(/załącznik\s+nr\s+/, "załącznik ")
    .replace(/\s+/g, " ")
    .trim()
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
    module.exercise,
    ...module.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.questions ?? []),
      ...(section.steps ?? []),
      ...(section.warning ? [section.warning] : []),
    ]),
  ]
  const text = authoredTexts.map(legalLearningPlainText).join(" ")
  const explicitProvisionIds = new Set(
    authoredTexts
      .flatMap(legalLearningProvisionReferences)
      .map((reference) => reference.provisionId)
  )
  const locators = new Set<string>()
  for (const match of text.matchAll(/\bart\.\s*(\d+[a-z]?)/gi)) {
    locators.add(`art. ${match[1].toLocaleLowerCase("pl")}`)
  }
  for (const match of text.matchAll(/§\s*(\d+[a-z]?)/gi)) {
    locators.add(`§ ${match[1].toLocaleLowerCase("pl")}`)
  }
  for (const match of text.matchAll(/załącznik(?:\s+nr)?\s*(\d+)/gi)) {
    locators.add(`załącznik ${match[1]}`)
  }

  return provisions
    .filter(
      (provision) =>
        explicitProvisionIds.has(provision.id) ||
        locators.has(normalizedLocator(provision.locator))
    )
    .slice(0, 10)
}

function formatAnalysis(
  steps: readonly LegalLearningText[]
): LegalLearningText {
  if (!steps.length) {
    return "Визначаємо факт, знаходимо поняття і норму, розкладаємо її на умови, додаємо докази, дію, наслідок та доступний засіб захисту."
  }
  const numberedSteps = steps.map((step, index) => {
    const plainText = legalLearningPlainText(step)
    const withoutFinalPeriod = plainText.endsWith(".")
      ? legalLearningTextSlice(step, 0, plainText.length - 1)
      : step
    return concatLegalLearningText(`${index + 1}) `, withoutFinalPeriod)
  })
  return concatLegalLearningText(
    joinLegalLearningText(numberedSteps, "; "),
    "."
  )
}

export function buildLegalLearningModuleView({
  documentId,
  module,
  legalState,
  reviewedProvisions,
}: {
  documentId: LegalDocumentId
  module: LegalLearningModule
  legalState: string
  reviewedProvisions: readonly ReviewedProvision[]
}): LegalLearningModuleView {
  const readingGuide = getDocumentReadingGuide(documentId)
  const isReadingModule = readingGuide?.module.id === module.id
  const paragraphs = module.sections.flatMap((section) => section.paragraphs)
  const warnings = uniqueTexts(
    module.sections.map((section) => section.warning)
  )
  const steps = uniqueTexts(
    module.sections.flatMap((section) => section.steps ?? [])
  )
  const evidence = uniqueTexts(
    module.sections.flatMap((section) => section.evidence ?? [])
  )
  const questions = uniqueTexts(
    module.sections.flatMap((section) => section.questions ?? [])
  )

  const provisionGuideItems = reviewedProvisions.map(
    ({ provision, explanation }) => ({
      id: `provision-${provision.id}`,
      reference: provision.locator,
      title: explanationTitle(provision, explanation),
      summary: explanation.summary,
      rules: explanation.rules,
      legalEffect: explanation.legalEffect,
      foreignersCase: explanation.foreignersCase,
      target: parseLegalProvisionReference({
        kind: "legal-provision",
        documentId,
        provisionId: provision.id,
      }),
    })
  )

  const terms = isReadingModule
    ? readingGuide.terms
    : buildTerms(module, paragraphs)
  const firstSection = module.sections[0]
  const _secondSection = module.sections[1]
  const mainRule = firstSection?.paragraphs[0] ?? module.outcome
  const readingMethod =
    firstSection?.paragraphs[1] ??
    (steps.length ? formatAnalysis(steps.slice(0, 4)) : module.placeInWork)
  const boundary =
    warnings[0] ??
    "Ця група норм не дає відповіді без перевірки повних фактів, дати, пов’язаних приписів та застосовної редакції."

  return {
    order: module.order,
    title: module.title,
    polish: module.polish,
    provisionScope: module.provisionScope,
    legalState,
    outcome: module.outcome,
    stage: isReadingModule
      ? "Орієнтація в документі"
      : (firstSection?.title ?? "Робота з правовим механізмом"),
    positionIntro: firstSection?.paragraphs[0] ?? module.placeInWork,
    question: module.caseQuestion,
    neededWhen: module.placeInWork,
    boundary,
    courseTitle: isReadingModule
      ? `Карта курсу: ${readingGuide?.module.title ?? module.title}`
      : undefined,
    courseDescription: isReadingModule
      ? readingGuide?.courseDescription
      : undefined,
    coursePhases: isReadingModule ? readingGuide?.phases : undefined,
    mechanismParagraphs: paragraphs,
    layers: [
      { label: "Основне правило", text: mainRule },
      { label: "Як читати і застосовувати", text: readingMethod },
      { label: "Межа або важливий виняток", text: boundary },
    ],
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
        : "Модуль пояснює механізм вище, але не підміняє відсутній незалежний review окремих норм неперевіреною чернеткою.",
      items: provisionGuideItems,
    },
    caseExample: isReadingModule
      ? readingGuide.caseExample
      : {
          title: `Робоча ситуація: ${module.title}`,
          facts: module.caseQuestion,
          analysis: formatAnalysis(steps.length ? steps : questions),
          lesson: concatLegalLearningText(
            module.outcome,
            " Практична перевірка: ",
            module.exercise
          ),
        },
    pitfalls: warnings.length ? warnings : [boundary],
    method: steps.length
      ? steps
      : [
          ...questions.map((question) =>
            concatLegalLearningText("Дайте відповідь: ", question)
          ),
          ...evidence.map((item) =>
            concatLegalLearningText("Перевірте документ: ", item)
          ),
        ],
  }
}
