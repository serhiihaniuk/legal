import { defineEditorialPart } from "../define-editorial-part"

export const ppsaPart05 = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-177",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 177 встановлює, що skargę kasacyjną подають до суду, який ухвалив оскаржене orzeczenie, протягом тридцяти днів від doręczenie відпису orzeczenia з uzasadnieniem; окремо врегульовано строки для prokuratora, Rzecznika Praw Obywatelskich, Rzecznika Praw Dziecka, pełnomocnika з prawa pomocy та випадок відмови у такій допомозі.",
          sourceLocator: "Art. 177 § 1–6",
        },
      ],
      summary:
        "Норма визначає, куди і коли подається skarga kasacyjna, а також спеціальні правила перебігу строку в окремих процесуальних ситуаціях.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Основний строк становить тридцять днів від doręczenie відпису wyroku або postanowienia з uzasadnieniem; скаргу подають до суду, який видав це orzeczenie.",
        },
        {
          locator: "§ 3–6",
          explanation:
            "Коли після orzeczenie призначено pełnomocnika в рамках prawa pomocy або в цьому проханні відмовлено, закон визначає спеціальний момент, від якого може рахуватися строк.",
        },
      ],
      legalEffect:
        "Пропуск визначеного строку може перешкодити розгляду skargi kasacyjnej; сама стаття не замінює перевірки doręczenie, права на засіб і вимог до змісту скарги.",
      foreignersCase:
        "У справі іноземця про pobyt зафіксуйте дату doręczenie wyroku WSA з uzasadnieniem і не обчислюйте тридцятиденний строк лише від дати, надрукованої на рішенні.",
    },
    {
      provisionId: "ppsa-art-177a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 177a передбачає wezwanie до усунення недоліків skargi kasacyjnej, які стосуються вимог Art. 176, крім przytoczenie podstaw kasacyjnych та їх uzasadnienie; строк становить сім днів, а наслідком невиконання є odrzucenie skargi.",
          sourceLocator: "Art. 177a",
        },
      ],
      summary:
        "Це спеціальне wezwanie стосується формальних вимог касаційної скарги, але не дозволяє доповнювати або виправляти самі касаційні підстави та їх обґрунтування.",
      rules: [
        {
          locator: "Art. 177a",
          explanation:
            "На усунення охопленого нормою недоліку надається сім днів; у wezwanie має бути зрозуміло, що саме потрібно виправити.",
        },
        {
          locator: "Art. 177a",
          explanation:
            "Якщо недолік не усунуто в строк, передбачений rygor wezwania, skarga kasacyjna підлягає odrzucenie.",
        },
      ],
      legalEffect:
        "Норма створює можливість усунути певні braki formalne, але не гарантує прийняття скарги й не поширюється на виклад касаційних підстав.",
      foreignersCase:
        "Якщо pełnomocnik іноземця отримав wezwanie щодо skargi kasacyjnej, треба окремо звірити семиденний строк і перелік braki, не намагаючись додати нові підстави касації під виглядом виправлення форми.",
    },
    {
      provisionId: "ppsa-art-178",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 178 зобов'язує wojewódzki sąd administracyjny на posiedzeniu niejawnym відхилити skargę kasacyjną, подану після строку або недопустиму з іншої причини, а також скаргу, недоліки якої не усунуто в призначений строк.",
          sourceLocator: "Art. 178",
        },
      ],
      summary:
        "Стаття визначає випадки, коли WSA не передає касаційну скаргу далі через строк, недопустимість або неусунені недоліки.",
      rules: [
        {
          locator: "Art. 178",
          explanation:
            "Прострочення, інша niedopuszczalność або невиконання wezwanie щодо braki є окремими підставами для odrzucenie.",
        },
        {
          locator: "Art. 178",
          explanation:
            "Рішення про odrzucenie приймається WSA на posiedzeniu niejawnym.",
        },
      ],
      legalEffect:
        "Odrzucenie припиняє шлях цієї skargi kasacyjnej до розгляду по суті; оцінка факту строку та усунення недоліків потребує перевірки матеріалів вручення.",
      foreignersCase:
        "У спорі іноземця щодо decyzja o pobycie перевірте, чи WSA відхилив skargę kasacyjną через строк або форму, а не через оцінку права на pobyt по суті.",
    },
    {
      provisionId: "ppsa-art-178a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 178a вимагає umorzenie postępowania kasacyjnego на posiedzeniu niejawnym, якщо сторона ефективно відкликала skargę kasacyjną до її передачі разом з aktami справи Naczelnemu Sądowi Administracyjnemu; на postanowienie доступне zażalenie.",
          sourceLocator: "Art. 178a",
        },
      ],
      summary:
        "Відкликання касаційної скарги до передачі справи до NSA веде до umorzenie касаційного провадження.",
      rules: [
        {
          locator: "Art. 178a",
          explanation:
            "Важливі і момент відкликання, і його skuteczność: після передачі akt умова цієї статті вже не описує ситуацію.",
        },
        {
          locator: "Art. 178a",
          explanation:
            "Umorzenie відбувається на posiedzeniu niejawnym, а на відповідне postanowienie можна подати zażalenie.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальний наслідок skuteczne cofnięcie, але не вирішує, чи було відкликання допустимим за іншими правилами.",
      foreignersCase:
        "Якщо іноземець відкликає skargę kasacyjną у справі про pobyt після отримання нового рішення органу, встановіть, чи akt ще не передали до NSA, і пам'ятайте про окреме postanowienie.",
    },
    {
      provisionId: "ppsa-art-179",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 179 дозволяє стороні, яка не подала skargi kasacyjnej, подати до WSA відповідь на неї протягом чотирнадцяти днів від doręczenie; після спливу строку або doręczenie відповіді WSA невідкладно передає skargę, відповідь і akta до NSA.",
          sourceLocator: "Art. 179",
        },
      ],
      summary:
        "Норма дає іншій стороні короткий строк для odpowiedź na skargę kasacyjną і визначає подальшу передачу матеріалів до NSA.",
      rules: [
        {
          locator: "Art. 179",
          explanation:
            "Строк відповіді становить чотирнадцять днів від її doręczenie стороні, яка не подала skargi kasacyjnej.",
        },
        {
          locator: "Art. 179",
          explanation:
            "Після відповіді або завершення строку WSA передає до NSA skargę kasacyjną, відповідь і akta справи.",
        },
      ],
      legalEffect:
        "Відповідь є процесуальною можливістю заперечити касаційні доводи; пропуск строку не перетворює відповідь на нову skargę kasacyjną.",
      foreignersCase:
        "У справі про odmowa pobytu орган або інша сторона має відстежити doręczenie skargi kasacyjnej, щоб вчасно подати відповідь і викласти, чому рішення WSA слід зберегти.",
    },
    {
      provisionId: "ppsa-art-179a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 179a дозволяє WSA до передачі skargi kasacyjnej до NSA самому скасувати оскаржене wyrok або postanowienie, якщо виявлено nieważność postępowania або очевидно виправдані підстави касації, і повторно розглянути справу; на нове orzeczenie доступна skarga kasacyjna.",
          sourceLocator: "Art. 179a",
        },
      ],
      summary:
        "До передачі касаційної скарги WSA може скористатися особливим самовиправленням при nieważność або очевидно обґрунтованій касації.",
      rules: [
        {
          locator: "Art. 179a",
          explanation:
            "Самоперегляд можливий лише до передачі skargi kasacyjnej та за однією з двох названих у статті підстав.",
        },
        {
          locator: "Art. 179a",
          explanation:
            "WSA скасовує попереднє orzeczenie, за потреби вирішує zwrot kosztów postępowania kasacyjnego та розглядає справу знову.",
        },
      ],
      legalEffect:
        "Механізм може змінити ситуацію ще до розгляду NSA, але його застосування не означає автоматичного задоволення первісної skargi.",
      foreignersCase:
        "Якщо в касації щодо pobyt виявлено істотний процесуальний дефект, перевірте, чи WSA ще не передав матеріали до NSA і чи нове orzeczenie містить потрібний спосіб захисту.",
    },
    {
      provisionId: "ppsa-art-180",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 180 передбачає, що NSA на posiedzeniu niejawnym відхиляє skargę kasacyjną, якщо її мав відхилити WSA, або повертає її до WSA для усунення виявлених недоліків.",
          sourceLocator: "Art. 180",
        },
      ],
      summary:
        "NSA перевіряє попередню процесуальну реакцію WSA: може сам відхилити касацію або повернути її для усунення недоліків.",
      rules: [
        {
          locator: "Art. 180",
          explanation:
            "Якщо підстава для odrzucenie вже існувала на рівні WSA, NSA може відхилити skargę на posiedzeniu niejawnym.",
        },
        {
          locator: "Art. 180",
          explanation:
            "За виявлених braki NSA може повернути скаргу WSA, щоб їх усунути.",
        },
      ],
      legalEffect:
        "Норма розмежовує попередню перевірку допустимості та розгляд касаційних підстав по суті; сама передача до NSA не гарантує такого розгляду.",
      foreignersCase:
        "У касації іноземця щодо decyzja pobytowa з'ясуйте, чи NSA вже вирішив питання допустимості, чи лише повернув матеріали WSA для виправлення формального недоліку.",
    },
    {
      provisionId: "ppsa-art-181",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 181 встановлює, що NSA розглядає skargę kasacyjną на rozprawie у складі трьох sędziów, якщо спеціальна норма не встановлює іншого; за результатом щодо wyroku видається wyrok, а щодо postanowienia — postanowienie.",
          sourceLocator: "Art. 181 § 1–2",
        },
      ],
      summary:
        "Стаття визначає типовий склад NSA і форму його фінального orzeczenie під час касаційного розгляду.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Загальне правило — rozprawa і склад трьох sędziów; спеціальний припис може відступити від нього.",
        },
        {
          locator: "§ 2",
          explanation:
            "Вид оскарженого orzeczenie визначає вид рішення NSA: wyrok для wyroku, postanowienie для postanowienia.",
        },
      ],
      legalEffect:
        "Склад і форма рішення випливають зі статті, але вона не відповідає на питання, чи касацію задовольнять.",
      foreignersCase:
        "У матеріалах іноземця про skarga kasacyjna не плутайте postanowienie NSA про процесуальне питання з wyrokiem, яким вирішено касацію проти wyroku WSA.",
    },
    {
      provisionId: "ppsa-art-182",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 182 визначає випадки розгляду skargi kasacyjnej на posiedzeniu niejawnym: щодо окремих postanowienie WSA, після відмови від rozprawa за відсутності вимоги інших сторін, а також щодо wyroku про sprzeciw; він також встановлює склад одного або трьох sędziów.",
          sourceLocator: "Art. 182 § 1–3",
        },
      ],
      summary:
        "Норма описує винятки та умови, за яких касаційний розгляд відбувається без rozprawa, і пов'язує з ними склад суду.",
      rules: [
        {
          locator: "§ 1–2a",
          explanation:
            "Посилання на posiedzenie niejawne залежить від виду оскарженого postanowienie або wyroku та від процесуальної позиції сторін.",
        },
        {
          locator: "§ 3",
          explanation:
            "На posiedzeniu niejawnym типовий склад — один sędzia, а у випадку відмови від rozprawa з § 2 — три sędziów.",
        },
      ],
      legalEffect:
        "Відсутність rozprawa за цією статтею є передбаченим законом способом розгляду, а не сама по собі ознакою відсутності судового контролю.",
      foreignersCase:
        "Коли іноземець оскаржує sprzeciw від decyzja чи postanowienie, перевірте, чи справа підпадає під спеціальне правило Art. 182 про posiedzenie niejawne.",
    },
    {
      provisionId: "ppsa-art-182a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 182a вимагає, щоб NSA розглянув skargę kasacyjną на wyrok WSA, який відхилив sprzeciw від decyzji або sprzeciw від postanowienia, протягом тридцяти днів від її надходження.",
          sourceLocator: "Art. 182a",
        },
      ],
      summary:
        "Для касації у вузькій категорії спорів про sprzeciw закон називає тридцятиденний строк від надходження skargi до NSA.",
      rules: [
        {
          locator: "Art. 182a",
          explanation:
            "Строк прив'язаний до дня wpływu skargi kasacyjnej до NSA, а не до дня її складення чи відправлення стороною.",
        },
      ],
      legalEffect:
        "Норма встановлює строк розгляду для названої категорії; вона не змінює строку подання skargi kasacyjnej за Art. 177.",
      foreignersCase:
        "У справі іноземця про sprzeciw до decyzja про pobyt відокремте тридцятиденний строк розгляду NSA від строку, у який сама касація мала бути подана.",
    },
    {
      provisionId: "ppsa-art-183",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 183 обмежує розгляд NSA межами skargi kasacyjnej, але зобов'язує суд ex officio врахувати nieważność postępowania; стаття перелічує випадки nieważność і дозволяє сторонам навести нове uzasadnienie вже заявлених podstaw kasacyjnych.",
          sourceLocator: "Art. 183 § 1–2",
        },
      ],
      summary:
        "Касаційний суд не розглядає справу безмежно: він рухається в межах скарги, однак сам перевіряє перелічені особливо тяжкі дефекти провадження.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Нові міркування можуть пояснювати вже наведені podstawy kasacyjne; стаття не проголошує вільного додавання нових підстав.",
        },
        {
          locator: "§ 2 pkt 1–6",
          explanation:
            "Nieważność охоплює, зокрема, недопустимість судового шляху, відсутність процесуальної здатності або належного umocowanie, повторну справу, неправильний склад, позбавлення захисту та порушення компетенції NSA/WSA.",
        },
      ],
      legalEffect:
        "Виявлена nieważność може бути врахована навіть без окремого доводу, але не кожна процесуальна помилка є nieważność за цим вичерпним переліком.",
      foreignersCase:
        "В оскарженні іноземцем рішення про legalizacja pobytu відокремте нове пояснення вже заявленої підстави від нової підстави, а доступ до перекладача та участь у процесі оцінюйте за матеріалами справи.",
    },
    {
      provisionId: "ppsa-art-184",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 184 передбачає oddalenie skargi kasacyjnej, якщо вона не має виправданих podstaw або якщо оскаржене orzeczenie, попри помилкове uzasadnienie, відповідає праву.",
          sourceLocator: "Art. 184",
        },
      ],
      summary:
        "NSA відхиляє касацію, коли заявлені підстави не виправдовують її або результат рішення є законним, навіть якщо його мотивування помилкове.",
      rules: [
        {
          locator: "Art. 184",
          explanation:
            "Потрібно відрізняти помилку в uzasadnienie від помилки в самому правовому результаті: перша не обов'язково веде до скасування.",
        },
      ],
      legalEffect:
        "Oddalenie залишає оскаржене orzeczenie в силі; стаття не означає, що кожне неточне мотивування є безрезультатним для касації.",
      foreignersCase:
        "Якщо іноземець оскаржує wyrok WSA у справі про pobyt, касаційні доводи мають показати юридично значущу підставу, а не лише незгоду з формулюванням uzasadnienie.",
    },
    {
      provisionId: "ppsa-art-185",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 185 встановлює, що при задоволенні skargi kasacyjnej NSA скасовує оскаржене orzeczenie повністю або частково і передає справу для повторного розгляду суду, який його видав, або іншому суду; повторний розгляд відбувається в іншому складі.",
          sourceLocator: "Art. 185 § 1–2",
        },
      ],
      summary:
        "Типовий наслідок успішної касації — uchylenie та przekazanie справи назад для нового розгляду, а не автоматичне надання дозволу чи pobytu.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "NSA визначає обсяг скасування — повний або частковий — і суд, якому повертається справа.",
        },
        {
          locator: "§ 2",
          explanation:
            "Суд, який повторно розглядає передану справу, має діяти в іншому складі.",
        },
      ],
      legalEffect:
        "Скасування і повернення відкриває новий розгляд у межах встановленої процедури; воно саме по собі не встановлює остаточний результат адміністративної справи.",
      foreignersCase:
        "Після успішної касації у справі іноземця про pobyt очікуйте повторного судового розгляду, а не автоматичної зміни decyzja wojewody чи Szefa UdSC.",
    },
    {
      provisionId: "ppsa-art-186",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 186 зобов'язує NSA при розгляді skargi kasacyjnej скасувати також незаскаржену частину wyroku, якщо існує nieważność postępowania.",
          sourceLocator: "Art. 186",
        },
      ],
      summary:
        "Nieważność може поширити скасування NSA на частину рішення, яку сторона прямо не оскаржила.",
      rules: [
        {
          locator: "Art. 186",
          explanation:
            "Умова — саме nieważność postępowania; одного звичайного доводу про помилку в незаскарженій частині недостатньо за текстом цієї статті.",
        },
      ],
      legalEffect:
        "Норма є винятком із обмеження розгляду межами касації та може змінити обсяг uchylenie; її застосування залежить від встановлення nieważność.",
      foreignersCase:
        "Якщо рішення WSA щодо побиту містить кілька взаємопов'язаних частин, перевірте, чи заявлена або виявлена nieważność може охопити незаскаржену частину.",
    },
    {
      provisionId: "ppsa-art-187",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 187 дозволяє NSA при серйозних сумнівах щодо правового питання відкласти розгляд і передати питання складу семи sędziów; ухвала цього складу є обов'язковою в даній справі, а склад семи sędziów може перебрати справу до розгляду.",
          sourceLocator: "Art. 187 § 1–3",
        },
      ],
      summary:
        "Стаття дає NSA механізм вирішення складного правового питання розширеним складом і визначає силу такої uchwała в конкретній справі.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Передача можлива за poważne wątpliwości; прийнята uchwała пов'язує суд саме в цій справі.",
        },
        {
          locator: "§ 3",
          explanation:
            "Склад семи sędziów може сам перебрати справу для розгляду.",
        },
      ],
      legalEffect:
        "Механізм узгоджує правове питання в конкретній касації, але стаття не встановлює наперед, яке рішення буде прийнято щодо pobytu.",
      foreignersCase:
        "У повторюваній категорії спорів іноземців про доступ до sądu або побyt стежте, чи NSA передав спірне правове питання складу семи sędziów у вашій справі.",
    },
    {
      provisionId: "ppsa-art-188",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 188 дозволяє NSA, задовольняючи skargę kasacyjną та скасовуючи оскаржене orzeczenie, самому розглянути skargę, якщо визнає, що суть справи достатньо з'ясована.",
          sourceLocator: "Art. 188",
        },
      ],
      summary:
        "Замість повернення справи NSA може сам розглянути skargę, але лише коли istota sprawy достатньо з'ясована.",
      rules: [
        {
          locator: "Art. 188",
          explanation:
            "Спочатку має бути задоволена skarga kasacyjna й скасоване оскаржене orzeczenie; далі NSA оцінює достатність з'ясування суті.",
        },
      ],
      legalEffect:
        "Норма допускає безпосереднє вирішення skargi, але не перетворює кожне скасування на обов'язок NSA розглядати факти заново.",
      foreignersCase:
        "У касації іноземця про odmowa pobytu не припускайте, що NSA одразу надасть потрібний статус: це можливо лише за передумови достатньо з'ясованої суті справи.",
    },
    {
      provisionId: "ppsa-art-189",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 189 вимагає, щоб NSA postanowieniem скасував orzeczenie WSA і відхилив skargę або umorzył postępowanie, якщо skarga підлягала odrzucenie або вже існували підстави для umorzenie перед WSA.",
          sourceLocator: "Art. 189",
        },
      ],
      summary:
        "NSA може виправити ситуацію, коли WSA розглянув по суті справу, яка мала бути відхилена або припинена.",
      rules: [
        {
          locator: "Art. 189",
          explanation:
            "Перевіряється не лише правильність мотивів, а й наявність підстав для odrzucenie або umorzenie вже на стадії WSA.",
        },
        {
          locator: "Art. 189",
          explanation:
            "Наслідок оформлюється postanowienie: скасування попереднього orzeczenie разом з odrzucenie skargi або umorzenie.",
        },
      ],
      legalEffect:
        "Норма може усунути рішення по суті через процесуальну недопустимість справи; вона не є способом довести матеріальне право на pobyt.",
      foreignersCase:
        "У справі іноземця перевірте, чи спір про decyzja не був уже безпредметним або недопустимим на момент розгляду WSA, навіть якщо суд помилково перейшов до суті.",
    },
    {
      provisionId: "ppsa-art-190",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 190 пов'язує суд, якому справу передано, правовим тлумаченням, зробленим NSA у цій справі, і забороняє будувати наступну skargę kasacyjną на підставах, суперечних цьому тлумаченню.",
          sourceLocator: "Art. 190",
        },
      ],
      summary:
        "Після przekazanie справи правове тлумачення NSA стає орієнтиром, обов'язковим для суду повторного розгляду в цій справі.",
      rules: [
        {
          locator: "Art. 190",
          explanation:
            "Зв'язування стосується sprawy, яку передано; повторний суд не може ігнорувати викладене NSA тлумачення права.",
        },
        {
          locator: "Art. 190",
          explanation:
            "Наступну skargę kasacyjną не можна засновувати на доводах, що суперечать установленому в цій справі тлумаченню.",
        },
      ],
      legalEffect:
        "Стаття звужує допустимий напрям повторного розгляду, але не визначає замість WSA оцінку всіх доказів і фактів.",
      foreignersCase:
        "Після повернення справи про pobyt до WSA порівняйте нове uzasadnienie з правовим тлумаченням NSA і не будуйте наступну касацію на протилежній правовій тезі.",
    },
    {
      provisionId: "ppsa-art-191",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 191 дозволяє NSA за клопотанням сторони розглянути також ті postanowienia WSA, які не підлягали оскарженню через zażalenie, але вплинули на вирішення справи.",
          sourceLocator: "Art. 191",
        },
      ],
      summary:
        "Окремі проміжні postanowienia, які самі не оскаржуються zażalenie, можуть бути охоплені касаційною перевіркою, якщо вплинули на результат.",
      rules: [
        {
          locator: "Art. 191",
          explanation:
            "Потрібні клопотання сторони і вплив postanowienie на вирішення справи; сама незгода з проміжним актом не достатня.",
        },
      ],
      legalEffect:
        "Норма розширює предмет перевірки в конкретній касації, але не робить кожне postanowienie окремо оскаржуваним.",
      foreignersCase:
        "Якщо у справі іноземця WSA відмовив у процесуальному кроці, який не мав окремого zażalenie, поясніть у касації його реальний вплив на фінальний wyrok.",
    },
    {
      provisionId: "ppsa-art-192",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 192 встановлює, що провадження перед NSA, крім випадків з Art. 123–125, зупиняється лише за узгодженим клопотанням сторін.",
          sourceLocator: "Art. 192",
        },
      ],
      summary:
        "Для стадії NSA закон обмежує добровільне zawieszenie postępowania спільним клопотанням сторін, крім прямо названих випадків.",
      rules: [
        {
          locator: "Art. 192",
          explanation:
            "Одностороннього прохання сторони само по собі недостатньо для zawieszenie за загальним правилом статті.",
        },
        {
          locator: "Art. 123–125",
          explanation:
            "Винятки треба перевіряти окремо за названими нормами, а не виводити з цього правила автоматично.",
        },
      ],
      legalEffect:
        "Стаття визначає вузький процесуальний шлях до зупинення на стадії NSA, але не регулює всі можливі підстави zawieszenie поза її текстом.",
      foreignersCase:
        "Якщо іноземець просить не розглядати касацію до завершення іншої справи про pobyt, перевірте, чи є узгоджене клопотання всіх сторін або виняток Art. 123–125.",
    },
    {
      provisionId: "ppsa-art-193",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 193 відсилає за відсутності спеціальних правил до відповідного застосування норм провадження перед WSA, зобов'язує NSA ex officio обґрунтовувати wyroki й postanowienia протягом тридцяти днів і вимагає оцінки касаційних zarzuty в uzasadnienie wyroku про oddalenie skargi kasacyjnej.",
          sourceLocator: "Art. 193",
        },
      ],
      summary:
        "Це правило-заповнювач для стадії NSA: застосовуються відповідні правила WSA, а обґрунтування рішень має спеціальні вимоги.",
      rules: [
        {
          locator: "Art. 193",
          explanation:
            "Відсилання працює лише там, де немає спеціального правила про NSA, і є відповідним, а не механічним копіюванням.",
        },
        {
          locator: "Art. 193",
          explanation:
            "NSA сам складає uzasadnienie wyroków і postanowienia протягом тридцяти днів; у wyrok про oddalenie мають бути оцінені zarzuty.",
        },
      ],
      legalEffect:
        "Стаття допомагає визначити процедуру NSA, але спочатку треба перевірити, чи конкретне питання вже врегульоване спеціальною нормою.",
      foreignersCase:
        "Отримавши wyrok NSA у справі про побyt, іноземець може перевірити, чи uzasadnienie відповідає вимозі оцінити саме заявлені zarzuty skargi kasacyjnej.",
    },
    {
      provisionId: "ppsa-art-194",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 194 перелічує postanowienia WSA, на які доступне zażalenie до NSA, встановлює семиденний строк, вимоги до змісту та професійне представництво для zażalenie на odrzucenie skargi kasacyjnej; пункт § 1 pkt 3 прямо позначений як (uchylony).",
          sourceLocator: "Art. 194 § 1 pkt 1–10, § 2–4",
        },
      ],
      summary:
        "Стаття визначає не загальне право оскаржувати будь-яке postanowienie, а конкретний перелік випадків zażalenie до NSA. Позиція § 1 pkt 3 є скасованою — (uchylony).",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Zażalenie охоплює лише названі категорії, зокрема przekazanie справи, umorzenie, wstrzymanie виконання, окремі відмови та odrzucenie; § 1 pkt 3 — (uchylony), тобто скасований.",
        },
        {
          locator: "§ 2–4",
          explanation:
            "Строк становить сім днів від doręczenie postanowienia; скарга має назвати оскаржене postanowienie, вимогу і коротке uzasadnienie, а для odrzucenie skargi kasacyjnej діє правило про adwokat або radca prawny.",
        },
      ],
      legalEffect:
        "Спершу треба знайти конкретну категорію з § 1 і перевірити строк та форму; позначка (uchylony) не створює чинної підстави для zażalenie.",
      foreignersCase:
        "У справі іноземця про pobyt назва postanowienie сама не доводить права на zażalenie: зіставте його предмет із чинним переліком Art. 194 і врахуйте професійне представництво для odrzucenie касації.",
    },
    {
      provisionId: "ppsa-art-195",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 195 визначає передачу akt справи та zażalenie до NSA після doręczenie іншим сторонам, дозволяє відповідь безпосередньо до NSA протягом семи днів, а також дає WSA можливість самостійно скасувати postanowienie при nieważność або очевидно обґрунтованому zażalenie та umorzyć безпредметне заżaleniowe провадження до передачі akt.",
          sourceLocator: "Art. 195 § 1–3",
        },
      ],
      summary:
        "Перед передачею справи WSA забезпечує doręczenie та може сам виправити очевидну або нікчемну ситуацію; окремо врегульовано втрату предмета zażalenie.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Інші сторони отримують zażalenie, а відповідь можна подати прямо до NSA протягом семи днів від doręczenie.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "До передачі akt WSA може скасувати оскаржене postanowienie за названих підстав або umorzyć безпредметне провадження; на повторне postanowienie діють звичайні засоби.",
        },
      ],
      legalEffect:
        "Процесуальний результат може настати ще в WSA, але лише за умов, названих у статті; відповідь сторони не гарантує передачі справи з певним результатом.",
      foreignersCase:
        "Якщо в спорі іноземця про виконання postanowienie органу подано zażalenie, відстежте doręczenie іншим сторонам і можливість самовиправлення WSA до передачі akt.",
    },
    {
      provisionId: "ppsa-art-196",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 196 дозволяє WSA зупинити виконання оскарженого postanowienie до вирішення zażalenie; таке postanowienie може бути прийнято на posiedzeniu niejawnym.",
          sourceLocator: "Art. 196",
        },
      ],
      summary:
        "Поки NSA не вирішив zażalenie, WSA може тимчасово зупинити виконання оскарженого postanowienie.",
      rules: [
        {
          locator: "Art. 196",
          explanation:
            "Зупинення є можливістю WSA, а не автоматичним наслідком подання zażalenie.",
        },
        {
          locator: "Art. 196",
          explanation:
            "Питання може вирішуватися без відкритого засідання — на posiedzeniu niejawnym.",
        },
      ],
      legalEffect:
        "До окремого postanowienie про зупинення оскаржене postanowienie не вважається зупиненим лише через подання zażalenie.",
      foreignersCase:
        "Якщо виконання postanowienie може вплинути на статус або документи іноземця, у zażalenie окремо просіть WSA про wstrzymanie і не виходьте з автоматичної зупинки.",
    },
    {
      provisionId: "ppsa-art-197",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 197 передбачає розгляд zażalenie NSA на posiedzeniu niejawnym і відповідне застосування правил про skargę kasacyjną, крім Art. 185 § 2.",
          sourceLocator: "Art. 197 § 1–2",
        },
      ],
      summary:
        "Для zażalenie діє спрощена модель розгляду NSA та відсилання до касаційних правил із прямо названим винятком.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "NSA розглядає zażalenie без rozprawa — на posiedzeniu niejawnym.",
        },
        {
          locator: "§ 2",
          explanation:
            "Касаційні правила застосовуються odpowiednio; Art. 185 § 2 про інший склад при повторному розгляді виключений.",
        },
      ],
      legalEffect:
        "Відсилання не скасовує перевірку сумісності правила з природою zażalenie і не робить автоматично застосовними всі наслідки skargi kasacyjnej.",
      foreignersCase:
        "У провадженні іноземця про zażalenie на postanowienie WSA підготуйте письмові доводи, бо стаття передбачає posiedzenie niejawne, а не обов'язкову rozprawa.",
    },
    {
      provisionId: "ppsa-art-198",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 198 наказує відповідно застосовувати правила цього розділу до zażalenia на zarządzenia przewodniczącego, якщо закон передбачає подання такого zażalenie.",
          sourceLocator: "Art. 198",
        },
      ],
      summary:
        "Заżalenie на розпорядження головуючого підпорядковується правилам розділу лише тоді, коли сама ustawa відкриває такий засіб.",
      rules: [
        {
          locator: "Art. 198",
          explanation:
            "Спершу перевірте спеціальну норму, яка дозволяє зажаліти zarządzenie; без неї відсилання не створює права на zażalenie.",
        },
        {
          locator: "Art. 198",
          explanation:
            "Після встановлення права на засіб правила розділу застосовуються відповідно, з урахуванням характеру zarządzenie.",
        },
      ],
      legalEffect:
        "Стаття є відсилочною і не перетворює кожне zarządzenie на окремо оскаржуване.",
      foreignersCase:
        "Якщо іноземець не погоджується з zarządzenie przewodniczącego у справі про pobyt, спочатку знайдіть у PPSA спеціальну підставу для zażalenie, а не подавайте його автоматично.",
    },
    {
      provisionId: "ppsa-art-199",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 199 встановлює загальне правило, за яким сторони несуть koszty postępowania, пов'язані з їх участю у справі, якщо спеціальна норма не передбачає іншого.",
          sourceLocator: "Art. 199",
        },
      ],
      summary:
        "Витрати за замовчуванням пов'язані з участю конкретної сторони; виняток можливий лише за спеціальним приписом.",
      rules: [
        {
          locator: "Art. 199",
          explanation:
            "Для планування справи відокремлюйте власні витрати від можливого zwrot kosztów за іншими статтями.",
        },
      ],
      legalEffect:
        "Сам факт виграшу чи програшу не змінює автоматично всі витрати: треба перевірити спеціальні правила про їх zwrot.",
      foreignersCase:
        "Іноземцю, який оскаржує decyzja про pobyt, варто заздалегідь врахувати власні opłaty, переклад і представництво незалежно від подальшого рішення суду.",
    },
    {
      provisionId: "ppsa-art-200",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 200 надає skarżącemu право на zwrot необхідних kosztów від органу, якщо суд першої інстанції задовольнив skargę щодо оскарженого акта, czynność, bezczynność або przewlekłe prowadzenie postępowania.",
          sourceLocator: "Art. 200",
        },
      ],
      summary:
        "Коли суд першої інстанції задовольняє skargę, закон передбачає повернення необхідних витрат від органу, пов'язаних із цілеспрямованим захистом права.",
      rules: [
        {
          locator: "Art. 200",
          explanation:
            "Норма охоплює не лише акт чи czynność, а й bezczynność та przewlekłość органу.",
        },
        {
          locator: "Art. 200",
          explanation:
            "Йдеться про koszty необхідні для celowe dochodzenie praw, тому склад і розмір треба обґрунтувати окремо.",
        },
      ],
      legalEffect:
        "Задоволення skargi створює підставу для вимоги про zwrot, але не означає автоматичного відшкодування кожної понесеної суми.",
      foreignersCase:
        "Якщо WSA задовольнив skargę іноземця на бездіяльність у справі про pobyt, зберігайте підтвердження необхідних витрат і заявіть вимогу про їх zwrot у належний момент.",
    },
    {
      provisionId: "ppsa-art-201",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 201 передбачає zwrot kosztów skarżącemu від органу також при umorzenie через Art. 54 § 3; при umorzenie у випадку Art. 118 § 2 наказує відповідно застосувати Art. 206.",
          sourceLocator: "Art. 201 § 1–2",
        },
      ],
      summary:
        "Навіть без фінального розгляду skargi по суті окремі види umorzenie можуть мати наслідок щодо zwrot kosztów.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спеціальна підстава — umorzenie з причини Art. 54 § 3; її треба відрізняти від інших способів припинення.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для випадку Art. 118 § 2 результат щодо витрат визначається через відповідне застосування Art. 206.",
        },
      ],
      legalEffect:
        "Umorzenie не дає однакового результату в кожній справі: вирішальними є конкретна законна підстава та правила про витрати.",
      foreignersCase:
        "Якщо орган змінив свою позицію у справі іноземця про pobyt і провадження припинили, встановіть точну підставу umorzenie перед вимогою про zwrot kosztów.",
    },
    {
      provisionId: "ppsa-art-202",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 202 регулює zwrot kosztów, коли на стороні skarżąca є кілька uprawnionych: кожен отримує його відповідно до участі, а за спільних прав або обов'язків щодо предмета оскарження zwrot належить їм solidarnie.",
          sourceLocator: "Art. 202 § 1–2",
        },
      ],
      summary:
        "Норма розрізняє індивідуальну участь кількох скаржників і спільні права чи обов'язки, пов'язані з предметом skarga.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "За окремої участі кожного skarżący розмір zwrot визначається відповідно до його udział у справі.",
        },
        {
          locator: "§ 2",
          explanation:
            "Коли права або обов'язки спільні, zwrot має характер solidarność.",
        },
      ],
      legalEffect:
        "Розподіл витрат залежить від процесуального зв'язку між скаржниками, а не лише від кількості осіб у заголовку skarga.",
      foreignersCase:
        "Якщо кілька членів родини-іноземців разом оскаржують пов'язані decyzje про pobyt, визначте, чи їхні права є спільними для правила про solidarny zwrot.",
    },
    {
      provisionId: "ppsa-art-203",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 203 визначає право сторони, яка подала skargę kasacyjną, вимагати zwrot kosztów від органу, коли внаслідок задоволення касації NSA скасовано wyrok WSA і справу передано на повторний розгляд.",
          sourceLocator: "Art. 203",
        },
      ],
      summary:
        "Успішна skarga kasacyjna з uchylenie wyroku і przekazanie справи може відкрити окреме право на повернення касаційних витрат.",
      rules: [
        {
          locator: "Art. 203",
          explanation:
            "Потрібні саме задоволення skargi kasacyjnej NSA, скасування wyroku WSA і передача справи для повторного розгляду.",
        },
      ],
      legalEffect:
        "Наслідок щодо kosztów прив'язаний до результату касації, а не просто до факту її подання; конкретний обсяг витрат визначається іншими нормами.",
      foreignersCase:
        "Після скасування wyroku WSA у справі іноземця про pobyt перевірте, чи його касаційний результат відповідає умовам Art. 203 для zwrot kosztów.",
    },
    {
      provisionId: "ppsa-art-204",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 204 покладає на сторону, чию skargę kasacyjną відхилено NSA, обов'язок повернути органу понесені ним koszty postępowania kasacyjnego; якщо касацію подав орган, він повертає витрати протилежній стороні.",
          sourceLocator: "Art. 204",
        },
      ],
      summary:
        "Стаття пов'язує oddalenie skargi kasacyjnej з можливим обов'язком компенсувати іншій стороні її касаційні витрати.",
      rules: [
        {
          locator: "Art. 204",
          explanation:
            "Коли касацію подала сторона і її відхилено, витрати органу відшкодовує ця сторона.",
        },
        {
          locator: "Art. 204",
          explanation:
            "Коли касацію подавав орган, за названої умови він відшкодовує касаційні витрати протилежної сторони.",
        },
      ],
      legalEffect:
        "Відхилення касації може мати фінансовий наслідок, але стаття не встановлює автоматично розмір витрат без їх належного визначення.",
      foreignersCase:
        "Іноземцю, який вирішує подавати касацію у справі про odmowa pobytu, потрібно врахувати можливий zwrot kosztów органу при oddalenie.",
    },
    {
      provisionId: "ppsa-art-205",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 205 визначає, які витрати є необхідними: зокрема винагорода та витрати професійного pełnomocnik у межах правил, а для сторони без такого представника — судові витрати, проїзд до суду і еквівалент втраченого заробітку в межах, передбачених статтею.",
          sourceLocator: "Art. 205 § 1–5",
        },
      ],
      summary:
        "Стаття формує рамку для розрахунку необхідних kosztów залежно від того, чи сторону представляє adwokat, radca prawny, doradca podatkowy, rzecznik patentowy або інша особа.",
      rules: [
        {
          locator: "Art. 205 § 1–3",
          explanation:
            "До різних видів представництва та особистої участі застосовуються різні категорії необхідних витрат; розмір не випливає лише з поданої квитанції.",
        },
        {
          locator: "Art. 205 § 4–5",
          explanation:
            "Винагорода й витрати pełnomocnik визначаються за правилами статті та окремими приписами, з урахуванням меж і вимог до їх призначення.",
        },
      ],
      legalEffect:
        "Норма обмежує вимогу про zwrot категоріями необхідних витрат; вона не гарантує відшкодування кожної фактичної витрати на переклад чи консультацію.",
      foreignersCase:
        "Іноземцю у справі про pobyt варто окремо підтверджувати судові opłaty, професійну допомогу та необхідні переклади, не змішуючи їх автоматично в одну суму zwrot.",
    },
    {
      provisionId: "ppsa-art-206",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 206 дозволяє суду в uzasadnione przypadki odstąpić від присудження zwrot kosztów postępowania повністю або частково.",
          sourceLocator: "Art. 206",
        },
      ],
      summary:
        "Навіть за наявності загальної підстави для розподілу витрат суд може в обґрунтованій ситуації не присудити їх повністю або частково.",
      rules: [
        {
          locator: "Art. 206",
          explanation:
            "Це дискреційна можливість суду, а не автоматичний результат кожного спору про koszty.",
        },
      ],
      legalEffect:
        "Посилання на Art. 206 не означає наперед ні повного zwrot, ні його відсутності; значення мають обставини конкретної справи та мотивування суду.",
      foreignersCase:
        "У справі іноземця про pobyt навіть виграш skargi не дозволяє точно обіцяти повний zwrot kosztów, якщо суд застосує Art. 206.",
    },
    {
      provisionId: "ppsa-art-207",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 207 регулює розподіл kosztów при частковому uwzględnieniu skargi та допускає в uzasadnione przypadki присудження або відмову від zwrot залежно від перебігу процесу, зокрема невиконанням skarżący обов'язку, названого в статті.",
          sourceLocator: "Art. 207 § 1–2",
        },
      ],
      summary:
        "Частковий виграш не дає простого правила «усі витрати переможцю»: суд може розподілити їх частково або інакше за умов статті.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "За часткового задоволення skargi суд може в обґрунтованих випадках присудити частину витрат або повний zwrot.",
        },
        {
          locator: "§ 2",
          explanation:
            "Суд може врахувати названі статтею процесуальні обставини й відступити від звичайного розподілу навіть при uwzględnieniu skargi.",
        },
      ],
      legalEffect:
        "Фінансовий результат залежить від обсягу задоволення та мотивованої оцінки суду; часткове скасування рішення не дорівнює автоматичній пропорції.",
      foreignersCase:
        "Якщо skarga іноземця щодо pobyt задоволена лише частково, зіставте кожну вимогу й процесуальну поведінку з мотивами WSA перед розрахунком очікуваного zwrot.",
    },
    {
      provisionId: "ppsa-art-208",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 208 визначає застосування правил про koszty до випадку umorzenie postępowania та вимагає враховувати підставу, з якої провадження було припинено.",
          sourceLocator: "Art. 208",
        },
      ],
      summary:
        "При припиненні судового провадження питання витрат не вирішується лише за словом umorzenie: треба встановити конкретну процесуальну підставу і відповідне правило розділу.",
      rules: [
        {
          locator: "Art. 208",
          explanation:
            "Спочатку ідентифікуйте причину umorzenie у postanowienie, потім визначайте наслідки щодо kosztów за пов'язаними нормами.",
        },
      ],
      legalEffect:
        "Стаття не дає універсальної суми чи автоматичного zwrot для всіх видів umorzenie; результат потребує читання разом із названою підставою припинення.",
      foreignersCase:
        "Якщо суд припинив справу іноземця про pobyt після зміни decyzja органом, не оцінюйте zwrot kosztów без точного посилання на підставу umorzenie.",
    },
    {
      provisionId: "ppsa-art-209",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 209 зобов'язує суд вирішувати питання про zwrot kosztów postępowania в кожному orzeczenie, яке закінчує справу в інстанції.",
          sourceLocator: "Art. 209",
        },
      ],
      summary:
        "Фінальне orzeczenie в інстанції має охоплювати питання про повернення процесуальних витрат, якщо для нього є підстава.",
      rules: [
        {
          locator: "Art. 209",
          explanation:
            "Перевіряйте резолютивну частину кожного orzeczenie, що завершує інстанцію, окремо від мотивів щодо основного спору.",
        },
      ],
      legalEffect:
        "Норма визначає момент вирішення про koszty, але не замінює спеціальні умови права на zwrot і вимоги до заявлення.",
      foreignersCase:
        "Отримавши wyrok WSA у справі іноземця про pobyt, перевірте його окрему частину про koszty, а не припускайте, що питання вирішиться пізніше органом.",
    },
    {
      provisionId: "ppsa-art-210",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 210 передбачає втрату права вимагати zwrot kosztów, якщо сторона не подала wniosek про присудження належних витрат не пізніше закриття rozprawa, що безпосередньо передує ухваленню orzeczenie.",
          sourceLocator: "Art. 210 § 1–2",
        },
      ],
      summary:
        "Вимога про повернення витрат має бути заявлена вчасно; стаття прив'язує наслідок пропуску до моменту перед закриттям відповідної rozprawa.",
      rules: [
        {
          locator: "Art. 210 § 1",
          explanation:
            "Кінцевий момент — закриття rozprawa, що безпосередньо передує orzeczenie; пізніше поданий wniosek може бути запізнілим.",
        },
        {
          locator: "Art. 210 § 2",
          explanation:
            "Застосування правила потребує перевірки винятку або спеціальної ситуації, передбаченої другим параграфом.",
        },
      ],
      legalEffect:
        "Пропуск моменту для wniosek може позбавити права вимагати zwrot, тому його не слід відкладати до після отримання wyrok.",
      foreignersCase:
        "Представник іноземця має заявити wniosek про zwrot kosztów у справі про pobyt до закриття відповідної rozprawa, навіть якщо розмір витрат ще потрібно чітко обґрунтувати.",
    },
    {
      provisionId: "ppsa-art-211",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 211 визначає, що koszty sądowe складаються з opłaty sądowe та zwrot wydatków.",
          sourceLocator: "Art. 211",
        },
      ],
      summary:
        "Судові витрати мають дві законні частини: opłaty sądowe та повернення wydatki.",
      rules: [
        {
          locator: "Art. 211",
          explanation:
            "У розрахунку не змішуйте opłata sądowa з wydatki: це різні складові koszty sądowe.",
        },
      ],
      legalEffect:
        "Стаття дає базову класифікацію витрат, але не визначає для конкретної skarga ні ставку, ні право на звільнення.",
      foreignersCase:
        "У справі іноземця про legalizacja pobytu складіть окремий список opłata за skarga та документально підтверджених wydatki, пов'язаних із судом.",
    },
    {
      provisionId: "ppsa-art-212",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 212 називає opłaty sądowe: це wpis і opłata kancelaryjna.",
          sourceLocator: "Art. 212",
        },
      ],
      summary:
        "У межах судових платежів закон розрізняє wpis та opłata kancelaryjna.",
      rules: [
        {
          locator: "Art. 212",
          explanation:
            "Визначте, чи конкретна вимога суду є wpis за подання або opłata kancelaryjna за канцелярську дію.",
        },
      ],
      legalEffect:
        "Класифікація важлива для подальшої ставки й строку сплати, але сама стаття їх не встановлює.",
      foreignersCase:
        "Іноземцю, який подає skargę на decyzja pobytowa, не слід називати будь-який платіж «вписом» без перевірки, чи це wpis або opłata kancelaryjna.",
    },
    {
      provisionId: "ppsa-art-213",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 213 покладає обов'язок сплатити koszty sądowe на сторону, яка подає до суду письмо, що підлягає оплаті або спричиняє wydatki, якщо ustawa не встановлює іншого.",
          sourceLocator: "Art. 213",
        },
      ],
      summary:
        "Відправною точкою є сторона, яка подає платне письмо або спричиняє витрати, але спеціальний закон може змінити це правило.",
      rules: [
        {
          locator: "Art. 213",
          explanation:
            "Перед поданням визначте, чи письмо підлягає opłata або викликає wydatki, і перевірте можливий спеціальний виняток.",
        },
      ],
      legalEffect:
        "Обов'язок не означає, що сторона неодмінно платить остаточно: питання zwolnienie та повернення регулюються іншими нормами.",
      foreignersCase:
        "Коли іноземець подає skargę на decyzja про pobyt, спочатку визначте платника за Art. 213, а потім перевірте право на prawo pomocy або інше звільнення.",
    },
    {
      provisionId: "ppsa-art-214",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 214 визначає обов'язок uiszczenie kosztów sądowych при поданні письма до sąd, якщо для нього передбачено opłata або воно спричиняє wydatki, з урахуванням спеціальних правил ustawa.",
          sourceLocator: "Art. 214",
        },
      ],
      summary:
        "Норма пов'язує сплату з конкретною процесуальною дією — внесенням платного або витратного письма до суду.",
      rules: [
        {
          locator: "Art. 214",
          explanation:
            "Оцінюйте обов'язок саме на момент wniesienie pisma та не відривайте його від винятків, які може містити ustawa.",
        },
      ],
      legalEffect:
        "Стаття не визначає розмір платежу і не скасовує можливі механізми zwolnienie; вона окреслює момент і зв'язок обов'язку.",
      foreignersCase:
        "Перед поданням іноземцем skarga у справі про pobyt перевірте, який документ є wszczynające pismo і чи саме на нього припадає обов'язок uiszczenie.",
    },
    {
      provisionId: "ppsa-art-215",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 215 передбачає pobieranie wpis від pism, які розпочинають postępowanie перед sąd administracyjny у відповідній інстанції.",
          sourceLocator: "Art. 215",
        },
      ],
      summary:
        "Wpis пов'язаний із письмом, що відкриває провадження в конкретній інстанції, а не з кожним листом у вже відкритій справі.",
      rules: [
        {
          locator: "Art. 215",
          explanation:
            "Визначте інстанцію та чи є письмо wszczynające postępowanie; від цього залежить застосування правила про wpis.",
        },
      ],
      legalEffect:
        "Стаття встановлює предмет, з якого pobieraється wpis, але не відповідає сама на питання про його вид або ставку.",
      foreignersCase:
        "Іноземець, який оскаржує decyzja про pobyt у WSA, має відрізнити skargę, що відкриває інстанцію, від наступного письма, яке не обов'язково має той самий wpis.",
    },
    {
      provisionId: "ppsa-art-216",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 216 розмежовує спосіб визначення wpis залежно від предмета оскарження, зокрема передбачає застосування правил про wpis stały або wpis stosunkowy у випадках, встановлених законом.",
          sourceLocator: "Art. 216",
        },
      ],
      summary:
        "Вид wpis залежить від законної категорії предмета спору; для фінансового розрахунку потрібен текст відповідної норми та ставки.",
      rules: [
        {
          locator: "Art. 216",
          explanation:
            "Не визначайте тип wpis лише за назвою рішення: зіставте предмет skarga з категорією, передбаченою законом.",
        },
      ],
      legalEffect:
        "Норма задає рамку класифікації платежу, але не гарантує конкретної суми без перевірки спеціального тарифу.",
      foreignersCase:
        "У спорі іноземця про odmowa pobytu опишіть предмет skarga перед вибором wpis stały чи stosunkowy, а не виходьте з вартості особистих наслідків рішення.",
    },
    {
      provisionId: "ppsa-art-217",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 217 пов'язує opłata kancelaryjna з видачею або виконанням канцелярських дій суду в провадженні, для яких закон передбачає таку оплату.",
          sourceLocator: "Art. 217",
        },
      ],
      summary:
        "Opłata kancelaryjna стосується не самого відкриття справи, а визначеної канцелярської дії або документа суду.",
      rules: [
        {
          locator: "Art. 217",
          explanation:
            "Перед оплатою встановіть, яка саме czynność kancelaryjna була замовлена та чи охоплена вона законом.",
        },
      ],
      legalEffect:
        "Саме прохання про копію чи інший документ не дозволяє без перевірки визначити суму opłata kancelaryjna.",
      foreignersCase:
        "Якщо іноземцю потрібна копія orzeczenie або матеріалів справи про pobyt, уточніть, чи запит є czynność, за яку Art. 217 допускає opłata kancelaryjna.",
    },
    {
      provisionId: "ppsa-art-218",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 218 встановлює правила справляння opłata kancelaryjna за документи та інші канцелярські дії, передбачені законом, і визначає, що її розмір випливає з відповідних приписів про судові платежі.",
          sourceLocator: "Art. 218",
        },
      ],
      summary:
        "Стаття уточнює режим opłata kancelaryjna: її виникнення та розмір залежать від визначеної законом канцелярської дії.",
      rules: [
        {
          locator: "Art. 218",
          explanation:
            "Відокремте факт отримання документа від питання, чи закон передбачає за це оплату і в якому розмірі.",
        },
      ],
      legalEffect:
        "Норма не створює загальної плати за будь-який контакт із судом; потрібна конкретна передбачена дія та застосовний тариф.",
      foreignersCase:
        "У справі іноземця про pobyt перевірте підставу opłata kancelaryjna перед замовленням копій, особливо якщо документи потрібні для іншого органу.",
    },
    {
      provisionId: "ppsa-art-219",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 219 вимагає uiszczenie należna opłata при внесенні до суду письма, що підлягає оплаті, і передбачає підтвердження сплати відповідно до правил судових платежів.",
          sourceLocator: "Art. 219",
        },
      ],
      summary:
        "Оплату треба організувати разом із поданням платного письма та мати підтвердження, яке дозволяє суду перевірити uiszczenie.",
      rules: [
        {
          locator: "Art. 219",
          explanation:
            "Перевірте платіж до або одночасно з wniesienie pisma; не покладайтеся на те, що підтвердження можна буде додати без наслідків.",
        },
      ],
      legalEffect:
        "Наслідки відсутності або неправильності платежу залежать від наступного wezwanie та правил Art. 220, тому факт відправлення skarga не дорівнює належній оплаті.",
      foreignersCase:
        "Перед поданням skarga іноземця на рішення про pobyt перевірте реквізити wpis і додайте доказ uiszczenie, зберігши дату та підтвердження платежу.",
    },
    {
      provisionId: "ppsa-art-220",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 220 забороняє суду вчиняти дію за неоплаченим належним чином письмом і передбачає wezwanie сплатити належну суму в семиденний строк під rygor, визначений статтею; окремі випадки відхилення письма можуть наставати без wezwanie.",
          sourceLocator: "Art. 220 § 1–3",
        },
      ],
      summary:
        "Належна оплата є умовою руху платного письма: зазвичай суд дає коротке wezwanie, але стаття містить і спеціальні наслідки.",
      rules: [
        {
          locator: "Art. 220 § 1–2",
          explanation:
            "При виявленій недоплаті або відсутності оплати відстежуйте семиденний строк у wezwanie та його rygor.",
        },
        {
          locator: "Art. 220 § 3",
          explanation:
            "Для передбачених статтею видів письма наслідок може настати без окремого wezwanie; вид документа треба встановити точно.",
        },
      ],
      legalEffect:
        "Пропущений строк оплати може заблокувати розгляд або спричинити odrzucenie письма; подання клопотання про zwolnienie потребує окремої перевірки.",
      foreignersCase:
        "Якщо іноземець отримав wezwanie про wpis у справі pobyt, зафіксуйте дату doręczenie і сім днів, бо мовний бар'єр не скасовує зазначений у wezwanie rygor.",
    },
    {
      provisionId: "ppsa-art-221",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 221 передбачає, що письмо, внесене adwokat, radca prawny, doradca podatkowy або rzecznik patentowy і не оплачене належним чином, відхиляється без wezwanie про сплату, якщо для нього встановлено wpis stały.",
          sourceLocator: "Art. 221",
        },
      ],
      summary:
        "Для професійно підписаного письма зі stały wpis не можна розраховувати на звичайне wezwanie про доплату.",
      rules: [
        {
          locator: "Art. 221",
          explanation:
            "Перевірте одночасно особу професійного pełnomocnik і те, що opłata є stały; лише тоді працює спеціальне правило.",
        },
      ],
      legalEffect:
        "Неналежна оплата в названій ситуації може вести до odrzucenie без попередження, тому помилку в платежі не слід виправляти із запізненням.",
      foreignersCase:
        "Якщо skargę іноземця про pobyt подає radca prawny або adwokat, платіж має бути перевірений до подання: для stały wpis Art. 221 не обіцяє wezwanie.",
    },
    {
      provisionId: "ppsa-art-222",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 222 встановлює спеціальне правило щодо судового платежу за письмо, яке не підлягає розгляду без належного uiszczenie, і пов'язує подальшу дію суду з вимогами про opłata та їх виконанням.",
          sourceLocator: "Art. 222",
        },
      ],
      summary:
        "Остання норма цього блоку завершує правила про судові платежі: перед процесуальною дією треба перевірити належне uiszczenie та спеціальний наслідок для відповідного письма.",
      rules: [
        {
          locator: "Art. 222",
          explanation:
            "Зіставляйте предмет письма, вид opłata і передбачений законом процесуальний наслідок, не переносячи правило Art. 220 автоматично на кожен випадок.",
        },
      ],
      legalEffect:
        "Стаття не доводить сама по собі, що конкретна skarga буде прийнята або відхилена: потрібна перевірка виду письма, платежу та можливого zwolnienie.",
      foreignersCase:
        "У справі іноземця про pobyt перед відправленням письма до sąd перевірте, чи Art. 222 разом із правилами про wpis встановлює спеціальну вимогу, щоб справа не зупинилася на платежі.",
    },
  ],
})
