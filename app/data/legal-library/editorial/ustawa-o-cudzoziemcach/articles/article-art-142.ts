import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-142",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("142", "Art. 142")} встановлює умови zezwolenie на pobyt czasowy для prowadzenie działalności gospodarczej: особисті умови cudzoziemiec, а також економічні умови щодо podmiot, який веде діяльність.`,
          sourceLocator: "Art. 142 ust. 1–5",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Саме створення spółka, частка або функція в zarząd не доводять виконання фінансових, кадрових чи майбутніх економічних умов ${foreignersLaw.article("142", "art. 142")}.`,
          sourceLocator: "Art. 142 ust. 1 pkt 3, ust. 2–3",
        },
      ],
      summary:
        "Бізнесовий pobyt вимагає мети prowadzenie działalności gospodarczej, особистих умов і визначеного результату або перспективи діяльності podmiot.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Cudzoziemiec повинен мати страхування, стабільний і регулярний дохід, потрібну згоду на посаду чи професію, якщо її вимагає окремий закон, і місце проживання в Польщі.",
        },
        {
          locator: "ust. 1 pkt 3 lit. a–b",
          explanation:
            "Podmiot повинен або досягти порога доходу, або щонайменше рік мати двох працівників на умовах, названих у lit. a, або показати ресурси чи дії для досягнення цих умов у майбутньому.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Тест podmiot застосовується до визначених spółka, створених cudzoziemiec або до яких він приєднався; ust. 3 окремо охоплює функції в zarząd, komplementariusz і prokurent.",
        },
        {
          locator: "ust. 4–5",
          explanation: foreignersLaw.text`Для доходу застосовується ${foreignersLaw.article("140", "art. 140")} ust. 2. Для громадянина Туреччини у визначеній ситуації застосовується ${foreignersLaw.article("41", "art. 41")} Protokołu dodatkowego до Układ stowarzyszeniowy EWG–Turcja.`,
        },
      ],
      legalEffect:
        "Стаття формує комплексний тест для бізнесового дозволу, а не автоматичне право через володіння часткою чи посаду в spółka.",
      foreignersCase:
        "Розділіть докази особистих умов і podmiot: фінансові результати, працівників або реальний план, ресурси та фактичну діяльність. Не замінюйте доказ діяльності реєстраційним витягом.",
    },
  ],
})
