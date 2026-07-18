import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-171",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Судове рішення (wyrok), яке набрало законної сили, має силу вирішеної справи (powaga rzeczy osądzonej) лише щодо того, що у зв’язку зі скаргою було предметом судового вирішення.",
          sourceLocator: "Art. 171",
        },
      ],
      summary:
        "Стаття обмежує заборону повторного спору фактичними межами вже вирішеного питання.",
      rules: [
        {
          locator: "Art. 171",
          explanation:
            "Порівняйте сторони, предмет скарги та точну резолютивну частину попереднього рішення. Подібна тема або ті самі документи ще не доводять тотожності предмета.",
        },
      ],
      legalEffect:
        "Сила вирішеної справи захищає встановлені межі рішення, але не охоплює питання, яких суд не вирішував.",
      foreignersCase:
        "У новій справі про перебування зіставте попередню вимогу з новою. Зміна періоду, правової підстави чи рішення органу може змінити предмет спору.",
    },
  ],
})
