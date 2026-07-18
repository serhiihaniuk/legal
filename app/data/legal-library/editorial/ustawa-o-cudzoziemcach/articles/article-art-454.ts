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
      provisionId: "ustawa-o-cudzoziemcach-art-454",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("454", "Art. 454")} встановлює письмове powiadomienie Szef Urzędu про zgoda на надання даних через urządzenia telekomunikacyjne та її zakres; odmowa zgody або cofnięcie zgody відбуваються у формі decyzja. Для wniosek за ${foreignersLaw.article("453", "Art. 453")} ust. 2 повідомлення та рішення адресуються podmiot składający wniosek із зазначенням або охопленням відповідних суб’єктів, а decyzja про cofnięcie підлягає natychmiastowemu wykonaniu.`,
          sourceLocator: "Art. 454 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає, як Szef Urzędu повідомляє про згоду на дистанційне надання даних, як оформлює відмову або відкликання та що відбувається зі спільним wniosek.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Про zgoda та zakres udostępnienia Szef Urzędu повідомляє podmiot з ${foreignersLaw.article("450", "Art. 450")} письмово. Відмова у згоді або її cofnięcie оформлюються decyzja.`,
        },
        {
          locator: "ust. 1a–1b",
          explanation: foreignersLaw.text`Якщо wniosek подано за ${foreignersLaw.article("453", "Art. 453")} ust. 2, про zgoda повідомляють podmiot składający wniosek із переліком усіх суб’єктів, яким надаються дані; decyzja про odmowa doręcza się цьому заявнику.`,
        },
        {
          locator: "ust. 1c–2",
          explanation:
            "При cofnięcie у спільній заяві decyzja визначає, яких суб’єктів воно стосується, і вручається заявнику, який має невідкладно повідомити цих суб’єктів. Decyzja про cofnięcie підлягає негайному виконанню.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття визначає форму комунікації та процесуальний наслідок odmowa або cofnięcie zgody, але не замінює умови доступу з ${foreignersLaw.article("453", "Art. 453")}. Негайне виконання прямо встановлено лише для decyzja про cofnięcie згода.`,
      foreignersCase:
        "У матеріалах справи знайдіть письмове powiadomienie або decyzja, визначте zakres udostępnienia та адресата; при спільному wniosek перевірте перелік суб’єктів і доказ їхнього повідомлення про cofnięcie.",
    },
  ],
})
