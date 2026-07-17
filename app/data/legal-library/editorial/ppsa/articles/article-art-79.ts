import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-79",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd ustanowі kurator, якщо wnioskodawca uprawdopodobni, що місце перебування сторони невідоме; про це оголошують публічно, а doręczenie kurator стає ефективним, із можливістю визначити строк від оголошення.",
          sourceLocator: "Art. 79 § 1–4",
        },
      ],
      summary:
        "Стаття встановлює поріг uprawdopodobnienie невідомого місця, публічне оголошення та момент ефективності вручення kurator.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Потрібно uprawdopodobnić невідоме місце; postanowienie може бути винесене на posiedzenie niejawne.",
        },
        {
          locator: "§ 2",
          explanation:
            "Про ustanowienie kurator оголошують у будівлі sąd та urzędzie gminy, а за потреби також у пресі.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Doręczenie kurator є skuteczne з моменту вручення, але sąd може пов’язати його з означеним строком від obwieszczenie; дії може виконувати referendarz.",
        },
      ],
      legalEffect:
        "Kurator забезпечує процесуальне представництво за невідомої адреси, але не доводить, що сторона реально отримала pismo.",
      foreignersCase:
        "Для cudzoziemiec, який виїхав і не повідомив адресу, перевірте матеріали про uprawdopodobnienie та дату doręczenie kurator.",
    },
  ]),
})
