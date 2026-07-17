import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285a § 1 передбачає skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia WSA, якщо його видання спричинило стороні szkoda, а зміна чи скасування іншими доступними засобами не було і не є можливим; § 2 допускає її у виняткових випадках, коли strony не скористалися доступними засобами, порушено основні засади porządek prawny або конституційні свободи чи права, і зміна або скасування orzeczenia іншим засобом не є можливим; § 3 виключає orzeczenia NSA, крім rażące naruszenie норм prawa UE, а § 4 встановлює opłata stała.",
          sourceLocator: "Art. 285a § 1–4",
        },
      ],
      summary:
        "Стаття визначає винятковий засіб щодо prawomocne orzeczenie WSA, орієнтований на stwierdzenie niezgodności z prawem після настання szkoda й відсутності іншого шляху.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Потрібно окремо показати prawomocne orzeczenie WSA, szkoda та неможливість його зміни або скасування іншими доступними засобами; для § 2 — також що strony не скористалися доступними засобами, винятковий випадок і порушення названих основних правових або конституційних гарантій.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Від orzeczenia NSA skarga не допускається, крім випадку rażące naruszenie норм prawa UE; такі orzeczenia traktuje się як orzeczenia wydane w postępowaniu wywołanym wniesieniem skargi. Skarga підлягає opłata stała.",
        },
      ],
      legalEffect:
        "Цей засіб не є звичайною ще однією апеляцією: сама szkoda або незгода з wyrok не долає вимоги про prawomocność і відсутність іншого засобу.",
      foreignersCase:
        "У справі іноземця про pobyt встановіть, які środki prawne були доступні, чи ними скористалися, чи можлива зміна або скасування orzeczenia, і лише потім обґрунтовуйте szkoda та, за потреби, винятковий випадок за § 2. Не очікуйте автоматичного скасування wyrok або decyzja органу.",
    },
  ]),
})
