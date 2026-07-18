import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-178",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA на закритому засіданні відхиляє касаційну скаргу, подану після строку, недопустиму з іншої причини або таку, чиї усувні недоліки не виправлено в наданий строк.",
          sourceLocator: "Art. 178",
        },
      ],
      summary:
        "Це попередній контроль допустимості касації ще в суді першої інстанції.",
      rules: [
        {
          locator: "Art. 178",
          explanation:
            "Перевірка складається з трьох блоків: строк, право на касацію та виконання викликів про недоліки. Для кожного блоку потрібні окремі документи й дати.",
        },
      ],
      legalEffect:
        "Відхилення (odrzucenie) припиняє рух касаційної скарги без розгляду її підстав по суті.",
      foreignersCase:
        "Якщо WSA відхилив касацію у справі про перебування, прочитайте, який саме блок не виконано; від цього залежить можлива реакція.",
    },
  ],
})
