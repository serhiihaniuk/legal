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
      provisionId: "ustawa-o-cudzoziemcach-art-162",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("162", "Art. 162")} встановлює строк дії сімейних та mobility-дозволів: до 1 року для випадку ${foreignersLaw.article("158a", "art. 158a")}, до строку документа osoby referencyjnej або максимум 3 років за ${foreignersLaw.article("159", "art. 159")}, до строку документа представника дитини, одноразово до 3 років у ${foreignersLaw.article("161", "art. 161")} ust. 2 і до строку дозволу дослідника за ${foreignersLaw.article("161b", "art. 161b")} ust. 1.`,
          sourceLocator: "Art. 162 ust. 1–4",
        },
      ],
      summary:
        "Строк не є довільним: він прямо прив'язаний до виду сімейної підстави та строку документа osoby referencyjnej або naukowiec.",
      rules: [
        {
          locator: "ust. 1–1a",
          explanation: foreignersLaw.text`За ${foreignersLaw.article("158a", "art. 158a")} дозвіл надається до 1 року. За ${foreignersLaw.article("159", "art. 159")} ust. 1 — до закінчення тимчасового дозволу osoby referencyjnej, а коли вона має pobyt stały, pobyt rezydenta długoterminowego UE, ochronę uzupełniającą, zgoda na pobyt ze względów humanitarnych або status uchodźca в Польщі — до 3 років.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Дозвіл за ${foreignersLaw.article("160", "art. 160")} pkt 2 діє до закінчення national visa або pobyt czasowy, наданих przedstawiciel ustawowy дитини.`,
        },
        {
          locator: "ust. 3–4",
          explanation: foreignersLaw.text`У випадку ${foreignersLaw.article("161", "art. 161")} ust. 2 дозвіл надається одноразово до 3 років. Дозвіл за ${foreignersLaw.article("161b", "art. 161b")} ust. 1 діє до закінчення дозволу на mobility długoterminowa відповідного naukowiec.`,
        },
      ],
      legalEffect:
        "Позитивне рішення не може надати строк, довший за межу, визначену для конкретної підстави та пов'язаного документа.",
      foreignersCase: foreignersLaw.text`Перед поданням випишіть дату закінчення документа osoby referencyjnej або naukowiec, статус підстави і можливий максимум; не просіть строк, який перевищує ${foreignersLaw.article("162", "art. 162")}.`,
    },
  ],
})
