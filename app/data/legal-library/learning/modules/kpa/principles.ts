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
  lesson: {
    paragraphs: [
      "Zasady ogólne — це обов’язковий стандарт усієї процедури. Вони пояснюють, як organ має користуватися конкретними повноваженнями: діяти на правовій основі, точно з’ясувати факти, інформувати, дозволити стороні участь, поводитися послідовно та вести справу без зайвої затримки. Принцип стає практичним, коли ви пов’язуєте його з конкретною дією або пропуском у матеріалах справи.",
      {
        kind: "authored-legal-text",
        plainText:
          "У legalizacji принципи особливо корисні, коли рішення формально посилається на правильну норму, але organ не побачив поданого документа, не дав відповісти на новий доказ або вимагав інформацію без пояснення її ролі. Не пишіть лише «naruszono art. 7 i 8». Покажіть: який факт не встановлено, який доказ пропущено, яку участь заблоковано і як це могло вплинути на wynik.",
        parts: [
          {
            text: "У legalizacji принципи особливо корисні, коли рішення формально посилається на правильну норму, але organ не побачив поданого документа, не дав відповісти на новий доказ або вимагав інформацію без пояснення її ролі. Не пишіть лише «naruszono ",
          },
          {
            text: "art. 7",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-7",
            },
          },
          {
            text: " i 8». Покажіть: який факт не встановлено, який доказ пропущено, яку участь заблоковано і як це могло вплинути на wynik.",
          },
        ],
      },
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 6–9",
          parts: [
            {
              text: "art. 6",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-6",
              },
            },
            {
              text: "–",
            },
            {
              text: "9",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-9",
              },
            },
          ],
        },
        role: "Встановлюють законність, обов’язок з’ясування справи, довіру, пропорційність, рівність та інформаційний обов’язок.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 10–12",
          parts: [
            {
              text: "art. 10",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-10",
              },
            },
            {
              text: "–",
            },
            {
              text: "12",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-12",
              },
            },
          ],
        },
        role: "Захищають активну участь сторони, зрозумілість мотивів та швидке, водночас уважне ведення справи.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 14–16",
          parts: [
            {
              text: "art. 14",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-14",
              },
            },
            {
              text: "–",
            },
            {
              text: "16",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-16",
              },
            },
          ],
        },
        role: "Регулюють письмове закріплення справи та базові властивості інстанційності й остаточності рішень.",
      },
    ],
    terms: [
      {
        term: "czynny udział",
        meaning:
          "Реальна можливість знати матеріал, подавати позицію і висловитися перед рішенням, а не лише формальна присутність у справі.",
      },
      {
        term: "zasada zaufania",
        meaning:
          "Вимога передбачуваної, безсторонньої й пропорційної поведінки органу.",
      },
      {
        term: "praworządność",
        meaning:
          "Organ діє в межах і на підставі права та сам контролює законність своїх дій.",
      },
    ],
    caseExample: {
      title: "Новий негативний доказ перед decyzją",
      facts:
        "Після відповіді заявника organ отримав інформацію від іншої установи й одразу видав відмову, не відкривши стороні можливості висловитися.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Перевіряємо art. 10 разом із нормами про докази та uzasadnienie. Важливо показати, яку відповідь або контрдоказ сторона могла подати і чому це мало значення.",
        parts: [
          {
            text: "Перевіряємо ",
          },
          {
            text: "art. 10",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-10",
            },
          },
          {
            text: " разом із нормами про докази та uzasadnienie. Важливо показати, яку відповідь або контрдоказ сторона могла подати і чому це мало значення.",
          },
        ],
      },
      lesson:
        "Порушення принципу доводиться через втрачену процесуальну можливість та її вплив на рішення.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Обов’язки organu в art. 7 і 9",
        parts: [
          {
            text: "Обов’язки organu в ",
          },
          {
            text: "art. 7",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-7",
            },
          },
          {
            text: " і 9",
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Виняток із czynnego udziału в art. 10 § 2–3",
        parts: [
          {
            text: "Виняток із czynnego udziału в ",
          },
          {
            text: "art. 10 § 2–3",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-10",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Різницю між ostatecznością і prawomocnością в art. 16",
        parts: [
          {
            text: "Різницю між ostatecznością і prawomocnością в ",
          },
          {
            text: "art. 16",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-16",
            },
          },
        ],
      },
    ],
  },
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default kpaPrinciplesLearningModuleTopic
