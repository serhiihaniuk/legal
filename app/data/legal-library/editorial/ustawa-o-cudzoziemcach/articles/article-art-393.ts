import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-393",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej є національним пунктом контакту Польщі як państwo członkowskie ЄС за decyzja Rady від 23 лютого 2004 року та, зокрема, узгоджує витрати, передає документи про подальшу wykonalność польського рішення і повідомляє, чи є підстави для cofnięcie польського дозволу pobyt.",
          sourceLocator: "Art. 393 ust. 1–2 pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: "Функція krajowy punkt kontaktowy пояснює, через який польський орган проходить міждержавна координація; вона не замінює рішення wojewoda або суду щодо особистого статусу.",
          sourceLocator: "Art. 393 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає Komendant Główny Straży Granicznej національним пунктом контакту для фінансової та документальної координації виконання рішень про повернення між державами-членами.",
      rules: [
        {
          locator: "ust. 2 pkt 1",
          explanation:
            "Komendant Główny узгоджує розмір витрат і спосіб їх повернення, коли польські органи виконують рішення.",
        },
        {
          locator: "ust. 2 pkt 2–3",
          explanation:
            "Він передає документи про wykonalność польського рішення та інформацію про можливі підстави cofnięcie zezwolenie на pobyt при виконанні іноземного рішення.",
        },
      ],
      legalEffect:
        "Норма концентрує функцію контактного органу в Komendant Główny для визначених міждержавних дій. Вона не надає цьому пункту повноваження самостійно скасувати дозвіл на pobyt.",
      foreignersCase:
        "Визначте, чи питання стосується витрат, підтвердження wykonalność польського рішення або інформації про дозвіл pobyt, і не адресуйте різні питання до неналежного органу.",
    },
  ]),
})
