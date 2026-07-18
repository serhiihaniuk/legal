import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-296",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 296 вимагає, щоб за встановленої невідповідності pobytu правилам в’їзду або перебування funkcjonariusz або pracownik склав protokół kontroli; за відповідності правилу funkcjonariusz записує факт у notatnik służbowy або складає notatka służbowa, а pracownik складає notatka służbowa. Орган Policji, Szef Urzędu, wojewoda або орган Krajowej Administracji Skarbowej повідомляє компетентного komendant oddziału або placówki Straży Granicznej про невідповідність.",
          sourceLocator: "Art. 296 ust. 1–2",
        },
      ],
      summary:
        "Стаття розрізняє документування негативного і позитивного результату kontroli legalności pobytu та передбачає повідомлення Straż Graniczna про порушення.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "За встановленої невідповідності складається protokół kontroli legalności pobytu.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "За відповідності правилам funkcjonariusz записує факт у notatnik służbowy або складає notatka służbowa, а pracownik складає notatka służbowa.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Орган Policji, Szef Urzędu, wojewoda або орган KAS повідомляє відповідного komendant Straży Granicznej про встановлену невідповідність.",
        },
      ],
      legalEffect:
        "Результат контролю переходить у визначений статтею документ і, за негативного результату, повідомлення; остаточні наслідки потребують окремої правової оцінки.",
      foreignersCase:
        "Попросіть назвати результат контролю і з’ясуйте, чи складено protokół або notatka; збережіть копії та перевірте фактичні підстави висновку про невідповідність.",
    },
  ]),
})
