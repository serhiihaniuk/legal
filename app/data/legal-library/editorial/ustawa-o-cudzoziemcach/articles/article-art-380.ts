import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-380",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Органи Straż Graniczna виконують ostateczna decyzja o zobowiązaniu cudzoziemca do powrotu, видану органом państwo członkowskie wydające, яке застосовує dyrektywa 2001/40/WE, коли є серйозна й актуальна загроза publiczny porządek або bezpieczeństwo narodowe чи порушено правила в’їзду або pobyt цієї держави.",
          sourceLocator: "Art. 380 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Для загрози publiczny porządek або bezpieczeństwo narodowe стаття називає, зокрема, засудження за злочин із покаранням щонайменше один рік або обґрунтовану підозру чи намір такого злочину в państwo członkowskie wydające.",
          sourceLocator: "Art. 380 pkt 1 lit. a–b",
        },
      ],
      summary:
        "Стаття визначає умови виконання Польщею остаточного рішення про повернення, виданого органом іншої держави-члена, яка застосовує dyrektywa 2001/40/WE.",
      rules: [
        {
          locator: "pkt 1 lit. a–b",
          explanation:
            "Потрібна серйозна й актуальна загроза для publiczny porządek або bezpieczeństwo narodowe, пов’язана із засудженням або обґрунтованою підозрою чи наміром злочину з порогом щонайменше один рік.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Окремою підставою є порушення правил państwo członkowskie wydające щодо в’їзду або pobyt іноземців.",
        },
      ],
      legalEffect:
        "Норма відкриває спеціальний механізм виконання іноземного остаточного рішення, але лише в межах названого państwo członkowskie wydające та статтею визначених підстав.",
      foreignersCase:
        "Перевірте остаточність рішення, державу, яка його видала, конкретну підставу art. 380 і документи, що її підтверджують. Не виходьте з того, що будь-яке рішення іншої держави-члена автоматично виконується в Польщі.",
    },
  ]),
})
