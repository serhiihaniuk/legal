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
      provisionId: "ustawa-o-cudzoziemcach-art-137c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("137c", "Art. 137c")} передбачає відмову у наданні zezwolenia за ${foreignersLaw.article("137a", "art. 137a")} у випадках ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9.`,
          sourceLocator: "Art. 137c",
        },
      ],
      summary:
        "Стаття відсилає до конкретних підстав odmowa udzielenia для дозволу довгострокової мобільності.",
      rules: [
        {
          locator: "Art. 137c",
          explanation: foreignersLaw.text`Для оцінки заяви потрібно перевірити обставини, перелічені у вказаних пунктах ${foreignersLaw.article("100", "art. 100")} ust. 1.`,
        },
      ],
      legalEffect: foreignersLaw.text`Норма не переписує зміст ${foreignersLaw.article("100", "art. 100")}; вона робить його названі пункти підставами відмови для ${foreignersLaw.article("137a", "art. 137a")}.`,
      foreignersCase: foreignersLaw.text`Якщо орган посилається на ${foreignersLaw.article("137c", "Art. 137c")}, зіставте конкретну фактичну обставину з точним пунктом ${foreignersLaw.article("100", "art. 100")}, а не лише з номером статті.`,
    },
  ],
})
