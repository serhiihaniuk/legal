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
      "19",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Інформацію про nabór на посаду Szef Urzędu публікують у загальнодоступному місці в siedziba Urzędu, у BIP Urzędu do Spraw Cudzoziemców і BIP Kancelarii Prezesa Rady Ministrów; ogłoszenie має містити назву й адресу, посаду, вимоги, завдання, потрібні документи, строк і місце подання та методи nabór.`,
          sourceLocator: "Art. 19 ust. 1–2 pkt 1–7",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Строк подання документів не може бути коротшим за 10 днів від публікації в BIP Kancelarii Prezesa Rady Ministrów; nabór проводить команда, призначена міністром, оцінюючи досвід, знання та керівні компетенції, із можливістю залучити кваліфікованого оцінювача та обов’язком зберігати таємницю інформації про кандидатів.`,
          sourceLocator: "Art. 19 ust. 3–7",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Команда обирає не більше трьох кандидатів і подає їх міністру, складає протокол із даними команди, кандидатів, методів та обґрунтування, а результат nabór оголошується невідкладно в обох BIP; інформація про результат містить, зокрема, дані обраних кандидатів або повідомлення, що кандидата не обрано, а публікація є безплатною.`,
          sourceLocator:
            "Art. 19 ust. 8–12, w szczególności ust. 9 pkt 1–6 i ust. 11 pkt 1–3",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("19", "Art. 19")} детально регулює публічний і конкурентний nabór на посаду Szef Urzędu: ogłoszenie, строк, оцінювання, протокол і оприлюднення результату.`,
      [
        {
          locator: "Art. 19 ust. 1–3",
          explanation:
            "Зіставте ogłoszenie з усіма сімома елементами ust. 2 і перевірте, що строк подання документів становив щонайменше 10 днів від публікації в BIP KPRM.",
        },
        {
          locator: "Art. 19 ust. 4–8",
          explanation:
            "Перевірте склад команди (не менше трьох осіб), критерії оцінювання, можливе залучення оцінювача, таємницю і подання не більше трьох кандидатів.",
        },
        {
          locator: "Art. 19 ust. 9–12",
          explanation:
            "Зіставте протокол і повідомлення про результат із переліченими даними та перевірте публікацію в обох BIP; стаття передбачає безплатне розміщення.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("19", "Art. 19")} забезпечує правила відкритого добору керівника Urząd. Вона не встановлює умови розгляду wniosku cudzoziemca і не є доказом legalności pobytu чи prawa do pracy.`,
      foreignersLaw.text`Для перевірки nabór збережіть ogłoszenie, дату публікації в BIP KPRM, подані документи, протокол і результат. Не переносіть правила кадрового конкурсу на оцінку decyzja у справі іноземця.`
    ),
  ]),
})
