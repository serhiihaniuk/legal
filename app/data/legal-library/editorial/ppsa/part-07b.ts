import { defineEditorialPart } from "../define-editorial-part"

export const ppsaPart07b = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-285h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285h передбачає, що NSA на posiedzeniu niejawnym odrzuca skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia, якщо її мав відхилити суд нижчої інстанції, її подано після строку, вона не відповідає вимогам Art. 285e § 1 або є niedopuszczalna з іншої причини; скаргу також відхиляють, якщо змінити оскаржене orzeczenie іншими засобами було або є можливим чи немає винятку з Art. 285a § 2.",
          sourceLocator: "Art. 285h § 1–2",
        },
      ],
      summary:
        "Норма визначає процесуальні підстави, за яких NSA не переходить до змістовного розгляду skarga про stwierdzenie niezgodności з prawem prawomocnego orzeczenia.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте строк, вимоги Art. 285e § 1, допустимість skarga та те, чи не була вона такою, що підлягала odrzucenie в суді нижчої інстанції.",
        },
        {
          locator: "§ 2",
          explanation:
            "Окремо встановіть, чи можна було або ще можна змінити оскаржене orzeczenie іншим środkiem prawnym і чи наявний винятковий випадок Art. 285a § 2.",
        },
      ],
      legalEffect:
        "Odrzucenie перешкоджає розгляду цієї skarga за суттю; сама стаття не встановлює, що оскаржене orzeczenie є законним.",
      foreignersCase:
        "У справі іноземця щодо pobyt спочатку перевірте, чи ще доступний інший środek prawny проти orzeczenie та чи виконані вимоги до skarga; не ототожнюйте odrzucenie з оцінкою права на pobyt.",
    },
    {
      provisionId: "ppsa-art-285i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285i встановлює, що NSA розглядає skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia у складі трьох sędziów; sędzia, який брав участь у видачі оскарженого orzeczenie, виключений від розгляду цієї skarga.",
          sourceLocator: "Art. 285i § 1–2",
        },
      ],
      summary:
        "Стаття визначає склад NSA для цього засобу та виключає з нього sędziego, який уже брав участь у оскарженому orzeczenie.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Типовий склад для розгляду skarga — три sędziowie NSA.",
        },
        {
          locator: "§ 2",
          explanation:
            "Зіставте склад суду з особами, які брали участь у видачі orzeczenie, що оскаржується.",
        },
      ],
      legalEffect:
        "Норма регулює склад і неупередженість суду, але сама не визначає результат skarga.",
      foreignersCase:
        "Якщо іноземець оскаржує prawomocne orzeczenie у справі про pobyt, перевірте склад NSA та участь sędziów у попередньому orzeczenie лише як конкретне процесуальне питання.",
    },
    {
      provisionId: "ppsa-art-285j",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285j передбачає, що NSA розглядає skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia в межах зaskarżenia і в межах підстав; скаргу розглядають на posiedzeniu niejawnym, якщо важливі міркування не виправдовують призначення rozprawa.",
          sourceLocator: "Art. 285j",
        },
      ],
      summary:
        "NSA зв’язаний межами зaskarżenia та podstawami skarga, а rozpoznanie на posiedzeniu niejawnym є правилом із можливим винятком для rozprawa.",
      rules: [
        {
          locator: "Art. 285j zdanie pierwsze",
          explanation:
            "Уточніть, яку частину orzeczenie оскаржено і на яких підставах: за цими межами NSA не описує розгляд.",
        },
        {
          locator: "Art. 285j zdanie drugie",
          explanation:
            "Загальним способом є posiedzenie niejawne; rozprawa потребує важливих міркувань, які її виправдовують.",
        },
      ],
      legalEffect:
        "Стаття обмежує предмет розгляду і визначає його форму, але не гарантує ні призначення rozprawa, ні задоволення skarga.",
      foreignersCase:
        "У спорі іноземця про pobyt сформулюйте, яку частину prawomocne orzeczenie і які його правові підстави оскаржено; не виводьте результат із того, що засідання є niejawnym.",
    },
    {
      provisionId: "ppsa-art-285k",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285k зобов’язує NSA oddalić skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia, якщо немає підстав визнати оскаржене orzeczenie незаконним; за uwzględnienie skarga NSA визнає orzeczenie в оскарженій частині niezgodne z prawem, а коли справа за особою або предметом не належала до юрисдикції sądy у момент вирішення — unieważnia оскаржене та pierwszej instancji orzeczenie і odrzuca skargę.",
          sourceLocator: "Art. 285k § 1–3",
        },
      ],
      summary:
        "Стаття розмежовує три можливі результати: oddalenie через відсутність підстави, stwierdzenie niezgodności в межах skarga та спеціальний наслідок для справи поза юрисдикцією судів.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Відсутність підстави веде до oddalenie; якщо skarga обґрунтована, NSA встановлює niezgodność лише в оскарженому обсязі.",
        },
        {
          locator: "§ 3",
          explanation:
            "Спеціальний результат — unieważnienie обох названих orzeczenia та odrzucenie skarga — пов’язаний із відсутністю юрисдикції судів за особою або предметом у момент вирішення.",
        },
      ],
      legalEffect:
        "Визнання niezgodność з prawem не слід плутати з автоматичним новим вирішенням адміністративної справи; конкретний наслідок залежить від результату й обсягу skarga.",
      foreignersCase:
        "У справі іноземця про pobyt відрізняйте oddalenie, stwierdzenie niezgodności та спеціальний наслідок § 3; сама позитивна оцінка skarga не означає автоматичного надання pobyt.",
    },
    {
      provisionId: "ppsa-art-285l",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285l встановлює, що в питаннях, не врегульованих положеннями цього Dział, до postępowania, порушеного поданням skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia, застосовуються відповідно положення про skarga kasacyjna.",
          sourceLocator: "Art. 285l",
        },
      ],
      summary:
        "Для прогалин у спеціальному провадженні закон відсилає до правил про skarga kasacyjna, але лише відповідно.",
      rules: [
        {
          locator: "Art. 285l",
          explanation:
            "Спочатку перевірте, чи питання справді не врегульоване цим Dział, і лише тоді шукайте відповідне правило про skarga kasacyjna.",
        },
      ],
      legalEffect:
        "Відсилання не робить усі правила касації автоматично тотожними цьому засобу; спосіб застосування має бути відповідним до його характеру.",
      foreignersCase:
        "У справі про pobyt не переносіть механічно строк або вимогу зі skarga kasacyjna на skargę з Art. 285l без перевірки, чи спеціальний Dział уже має власне правило.",
    },
    {
      provisionId: "ppsa-art-286",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 286 передбачає, що після uprawomocnienie orzeczenie суду першої інстанції, яке закінчує postępowanie, akta адміністративної справи повертаються organowi administracji publicznej з odpis orzeczenia зі stwierdzeniem prawomocność; zarządzenie про повернення може видати referendarz sądowy. Якщо akta ведуться електронно, їх не повертають, а органу вручають такий odpis. Строк для załatwienie справи органом рахується від doręczenie akt або odpis.",
          sourceLocator: "Art. 286 § 1–2",
        },
      ],
      summary:
        "Стаття визначає повернення адміністративних akt після uprawomocnienie orzeczenie суду першої інстанції, яке закінчує postępowanie, і подію, від якої рахується строк для органу.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Для паперових akt перевірте повернення разом з odpis зі stwierdzeniem prawomocność; для електронних akt орган отримує odpis без повернення електронної справи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Початком строку органу є doręczenie akt або, за електронного ведення, doręczenie odpis orzeczenia.",
        },
      ],
      legalEffect:
        "Правило визначає обов’язковий початок строку для органу; воно саме не встановлює зміст майбутнього załatwienie.",
      foreignersCase:
        "Після wyrok WSA у справі іноземця про pobyt зафіксуйте doręczenie akt або odpis зі stwierdzeniem prawomocność, а не лише дату wyrok, якщо потрібно рахувати строк для органу.",
    },
    {
      provisionId: "ppsa-art-287",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 287 має статус uchylony і містить лише позначення «(uchylony)».",
          sourceLocator: "Art. 287",
        },
      ],
      summary:
        "Art. 287 скасовано; у чинному тексті немає діючого правила, яке можна застосувати як самостійну підставу.",
      rules: [
        {
          locator: "Art. 287",
          explanation:
            "Не використовуйте цей artykuł як чинну норму: спочатку перевірте редакцію PPSA і можливі перехідні правила, якщо подія належить до минулого періоду.",
        },
      ],
      legalEffect:
        "Оскільки Art. 287 є uchylony у джерельній редакції, він не створює поточного процесуального обов’язку чи права.",
      foreignersCase:
        "У справі іноземця не посилайтеся на Art. 287 для визначення дії органу або суду; для старої події окремо встановіть застосовну редакцію та дату uchylenie.",
    },
    {
      provisionId: "ppsa-art-288",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 288 передбачає odtworzenie зниклих або знищених повністю чи частково akt. У справі, завершеній prawomocnie, відновленню підлягають kończące postępowanie orzeczenie та та частина akt, яка необхідна для встановлення його змісту і wznowienie postępowania.",
          sourceLocator: "Art. 288",
        },
      ],
      summary:
        "Стаття окреслює предмет odtworzenie akt і встановлює окремий, обмежений обсяг для вже остаточно завершеної справи.",
      rules: [
        {
          locator: "Art. 288 zdanie pierwsze",
          explanation:
            "Визначте, чи akta зникли або знищені повністю чи частково: саме такі akta є предметом odtworzenie.",
        },
        {
          locator: "Art. 288 zdanie drugie",
          explanation:
            "Для prawomocnie завершеної справи шукайте передусім kończące postępowanie orzeczenie та необхідну частину матеріалів для його змісту й wznowienie.",
        },
      ],
      legalEffect:
        "Відновлення акт не означає автоматичного wznowienie або зміни остаточного orzeczenie; стаття лише визначає, що може бути відновлено.",
      foreignersCase:
        "Якщо у справі іноземця про pobyt втрачено судові akta, відокремте відновлення їх змісту від окремого питання, чи існують підстави для wznowienie.",
    },
    {
      provisionId: "ppsa-art-289",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 289 встановлює, що sąd wszczyna postępowanie щодо odtworzenie akt z urzędu або на wniosek strony; якщо zaginięcie чи zniszczenie akt сталося внаслідок siły wyższej, суд розпочинає його лише на wniosek strony.",
          sourceLocator: "Art. 289 § 1–2",
        },
      ],
      summary:
        "Спосіб початку провадження про відновлення залежить від того, чи пов’язана втрата або знищення akt із siła wyższa.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "За загальним правилом постępowanie може початися z urzędu або на wniosek strony.",
        },
        {
          locator: "§ 2",
          explanation:
            "За siła wyższa потрібен wniosek strony; не підміняйте це питання простим припущенням про причину втрати.",
        },
      ],
      legalEffect:
        "Стаття визначає спосіб wszczęcie, але не доводить, що відновлення буде успішним або що всі akta можна відтворити.",
      foreignersCase:
        "У справі іноземця перевірте документовану причину зникнення akt і те, чи потрібно подавати wniosek, особливо коли посилаються на siła wyższa.",
    },
    {
      provisionId: "ppsa-art-290",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 290 визначає właściwy sąd для odtworzenie akt: у незавершеній справі — суд, у якому вона востаннє розглядалася; якщо компетентним був би NSA, він передає справу суду першої інстанції, крім відновлення лише akt NSA; у prawomocnie завершеній справі постępowanie проводить суд першої інстанції.",
          sourceLocator: "Art. 290 § 1–3",
        },
      ],
      summary:
        "Норма розподіляє компетенцію між судом останнього розгляду, NSA та судом першої інстанції залежно від стану справи й обсягу втрачених akt.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Для справи, що триває, встановіть останній sąd; правило про NSA має виняток, коли відновлюються лише його власні akta.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для prawomocnie завершеної справи компетентним є sąd першої інстанції.",
        },
      ],
      legalEffect:
        "Правильний sąd є процесуальною передумовою розгляду питання про odtworzenie; сама стаття не вирішує, якою буде відновлена справа.",
      foreignersCase:
        "Якщо зникли akta судової справи іноземця про pobyt, спершу встановіть, чи вона ще триває та який sąd розглядав її останнім, замість автоматично звертатися до NSA.",
    },
    {
      provisionId: "ppsa-art-291",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 291 вимагає, щоб у wniosek o odtworzenie akt було точно визначено справу, додано всі наявні у заявника urzędowo poświadczone odpisy та вказано відомі йому місця, де знаходяться документи або їх odpisy.",
          sourceLocator: "Art. 291",
        },
      ],
      summary:
        "Заява про odtworzenie akt має ідентифікувати справу, надати наявні офіційно засвідчені копії та вказати джерела інших документів.",
      rules: [
        {
          locator: "Art. 291",
          explanation:
            "До wniosek внесіть точне позначення справи та додайте всі urzędowo poświadczone odpisy, які є у вашому володінні.",
        },
        {
          locator: "Art. 291",
          explanation:
            "Не обмежуйтеся власними копіями: вкажіть відомі місця зберігання документів або їх odpisy.",
        },
      ],
      legalEffect:
        "Норма визначає зміст wniosek, але подання копій не гарантує, що суд визнає їх достатніми для повного odtworzenie.",
      foreignersCase:
        "У справі іноземця зберіть копії wyrok, postanowienie, skarga та підтвердження doręczenie, але в wniosek зазначайте лише те, що фактично є або відомо про місце зберігання.",
    },
    {
      provisionId: "ppsa-art-292",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 292 дозволяє przewodniczący викликати осіб, organи administracji publicznej або instytucje, зазначені у wniosek чи офіційно відомі суду, щоб у встановлений строк подати urzędowo poświadczone odpisy документів або заявити, що їх не мають. Особа, яка вже мала документ, але більше його не має, повинна пояснити, де він або odpis знаходиться.",
          sourceLocator: "Art. 292 § 1–2",
        },
      ],
      summary:
        "Суд може залучити відомих йому власників документів і вимагає або копію, або пояснення про її відсутність та місце знаходження.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "У wezwanie перевірте строк і конкретну вимогу: подати urzędowo poświadczony odpis або повідомити про його відсутність.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо адресат раніше володів документом, сама відсутність документа не звільняє від пояснення про його місце знаходження.",
        },
      ],
      legalEffect:
        "Стаття створює механізм збирання копій для відновлення akt, але не встановлює, що кожен викликаний адресат обов’язково має потрібний документ.",
      foreignersCase:
        "Якщо втрачені akta справи іноземця містили документи від органу pobyt або суду, перевірте, кого призначено адресатом wezwanie і чи подано копію або заяву про її відсутність.",
    },
    {
      provisionId: "ppsa-art-293",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 293 дозволяє суду накласти grzywna у розмірі, визначеному Art. 154 § 6, на кожного, хто не виконав wezwanie за попередньою статтею; якщо викликано osobę prawną або іншу jednostkę organizacyjną, покаранню підлягає її kierownik або pracownik, обов’язком якого було виконати wezwanie.",
          sourceLocator: "Art. 293 § 1–2",
        },
      ],
      summary:
        "Невиконання wezwanie про подання копій або пояснення може мати наслідком grzywna, а для організації відповідальним адресатом є визначена службова особа.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Застосування grzywna пов’язане з невиконанням саме wezwanie, зробленого за Art. 292, і розміром, на який відсилає Art. 154 § 6.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для osoby prawnej або іншої jednostka організаційної встановіть kierownik чи pracownik, на якого припадав обов’язок виконати wezwanie.",
        },
      ],
      legalEffect:
        "Можливість grzywna підтримує збирання матеріалів, але не замінює відсутній документ і не означає автоматичного відновлення akt.",
      foreignersCase:
        "У справі іноземця про pobyt відрізняйте факт невиконання wezwanie організацією від питання, чи саме її kierownik або pracownik мав обов’язок відповісти.",
    },
    {
      provisionId: "ppsa-art-294",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 294 передбачає, що якщо urzędowo poświadczone odpisy подано, przewodniczący розпоряджається долучити їх до akt; odpis zarządzenie вручається сторонам.",
          sourceLocator: "Art. 294",
        },
      ],
      summary:
        "Подані офіційно засвідчені копії включаються до akt за розпорядженням przewodniczący, а сторони отримують копію цього zarządzenie.",
      rules: [
        {
          locator: "Art. 294 zdanie pierwsze",
          explanation:
            "Перевірте, що подана копія є urzędowo poświadczona і що існує zarządzenie про її долучення до akt.",
        },
        {
          locator: "Art. 294 zdanie drugie",
          explanation:
            "Сторонам має бути doręczony odpis zarządzenie, а не обов’язково сам оригінал документа.",
        },
      ],
      legalEffect:
        "Норма регулює долучення копій і повідомлення сторін; вона не встановлює, що долучений документ повністю відновлює зміст утрачених akt.",
      foreignersCase:
        "У справі іноземця перевірте в матеріалах odtworzenie, чи копію документа про pobyt долучено zarządzenieм і чи його odpis вручено сторонам.",
    },
    {
      provisionId: "ppsa-art-295",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 295 передбачає, що коли odtworzenie akt не можна провести способом попередніх статей, przewodniczący викликає сторони подати точні заяви щодо змісту зниклих або знищених pism та докази тверджень у них, включно з приватними odpisy, іншими pismami й notatki, які можуть допомогти відновити akta.",
          sourceLocator: "Art. 295",
        },
      ],
      summary:
        "Якщо відновлення за порядком попередніх статей неможливе, суд з’ясовує зміст втрачених pism через заяви сторін та доступні допоміжні матеріали.",
      rules: [
        {
          locator: "Art. 295",
          explanation:
            "Цей спосіб застосовується після того, як не спрацював порядок попередніх статей; у заяві потрібно точно описати зміст pism.",
        },
        {
          locator: "Art. 295",
          explanation:
            "Як докази можна вказувати приватні odpisy, інші pisma та notatki, але лише ті, що можуть допомогти відновити akta.",
        },
      ],
      legalEffect:
        "Заяви й приватні копії є матеріалом для odtworzenie, а не автоматично встановленою остаточною версією втрачених akt.",
      foreignersCase:
        "Якщо в судовій справі іноземця про pobyt відсутні офіційні копії, зберіть власні odpisy та notatki й чітко відокремте підтверджений зміст від припущень.",
    },
    {
      provisionId: "ppsa-art-296",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 296 вимагає, щоб незалежно від заяв і wnioski суд z urzędu провів dochodzenia, не оминаючи жодної обставини, важливої для встановлення змісту втрачених або знищених akt. Суд враховує записи в repertoriach та інших службових книгах, може допитати sędziów, prokuratorów, protokolantów, pełnomocników сторін та інших осіб, які брали участь у postępowaniu або можуть висловитися щодо змісту akt, а також сторони; до доказів застосовуються відповідно положення Kodeks postępowania cywilnego.",
          sourceLocator: "Art. 296 § 1–2",
        },
      ],
      summary:
        "Суд самостійно розшукує відомості про зміст утрачених akt, використовуючи службові записи та показання осіб, які могли знати перебіг справи.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Розслідування z urzędu не обмежене заявами сторін; важливими можуть бути repertoria, інші службові книги та показання визначених осіб.",
        },
        {
          locator: "§ 2",
          explanation:
            "Під час таких доказових дій відповідно застосовуються правила Kodeks postępowania cywilnego.",
        },
      ],
      legalEffect:
        "Обов’язок суду досліджувати обставини не гарантує, що зміст акт буде встановлено повністю або без невизначеності.",
      foreignersCase:
        "У справі іноземця про pobyt назвіть суду осіб і службові записи, які можуть підтвердити зміст akt; не припускайте, що відсутність оригіналу автоматично знецінює всі інші докази.",
    },
    {
      provisionId: "ppsa-art-297",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 297 встановлює, що після postępowanie за Art. 295 і 296 суд postanowieniem визначає, у який спосіб і в якому обсязі відновити зниклі akta, або встановлює, що odtworzenie akt неможливе; на це postanowienie доступне zażalenie.",
          sourceLocator: "Art. 297",
        },
      ],
      summary:
        "Після збирання відомостей суд окремим postanowienie визначає обсяг відновлення або його неможливість, із можливістю zażalenie.",
      rules: [
        {
          locator: "Art. 297 zdanie pierwsze",
          explanation:
            "Читайте в postanowienie не лише висновок про можливість, а й спосіб та обсяг, у якому akta мають бути відновлені.",
        },
        {
          locator: "Art. 297 zdanie drugie",
          explanation:
            "Перевірте pouczenie про zażalenie та строк за загальними процесуальними правилами, якщо рішення оскаржується.",
        },
      ],
      legalEffect:
        "Postanowienie визначає межі відновленого матеріалу або неможливість відновлення; воно саме не вирішує предмет первісної адміністративної справи.",
      foreignersCase:
        "У справі іноземця перевірте, чи postanowienie про odtworzenie охоплює потрібний wyrok, decyzja або доказ, і не плутайте zażalenie на нього з odwołanieм у справі про pobyt.",
    },
    {
      provisionId: "ppsa-art-298",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 298 передбачає, що якщо akta неможливо відновити або відновлена частина недостатня для продовження postępowanie, skarga або środek odwoławczy можуть бути подані повторно протягом тридцяти днів від дня, коли postanowienie з цього питання стало prawomocne. В інших випадках суд продовжує postępowanie у можливому стані з урахуванням наявних і відновлених akt; на postanowienie щодо продовження доступне zażalenie.",
          sourceLocator: "Art. 298",
        },
      ],
      summary:
        "Наслідок неможливого або недостатнього odtworzenie різний: повторне подання skarga чи środka odwoławczego або продовження справи за наявними матеріалами.",
      rules: [
        {
          locator: "Art. 298 zdanie pierwsze",
          explanation:
            "Повторне подання можливе лише у названій ситуації і в тридцятиденний строк від prawomocność відповідного postanowienie.",
        },
        {
          locator: "Art. 298 zdanie drugie",
          explanation:
            "Якщо матеріалів достатньо для продовження, суд діє в стані, який можливо встановити, з урахуванням akt, що залишилися та були відновлені.",
        },
      ],
      legalEffect:
        "Стаття може відкрити шлях до повторного wniesienie, але лише після встановлення неможливості або недостатності akt; вона не поновлює автоматично всі попередні строки.",
      foreignersCase:
        "Якщо зникли akta справи іноземця про pobyt, зафіксуйте дату prawomocność postanowienie і його висновок про достатність матеріалів перед вирішенням між повторною skarga та продовженням.",
    },
    {
      provisionId: "ppsa-art-299",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 299 § 1 регулює doręczenia стороні, яка має miejsce zamieszkania, miejsce zwykłego pobytu або siedziba в іншій державі-члені UE, Швейцарії чи державі EFTA–EOG і не має pełnomocnik для ведення справи з місцем проживання або siedziba в Польщі; суд надсилає їй pisma рекомендованим листом із підтвердженням отримання або рівноцінним відправленням. § 2–3 стосуються сторони поза Польщею, UE, Швейцарією та EFTA–EOG: разом із wniesienie skarga вона повинна ustanowić pełnomocnik do doręczeń у Польщі, а за невиконання wezwanie дає два місяці під rygor odrzucenie skarga. § 4–5 поширюють обов’язок щодо учасника, зазначеного у skarga, і учасника Art. 33 § 2; за невиконання pisma залишаються в akt зі skutkiem doręczenia. § 6 містить винятки для міжнародного договору та електронного doręczenie.",
          sourceLocator: "Art. 299 § 1–6",
        },
      ],
      summary:
        "Норма встановлює правила вручення та обов’язок призначити pełnomocnik do doręczeń для певних учасників, які перебувають за межами Польщі.",
      rules: [
        {
          locator: "§ 1–3",
          explanation:
            "Розрізніть сторону в державі-члені UE, Швейцарії або EFTA–EOG, для якої § 1 передбачає рекомендоване або рівноцінне doręczenie, і сторону поза цими державами, яка за § 2 має разом зі skarga ustanowić польський pełnomocnik do doręczeń; після wezwanie на усунення цього braku діє два місяці під rygor odrzucenie skarga.",
        },
        {
          locator: "§ 4–6",
          explanation:
            "Для учасника, про якого це випливає зі skarga, діє § 4, а § 5 застосовує його відповідно до учасника Art. 33 § 2; перевірте також винятки § 6 щодо міжнародного договору та електронного doręczenie.",
        },
      ],
      legalEffect:
        "Невиконання § 2 після wezwanie може призвести до odrzucenie skarga; невиконання обов’язку учасника за § 4 спричиняє залишення pisma в akt зі skutkiem doręczenia. Перевірте передбачені § 6 винятки.",
      foreignersCase:
        "Іноземцю, який подає skargę на decyzja про pobyt, визначте його miejsce zamieszkania або zwykłego pobytu, належну географічну категорію § 1 чи § 2, наявність pełnomocnik у Польщі та винятки § 6. Для учасника окремо перевірте § 4–5 і наслідок skutku doręczenia.",
    },
    {
      provisionId: "ppsa-art-300",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 300 встановлює, що в питаннях, не врегульованих PPSA, до postępowania у сфері obrotu zagranicznego відповідно застосовуються положення про ustrój sądów powszechnych та положення Kodeks postępowania cywilnego про międzynarodowe postępowanie cywilne.",
          sourceLocator: "Art. 300",
        },
      ],
      summary:
        "Для неврегульованих питань міжнародного судового обігу PPSA відсилає до двох названих груп цивільно-процесуальних правил.",
      rules: [
        {
          locator: "Art. 300",
          explanation:
            "Спершу встановіть, що питання не врегульоване PPSA, і лише потім визначайте відповідне правило про ustrój sądów powszechnych або międzynarodowe postępowanie cywilne.",
        },
      ],
      legalEffect:
        "Відсилання є відповідним, а не необмеженим: Art. 300 не скасовує спеціальні правила PPSA і не дає готової відповіді для кожної міжнародної ситуації.",
      foreignersCase:
        "У міжнародній справі іноземця про pobyt спочатку перевірте спеціальні правила PPSA про doręczenia та участь сторін; Art. 300 застосовуйте лише до неврегульованого питання.",
    },
    {
      provisionId: "ppsa-art-301",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 301 відсилає питання набрання чинності PPSA до ustawa z dnia 30 sierpnia 2002 r. — Przepisy wprowadzające ustawę — Prawo o ustroju sądów administracyjnych i ustawę — Prawo o postępowaniu przed sądami administracyjnymi; примітка до джерельного тексту зазначає, що ustawa wchodziła w życie 1 stycznia 2004 r. на підставі Art. 2 цієї ustawa wprowadzająca.",
          sourceLocator: "Art. 301 та przypisy 63–64",
        },
      ],
      summary:
        "Це кінцеве положення про набрання чинності, яке відсилає до окремого перехідного закону; у джерелі наведено дату 1 stycznia 2004 r.",
      rules: [
        {
          locator: "Art. 301",
          explanation:
            "Для питання wejście w życie звертайтеся до названої ustawa wprowadzająca, а не виводьте дату лише з номера Art. 301.",
        },
        {
          locator: "Przypis 63",
          explanation:
            "Джерельна примітка вказує на 1 stycznia 2004 r.; для подій минулого періоду все одно звіряйте перехідні положення відповідної редакції.",
        },
      ],
      legalEffect:
        "Art. 301 має історичну функцію визначення wejście w życie і не є самостійною підставою для сучасної процесуальної дії.",
      foreignersCase:
        "У справі іноземця не використовуйте Art. 301 як відповідь на сучасний строк чи право на pobyt; посилайтеся на нього лише для питання wejście w życie та перевірки застосовної редакції.",
    },
  ],
})
