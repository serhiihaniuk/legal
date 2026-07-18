import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const regulationLaw = createLegalLearningTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const moduleContent: LegalLearningModule = {
  id: "choose-form",
  order: 2,
  title: "Вибрати правильний wzór і додаток",
  polish: "formularz główny, załącznik, pouczenie",
  provisionScope: regulationLaw.text`${regulationLaw.paragraphRange("2", "4")} та ${regulationLaw.annexRange("1", "11")}`,
  outcome:
    "Ви визначаєте, які частини комплекту стосуються заявника, роботодавця або іншого учасника.",
  caseQuestion:
    "Хто має заповнити і підписати кожну частину комплекту саме для цієї підстави pobytu?",
  placeInWork:
    "Вибір wzoru відбувається після кваліфікації мети, але до фінальної перевірки комплекту і подання.",
  sections: [
    {
      id: "map-annexes",
      title: "Не кожен załącznik підходить до кожної справи",
      paragraphs: [
        "Назва додатка показує його функцію, але не замінює аналізу підстави. Зіставте адресата, мету і поля додатка з конкретною процедурою.",
        "Якщо додаток заповнює інший podmiot, перевірте його дані, повноваження підписанта і відповідність основному wnioskowi.",
      ],
      steps: [
        "Назвіть фактичний cel pobytu без використання назви файлу чи formularza.",
        "Знайдіть матеріальну норму ustawy.",
        "Зіставте з нею назву і призначення кожного załącznika.",
        "Позначте, хто відповідає за відомості та підпис.",
      ],
    },
    {
      id: "version-check",
      title: "Перевірити актуальність wzoru",
      paragraphs: [
        "Перед заповненням звірте wzór з офіційним джерелом. Старий formularz може не містити актуальних полів або pouczenia.",
      ],
      evidence: [
        "офіційний PDF rozporządzenia",
        "сторінка ELI",
        "актуальний formularz, опублікований компетентним органом",
      ],
    },
  ],
  exercise:
    "Складіть карту комплекту: документ, хто заповнює, хто підписує, який факт повідомляє і з якою нормою ustawy він пов’язаний.",
}

export const chooseFormLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:rozporzadzenie-wniosek-pobyt-czasowy:choose-form",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
        moduleId: "choose-form",
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
            reference: {
              kind: "official-source",
              sourceId: "eli-rozporzadzenie-wniosek-pobyt-czasowy",
            },
            locator: "module provision scope",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default chooseFormLearningModuleTopic
