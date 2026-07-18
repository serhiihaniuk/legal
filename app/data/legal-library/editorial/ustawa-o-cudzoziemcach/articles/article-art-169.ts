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
      provisionId: "ustawa-o-cudzoziemcach-art-169",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("169", "Art. 169")} зобов'язує орган перевірити, чи шлюб у справах з ${foreignersLaw.article("158", "art. 158")} ust. 1 pkt 1 або ${foreignersLaw.article("159", "art. 159")} ust. 3 pkt 1 укладено для обходу правил в'їзду та pobyt, а в окремих справах ${foreignersLaw.article("160", "art. 160")} — чи зв'язки є rzeczywiste i stałe.`,
          sourceLocator: "Art. 169 ust. 1–5",
        },
      ],
      summary:
        "Перевірка pozorne małżeństwo або реальності сімейного зв'язку є спеціальною частиною провадження, а не автоматичним висновком із одного документа чи відповіді.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Орган встановлює мету укладення шлюбу в справах, прямо названих у ${foreignersLaw.article("158", "art. 158")} ust. 1 pkt 1 та ${foreignersLaw.article("159", "art. 159")} ust. 3 pkt 1.`,
        },
        {
          locator: "ust. 2 pkt 1–7",
          explanation:
            "Зокрема перевіряються майнова вигода за шлюб, невиконання юридичних обов'язків подружжя, відсутність спільного проживання чи gospodarstwo domowe, відсутність зустрічі до шлюбу, незнання спільної мови, неузгодженість особистих та істотних даних і попередні pozorne małżeństwa. Це індикатори для оцінки, а не автоматичний доказ.",
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`У справах з ${foreignersLaw.article("160", "art. 160")} pkt 3, 5 або 6 орган встановлює, чи зв'язок з громадянином Польщі, UE/EFTA/Швейцарії або UK є rzeczywisty i stały.`,
        },
        {
          locator: "ust. 4–5",
          explanation: foreignersLaw.text`Орган може звернутися до komendant oddziału або placówki Straży Granicznej за місцем pobyt для дій з ${foreignersLaw.article("11", "art. 11")} ust. 1; під час встановлення за ust. 1–3 і цих дій ${foreignersLaw.article("79", "art. 79")} KPA не застосовується.`,
        },
      ],
      legalEffect:
        "Свідоцтво про шлюб не виключає спеціальної перевірки, але окремий неспівпадіння відповідей також не доводить обхід правил без оцінки всіх обставин.",
      foreignersCase:
        "Підготуйте докази реального спільного життя, господарства й історії стосунків, поясніть розбіжності та з'явіться на виклик органу або Straż Graniczna; не приховуйте попередні шлюби.",
    },
  ],
})
