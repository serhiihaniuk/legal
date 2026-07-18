import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-276",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До скарги про поновлення відповідно застосовують правила першої інстанції, якщо цей розділ не встановлює іншого. Коли компетентним є NSA, відповідно діє вимога професійного складання документа.",
          sourceLocator: "Art. 276",
        },
      ],
      summary:
        "Стаття заповнює процедурні прогалини й установлює додатковий професійний бар’єр для скарги до NSA.",
      rules: [
        {
          locator: "Art. 276",
          explanation:
            "Спершу застосовуйте спеціальні правила поновлення (wznowienie), потім сумісні правила WSA. Якщо справу розглядає NSA, перевірте, хто має право скласти скаргу.",
        },
      ],
      legalEffect:
        "Надзвичайний характер не усуває загальних вимог до процесуального письма й представництва.",
      foreignersCase:
        "Іноземець, чию скаргу про поновлення має розглядати NSA, повинен завчасно залучити адвоката або юридичного радника (adwokat albo radca prawny), якщо не діє виняток.",
    },
  ],
})
