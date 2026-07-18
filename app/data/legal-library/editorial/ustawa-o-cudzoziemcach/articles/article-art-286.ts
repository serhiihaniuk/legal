import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-286",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Cudzoziemcy, які є учнями з państw trzecich і беруть участь у шкільній поїздці до іншої держави-члена UE за правилами decyzja Rady 94/795/WSiSW, можуть бути включені директором школи до listy podróżujących для поїздок у UE.",
          sourceLocator: "Art. 286 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Wojewoda за місцем осідку школи на заяву директора підтверджує персональні дані учнів і їхнє право на повторний в’їзд до Польщі; список складається на formularzu.",
          sourceLocator: "Art. 286 ust. 2–3",
        },
      ],
      summary:
        "Стаття створює спеціальний механізм listy podróżujących для учнів із państw trzecich і підтвердження їхніх даних та права на ponowny wjazd до RP.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Має йтися про учня з państwa trzeciego, шкільну поїздку до іншої держави ЄС і умови відповідного рішення Ради.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Звертається директор школи, а підтвердження надає wojewoda за місцем її siedziby на встановленому formularzu.",
        },
      ],
      legalEffect:
        "Підтвердження стосується персональних даних і права на ponowny wjazd у межах цього механізму; воно не є загальним дозволом на будь-які поїздки.",
      foreignersCase:
        "Школа має заздалегідь зібрати дані учнів і подати wniosek wojewodzie за своєю siedzibą. Перед виїздом перевірте, що кожен учень включений до підтвердженої listy podróżujących.",
    },
  ],
})
