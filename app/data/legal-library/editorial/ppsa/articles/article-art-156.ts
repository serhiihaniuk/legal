import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-156",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Sąd може з urzędu виправити у wyrok неточності, помилки письма або рахунку чи інші очевидні omyłki; це може бути постановлено на posiedzenie niejawnym із позначкою на оригіналі та копіях. У corpus для ${ppsaLaw.article("156", "§ 2a")} наведено дві редакції: чинну на дату стану з електронною wzmianka, підписаною kwalifikowany podpis elektroniczny, і редакцію, що набуде чинності 1 жовтня 2029 року.`,
          sourceLocator: "Art. 156 § 1–3, przypisy 53–55",
        },
      ],
      summary: ppsaLaw.text`Стаття регулює виправлення очевидних технічних помилок у wyrok і фіксацію такого sprostowanie, включно з описаною в corpus перехідною редакцією ${ppsaLaw.article("156", "§ 2a")}.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Йдеться про niedokładności, błędy або очевидні omyłki; рішення про sprostowanie може бути на posiedzenie niejawnym і має бути відображене в копіях.",
        },
        {
          locator: "§ 2a, przypisy 54–55",
          explanation: ppsaLaw.text`Не змішуйте дві версії електронного оформлення: перша редакція ${ppsaLaw.article("156", "§ 2a")} діє до набрання чинності зміною, а друга набуде чинності 1.10.2029; на legalStateDate 2026-07-14 застосовується перша.`,
        },
        {
          locator: "§ 3",
          explanation:
            "NSA може з urzędu виправити wyrok першої інстанції, якщо справа перебуває перед ним.",
        },
      ],
      legalEffect:
        "Sprostowanie стосується очевидної неточності чи помилки та не повинно без перевірки сприйматися як нове вирішення спору по суті.",
      foreignersCase:
        "Якщо у wyrok щодо pobyt помилково зазначено дані або арифметику, порівняйте оригінал і odpis та перевірте можливість sprostowanie. Редакцію електронної форми звіряйте з датою та примітками corpus.",
    },
  ],
})
