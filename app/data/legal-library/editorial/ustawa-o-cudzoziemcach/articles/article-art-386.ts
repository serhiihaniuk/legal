import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-386",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Рішення про повернення, видане organem wydającego państwa członkowskiego, не підлягає wykonaniu в Польщі в перелічених законом випадках: під час postępowanie про ochronę międzynarodową; postępowanie про zgoda na pobyt tolerowany або визначені zezwolenia; перебування на спеціальній wiza Schengen чи zaświadczenie art. 170, наявності вже наданого дозволу або захисту, захищеного законом шлюбу, позбавлення свободи чи zakaz opuszczania kraju; або коли organ państwo wydające не передав документи про wykonalność чи не підтвердив готовність повернути витрати.",
          sourceLocator: "Art. 386 pkt 1–7",
        },
        {
          kind: "statute-text",
          text: "До переліку входить, зокрема, перебування за візою Schengen, яка дозволяє лише в’їзд до Польщі для цілі з art. 60 ust. 1 pkt 23, та перебування на підставі zaświadczenie з art. 170.",
          sourceLocator: "Art. 386 pkt 3 lit. a–b",
        },
      ],
      summary:
        "Стаття містить перелік обставин, за яких остаточне рішення іншої держави-члена не виконується в Польщі.",
      rules: [
        {
          locator: "pkt 1–4",
          explanation:
            "Перевіряються postępowanie про ochronę międzynarodową; postępowanie про zgoda na pobyt tolerowany або zezwolenia з art. 176, art. 181 ust. 1, art. 187 pkt 6 або 7; спеціальна wiza Schengen для art. 60 ust. 1 pkt 23 або zaświadczenie art. 170, а також уже надані zezwolenia na pobyt, status uchodźcy, ochrona uzupełniająca, zgoda na pobyt ze względów humanitarnych чи zgoda na pobyt tolerowany.",
        },
        {
          locator: "pkt 5–6",
          explanation:
            "Окремо враховуються шлюб із громадянином Польщі або особою з постійним статусом за передбачених умов та фактичне позбавлення свободи чи zakaz opuszczania kraju.",
        },
        {
          locator: "pkt 7",
          explanation:
            "Виконання також не відбувається, коли państwo wydające не передало документи про подальшу wykonalność рішення або не підтвердило готовність повернути витрати.",
        },
      ],
      legalEffect:
        "За наявності однієї з прямо названих обставин рішення не підлягає виконанню в цьому механізмі. Це не слід автоматично трактувати як скасування самого рішення іншої держави.",
      foreignersCase:
        "Перевірте кожен пункт art. 386 окремо: статус pobyt, сімейні обставини, провадження, свободу, документи та підтвердження витрат. Для кожної підстави потрібен власний доказ, а не лише усне пояснення.",
    },
  ]),
})
