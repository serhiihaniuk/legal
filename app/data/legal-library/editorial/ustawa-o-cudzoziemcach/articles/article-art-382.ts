import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-382",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До decyzja o zobowiązaniu cudzoziemca do powrotu, виданої органом państwo członkowskie wydające щодо неповнолітнього іноземця, застосовується art. 332.",
          sourceLocator: "Art. 382",
        },
        {
          kind: "practical-inference",
          text: "Зміст гарантії для конкретної справи треба читати разом з art. 332; одного посилання art. 382 недостатньо для висновку про всі наслідки.",
          sourceLocator: "Art. 382 w związku z art. 332",
        },
      ],
      summary:
        "Стаття відсилає до art. 332 для рішення про повернення, виданого іншою державою-членом щодо неповнолітнього іноземця.",
      rules: [
        {
          locator: "Art. 382",
          explanation:
            "Ключовим є статус неповнолітньої особи та наявність рішення państwo członkowskie wydające; далі потрібно застосувати правило art. 332.",
        },
      ],
      legalEffect:
        "Стаття не повторює зміст art. 332, а робить його частиною аналізу виконання такого рішення. Тому висновок залежить від прочитання обох норм.",
      foreignersCase:
        "Підтвердіть вік на відповідний момент, знайдіть текст decyzja і відкрийте art. 332. Не робіть висновок лише з номера art. 382 або з назви документа.",
    },
  ]),
})
