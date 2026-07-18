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
      provisionId: "ustawa-o-cudzoziemcach-art-144",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("144", "Art. 144")} ust. 1 встановлює умови zezwolenie на pobyt czasowy у celu kształcenia się na studiach: мета підготовки або продовження studia у відповідній jednostka, zaświadczenie, оплата платного навчання, страхування та кошти на утримання, повернення або транзит і studia.`,
          sourceLocator: "Art. 144 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("144", "Art. 144")} ust. 4–18 регулює zatwierdzenie jednostka prowadząca studia, винятки з обов’язку zatwierdzenia, перевірки, строк затвердження, список і можливість розпорядження про підготовчий курс.`,
          sourceLocator: "Art. 144 ust. 4–18",
        },
        {
          kind: "practical-inference",
          text: "Zaświadczenie про прийняття або продовження studia є одним доказом; воно не замінює страхування, кошти, оплату платного навчання та перевірку статусу jednostka.",
          sourceLocator: "Art. 144 ust. 1 pkt 1–2",
        },
      ],
      summary:
        "Для studia потрібні підтверджені навчання, статус jednostka, страхування та достатні кошти. Стаття також визначає режим zatwierdzenie навчального закладу.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Потрібні zaświadczenie jednostka про прийняття або продовження studia, доказ оплати за платне навчання, ubezpieczenie zdrowotne або покриття лікування та кошти на утримання, повернення/транзит і studia.",
        },
        {
          locator: "ust. 1a–1c",
          explanation: foreignersLaw.text`Місячні кошти мають перевищувати поріг соціальної допомоги після врахування витрат на житло; ust. 1c містить спеціальне правило для громадян держав, названих у положеннях ${foreignersLaw.article("113b", "art. 113b")}.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Ust. 2 охоплює підготовчий курс для громадян держав, визначених розпорядженням, а ust. 3 — продовження або доповнення studia з іншої держави UE поза програмою чи угодою мобільності за додаткових умов.",
        },
        {
          locator: "ust. 4–9, 13–18",
          explanation:
            "Jednostka затверджується рішенням міністра за умовами існування, реального навчання, рекрутації, безпеки та інтересу RP; органи дають інформацію протягом 30 або 60 днів, zatwierdzenie зазвичай діє 5 років, список публікується офіційно.",
        },
        {
          locator: "ust. 5 pkt 2, ust. 10–12",
          explanation:
            "Ці положення мають позначку «(uchylony)» у локальному тексті джерела; їх не слід використовувати як чинні умови.",
        },
      ],
      legalEffect:
        "Стаття задає матеріальні умови побиту та інституційний контроль за jednostka. Прийняття на studia не гарантує udzielenie zezwolenie.",
      foreignersCase:
        "Перевірте за актуальними документами zaświadczenie, оплату, страхування, розрахунок коштів і статус jednostka (включно з можливим zakaz). Не робіть висновок лише з листа університету.",
    },
  ],
})
