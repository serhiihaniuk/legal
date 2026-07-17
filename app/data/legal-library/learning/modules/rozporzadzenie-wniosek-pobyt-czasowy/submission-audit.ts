import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const regulationLaw = createLegalLearningTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const moduleContent: LegalLearningModule = {
  id: "submission-audit",
  order: 5,
  title: "Фінальний аудит перед поданням",
  polish: "kontrola kompletności, podpisów i spójności",
  provisionScope: "увесь właściwy wzór, załączniki та комплект доказів",
  outcome:
    "Ви завершуєте перевірку комплекту без обіцянки, що формальна повнота гарантує позитивне рішення.",
  caseQuestion:
    "Чи комплект придатний до подання і які матеріальні ризики залишаються відкритими?",
  placeInWork:
    "Останній контроль перед поданням або відповіддю на wezwanie; після нього зберігається копія і доказ подання.",
  sections: [
    {
      id: "final-checklist",
      title: "Перевірка в чотири проходи",
      paragraphs: [
        "Перевіряйте окремо форму, узгодженість фактів, докази матеріальних умов і процесуальні дії. Один загальний перегляд часто пропускає різні типи помилок.",
      ],
      steps: [
        "Форма: właściwy wzór, усі потрібні поля, підписи та частини.",
        "Факти: однакові дані, дати, podmiot і заявлена мета.",
        "Докази: окремий актуальний dowód для кожної умови.",
        "Процедура: адресат, спосіб подання, копії та підтвердження вручення.",
      ],
    },
    {
      id: "risk-note",
      title: "Записати те, чого комплект не вирішує",
      paragraphs: [
        "Після перевірки складіть коротку нотатку про невідомі факти, залежність від дати, можливі зміни та питання, які потребують індивідуальної правової оцінки.",
      ],
      evidence: [
        "фінальна копія wniosku і załączników",
        "перелік доданих доказів",
        "підтвердження подання або відправлення",
        "нотатка про відкриті ризики",
      ],
      warning:
        "Комплектність formularza не гарантує spełnienie warunków ani udzielenie zezwolenia.",
    },
  ],
  exercise:
    "Проведіть чотири проходи по навчальному комплекту і сформулюйте окремо: formalny brak, доказову прогалину та матеріальний ризик.",
}

export const submissionAuditLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:rozporzadzenie-wniosek-pobyt-czasowy:submission-audit",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
        moduleId: "submission-audit",
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
              sourceId: "eli-rozporzadzenie-wniosek-pobyt-czasowy",
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

export default submissionAuditLearningModuleTopic
