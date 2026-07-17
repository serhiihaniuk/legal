import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "stay-and-work-right",
  order: 3,
  title: "Відокрем право на pobyt від права на pracę",
  polish: "legalny pobyt, dostęp do rynku pracy, zezwolenie na pracę",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("98", "146", { start: "art. 98" })}`,
  outcome:
    "Уміти перевірити два окремі питання: чи законний pobyt і чи дозволена конкретна pracę.",
  caseQuestion:
    "Який документ підтверджує legalny pobyt, а яка норма та умови дають доступ до конкретної pracę?",
  placeInWork: "Перевірка наслідків перед початком або зміною роботи.",
  sections: [
    {
      id: "two-questions",
      title: "Постав два різні питання",
      paragraphs: [
        "Статутна рамка: Ustawa o cudzoziemcach регулює підстави pobytu, а доступ до rynku pracy може залежати також від окремих умов і документів.",
        "Практична перевірка: не роби висновок про pracę лише з чинності wizy, karty pobytu або штампа.",
      ],
      questions: [
        "Чи є legalny pobyt на потрібний період?",
        "Чи охоплює дозвіл саме роботодавця, stanowisko, умови та спосіб роботи?",
      ],
      steps: [
        "Перевірити підставу pobytu.",
        "Окремо перевірити доступ до pracę.",
        "Зіставити фактичну роботу з дозволеними умовами.",
      ],
      evidence: [
        "Документ pobytowy та його умови.",
        "Договір і дані про pracodawca, stanowisko та місце роботи.",
        "Документ, що підтверджує доступ до rynku pracy.",
      ],
      warning:
        "Legalny pobyt не є автоматично дозволом на кожну pracę; так само дозвіл на pracę не замінює підставу pobytu.",
    },
    {
      id: "change-impact",
      title: "Перевір зміни",
      paragraphs: [
        "Статутна рамка: зміна pracodawca, stanowisko, celu pobytu або фактичної організації роботи може вплинути на умови дозволу.",
        "Практична перевірка: перед зміною порівняй старі й нові умови та з’ясуй, чи потрібне повідомлення, новий документ або інша процедура.",
      ],
      questions: [
        "Що саме змінилося: pracodawca, умови, cel pobytu чи документ?",
        "Який правовий наслідок закон пов’язує з цією зміною?",
      ],
      steps: [
        "Зафіксувати старі умови.",
        "Описати нові умови.",
        "Перевірити спеціальну норму і документи.",
      ],
      evidence: [
        "Попередній і новий договір.",
        "Повідомлення або рішення органу.",
        "Актуальні документи працівника та роботодавця.",
      ],
      warning:
        "Не вважай зміну допустимою лише тому, що особа все ще має чинну kartę pobytu.",
    },
  ],
  exercise:
    "Порівняй два анонімні сценарії: та сама karta pobytu, але інший pracodawca і stanowisko. Склади окремі висновки про pobyt і pracę та список перевірок.",
}

export const stayAndWorkRightLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:stay-and-work-right",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "stay-and-work-right",
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
              sourceId: "eli-ustawa-o-cudzoziemcach",
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

export default stayAndWorkRightLearningModuleTopic
