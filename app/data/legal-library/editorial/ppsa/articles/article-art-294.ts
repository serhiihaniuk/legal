import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-294",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Коли офіційно засвідчені копії подано, головуючий розпоряджається долучити їх до матеріалів і вручає сторонам копію цього розпорядження.",
          sourceLocator: "Art. 294",
        },
      ],
      summary:
        "Стаття робить знайдені копії офіційною частиною відновлених матеріалів і повідомляє сторони.",
      rules: [
        {
          locator: "Art. 294",
          explanation:
            "Після вручення розпорядження (doręczenie zarządzenia) перевірте перелік долучених документів та чи відповідають вони поданим копіям.",
        },
      ],
      legalEffect:
        "Долучення створює документальну основу наступного етапу, але ще не завершує оцінку повноти відновлення.",
      foreignersCase:
        "У справі іноземця порівняйте перелік із власним архівом і швидко повідомте про очевидно пропущений ключовий документ.",
    },
  ],
})
