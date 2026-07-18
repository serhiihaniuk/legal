import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-48",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 48 вимагає подати оригінал документа на żądanie sądu, допускає urzędowo poświadczony odpis або wyciąg документа з визначених akt органу та засвідчений odpis; за умовами статті sąd може вимагати оригінал.",
          sourceLocator: "Art. 48 § 1–5",
        },
      ],
      summary:
        "Оригінал подається на вимогу sądu, а odpis замінює його лише у формах і за умовами Art. 48; для документа в aktach визначеного органу діє окреме правило.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Strona, яка посилається на документ, на żądanie sądu подає оригінал ще перед rozprawą.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо документ міститься в aktach органу, названого в § 2, достатньо urzędowo poświadczony przez ten organ odpis або wyciąg; якщо strona не може його отримати, sąd просить орган надати копію, а за необхідності може попросити оригінал.",
        },
        {
          locator: "§ 3–3a",
          explanation:
            "Замість оригіналу можна подати odpis, засвідчений notariusz або професійним pełnomocnik: adwokat, radca prawny, rzecznik patentowy, doradca podatkowy чи radca Prokuratorii Generalnej RP; для електронного odpis потрібен kwalifikowany, zaufany або osobisty podpis у визначеній формі.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Poświadczenie професійного pełnomocnik має характер dokument urzędowy, але за обставинами справи sąd на wniosek сторони або з urzędu може вимагати оригінал.",
        },
      ],
      legalEffect:
        "Норма визначає допустиму форму документа й не означає, що кожен odpis автоматично достатній для доведення конкретної обставини.",
      foreignersCase:
        "У справі про pobyt зберігайте оригінали decyzja, doręczenie та ключових доказів; для odpis перевірте конкретний спосіб poświadczenie й будьте готові подати оригінал на żądanie sądu.",
    },
  ]),
})
