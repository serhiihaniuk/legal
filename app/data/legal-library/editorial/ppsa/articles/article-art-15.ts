import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-15",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 15 § 1 pkt 1 передбачає, що Naczelny Sąd Administracyjny «rozpoznaje środki odwoławcze od orzeczeń wojewódzkich sądów administracyjnych, stosownie do przepisów ustawy».",
          sourceLocator: "Art. 15 § 1 pkt 1",
        },
      ],
      summary:
        "Art. 15 окреслює основні завдання NSA: розгляд засобів оскарження рішень WSA, ухвалення uchwał для пояснення правових положень або серйозних правових питань, а також вирішення визначених спорів і інших справ.",
      rules: [
        {
          locator: "Art. 15 § 1 pkt 1",
          explanation:
            "NSA розглядає środki odwoławcze від orzeczeń WSA у спосіб, передбачений законом.",
        },
        {
          locator: "Art. 15 § 1 pkt 2–5",
          explanation:
            "NSA також ухвалює uchwały у названих законом ситуаціях та розглядає spory і інші справи, віднесені до його właściwości окремими законами.",
        },
        {
          locator: "Art. 15 § 2",
          explanation:
            "Для спорів за Art. 4 та інших справ, віднесених до NSA окремими законами, відповідно застосовуються правила провадження перед WSA. Spory NSA розглядає на wniosek postanowieniem із зазначенням właściwego organ; postanowienie видає склад із трьох суддів на posiedzeniu niejawnym.",
        },
      ],
      legalEffect:
        "Стаття визначає функціональну роль NSA, але сама не встановлює, який саме środek odwoławczy доступний у конкретній справі.",
      foreignersCase:
        "У справі про pobyt після рішення WSA спочатку назвіть тип отриманого orzeczenia і перевірте, чи закон передбачає для нього відповідний środek odwoławczy до NSA.",
    },
  ]),
})
