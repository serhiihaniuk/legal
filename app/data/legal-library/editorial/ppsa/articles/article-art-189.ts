import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-189",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо первісну скаргу слід було відхилити або провадження WSA мало бути припинене, NSA ухвалою скасовує видане рішення та відповідно відхиляє скаргу або припиняє провадження.",
          sourceLocator: "Art. 189",
        },
      ],
      summary:
        "Стаття виправляє ситуацію, коли WSA помилково розглянув справу, що мала завершитися процесуально.",
      rules: [
        {
          locator: "Art. 189",
          explanation:
            "Визначте, чи дефект стосується допустимості самої скарги, чи безпредметності або іншої підстави припинення провадження. Від цього залежить фінальна формула NSA.",
        },
      ],
      legalEffect:
        "NSA усуває рішення WSA й завершує справу без нового розгляду її матеріальної обґрунтованості.",
      foreignersCase:
        "У справі про перебування чітко відрізняйте відхилення скарги як недопустимої (odrzucenie skargi) від припинення провадження (umorzenie postępowania): це різні причини, хоча обидві зупиняють судовий шлях на цьому етапі.",
    },
  ],
})
