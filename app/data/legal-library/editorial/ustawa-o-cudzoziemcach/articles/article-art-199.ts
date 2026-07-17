import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-199",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("199", "Art. 199")} передбачає cofnięcie zezwolenia na pobyt stały через оборону або безпеку держави, porządek publiczny, interes RP, неправдиві дані чи документи, неправдиві свідчення або підроблення, остаточний вирок у Польщі за умисний злочин із карою щонайменше 3 роки або залишення Польщі понад 6 років.`,
          sourceLocator: "Art. 199 ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для окремих категорій ${foreignersLaw.article("195", "Art. 195")} діють спеціальні підстави; дозвіл, наданий через шлюб з obywatel polski, може бути відкликано, якщо розлучення відбулося протягом 2 років від дня надання дозволу. Для встановлення обставин pkt 3 не застосовується ${kpaLaw.article("79", "art. 79")} KPA.`,
          sourceLocator: "Art. 199 ust. 2–4",
        },
      ],
      summary:
        "Стаття визначає підстави відкликання pobyt stały, включно з окремим правилом про розлучення після дозволу на підставі шлюбу.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Cofnięcie потребує встановлення обставини, передбаченої конкретним пунктом; строк понад 6 років стосується залишення території Польщі.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Для osoby polskiego pochodzenia, osoby pozbawionej azyl та громадянина UK застосовуються лише названі спеціальні пункти; правило про розлучення має 2-річну межу.",
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`У частині встановлення неправди або підроблення діє спеціальне виключення з ${kpaLaw.article("79", "art. 79")} KPA.`,
        },
      ],
      legalEffect:
        "Cofnięcie є окремим рішенням після надання дозволу; воно не випливає лише з підозри без встановлення законної підстави.",
      foreignersCase: foreignersLaw.text`Порівняйте повідомлені факти з pkt ${foreignersLaw.article("199", "Art. 199")}, датами виїздів, вироком або документами справи та надайте пояснення щодо винятків; для шлюбу перевірте дату дозволу й дату розлучення.`,
    },
  ],
})
