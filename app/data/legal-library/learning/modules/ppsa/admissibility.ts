import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "admissibility",
  order: 3,
  title: "Коли й як скарга потрапляє до WSA",
  polish:
    "dopuszczalność skargi; wyczerpanie środków zaskarżenia; wniesienie skargi",
  provisionScope: ppsaLaw.text`${ppsaLaw.article("46")}, ${ppsaLaw.articleRange("52", "54", { start: "52" })}, ${ppsaLaw.articleRange("57", "58", { start: "57" })}`,
  outcome:
    "Ви перевіряєте допустимість як послідовність: доступний адміністративний засіб, початкова подія строку, належний маршрут, форма й наслідок недоліку.",
  caseQuestion:
    "Чи завершено необхідний адміністративний шлях, коли почався строк і через який орган треба подати повний документ?",
  placeInWork:
    "Після визначення предмета скарги й до фінального підписання та подання.",
  sections: [
    {
      id: "preconditions",
      title: "Спершу адміністративний шлях, потім судовий строк",
      paragraphs: [
        "За загальним правилом скаргу подають після вичерпання доступних засобів оскарження: апеляції (odwołanie), окремого оскарження ухвали (zażalenie) або нагадування про бездіяльність чи затягування (ponaglenie). Водночас закон передбачає винятки. Особливо важливо не переносити виняток щодо заяви про повторний розгляд (wniosek o ponowne rozpatrzenie) на рішення міністра закордонних справ або консула у справах іноземців, для яких p.p.s.a. зберігає спеціальне правило.",
        "Для типового рішення строк становить тридцять днів від вручення, але інші предмети мають інші початкові події або можуть подаватися в будь-який час після нагадування (ponaglenie). Тому дата в календарі з’являється лише після встановлення виду предмета й чинної норми.",
      ],
      questions: [
        "Який засіб був доступний перед судом і який документ доводить його вичерпання?",
      ],
      steps: [
        "Побудуйте хронологію рішень, оскаржень, нагадувань (ponaglenie) та вручень.",
        "Під кожною датою запишіть норму, яка робить її початком або завершенням строку.",
      ],
      evidence: [
        "рішення з роз’ясненням про оскарження (pouczenie), попередній засіб оскарження, підтвердження подання й вручення",
      ],
      warning:
        "Не застосовуйте «стандартні тридцять днів», доки не визначено предмет і початкову подію строку.",
    },
    {
      id: "filing",
      title: "Належний документ має пройти належним маршрутом",
      paragraphs: [
        "Скарга (skarga) повинна відповідати загальним вимогам процесуального письма й спеціальним вимогам до цього засобу: суд, сторони, вид документа, вимога, підпис, додатки, оскаржений акт і закиди. Подання відбувається через орган, чия діяльність оскаржується, хоча своєчасне пряме подання до адміністративного суду в ситуаціях, охоплених законом, також може зберегти строк і спричиняє пересилання органу.",
        "Недопустимість, пропуск строку або невиправлений формальний недолік можуть завершити справу без оцінки законності рішення. Тому виклик суду (wezwanie) треба читати буквально: що виправити, яким доказом і до якої дати.",
      ],
      questions: [
        "Чим ви доведете дату й канал подання саме цього примірника скарги?",
      ],
      steps: [
        "Перевірте документ за вимогами до процесуального письма (pismo) і скарги (skarga) та додайте повноваження, копії й оплату, якщо вона потрібна.",
        "Подайте належним каналом, збережіть підтвердження та негайно опрацюйте кожний виклик суду (wezwanie).",
      ],
      evidence: [
        "підписана скарга, перелік додатків, доказ подання, доказ оплати й довіреність",
      ],
      warning:
        "Подання скарги саме по собі не зупиняє виконання оскарженого акта.",
    },
  ],
  exercise:
    "На одній сторінці покажіть ланцюг: останній адміністративний засіб — вручення — початок строку — канал подання — доказ — можливий наслідок недоліку.",
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default admissibilityLearningModuleTopic
