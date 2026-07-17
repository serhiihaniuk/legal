import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-12b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На legalStateDate 2026-07-14 чинна редакція Art. 12b § 1–2 передбачає електронний документ, підписаний способом з Art. 46 § 2a, його подання через elektroniczną skrzynkę podawczą та doręczanie засобами електронної комунікації на умовах Art. 74a; редакція з «adresem do doręczeń elektronicznych» позначена corpus як така, що набуде чинності 1 жовтня 2029 року.",
          sourceLocator: "Art. 12b § 1–5, przypisy 8–9",
        },
      ],
      summary:
        "На legalStateDate 2026-07-14 чинна редакція Art. 12b регулює zachowanie formy pisemnej для dokument elektroniczny, подання через elektroniczną skrzynkę podawczą та doręczanie засобами комунікації електронної на умовах Art. 74a. Corpus також показує майбутню редакцію з adres do doręczeń elektronicznych, чинність якої починається 1.10.2029.",
      rules: [
        {
          locator: "Art. 12b § 1, przypis 8–9",
          explanation:
            "На legalStateDate чинне правило говорить про dokument elektroniczny, підписаний способом з Art. 46 § 2a; текст із pismo utrwalone w postaci elektronicznej є майбутньою редакцією з датою набрання чинності 1.10.2029.",
        },
        {
          locator: "Art. 12b § 2–3, przypis 8–9",
          explanation:
            "Чинна редакція вимагає подавати dokumenty elektroniczne через elektroniczną skrzynkę podawczą, а doręчення здійснює через środki komunikacji elektronicznej за Art. 74a. Суд перетворює отриманий dokument elektroniczny на uwierzytelniony wydruk для сторони, яка не користується електронними засобами, або паперовий документ на електронну копію, якщо сторона користується ними; майбутня редакція містить інші терміни адрес і doręczeń.",
        },
        {
          locator: "Art. 12b § 4–5, przypis 8–9",
          explanation:
            "Чинні правила про zastosowanie środków komunikacji elektronicznej застосовуються відповідно до органів, а при першому письмі не в електронній формі суд інформує про умови електронного подання та doręczania. Перехідна примітка не дозволяє застосовувати майбутню редакцію до legalStateDate.",
        },
      ],
      legalEffect:
        "Стаття створює процесуальну рамку електронних pism і doręczeń, але не робить майбутню редакцію чинною раніше 1.10.2029; придатність конкретного файлу, підпису, каналу подання та доказу doręczenia треба перевірити за чинною редакцією.",
      foreignersCase:
        "Перед електронним поданням у справі іноземця на legalStateDate перевірте вимоги до dokument elektroniczny, elektroniczna skrzynka podawcza, способу підпису та електронного doręczenia за чинними Art. 12b і Art. 74a; збережіть підтвердження подання й не підміняйте їх майбутнім adresem do doręczeń elektronicznych.",
    },
  ]),
})
