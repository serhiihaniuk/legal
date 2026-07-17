import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "delay",
  order: 13,
  title: "Коли справа триває надто довго",
  polish: "Bezczynność, przewlekłość i ponaglenie",
  articles: kpaLaw.text`${kpaLaw.articleRange("35", "38", { start: "art. 35", end: "38" })} KPA`,
  outcome:
    "Ви відрізняєте пропущений строк від неефективного ведення і готуєте обґрунтоване ponaglenie.",
  layers: {
    beginner: {
      focus:
        "Bezczynność — справу не завершено у строк; przewlekłość — її ведуть довше, ніж потрібно. Ponaglenie має містити uzasadnienie.",
      law: kpaLaw.text`Ці визначення і право на ponaglenie містить ${kpaLaw.article("37", "art. 37")}. ${kpaLaw.article("36", "Art. 36")} зобов’язує organ повідомити причину затримки, новий строк і право на ponaglenie.`,
      practice: kpaLaw.text`Спочатку побудуйте timeline: wszczęcie, wezwania, ваші відповіді, паузи, повідомлення ${kpaLaw.article("36", "art. 36")}, остання дія organu.`,
      pitfall:
        "Саме відчуття, що «довго», слабше за точну хронологію і зіставлення з правовим строком.",
    },
    practical: {
      focus:
        "Ponaglenie подається до organu wyższego stopnia через organ, що веде справу; якщо вищого немає — до того самого organu.",
      law: kpaLaw.text`${kpaLaw.article("37", "Art. 37")} визначає маршрут, обов’язкове uzasadnienie та спосіб оцінки bezczynności/przewlekłości.`,
      practice: kpaLaw.text`Вкажіть, які періоди не рахуються за ${kpaLaw.article("35", "art. 35 § 5")}, але не погоджуйтеся автоматично з кожним виключенням без фактичної підстави.`,
      pitfall:
        "Ponaglenie не замінює відповідь на чинне wezwanie і не виправляє невиконаний обов’язок сторони.",
    },
    advanced: {
      focus:
        "Після ponaglenia можливий судовий контроль bezczynności або przewlekłości за p.p.s.a.; це окремий предмет від оскарження майбутньої decyzji.",
      law: kpaLaw.text`${kpaLaw.article("38", "Art. 38")} KPA пов’язує необґрунтовану бездіяльність/затягування з відповідальністю працівника; судові наслідки визначає p.p.s.a.`,
      practice:
        "У судовій перспективі зберігайте доказ внесення ponaglenia, повний timeline і докази того, що справа була готова до дії.",
      pitfall:
        "Негативне postanowienie щодо ponaglenia не означає, що майбутня skarga на бездіяльність автоматично неможлива; предмет і допустимість треба аналізувати за p.p.s.a.",
    },
  },
  method: [
    "Встановіть застосовний строк",
    "Відніміть лише законні періоди",
    "Розділіть bezczynność і przewlekłość",
    "Подайте мотивоване ponaglenie правильним маршрутом",
  ],
  checklist: [
    "Є timeline",
    kpaLaw.text`Враховано ${kpaLaw.article("35", "art. 35 § 5")}`,
    "Є доказ подання ponaglenia",
  ],
  questions: [
    {
      prompt: "Що має бути в ponagleniu крім назви справи?",
      answer: kpaLaw.text`Щонайменше uzasadnienie: конкретна хронологія і пояснення, чому є bezczynność або przewlekłość. ${kpaLaw.article("37", "Art. 37")} прямо вимагає мотивування.`,
    },
  ],
}

export const kpaDelayLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:delay",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "delay",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.articles,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "module articles",
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

export default kpaDelayLearningModuleTopic
