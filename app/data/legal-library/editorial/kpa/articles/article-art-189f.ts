import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "189f",
      provisionId: "kpa-art-189f",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, коли орган обов'язково або після усунення порушення відмовляється від накладення грошової санкції та обмежується pouczeniem. Вона розрізняє підстави негайного odstąpienia і процедуру, у якій стороні дають строк на виправлення наслідків.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Орган відступає від санкції й дає pouczenie, якщо вага порушення незначна, а сторона припинила порушення права.",
        },
        {
          locator: "§ 1 pkt 2",
          explanation:
            "Так само роблять, якщо за ту саму поведінку сторона вже остаточно покарана адміністративною санкцією або prawomocnie за wykroczenie чи злочин і попередня кара виконує цілі нової санкції.",
        },
        {
          locator: "§ 2",
          explanation:
            "В інших випадках орган може визначити строк для подання доказів усунення порушення чи його наслідків або повідомлення визначених суб'єктів, якщо це дозволить досягти цілей санкції.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після подання у строк доказів виконання вимоги орган відступає від санкції та дає pouczenie.",
        },
      ],
      legalEffect: kpaLaw.text`За умов ${kpaLaw.article("189f", "§ 1")} орган не накладає санкцію; за ${kpaLaw.article("189f", "§ 2–3")} такий результат залежить від виконання визначеної органом дії й доказування її у строк.`,
      foreignersCase:
        "У справі роботодавця іноземця ця стаття може мати значення лише для administracyjnej kary pieniężnej, охопленої розділом. Потрібно довести конкретну підставу odstąpienia, а не просити про нього як про довільну поблажку.",
    },
  ],
})
