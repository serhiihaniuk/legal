import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "authority",
  order: 4,
  title: "Який орган веде справу",
  polish: "Właściwość rzeczowa, miejscowa i instancyjna",
  articles: kpaLaw.text`${kpaLaw.articleRange("19", "23", { start: "art. 19", end: "23" })}, ${kpaLaw.articleRange("65", "66", { start: "art. 65", end: "66" })} KPA`,
  outcome:
    "Ви перевіряєте компетенцію до аналізу документів і знаєте, що робити з поданням до неправильного органу.",
  layers: {
    beginner: {
      focus:
        "Właściwość rzeczowa відповідає на «який тип органу», miejscowa — «на якій території», instancyjna — «яка інстанція».",
      law: kpaLaw.text`За ${kpaLaw.article("19", "art. 19")} орган зобов’язаний сам контролювати свою rzeczową і miejscową właściwość.`,
      practice:
        "Для pobytu не вгадуйте wojewodę за адресою кореспонденції — перевірте спеціальне правило компетенції і фактичну підставу територіального зв’язку.",
      pitfall:
        "Адресат листа, місце роботи і місце проживання можуть бути в різних воєводствах.",
    },
    practical: {
      focus:
        "Фіксуйте дату подання, спосіб і орган-адресат. При передачі справи перевірте повідомлення та безперервність строків.",
      law: kpaLaw.text`${kpaLaw.article("65", "Art. 65")} регулює передачу podania до właściwego organu; подання до неправильного органу до спливу строку за загальним правилом вважається внесеним із дотриманням строку.`,
      practice:
        "Збережіть UPO, штамп прийняття або підтвердження відправлення — це доказ дати першого внесення.",
      pitfall: kpaLaw.text`Не кожну помилку адресата лікує ${kpaLaw.article("65", "art. 65")} однаково; перевірте, чи орган можна встановити з подання і чи спеціальний закон не має іншого правила.`,
    },
    advanced: {
      focus:
        "Відрізняйте spór o właściwość між органами від незгоди сторони з правовою оцінкою органу.",
      law: kpaLaw.text`${kpaLaw.article("22", "Art. 22")} визначає, хто вирішує конкретні спори про компетенцію; до вирішення спору ${kpaLaw.article("23", "art. 23")} дозволяє лише невідкладні дії у визначених інтересах.`,
      practice:
        "У складній справі зробіть окрему нотатку компетенції з нормою спеціального закону, фактом, який її прив’язує, і доказом цього факту.",
      pitfall: kpaLaw.text`Порушення właściwości може мати серйозні наслідки, включно з підставою nieważności за ${kpaLaw.article("156", "art. 156 § 1")} pkt 1.`,
    },
  },
  method: [
    "Знайдіть норму компетенції в спеціальному законі",
    "Встановіть факт територіального зв’язку",
    "Перевірте першу й апеляційну інстанції",
    "Збережіть доказ дати та адресата подання",
  ],
  checklist: [
    "Rzeczowa перевірена",
    "Miejscowa підтверджена фактом",
    "Відомий орган odwoławczy",
  ],
  questions: [
    {
      prompt: "Хто має контролювати właściwość — лише заявник?",
      answer: kpaLaw.text`Ні. ${kpaLaw.article("19", "Art. 19")} прямо покладає на organ обов’язок дотримуватися своєї rzeczowej і miejscowej właściwości з уряду.`,
    },
  ],
  lesson: {
    paragraphs: [
      "Właściwość відповідає не на одне, а на три питання: який тип organu вирішує цей предмет, який територіальний зв’язок обирає конкретний organ і хто контролює рішення в наступній інстанції. Компетенція не виникає з того, що urząd уже прийняв документи або веде листування; вона має випливати з закону та фактів.",
      "У справах cudzoziemców місце проживання, місце роботи, адреса korespondencyjna і фактичний pobyt можуть не збігатися. Тому запишіть норму właściwości зі спеціального закону, конкретний факт-прив’язку і документ, який його доводить. Якщо podanie потрапило не туди, аналізуйте передачу, дату першого внесення та повідомлення сторони, а не подавайте все заново без потреби.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 19–21",
          parts: [
            {
              text: "art. 19",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-19",
              },
            },
            {
              text: "–",
            },
            {
              text: "21",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-21",
              },
            },
          ],
        },
        role: "Зобов’язують organ контролювати rzeczową і miejscową właściwość та дають загальні способи визначення територіальної компетенції.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 22–23",
          parts: [
            {
              text: "art. 22",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-22",
              },
            },
            {
              text: "–",
            },
            {
              text: "23",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-23",
              },
            },
          ],
        },
        role: "Регулюють спори про компетенцію та вузький обсяг невідкладних дій до їх вирішення.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 65–66",
          parts: [
            {
              text: "art. 65",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-65",
              },
            },
            {
              text: "–",
            },
            {
              text: "66",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-66",
              },
            },
          ],
        },
        role: "Пояснюють поводження з podaniem, адресованим невластивому organowi, або з вимогами різної компетенції.",
      },
    ],
    terms: [
      {
        term: "właściwość rzeczowa",
        meaning: "Компетенція за предметом справи.",
      },
      {
        term: "właściwość miejscowa",
        meaning: "Компетенція за територіальним зв’язком, визначеним законом.",
      },
      {
        term: "organ wyższego stopnia",
        meaning:
          "Орган, якому закон доручає інстанційний контроль або інші визначені дії.",
      },
    ],
    caseExample: {
      title: "Переїзд між воєводствами",
      facts:
        "Після подання wniosku іноземець фактично переїхав і повідомив нову адресу, але робота залишилася в попередньому воєводстві.",
      analysis:
        "Не робимо висновку з одного факту. Перевіряємо спеціальну норму właściwości, значення переїзду для вже розпочатої справи, докази нового місця та процес передачі.",
      lesson:
        "Зміна адреси й зміна właściwości — пов’язані, але не тотожні події.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Обов’язок контролю з art. 19",
        parts: [
          {
            text: "Обов’язок контролю з ",
          },
          {
            text: "art. 19",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-19",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Загальні прив’язки art. 21",
        parts: [
          {
            text: "Загальні прив’язки ",
          },
          {
            text: "art. 21",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-21",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText:
          "Наслідок своєчасного подання до неправильного organu в art. 65",
        parts: [
          {
            text: "Наслідок своєчасного подання до неправильного organu в ",
          },
          {
            text: "art. 65",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-65",
            },
          },
        ],
      },
    ],
  },
}

export const kpaAuthorityLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:authority",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "authority",
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

export default kpaAuthorityLearningModuleTopic
