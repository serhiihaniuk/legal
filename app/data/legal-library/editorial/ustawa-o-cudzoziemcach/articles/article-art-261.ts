import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-261",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument tożsamości cudzoziemca у період чинності підтверджує tożsamość під час перебування в Польщі, але не підтверджує obywatelstwo, не дає права перетинати кордон і не звільняє від обов’язку отримати wizę, zezwolenie na pobyt czasowy, stały або rezydenta długoterminowego UE.",
          sourceLocator: "Art. 261 ust. 1–3",
        },
      ],
      summary:
        "Стаття чітко відділяє підтвердження tożsamość польським документом особи від громадянства, перетину кордону та обов’язку мати потрібну підставу pobytu.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Документ доводить tożsamość, але не відповідає на питання, громадянином якої держави є особа.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Для перетину кордону та законного pobytu потрібні інші документи або підстави, якщо вони вимагаються.",
        },
      ],
      legalEffect:
        "Наявність документа не підтверджує obywatelstwo, не створює права на перетин кордону і не замінює wizę або прямо назване zezwolenie na pobyt.",
      foreignersCase:
        "Під час перевірки пред’являйте цей документ лише як доказ особи, а статус pobytu підтверджуйте окремою візою, картою або рішенням, якщо це потрібно.",
    },
  ],
})
