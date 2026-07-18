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
  title: "Касаційна скарга та контроль NSA",
  polish: "skarga kasacyjna; podstawy kasacyjne; Naczelny Sąd Administracyjny",
  provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("173", "177")}, ${ppsaLaw.articleRange("183", "185", { start: "183" })}, ${ppsaLaw.article("190", "190")}`,
  outcome:
    "Ви перетворюєте помилку WSA на належну касаційну підставу, дотримуєтеся професійної форми й строку та розумієте межі можливого рішення NSA.",
  caseQuestion:
    "Яку норму порушив WSA, як це вплинуло на результат і який процесуальний наслідок ви просите від NSA?",
  placeInWork:
    "Після отримання рішення WSA з обґрунтуванням і до спливу строку касаційної скарги.",
  sections: [
    {
      id: "grounds",
      title: "Касація перевіряє юридично сформульовану помилку",
      paragraphs: [
        "Касаційна скарга (skarga kasacyjna) не є повторним описом усієї справи. Її підстава має показати неправильне тлумачення або застосування матеріального права чи процесуальне порушення, яке могло істотно вплинути на результат.",
        "Документ повинен точно вказувати рішення й обсяг оскарження, кожну підставу з обґрунтуванням та вимогу про скасування або зміну. Як правило, його складає адвокат або юридичний радник (adwokat albo radca prawny); законні винятки залежать від особи й предмета, тому самостійний текст сторони не виконує професійної вимоги.",
      ],
      questions: [
        "Де саме в обґрунтуванні (uzasadnienie) або процесі WSA видно порушення названої норми та його вплив?",
      ],
      steps: [
        "Для кожного закиду запишіть норму, вид помилки, фрагмент рішення й причинний зв’язок із результатом.",
        "Передайте повний пакет професійному представникові разом із бажаним обсягом скасування.",
      ],
      evidence: [
        "рішення WSA (wyrok) з обґрунтуванням (uzasadnienie), ключові матеріали, протоколи та документ про повноваження представника",
      ],
      warning:
        "Несприятливий результат або інша оцінка доказів самі по собі не є касаційною підставою.",
    },
    {
      id: "filing-result",
      title: "Тридцять днів, подання через WSA та визначені наслідки",
      paragraphs: [
        "Касаційну скаргу подають до суду, який видав оскаржене рішення, протягом тридцяти днів від вручення стороні його копії з обґрунтуванням. У справах із представником, призначеним у межах права допомоги, початок строку може залежати від додаткових подій, тому всі повідомлення суду й професійної ради треба зберігати.",
        "NSA розглядає справу в межах касації, але з власної ініціативи перевіряє недійсність провадження. Він може відхилити касацію по суті, скасувати рішення й передати справу іншому складу WSA або, за умов закону, сам розглянути первісну скаргу. Після повернення тлумачення права NSA зв’язує WSA.",
      ],
      questions: [
        "Яка подія почала строк, до якого суду подається документ і який саме результат ви просите?",
      ],
      steps: [
        "Збережіть доказ вручення рішення з обґрунтуванням і окремо перевірте режим права допомоги (prawo pomocy).",
        "Подайте через WSA та підготуйте план для кожного можливого результату NSA.",
      ],
      evidence: [
        "підтвердження вручення, касаційна скарга (skarga kasacyjna), доказ подання, рішення про право допомоги (prawo pomocy) та повідомлення про представника",
      ],
      warning:
        "Касація не гарантує нового адміністративного рішення; навіть успіх часто веде до повторного судового розгляду.",
    },
  ],
  exercise:
    "Сформулюйте одну касаційну підставу в п’яти реченнях: норма, помилка, фрагмент рішення, вплив, вимога.",
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default cassationAndNsaLearningModuleTopic
