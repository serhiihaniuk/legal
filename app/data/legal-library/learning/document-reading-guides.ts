import {
  createLegalLearningTextAuthor,
  type LegalLearningText,
} from "./legal-text"
import { defineLegalLearningContent } from "./types"
import type { AuthoredLearningDocumentId, LegalLearningModule } from "./types"
import type { LegalLearningCoursePhase } from "./view-types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")
const kpaLaw = createLegalLearningTextAuthor("kpa")
const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")
const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")
const regulationLaw = createLegalLearningTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

export type DocumentReadingGuide = {
  module: LegalLearningModule
  phases: readonly LegalLearningCoursePhase[]
  courseDescription: string
  terms: readonly { term: string; meaning: string }[]
  caseExample: {
    title: string
    facts: LegalLearningText
    analysis: LegalLearningText
    lesson: LegalLearningText
  }
}

export const documentReadingGuides = defineLegalLearningContent({
  ppsa: {
    module: {
      id: "read-the-act",
      order: 1,
      title: "Як читати PPSA і будувати шлях до WSA",
      polish:
        "mapa p.p.s.a.; przedmiot skargi; dopuszczalność; rozpoznanie; orzeczenie",
      provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("1", "3", { start: "art. 1" })}, ${ppsaLaw.articleRange("46", "58", { start: "46" })}, ${ppsaLaw.article("61", "61")}, ${ppsaLaw.articleRange("133", "154", { start: "133" })}, ${ppsaLaw.articleRange("173", "193", { start: "173" })} PPSA`,
      outcome:
        "Ви читаєте PPSA як маршрут судового контролю: предмет skargi → допустимість → wniesienie → розгляд WSA → wyrok → подальший засіб і виконання.",
      caseQuestion:
        "У якій частині PPSA шукати відповідь на конкретне питання: чи можна оскаржити, як подати, що перевіряє суд або що робити після wyroku?",
      placeInWork:
        "Це карта перед роботою з окремою статтею. Вона не дозволяє змішати адміністративне odwołanie, skargę do WSA і skargę kasacyjną do NSA.",
      sections: [
        {
          id: "ppsa-map",
          title: "Спочатку знайдіть стадію, а не номер статті",
          paragraphs: [
            ppsaLaw.text`${ppsaLaw.document("PPSA")} регулює postępowanie sądowoadministracyjne. Тому перше питання не «яка стаття допоможе виграти справу про pobyt», а «на якій стадії судового контролю ми знаходимося». ${ppsaLaw.articleRange("1", "3")} задають предмет і межі цього контролю; подальші норми ведуть через wniesienie skargi, розгляд, orzeczenie, засоби оскарження, koszty та виконання.`,
            ppsaLaw.text`Один фактичний конфлікт проходить через кілька груп норм. ${ppsaLaw.article("3")} допомагає назвати предмет контролю, але не відповідає за строк. ${ppsaLaw.articleRange("52", "54")} регулюють процесуальний вхід, але не визначають, як WSA оцінить законність decyzji. Після wyroku треба перейти до норм про його skutek, uzasadnienie, prawomocność або skargę kasacyjną.`,
          ],
          questions: [
            "Що саме оскаржується: decyzja, postanowienie, czynność, bezczynność чи przewlekłość?",
            "Який адміністративний шлях уже пройдено?",
            "Потрібна відповідь про подання, розгляд, результат чи наступний засіб?",
          ],
          warning:
            "PPSA контролює законність діяльності administracji; воно не встановлює матеріальних умов zezwolenia na pobyt.",
        },
        {
          id: "ppsa-reading-chain",
          title: "Читайте ланцюг: bramka → kontrola → skutek",
          paragraphs: [
            "Для кожної sprawy побудуйте три блоки. Bramka: предмет, legitymacja, wyczerpanie środków, строк, маршрут і formalne wymogi. Kontrola: матеріал справи, межі rozpoznania, wstrzymanie та норма, яку порушив орган. Skutek: вид orzeczenia, зв’язаність organu оцінкою суду, можливий засіб до NSA і виконання.",
            "Усередині статті відділяйте адресата, умову і процесуальний наслідок. Якщо paragraf містить перелік, кожен пункт може описувати інший предмет skargi або іншу реакцію суду. Відсилання до іншої статті означає, що висновок не можна будувати з одного абзацу.",
          ],
          steps: [
            "Назвіть оскаржуваний акт, дію або бездіяльність.",
            "Знайдіть норму, яка відкриває судовий шлях, і окремо норми про його допустимість.",
            "Зафіксуйте подію, що запускає строк, і доказ цієї події.",
            "Сформулюйте порушення та перевірте, який skutek WSA може надати.",
            "Після wyroku відкрийте норми про uzasadnienie, prawomocność, виконання та відповідний засіб.",
          ],
          evidence: [
            "повний адміністративний акт із pouczeniem",
            "dowód doręczenia і попередні środki zaskarżenia",
            "akta administracyjne та конкретні невраховані докази",
            "wyrok із sentencją та uzasadnieniem",
          ],
        },
        {
          id: "ppsa-not-kpa",
          title: "Тримайте поруч три різні акти",
          paragraphs: [
            ppsaLaw.text`У справі іноземця матеріальна norma зазвичай походить з ${foreignersLaw.document("ustawy o cudzoziemcach")} або іншого спеціального акту. ${kpaLaw.document("KPA")} регулює адміністративне провадження перед organem. ${ppsaLaw.document("PPSA")} починає працювати на рівні sądowej kontroli. Одне порушення треба описати мовою кожного відповідного шару.`,
          ],
          warning: ppsaLaw.text`Не переносіть автоматично поняття й строки ${kpaLaw.document("KPA")} до ${ppsaLaw.document("PPSA")}. Odwołanie і skarga, organ odwoławczy і WSA, decyzja і wyrok виконують різні функції.`,
        },
      ],
      exercise: ppsaLaw.text`Для анонімізованої decyzji про pobyt побудуйте односторінкову карту: lex specialis → ${kpaLaw.document("KPA")} → остаточний акт → ${ppsaLaw.article("3", "Art. 3 PPSA")} → bramka dopuszczalności → можливий wyrok → наступний засіб.`,
    },
    phases: [
      {
        number: "01",
        title: "Відкрити судовий шлях",
        description:
          "Предмет kontroli, вид skargi, legitymacja, exhaustion, строк і маршрут wniesienia.",
        modules: "Модулі 1–3",
      },
      {
        number: "02",
        title: "Підготувати матеріал",
        description:
          "Учасники, pełnomocnictwo, akta, żądanie та wniosek про wstrzymanie.",
        modules: "Модулі 4–5",
      },
      {
        number: "03",
        title: "Прочитати результат WSA",
        description:
          "Межі rozpoznania, види orzeczeń, skutek wyroku та зв’язаність organu.",
        modules: "Модулі 6–7",
      },
      {
        number: "04",
        title: "Перевірити, що далі",
        description: "Skarga kasacyjna, NSA, prawomocność, виконання і koszty.",
        modules: "Модулі 8",
      },
    ],
    courseDescription:
      "Курс іде шляхом sądowej kontroli: від визначення предмета skargi до виконання prawomocnego orzeczenia.",
    terms: [
      {
        term: "przedmiot skargi",
        meaning:
          "Конкретний акт, дія, бездіяльність або przewlekłość, законність яких має контролювати суд.",
      },
      {
        term: "dopuszczalność",
        meaning:
          "Сукупність процесуальних умов, без яких суд не переходить до оцінки zarzutów по суті.",
      },
      {
        term: "sentencja",
        meaning:
          "Резолютивна частина orzeczenia; саме її треба відрізняти від пояснень у uzasadnieniu.",
      },
      {
        term: "skarga kasacyjna",
        meaning:
          "Окремий формалізований засіб до NSA, а не повторне звичайне odwołanie від рішення органу.",
      },
    ],
    caseExample: {
      title: "Від decyzji wojewody до карти судового контролю",
      facts:
        "Іноземець отримав остаточну decyzję про відмову в pobyt. У письмі є pouczenie, а в aktach — документи, яких organ не обговорив в uzasadnieniu.",
      analysis: ppsaLaw.text`Спочатку відділяємо матеріальну умову з ${foreignersLaw.document("ustawy o cudzoziemcach")} від процесуального порушення ${kpaLaw.document("KPA")}. Потім за ${ppsaLaw.article("3", "Art. 3 PPSA")} визначаємо предмет skargi, окремо перевіряємо dopuszczalność, строк і маршрут, формулюємо zarzut через конкретний матеріал akt та встановлюємо, який skutek WSA може надати.`,
      lesson:
        "PPSA читається не від випадкового номера статті, а як послідовність процесуальних воріт. Пропуск одного ворота може закрити шлях до оцінки порушення по суті.",
    },
  },

  "ustawa-o-cudzoziemcach": {
    module: {
      id: "read-the-act",
      order: 1,
      title: "Як читати ustawę o cudzoziemcach",
      polish: "status cudzoziemca; wjazd; pobyt; cel pobytu; decyzja; powrót",
      provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("1", "16", { start: "art. 1" })} та тематичні działy ustawy o cudzoziemcach`,
      outcome:
        "Ви знаходите в законі правильну правову трасу: особа і дата → поточний status → фактичний cel → конкретний вид pobytu → спільні умови → відмова, cofnięcie, документ і засіб захисту.",
      caseQuestion:
        "З якого місця закону почати, якщо клієнт називає документ або заяву, але ще не визначено його фактичний status і cel pobytu?",
      placeInWork:
        "Це перша карта кожної справи. Без неї легко читати правильну статтю для неправильної категорії cudzoziemca або неправильної дати.",
      sections: [
        {
          id: "foreigners-map",
          title: "Закон містить кілька різних правових маршрутів",
          paragraphs: [
            "Ustawa o cudzoziemcach не є одним каталогом zezwoleń. Вона регулює, зокрема, wjazd, wizy, zezwolenia na pobyt czasowy за різними цілями, pobyt stały, rezydenta długoterminowego UE, документи, контроль pobytu та zobowiązanie do powrotu. Той сам факт може бути важливим у кількох частинах, але з різною функцією.",
            "Початок закону задає zakres і definicje. Далі треба перейти не до статті, номер якої відомий з шаблону, а до інституту, який відповідає фактам. Для pobytu czasowego спочатку встановлюється конкретний cel, потім читаються спільні правила і спеціальні умови цього celu, а також негативні підстави, компетенція, процедура та наслідки зміни фактів.",
          ],
          questions: [
            "Який status особа має сьогодні і на підставі якого документа або норми?",
            "Який фактичний cel pobytu, а не назва formularza?",
            "Які події та редакція закону визначають застосовні правила?",
          ],
          warning:
            "Назва karta pobytu не називає правової підстави перебування. Karta документує status, але сама не пояснює, на яких умовах його надано.",
        },
        {
          id: "foreigners-chain",
          title: "Будуйте ланцюг норм навколо одного celu",
          paragraphs: [
            "Матеріальна норма рідко працює самостійно. Читайте разом: definicja або zakres → норма про конкретний вид zezwolenia → позитивні przesłanki → підстави odmowy → правила wniosku і доказів → cofnięcie або wygaśnięcie → документ, який видається → odwołanie або судовий контроль.",
            "У кожному paragrafie підкреслюйте адресата, позитивні та негативні умови, виняток, період і skutek. Відсилання на інший акт — наприклад правила доступу до pracy — означає окрему перевірку, а не мовчазне припущення.",
          ],
          steps: [
            "Побудуйте chronologię wjazdu і всіх підстав pobytu.",
            "Назвіть фактичний cel і знайдіть відповідний тематичний інститут.",
            "Розкладіть його норму на окремі warunki та винятки.",
            "Для кожної умови додайте факт, dowód і період, якого він стосується.",
            "Окремо перевірте odmowę, cofnięcie, obowiązki informacyjne та zasób ochrony.",
          ],
          evidence: [
            "паспорт, візи, штампи та попередні decyzje",
            "заяви і підтвердження їх подання",
            "документи, що доводять конкретний cel і кожну умову",
            "karta pobytu разом із decyzją, на підставі якої її видано",
          ],
        },
        {
          id: "foreigners-dates",
          title: "Дата — частина правової кваліфікації",
          paragraphs: [
            "Для кожного висновку запишіть дату факту, дату подання, дату decyzji та редакцію норми. Зміна закону може мати przepisy przejściowe, а зміна celu або podmiotu під час справи може вимагати нового аналізу.",
          ],
          warning:
            "Не переносіть правило про легальність pobytu на право до pracy і не описуйте майбутню зміну закону як чинну норму.",
        },
      ],
      exercise:
        "Для однієї анонімізованої справи намалюйте трасу по закону: definicja/status → cel → спеціальна підстава → кожна przesłanka → odmowa/cofnięcie → документ → засіб захисту.",
    },
    phases: [
      {
        number: "01",
        title: "Встановити status і дату",
        description:
          "Wjazd, поточна podstawa pobytu, документ, chronologia та застосовна редакція.",
        modules: "Модулі 1–2",
      },
      {
        number: "02",
        title: "Вибрати правову трасу",
        description:
          "Фактичний cel, pobyt czasowy, сім’я, навчання, праця, бізнес або інша підстава.",
        modules: "Модулі 3–6",
      },
      {
        number: "03",
        title: "Довести умови",
        description:
          "Wniosek, позитивні й негативні przesłanki, докази, процедура і зміни фактів.",
        modules: "Модулі 7–8",
      },
      {
        number: "04",
        title: "Прочитати наслідок",
        description:
          "Decyzja, karta, odmowa, cofnięcie, wygaśnięcie, powrót і засіб захисту.",
        modules: "Модулі 9–10",
      },
    ],
    courseDescription:
      "Курс повторює роботу зі status cudzoziemca: від часової лінії та celu до рішення, документа і негативної гілки.",
    terms: [
      {
        term: "podstawa pobytu",
        meaning:
          "Конкретна норма або документ, завдяки яким перебування особи є законним у визначений час.",
      },
      {
        term: "cel pobytu",
        meaning:
          "Фактична мета перебування, яку треба кваліфікувати за відповідним інститутом закону.",
      },
      {
        term: "zezwolenie",
        meaning:
          "Правовий status, що виникає з decyzji за виконання умов; його не слід ототожнювати з пластиковою kartą.",
      },
      {
        term: "przesłanka",
        meaning:
          "Окрема позитивна або негативна умова правового результату, яку потрібно перевірити на фактах і доказах.",
      },
    ],
    caseExample: {
      title: "Клієнт каже: «Мені потрібна karta pobytu для роботи»",
      facts:
        "Особа в’їхала за візою, змінила роботодавця і приносить umowę. Вона називає бажаний документ, але не пояснює часову лінію та фактичну організацію роботи.",
      analysis:
        "Не починаємо з formularza. Встановлюємо wjazd і поточний pobyt, кваліфікуємо фактичний cel, знаходимо спеціальну підставу pobytu czasowego, читаємо її разом зі спільними та негативними умовами, а право до pracy перевіряємо окремо за відповідним актом.",
      lesson:
        "Правильне читання ustawy починається не з назви карти або статті, а з факту, statusu, celu і ланцюга взаємопов’язаних норм.",
    },
  },

  "powierzanie-pracy": {
    module: {
      id: "read-the-act",
      order: 1,
      title: "Як читати ustawę про powierzanie pracy",
      polish:
        "podmiot powierzający pracę; cudzoziemiec; legalne powierzenie; zezwolenie; oświadczenie",
      provisionScope: workLaw.text`${workLaw.articleRange("1", "25", { start: "art. 1" })} та rozdziały 2–11 ustawy z 20 marca 2025 r.`,
      outcome:
        "Ви читаєте акт як перевірку конкретної моделі праці: учасники → pobyt → підстава доступу → умови документа → фактична робота → обов’язки → зміна → контроль і наслідок.",
      caseQuestion:
        "Який ланцюг норм треба пройти, щоб оцінити не назву договору, а законність фактичного powierzenia pracy?",
      placeInWork:
        "Карта використовується до початку роботи, при кожній зміні умов і під час перевірки документів роботодавця.",
      sections: [
        {
          id: "work-map",
          title: "Акт побудований навколо способу powierzenia pracy",
          paragraphs: [
            "Початкові норми задають zakres, definicje, загальну рамку допустимості та обов’язки. Далі окремі rozdziały регулюють zezwolenie для польського podmiotu, функції в юридичній особі, delegowanie, pracę sezonową та oświadczenie. Наступні частини стосуються систем teleinformatycznych, kontroli, sankcji, змін інших актів і przepisów przejściowych.",
            "Не можна вибрати instrument лише за громадянством або назвою umowy. Спочатку встановіть, хто реально powierza pracę, для кого і під чиїм керівництвом вона виконується, де знаходиться podmiot, який pobyt має особа і які умови роботи фактично діятимуть.",
          ],
          questions: [
            "Хто є podmiotem powierzającym, а хто організовує щоденну працю?",
            "Яка podstawa pobytu і яка окрема podstawa dostępu do rynku pracy?",
            "Чи відповідають фактичні умови даним документа?",
          ],
          warning:
            "Legalny pobyt, zezwolenie, oświadczenie і umowa відповідають на різні частини перевірки; жоден із них окремо не гарантує законності всієї моделі.",
        },
        {
          id: "work-chain",
          title: "Читайте від definicji до sankcji",
          paragraphs: [
            "Для кожної моделі побудуйте ланцюг: definicja учасника і pracy → загальна умова допустимості → właściwy instrument або zwolnienie → дані й умови, які він охоплює → обов’язки до і після початку → правила зміни → підстава uchylenia/wygaśnięcia → kontrola і sankcja.",
            ppsaLaw.text`Якщо стаття містить перелік, не зливайте пункти в одну загальну вимогу. Якщо норма відсилає до ${foreignersLaw.document("ustawy o cudzoziemcach")}, Kodeksu pracy або правил про pracę tymczasową, відкрийте цей акт і запишіть, яке окреме питання він вирішує.`,
          ],
          steps: [
            "Намалюйте фактичні відносини між cudzoziemcem, podmiotem, клієнтом і місцем роботи.",
            "Окремо перевірте pobyt та доступ до rynku pracy.",
            "Виберіть rozdział за реальною моделлю, а не назвою договору.",
            "Зіставте кожну умову документа з фактичною роботою.",
            "Перевірте повідомлення, реєстри, зміни, контроль і можливий skutek naruszenia.",
          ],
          evidence: [
            "документ pobytowy і підстава доступу до pracy",
            "zezwolenie, oświadczenie або точна норма zwolnienia",
            "umowa та документи про wynagrodzenie, wymiar, stanowisko і miejsce",
            "фактичні інструкції, графіки та відносини з odbiorcą usługi",
          ],
        },
        {
          id: "work-facts",
          title: "Фактична організація важливіша за етикетку",
          paragraphs: [
            "При outsourcingu, delegowaniu або pracy tymczasowej назва umowy не вирішує кваліфікацію. Перевіряйте, хто керує людиною, хто визначає час і місце, хто несе ризик результату та чи модель не перетворюється на недопустиме kierowanie do pracy.",
          ],
          warning:
            "Не застосовуйте старі номери статей або стару систему дозволів без перевірки przepisów przejściowych нового акту 2025 року.",
        },
      ],
      exercise:
        "Для однієї моделі роботи зробіть таблицю: учасник → роль за definicją → instrument → умови → доказ → обов’язок → зміна → можливий наслідок.",
    },
    phases: [
      {
        number: "01",
        title: "Побудувати модель",
        description:
          "Учасники, pobyt, місце, керівництво, умова і фактичний спосіб wykonywania pracy.",
        modules: "Модулі 1–3",
      },
      {
        number: "02",
        title: "Вибрати instrument",
        description:
          "Zezwolenie, oświadczenie, praca sezonowa, delegowanie або точне zwolnienie.",
        modules: "Модулі 4",
      },
      {
        number: "03",
        title: "Підтримувати відповідність",
        description:
          "Umowa, повідомлення, реєстри, зміни умов і ciągłość uprawnienia.",
        modules: "Модулі 5–6",
      },
      {
        number: "04",
        title: "Перевірити ризик",
        description:
          "Kontrola, sankcje, outsourcing, praca tymczasowa та перехідні правила.",
        modules: "Модулі 7–8",
      },
    ],
    courseDescription:
      "Курс повторює перевірку legalności pracy: від фактичної моделі та instrumentu до обов’язків, змін і контролю.",
    terms: [
      {
        term: "podmiot powierzający pracę",
        meaning:
          "Особа або організація, роль якої визначається законом; її не завжди можна встановити лише з назви договору.",
      },
      {
        term: "powierzenie pracy",
        meaning:
          "Юридично значуща модель допуску cudzoziemca до pracy, яку оцінюють разом із фактичними умовами.",
      },
      {
        term: "zezwolenie na pracę",
        meaning:
          "Адміністративний instrument, що охоплює визначену модель та умови, а не загальне право працювати будь-де.",
      },
      {
        term: "oświadczenie",
        meaning:
          "Окремий реєстраційний instrument для передбачених законом випадків; його застосовність треба встановити за всіма умовами.",
      },
    ],
    caseExample: {
      title: "Umowa o świadczenie usług, але роботою керує клієнт",
      facts:
        "Польський podmiot уклав із cudzoziemcem umowę і направив його на постійний об’єкт клієнта. Графік, завдання і щоденний контроль визначає клієнт, хоча договір названо outsourcingiem.",
      analysis:
        "Спочатку встановлюємо ролі за definicjami та фактичне керівництво. Потім окремо перевіряємо pobyt, instrument доступу до pracy, відповідність stanowiska і miejsca, обов’язки podmiotu та норми про kierowanie do pracy, pracę tymczasową і sankcje.",
      lesson:
        "Закон читається через факти моделі. Назва umowy не замінює перевірку того, хто реально powierza і організовує pracę.",
    },
  },

  "rozporzadzenie-wniosek-pobyt-czasowy": {
    module: {
      id: "read-the-act",
      order: 1,
      title: "Як читати rozporządzenie, formularz і załączniki",
      polish: regulationLaw.text`część normatywna ${regulationLaw.paragraphRange("1", "9")}; wzory; załączniki; pouczenia; pola formularza`,
      provisionScope: regulationLaw.text`${regulationLaw.paragraphRange("1", "9")} та ${regulationLaw.annexRange("1", "11")}`,
      outcome:
        "Ви працюєте з rozporządzeniem у двох шарах: §§ визначають, які wzory встановлено, а załączniki показують структуру відомостей; матеріальні умови дозволу шукаєте в ustawie.",
      caseQuestion:
        "Як перейти від фактичного celu pobytu до właściwego wzoru і не переплутати поле formularza з доказом ustawowej przesłanki?",
      placeInWork:
        "Ця карта потрібна після правової кваліфікації celu, перед заповненням і під час відповіді на wezwanie щодо форми або доказів.",
      sections: [
        {
          id: "regulation-map",
          title: "Читайте частину normatywną разом із відповідним załącznikiem",
          paragraphs: [
            regulationLaw.text`${regulationLaw.paragraphRange("1", "9", { start: "§§ 1" })} встановлюють предмет регулювання і пов’язують конкретні wzory з відповідними załącznikami. Załącznik не є довільним шаблоном: це частина aktu, яку треба читати разом із paragrafem, що на неї вказує, та з pouczeniami всередині форми.`,
            ppsaLaw.text`Załączniki nr 1–11 мають різні функції. Тому не починайте з копіювання старого PDF. Спершу встановіть фактичний cel і materialną podstawę в ${foreignersLaw.document("ustawie o cudzoziemcach")}, потім знайдіть paragraf і właściwy wzór, а вже після цього визначте, хто заповнює кожну частину.`,
          ],
          questions: [
            "Який paragraf установлює потрібний wzór?",
            "Який załącznik і хто саме має його заповнити?",
            "Де закінчується вимога форми і починається доказування умови ustawy?",
          ],
          warning:
            "Wzór організовує відомості, але не вибирає cel pobytu і не створює матеріальної підстави zezwolenia.",
        },
        {
          id: "form-reading",
          title: "Читайте кожне pole як питання про факт",
          paragraphs: [
            "Для кожного поля встановіть: хто є адресатом питання, який факт треба повідомити, за який період, звідки походить відповідь і чи потрібен окремий dowód. Pouczenie може визначати спосіб запису, підпис або технічну межу, але правове значення факту походить із відповідної норми ustawy.",
            "Пов’язані поля головного wniosku і załącznika мають описувати одну фактичну історію. Розбіжність у podmiocie, celu, miejscu, stanowisku або датах треба пояснити, а не приховати однаковим копіюванням.",
          ],
          steps: [
            "Знайдіть paragraf і названий у ньому załącznik.",
            "Прочитайте назву, адресата, sekcje та pouczenia wzoru.",
            "Для кожного поля запишіть джерело факту і відповідальну особу.",
            "З’єднайте поле з materialną przesłanką та окремим доказом.",
            "Перед підписом порівняйте всі повторювані дані й збережіть фінальну копію.",
          ],
          evidence: [
            "офіційний wzór із поточного rozporządzenia",
            "первинні документи, з яких перенесено дані",
            "докази кожної матеріальної умови ustawy",
            "підписаний фінальний комплект і dowód złożenia",
          ],
        },
        {
          id: "form-boundary",
          title: "Формальна повнота і матеріальне доведення — різні перевірки",
          paragraphs: [
            ppsaLaw.text`Заповнений formularz може бути формально повним, але не доводити умови zezwolenia. І навпаки, сильні докази не виправляють відсутнього підпису або неправильного wzoru. При wezwanie спочатку класифікуйте, яку саме прогалину назвав organ. Для brak formalny відкрийте ${kpaLaw.article("64", "art. 64 KPA")} і перевірте його окремо від матеріальної норми ustawy.`,
          ],
          warning:
            "Не обіцяйте позитивного результату лише тому, що всі поля заповнені і всі załączniki додані.",
        },
      ],
      exercise:
        "Оберіть одне pole: знайдіть paragraf і załącznik, назвіть факт, materialną normę, первинний dowód, відповідальну особу та наслідок суперечності.",
    },
    phases: [
      {
        number: "01",
        title: "Визначити функцію акту",
        description:
          "Відділити wzór і спосіб подання від materialnych warunków ustawy.",
        modules: "Модулі 1–2",
      },
      {
        number: "02",
        title: "Вибрати wzór",
        description:
          "Знайти paragraf, właściwy załącznik, адресата полів і підписанта.",
        modules: "Модулі 3",
      },
      {
        number: "03",
        title: "З’єднати факти",
        description:
          "Перевірити spójność wniosku, załączników і первинних документів.",
        modules: "Модулі 4–5",
      },
      {
        number: "04",
        title: "Перевірити комплект",
        description:
          "Окремо аудит форми, доказів матеріальних умов, подання і відкритих ризиків.",
        modules: "Модулі 6",
      },
    ],
    courseDescription:
      "Курс іде від частини normatywnej через właściwy wzór до узгодженого, доказово підкріпленого комплекту.",
    terms: [
      {
        term: "wzór",
        meaning:
          "Нормативно встановлена структура документа; її потрібно відрізняти від довільного офісного шаблону.",
      },
      {
        term: "załącznik",
        meaning:
          "Частина rozporządzenia або комплекту, функцію якої визначають paragraf, назва і зміст полів.",
      },
      {
        term: "pole formularza",
        meaning:
          "Місце для повідомлення конкретного факту; саме заповнення поля не є автоматичним доказом цього факту.",
      },
      {
        term: "pouczenie",
        meaning:
          "Інструкція всередині wzoru щодо заповнення або подання, яку треба читати разом із paragrafem та ustawą.",
      },
    ],
    caseExample: {
      title: "Старий załącznik і нові факти працевлаштування",
      facts:
        "Заявник використав збережений formularz зі старої справи. Роботодавець і умови роботи змінилися, але частина полів та załącznik залишилися скопійованими.",
      analysis:
        "Встановлюємо aktualny cel і materialną podstawę, знаходимо відповідний paragraf та чинний wzór, порівнюємо кожне повторюване поле з первинними документами і будуємо окрему матрицю доказів умов ustawy.",
      lesson:
        "Правильна робота з rozporządzeniem — це читання зв’язку § → załącznik → pole → факт → materialna norma → dowód, а не механічне заповнення PDF.",
    },
  },
}) satisfies Partial<Record<AuthoredLearningDocumentId, DocumentReadingGuide>>
