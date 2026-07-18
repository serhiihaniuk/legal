import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-268",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "І заява про прийняття правової постанови (uchwała), і сама постанова NSA повинні містити обґрунтування.",
          sourceLocator: "Art. 268",
        },
      ],
      summary:
        "Стаття вимагає прозоро показати правову проблему та причини її вирішення.",
      rules: [
        {
          locator: "Art. 268",
          explanation:
            "Читайте заяву для точних меж питання, а обґрунтування правової постанови (uchwała) — для логіки відповіді; сама коротка теза без контексту може бути неправильно застосована.",
        },
      ],
      legalEffect:
        "Обґрунтування є обов’язковою частиною обох документів і дозволяє зіставити висновок із конкретною нормою.",
      foreignersCase:
        "У справі про перебування цитуйте не лише резолютивну тезу правової постанови (uchwała), а й умови, за яких NSA сформулював правову позицію.",
    },
  ],
})
