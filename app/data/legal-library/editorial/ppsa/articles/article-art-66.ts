import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-66",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У чинній на 14.07.2026 редакції Art. 66 професійні представники — adwokat, radca prawny, doradca podatkowy, rzecznik patentowy та Prokuratoria Generalna RP — надсилають pismo один одному безпосередньо з potwierdzenie odbioru і датою або przesyłka polecona та додають oświadczenie; електронні pismo мають виняток. Електронна модель на адреси do doręczeń elektronicznych набирає чинності 1.10.2029.",
          sourceLocator: "Art. 66 § 1–3",
        },
      ],
      summary:
        "На legalStateDate для визначених професійних представників діє переважно безпосереднє або рекомендоване вручення; електронна модель із адресами do doręczeń elektronicznych є майбутньою та має окремі винятки.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Поточний § 1 вимагає oświadczenie про вручення odpis іншій стороні або його надсилання przesyłka polecona; без oświadczenie pismo повертається без wezwanie. Для електронного документа, адресованого професійному представнику, який застосовує електронні засоби, діє виняток § 1a.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Поточний § 2 допускає вручення адресату безпосередньо в sekretariat sądu, а § 3 виключає з § 1 skarga, skarga kasacyjna, zażalenie, sprzeciw, skarga o wznowienie та skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia.",
        },
        {
          locator: "Przypisy 36–37",
          explanation:
            "З 1.10.2029 § 1 перейде на адреси do doręczeń elektronicznych, а § 2 міститиме ширший перелік винятків, зокрема sprzeciw od decyzji та odpowiedź na skargę kasacyjną; це не поточне правило.",
        },
      ],
      legalEffect:
        "Наслідок zwrot стосується чинних умов § 1; не можна механічно застосовувати майбутню електронну модель або її перелік винятків до дій на 14.07.2026.",
      foreignersCase:
        "Якщо cudzoziemca представляє adwokat або radca prawny, за поточною редакцією перевірте вид pismo, спосіб безпосереднього doręczenie та oświadczenie; не застосовуйте майбутній § 1 до 1.10.2029.",
    },
  ]),
})
