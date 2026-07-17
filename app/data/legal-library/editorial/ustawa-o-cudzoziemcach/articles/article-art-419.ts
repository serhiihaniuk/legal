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
      provisionId: "ustawa-o-cudzoziemcach-art-419",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("419", "Art. 419")}: «Cudzoziemiec umieszczony w strzeżonym ośrodku lub przebywający w areszcie dla cudzoziemców jest obowiązany przestrzegać regulaminu pobytu w ośrodku lub areszcie».`,
          sourceLocator: "Art. 419 pkt 1",
        },
        {
          kind: "practical-inference",
          text: "Невиконання обов’язку треба оцінювати щодо конкретної дії, часу й правила, а не лише за загальним твердженням про «порушення порядку».",
          sourceLocator: "Art. 419 pkt 1–8",
        },
      ],
      summary:
        "Стаття перелічує обов’язки особи у strzeżony ośrodek або areszt: дотримуватися regulamin, виконувати законні організаційні polecenia, нічної тиші, гігієни та повідомляти про хворобу чи небезпечну подію.",
      rules: [
        {
          locator: "pkt 1–4",
          explanation:
            "Cudzoziemiec дотримується regulamin, виконує polecenia адміністрації або funkcjonariusz, дотримується cisza nocna та zasad współżycia społecznego.",
        },
        {
          locator: "pkt 5–6",
          explanation:
            "Потрібно дбати про osobista higiena, чистоту приміщень і користуватися обладнанням за призначенням.",
        },
        {
          locator: "pkt 7–8",
          explanation:
            "Про симптоми хвороби та небезпечну подію треба негайно повідомити адміністрацію або funkcjonariusz.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття формулює обов’язки перебування для обох режимів. У strzeżony ośrodek їх порушення може бути підставою odpowiedzialność dyscyplinarna за ${foreignersLaw.article("421", "Art. 421")}, але сама ${foreignersLaw.article("419", "Art. 419")} не визначає конкретну karę.`,
      foreignersCase:
        "Попросіть regulamin і записуйте, яке саме polecenie або правило, коли і ким було доведене; про хворобу чи подію повідомляйте без зволікання та зберігайте підтвердження.",
    },
  ],
})
