import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-242",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У межах наданого звільнення судові видатки за сторону тимчасово покриває бюджет адміністративного суду.",
          sourceLocator: "Art. 242",
        },
      ],
      summary:
        "Стаття пояснює, звідки фінансують потрібну дію, коли сторона законно не платить.",
      rules: [
        {
          locator: "Art. 242",
          explanation:
            "Перевірте точний обсяг звільнення: бюджет покриває лише ту частину видатків (wydatki), від якої сторону звільнено.",
        },
      ],
      legalEffect:
        "Звільнення дозволяє виконати процесуальну дію без авансу сторони в установленій межі.",
      foreignersCase:
        "Якщо іноземцеві надано часткове звільнення, не припускайте, що бюджет покриє весь переклад або інший видаток.",
    },
  ],
})
