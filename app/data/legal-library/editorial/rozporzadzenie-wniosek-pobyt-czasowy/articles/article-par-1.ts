import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-1",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("1", "§ 1")} визначає, що rozporządzenie встановлює wzory formularzy wniosku та załączników, технічні вимоги до fotografii і цифрових документів, кількість фотографій, правила odciski linii papilarnych, передачі даних для картки pobytu, інформацію про відбитки та formularz wzoru podpisu.`,
          sourceLocator: "§ 1 pkt 1–13",
        },
      ],
      summary:
        "Це положення окреслює предмет rozporządzenie: воно стандартизує заяви, додатки та окремі технічні дії у процедурі pobyt czasowy.",
      rules: [
        {
          locator: "pkt 1–5",
          explanation: regulationLaw.text`Визначено wzory основного wniosku, його załączników, спеціальних wniosków за ${foreignersLaw.article("106k", "art. 106k")} і ${foreignersLaw.article("106l", "art. 106l")} ustawy та formularza zgody за ${foreignersLaw.article("106l", "art. 106l")} ust. 3.`,
        },
        {
          locator: "pkt 6–9",
          explanation:
            "Встановлено вимоги до фотографії, її подання онлайн, кількості фотографій для окремих заяв з-за меж Польщі та подання електронних документів або цифрових копій.",
        },
        {
          locator: "pkt 10–13",
          explanation:
            "Описано pobieranie odcisków linii papilarnych, запис і передачу даних для персоналізації карти pobytu, formularz інформації про відбитки та formularz wzoru podpisu.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.paragraph("1", "§ 1")} дає технічну рамку подання і персоналізації документів. Сам по собі він не встановлює матеріальних умов надання zezwolenia na pobyt czasowy.`,
      foreignersCase:
        "У справі спочатку відокремте вимоги до форми, файлів, фотографії, відбитків і підпису від доказів cel pobytu та інших умов zezwolenia. Назва потрібного formularza не означає, що дозвіл буде надано.",
    },
  ],
})
