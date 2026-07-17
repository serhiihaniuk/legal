import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "230",
      provisionId: "kpa-art-230",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає орган для skargi на завдання або діяльність organizacji społecznej. Загалом це безпосередньо вищий орган організації, а для її найвищого органу — наглядовий державний орган.",
      rules: [
        {
          locator: "перша частина",
          explanation:
            "Скаргу на organ organizacji społecznej розглядає її organ bezpośrednio wyższego stopnia.",
        },
        {
          locator: "друга частина",
          explanation:
            "Щодо naczelnego organu організації компетентним є Prezes Rady Ministrów або właściwy minister, який здійснює нагляд.",
        },
      ],
      legalEffect:
        "Стаття створює внутрішньо-наглядовий маршрут skargi для суспільних організацій, охоплених розділом.",
      foreignersCase:
        "Це загальне правило з непрямим зв'язком зі sprawami cudzoziemców. Воно застосовується, якщо скарга стосується організації, яка виконує доручене публічне завдання.",
    },
  ],
})
