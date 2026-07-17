import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-75",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 75 дозволяє органу безплатно отримувати телетрансляцією дані від PIP, Straż Graniczna, KRK, KAS, ZUS, KRUS, реєстрів cudzoziemiec, KRS, CEIDG і PESEL для істотних обставин провадження.",
          sourceLocator: "Art. 75 ust. 1–12",
        },
      ],
      summary:
        "Орган може перевіряти не лише подані документи, а й штрафи, кримінальні відомості, перетин кордону, податки, внески, реєстраційні дані та статус pobyt. Для різних видів справ діють різні джерела і цілі.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "PIP, Straż Graniczna та KRK надають дані про визначені wykroczenia, злочини, покарання й перетин кордону, коли це істотно для справи.",
        },
        {
          locator: "ust. 5–8",
          explanation:
            "KAS, ZUS і KRUS надають дані про доходи, податки, zgłoszenia до ubezpieczenie та zaległości; реєстр cudzoziemiec — документи pobyt і відповідний wykaz.",
        },
        {
          locator: "ust. 9–12",
          explanation:
            "KRS, CEIDG і PESEL можуть надати реєстраційні та ідентифікаційні дані; отримання відбувається через teleinformatyczne systems ministerstwa pracy.",
        },
      ],
      legalEffect:
        "Перевірка з зовнішніх реєстрів може вплинути на оцінку умов, але стаття говорить про обставини istotne для провадження, а не про необмежений збір даних.",
      foreignersCase:
        "Підготуйте пояснення щодо розбіжностей у податках, ubezpieczenie, перетині кордону чи реєстрах. У рішенні дивіться, яке джерело і яку істотну обставину орган використав.",
    },
  ]),
})
