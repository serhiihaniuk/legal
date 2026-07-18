import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-106",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106", "Art. 106")} визначає зміст форми wniosku для zezwolenia na pobyt czasowy та додаткові załączniki залежно від заявленої мети: роботи, Niebieskiej Karty UE, господарської діяльності, стажування, волонтерства, досліджень або навчання.`,
          sourceLocator: "Art. 106 ust. 1–8",
        },
      ],
      summary:
        "Загальна форма описує особу, її pobyt і заявлену мету, а спеціальний załącznik показує, хто та якими фактами підтверджує конкретний маршрут. Правильна назва мети без правильного додатка не утворює повної заяви.",
      rules: [
        {
          locator: "Art. 106 ust. 1 i 8",
          explanation:
            "Форма wniosku охоплює персональні й сімейні дані, попередній та поточний pobyt, закордонні поїздки за 5 років, фінансові засоби, ubezpieczenie zdrowotne, мету, затримання, юридичні зобов’язання й обґрунтування. Oświadczenie про правдивість даних подається під загрозою кримінальної відповідальності з установленою klauzulą.",
        },
        {
          locator: "Art. 106 ust. 2–4",
          explanation:
            "Для робочих маршрутів załącznik роботодавця описує суб’єкт, pracodawcę użytkownika та фактичні умови праці; окремий załącznik заявника підтверджує кваліфікації й попередню мобільність для Niebieskiej Karty UE. Підписи й oświadczenia мають походити від уповноважених осіб.",
        },
        {
          locator: "Art. 106 ust. 5–7",
          explanation:
            "Для стажування або волонтерства свій załącznik заповнює відповідний організатор, для досліджень заявник подає дані наукової одиниці та програми мобільності, а для навчання за навчальний маршрут відповідає załącznik закладу освіти.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("106", "Art. 106")} визначає інформаційну архітектуру заяви. Він не замінює матеріальних умов відповідного дозволу, але дозволяє organowi встановити, які саме умови й докази треба перевіряти.`,
      foreignersCase:
        "Не починайте з готової форми. Спершу встановіть реальну мету pobytu й роль кожного суб’єкта, потім виберіть потрібний załącznik, звірте його підпис і пов’яжіть кожне поле з доказом.",
    },
  ],
})
