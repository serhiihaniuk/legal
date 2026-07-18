import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-181",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "За загальним правилом NSA розглядає касаційну скаргу на судовому засіданні у складі трьох суддів. Розглядаючи касацію проти судового рішення, NSA видає рішення (wyrok), а проти завершальної ухвали — ухвалу (postanowienie).",
          sourceLocator: "Art. 181 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює базовий склад і форму рішення касаційного суду.",
      rules: [
        {
          locator: "Art. 181 § 1–2",
          explanation:
            "Спершу визначте форму оскарженого рішення WSA; вона визначає форму відповіді NSA. Окремо перевірте, чи спеціальна норма не дозволяє закрите засідання або інший склад.",
        },
      ],
      legalEffect:
        "Форма рішення NSA відображає предмет касації, але не пояснює сама по собі зміст результату.",
      foreignersCase:
        "У справі про перебування в календарі позначте, чи очікується відкрите засідання (rozprawa), і не плутайте рішення NSA (wyrok) з ухвалою (postanowienie) щодо процесуального завершення.",
    },
  ],
})
