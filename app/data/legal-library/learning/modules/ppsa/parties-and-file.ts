import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "parties-and-file",
  order: 3,
  title: "Сторони та akta sprawy",
  polish: "skarżący; organ; uczestnik postępowania; akta sprawy",
  provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("32", "37")}, ${ppsaLaw.article("54", "54")}, ${ppsaLaw.article("133", "133")}`,
  outcome:
    "Ви визначаєте skarżący, organ і можливого uczestnik, перевіряєте представництво та працюєте з повним адміністративним матеріалом.",
  caseQuestion:
    "Хто має право діяти в суді, чий interes prawny може бути зачеплений і як довести, що суд бачить повну справу?",
  placeInWork:
    "Підготовка процесуальної позиції після admissibility: правильні учасники та повний файл визначають, що суд реально зможе перевірити.",
  sections: [
    {
      id: "roles",
      title: "Факт → процесуальна роль",
      paragraphs: [
        ppsaLaw.text`${ppsaLaw.article("32")} називає сторонами skarżący та organ, дія, бездіяльність або przewlekłość якого є предметом skargi. За ${ppsaLaw.article("33")} особа, на чий interes prawny впливає результат, може бути учасником на правах сторони за умовами норми.`,
        "Не плутайте фактичний інтерес із interes prawny. Спочатку покажіть, який правовий наслідок для особи випливає з предмета спору, а потім визначайте її процесуальну роль.",
      ],
      questions: [
        "Хто видав оскаржений akt і хто має бути organ у справі?",
        "Чий interes prawny прямо може змінитися результатом?",
      ],
      steps: [
        "Випишіть усі особи з рішення та akt адміністративної справи.",
        ppsaLaw.text`Кожній особі поставте роль за ${ppsaLaw.articleRange("32", "33")} і зафіксуйте підставу.`,
      ],
      evidence: [
        "оскаржений akt, akta адміністративної справи, документи про правовий інтерес",
      ],
      warning:
        "Сімейний, трудовий або економічний зв’язок сам по собі не доводить участі на правах сторони.",
    },
    {
      id: "representation-file",
      title: "Представництво → akta → дія",
      paragraphs: [
        ppsaLaw.text`${ppsaLaw.articleRange("34", "37")} регулюють особисту дію та pełnomocnik і момент долучення повноваження до akt. Перевірте вид і обсяг pełnomocnictwo, підпис та повноваження особи, яка підписує першу процесуальну дію.`,
        ppsaLaw.text`${ppsaLaw.article("54")} пов’язує подання skargi з передачею суду akt, а ${ppsaLaw.article("133")} вимагає читати матеріал справи як основу судового розгляду. Ваша позиція має показати: факт, норму, конкретний документ у akt і висновок.`,
      ],
      questions: [
        "Якого документа бракує в akt, щоб підтвердити кожну умову вашої тези?",
      ],
      steps: [
        "Перевірте pełnomocnictwo й його долучення до akt.",
        "Звірте опис доказів із фактичним вмістом переданих akt.",
        "Попросіть процесуальну реакцію, якщо істотний матеріал відсутній або помилково прочитаний.",
      ],
      evidence: [
        "pełnomocnictwo, підтвердження його подання, повний spis akt і ключові сторінки",
      ],
      warning:
        "Суд не перетворює skarga на необмежене збирання нової справи; спершу працюйте з актами та належно поданими твердженнями.",
    },
  ],
  exercise:
    "На анонімізованій справі складіть карту: skarżący, organ, можливий uczestnik, pełnomocnik, документ-доказ і дія для виправлення прогалини в akt.",
}

export const partiesAndFileLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:parties-and-file",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "parties-and-file",
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

export default partiesAndFileLearningModuleTopic
