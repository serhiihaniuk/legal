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
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "22",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До завдань Szef Urzędu належать видача decyzje і postanowienia в першій інстанції та розгляд odwołania від decyzje і zażalenia на postanowienia інших органів у справах, врегульованих цією ustawa, законом про захист cudzoziemców та законом про wjazd, pobyt і wyjazd громадян UE та членів їхніх сімей.`,
          sourceLocator: "Art. 22 ust. 1 pkt 1 lit. a–c",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Szef Urzędu організовує szkolenia у межах своєї компетенції та контролює виконання wojewoda завдань за названими законами; ${foreignersLaw.article("22", "Art. 22")} ust. 1 pkt 3 і pkt 5 позначені як (uchylony).`,
          sourceLocator: "Art. 22 ust. 1 pkt 2–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Szef Urzędu виконує функції krajowy punkt kontaktowy для передбаченого законом обміну інформацією з державами UE, зокрема щодо pobyt rezydenta długoterminowego UE, mały ruch graniczny, Niebieska Karta UE, висококваліфікованої роботи та mobilność.`,
          sourceLocator: "Art. 22 ust. 1 pkt 6–8a",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`До завдань також належать передача органам wizowym інформації та документів для VIS, функції контактних пунктів у справах ochrony międzynarodowej, Eurodac та Europejskiej Sieci Migracyjnej, а також інші завдання з ustawa та окремих положень.`,
          sourceLocator: "Art. 22 ust. 1 pkt 9–11 i pkt 10a lit. a–c",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Szef Urzędu є organem wyższego stopnia у розумінні KPA щодо wojewoda у справах, врегульованих актами, названими в ust. 1 pkt 1.`,
          sourceLocator: "Art. 22 ust. 2",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("22", "Art. 22")} визначає широкий каталог завдань Szef Urzędu: рішення й засоби оскарження, szkolenia і контроль, національні контактні функції та спеціальний статус органу вищого ступеня щодо wojewoda.`,
      [
        {
          locator: "Art. 22 ust. 1 pkt 1 lit. a–c",
          explanation:
            "Спочатку визначте закон і стадію: чи Szef Urzędu діє в першій інстанції, чи розглядає odwołanie або zażalenie від іншого органу. Не підміняйте цим правилом конкретні норми про właściwość.",
        },
        {
          locator: "Art. 22 ust. 1 pkt 2–8a",
          explanation:
            "Розрізняйте szkolenia, контроль wojewoda та інформаційні функції krajowy punkt kontaktowy. Передача або отримання даних не є автоматичним доказом legalnego pobytu чи prawa do pracy.",
        },
        {
          locator: "Art. 22 ust. 1 pkt 9–11",
          explanation:
            "Для VIS, ochrony międzynarodowej, Eurodac та інших завдань встановіть конкретний pkt і мету обміну; не робіть висновок про статус лише з запису в системі або повідомлення іншому organ.",
        },
        {
          locator: "Art. 22 ust. 2",
          explanation:
            "Статус organ wyższego stopnia щодо wojewoda діє у справах трьох актів, перелічених у ust. 1 pkt 1, а не як загальна ієрархія для будь-якої справи іноземця.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("22", "Art. 22")} розподіляє завдання та апеляційну роль Szef Urzędu, але не надає cudzoziemcowi дозволу на pobyt, wjazd або wykonywanie pracy. Інформаційні та реєстрові дії мають своє процесуальне призначення й не замінюють оцінку матеріальних умов.`,
      foreignersLaw.text`Візьміть рішення або postanowienie і встановіть орган першої інстанції, вид засобу оскарження та відповідний акт. Якщо орган посилається на обмін даними або krajowy punkt kontaktowy, перевірте мету й джерело конкретної інформації, не трактуючи реєстр як самостійний доказ legalność pobytu чи права на працю.`
    ),
  ]),
})
