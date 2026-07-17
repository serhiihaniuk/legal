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
      provisionId: "ustawa-o-cudzoziemcach-art-137a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("137a", "Art. 137a")} визначає умови zezwolenia na pobyt czasowy для mobilność długoterminowa posiadacza Niebieskiej Karty UE: мету висококваліфікованої роботи, договір від 6 місяців, документ з adnotacją «Niebieska Karta UE» іншої держави ЄС, безпосереднє попереднє перебування на його підставі, ubezpieczenie та wynagrodzenie не нижче 150% середньої зарплати.`,
          sourceLocator: "Art. 137a ust. 1 pkt 1 lit. a–d, pkt 2",
        },
      ],
      summary:
        "Дозвіл для довгострокової мобільності вимагає висококваліфікованої роботи в Польщі та сукупного виконання умов щодо попереднього документа і праці.",
      rules: [
        {
          locator: "ust. 1 pkt 1 lit. a–d",
          explanation:
            "Потрібні договір щонайменше на 6 місяців (lit. a), formalne kwalifikacje та інші умови для zawód regulowany (lit. b), документ pobytowy іншої держави ЄС з adnotacją «Niebieska Karta UE» і безпосереднє перебування перед в’їздом на його підставі щонайменше 12 місяців або 6 місяців mobilność długoterminowa (lit. c), а також ubezpieczenie zdrowotne або підтвердження покриття лікування (lit. d).",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Річна brutto-винагорода за договором має бути не нижчою за 150% kwoty przeciętnego wynagrodzenia за попередній рік.",
        },
      ],
      legalEffect:
        "Стаття описує спеціальну підставу pobyt для довгострокової мобільності; наявність документа іншої держави сама не доводить виконання всіх інших умов.",
      foreignersCase:
        "Перевірте історію перебування з Niebieska Karta UE, строк договору, страховку, кваліфікації та річну brutto-винагороду окремими доказами.",
    },
  ],
})
