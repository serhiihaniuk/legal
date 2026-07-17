import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-292",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 292 дозволяє przewodniczący викликати осіб, organи administracji publicznej або instytucje, зазначені у wniosek чи офіційно відомі суду, щоб у встановлений строк подати urzędowo poświadczone odpisy документів або заявити, що їх не мають. Особа, яка вже мала документ, але більше його не має, повинна пояснити, де він або odpis знаходиться.",
          sourceLocator: "Art. 292 § 1–2",
        },
      ],
      summary:
        "Суд може залучити відомих йому власників документів і вимагає або копію, або пояснення про її відсутність та місце знаходження.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "У wezwanie перевірте строк і конкретну вимогу: подати urzędowo poświadczony odpis або повідомити про його відсутність.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо адресат раніше володів документом, сама відсутність документа не звільняє від пояснення про його місце знаходження.",
        },
      ],
      legalEffect:
        "Стаття створює механізм збирання копій для відновлення akt, але не встановлює, що кожен викликаний адресат обов’язково має потрібний документ.",
      foreignersCase:
        "Якщо втрачені akta справи іноземця містили документи від органу pobyt або суду, перевірте, кого призначено адресатом wezwanie і чи подано копію або правдиве пояснення про її відсутність.",
    },
  ]),
})
