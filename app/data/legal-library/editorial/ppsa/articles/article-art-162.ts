import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-162",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Rozstrzygnięcia у postanowieniaх, які не завершують справу, винесених на posiedzenie jawne, заносяться до protokołu без окремої sentencja, якщо на них не належить zażalenie.",
          sourceLocator: "Art. 162",
        },
      ],
      summary:
        "Стаття пояснює, коли проміжне рішення може існувати як запис у protokół без окремої sentencja.",
      rules: [
        {
          locator: "Art. 162",
          explanation:
            "Одночасно перевірте три ознаки: postanowienie не завершує справу, засідання є відкритим, і zażalenie не передбачене.",
        },
      ],
      legalEffect:
        "Відсутність окремої sentencja за цією нормою не означає відсутності розглянутого питання: його розкриття має бути в protokół.",
      foreignersCase:
        "У справі про pobyt перевіряйте protokół, якщо проміжне рішення не надійшло окремим документом. Спочатку встановіть, чи існувало право на zażalenie.",
    },
  ],
})
