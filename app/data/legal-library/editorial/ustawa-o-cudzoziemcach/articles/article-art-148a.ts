import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-148a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("148a", "Art. 148a")} визначає обов’язкові дані в zaświadczenie з ${foreignersLaw.article("144", "art. 144")} ust. 1 pkt 1 lit. a: особу, jednostka, початок і строк навчання, напрям, оплату, мову, рівень мови та програму/угоду мобільності; для продовження додається інформація про перебіг навчання.`,
          sourceLocator: "Art. 148a ust. 1–1a",
        },
        {
          kind: "statute-text",
          text: "Minister właściwy do spraw szkolnictwa wyższego i nauki у porozumieniu з ministrem właściwym do spraw wewnętrznych встановлює wzór заświadczenie розпорядженням.",
          sourceLocator: "Art. 148a ust. 2",
        },
      ],
      summary:
        "Стаття визначає зміст стандартизованого zaświadczenie, на якому ґрунтується навчальна заява.",
      rules: [
        {
          locator: "ust. 1 pkt 1–12",
          explanation:
            "У документі мають бути ідентифікаційні дані, заклад і адреса, початок та період навчання, напрям/дисципліна, тип і оплата studia, мова, мовний рівень і відомості про мобільність; для kontynuacja — перебіг і зарахування предметів.",
        },
        {
          locator: "ust. 1a",
          explanation:
            "Для kontynuacja jednostka додає друк або засвідчену копію карти періодичних досягнень студента.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Зразок заświadczenie та його дані визначаються відповідним rozporządzenie.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття уніфікує доказ навчальної підстави; неповний або невідповідний zaświadczenie може впливати на оцінку заяви, але не замінює інших умов ${foreignersLaw.article("144", "art. 144")}.`,
      foreignersCase:
        "Зіставте кожне поле zaświadczenie з заявою, рішенням і фактичним навчанням; для kontynuacja перевірте карту досягнень та зараховані предмети.",
    },
  ],
})
