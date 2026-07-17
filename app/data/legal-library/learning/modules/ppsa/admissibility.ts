import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "admissibility",
  order: 2,
  title: "Допустимість, exhaustion і маршрут skargi",
  polish: "wyczerpanie środków zaskarżenia; wniesienie skargi",
  provisionScope: ppsaLaw.text`${ppsaLaw.article("46")}, ${ppsaLaw.articleRange("52", "54", { start: "52" })}, ${ppsaLaw.articleRange("57", "58", { start: "57" })}`,
  outcome:
    "Ви будуєте перевірку admissibility: чи вичерпано засоби, які маршрут подання діє, які формальні дані й строк треба перевірити без вигадування універсального числа днів.",
  caseQuestion:
    "Чи можна вже подавати skarga до WSA, чи спершу потрібен інший środek zaskarżenia або усунення formalny brak?",
  placeInWork:
    "Процесуальний шлюз після визначення предмета skargi та до написання аргументації по суті.",
  sections: [
    {
      id: "preconditions",
      title: "Факт → умова допустимості",
      paragraphs: [
        ppsaLaw.text`Перевірте, який акт і який адміністративний шлях уже пройдено. Wyczerpanie środków zaskarżenia за ${ppsaLaw.article("52")} означає спершу використати доступний у справі засіб, якщо закон вимагає цього; винятки та спеціальні правила треба читати разом із конкретною процедурою.`,
        ppsaLaw.text`${ppsaLaw.article("53")} пов’язує wniesienie skargi зі строком, а ${ppsaLaw.article("58")} перелічує процесуальні підстави odrzucenie. Не підставляйте до кожної справи один «типовий» строк: встановіть норму, подію doręczenie і чинну редакцію.`,
      ],
      questions: [
        "Чи є рішенням остаточним результат адміністративного оскарження і чи існує доступний środek zaskarżenia?",
        "Яка подія запускає строк саме для цього виду skargi?",
      ],
      steps: [
        "Зберіть chronologia: подання, decyzja, odwołanie або zażalenie, doręczenie.",
        ppsaLaw.text`Зіставте її з ${ppsaLaw.articleRange("52", "53")} та перевірте особливе правило для предмета skargi.`,
        ppsaLaw.text`Окремо перевірте формальні вимоги ${ppsaLaw.article("46")} і ризики ${ppsaLaw.article("58")}.`,
      ],
      evidence: [
        "decyzja та роз’яснення про засіб оскарження",
        "підтвердження дат doręczenie і подання попереднього засобу",
      ],
      warning:
        "Не називайте строк без перевірки виду skargi, способу doręczenie та перехідних або спеціальних правил.",
    },
    {
      id: "filing-route",
      title: "Доказ → подання → наслідок",
      paragraphs: [
        ppsaLaw.text`Skarga має відповідати вимогам pisma та містити зрозуміле żądanie, фактичні й правові підстави та потрібні додатки. За ${ppsaLaw.article("54")} skarga подається за pośrednictwem organu, діяльність якого оскаржується, якщо спеціальне правило не встановлює інакше.`,
        "Орган передає skargę та akta до суду за процесуальним маршрутом. Неправильне подання, невиправлений brak formalny або пропуск строку можуть закрити доступ до оцінки суті.",
      ],
      questions: [
        "Куди фактично подається skarga і як ви доведете її своєчасність?",
      ],
      steps: [
        "Підготуйте skarga, dowód opłaty якщо він потрібен, і перелік додатків.",
        "Подайте її належним маршрутом та збережіть dowód wniesienia.",
        "На wezwanie реагуйте в указаний судом строк і перевірте наслідок його пропуску.",
      ],
      evidence: [
        "копія skargi, dowód wniesienia, dowód opłaty та підтвердження повноважень",
      ],
      warning:
        "Подання skargi не означає автоматичного зупинення виконання оскарженого акта.",
    },
  ],
  exercise: ppsaLaw.text`Зробіть таблицю з чотирма колонками: подія, ${ppsaLaw.articleRange("52", "53")}, доказ, наступна дія; не вписуйте строк, якого немає в перевіреному джерелі.`,
}

export const admissibilityLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:admissibility",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "admissibility",
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
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
            locator: "module provision scope",
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

export default admissibilityLearningModuleTopic
