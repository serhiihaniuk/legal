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
      provisionId: "ustawa-o-cudzoziemcach-art-215",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("215", "Art. 215")} передбачає cofnięcie zezwolenia na pobyt rezydenta długoterminowego UE, зокрема коли дозвіл набуто незаконно, cudzoziemiec становить rzeczywiste i poważne zagrożenie, залишив Польщу понад 6 років або територію ЄС послідовно на 12 місяців (чи на 24 місяці для названого висококваліфікованого pobytu та члена його сім’ї), отримав такий дозвіл в іншій державі-члені UE чи втратив status uchodźcy або ochronę uzupełniającą, якщо дозвіл було пов’язано з цим захистом.`,
          sourceLocator: "Art. 215 ust. 1 pkt 1–6",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`У справах про cofnięcie через ${foreignersLaw.article("215", "Art. 215")} ust. 1 pkt 2 враховують тривалість pobytu в Польщі, вік, зв’язки з Польщею або відсутність зв’язків із państwo pochodzenia та наслідки cofnięcia для cudzoziemca і його сім’ї; на ці zagrożenia не можна посилатися в celach gospodarczych.`,
          sourceLocator: "Art. 215 ust. 2–3",
        },
      ],
      summary:
        "Стаття визначає підстави cofnięcia zezwolenia na pobyt rezydenta długoterminowego UE та окремі фактори, які треба врахувати при посиланні на загрозу безпеці або porządek publiczny.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Незаконне набуття дозволу та rzeczywiste i poważne zagrożenie є окремими підставами; для загрози стаття не дозволяє використовувати мотиви лише економічного характеру.",
        },
        {
          locator: "ust. 1 pkt 3–5",
          explanation:
            "Перевіряйте точні строки залишення території RP або UE: понад 6 років для RP, 12 послідовних місяців для UE або 24 місяці для названого висококваліфікованого pobytu та члена його сім’ї; також перевіряйте наявність дозволу rezydenta długoterminowego UE в іншій державі-члені.",
        },
        {
          locator: "ust. 1 pkt 6; ust. 3",
          explanation:
            "Pkt 6 пов’язаний із втратою status uchodźcy або ochrony uzupełniającej лише за умовою, названою в статті. При pkt 2 окремо оцінюються особисті та сімейні обставини.",
        },
      ],
      legalEffect: foreignersLaw.text`Встановлена конкретна обставина з ${foreignersLaw.article("215", "Art. 215")} може вести до cofnięcia дозволу, але стаття вимагає зіставити факти з відповідним пунктом; для pkt 2 перелічені фактори мають увійти до оцінки справи.`,
      foreignersCase: foreignersLaw.text`Зберіть рішення про надання дозволу, документи про виїзди з RP та UE, дані про інші дозволи або захист і докази сімейних зв’язків та наслідків cofnięcia. У рішенні перевірте, який саме pkt ${foreignersLaw.article("215", "Art. 215")} застосовано.`,
    },
  ],
})
