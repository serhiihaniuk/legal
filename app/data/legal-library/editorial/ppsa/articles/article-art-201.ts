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
      provisionId: "ppsa-art-201",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Zwrot kosztów przysługuje skarżącemu od organu także przy umorzeniu postępowania z przyczyny określonej w ${ppsaLaw.article("54", "art. 54 § 3")}. Przy umorzeniu w przypadku ${ppsaLaw.article("118", "art. 118 § 2")} ${ppsaLaw.article("206", "art. 206")} stosuje się odpowiednio.`,
          sourceLocator: "Art. 201 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Nie każde umorzenie ma taki sam skutek kosztowy: ${ppsaLaw.article("201", "art. 201")} wskazuje dwa szczególne odesłania i ich różne konsekwencje.`,
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Najpierw ustal, czy umorzenie nastąpiło z przyczyny ${ppsaLaw.article("54", "art. 54 § 3")}, bo wtedy przepis przyznaje skarżącemu zwrot od organu.`,
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Przy ${ppsaLaw.article("118", "art. 118 § 2")} wynik kosztowy ocenia się przez odpowiednie zastosowanie ${ppsaLaw.article("206", "art. 206")}, a nie przez automatyczny zwrot.`,
        },
      ],
      legalEffect:
        "Słowo umorzenie samo nie rozstrzyga o kosztach; potrzebna jest dokładna podstawa prawna wskazana w postanowieniu.",
      foreignersCase:
        "Jeśli organ zmienił swoje rozstrzygnięcie w sprawie pobytowej i sąd umorzył sprawę, odczytaj podstawę umorzenia przed żądaniem zwrotu kosztów.",
    },
  ],
})
