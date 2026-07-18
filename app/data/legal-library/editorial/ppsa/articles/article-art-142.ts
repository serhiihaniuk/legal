import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-142",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Odpis wyroku з uzasadnienie, складеним з urzędu, вручається кожній стороні; якщо uzasadnienie складено за wniosek, його отримує лише сторона, яка подала wniosek.",
          sourceLocator: "Art. 142 § 1–2",
        },
      ],
      summary:
        "Адресати odpis wyroku залежать від того, чи було uzasadnienie складено з urzędu або за wniosek.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "При uzasadnienie з urzędu перевірте doręczenie кожній стороні.",
        },
        {
          locator: "§ 2",
          explanation:
            "При uzasadnienie за wniosek відправлення одержує сторона-заявник, а не автоматично всі учасники.",
        },
      ],
      legalEffect:
        "Норма визначає коло одержувачів копії з мотивами; вона не дає висновку про саму можливість оскарження.",
      foreignersCase:
        "Іноземцю у справі про pobyt варто зберегти odpis wyroku з uzasadnieniem і перевірити, чи він був wnioskodawcą, коли мотиви складалися за wniosek.",
    },
  ],
})
