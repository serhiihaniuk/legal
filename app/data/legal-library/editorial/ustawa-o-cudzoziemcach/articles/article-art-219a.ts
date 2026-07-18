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
      provisionId: "ustawa-o-cudzoziemcach-art-219a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Заявник пред’являє чинний dokument podróży та актуальний tytuł prawny do zajmowania lokalu mieszkalnego, у якому перебуватиме.",
          sourceLocator: "Art. 219a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Umowa użyczenia загалом не визнається правовою підставою користування житлом, крім випадку, коли житло надає нащадок, предок, подружжя, батьки подружжя або брат чи сестра іноземця.",
          sourceLocator: "Art. 219a ust. 2",
        },
        {
          kind: "statute-text",
          text: "У особливо обґрунтованому випадку, коли чинного документа подорожі немає і його неможливо отримати, можна пред’явити інший документ, що підтверджує особу.",
          sourceLocator: "Art. 219a ust. 3",
        },
      ],
      summary:
        "Стаття визначає два документи, які треба пред’явити у справі rezydenta długoterminowego UE: документ особи та належну правову підставу користування житлом.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Перевіряйте не лише адресу, а й актуальний tytuł prawny. Звичайна umowa użyczenia не підходить, якщо особа, яка надала житло, не належить до прямо названого сімейного кола.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Інший документ особи є винятком. Потрібно одночасно обґрунтувати відсутність чинного документа подорожі та неможливість його отримання.",
        },
      ],
      legalEffect:
        "Належне підтвердження особи й житла є окремою процедурною вимогою та не замінює доказів матеріальних умов дозволу.",
      foreignersCase:
        "Підготуйте оригінал документа подорожі й документ на житло. Для użyczenia перевірте споріднення з особою, яка надала житло; для альтернативного документа особи зберіть докази неможливості отримати паспорт.",
    },
  ],
})
