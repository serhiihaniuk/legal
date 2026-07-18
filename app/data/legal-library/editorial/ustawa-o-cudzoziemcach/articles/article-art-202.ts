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
      provisionId: "ustawa-o-cudzoziemcach-art-202",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("202", "Art. 202")} вимагає подати wniosek o pobyt stały не пізніше останнього дня legalnego pobytu. За малолітню особу заяву подають батьки чи опікуни або один із них, за повністю недієздатну — opiekun, а за малолітню без опіки — kurator.`,
          sourceLocator: "Art. 202 ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає строк і належного заявника. Вона також захищає дві категорії дітей, народжених у Польщі, від загального правила про подання до останнього дня legalnego pobytu.",
      rules: [
        {
          locator: "Art. 202 ust. 1–2",
          explanation: foreignersLaw.text`Граничний день визначають за фактичною підставою legalnego pobytu, а юридичний момент електронного подання — за ${foreignersLaw.article("203d", "Art. 203d")}. Для представника потрібен доказ батьківства, opieki або ustanowienia kuratora.`,
        },
        {
          locator: "Art. 202 ust. 3",
          explanation:
            "Строк з ust. 1 не застосовують до народженої в Польщі малолітньої дитини іноземця з pobytem stałym або statusem rezydenta długoterminowego UE, а також до дитини громадянина Польщі під його władzą rodzicielską.",
        },
      ],
      legalEffect:
        "Для загального випадку своєчасність заяви залежить від завершеного подання до кінця legalnego pobytu; для прямо названих дітей ця конкретна строкова вимога не діє.",
      foreignersCase:
        "Побудуйте календар pobytu та перевірте UPO. Якщо йдеться про дитину, окремо встановіть місце народження, статус батька чи матері й władzą rodzicielską — сама спорідненість не доводить винятку.",
    },
  ],
})
