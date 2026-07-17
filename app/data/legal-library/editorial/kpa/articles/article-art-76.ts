import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "76",
      provisionId: "kpa-art-76",
      reviewStatus: "reviewed",
      summary:
        "Стаття надає dokumentom urzędowym доказову силу щодо того, що в них офіційно засвідчено, але дозволяє проводити dowód przeciwko їх змісту.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Документи, складені у належній формі компетентними державними органами або іншими суб’єктами в межах доручених публічних завдань, підтверджують те, що в них urzędowo stwierdzono.",
        },
        {
          locator: "§ 3",
          explanation:
            "Закон не виключає доказу проти змісту dokumentu urzędowego.",
        },
      ],
      legalEffect:
        "Urzędowe stwierdzenie має підвищену доказову силу, але не створює абсолютної й незаперечної істини.",
      foreignersCase:
        "У справі іноземця urzędowe zaświadczenie підтверджує офіційно засвідчені факти, однак organ або сторона можуть доводити протилежне іншими доказами.",
    },
  ],
})
