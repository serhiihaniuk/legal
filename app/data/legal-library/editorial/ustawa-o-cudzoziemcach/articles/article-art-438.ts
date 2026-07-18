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
      provisionId: "ustawa-o-cudzoziemcach-art-438",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("438", "Art. 438")} ust. 1: «Dane cudzoziemca umieszcza się w wykazie na okres» залежно від правової підстави wpis.`,
          sourceLocator: "Art. 438 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Тривалість і початок wpis залежать від виду рішення, вироку або передачі; не можна застосувати один загальний строк до всіх підстав.",
          sourceLocator: "Art. 438 ust. 1–5",
        },
      ],
      summary:
        "Стаття визначає тривалість wpis до wykaz і момент, від якого вона рахується: від строку zakaz, передачі, виконання decyzja o powrocie, вироку або інших спеціальних підстав; pkt 3 позначений як «uchylony».",
      rules: [
        {
          locator: "ust. 1 pkt 1–7",
          explanation:
            "Для різних підстав передбачені строк із decyzja, 3 роки після передачі до третьої держави, 1 рік після передачі до держави ЄС/EFTA/Швейцарії, строки після karę та строки з міжнародних актів; pkt 3 — «uchylony».",
        },
        {
          locator: "ust. 1 pkt 8–10",
          explanation: foreignersLaw.text`Для безпекових wpis строк не довший 10 років із можливістю продовження; окремі строки встановлені для санкційного списку та рішення ${foreignersLaw.article("440a", "Art. 440a")}.`,
        },
        {
          locator: "ust. 2–5",
          explanation:
            "Початок строку прив’язаний до виконання чи невиконання decyzja, postanowienie або рішення; після спливу відповідного періоду дані видаляються, з окремими правилами корекції та виїзду.",
        },
      ],
      legalEffect:
        "Стаття визначає період, протягом якого wpis може діяти, і dies a quo для різних підстав. Для точного розрахунку потрібен сам документ, вид підстави й інформація про виконання.",
      foreignersCase:
        "Побудуйте таблицю: підстава, документ, дата виконання або остаточності, строк і можливе продовження; окремо перевірте, чи повідомлено про виконання decyzja o powrocie.",
    },
  ],
})
