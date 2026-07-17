import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const kpaLaw = createLegalTextAuthor("kpa")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-106a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106a", "Art. 106a")} ust. 1 визначає зміст formularza заяви, яку jednostka przyjmująca подає для zezwolenia за ${foreignersLaw.article("139a", "Art. 139a ust. 1")} або ${foreignersLaw.article("139o", "Art. 139o ust. 1")}: дані cudzoziemca і сім’ї, місця та попередні pobyty, ubezpieczenie, дані jednostka przyjmująca і pracodawca macierzysty, зв’язок між ними, умови роботи й przeniesienie, кваліфікації, історію ICT та передбачені oświadczenia.`,
          sourceLocator: "Art. 106a ust. 1 pkt 1–19",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106a", "Art. 106a")} ust. 2 вимагає копію чинного dokument podróży та додатки: aktualne fotografie і документи, необхідні для підтвердження даних та обставин заяви. Ust. 3–4 передбачають wezwanie jednostka przyjmująca на строк не менший ніж 14 днів, можливе одночасно з wezwanie щодо braków formalnych за ${kpaLaw.article("64", "art. 64 § 2 KPA")}; строк за ust. 3 не може бути коротшим за строк для усунення braków formalnych.`,
          sourceLocator: "Art. 106a ust. 2–4",
        },
        {
          kind: "practical-inference",
          text: "Formularz, копія документа, фотографії та oświadczenia визначають склад заяви й доказів, але самі по собі не надають zezwolenia, legalnego pobytu або права на працю.",
          sourceLocator: "Art. 106a ust. 1–4",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("106a", "Art. 106a")} встановлює процедурний і доказовий пакет для заяви jednostka przyjmująca на ICT-zezwolenie: formularz із даними про особу, обидві організації, зв’язок між ними, умови роботи та przeniesienie, а також копія документа подорожі, фото і підтвердні документи.`,
      rules: [
        {
          locator: "Art. 106a ust. 1 pkt 1–6",
          explanation:
            "Formularz охоплює ідентифікаційні дані, сім’ю, заплановане й актуальне місце pobytu, попередні pobyty у Польщі та ЄС і ubezpieczenie zdrowotne.",
        },
        {
          locator: "Art. 106a ust. 1 pkt 7–15",
          explanation:
            "Окремо вносяться дані jednostka przyjmująca і pracodawca macierzysty, їхній зв’язок, посада, місце й підстава роботи, час, wynagrodzenie, обов’язки, строки ICT та кваліфікації/досвід.",
        },
        {
          locator: "Art. 106a ust. 1 pkt 16–19",
          explanation:
            "Заява також охоплює названі обставини й oświadczenia jednostka przyjmująca, включно з письмовим підтвердженням правдивості даних під rygor odpowiedzialności karnej.",
        },
        {
          locator: "Art. 106a ust. 2",
          explanation:
            "До formularza додаються копія чинного dokument podróży, фото та документи для підтвердження даних і обставин; перелік не є рішенням про дозвіл.",
        },
        {
          locator: "Art. 106a ust. 3–4",
          explanation:
            "Якщо додатків немає, wojewoda викликає jednostka przyjmująca щонайменше на 14 днів; wezwanie може поєднуватися з усуненням braków formalnych, але його строк не може бути коротшим.",
        },
      ],
      legalEffect:
        "Стаття визначає, як jednostka przyjmująca формує заяву й підтвердні документи для ICT-провадження та як орган дає строк на їх подання. Вона не замінює перевірку умов zezwolenia і не легалізує pobyt чи pracę автоматично.",
      foreignersCase:
        "Перевірте, що заявником є саме jednostka przyjmująca, обрано правильний вид ICT-zezwolenia, усі потрібні поля й oświadczenia узгоджені з документами, а копія dokument podróży, фото та підтвердження додані. За wezwanie зафіксуйте дату вручення і строк не менший за 14 днів та відокремте його від wezwanie щодо braków formalnych.",
    },
  ]),
})
