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
      provisionId: "ustawa-o-cudzoziemcach-art-211",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Zezwolenie na pobyt rezydenta długoterminowego UE надається на невизначений строк на заяву іноземця, який безпосередньо перед поданням заяви щонайменше 5 років легально й безперервно перебував у Польщі та одночасно має стабільний регулярний дохід, медичне страхування і підтверджене знання польської мови.",
          sourceLocator: "Art. 211 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Вимоги до доходу з ${foreignersLaw.article("140", "Art. 140")} ust. 2 мають виконуватися протягом 2 років перед заявою у випадку з ${foreignersLaw.article("212", "Art. 212")} ust. 1 pkt 1, а в інших випадках — протягом 3 років.`,
          sourceLocator: "Art. 211 ust. 2",
        },
        {
          kind: "statute-text",
          text: "Знання польської мови підтверджується документом щонайменше рівня B1 або визначеним у статті польським чи закордонним свідоцтвом або дипломом з польською мовою навчання. Вимога не стосується особи, якій на день подання заяви не виповнилося 16 років.",
          sourceLocator: "Art. 211 ust. 3–5",
        },
      ],
      summary:
        "Стаття встановлює сукупні матеріальні умови для zezwolenia na pobyt rezydenta długoterminowego UE: потрібні належний період легального безперервного перебування, дохід, страхування та, за загальним правилом, підтверджена польська мова.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "П’ятирічний період сам по собі недостатній. На дату оцінки мають бути виконані всі три додаткові умови, а спосіб зарахування періодів перебування потрібно перевіряти разом із наступними статтями цього розділу.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Дохід перевіряють не лише на день подання заяви. Треба показати виконання встановленого рівня в усьому відповідному дворічному або трирічному періоді.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Не кожний документ про навчання підтверджує мовну умову: стаття виключає świadectwo ukończenia szkoły policealnej та відсилає до урядового переліку прийнятних poświadczeń. Для заявника до 16 років мовної умови немає.",
        },
      ],
      legalEffect:
        "Після доведення всіх умов дозвіл надається на невизначений строк. Це не означає, що сама karta pobytu також не має строку дії: статус і документ потрібно аналізувати окремо.",
      foreignersCase:
        "Складіть хронологію п’яти років, окремо позначте періоди, що можуть не зараховуватися, і підготуйте докази доходу за належні 2 або 3 роки, страхування та прийнятний мовний документ або віковий виняток.",
    },
  ],
})
