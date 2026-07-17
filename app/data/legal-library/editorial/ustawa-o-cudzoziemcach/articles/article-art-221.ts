import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-221",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо cudzoziemiec має zezwolenie na pobyt rezydenta długoterminowego UE, надане іншою державою-членом UE, wojewoda передає Szef Urzędu копію decyzji про надання cudzoziemcowi польського zezwolenia на pobyt rezydenta długoterminowego UE.",
          sourceLocator: "Art. 221",
        },
      ],
      summary:
        "Стаття встановлює передачу копії польської decyzja до Szef Urzędu, коли особа вже має статус rezydenta długoterminowego UE в іншій державі-члені.",
      rules: [
        {
          locator: "Art. 221",
          explanation:
            "Умова стосується наявності дозволу rezydenta długoterminowego UE, наданого іншою державою-членом; дію виконує wojewoda.",
        },
      ],
      legalEffect:
        "Норма регулює внутрішню передачу документа між органами й сама не надає або не скасовує zezwolenie.",
      foreignersCase:
        "Повідомте орган про релевантний дозвіл іншої держави-члена та збережіть документи, що його підтверджують. Не ототожнюйте передачу копії decyzja з новим рішенням про право на pobyt.",
    },
  ],
})
