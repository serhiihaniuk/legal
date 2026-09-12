import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalTextAuthor } from "../../../legal-text"
import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalTextAuthor("kpa")
const documents = createEvidenceDocumentTextAuthor()

const summary =
  "Стаття дозволяє за визначених умов перейти від роботи за зареєстрованим oświadczeniem до очікування дозволу без перерви в роботі. Цей період закінчується видачею дозволу або врученням відмови. Очікувати остаточності відмови за цим приписом не можна."
const foreignersCase = documents.text`Вигаданий приклад повторює випадок Y з порівняння безперервності роботи. Польський роботодавець безпосередньо наймав громадянина Молдови на несезонну роботу за umową o pracę протягом 01.05–31.08.2026, на підставі oświadczenia, зареєстрованого у квітні. 20 серпня роботодавець подав формально повну заяву про дозвіл на ту саму посаду за umową o pracę; попередні умови не погіршилися. Відмову видано 4 вересня і вручено 7 вересня. Належне ${documents.document("administrative-appeal", "odwołanie")} від 9 вересня є своєчасним у звичайному порядку ${kpaLaw.article("129", "art. 129 § 2 KPA")}, але не подовжує періоду за цією статтею. У завершеному робочому записі від 9 вересня зазначено: «Odmowa doręczona 07.09.2026; od 08.09.2026 pracy nie powierzano; odwołanie wniesione 09.09.2026». Зупинення на прохання сторони не було. Відмова ще не остаточна; окремо підтверджена відповідна польська ${documents.document("visa", "робоча віза")} залишається чинною до 31 грудня, але іншої підстави праці немає. Роботодавець припинив доручення роботи, бо закінчилася ця підстава її виконання. Запис не стверджує, що трудовий договір автоматично розірвався або що odwołanie буде відхилене.`

export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-09-12",
  verifiedAt: "2026-09-12",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-71",
      reviewStatus: "reviewed",
      claims: [
        { kind: "statute-text", text: summary, sourceLocator: "Art. 71" },
        {
          kind: "practical-inference",
          text: foreignersCase,
          sourceLocator: "Art. 71",
        },
      ],
      summary,
      rules: [
        {
          locator: "ust. 1: trzy miesiące i następny wniosek",
          explanation: documents.text`Той самий польський суб'єкт уже має наймати цю людину щонайменше три місяці за ${documents.document("employment-contract", "umową o pracę")} у зв'язку із ${documents.document("registered-work-declaration", "зареєстрованим oświadczeniem")}. Три місяці самого перебування, чинності запису або роботи за umową zlecenia не замінюють цієї умови. Заяву про дозвіл на ту саму посаду також на підставі umowy o pracę подають раніше дня завершення роботи, зазначеного в oświadczeniu. Формулювання «przed dniem» не дає підстав вважати подання в останній зазначений день своєчасним. Заява має бути без формальних недоліків або з недоліками, усуненими в строк.`,
        },
        {
          locator: "ust. 1: warunki i koniec okresu",
          explanation: documents.text`Праця на умовах, не гірших за записані в oświadczeniu, вважається законною від зазначеного в ньому дня завершення до видачі дозволу або ${documents.document("delivery-proof", "вручення рішення про відмову")}. Дата на самому рішенні й дата його вручення можуть різнитися. Після видачі дозволу роботу оцінюють уже за отриманим документом та іншими належними умовами. Після вручення відмови саме ця підстава продовження закінчується, навіть якщо ще можна подати odwołanie.`,
        },
        {
          locator: "ust. 2: zawieszenie na wniosek strony",
          explanation:
            "Правило ust. 1 не застосовується під час зупинення провадження на прохання сторони. Сам факт, що справа залишається відкритою, тоді не зберігає цю підставу праці. Важливо, чи було саме таке зупинення, а не лише відсутність нового листа від органу.",
        },
        {
          locator: "ust. 3: awaria systemu",
          explanation:
            "Якщо неправильна робота визначеної законом системи унеможливила подання заяви про дозвіл, ust. 1 застосовують відповідно за подання першого робочого дня після усунення несправності. Збережені відомості про збій та підтвердження фактичного подання пояснюють застосування винятку. Норма не надає довільного строку на пізнішу підготовку документів.",
        },
        {
          locator: "ust. 4: wniosek o pobyt i pracę",
          explanation: workLaw.text`Ust. 1 і 2 застосовуються відповідно до заяви самого іноземця на pobyt czasowy за ${foreignersLaw.article("114", "art. 114 ust. 1 ustawy o cudzoziemcach")}, якщо він продовжує працювати у того самого польського суб'єкта, на тій самій посаді та за umową o pracę. Це точне відсилання, а не будь-яка заява про перебування або будь-який вид договору. Ust. 4 не відсилає до винятку про збій системи з ust. 3.`,
        },
      ],
      legalEffect: workLaw.text`Припис зберігає визначену роботу в обмеженому проміжку, але не продовжує автоматично перебування та не гарантує видачі дозволу. На відміну від ${workLaw.article("21", "art. 21")}, тут вирішальною негативною подією є вручення відмови, а не її остаточність. Оскарження дозволяє сперечатися з рішенням, проте саме не відновлює закінчений період за цією статтею. Окрема самостійна підстава доступу до праці, якщо вона є, потребує власного встановлення.`,
      foreignersCase,
    },
  ],
})
