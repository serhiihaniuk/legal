import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-230",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("230", "Art. 230 § 1")} передбачає pobranie wpis stosunkowy або stały від pism, що ініціюють провадження перед sądem administracyjnym у відповідній instancji; ${ppsaLaw.article("230", "§ 2")} називає такими pismami skargę, sprzeciw od decyzji, sprzeciw od postanowienia, skargę kasacyjną, zażalenie та skargę o wznowienie postępowania.`,
          sourceLocator: "Art. 230 § 1–2",
        },
      ],
      summary:
        "Письма, що починають провадження в певній instancji, обкладаються wpis stosunkowy або stały; стаття містить перелік таких засобів.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спочатку визначте instancja та те, чи письмо ініціює окреме провадження перед адміністративним судом.",
        },
        {
          locator: "§ 2",
          explanation:
            "Зіставте документ із переліком: skarga, sprzeciw, skarga kasacyjna, zażalenie або skarga o wznowienie мають різні подальші вимоги.",
        },
      ],
      legalEffect:
        "Стаття визначає, які ініціюючі письма можуть мати wpis, але не визначає в кожній справі його конкретний розмір чи можливе zwolnienie.",
      foreignersCase:
        "У справі про pobyt перевірте вид поданого засобу — skarga чи інший документ — і відповідний wpis; не переносіть правила для одного засобу на інший.",
    },
  ],
})
