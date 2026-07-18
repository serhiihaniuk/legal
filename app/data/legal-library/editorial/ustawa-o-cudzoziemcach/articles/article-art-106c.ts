import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-106c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106c", "Art. 106c")} вимагає подавати wniosek o zezwolenie na pobyt czasowy та передбачені ${foreignersLaw.article("106", "Art. 106")} załączniki електронно через MOS. Заяву, подану іншим способом, залишають без розгляду, крім випадків з ${foreignersLaw.article("106k", "Art. 106k")} і ${foreignersLaw.article("106l", "Art. 106l")}.`,
          sourceLocator: "Art. 106c ust. 1–5",
        },
      ],
      summary:
        "Це правило визначає обов’язковий канал подання. Заповнений файл або паперовий комплект сам по собі не запускає звичайного провадження, якщо закон вимагає подання через MOS.",
      rules: [
        {
          locator: "Art. 106c ust. 1–3",
          explanation:
            "Заявник заповнює wniosek у MOS. Для załączników, які має заповнити роботодавець, організатор стажування, волонтерська організація або заклад освіти, система надсилає посилання на вказану електронну адресу відповідного суб’єкта.",
        },
        {
          locator: "Art. 106c ust. 4–5",
          explanation: foreignersLaw.text`До цього способу подання не застосовують загальні перші два речення ${kpa.article("63", "art. 63 § 1 KPA")}. Паперові винятки існують лише для прямо названих заяв за ${foreignersLaw.article("106k", "Art. 106k")} і ${foreignersLaw.article("106l", "Art. 106l")}.`,
        },
      ],
      legalEffect:
        "Подання поза MOS, коли не діє спеціальний виняток, закінчується pozostawieniem wniosku bez rozpoznania — орган не переходить до оцінки матеріальних умов дозволу.",
      foreignersCase:
        "Спочатку визначте тип дозволу й особу, яка за законом подає заяву. Потім перевірте, чи збережені підтвердження подання в MOS і чи всі запрошені суб’єкти заповнили свої załączniki.",
    },
  ],
})
