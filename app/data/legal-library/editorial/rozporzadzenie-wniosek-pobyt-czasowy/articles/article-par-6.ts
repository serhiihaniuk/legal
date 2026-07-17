import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-6",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("6", "§ 6")} для wniosku, поданого способом з ${foreignersLaw.external("art. 106c", "https://eli.gov.pl/eli/DU/2025/1794/ogl")} ust. 1 ustawy, обмежує один електронний файл 10 MB, суму всіх файлів — 50 MB, а цифрові копії паперових документів належної якості вимагає подавати у форматі PDF.`,
          sourceLocator: "§ 6",
        },
      ],
      summary:
        "Положення встановлює межі обсягу та формат електронних документів і цифрових копій для онлайн-подання.",
      rules: [
        {
          locator: "§ 6",
          explanation:
            "Окремий файл не може перевищувати 10 MB, а всі файли разом — 50 MB.",
        },
        {
          locator: "§ 6",
          explanation:
            "Цифрове відтворення паперового документа має бути зроблене старанно і з технічною якістю, що дає змогу без сумнівів прочитати його зміст; формат для такого відтворення — PDF.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.paragraph("6", "§ 6")} визначає спосіб технічного приєднання документів до онлайн-заяви. Він не каже, що сам файл доводить кожну обставину чи автоматично усуває інші вимоги доказування.`,
      foreignersCase:
        "Перед відправленням перевірте розмір кожного файла, загальний ліміт, PDF для сканів і читабельність усіх сторінок. Окремо зберігайте логічний зв’язок кожного документа з даними та обставинами wniosku.",
    },
  ],
})
