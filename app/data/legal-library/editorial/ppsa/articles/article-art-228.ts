import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-228",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Штрафи, накладені адміністративним судом, поряд із судовими витратами є доходами державного бюджету й виконуються в судовому порядку без надання рішенню виконавчого напису.",
          sourceLocator: "Art. 228",
        },
      ],
      summary:
        "Стаття визначає публічний характер штрафу та спрощує його примусове виконання.",
      rules: [
        {
          locator: "Art. 228",
          explanation:
            "Відділіть штраф (grzywna) від судових витрат (koszty sądowe) у розрахунку, хоча обидві суми надходять до бюджету. Для виконання штрафу окреме підтвердження виконавчої сили (klauzula wykonalności) не потрібне.",
        },
      ],
      legalEffect:
        "Остаточне рішення про штраф може перейти до примусового виконання без додаткового підтвердження виконавчості.",
      foreignersCase:
        "У справі іноземця не плутайте штраф органу за бездіяльність із компенсацією заявникові: одержувач і спосіб виконання різні.",
    },
  ],
})
