import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "judgments-and-effects",
  order: 5,
  title: "Wyrok і його наслідки",
  polish: "wyrok; uchylenie; oddalenie; ocena prawna",
  provisionScope: ppsaLaw.text`${ppsaLaw.article("141")}, ${ppsaLaw.articleRange("145", "153", { start: "145" })}, ${ppsaLaw.article("170", "170")}`,
  outcome:
    "Ви читаєте sentencja та uzasadnienie, розрізняєте uchylenie, przekazanie, oddalenie і розумієте обов’язковість правової оцінки без обіцянки конкретного дозволу.",
  caseQuestion:
    "Що саме постановив WSA, який ефект має sentencja і що organ повинен зробити під час повторного розгляду?",
  placeInWork:
    "Перехід від спору до практичної дії: після wyrok визначаємо результат, наступний процесуальний крок і межі повторного розгляду.",
  sections: [
    {
      id: "read-judgment",
      title: "Факт → вид wyrok → ефект",
      paragraphs: [
        ppsaLaw.text`Спочатку прочитайте sentencja, потім узгодьте її з uzasadnienie за ${ppsaLaw.article("141")}. За ${ppsaLaw.article("145")} та пов’язаними нормами задоволення skargi може вести до uchylenie або іншого передбаченого законом результату; ${ppsaLaw.article("151")} стосується oddalenie, коли підстав для задоволення немає.`,
        "Uchylenie decyzja не дорівнює автоматичному наданню pobyt. Встановіть, який акт усунуто, чи передано справу на повторний розгляд і яку помилку organ має виправити.",
      ],
      questions: [
        "Чи результатом є uchylenie, oddalenie або інший ефект, прямо зазначений у sentencja?",
      ],
      steps: [
        "Випишіть operative part і дату doręczenie wyrok.",
        "Знайдіть у uzasadnienie факт, норму, доказ і причину результату.",
        "Сформулюйте наступну дію organ або сторони без розширення змісту wyrok.",
      ],
      evidence: [
        "sentencja, uzasadnienie, підтвердження doręczenie та оскаржений akt",
      ],
      warning:
        "Мотиви допомагають зрозуміти wyrok, але процесуальний ефект визначається законом і змістом постановленої sentencja.",
    },
    {
      id: "binding-assessment",
      title: "Правова оцінка → повторний розгляд → remedy",
      paragraphs: [
        ppsaLaw.text`${ppsaLaw.article("153")} пов’язує повторний розгляд із правовою оцінкою та вказівками суду в межах, визначених нормою. ${ppsaLaw.article("170")} описує обов’язковість остаточного судового рішення. Перетворіть це на робочий список: кожна вказівка — факт, доказ, процесуальна дія organ.`,
        "Якщо висновок або його наслідок не відповідає вашій справі, перевірте доступний remedy, зокрема умови skarga kasacyjna, замість того щоб ігнорувати wyrok.",
      ],
      questions: [
        "Яка частина правової оцінки є обов’язковою і який доказ підтвердить її виконання?",
      ],
      steps: [
        "Виділіть із wyrok обов’язкову оцінку та вказівки.",
        "Порівняйте їх із новою дією organ і зафіксуйте невиконане.",
        "Перевірте доступний remedy та його процесуальну умову і строк.",
      ],
      evidence: [
        "текст wyrok, новий akt organ, листування про виконання та порівняльна таблиця вказівок",
      ],
      warning:
        "Не називайте строк remedy без перевірки дати doręczenie та конкретної норми PPSA.",
    },
  ],
  exercise:
    "За анонімізованим wyrok складіть чотири рядки: факт помилки, Art., доказ, обов’язкова дія organ і можливий наступний remedy.",
}

export const judgmentsAndEffectsLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:judgments-and-effects",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "judgments-and-effects",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.provisionScope,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
            locator: "module provision scope",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default judgmentsAndEffectsLearningModuleTopic
