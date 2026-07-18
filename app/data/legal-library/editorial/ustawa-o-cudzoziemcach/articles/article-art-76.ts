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
      provisionId: "ustawa-o-cudzoziemcach-art-76",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("76", "Art. 76")} ust. 1 розрізняє засоби оскарження odmowa wizy: wniosek o ponowne rozpatrzenie до konsul або MFA, а від рішення komendant placówki Straży Granicznej — odwołanie до Komendant Główny Straży Granicznej; ust. 2–3 встановлюють 14 днів на подання і 14 днів на розгляд.`,
          sourceLocator: "Art. 76 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("76", "Art. 76")} ust. 4–6 регулює форму рішення, яким відмову залишено в силі, додаткове обґрунтування та судове pouczenie для wiza Schengen, а також передавання konsul цифрових копій документів MFA у випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a.`,
          sourceLocator: "Art. 76 ust. 4–6",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("76", "Art. 76")} визначає правильний засіб після odmowa wiza і строки: для рішення konsul або MFA — wniosek o ponowne rozpatrzenie, для рішення прикордонного коменданта — odwołanie до Komendant Główny Straży Granicznej. Подати потрібно протягом 14 днів від doręczenie.`,
      rules: [
        {
          locator: "Art. 76 ust. 1–1a",
          explanation: foreignersLaw.text`Перевірте, хто видав рішення. Для konsul/MFA подається wniosek o ponowne rozpatrzenie до того самого органу; у спеціальному випадку MFA — через консул ${foreignersLaw.article("66", "Art. 66")} ust. 1b. Для SG діє odwołanie до Komendant Główny Straży Granicznej.`,
        },
        {
          locator: "Art. 76 ust. 2–3",
          explanation:
            "Строк подання — 14 днів від doręczenie odmowa; wniosek розглядають у 14-денний строк.",
        },
        {
          locator: "Art. 76 ust. 4–5",
          explanation:
            "Рішення про utrzymanie odmowa в силі оформлюється на встановленій формі; для wiza Schengen воно додатково містить істотні факти, судове pouczenie, wpis і можливість допомоги.",
        },
        {
          locator: "Art. 76 ust. 6",
          explanation: foreignersLaw.text`Konsul передає MFA цифрові копії заяви, документа подорожі та документів у випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a.`,
        },
      ],
      legalEffect:
        "Норма відкриває конкретний адміністративний засіб і строк, але не гарантує зміну odmowa. Неправильне змішування odwołanie з wniosek o ponowne rozpatrzenie може спричинити процесуальний ризик.",
      foreignersCase: foreignersLaw.text`Від дати doręczenie порахуйте 14 днів, визначте орган-рішення і назвіть правильний засіб; долучіть заперечення до причин ${foreignersLaw.article("75", "Art. 75")} та всі докази, які не були оцінені.`,
    },
  ],
})
