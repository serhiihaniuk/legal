import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-9",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("9", "§ 9")} визначає, що rozporządzenie набирає чинності в день, зазначений у komunikat, виданому за ${regulationLaw.external("art. 17", "https://eli.gov.pl/eli/DU/2025/1794/ogl")} ustawy від 21 листопада 2025 р.`,
          sourceLocator: "§ 9",
        },
        {
          kind: "official-guidance",
          text: regulationLaw.text`${regulationLaw.external("Metryka ELI Dz.U. 2026 poz. 553", "https://eli.gov.pl/eli/DU/2026/553/ogl")} вказує дату wejścia w życie: 2026-04-27.`,
          sourceLocator:
            "ELI: https://eli.gov.pl/eli/DU/2026/553/ogl; metadata: entryIntoForce",
        },
      ],
      summary:
        "Положення пов’язує початок дії нового розпорядження з окремим komunikat; за офіційним ELI акт діє з 2026-04-27 і з цього дня замінює попередній wzór.",
      rules: [
        {
          locator: "§ 9",
          explanation: regulationLaw.text`Сам текст положення визначає механізм: конкретний день набрання чинності встановлюється через komunikat за ${regulationLaw.external("art. 17", "https://eli.gov.pl/eli/DU/2025/1794/ogl")} ustawy zmieniającej.`,
        },
        {
          locator: "metryka ELI",
          explanation: regulationLaw.text`${regulationLaw.external("Офіційний ELI", "https://eli.gov.pl/eli/DU/2026/553/ogl")} окремо вказує для цього акта дату wejścia w życie 2026-04-27.`,
        },
        {
          locator: "przypis 2",
          explanation: regulationLaw.text`Попереднє rozporządzenie MSWiA від 25 листопада 2025 р. втрачає силу з днем набрання чинності нового згідно з ${regulationLaw.external("art. 18", "https://eli.gov.pl/eli/DU/2025/1794/ogl")} ust. 1 pkt 1 ustawy zmieniającej.`,
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.paragraph("9", "§ 9")} встановлює перехід між двома wzory нормативного регулювання. Після офіційно зазначеної дати 2026-04-27 потрібно користуватися wzory з Dz.U. 2026 poz. 553, а не попереднім розпорядженням.`,
      foreignersCase:
        "Для конкретного wniosku звірте дату подання з 2026-04-27 і застосовною редакцією formularza. Якщо комплект готувався на старому wzorze, окремо перевірте, чи подання відбулося вже після набрання чинності нового rozporządzenia.",
    },
  ],
})
