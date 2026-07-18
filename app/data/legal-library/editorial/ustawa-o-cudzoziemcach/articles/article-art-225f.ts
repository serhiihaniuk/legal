import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-225f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для заяви про pobyt czasowy Baza Wstępna MOS обробляє визначені дані іноземця, інформацію з ${foreignersLaw.article("106", "Art. 106")}, дані з документів за ${foreignersLaw.article("106d", "Art. 106d")} ust. 2 та метадані електронних підписів заяви й названих додатків.`,
          sourceLocator: "Art. 225f pkt 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для заяви про pobyt stały база обробляє визначені дані іноземця й подружжя, інформацію з ${foreignersLaw.article("203", "Art. 203")}, дані з документів за ${foreignersLaw.article("203d", "Art. 203d")} ust. 2 та метадані підпису заяви.`,
          sourceLocator: "Art. 225f pkt 2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для заяви про rezydenta długoterminowego UE база обробляє визначені дані іноземця, інформацію з ${foreignersLaw.article("219", "Art. 219")} ust. 1 pkt 2–10, дані з документів за ${foreignersLaw.article("219d", "Art. 219d")} ust. 2 та метадані підпису заяви.`,
          sourceLocator: "Art. 225f pkt 3",
        },
      ],
      summary:
        "Стаття перелічує дані, які Baza Wstępna MOS обробляє для первинної перевірки кожного з трьох видів електронних заяв.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Для pobytu czasowego обсяг охоплює не лише формуляр і документи, а й метадані підписів окремих додатків, прямо названих у ${foreignersLaw.article("106", "Art. 106")}.`,
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Для pobytu stałego та rezydenta długoterminowego UE набори даних різняться відсиланнями, документами й обсягом метаданих підпису.",
        },
      ],
      legalEffect:
        "Baza Wstępna може обробляти лише категорії, пов’язані з відповідним видом заяви та прямо названими документами й підписами.",
      foreignersCase:
        "Під час перевірки конкретного запису визначте вид заяви, джерельний документ і підпис, метадані якого обробляються. Не змішуйте перелік Bazy Wstępnej з даними постійного реєстру справ.",
    },
  ],
})
