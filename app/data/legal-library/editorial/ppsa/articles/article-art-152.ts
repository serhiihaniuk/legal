import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-152",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо skarga на akt або czynność задоволено, вони не викликають skutki prawne до набрання wyrok законної сили, якщо суд не постановить інакше; це не стосується aktów prawa miejscowego.",
          sourceLocator: "Art. 152 § 1–2",
        },
      ],
      summary:
        "Стаття визначає тимчасовий наслідок задоволення skarga для akt або czynność до uprawomocnienie wyrok і робить виняток для актів місцевого права.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте, чи skarga задоволена і чи суд не встановив інше; за базовим правилом skutki prawne не настають до prawomocność.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Для akt prawa miejscowego правило ${ppsaLaw.article("152", "§ 1")} не застосовується.`,
        },
      ],
      legalEffect:
        "Наслідок залежить від виду предмета та формулювання wyrok; не можна без перевірки поширювати його на кожен документ адміністрації.",
      foreignersCase:
        "У спорі щодо акта, який впливає на pobyt або інше право іноземця, перевірте sentencja, вид akt та момент prawomocność. Не припускайте автоматичної зупинки всіх наслідків decyzja.",
    },
  ],
})
