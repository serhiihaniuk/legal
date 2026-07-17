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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default kpaAppealLearningModuleTopic
