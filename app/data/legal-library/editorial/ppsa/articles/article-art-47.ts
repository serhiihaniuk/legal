import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-47",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 47 § 1 встановлює: «Do pisma strony należy dołączyć jego odpisy i odpisy załączników dla doręczenia ich stronom».",
          sourceLocator: "Art. 47 § 1",
        },
      ],
      summary:
        "До pismo strony додаються odpisy самого письма та załączników для doręczenia сторонам; можуть використовуватися засвідчені fotokopie або wydruki електронної пошти, а для електронних pism odpisy не додаються за умовами статті.",
      rules: [
        {
          locator: "Art. 47 § 1–2",
          explanation:
            "Для doręczenie сторонам подаються odpisy pismo й заłączników; якщо оригінали додатків не подані до суду, до akt додається також по одному odpis кожного додатка. Засвідчені fotokopie або wydruki електронної пошти можуть бути odpisami.",
        },
        {
          locator: "Art. 47 § 3",
          explanation:
            "Для pism і załączników, поданих у formie dokumentu elektronicznego, odpisy не додаються; якщо сторона не користується засобами електронної комунікації для отримання pism, суд готує uwierzytelnione wydruki для doręczenia. Майбутня редакція використовує формулювання postaci elektronicznej та adres do doręczeń elektronicznych з 1.10.2029.",
        },
        {
          locator: "Art. 47 § 4",
          explanation:
            "При doręczeniu odpisów у формі, іншій за форму документа електронного, суд інформує сторону про умови подання pism та їхнього doręczania засобами електронної комунікації; майбутня редакція має відповідний варіант для postaci elektronicznej.",
        },
      ],
      legalEffect:
        "Норма регулює копії та спосіб їх дорęчення, але не доводить сама по собі змістовну обґрунтованість pismo або вимоги.",
      foreignersCase:
        "Для паперового pismo у справі іноземця підготуйте odpisy документа й додатків для сторін; для електронного пакета перевірте чинний режим środków komunikacji elektronicznej і те, чи потрібні sądowi uwierzytelnione wydruki для адресата, який не користується електронним отриманням pism.",
    },
  ]),
})
