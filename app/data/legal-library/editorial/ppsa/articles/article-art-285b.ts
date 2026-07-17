import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285b дозволяє також Prokurator Generalny або Rzecznik Praw Obywatelskich подати skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia у випадках, названих у Art. 285a § 1, § 2 і § 3.",
          sourceLocator: "Art. 285b",
        },
      ],
      summary:
        "Норма розширює коло можливих заявників цього спеціального засобу до Prokurator Generalny та Rzecznik Praw Obywatelskich у межах Art. 285a.",
      rules: [
        {
          locator: "Art. 285b",
          explanation:
            "Повноваження цих органів прив’язане до випадків Art. 285a § 1–3; стаття не створює загального права будь-якої установи подати таку skarga.",
        },
      ],
      legalEffect:
        "Можливість подання органом не прибирає вимог до підстави, szkoda, prawomocność та допустимості, установлених Art. 285a і наступними нормами.",
      foreignersCase:
        "Якщо Rzecznik Praw Obywatelskich розглядає можливість подання skarga в інтересах іноземця, перевірте, який саме випадок Art. 285a заявлено та які матеріали підтверджують відповідні умови, зокрема szkoda й відсутність іншого засобу, якщо вони застосовні.",
    },
  ]),
})
