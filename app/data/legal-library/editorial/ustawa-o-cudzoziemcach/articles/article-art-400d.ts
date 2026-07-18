import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-400d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Decyzja про надання або позбавлення świadczenia видається з urzędu komendant oddziału або placówki Straż Graniczna за місцем pobyt іноземця і підлягає natychmiastowe wykonanie; органом вищого ступеня за KPA є Komendant Główny Straży Granicznej.",
          sourceLocator: "Art. 400d ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Для перевірки компетенції та подальшої комунікації ключові місце pobyt і підрозділ, який видав decyzja; негайне виконання не слід плутати з остаточністю в інших питаннях.",
          sourceLocator: "Art. 400d ust. 1",
        },
      ],
      summary:
        "Стаття визначає компетентний підрозділ Straż Graniczna, режим видання decyzja про świadczenia та орган вищого ступеня.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Komendant oddziału або placówki за місцем pobyt діє з urzędu і видає decyzja як про надання, так і про pozbawienie świadczenia; рішення виконується негайно.",
        },
        {
          locator: "ust. 2",
          explanation:
            "У розумінні KPA органом вищого ступеня щодо цього komendant є Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Норма розподіляє адміністративну компетенцію і робить decyzja негайно виконуваною. Вона не змінює умов права на świadczenia, визначених art. 400a–400c.",
      foreignersCase:
        "Перевірте місце pobyt, назву підрозділу та орган вищого ступеня в рішенні. Зберігайте дату doręczenie і фактичний момент початку або припинення świadczenia.",
    },
  ]),
})
