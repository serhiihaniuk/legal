import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-39",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 39 встановлює, що pełnomocnictwo ogólne або для окремих справ охоплює «z samego prawa umocowanie do: 1) wszystkich łączących się ze sprawą czynności w postępowaniu».",
          sourceLocator: "Art. 39 pkt 1",
        },
      ],
      summary:
        "Pełnomocnictwo ogólne або для окремої справи за законом охоплює пов’язані зі справою процесуальні дії, подальше доручення у передбачених правилах, а також окремі дії щодо skarga та витрат.",
      rules: [
        {
          locator: "Art. 39 pkt 1",
          explanation:
            "До обсягу входять усі пов’язані зі справою czynności w postępowaniu, включно з діями щодо skarga o wznowienie та провадженням після її подання.",
        },
        {
          locator: "Art. 39 pkt 2",
          explanation:
            "Pełnomocnik має umocowanie до udzielenia dalszego pełnomocnictwa на умовах окремих правил.",
        },
        {
          locator: "Art. 39 pkt 3–4",
          explanation:
            "До повноважень входить cofnięcie skargi, якщо його не виключено в дорученні, та odbiór kosztów postępowania.",
        },
      ],
      legalEffect:
        "Стаття додає певні повноваження з самого права, але для cofnięcie skargi прямо зберігає значення можливого виключення в конкретному pełnomocnictwo.",
      foreignersCase:
        "У справі іноземця прочитайте повний текст доручення перед cofnięcie skargi або отриманням kosztów; перевірте, чи ці дії не виключені його формулюванням.",
    },
  ]),
})
