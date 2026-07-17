import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-214a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо дані cudzoziemca внесені до SIS для odmowa wjazdu i pobytu, під час оцінки ${foreignersLaw.article("214", "Art. 214")} ust. 1 pkt 2 враховують причини рішення держави, що внесла запис, і zagrożenia з ${foreignersLaw.external("art. 27", SIS_2018_1861_URL)} lit. d rozporządzenia nr 2018/1861.`,
          sourceLocator: "Art. 214a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації з державою, що внесла запис, і повідомляє її про рішення або намір надати zezwolenia na pobyt rezydenta długoterminowego UE.",
          sourceLocator: "Art. 214a ust. 2 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальну оцінку та консультації при SIS-записі під час заяви на rezydent długoterminowy UE.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "SIS-запис треба розглядати разом із причинами рішення іншої держави та конкретними zagrożenia регламенту, а не як автоматичну відмову без аналізу.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Консультація і повідомлення проводяться через Komendant Główny Policji компетентним органом відповідної інстанції.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("214a", "Art. 214a")} визначає спосіб міжнародної перевірки безпекової підстави ${foreignersLaw.article("214", "Art. 214")} і не скасовує перевірку решти умов ${foreignersLaw.article("211", "Art. 211")}.`,
      foreignersCase:
        "Попросіть конкретизувати SIS-джерело та причини запису, перевірте проведення консультацій і подайте докази, релевантні оцінці реального ризику та іншим умовам статусу.",
    },
  ],
})
