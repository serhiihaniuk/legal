import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "party",
  order: 5,
  title: "Сторона і представник",
  polish: "Strona, interes prawny, przedstawiciel, pełnomocnik",
  articles: kpaLaw.text`${kpaLaw.articleRange("28", "34", { start: "art. 28", end: "34" })}, ${kpaLaw.article("40", "art. 40")} KPA`,
  outcome:
    "Ви знаєте, хто має процесуальні права, хто може діяти і кому орган має вручати письма.",
  layers: {
    beginner: {
      focus:
        "Strona — це не просто зацікавлена особа, а той, чий інтерес правний або обов’язок стосується провадження.",
      law: kpaLaw.text`${kpaLaw.article("28", "Art. 28")} пов’язує статус сторони з interesem prawnym або obowiązkiem. ${kpaLaw.article("32", "Art. 32")} дозволяє діяти через pełnomocnika, якщо дія не вимагає особистої участі.`,
      practice:
        "На початку справи визначте заявника, інших можливих сторін, представника законного та pełnomocnika.",
      pitfall:
        "Інтерес фактичний — наприклад, економічна вигода третьої особи — не завжди дорівнює interesowi prawnemu.",
    },
    practical: {
      focus:
        "Перевірте форму і обсяг pełnomocnictwa, підпис, оплату skarbową та адресу для вручень.",
      law: kpaLaw.text`За ${kpaLaw.article("40", "art. 40")}, коли сторона діє через представника, письма вручаються представникові; для кількох pełnomocników діють правила цієї статті.`,
      practice:
        "Ведіть реєстр: хто уповноважений, з якої дати, на які дії, чи не відкликано повноваження.",
      pitfall:
        "Особиста дія, якої вимагає спеціальний закон, не стає необов’язковою через широке pełnomocnictwo.",
    },
    advanced: {
      focus:
        "Статус сторони визначає доступ до актів, право на докази й оскарження; помилкова відмова в участі може бути підставою wznowienia.",
      law: kpaLaw.text`${kpaLaw.article("145", "Art. 145 § 1")} pkt 4 передбачає wznowienie, коли сторона без власної вини не брала участі в провадженні.`,
      practice:
        "Якщо орган ігнорує pełnomocnika або потенційну сторону, фіксуйте конкретні невручені письма і пропущені можливості дії.",
      pitfall:
        "Не змішуйте відсутність strony в матеріально-правовому сенсі з технічною відсутністю документа pełnomocnictwa.",
    },
  },
  method: [
    "Визначте interes prawny",
    "Перевірте здатність діяти",
    "Перевірте повноваження",
    "Встановіть правильного адресата doręczeń",
  ],
  checklist: [
    "Strona визначена",
    "Pełnomocnictwo охоплює дію",
    "Doręczenia йдуть правильній особі",
  ],
  questions: [
    {
      prompt: "Чи може pełnomocnik замість іноземця виконати кожну дію?",
      answer: kpaLaw.text`Ні. ${kpaLaw.article("32", "Art. 32")} зберігає виняток для дій, характер яких вимагає особистої участі; додаткові особисті обов’язки може встановлювати спеціальний закон.`,
    },
  ],
}

export const kpaPartyLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:party",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "party",
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

export default kpaPartyLearningModuleTopic
