import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-127",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("127", "Art. 127")} вимагає для zezwolenia na pobyt czasowy у zawodzie wymagającym wysokich kwalifikacji сукупного виконання умов ${foreignersLaw.article("127", "art. 127")} pkt 1 lit. a–d (lit. e є uchylona), pkt 2 і pkt 3: щодо договору, кваліфікацій, страхування, виду професії та wynagrodzenie.`,
          sourceLocator: "Art. 127 pkt 1 lit. a–e, pkt 2–3",
        },
      ],
      summary:
        "Blue Card-підстава пов’язана з роботою у zawodzie wymagającym wysokich kwalifikacji та з одночасним виконанням усіх названих умов.",
      rules: [
        {
          locator: "pkt 1 lit. a–d",
          explanation:
            "Потрібен договір щонайменше на 6 місяців, formalne kwalifikacje та інші умови для zawód regulowany або wyższe kwalifikacje zawodowe для нерегульованої професії, а також ubezpieczenie zdrowotne чи підтвердження покриття лікування. Lit. e позначена як uchylona і не містить чинної умови.",
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Робота не повинна бути у zawodzie з переліку, про який говорить ${workLaw.article("31", "art. 31")} ust. 3 ustawy про умови допуску доручення роботи cudzoziemcom.`,
        },
        {
          locator: "pkt 3",
          explanation:
            "Річна brutto-винагорода за договором не може бути нижчою за 150% kwoty przeciętnego wynagrodzenia за попередній рік, визначеної у статті.",
        },
      ],
      legalEffect:
        "Якщо хоча б одна сукупна умова не підтверджена, з цього тексту не випливає право на zezwolenie; конкретну оцінку робить орган у справі.",
      foreignersCase:
        "Зіставте договір, кваліфікації, страховку, професію та річну brutto-винагороду з кожною умовою окремо, не підміняючи перевірку назвою посади.",
    },
  ],
})
