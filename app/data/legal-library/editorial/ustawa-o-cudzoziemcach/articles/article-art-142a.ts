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
      provisionId: "ustawa-o-cudzoziemcach-art-142a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("142a", "Art. 142a")} дозволяє ministrowi właściwemu do spraw wewnętrznych у porozumieniu з ministrem właściwym do spraw pracy та ministrem właściwym do spraw gospodarki встановити rozporządzeniem річний limit дозволів у ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
          sourceLocator: "Art. 142a ust. 1",
        },
        {
          kind: "statute-text",
          text: "При встановленні limit враховуються потреби ринку праці, безпека й порядок та принцип komplementarności zatrudnienia cudzoziemców; досягнення limit оголошується в Monitor Polski.",
          sourceLocator: "Art. 142a ust. 2–3",
        },
      ],
      summary: foreignersLaw.text`Стаття створює делегацію для річних лімітів лише щодо дозволів у ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Rozporządzenie може диференціювати limit за województwo, професіями, видами договорів або видами діяльності podmiot.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Під час нормотворення міністр враховує потреби rynku pracy, wzglědy bezpieczeństwa państwa i porządku publicznego та komplementarność zatrudnienia cudzoziemców.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Досягнення limit у конкретному році оголошується minister у Monitor Polski шляхом obwieszczenie.",
        },
      ],
      legalEffect: foreignersLaw.text`Сам ${foreignersLaw.article("142a", "art. 142a")} не встановлює числа limit; юридично значущі чинне rozporządzenie та офіційне obwieszczenie.`,
      foreignersCase: foreignersLaw.text`Уточніть, чи справа підпадає під ${foreignersLaw.article("142", "art. 142")} ust. 3, знайдіть чинне rozporządzenie для відповідного року й перевірте офіційне оголошення про досягнення limit.`,
    },
  ],
})
