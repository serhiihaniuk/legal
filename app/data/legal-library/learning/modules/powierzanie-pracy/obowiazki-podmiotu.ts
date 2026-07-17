import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "obowiazki-podmiotu",
  order: 4,
  title: "Обов'язки podmiot і повідомлення",
  polish:
    "obowiązki podmiotu powierzającego pracę; powiadomienie; dokumentacja",
  provisionScope: workLaw.text`${workLaw.articleRange("4", "5")}, ${workLaw.articleRange("9", "11", { start: "9" })}, ${workLaw.articleRange("17", "25", { start: "17" })}, ${workLaw.articleRange("33", "44", { start: "33" })}, ${workLaw.articleRange("60", "79", { start: "60" })}`,
  outcome:
    "Будує практичний пакет перевірки: особа, pobyt, umowa, умови роботи, зберігання документів і передбачені powiadomienie.",
  caseQuestion:
    "Що podmiot повинен перевірити й зафіксувати до роботи та після зміни обставин?",
  placeInWork:
    "Перехід від правової кваліфікації до доказів і щоденної процедури роботодавця.",
  sections: [
    {
      id: "before-work",
      title: "До допуску до роботи",
      paragraphs: [
        "Podmiot збирає визначені дані й копії документів, до початку роботи вимагає чинний документ, що підтверджує pobyt, та укладає письмову umowa. Якщо текст не зрозумілий cudzoziemiec, потрібна зрозуміла версія або належний переклад.",
        "Перевірка pobyt і перевірка uprawnienie do pracy є окремими діями, які треба зберегти в доказах.",
      ],
      questions: [
        "Чи перевірено особу і чинність документа pobyt?",
        "Чи відповідає письмова umowa документу роботи та фактам?",
      ],
      steps: [
        "Зібрати передбачені дані й копії.",
        "Перевірити pobyt та підставу роботи.",
        "Підписати зрозумілу письмову umowa до допуску.",
      ],
      evidence: [
        "Копії документів",
        "Письмова umowa і переклад",
        "Підтвердження підстави роботи",
      ],
      warning:
        "Зібрана папка документів не виправляє фактичну роботу поза межами дозволу або oświadczenie.",
    },
    {
      id: "notifications-and-records",
      title: "Повідомлення та слід доказів",
      paragraphs: [
        "Ustawa передбачає пов'язані з різними режимами повідомлення органу, подання заяв і зберігання даних. Потрібно встановити, яка саме зміна або подія запускає обов'язок у конкретній справі.",
        "Зберігай не лише фінальний документ, а й подання, підтвердження, umowa, графіки та докази фактичних умов.",
      ],
      questions: [
        "Який орган і який канал передбачені для цього powiadomienie?",
        "Яка подія та дата мають бути доведені?",
      ],
      steps: [
        "Визначити режим: zezwolenie, sezonowa praca чи oświadczenie.",
        "Знайти відповідний обов'язок повідомлення в акті.",
        "Зберегти доказ подання та пов'язану документацію.",
      ],
      evidence: [
        "Копія powiadomienie",
        "Підтвердження подання",
        "Актуальні записи часу, оплати й обов'язків",
      ],
      warning:
        "Не можна переносити строк або спосіб повідомлення з одного режиму на інший без перевірки відповідних приписів.",
    },
  ],
  exercise:
    "Створи чекліст podmiot для одного анонімного працівника: що перевірити до початку, що зберігати та яку зміну треба окремо оцінити для powiadomienie.",
}

export const obowiazkiPodmiotuLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:obowiazki-podmiotu",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "obowiazki-podmiotu",
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

export default obowiazkiPodmiotuLearningModuleTopic
