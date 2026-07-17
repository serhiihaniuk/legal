import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-24",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("24", "Art. 24")} встановлює, що zezwolenie na pracę wygasa z mocy prawa в день udzielenia cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego UE або pobyt stały, а також zezwolenia na pobyt czasowy з ${foreignersLaw.article("114", "art. 114")} ust. 1, ${foreignersLaw.article("126", "art. 126")} ust. 1 і 3 або ${foreignersLaw.article("127", "art. 127")} ustawy o cudzoziemcach, якщо воно стосується роботи у того самого polski podmiot і на тому самому stanowisko.`,
          sourceLocator: "Art. 24 pkt 1–2",
        },
      ],
      summary:
        "Вичерпання дозволу відбувається автоматично лише в прямо названих ситуаціях надання іншого статусу або pobyt. Для тимчасового pobyt важлива тотожність podmiot і stanowisko, названих у статті.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Надання zezwolenie na pobyt rezydenta długoterminowego UE або zezwolenie na pobyt stały запускає wygaśnięcie чинного zezwolenie na pracę z mocy prawa.",
        },
        {
          locator: "pkt 2",
          explanation: workLaw.text`Те саме стосується лише zezwolenie na pobyt czasowy з ${foreignersLaw.article("114", "art. 114")} ust. 1, ${foreignersLaw.article("126", "art. 126")} ust. 1 і 3 або ${foreignersLaw.article("127", "art. 127")} ustawy o cudzoziemcach, коли воно пов'язане з роботою у того самого polski podmiot і на тому самому stanowisko.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("24", "Art. 24")} стосується припинення zezwolenie na pracę, а не автоматичного продовження чи скасування всіх прав pobyt. Новий документ pobyt треба читати разом із його власними умовами доступу до роботи.`,
      foreignersCase:
        "Зіставте дату udzielenia нового pobyt із даними podmiot і stanowisko у старому zezwolenie. Після цієї дати не посилайтеся на старий дозвіл; перевірте, яке саме uprawnienie do pracy випливає з нового документа.",
    },
  ],
})
