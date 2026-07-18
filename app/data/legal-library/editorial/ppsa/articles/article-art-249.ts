import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-249",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Право допомоги можна повністю або частково скасувати, якщо обставини, на яких його надали, не існували або пізніше припинилися.",
          sourceLocator: "Art. 249",
        },
      ],
      summary:
        "Стаття робить допомогу залежною від правдивості та актуальності фінансової ситуації.",
      rules: [
        {
          locator: "Art. 249",
          explanation:
            "Повідомляйте істотні зміни доходів, майна або представництва. Суд порівнює нові дані з підставами первісної ухвали.",
        },
      ],
      legalEffect:
        "Скасування може відновити обов’язок сплачувати майбутні витрати в новому обсязі.",
      foreignersCase:
        "Якщо іноземець почав працювати або отримав значні кошти після надання допомоги, це потрібно врахувати, а не приховувати від суду.",
    },
  ],
})
