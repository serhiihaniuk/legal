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
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("106", {
      provisionId: "ustawa-o-cudzoziemcach-art-106",
      reviewStatus: "reviewed",
      statuteText:
        "Wniosek про temporary residence permit подається на formularz із даними cudzoziemiec, сім’ї в Польщі, попередніх і теперішнього pobyt, поїздок, коштів, ubezpieczenie, declarowany cel, обмежень свободи, зобов’язань, wzór podpisu та oświadczenie про правдивість під кримінальною відповідальністю; pkt 2–5 і 9 ust. 1 позначені як uchylony. Для permit i pracę, high qualifications, окремих функцій у spółka та інших спеціальних цілей додаються annexes з даними podmiot, роботи, кваліфікацій, організатора або jednostka naukowa. Потрібні travel document, фотографії, підтвердні документи, odciski linii papilarnych та виконання wezwanie.",
      statuteLocator: "Art. 106 ust. 1 pkt 1–16; ust. 1a–1e; ust. 2–5",
      practicalText:
        "Art. 106 — доказова та ідентифікаційна основа провадження: кожен факт у formularz має відповідати паспорту, annex, договору та підтвердному документу. Неподання документів може вести до wezwanie, а fingerprints мають окремий процесуальний режим; сама повна форма не гарантує permit або work authorization.",
      practicalLocator: "Art. 106 ust. 1–5",
      summary:
        "Art. 106 визначає зміст wniosek і спеціальних annexes, документи, wezwanie для їх подання, travel document та fingerprints у справі про temporary residence permit.",
      rules: [
        {
          locator: "Art. 106 ust. 1 pkt 1, 6–8, 10–16",
          explanation:
            "Основна форма містить ідентифікаційні та сімейні дані, історію pobyt і поїздок, кошти, страховку, мету, обмеження свободи, зобов’язання, підпис та oświadczenie про правдивість; pkt 2–5 і 9 — uchylony.",
        },
        {
          locator: "Art. 106 ust. 1a–1b",
          explanation:
            "Для permit i pracę, high qualifications та визначеної роботи через spółka annex подає podmiot powierzający; він охоплює суб’єктів, stanowisko/rodzaj pracy, zawód, місце, підставу, час, оплату, обов’язки, період і oświadczenie про неkaralność.",
        },
        {
          locator: "Art. 106 ust. 1c–1e",
          explanation:
            "Окремі annexes стосуються high qualifications і Blue Card mobility, стажера/волонтера та дослідника: кваліфікацій і попередньої EU mobility, даних організатора або jednostka naukowa та програм мобільності.",
        },
        {
          locator: "Art. 106 ust. 2–2b",
          explanation:
            "Подаються чинний travel document, фотографії та докази обставин; за відсутності доказів wojewoda дає щонайменше 14 днів, а суміщений виклик має строк не коротший за найдовший з пов’язаних строків.",
        },
        {
          locator: "Art. 106 ust. 3–5",
          explanation:
            "Інший документ особи допускається лише у спеціально обґрунтованому випадку неможливості отримати travel document; fingerprints є обов’язковими, а коли їх не можна взяти з вини wojewoda, він призначає строк не менше 7 днів.",
        },
      ],
      legalEffect:
        "Стаття визначає, які відомості та докази орган може перевіряти, і як усуваються неповні матеріали. Вона не є рішенням про legal stay, eligibility permit або work authorization.",
      foreignersCase:
        "Зробіть копію всього formularz і annexes; звірте ПІБ, сім’ю, адреси, 5-річні поїздки, кошти, insurance, cel, паспорт, фото, договори, kwalifikacje та дані podmiot. Ведіть календар wezwanie, подання документів і fingerprints.",
    }),
  ]),
})
