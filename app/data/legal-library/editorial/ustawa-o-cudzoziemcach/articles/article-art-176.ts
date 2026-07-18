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
      provisionId: "ustawa-o-cudzoziemcach-art-176",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("176", "Art. 176")} вимагає udzielenie zezwolenia na pobyt czasowy для ofiary handlu ludźmi, якщо вона перебуває в Польщі, співпрацює з organ właściwy у кримінальному провадженні, а якщо є małoletni — має статус pokrzywdzony, і розірвала контакти з підозрюваними у злочині.`,
          sourceLocator: "Art. 176 pkt 1–3",
        },
      ],
      summary:
        "Для дозволу жертві потрібні три сукупні умови: перебування в Польщі, співпраця або статус pokrzywdzony для дитини та розрив контактів із підозрюваними.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Cudzoziemiec має фактично перебувати на території Польщі; сама наявність zaświadczenie за попередньою статтею не замінює цю умову.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Дорослий має podjąć współpracę з компетентним органом у провадженні про handlu ludźmi. Для małoletni закон замінює цю вимогу отриманням status pokrzywdzonego у відповідному провадженні.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Потрібно zerwać kontakty з особами, підозрюваними у злочині; оцінюється фактична поведінка, а не лише письмова заява про намір.",
        },
      ],
      legalEffect:
        "За сукупного виконання трьох умов дозвіл надається за спеціальним режимом жертви; стаття не поширюється на будь-яку особу, яка лише заявляє про експлуатацію.",
      foreignersCase:
        "Безпечно зберіть документи про перебування, процесуальний статус або співпрацю та припинення контактів; не публікуйте ідентифікаційні дані потерпілої особи й не подавайте неперевірені твердження як факт.",
    },
  ],
})
