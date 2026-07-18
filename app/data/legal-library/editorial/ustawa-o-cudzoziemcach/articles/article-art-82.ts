import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-82",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("82", "Art. 82")} ust. 1 дозволяє przedłużenie wizy krajowa лише за сукупності чотирьох умов: важливий професійний або особистий інтерес чи гуманітарна неможливість виїзду, незалежні й непередбачувані події, незмінність заявленого cel pobytu та відсутність підстав odmowa wizy krajowa; ust. 2 встановлює спеціальну оцінку SIS.`,
          sourceLocator: "Art. 82 ust. 1 pkt 1–4; ust. 2",
        },
        {
          kind: "practical-inference",
          text: "Подовження не є автоматичним продовженням після спливу візи: кожну умову треба довести, а SIS-запис потребує окремого врахування причин і загроз.",
          sourceLocator: "Art. 82 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("82", "Art. 82")} визначає матеріальні умови przedłużenie wizy krajowa для cudzoziemiec, який перебуває в Польщі. Потрібні важливий інтерес або гуманітарна перешкода виїзду, непередбачувана подія не з волі заявника, та сама мета і відсутність підстав відмови.`,
      rules: [
        {
          locator: "Art. 82 ust. 1 pkt 1–2",
          explanation:
            "Потрібен важливий interes zawodowy або osobisty чи гуманітарна неможливість виїзду, а причина звернення має виникнути незалежно від волі cudzoziemiec і бути непередбачуваною на день первинної заяви.",
        },
        {
          locator: "Art. 82 ust. 1 pkt 3–4",
          explanation:
            "Обставини не можуть показувати інший cel pobytu, ніж заявлений, і не повинні існувати об’єктивні підстави, через які візу відмовляють за законом.",
        },
        {
          locator: "Art. 82 ust. 2",
          explanation: foreignersLaw.text`Якщо дані є в SIS для odmowa wjazdu i pobytu, можливість продовження оцінюють з огляду на причини рішення держави, що внесла запис, і zagrożenia ${foreignersLaw.external("Art. 27", SIS_2018_1861_URL)} lit. d rozporządzenie nr 2018/1861.`,
        },
      ],
      legalEffect: foreignersLaw.text`За відсутності хоча б однієї сукупної умови przedłużenie не випливає з ${foreignersLaw.article("82", "Art. 82")}. Подання заяви саме по собі не дає автоматичного продовження строку wiza або права залишитися після його спливу.`,
      foreignersCase: foreignersLaw.text`Побудуйте доказову таблицю: інтерес/гуманітарна причина, дата і непередбачуваність події, незмінна мета, відсутність ${foreignersLaw.article("65", "Art. 65")} і SIS-причини; перевірте строки чинної візи та своєчасність заяви.`,
    },
  ],
})
