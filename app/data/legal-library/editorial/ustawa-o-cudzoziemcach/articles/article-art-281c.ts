import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const EU_RETURN_DOCUMENT_URL = "https://eur-lex.europa.eu/eli/reg/2016/1953/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-281c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Minister właściwy do spraw wewnętrznych визначає в rozporządzeniu wzór europejskiego dokumentu podróży do celów powrotu.",
          sourceLocator: "Art. 281c zdanie pierwsze",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Форма має враховувати дані й інформацію з ${foreignersLaw.external("art. 3 ust. 1 rozporządzenia (UE) 2016/1953", EU_RETURN_DOCUMENT_URL)} та потребу забезпечити читабельність і повноту документа.`,
          sourceLocator: "Art. 281c zdanie drugie",
        },
      ],
      summary:
        "Стаття делегує міністрові встановлення офіційної форми європейського документа для повернення відповідно до вимог права ЄС.",
      rules: [
        {
          locator: "Art. 281c",
          explanation:
            "Конкретний вигляд і поля документа потрібно перевіряти в чинному rozporządzeniu, а не відтворювати лише з тексту закону.",
        },
      ],
      legalEffect:
        "Норма є підставою для підзаконної форми та задає її мінімальні критерії: дані з rozporządzenia 2016/1953, читабельність і повноту.",
      foreignersCase:
        "Під час перевірки документа порівняйте його з актуальним wzorem у rozporządzeniu та переконайтеся, що всі обов’язкові поля читабельні й заповнені.",
    },
  ],
})
