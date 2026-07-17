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
      provisionId: "ustawa-o-cudzoziemcach-art-139s",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139s", "Art. 139s")}, poza випадками ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–4 і 8, перелічує підстави odmowa udzielenia zezwolenia за ${foreignersLaw.article("139o", "art. 139o")} та додаткові підстави для kolejnego zezwolenia, зокрема сплив строку ICT, неправдиві дані, проблеми podmiot, завершення строку przeniesienia і nielegalny pobyt.`,
          sourceLocator: "Art. 139s ust. 1 pkt 1–5, ust. 2",
        },
      ],
      summary:
        "Стаття регулює odmowa udzielenia довгострокового ICT-zezwolenia та окремі додаткові умови для наступного дозволу.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Відмовляють, якщо сплив ICT-документ іншої держави, подано неправдиві дані/документи або pracodawca macierzysty чи jednostka має названі проблеми з контролем, składki, podatki, діяльністю чи upadłość.",
        },
        {
          locator: "ust. 1 pkt 4–5",
          explanation:
            "Підставами є також завершення строку przeniesienia в ЄС (3 роки для kadra/specjalista або 1 рік для стажера) та подання wniosku під час nielegalny pobyt.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для kolejnego zezwolenia додатково перевіряють, чи jednostka не створена головно для полегшення в’їзду та чи попереднє zezwolenie не використано не за метою.",
        },
      ],
      legalEffect:
        "Стаття встановлює підстави odmowa лише за названих фактичних обставин; статус документа, podmiot і legalny pobyt потрібно встановити на дату справи.",
      foreignersCase:
        "Розділіть первинну та kolejnego заяву, перевірте строк ICT-документа, законність pobyt, документи і діяльність обох podmiot та порахуйте період przeniesienia.",
    },
  ],
})
