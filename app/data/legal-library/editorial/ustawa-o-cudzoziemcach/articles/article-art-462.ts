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
      provisionId: "ustawa-o-cudzoziemcach-art-462",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("462", "Art. 462")} передбачає administracyjna kara для przewoźnik, який повітрям або морем привіз до кордону cudzoziemca без необхідного чинного документа подорожі, візи чи іншого документа для в’їзду і pobyt, а за потреби — без дозволу на в’їзд до іншої держави або pobyt в ній: еквівалент 3000–5000 euro за особу, з лімітом 500 000 euro за одноразове перевезення групи.`,
          sourceLocator: "Art. 462 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Ust. 1 не застосовується, якщо cudzoziemiec під час контролю подав wniosek o udzielenie ochrony międzynarodowej або якщо przewoźnik, попри należyta staranność, не міг встановити відсутність потрібних документів.",
          sourceLocator: "Art. 462 ust. 3 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Штраф накладає рішенням komendant placówki Straży Granicznej, де відмовлено у в’їзді; передбачено odwołanie до Komendant Główny Straży Granicznej, оплату протягом 14 днів від остаточності рішення, адміністративне стягнення, відсотки за прострочення та давність 5 років від кінця календарного року, в якому настав строк оплати.",
          sourceLocator: "Art. 462 ust. 4–12",
        },
      ],
      summary:
        "Стаття регулює administracyjna kara для визначених przewoźnik за доставлення до кордону особи без потрібних документів для перетину кордону, в’їзду або подальшого pobyt, встановлює винятки, процедуру, оплату та виконання.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Штраф стосується повітряних і морських перевізників, а також regularne przewozy осіб у міжнародному дорожньому транспорті, крім ruch przygraniczny; розмір — еквівалент 3000–5000 euro за особу, а для групи максимум 500 000 euro.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Штраф не застосовується у двох прямо названих випадках: подання заяви про міжнародний захист під час контролю або доведена неможливість виявити відсутність документів попри należyta staranność.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "Еквівалент euro перераховують у złote за середнім курсом NBP у день видачі рішення; рішення приймає відповідний komendant placówki Straży Granicznej, а odwołanie подається до Komendant Główny Straży Granicznej.",
        },
        {
          locator: "ust. 7–12",
          explanation:
            "Строк оплати — 14 днів від остаточності рішення; прострочені суми мають відсотки, стягуються в адміністративному порядку, можуть виконуватися без попереднього upomnienie, а вимога давніє за правилом ust. 12.",
        },
      ],
      legalEffect:
        "Норма встановлює адміністративну відповідальність przewoźnik, а не автоматичний штраф для cudzoziemca. Важливі вид перевезення, відсутній документ, належна старанність, можливий wniosek про міжнародний захист, остаточність рішення та правильний розрахунок суми.",
      foreignersCase:
        "Для перевірки рішення зберіть дані про маршрут і вид przewoźnik, документи особи, протокол контролю, можливу заяву про міжнародний захист та докази należyta staranność; звірте курс NBP, строк оплати й pouczenie про odwołanie.",
    },
  ],
})
