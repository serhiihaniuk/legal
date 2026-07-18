import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-188",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Задовольняючи касаційну скаргу й скасовуючи рішення, NSA сам розглядає первісну скаргу, якщо вважає суть справи достатньо з’ясованою.",
          sourceLocator: "Art. 188",
        },
      ],
      summary:
        "Стаття дозволяє уникнути повернення до WSA, коли матеріал уже достатній для рішення.",
      rules: [
        {
          locator: "Art. 188",
          explanation:
            "Ключове питання — чи з’ясовано саме суть спору настільки, щоб NSA міг розглянути скаргу без нового провадження в першій інстанції.",
        },
      ],
      legalEffect:
        "NSA вирішує судову скаргу, а не перебирає компетенцію адміністративного органу видавати дозвіл.",
      foreignersCase:
        "У справі про перебування навіть прямий розгляд NSA може завершитися скасуванням акта або іншим судовим наслідком, але не обов’язково позитивним адміністративним рішенням.",
    },
  ],
})
