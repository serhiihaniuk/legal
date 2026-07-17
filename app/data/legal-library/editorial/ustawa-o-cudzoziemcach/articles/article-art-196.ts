import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-196",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("196", "Art. 196")} вимагає odmowy wszczęcia postępowania про pobyt stały, якщо на день wniosku cudzoziemiec перебуває нелегально або на названих видах візи чи дозволу, затриманий, ув’язнений, має zakaz opuszczania kraju, перебуває після decyzja o zobowiązaniu do powrotu до спливу dobrowolny wyjazd, зобов’язаний виїхати за ${foreignersLaw.article("299", "art. 299")} ust. 6 або перебуває поза Польщею.`,
          sourceLocator: "Art. 196 ust. 1 pkt 1–6",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Окремі винятки стосуються, зокрема, особи з azyl, визначених у статті дітей та особи польського походження; крім того, відмовляють у wszczęciu за неподання odcisków linii papilarnych під час подання або у строк, визначений ${foreignersLaw.article("203", "art. 203")} ust. 5.`,
          sourceLocator: "Art. 196 ust. 2–5",
        },
      ],
      summary:
        "Стаття перелічує перешкоди для початку провадження про pobyt stały та окремі винятки.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Оцінюється стан саме в день подання wniosku; перелік стосується wszczęcia postępowania, а не остаточної оцінки всіх матеріальних умов.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Azyl та спеціальні категорії дітей або osób polskiego pochodzenia обмежують застосування окремих пунктів, але лише в межах тексту статті.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Неподання відбитків під час заяви або у встановлений строк є окремою підставою для odmowa wszczęcia.",
        },
      ],
      legalEffect: foreignersLaw.text`Застосування ${foreignersLaw.article("196", "Art. 196")} може припинити справу до розгляду права на pobyt stały по суті; це не те саме, що odmowa udzielenia zezwolenia за ${foreignersLaw.article("197", "Art. 197")}.`,
      foreignersCase:
        "Зафіксуйте свій статус і місце перебування на дату подання, документи про виняток та виконання вимоги щодо відбитків. У листі органу відокремте wszczęcie від merytoryczna odmowa.",
    },
  ],
})
