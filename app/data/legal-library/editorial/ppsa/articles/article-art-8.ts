import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-8",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 8 § 1 встановлює: «Prokurator oraz Rzecznik Praw Obywatelskich mogą wziąć udział w każdym toczącym się postępowaniu».",
          sourceLocator: "Art. 8 § 1",
        },
      ],
      summary:
        "Prokurator і Rzecznik Praw Obywatelskich можуть брати участь у кожному незавершеному провадженні, а Rzecznik Praw Dziecka та Rzecznik Małych i Średnich Przedsiębiorców — у межах прямо описаних у статті підстав.",
      rules: [
        {
          locator: "Art. 8 § 1",
          explanation:
            "Prokurator і Rzecznik Praw Obywatelskich можуть увійти у провадження або подати перелічені засоби, якщо за їх оцінкою цього потребує захист praworządności чи praw człowieka i obywatela.",
        },
        {
          locator: "Art. 8 § 2",
          explanation:
            "Rzecznik Praw Dziecka діє за оцінкою потреби захисту praw dziecka і в такому разі має права strony.",
        },
        {
          locator: "Art. 8 § 3",
          explanation:
            "Rzecznik Małych i Średnich Przedsiębiorców діє за оцінкою потреби захисту прав відповідного підприємця і в такому разі має права strony.",
        },
      ],
      legalEffect:
        "Стаття надає названим органам процесуальні можливості за їхньою оцінкою встановленої потреби; вона не означає автоматичної участі такого органу в кожній справі.",
      foreignersCase:
        "У чутливій справі про pobyt зафіксуйте конкретні факти, які можуть стосуватися прав людини, але не трактуйте Art. 8 як автоматичне залучення Rzecznik Praw Obywatelskich.",
    },
  ]),
})
