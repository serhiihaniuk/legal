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
  title: "Обов’язки суб’єкта та повідомлення",
  polish:
    "obowiązki podmiotu powierzającego pracę; powiadomienie; dokumentacja",
  provisionScope: workLaw.text`${workLaw.articleRange("4", "5")}, ${workLaw.article("5a")}, ${workLaw.articleRange("17", "20", { start: "17" })}, ${workLaw.article("59")}, ${workLaw.articleRange("68", "70", { start: "68" })}, ${workLaw.article("84")}`,
  outcome:
    "Будує доказовий процес суб’єкта, який доручає роботу: перевірка особи й перебування, зрозумілий письмовий договір, передання документа належним каналом та окремі повідомлення після визначених подій.",
  caseQuestion:
    "Що суб’єкт повинен перевірити й зафіксувати до початку роботи та після зміни обставин?",
  placeInWork:
    "Перехід від правової кваліфікації до доказів і щоденної процедури роботодавця.",
  sections: [
    {
      id: "before-work",
      title: "До допуску до роботи",
      paragraphs: [
        workLaw.text`За ${workLaw.article("4")} суб’єкт до початку роботи вимагає від іноземця чинний документ, що дає право перебувати в Польщі, та зберігає його копію. Отримані дані й документи слугують також для підтвердження особи та права на працевлаштування. ${workLaw.article("5")} вимагає письмового договору до допуску до роботи, крім прямо названого винятку. Якщо договір польською мовою незрозумілий іноземцеві, до підписання він має отримати письмову зрозумілу версію; для договору іноземною мовою суб’єкт зберігає присяжний переклад польською.`,
        workLaw.text`Для дозволу та декларації діє ще один крок. За ${workLaw.article("17")} або ${workLaw.article("68")} договір польською мовою передають через систему «eUmowy», якщо його укладено в цій системі, або передають польськомовну копію через систему обслуговування справ іноземців. Загальне правило вимагає зробити це до початку роботи. Лише для договору про допомогу під час збору врожаю («umowa o pomocy przy zbiorach») стаття 17 передбачає сім днів від дня доручення роботи.`,
      ],
      questions: [
        "Чи перевірено особу, правову підставу та чинність документа про перебування?",
        "Чи відповідає письмовий договір документу роботи та фактам?",
      ],
      steps: [
        "Перевірити особу, документ про перебування і конкретну підставу роботи.",
        "Зіставити договір із дозволеними умовами та дати іноземцеві зрозумілий текст.",
        "Передати договір або його копію належним електронним каналом і зберегти підтвердження.",
      ],
      evidence: [
        "Копії документів",
        "Письмовий договір і переклад",
        "Підтвердження підстави роботи",
      ],
      warning:
        "Зібрана папка документів не виправляє фактичну роботу поза межами дозволу або декларації.",
    },
    {
      id: "notifications-and-records",
      title: "Повідомлення та слід доказів",
      paragraphs: [
        workLaw.text`Не існує одного спільного строку для всіх повідомлень. ${workLaw.article("5a")} дає сім днів від початку роботи особи, яка користується тимчасовим захистом, і окремі сім днів від кожної прямо названої зміни. ${workLaw.articleRange("18", "20")} регулюють інші події у справах дозволів на роботу, а ${workLaw.article("70")} — початок, непочаток або дострокове завершення роботи на підставі декларації.`,
        "У доказах треба пов'язати кожне подання з подією, датою, органом і каналом. Сам скриншот фінального статусу не покаже, чи повідомлення було своєчасним і чи описувало фактичні умови.",
      ],
      questions: [
        "Який орган і який канал передбачені для цього повідомлення?",
        "Яка подія та дата мають бути доведені?",
      ],
      steps: [
        "Назвати режим і точну подію, яка запускає обов'язок.",
        "Обчислити строк від дати цієї події та визначити правильний орган і систему.",
        "Зберегти повний зміст подання, підтвердження часу й документи про фактичні умови.",
      ],
      evidence: [
        "Копія повідомлення",
        "Підтвердження подання",
        "Актуальні записи часу, оплати й обов'язків",
      ],
      warning:
        "Семиденний строк зі статті 5a, передання договору до початку роботи за статтею 17 або 68 і строки повідомлень зі статті 70 — це різні обов’язки. Виконання одного не замінює інших.",
    },
  ],
  exercise:
    "Для одного анонімного працівника склади послідовність перевірки: що встановити до початку роботи, що зберігати та які зміни можуть запустити окремий обов’язок повідомлення.",
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default obowiazkiPodmiotuLearningModuleTopic
