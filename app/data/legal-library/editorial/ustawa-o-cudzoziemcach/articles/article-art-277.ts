import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-277",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Dokument «zgoda na pobyt tolerowany» видає або відмовляє у видачі komendant oddziału Straży Granicznej або komendant placówki Straży Granicznej, який надав zgodę; wymianę або відмову у wymianie здійснює відповідний komendant SG за місцем pobytu. Відмова є decyzją.",
          sourceLocator: "Art. 277 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Органом вищого ступеня щодо komendanta oddziału або placówki SG є Komendant Główny Straży Granicznej, а odwołanie від decyzja подають протягом 7 днів від doręczenia. Якщо zgodę або рішення про документ прийняв Komendant Główny, документ видає або wymienia komendant першої інстанції.",
          sourceLocator: "Art. 277 ust. 3–4",
        },
      ],
      summary:
        "Стаття визначає органи видачі та обміну документа tolerowany і спеціальний 7-денний строк odwołania.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для першої видачі дивіться на орган, який надав згоду; для wymiany — на SG за місцем перебування.",
        },
        {
          locator: "ust. 2–3a",
          explanation:
            "Відмова є decyzją, а odwołanie у визначених справах подається в 7-денний строк.",
        },
      ],
      legalEffect:
        "Компетенція та шлях оскарження залежать від того, який орган прийняв рішення і чи була справа в першій інстанції у Komendanta Głównego.",
      foreignersCase:
        "На decyzji про відмову встановіть орган, дату doręczenia та адресата odwołania. Для 7-денного строку підготуйте доказ дати отримання.",
    },
  ],
})
