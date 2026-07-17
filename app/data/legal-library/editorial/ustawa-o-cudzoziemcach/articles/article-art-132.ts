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
      provisionId: "ustawa-o-cudzoziemcach-art-132",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("132", "Art. 132")}, poza випадками ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9, передбачає odmowa udzielenia zezwolenia за ${foreignersLaw.article("127", "art. 127")}, зокрема при досягненні ліміту або за наявності названих обставин щодо podmiot powierzający pracę; pkt 1 позначений як uchylony.`,
          sourceLocator:
            "Art. 132 (wprowadzenie do wyliczenia), pkt 1–3 (pkt 1 uchylony)",
        },
      ],
      summary:
        "Стаття переносить частину перевірки на podmiot powierzający pracę та встановлює наслідки досягнення ліміту.",
      rules: [
        {
          locator: "wprowadzenie do wyliczenia, pkt 1",
          explanation: foreignersLaw.text`Відмова застосовується поза випадками ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9; pkt 1 позначено як «(uchylony)» і він не містить чинної підстави.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`У наданні відмовляють, якщо в календарному році досягнуто ліміту zezwoleń за ${foreignersLaw.article("127", "art. 127")}, визначеного на підставі ${foreignersLaw.article("127a", "art. 127a")} ust. 1.`,
        },
        {
          locator: "pkt 3 lit. a–e",
          explanation:
            "Перевіряються, зокрема, створення podmiot головно для полегшення в’їзду, його zarządzanie або kontrola особою з названими prawomocnymi покараннями чи засудженнями, несплата składek, податкові борги без передбаченого законом zwolnienie/odroczenie/raty або wstrzymanie виконання, а також відсутність działalności чи upadłość.",
        },
      ],
      legalEffect:
        "Названі обставини є підставами для відмови в межах цього zezwolenia; сама стаття не визначає фактичний статус podmiot без документів і перевірки органу.",
      foreignersCase:
        "Перевірте не лише кваліфікації cudzoziemca, а й актуальну діяльність, склад podmiot, składki, podatki та можливий ліміт; висновок має спиратися на дату заяви.",
    },
  ],
})
