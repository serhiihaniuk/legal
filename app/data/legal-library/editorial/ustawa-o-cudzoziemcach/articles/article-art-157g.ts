import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157g", "Art. 157g")} встановлює умови zezwolenie на pobyt czasowy dla wolontariusza для участі в European Voluntary Service: страхування, житло, кошти, umowa wolontariatu з визначеним змістом і zatwierdzenie jednostka органом.`,
          sourceLocator: "Art. 157g ust. 1–4",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157g", "Art. 157g")} ust. 5–17 регулює zatwierdzenie jednostka, строки перевірок, строк 2 роки, cofnięcie/відмову у продовженні та список затверджених jednostka.`,
          sourceLocator: "Art. 157g ust. 5–17",
        },
      ],
      summary:
        "Волонтерський дозвіл пов’язаний із European Voluntary Service, письмовою угодою та затвердженою організаційною одиницею.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Cudzoziemiec має мати health insurance або покриття лікування, місце проживання та достатні кошти на утримання й повернення/транзит.",
        },
        {
          locator: "ust. 1 pkt 2–3",
          explanation:
            "Umowa має описувати wolontariat, строк, умови та нагляд, години, кошти утримання/житла, мінімальне kieszonkowe і навчання; jednostka, на користь якої надаються послуги, має бути zatwierdzona.",
        },
        {
          locator: "ust. 2–4",
          explanation: foreignersLaw.text`Місячні кошти після витрат на житло перевищують поріг соціальної допомоги; витрати охоплюють сталі оплати й комунальні послуги, з правилом для громадян держав ${foreignersLaw.article("113b", "art. 113b")}.`,
        },
        {
          locator: "ust. 5–14",
          explanation:
            "Jednostka затверджується рішенням, якщо існує щонайменше 5 років, має діяльність для прийому wolontariuszy і немає заперечень щодо безпеки та interes RP; zatwierdzenie діє 2 роки або коротше.",
        },
        {
          locator: "ust. 15–17",
          explanation:
            "Minister може відмовити у продовженні або cofnięcie затвердження за ліквідацію, відсутність реальної діяльності чи сприяння незаконному pobyt; за останньої підстави повторна заява заборонена 5 років, список публікується офіційно.",
        },
      ],
      legalEffect:
        "Zezwolenie охоплює участь у визначеній програмі волонтеріату, а не звичайне zatrudnienie або довільну працю; статус jednostka є окремою умовою.",
      foreignersCase:
        "Перевірте програму, повну umowa, кошти, страхування, житло та актуальний статус jednostka. Не підміняйте wolontariat трудовим договором без окремої правової оцінки.",
    },
  ],
})
