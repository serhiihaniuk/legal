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
  lesson: {
    paragraphs: [
      "Статус strony відкриває набір процесуальних прав: доступ до akt, участь у доказах, отримання рішень та їх оскарження. Джерелом статусу є interes prawny або obowiązek, а не лише цікавість, родинний зв’язок чи економічна зацікавленість. У кожній справі спитайте, яка конкретна норма права пов’язує результат саме з цією особою.",
      "Pełnomocnik може виконувати більшість процесуальних дій, але не замінює сторону там, де характер дії або спеціальний закон вимагає особистої участі. Для щоденної роботи важливі форма, обсяг і дата повноваження, opłata skarbowa та правила doręczeń. Помилка в адресаті письма може змінити обчислення строку й право на захист.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 28–30",
          parts: [
            {
              text: "art. 28",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-28",
              },
            },
            {
              text: "–",
            },
            {
              text: "30",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-30",
              },
            },
          ],
        },
        role: "Визначають, хто може бути стороною та як оцінюється її здатність бути учасником і діяти.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 32–34",
          parts: [
            {
              text: "art. 32",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-32",
              },
            },
            {
              text: "–",
            },
            {
              text: "34",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-34",
              },
            },
          ],
        },
        role: "Регулюють представництво, форму повноваження та забезпечення представника в необхідних випадках.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 40",
          parts: [
            {
              text: "art. 40",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-40",
              },
            },
          ],
        },
        role: "Вказує, кому organ вручає письма, коли діє przedstawiciel або pełnomocnik.",
      },
    ],
    terms: [
      {
        term: "interes prawny",
        meaning:
          "Особистий, конкретний і актуальний зв’язок із нормою права, від якої залежить становище особи.",
      },
      {
        term: "pełnomocnik",
        meaning:
          "Фізична особа, уповноважена діяти від імені strony у визначеному обсязі.",
      },
      {
        term: "przedstawiciel ustawowy",
        meaning:
          "Особа, право якої представляти випливає із закону або відповідного правового акта, а не лише з pełnomocnictwa.",
      },
    ],
    caseExample: {
      title: "Wezwanie вручено лише заявнику",
      facts:
        "У справі є чинне pełnomocnictwo, але wezwanie надіслано на приватну адресу іноземця, а pełnomocnik довідався після строку.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Перевіряємо акти, обсяг повноваження, art. 40, фактичне doręczenie і можливий вплив на строк. Окремо визначаємо, чи wezwanie вимагало особистої дії.",
        parts: [
          {
            text: "Перевіряємо акти, обсяг повноваження, ",
          },
          {
            text: "art. 40",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-40",
            },
          },
          {
            text: ", фактичне doręczenie і можливий вплив на строк. Окремо визначаємо, чи wezwanie вимагало особистої дії.",
          },
        ],
      },
      lesson:
        "Спочатку встановіть правильного адресата, а вже потім рахуйте строк і оцінюйте пропуск.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Дві частини визначення strony в art. 28",
        parts: [
          {
            text: "Дві частини визначення strony в ",
          },
          {
            text: "art. 28",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-28",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Виняток особистої дії в art. 32",
        parts: [
          {
            text: "Виняток особистої дії в ",
          },
          {
            text: "art. 32",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-32",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Правила для кількох pełnomocników у art. 40",
        parts: [
          {
            text: "Правила для кількох pełnomocników у ",
          },
          {
            text: "art. 40",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-40",
            },
          },
        ],
      },
    ],
  },
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default kpaPartyLearningModuleTopic
