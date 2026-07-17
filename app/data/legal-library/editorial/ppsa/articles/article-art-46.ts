import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-46",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 46 § 1 починається словами: «Każde pismo strony powinno zawierać».",
          sourceLocator: "Art. 46 § 1",
        },
      ],
      summary:
        "Кожне pismo strony має містити визначені реквізити: суд, сторони та їхніх представників, вид письма, зміст wniosek або oświadczenie, підпис і перелік додатків. Для першого та електронного письма стаття додає окремі дані; на legalStateDate електронні реквізити треба читати в чинній редакції, а не в майбутньому варіанті з adresem do doręczeń elektronicznych.",
      rules: [
        {
          locator: "Art. 46 § 1 pkt 1–5",
          explanation:
            "Базовий комплект охоплює oznaczenie sądu, дані сторін і представників, rodzaj pisma, osnowa wniosku або oświadczenia, підпис і załączniki.",
        },
        {
          locator: "Art. 46 § 2 pkt 1",
          explanation:
            "Перше pismo у справі має додатково містити адресні або реєстрові дані, потрібні ідентифікатори, а також oznaczenie przedmiotu sprawy; наступні pismo містять sygnatura akt.",
        },
        {
          locator: "Art. 46 § 2a–2d",
          explanation:
            "На legalStateDate pismo у formie dokumentu elektronicznego має містити adres elektroniczny і бути підписане kwalifikowanym podpisem elektronicznym, podpisem zaufanym або podpisem osobistym; ці правила поширюються на електронні załączniki. Для неелектронного pismo з вимогою електронного doręczenia діє правило про адрес elektroniczny. Варіант із adresem do doręczeń elektronicznych є майбутньою редакцією до 1.10.2029.",
        },
        {
          locator: "Art. 46 § 3–4",
          explanation:
            "До pismo додається pełnomocnictwo або wierzytelny odpis, якщо pełnomocnik ще не подав його до суду, крім випадку перевірки в доступному реєстрі. За сторону, яка не може підписатися, pismo підписує уповноважена особа із зазначенням причини.",
        },
      ],
      legalEffect:
        "Стаття визначає зміст і реквізити pismo strony; сама по собі не встановлює в цьому записі наслідок кожного окремого недоліку.",
      foreignersCase:
        "Перед поданням pismo у справі іноземця пройдіть список Art. 46: sąd, сторони, вид pismo, вимога, підпис і załączniki; для першого pismo — адресні та ідентифікаційні дані, а для електронного dokument — чинні адрес elektroniczny і спосіб підпису. Не підміняйте їх майбутнім adresem do doręczeń elektronicznych.",
    },
  ]),
})
