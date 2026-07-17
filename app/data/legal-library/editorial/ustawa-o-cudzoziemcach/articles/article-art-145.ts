import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-145",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("145", "Art. 145")} встановлює строки першого та наступного zezwolenie з ${foreignersLaw.article("144", "art. 144")} для першого року studia, програм мобільності, szkoła doktorska і підготовчого курсу.`,
          sourceLocator: "Art. 145 ust. 1–4",
        },
      ],
      summary:
        "Строк дозволу залежить від першого чи наступного дозволу, року навчання, програми мобільності, курсу та статусу doktorant.",
      rules: [
        {
          locator: "ust. 1 i 1a",
          explanation:
            "Перше zezwolenie для першого року зазвичай надається на 15 місяців; для визначеної програми внутрішньої мобільності — на 2 роки, а для першого дозволу особі в szkoła doktorska — на 2 роки і 6 місяців.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Якщо підстава обґрунтовує коротший pobyt, перше zezwolenie охоплює akademicki rok або studia плюс 3 місяці; для підготовчого курсу діє строк курсу плюс 3 місяці.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Наступне zezwolenie надається на studia або курс плюс 3 місяці, для doktorant — плюс 6 місяців, але не довше 3 років.",
        },
      ],
      legalEffect:
        "Стаття встановлює законодавчі строки та межі, але фактичний строк залежить від підтвердженої тривалості навчальної підстави.",
      foreignersCase:
        "Зіставте заświadczenie, академічний рік, програму мобільності, тип навчання та статус doktorant зі строком у decyzja; не переносіть строк іншої категорії.",
    },
  ],
})
