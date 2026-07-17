import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("7", "Załącznik nr 7")} є WZÓR FORMULARZA WNIOSKU про zezwolenie на pobyt czasowy для роботи в рамках przeniesienia wewnątrz przedsiębiorstwa або довгострокової мобільності manager, specialist чи trainee в такій схемі; текст форми містить поля про іноземця, ICT, host entity, parent employer, зв’язки, роботу, попередні transfery та oświadczenia.`,
          sourceLocator: "Załącznik nr 7, nagłówek, wybór celu та części A–I",
        },
      ],
      summary:
        "Це спеціальний wzór wniosku для ICT та відповідної довгострокової мобільності. Форма структурує ідентифікаційні, корпоративні, робочі та трансферні відомості.",
      rules: [
        {
          locator: "nagłówek та wybór celu",
          explanation:
            "На початку форми потрібно позначити один із прямо названих напрямів: робота в рамках przeniesienia wewnątrz przedsiębiorstwa або мобільність manager, specialist чи trainee.",
        },
        {
          locator: "części A–V",
          explanation:
            "Extracted text показує поля для особи, адрес, перебування, членів сім’ї, ubezpieczenie, кваліфікацій, ICT-документа, host entity, parent employer, корпоративного зв’язку та умов роботи.",
        },
        {
          locator: "частини про przeniesienia та oświadczenia",
          explanation:
            "Форма також має місця для попередньої роботи й transferów, запланованої тривалості, історії переміщень та oświadczenia, передбачених самим wzór, а також для переліку заłączniki і службових відміток.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("7", "Załącznik nr 7")} є способом подати дані для ICT-процедури, а не самостійним доказом корпоративного зв’язку, роботи або виконання умов zezwolenia.`,
      foreignersCase:
        "Спочатку встановіть, який із двох cel позначається фактично, потім узгодьте назви host entity і parent employer, строки transfer та параметри роботи з окремими документами. Заповнена форма не гарантує дозволу.",
    },
  ],
})
