import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-292",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 292 вимагає, щоб funkcjonariusz розпочинав контроль після пред’явлення legitymacji służbowej або znaku identyfikacyjnego, а pracownik — після називання імені та прізвища і пред’явлення upoważnienia; upoważnienie повинно містити перелічені в ust. 3 дані.",
          sourceLocator: "Art. 292 ust. 1–3",
        },
      ],
      summary:
        "Стаття описує спосіб представлення funkcjonariusza або pracownika та обов’язковий зміст письмового upoważnienia.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Для funkcjonariusz перевіряється службове посвідчення або знак, для pracownik — особа та upoważnienie.",
        },
        {
          locator: "ust. 3 pkt 1–7",
          explanation:
            "Upoważnienie має містити правову підставу, орган, дату і місце, дані працівника, предметний обсяг, строк чинності та підпис уповноваженої особи з посадою.",
        },
      ],
      legalEffect:
        "Це процесуальні гарантії ідентифікації та визначення обсягу контролю; вони не скасовують обов’язків іноземця за іншими нормами.",
      foreignersCase:
        "Запишіть дані особи, що проводить контроль, і звірте upoważnienie з його обсягом, строком дії та названою правовою підставою.",
    },
  ]),
})
