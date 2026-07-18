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
      provisionId: "ustawa-o-cudzoziemcach-art-187",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("187", "Art. 187")} дозволяє udzielić zezwolenie ze względu na inne okoliczności для навчання або szkolenie zawodowe, релігійної функції, pokrzywdzony, очікування виплати зарплати, захисту сімейного життя чи прав дитини, а також для іншої доведеної обставини; pkt 2 є uchylony.`,
          sourceLocator: "Art. 187 pkt 1–8",
        },
      ],
      summary:
        "Це дискреційний перелік спеціальних ситуацій; uchylony pkt 2 не може бути чинною підставою, а pkt 8 не дозволяє замінити законний тест простим особистим інтересом.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Pkt 1 охоплює намір розпочати або продовжити nauka чи szkolenie zawodowe. Pkt 2 прямо позначений як uchylony і не створює права на zezwolenie.",
        },
        {
          locator: "pkt 3–5",
          explanation:
            "Pkt 3 стосується duchowny, члена zakonu або релігійної функції у належно врегульованій церкві чи спільноті, пов'язаної з функцією або підготовкою. Pkt 4 — pokrzywdzony у визначеному законом значенні. Pkt 5 — особа, яка безпосередньо перед заявою мала дозвіл за pkt 4 і очікує zaległe wynagrodzenie від названого podmiot.",
        },
        {
          locator: "pkt 6–7",
          explanation:
            "Pkt 6 вимагає, щоб присутність нелегально перебуваючого cudzoziemiec була необхідна для поваги до życia rodzinnego за Europejska konwencja praw człowieka (EKPC). Pkt 7 — щоб виїзд нелегально перебуваючої особи істотно загрожував psychofizyczny rozwój dziecka у розумінні Konwencja o prawach dziecka.",
        },
        {
          locator: "pkt 8",
          explanation: foreignersLaw.text`Заявник має довести обставини, відмінні від pkt 1–7, розділів 2–10 та ${foreignersLaw.article("186", "art. 186")} ust. 1, які обґрунтовують pobyt у Польщі; це залишкова, але не безмежна категорія.`,
        },
      ],
      legalEffect:
        "Формула «można udzielić» означає можливість після доведення конкретної підстави; тривалий pobyt, особиста потреба або uchylony pkt 2 самі по собі zezwolenie не дають.",
      foreignersCase: foreignersLaw.text`Назвіть точний pkt ${foreignersLaw.article("187", "art. 187")}, опишіть юридично релевантну подію та доказ; для pkt 6–7 додайте документи про сім'ю або дитину, для pkt 5 — рішення чи розрахунок невиплаченої зарплати.`,
    },
  ],
})
