import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-72a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("72a", "Art. 72a")} регулює дані SIS, внесені для цілей ${foreignersLaw.external("Art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenie nr 2018/1860: через Komendant Główny Policji organ консультується, повідомляє про рішення або повідомляє про zamiar/видачу залежно від того, чи супроводжується рішення państwa zakaz ponownego wjazdu.`,
          sourceLocator: "Art. 72a pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: "Ключовою є відмінність між SIS-записом із zakaz ponownego wjazdu і без нього; різні підпункти передбачають різні інформаційні дії.",
          sourceLocator: "Art. 72a pkt 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("72a", "Art. 72a")} встановлює три сценарії комунікації щодо SIS-даних, пов’язаних із рішеннями про повернення: консультація при zakaz ponownego wjazdu, повідомлення про рішення при такій забороні та повідомлення про намір або факт видачі, коли заборони немає.`,
      rules: [
        {
          locator: "Art. 72a pkt 1",
          explanation: foreignersLaw.text`Якщо запис пов’язаний із рішенням іншої держави з zakaz ponownego wjazdu, MFA або konsul просить цю державу провести консультацію за ${foreignersLaw.external("Art. 9", SIS_2018_1860_URL)} ust. 1 rozporządzenie nr 2018/1860.`,
        },
        {
          locator: "Art. 72a pkt 2–3",
          explanation:
            "При забороні орган повідомляє про рішення щодо wiza krajowa; без заборони повідомляє про zamiar wydania або про її видачу.",
        },
      ],
      legalEffect:
        "Норма визначає міждержавні повідомлення й консультації, а не саму матеріальну оцінку візи. Вона не усуває інших підстав odmowa.",
      foreignersCase:
        "Отримайте дані про правову підставу SIS-запису та наявність zakaz ponownego wjazdu, потім перевірте, чи орган виконав правильну дію за pkt 1, 2 або 3.",
    },
  ],
})
