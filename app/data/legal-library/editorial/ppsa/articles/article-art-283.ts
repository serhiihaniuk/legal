import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-283",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 283 встановлює, що sędzia, участь або поведінка якого в попередньому провадженні є предметом skarga o wznowienie, wyłączony від ухвалення рішення у цьому провадженні.",
          sourceLocator: "Art. 283",
        },
      ],
      summary:
        "Норма виключає з розгляду wznowienie суддю, чия участь або поведінка в попередній справі оскаржується.",
      rules: [
        {
          locator: "Art. 283",
          explanation:
            "Порівняйте предмет skarga з участю або zachowanie sędzia в попередньому провадженні; саме цей зв’язок запускає wyłączenie за статтею.",
        },
      ],
      legalEffect:
        "Стаття встановлює гарантію неупередженого складу для цього провадження, але сама не доводить, що заявлена підстава wznowienie є обґрунтованою.",
      foreignersCase:
        "Якщо в skarga іноземця прямо оскаржується участь або поведінка конкретного sędzia, перевірте склад суду у провадженні wznowienie та відокремте це питання від оцінки рішення по pobyt.",
    },
  ]),
})
