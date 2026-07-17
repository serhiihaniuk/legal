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
      article: "79a",
      provisionId: "kpa-art-79a",
      reviewStatus: "reviewed",
      summary:
        "Стаття зобов’язує organ перед завершенням провадження на вимогу сторони вказати, які залежні від неї умови не виконані або не доведені та можуть спричинити рішення всупереч її żądaniu.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Разом із повідомленням про право wypowiedzenia się щодо доказів organ називає niespełnione або niewykazane przesłanki zależne od strony, які можуть привести до decyzji niezgodnej z jej żądaniem; діють винятки ${kpaLaw.article("10", "art. 10 § 2–3")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "У встановлений строк на wypowiedzenie się сторона може подати додаткові докази для підтвердження вказаних przesłanek.",
        },
      ],
      legalEffect:
        "Сторона отримує останню процесуальну можливість доповнити матеріал щодо конкретних залежних від неї умов до негативного рішення.",
      foreignersCase:
        "У справі про pobyt organ має конкретно назвати недоведені залежні від іноземця przesłanki, а не обмежуватися загальною фразою про неповні документи.",
    },
  ],
})
