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
  title: "Актори та дефініції",
  polish:
    "cudzoziemiec; podmiot powierzający pracę; podmiot zagraniczny; pracodawca użytkownik; pracownik tymczasowy",
  provisionScope: workLaw.text`${workLaw.articleRange("2", "6")}`,
  outcome:
    "Правильно визначає ролі учасників і не плутає того, хто укладає umowa, з тим, хто організовує щоденну роботу.",
  caseQuestion:
    "Хто фактично powierzає роботу, хто є pracodawca użytkownik і до кого прив'язаний документ?",
  placeInWork:
    "Кваліфікація моделі перед вибором zezwolenie, oświadczenie або винятку.",
  sections: [
    {
      id: "actors",
      title: "Хто є ким",
      paragraphs: [
        "Podmiot powierzający pracę може бути організаційною одиницею або фізичною особою. Ustawa окремо розрізняє polski podmiot, podmiot zagraniczny, pracodawca użytkownik і pracownik tymczasowy.",
        "Роль не визначається лише назвою договору: важливі юридичний зв'язок, місце роботи та фактична організація праці.",
      ],
      questions: [
        "Хто підписує umowa з cudzoziemiec?",
        "Хто дає щоденні вказівки й отримує результат роботи?",
      ],
      steps: [
        "Назвати кожен залучений podmiot.",
        workLaw.text`Зіставити його статус із визначеннями ${workLaw.article("2")}.`,
        "Встановити зв'язок між podmiot, cudzoziemiec і місцем роботи.",
      ],
      evidence: [
        "Umowy між усіма podmiot",
        "Організаційна схема",
        "Фактичні вказівки та місце роботи",
      ],
      warning:
        "Термін outsourcing або назва umowa не доводять самі по собі, що це не є powierzenie pracy.",
    },
    {
      id: "scope-of-work",
      title: "Що вважається powierzanie pracy",
      paragraphs: [
        workLaw.text`${workLaw.article("2")} охоплює працю за stosunek pracy, stosunek służbowy, umowa o pracę nakładczą, цивільними договорами, окремими функціями в spółka та роботу в межах delegowanie.`,
        "Тому спочатку описують факти, а вже потім підбирають правовий інструмент і перевіряють, чи діє ustawa.",
      ],
      questions: [
        "Яку роботу реально виконує cudzoziemiec у Польщі?",
        "Чи є окремий pracodawca użytkownik або podmiot, до якого делеговано працівника?",
      ],
      steps: [
        "Описати послугу без юридичних ярликів.",
        "Визначити вид правового зв'язку.",
        "Перевірити спеціальний режим для цієї моделі.",
      ],
      evidence: [
        "Опис процесу",
        "Umowa та додатки",
        "Листування про організацію роботи",
      ],
      warning:
        "Одна й та сама назва послуги може мати різний правовий результат залежно від фактичної організації.",
    },
  ],
  exercise:
    "Намалюй карту ролей для анонімного проєкту: podmiot, agencja, pracodawca użytkownik, cudzoziemiec і орган, до якого подається заява.",
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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default uczestnicyIDefinicjeLearningModuleTopic
