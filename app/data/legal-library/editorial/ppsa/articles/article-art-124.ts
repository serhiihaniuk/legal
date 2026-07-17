import { createLegalTextAuthor, type LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

type Rule = { locator: string; explanation: LegalTextValue }

type ProvisionId = EditorialEntry<"ppsa">["provisionId"]

/**
 * This part was checked against the promoted local PPSA corpus
 * `ppsa-2026-143` (Dz.U. 2026 poz. 143), whose articles 85–129 are active.
 * The claim is a compact Ukrainian rendering of the statutory rule; Polish
 * procedural terms are retained so that the learner can match the source.
 */
function reviewed(
  provisionId: ProvisionId,
  claim: LegalTextValue,
  summary: LegalTextValue,
  rules: readonly Rule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry<"ppsa"> {
  return {
    provisionId,
    reviewStatus: "reviewed",
    claims: [
      {
        kind: "statute-text",
        text: claim,
        sourceLocator: `Art. ${provisionId.slice("ppsa-art-".length)}`,
      },
    ],
    summary,
    rules,
    legalEffect,
    foreignersCase,
  }
}
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    reviewed(
      "ppsa-art-124",
      ppsaLaw.text`Sąd зобов’язаний zawiesić postępowanie з urzędu у випадках, названих у ${ppsaLaw.article("124", "§ 1")}, зокрема смерті або втрати zdolność сторони, недоліків органів юридичної особи, неподоланної відсутності зв’язку, upadłość, правового питання до TK або TSUE та припинення zarząd sukcesyjny; ${ppsaLaw.article("124", "§ 4")} додає випадок на wniosek BFG.`,
      ppsaLaw.text`${ppsaLaw.article("124", "Art. 124")} перелічує обов’язкові підстави zawieszenie з urzędu та спеціальне zawieszenie на wniosek Bankowy Fundusz Gwarancyjny.`,
      [
        {
          locator: "§ 1 pkt 1–4",
          explanation:
            "Перевірте смерть або втрату процесуальної/судової здатності, неможливість дії органів jednostka organizacyjna, втрату зв’язку з sąd через надзвичайні події та upadłość щодо предмета masy upadłości.",
        },
        {
          locator: "§ 1 pkt 5–7",
          explanation: ppsaLaw.text`Підставами також є передання pytanie prawne TK або TSUE, випадок ${ppsaLaw.article("56", "Art. 56")} та припинення функції або zarząd sukcesyjny.`,
        },
        {
          locator: "§ 2–3",
          explanation: ppsaLaw.text`Для ${ppsaLaw.article("124", "§ 1 pkt 1, 4 і 7")} zawieszenie діє від події; подія після zamknięcie rozprawy не зупиняє видання orzeczenie. Після смерті провадження не зупиняють, якщо предмет стосується лише прав, тісно пов’язаних з померлим.`,
        },
        {
          locator: "§ 4",
          explanation:
            "На wniosek BFG sąd zawiesza справу сторони в restrukturyzacja, коли це необхідно для prawidłowe prowadzenie przymusowej restrukturyzacji.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("124", "Art. 124")} зупиняє рух справи лише за конкретною статутною підставою; зупинення не є вирішенням законності адміністративної decyzja.`,
      ppsaLaw.text`У справі cudzoziemca перевірте, чи подія справді відповідає конкретному пункту ${ppsaLaw.article("124", "§ 1")}, дату її настання та умови podjęcie; не переносіть правила про смерть сторони на звичайну зміну адреси.`
    ),
  ],
})
