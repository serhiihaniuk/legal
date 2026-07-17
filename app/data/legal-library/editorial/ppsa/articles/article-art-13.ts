import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-13",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 13 § 2 встановлює: «Do rozpoznania sprawy właściwy jest wojewódzki sąd administracyjny, na którego obszarze właściwości ma siedzibę organ administracji publicznej, którego działalność została zaskarżona».",
          sourceLocator: "Art. 13 § 2",
        },
      ],
      summary:
        "Wojewódzkie sądy administracyjne розглядають усі справи sądowoadministracyjne, крім віднесених до NSA; за загальним правилом територіальна właściwość прив’язана до місцезнаходження оскарженого органу.",
      rules: [
        {
          locator: "Art. 13 § 1",
          explanation:
            "WSA є судом для всіх справ, крім тих, для яких właściwość збережена за Naczelny Sąd Administracyjny.",
        },
        {
          locator: "Art. 13 § 2–2a",
          explanation:
            "Загальним територіальним орієнтиром є siedziba оскарженого органу; для skargi на діяльність konsula текст окремо називає WSA за місцезнаходженням відповідного urzędu.",
        },
        {
          locator: "Art. 13 § 3",
          explanation:
            "Президент може розпорядженням передати WSA розгляд справ певного виду іншого WSA, якщо цього вимагає celowość.",
        },
      ],
      legalEffect:
        "Стаття дає загальну модель розподілу справ між WSA та NSA і територіальний критерій, але конкретний суд треба визначати за органом та можливими спеціальними правилами.",
      foreignersCase:
        "У спорі щодо рішення про pobyt встановіть орган, чия діяльність оскаржується, і його siedziba; адресу проживання іноземця не підміняйте критерієм Art. 13.",
    },
  ]),
})
