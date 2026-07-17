import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-151",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо skarga не задовольняється повністю або частково, суд oddala її відповідно повністю або частково.",
          sourceLocator: "Art. 151",
        },
      ],
      summary:
        "Норма називає результат, коли суд не приймає skarga в повному або частковому обсязі.",
      rules: [
        {
          locator: "Art. 151",
          explanation:
            "Відрізняйте повне oddalenie від часткового: формула sentencja має показати обсяг відхилення.",
        },
      ],
      legalEffect:
        "Oddalenie означає незадоволення skarga у відповідному обсязі; стаття сама не визначає подальший засіб оскарження.",
      foreignersCase:
        "Після oddalenie skarga на decyzja про pobyt перевірте, чи відхилено всю скаргу або лише частину, і окремо з’ясуйте правила щодо uzasadnienie та skarga kasacyjna.",
    },
  ],
})
