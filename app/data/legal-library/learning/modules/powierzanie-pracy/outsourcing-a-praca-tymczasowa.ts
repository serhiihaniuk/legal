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
  title: "Аутсорсинг і тимчасова робота: аналіз фактів",
  polish:
    "outsourcing procesowy; agencja pracy tymczasowej; pracodawca użytkownik; delegowanie",
  provisionScope: workLaw.text`${workLaw.article("2")}, ${workLaw.article("6")}, ${workLaw.article("9")}, ${workLaw.article("17")}, ${workLaw.article("32")}, ${workLaw.articleRange("40", "44", { start: "40" })}, ${workLaw.articleRange("62", "70", { start: "62" })}, ${workLaw.article("84")}`,
  outcome:
    "Допомагає оцінити фактичну організацію роботи та відрізнити самостійну послугу від скерування працівника під керівництво іншого суб’єкта, не покладаючись на назву договору.",
  caseQuestion:
    "Хто реально керує працею, для кого створюється результат і чия модель доступу до роботи застосовується?",
  placeInWork:
    "Застосування всієї послідовності: факти → ролі → режим → документи → відповідність.",
  sections: [
    {
      id: "facts-over-label",
      title: "Дивитися на фактичну організацію",
      paragraphs: [
        "Назви «outsourcing», «umowa o świadczenie usług» або рахунок-фактура («faktura») самі не визначають правової моделі. Практичний орієнтир такий: за самостійної послуги виконавець організовує власний процес і відповідає перед замовником за погоджений результат. Якщо ж замовник щоденно розподіляє завдання, визначає час і керує конкретними працівниками, факти можуть указувати на надання персоналу. Остаточний висновок залежить від повної організації роботи.",
        workLaw.text`Якщо суб’єкт фактично скеровує іноземця працювати на користь і під керівництвом іншого суб’єкта, треба перевірити правила для агентства тимчасової праці («agencja pracy tymczasowej»), роботодавця-користувача («pracodawca użytkownik») або відрядження («delegowanie»). ${workLaw.article("84")} у частині 12 передбачає відповідальність за скерування на іншій підставі, ніж договір, що передбачає тимчасову роботу. Це не означає, що кожен процесний аутсорсинг («outsourcing procesowy») заборонений.`,
      ],
      questions: [
        "Чи купує замовник готовий результат послуги, чи фактично отримує працівника під своїм керуванням?",
        "Хто має право давати щоденні вказівки та змінювати завдання?",
      ],
      steps: [
        "Описати процес без ярлика «аутсорсинг».",
        "Встановити керування, ризик результату, оплату й місце роботи.",
        workLaw.text`Зіставити факти з дефініціями ${workLaw.article("2")} та відповідним режимом.`,
      ],
      evidence: [
        "Технічне завдання та вимірюваний результат послуги",
        "Інструкції, графіки та доступи",
        "Договори між усіма залученими суб’єктами",
      ],
      warning:
        "Формальний напис «outsourcing» не усуває правил про доручення роботи іноземцеві, якщо факти показують надання працівника під чуже керівництво.",
    },
    {
      id: "documents-for-model",
      title: "Перевірити ланцюг документів",
      paragraphs: [
        "Після фактичної кваліфікації зіставляють усі ланки: суб’єкта, який доручає роботу, агентство, роботодавця-користувача або іноземного суб’єкта, іноземця, договори, підставу перебування та дозвіл чи декларацію. Пропущений учасник може змінити весь аналіз.",
        workLaw.text`За тимчасової роботи документ має відображати роботодавця-користувача. На його вимогу суб’єкт передає копію дозволу або декларації відповідно до ${workLaw.article("17")} чи ${workLaw.article("68")}. Реальне місце, керівництво, завдання й оплата повинні відповідати цій моделі, а не лише тексту комерційного договору.`,
      ],
      questions: [
        "Чи правильно названі в документах суб’єкт, який доручає роботу, та роботодавець-користувач?",
        "Чи відповідають фактичні завдання, час, оплата й місце дозволеній моделі?",
      ],
      steps: [
        "Побудувати карту всіх договорів і потоків роботи.",
        "Зіставити карту з документом про перебування та документом про право на роботу.",
        "За розбіжності зупинити автоматичний висновок і перевірити потрібну зміну або новий режим.",
      ],
      evidence: [
        "Дозвіл або декларація",
        "Договори та підтвердження виплат",
        "Фактичні дані про місце й керування",
      ],
      warning:
        "Навіть правильно оформлений документ не виправляє іншу фактичну модель. Водночас сам факт виконання послуги на об'єкті замовника ще не доводить надання працівника — вирішальне значення має реальна організація й керування.",
    },
  ],
  exercise:
    "Порівняй два анонімні сценарії з однаковою назвою «outsourcing»: у першому опиши самостійну послугу, у другому — надання працівника під чуже керівництво. Для кожного побудуй окрему карту ролей і документів.",
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default outsourcingAPracaTymczasowaLearningModuleTopic
