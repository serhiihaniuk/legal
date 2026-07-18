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
  id: "role-of-regulation",
  order: 1,
  title: "Що насправді регулює цей акт",
  polish: "zakres rozporządzenia i wzór wniosku",
  provisionScope: regulationLaw.text`${regulationLaw.paragraphRange("1", "3")} та додатки`,
  outcome:
    "Ви відрізняєте вимоги до форми заяви від умов отримання конкретного zezwolenia na pobyt czasowy.",
  caseQuestion:
    "Чи проблема стосується способу заповнення formularza, чи доказування матеріальної умови дозволу?",
  placeInWork:
    "Цей акт використовується після визначення фактичного celu pobytu і правової підстави в ustawie o cudzoziemcach.",
  sections: [
    {
      id: "two-layers",
      title: "Два різні шари справи",
      paragraphs: [
        "Rozporządzenie визначає wzory та спосіб подання відомостей. Воно не створює самостійної підстави для pobytu.",
        "Матеріальні умови — наприклад мета, доходи, страхування або зв’язок із роботодавцем — перевіряються за відповідними нормами ustawy o cudzoziemcach.",
      ],
      questions: [
        "Який dokładny cel pobytu випливає з фактів?",
        "Яка норма ustawy встановлює умови цього дозволу?",
        "Яке поле formularza лише повідомляє факт, а який документ його доводить?",
      ],
    },
    {
      id: "formal-or-substantive",
      title: "Brak formalny чи недоведена умова",
      paragraphs: [
        "Незаповнене обов’язкове поле, відсутній підпис або використання неналежного wzoru може створити формальну проблему.",
        "Заповнене поле не означає, що відповідна матеріальна умова доведена. Орган оцінює також документи і факти.",
      ],
      warning:
        "Не відповідайте на wezwanie шаблонно: спочатку встановіть, чи орган вимагає виправити форму, чи довести умову дозволу.",
    },
  ],
  exercise:
    "Візьміть одне pole formularza і запишіть окремо: що в ньому декларується, яка норма ustawy робить цей факт важливим і який доказ його підтверджує.",
}

export const roleOfRegulationLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:rozporzadzenie-wniosek-pobyt-czasowy:role-of-regulation",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
        moduleId: "role-of-regulation",
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

export default roleOfRegulationLearningModuleTopic
