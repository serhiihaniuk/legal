import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-52",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "За загальним правилом skargę подають після wyczerpanie środków zaskarżenia; це охоплює доступні zażalenie, odwołanie або ponaglenie, але стаття встановлює винятки, зокрема щодо wniosek o ponowne rozpatrzenie.",
          sourceLocator: "Art. 52 § 1–4",
        },
      ],
      summary:
        "Перед skarga треба встановити, які адміністративні засоби оскарження були доступні і чи їх вичерпано.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Wyczerpanie означає, що стороні більше не доступний передбачений законом środek zaskarżenia; для prokurator, RPO та RPD є виняток.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для wniosek o ponowne rozpatrzenie skarga загалом можлива без попереднього використання цього права, але не в зазначених справах MSZ або konsul.",
        },
        {
          locator: "§ 4",
          explanation:
            "Параграф позначений як uchylony і не містить чинного правила.",
        },
      ],
      legalEffect:
        "Недотримання вимоги про вичерпання може вплинути на допустимість skarga; висновок залежить від предмета та спеціального закону.",
      foreignersCase:
        "У справі cudzoziemca розрізніть odwołanie, zażalenie, ponaglenie та wniosek o ponowne rozpatrzenie і перевірте, який шлях доступний.",
    },
  ]),
})
