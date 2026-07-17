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
      provisionId: "powierzanie-pracy-art-3",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("3", "Art. 3")} ust. 1 перелічує категорії cudzoziemców зі swobodny dostęp до rynku pracy. Ust. 2–3 визначають окремі випадки роботи на підставі pobyt або zezwolenie/oświadczenie разом із допустимою підставою pobytu, а ust. 5–6 називають випадки роботи без zezwolenia na pracę або oświadczenia; ust. 7–8 передають деталізацію окремим rozporządzenia.`,
          sourceLocator: "Art. 3 ust. 1–8",
        },
      ],
      summary:
        "Стаття розділяє вільний доступ до ринку праці, роботу з дозволом та роботу без окремого дозволу. Для багатьох ситуацій потрібні одночасно документ роботи й допустима підстава pobytu; сам факт перебування в Польщі цього не доводить.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До swobodny доступу належать перелічені законом особи, зокрема окремі члени сім'ї, постійні та довгострокові резиденти ЄС, особи з міжнародним або тимчасовим захистом та деякі власники zezwolenie na pobyt czasowy.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Окремо названі робота в межах визначених pobyt, short-term mobility та продовження роботи під час окремих заяв. За ust. 3 потрібні zezwolenie/oświadczenie і одна з перелічених підстав pobytu; для ruch bezwizowy діє виняток щодо держав із wykaz.",
        },
        {
          locator: "ust. 5–8",
          explanation:
            "Karta Polaka, окремі випускники, doktoranci, міжнародні договори та приписи можуть вести до роботи без zezwolenia/oświadczenia. Інші випадки, перелік держав і умови визначаються лише у передбачених розporządzenia.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("3", "Art. 3")} може дати доступ до роботи без окремого дозволу або визначити, як дозвіл поєднується з pobyt, але не перетворює будь-який legalny pobyt на право працювати. Потрібно встановити конкретний пункт і його умови на дату роботи.`,
      foreignersCase:
        "Назвіть точну підставу: вільний доступ, pobyt із ust. 2, zezwolenie/oświadczenie з ust. 3 чи виняток ust. 5–6. Перевірте документ, строк legalnego pobytu, громадянство та чинне rozporządzenie; не робіть висновок лише з візи або штампа.",
    },
  ],
})
