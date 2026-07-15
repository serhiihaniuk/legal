import type { LegalExplanation } from "../contracts"

export const foreignersActExplanations = {
  "ustawa-o-cudzoziemcach-art-60": {
    id: "ustawa-o-cudzoziemcach/art-60",
    documentId: "ustawa-o-cudzoziemcach",
    provisionId: "ustawa-o-cudzoziemcach-art-60",
    sourceEditionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    reviewStatus: "reviewed",
    language: "uk",
    claims: [
      {
        kind: "statute-text",
        text: "Art. 60 ust. 1 перелічує цілі, для яких видається wiza Schengen або wiza krajowa.",
        sourceLocator: "Art. 60 ust. 1",
      },
      {
        kind: "practical-inference",
        text: "Назва цілі візи не замінює перевірку інших умов в’їзду, перебування та окремої підстави для праці.",
        sourceLocator: "Art. 60 ust. 1",
      },
    ],
    summary:
      "Стаття систематизує допустимі цілі видачі wizy Schengen або wizy krajowej: зокрема туризм, відвідування, роботу, навчання, дослідження, лікування, транзит та інші прямо названі випадки.",
    rules: [
      {
        locator: "ust. 1",
        explanation:
          "Перелік описує cel wydania wizy. Конкретна заява повинна відповідати одній із передбачених цілей і бути підтверджена належними документами.",
      },
      {
        locator: "pkt 5–6",
        explanation:
          "Робочі цілі розрізняються за документом і видом праці. Сам запис робочої цілі у візі не доводить, що всі умови легальної праці виконані.",
      },
    ],
    legalEffect:
      "Обрана й підтверджена ціль визначає, у якому режимі орган оцінює заяву на візу. Стаття не скасовує інших умов видачі, відмови або перевірки на кордоні.",
    foreignersCase:
      "У справі іноземця спочатку прочитайте cel у візі, строки й кількість в’їздів, а потім окремо встановіть актуальну підставу перебування та право виконувати конкретну роботу.",
  },
} as const satisfies Record<
  string,
  LegalExplanation<"ustawa-o-cudzoziemcach">
>
