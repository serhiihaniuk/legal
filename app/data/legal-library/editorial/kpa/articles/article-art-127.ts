import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "127",
      provisionId: "kpa-art-127",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює одноінстанційне адміністративне оскарження decyzji першої інстанції та визначає компетентний орган і замінник odwołania для окремих органів.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Від рішення першої інстанції сторона має odwołanie до однієї інстанції. Рішення є остаточним за цим винятком, коли орган відмовився від обґрунтування саме через повне задоволення вимоги сторони.",
        },
        {
          locator: "§ 2",
          explanation:
            "Справу розглядає орган вищого ступеня, якщо закон не визначив іншого органу.",
        },
        {
          locator: "§ 3",
          explanation:
            "Від рішення, яке міністр або samorządowe kolegium odwoławcze (SKO) видали в першій інстанції, odwołanie не передбачене. Незадоволена сторона може подати до того самого органу wniosek o ponowne rozpatrzenie sprawy; правила про odwołanie застосовують відповідно.",
        },
      ],
      legalEffect:
        "Неостаточна decyzja першої інстанції може бути перевірена ще однією адміністративною інстанцією.",
      foreignersCase:
        "Після decyzji у справі іноземця треба встановити її автора: від цього залежить, чи подається odwołanie до вищого органу, чи wniosek про повторний розгляд.",
    },
  ],
})
