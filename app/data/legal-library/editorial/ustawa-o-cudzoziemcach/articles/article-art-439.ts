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
      provisionId: "ustawa-o-cudzoziemcach-art-439",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("439", "Art. 439")} ust. 1: «W wykazie umieszcza się informację o podstawie prawnej i faktycznej wpisu oraz następujące dane cudzoziemca».`,
          sourceLocator: "Art. 439 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Для перевірки запису треба відокремити обов’язкові персональні дані від додаткових даних, які лише можуть бути внесені.",
          sourceLocator: "Art. 439 ust. 1–2",
        },
      ],
      summary:
        "У wykaz зазначають правову і фактичну підставу wpis та основні дані cudzoziemca: ім’я, попередні імена, батьків, дату й місце народження, стать, громадянство, місце проживання та документ.",
      rules: [
        {
          locator: "ust. 1 pkt 1–8",
          explanation:
            "Перелічені дані є обов’язковим змістом wpis разом із підставою правовою та фактичною.",
        },
        {
          locator: "ust. 2 pkt 1–3",
          explanation: foreignersLaw.text`Додатково можна внести інші дані з ${foreignersLaw.article("13", "Art. 13")}, зокрема фото і відбитки, а також копію документа подорожі чи документа особи.`,
        },
      ],
      legalEffect:
        "Стаття визначає склад даних у wykaz і дає основу перевірити їх повноту. Вона не встановлює сама підставу або строк wpis.",
      foreignersCase: foreignersLaw.text`У запиті про власні дані порівняйте ім’я, громадянство, документ і фактичну підставу wpis; помилки або неповноту адресуйте процедурою ${foreignersLaw.article("444", "Art. 444")}.`,
    },
  ],
})
