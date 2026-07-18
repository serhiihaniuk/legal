import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-139l",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139l", "Art. 139l")} вимагає, щоб jednostka przyjmująca подала wniosek про наступне zezwolenie з ${foreignersLaw.article("139a", "Art. 139a")} ust. 1 не пізніше останнього дня legalnego pobytu іноземця. Відповідно застосовуються лише ${foreignersLaw.article("108", "Art. 108")} ust. 1 pkt 2 і ust. 2.`,
          sourceLocator: "Art. 139l ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Для наступного ICT-дозволу строк контролює приймаюча одиниця. Відсилання дає ефект для legalności pobytu, але не охоплює zaświadczenia з ${foreignersLaw.article("108", "Art. 108")} ust. 1 pkt 1.`,
      rules: [
        {
          locator: "Art. 139l ust. 1",
          explanation:
            "Останній день встановлюють за реальною підставою legalnego pobytu іноземця; саме до цієї дати jednostka przyjmująca має належно подати wniosek.",
        },
        {
          locator: "Art. 139l ust. 2",
          explanation:
            "Відповідне застосування обмежене правилом про legalność pobytu до ostatecznej decyzji та винятком під час zawieszenia на заяву сторони. Норма не відсилає до видачі zaświadczenia.",
        },
      ],
      legalEffect:
        "Своєчасна й належна справа може підтримувати legalność pobytu в межах відсилання, але не доводить умов наступного ICT-дозволу й не створює окремого документа для подорожі.",
      foreignersCase:
        "Збережіть доказ legalnego pobytu на день подання та підтвердження, що wniosek подала jednostka przyjmująca. Не очікуйте zaświadczenia лише на підставі цього відсилання.",
    },
  ],
})
