import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-329a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 329a дозволяє ministrowi właściwemu do spraw wewnętrznych на wniosek Komendanta Głównego Policji, Szefa ABW або Szefa SKW видати decyzja o zobowiązaniu cudzoziemca do powrotu, якщо існує побоювання терористичної або шпигунської діяльності чи підозра у вчиненні одного з таких злочинів; рішення підлягає негайному przymusowemu wykonaniu.",
          sourceLocator: "Art. 329a ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальну підставу рішення про повернення у зв’язку з побоюванням терористичної або шпигунської діяльності та його негайне виконання.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Рішення видає міністр лише на wniosek одного з трьох названих керівників служб і за описаних у статті обставин.",
        },
        {
          locator: "ust. 2",
          explanation: "Таке рішення підлягає негайному примусовому виконанню.",
        },
      ],
      legalEffect:
        "Це спеціальна компетенція і спеціальний наслідок виконання; для оцінки справи потрібно прочитати фактичне обґрунтування і pouczenie рішення.",
      foreignersCase:
        "Негайно зверніть увагу на дату вручення, орган-заявник, правову підставу й фактичне мотивування; не робіть висновків лише з назви рішення.",
    },
  ]),
})
