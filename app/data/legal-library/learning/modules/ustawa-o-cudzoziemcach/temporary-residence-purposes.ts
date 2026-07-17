import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "temporary-residence-purposes",
  order: 2,
  title: "Визнач мету pobyt czasowy",
  polish: "zezwolenie na pobyt czasowy, cel pobytu",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("98", "113", { start: "art. 98" })} та ${foreignersLaw.articleRange("114", "189", { start: "art. 114" })}`,
  outcome:
    "Уміти обрати напрям аналізу за реальною метою pobytu, а не за назвою бланка чи порадою роботодавця.",
  caseQuestion:
    "Яка конкретна обставина робить pobyt czasowy потрібним і як вона буде доведена?",
  placeInWork:
    "Етап кваліфікації справи: від фактів до відповідного виду zezwolenie.",
  sections: [
    {
      id: "purpose-test",
      title: "Перевір cel pobytu",
      paragraphs: [
        "Статутна рамка: zezwolenie na pobyt czasowy пов’язане з визначеною обставиною pobytu та її умовами.",
        "Практична перевірка: сформулюй одну головну мету простим реченням, потім покажи, які факти й документи підтверджують її реальність.",
      ],
      questions: [
        "Що особа реально робить у Польщі?",
        "Чи є мета стабільною та підтвердженою на дату заяви?",
      ],
      steps: [
        "Назвати фактичну мету.",
        "Зіставити її з категорією закону.",
        "Перевірити всі умови саме цієї категорії.",
      ],
      evidence: [
        "Документи про роботу, навчання, сім’ю, дослідження або działalność.",
        "Документи про проживання та засоби utrzymanie, якщо вони належать до умов категорії.",
      ],
      warning:
        "Одна назва заяви або один документ не гарантує, що орган визнає заявлений cel pobytu.",
    },
    {
      id: "one-main-route",
      title: "Не змішуй підстави",
      paragraphs: [
        "Статутна рамка: різні види pobyt czasowy мають різні умови та наслідки; норми не можна механічно переносити з однієї категорії до іншої.",
        "Практична перевірка: обери основну ścieżka, а альтернативи запиши окремо з їхніми власними умовами й ризиками.",
      ],
      questions: [
        "Яка умова є визначальною для обраної ścieżka?",
        "Чи змінюється результат, якщо фактична мета інша?",
      ],
      steps: [
        "Виділити основну категорію.",
        "Відкинути несумісні припущення.",
        "Порівняти лише релевантні альтернативи.",
      ],
      evidence: [
        "Підтвердження головної обставини.",
        "Пояснення змін мети, якщо вони відбувалися.",
      ],
      warning:
        "Альтернативний варіант слід перевіряти окремо; його наявність не скасовує умов основного варіанту.",
    },
  ],
  exercise:
    "Візьми три набори фактів — робота, навчання, сім’я — і для кожного сформулюй cel pobytu, категорію та по два докази без прогнозу результату.",
}

export const temporaryResidencePurposesLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:temporary-residence-purposes",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "temporary-residence-purposes",
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

export default temporaryResidencePurposesLearningModuleTopic
