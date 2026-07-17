import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-293",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 293 дозволяє під час kontroli вимагати документ podróży і документи pobyt, фінансові кошти на utrzymanie, повернення або транзит, документ про законну можливість отримати такі кошти, документи, що уповноважують cudzoziemca до wykonywania pracy, prowadzenia działalności gospodarczej або powierzenia wykonywania pracy, а також документи про cel і warunki pobytu.",
          sourceLocator: "Art. 293 pkt 1–5",
        },
      ],
      summary:
        "Під час контролю можуть перевірятися не лише паспорт і підстава pobytu, а й кошти, робота або бізнес та фактична мета перебування.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "До базових документів належать dokument podróży і документи, що дають право на pobyt.",
        },
        {
          locator: "pkt 2–5",
          explanation:
            "Перелік охоплює кошти для перебування, повернення або транзиту, законне джерело коштів, право на роботу чи бізнес та підтвердження мети й умов pobytu.",
        },
      ],
      legalEffect:
        "Стаття визначає предмет можливого запиту під час контролю; сам запит не означає, що кожен перелічений документ потрібен у кожній справі.",
      foreignersCase:
        "Підготуйте документи відповідно до вашої підстави pobytu, реальної мети, джерела коштів і роботи; не підміняйте один вид доказу іншим без перевірки вимоги.",
    },
  ]),
})
