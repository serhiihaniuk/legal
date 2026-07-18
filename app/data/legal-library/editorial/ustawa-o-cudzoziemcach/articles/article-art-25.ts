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
      "25",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Cudzoziemiec, який в’їжджає до Польщі, має uzasadnić cel і warunki planowanego pobytu, а також мати й на вимогу показати підтвердження ubezpieczenie zdrowotne або, для wjazd на підставі wizy krajowej, podróżne ubezpieczenie medyczne щонайменше на 30 000 euro з покриттям визначених медичних і пов’язаних витрат.`,
          sourceLocator: "Art. 25 ust. 1 pkt 1 i pkt 2 lit. a",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`За ${foreignersLaw.article("25", "Art. 25")} ust. 1 pkt 2 lit. b cudzoziemiec має мати кошти на планований pobyt і поворот до państwo pochodzenia або zamieszkania чи tranzyt до państwo trzecie, або документ про можливість законно отримати такі кошти.`,
          sourceLocator: "Art. 25 ust. 1 pkt 2 lit. b",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для визначених видів mobilność krótkoterminowa з іншою державою UE, що не є державою Schengen, потрібно додатково показати копію wysłane zawiadomienie або передбачений законом лист jednostka przyjmująca; для mobilność krótkoterminowa posiadacza Niebieskiej Karty UE потрібно довести, що wjazd і pobyt мають на меті wykonywanie działalności zawodowej.`,
          sourceLocator: "Art. 25 ust. 1a pkt 1–4 i ust. 1aa",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Podróżne ubezpieczenie medyczne має бути видане страховиком із цілодобовим centrum alarmowe; страховик без siedziba або oddział у названих державах може відповідати лише за додаткових умов публікації аудиту та щонайменше піврічних даних про składki і wypłaty.`,
          sourceLocator: "Art. 25 ust. 1b pkt 1–2 lit. a–b",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`У чинному тексті ${foreignersLaw.article("25", "Art. 25")} ust. 2 позначений як (uchylony) і не містить активного правила.`,
          sourceLocator: "Art. 25 ust. 2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Обов’язок показати кошти або документи про можливість їх отримання не застосовується до перелічених підстав wjazd, зокрема відповідних umowy międzynarodowe, wiza repatriacyjna, wiza w celu wykonywania pracy, деяких віз із ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 5, 5a, візи ochrony czasowej, возз’єднання сім’ї, karta pobytu, Karta Polaka, а також до niesienie pomocy charytatywnej чи участі в akcji ratunkowej.`,
          sourceLocator: "Art. 25 ust. 3 pkt 1 lit. a–c, ca–cb, d–g i pkt 2–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Вимогу про ubezpieczenie medyczne можна вважати виконаною, якщо cudzoziemiec має відповідне страхування у зв’язку зі своєю sytuacja zawodowa; документи перевіряє funkcjonariusz Straży Granicznej під час перетину, а minister właściwy do spraw zagranicznych публікує й оновлює список страховиків і страхових продуктів, що відповідають умовам.`,
          sourceLocator: "Art. 25 ust. 4–6",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("25", "Art. 25")} визначає, що cudzoziemiec має обґрунтувати мету та умови планованого pobytu і на кордоні показати передбачені документи, страхування та кошти, з окремими винятками й правилами для mobilność.`,
      [
        {
          locator: "Art. 25 ust. 1 pkt 1 i pkt 2 lit. a–b",
          explanation:
            "Підготуйте окремий доказ мети й умов pobyt, документ про страхування та доказ коштів або законної можливості їх отримання. Вимогу про кошти не змішуйте з вимогою про медичне страхування.",
        },
        {
          locator: "Art. 25 ust. 1a–1aa",
          explanation:
            "Якщо використовується mobilność з іншої держави UE поза Schengen, перевірте відповідний документ pobytowy або wizę, копію zawiadomienie чи лист jednostka przyjmująca; для Niebieska Karta UE додайте доказ działalność zawodowa.",
        },
        {
          locator: "Art. 25 ust. 1b",
          explanation:
            "Для podróżne ubezpieczenie перевірте 24/7 centrum alarmowe, територіальну умову страховика та, за потреби, опублікований аудит і піврічні показники.",
        },
        {
          locator: "Art. 25 ust. 3–4",
          explanation:
            "Спершу встановіть, чи є конкретна підстава для звільнення від показу коштів; це звільнення не слід автоматично поширювати на інші документи. Окремо перевірте можливість виконання вимоги страхування через sytuacja zawodowa.",
        },
        {
          locator: "Art. 25 ust. 5–6",
          explanation:
            "Під час graniczna kontrola документи перевіряє Straż Graniczna. Список страховиків на сайті MFA є інструментом перевірки умов страхування, а не рішенням про wjazd.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("25", "Art. 25")} встановлює обов’язки та документи для контролю під час wjazd. Їх виконання є лише елементом прикордонної оцінки: стаття сама не гарантує в’їзд, legalnego pobytu на весь строк або prawa do pracy.`,
      foreignersLaw.text`Для конкретного wjazd зафіксуйте мету, маршрут, підставу візи або mobilność, страхування, фінансові документи та всі заявлені винятки. Перевірте актуальність доказів на дату контролю і не робіть висновок про legalność pobytu чи prawo do pracy лише з наявності одного документа або запису в реєстрі.`
    ),
  ]),
})
