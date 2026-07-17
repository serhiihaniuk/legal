import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "application-evidence-procedure",
  order: 4,
  title: "Заява, докази й процедура",
  polish: "wniosek, braki formalne, postępowanie, wezwanie",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("98", "109", { start: "art. 98" })} та ${foreignersLaw.articleRange("114", "189", { start: "art. 114" })}`,
  outcome:
    "Уміти перетворити умову zezwolenie на перевірюваний пакет фактів, доказів і процесуальних дій.",
  caseQuestion:
    "Яку умову треба довести, яким документом і що робити після wezwanie або зміни обставин?",
  placeInWork: "Підготовка справи та контроль листування з органом.",
  sections: [
    {
      id: "condition-evidence",
      title: "Одна умова — один доказ",
      paragraphs: [
        "Статутна рамка: рішення про zezwolenie спирається на умови конкретної категорії та матеріал справи.",
        "Практична перевірка: склади таблицю «умова — факт — доказ — прогалина». Перевіряй зміст документа, а не лише його назву.",
      ],
      questions: [
        "Яку саме умову підтверджує цей документ?",
        "Чи охоплює доказ потрібний період і особу?",
      ],
      steps: [
        "Виписати умови норми.",
        "Прив’язати доказ до кожної умови.",
        "Позначити прогалини та спосіб їх закриття.",
      ],
      evidence: [
        "Документи, прямо пов’язані з умовою.",
        "Пояснення суперечностей.",
        "Підтвердження актуальності документа.",
      ],
      warning:
        "Шаблонний пакет або один сильний документ не доводить усі умови автоматично.",
    },
    {
      id: "procedural-reaction",
      title: "Реагуй на wezwanie за змістом",
      paragraphs: [
        "Статутна рамка: wezwanie, braki formalne і докази мають різну процесуальну функцію; наслідок залежить від тексту wezwanie та норми.",
        "Практична перевірка: зафіксуй, хто звернувся, що саме треба зробити, до якого моменту та який наслідок зазначено в документі. Не виводь строк із пам’яті.",
      ],
      questions: [
        "Йдеться про brak formalny чи про доказ матеріальної умови?",
        "Який документ і спосіб подання вимагає орган?",
      ],
      steps: [
        "Прочитати wezwanie повністю.",
        "Виділити вимоги та наслідок.",
        "Подати відповідь із доказами та зберегти підтвердження.",
      ],
      evidence: [
        "Wezwanie і підтвердження вручення.",
        "Копія відповіді та додатків.",
        "Підтвердження подання.",
      ],
      warning:
        "Не називай строк або наслідок без перевірки конкретного wezwanie, закону та актуальної редакції.",
    },
  ],
  exercise:
    "Перетвори уявне wezwanie на чекліст: вимога, правова умова, доказ, дія, підтвердження подання та невідомий ризик.",
}

export const applicationEvidenceProcedureLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:application-evidence-procedure",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "application-evidence-procedure",
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
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
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

export default applicationEvidenceProcedureLearningModuleTopic
