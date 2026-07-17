import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-260",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 260 передбачає, що суд, розглядаючи sprzeciw від актів Art. 258 § 2 pkt 6–8, видає postanowienie, яким змінює zarządzenie або postanowienie referendarz або залишає його в силі. Podanie sprzeciw зупиняє wykonalność такого акта; суд діє як sąd drugiej instancji, відповідно застосовуючи положення про zażalenie, і розглядає справу на posiedzenie niejawnym.",
          sourceLocator: "Art. 260 § 1–3",
        },
      ],
      summary:
        "Суд перевіряє sprzeciw як інстанція другого рівня, може змінити акт referendarz або залишити його в силі, а сам sprzeciw тимчасово зупиняє його wykonalność.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Результат судового розгляду sprzeciw — postanowienie про зміну або utrzymanie w mocy конкретного акта referendarz, а не рішення по основній адміністративній справі.",
        },
        {
          locator: "§ 2",
          explanation:
            "На час розгляду sprzeciw wykonalność оскарженого акта зупинена. Суд має статус sąd drugiej instancji і застосовує правила про zażalenie відповідно.",
        },
        {
          locator: "§ 3",
          explanation:
            "Справу розглядають на posiedzenie niejawnym; це не означає, що sprzeciw автоматично задовольнять.",
        },
      ],
      legalEffect:
        "Вчасно поданий sprzeciw має тимчасовий suspensywny ефект щодо wykonalność акта referendarz, але остаточний наслідок визначається postanowienie суду.",
      foreignersCase:
        "У справі іноземця врахуйте, що sprzeciw може зупинити wykonalność акта про prawo pomocy, але не зупиняє автоматично рішення про pobyt чи інші дії органу. Дочекайтеся postanowienie WSA і прочитайте, чи акт змінено, чи залишено в силі.",
    },
  ]),
})
