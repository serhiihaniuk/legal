import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-44",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("44", "Art. 44")} звільняє від zezwolenie na pracę три моделі delegowanie: тимчасове відрядження працівника, який законно проживає в іншій державі EOG, працює там за трудовим зв'язком і зазвичай там працює для послуг у Польщі; delegowanie до пов'язаного podmiot не більше 30 днів у календарному році; та інше delegowanie не більше 30 днів у 180 днів, якщо це не виконання послуги.`,
          sourceLocator: "Art. 44 pkt 1–3",
        },
      ],
      summary:
        "Це винятки від вимоги дозволу при короткому або транскордонному delegowanie. Кожен виняток має власну мету, зв'язок із роботодавцем і строковий ліміт.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Потрібні право pobytu в іншій державі EOG, zatrudnienie там, звичайна робота там і тимчасове направлення для świadczenie usług у Польщі.",
        },
        {
          locator: "pkt 2",
          explanation:
            "До oddział, zakład, przedstawicielstwo або пов'язаного podmiot можна бути delegowany не більше 30 днів у календарному році.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Для іншої мети, яка не є pkt 1–2 і не є виконанням послуги, ліміт становить 30 днів у 180 днів.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("44", "Art. 44")} скасовує лише вимогу zezwolenie na pracę за наявності всіх умов. Він не створює права в'їзду або legalnego pobytu в Польщі.`,
      foreignersCase:
        "Зафіксуйте державу EOG, трудовий зв'язок, мету delegowanie та всі дні перебування за відповідним лімітом. Окремо перевірте, на якій підставі cudzoziemiec перебуває в Польщі.",
    },
  ],
})
