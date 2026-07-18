import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "156",
      provisionId: "kpa-art-156",
      reviewStatus: "reviewed",
      summary:
        "Стаття перелічує вади, через які остаточне рішення може бути визнане недійсним, та встановлює дві межі такого наслідку. Це винятковий контроль законності самого рішення, а не повторна оцінка справи як у звичайному odwołaniu.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Підставами є, зокрема, відсутність компетенції органу, відсутність правової підстави або rażące naruszenie prawa, а також повторне вирішення вже остаточно вирішеної чи мовчазно завершеної справи.",
        },
        {
          locator: "§ 1 pkt 4–7",
          explanation:
            "Інші підстави стосуються адресування рішення не стороні, постійної невиконуваності вже на день видання, необхідності вчинити каране діяння або іншої вади, яку закон прямо пов'язує з недійсністю.",
        },
        {
          locator: "§ 2",
          explanation:
            "Недійсність не встановлюють після десяти років від вручення чи оголошення рішення, а також коли рішення спричинило незворотні правові наслідки.",
        },
      ],
      legalEffect: kpaLaw.text`За наявності підстав із ${kpaLaw.article("156", "§ 1")} орган може усунути рішення з правового обігу; за перешкод із ${kpaLaw.article("156", "§ 2")} застосовується наслідок, визначений ${kpaLaw.article("158", "art. 158 § 2")}, а не stwierdzenie nieważności.`,
      foreignersCase: kpaLaw.text`У справі про pobyt це може стосуватися, наприклад, рішення органу без właściwości або рішення з rażącym naruszeniem prawa. Не кожна помилка воєводи є такою вадою: потрібно співвіднести її з конкретним пунктом ${kpaLaw.article("156", "§ 1")} і перевірити межі ${kpaLaw.article("156", "§ 2")}.`,
    },
  ],
})
