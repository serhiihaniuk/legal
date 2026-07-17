import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-389",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До кордону іноземця доставляє komendant oddziału або placówki Straży Granicznej за місцем pobyt; від кордону до аеропорту чи морського порту państwo docelowe — Komendant Główny або відповідний komendant oddziału за місцем перетину кордону. Komendant Główny повідомляє państwo wydające про виїзд іноземця.",
          sourceLocator: "Art. 389 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Для перевірки компетенції треба розділити два відрізки маршруту: від місця pobyt до кордону та від кордону до порту держави призначення.",
          sourceLocator: "Art. 389 ust. 1",
        },
      ],
      summary:
        "Стаття розподіляє відповідальність Straż Graniczna за доставлення іноземця до кордону і далі до пункту в державі призначення та передбачає повідомлення про виїзд.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Перший етап виконує komendant oddziału або placówki, компетентний за місцем pobyt іноземця.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Другий етап виконує Komendant Główny або komendant oddziału, визначений місцем перетину кордону.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Komendant Główny інформує орган państwo wydające про opuszczenie території Польщі.",
        },
      ],
      legalEffect:
        "Норма встановлює внутрішній розподіл виконавчих дій і міжнародне повідомлення. Вона не змінює умов, за яких саме рішення є wykonalna.",
      foreignersCase:
        "Встановіть місце затримання або pobyt, пункт перетину кордону і компетентний підрозділ. Попросіть перевірити, чи зафіксовано повідомлення про виїзд до państwo wydające.",
    },
  ]),
})
