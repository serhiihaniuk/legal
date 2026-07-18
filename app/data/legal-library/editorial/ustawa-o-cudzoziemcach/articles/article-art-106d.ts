import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-106d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106d", "Art. 106d")} пов’язує подання wniosku з трьома елементами: належними електронними załącznikami, правильними електронними підписами та urzędowym poświadczeniem odbioru (UPO). Заява вважається поданою лише тоді, коли виконано вимоги до підписів і заявник або його належний представник отримав UPO.`,
          sourceLocator: "Art. 106d ust. 1–7",
        },
      ],
      summary:
        "Стаття пояснює, коли електронна підготовка перетворюється на юридично подану заяву. Саме натискання кнопки чи завантаження документів ще не доводить цього моменту.",
      rules: [
        {
          locator: "Art. 106d ust. 1–2",
          explanation:
            "Обов’язково додаються за потрібною метою pobytu załączniki, актуальна фотографія та цифрові копії всіх сторін чинного документа подорожі або допустимого документа тотожності. Інші докази можна додати як електронні документи чи цифрові копії паперових документів.",
        },
        {
          locator: "Art. 106d ust. 3–4",
          explanation:
            "Wniosek і відповідні załączniki підписують особи, прямо названі в законі, за допомогою kwalifikowanego podpisu elektronicznego, podpisu zaufanego, а в окремих випадках також podpisu osobistego. Підпис заявника не замінює підпису суб’єкта, який заповнює свій załącznik.",
        },
        {
          locator: "Art. 106d ust. 5–7",
          explanation:
            "MOS автоматично створює UPO. Для встановлення дати подання перевіряйте разом належний підпис і отримання UPO; wojewoda має забезпечити допомогу під час подання.",
        },
      ],
      legalEffect:
        "Якщо бракує належного підпису або UPO, закон не дозволяє вважати wniosek поданим. Це може вплинути на дату подання та пов’язані з нею наслідки для pobytu.",
      foreignersCase:
        "Збережіть UPO, перевірте спосіб підпису кожного załącznika й звірте, чи завантажено всі сторінки документа, а не лише сторінку з персональними даними. Пізніше орган може вимагати оригінали доданих доказів.",
    },
  ],
})
