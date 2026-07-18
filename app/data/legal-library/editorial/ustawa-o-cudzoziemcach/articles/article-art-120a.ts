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
      provisionId: "ustawa-o-cudzoziemcach-art-120a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("120a", "Art. 120a")} вимагає подавати wniosek o zmianę zezwolenia na pobyt czasowy i pracę у паперовій формі. Форма описує особу й сім’ю, причину зміни, ubezpieczenie, а також названі дані про судимість і кримінальні провадження.`,
          sourceLocator: "Art. 120a ust. 1–3",
        },
      ],
      summary:
        "Зміна дозволу — окреме паперове провадження. Заява повинна пояснити, що саме змінилося, а нові умови праці мають бути підтверджені роботодавцем і документами.",
      rules: [
        {
          locator: "Art. 120a ust. 1 i 2a",
          explanation: foreignersLaw.text`Форма містить визначені дані з ${foreignersLaw.article("13", "Art. 13")}, сімейні відомості, причину wniosku, ubezpieczenie та інформацію про злочини з ${foreignersLaw.external("art. 270–275 Kodeksu karnego", "https://eli.gov.pl/eli/DU/2025/383/ogl")}, пов’язані з провадженням щодо дозволу на роботу або комбінованого дозволу. Oświadczenie про правдивість подається з установленою klauzulą кримінальної відповідальності.`,
        },
        {
          locator: "Art. 120a ust. 2",
          explanation: foreignersLaw.text`Додаються заповнений роботодавцем załącznik з ${foreignersLaw.article("106", "Art. 106")} ust. 2 та докази даних і обставин, які обґрунтовують зміну.`,
        },
        {
          locator: "Art. 120a ust. 3",
          explanation: foreignersLaw.text`До доказового wezwania відповідно застосовується ${foreignersLaw.article("106f", "Art. 106f")}, а до строків першої та апеляційної інстанцій — названі положення ${foreignersLaw.article("112a", "Art. 112a")}.`,
        },
      ],
      legalEffect:
        "Подання wniosku запускає розгляд, але саме по собі не змінює чинну decyzję й не дозволяє автоматично працювати за новими параметрами.",
      foreignersCase:
        "Зіставте стару decyzję з новим роботодавцем, stanowiskiem, wynagrodzeniem та іншими параметрами. У формі назвіть точну причину зміни, а кожну нову умову підтвердьте załącznikiem і доказом.",
    },
  ],
})
