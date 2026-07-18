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
      provisionId: "ustawa-o-cudzoziemcach-art-231",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Wniosek про видачу або wymianę документів ${foreignersLaw.article("226", "Art. 226")} подають на formularz, який містить дані cudzoziemca або інформацію з ${foreignersLaw.article("13", "Art. 13")}, а для заяви на polski dokument podróży dla cudzoziemca чи tymczasowy polski dokument podróży для cudzoziemca — також такі дані щодо дітей та інших осіб, вписаних до документа подорожі. Formularz містить також адресу zameldowania на pobyt stały або pobyt czasowy понад 2 місяці.`,
          sourceLocator: "Art. 231 ust. 1 pkt 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Подаючи wniosek, cudzoziemiec пред’являє ważny dokument podróży і додає актуальні фотографії себе та осіб, охоплених заявою, а також документи, необхідні для підтвердження даних і обставин. У szczególnie uzasadnionym przypadku замість чинного документа подорожі допускається інший документ, що підтверджує особу; особа з ${foreignersLaw.article("170", "Art. 170")} за названих особливих обставин може бути звільнена і від цього обов’язку.`,
          sourceLocator: "Art. 231 ust. 2–4",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає зміст formularz і пакет до заяви на документ ${foreignersLaw.article("226", "Art. 226")}, а також винятки щодо пред’явлення документа подорожі для особливих випадків.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Перевірте дані заявника, осіб у документі подорожі та адресу meldunku понад 2 місяці — залежно від виду документа й змісту заяви.",
        },
        {
          locator: "ust. 2",
          explanation:
            "До заяви потрібні ważny dokument podróży, актуальні фотографії та підтвердні документи; перелік доказів залежить від поданих даних і обставин.",
        },
        {
          locator: "ust. 3–4",
          explanation: foreignersLaw.text`Інший документ особи замість документа подорожі можливий лише у szczególnie uzasadnionym przypadku. Для особи на підставі zaświadczenie з ${foreignersLaw.article("170", "Art. 170")} діє спеціальне звільнення за умовами ust. 4.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("231", "Art. 231")} визначає формальні елементи заяви та доказові додатки, але подання formularz і документів саме по собі не означає, що документ ${foreignersLaw.article("226", "Art. 226")} буде видано.`,
      foreignersCase: foreignersLaw.text`Зіставте вид документа з потрібним formularz, перевірте адресу meldunku та осіб, яких треба включити до заяви, додайте фото й докази. Якщо документа подорожі немає, окремо обґрунтуйте особливий випадок або перевірте умови ${foreignersLaw.article("170", "Art. 170")}.`,
    },
  ],
})
