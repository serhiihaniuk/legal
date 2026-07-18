import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("7", "Załącznik nr 7")} є WZÓR FORMULARZA WNIOSKU про zezwolenie на pobyt czasowy для роботи в рамках przeniesienia wewnątrz przedsiębiorstwa або довгострокової мобільності pracownika kadry kierowniczej, specjalisty чи pracownika odbywającego staż у такій схемі; текст форми містить поля про іноземця, ICT, jednostka przyjmująca, pracodawca macierzysty, зв’язки, роботу, попередні transfery та oświadczenia.`,
          sourceLocator: "Załącznik nr 7, nagłówek, wybór celu та części A–J",
        },
      ],
      summary:
        "Це спеціальний wzór wniosku для ICT та відповідної довгострокової мобільності. Форма структурує ідентифікаційні, корпоративні, робочі та трансферні відомості.",
      rules: [
        {
          locator: "nagłówek та wybór celu",
          explanation:
            "На початку форми потрібно позначити один із прямо названих напрямів: робота в рамках przeniesienia wewnątrz przedsiębiorstwa або мобільність pracownika kadry kierowniczej, specjalisty чи pracownika odbywającego staż.",
        },
        {
          locator: "części A–E",
          explanation:
            "Текст форми показує dane osobowe cudzoziemca, адреси, документ подорожі, актуальне й заплановане місце pobytu, членів сім’ї, історію pobytu в Польщі та інших державах UE і ubezpieczenie zdrowotne.",
        },
        {
          locator: "części F–H",
          explanation:
            "Ці частини охоплюють кваліфікації працівника й документ pobytowy «ICT», дані jednostka przyjmująca та pracodawca macierzysty, їхні зв’язки й умови роботи, яку планують доручити іноземцю.",
        },
        {
          locator: "części I–J",
          explanation:
            "Форма також має місця для попередньої роботи та przeniesienia в державах UE, а наприкінці — oświadczenia jednostki przyjmującej про повернення до pracodawca macierzysty й інші перелічені обставини.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("7", "Załącznik nr 7")} є способом подати дані для ICT-процедури, а не самостійним доказом корпоративного зв’язку, роботи або виконання умов zezwolenia.`,
      foreignersCase:
        "Спочатку встановіть, який із двох cel позначається фактично, потім узгодьте назви jednostka przyjmująca і pracodawca macierzysty, строки transfer та параметри роботи з окремими документами. Заповнена форма не гарантує дозволу.",
    },
  ],
})
