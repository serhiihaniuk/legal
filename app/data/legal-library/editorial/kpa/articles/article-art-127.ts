import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
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
            "Сторона має одне odwołanie, але повністю позитивна decyzja без uzasadnienia є остаточною.",
        },
        {
          locator: "§ 2",
          explanation:
            "Справу розглядає орган вищого ступеня, якщо закон не визначив іншого органу.",
        },
        {
          locator: "§ 3",
          explanation:
            "Від decyzji міністра або SKO подається wniosek o ponowne rozpatrzenie до того самого органу за правилами odwołania.",
        },
      ],
      legalEffect:
        "Неостаточна decyzja першої інстанції може бути перевірена ще однією адміністративною інстанцією.",
      foreignersCase:
        "Після decyzji у справі іноземця треба встановити її автора: від цього залежить, чи подається odwołanie до вищого органу, чи wniosek про повторний розгляд.",
    },
  ],
})
