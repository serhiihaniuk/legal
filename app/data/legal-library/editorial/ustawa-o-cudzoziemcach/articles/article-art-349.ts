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
      provisionId: "ustawa-o-cudzoziemcach-art-349",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("349", "Art. 349")} зобов’язує відмовити у zgoda na pobyt ze względów humanitarnych за серйозних підстав щодо міжнародних злочинів, певних злочинів, загрози безпеці або участі в таких діях; в одному випадку відмова є fakultatywna.`,
          sourceLocator: "Art. 349 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Навіть за обставин ${foreignersLaw.article("348", "Art. 348")} гуманітарну згоду не надають, коли наявні визначені законом серйозні безпекові або кримінальні підстави.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Обов’язкова відмова охоплює міжнародні злочини, дії проти цілей і принципів ООН та злочин за польським правом або дію, яка є злочином за польським правом.",
        },
        {
          locator: "ust. 1 pkt 4–5",
          explanation:
            "Також відмовляють за загрозу оборонності, безпеці держави або громадському порядку чи за підбурювання/участь у названих злочинах.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Інший злочин, вчинений до приїзду, може бути підставою відмови, якщо особа виїхала з країни лише для уникнення покарання; тут закон формулює можливість, а не автоматизм.",
        },
      ],
      legalEffect:
        "Відмова потребує встановлення фактичних підстав і належного порогу доказування; сама підозра без оцінки матеріалів не замінює рішення органу.",
      foreignersCase: foreignersLaw.text`Перевірте, який саме пункт ${foreignersLaw.article("349", "Art. 349")} наведено, чи йдеться про обов’язкову або можливу відмову та які докази орган поклав в основу висновку.`,
    },
  ],
})
