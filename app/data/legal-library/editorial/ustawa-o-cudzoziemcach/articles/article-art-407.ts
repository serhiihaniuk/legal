import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-407",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Іноземцю належить від Skarb Państwa odszkodowanie та zadośćuczynienie у разі несправедливого zatrzymanie, umieszczenie в strzeżony ośrodek або застосування areszt dla cudzoziemców.",
          sourceLocator: "Art. 407 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Провадження у таких справах ведеться на підставі положень Kodeks postępowania karnego про компенсацію за несправедливе засудження, tymczasowe aresztowanie або zatrzymanie.",
          sourceLocator: "Art. 407 ust. 2",
        },
      ],
      summary:
        "Стаття передбачає вимогу про odszkodowanie та zadośćuczynienie від держави за несправедливе позбавлення свободи в названих формах.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібно встановити, що zatrzymanie, strzeżony ośrodek або areszt були несправедливими; стаття називає два види відшкодування.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Процедуру треба шукати у відповідних положеннях KPK, на які прямо відсилає art. 407.",
        },
      ],
      legalEffect:
        "Норма відкриває спеціальний шлях до фінансової компенсації та відшкодування немайнової шкоди, але сама не встановлює автоматичної виплати або її розміру.",
      foreignersCase:
        "Зберіть postanowienie, протоколи часу zatrzymanie, рішення про zwolnienie, докази матеріальної та немайнової шкоди і перевірте процесуальні вимоги KPK.",
    },
  ]),
})
