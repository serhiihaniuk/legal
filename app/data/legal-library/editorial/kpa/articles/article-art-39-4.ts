import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")

const ELECTRONIC_DELIVERY_ACT_URL = "https://eli.gov.pl/eli/DU/2024/1045/ogl"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "39⁴",
      provisionId: "kpa-art-39-4",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття відсилає визначення дня електронного doręczenia за ${kpaLaw.article("39", "art. 39 § 1")} до ${kpaLaw.external("art. 42", ELECTRONIC_DELIVERY_ACT_URL)} ustawy o doręczeniach elektronicznych.`,
      rules: [
        {
          locator: "całość",
          explanation:
            "День doręczenia електронної кореспонденції встановлюється не безпосередньо KPA, а за вказаною нормою спеціального закону.",
        },
      ],
      legalEffect:
        "Для строків, що починаються від електронного вручення, юридичну дату потрібно визначити за відсиланням.",
      foreignersCase: kpaLaw.text`У справі іноземця дата відкриття повідомлення в інтерфейсі не повинна підміняти юридичну дату, обчислену за ${kpaLaw.external("art. 42", ELECTRONIC_DELIVERY_ACT_URL)} ustawy o doręczeniach elektronicznych.`,
    },
  ],
})
