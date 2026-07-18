import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-80",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("80", "Art. 80")} ust. 1 делегує міністру внутрішніх справ у погодженні з MFA визначити в rozporządzenie oznaczenia celów wiza, blankiet, форму й фотографію заяви, відмітку прийняття, передавання даних, формуляри odmowa і ${foreignersLaw.article("76", "Art. 76")} ust. 4, спосіб наклеювання та unieważnienie; ust. 2 визначає критерії.`,
          sourceLocator: "Art. 80 ust. 1 pkt 1–8; ust. 2 pkt 1–5",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`${foreignersLaw.article("80", "Art. 80")} регулює технічні wzory і процедури виконання, тому конкретний формуляр або oznaczenie треба перевіряти в rozporządzenie, а не реконструювати з номера статті.`,
          sourceLocator: "Art. 80 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("80", "Art. 80")} визначає делегацію для підзаконного оформлення візових формулярів, oznaczenia celów, передачі даних, наклеювання і скасування naklejka. Rozporządzenie має врахувати типи віз ${foreignersLaw.article("58", "Art. 58")}, цілі ${foreignersLaw.article("60", "Art. 60")}, читабельність, безпеку та контроль.`,
      rules: [
        {
          locator: "Art. 80 ust. 1 pkt 1–4",
          explanation:
            "Rozporządzenie визначає oznaczenie цілей, blankiet, формуляр wniosek і технічні вимоги до фотографії та спосіб відмітки прийняття заяви.",
        },
        {
          locator: "Art. 80 ust. 1 pkt 5–8",
          explanation: foreignersLaw.text`Окремо врегульовуються передавання даних Szef Urzędu, формуляри odmowa і рішення ${foreignersLaw.article("76", "Art. 76")} ust. 4, наклеювання та unieważnienie naklejka.`,
        },
        {
          locator: "Art. 80 ust. 2 pkt 1–5",
          explanation:
            "При підготовці правил враховуються типи й цілі віз, читабельність blankiet, контроль прийняття, безпечна передача даних і контроль технічних дій.",
        },
      ],
      legalEffect:
        "Стаття сама не встановлює конкретний зразок чи строк wiza. Її ефект — межі підзаконного регулювання, необхідного для однакового оформлення і контролю документів.",
      foreignersCase:
        "Використовуйте актуальну форму, blankiet і правила naklejka з відповідного rozporządzenie; звірте, що рішення, заява й віза мають узгоджені oznaczenia celów.",
    },
  ],
})
