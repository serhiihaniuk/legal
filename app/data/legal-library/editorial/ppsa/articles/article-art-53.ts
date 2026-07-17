import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-53",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Основний строк wniesienia skarga становить тридцять днів від doręczenie rozstrzygnięcia; для деяких актів строк рахується від відомості про акт або skarga можлива в будь-який час, а skarga на bezczynność чи przewlekłość — після ponaglenie; для prokurator, RPO і RPD діє окремий шестимісячний строк із винятком для § 2a.",
          sourceLocator: "Art. 53 § 1–4",
        },
      ],
      summary:
        "Строк skarga залежить від виду предмета: найчастіше це тридцять днів від doręczenie, але стаття передбачає спеціальні режими та окремий строк для prokurator, RPO і RPD.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для rozstrzygnięcie та акту з art. 3 § 2 pkt 4a строк — тридцять днів від його doręczenie skarżący.",
        },
        {
          locator: "§ 2–2b",
          explanation:
            "Для aktów або czynności без доступного środka zaskarżenia строк може рахуватися від моменту знання; для інших aktów — бути безстроковим, а skarga на bezczynność чи przewlekłość можлива в будь-який час після ponaglenie.",
        },
        {
          locator: "§ 3",
          explanation:
            "Prokurator, RPO та RPD можуть подати skarga протягом шести місяців у справах § 1–2; цей строк не застосовується до справ § 2a.",
        },
        {
          locator: "§ 4",
          explanation:
            "Вчасне подання skarga безпосередньо до sąd зберігає строк; sąd пересилає її відповідному органу.",
        },
      ],
      legalEffect:
        "Стаття задає процесуальні строки й винятки, але не вирішує сама питання відновлення пропущеного строку чи правильності doręczenie; для § 2 sąd може оцінити відсутність вини skarżący.",
      foreignersCase:
        "Зафіксуйте день doręczenie decyzja про pobyt, визначте предмет skarga і не переносіть автоматично тридцятиденне правило на bezczynność чи інший akt.",
    },
  ]),
})
