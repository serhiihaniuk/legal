import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalTextAuthor("kpa")

export const foreignersActPart00 =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
      {
        provisionId: "ustawa-o-cudzoziemcach-art-9a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("9a", "Art. 9a")} встановлює, що строк на подання pismo у справах, врегульованих ustawa, вважається zachowany, якщо cudzoziemiec, umieszczony у strzeżony ośrodek або areszt dla cudzoziemców, подав pismo адміністрації цієї установи до спливу строку.`,
            sourceLocator: "Art. 9a",
          },
          {
            kind: "practical-inference",
            text: "Це спеціальне правило стосується збереження процесуального строку, а не змісту pismo, позитивного вирішення справи, legalnego pobytu чи права на працю.",
            sourceLocator: "Art. 9a",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("9a", "Art. 9a")} захищає строк для pismo іноземця, який перебуває у strzeżony ośrodek або areszt dla cudzoziemców: достатньо подати pismo адміністрації цієї установи до закінчення строку.`,
        rules: [
          {
            locator: "Art. 9a",
            explanation:
              "Спочатку встановіть, що особа є cudzoziemiec і фактично umieszczony у strzeżony ośrodek або areszt dla cudzoziemców; правило не поширюється на будь-яке місце перебування.",
          },
          {
            locator: "Art. 9a",
            explanation:
              "Вирішальним є подання pismo адміністрації відповідного ośrodek або areszt перед спливом строку. Дата підготовки документа сама по собі не замінює подання.",
          },
        ],
        legalEffect:
          "За виконання умови вважається дотриманим строк на подання pismo у справі за ustawa. Це не підтверджує матеріальні умови вимоги і не створює документа на pobyt або pracę.",
        foreignersCase:
          "Зафіксуйте вид установи, точну дату й час закінчення строку, копію pismo та підтвердження його прийняття адміністрацією. Окремо перевірте, які матеріальні умови та докази потрібні у самій справі.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-15a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("15a", "Art. 15a")} ust. 1 стосується працівників Urząd do Spraw Cudzoziemców, urzędu wojewódzkiego, urzędu obsługującego ministra właściwego do spraw wewnętrznych, Komendy Głównej Straży Granicznej, komendy oddziału Straży Granicznej і placówki Straży Granicznej. Для них визначені в dział II Kodeksu postępowania administracyjnego обов’язки у справах за ustawa, зокрема підготовка проєктів załatwienia справи та przeprowadzanie dowodów, а також załatwianie справ на підставі ${kpaLaw.article("268a", "art. 268a Kodeksu postępowania administracyjnego")}; czynności kancelaryjne виключені.`,
            sourceLocator: "Art. 15a ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("15a", "Art. 15a")} ust. 2–3 вимагає перед zatrudnienie або дорученням нових обов’язків перевірити через Krajowy Rejestr Karny, чи працівник не був skazany prawomocnym wyrokiem за umyślne przestępstwo або umyślne przestępstwo skarbowe; після такого skazanie він не може займати відповідне stanowisko, а видане ${kpaLaw.article("268a", "upoważnienie за art. 268a KPA")} cofnięte.`,
            sourceLocator: "Art. 15a ust. 2–3",
          },
          {
            kind: "practical-inference",
            text: "Перевірка в Krajowy Rejestr Karny є кадровою умовою доручення визначених обов’язків. Вона не є рішенням у справі cudzoziemca і не доводить його legalny pobyt або право виконувати роботу.",
            sourceLocator: "Art. 15a ust. 1–3",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("15a", "Art. 15a")} встановлює кадрову перевірку для працівників органів, які виконують визначені обов’язки адміністративного провадження у справах cudzoziemców. Перевірка стосується умисних вироків і впливає на можливість займати відповідне stanowisko або користуватися upoważnienie.`,
        rules: [
          {
            locator: "Art. 15a ust. 1",
            explanation:
              "Норма охоплює лише названі установи та обов’язки провадження за ustawa; czynności kancelaryjne не входять до описаного переліку.",
          },
          {
            locator: "Art. 15a ust. 2",
            explanation:
              "Krajowy Rejestr Karny перевіряють до zatrudnienie на посаді з такими обов’язками і до доручення працівнику нових таких обов’язків.",
          },
          {
            locator: "Art. 15a ust. 3",
            explanation:
              "Остаточний вирок за умисне przestępstwo або przestępstwo skarbowe виключає зайняття відповідної посади; існуюче upoważnienie за KPA підлягає cofnięcie.",
          },
        ],
        legalEffect:
          "Стаття визначає внутрішній кадровий фільтр для виконання частини адміністративних дій. Вона не встановлює матеріальних умов в’їзду, pobyt чи wykonywania pracy іноземця і не замінює рішення компетентного органу.",
        foreignersCase:
          "Якщо питання стосується працівника органу, перевірте його установу, конкретний zakres обов’язків, момент перевірки та наявність upoważnienie. Не використовуйте сам факт кадрової перевірки як доказ результату справи іноземця.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-15b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("15b", "Art. 15b")} pkt 1 визначає перелік завдань, які Komendant Główny Policji реалізує за участю функціонерів Straży Granicznej щодо wpisów даних cudzoziemca до SIS для цілей повернення, названих у ${foreignersLaw.external("art. 3 ust. 1 rozporządzenia nr 2018/1860", "https://eur-lex.europa.eu/eli/reg/2018/1860/oj")}; він перелічує конкретні статті ustawa, зокрема ${foreignersLaw.article("109a", "art. 109a")} та ${foreignersLaw.article("109b", "art. 109b")}.`,
            sourceLocator: "Art. 15b pkt 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("15b", "Art. 15b")} pkt 2 охоплює інші перелічені в ustawa завдання щодо wpisów даних cudzoziemca до SIS для odmowy wjazdu i pobytu на підставі ${foreignersLaw.external("rozporządzenia nr 2018/1861", "https://eur-lex.europa.eu/eli/reg/2018/1861/oj")}.`,
            sourceLocator: "Art. 15b pkt 2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`У завершальній частині ${foreignersLaw.article("15b", "Art. 15b")} зазначено, що ці завдання Komendant Główny Policji реалізує за участю функціонерів Straży Granicznej, які служать у biurze SIRENE.`,
            sourceLocator: "Art. 15b zdanie końcowe",
          },
          {
            kind: "practical-inference",
            text: "Стаття розподіляє виконання SIS-завдань і розмежовує їхню мету: повернення або odmowa wjazdu i pobytu. Сам wpis у SIS не є документом на pobyt чи pracę та не доводить ці права.",
            sourceLocator: "Art. 15b pkt 1–2, zdanie końcowe",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("15b", "Art. 15b")} визначає, хто через biuro SIRENE виконує перелічені завдання щодо SIS-записів даних cudzoziemców, і відділяє записи для цілей повернення від записів для odmowy wjazdu i pobytu.`,
        rules: [
          {
            locator: "Art. 15b pkt 1",
            explanation:
              "Для першої групи встановіть, що завдання стосується SIS у контексті повернення, і знайдіть конкретну статтю ustawa, яка надає повноваження щодо відповідного wpis.",
          },
          {
            locator: "Art. 15b pkt 2",
            explanation:
              "Для другої групи перевірте, що йдеться про SIS для odmowy wjazdu i pobytu, а не про записи для цілей повернення.",
          },
          {
            locator: "Art. 15b zdanie końcowe",
            explanation:
              "Виконання організоване Komendant Główny Policji за участю визначених функціонерів Straży Granicznej у biurze SIRENE; це правило компетенції, а не матеріальна підстава для рішення.",
          },
        ],
        legalEffect:
          "Норма визначає інституційний спосіб реалізації окремих SIS-завдань. Вона сама не створює підстави для wpis, не скасовує процедурних гарантій і не надає висновку про legalny pobyt або prawo do pracy.",
        foreignersCase:
          "У справі визначте мету SIS-запису, державу й рішення, на якому він ґрунтується, а також конкретну статтю ustawa. Не робіть висновок про статус іноземця лише з запису SIS або з назви органу, який виконує технічне завдання.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-15c",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("15c", "Art. 15c")} ust. 1 дозволяє Szef Urzędu do Spraw Cudzoziemców та wojewoda, у межах необхідних для завдань цієї ustawa та ustawy o wjeździe na terytorium RP obywateli państw UE i ich rodzin, отримувати із системи teleinformatyczny Straży Granicznej інформацію про przekraczanie кордону, з використанням системи за ${foreignersLaw.article("449", "art. 449 ust. 1")}. Умовами є ідентифікація та реєстрація доступу й обсягу/дати даних за pkt 1 та технічні й організаційні zabezpieczenia за pkt 2.`,
            sourceLocator: "Art. 15c ust. 1 pkt 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("15c", "Art. 15c")} ust. 2 надає minister właściwy do spraw zagranicznych та konsul аналогічну можливість отримувати необхідну інформацію про przekraczanie кордону лише для проваджень щодо wydania, cofnięcia або unieważnienia wizy; для них так само діють умови pkt 1–2.`,
            sourceLocator: "Art. 15c ust. 2 pkt 1–2",
          },
          {
            kind: "practical-inference",
            text: "Доступ до даних про перетин кордону є інструментом конкретного провадження та має обмежуватися необхідним обсягом. Запис системи не є самостійним документом на legalny pobyt або право на працю.",
            sourceLocator: "Art. 15c ust. 1–2",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("15c", "Art. 15c")} регулює контрольований доступ визначених органів до даних Straż Graniczna про przekraczanie кордону: для справ за ustawa — Szef Urzędu та wojewoda, для візових справ — minister właściwy та konsul.`,
        rules: [
          {
            locator: "Art. 15c ust. 1",
            explanation:
              "У справі за ustawa або за законом про громадян UE орган може отримувати лише інформацію, потрібну для конкретного завдання, а не необмежений масив даних.",
          },
          {
            locator: "Art. 15c ust. 1 pkt 1–2",
            explanation:
              "Система повинна реєструвати особу, яка отримує доступ, обсяг і дату наданих даних; орган також повинен застосовувати zabezpieczenia poufności, integralności, dostępności та autentyczności.",
          },
          {
            locator: "Art. 15c ust. 2",
            explanation:
              "Для minister właściwy do spraw zagranicznych і konsul доступ обмежений провадженнями про wydanie, cofnięcie або unieważnienie wizy та тими самими умовами безпеки.",
          },
        ],
        legalEffect:
          "Стаття визначає законний канал і межі отримання інформації, але не перетворює дані Straż Graniczna на рішення про wjazd, pobyt, wiza або wykonywanie pracy.",
        foreignersCase:
          "Уточніть орган, вид провадження, правову мету запиту та який саме перетин кордону перевіряється. Порівняйте отримані дані з документами й іншими фактами; не ототожнюйте системний запис із дозволом або остаточним висновком.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-60",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("60", "Art. 60")} ust. 1 перелічує цілі, для яких видається wiza Schengen або wiza krajowa.`,
            sourceLocator: "Art. 60 ust. 1",
          },
          {
            kind: "practical-inference",
            text: "Назва цілі візи не замінює перевірку інших умов в’їзду, перебування та окремої підстави для праці.",
            sourceLocator: "Art. 60 ust. 1",
          },
        ],
        summary:
          "Стаття систематизує допустимі цілі видачі wizy Schengen або wizy krajowej: зокрема туризм, відвідування, роботу, навчання, дослідження, лікування, транзит та інші прямо названі випадки.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Перелік описує cel wydania wizy. Конкретна заява повинна відповідати одній із передбачених цілей і бути підтверджена належними документами.",
          },
          {
            locator: "pkt 5–6",
            explanation:
              "Робочі цілі розрізняються за документом і видом праці. Сам запис робочої цілі у візі не доводить, що всі умови легальної праці виконані.",
          },
        ],
        legalEffect:
          "Обрана й підтверджена ціль визначає, у якому режимі орган оцінює заяву на візу. Стаття не скасовує інших умов видачі, відмови або перевірки на кордоні.",
        foreignersCase:
          "У справі іноземця спочатку прочитайте cel у візі, строки й кількість в’їздів, а потім окремо встановіть актуальну підставу перебування та право виконувати конкретну роботу.",
      },
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
      {
        provisionId: "ustawa-o-cudzoziemcach-art-109a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("109a", "Art. 109a")} pkt 1–3 регулює дії wojewoda або Szef Urzędu w drugiej instancji через Komendant Główny Policji, коли дані cudzoziemca внесені до SIS для цілей повернення: konsultacje з державою, яка внесла дані, якщо її рішення містить zakaz ponownego wjazdu, та інформування цієї держави про decyzja або zamiar/udzielenie zezwolenia на pobyt czasowy.`,
            sourceLocator: "Art. 109a pkt 1–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("109a", "Art. 109a")} pkt 1 вимагає звернутися по konsultacje, передбачені ${foreignersLaw.external("art. 9 ust. 1 rozporządzenia nr 2018/1860", "https://eur-lex.europa.eu/eli/reg/2018/1860/oj")}, якщо SIS-дані пов’язані з рішенням іншої держави Schengen із zakaz ponownego wjazdu.`,
            sourceLocator: "Art. 109a pkt 1",
          },
          {
            kind: "practical-inference",
            text: "Konsultacje та інформування координаційно пов’язують польське провадження з SIS-рішенням іншої держави. Вони самі не надають і не скасовують zezwolenia, legalnego pobytu чи права на працю.",
            sourceLocator: "Art. 109a pkt 1–3",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("109a", "Art. 109a")} визначає, як польський орган через Komendant Główny Policji консультується або повідомляє іншу державу Schengen, коли SIS-запис для повернення перетинається із заявою чи рішенням про zezwolenie na pobyt czasowy.`,
        rules: [
          {
            locator: "Art. 109a pkt 1",
            explanation:
              "За SIS-запису, пов’язаного з рішенням іншої держави та zakaz ponownego wjazdu, польський орган звертається по передбачені konsultacje.",
          },
          {
            locator: "Art. 109a pkt 2",
            explanation:
              "За тієї самої обставини орган інформує державу, яка внесла дані, про видану decyzja у справі про zezwolenie na pobyt czasowy.",
          },
          {
            locator: "Art. 109a pkt 3",
            explanation:
              "Якщо SIS-запис пов’язаний із рішенням без zakaz ponownego wjazdu, повідомляється zamiar udzielenia або udzielenie zezwolenia na pobyt czasowy.",
          },
        ],
        legalEffect:
          "Норма запускає міждержавну konsultacja та обмін інформацією навколо заяви або рішення про pobyt czasowy. Вона не є самостійною підставою для pozytywna або negatywna decyzja і не перетворює SIS-запис на доказ дозволу чи заборони поза його правовою підставою.",
        foreignersCase:
          "З’ясуйте, яка держава і яке рішення створили SIS-запис, чи є zakaz ponownego wjazdu, хто саме діє в польській справі та чи йдеться про zamiar, udzielenie або вже видану decyzja. Не робіть висновок про legalny pobyt або prawo do pracy лише з SIS-запису чи факту konsultacje.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-109b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("109b", "Art. 109b")} ust. 1 передбачає, що після запиту іншої держави Schengen про konsultacje за ${foreignersLaw.external("art. 10 або art. 11 rozporządzenia nr 2018/1860", "https://eur-lex.europa.eu/eli/reg/2018/1860/oj")}, якщо cudzoziemiec має zezwolenie na pobyt czasowy, відповідний wojewoda ustala, чи є підстави для cofnięcia цього zezwolenia.`,
            sourceLocator: "Art. 109b ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("109b", "Art. 109b")} ust. 2–4 встановлює ланцюг повідомлень і строки: wojewoda протягом 10 днів повідомляє через Komendant Główny Policji про decyzja o cofnięciu або відсутність підстав; за неможливості вчасно діяти просить продовження максимум на 12 днів із uzasadnienie і передає інформацію за 2 дні до кінця продовженого строку, а Komendant Główny Policji передає її іншій державі протягом 14 днів або у продовжений строк.`,
            sourceLocator: "Art. 109b ust. 2–4",
          },
          {
            kind: "practical-inference",
            text: "Запит про konsultacje запускає перевірку та обмін інформацією, але не означає автоматичного cofnięcie zezwolenia. Реальний статус побytu і право на працю треба встановлювати за decyzja та окремими матеріальними правилами.",
            sourceLocator: "Art. 109b ust. 1–4",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("109b", "Art. 109b")} регулює польську відповідь на konsultacje іншої держави щодо cudzoziemiec із zezwolenie na pobyt czasowy: wojewoda перевіряє підстави cofnięcia та передає через Komendant Główny Policji результат у визначені строки.`,
        rules: [
          {
            locator: "Art. 109b ust. 1",
            explanation:
              "Компетентним є wojewoda, який надав zezwolenie, або wojewoda першої інстанції, якщо zezwolenie надав Szef Urzędu у другій інстанції; він оцінює наявність підстав cofnięcia.",
          },
          {
            locator: "Art. 109b ust. 2",
            explanation:
              "Інформація про рішення o cofnięciu або про відсутність підстав передається Komendant Główny Policji протягом 10 днів від отримання запиту на konsultacje.",
          },
          {
            locator: "Art. 109b ust. 3",
            explanation:
              "До спливу строку можна просити через Komendant Główny Policji продовження максимум на 12 днів; запит має містити uzasadnienie, а інформацію подають за 2 дні до кінця запитаного строку.",
          },
          {
            locator: "Art. 109b ust. 4",
            explanation:
              "Komendant Główny Policji передає отриману інформацію іншій державі протягом 14 днів від її запиту або в межах продовженого строку.",
          },
        ],
        legalEffect:
          "Стаття встановлює компетенцію та календар міждержавної консультації щодо можливого cofnięcie zezwolenia. Вона не замінює окрему decyzja про cofnięcie і не робить SIS-запис, запит або службове повідомлення доказом legalnego pobytu чи права на працю.",
        foreignersCase:
          "Встановіть дату запиту іншої держави, чинність zezwolenie, компетентного wojewoda, результат перевірки та всі строки/продовження. Відокремте службову інформацію між органами від самої decyzja o cofnięciu і не виводьте наслідок для роботи лише з факту konsultacje.",
      },
    ]),
  })
