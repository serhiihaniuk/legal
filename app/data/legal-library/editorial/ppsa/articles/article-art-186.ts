import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-186",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо в провадженні є підстава недійсності, NSA скасовує рішення також у тій частині, яку касаційна скарга не охоплювала.",
          sourceLocator: "Art. 186",
        },
      ],
      summary:
        "Стаття робить виняток із меж касаційного оскарження для найтяжчих процесуальних дефектів.",
      rules: [
        {
          locator: "Art. 186",
          explanation:
            "Спершу встановіть конкретну підставу недійсності провадження (nieważność postępowania). Лише вона дозволяє NSA вийти за оскаржену частину рішення.",
        },
      ],
      legalEffect:
        "Недійсність може зруйнувати й неоскаржену частину; звичайна помилка такого ефекту не має.",
      foreignersCase:
        "У справі про перебування не вважайте неоскаржену частину безумовно захищеною, якщо в усьому провадженні був дефект, що спричиняє недійсність.",
    },
  ],
})
