import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-391",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Витрати на виконання рішення про повернення, виданого państwo wydające, несе іноземець; якщо він не сплачує, Komendant Główny просить цю державу повернути витрати. До сплати або повернення вони покриваються з державного бюджету Польщі, а витрати іншої держави на виконання польського рішення покриває польський бюджет.",
          sourceLocator: "Art. 391 ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Тимчасове фінансування з бюджету не означає автоматичного звільнення іноземця від обов’язку, названого в ust. 1.",
          sourceLocator: "Art. 391 ust. 1–3",
        },
      ],
      summary:
        "Стаття розподіляє витрати на виконання іноземного рішення про повернення між іноземцем, państwo wydające та польським бюджетом як тимчасовим платником.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Основний обов’язок щодо витрат лежить на іноземцеві; за несплати Komendant Główny звертається до państwo wydające, а до повернення кошти авансує польський бюджет.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Витрати органів іншої держави-члена, понесені під час виконання рішення польського komendant oddziału або placówki, покриваються з польського бюджету.",
        },
      ],
      legalEffect:
        "Норма створює одночасно фінансовий обов’язок іноземця та механізм міждержавного відшкодування. Фактичний розрахунок витрат треба відокремлювати від самого рішення про повернення.",
      foreignersCase:
        "Попросіть розрахунок витрат, їх правову підставу та відомості про оплату або запит до іншої держави. Не робіть висновок про суму лише з факту doprowadzenie.",
    },
  ]),
})
