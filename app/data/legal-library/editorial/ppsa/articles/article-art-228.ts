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
      provisionId: "ppsa-art-228",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("228", "Art. 228")} визначає, що grzywny, присуджені у провадженні перед sądem administracyjnym, є доходами budżet państwa поряд із kosztami sądowymi та підлягають egzekucji sądowej без nadawania orzeczeniu klauzuli wykonalności.`,
          sourceLocator: "Art. 228",
        },
      ],
      summary:
        "Присуджені адміністративним судом grzywny надходять до budżet państwa і можуть примусово стягуватися без окремої klauzula wykonalności.",
      rules: [
        {
          locator: "Art. 228",
          explanation:
            "Відрізняйте grzywna від самих kosztów sądowych: стаття визначає їх бюджетний статус і спосіб egzekucja.",
        },
      ],
      legalEffect:
        "Стаття визначає фінансовий статус і виконання grzywny; вона не є самостійною підставою для накладення конкретного штрафу.",
      foreignersCase:
        "Якщо в судовій справі іноземця винесено grzywna, прочитайте окреме orzeczenie та його підставу; відсутність klauzula wykonalności не означає відсутності обов’язку.",
    },
  ],
})
