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
      provisionId: "ppsa-art-220",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Sąd nie podejmuje czynności na skutek nieopłaconego pisma; co do zasady przewodniczący wzywa do uiszczenia opłaty w siedem dni pod rygorem pozostawienia pisma bez rozpoznania, a przy piśmie osoby mieszkającej lub mającej siedzibę za granicą bez krajowego przedstawiciela termin nie może być krótszy niż dwa miesiące. Nieuiszczenie wpisu po wezwaniu powoduje odrzucenie skargi, skargi kasacyjnej, zażalenia lub skargi o wznowienie; ${ppsaLaw.article("220", "§ 3a")} dotyczy elektronicznej opłaty z ${ppsaLaw.article("235a", "art. 235a")}, a ${ppsaLaw.article("220", "§ 4")} zwalnia z wpisu określone zażalenia.`,
          sourceLocator: "Art. 220 § 1–4",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("220", "Art. 220")} rozróżnia pozostawienie pisma bez rozpoznania od odrzucenia środków z ${ppsaLaw.article("220", "§ 3–3a")}, określa wezwanie i szczególny termin dla osoby bez przedstawiciela w kraju.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Zapisz doręczenie wezwania i siedem dni, a przy osobie z zagranicy bez krajowego przedstawiciela sprawdź termin niekrótszy niż dwa miesiące.",
        },
        {
          locator: "§ 3–4",
          explanation: ppsaLaw.text`Po bezskutecznym wezwaniu wskazane środki podlegają odrzuceniu; osobno sprawdź elektroniczną opłatę z ${ppsaLaw.article("235a", "art. 235a")} i brak wpisu od zażaleń wymienionych w ${ppsaLaw.article("220", "§ 4")}.`,
        },
      ],
      legalEffect: ppsaLaw.text`Skutek zależy od rodzaju pisma, opłaty i wezwania; samo wysłanie pisma nie zapewnia jego rozpoznania, ale nie wolno też pomijać szczególnego terminu z ${ppsaLaw.article("220", "§ 2")}.`,
      foreignersCase:
        "Cudzoziemiec mieszkający za granicą bez przedstawiciela w Polsce powinien sprawdzić, czy wezwanie daje co najmniej dwa miesiące. Przy skardze lub kasacji odrzucony wpis po wezwaniu może zakończyć środek procesowy.",
    },
  ],
})
