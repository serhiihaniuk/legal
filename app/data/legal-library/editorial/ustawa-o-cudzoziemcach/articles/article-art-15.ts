import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type EditorialEntry = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  claims: readonly {
    kind: "statute-text" | "practical-inference"
    text: LegalTextValue
    sourceLocator: string
  }[]
  summary: LegalTextValue
  rules: readonly { locator: string; explanation: LegalTextValue }[]
  legalEffect: LegalTextValue
  foreignersCase: LegalTextValue
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (
  article: string,
  claims: EditorialEntry["claims"],
  summary: LegalTextValue,
  rules: EditorialEntry["rules"],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry => ({
  provisionId: provisionId(article),
  reviewStatus: "reviewed",
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "15",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Актуальна fotografia, додана до wniosek про zezwolenie pobytowe, wiza krajowa або документ, що видається cudzoziemcowi, має без обґрунтованих сумнівів відображати обличчя без nakrycia głowy та okulary z ciemnymi szkłami.`,
          sourceLocator: "Art. 15 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`За ваду зору можна подати фотографію в okulary z ciemnymi szkłami, додавши документи про niepełnosprawność або, якщо їх неможливо подати, oświadczenie; nakrycie głowy з релігійних причин допускається, якщо обличчя повністю видно, із oświadczenie про належність до wspólnoty wyznaniowej.`,
          sourceLocator: "Art. 15 ust. 2–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`У uzasadnionych przypadkach можна подати фотографію із заплющеними очима, не природним виразом обличчя або відкритим ротом.`,
          sourceLocator: "Art. 15 ust. 4",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("15", "Art. 15")} встановлює вимоги до фотографії для wnioski pobytowe, wiza krajowa та документів для cudzoziemców, а також вузькі винятки для зору, релігійного nakrycie głowy і uzasadnione випадків.`,
      [
        {
          locator: "Art. 15 ust. 1",
          explanation:
            "Перевірте, який саме wniosek подано, чи фотографія aktualna, чи обличчя повністю відображене та чи немає nakrycia głowy або темних окулярів без спеціальної підстави.",
        },
        {
          locator: "Art. 15 ust. 2–3",
          explanation:
            "Для винятку через wadę wzroku додайте підтвердження або oświadczenie за умовами статті; для релігійного nakrycia głowy обличчя має залишатися повністю видимим і потрібне oświadczenie.",
        },
        {
          locator: "Art. 15 ust. 4",
          explanation:
            "Особливий вираз обличчя або відкритий рот не є загальним винятком: стаття вимагає uzasadniony przypadek.",
        },
      ],
      foreignersLaw.text`Вимоги та винятки ${foreignersLaw.article("15", "Art. 15")} визначають, чи може фотографія належно супроводжувати заяву. Стаття сама не надає zezwolenie, wizy або права на pracę.`,
      foreignersLaw.text`Перед поданням встановіть категорію wniosek, перевірте фотографію та підготуйте належне підтвердження винятку. Не замінюйте передбачені статтею документи довільним поясненням і не робіть із прийняття фотографії висновок про позитивне рішення.`
    ),
  ]),
})
