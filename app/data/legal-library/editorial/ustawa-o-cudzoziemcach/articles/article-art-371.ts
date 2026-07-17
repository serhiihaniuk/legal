import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-371",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До повітряного tranzyt cudzoziemca через територію Польщі не застосовуються положення Kodeks postępowania administracyjnego та Prawo o postępowaniu przed sądami administracyjnymi.",
          sourceLocator: "Art. 371",
        },
        {
          kind: "practical-inference",
          text: "Звичайні правила KPA та p.p.s.a. не можна автоматично переносити на цю операцію; спочатку треба встановити спеціальний режим і компетенцію органу.",
          sourceLocator: "Art. 371",
        },
      ],
      summary:
        "Стаття прямо виключає KPA і p.p.s.a. для повітряного tranzyt cudzoziemca через польську територію.",
      rules: [
        {
          locator: "Art. 371",
          explanation:
            "Виключення стосується саме tranzyt drogą powietrzną через територію Польщі. Не слід розширювати його на всі інші справи іноземця.",
        },
      ],
      legalEffect:
        "Для цієї транзитної операції не діють загальні процесуальні режими KPA та p.p.s.a. за цією нормою. Стаття сама не описує повний набір можливих засобів захисту.",
      foreignersCase:
        "Якщо документ стосується лише дозволу на tranzyt, перевірте спеціальні положення ustawa та фактичну роль органу, замість того щоб одразу застосовувати звичайну схему odwołanie або skarga.",
    },
  ]),
})
