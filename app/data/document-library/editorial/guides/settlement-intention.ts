import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "settlement-intention",
  title: "Докази наміру оселитися в Польщі",
  category: "evidence",
  kind: "evidence-set",
  aliases: [],
  description:
    "Намір оселитися пояснюють через конкретні обставини життя й плани, підкріплені матеріалами. У маршруті з Kartą Polaka це питання читають окремо від самого володіння картою.",
  preparedBy:
    "Заявник пояснює намір; документи про житло, роботу або сімейні обставини підтримують пояснення.",
  purpose: [
    "Допомагає оцінити, чи узгоджується заявлений намір із фактичними обставинами.",
  ],
  doesNotProve: [
    "Жоден окремий договір не гарантує висновку про намір. Цей набір не є універсальною вимогою для кожної підстави pobytu stałego.",
  ],
  keyChecks: [
    "Обрано конкретну підставу pobytu stałego.",
    "Пояснення пов’язане з фактами, а не лише із загальною фразою «хочу жити в Польщі».",
    "Матеріали узгоджені між собою; суперечливі обставини пояснені.",
  ],
  relatedDocuments: [
    "housing-evidence",
    "employment-contract",
    "civil-status-record",
    "stay-history",
  ],
  sources: [
    {
      label: "Podlaski UW: власник Karty Polaka",
      url: "https://www.gov.pl/web/uw-podlaski/posiadacz-karty-polaka",
      note: "Окрема підстава pobytu stałego та намір оселитися в Польщі.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "explain-intention",
      title: "Зв’язати пояснення з життям",
      paragraphs: [
        "Замість великого набору непов’язаних довідок покажіть, як людина організовує життя: де планує мешкати, працювати або жити з родиною. Це авторський спосіб викладу доказів, а не закритий перелік обов’язкових додатків.",
      ],
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("195")}: Містить підставу для власника Karty Polaka, який має намір оселитися в Польщі.`,
  ],
}

export const settlementIntentionDocumentTopic = defineDocumentTopic(guide)
export default settlementIntentionDocumentTopic
