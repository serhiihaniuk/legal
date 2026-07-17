import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-9",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("9", "§ 9")} визначає, що rozporządzenie набирає чинності в день, зазначений у komunikat, виданому за ${regulationLaw.external("art. 17", "https://eli.gov.pl/eli/DU/2025/1794/ogl")} ustawy від 21 листопада 2025 р.; попереднє rozporządzenie від 25 листопада 2025 р. (Dz. U. poz. 1647) втрачає силу з днем набрання чинності нового.`,
          sourceLocator: "§ 9 та przypis 2",
        },
      ],
      summary:
        "Положення пов’язує початок дії нового розпорядження з окремим komunikat і описує втрату чинності попереднього розпорядження.",
      rules: [
        {
          locator: "§ 9",
          explanation: regulationLaw.text`Конкретний день набрання чинності визначається не самим текстом ${regulationLaw.paragraph("9", "§ 9")}, а днем, указаним у komunikat за ${regulationLaw.external("art. 17", "https://eli.gov.pl/eli/DU/2025/1794/ogl")} відповідної amending ustawa.`,
        },
        {
          locator: "przypis 2",
          explanation: regulationLaw.text`Попереднє rozporządzenie MSWiA від 25 листопада 2025 р. втрачає силу з днем набрання чинності нового згідно з ${regulationLaw.external("art. 18", "https://eli.gov.pl/eli/DU/2025/1794/ogl")} ust. 1 pkt 1 amending ustawa.`,
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.paragraph("9", "§ 9")} встановлює перехід між двома wzory нормативного регулювання, але без тексту komunikat не дає підстав називати конкретну календарну дату набрання чинності.`,
      foreignersCase:
        "Для конкретного wniosku звірте дату подання, чинний komunikat і застосовну редакцію formularza. Не покладайтеся лише на дату видання Dz. U.; попередній wzór застосовується за правилами переходу, а не за назвою справи.",
    },
  ],
})
