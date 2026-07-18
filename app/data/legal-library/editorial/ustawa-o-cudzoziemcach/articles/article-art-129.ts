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
      provisionId: "ustawa-o-cudzoziemcach-art-129",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("129", "Art. 129")} визначає три випадки, коли вимогу ${foreignersLaw.article("127", "art. 127")} pkt 2 щодо професії не застосовують: попередня робота у того самого podmiotu на тій самій посаді, дворічне законне працевлаштування за ${foreignersLaw.article("127", "art. 127")} або звільнення від zezwolenia na pracę.`,
          sourceLocator: "Art. 129 pkt 1–3",
        },
      ],
      summary: foreignersLaw.text`Стаття містить винятки із застосування ${foreignersLaw.article("127", "art. 127")} pkt 2, кожен із власною фактичною передумовою.`,
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Виняток можливий, якщо безпосередньо перед поданням wniosku cudzoziemiec мав у того самого podmiotu на тому самому stanowisko zezwolenie na pracę, zezwolenie na pobyt czasowy i pracę або zezwolenie за ${foreignersLaw.article("127", "art. 127")}.`,
        },
        {
          locator: "pkt 2–3",
          explanation: foreignersLaw.text`Також названо законну роботу в Польщі 2 роки на підставі ${foreignersLaw.article("127", "art. 127")} або виконання умов звільнення від обов’язку мати zezwolenie na pracę.`,
        },
      ],
      legalEffect: foreignersLaw.text`Ці винятки стосуються лише вимоги, названої в ${foreignersLaw.article("127", "art. 127")} pkt 2, і не скасовують інші умови ${foreignersLaw.article("127", "art. 127")}.`,
      foreignersCase:
        "Підтвердьте саме тотожність podmiotu та stanowisko, тривалість законної роботи або конкретну підставу звільнення; не узагальнюйте виняток на всю заяву.",
    },
  ],
})
