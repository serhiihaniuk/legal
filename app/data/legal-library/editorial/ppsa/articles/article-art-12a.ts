import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-12a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 12a § 1 передбачає: «Akta są tworzone w postaci elektronicznej lub papierowej».",
          sourceLocator: "Art. 12a § 1",
        },
      ],
      summary:
        "Для кожної справи створюються akta; вони можуть мати електронну або паперову форму. Сторони можуть переглядати akta та отримувати їхні odpisy, kopie або wyciągi.",
      rules: [
        {
          locator: "Art. 12a § 1–3",
          explanation:
            "Akta створюються в електронній або паперовій postaci, а обробка кожної форми пов’язана з визначеним системним способом документообігу.",
        },
        {
          locator: "Art. 12a § 4–5a",
          explanation:
            "Сторони мають право переглядати akta та отримувати odpisy, kopie або wyciągi; електронні akta надаються через систему після автентифікації у спосіб, визначений законом. Pełnomocnik для доступу додатково подає sąd свій номер PESEL, якщо зобов’язаний його мати або має його.",
        },
        {
          locator: "Art. 12a § 6–9",
          explanation:
            "Завершені prawomocnie справи зберігаються у właściwym суді протягом періоду, потрібного з огляду на характер матеріалів, після чого akta передаються до архіву або знищуються за умовами статті.",
        },
      ],
      legalEffect:
        "Стаття визначає форму, доступ і подальше поводження з aktami, але не встановлює тут конкретної календарної тривалості зберігання.",
      foreignersCase:
        "У справі про pobyt подайте запит на перегляд akta та перевірте, чи доступ надається в електронній системі або на папері; з отриманих kopie складіть хронологію матеріалів.",
    },
  ]),
})
