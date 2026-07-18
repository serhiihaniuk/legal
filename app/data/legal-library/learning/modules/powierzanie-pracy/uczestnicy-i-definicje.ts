import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "uczestnicy-i-definicje",
  order: 2,
  title: "Учасники та законодавчі визначення",
  polish:
    "cudzoziemiec; podmiot powierzający pracę; podmiot zagraniczny; pracodawca użytkownik; pracownik tymczasowy",
  provisionScope: workLaw.text`${workLaw.articleRange("2", "6")}`,
  outcome:
    "Допомагає визначити ролі учасників за законом і за фактами, не плутаючи сторону договору із суб’єктом, який фактично організовує щоденну роботу.",
  caseQuestion:
    "Хто фактично доручає роботу, хто є роботодавцем-користувачем і до якого суб’єкта прив’язаний документ?",
  placeInWork:
    "Кваліфікація моделі перед вибором дозволу, декларації або винятку.",
  sections: [
    {
      id: "actors",
      title: "Хто є ким",
      paragraphs: [
        workLaw.text`Суб’єкт, який доручає роботу іноземцеві («podmiot powierzający pracę cudzoziemcowi»), — це організаційна одиниця або фізична особа, яка на підставі договору чи іншого правового зв’язку доручає або має намір доручити таку роботу. ${workLaw.article("2")} окремо визначає польського суб’єкта, іноземного суб’єкта, роботодавця-користувача («pracodawca użytkownik») і тимчасового працівника («pracownik tymczasowy»), бо від ролі залежать вид документа, компетентний орган і зміст заяви.`,
        "Назва договору не вирішує питання сама. Треба перевірити, хто уклав договір з іноземцем, хто платить, хто визначає місце та час, хто дає щоденні вказівки і для кого фактично виконується робота.",
      ],
      questions: [
        "Хто підписує договір з іноземцем?",
        "Хто дає щоденні вказівки й отримує результат роботи?",
      ],
      steps: [
        "Назвати кожного залученого суб’єкта.",
        workLaw.text`Зіставити його статус із визначеннями ${workLaw.article("2")}.`,
        "Встановити зв’язок між суб’єктом, іноземцем і місцем роботи.",
      ],
      evidence: [
        "Договори між усіма залученими суб’єктами",
        "Організаційна схема",
        "Фактичні вказівки та місце роботи",
      ],
      warning:
        "Слова «outsourcing» або «umowa o świadczenie usług» не виключають доручення роботи іноземцеві, якщо факти показують, що він працює в організації іншого суб’єкта.",
    },
    {
      id: "scope-of-work",
      title: "Що охоплює доручення роботи",
      paragraphs: [
        workLaw.text`${workLaw.article("2")} охоплює не лише трудовий договір («umowa o pracę»). Визначення включає також службові відносини, надомну працю, цивільно-правові договори, визначені корпоративні функції та роботу в межах відрядження.`,
        "Тому аналіз починають не з назви шаблону, а з опису дій людини й організації процесу. Після цього визначають правовий зв’язок, ролі залучених суб’єктів і потрібний режим доступу до праці.",
      ],
      questions: [
        "Яку роботу реально виконує іноземець у Польщі?",
        "Чи є окремий роботодавець-користувач або суб’єкт, до якого відряджено працівника?",
      ],
      steps: [
        "Описати послугу без юридичних ярликів.",
        "Визначити вид правового зв'язку.",
        "Перевірити спеціальний режим для цієї моделі.",
      ],
      evidence: [
        "Опис процесу",
        "Договір та додатки",
        "Листування про організацію роботи",
      ],
      warning:
        "Одна й та сама назва послуги може мати різний правовий результат залежно від фактичної організації.",
    },
  ],
  exercise:
    "Намалюй карту ролей для анонімного проєкту: суб’єкт, агентство, роботодавець-користувач, іноземець і орган, до якого подається заява. Біля кожної стрілки вкажи факт або документ, що підтверджує зв’язок.",
}

export const uczestnicyIDefinicjeLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:uczestnicy-i-definicje",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "uczestnicy-i-definicje",
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

export default uczestnicyIDefinicjeLearningModuleTopic
