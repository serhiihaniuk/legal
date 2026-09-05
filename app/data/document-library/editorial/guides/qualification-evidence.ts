import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "qualification-evidence",
  title: "Диплом, досвід і професійні кваліфікації",
  category: "education",
  kind: "evidence-set",
  aliases: [],
  description:
    "Кваліфікацію пов’язують із реальною роботою. Диплом показує освіту, документи про досвід описують виконувані обов’язки та період, а професійний допуск має окрему роль.",
  preparedBy:
    "Заклад освіти, попередні роботодавці або компетентний орган професійного допуску.",
  purpose: [
    "Допомагає встановити освіту, зміст досвіду або право виконувати регульовану професію.",
  ],
  doesNotProve: [
    "Переклад чи apostille не є автоматичним визнанням кваліфікації. Самої назви посади недостатньо для оцінки змісту досвіду.",
  ],
  keyChecks: [
    "Встановлено, що саме вимагає підстава та конкретна професія.",
    "Досвід описаний через обов’язки й періоди.",
    "Документи зіставлено з посадою в договорі; форму й визнання перевірено окремо.",
  ],
  relatedDocuments: [
    "employment-contract",
    "sworn-translation",
    "apostille-legalisation",
  ],
  sources: [
    {
      label: "Ustawa o cudzoziemcach",
      url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
      note: "Точну умову зіставляють із підставою дозволу та редакцією на дату справи.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "match-role",
      title: "Порівняти кваліфікацію з роботою",
      paragraphs: [
        "Для Blue Card перевіряють відповідний спосіб підтвердження високих кваліфікацій. Не кожен стаж автоматично замінює освіту. Окремо встановлюють, чи є професія регульованою і чи потрібен допуск.",
      ],
      example: {
        title: "Посада без опису обов’язків",
        facts: [
          "Умовний приклад. Попередній роботодавець підтвердив три роки роботи на посаді «спеціаліст», але не описав роботу.",
        ],
        reasoning: [
          "Із документа видно період зайнятості, проте неможливо порівняти досвід з новою посадою. Працівник запросив уточнення про обов’язки та перевірив застосовний спосіб підтвердження кваліфікацій.",
        ],
        conclusion:
          "Період роботи підтверджено; характер потрібного досвіду ще потребує доказів.",
      },
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("127")}: Визначає умови дозволу для праці, яка потребує високих кваліфікацій.`,
  ],
}

export const qualificationEvidenceDocumentTopic = defineDocumentTopic(guide)
export default qualificationEvidenceDocumentTopic
