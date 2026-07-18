import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-208b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо орган іншої держави Schengen просить консультацію за ${foreignersLaw.external("art. 10", SIS_2018_1860_URL)} або ${foreignersLaw.external("11", SIS_2018_1860_URL)} rozporządzenia nr 2018/1860, а cudzoziemiec має pobyt stały, відповідний wojewoda встановлює, чи є підстави cofnięcia дозволу.`,
          sourceLocator: "Art. 208b ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Правила строків відповідають ${foreignersLaw.article("208", "Art. 208")}: повідомлення через Komendant Główny Policji — протягом 10 днів, можливе продовження максимум на 12 днів, а передача іншій державі — протягом 14 днів або продовженого строку.`,
          sourceLocator: "Art. 208b ust. 2–4",
        },
      ],
      summary:
        "Стаття регулює SIS-консультації іншого типу щодо особи, яка вже має pobyt stały.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Після запиту за ${foreignersLaw.external("art. 10", SIS_2018_1860_URL)} або ${foreignersLaw.external("11", SIS_2018_1860_URL)} регламенту орган перевіряє саме підстави cofnięcia, а не просто чинність картки.`,
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Строки 10, 12 і 14 днів стосуються послідовних повідомлень через польські органи та не є строком автоматичного рішення про pobyt.",
        },
      ],
      legalEffect:
        "Стаття організує міжнародний обмін інформацією; питання фактичного cofnięcie вирішується за окремою процедурою та підставами.",
      foreignersCase: foreignersLaw.text`Збережіть повідомлення про консультацію, перевірте SIS-підставу й дати, а заперечення щодо cofnięcie будуйте на конкретних фактах і ${foreignersLaw.article("199", "Art. 199")}.`,
    },
  ],
})
