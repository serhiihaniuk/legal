import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-197",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("197", "Art. 197")} передбачає odmowę udzielenia zezwolenia na pobyt stały, якщо не виконано ${foreignersLaw.article("195", "art. 195")} або існує запис у wykazie osób niepożądanych чи SIS для odmowa wjazdu i pobytu, або цього вимагають оборона, безпека, porządek publiczny чи interes Rzeczypospolitej Polskiej.`,
          sourceLocator: "Art. 197 ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: "Окремими підставами є шлюб для обходу міграційних правил, неправдиві дані чи документи, неправдиві свідчення або підроблення, податкова заборгованість без передбаченого звільнення чи відстрочки та неповернення витрат на рішення про повернення; для окремих категорій стаття звужує перелік підстав.",
          sourceLocator: "Art. 197 ust. 1 pkt 6–9, ust. 2–4",
        },
      ],
      summary:
        "Стаття визначає матеріальні підстави відмови у pobyt stały та спеціальні обмеження для окремих категорій.",
      rules: [
        {
          locator: "ust. 1 pkt 1–6",
          explanation: foreignersLaw.text`Перевіряйте кожну підставу окремо: невиконання ${foreignersLaw.article("195", "Art. 195")}, записи SIS або wykaz, безпека, interes RP та шлюб із метою обходу правил мають різний предмет доказування.`,
        },
        {
          locator: "ust. 1 pkt 7–9",
          explanation:
            "Неправда, podatki та витрати на powrót оцінюються лише за фактичними обставинами й винятками, прямо названими в статті.",
        },
        {
          locator: "ust. 2–4",
          explanation: foreignersLaw.text`Для osoby polskiego pochodzenia, osoby z azyl та визначеного громадянина UK діють спеціальні переліки; для pkt 7 не застосовується ${kpaLaw.article("79", "art. 79")} KPA.`,
        },
      ],
      legalEffect: foreignersLaw.text`Навіть виконання умов ${foreignersLaw.article("195", "Art. 195")} не виключає обов’язкової відмови за ${foreignersLaw.article("197", "Art. 197")}, якщо орган встановить відповідну законну обставину.`,
      foreignersCase: foreignersLaw.text`У рішенні позначте конкретний pkt ${foreignersLaw.article("197", "Art. 197")}, перевірте докази органу та застосовний спеціальний режим заявника; не замінюйте аналіз мотивів загальним посиланням на безпеку або SIS.`,
    },
  ],
})
