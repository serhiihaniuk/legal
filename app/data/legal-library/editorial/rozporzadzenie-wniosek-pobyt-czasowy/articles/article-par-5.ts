import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-5",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("5", "§ 5")} вимагає додати чотири фотографії до wniosków за ${foreignersLaw.article("139a", "art. 139a")} ust. 1 і ${foreignersLaw.article("139o", "art. 139o")} ust. 1 та до заяв на zezwolenia за ${foreignersLaw.article("159", "art. 159")} ust. 1 і ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 або 6 ustawy, якщо вони надаються іноземцю, який перебуває поза межами Польщі.`,
          sourceLocator: "§ 5",
        },
      ],
      summary: regulationLaw.text`${regulationLaw.paragraph("5", "§ 5")} визначає кількість фотографій для названих спеціальних заяв, коли іноземець перебуває за межами Rzeczypospolitej Polskiej.`,
      rules: [
        {
          locator: "§ 5",
          explanation:
            "У перелічених у положенні категоріях додаються чотири фотографії cudzoziemca.",
        },
        {
          locator: "§ 5",
          explanation: regulationLaw.text`Правило прив’язане саме до названих статей ustawy та до перебування іноземця поза межами Польщі; ${regulationLaw.paragraph("5", "§ 5")} не встановлює загальне число для кожного wniosku.`,
        },
      ],
      legalEffect:
        "Норма встановлює кількісну вимогу до фотографій у конкретних процедурах. Вона не доводить виконання матеріальних умов zezwolenia.",
      foreignersCase: regulationLaw.text`Якщо заява подається з-за меж Польщі, звірте, чи належить ваш вид zezwolenia до переліку ${regulationLaw.paragraph("5", "§ 5")}, і підготуйте чотири фото разом із доказами підстави заяви.`,
    },
  ],
})
