import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-69",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("69", "Art. 69")} ust. 1–4 зобов’язує konsul звернутися до Szef Urzędu щодо обставин odmowa wiza Schengen за ${foreignersLaw.external("Art. 32", VISA_CODE_URL)} ust. 1 lit. a tiret ii або vi Visa Code для громадян держав, щодо яких потрібна думка польських органів; ust. 2 дає 10 днів, а ust. 3–4 встановлюють консультації.`,
          sourceLocator: "Art. 69 ust. 1–4",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("69", "Art. 69")} ust. 5–7 дозволяє інші запити щодо wiza Schengen або wiza krajowa, встановлює 30-денний строк для спеціальної інформації та 20-денний строк для органів, з мовчазною згодою за ust. 7.`,
          sourceLocator: "Art. 69 ust. 5–7",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("69", "Art. 69")} регулює перевірку безпекових і спеціальних підстав відмови через Szef Urzędu. Обов’язковий запит існує для визначених громадян при wiza Schengen, а в інших випадках konsul може запитувати дані також щодо підстав ${foreignersLaw.article("65", "Art. 65")} і спеціальних освітніх, дослідницьких, стажувальних чи волонтерських віз.`,
      rules: [
        {
          locator: "Art. 69 ust. 1–4",
          explanation: foreignersLaw.text`Konsul звертається через Szef Urzędu; Szef передає інформацію за 10 днів після консультацій із SG, Policja, ABW, AW, MFA та, за потреби, іншим органом. До консультацій діє ${foreignersLaw.article("68", "Art. 68")} ust. 3.`,
        },
        {
          locator: "Art. 69 ust. 5",
          explanation: foreignersLaw.text`В інших випадках konsul може запитати щодо wiza Schengen за ${foreignersLaw.external("Art. 32", VISA_CODE_URL)} ust. 1 lit. a tiret ii або vi, wiza krajowa за ${foreignersLaw.article("65", "Art. 65")} ust. 1 pkt 5 або 8, або за ${foreignersLaw.article("65", "Art. 65")} ust. 1a чи 1c–1e.`,
        },
        {
          locator: "Art. 69 ust. 6–7",
          explanation:
            "Інформація за ust. 5 pkt 3 передається за 30 днів; органи передають потрібні дані за 20 днів, а їх непередання вважається згодою на видачу візи.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("69", "Art. 69")} створює консультаційну процедуру та строки, але сам Szef Urzędu не замінює орган, який приймає рішення про wiza. Відсутність заперечення в межах ust. 7 не дорівнює безумовному праву на візу.`,
      foreignersCase:
        "Перевірте громадянство заявника, підставу запиту, адресатів консультацій і строки 10/20/30 днів; відокремте передану інформацію від decyzja konsul або MFA.",
    },
  ],
})
