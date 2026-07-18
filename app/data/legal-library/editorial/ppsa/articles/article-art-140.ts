import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-140",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Стороні без adwokat, radca prawny, doradca podatkowy або rzecznik patentowy, присутній при ogłoszenie wyroku, przewodniczący дає вказівки щодо строку і способу wniesienia środka odwoławczego; для позбавленої волі відсутньої сторони odpis sentencji з pouczeniem надсилається з urzędu протягом тижня, а для wyrok на posiedzenie niejawnym таке pouczenie додається під час doręczenie, якщо сторона не має названого професійного представника.",
          sourceLocator: "Art. 140 § 1–3",
        },
      ],
      summary:
        "Норма пов’язує процесуальні вказівки про оскарження з присутністю, способом винесення wyrok та відсутністю професійного представника.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Порівнюйте фактичну присутність сторони на ogłoszenie і наявність представника з переліком у статті.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для позбавленої волі сторони або wyrok на posiedzenie niejawnym перевірте odpis sentencji та долучене pouczenie.",
        },
      ],
      legalEffect:
        "Стаття передбачає обов’язок надати певне pouczenie в названих ситуаціях, але не замінює перевірку допустимості й строку конкретного środka odwoławczego.",
      foreignersCase:
        "Якщо іноземець бере участь у справі без adwokat чи radca prawny, перевірте, чи отримав він потрібне pouczenie разом із sentencja та коли саме його вручено.",
    },
  ],
})
