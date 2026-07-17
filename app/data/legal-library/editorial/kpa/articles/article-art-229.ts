import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "229",
      provisionId: "kpa-art-229",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює стандартну таблицю компетенції для skarg на різні державні й самоврядні органи, якщо спеціальний закон не називає іншого адресата. Компетенція залежить від того, чия діяльність оскаржується і в якій сфері.",
      rules: [
        {
          locator: "pkt 1–5",
          explanation:
            "Для рад і виконавчих органів gminy, powiatu та województwa адресатами є, залежно від органу й виду завдання, wojewoda, regionalna izba obrachunkowa або відповідна рада чи sejmik.",
        },
        {
          locator: "pkt 6",
          explanation:
            "Скаргу на wojewodę у справах, що розглядаються за KPA, розглядає właściwy minister, а в інших справах — Prezes Rady Ministrów.",
        },
        {
          locator: "pkt 7–8a",
          explanation:
            "На інший орган урядової адміністрації скарга йде organowi wyższego stopnia або наглядовому органу, на ministra — Prezesowi Rady Ministrów, на konsula — міністру закордонних справ.",
        },
        {
          locator: "pkt 9",
          explanation:
            "Скаргу на organ centralny або його керівника розглядає орган, якому він підпорядкований.",
        },
      ],
      legalEffect:
        "За відсутності lex specialis стаття безпосередньо визначає, хто має розглянути skargę на діяльність указаного органу.",
      foreignersCase:
        "Для типової skargi на діяльність wojewody у справі pobytowej адресатом за pkt 6 є właściwy minister. Це не означає, що minister у цьому режимі переглядає саму decyzję замість органу odwoławczego.",
    },
  ],
})
