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
      provisionId: "ustawa-o-cudzoziemcach-art-71",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("71", "Art. 71")} ust. 1 вимагає здійснювати обмін інформацією за ${foreignersLaw.article("67", "Art. 67")}–${foreignersLaw.article("70", "70")} електронними засобами; ust. 2 дозволяє письмову форму лише за надзвичайної неможливості електронного обміну або при обміні з органом ${foreignersLaw.article("69", "Art. 69")} ust. 3 pkt 6.`,
          sourceLocator: "Art. 71 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Виняток стосується форми комунікації, а не звільняє органи від предмета запиту, доказування чи строків відповідної статті.",
          sourceLocator: "Art. 71 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("71", "Art. 71")} встановлює технічну форму обміну інформацією у консультаціях ${foreignersLaw.article("67", "Art. 67")}–${foreignersLaw.article("70", "70")}: основною є електронна комунікація, письмова допускається у двох прямо названих випадках.`,
      rules: [
        {
          locator: "Art. 71 ust. 1",
          explanation: foreignersLaw.text`Запити і відповіді за ${foreignersLaw.article("67", "Art. 67")}–${foreignersLaw.article("70", "70")} надсилаються засобами електронної комунікації.`,
        },
        {
          locator: "Art. 71 ust. 2 pkt 1–2",
          explanation: foreignersLaw.text`Письмова форма можлива, якщо надзвичайні обставини унеможливлюють електронний обмін, або якщо інформація обмінюється з іншим органом, названим у ${foreignersLaw.article("69", "Art. 69")} ust. 3 pkt 6.`,
        },
      ],
      legalEffect: foreignersLaw.text`Стаття упорядковує доказовий канал між органами. Неправильна форма може мати процесуальне значення, але ${foreignersLaw.article("71", "Art. 71")} сама не визначає результату візової заяви.`,
      foreignersCase:
        "Збережіть електронний або допустимий письмовий слід запиту й відповіді, причину застосування письмової форми та дати; не підмінюйте офіційний обмін листом без підтвердження.",
    },
  ],
})
