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
      provisionId: "ustawa-o-cudzoziemcach-art-158a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("158a", "Art. 158a")} передбачає udzielenie zezwolenia na pobyt czasowy дитині або батьку obywatel polski чи його małżonek, якщо громадянин Польщі живе в Польщі, регулярно їздить до іншої держави UE для роботи, а відсутність дозволу заважала б swoboda przepływu pracowników.`,
          sourceLocator: "Art. 158a pkt 1–2",
        },
      ],
      summary:
        "Це спеціальний режим для визначених дітей і батьків польського громадянина або його подружжя у транскордонній ситуації працівника.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Дитина obywatel polski або його małżonek має бути молодшою за 21 рік або перебувати на утриманні громадянина чи його подружжя; вік до 21 року не тотожний вимозі неповноліття.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Батько obywatel polski або його małżonek має перебувати на утриманні цього громадянина чи подружжя.",
        },
        {
          locator: "умова щодо громадянина Польщі",
          explanation:
            "Громадянин Польщі повинен мешкати в Польщі та регулярно переміщатися з Польщі до іншої держави-члена UE для роботи там; потрібен причинний зв'язок між відсутністю дозволу і користуванням свободою руху працівників.",
        },
      ],
      legalEffect:
        "Громадянство родича саме по собі недостатнє: стаття вимагає конкретного родинного статусу, утримання або віку, транскордонної роботи та впливу на swoboda przepływu pracowników.",
      foreignersCase:
        "Для дитини або батька зберіть доказ родинного зв'язку, віку чи utrzymanie, проживання громадянина в Польщі та регулярних поїздок на роботу; не посилайтеся лише на польський паспорт родича.",
    },
  ],
})
