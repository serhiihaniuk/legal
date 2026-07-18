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
      provisionId: "ustawa-o-cudzoziemcach-art-219d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До електронної заяви додають актуальну фотографію, цифрові копії всіх сторін чинного документа подорожі або альтернативного документа з ${foreignersLaw.article("219a", "Art. 219a")} ust. 3 та цифрову копію документа про актуальний tytuł prawny до житла. Інші докази можна долучити як електронні документи або цифрові копії паперових документів.`,
          sourceLocator: "Art. 219d ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Сам заявник підписує заяву kwalifikowanym podpisem elektronicznym або podpisem zaufanym. За неповнолітнього, повністю недієздатну особу чи дитину без опіки визначений представник може використати також podpis osobisty.",
          sourceLocator: "Art. 219d ust. 3",
        },
        {
          kind: "statute-text",
          text: "MOS автоматично генерує UPO. Заяву вважають поданою лише після одночасного виконання двох умов: належного електронного підпису та отримання UPO заявником або його представником.",
          sourceLocator: "Art. 219d ust. 4–5",
        },
        {
          kind: "statute-text",
          text: "Wojewoda забезпечує іноземцеві допомогу під час подання заяви.",
          sourceLocator: "Art. 219d ust. 6",
        },
      ],
      summary:
        "Стаття визначає електронні додатки, допустимі підписи, UPO та точний момент, коли заява через MOS юридично вважається поданою.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Обов’язковий пакет охоплює фото, повний документ особи й документ на житло. Додаткові докази можна завантажити одразу, але орган може пізніше вимагати їхні оригінали.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Перевірте не лише наявність підпису, а й особу підписанта та дозволений для неї вид підпису. Правила для самого іноземця й представника сформульовані не однаково.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Саме поява UPO разом із належним підписом завершує подання. Чернетка, відправлення без підпису або відсутність UPO не дають підстав автоматично вважати заяву поданою.",
        },
      ],
      legalEffect:
        "Дата подання має процесуальне значення лише після виконання обох умов з ust. 5; UPO є ключовим доказом цієї події.",
      foreignersCase:
        "Перед завершенням перевірте всі сторінки документа, актуальність фото й tytułu prawnego, вид підпису та особу підписанта. Завантажте і збережіть UPO разом із копією остаточно відправленої заяви.",
    },
  ],
})
