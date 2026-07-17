import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-214",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli ustawa nie stanowi inaczej, koszty sądowe uiszcza ten, kto wnosi do sądu pismo podlegające opłacie lub powodujące wydatki. Pismo kilku osób o wspólnych uprawnieniach lub obowiązkach podlega jednej opłacie; w przeciwnym razie każda osoba uiszcza opłatę oddzielnie stosownie do swojego uprawnienia lub obowiązku.",
          sourceLocator: "Art. 214 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("214", "Art. 214")} wskazuje podstawowego płatnika i rozdziela jedną albo odrębne opłaty przy piśmie wniesionym przez kilka osób.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Co do zasady płaci wnoszący pismo, chyba że inna ustawa przewiduje wyjątek; dotyczy to opłaty albo pisma powodującego wydatek.",
        },
        {
          locator: "§ 2",
          explanation:
            "Wspólne uprawnienia lub obowiązki oznaczają jedną opłatę, a brak wspólności — opłatę każdej osoby według jej zakresu.",
        },
      ],
      legalEffect:
        "Przepis ustala obowiązek uiszczenia, lecz nie rozstrzyga zwolnienia ani ostatecznego zwrotu kosztów; te kwestie wymagają osobnej podstawy.",
      foreignersCase:
        "Przy wspólnej skardze członków rodziny ustal, czy ich uprawnienia lub obowiązki wobec zaskarżenia są wspólne. Od tego zależy jedna albo odrębne opłaty.",
    },
  ],
})
