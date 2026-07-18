import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-285g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Після вручення скарги іншій стороні, а при поданні Генеральним прокурором (Prokurator Generalny) або Омбудсманом (RPO) — обом сторонам, WSA невідкладно передає матеріали справи до NSA.",
          sourceLocator: "Art. 285g",
        },
      ],
      summary:
        "Стаття описує технічний перехід від суду першої інстанції до суду, який розглядає скаргу.",
      rules: [
        {
          locator: "Art. 285g",
          explanation:
            "Перевірте належне вручення всім адресатам і момент передання матеріалів. WSA не вирішує незаконність по суті.",
        },
      ],
      legalEffect:
        "Після виконання вручень компетенція розгляду переходить до NSA разом із повними матеріалами.",
      foreignersCase:
        "У справі іноземця повідомляйте NSA про зміну адреси й стежте за врученнями, бо основний розгляд буде письмовим.",
    },
  ],
})
