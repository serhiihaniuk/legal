import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-143",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Uzasadnienie wyroku підписують судді, які брали участь у його винесенні; якщо суддя не може підписати, зазначається причина. Uzasadnienie може бути зафіксоване в системі суду з kwalifikowany podpis elektroniczny.",
          sourceLocator: "Art. 143 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює авторство і спосіб підписання uzasadnienie, включно з електронною формою.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте підписи суддів і зазначення причини, якщо одного підпису немає.",
        },
        {
          locator: "§ 2",
          explanation:
            "Електронне utrwalenie допускається разом із kwalifikowany podpis elektroniczny.",
        },
      ],
      legalEffect:
        "Правило стосується оформлення uzasadnienie і не змінює змісту rozstrzygnięcie.",
      foreignersCase:
        "У матеріалах справи про pobyt звірте отриманий текст uzasadnienie з даними суду; електронний формат сам по собі не означає іншого результату.",
    },
  ],
})
