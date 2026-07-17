import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-161",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("161", "Art. 161")} ust. 1 передбачає udzielenie zezwolenia після щонайменше 5 років перебування на підставі дозволів для połączenia się z rodziną для подружжя або повнолітньої дитини cudzoziemiec з визначеним статусом; ust. 2 дає окрему підставу через ważny interes після сімейних подій.`,
          sourceLocator: "Art. 161 ust. 1–3",
        },
      ],
      summary:
        "Після п'ятирічного сімейного pobyt або після визначеної сімейної події заявник може перейти на окрему підставу, але має виконати названі вимоги.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: foreignersLaw.text`Подружжя або dorosłe dziecko повинні відповідати ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 2–3 і щонайменше 5 років перебувати на дозволах для połączenia się z rodziną. Статус osoby referencyjnej має походити з перелічених у ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 1 lit. a–g, ha–i; для high-skilled work у lit. h допускається перебування особи referencyjnej в Польщі або іншій державі UE за умовами норми.`,
        },
        {
          locator: "ust. 2 pkt 1–3",
          explanation:
            "Для особи, яка вже має сімейний pobyt, дозвіл надається, якщо важливий інтерес виправдовує його після rozwód, separacja або owdowienie; також після смерті батька-сponsor або смерті małoletnie dziecko зі статусом uchodźca чи ochroną uzupełniającą.",
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`До строку в ust. 1 pkt 1 lit. b і pkt 2 lit. b зараховуються періоди, названі в ${foreignersLaw.article("212", "art. 212")} ust. 1 pkt 1; це спеціальне правило підрахунку, а не автоматичне скасування інших умов.`,
        },
      ],
      legalEffect:
        "Стаття може дати самостійну сімейну підставу після тривалого побytu або важливої події, але не прибирає вимоги щодо доказів і точного статусу osoby referencyjnej.",
      foreignersCase:
        "Порахуйте лише релевантні дозволи для połączenie, перевірте 5-річний період і статус sponsor; для ust. 2 додайте акти про подію та конкретні докази важливого інтересу.",
    },
  ],
})
