import type { LegalProvisionId } from "../../../contracts"

import { authorLegalTextCitationsTree } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedArticleData = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  statuteText: string
  statuteLocator: string
  practicalText: string
  practicalLocator: string
  summary: string
  rules: readonly { locator: string; explanation: string }[]
  legalEffect: string
  foreignersCase: string
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (article: string, data: ReviewedArticleData) => ({
  provisionId: data.provisionId ?? provisionId(article),
  reviewStatus: data.reviewStatus,
  claims: [
    {
      kind: "statute-text" as const,
      text: data.statuteText,
      sourceLocator: data.statuteLocator,
    },
    {
      kind: "practical-inference" as const,
      text: data.practicalText,
      sourceLocator: data.practicalLocator,
    },
  ],
  summary: data.summary,
  rules: data.rules,
  legalEffect: data.legalEffect,
  foreignersCase: data.foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("100", {
      provisionId: "ustawa-o-cudzoziemcach-art-100",
      reviewStatus: "reviewed",
      statuteText:
        "Zezwolenia na pobyt czasowy відмовляють, якщо не виконані вимоги заявленої мети або немає обґрунтування pobyt понад 3 місяці, є wpis у wykaz або SIS для odmowa wjazdu/pobyt, безпекова чи міжнародно-правова перешкода, неправдиві дані/документи/свідчення, податковий борг, неповернені кошти за powrót, відмова від обов’язкового лікування або незаконний pobyt. За SIS допускається окрема оцінка з консультацією; наступний дозвіл може бути відмовлений через невиконання Art. 113 у межах строку з ust. 2.",
      statuteLocator: "Art. 100 ust. 1 pkt 1–9; ust. 1a–2",
      practicalText:
        "На відміну від Art. 99, тут орган оцінює матеріальне право і приймає odmowa udzielenia. Кожна підстава потребує власного доказу; наявність заявленої роботи або договору не усуває SIS, безпекові, податкові чи документальні перешкоди.",
      practicalLocator: "Art. 100 ust. 1–2",
      summary:
        "Art. 100 визначає матеріальні підстави відмови у тимчасовому pobyt і спеціальний порядок реагування на SIS-запис та невиконання обов’язку повідомлення за Art. 113.",
      rules: [
        {
          locator: "Art. 100 ust. 1 pkt 1–4",
          explanation:
            "Перевіряються мета й умови pobyt, wykaz небажаних іноземців, SIS-впис для відмови у в’їзді/побиті та оборона, безпека, порядок або міжнародні зобов’язання.",
        },
        {
          locator: "Art. 100 ust. 1 pkt 5–8",
          explanation:
            "Підставами є неправдиві дані, інформація чи документи, неправда/приховування/підроблення, податковий борг, неповернені кошти за рішення про powrót або відмова від обов’язкового лікування; для боргу діють названі винятки.",
        },
        {
          locator: "Art. 100 ust. 1 pkt 9",
          explanation:
            "Відмовляють, якщо wniosek подано під час незаконного pobyt або cudzoziemiec перебуває в Польщі незаконно.",
        },
        {
          locator: "Art. 100 ust. 1a–1b",
          explanation:
            "За SIS-записом можна надати дозвіл з урахуванням причин і загроз за art. 27 lit. d rozporządzenia nr 2018/1861; wojewoda або Szef Urzędu проводить передбачені консультації через KGP.",
        },
        {
          locator: "Art. 100 ust. 2",
          explanation:
            "Наступний zezwolenie na pobyt czasowy може бути відмовлений, якщо не виконано Art. 113 і новий wniosek подано до року від завершення попереднього дозволу або остаточного cofnięcie.",
        },
      ],
      legalEffect:
        "Встановлена підстава веде до odmowa udzielenia, а не лише до неприйняття wniosku. Виняток для SIS є оцінкою, а не автоматичним дозволом; рішення про pobyt не слід плутати з правом виконувати конкретну роботу.",
      foreignersCase:
        "Побудуйте таблицю доказів за pkt 1–9: cel і тривалість, wykaz/SIS, безпека, достовірність, податки, витрати powrót, лікування та legalność pobytu. Якщо посилаються на Art. 113, порахуйте рік і додайте доказ повідомлення або причину його відсутності.",
    }),
  ]),
})
