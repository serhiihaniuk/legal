import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "157",
      provisionId: "kpa-art-157",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає орган і спосіб початку провадження щодо nieważności decyzji. Зазвичай справу веде орган вищого ступеня, а провадження може початися на вимогу сторони або з уряду.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Компетентним є орган вищого ступеня; якщо рішення видав minister або samorządowe kolegium odwoławcze, питання розглядає цей самий орган.",
        },
        {
          locator: "§ 2",
          explanation:
            "Провадження відкривають на żądanie strony або z urzędu.",
        },
        {
          locator: "§ 3",
          explanation: "Параграф скасований і не містить чинного правила.",
        },
      ],
      legalEffect:
        "Заява, подана не тому органу, має бути спрямована за правилами компетенції; сам предмет провадження обмежений перевіркою підстав nieważności.",
      foreignersCase:
        "Іноземець, який оспорює остаточне рішення воєводи як недійсне, має встановити właściwy organ wyższego stopnia, а не подавати звичайне odwołanie після спливу строку.",
    },
  ],
})
