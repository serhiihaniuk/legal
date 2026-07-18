import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-12b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Станом на 18.07.2026 Art. 12b § 1–2 зберігає встановлену законом вимогу письмової форми (warunek formy pisemnej), якщо dokument elektroniczny підписано способом з Art. 46 § 2a. Електронні документи подають до sąd administracyjny через elektroniczna skrzynka podawcza, а суд вручає їх сторонам засобами електронної комунікації за умовами Art. 74a. Редакція про postać elektroniczna, adres do doręczeń elektronicznych та Art. 65a набере чинності лише 1.10.2029.",
          sourceLocator: "Art. 12b § 1–5, przypisy 8–9",
        },
      ],
      summary:
        "Стаття визначає, коли dokument elektroniczny відповідає письмовій формі, як його подати через elektroniczna skrzynka podawcza та як суд обробляє паперові й електронні документи для вручення.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Встановлену законом вимогу письмової форми (warunek formy pisemnej) вважають дотриманою, якщо dokument elektroniczny підписано способом, передбаченим Art. 46 § 2a.",
        },
        {
          locator: "§ 2",
          explanation:
            "Dokumenty elektroniczne подають до sąd administracyjny через elektroniczna skrzynka podawcza. Суд вручає такі документи сторонам засобами електронної комунікації за умовами Art. 74a.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для вручення суд перетворює отриманий від сторони документ: із pismo w formie dokumentu elektronicznego робить uwierzytelniony wydruk для сторони, яка не отримує документи електронно; із паперового pismo робить uwierzytelniona kopia w formie dokumentu elektronicznego для сторони, яка користується електронним отриманням.",
        },
        {
          locator: "§ 4–5 / Przypisy 8–9",
          explanation:
            "Правила використання електронної комунікації відповідно застосовують до organów, до яких або через які подають pismo w formie dokumentu elektronicznego. У першому неелектронному листі суд інформує сторону про умови електронного подання та вручення. Формулювання про postać elektroniczna, adres do doręczeń elektronicznych і Art. 65a є майбутньою редакцією з 1.10.2029.",
        },
      ],
      legalEffect:
        "Стаття створює чинну процесуальну рамку електронних документів і вручення через Art. 74a, але не доводить автоматично, що конкретний файл, підпис або підтвердження подання є правильним.",
      foreignersCase:
        "Перед електронним поданням у справі іноземця перевірте dokument elektroniczny, підпис за Art. 46 § 2a, подання через elektroniczna skrzynka podawcza та підтвердження подання; для вручення судом застосовуйте чинний Art. 74a.",
    },
  ]),
})
