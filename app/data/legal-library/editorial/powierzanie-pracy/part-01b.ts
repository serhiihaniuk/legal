import { defineEditorialPart } from "../define-editorial-part"

export const powierzaniePracyPart01b = defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-26",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 26 ust. 1 визначає właściwy wojewoda для zezwolenie na pracę на користь польського podmiot за його siedziba або місцем stałego pobytu. Ust. 2 вимагає відмовити у wszczęciu, а вже розпочате postępowanie umorzyć, якщо powierzenie стосувалося б діяльності з rozporządzenie за art. 45 ust. 2 або випадків art. 2 pkt 9 lit. c–e.",
          sourceLocator: "Art. 26 ust. 1–2 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює компетентного wojewoda для звичайного zezwolenie на роботу на користь польського podmiot та відсіює моделі, які мають інший режим. Sezonowa praca і визначені функції не повинні автоматично проводитися за цією процедурою.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Звернення подають до wojewoda, właściwość якого пов'язана із siedziba або місцем stałego pobytu polski podmiot powierzający pracę.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "Провадження не відкривають або припиняють, якщо робота належить до діяльності, визначеної для zezwolenie sezonowe за art. 45 ust. 2, або до функцій з art. 2 pkt 9 lit. c–e: зокрема zarząd, ведення чи представництво spółka та prokura.",
        },
      ],
      legalEffect:
        "Art. 26 розподіляє компетенцію та процедуру, але не надає legalny pobyt і не підтверджує uprawnienie do pracy. Неправильно обраний режим може перешкодити розгляду wniosek.",
      foreignersCase:
        "Встановіть siedziba або місце stałego pobytu podmiot, фактичний вид роботи та правову модель: звичайна робота, sezonowa praca чи функція. Окремо перевірте документ legalnego pobytu і підставу доступу до роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-27",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 27 встановлює черговість розгляду wniosków wojewoda: спочатку підприємців з wykaz за art. 28 ust. 1, далі наступні zezwolenie для того самого podmiot і cudzoziemiec без гіршого wymiar czasu pracy та wynagrodzenie, потім професії з wykaz за art. 29 ust. 1, а після них — решту wniosków.",
          sourceLocator: "Art. 27 pkt 1–4",
        },
      ],
      summary:
        "Це правило про порядок розгляду, а не про автоматичну видачу zezwolenie. Пріоритет залежить від статусу підприємця, попереднього чинного дозволу або професії, включеної до відповідного wykaz.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Першими враховуються wnioski підприємців, включених до wykaz przedsiębiorców за art. 28 ust. 1.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Наступний дозвіл для того самого polski podmiot і cudzoziemiec має стосуватися не меншого часу та не нижчої оплати, ніж попередній дозвіл, чинний у день нового wniosek; окремий пріоритет мають професії з wykaz дефіцитних zawodów.",
        },
        {
          locator: "pkt 4",
          explanation:
            "Інші wnioski належать до останньої категорії черговості. Сам порядок не скасовує матеріальних умов видачі дозволу.",
        },
      ],
      legalEffect:
        "Art. 27 може впливати на черговість роботи органу, але не створює права на zezwolenie, legalny pobyt або початок роботи до наявності належної підстави.",
      foreignersCase:
        "Для пріоритету зберіть доказ включення podmiot до wykaz або попередній чинний дозвіл з даними про час і wynagrodzenie. Окремо перевірте, чи дозволяє документ pobyt працювати та чи потрібне нове zezwolenie.",
    },
    {
      provisionId: "powierzanie-pracy-art-28",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 28 зобов'язує ministra właściwego do spraw gospodarki створити в системі teleinformatycznym wykaz przedsiębiorców, що ведуть у Польщі діяльність істотного значення для gospodarka narodowa. До нього входять визначені підприємці, які користуються підтримкою інвестицій, а wykaz містить firmę, REGON, NIP за наявності, siedziba й адресу; внесення та вилучення пов'язані з рішеннями або umowy про підтримку, а wykaz публікується в BIP.",
          sourceLocator: "Art. 28 ust. 1–9",
        },
      ],
      summary:
        "Стаття створює офіційний wykaz підтриманих інвестицій, який використовується, зокрема, для черговості wniosków за art. 27. Наявність у списку стосується podmiot, а не автоматичного статусу cudzoziemiec.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Minister gospodarki веде електронний wykaz для підприємців, які отримують визначену підтримку інвестицій або стратегічних проєктів.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "У списку фіксуються ідентифікаційні дані підприємця, а дата внесення залежить від відповідного рішення, decyzja o wsparciu або umowa про pomoc.",
        },
        {
          locator: "ust. 6–9",
          explanation:
            "Вилучення настає за спливом строку чи остаточністю рішення про uchylenie, nieważność або wygaśnięcie, а також за припиненням відповідної umowy; minister udostępnia wykaz у BIP.",
        },
      ],
      legalEffect:
        "Внесення до wykaz може мати процесуальний наслідок у черговості за art. 27, але не є zezwolenie na pracę і не легалізує pobyt cudzoziemiec.",
      foreignersCase:
        "Перевірте конкретний запис podmiot у BIP та його актуальність на день wniosek. Не робіть висновку про право cudzoziemiec працювати або перебувати лише з інвестиційного статусу роботодавця.",
    },
    {
      provisionId: "powierzanie-pracy-art-29",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 29 дозволяє ministrowi właściwemu do spraw pracy у porozumieniu з ministrem gospodarki та ministrem spraw wewnętrznych визначити rozporządzenie wykaz груп zawodów із кадровим дефіцитом. Перелік формується на підставі досліджень, аналізу та оцінки потреб krajowy rynek pracy, включно з моніторингом zawodów deficytowych i nadwyżkowych.",
          sourceLocator: "Art. 29 ust. 1–2",
        },
      ],
      summary:
        "Стаття дає правову основу для переліку дефіцитних професій. Вона не називає конкретних zawodów у своєму тексті: їх треба перевіряти в чинному rozporządzenie.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Wykaz може бути встановлений лише у drodze rozporządzenia після узгодження трьох міністрів.",
        },
        {
          locator: "ust. 2",
          explanation:
            "При підготовці wykaz враховуються дослідження потреб ринку та національний моніторинг за участю wojewódzkie і powiatowe urzędy pracy.",
        },
      ],
      legalEffect:
        "Конкретний запис у wykaz може дати wniosek пріоритет за art. 27 pkt 3, але art. 29 сам по собі не надає дозволу, legalnego pobytu чи права працювати.",
      foreignersCase:
        "На дату подання wniosek звірте назву професії з чинним wykaz, а не лише з описом посади роботодавця. Паралельно встановіть документ legalnego pobytu та інше потрібне uprawnienie do pracy.",
    },
    {
      provisionId: "powierzanie-pracy-art-30",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 30 ust. 1 передбачає видачу zezwolenie на користь polski podmiot, якщо cudzoziemiec працюватиме за umowa з цим podmiot, wynagrodzenie буде не нижчим за оплату порівнюваних працівників і мінімальне wynagrodzenie, а wymiar часу становитиме від 1/4 до повного. За неповного часу оплату враховують пропорційно wymiar.",
          sourceLocator: "Art. 30 ust. 1 pkt 1–3 і ust. 2",
        },
      ],
      summary:
        "Для цього виду zezwolenie потрібно зіставити umowa, оплату та час роботи. Мінімум 1/4 і максимум повний wymiar часу — межі саме умови дозволу, а не загальна відповідь на питання про legalny pobyt.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Підставою має бути umowa між cudzoziemiec і polski podmiot powierzający pracę.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Wynagrodzenie має бути не нижчим одночасно за оплату працівників порівнюваного виду або stanowisko та за ustawowe minimalne wynagrodzenie.",
        },
        {
          locator: "ust. 1 pkt 3, ust. 2",
          explanation:
            "Wymiar часу — від 1/4 до повного. Для неповного часу поріг wynagrodzenie оцінюють пропорційно часу, записаному в umowa.",
        },
      ],
      legalEffect:
        "Art. 30 визначає матеріальні умови zezwolenie на роботу. Виконання цих умов не продовжує visa або pobyt і не скасовує інших вимог доступу до роботи.",
      foreignersCase:
        "Порівняйте umowa з оплатою аналогічних працівників, мінімальним wynagrodzenie та wymiar часу. Окремо перевірте, чи має cudzoziemiec чинний документ legalnego pobytu і потрібну підставу роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-31",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 31 ust. 1 передбачає відмову у видачі zezwolenie, крім випадків art. 13 ust. 1–4, якщо на день wniosek професія cudzoziemiec є у списку zawodów starosta, затвердженому wojewoda для головного місця роботи та внесеному до rejestr. Якщо головне місце визначити неможливо, береться список для siedziba або stały pobyt polski podmiot; список може виникнути через складну ситуацію локального rynku pracy, а rejestr веде minister.",
          sourceLocator: "Art. 31 ust. 1–10",
        },
      ],
      summary:
        "Місцевий список zawodów, для яких відмовляють у zezwolenie через складну ситуацію на локальному rynku pracy, може стати обов'язковою підставою відмови. Потрібно перевірити правильний powiat, дату публікації та можливий виняток у rozporządzenie.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Професію звіряють зі списком для головного місця роботи; коли такого місця немає, застосовується список starosta за siedziba або місцем stałego pobytu podmiot.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Starosta може на обґрунтований wniosek директора PUP і після позитивної думки powiatowa rada rynku pracy визначити список через складну локальну ситуацію. Wojewoda затверджує його, враховуючи безпеку, політику міграційну та потреби ринку.",
        },
        {
          locator: "ust. 6–10",
          explanation:
            "Minister веде rejestr у розрізі powiat і województwo та публікує його в BIP і системі teleinformatycznym; wpis публікується наступного дня. Вилучення відбувається відповідно, а винятки визначає rozporządzenie.",
        },
      ],
      legalEffect:
        "Відмова за art. 31 стосується zezwolenie на роботу, а не автоматично legalnego pobytu. Відсутність запису в списку також не замінює перевірку інших умов дозволу.",
      foreignersCase:
        "Зафіксуйте головне місце роботи, правильний powiat і стан rejestr на день подання. Якщо орган посилається на список, перевірте його публікацію та чи існує виняток; окремо перевірте pobyt і підставу роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-32",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 32 визначає, що zezwolenie для роботи на користь polski podmiot містить дані podmiot і cudzoziemiec, stanowisko або rodzaj pracy, wymiar czasu pracy, найнижче wynagrodzenie, rodzaj umowy та okres ważności. Якщо робота є tymczasowa, у дозволі також зазначається pracodawca użytkownik.",
          sourceLocator: "Art. 32 ust. 1 pkt 1–7 і ust. 2",
        },
      ],
      summary:
        "Zezwolenie фіксує конкретні межі роботи: хто, де за роллю, скільки часу, за яку мінімальну оплату, на якій umowa і до якої дати. Для працівника tymczasowy важливий також pracodawca użytkownik.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "У документі зазначаються ідентифікаційні дані polski podmiot та cudzoziemiec за art. 9.",
        },
        {
          locator: "ust. 1 pkt 3–7",
          explanation:
            "Перевірте stanowisko або rodzaj pracy, wymiar часу, найнижче wynagrodzenie, rodzaj umowy та строк чинності.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для pracy tymczasowej дозвіл має називати pracodawca użytkownik, а не лише agencja чи інший podmiot.",
        },
      ],
      legalEffect:
        "Документ визначає межі uprawnienie do pracy, але не є рішенням про legalny pobyt. Чинний pobyt сам по собі не дозволяє ігнорувати записані в zezwolenie умови.",
      foreignersCase:
        "Зіставте рішення з umowa та фактичними stanowisko, часом, оплатою й pracodawca użytkownik. Окремо перевірте строк і підставу legalnego pobytu.",
    },
    {
      provisionId: "powierzanie-pracy-art-33",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 33 ust. 1 дозволяє polski podmiot доручити інший характер роботи або інше stanowisko загалом не більше 30 днів у календарному році, якщо інші умови zezwolenie дотримані та до зміни зроблено powiadomienie wojewoda через system. Ust. 2 звільняє від зміни або нового дозволу в окремих випадках зміни умов за Kodeks pracy чи збільшення часу до повного з пропорційним збільшенням wynagrodzenie.",
          sourceLocator: "Art. 33 ust. 1–2 pkt 1–2",
        },
      ],
      summary:
        "Стаття допускає лише вузькі відступи від запису в zezwolenie. Тимчасова зміна stanowisko має ліміт 30 днів і потребує попереднього powiadomienie; інші винятки прямо пов'язані з трудовими правилами та часом роботи.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Інший характер або stanowisko можливі сукупно не довше 30 днів у календарному році, за умови інших вимог дозволу й попереднього електронного повідомлення wojewoda, який видав дозвіл.",
        },
        {
          locator: "ust. 2 pkt 1",
          explanation:
            "Зміна умов за art. 9¹ або art. 23¹a Kodeks pracy чи art. 4 ustawy про захист місць праці не вимагає зміни або нового zezwolenie, якщо виконано умови відповідної норми.",
        },
        {
          locator: "ust. 2 pkt 2",
          explanation:
            "Можна збільшити wymiar часу не більше повного лише разом із пропорційним збільшенням wynagrodzenie.",
        },
      ],
      legalEffect:
        "Винятки art. 33 не перетворюють zezwolenie на необмежений дозвіл і не змінюють legalny pobyt. Порушення ліміту або відсутність powiadomienie може залишити роботу поза умовами дозволу.",
      foreignersCase:
        "Порахуйте всі дні зміни в календарному році, збережіть підтвердження powiadomienie та перевірте пропорційність оплати. Окремо зіставте зміну з документом pobyt і його підставою роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-34",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 34 ust. 1 обмежує строк zezwolenie до 1 року, якщо wniosek подає polski podmiot, який веде działalność менш як рік, або робота не перевищує половини повного часу чи 20 годин на тиждень. Ust. 2 встановлює для pracownik tymczasowy строк не довший за art. 20 ustawy o zatrudnianiu pracowników tymczasowych.",
          sourceLocator: "Art. 34 ust. 1 pkt 1–2 і ust. 2",
        },
      ],
      summary:
        "Для молодого podmiot, малої зайнятості та роботи tymczasowa закон встановлює спеціальну верхню межу строку дозволу. Це не означає, що дозвіл завжди видається саме на один рік.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Якщо виконується хоча б одна названа умова — діяльність podmiot коротша за рік або час не більше 1/2 чи 20 годин на тиждень — zezwolenie видається на визначений строк не довший за один рік.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для працівника tymczasowy додатковою межею є строк, передбачений art. 20 окремої ustawy про zatrudnianie pracowników tymczasowych.",
        },
      ],
      legalEffect:
        "Art. 34 обмежує строк uprawnienie do pracy; він не продовжує visa чи pobyt і не створює автоматичного права на наступний дозвіл.",
      foreignersCase:
        "Перевірте вік діяльності podmiot, фактичний wymiar часу та статус працівника tymczasowy. Внесіть кінцеву дату zezwolenie окремо від кінця документа legalnego pobytu.",
    },
    {
      provisionId: "powierzanie-pracy-art-35",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 35 встановлює, що zezwolenie на роботу у зв'язку з pełnieniem określonej funkcji видає wojewoda, właściwość якого визначається siedziba polski podmiot powierzający pracę.",
          sourceLocator: "Art. 35",
        },
      ],
      summary:
        "Для дозволу на визначену функцію компетентність wojewoda прив'язана до siedziba польського podmiot. Стаття визначає орган, а не матеріальні умови функції.",
      rules: [
        {
          locator: "Art. 35",
          explanation:
            "У wniosek потрібно встановити siedziba polski podmiot, щоб визначити właściwy wojewoda для функціонального zezwolenie.",
        },
      ],
      legalEffect:
        "Art. 35 є правилом właściwość у справі про роботу; він не підтверджує legalny pobyt і не замінює перевірку, чи потрібен дозвіл для конкретної функції.",
      foreignersCase:
        "Звірте siedziba podmiot з реєстровими даними та компетентним wojewoda. Далі окремо перевірте функцію, документ pobyt і підставу uprawnienie do pracy.",
    },
    {
      provisionId: "powierzanie-pracy-art-36",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 36 ust. 1 охоплює zezwolenie для члена zarząd osoby prawnej або spółka kapitałowa w organizacji, особи, що веде справи чи представляє spółka komandytowa або komandytowo-akcyjna, та prokurent. За ust. 2 podmiot має мати в попередньому році дохід не нижчий за 12-кратне середнє місячне wynagrodzenie у województwo та щонайменше рік працевлаштовувати не менше двох працівників на czas nieokreślony і повний час; ust. 3 допускає майбутнє виконання умов, якщо podmiot доведе достатні кошти або дії.",
          sourceLocator: "Art. 36 ust. 1 pkt 1–3, ust. 2 pkt 1–2 і ust. 3",
        },
      ],
      summary:
        "Стаття визначає, для яких корпоративних функцій потрібна спеціальна модель zezwolenie та які показники podmiot зазвичай має довести. Невиконання стандартних показників не виключає справу автоматично, якщо доведено реальну перспективу їх виконання за ust. 3.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Модель охоплює членство у zarząd, ведення справ або представництво визначених spółka та повноваження prokurent.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "Podmiot має підтвердити дохід за попередній рік не нижчий за 12-кратне актуальне середнє місячне wynagrodzenie у województwo та щонайменше двох польських працівників або осіб з art. 1 ust. 4 pkt 6 чи art. 3 ust. 1, прийнятих на czas nieokreślony і повний час протягом щонайменше року.",
        },
        {
          locator: "ust. 3",
          explanation:
            "За відсутності умов ust. 2 podmiot може довести, що його кошти або дії, зокрема інвестиції, transfer technologii, інновації чи створення місць праці, дозволять виконати їх у майбутньому.",
        },
      ],
      legalEffect:
        "Art. 36 стосується умов спеціального zezwolenie на виконання функції й не надає сам по собі права перебування. Корпоративна функція та legalny pobyt мають бути перевірені окремо.",
      foreignersCase:
        "Визначте точну функцію та зберіть документи про дохід, двох працівників і строки їх zatrudnienie або про майбутні дії podmiot. Не ототожнюйте wpis у KRS чи візу з дозволом на роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-37",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 37 вимагає зазначати у zezwolenie на роботу у зв'язку з określona funkcja дані polski podmiot за art. 9 ust. 1 pkt 1 lit. a–c, дані cudzoziemiec за art. 9 ust. 1 pkt 3, саму функцію та okres ważności дозволу.",
          sourceLocator: "Art. 37 pkt 1–4",
        },
      ],
      summary:
        "Функціональний дозвіл має чітко називати podmiot, cudzoziemiec, функцію та строк. Це дає змогу перевірити, чи відповідає фактична корпоративна роль змісту рішення.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Зіставте ідентифікаційні дані polski podmiot та cudzoziemiec із wniosek і документами.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "У рішенні повинні бути названі конкретна funkcja та okres ważności; діяльність поза цими межами потребує окремої оцінки.",
        },
      ],
      legalEffect:
        "Art. 37 окреслює зміст uprawnienie do pracy за функцією, але не є документом legalnego pobytu і не розширює його строк.",
      foreignersCase:
        "Порівняйте funkcja у zezwolenie з фактичними повноваженнями та записами spółka. Окремо перевірте строк рішення і чинну підставу legalnego pobytu.",
    },
    {
      provisionId: "powierzanie-pracy-art-38",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 38 передбачає строк zezwolenie на роботу у зв'язку з określona funkcja не довший за 1 рік, якщо polski podmiot веде działalność у Польщі менш як рік або не виконує умови art. 36 ust. 2.",
          sourceLocator: "Art. 38",
        },
      ],
      summary:
        "Молодий podmiot або podmiot, який не відповідає стандартним показникам art. 36 ust. 2, отримує функціональний дозвіл з верхньою межею один рік.",
      rules: [
        {
          locator: "Art. 38",
          explanation:
            "Перевірте тривалість діяльності та умови доходу й zatrudnienie за art. 36 ust. 2; за наявності відповідної обставини строк дозволу не може перевищувати року.",
        },
      ],
      legalEffect:
        "Обмеження стосується строку дозволу на виконання функції, а не строку legalnego pobytu. Після спливу дозволу не можна продовжувати функцію лише на підставі чинної карти pobytu.",
      foreignersCase:
        "Зафіксуйте дату початку діяльності podmiot і документи щодо art. 36 ust. 2. Поставте окремі контрольні дати для zezwolenie та документа pobyt.",
    },
    {
      provisionId: "powierzanie-pracy-art-39",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 39 не вимагає zezwolenie на роботу у зв'язку з określona funkcja, якщо cudzoziemiec перебуває в Польщі загалом не більше 6 місяців упродовж наступних 12 місяців і виконує функцію в zarząd, представляє або веде справи визначеної spółka чи має prokura.",
          sourceLocator: "Art. 39",
        },
      ],
      summary:
        "Є вузький виняток від вимоги функціонального дозволу: сукупний pobyt для такої функції не може перевищити 6 місяців у кожному послідовному 12-місячному періоді.",
      rules: [
        {
          locator: "Art. 39",
          explanation:
            "Порахуйте фактичний сукупний період перебування в Польщі в межах наступних 12 місяців і встановіть, що функція належить до названої в статті.",
        },
      ],
      legalEffect:
        "Art. 39 звільняє лише від zezwolenie na pracę. Він не надає visa, права wjazdu чи legalnego pobytu; підставу і строк перебування треба підтвердити окремо.",
      foreignersCase:
        "Складіть календар усіх періодів побуту в Польщі та документів, які їх підтверджують, і перевірте корпоративну функцію. Не використовуйте правило після досягнення ліміту 6 місяців.",
    },
    {
      provisionId: "powierzanie-pracy-art-40",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 40 ust. 1 передбачає zezwolenie для cudzoziemiec, якого zatrudnia podmiot zagraniczny, який працює для нього поза Польщею та буде delegowany до oddział, zakład або podmiot пов'язаний, для usługa eksportowa або з іншою метою, яка не є świadczeniem usług. Ust. 2 виключає відкриття або вимагає umorzenie провадження для діяльності за art. 45 ust. 2 та функцій art. 2 pkt 9 lit. c–e; ust. 3 визначає usługa eksportowa, а ust. 4–5 — właściwość wojewoda.",
          sourceLocator: "Art. 40 ust. 1 pkt 1–3, ust. 2–5",
        },
      ],
      summary:
        "Стаття описує три моделі delegowanie з іноземного podmiot і розподіляє місцеву компетенцію між wojewoda. Exportowa usługa повинна бути тимчасовою та випадковою, а іноземний podmiot не може вести в Польщі господарську діяльність у значенні Prawo przedsiębiorców.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Потрібно підтвердити zatrudnienie у podmiot zagraniczny, роботу для нього поза Польщею та одну з моделей: пов'язаний podmiot або oddział, usługa eksportowa чи інша мета, що не є послугою.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Провадження не відкривають або umarzają за діяльності з art. 45 ust. 2 і функцій art. 2 pkt 9 lit. c–e. Usługa eksportowa має бути tymczasowa й okazjonalna, а іноземний podmiot не веде в Польщі діяльність у розумінні Prawo przedsiębiorców.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Właściwy wojewoda залежить від приймаючого podmiot, odbiorca usługi або головного місця роботи; якщо його неможливо визначити в моделях pkt 2–3, компетентним є wojewoda mazowiecki.",
        },
      ],
      legalEffect:
        "Art. 40 визначає модель і орган для zezwolenie при delegowanie, але не встановлює legalny pobyt. Іноземний трудовий зв'язок не замінює перевірку права перебувати та працювати в Польщі.",
      foreignersCase:
        "Документуйте роботодавця за кордоном, роботу поза Польщею, фактичну мету та місце delegowanie. Перевірте, чи не є це функцією або sezonowa praca; окремо встановіть документ pobyt і потрібне zezwolenie.",
    },
    {
      provisionId: "powierzanie-pracy-art-41",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 41 вимагає для zezwolenie при delegowanie дотримання умов art. 4 ust. 1 і ust. 2 pkt 1–8 та art. 5 ustawy o delegowaniu pracowników, wynagrodzenie не нижче 70% актуального середнього місячного wynagrodzenie у województwo на день wniosek та вказання особи в Польщі, уповноваженої представляти podmiot zagraniczny перед wojewoda й іншими органами.",
          sourceLocator: "Art. 41 pkt 1–3",
        },
      ],
      summary:
        "Для delegowanie потрібні не лише іноземний роботодавець і мета поїздки. Треба підтвердити польські умови delegowania, мінімальне співвідношення оплати та відповідального представника в Польщі.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Умови виконання роботи мають відповідати art. 4 ust. 1 і ust. 2 pkt 1–8 та art. 5 ustawy o delegowaniu pracowników; їх зміст треба читати в тому окремому акті."
        },
        {
          locator: "pkt 2",
          explanation:
            "Wynagrodzenie за роботу не може бути нижчим за 70% середнього місячного wynagrodzenie, актуального у відповідному województwo на день подання wniosek.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Podmiot zagraniczny називає особу, яка перебуває в Польщі, має підтвердження виконання умов і може представляти його перед wojewoda та іншими органами.",
        },
      ],
      legalEffect:
        "Art. 41 встановлює умови дозволу на роботу при delegowanie, але не робить його документом legalnego pobytu. Розмір оплати й представник не замінюють візу чи іншу підставу перебування.",
      foreignersCase:
        "Порівняйте оплату з офіційним середнім показником на дату wniosek і перевірте документи представника. Окремо підтвердьте legalny pobyt, строк перебування та право на роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-42",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 42 визначає зміст zezwolenie при delegowanie: дані podmiot zagraniczny і cudzoziemiec, stanowisko або rodzaj pracy, wymiar часу або кількість годин на тиждень чи місяць, найнижче wynagrodzenie та okres ważności. Для моделей art. 40 ust. 1 pkt 1–2 зазначають podmiot, до якого delegowany cudzoziemiec, або odbiorca usługi.",
          sourceLocator: "Art. 42 ust. 1 pkt 1–6 і ust. 2",
        },
      ],
      summary:
        "Дозвіл при delegowanie фіксує трудову модель, години, мінімальну оплату та одержувача або приймаючий podmiot, коли це потрібно. Фактична робота має відповідати цим межам.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Зіставте дані podmiot zagraniczny і cudzoziemiec з wniosek та документами.",
        },
        {
          locator: "ust. 1 pkt 3–6",
          explanation:
            "Перевірте stanowisko, rodzaj pracy, wymiar або години, мінімальне wynagrodzenie та строк чинності дозволу.",
        },
        {
          locator: "ust. 2",
          explanation:
            "У випадках delegowanie до пов'язаного podmiot або для exportowa usługa документ також називає приймаючий podmiot або odbiorca usługi.",
        },
      ],
      legalEffect:
        "Art. 42 окреслює uprawnienie do pracy при delegowanie, але не підтверджує legalny pobyt. Інший одержувач, stanowisko чи строк можуть вимагати окремої правової оцінки.",
      foreignersCase:
        "Порівняйте zezwolenie з договором іноземного роботодавця, фактичними годинами, оплатою та місцем роботи. Перевірте документ pobyt незалежно від польського одержувача послуги.",
    },
    {
      provisionId: "powierzanie-pracy-art-43",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 43 обмежує строк zezwolenie при delegowanie до oddział, zakład, przedstawicielstwo або пов'язаного podmiot, який веде діяльність у Польщі менш як рік: такий дозвіл видається на визначений строк не довший за 1 рік.",
          sourceLocator: "Art. 43",
        },
      ],
      summary:
        "Молодий приймаючий podmiot обмежує максимальний строк дозволу при відповідній моделі delegowanie. Один рік є верхньою межею, а не гарантованою тривалістю.",
      rules: [
        {
          locator: "Art. 43",
          explanation:
            "З'ясуйте, чи йдеться про названий oddział, zakład, przedstawicielstwo або пов'язаний podmiot і чи його діяльність у Польщі коротша за рік; тоді строк zezwolenie не може перевищити року.",
        },
      ],
      legalEffect:
        "Обмеження стосується строку права працювати за delegowanie, а не строку legalnego pobytu. Після закінчення дозволу чинний документ pobyt не замінює нової правової підстави роботи.",
      foreignersCase:
        "Перевірте дату початку діяльності приймаючого podmiot і точну модель delegowanie. Порівняйте кінцеві дати zezwolenie та pobyt у різних календарях.",
    },
    {
      provisionId: "powierzanie-pracy-art-44",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 44 звільняє від zezwolenie na pracę три моделі delegowanie: тимчасове відрядження працівника, який законно проживає в іншій державі EOG, працює там за трудовим зв'язком і зазвичай там працює для послуг у Польщі; delegowanie до пов'язаного podmiot не більше 30 днів у календарному році; та інше delegowanie не більше 30 днів у 180 днів, якщо це не виконання послуги.",
          sourceLocator: "Art. 44 pkt 1–3",
        },
      ],
      summary:
        "Це винятки від вимоги дозволу при короткому або транскордонному delegowanie. Кожен виняток має власну мету, зв'язок із роботодавцем і строковий ліміт.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Потрібні право pobytu в іншій державі EOG, zatrudnienie там, звичайна робота там і тимчасове направлення для świadczenie usług у Польщі.",
        },
        {
          locator: "pkt 2",
          explanation:
            "До oddział, zakład, przedstawicielstwo або пов'язаного podmiot можна бути delegowany не більше 30 днів у календарному році.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Для іншої мети, яка не є pkt 1–2 і не є виконанням послуги, ліміт становить 30 днів у 180 днів.",
        },
      ],
      legalEffect:
        "Art. 44 скасовує лише вимогу zezwolenie na pracę за наявності всіх умов. Він не створює права в'їзду або legalnego pobytu в Польщі.",
      foreignersCase:
        "Зафіксуйте державу EOG, трудовий зв'язок, мету delegowanie та всі дні перебування за відповідним лімітом. Окремо перевірте, на якій підставі cudzoziemiec перебуває в Польщі.",
    },
    {
      provisionId: "powierzanie-pracy-art-45",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 45 ust. 1 визначає умови zezwolenie na pracę sezonową: podmiot має бути polski podmiot, wynagrodzenie — не нижче оплати порівнюваних працівників у тому самому wymiar часу, діяльність — із переліку rozporządzenie, а робота — не довше 9 місяців у календарному році. Ust. 2 доручає Radzie Ministrów визначити такі діяльності за класифікацією та сезонним попитом.",
          sourceLocator: "Art. 45 ust. 1 pkt 1–4 і ust. 2",
        },
      ],
      summary:
        "Sezonowa praca має окремі матеріальні умови та річний ліміт. Конкретні види діяльності не випливають із самого art. 45 — їх треба брати з чинного rozporządzenie Rady Ministrów.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Заяву подає polski podmiot, а wynagrodzenie у umowa не може бути нижчим за оплату працівників порівнюваного виду або stanowisko при тому самому wymiar часу.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Робота має входити до діяльності, визначеної виконавчим актом, і тривати не довше 9 місяців у календарному році.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Rada Ministrów визначає діяльності за класифікацією, враховуючи значно вищий сезонний попит у повторювані періоди.",
        },
      ],
      legalEffect:
        "Art. 45 визначає підстави для сезонного дозволу на роботу, але не легалізує pobyt і не замінює visa або інший документ перебування.",
      foreignersCase:
        "Перевірте статус polski podmiot, оплату порівнюваних працівників, конкретний код діяльності в rozporządzenie та сумарні місяці роботи в році. Окремо встановіть legalny pobyt і його строк.",
    },
    {
      provisionId: "powierzanie-pracy-art-46",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 46 встановлює, що zezwolenie na pracę sezonową видає starosta, właściwość якого визначається siedziba або місцем stałego pobytu polski podmiot powierzający pracę cudzoziemcowi.",
          sourceLocator: "Art. 46",
        },
      ],
      summary:
        "Для сезонного дозволу компетентним є starosta за місцем польського podmiot. Це відрізняється від загального правила про wojewoda для звичайного zezwolenie.",
      rules: [
        {
          locator: "Art. 46",
          explanation:
            "Визначте siedziba або місце stałego pobytu polski podmiot; саме це встановлює właściwy starosta для wniosek.",
        },
      ],
      legalEffect:
        "Art. 46 розподіляє компетенцію у справі сезонної роботи, але не створює права на legalny pobyt чи фактичний початок роботи.",
      foreignersCase:
        "Перевірте реєстрові дані podmiot і правильний powiat. Окремо підтвердьте документ pobyt, сезонну підставу роботи та строк дозволу.",
    },
    {
      provisionId: "powierzanie-pracy-art-47",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 47 вимагає, щоб wniosek про sezonowe zezwolenie, крім даних art. 9, містив дату в'їзду до państw obszaru Schengen і дані про pobyt у Польщі, включно з правовою підставою; також подається oświadczenie про zakwaterowanie або власне забезпечення житла та відомості про передбачену оплачувану відпустку.",
          sourceLocator: "Art. 47 pkt 1–3",
        },
      ],
      summary:
        "Сезонний wniosek вимагає більше, ніж загальний wniosek: орган має бачити історію в'їзду, актуальну підставу pobyt, житло та оплачувану відпустку.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Зазначте дату в'їзду до Schengen і стан побуту cudzoziemiec у Польщі на день wniosek разом із правовою підставою.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Polski podmiot подає oświadczenie, що забезпечує zakwaterowanie, або що, за його знанням, cudzoziemiec забезпечує його сам.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Wniosek також містить інформацію про очікувану оплачувану відпустку cudzoziemiec.",
        },
      ],
      legalEffect:
        "Art. 47 визначає зміст доказів для сезонного дозволу, але подання wniosek не створює legalny pobyt і не замінює дозвіл на роботу.",
      foreignersCase:
        "Звірте дату перетину кордону, документ і підставу pobyt, дані про житло та відпустку з фактичними обставинами. Зберігайте підтвердження, але не вважайте wniosek самостійним документом перебування.",
    },
    {
      provisionId: "powierzanie-pracy-art-48",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 48 вимагає надавати пріоритет wnioskom про sezonowe zezwolenie для cudzoziemiec, який хоча б один раз протягом 5 років до wniosku працював на користь того самого polski podmiot на підставі сезонного дозволу, якщо нова робота буде за umowa o pracę.",
          sourceLocator: "Art. 48",
        },
      ],
      summary:
        "Попередня сезонна робота для того самого podmiot може дати пріоритет новому wniosek. Потрібні і попередній сезонний дозвіл, і нова umowa o pracę.",
      rules: [
        {
          locator: "Art. 48",
          explanation:
            "Перевірте хоча б один попередній період роботи за сезонним дозволом протягом п'яти років та те, що нова робота буде на підставі umowa o pracę.",
        },
      ],
      legalEffect:
        "Пріоритет впливає на порядок розгляду, але не гарантує видачу sezonowe zezwolenie, legalny pobyt або продовження роботи після визначеного строку.",
      foreignersCase:
        "Зберіть попереднє zezwolenie та докази роботи у того самого podmiot, а також проєкт нової umowa o pracę. Паралельно перевірте актуальний документ pobyt і сезонні умови art. 45.",
    },
    {
      provisionId: "powierzanie-pracy-art-49",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 49 встановлює, що коли cudzoziemiec у Польщі перебуває на іншому документі, ніж сезонна робоча віза або ruch bezwizowy, не пов'язаний із wniosek, робота на умовах сезонного wniosku є legalna від дня подання wniosku без braków formalnych до doręczenia decyzja starosty, але не довше 30 днів.",
          sourceLocator: "Art. 49",
        },
      ],
      summary:
        "Для cudzoziemiec, який уже перебуває в Польщі на іншій підставі, закон створює обмежений період legalnej pracy за умовами сезонного wniosek. Період починається лише після повного подання й у будь-якому разі має максимум 30 днів.",
      rules: [
        {
          locator: "Art. 49",
          explanation:
            "Перевірте, що документ pobyt не є сезонною візою або відповідним безвізовим в'їздом, wniosek не має braków formalnych, а робота відповідає умовам wniosek. Захист триває до doręczenia рішення, але не довше 30 днів.",
        },
      ],
      legalEffect:
        "Art. 49 легалізує лише роботу в прямо визначеному проміжку та межах wniosek; він не подовжує документ legalnego pobytu, не замінює його підставу і не гарантує позитивну decyzja.",
      foreignersCase:
        "Збережіть підтвердження повного подання та порахуйте 30 днів і дату doręczenia decyzja. Одночасно перевірте, чи чинний документ дає право перебувати в Польщі та чи потрібне інше uprawnienie do pracy.",
    },
    {
      provisionId: "powierzanie-pracy-art-50",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 50 ust. 1–2 передбачає wpis wniosku до ewidencji wniosków і видачу zaświadczenie o wpisie, коли cudzoziemiec проситиме візу з art. 60 ust. 1 pkt 5a ustawy o cudzoziemcach для sezonowa praca або планує ruch bezwizowy, виконані умови art. 45 ust. 1 і немає обставин art. 13 ust. 1–3 та art. 14; zaświadczenie містить дані podmiot і cudzoziemiec, miejsce, підставу, час, оплату, обов'язки, періоди та дату wpis. Ust. 3–6 встановлюють строки 7 днів робочих для нескладної справи, wezwanie на усунення braków до 7 днів і 30 днів для справи, що потребує пояснень.",
          sourceLocator: "Art. 50 ust. 1–6",
        },
      ],
      summary:
        "Стаття описує попередній wpis сезонного wniosku для майбутнього в'їзду за сезонною візою або безвізом, зміст certificate і процесуальні строки. Заświadczenie о wpis не є самою візою та не скасовує окрему перевірку побуту.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Starosta wpisує wniosek і видає zaświadczenie, якщо планується сезонна віза або ruch bezwizowy, виконані умови art. 45 ust. 1 та немає названих підстав відмови.",
        },
        {
          locator: "ust. 2",
          explanation:
            "У zaświadczenie зазначаються podmiot, pracodawca użytkownik за потреби, cudzoziemiec, місце, підстава роботи, час, найнижча оплата, обов'язки, періоди сезонної роботи й дата wpis.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "У справі без postępowanie wyjaśniającego starosta діє або відмовляє протягом 7 dni roboczych від повного wniosek. Certificate також містить інформацію про правила wjazd і pobyt, права та обов'язки доступу до ринку й pouczenie про odszkodowanie за art. 60 ust. 3.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "За формальних недоліків starosta викликає до їх усунення не пізніше 7 днів від подання; у справі з поясненнями строк дій за ust. 1 або відмови становить 30 днів від повного wniosek.",
        },
      ],
      legalEffect:
        "Wpis і zaświadczenie запускають передбачену для сезонної роботи процедуру, але самі не є visa, документом legalnego pobytu або остаточним zezwolenie na pracę. Право працювати до рішення залежить від окремих умов, зокрема art. 51.",
      foreignersCase:
        "Перевірте повноту wniosku, умови art. 45, відсутність підстав art. 13 і 14 та всі дані у zaświadczenie. Не замінюйте ним visa або інший документ pobyt; після в'їзду відстежуйте подальші кроки для сезонного дозволу.",
    },
  ],
})
