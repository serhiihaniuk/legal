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
      "7",
      [
        {
          kind: "statute-text",
          text: "Органи, що ведуть справи про wiza, продовження візи, zezwolenie na pobyt czasowy/stały або rezydent długoterminowy UE, zobowiązanie do powrotu, а також органи контролю, письмово pouczają cudzoziemca зрозумілою для нього мовою про порядок, права та обов’язки.",
          sourceLocator: "Art. 7 ust. 1",
        },
        {
          kind: "statute-text",
          text: "У справі про zobowiązanie do powrotu pouczenie включає, зокрема, інформацію про вимоги до podmiot powierzający pracę, можливе zezwolenie на pobyt під час кримінального провадження та інші дії проти такого суб’єкта; електронне pouczenie можливе за письмовою згодою cudzoziemca.",
          sourceLocator: "Art. 7 ust. 2–3",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("7", "Art. 7")} встановлює обов’язок зрозумілого письмового pouczenie і спеціальну інформацію для справи про повернення.`,
      [
        {
          locator: "Art. 7 ust. 1",
          explanation:
            "Визначте вид провадження та перевірте, чи отримав cudzoziemiec письмову інформацію зрозумілою мовою про права й обов’язки.",
        },
        {
          locator: "Art. 7 ust. 2",
          explanation:
            "У справі про powrót перевірте спеціальні відомості про вимоги до pracodawca та можливі засоби захисту потерпілої особи.",
        },
        {
          locator: "Art. 7 ust. 3",
          explanation:
            "Електронна форма замінює вручення лише за умов, прямо названих у статті, включно з письмовою згодою.",
        },
      ],
      "Pouczenie допомагає реалізувати процесуальні права, але саме по собі не змінює матеріальний статус pobyt і не скасовує обов’язок виїзду.",
      foreignersLaw.text`Збережіть pouczenie, мову, форму та дату отримання. У справі про powrót окремо перевірте, чи надано спеціальну інформацію за ${foreignersLaw.article("7", "Art. 7")} ust. 2.`
    ),
  ]),
})
