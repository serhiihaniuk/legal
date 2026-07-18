import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "judgments-and-effects",
  order: 5,
  title: "Як читати рішення WSA та його наслідки",
  polish: "wyrok; sentencja; uzasadnienie; uchylenie; oddalenie; ocena prawna",
  provisionScope: ppsaLaw.text`${ppsaLaw.article("141")}, ${ppsaLaw.articleRange("145", "153", { start: "145" })}, ${ppsaLaw.article("170", "170")}`,
  outcome:
    "Ви читаєте резолютивну й мотивувальну частини як одне ціле, розрізняєте вид судового результату та перетворюєте його на контроль наступних дій органу.",
  caseQuestion:
    "Що саме постановив суд, яку помилку він установив і який обов’язок або процесуальна можливість виникає далі?",
  placeInWork:
    "Після оголошення або вручення рішення WSA й перед новою дією органу чи касаційною оцінкою.",
  sections: [
    {
      id: "read",
      title: "Резолютивна частина дає результат, обґрунтування пояснює причину",
      paragraphs: [
        "Спочатку прочитайте резолютивну частину (sentencja): скаргу задоволено чи відхилено, який акт скасовано, визнано недійсним або незаконним, чи орган зобов’язано діяти. Потім у обґрунтуванні (uzasadnienie) знайдіть правову підставу, установлену помилку та вказівки для наступного провадження.",
        "Після задоволення скарги (skarga) можливий різний результат залежно від предмета: скасування рішення, визнання недійсності, встановлення неефективності дії або реакція на бездіяльність. Відхилення по суті (oddalenie) означає, що суд не задовольнив скаргу у відповідному обсязі. У такому разі обґрунтування зазвичай треба своєчасно запитати протягом семи днів за умов закону.",
      ],
      questions: [
        "Який точний дієслівний наслідок стоїть у резолютивній частині (sentencja) і до якого документа або бездіяльності він належить?",
      ],
      steps: [
        "Випишіть кожний пункт резолютивної частини (sentencja) окремо й позначте його адресата.",
        "Для кожного пункту знайдіть в обґрунтуванні (uzasadnienie) порушену норму, доказ і вказівку щодо подальшого провадження.",
      ],
      evidence: [
        "повне рішення (wyrok), обґрунтування (uzasadnienie), підтвердження вручення й оскаржений адміністративний акт",
      ],
      warning:
        "Скасування адміністративного рішення не означає автоматичного надання дозволу на перебування.",
    },
    {
      id: "effects",
      title: "Наслідок рішення потрібно простежити в наступній справі",
      paragraphs: [
        "Після сприятливого рішення перевірте тимчасовий ефект для оскарженого акта або дії та момент набрання законної сили. Правова оцінка (ocena prawna) і вказівки суду зв’язують орган та суд у тій самій справі, якщо право не змінилося.",
        "Остаточне рішення пов’язує визначених законом адресатів, але лише в межах того, що суд справді вирішив. Тому контроль виконання полягає не в загальній вимозі «видати дозвіл», а в порівнянні кожної вказівки з новою дією органу та її доказом.",
      ],
      questions: [
        "Яка конкретна правова оцінка зв’язує орган і яким документом видно її виконання або порушення?",
      ],
      steps: [
        "Побудуйте порівняння «вказівка суду — дія органу — доказ — невиконаний елемент».",
        "Окремо перевірте законну силу, доступний засіб оскарження й можливу зміну права.",
      ],
      evidence: [
        "остаточне рішення, новий акт органу, матеріали повторного провадження та підтвердження вручень",
      ],
      warning:
        "Не розширюйте обов’язковість рішення на вимоги, яких немає в резолютивній частині (sentencja) або правовій оцінці.",
    },
  ],
  exercise:
    "На одному рішенні складіть два абзаци: перший — процесуальний результат, другий — три конкретні дії, які треба перевірити в повторному провадженні.",
}

export const judgmentsAndEffectsLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:judgments-and-effects",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "judgments-and-effects",
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

export default judgmentsAndEffectsLearningModuleTopic
