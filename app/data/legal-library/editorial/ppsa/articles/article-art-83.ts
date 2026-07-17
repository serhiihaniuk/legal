import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-83",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Terminy обчислюються за цивільними правилами; якщо останній день припадає на sobota або ustawowo wolny день, він переноситься на наступний день, а подання через визначені поштові, консульські та спеціальні канали прирівнюється до wniesienie до sąd.",
          sourceLocator: "Art. 83 § 1–5",
        },
      ],
      summary:
        "Стаття визначає обчислення строків, вихідний перенос, прирівняні способи подання та електронну дату wniesienie.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Застосовуйте правила prawa cywilnego; останній день у sobota або ustawowo wolny день переходить на наступний день.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Подання у визначеній placówka pocztowa, консульстві або спеціальному місці прирівнюється до подання до sąd за умовами статті.",
        },
        {
          locator: "§ 5",
          explanation:
            "Для електронного pismo датою є дата, визначена в poświadczenie odbioru або dowód otrzymania, — дата введення до системи.",
        },
      ],
      legalEffect:
        "Правило може зберегти строк за належного каналу подання, але треба перевірити статус оператора, дату та доказ системи.",
      foreignersCase:
        "Cudzoziemiec за кордоном має перевірити, чи конкретне консульське або поштове подання охоплене § 3, а при електронному поданні — зберегти dowód otrzymania.",
    },
  ]),
})
