import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "263a",
      provisionId: "kpa-art-263a",
      reviewStatus: "reviewed",
      summary:
        "Норма уповноважує міністра адміністрації визначити в розпорядженні винагороду медіатора і витрати, що йому відшкодовуються. При цьому мають ураховуватися вид справи, ефективність медіації та необхідні витрати.",
      rules: [
        {
          locator: "делегація",
          explanation:
            "Minister właściwy do spraw administracji publicznej визначає розмір wynagrodzenia mediatora та zwracanych wydatków у drodze rozporządzenia.",
        },
        {
          locator: "критерії",
          explanation:
            "Регулювання має враховувати rodzaj sprawy, sprawny przebieg mediacji та необхідні витрати, пов'язані з її проведенням.",
        },
      ],
      legalEffect:
        "Конкретні суми медіаційних витрат установлюються виконавчим актом, а не довільно органом у кожній справі.",
      foreignersCase: kpaLaw.text`Якщо у справі іноземця фактично проводилася mediacja, розмір винагороди й відшкодування медіатора потрібно звіряти з чинним розпорядженням на підставі ${kpaLaw.article("263a", "art. 263a")}.`,
    },
  ],
})
