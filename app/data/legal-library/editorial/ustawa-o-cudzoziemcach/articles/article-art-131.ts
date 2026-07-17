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
      provisionId: "ustawa-o-cudzoziemcach-art-131",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("131", "Art. 131")}, poza випадками ${foreignersLaw.article("99", "art. 99")} ust. 1 pkt 1–3 і 5–10 та ust. 1a, передбачає odmowa wszczęcia postępowania про zezwolenie за ${foreignersLaw.article("127", "art. 127")}, якщо на день wniosku cudzoziemiec має названий статус, візу або модель роботи.`,
          sourceLocator:
            "Art. 131 (wprowadzenie do wyliczenia), pkt 1, 1a–4, 6–8 (pkt 5 uchylony)",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає бар’єри саме для wszczęcie postępowania про zezwolenie за ${foreignersLaw.article("127", "art. 127")}, з установленими в ній винятками ${foreignersLaw.article("99", "art. 99")}.`,
      rules: [
        {
          locator: "wprowadzenie do wyliczenia, pkt 1, 1a–4",
          explanation: foreignersLaw.text`З урахуванням винятків ${foreignersLaw.article("99", "art. 99")}, до переліку належать ubieganie się або наявність zezwolenia за ${foreignersLaw.article("151", "art. 151")} (pkt 1) чи ${foreignersLaw.article("151b", "art. 151b")} (pkt 1a), тимчасове відрядження з іншої держави ЄС (pkt 2), перебування на підставі міжнародних зобов’язань (pkt 3) та zezwolenie за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3 lit. a (pkt 4).`,
        },
        {
          locator: "pkt 5",
          explanation:
            "Pkt 5 має позначку «(uchylony)» і не містить чинної підстави odmowa wszczęcia.",
        },
        {
          locator: "pkt 6–8",
          explanation: foreignersLaw.text`Окремо названо перебування на візі для цілей ${foreignersLaw.article("60", "art. 60")} ust. 1 pkt 1 або 2, туристичну чи гостьову візу іншої держави Schengen, а також pobyt tolerowany, гуманітарний, azyl або ochrona czasowa.`,
        },
      ],
      legalEffect:
        "За умовами статті орган не розпочинає це провадження, але застосування залежить від точного статусу на день подання та винятків, на які посилається текст.",
      foreignersCase: foreignersLaw.text`На дату заяви зафіксуйте підставу перебування, візу та інші подані заяви/zezwolenia; не плутайте odmowa wszczęcia з оцінкою всіх матеріальних умов ${foreignersLaw.article("127", "art. 127")}.`,
    },
  ],
})
