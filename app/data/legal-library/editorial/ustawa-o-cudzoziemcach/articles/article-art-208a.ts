import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-208a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо дані cudzoziemca внесені до SIS для цілей ${foreignersLaw.external("art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860, wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультацію чи повідомляє державу, що внесла дані, залежно від того, чи супроводжувалося рішення zakaz ponownego wjazdu.`,
          sourceLocator: "Art. 208a pkt 1–3",
        },
      ],
      summary:
        "Стаття розрізняє консультацію та повідомлення іншої держави залежно від SIS-запису і наявності заборони повторного в’їзду.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`За рішенням із zakaz ponownego wjazdu орган звертається про консультацію за ${foreignersLaw.external("art. 9", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860.`,
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Якщо заборона повторного в’їзду супроводжує рішення, орган повідомляє про наданий pobyt stały; якщо заборони немає, повідомляє про намір надати або про надання pobyt stały за відповідним SIS-сценарієм.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("208a", "Art. 208a")} встановлює координацію з державою, що внесла SIS-дані, але не замінює оцінку умов pobyt stały та рішення компетентного органу.`,
      foreignersCase:
        "Уточніть мету SIS-запису та наявність zakaz ponownego wjazdu, після чого перевірте, чи орган обрав консультацію або повідомлення за правильним пунктом.",
    },
  ],
})
