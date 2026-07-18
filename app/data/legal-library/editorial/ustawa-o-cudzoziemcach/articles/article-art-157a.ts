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
      provisionId: "ustawa-o-cudzoziemcach-art-157a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157a", "Art. 157a")} встановлює умови zezwolenie на pobyt czasowy dla stażysty: актуальне завершення або проходження studia, страхування, житло, кошти, письмове зобов’язання organizator stażu, детальна umowa stażu, відповідність стажу навчанню та мовний курс.`,
          sourceLocator: "Art. 157a ust. 1–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157a", "Art. 157a")} ust. 6–18 регулює zatwierdzenie organizator stażu, строки інформації, строк затвердження 2 роки, cofnięcie/відмову у продовженні та офіційний список.`,
          sourceLocator: "Art. 157a ust. 6–18",
        },
      ],
      summary:
        "Дозвіл стажиста вимагає освітньо пов’язаного, письмово описаного staż у затвердженого організатора та окремих доказів забезпечення.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Cudzoziemiec доводить завершення studia протягом 2 років до заяви або проходження studia поза UE, має страхування, місце проживання, кошти на утримання, повернення/транзит і staż та письмове зобов’язання organizator щодо витрат повернення.",
        },
        {
          locator: "ust. 1 pkt 2–4",
          explanation:
            "Письмова umowa має описати освітню програму, строк, місце, opiekun, години, нагляд, завдання, права та обов’язки щодо витрат/медогляду/страхування від нещасних випадків/вільних днів/розірвання, спосіб підтвердження результату; staż має відповідати навчанню, а мовний курс — потрібному рівню.",
        },
        {
          locator: "ust. 2–5",
          explanation: foreignersLaw.text`Organizator до підписання дає переклад угоди зрозумілою мовою; кошти після витрат на житло перевищують поріг соціальної допомоги, з правилами про комунальні витрати та ${foreignersLaw.article("113b", "art. 113b")}.`,
        },
        {
          locator: "ust. 6–14",
          explanation:
            "Organizator затверджується рішенням, якщо існує щонайменше 5 років, має діяльність для прийому stażystów і немає заперечень щодо безпеки та interes RP; інформація надходить за 30/60 днів, а zatwierdzenie діє 2 роки або коротше.",
        },
        {
          locator: "ust. 15–18",
          explanation:
            "Minister може відмовити у продовженні або cofnięcie за ліквідацію, відсутність реальної діяльності чи сприяння незаконному pobyt; за останньої підстави повторна заява неможлива 5 років, список публікується офіційно.",
        },
      ],
      legalEffect:
        "Zezwolenie охоплює конкретний освітній staż, а не загальну працю чи іншу мету pobyt; затвердження organizator є окремим рішенням.",
      foreignersCase:
        "Перевірте дату завершення/проходження studia, umowa і програму, місце та opiekun, мовний курс, кошти, страхування й актуальний статус organizator. Не подавайте шаблон угоди як гарантію.",
    },
  ],
})
