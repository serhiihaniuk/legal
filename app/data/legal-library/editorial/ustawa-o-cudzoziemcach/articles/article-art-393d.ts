import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-393d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо під час pobyt у Польщі виявлено іноземця, дані якого інша держава Schengen внесла до SIS для цілей art. 3 ust. 1 rozporządzenie 2018/1860, komendant oddziału або placówki Straż Graniczna через Komendant Główny Policji контактує з органом цієї держави для визначення заходів.",
          sourceLocator: "Art. 393d",
        },
        {
          kind: "practical-inference",
          text: "Виявлення запису запускає міждержавний контакт, але стаття не визначає наперед, який саме захід буде обрано.",
          sourceLocator: "Art. 393d",
        },
      ],
      summary:
        "Стаття визначає координацію Straż Graniczna з іншою державою Schengen, коли іноземця із відповідним SIS-записом виявлено вже під час pobyt у Польщі.",
      rules: [
        {
          locator: "Art. 393d",
          explanation:
            "Контакт здійснює компетентний komendant oddziału або placówki через Komendant Główny Policji з органом держави, яка внесла дані.",
        },
      ],
      legalEffect:
        "Норма встановлює інформаційний етап перед визначенням подальших дій. Вона не є самостійною підставою для автоматичного припинення pobyt або виконання повернення.",
      foreignersCase:
        "Зафіксуйте місце виявлення, чинні документи, państwo alert і повідомлення між органами. Окремо перевірте правову підставу будь-якого подальшого zatrzymanie чи przekazanie.",
    },
  ]),
})
