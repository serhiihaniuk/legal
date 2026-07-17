import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "principles",
  order: 3,
  title: "Загальні засади",
  polish: "Zasady ogólne postępowania",
  articles: kpaLaw.text`${kpaLaw.articleRange("6", "16", { start: "art. 6", end: "16" })} KPA`,
  outcome:
    "Ви використовуєте засади як робочий стандарт оцінки дій органу, а не як декоративні гасла.",
  layers: {
    beginner: {
      focus:
        "Ключі: praworządność, dokładne wyjaśnienie, zaufanie, informowanie, czynny udział, szybkość і двоінстанційність.",
      law: kpaLaw.text`${kpaLaw.article("7", "Art. 7")} зобов’язує орган з’ясувати фактичний стан; ${kpaLaw.article("9", "art. 9")} — належно інформувати; ${kpaLaw.article("10", "art. 10")} — дати стороні участь і можливість висловитися перед рішенням.`,
      practice:
        "Коли читаєте письмо органу, запитайте: чи зрозуміло пояснено, що потрібно; чи можна надати позицію; чи орган бачить весь матеріал.",
      pitfall:
        "Засада не скасовує конкретної матеріальної умови. Вона впливає на спосіб ведення і оцінку законності процедури.",
    },
    practical: {
      focus:
        "Поєднуйте засаду з конкретним порушенням: відсутній доступ до матеріалу, неврахований доказ, суперечлива практика, неповне pouczenie.",
      law: kpaLaw.text`${kpaLaw.article("8", "Art. 8")} вимагає пропорційності, безсторонності, рівного ставлення і безпідставного невідступлення від усталеної практики в однаковому фактичному та правовому стані.`,
      practice:
        "В odwołaniu будуйте ланцюг: конкретна дія/бездіяльність → конкретний принцип → вплив на встановлення фактів або результат.",
      pitfall: kpaLaw.text`Саме посилання на ${kpaLaw.article("7", "art. 7")} або 8 без показу впливу на справу зазвичай слабке.`,
    },
    advanced: {
      focus:
        "Засади працюють разом із нормами про докази, обґрунтування і контроль інстанційний.",
      law: kpaLaw.text`Виняток із czynnego udziału в ${kpaLaw.article("10", "art. 10 § 2")} вузький: невідкладність через небезпеку для життя/здоров’я або непоправну матеріальну шкоду; причину треба зафіксувати в актах.`,
      practice:
        "Перевіряйте, чи орган не перетворив дискрецію на довільність: має бути правова межа, фактична основа і зрозуміле обґрунтування.",
      pitfall:
        "«Słuszny interes strony» не означає автоматичну перевагу інтересу заявника над законом або інтересами інших осіб.",
    },
  },
  method: [
    "Назвіть конкретну процесуальну дію органу",
    "Знайдіть відповідну засаду",
    "Покажіть, який факт або право постраждало",
    "Зв’яжіть засаду зі спеціальною нормою",
  ],
  checklist: [
    "Сторона могла брати участь",
    "Орган пояснив істотні обставини",
    "Усі важливі докази розглянуті",
  ],
  questions: [
    {
      prompt: kpaLaw.text`Чи ${kpaLaw.article("9", "art. 9")} звільняє сторону від обов’язку подати потрібні документи?`,
      answer:
        "Ні. Він зобов’язує орган інформувати і давати необхідні пояснення, але не усуває матеріальних та процесуальних обов’язків сторони.",
    },
  ],
}

export const kpaPrinciplesLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:principles",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "principles",
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

export default kpaPrinciplesLearningModuleTopic
