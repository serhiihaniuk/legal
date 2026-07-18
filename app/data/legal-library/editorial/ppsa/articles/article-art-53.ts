import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-53",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Основний строк подання скарги (wniesienie skargi) становить тридцять днів від doręczenie skarżącemu rozstrzygnięcia або акту з art. 3 § 2 pkt 4a і 4b; це формулювання враховує зміну з Dz.U. 2026 poz. 846, Art. 10 pkt 1, чинну з 26.06.2026. Для актів і czynności з art. 3 § 2 pkt 4 без окремого środka zaskarżenia строк рахується від відомості про акт або czynność, skarga на інші акти може подаватися в будь-який час, а skarga на bezczynność чи przewlekłość — після ponaglenie. Для prokurator, RPO і RPD діє окремий шестимісячний строк із винятком для § 2a.",
          sourceLocator: "Art. 53 § 1–4; Dz.U. 2026 poz. 846, Art. 10 pkt 1",
        },
      ],
      summary:
        "Строк подання скарги (wniesienie skargi) залежить від предмета: найчастіше це тридцять днів від doręczenie, але після зміни DU/2026/846 правило § 1 прямо охоплює також акт з art. 3 § 2 pkt 4b, а наступні параграфи передбачають спеціальні режими та окремий строк для prokurator, RPO і RPD.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для rozstrzygnięcie та акту з art. 3 § 2 pkt 4a або 4b строк — тридцять днів від doręczenie skarżącemu.",
        },
        {
          locator: "§ 2–2b",
          explanation:
            "Для aktów або czynności з art. 3 § 2 pkt 4, коли закон не передбачає środka zaskarżenia, строк рахується від дня, коли skarżący дізнався про акт або czynność; sąd може після подання skargi визнати, що пропуск строку стався без вини skarżącego. Для інших aktów з § 2a, якщо закон не встановлює інакше, skarga можлива в будь-який час, а skarga на bezczynność чи przewlekłość — у будь-який час після ponaglenie.",
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
        "Стаття задає процесуальні строки й винятки. Вона не вирішує сама питання prawidłowość doręczenia чи przywrócenie terminu; лише для ситуації з § 2 прямо дозволяє sąd після подання skargi оцінити, чи uchybienie terminu сталося без вини skarżącego.",
      foreignersCase:
        "Зафіксуйте день doręczenie decyzji про pobyt, назвіть предмет skargi за art. 3 і перевірте, чи це rozstrzygnięcie, akt з pkt 4a/4b, akt або czynność з pkt 4, bezczynność чи przewlekłość. Не переносіть автоматично тридцятиденне правило на bezczynność або інший akt без перевірки спеціальної підстави.",
    },
  ]),
})
