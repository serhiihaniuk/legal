import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-393c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо при виїзді через зовнішній кордон Schengen komendant placówki Straży Granicznej встановлює, що інша держава Schengen внесла дані іноземця до SIS для цілей art. 3 ust. 1 rozporządzenie 2018/1860, він через Komendant Główny Policji передає цій державі інформацію з art. 6 ust. 1 та контактує для визначення заходів щодо іноземця.",
          sourceLocator: "Art. 393c pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: "Стаття встановлює перевірку та координацію з державою, яка внесла alert, але сама не наказує конкретний захід щодо іноземця.",
          sourceLocator: "Art. 393c",
        },
      ],
      summary:
        "Стаття регулює дії Straż Graniczna на зовнішньому кордоні, коли в SIS є запис іншої держави Schengen щодо іноземця.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Інформація з art. 6 ust. 1 rozporządzenie 2018/1860 передається через Komendant Główny Policji органу держави, що внесла дані.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Польський орган контактує з цією державою, щоб визначити подальші заходи.",
        },
      ],
      legalEffect:
        "Норма створює канал обміну інформацією при виїзді через зовнішній кордон. Наслідок для конкретної особи залежить від змісту alert і відповіді компетентної держави.",
      foreignersCase:
        "З’ясуйте, чи був кордон зовнішнім кордоном Schengen, яка держава внесла дані та що саме було передано через Policja. Не робіть висновок про автоматичне zatrzymanie лише з наявності запису.",
    },
  ]),
})
