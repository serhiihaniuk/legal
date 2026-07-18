import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalTextAuthor("kpa")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-219e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Під час провадження wojewoda викликає іноземця до особистої явки зі строком щонайменше 7 днів від doręczenia wezwania, щоб пред’явити документ особи й tytuł prawny до житла, а також здати відбитки пальців і зразок підпису.`,
          sourceLocator: "Art. 219e ust. 1",
        },
        {
          kind: "statute-text",
          text: kpaLaw.text`Це wezwanie може бути об’єднане з вимогою усунути braki formalne за ${kpaLaw.article("64", "art. 64 § 2 KPA")}, сплатити opłatę skarbową або подати докази, названі в ${foreignersLaw.article("219f", "Art. 219f")}.`,
          sourceLocator: "Art. 219e ust. 2",
        },
      ],
      summary:
        "Стаття організовує особисту явку після електронного подання: орган перевіряє оригінали документів і збирає біометричні дані та підпис.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Строк не може бути коротшим за 7 днів від вручення wezwania. Перелік дій є конкретним, тому до візиту слід підготувати документи особи й житла та врахувати вимоги щодо відбитків і підпису.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Один лист може містити кілька різних процесуальних вимог із різними правовими наслідками. Кожний пункт wezwania та кожний строк потрібно виконати окремо.",
        },
      ],
      legalEffect:
        "Належно вручене wezwanie створює обов’язок особисто виконати перелічені дії, якщо до заявника не застосовується виняток із наступних статей.",
      foreignersCase:
        "Запишіть дату doręczenia, крайній день і всі вимоги з листа. На візит візьміть оригінал документа особи та актуальний документ на житло; окремо перевірте, чи існує законний виняток щодо відбитків, підпису або явки.",
    },
  ],
})
