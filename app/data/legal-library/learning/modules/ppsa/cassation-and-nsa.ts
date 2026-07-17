import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "cassation-and-nsa",
  order: 6,
  title: "Skarga kasacyjna та NSA",
  polish: "skarga kasacyjna; Naczelny Sąd Administracyjny",
  provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("173", "177")}, ${ppsaLaw.articleRange("183", "185", { start: "183" })}, ${ppsaLaw.article("190", "190")}`,
  outcome:
    "Ви відрізняєте касаційний контроль від третьої інстанції по фактах, формулюєте підставу, перевіряєте представництво й маршрут до NSA.",
  caseQuestion:
    "Яку помилку WSA можна поставити в основу skarga kasacyjna і чи виконані вимоги до її підписання, змісту та строку?",
  placeInWork:
    "Наступний крок після wyrok WSA, коли треба оскаржити правову або процесуальну помилку, а не просто повторити незгоду з результатом.",
  sections: [
    {
      id: "cassation-grounds",
      title: "Помилка → касаційна підстава → доказ",
      paragraphs: [
        ppsaLaw.text`${ppsaLaw.articleRange("173", "176")} встановлюють skarga kasacyjna від wyrok WSA, її підстави, вимоги та правила представництва. Побудуйте аргумент так: факт із akt → правове поняття → порушена норма → конкретний фрагмент wyrok або procedura → вплив на результат.`,
        "Касація не є автоматичним повторенням оцінки всіх фактів. Перевірте, чи помилка належить до передбаченої законом підстави та чи може бути перевірена NSA.",
      ],
      questions: [
        "Яка конкретна норма порушена WSA і де в wyrok видно це порушення?",
      ],
      steps: [
        "Зіставте sentencja й uzasadnienie з матеріалами akt.",
        "Сформулюйте окремо кожну касаційну підставу і żądanie.",
        ppsaLaw.text`Перевірте допустимого pełnomocnik та всі формальні елементи ${ppsaLaw.article("176")}.`,
      ],
      evidence: [
        "wyrok WSA з uzasadnienie, akta, протокол або ключові документи і повноваження pełnomocnik",
      ],
      warning: "Сам факт несприятливого wyrok не є касаційною підставою.",
    },
    {
      id: "nsa-route",
      title: "Doręczenie → маршрут → ефект NSA",
      paragraphs: [
        ppsaLaw.text`За ${ppsaLaw.article("177")} skarga kasacyjna подається до NSA за pośrednictwem WSA; строк і його початок перевіряйте за чинною нормою та фактом doręczenie. Не замінюйте цей розрахунок пам’ятним «стандартним» числом.`,
        ppsaLaw.text`${ppsaLaw.articleRange("183", "185")} описують межі розгляду NSA та можливі результати, а ${ppsaLaw.article("190")} — обов’язковість правової оцінки NSA у подальшій справі в умовах норми. Висновок має охоплювати і remedy, і його очікуваний процесуальний ефект.`,
      ],
      questions: [
        "Коли і ким отримано wyrok з uzasadnienie, через який суд подається касація і чого саме ви просите від NSA?",
      ],
      steps: [
        ppsaLaw.text`Зафіксуйте doręczenie та перевірте строк за ${ppsaLaw.article("177")}.`,
        "Подайте skarga kasacyjna належним маршрутом із доказом подання.",
        "Підготуйтеся до результату NSA: oddalenie або скасування з наслідком, визначеним wyrok.",
      ],
      evidence: [
        "підтвердження doręczenie, skarga kasacyjna, dowód wniesienia, wyrok WSA і повноваження",
      ],
      warning: ppsaLaw.text`Skarga kasacyjna не гарантує скасування wyrok; перевірте кожну вимогу ${ppsaLaw.articleRange("173", "177")} до подання.`,
    },
  ],
  exercise:
    "Напишіть чернетку одного касаційного абзацу: факт із akt, порушена норма, місце помилки у wyrok, доказ, żądanie NSA та перевірений строк.",
}

export const cassationAndNsaLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:cassation-and-nsa",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "cassation-and-nsa",
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

export default cassationAndNsaLearningModuleTopic
