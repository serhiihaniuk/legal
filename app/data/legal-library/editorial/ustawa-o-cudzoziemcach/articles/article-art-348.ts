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
      provisionId: "ustawa-o-cudzoziemcach-art-348",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("348", "Art. 348")} вимагає udzielenie zgody na pobyt ze względów humanitarnych, якщо повернення до конкретної держави створювало б визначені ризики для прав за Konwencja o ochronie praw człowieka або істотний ризик для прав дитини.`,
          sourceLocator: "Art. 348 pkt 1–3",
        },
      ],
      summary:
        "Гуманітарна згода пов’язана не з загальною складністю повернення, а з конкретною забороною повертати особу до держави, де виникнуть серйозні порушення базових прав.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Ризики охоплюють життя, свободу й особисту безпеку, tortury або нелюдське поводження, примусову працю, відсутність справедливого суду чи покарання без правової підстави.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Підставою може бути порушення права на сімейне або приватне життя за Konwencja o ochronie praw człowieka.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Для дитини враховується істотна загроза її психофізичному розвитку через порушення прав за Konwencja o prawach dziecka.",
        },
      ],
      legalEffect:
        "Норма вимагає оцінки країни повернення та конкретних фактів; посилання на загальну небезпеку без доказу відповідного ризику не гарантує zgoda.",
      foreignersCase: foreignersLaw.text`Зберіть докази саме щодо держави можливого повернення, особистої ситуації, сім’ї та дитини; відокремте ${foreignersLaw.article("348", "Art. 348")} від умов pobyt tolerowany з ${foreignersLaw.article("351", "Art. 351")}.`,
    },
  ],
})
