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
      provisionId: "ustawa-o-cudzoziemcach-art-436",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("436", "Art. 436")} ust. 1: «W wykazie nie umieszcza się danych cudzoziemca» у перелічених категоріях, якщо не діє зазначений виняток.`,
          sourceLocator: "Art. 436 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Стаття встановлює винятки з невнесення, тому статус małżonek, małoletni або власника дозволу треба перевіряти разом із безпековими та іншими умовами.",
          sourceLocator: "Art. 436 ust. 1 pkt 1–6",
        },
      ],
      summary:
        "Стаття називає категорії, дані яких за загальним правилом не вносять до wykaz: деякі małżonkowie, małoletni, особи з оплаченим штрафом, постійним або резидентським дозволом, захистом чи скасованим zakaz wjazdu; водночас містить винятки.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Захист для małżonek і małoletni не діє, зокрема, коли є безпекові підстави, санкційний wpis або остаточні рішення про шлюб для обходу правил; для małoletni є виняток загрози безпеці.",
        },
        {
          locator: "ust. 1 pkt 3–6",
          explanation:
            "Не вносять особу лише зі штрафом, якщо його сплачено, власника zezwolenie na pobyt stały або rezydent UE, визначених бенефіціарів захисту та особу зі скасованим zakaz ponownego wjazdu.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Дані особи, яка підпадає під ust. 1, уже внесені до wykaz, видаляються.",
        },
      ],
      legalEffect:
        "Стаття обмежує можливість wpis для захищених категорій, але винятки можуть відновити можливість внесення. Потрібна оцінка статусу й конкретних обставин на дату рішення.",
      foreignersCase: foreignersLaw.text`Зберіть документ про шлюб, вік, статус pobyt, захист, оплату штрафу чи cofnięcie zakazu та перевірте, чи немає винятку з ${foreignersLaw.article("436", "Art. 436")} ust. 1.`,
    },
  ],
})
