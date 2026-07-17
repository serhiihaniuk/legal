import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-393a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Орган Straż Graniczna передає Szef Urzędu dowody lub poszlaki з załącznik nr 2 до rozporządzenie wykonawcze Komisji UE nr 118/2014 щодо іноземця в Польщі без чинного документа для в’їзду і pobyt, який не просить ochronę międzynarodową, у межах необхідного для визначення відповідальної держави за art. 23–25 rozporządzenie 604/2013.",
          sourceLocator: "Art. 393a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Szef Urzędu проводить провадження для визначення відповідальної państwo członkowskie за art. 20 rozporządzenie 604/2013 і є компетентним у справах art. 24 цього розпорядження, крім справ про zobowiązanie cudzoziemca do powrotu.",
          sourceLocator: "Art. 393a ust. 2–3",
        },
      ],
      summary:
        "Стаття регулює передачу доказів і компетенцію Szef Urzędu для визначення іншої відповідальної держави-члена щодо іноземця без чинних документів, який не подає заяву про міжнародний захист.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Передаються лише dowody lub poszlaki, необхідні для встановлення, чи інша państwo członkowskie є właściwe do wtórnego przejęcia cudzoziemca за art. 23–25 rozporządzenie 604/2013.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Szef Urzędu визначає відповідальну державу та веде названі справи art. 24, але не справи про zobowiązanie do powrotu.",
        },
      ],
      legalEffect:
        "Норма відкриває окремий механізм передачі особи за rozporządzenie 604/2013, а не автоматичне повернення за рішенням про powrót. Результат залежить від доказів і згоди відповідної держави за наступними правилами.",
      foreignersCase:
        "Спочатку встановіть, чи особа не подала заяву про ochronę międzynarodową, який документ відсутній і які докази передано Szef Urzędu. Не змішуйте цю процедуру з рішенням про powrót.",
    },
  ]),
})
