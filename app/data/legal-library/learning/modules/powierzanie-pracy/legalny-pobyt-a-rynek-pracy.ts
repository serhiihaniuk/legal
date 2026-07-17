import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "legalny-pobyt-a-rynek-pracy",
  order: 1,
  title: "Legalny pobyt не дорівнює доступу до rynku pracy",
  polish: "legalny pobyt; dostęp do rynku pracy; uprawnienie do pracy",
  provisionScope: workLaw.text`${workLaw.articleRange("1", "5")}`,
  outcome:
    "Розрізняє право перебувати, право працювати та відповідність умовам конкретної роботи.",
  caseQuestion:
    "Особа має чинний документ pobyt: що ще потрібно перевірити перед початком саме цієї роботи?",
  placeInWork:
    "Початок аналізу: окремо встановити pobyt, підставу доступу до роботи та фактичні умови роботи.",
  sections: [
    {
      id: "separate-legal-questions",
      title: "Два різні правові питання",
      paragraphs: [
        "Ustawa регулює доступ cudzoziemców до rynku pracy, а правила wjazd і pobyt у зв'язку з роботою визначаються також окремими актами. Тому чинна visa або karta pobytu відповідає лише на питання про pobyt.",
        "Для роботи потрібна окрема підстава: swobodny dostęp, дозвіл, oświadczenie або передбачене законом звільнення.",
      ],
      questions: [
        "Який саме документ або припис дає право перебувати?",
        "Яка окрема підстава дає право виконувати цю роботу?",
      ],
      steps: [
        "Зафіксувати громадянство, документ і строк legalnego pobytu.",
        "Визначити підставу uprawnienia do pracy.",
        "Порівняти її з реальною роботою та umowa.",
      ],
      evidence: [
        "Документ pobyt",
        "Підстава доступу до роботи",
        "Umowa та опис фактичної роботи",
      ],
      warning:
        "Жоден окремий документ, включно з umowa або zezwolenie, не гарантує повної законності без перевірки всіх ланок.",
    },
    {
      id: "legality-chain",
      title: "Ланцюг законності",
      paragraphs: [
        workLaw.text`${workLaw.article("2")} пов'язує nielegalne powierzenie з незаконним pobyt, підставою pobytu без права працювати, відсутністю потрібного zezwolenie або oświadczenie, відхиленням від його умов чи відсутністю письмової umowa у визначених випадках.`,
        "Отже, перевірка не закінчується на назві документа: потрібно зіставити особу, pobyt, роботу, роботодавця, умови та форму договору.",
      ],
      questions: [
        "Чи дозволяє підстава pobytu виконувати роботу?",
        "Чи збігаються stanowisko, час, оплата і місце з підставою роботи?",
      ],
      steps: [
        "Перевірити pobyt і його зв'язок із роботою.",
        "Перевірити документ роботи або виняток.",
        "Перевірити фактичне виконання та письмову umowa.",
      ],
      evidence: [
        "Хронологія pobyt",
        "Документ роботи",
        "Графіки, umowa та фактичні обов'язки",
      ],
      warning:
        "Legalny pobyt не усуває можливого браку uprawnienia do pracy або невідповідності його умовам.",
    },
  ],
  exercise:
    "Склади для анонімного випадку три окремі висновки: про legalny pobyt, про доступ до роботи та про відповідність фактичної роботи документам.",
}

export const legalStayWorkModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:legalny-pobyt-a-rynek-pracy",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "legalny-pobyt-a-rynek-pracy",
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
              sourceId: "eli-powierzanie-pracy",
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

export default legalStayWorkModuleTopic
