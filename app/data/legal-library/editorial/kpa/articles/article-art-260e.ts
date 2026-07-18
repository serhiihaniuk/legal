import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "260e",
      provisionId: "kpa-art-260e",
      reviewStatus: "reviewed",
      summary:
        "Стаття розподіляє витрати європейської адміністративної допомоги. Спочатку застосовуються правила ЄС, а за їх відсутності кожний польський орган несе витрати власних дій.",
      rules: [
        {
          locator: "перше речення",
          explanation: "Koszty udzielenia pomocy регулює право ЄС.",
        },
        {
          locator: "друге речення",
          explanation:
            "Якщо європейських правил немає, польський орган сам несе витрати своєї діяльності.",
        },
      ],
      legalEffect:
        "Без окремої норми ЄС орган не перекладає свої витрати співпраці на інший орган за правилами цього розділу.",
      foreignersCase:
        "Це міжорганне фінансове правило з непрямим зв'язком зі справою іноземця. Воно саме по собі не встановлює для іноземця оплати за транскордонний запит.",
    },
  ],
})
