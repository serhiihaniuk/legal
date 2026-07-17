import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-258",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 258 визначає, що czynności у сфері przyznanie prawa pomocy виконує referendarz sądowy. Серед них — приймання й пересилання wnioski, перевірка формальних вимог та змісту, передача справи суду у випадку Art. 247, wezwanie про усунення braki та подання додаткових даних, zarządzenie про залишення без розгляду, а на posiedzenie niejawnym — postanowienia про przyznanie, cofnięcie, odmowa або umorzenie та про wynagrodzenie представника і необхідні udokumentowane wydatki. § 3 є uchylony; у особливо обґрунтованих випадках ці czynności може виконати sąd, і на акти суду, названі в § 2 pkt 6–8, przysługuje zażalenie.",
          sourceLocator: "Art. 258 § 1–4",
        },
      ],
      summary:
        "Більшість технічних і первинних дій у справі про prawo pomocy виконує referendarz sądowy, але закон залишає суду можливість діяти у особливо обґрунтованих випадках.",
      rules: [
        {
          locator: "§ 1–2 pkt 1–5",
          explanation:
            "Referendarz може прийняти і переслати wniosek, перевірити його форму та зміст, передати його суду у випадку очевидної bezzasadność skarga і вимагати усунення braki або додаткові документи.",
        },
        {
          locator: "§ 2 pkt 6–8",
          explanation:
            "До повноважень належать zarządzenie про pozostawienie wniosku без розгляду та postanowienia про результат заяви або оплату праці представника; вони виносяться на posiedzenie niejawnym у випадках, названих статтею.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "§ 3 позначений як uchylony. Сąd може виконати czynności § 2 у szczególnie uzasadnione przypadki; для відповідних актів суду Art. 258 § 4 прямо передбачає zażalenie.",
        },
      ],
      legalEffect:
        "Стаття розподіляє первинні повноваження між referendarz і sąd. Вона не означає, що рішення referendarz є остаточною оцінкою основної справи про pobyt.",
      foreignersCase:
        "У справі іноземця спочатку визначте, чи документ видав referendarz, чи sąd, і що саме він вирішує: форму, саму допомогу, витрати представника або umorzenie. Від цього залежить, чи застосовується sprzeciw за Art. 259, чи інший środek zaskarżenia.",
    },
  ]),
})
