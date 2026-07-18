import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-219",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("219", "Art. 219")} визначає зміст формуляра wniosku про zezwolenie na pobyt rezydenta długoterminowego UE. Він охоплює дані cudzoziemca і членів сім’ї в Польщі, подорожі та pobyty, джерело і розмір доходу та кількість утриманців, ubezpieczenie zdrowotne, статус DLR UE в іншій державі, названі періоди pobytu в інших державах UE та перерви, обставини затримання або позбавлення волі, uzasadnienie і oświadczenie про правдивість даних.`,
          sourceLocator: "Art. 219 ust. 1 pkt 1–10",
        },
        {
          kind: "statute-text",
          text: "Oświadczenie про правдивість даних подається під rygor odpowiedzialności karnej за fałszywe oświadczenie. Заявник повинен включити встановлену законом клаузулу про усвідомлення цієї відповідальності; вона замінює окреме pouczenie органу.",
          sourceLocator: "Art. 219 ust. 2",
        },
      ],
      summary:
        "Стаття визначає зміст формуляра wniosku про pobyt rezydenta długoterminowego UE та кримінально-правову клаузулу до oświadczenie про правдивість даних.",
      rules: [
        {
          locator: "ust. 1 pkt 1–10",
          explanation: foreignersLaw.text`Формуляр має охопити всі дані, прямо перелічені статтею, зокрема періоди pobytu і виїздів, доходи за останні 3 роки або за останні 2 роки у випадку ${foreignersLaw.article("212", "Art. 212")} ust. 1 pkt 1.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Клаузулу слід відтворити у формі, визначеній законом; вона сама виконує функцію pouczenie про odpowiedzialność karna.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("219", "Art. 219")} не регулює додатки, особисту явку чи відбитки. Ці правила після зміни містяться, зокрема, в ${foreignersLaw.articleRange("219a", "219i", { start: "art. 219a" })}; їх не можна приписувати неіснуючим ust. 3–6 цієї статті.`,
      foreignersCase: foreignersLaw.text`Звірте кожне поле формуляра з pkt 1–10, особливо п’ятирічну історію поїздок, доходи за належний період та pobyty в інших державах UE. Додатки, спосіб подання й відбитки перевіряйте окремо за ${foreignersLaw.articleRange("219a", "219i", { start: "art. 219a" })}.`,
    },
  ],
})
