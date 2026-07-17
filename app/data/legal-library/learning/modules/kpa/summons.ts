import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "summons",
  order: 9,
  title: "Як читати wezwanie",
  polish: "Wezwania do czynności, wyjaśnień i dokumentów",
  articles: kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "art. 50", end: "56" })} KPA + правова підстава конкретної вимоги`,
  outcome:
    "Ви розбираєте wezwanie пункт за пунктом: компетенція, дія, строк, форма, наслідок і зв’язок з умовою.",
  layers: {
    beginner: {
      focus:
        "Wezwanie — це процесуальне письмо з конкретною вимогою. Воно не є автоматично відмовою і не кожне wezwanie стосується braków formalnych.",
      law: kpaLaw.text`${kpaLaw.article("50", "Art. 50")} дозволяє викликати до участі, пояснень або показань; ${kpaLaw.article("54", "art. 54")} перелічує елементи wezwania.`,
      practice:
        "Виділіть маркером: хто викликає, кого, у якій справі, для чого, до коли, як виконати, наслідки невиконання.",
      pitfall:
        "Не відповідайте одним пакетом без нумерації — легко пропустити один пункт або не пояснити відсутній документ.",
    },
    practical: {
      focus:
        "Класифікуйте кожен пункт як: formalny, dowodowy, osobista czynność, informacyjny або сумнівний за підставою.",
      law: kpaLaw.text`${kpaLaw.article("54", "Art. 54")} вимагає, зокрема, назву й адресу органу, дані викликаного, справу, мету, форму/строк і pouczenie про наслідки невиконання.`,
      practice:
        "Створіть таблицю відповіді: № wezwania → вимога → правова умова → додаток → пояснення → ризик.",
      pitfall:
        "Документ може бути релевантним, але вимога надмірно широкою. Спочатку зрозумійте факт, який organ намагається встановити.",
    },
    advanced: {
      focus:
        "Перевірте пропорційність, конкретність, правову основу і те, чи може organ отримати інформацію самостійно.",
      law: kpaLaw.text`${kpaLaw.article("50", "Art. 50 § 1")} пов’язує wezwanie з необхідністю для розstrzygnięcia або czynności urzędowych; засади ${kpaLaw.article("8", "art. 8")} і 12 допомагають оцінити адекватність способу.`,
      practice:
        "Якщо виконати неможливо, не мовчіть: до строку подайте доказану причину, альтернативний доказ і чітке клопотання.",
      pitfall:
        "Сумнів у законності вимоги сам по собі не зупиняє строк і не гарантує відсутності негативного наслідку.",
    },
  },
  method: [
    "Зафіксуйте doręczenie",
    "Розкладіть wezwanie на пункти",
    "Знайдіть мету кожної вимоги",
    "Складіть індекс додатків і перевірте комплектність",
  ],
  checklist: [
    "Кожен пункт має відповідь",
    "Вказано номер додатка",
    "Неможливість виконання пояснена до строку",
  ],
  questions: [
    {
      prompt: "Чи кожне wezwanie означає, що wniosek був формально неповний?",
      answer:
        "Ні. Wezwanie може стосуватися доказів, пояснень, особистої дії або іншої процесуальної потреби. Правову природу треба встановити з підстави і змісту.",
    },
  ],
}

export const kpaSummonsLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:summons",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "summons",
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

export default kpaSummonsLearningModuleTopic
