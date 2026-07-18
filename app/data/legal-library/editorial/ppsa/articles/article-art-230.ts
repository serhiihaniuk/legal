import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-230",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "За документи, що починають провадження в певній інстанції, стягують пропорційний або фіксований збір за подання (wpis). До них належать скарга, заперечення проти рішення чи ухвали (sprzeciw), касаційна скарга, окреме оскарження (zażalenie) та скарга про поновлення провадження.",
          sourceLocator: "Art. 230 § 1–2",
        },
      ],
      summary:
        "Стаття визначає, які процесуальні документи запускають обов’язок сплатити збір за подання (wpis).",
      rules: [
        {
          locator: "Art. 230 § 1–2",
          explanation:
            "Перед поданням встановіть вид документа й відповідну модель збору: фіксовану (wpis stały) або пропорційну (wpis stosunkowy). Не переносіть оплату з одного засобу на інший.",
        },
      ],
      legalEffect:
        "Правильна класифікація документа визначає, чи виникає збір за подання (wpis) і як його розрахувати.",
      foreignersCase:
        "У справі про перебування звичайна скарга (skarga), заперечення (sprzeciw) і касаційна скарга (skarga kasacyjna) є різними документами; кожний має власний етап і платіж.",
    },
  ],
})
