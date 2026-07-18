import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("7", "§ 7")} передбачає електронне pobieranie odcisków linii papilarnych спочатку з указівних пальців обох рук, заміну на пари середніх, безіменних або великих пальців у разі нечитабельності чи відсутності, окреме правило для однієї руки та відсутність pobrania, коли це фізично неможливо.`,
          sourceLocator: "§ 7 ust. 1–4",
        },
      ],
      summary:
        "Положення описує порядок зняття відбитків для особи, яка просить zezwolenie на pobyt czasowy, та виняток фізичної неможливості.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Використовується пристрій електронного зняття відбитків; спочатку беруться указівні пальці обох рук, а за проблеми — послідовно середні, безіменні або великі.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо є лише одна рука або немає відповідної пари пальців, беруть відбиток указівного пальця однієї руки з подальшою черговістю, визначеною в ust. 2.",
        },
        {
          locator: "ust. 4",
          explanation: "При фізичній неможливості відбитки не знімаються.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.paragraph("7", "§ 7")} регулює ідентифікаційний етап і підготовку даних для карти pobytu; він не встановлює матеріальне право на дозвіл.`,
      foreignersCase:
        "На процедурній дії повідомте про фізичні обставини, що впливають на пальці. Якщо зняття фізично неможливе, перевірте, щоб це було належно зафіксовано у відповідній інформації, а не трактуйте відсутність відбитків як автоматичну відмову.",
    },
  ],
})
