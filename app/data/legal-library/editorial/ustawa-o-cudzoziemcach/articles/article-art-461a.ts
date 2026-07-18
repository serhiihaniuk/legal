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
      provisionId: "ustawa-o-cudzoziemcach-art-461a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("461a", "Art. 461a")} вимагає, щоб прийняття до pomieszczenie для cudzoziemców, яким odmówiono wjazdu, ґрунтувалося на рішенні з ${foreignersLaw.article("461", "Art. 461")} ust. 1 pkt 1; при прийнятті особу інформують зрозумілою мовою про права й обов’язки та ознайомлюють із regulamin pobytu, а факт pouczenie вона підтверджує власноручним підписом.`,
          sourceLocator: "Art. 461a ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "У випадках, обґрунтованих обставинами, прийнятого cudzoziemca піддають badanie lekarskie та zabiegi sanitarne.",
          sourceLocator: "Art. 461a ust. 3",
        },
      ],
      summary:
        "Стаття встановлює передумову прийняття до приміщення для осіб, яким odmówiono wjazdu, і мінімальні дії під час прийняття: зрозуміле pouczenie, ознайомлення з regulamin та, коли це обґрунтовано, медичні й санітарні заходи.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Підставою прийняття є саме decyzja, про яку йдеться в ${foreignersLaw.article("461", "Art. 461")} ust. 1 pkt 1.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Pouczenie про права й обов’язки та ознайомлення з regulamin pobytu мають бути зрозумілими для cudzoziemca; підпис підтверджує факт pouczenie.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Badanie lekarskie і zabiegi sanitarne проводяться у випадках, які обґрунтовують їх проведення; стаття не робить їх безумовною дією в кожному прийнятті.",
        },
      ],
      legalEffect:
        "Норма пов’язує фактичне прийняття з конкретною decyzja та вимагає документованого інформування. Підпис підтверджує факт pouczenie, але з наведеного тексту не випливає відмова від прав чи автоматичне підтвердження законності рішення.",
      foreignersCase: foreignersLaw.text`Попросіть копію decyzja з ${foreignersLaw.article("461", "Art. 461")} ust. 1 pkt 1, regulamin і запис про мову та підпис pouczenie; якщо були медичні чи санітарні заходи, перевірте, чи зафіксовано обставини, що їх обґрунтовували.`,
    },
  ],
})
