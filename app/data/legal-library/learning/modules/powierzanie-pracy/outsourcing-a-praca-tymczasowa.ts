import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "outsourcing-a-praca-tymczasowa",
  order: 7,
  title: "Outsourcing і praca tymczasowa: аналіз фактів",
  polish:
    "outsourcing procesowy; agencja pracy tymczasowej; pracodawca użytkownik; delegowanie",
  provisionScope: workLaw.text`${workLaw.article("2")}, ${workLaw.article("6", "6")}, ${workLaw.article("9", "9")}, ${workLaw.article("32", "32")}, ${workLaw.articleRange("40", "44", { start: "40" })}, ${workLaw.articleRange("62", "79", { start: "62" })}`,
  outcome:
    "Оцінює фактичну організацію роботи та відрізняє послугу від kierowanie працівника, не покладаючись на етикетку договору.",
  caseQuestion:
    "Хто реально керує працею, для кого створюється результат і чия модель доступу до роботи застосовується?",
  placeInWork:
    "Застосування всієї послідовності: факти → ролі → режим → документи → відповідність.",
  sections: [
    {
      id: "facts-over-label",
      title: "Дивитися на фактичну організацію",
      paragraphs: [
        "Назва outsourcing, umowa o usługę або faktura не вирішують кваліфікацію. Потрібно з'ясувати, хто планує і контролює щоденну працю, хто визначає місце та час, хто платить і хто відповідає за результат.",
        "Якщо podmiot фактично надає працівника іншому podmiot, перевіряють режим agencja pracy tymczasowej, pracodawca użytkownik або delegowanie за фактичними ознаками.",
      ],
      questions: [
        "Чи купує замовник готовий результат послуги, чи фактично отримує працівника під своїм керуванням?",
        "Хто має право давати щоденні вказівки та змінювати завдання?",
      ],
      steps: [
        "Описати процес без слова outsourcing.",
        "Встановити керування, ризик результату, оплату й місце роботи.",
        workLaw.text`Зіставити факти з дефініціями ${workLaw.article("2")} та відповідним режимом.`,
      ],
      evidence: [
        "Технічне завдання і SLA",
        "Інструкції, графіки та доступи",
        "Umowy між усіма podmiot",
      ],
      warning:
        "Формальний напис outsourcing не усуває правил про powierzenie pracy, якщо факти показують надання працівника.",
    },
    {
      id: "documents-for-model",
      title: "Перевірити ланцюг документів",
      paragraphs: [
        "Після фактичної кваліфікації зіставляють усі ланки: podmiot powierzający, agencja, pracodawca użytkownik або podmiot zagraniczny, cudzoziemiec, umowa, pobyt і zezwolenie або oświadczenie.",
        "Для pracy tymczasowej особливо важливо, щоб документ і umowa відображали pracodawca użytkownik та реальне місце роботи.",
      ],
      questions: [
        "Чи названі в документах правильні podmiot і pracodawca użytkownik?",
        "Чи відповідають фактичні завдання, час, оплата й місце дозволеній моделі?",
      ],
      steps: [
        "Побудувати карту всіх договорів і потоків роботи.",
        "Зіставити карту з документом pobyt та документом роботи.",
        "За розбіжності зупинити автоматичний висновок і перевірити потрібну зміну або новий режим.",
      ],
      evidence: [
        "Zezwolenie або oświadczenie",
        "Umowy та підтвердження виплат",
        "Фактичні дані про місце й керування",
      ],
      warning:
        "Ні umowa, ні zezwolenie, ні oświadczenie окремо не гарантують legalności моделі outsourcing або pracy tymczasowej.",
    },
  ],
  exercise:
    "Порівняй два анонімні сценарії з однаковою назвою outsourcing: у першому опиши готову послугу, у другому — надання працівника; для кожного побудуй окрему карту документів.",
}

export const outsourcingAPracaTymczasowaLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:outsourcing-a-praca-tymczasowa",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "outsourcing-a-praca-tymczasowa",
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
              sourceId: "eli-powierzanie-pracy",
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

export default outsourcingAPracaTymczasowaLearningModuleTopic
