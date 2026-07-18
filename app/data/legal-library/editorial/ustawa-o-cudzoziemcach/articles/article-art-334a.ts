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
          explanation: foreignersLaw.text`Для doręczanie застосовується ${foreignersLaw.article("322", "Art. 322")}. Лист можна також надіслати на електронну адресу, вказану заявником; тоді датою doręczenia закон вважає день, коли орган відправив email. Szef Urzędu інформується не пізніше 48 годин про postanowienie або залишення wniosek без розгляду.`,
        },
      ],
      legalEffect:
        "Норма встановлює строк, спеціальне електронне doręczenie та відсутність zażalenie на це postanowienie. Для email юридичною датою є день відправлення органом, а не день відкриття повідомлення.",
      foreignersCase:
        "Відлічуйте 5 днів від подання wniosek. Якщо в заяві вказано email, щоденно контролюйте цю скриньку й дату відправлення органом; саме вона запускає подальші строки, пов’язані з doręczenie.",
    },
  ],
})
