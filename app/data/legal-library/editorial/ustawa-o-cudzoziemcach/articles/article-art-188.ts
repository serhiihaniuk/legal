import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-188",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("188", "Art. 188")} встановлює різні фінансові, страхові, житлові та документальні умови для permit за ${foreignersLaw.article("186", "art. 186")} і ${foreignersLaw.article("187", "art. 187")}; умови залежать від конкретного pkt та ustęp.`,
          sourceLocator: "Art. 188 ust. 1–6",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("188", "Art. 188")} відсилає для dochód до ${foreignersLaw.article("140", "art. 140")} ust. 2, визнає утримання родичем у Польщі способом виконання вимоги стабільного доходу та встановлює соціальний поріг для коштів на utrzymanie в окремих підставах.`,
          sourceLocator: "Art. 188 ust. 4–6",
        },
      ],
      summary: foreignersLaw.text`Одна назва permit ze względu na inne okoliczności приховує різні набори умов; спочатку визначте pkt ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")}, потім перевіряйте ust. 1–6.`,
      rules: [
        {
          locator: "ust. 1–2b",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} pkt 1, 3, 4 або 8 потрібні ubezpieczenie і stabilny i regularny dochód; для pkt 3–4 додатково житло. Для pkt 6–7 потрібні ubezpieczenie, житло і достатні кошти на utrzymanie та powrót; для pkt 6 додатково diploma польського університету, для pkt 7 — документ jednostka naukowa про завершення досліджень.`,
        },
        {
          locator: "ust. 3 pkt 1–5",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("187", "art. 187")} pkt 1, 3, 5 або 8 потрібні ubezpieczenie та житло; для pkt 1 lit. b і pkt 8 — stabilny i regularny dochód; для pkt 1 lit. a — кошти на nauka, utrzymanie і powrót; для pkt 5 додатково забезпечене utrzymanie.`,
        },
        {
          locator: "ust. 4–5",
          explanation: foreignersLaw.text`Dochód за ust. 1 pkt 2 і ust. 3 pkt 2 обчислюється за ${foreignersLaw.article("140", "art. 140")} ust. 2. Вимога стабільного доходу також вважається виконаною, якщо utrzymanie покриває зобов'язаний член сім'ї, який живе в Польщі.`,
        },
        {
          locator: "ust. 6",
          explanation: foreignersLaw.text`Щомісячні кошти за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6–7 або ${foreignersLaw.article("187", "art. 187")} pkt 1 lit. a після застосовного розрахунку мають перевищувати дохід, що дає право на грошові świadczenia з pomocy społecznej, щодо cudzoziemiec і кожного утриманця.`,
        },
      ],
      legalEffect: foreignersLaw.text`Підтвердження базової обставини ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")} недостатньо, якщо для її pkt не доведені додаткові умови ${foreignersLaw.article("188", "Art. 188")}; вимоги не можна переносити між пунктами.`,
      foreignersCase: foreignersLaw.text`Зробіть матрицю «конкретний pkt — умова ${foreignersLaw.article("188", "Art. 188")} — доказ — дата»: страховка, житло, дохід або кошти, diploma чи довідка jednostka naukowa; розрахунок доходу перевірте за ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
    },
  ],
})
