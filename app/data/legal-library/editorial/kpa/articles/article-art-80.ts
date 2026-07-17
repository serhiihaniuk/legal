import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "80",
      provisionId: "kpa-art-80",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює принцип swobodnej oceny dowodów: organ вирішує, чи доведено факт, на підставі всього зібраного матеріалу.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Ocena udowodnienia факту має випливати з całokształtu materiału dowodowego, а не з одного ізольованого документа.",
        },
      ],
      legalEffect:
        "Докази не мають наперед заданої сили поза спеціальними правилами; organ мусить пов’язати висновок з усім матеріалом справи.",
      foreignersCase:
        "У справі іноземця навіть формально наявний документ оцінюється разом з іншими даними та можливими суперечностями.",
    },
  ],
})
