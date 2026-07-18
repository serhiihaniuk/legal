import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "appeal",
  order: 12,
  title: "Оскарження в адміністрації",
  polish: "Odwołanie i zażalenie",
  articles: kpaLaw.text`${kpaLaw.articleRange("127", "144", { start: "art. 127", end: "144" })} KPA`,
  outcome:
    "Ви обираєте правильний засіб, орган, маршрут і строк, а аргументи прив’язуєте до справи.",
  layers: {
    beginner: {
      focus:
        "Odwołanie стосується decyzji першої інстанції; zażalenie на postanowienie доступне лише тоді, коли закон це прямо передбачає.",
      law: kpaLaw.text`${kpaLaw.article("129", "Art. 129")}: odwołanie вноситься до organu odwoławczego через organ, який видав decyzję, за загальним правилом протягом 14 днів. ${kpaLaw.article("141", "Art. 141")}: zażalenie — 7 днів, якщо кодекс його допускає.`,
      practice:
        "Завжди перевірте: що це за акт, дата doręczenia, останній день, organ pośredniczący, organ właściwy.",
      pitfall:
        "Не надсилайте odwołanie безпосередньо до другої інстанції, якщо закон вимагає посередництва першої.",
    },
    practical: {
      focus:
        "Сильне odwołanie має структуру: zakres zaskarżenia, zarzuty, wnioski, uzasadnienie, dowody.",
      law: kpaLaw.text`${kpaLaw.article("128", "Art. 128")} не вимагає детального uzasadnienia, якщо спеціальний закон не встановлює інакше, але має випливати незадоволення рішенням.`,
      practice: kpaLaw.text`Попри мінімум ${kpaLaw.article("128", "art. 128")}, дайте organowi карту помилок: неправильна норма, неповний факт, хибна оцінка доказу, порушена процедура.`,
      pitfall:
        "Новий документ без пояснення, яку умову він доводить і чому має значення, може не виправити слабкий аргумент.",
    },
    advanced: {
      focus: kpaLaw.text`Орган другої інстанції може utrzymać, zmienić/uchylić і вирішити по суті, umorzyć або в умовах ${kpaLaw.article("138", "art. 138 § 2")} передати справу назад.`,
      law: kpaLaw.text`${kpaLaw.article("139", "Art. 139")} встановлює zakaz reformationis in peius із винятками для rażącego naruszenia prawa або rażącego naruszenia interesu społecznego.`,
      practice:
        "Формулюйте бажаний тип rozstrzygnięcia і, якщо матеріал достатній, пояснюйте, чому справа не потребує повернення на першу інстанцію.",
      pitfall:
        "Zażalenie не є універсальним засобом на кожне postanowienie; те, що не оскаржується окремо, іноді можна атакувати лише в odwołaniu від decyzji.",
    },
  },
  method: [
    "Класифікуйте акт",
    "Порахуйте строк",
    "Сформулюйте zarzuty за категоріями",
    "Додайте чіткі wnioski і докази",
  ],
  checklist: [
    "Правильний засіб",
    "Правильний маршрут",
    "Кожен zarzut показує вплив",
  ],
  questions: [
    {
      prompt: "Чи на кожне postanowienie можна подати zażalenie?",
      answer: kpaLaw.text`Ні. За ${kpaLaw.article("141", "art. 141")} — лише коли кодекс або інший закон прямо це передбачає; інакше можливість заперечення може виникнути разом з odwołaniem від decyzji.`,
    },
  ],
  lesson: {
    paragraphs: [
      "Odwołanie запускає повторний інстанційний контроль decyzji, а не лише перевірку оформлення. Спочатку захистіть допустимість: встановіть тип акта, дату doręczenia, правильний строк і маршрут через organ першої інстанції. Потім визначте zakres zaskarżenia і бажаний результат.",
      "Аргументи групуйте за помилками: неправильне право, неповні факти, хибна оцінка доказів, порушення процедури. Для кожної помилки покажіть вплив і сформулюйте wniosek. Zażalenie має іншу логіку: воно доступне на postanowienie лише за прямим дозволом закону, а решту процесуальних заперечень інколи треба підняти в odwołaniu від decyzji.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 127–130",
          parts: [
            {
              text: "art. 127",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-127",
              },
            },
            {
              text: "–",
            },
            {
              text: "130",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-130",
              },
            },
          ],
        },
        role: "Визначають право, мінімальний зміст, маршрут, строк та вплив odwołania на виконання decyzji.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 132–140",
          parts: [
            {
              text: "art. 132",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-132",
              },
            },
            {
              text: "–",
            },
            {
              text: "140",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-140",
              },
            },
          ],
        },
        role: "Описують реакцію першої інстанції, передачу справи, дослідження доказів та можливі рішення другої інстанції.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 141–144",
          parts: [
            {
              text: "art. 141",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-141",
              },
            },
            {
              text: "–",
            },
            {
              text: "144",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-144",
              },
            },
          ],
        },
        role: "Регулюють допустимість, строк і наслідки zażalenia та відповідне застосування правил odwołania.",
      },
    ],
    terms: [
      {
        term: "zarzut",
        meaning:
          "Конкретно названа помилка рішення або процедури з поясненням її змісту.",
      },
      {
        term: "wniosek odwoławczy",
        meaning:
          "Чітке прохання про спосіб зміни, uchylenia або іншого вирішення акта.",
      },
      {
        term: "decyzja kasacyjna",
        meaning: {
          kind: "authored-legal-text",
          plainText:
            "Рішення другої інстанції, яке в умовах art. 138 § 2 скасовує акт і повертає справу на повторний розгляд.",
          parts: [
            {
              text: "Рішення другої інстанції, яке в умовах ",
            },
            {
              text: "art. 138 § 2",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-138",
              },
            },
            {
              text: " скасовує акт і повертає справу на повторний розгляд.",
            },
          ],
        },
      },
    ],
    caseExample: {
      title: "Odwołanie в останній день",
      facts:
        "Негативну decyzję вручено pełnomocnikowi, а заявник планує надіслати odwołanie прямо до organu другої інстанції.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Рахуємо 14 днів від правильного doręczenia за art. 57 і перевіряємо art. 129: адресуємо organowi odwoławczemu, але вносимо через organ, який видав decyzję.",
        parts: [
          {
            text: "Рахуємо 14 днів від правильного doręczenia за ",
          },
          {
            text: "art. 57",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-57",
            },
          },
          {
            text: " і перевіряємо ",
          },
          {
            text: "art. 129",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-129",
            },
          },
          {
            text: ": адресуємо organowi odwoławczemu, але вносимо через organ, який видав decyzję.",
          },
        ],
      },
      lesson: "Зміст не допоможе, якщо не захищені строк і маршрут подання.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Мінімум odwołania в art. 128",
        parts: [
          {
            text: "Мінімум odwołania в ",
          },
          {
            text: "art. 128",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-128",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Маршрут і строк art. 129",
        parts: [
          {
            text: "Маршрут і строк ",
          },
          {
            text: "art. 129",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-129",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Каталог rozstrzygnięć art. 138",
        parts: [
          {
            text: "Каталог rozstrzygnięć ",
          },
          {
            text: "art. 138",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-138",
            },
          },
        ],
      },
    ],
  },
}

export const kpaAppealLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:appeal",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "appeal",
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

export default kpaAppealLearningModuleTopic
