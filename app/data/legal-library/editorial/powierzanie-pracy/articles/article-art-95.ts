import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-95",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 95 є виконаною нормою про зміну закону «ustawa o skutkach powierzania wykonywania pracy cudzoziemcom przebywającym wbrew przepisom». Вона додала завдання міністрів щодо моніторингу, скасувала art. 2 і 3, узгодила art. 13 з art. 4 нового закону та додала art. 14a про сектори ризику й звітність.",
          sourceLocator: "Art. 95 pkt 1–4",
        },
      ],
      summary:
        "Це пакет змін до іншого закону. Art. 2 і art. 3 цього закону прямо скасовано. Новий art. 14a доручає визначати сектори підвищеного ризику за PKD, щороку передавати Європейській Комісії статистику перевірок і кожні три роки подавати звіт про виконання закону.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "До art. 1 додано завдання компетентних міністрів щодо моніторингу, а art. 2 і art. 3 змінюваного закону прямо скасовано.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Art. 13 pkt 1 тепер відсилає до виконання обов'язків з art. 4 ust. 2 і 4 нового закону, із застереженням щодо знання про підроблений документ перебування.",
        },
        {
          locator: "pkt 4; art. 14a",
          explanation:
            "Міністр, компетентний у справах праці, за узгодженням із міністром внутрішніх справ визначає сектори PKD підвищеного ризику. На основі даних Straż Graniczna і PIP він готує щорічну статистику перевірок та трирічні звіти про виконання закону.",
        },
      ],
      legalEffect:
        "Art. 95 не створює нового індивідуального дозволу. Для конкретної відповідальності треба читати чинну редакцію зміненого закону після скасування його art. 2–3.",
      foreignersCase:
        "У справі про незаконне перебування перевірте дату події і чинну на цю дату редакцію зміненого закону. Належність до сектора PKD зі звітного механізму сама по собі не доводить порушення конкретного роботодавця.",
    },
  ]),
})
