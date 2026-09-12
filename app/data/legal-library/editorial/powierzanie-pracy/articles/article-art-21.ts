import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalTextAuthor } from "../../../legal-text"
import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalTextAuthor("kpa")
const documents = createEvidenceDocumentTextAuthor()

const summary =
  "Стаття дозволяє за визначених умов продовжувати попередню роботу після закінчення дозволу, поки рішення про наступний дозвіл не стане остаточним. Це законна підстава для перехідного періоду, а не продовження надрукованого строку документа чи загальний дозвіл на іншу роботу."
const foreignersCase = documents.text`Вигаданий приклад повторює випадок X з порівняння безперервності роботи. Польський роботодавець безпосередньо наймав громадянина Молдови на несезонну роботу за дозволом на 01.05–31.08.2026. 20 серпня він подав формально повну заяву про наступний дозвіл на ту саму посаду, зберігши попередні умови. Відмову видано 4 вересня й вручено 7 вересня; роботодавець належно подав odwołanie 9 вересня. Це вкладається у звичайні 14 днів за ${kpaLaw.article("129", "art. 129 § 2 KPA")}. У завершеному записі від 9 вересня зазначено: «Decyzja nieostateczna; odwołanie wniesione 09.09.2026; praca kontynuowana na dotychczasowych warunkach». На цю дату не було ані зупинення на прохання сторони, ані відмови від оскарження, ані рішення наступної інстанції. Попередній дозвіл не скасовано, іншої заборони роботи немає; окремо підтверджена відповідна польська ${documents.document("visa", "робоча віза")} дозволяє перебування до 31 грудня. Висновок стосується продовження цієї роботи 9 вересня. Він не визначає результату odwołania і не дозволяє змінити роботодавця.`

export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-09-12",
  verifiedAt: "2026-09-12",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-21",
      reviewStatus: "reviewed",
      claims: [
        { kind: "statute-text", text: summary, sourceLocator: "Art. 21" },
        {
          kind: "practical-inference",
          text: foreignersCase,
          sourceLocator: "Art. 21",
        },
      ],
      summary,
      rules: [
        {
          locator: "ust. 1: poprzedni dokument i następny wniosek",
          explanation: documents.text`Суб'єкт, який доручає роботу, подає заяву про наступний дозвіл ще під час чинності попереднього. Метою має бути продовження на тій самій посаді або в тому самому виді роботи. Заява не має формальних недоліків або їх усунуто в належний строк. ${documents.document("work-permit", "Попередній дозвіл")} показує дозволені умови; наступна заява та ${documents.document("dispatch-proof", "підтвердження її подання")} показують, що саме і коли просив роботодавець. Саме підтвердження відправлення не доводить формальної повноти заяви. Робота продовжується на умовах виданого дозволу, а не на довільних нових умовах із заяви.`,
        },
        {
          locator: "ust. 1: ostateczność i zawieszenie",
          explanation: documents.text`Період охоплює час від закінчення чинності попереднього дозволу до дня, коли рішення щодо наступного стане ostateczna. За ${kpaLaw.article("16", "art. 16 § 1 KPA")} це рішення, для якого вже немає звичайного адміністративного odwołania або заяви про повторний розгляд. Видача чи ${documents.document("delivery-proof", "вручення першої відмови")} не завжди означає таку остаточність. У звичайному провадженні своєчасне ${documents.document("administrative-appeal", "odwołanie")} залишає питання на розгляді наступної інстанції. Водночас періоди зупинення провадження на прохання сторони прямо виключені з періоду законної праці за цією нормою.`,
        },
        {
          locator: "ust. 2: awaria systemu",
          explanation:
            "Коли саме неправильна робота названої законом системи унеможливила подання заяви, механізм застосовують відповідно, якщо заяву подано першого робочого дня після усунення несправності. Це не довільний додатковий строк після закінчення дозволу. Запис про збій, його тривалість і фактична дата подання мають пояснювати, чому звичайну вимогу своєчасності не вдалося виконати.",
        },
        {
          locator: "ust. 3: określone wnioski pobytowe",
          explanation: workLaw.text`Правило ust. 1 застосовується також до названих заяв про pobyt czasowy за ${foreignersLaw.article("114", "art. 114 ust. 1 або 1a")}, ${foreignersLaw.article("126", "art. 126 ust. 1")}, ${foreignersLaw.article("127", "art. 127")}, ${foreignersLaw.article("137a", "art. 137a")} або ${foreignersLaw.article("142", "art. 142 ust. 3 ustawy o cudzoziemcach")}, поданих для продовження праці, яку людина виконувала відповідно до свого дозволу на роботу чи тимчасове перебування. Окремо названо заяву на pobyt rezydenta długoterminowego UE. Це не кожна заява на карту: сам запис про подання не встановлює, яку роботу людина виконувала і чи виконані умови застосованого ust. 1. Припис відсилає саме до ust. 1, а не переносить сюди автоматично виняток про збій із ust. 2.`,
        },
      ],
      legalEffect: workLaw.text`За виконання умов можна продовжувати охоплену нормою роботу, навіть коли строк попереднього дозволу вже закінчився. Підстава законного перебування залишається окремим питанням. Для переходу з oświadczenia ${workLaw.article("71", "art. 71")} установлює інші умови та іншу кінцеву подію; його не можна підмінити правилом про остаточність. Відмова від права на оскарження також має значення: за ${kpaLaw.article("127a", "art. 127a § 2 KPA")} остаточність настає з отриманням органом заяви останньої сторони, а не просто з її підписанням.`,
      foreignersCase,
    },
  ],
})
