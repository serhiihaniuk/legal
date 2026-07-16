import { createLegalTextAuthor } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export const foreignersActPart05 =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
      {
        provisionId: "ustawa-o-cudzoziemcach-art-139t",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("139t", "Art. 139t")} ust. 1 вимагає, щоб jednostka przyjmująca подала заяву про zezwolenie з ${foreignersLaw.article("139o", "art. 139o")} ust. 1 для cudzoziemiec, який перебуває в Польщі, не пізніше останнього дня його legalnego pobytu; ust. 2–3 відповідно відсилають до ${foreignersLaw.article("108", "art. 108")}.`,
            sourceLocator: "Art. 139t ust. 1–3",
          },
          {
            kind: "practical-inference",
            text: "У справі треба встановити не лише дату заяви, а й останній день legalnego pobytu або дату законного в’їзду після заяви.",
            sourceLocator: "Art. 139t ust. 1–3",
          },
        ],
        summary: foreignersLaw.text`Для заяви за ${foreignersLaw.article("139o", "art. 139o")} ust. 1 закон встановлює різні правила для cudzoziemiec, який уже перебуває в Польщі, і для особи за межами Польщі.`,
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Jednostka przyjmująca подає заяву не пізніше останнього дня legalnego pobytu cudzoziemca на території Польщі.",
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`У ситуації ust. 1 положення ${foreignersLaw.article("108", "art. 108")} застосовуються відповідно; це не скасовує перевірку умов ICT-дозволу.`,
          },
          {
            locator: "ust. 3",
            explanation: foreignersLaw.text`Якщо cudzoziemiec перебуває за межами Польщі, ${foreignersLaw.article("108", "art. 108")} ust. 1 pkt 2 і ust. 2 застосовуються відповідно після його законного в’їзду.`,
          },
        ],
        legalEffect: foreignersLaw.text`Норма визначає строк і процесуальну модель подання заяви для zezwolenie з ${foreignersLaw.article("139o", "art. 139o")} ust. 1; сама заява не підтверджує виконання матеріальних умов дозволу.`,
        foreignersCase:
          "Складіть хронологію legalnego pobytu, подання заяви та в’їзду. Додайте документи про статус перебування, дату подання jednostka przyjmująca і законність в’їзду.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-139u",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("139u", "Art. 139u")} передбачає відповідне застосування до zezwolenie з ${foreignersLaw.article("139o", "art. 139o")} ust. 1 положень ${foreignersLaw.article("139g", "art. 139g")}, ${foreignersLaw.article("139h", "139h")}, ${foreignersLaw.article("139i", "139i")}, ${foreignersLaw.article("139j", "art. 139j")} ust. 3, ${foreignersLaw.article("139k", "art. 139k")} та ${foreignersLaw.article("139m", "art. 139m")}.`,
            sourceLocator: "Art. 139u",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("139u", "Art. 139u")} є нормою-відсиланням: правила для дозволу з ${foreignersLaw.article("139o", "art. 139o")} ust. 1 треба читати разом із переліченими положеннями розділу ICT.`,
        rules: [
          {
            locator: "cały przepis",
            explanation: foreignersLaw.text`Для кожного питання визначте конкретну норму з ${foreignersLaw.article("139g", "art. 139g")}, ${foreignersLaw.article("139h", "139h")}, ${foreignersLaw.article("139i", "139i")}, ${foreignersLaw.article("139j", "art. 139j")} ust. 3, ${foreignersLaw.article("139k", "art. 139k")} або ${foreignersLaw.article("139m", "art. 139m")} і застосовуйте її відповідно.`,
          },
        ],
        legalEffect:
          "Стаття не створює нового самостійного набору умов; правовий наслідок залежить від змісту конкретної норми, до якої вона відсилає.",
        foreignersCase: foreignersLaw.text`У висновку назвіть конкретний застосований cross-reference і перевірте його умови за текстом відповідної статті, а не лише за ${foreignersLaw.article("139u", "art. 139u")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-139w",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("139w", "Art. 139w")} ust. 1 зобов’язує wojewoda передати Szef Urzędu копію рішення про udzielenie або cofnięcie дозволу з ${foreignersLaw.article("139o", "art. 139o")} ust. 1, а ust. 2 зобов’язує Szef Urzędu передати відповідному wojewoda інформацію про cudzoziemiec, названу в ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret pierwsze.`,
            sourceLocator: "Art. 139w ust. 1–2",
          },
        ],
        summary: foreignersLaw.text`Стаття встановлює обмін даними між wojewoda та Szef Urzędu у справах дозволу за ${foreignersLaw.article("139o", "art. 139o")} ust. 1.`,
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Wojewoda передає Szef Urzędu копію рішення про udzielenie або cofnięcie цього дозволу.",
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Szef Urzędu передає wojewoda, який надав дозвіл, інформацію про cudzoziemiec у межах даних, названих у ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret pierwsze.`,
          },
        ],
        legalEffect:
          "Обмін інформацією забезпечує міжорганізаційний облік і не є самостійним рішенням про legalny pobyt або право на працю.",
        foreignersCase:
          "Порівнюйте рішення wojewoda з отриманою інформацією та встановлюйте джерело кожної розбіжності; не ототожнюйте передачу копії рішення з його позитивним змістом.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-140",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("140", "Art. 140")} ust. 1 встановлює сукупні умови zezwolenie на pobyt czasowy для роботи cudzoziemiec, delegowany przez pracodawcę zagranicznego: zezwolenie na pracę або письмову заяву роботодавця, страхування, стабільний і регулярний дохід та місце проживання в Польщі.`,
            sourceLocator: "Art. 140 ust. 1 pkt 1–4",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`За ${foreignersLaw.article("140", "art. 140")} ust. 2 щомісячний дохід має перевищувати поріг, що дає право на świadczenia pieniężne z pomocy społecznej, щодо cudzoziemiec і кожного члена сім’ї на його утриманні.`,
            sourceLocator: "Art. 140 ust. 2",
          },
        ],
        summary:
          "Для тимчасово делегованого працівника потрібні не лише документи про роботу, а й страхування, стабільний дохід і забезпечене місце проживання.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Cudzoziemiec має мати zezwolenie na pracę за відповідним законом або письмову заяву pracodawca про намір працевлаштувати, якщо zezwolenie na pracę не вимагається.",
          },
          {
            locator: "ust. 1 pkt 2–4",
            explanation:
              "Потрібні health insurance або підтвердження покриття лікування, джерело стабільного і регулярного доходу та забезпечене місце проживання в Польщі.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Дохід порівнюється з порогом соціальної допомоги окремо щодо cudzoziemiec і кожного утримуваного члена сім’ї.",
          },
        ],
        legalEffect:
          "Умови оцінюються сукупно; документ про роботу сам по собі не гарантує udzielenie zezwolenie.",
        foreignersCase:
          "Окремо підтвердьте делегування, право на роботу, страхування, дохід і житло. Перевірте період делегування та склад сім’ї на момент оцінки заяви.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-141",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("141", "Art. 141")} не застосовує ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9 до cudzoziemiec, тимчасово delegowany для świadczenie usług у Польщі роботодавцем, що має siedziba в іншій державі UE, EFTA–EOG або Швейцарії, якщо cudzoziemiec має право перебувати й zatrudnienie в цій державі.`,
            sourceLocator: "Art. 141",
          },
        ],
        summary:
          "Для визначеного транскордонного delegowanie стаття виключає лише одну підставу відмови, пов’язану з обороною, безпекою або порядком.",
        rules: [
          {
            locator: "cały przepis",
            explanation:
              "Потрібно підтвердити тимчасове delegowanie для świadczenie usług, siedziba pracodawca в названій державі та право cudzoziemiec перебувати й працювати там.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("141", "Art. 141")} прибирає тільки застосування ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9 у визначеній ситуації; інші умови й підстави відмови залишаються чинними.`,
        foreignersCase:
          "Перевірте фактичну організацію послуг, державу siedziba pracodawca і документи про право pobyt та zatrudnienie там. Назва договору сама не доводить delegowanie.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-142",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("142", "Art. 142")} встановлює умови zezwolenie на pobyt czasowy для prowadzenie działalności gospodarczej: особисті умови cudzoziemiec, а також економічні умови щодо podmiot, який веде діяльність.`,
            sourceLocator: "Art. 142 ust. 1–5",
          },
          {
            kind: "practical-inference",
            text: foreignersLaw.text`Саме створення spółka, частка або функція в zarząd не доводять виконання фінансових, кадрових чи майбутніх економічних умов ${foreignersLaw.article("142", "art. 142")}.`,
            sourceLocator: "Art. 142 ust. 1 pkt 3, ust. 2–3",
          },
        ],
        summary:
          "Бізнесовий pobyt вимагає мети prowadzenie działalności gospodarczej, особистих умов і визначеного результату або перспективи діяльності podmiot.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation:
              "Cudzoziemiec повинен мати страхування, стабільний і регулярний дохід, потрібну згоду на посаду чи професію, якщо її вимагає окремий закон, і місце проживання в Польщі.",
          },
          {
            locator: "ust. 1 pkt 3 lit. a–b",
            explanation:
              "Podmiot повинен або досягти порога доходу, або щонайменше рік мати двох працівників на умовах, названих у lit. a, або показати ресурси чи дії для досягнення цих умов у майбутньому.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Тест podmiot застосовується до визначених spółka, створених cudzoziemiec або до яких він приєднався; ust. 3 окремо охоплює функції в zarząd, komplementariusz і prokurent.",
          },
          {
            locator: "ust. 4–5",
            explanation: foreignersLaw.text`Для доходу застосовується ${foreignersLaw.article("140", "art. 140")} ust. 2. Для громадянина Туреччини у визначеній ситуації застосовується ${foreignersLaw.article("41", "art. 41")} Protokołu dodatkowego до Układ stowarzyszeniowy EWG–Turcja.`,
          },
        ],
        legalEffect:
          "Стаття формує комплексний тест для бізнесового дозволу, а не автоматичне право через володіння часткою чи посаду в spółka.",
        foreignersCase:
          "Розділіть докази особистих умов і podmiot: фінансові результати, працівників або реальний план, ресурси та фактичну діяльність. Не замінюйте доказ діяльності реєстраційним витягом.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-142a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("142a", "Art. 142a")} дозволяє ministrowi właściwemu do spraw wewnętrznych у porozumieniu з ministrem właściwym do spraw pracy та ministrem właściwym do spraw gospodarki встановити rozporządzeniem річний limit дозволів у ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
            sourceLocator: "Art. 142a ust. 1",
          },
          {
            kind: "statute-text",
            text: "При встановленні limit враховуються потреби ринку праці, безпека й порядок та принцип komplementarności zatrudnienia cudzoziemców; досягнення limit оголошується в Monitor Polski.",
            sourceLocator: "Art. 142a ust. 2–3",
          },
        ],
        summary: foreignersLaw.text`Стаття створює делегацію для річних лімітів лише щодо дозволів у ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Rozporządzenie може диференціювати limit за województwo, професіями, видами договорів або видами діяльності podmiot.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Під час нормотворення міністр враховує потреби rynku pracy, wzglědy bezpieczeństwa państwa i porządku publicznego та komplementarność zatrudnienia cudzoziemców.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Досягнення limit у конкретному році оголошується minister у Monitor Polski шляхом obwieszczenie.",
          },
        ],
        legalEffect: foreignersLaw.text`Сам ${foreignersLaw.article("142a", "art. 142a")} не встановлює числа limit; юридично значущі чинне rozporządzenie та офіційне obwieszczenie.`,
        foreignersCase: foreignersLaw.text`Уточніть, чи справа підпадає під ${foreignersLaw.article("142", "art. 142")} ust. 3, знайдіть чинне rozporządzenie для відповідного року й перевірте офіційне оголошення про досягнення limit.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-143",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("143", "Art. 143")} ust. 1 передбачає odmowa udzielenia zezwolenie на pobyt для діяльності з ${foreignersLaw.article("142", "art. 142")} ust. 3, якщо в поточному календарному році досягнуто limit, що стосується цього cudzoziemiec; ust. 2 відсилає до ${foreignersLaw.article("117", "art. 117")} pkt 1–2.`,
            sourceLocator: "Art. 143 ust. 1–2",
          },
        ],
        summary: foreignersLaw.text`Річний limit може бути підставою для відмови у наданні бізнесового дозволу, але лише у вузькій ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Поза випадками ${foreignersLaw.article("100", "art. 100")} дозвіл відмовляють, коли досягнуто limit, що стосується конкретного cudzoziemiec, визначений на підставі ${foreignersLaw.article("142a", "art. 142a")} ust. 1.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`До odmowa udzielenia застосовуються ${foreignersLaw.article("117", "art. 117")} pkt 1 і 2; їхні умови треба перевірити окремо.`,
          },
        ],
        legalEffect: foreignersLaw.text`Норма не робить будь-який досягнутий limit загальною забороною бізнесового pobyt і не стосується справ поза ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
        foreignersCase: foreignersLaw.text`Зафіксуйте тип дозволу, роль cudzoziemiec за ${foreignersLaw.article("142", "art. 142")} ust. 3, календарний рік і офіційний статус limit. Не називайте наслідок odmowa wszczęcia.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-143a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("143a", "Art. 143a")} вимагає, щоб рішення про udzielenie дозволу в ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3 містило okres ważności, podmiot powierzający pracę та stanowisko, на якому cudzoziemiec має працювати.`,
            sourceLocator: "Art. 143a ust. 1",
          },
          {
            kind: "statute-text",
            text: "Якщо cudzoziemiec звільнений окремими правилами від вимоги zezwolenie na pracę, рішення має містити інформацію про право працювати на умовах відповідної підстави звільнення.",
            sourceLocator: "Art. 143a ust. 2",
          },
        ],
        summary: foreignersLaw.text`У бізнесовому дозволі за ${foreignersLaw.article("142", "art. 142")} ust. 3 рішення фіксує строк і конкретні параметри роботи.`,
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "У рішенні називаються okres ważności, podmiot powierzający pracę і stanowisko.",
          },
          {
            locator: "ust. 2",
            explanation:
              "За наявності звільнення від zezwolenie na pracę рішення також зазначає правову підставу й умови цього звільнення.",
          },
        ],
        legalEffect:
          "Ці реквізити визначають межі наданого дозволу та відображають підставу доступу до праці; вони не скасовують умов окремого закону про працю.",
        foreignersCase:
          "Порівняйте рішення з фактичною функцією в spółka, podmiot powierzający pracę і підставою звільнення від zezwolenie na pracę. Розбіжність оцінюйте окремо від самого pobyt.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-144",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("144", "Art. 144")} ust. 1 встановлює умови zezwolenie на pobyt czasowy у celu kształcenia się na studiach: мета підготовки або продовження studia у відповідній jednostka, zaświadczenie, оплата платного навчання, страхування та кошти на утримання, повернення або транзит і studia.`,
            sourceLocator: "Art. 144 ust. 1–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("144", "Art. 144")} ust. 4–18 регулює zatwierdzenie jednostka prowadząca studia, винятки з обов’язку zatwierdzenia, перевірки, строк затвердження, список і можливість розпорядження про підготовчий курс.`,
            sourceLocator: "Art. 144 ust. 4–18",
          },
          {
            kind: "practical-inference",
            text: "Zaświadczenie про прийняття або продовження studia є одним доказом; воно не замінює страхування, кошти, оплату платного навчання та перевірку статусу jednostka.",
            sourceLocator: "Art. 144 ust. 1 pkt 1–2",
          },
        ],
        summary:
          "Для studia потрібні підтверджені навчання, статус jednostka, страхування та достатні кошти. Стаття також визначає режим zatwierdzenie навчального закладу.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation:
              "Потрібні zaświadczenie jednostka про прийняття або продовження studia, доказ оплати за платне навчання, health insurance або покриття лікування та кошти на утримання, повернення/транзит і studia.",
          },
          {
            locator: "ust. 1a–1c",
            explanation: foreignersLaw.text`Місячні кошти мають перевищувати поріг соціальної допомоги після врахування витрат на житло; ust. 1c містить спеціальне правило для громадян держав, названих у положеннях ${foreignersLaw.article("113b", "art. 113b")}.`,
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Ust. 2 охоплює підготовчий курс для громадян держав, визначених розпорядженням, а ust. 3 — продовження або доповнення studia з іншої держави UE поза програмою чи угодою мобільності за додаткових умов.",
          },
          {
            locator: "ust. 4–9, 13–18",
            explanation:
              "Jednostka затверджується рішенням міністра за умовами існування, реального навчання, рекрутації, безпеки та інтересу RP; органи дають інформацію протягом 30 або 60 днів, zatwierdzenie зазвичай діє 5 років, список публікується офіційно.",
          },
          {
            locator: "ust. 5 pkt 2, ust. 10–12",
            explanation:
              "Ці положення мають позначку «(uchylony)» у локальному corpus; їх не слід використовувати як чинні умови.",
          },
        ],
        legalEffect:
          "Стаття задає матеріальні умови побиту та інституційний контроль за jednostka. Прийняття на studia не гарантує udzielenie zezwolenie.",
        foreignersCase:
          "Перевірте за актуальними документами zaświadczenie, оплату, страхування, розрахунок коштів і статус jednostka (включно з можливим zakaz). Не робіть висновок лише з листа університету.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-144a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("144a", "Art. 144a")} дозволяє ministrowi właściwemu do spraw wewnętrznych видати decyzja про zakaz przyjmowania cudzoziemców одиницею з ${foreignersLaw.article("144", "art. 144")} ust. 5 на строк до 5 років за прямо названих обставин.`,
            sourceLocator: "Art. 144a ust. 1–5",
          },
          {
            kind: "statute-text",
            text: "До таких обставин належать, зокрема, недотримання вимог рекрутації, безпекові або суспільні підстави, ліквідація чи нереальна діяльність, сприяння незаконному pobyt, порушення повідомлень/обов’язків, борги та невнесення даних до POL-on.",
            sourceLocator: "Art. 144a ust. 1 pkt 1–5 lit. a–h",
          },
        ],
        summary:
          "Стаття дає міністру спеціальний інструмент заборонити прийом нових cudzoziemców одиницею, яка зазвичай не підлягає zatwierdzenie.",
        rules: [
          {
            locator: "ust. 1 pkt 1–5",
            explanation:
              "Підстави охоплюють вимоги рекрутації за Prawo o szkolnictwie wyższym i nauce, оборону/безпеку, interes RP, ліквідацію або відсутність реальної діяльності, сприяння незаконному в’їзду чи побиту, невиконання обов’язків, składki, podatki та POL-on.",
          },
          {
            locator: "ust. 1a–1d",
            explanation:
              "Перед decyzja minister запитує інформацію в компетентних органів; строк становить 30 днів, у особливо обґрунтованому випадку — до 60, а пропуск строку означає виконання вимоги отримати інформацію.",
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Ust. 2–4 позначені як «(uchylony)»; актуальним є ust. 5 про офіційне оголошення списку одиниць із zakaz.",
          },
        ],
        legalEffect: foreignersLaw.text`Zakaz стосується прийому cudzoziemców відповідною jednostka. Він не є автоматичним скасуванням кожного вже виданого дозволу; для продовження навчання діє ${foreignersLaw.article("144b", "art. 144b")}.`,
        foreignersCase: foreignersLaw.text`Встановіть, яка саме decyzja була видана, коли вона стала ostateczna і чи одиниця входить до актуального списку. Для студента перевірте дату його дозволу та застосування ${foreignersLaw.article("144b", "art. 144b")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-144b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("144b", "Art. 144b")} ust. 1 забороняє jednostka prowadząca studia приймати cudzoziemców на studia з дня, коли остаточними стали рішення про odmowa zatwierdzenia, odmowa przedłużenia, cofnięcie zatwierdzenia або zakaz з ${foreignersLaw.article("144a", "art. 144a")} ust. 1.`,
            sourceLocator: "Art. 144b ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Cudzoziemiec, якому до цієї дати надано дозвіл з ${foreignersLaw.article("144", "art. 144")}, може продовжити навчання, а в його провадженні про побит не застосовується вимога zatwierdzenie jednostka.`,
            sourceLocator: "Art. 144b ust. 2–3",
          },
        ],
        summary:
          "Норма розмежовує новий прийом і продовження навчання студентом, який уже мав дозвіл до остаточного негативного рішення щодо закладу.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Заборона прийому починається з дня, коли відповідне рішення стало ostateczna.",
          },
          {
            locator: "ust. 2–3",
            explanation: foreignersLaw.text`Особа з дозволом ${foreignersLaw.article("144", "art. 144")}, наданим до цієї дати, може продовжувати kształcenie; у процедурі її дозволу не застосовується вимога затвердження jednostka.`,
          },
        ],
        legalEffect:
          "Стаття захищає продовження навчання вже допущеного студента, але не усуває інші умови pobyt або окремі підстави cofnięcie.",
        foreignersCase:
          "Порівняйте дату ostateczna рішення про заклад із датою udzielenie дозволу, підтвердьте фактичне продовження studia і збережіть документ про статус jednostka на потрібну дату.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-145",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("145", "Art. 145")} встановлює строки першого та наступного zezwolenie з ${foreignersLaw.article("144", "art. 144")} для першого року studia, програм мобільності, szkoła doktorska і підготовчого курсу.`,
            sourceLocator: "Art. 145 ust. 1–4",
          },
        ],
        summary:
          "Строк дозволу залежить від першого чи наступного дозволу, року навчання, програми мобільності, курсу та статусу doktorant.",
        rules: [
          {
            locator: "ust. 1 i 1a",
            explanation:
              "Перше zezwolenie для першого року зазвичай надається на 15 місяців; для визначеної програми внутрішньої мобільності — на 2 роки, а для першого дозволу особі в szkoła doktorska — на 2 роки і 6 місяців.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Якщо підстава обґрунтовує коротший pobyt, перше zezwolenie охоплює akademicki rok або studia плюс 3 місяці; для підготовчого курсу діє строк курсу плюс 3 місяці.",
          },
          {
            locator: "ust. 4",
            explanation:
              "Наступне zezwolenie надається на studia або курс плюс 3 місяці, для doktorant — плюс 6 місяців, але не довше 3 років.",
          },
        ],
        legalEffect:
          "Стаття встановлює законодавчі строки та межі, але фактичний строк залежить від підтвердженої тривалості навчальної підстави.",
        foreignersCase:
          "Зіставте заświadczenie, академічний рік, програму мобільності, тип навчання та статус doktorant зі строком у decyzja; не переносіть строк іншої категорії.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-145a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("145a", "Art. 145a")}, крім випадків ${foreignersLaw.article("99", "art. 99")}, вимагає odmowa wszczęcia провадження про дозвіл для studia, якщо в день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про дозвіл ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
            sourceLocator: "Art. 145a pkt 1–2",
          },
        ],
        summary:
          "Це правило стосується початку провадження про навчальний дозвіл, а не остаточної odmowa udzielenia після повного розгляду.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`На дату подання перевіряється наявність дозволу з ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для роботи як pracownik odbywający staż.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`На ту саму дату перевіряється, чи cudzoziemiec просить дозвіл з ${foreignersLaw.article("127", "art. 127")} або вже його має.`,
          },
        ],
        legalEffect:
          "Наслідком є odmowa wszczęcia у названих ситуаціях; стаття не означає довічної неможливості просити іншу підставу побиту.",
        foreignersCase:
          "Зафіксуйте всі дозволи й заяви саме на день подання заяви на studia та розрізняйте odmowa wszczęcia від odmowa udzielenia.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-146",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("146", "Art. 146")} має в локальному офіційному corpus позначку «(uchylony)».`,
            sourceLocator: "Art. 146",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("146", "Art. 146")} скасована і не містить чинної нормативної диспозиції.`,
        rules: [
          {
            locator: "cały przepis",
            explanation: foreignersLaw.text`Не використовуйте ${foreignersLaw.article("146", "Art. 146")} як самостійну чинну підставу; перевіряйте актуальні сусідні положення та перехідні правила, якщо документ посилається на цей номер.`,
          },
        ],
        legalEffect: foreignersLaw.text`Позначка «(uchylony)» означає, що в актуальному тексті немає чинного правила, яке можна застосувати як ${foreignersLaw.article("146", "Art. 146")}.`,
        foreignersCase: foreignersLaw.text`Встановіть дату і контекст старого посилання на ${foreignersLaw.article("146", "Art. 146")} та зіставте його з редакцією акта, чинною на відповідну подію.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-147",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("147", "Art. 147")} встановлює спеціальні підстави odmowa udzielenia zezwolenie з ${foreignersLaw.article("144", "art. 144")}: діяльність jednostka для сприяння незаконному в’їзду чи побиту, обґрунтовані сумніви щодо заявленої мети та, для наступної або повторної першої заяви, використання попереднього дозволу не за метою.`,
            sourceLocator: "Art. 147 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`За ${foreignersLaw.article("147", "art. 147")} ust. 3 у разі повторної першої або наступної заяви можна відмовити, якщо cudzoziemiec був skreślony з listy studentów або doktorantów.`,
            sourceLocator: "Art. 147 ust. 3",
          },
        ],
        summary:
          "Стаття регулює спеціальні відмови у навчальному дозволі; вона не є правилом про загальний доступ студента до праці.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation: foreignersLaw.text`Поза ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9 дозвіл відмовляють, якщо jednostka переважно сприяє незаконному в’їзду/побиту або є обґрунтовані сумніви, що заявлена мета pobyt не відповідає дійсній.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "При повторній першій або наступній заяві odmowa є обов’язковою за встановленого використання попереднього дозволу не за наданою метою, з урахуванням названих винятків.",
          },
          {
            locator: "ust. 3",
            explanation:
              "У такій повторній заяві орган може відмовити, якщо cudzoziemiec був викреслений зі списку студентів або doktorantów.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("147", "Art. 147")} може перешкоджати udzielenie навчального дозволу навіть за наявності документів навчання; кожну підставу треба довести в конкретній процедурі.`,
        foreignersCase:
          "Перевірте мотивування decyzja, фактичну діяльність jednostka, реальну мету pobyt, історію попереднього дозволу та документ про skreślenie, якщо на нього посилається орган.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-148",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("148", "Art. 148")} передбачає cofnięcie zezwolenie з ${foreignersLaw.article("144", "art. 144")}, якщо його використовують не за наданою метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або jednostka переважно сприяє незаконному в’їзду чи pobyt.`,
            sourceLocator: "Art. 148 ust. 1 pkt 1–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`За ${foreignersLaw.article("148", "art. 148")} ust. 2 дозвіл можна cofnięcie, якщо cudzoziemiec був skreślony з listy studentów або doktorantów.`,
            sourceLocator: "Art. 148 ust. 2",
          },
        ],
        summary:
          "Навчальний дозвіл може бути скасований за спеціальними обставинами використання, діяльності закладу або статусу студента.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation: foreignersLaw.text`Поза ${foreignersLaw.article("101", "art. 101")} pkt 1–2 wojewoda cofnie дозвіл, якщо мета використання не відповідає наданій, настала одна з названих обставин ${foreignersLaw.article("100", "art. 100")} або jednostka діє переважно для незаконного в’їзду/побиту.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Cudzoziemiec може втратити дозвіл через skreślenie зі списку studentów або doktorantów; це формулювання дає органу можливість, а не автоматичний наслідок.",
          },
        ],
        legalEffect:
          "Cofnięcie потребує рішення компетентного органу та правильної підстави; повідомлення закладу або сама перерва в навчанні не замінюють decyzja.",
        foreignersCase:
          "Встановіть точну подію і дату, перевірте мотивування cofnięcie, статус списку студентів і фактичну мету pobyt. Розділяйте обов’язкові та факультативні формулювання статті.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-148a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("148a", "Art. 148a")} визначає обов’язкові дані в zaświadczenie з ${foreignersLaw.article("144", "art. 144")} ust. 1 pkt 1 lit. a: особу, jednostka, початок і строк навчання, напрям, оплату, мову, рівень мови та програму/угоду мобільності; для продовження додається інформація про перебіг навчання.`,
            sourceLocator: "Art. 148a ust. 1–1a",
          },
          {
            kind: "statute-text",
            text: "Minister właściwy do spraw szkolnictwa wyższego i nauki у porozumieniu з ministrem właściwym do spraw wewnętrznych встановлює wzór заświadczenie розпорядженням.",
            sourceLocator: "Art. 148a ust. 2",
          },
        ],
        summary:
          "Стаття визначає зміст стандартизованого zaświadczenie, на якому ґрунтується навчальна заява.",
        rules: [
          {
            locator: "ust. 1 pkt 1–12",
            explanation:
              "У документі мають бути ідентифікаційні дані, заклад і адреса, початок та період навчання, напрям/дисципліна, тип і оплата studia, мова, мовний рівень і відомості про мобільність; для kontynuacja — перебіг і зарахування предметів.",
          },
          {
            locator: "ust. 1a",
            explanation:
              "Для kontynuacja jednostka додає друк або засвідчену копію карти періодичних досягнень студента.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Зразок заświadczenie та його дані визначаються відповідним rozporządzenie.",
          },
        ],
        legalEffect: foreignersLaw.text`Стаття уніфікує доказ навчальної підстави; неповний або невідповідний zaświadczenie може впливати на оцінку заяви, але не замінює інших умов ${foreignersLaw.article("144", "art. 144")}.`,
        foreignersCase:
          "Зіставте кожне поле zaświadczenie з заявою, рішенням і фактичним навчанням; для kontynuacja перевірте карту досягнень та зараховані предмети.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-148b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("148b", "Art. 148b")} зобов’язує орган у справі udzielenie або cofnięcie дозволу для studia перевірити дані cudzoziemiec у відповідному wykaz за ${foreignersLaw.external("art. 343a", "https://eli.gov.pl/eli/DU/2025/622/ogl")}, ${foreignersLaw.external("344", "https://eli.gov.pl/eli/DU/2024/1571/ogl")} або ${foreignersLaw.external("345", "https://eli.gov.pl/eli/DU/2024/1571/ogl")} Prawo o szkolnictwie wyższym i nauce.`,
            sourceLocator: "Art. 148b ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Дані в цих wykaz вважаються правдивими, але презумпцію можна спростувати лише документом urzędowy, зокрема zaświadczenie з ${foreignersLaw.article("144", "art. 144")} ust. 1 pkt 1 lit. a.`,
            sourceLocator: "Art. 148b ust. 2",
          },
        ],
        summary:
          "Для навчальної справи офіційні реєстри мають доказову презумпцію, яку не можна спростувати простим листом або усним поясненням.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Орган перевіряє відповідний wykaz прийнятих, студентів або осіб, які здобувають ступінь доктора.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Для спростування презумпції потрібен документ urzędowy; закон прямо називає zaświadczenie як приклад.",
          },
        ],
        legalEffect:
          "Запис у wykaz є вихідною доказовою підставою органу, а спростування має відповідати підвищеній вимозі статті.",
        foreignersCase:
          "Попросіть організувати перевірку конкретного wykaz і подайте документ urzędowy, якщо запис помилковий; не покладайтеся лише на приватний лист.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-149",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("149", "Art. 149")} вимагає вести навчальне провадження з урахуванням дати початку навчання, повідомляє rektor або kierownik про наданий дозвіл і покладає на заклад обов’язок повідомити про skreślenie.`,
            sourceLocator: "Art. 149 ust. 1–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Wojewoda щороку перевіряє дані осіб із дозволами ${foreignersLaw.article("144", "art. 144")} ust. 1 або 3 у відповідних wykaz у період безпосередньо після 1 березня та 1 жовтня.`,
            sourceLocator: "Art. 149 ust. 4–5",
          },
        ],
        summary:
          "Стаття поєднує своєчасність навчального провадження, повідомлення закладу та періодичну перевірку студентських реєстрів.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "При розгляді заяви враховується передбачена програмою дата початку навчання.",
          },
          {
            locator: "ust. 1a–1b",
            explanation:
              "Ці положення позначені як «(uchylony)» і не створюють чинних обов’язків.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Wojewoda повідомляє rektor або kierownik про udzielenie дозволу, а заклад невідкладно письмово повідомляє про skreślenie cudzoziemiec.",
          },
          {
            locator: "ust. 4–5",
            explanation:
              "Wojewoda перевіряє дані в wykaz щороку після 1 березня і 1 жовтня; якщо дозвіл надав Szef Urzędu у другій інстанції, перевірку проводить wojewoda першої інстанції.",
          },
        ],
        legalEffect:
          "Обов’язки повідомлення і перевірки дають органу актуальні дані про навчальний статус, але самі по собі не є рішенням про cofnięcie дозволу.",
        foreignersCase:
          "Зафіксуйте дату початку навчання, повідомлення про udzielenie або skreślenie і результат перевірки wykaz. Відокремлюйте обов’язок закладу від процесуального рішення органу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-149a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("149a", "Art. 149a")} регулює намір скористатися mobilność studenta в іншій державі UE особою з польською student-візою або дозволом для studia: визначені jednostka або cudzoziemiec повідомляють орган цієї держави та Szef Urzędu, якщо право тієї держави вимагає такого повідомлення.`,
            sourceLocator: "Art. 149a",
          },
        ],
        summary:
          "Для мобільності з Польщі до іншої держави UE закон визначає суб’єктів повідомлення та залежність від правил приймаючої держави.",
        rules: [
          {
            locator: "cały przepis",
            explanation:
              "Перевірте, чи документ має adnotacja «student» або є польським zezwolenie для studia, хто має подати zawiadomienie та чи вимагає його право іншої держави UE.",
          },
        ],
        legalEffect:
          "Повідомлення запускає передбачену для mobilność взаємодію органів; саме по собі воно не є новим дозволом на pobyt в іншій державі.",
        foreignersCase:
          "Визначте приймаючу державу, програму або угоду мобільності, документ cudzoziemiec і доказ подання повідомлення кожному потрібному органу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-149b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("149b", "Art. 149b")} допускає mobilność studenta в Польщі, якщо cudzoziemiec продовжує або доповнює studia з іншої держави UE, охоплений програмою/угодою мобільності, має документ з adnotacja «student», перебуває не довше 360 днів, а Szef Urzędu отримав повне повідомлення і не видав sprzeciw протягом 30 днів.`,
            sourceLocator: "Art. 149b ust. 1",
          },
          {
            kind: "statute-text",
            text: "Стаття визначає зміст zawiadomienie, додані документи, підстави sprzeciw, остаточність рішення, повідомлення інших органів і захист особи, яка почала mobilność до рішення щодо jednostka.",
            sourceLocator: "Art. 149b ust. 2–16",
          },
        ],
        summary:
          "Mobilność studenta є спеціальним режимом із лімітом 360 днів, повним повідомленням і контролем через рішення Szef Urzędu.",
        rules: [
          {
            locator: "ust. 1 pkt 1–5",
            explanation:
              "Потрібні мета продовжити/доповнити studia, програма або угода внутрішньої мобільності, іноземний документ з adnotacja «student», строк до 360 днів і zawiadomienie затвердженої або звільненої від zatwierdzenie польської jednostka без sprzeciw.",
          },
          {
            locator: "ust. 2–5",
            explanation: foreignersLaw.text`Zawiadomienie польською мовою містить дані особи, документа, програми, періоду й обох закладів; до нього додаються доказ документа, страхування, коштів за ${foreignersLaw.article("144", "art. 144")} ust. 1a і ${foreignersLaw.article("150", "art. 150")} та оплати платного навчання, а іноземні документи — з присяжним перекладом.`,
          },
          {
            locator: "ust. 6–10",
            explanation:
              "Szef Urzędu видає sprzeciw, зокрема за недостатнього строку документа, відсутності страхування/коштів/оплати, проблем jednostka, неправдивих документів, запису в wykaz/SIS або безпекових підстав; строк інформації органів становить 20 днів.",
          },
          {
            locator: "ust. 11–16",
            explanation: foreignersLaw.text`Рішення про sprzeciw є ostateczna, про нього повідомляють державу, що видала документ; jednostka повідомляє про skreślenie, розпочата до ${foreignersLaw.article("144b", "art. 144b")} mobilność може продовжуватися, а без sprzeciw дані вилучаються з EES протягом 5 dni roboczych.`,
          },
        ],
        legalEffect:
          "За відсутності sprzeciw після повного повідомлення mobilność допускається в межах названих умов; це не тотожне польському zezwolenie на звичайний pobyt для studia.",
        foreignersCase:
          "Перевірте кожну з п’яти умов, дату вручення повного повідомлення, 30-денний строк, переклади, оплату, страхування та кошти. Окремо встановіть, чи є decyzja o sprzeciw і чи вона ostateczna.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-149c",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("149c", "Art. 149c")} регулює обмін інформацією про mobilność studenta: Szef Urzędu передає wojewoda повідомлення та інформацію про sprzeciw, wojewoda передає копію cofnięcie дозволу, а Szef Urzędu повідомляє держави мобільності та Straż Graniczna у названих випадках.`,
            sourceLocator: "Art. 149c ust. 1–4",
          },
        ],
        summary:
          "Стаття пов’язує польське рішення про studia з органами держав UE, у яких cudzoziemiec користується mobilność studenta.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Szef Urzędu передає wojewoda повідомлення за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. f tiret drugie та інформацію про sprzeciw з інших держав UE.`,
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Wojewoda передає копію cofnięcie польського дозволу, Szef Urzędu повідомляє держави мобільності про cofnięcie, а також інформує Straż Graniczna про cofnięcie іноземного документа у визначеній ситуації.",
          },
        ],
        legalEffect:
          "Це правило інформаційної координації; воно не замінює рішення про udzielenie або cofnięcie дозволу.",
        foreignersCase:
          "Зіставте польське рішення, повідомлення про мобільність і дані держави, що видала документ. Встановіть, яке саме рішення є джерелом наслідку для побиту.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-150",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("150", "Art. 150")} уповноважує ministra właściwego do spraw wewnętrznych визначити rozporządzeniem мінімальні кошти на повернення/транзит для cudzoziemiec і утримуваних членів сім’ї, а також документи, що підтверджують можливість отримати ці та кошти на утримання за ${foreignersLaw.article("144", "art. 144")}.`,
            sourceLocator: "Art. 150 pkt 1–2",
          },
        ],
        summary:
          "Стаття є делегацією для фінансових порогів і доказових документів у справах studia та мобільності studenta.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Розпорядження визначає мінімальні кошти на повернення до państwo pochodzenia або zamieszkania чи транзит до państwo trzecie з урахуванням держави прибуття.",
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Можуть бути визначені документи про можливість законно отримати кошти повернення/транзиту та кошти утримання за ${foreignersLaw.article("144", "art. 144")} ust. 1 pkt 2 lit. b.`,
          },
        ],
        legalEffect: foreignersLaw.text`Конкретні суми й документи походять із розпорядження; ${foreignersLaw.article("150", "art. 150")} сам не встановлює числового порога.`,
        foreignersCase: foreignersLaw.text`На дату заяви перевірте чинне rozporządzenie, державу повернення, склад сім’ї та відповідність поданих документів фінансовій вимозі ${foreignersLaw.article("144", "art. 144")} або ${foreignersLaw.article("149b", "art. 149b")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-151",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("151", "Art. 151")} встановлює умови zezwolenie на pobyt czasowy для naukowiec, який проводить badania naukowe або prace rozwojowe в zatwierdzona jednostka naukowa, включно зі страхуванням, коштами, письмовим зобов’язанням одиниці та umowa o przyjęciu.`,
            sourceLocator: "Art. 151 ust. 1–1c",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("151", "Art. 151")} ust. 4–8 регулює zatwierdzenie jednostka, строк 5 років, інформаційні запити, cofnięcie/відмову у продовженні та офіційний список.`,
            sourceLocator: "Art. 151 ust. 4–8",
          },
        ],
        summary:
          "Дослідницький дозвіл поєднує статус naukowiec, реальний проєкт у затвердженій jednostka, умови забезпечення та спеціальну угоду.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation: foreignersLaw.text`Cudzoziemiec подає health insurance або покриття лікування, достатні кошти чи документи про них і письмове зобов’язання jednostka повернути витрати у визначеному ${foreignersLaw.article("151", "art. 151")} випадку.`,
          },
          {
            locator: "ust. 1 pkt 2 lit. a–f",
            explanation:
              "Umowa o przyjęciu має визначати назву/мету або предмет дослідження, обов’язки naukowiec та jednostka, строки, wynagrodzenie, інші умови праці й заплановані дослідження в інших державах UE.",
          },
          {
            locator: "ust. 1a–1c",
            explanation: foreignersLaw.text`Місячні кошти після відрахування витрат на житло мають перевищувати поріг соціальної допомоги; витрати на житло включають сталі оплати та комунальні послуги, а для громадян держав ${foreignersLaw.article("113b", "art. 113b")} діє спеціальне правило ust. 1c.`,
          },
          {
            locator: "ust. 4–5",
            explanation:
              "Jednostka затверджується на 5 років (або коротше у спеціальному випадку), якщо існує щонайменше 5 років, безперервно веде самостійну наукову діяльність і немає заперечень щодо безпеки та interes RP; продовження застосовує ті самі правила.",
          },
          {
            locator: "ust. 6–8",
            explanation: foreignersLaw.text`Minister може відмовити у продовженні або cofnięcie затвердження за припинення досліджень, невиконання ${foreignersLaw.article("152", "art. 152")} ust. 4/${foreignersLaw.article("156", "art. 156")}, неправдиву чи недбалу угоду або фальшиві дані; за окремих підстав повторна заява заборонена 5 років, а список публікується офіційно.`,
          },
        ],
        legalEffect:
          "Позитивна оцінка дослідницького договору не усуває фінансових, страхових та інституційних умов; затвердження одиниці є окремим рішенням.",
        foreignersCase:
          "Перевірте статус naukowiec, затвердження jednostka, повну umowa o przyjęciu, кошти, страхування і письмове зобов’язання. Відокремте помилку одиниці від невиконання умови cudzoziemiec.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-151a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("151a", "Art. 151a")} забороняє jednostka naukowa приймати cudzoziemców для badań або prac rozwojowych із дня ostateczna рішення про odmowa zatwierdzenia, odmowa przedłużenia або cofnięcie zatwierdzenia.`,
            sourceLocator: "Art. 151a ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Особа, якій до цієї дати надано дозвіл з ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "151b")}, може продовжити дослідження/мобільність, а в її провадженні одноразово не застосовується вимога zatwierdzenie.`,
            sourceLocator: "Art. 151a ust. 2–3",
          },
        ],
        summary:
          "Норма захищає продовження дослідницької діяльності вже допущеним cudzoziemiec після остаточного негативного рішення щодо jednostka.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Заборона прийому починається з дня, коли рішення про відмову або cofnięcie zatwierdzenia стало ostateczna.",
          },
          {
            locator: "ust. 2–3",
            explanation: foreignersLaw.text`Cudzoziemiec з дозволом ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "151b")}, наданим до цієї дати, може продовжити відповідну діяльність; у його провадженні одноразово не застосовується вимога zatwierdzenie.`,
          },
        ],
        legalEffect:
          "Стаття розмежовує новий прийом і продовження вже розпочатого дослідження; інші умови дозволу залишаються предметом оцінки.",
        foreignersCase:
          "Зіставте дату ostateczna рішення про jednostka, дату udzielenie дозволу та доказ фактичного продовження badań. Не замінюйте цей захист автоматичним продовженням дозволу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-151b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("151b", "Art. 151b")} регулює zezwolenie на pobyt czasowy для mobilność długoterminowa naukowca: частина досліджень у zatwierdzona польська jednostka, іноземний документ/віза з adnotacja «naukowiec», страхування, житло, кошти та umowa o przyjęciu.`,
            sourceLocator: "Art. 151b ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Місячні кошти після витрат на житло мають перевищувати поріг соціальної допомоги щодо cudzoziemiec і кожного утримуваного члена сім’ї; ust. 3–4 визначають витрати на житло та виняток для держав ${foreignersLaw.article("113b", "art. 113b")}.`,
            sourceLocator: "Art. 151b ust. 2–4",
          },
        ],
        summary:
          "Довгострокова mobilność naukowca є окремим дозволом для частини досліджень у Польщі на підставі чинного документа іншої держави UE.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Cudzoziemiec має мати документ pobyt або довгострокову візу іншої держави UE з adnotacja «naukowiec», health insurance, місце проживання в Польщі та кошти на утримання й повернення до держави, що видала документ.",
          },
          {
            locator: "ust. 1 pkt 2 lit. a–e",
            explanation:
              "Umowa o przyjęciu з польською jednostka має визначати мету/предмет досліджень, обов’язки naukowiec і одиниці, строки, wynagrodzenie та інші умови праці.",
          },
          {
            locator: "ust. 2–4",
            explanation: foreignersLaw.text`Кошти після витрат на житло перевищують поріг соціальної допомоги; витрати включають сталі оплати й комунальні послуги, а для громадян держав ${foreignersLaw.article("113b", "art. 113b")} діє ust. 4.`,
          },
        ],
        legalEffect: foreignersLaw.text`Дозвіл на довгострокову mobilność залежить від чинності іноземного документа, польської угоди та всіх фінансово-страхових умов; він не дорівнює звичайному дозволу ${foreignersLaw.article("151", "art. 151")}.`,
        foreignersCase:
          "Перевірте adnotacja «naukowiec», строк іноземного документа, повну угоду, страховку, житло, кошти та дату планованої частини дослідження в Польщі.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-152",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("152", "Art. 152")} зобов’язує jednostka naukowa укласти з naukowiec umowa o przyjęciu після затвердження досліджень/праць її компетентними органами та визначає, що має бути враховано при такому затвердженні.`,
            sourceLocator: "Art. 152 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: "Ust. 3 є uchylony; ust. 4 передбачає письмове зобов’язання одиниці щодо витрат повернення, а ust. 5 — припинення угоди при відмові у в’їзді або дозволі.",
            sourceLocator: "Art. 152 ust. 3–5",
          },
        ],
        summary:
          "Стаття регулює внутрішнє затвердження дослідницького проєкту, угоду з naukowiec і наслідки відсутності в’їзду або дозволу.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation:
              "Органи jednostka враховують мету, строк і фінансування досліджень та документи про кваліфікацію naukowiec, перш ніж одиниця укладе umowa o przyjęciu.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Положення позначене як «(uchylony)» і не застосовується як чинна вимога.",
          },
          {
            locator: "ust. 4",
            explanation: foreignersLaw.text`Jednostka видає письмове oświadczenie про покриття витрат, пов’язаних із decyzja про zobowiązanie до повернення, у випадку ${foreignersLaw.article("337", "art. 337")} ust. 5.`,
          },
          {
            locator: "ust. 5",
            explanation:
              "Umowa o przyjęciu wygasa, якщо cudzoziemiec отримав відмову у в’їзді або в udzielenie zezwolenie на pobyt czasowy.",
          },
        ],
        legalEffect:
          "Стаття визначає обов’язки та документи jednostka, але не перетворює угоду на автоматичне право на побyt.",
        foreignersCase:
          "Перевірте протокол/рішення внутрішнього затвердження, кваліфікації, текст угоди, письмове зобов’язання та факт в’їзду/рішення про дозвіл.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-153",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("153", "Art. 153")} ust. 1 передбачає строк дозволу ${foreignersLaw.article("151", "art. 151")} на період badań або prac rozwojowych у Польщі, якщо підстава обґрунтовує побyt менше 3 років; ust. 2 встановлює аналогічний строк для mobilność długoterminowa, але не довший за іноземний документ або візу.`,
            sourceLocator: "Art. 153 ust. 1–2",
          },
        ],
        summary:
          "Строк дослідницького дозволу прив’язаний до фактичного проєкту, а строк довгострокової mobilność додатково обмежений іноземним документом.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Для дозволу на prowadzenie badań строк дорівнює підтвердженому періоду досліджень/праць, коли він коротший за 3 роки.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Для mobilność długoterminowa строк дорівнює періоду досліджень у Польщі, але не може перевищувати строк чинності документа pobyt або період перебування за візою «naukowiec» іншої держави UE.",
          },
        ],
        legalEffect:
          "Бажаний заявником строк не може перевищити доказану тривалість діяльності та спеціальні максимуми статті.",
        foreignersCase: foreignersLaw.text`Порівняйте umowa o przyjęciu, строк проєкту, рішення і чинність іноземного документа; окремо перевірте, чи йдеться про ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "art. 151b")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-154",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("154", "Art. 154")} встановлює спеціальні підстави odmowa udzielenia дозволу naukowiec: діяльність jednostka переважно для незаконного в’їзду/побиту, використання попереднього дозволу не за метою або закінчення чинності іноземного документа/допустимого строку візи для mobilność długoterminowa.`,
            sourceLocator: "Art. 154 ust. 1–3",
          },
        ],
        summary:
          "Науковий договір не усуває спеціальних підстав відмови, пов’язаних із діяльністю одиниці, попереднім дозволом або іноземним документом.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Поза ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9 відмовляють у дозволі ${foreignersLaw.article("151", "art. 151")}, якщо jednostka головно полегшує naukowiec незаконний в’їзд або pobyt.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`У наступному дозволі ${foreignersLaw.article("151", "art. 151")} відмовляють, якщо обставини показують, що попередній дозвіл використано не за метою, з урахуванням названих у нормі загальних підстав.`,
          },
          {
            locator: "ust. 3",
            explanation:
              "У дозволі на mobilność długoterminowa відмовляють також, коли закінчився строк іноземного документа/візи «naukowiec» або допустимий строк перебування за візою.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("154", "Art. 154")} впливає на результат лише в межах відповідного виду дозволу; орган має назвати й обґрунтувати конкретну підставу.`,
        foreignersCase:
          "Розділіть первинний, наступний і mobilność-дозвіл; перевірте мотивування, фактичну мету попереднього pobyt та строки іноземного документа.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-154a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("154a", "Art. 154a")} передбачає cofnięcie дозволу ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "art. 151b")}, крім ${foreignersLaw.article("101", "art. 101")} pkt 1–2, якщо дозвіл використовується не за метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або jednostka переважно сприяє незаконному в’їзду/побиту naukowiec.`,
            sourceLocator: "Art. 154a pkt 1–3",
          },
        ],
        summary:
          "Це спеціальна норма cofnięcie для звичайного дослідницького дозволу та mobilność długoterminowa.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Порівнюється фактичне використання дозволу з метою, для якої його надали.",
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Достатньою спеціальною підставою є хоча б одна обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8.`,
          },
          {
            locator: "pkt 3",
            explanation:
              "Окремою підставою є діяльність jednostka, головною метою якої є сприяння незаконному в’їзду або pobyt naukowiec.",
          },
        ],
        legalEffect:
          "Cofnięcie потребує встановлення конкретного факту і рішення органу; сама зміна проєкту не доводить автоматичний наслідок.",
        foreignersCase: foreignersLaw.text`Зіставте мету в рішенні, фактичні завдання, статус jednostka та точний пункт ${foreignersLaw.article("154a", "art. 154a")}. Відокремте доказ обставини від висновку про cofnięcie.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-155",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("155", "Art. 155")}, крім ${foreignersLaw.article("99", "art. 99")}, передбачає odmowa wszczęcia провадження про дозвіл ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "art. 151b")}, якщо на день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
            sourceLocator: "Art. 155 ust. 1 pkt 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Для ${foreignersLaw.article("151b", "art. 151b")} odmowa wszczęcia додатково застосовується, якщо заяву подано того самого дня або протягом 14 днів від отримання Szef Urzędu zawiadomienie з ${foreignersLaw.article("156b", "art. 156b")} ust. 1 pkt 3.`,
            sourceLocator: "Art. 155 ust. 2",
          },
        ],
        summary:
          "Стаття стосується початку провадження про дослідницький дозвіл і містить окрему часову перешкоду для mobilność długoterminowa.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation: foreignersLaw.text`На дату подання перевірте дозвіл ICT для pracownik odbywający staż і заяву/наявність дозволу ${foreignersLaw.article("127", "art. 127")}.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Для заяви ${foreignersLaw.article("151b", "art. 151b")} також перевірте, чи не подано її в день або в 14-денний строк після отримання Szef Urzędu повідомлення про mobilność з ${foreignersLaw.article("156b", "art. 156b")} ust. 1 pkt 3.`,
          },
        ],
        legalEffect:
          "Наслідком є odmowa wszczęcia, а не остаточна odmowa udzielenia після оцінки матеріальних умов.",
        foreignersCase: foreignersLaw.text`Встановіть усі заяви та дозволи на дату подання, дату отримання повідомлення Szef Urzędu і точно розрізняйте ${foreignersLaw.article("151", "art. 151")} та ${foreignersLaw.article("151b", "art. 151b")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-155a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("155a", "Art. 155a")} має в актуальному локальному corpus позначку «(uchylony)».`,
            sourceLocator: "Art. 155a",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("155a", "Art. 155a")} скасована і не містить чинного правила для дослідницької процедури.`,
        rules: [
          {
            locator: "cały przepis",
            explanation: foreignersLaw.text`Не використовуйте ${foreignersLaw.article("155a", "Art. 155a")} як чинну підставу; перевірте дату старого документа та актуальну норму, на яку він мав посилатися.`,
          },
        ],
        legalEffect:
          "Позначка «(uchylony)» виключає самостійну нормативну дію цього номера в редакції corpus.",
        foreignersCase:
          "Визначте редакцію акта на дату події та не переносіть старе посилання на чинний аналіз без перехідної норми.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-156",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("156", "Art. 156")} зобов’язує jednostka naukowa невідкладно повідомляти właściwy wojewoda про події, що можуть перешкодити виконанню umowa o przyjęciu, а після завершення угоди протягом 2 місяців передавати ministrowi письмове підтвердження виконання досліджень/праць.`,
            sourceLocator: "Art. 156 ust. 1–3",
          },
        ],
        summary:
          "Стаття встановлює інформаційні обов’язки одиниці щодо перешкод у дослідницькій угоді та завершення проєкту.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation:
              "Повідомлення надсилається wojewoda, який надав дозвіл або розглядає справу; якщо рішення/провадження на рівні Szef Urzędu, адресатом є wojewoda першої інстанції.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Jednostka передає minister właściwy do spraw wewnętrznych письмове підтвердження всіх досліджень/праць протягом 2 місяців від wygaśnięcie угоди.",
          },
        ],
        legalEffect:
          "Повідомлення дає органу інформацію для оцінки дозволу, але не є автоматичним cofnięcie; наслідок вимагає окремої правової підстави та рішення.",
        foreignersCase:
          "З’ясуйте подію, дату та адресата повідомлення, вимагайте доказ вручення і відокремте обов’язок jednostka від поведінки cudzoziemiec.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-156a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("156a", "Art. 156a")} регулює повідомлення, коли cudzoziemiec з польською візою або дозволом для badań має намір користуватися mobilność krótkoterminowa або długoterminowa naukowca в іншій державі UE.`,
            sourceLocator: "Art. 156a",
          },
        ],
        summary:
          "Для виїзної мобільності дослідника закон визначає, хто повідомляє компетентний орган іншої держави та Szef Urzędu, якщо це вимагає її право.",
        rules: [
          {
            locator: "cały przepis",
            explanation:
              "Повідомити можуть польська або приймаюча jednostka naukowa чи сам cudzoziemiec — залежно від конкретного суб’єкта й вимог права приймаючої держави UE.",
          },
        ],
        legalEffect:
          "Zawiadomienie є елементом процедури мобільності в іншій державі, але не створює автоматичного дозволу на дослідження там.",
        foreignersCase:
          "Встановіть польський документ, приймаючу одиницю, вид мобільності, компетентний орган іншої держави та доказ виконання вимоги повідомлення.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-156b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("156b", "Art. 156b")} визначає умови mobilność krótkoterminowa naukowca в Польщі: затверджена jednostka, іноземний документ/віза з adnotacja «naukowiec» і повне zawiadomienie, після якого Szef Urzędu не видав sprzeciw протягом 30 днів.`,
            sourceLocator: "Art. 156b ust. 1–5",
          },
          {
            kind: "statute-text",
            text: "Стаття визначає дані та додатки до повідомлення, підстави sprzeciw, остаточність рішення, повідомлення держави-видавця та продовження діяльності особою, яка почала мобільність до рішення щодо jednostka.",
            sourceLocator: "Art. 156b ust. 2–14",
          },
        ],
        summary:
          "Короткострокова мобільність дослідника допускається за спеціальною процедурою повідомлення й без sprzeciw у встановлений строк.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Потрібні частина досліджень у затвердженій польській jednostka, документ або віза іншої держави UE з adnotacja «naukowiec» та zawiadomienie, без рішення sprzeciw протягом 30 днів.",
          },
          {
            locator: "ust. 2–5",
            explanation: foreignersLaw.text`Повідомлення польською мовою містить дані особи, документа, строків та обох установ; додаються докази документа, страхування, коштів за ${foreignersLaw.article("151", "art. 151")} ust. 1a/${foreignersLaw.article("157", "art. 157")} і umowa o przyjęciu з перекладом, якщо документи іноземною мовою. Строк рахується від повного вручення.`,
          },
          {
            locator: "ust. 6",
            explanation:
              "Sprzeciw видається, зокрема, за недостатнього строку документа, відсутності страхування/коштів, незаконної або нереальної діяльності jednostka, неправдивих даних, запису в wykaz/SIS чи безпекових підстав.",
          },
          {
            locator: "ust. 7–14",
            explanation:
              "Органи передають інформацію протягом 20 днів; рішення Szef Urzędu про sprzeciw є ostateczna, про нього повідомляють державу-видавця, а без sprzeciw дані видаляються з EES протягом 5 dni roboczych.",
          },
        ],
        legalEffect:
          "Без sprzeciw після повного повідомлення діє спеціальний режим короткої мобільності; відсутність однієї умови може перешкодити йому, але не автоматично оцінює всі інші підстави pobyt.",
        foreignersCase:
          "Перевірте повноту повідомлення, дату вручення, 30-денний строк, страховку, кошти, угоду, переклади та наявність sprzeciw. Не вважайте мовчання органу доказом виконання інших умов поза статтею.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-156c",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("156c", "Art. 156c")} регулює передачу інформації про cudzoziemiec і sprzeciw щодо mobilność між Szef Urzędu, wojewoda та органами держав UE, а також передачу копії cofnięcie дозволу дослідника.`,
            sourceLocator: "Art. 156c ust. 1–3",
          },
        ],
        summary:
          "Норма координує інформацію про польський дозвіл дослідника та мобільність у Польщі або інших державах UE.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Szef Urzędu передає відповідному wojewoda дані за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. c tiret drugie або zawiadomienie за lit. f tiret trzecie, включно з отриманою інформацією про sprzeciw інших держав.`,
          },
          {
            locator: "ust. 2–3",
            explanation: foreignersLaw.text`Wojewoda передає Szef Urzędu копію cofnięcie дозволу ${foreignersLaw.article("151", "art. 151")} особі в mobilność, а Szef Urzędu повідомляє держави UE, де ця особа користується мобільністю.`,
          },
        ],
        legalEffect:
          "Передача інформації забезпечує координацію органів і не замінює рішення про udzielenie або cofnięcie.",
        foreignersCase:
          "Зіставте копії рішень, zawiadomienie та дані держави мобільності; визначте, який орган і яка норма створюють фактичний наслідок.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-156d",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("156d", "Art. 156d")} зобов’язує wojewoda передати Szef Urzędu копію рішення про udzielenie або cofnięcie дозволу ${foreignersLaw.article("151b", "art. 151b")}, а Szef Urzędu — інформацію за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret trzecie.`,
            sourceLocator: "Art. 156d ust. 1–2",
          },
        ],
        summary:
          "Стаття встановлює обмін рішенням і даними щодо дозволу на mobilność długoterminowa naukowca.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Wojewoda передає Szef Urzędu копію рішення про udzielenie або cofnięcie zezwolenie ${foreignersLaw.article("151b", "art. 151b")}.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Szef Urzędu передає wojewoda, який надав дозвіл, інформацію про cudzoziemiec у межах ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret trzecie.`,
          },
        ],
        legalEffect: foreignersLaw.text`Це правило обліку між органами; воно не розширює строк або предмет дозволу ${foreignersLaw.article("151b", "art. 151b")}.`,
        foreignersCase:
          "Перевірте відповідність копії рішення, даних Szef Urzędu та строку іноземного документа, який був підставою mobilność.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157", "Art. 157")} уповноважує ministra właściwego do spraw wewnętrznych встановити rozporządzeniem мінімальні кошти на повернення для naukowiec та osoby в mobilność długoterminowa naukowca, а також документи про можливість отримання цих коштів і коштів утримання.`,
            sourceLocator: "Art. 157 pkt 1–3",
          },
        ],
        summary:
          "Стаття є делегацією для фінансових порогів і доказів у дослідницькому режимі; після неї починається блок про stażysta.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Розпорядження визначає мінімальні кошти naukowiec і утримуваних членів сім’ї на повернення до państwo pochodzenia/zamieszkania або транзит.",
          },
          {
            locator: "pkt 2",
            explanation:
              "Для mobilność długoterminowa визначаються мінімальні кошти на повернення до держави UE, що видала документ або візу «naukowiec».",
          },
          {
            locator: "pkt 3",
            explanation: foreignersLaw.text`Можуть бути визначені документи, що підтверджують можливість законно отримати кошти повернення та утримання за ${foreignersLaw.article("151", "art. 151")} і ${foreignersLaw.article("151b", "art. 151b")}.`,
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("157", "Art. 157")} сам не називає суми; конкретні пороги й документи походять із відповідного rozporządzenie.`,
        foreignersCase: foreignersLaw.text`Визначте вид режиму — ${foreignersLaw.article("151", "art. 151")} чи ${foreignersLaw.article("151b", "art. 151b")} — і застосуйте чинне rozporządzenie до держави повернення, сім’ї та поданих доказів.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157a", "Art. 157a")} встановлює умови zezwolenie на pobyt czasowy dla stażysty: актуальне завершення або проходження studia, страхування, житло, кошти, письмове зобов’язання organizator stażu, детальна umowa stażu, відповідність стажу навчанню та мовний курс.`,
            sourceLocator: "Art. 157a ust. 1–5",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157a", "Art. 157a")} ust. 6–18 регулює zatwierdzenie organizator stażu, строки інформації, строк затвердження 2 роки, cofnięcie/відмову у продовженні та офіційний список.`,
            sourceLocator: "Art. 157a ust. 6–18",
          },
        ],
        summary:
          "Дозвіл стажиста вимагає освітньо пов’язаного, письмово описаного staż у затвердженого організатора та окремих доказів забезпечення.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Cudzoziemiec доводить завершення studia протягом 2 років до заяви або проходження studia поза UE, має страхування, місце проживання, кошти на утримання, повернення/транзит і staż та письмове зобов’язання organizator щодо витрат повернення.",
          },
          {
            locator: "ust. 1 pkt 2–4",
            explanation:
              "Письмова umowa має описати освітню програму, строк, місце, opiekun, години, нагляд, завдання, права та обов’язки щодо витрат/медогляду/страхування від нещасних випадків/вільних днів/розірвання, спосіб підтвердження результату; staż має відповідати навчанню, а мовний курс — потрібному рівню.",
          },
          {
            locator: "ust. 2–5",
            explanation: foreignersLaw.text`Organizator до підписання дає переклад угоди зрозумілою мовою; кошти після витрат на житло перевищують поріг соціальної допомоги, з правилами про комунальні витрати та ${foreignersLaw.article("113b", "art. 113b")}.`,
          },
          {
            locator: "ust. 6–14",
            explanation:
              "Organizator затверджується рішенням, якщо існує щонайменше 5 років, має діяльність для прийому стаżystów і немає заперечень щодо безпеки та interes RP; інформація надходить за 30/60 днів, а zatwierdzenie діє 2 роки або коротше.",
          },
          {
            locator: "ust. 15–18",
            explanation:
              "Minister може відмовити у продовженні або cofnięcie за ліквідацію, відсутність реальної діяльності чи сприяння незаконному pobyt; за останньої підстави повторна заява неможлива 5 років, список публікується офіційно.",
          },
        ],
        legalEffect:
          "Zezwolenie охоплює конкретний освітній staż, а не загальну працю чи іншу мету pobyt; затвердження organizator є окремим рішенням.",
        foreignersCase:
          "Перевірте дату завершення/проходження studia, umowa і програму, місце та opiekun, мовний курс, кошти, страхування й актуальний статус organizator. Не подавайте шаблон угоди як гарантію.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157b", "Art. 157b")} ust. 1 обмежує zezwolenie з ${foreignersLaw.article("157a", "art. 157a")} ust. 1 строком, потрібним для виконання umowa stażu, але не довше 6 місяців; ust. 2 дозволяє один наступний дозвіл до завершення угоди, також максимум на 6 місяців.`,
            sourceLocator: "Art. 157b ust. 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157b", "Art. 157b")} ust. 3–4 позначені як «(uchylony)».`,
            sourceLocator: "Art. 157b ust. 3–4",
          },
        ],
        summary:
          "Строк дозволу stażysty прив’язаний до угоди та обмежений шістьма місяцями для першого і можливого одного наступного дозволу.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Перший дозвіл надається лише на необхідний для реалізації umowa stażu період, не довше 6 місяців.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Один наступний дозвіл можливий лише до завершення umowa stażu і також не довше 6 місяців.",
          },
          {
            locator: "ust. 3–4",
            explanation: "Ці положення скасовані й не застосовуються.",
          },
        ],
        legalEffect: foreignersLaw.text`Карта побиту не може розширити строк понад межі ${foreignersLaw.article("157b", "art. 157b")} або продовжити угоду без відповідної правової підстави.`,
        foreignersCase:
          "Зіставте строк umowa stażu, строк рішення та факт, чи вже використано єдиний наступний дозвіл; не прирівнюйте лист organizator до нового дозволу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157c",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157c", "Art. 157c")}, крім ${foreignersLaw.article("99", "art. 99")}, вимагає odmowa wszczęcia провадження про дозвіл dla stażysty, якщо на день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
            sourceLocator: "Art. 157c pkt 1–2",
          },
        ],
        summary:
          "Норма визначає несумісні на дату заяви дозволи та заяви для початку стажового провадження.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Перевіряється чинний дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Перевіряється подання або наявність дозволу ${foreignersLaw.article("127", "art. 127")}.`,
          },
        ],
        legalEffect:
          "Наслідком є odmowa wszczęcia, а не матеріальна odmowa udzielenia після оцінки угоди та умов staż.",
        foreignersCase:
          "Зробіть зріз усіх дозволів і заяв на день подання та вкажіть, яка саме з двох обставин застосована.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157d",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157d", "Art. 157d")} встановлює odmowa udzielenia дозволу dla stażysty, крім ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9, за незаконно орієнтованого organizator, визначені порушення організатора, ліквідацію/банкрутство та обґрунтовані сумніви щодо мети pobyt; для наступного дозволу додано використання попереднього не за метою.`,
            sourceLocator: "Art. 157d ust. 1–2",
          },
        ],
        summary:
          "Навіть документально оформлений staż може отримати відмову через статус і діяльність organizator або недостовірну мету pobyt.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Відмовляють, якщо organizator stażu головно сприяє stażysta незаконному в’їзду або pobyt.",
          },
          {
            locator: "ust. 1 pkt 2 lit. a–d",
            explanation:
              "Підставами щодо organizator є управління/контроль особою з названими вироками чи покараннями, невиконання внесків, податковий борг, а також відсутність діяльності, якщо staż безпосередньо з нею пов’язаний.",
          },
          {
            locator: "ust. 1 pkt 3–4",
            explanation:
              "Відмова можлива при оголошеному банкрутстві або ліквідації organizator, а також за обґрунтованих сумнівів, що заявлена мета pobyt не відповідає дійсній.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Для наступного дозволу, крім названих підстав, враховується використання попереднього дозволу не за метою, для якої його надали.",
          },
        ],
        legalEffect:
          "Стаття створює спеціальні матеріальні підстави відмови, але орган має встановити конкретний факт і застосувати відповідний пункт.",
        foreignersCase:
          "Перевірте реальність діяльності organizator, його реєстровий та податково-страховий статус, програму staż і фактичну мету pobyt. Розділіть первинний і наступний дозвіл.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157e",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157e", "Art. 157e")}, крім ${foreignersLaw.article("101", "art. 101")} pkt 1–2, передбачає cofnięcie дозволу з ${foreignersLaw.article("157a", "art. 157a")} ust. 1, якщо його використовують не за метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або настала одна з обставин ${foreignersLaw.article("157d", "art. 157d")} ust. 1 pkt 1–3.`,
            sourceLocator: "Art. 157e pkt 1–3",
          },
        ],
        summary:
          "Стажовий дозвіл може бути скасований за використання не за метою, окремі загальні підстави або спеціальні проблеми organizator.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Потрібно встановити, що дозвіл фактично використовується не для погодженого staż.",
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Застосовується хоча б одна обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8.`,
          },
          {
            locator: "pkt 3",
            explanation: foreignersLaw.text`Застосовується хоча б одна з обставин ${foreignersLaw.article("157d", "art. 157d")} ust. 1 pkt 1–3, без розширення переліку за аналогією.`,
          },
        ],
        legalEffect:
          "Cofnięcie потребує рішення органу і доказу відповідної обставини; конфлікт із organizator сам по собі не встановлює підставу.",
        foreignersCase: foreignersLaw.text`Порівняйте рішення, umowa і реальну діяльність, встановіть дату події та перевірте точний cross-reference до ${foreignersLaw.article("100", "art. 100")} і ${foreignersLaw.article("157d", "157d")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157f",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157f", "Art. 157f")} уповноважує ministra właściwego do spraw wewnętrznych встановити rozporządzeniem мінімальні кошти stażysta і його сім’ї на повернення/транзит та документи про можливість отримання цих коштів і коштів утримання за ${foreignersLaw.article("157a", "art. 157a")} ust. 1 pkt 1 lit. d.`,
            sourceLocator: "Art. 157f pkt 1–2",
          },
        ],
        summary:
          "Стаття є делегацією для фінансових порогів і доказових документів у процедурі stażysty.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Rozporządzenie визначає мінімальні кошти для cudzoziemiec та утримуваних членів сім’ї на повернення або транзит з урахуванням держави прибуття.",
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Розпорядження також визначає документи про можливість законно отримати кошти повернення та утримання за ${foreignersLaw.article("157a", "art. 157a")}.`,
          },
        ],
        legalEffect: foreignersLaw.text`Конкретну суму й перелік доказів встановлює rozporządzenie, а не сам текст ${foreignersLaw.article("157f", "art. 157f")}.`,
        foreignersCase:
          "Знайдіть чинне rozporządzenie для дати заяви, визначте державу повернення і перевірте докази коштів та можливості їх отримання.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157g",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157g", "Art. 157g")} встановлює умови zezwolenie на pobyt czasowy dla wolontariusza для участі в European Voluntary Service: страхування, житло, кошти, umowa wolontariatu з визначеним змістом і zatwierdzenie jednostka органом.`,
            sourceLocator: "Art. 157g ust. 1–4",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157g", "Art. 157g")} ust. 5–17 регулює zatwierdzenie jednostka, строки перевірок, строк 2 роки, cofnięcie/відмову у продовженні та список затверджених jednostka.`,
            sourceLocator: "Art. 157g ust. 5–17",
          },
        ],
        summary:
          "Волонтерський дозвіл пов’язаний із European Voluntary Service, письмовою угодою та затвердженою організаційною одиницею.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Cudzoziemiec має мати health insurance або покриття лікування, місце проживання та достатні кошти на утримання й повернення/транзит.",
          },
          {
            locator: "ust. 1 pkt 2–3",
            explanation:
              "Umowa має описувати wolontariat, строк, умови та нагляд, години, кошти утримання/житла, мінімальне kieszonkowe і навчання; jednostka, на користь якої надаються послуги, має бути zatwierdzona.",
          },
          {
            locator: "ust. 2–4",
            explanation: foreignersLaw.text`Місячні кошти після витрат на житло перевищують поріг соціальної допомоги; витрати охоплюють сталі оплати й комунальні послуги, з правилом для громадян держав ${foreignersLaw.article("113b", "art. 113b")}.`,
          },
          {
            locator: "ust. 5–14",
            explanation:
              "Jednostka затверджується рішенням, якщо існує щонайменше 5 років, має діяльність для прийому wolontariuszy і немає заперечень щодо безпеки та interes RP; zatwierdzenie діє 2 роки або коротше.",
          },
          {
            locator: "ust. 15–17",
            explanation:
              "Minister може відмовити у продовженні або cofnięcie затвердження за ліквідацію, відсутність реальної діяльності чи сприяння незаконному pobyt; за останньої підстави повторна заява заборонена 5 років, список публікується офіційно.",
          },
        ],
        legalEffect:
          "Zezwolenie охоплює участь у визначеній програмі волонтеріату, а не звичайне zatrudnienie або довільну працю; статус jednostka є окремою умовою.",
        foreignersCase:
          "Перевірте програму, повну umowa, кошти, страхування, житло та актуальний статус jednostka. Не підміняйте wolontariat трудовим договором без окремої правової оцінки.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157h",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157h", "Art. 157h")} ust. 1 надає дозвіл з ${foreignersLaw.article("157g", "art. 157g")} ust. 1 на строк, необхідний для виконання umowa wolontariatu, але не довше 1 року; ust. 2–3 позначені як «(uchylony)».`,
            sourceLocator: "Art. 157h ust. 1–3",
          },
        ],
        summary:
          "Строк волонтерського дозволу обмежений строком угоди та максимумом один рік.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Дозвіл надається лише на необхідний для реалізації umowa період і не довше 1 року.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Ці положення скасовані та не створюють чинних строків чи умов.",
          },
        ],
        legalEffect: foreignersLaw.text`Строк рішення не може бути довшим за межі ${foreignersLaw.article("157h", "art. 157h")}; лист організації не продовжує дозвіл без нової правової підстави.`,
        foreignersCase:
          "Порівняйте umowa wolontariatu, рішення та дату завершення програми; окремо перевірте, чи не продовжуються послуги після закінчення дозволу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157i",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157i", "Art. 157i")}, крім ${foreignersLaw.article("99", "art. 99")}, вимагає odmowa wszczęcia провадження про дозвіл dla wolontariusza, якщо на день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
            sourceLocator: "Art. 157i pkt 1–2",
          },
        ],
        summary:
          "Стаття визначає несумісні дозволи та заяви, які блокують початок волонтерського провадження.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Перевіряється дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для роботи як pracownik odbywający staż.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Перевіряється подання або наявність дозволу ${foreignersLaw.article("127", "art. 127")}.`,
          },
        ],
        legalEffect:
          "Наслідком є odmowa wszczęcia, а не остаточна odmowa udzielenia після оцінки програми волонтеріату.",
        foreignersCase: foreignersLaw.text`Зафіксуйте дозволи й заяви на дату подання та наведіть у висновку конкретний пункт ${foreignersLaw.article("157i", "art. 157i")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157j",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157j", "Art. 157j")} встановлює odmowa udzielenia дозволу dla wolontariusza за незаконно орієнтованої jednostka, визначених порушень її керівництва/обов’язків, ліквідації або обґрунтованих сумнівів щодо мети pobyt; для наступного дозволу додано використання попереднього не за метою.`,
            sourceLocator: "Art. 157j ust. 1–2",
          },
        ],
        summary:
          "Відмова у волонтерському дозволі може стосуватися як організації, так і достовірності заявленої мети побиту.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Відмовляють, якщо jednostka переважно сприяє wolontariusz незаконному в’їзду або pobyt.",
          },
          {
            locator: "ust. 1 pkt 2",
            explanation:
              "Підставами щодо jednostka є управління/контроль особою з названими вироками чи покараннями, невиконання внесків або податковий борг.",
          },
          {
            locator: "ust. 1 pkt 3–4",
            explanation:
              "Відмова можлива, коли jednostka є в ліквідації або є обґрунтовані сумніви, що фактична мета pobyt інша за заявлену.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Для наступного дозволу додатково враховується використання попереднього дозволу не за метою, для якої його надали.",
          },
        ],
        legalEffect:
          "Орган має встановити конкретну підставу та прийняти рішення; сама зміна відносин із jednostka не доводить автоматичну відмову.",
        foreignersCase:
          "Перевірте реальну діяльність і статус jednostka, її внески та податки, umowa і фактичний характер wolontariat. Розділіть первинну та наступну заяву.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157k",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157k", "Art. 157k")}, крім ${foreignersLaw.article("101", "art. 101")} pkt 1–2, передбачає cofnięcie дозволу з ${foreignersLaw.article("157g", "art. 157g")} ust. 1, якщо його використовують не за метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або настала обставина ${foreignersLaw.article("157j", "art. 157j")} ust. 1 pkt 1–3.`,
            sourceLocator: "Art. 157k pkt 1–3",
          },
        ],
        summary: foreignersLaw.text`Волонтерський дозвіл може бути скасований за використання не за метою, окремі загальні підстави або проблеми одиниці, названі ${foreignersLaw.article("157j", "art. 157j")}.`,
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Порівнюється фактичне використання дозволу з метою участі у програмі волонтеріату.",
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Потрібно встановити хоча б одну обставину ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8.`,
          },
          {
            locator: "pkt 3",
            explanation: foreignersLaw.text`Потрібно встановити хоча б одну обставину ${foreignersLaw.article("157j", "art. 157j")} ust. 1 pkt 1–3; перелік не можна розширювати за аналогією.`,
          },
        ],
        legalEffect:
          "Cofnięcie є наслідком рішення органу після встановлення точної обставини; невідповідність у документах ще не є автоматичним рішенням.",
        foreignersCase: foreignersLaw.text`Порівняйте дозвіл, umowa і фактичні волонтерські послуги, встановіть дату події та перевірте конкретний пункт ${foreignersLaw.article("100", "art. 100")} або ${foreignersLaw.article("157j", "157j")}.`,
      },
    ],
  })
