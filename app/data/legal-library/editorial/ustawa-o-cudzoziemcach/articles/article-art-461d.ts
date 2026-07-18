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
      provisionId: "ustawa-o-cudzoziemcach-art-461d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("461d", "Art. 461d")} забороняє cudzoziemcowi у pomieszczenie порушувати спокій і порядок, мати предмети, що можуть загрожувати порядку або безпеці, вживати алкоголь чи środki odurzające або substancje psychotropowe, а також палити wyroby tytoniowe.`,
          sourceLocator: "Art. 461d pkt 1–4",
        },
        {
          kind: "statute-text",
          text: "Заборонено також завдавати собі uszkodzeń ciała або rozstroju zdrowia, схиляти до таких дій чи допомагати їх вчиненню.",
          sourceLocator: "Art. 461d pkt 5",
        },
      ],
      summary:
        "Стаття встановлює заборони для cudzoziemca у pomieszczenie: від порушення порядку, небезпечних предметів, алкоголю, наркотичних і психотропних речовин та куріння до самопошкодження і сприяння таким діям.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Не можна zakłócać spokój і porządek та володіти предметами, які можуть створювати загрозу порядку або безпеці в pomieszczenie.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "Заборонені алкоголь, środki odurzające, substancje psychotropowe та palenie wyrobów tytoniowych.",
        },
        {
          locator: "pkt 5",
          explanation:
            "Заборона охоплює власне спричинення uszkodzeń ciała або rozstroju zdrowia, а також nakłanianie чи pomoc у таких діях.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("461d", "Art. 461d")} визначає правила безпеки й поведінки саме для перебування у pomieszczenie. Стаття не містить у цьому тексті окремої міри покарання, тому не можна виводити автоматичний правовий наслідок без перевірки інших норм і конкретних фактів.`,
      foreignersCase: foreignersLaw.text`Якщо орган посилається на ${foreignersLaw.article("461d", "Art. 461d")}, вимагайте точно описати дію, предмет або речовину, час і докази; не ототожнюйте саме повідомлення про порушення з уже встановленою відповідальністю.`,
    },
  ],
})
