import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-265",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У засіданні повного складу NSA або палати обов’язково бере участь Генеральний прокурор (Prokurator Generalny) чи його заступник. У засіданні семи суддів бере участь визначений прокурор Національної прокуратури (Prokuratura Krajowa) або прокурор, делегований до неї й призначений для засідань NSA.",
          sourceLocator: "Art. 265",
        },
      ],
      summary:
        "Стаття забезпечує участь прокуратури в процедурі прийняття правової постанови (uchwała).",
      rules: [
        {
          locator: "Art. 265",
          explanation:
            "Перевірте вид складу: від нього залежить рівень прокурора, чия участь є обов’язковою.",
        },
      ],
      legalEffect:
        "Відсутність належного учасника стосується законності спеціального засідання, але не перетворює прокурора на представника сторони.",
      foreignersCase:
        "У справі іноземця не ототожнюйте участь прокурора в процедурі правової постанови (uchwała) з підтримкою позиції конкретного заявника.",
    },
  ],
})
