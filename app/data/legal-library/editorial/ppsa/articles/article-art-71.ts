import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-71",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Doręczenia żołnierzам zasadniczej służby wojskowej здійснюються через dowódca jednostki, а особам позбавленим волі — через адміністрацію відповідного zakład.",
          sourceLocator: "Art. 71 § 1–2",
        },
      ],
      summary:
        "Для військовослужбовця строкової служби та особи, позбавленої волі, закон визначає спеціального посередника вручення.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Pismo для żołnierz zasadniczej służby wojskowej передається через dowódca відповідної jednostka.",
        },
        {
          locator: "§ 2",
          explanation:
            "Pismo для особи позбавленої волі передається через адміністрацію відповідного zakład.",
        },
      ],
      legalEffect:
        "Спеціальний канал doręczenie допомагає підтвердити належне вручення особі в особливому статусі.",
      foreignersCase:
        "Якщо учасник справи cudzoziemiec позбавлений волі, перевірте докази передачі pismo адміністрації zakład та фактичну дату вручення.",
    },
  ]),
})
