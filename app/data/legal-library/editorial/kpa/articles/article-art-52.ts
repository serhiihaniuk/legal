import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "52",
      provisionId: "kpa-art-52",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє organowi prowadzącemu доручити належному місцевому organowi виклик особи для пояснень, свідчень або іншої дії.",
      rules: [
        {
          locator: "zd. 1",
          explanation:
            "Organ prowadzący звертається до terenowego organu administracji rządowej або samorządu за місцем проживання чи перебування особи.",
        },
        {
          locator: "zd. 2",
          explanation:
            "У зверненні потрібно визначити факти для пояснення чи свідчення або конкретні дії, які мають бути виконані.",
        },
      ],
      legalEffect:
        "Необхідну доказову дію можна провести локально без обов’язкової поїздки до organu prowadzącego.",
      foreignersCase:
        "Для іноземця це загальний процесуальний механізм, який може зменшити тягар особистої явки до віддаленого urzędu.",
    },
  ],
})
