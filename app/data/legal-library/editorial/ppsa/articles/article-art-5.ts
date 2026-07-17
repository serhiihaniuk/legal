import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-5",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 5 починається словами: «Sądy administracyjne nie są właściwe w sprawach».",
          sourceLocator: "Art. 5",
        },
      ],
      summary:
        "Стаття перелічує справи, у яких sądy administracyjne не мають właściwości, зокрема окремі внутрішньоорганізаційні та службові питання, а також визначені рішення щодо wiz і малого ruchu granicznego.",
      rules: [
        {
          locator: "Art. 5 pkt 1–3",
          explanation:
            "Виключено спори з nadrzędności або podległości органів, службової підлеглості, а також відмову в mianowanie чи powołanie, якщо обов’язок не випливає з права.",
        },
        {
          locator: "Art. 5 pkt 4",
          explanation:
            "Рішення про wizy, видані міністром закордонних справ або konsulem, загалом перебувають поза właściwością, але текст містить названі винятки.",
        },
        {
          locator: "Art. 5 pkt 4 lit. a–b, pkt 5",
          explanation:
            "Винятки стосуються визначених видів wiz, зокрема за kodeks wizowy та для членів сім’ї громадянина держави ЄС, а також окремо згаданих zezwoleń на малий прикордонний рух.",
        },
      ],
      legalEffect:
        "Стаття може виключити судову właściwość для конкретного предмета, але висновок залежить від органу, виду документа та точної категорії, зазначеної в тексті.",
      foreignersCase:
        "У справі іноземця про wiza або перетин кордону встановіть орган-видавець і вид документа, після чого перевірте винятки Art. 5; не робіть висновок лише з назви wizy.",
    },
  ]),
})
