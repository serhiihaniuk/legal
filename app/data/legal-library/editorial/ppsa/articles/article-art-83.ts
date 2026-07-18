import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-83",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Terminy обчислюються за цивільними правилами; якщо останній день припадає на sobota або ustawowo wolny день, він переноситься на наступний день, а подання через визначені поштові, консульські та спеціальні канали прирівнюється до wniesienie до sąd.",
          sourceLocator: "Art. 83 § 1–5, przypisy 48–49",
        },
      ],
      summary:
        "Стаття визначає обчислення строків, перенос останнього дня, прирівняні способи подання та дату електронного wniesienie за urzędowe poświadczenie odbioru.",
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
            "Станом на 18.07.2026 датою подання pismo w formie dokumentu elektronicznego є зазначена в urzędowe poświadczenie odbioru дата введення pismo до телекомунікаційної системи суду або відповідного органу. Dowód otrzymania з’явиться в редакції § 5 лише з 1.10.2029.",
        },
      ],
      legalEffect:
        "Правило може зберегти строк за належного каналу подання, але треба перевірити статус оператора, дату та доказ системи.",
      foreignersCase:
        "Cudzoziemiec за кордоном має перевірити, чи конкретне консульське або поштове подання охоплене § 3, а при електронному поданні — зберегти urzędowe poświadczenie odbioru.",
    },
  ]),
})
