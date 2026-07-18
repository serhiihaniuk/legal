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
      provisionId: "ustawa-o-cudzoziemcach-art-415",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("415", "Art. 415")} ust. 1: «Cudzoziemiec umieszczony w strzeżonym ośrodku lub przebywający w areszcie dla cudzoziemców ma prawo do».`,
          sourceLocator: "Art. 415 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Перелік прав треба читати разом із прямо названими умовами, depozyt, правилами порядку та винятком для безпеки при widzenie.",
          sourceLocator: "Art. 415 ust. 1 pkt 1–19 i ust. 1a–2",
        },
      ],
      summary:
        "Стаття містить широкий перелік прав особи у strzeżony ośrodek або areszt: контакти з органами, адвокатом і організаціями, медичну допомогу, гігієну, релігійну практику, пресу, internet, кореспонденцію, скарги та widzenia.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3, 17–19",
          explanation:
            "Cudzoziemiec може контактувати з державними органами, представництвом, організаціями та pełnomocnik; має право на кореспонденцію, засоби зв’язку, skargi, wnioski і widzenia з близькими за згодою.",
        },
        {
          locator: "ust. 1 pkt 4–16",
          explanation:
            "Права на depozyt, опіку медичну, сон, гігієну, одяг, релігійні предмети, пресу, internet, бібліотеку, харчі та пакунки діють у межах умов, названих у відповідних пунктах.",
        },
        {
          locator: "ust. 1a–2",
          explanation:
            "У widzenie з близькими можуть відмовити через безпеку, порядок або regulamin; інші права можливі після zezwolenie відповідного органу Straży Granicznej.",
        },
      ],
      legalEffect:
        "Стаття є каталогом прав перебування, але не скасовує обмежень, прямо передбачених її пунктами, regulamin і вимогами безпеки.",
      foreignersCase:
        "Формулюйте конкретне звернення: назвіть право з відповідним pkt, додайте дату й обставини та збережіть відповідь органу або доказ її відсутності.",
    },
  ],
})
