import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-334a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("334a", "Art. 334a")} зобов’язує Komendant Główny Straży Granicznej niezwłocznie, але не пізніше 5 днів від подання wniosek, видати postanowienie про udzielenie pomoc w dobrowolnym powrocie; на нього zażalenie не належить, а про postanowienie або залишення wniosku без rozpoznania треба повідомити Szefa Urzędu.`,
          sourceLocator: "Art. 334a ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає короткий строк для рішення про допомогу у добровільному поверненні, відсутність zażalenie на це postanowienie та обов’язок повідомити Szef Urzędu.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Postanowienie видається niezwłocznie, але не пізніше 5 днів від подання wniosek; закон прямо виключає zażalenie.",
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Для doręczanie застосовується ${foreignersLaw.article("322", "Art. 322")}, а Szef Urzędu інформується не пізніше 48 годин про postanowienie або залишення wniosek без розгляду.`,
        },
      ],
      legalEffect:
        "Норма встановлює процесуальний строк і спосіб повідомлення; відсутність zażalenie за цією статтею не означає, що будь-яке інше рішення не має окремого засобу оскарження.",
      foreignersCase:
        "Відлічуйте 5 днів від подання wniosek і перевірте спосіб doręczenie; якщо заяву залишили без розгляду, з’ясуйте фактичну причину та окремий доступний правовий засіб.",
    },
  ],
})
