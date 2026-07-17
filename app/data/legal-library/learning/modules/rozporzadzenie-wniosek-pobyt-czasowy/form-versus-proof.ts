import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const moduleContent: LegalLearningModule = {
  id: "form-versus-proof",
  order: 4,
  title: "Відокремити oświadczenie від dowodu",
  polish: "pole formularza a dowód warunku ustawowego",
  provisionScope: "wzór wniosku у зв’язку з відповідною нормою ustawy",
  outcome:
    "Для кожної матеріальної умови ви знаходите доказ, а не покладаєтеся лише на заповнене pole.",
  caseQuestion:
    "Що саме треба довести і чи документ підтверджує всі елементи цієї умови?",
  placeInWork:
    "Модуль з’єднує формулярний комплект із матеріально-правовим аналізом конкретного celu pobytu.",
  sections: [
    {
      id: "condition-matrix",
      title: "Матриця: warunek — fakt — dowód",
      paragraphs: [
        "Спочатку випишіть умови з właściwego przepisu. Потім для кожної умови назвіть факт і окремий доказ.",
        "Załącznik може структурувати відомості, але орган оцінює їх разом з іншими документами та фактичним способом виконання діяльності.",
      ],
      steps: [
        "Знайдіть матеріальну норму.",
        "Розділіть її на окремі умови.",
        "Для кожної умови запишіть факт.",
        "Додайте доказ і перевірте період, якого він стосується.",
        "Позначте прогалини до подання.",
      ],
    },
    {
      id: "changing-facts",
      title: "Форма фіксує заявлені факти, але справа триває",
      paragraphs: [
        "Якщо під час провадження змінюється podmiot, мета, адреса або інша істотна обставина, потрібно окремо оцінити значення зміни і спосіб повідомлення органу.",
      ],
      warning:
        "Не робіть висновок, що будь-яку зміну можна виправити лише новим załącznikiem: наслідок залежить від ustawy, стадії справи та повних фактів.",
    },
  ],
  exercise:
    "Оберіть одну підставу pobytu і побудуйте таблицю з трьома колонками: умова ustawy, поле formularza, первинний доказ.",
}

export const formVersusProofLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:rozporzadzenie-wniosek-pobyt-czasowy:form-versus-proof",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
        moduleId: "form-versus-proof",
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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default formVersusProofLearningModuleTopic
