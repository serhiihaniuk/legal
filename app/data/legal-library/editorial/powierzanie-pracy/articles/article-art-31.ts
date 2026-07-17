import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-31",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("31", "Art. 31")} ust. 1 передбачає відмову у видачі zezwolenie, крім випадків ${workLaw.article("13", "art. 13")} ust. 1–4, якщо на день wniosek професія cudzoziemiec є у списку zawodów starosta, затвердженому wojewoda для головного місця роботи та внесеному до rejestr. Якщо головне місце визначити неможливо, береться список для siedziba або stały pobyt polski podmiot; список може виникнути через складну ситуацію локального rynku pracy, а rejestr веде minister.`,
          sourceLocator: "Art. 31 ust. 1–10",
        },
      ],
      summary:
        "Місцевий список zawodów, для яких відмовляють у zezwolenie через складну ситуацію на локальному rynku pracy, може стати обов'язковою підставою відмови. Потрібно перевірити правильний powiat, дату публікації та можливий виняток у rozporządzenie.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Професію звіряють зі списком для головного місця роботи; коли такого місця немає, застосовується список starosta за siedziba або місцем stałego pobytu podmiot.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Starosta може на обґрунтований wniosek директора PUP і після позитивної думки powiatowa rada rynku pracy визначити список через складну локальну ситуацію. Wojewoda затверджує його, враховуючи безпеку, політику міграційну та потреби ринку.",
        },
        {
          locator: "ust. 6–10",
          explanation:
            "Minister веде rejestr у розрізі powiat і województwo та публікує його в BIP і системі teleinformatycznym; wpis публікується наступного дня. Вилучення відбувається відповідно, а винятки визначає rozporządzenie.",
        },
      ],
      legalEffect: workLaw.text`Відмова за ${workLaw.article("31", "art. 31")} стосується zezwolenie на роботу, а не автоматично legalnego pobytu. Відсутність запису в списку також не замінює перевірку інших умов дозволу.`,
      foreignersCase:
        "Зафіксуйте головне місце роботи, правильний powiat і стан rejestr на день подання. Якщо орган посилається на список, перевірте його публікацію та чи існує виняток; окремо перевірте pobyt і підставу роботи.",
    },
  ],
})
