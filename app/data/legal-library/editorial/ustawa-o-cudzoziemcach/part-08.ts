import { createLegalTextAuthor } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const EES_2017_2226_URL = "https://eur-lex.europa.eu/eli/reg/2017/2226/oj"

export const foreignersActPart08 =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
      {
        provisionId: "ustawa-o-cudzoziemcach-art-239",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("239", "Art. 239")} передає міністру właściwemu do spraw wewnętrznych, за погодженням з міністром właściwym do spraw finansów publicznych, визначення в drodze rozporządzenia розміру opłat у Польщі за wydanie і wymianę karty pobytu, polskiego dokumentu podróży dla cudzoziemca, polskiego dokumentu tożsamości cudzoziemca та документа «zgoda na pobyt tolerowany», за wydanie tymczasowego polskiego dokumentu podróży dla cudzoziemca, порядку сплати цих opłat і документів для ulg за ${foreignersLaw.article("237", "Art. 237")} ust. 1.`,
            sourceLocator: "Art. 239 ust. 1 pkt 1–3",
          },
          {
            kind: "statute-text",
            text: "Для розміру opłat minister має врахувати одиничні витрати виготовлення, видачі або обміну названих документів, зокрема pobranie і przetwarzanie даних, а підвищення opłat за zawinioną utratę або zniszczenie — диференціювати залежно від кількості таких подій.",
            sourceLocator: "Art. 239 ust. 1 pkt 4, ust. 2 pkt 1–2",
          },
        ],
        summary:
          "Стаття делегує визначення розміру і порядку сплати opłat за названі документи, документів для ulg та підвищених opłat за їхню винну втрату або знищення.",
        rules: [
          {
            locator: "ust. 1 pkt 1–4",
            explanation:
              "Перевіряйте чинне rozporządzenie: воно встановлює суми за wydanie або wymianę названих документів, порядок сплати, документи для ulg і суму за zawinioną utratę чи zniszczenie; tymczasowy dokument названий у pkt 1 лише щодо wydania.",
          },
          {
            locator: "ust. 2 pkt 1–2",
            explanation:
              "У rozporządzeniu враховують unit costs, зокрема збирання і оброблення даних, та диференціюють opłaty за wymianę після винної втрати або знищення залежно від кількості подій.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("239", "Art. 239")} не встановлює конкретних сум: він є делегуючою підставою для rozporządzenie. Застосовну суму і документи для ulgi треба звірити з чинним актом та фактичним видом операції; для tymczasowy документа стаття передбачає opłata за wydanie, не за wymianę.`,
        foreignersCase:
          "Перед оплатою визначте вид документа й операцію (wydanie чи wymiana), перевірте чинне rozporządzenie, підставу для ulgi та чи є zawiniona utrata або zniszczenie. Збережіть квитанцію і документи, що підтверджують ulgę.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-240",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Kartę pobytu видають іноземцю, якому надано zezwolenie na pobyt czasowy, zezwolenie na pobyt stały, zezwolenie na pobyt rezydenta długoterminowego UE або zgodę na pobyt ze względów humanitarnych.",
            sourceLocator: "Art. 240 pkt 1–4",
          },
        ],
        summary:
          "Стаття пов’язує видачу karty pobytu з чотирма прямо названими видами дозволу або згоди на перебування.",
        rules: [
          {
            locator: "pkt 1–4",
            explanation:
              "Спочатку визначте вид наданого права на pobyt; саме він показує, чи передбачає стаття kartę pobytu.",
          },
        ],
        legalEffect:
          "Норма визначає підстави для документа, але не замінює рішення про надання дозволу чи згоди й не встановлює строку дії картки.",
        foreignersCase:
          "У справі перевірте остаточне рішення та його вид, а потім окремо подайте або відстежте процедуру wydania karty pobytu. Не ототожнюйте картку з самим дозволом.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-241",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Kartę pobytu wymienia się у разі зміни даних у чинній картці, зміни wizerunku twarzy настільки, що ідентифікація власника ускладнена або неможлива, utraty чи uszkodzenia, а також у випадках переходу відповідальності за ochronę międzynarodową: для картки, виданої у зв’язку з zezwoleniem na pobyt rezydenta długoterminowego UE, та для картки за zezwolenie з ${foreignersLaw.article("127", "Art. 127")} або ${foreignersLaw.article("137a", "Art. 137a")} з відповідними adnotacje.`,
            sourceLocator: "Art. 241 pkt 1–7",
          },
        ],
        summary:
          "Стаття називає звичайні підстави wymiany karty pobytu та спеціальні випадки зміни відповідальності за ochronę międzynarodową.",
        rules: [
          {
            locator: "pkt 1–4",
            explanation:
              "Зміна даних, проблеми з ідентифікацією за фото, utrata або uszkodzenie є самостійними підставами для wymiany.",
          },
          {
            locator: "pkt 5–7",
            explanation: foreignersLaw.text`Pkt 5 стосується переходу відповідальності до RP за ochronę międzynarodową власника картки DLR UE з adnotacją за ${foreignersLaw.article("244", "Art. 244")} ust. 1 pkt 18; pkt 6 — переходу відповідальності до іншої держави-члена ЄС; pkt 7 — переходу відповідальності до RP для картки за ${foreignersLaw.article("127", "Art. 127")} або ${foreignersLaw.article("137a", "Art. 137a")} з adnotacją за ${foreignersLaw.article("244", "Art. 244")} ust. 1 pkt 10 lit. a.`,
          },
        ],
        legalEffect: foreignersLaw.text`Наявність однієї з обставин ${foreignersLaw.article("241", "Art. 241")} створює підставу для wymiany документа, але не змінює сама по собі рішення про zezwolenie; орган і процедуру визначають, зокрема, ${foreignersLaw.article("245", "Art. 245")} та наступні норми.`,
        foreignersCase:
          "Порівняйте актуальні дані та wizerunek twarzy з kartą pobytu. Якщо відповідальність за ochronę międzynarodową перейшла між державами або змінилася підстава Blue Card, перевірте pkt 5–7 і подайте wniosek o wymianę до właściwego organu; при utrata одразу зробіть zgłoszenie.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-242",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "У період чинності karta pobytu підтверджує tożsamość іноземця під час перебування в Польщі та разом із dokumentem podróży дає право багаторазово перетинати кордон без отримання wizy.",
            sourceLocator: "Art. 242",
          },
          {
            kind: "practical-inference",
            text: "Для поїздки за кордон треба мати обидва документи й окремо перевірити чинність підстави перебування та правила в’їзду.",
            sourceLocator: "Art. 242",
          },
        ],
        summary:
          "Чинна karta pobytu є документом ідентифікації та, разом із документом подорожі, пов’язана з багаторазовим перетином кордону без окремої візи.",
        rules: [
          {
            locator: "zdanie 1",
            explanation:
              "Картка підтверджує особу лише протягом строку її чинності.",
          },
          {
            locator: "zdanie 2",
            explanation:
              "Для перетину кордону потрібні karta pobytu і dokument podróży; сама картка не є документом подорожі.",
          },
        ],
        legalEffect:
          "Стаття визначає доказове та прикордонне значення картки, але не гарантує в’їзд за відсутності інших умов або чинного документа подорожі.",
        foreignersCase:
          "Перед виїздом зіставте строк дії karty pobytu, документа подорожі та дозволу. На кордоні пред’являйте їх разом і не робіть висновок про право на працю лише з наявності картки.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-243",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Karta pobytu, видана у зв’язку з zezwoleniem na pobyt czasowy, чинна протягом строку цього дозволу; картка при pobycie stałym чинна 10 років, при pobycie rezydenta długoterminowego UE — 5 років, а при zgodzie humanitarnej — 2 роки.",
            sourceLocator: "Art. 243 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Наступна karta pobytu після спливу строку картки для pobytu stałego, rezydenta długoterminowego UE або zgody humanitarnej має відповідно строк 10, 5 або 2 роки від дня видачі.",
            sourceLocator: "Art. 243 ust. 2",
          },
        ],
        summary:
          "Стаття встановлює строк чинності karty pobytu залежно від виду підстави перебування.",
        rules: [
          {
            locator: "ust. 1 pkt 1–4",
            explanation:
              "Для pobytu czasowego строк картки слідує за дозволом, а для трьох інших підстав закон називає фіксовані строки.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Наступна картка для pobytu stałego, rezydenta długoterminowego UE або zgody humanitarnej знову має відповідний фіксований строк.",
          },
        ],
        legalEffect:
          "Строк на картці не можна визначати лише за датою рішення: він залежить від виду права та, для pobytu czasowego, від строку дозволу.",
        foreignersCase:
          "Звірте дату кінця дозволу з датою кінця картки. Якщо картка для stałego pobytu або rezydenta UE закінчується, готуйте wniosek про наступну картку, не плутаючи це з новою заявою на дозвіл.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-244",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "У karcie pobytu розміщують дані особи, народження, meldunku, громадянства, статі, зросту, кольору очей і PESEL (якщо його надано), інформацію про вид zezwolenia, odciski, орган, дати та фотографію. Залежно від підстави додають adnotacje «naukowiec», «naukowiec – mobilność», «student», «stażysta», «wolontariusz», «Niebieska Karta UE», «dostęp do rynku pracy», «ICT», «mobile ICT», «Były posiadacz Niebieskiej Karty UE», «praca sezonowa», а також спеціальні adnotacje про ochronę międzynarodową і Art. 50 TUE / Art. 18 ust. 4 Umowy Wystąpienia.",
            sourceLocator: "Art. 244 ust. 1 pkt 1–19",
          },
          {
            kind: "statute-text",
            text: "Картка може містити підпис іноземця і закодований запис даних з ust. 1 pkt 1, 2, 4, 5 або 16; відбитки не вміщують, якщо їх фізично неможливо зняти, а дані про адресу не вміщують, якщо іноземець не замельдувався в місці pobyt czasowy понад 2 місяці.",
            sourceLocator: "Art. 244 ust. 2–4",
          },
        ],
        summary:
          "Стаття визначає обов’язкові дані й adnotacje karty pobytu та окремі правила про підпис, закодовані дані, відбитки й адресу meldunku.",
        rules: [
          {
            locator: "ust. 1 pkt 8–12a",
            explanation:
              "Вид zezwolenia визначає adnotacje: для Blue Card і мобільності, naukowiec, student, stażysta, wolontariusz, ICT, mobile ICT, колишнього Blue Card та praca sezonowa діють саме умови, названі у відповідних пунктах; «dostęp do rynku pracy» ставлять лише за наявності права на роботу або звільнення від work permit.",
          },
          {
            locator: "ust. 1 pkt 13–19",
            explanation:
              "Odciski, organ wydający, дати, fotografia та adnotacje про ochronę międzynarodową або Art. 50 TUE / Art. 18 ust. 4 Umowy Wystąpienia допомагають звірити зміст картки з підставою видачі.",
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Перевірте, чи відсутність адреси або відбитків пояснюється винятком, прямо передбаченим статтею.",
          },
        ],
        legalEffect:
          "Зміст karty pobytu стандартизований і відображає визначені законом дані та adnotacje. Сам напис, зокрема «dostęp do rynku pracy», не замінює перевірки рішення і фактичних умов відповідного права.",
        foreignersCase:
          "Після отримання картки звірте imię i nazwisko, дані народження, PESEL за наявності, meldunek, вид zezwolenia, adnotacje, odciski, фотографію та дати. Помилку не виправляйте самостійно — повідомте орган і з’ясуйте порядок wymiany.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-245",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Kartę pobytu видає або відмовляє у видачі wojewoda, який надав zezwolenie na pobyt czasowy, stały або rezydenta długoterminowego UE, а для zgody na pobyt ze względów humanitarnych — komendant oddziału або placówki Straży Granicznej, який надав згоду. Wymianę або відмову у wymianie здійснює wojewoda чи відповідний komendant SG за місцем pobytu; ці правила діють і для kolejnej karty pobytu.",
            sourceLocator: "Art. 245 ust. 1–5",
          },
          {
            kind: "statute-text",
            text: "Відмова у видачі або wymianie karty pobytu відбувається у формі decyzji. У гуманітарних справах, де рішення прийняв komendant oddziału або placówki SG, органом вищого ступеня є Komendant Główny Straży Granicznej, а odwołanie подають протягом 7 днів від doręczenia; спеціальні правила ust. 8–9 визначають орган для картки після рішення Szefa Urzędu або Komendanta Głównego.",
            sourceLocator: "Art. 245 ust. 6–9",
          },
        ],
        summary:
          "Стаття розподіляє компетенцію щодо wydania і wymiany karty pobytu, визначає форму odmowa та спеціальний 7-денний строк odwołania у названих гуманітарних справах.",
        rules: [
          {
            locator: "ust. 1–5, 8–9",
            explanation:
              "Для першої картки визначте орган, який надав zezwolenie або згоду; для wymiany та kolejna karta — місце pobytu. Якщо рішення прийняв Szef Urzędu або Komendant Główny, застосуйте спеціальне правило про орган першої інстанції.",
          },
          {
            locator: "ust. 6–7a",
            explanation:
              "Відмова є decyzją. Для справ видачі або wymiany гуманітарної karty pobytu, у яких першою інстанцією був komendant SG, odwołanie становить 7 днів від doręczenia decyzji.",
          },
        ],
        legalEffect:
          "Належний орган визначають підстава документа, місце pobytu та те, хто вирішував справу в першій інстанції. У гуманітарній справі пропуск спеціального 7-денного строку odwołania може позбавити доступу до цього засобу, тому дату doręczenia треба зафіксувати.",
        foreignersCase: foreignersLaw.text`На decyzji про odmowa перевірте підставу компетенції, орган першої інстанції та дату doręczenia. Для гуманітарної karty pobytu зіставте справу з ${foreignersLaw.article("245", "Art. 245")} ust. 7 і не пропустіть спеціальні 7 днів на odwołanie.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-246",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Właściwy organ pobiera odciski linii papilarnych у разі заяви на першу картку в ситуації ${foreignersLaw.article("229", "Art. 229")} ust. 4, на наступну картку або на wymianę картки.`,
            sourceLocator: "Art. 246 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Якщо з причин, залежних від органу, відбитки не можна зняти в день особистої явки, орган призначає новий строк не коротший за 7 днів.",
            sourceLocator: "Art. 246 ust. 2",
          },
        ],
        summary:
          "Стаття регулює зняття відбитків пальців у процедурах видачі або обміну karty pobytu.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Обов’язок стосується не кожної взаємодії з органом, а названих видів заяв на kartę pobytu.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Коли перешкода виникла з боку органу, новий строк для відбитків має бути щонайменше 7 днів.",
          },
        ],
        legalEffect:
          "Норма робить відбитки частиною процедури у визначених випадках і водночас захищає мінімальним строком, якщо зняття зірвав орган.",
        foreignersCase:
          "Збережіть підтвердження особистої явки та нового terminu. Якщо пропущено відбитки не з вашої вини, зафіксуйте це до спливу призначеного строку.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-247",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Cudzoziemcowi відмовляють у wszczęciu postępowania щодо видачі або обміну karty pobytu, якщо під час заяви або в строк ${foreignersLaw.article("246", "Art. 246")} ust. 2 він не подав odcisków linii papilarnych.`,
            sourceLocator: "Art. 247",
          },
        ],
        summary:
          "Неподання відбитків у визначений момент може перешкодити навіть початку провадження щодо karty pobytu.",
        rules: [
          {
            locator: "zdanie 1",
            explanation: foreignersLaw.text`Перевірте, чи був обов’язок подати відбитки та чи настав або сплив строк, призначений за ${foreignersLaw.article("246", "Art. 246")} ust. 2.`,
          },
        ],
        legalEffect:
          "Наслідком є odmowa wszczęcia postępowania, а не просто негативна оцінка матеріальної умови дозволу.",
        foreignersCase:
          "Якщо отримано письмо про odmowę wszczęcia, зіставте його з фактом особистої явки, повідомленням про відбитки та строками. Не називайте таке письмо decyzją про відмову в самому pobycie.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-248",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Kartę pobytu іноземець отримує особисто; якщо на день отримання йому ще не виповнилося 13 років, картку отримує przedstawiciel ustawowy або kurator.",
            sourceLocator: "Art. 248 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: "Під час odbioru надається електронний czytnik, щоб перевірити відповідність персональних даних на картці фактичному стану.",
            sourceLocator: "Art. 248 ust. 3",
          },
        ],
        summary:
          "Стаття визначає спосіб отримання karty pobytu та перевірку даних під час odbioru.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation:
              "Заздалегідь з’ясуйте, хто має право на особистий odbiór: сам іноземець або законний представник чи kurator для дитини до 13 років.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Порівняйте дані в електронному записі картки з фактичними даними до того, як забрати документ.",
          },
        ],
        legalEffect:
          "Правило про odbiór допомагає встановити належного отримувача й момент фактичної перевірки даних, але не змінює строку чинності картки.",
        foreignersCase:
          "На odbiór візьміть документ подорожі та перевірте написання ідентифікаційних даних, фото, adnotacje й дати. Виявлену помилку одразу повідомте органу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-248a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Орган, який видав або обміняв наступну kartę pobytu, протягом 5 робочих днів після видачі чи обміну видаляє дані іноземця, зареєстровані в EES, відповідно до ${foreignersLaw.external("Art. 35", EES_2017_2226_URL)} ust. 6 rozporządzenia nr 2017/2226.`,
            sourceLocator: "Art. 248a",
          },
        ],
        summary:
          "Стаття встановлює обов’язок органу оновити дані в EES після видачі або обміну наступної karty pobytu.",
        rules: [
          {
            locator: "zdanie 1",
            explanation:
              "П’ятиденний строк є строком для органу й рахується в робочих днях від видачі або обміну kolejnej karty pobytu.",
          },
        ],
        legalEffect:
          "Це правило про адміністративне видалення даних з EES; воно не є окремим рішенням про легальність pobytu.",
        foreignersCase:
          "Якщо під час перевірки виникла невідповідність даних EES після отримання нової картки, зберігайте підтвердження її видачі та зверніться до органу, який картку видав або обміняв.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-249",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Cudzoziemiec повертає kartę pobytu органу, який її видав, коли набув obywatelstwo polskie; видано decyzję про stwierdzenie nieważności картки; cofnięto zezwolenie na pobyt czasowy, stały або rezydenta długoterminowego UE чи zgodę humanitarną; або рішення про надання відповідного права wygasło z mocy prawa за ${foreignersLaw.article("102", "Art. 102")} чи 307 ust. 1, ${foreignersLaw.article("200", "Art. 200")} pkt 1 або ${foreignersLaw.article("354", "Art. 354")} ust. 1 pkt 1, 3 чи 4.`,
            sourceLocator: "Art. 249 ust. 1 pkt 1–8",
          },
          {
            kind: "statute-text",
            text: "Kartę pobytu повертають niezwłocznie, але не пізніше 14 днів від doręczenia документа про набуття громадянства або від дня, коли рішення з ust. 1 pkt 2–8 стало ostateczna чи wygasło. Особа, уповноважена на поховання, невідкладно повертає картку померлого, а орган на wniosek видає безоплатне zaświadczenie o zwrocie, чинне 30 днів.",
            sourceLocator: "Art. 249 ust. 2–4",
          },
        ],
        summary:
          "Стаття визначає вичерпні підстави zwrotu karty pobytu, 14-денний строк, обов’язок щодо картки померлого та 30-денне zaświadczenie o zwrocie.",
        rules: [
          {
            locator: "ust. 1 pkt 1–8",
            explanation: foreignersLaw.text`Перевірте конкретний pkt: громадянство, nieważność картки, cofnięcie відповідного zezwolenia або zgody чи wygaśnięcie рішення з прямо названими відсиланнями до ${foreignersLaw.article("102", "Art. 102")}, 307, 200 або 354.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Рахуйте 14 днів від doręczenia документа про громадянство або від остаточності чи wygaśnięcia рішення з ust. 1 pkt 2–8; zwrot має бути niezwłoczny.",
          },
          {
            locator: "ust. 3–4",
            explanation:
              "Особа, уповноважена на поховання за окремим законом, невідкладно повертає картку померлого; орган видає на wniosek безоплатне zaświadczenie, чинне 30 днів.",
          },
        ],
        legalEffect: foreignersLaw.text`Обов’язок zwrotu виникає лише з події, названої в ${foreignersLaw.article("249", "Art. 249")} ust. 1; неповернення після остаточності або wygaśnięcia рішення може спричинити unieważnienie за ${foreignersLaw.article("250", "Art. 250")} pkt 5 та дії органу за ${foreignersLaw.article("251", "Art. 251")}.`,
        foreignersCase:
          "Зафіксуйте doręczenie документа про громадянство або дату, коли рішення стало ostateczna чи wygasło, поверніть kartę pobytu органу-видавцю не пізніше 14 днів і попросіть безоплатне zaświadczenie, якщо потрібен доказ.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-250",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Karta pobytu unieważnia się від дня zgłoszenia втрати або пошкодження, від отримання нової картки при визначених змінах, після спливу строку на zwrot у разі громадянства, з дня інформації про смерть або від остаточності чи wygaśnięcia названого рішення, якщо картку не повернуто.",
            sourceLocator: "Art. 250 pkt 1–5",
          },
        ],
        summary:
          "Стаття прив’язує unieważnienie karty pobytu до конкретної події та визначає момент, з якого стара картка втрачає чинність як документ.",
        rules: [
          {
            locator: "pkt 1–2",
            explanation:
              "Після zgłoszenia utraty або uszkodzenia картка недійсна від дня повідомлення; при обміні через дані чи фото — від odbioru нової.",
          },
          {
            locator: "pkt 3–5",
            explanation:
              "Для громадянства, смерті або неповернення після відповідного рішення закон встановлює окремий момент unieważnienia.",
          },
        ],
        legalEffect:
          "Unieważnienie стосується документа, а не автоматично всіх питань права на pobyt; підставу перебування треба перевіряти окремо.",
        foreignersCase:
          "Після втрати картки негайно зробіть zgłoszenie й не користуйтеся знайденою старою карткою. При отриманні нової перевірте, з якої дати стара стала недійсною.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-251",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Kartę pobytu unieważnia орган, який її видав, при набутті громадянства або смерті, остаточності рішень про cofnięcie zezwolenia чи zgody, zobowiązanie do powrotu або stwierdzenie nieważności картки, а також при переході до іншої підстави, названої в lit. e–h, чи у випадках знайденої або поверненої картки. Орган, який wymienił картку, unieważnia її після zgłoszenia utraty чи uszkodzenia або odbioru нової картки за ${foreignersLaw.article("241", "Art. 241")} pkt 1–2.`,
            sourceLocator: "Art. 251 pkt 1 lit. a–h, pkt 2",
          },
        ],
        summary:
          "Стаття розподіляє між органом-видавцем і органом wymiany повноваження unieważnić kartę pobytu у визначених юридичних та документних ситуаціях.",
        rules: [
          {
            locator: "pkt 1 lit. a–h",
            explanation:
              "Орган-видавець діє при громадянстві або смерті, остаточності рішень про cofnięcie, powrót чи nieważność, передачі знайденої картки, поверненні відновленої картки та wygaśnięciu попереднього права у зв’язку з новим статусом.",
          },
          {
            locator: "pkt 2 lit. a–b",
            explanation: foreignersLaw.text`Орган, який wymienił kartę, unieważnia її після zgłoszenia utraty або uszkodzenia до właściwego organu чи після odbioru нової картки у випадках ${foreignersLaw.article("241", "Art. 241")} pkt 1 і 2.`,
          },
        ],
        legalEffect: foreignersLaw.text`Стаття визначає компетентний орган для unieważnienie; конкретні моменти, з яких картка є недійсною, деталізовані в ${foreignersLaw.article("250", "Art. 250")}, а юридичні події — у ${foreignersLaw.article("249", "Art. 249")} та ${foreignersLaw.article("251", "Art. 251")}.`,
        foreignersCase:
          "У zgłoszenie про utratę або uszkodzenie перевірте, який орган його прийняв і хто wymieni kartę. Якщо unieważnienie пов’язане зі зміною статусу, аналізуйте остаточне рішення та його дату, а не лише технічний запис.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-252",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Polski dokument podróży dla cudzoziemca видають, якщо іноземець втратив свій dokument podróży, він знищений або втратив чинність, і неможливо отримати новий, а іноземцю надано: zezwolenie na pobyt stały, zezwolenie na pobyt rezydenta długoterminowego UE, zezwolenie na pobyt czasowy з ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9, ochronę uzupełniającą або zgodę na pobyt ze względów humanitarnych.`,
            sourceLocator: "Art. 252 pkt 1–2a i 3–4",
          },
        ],
        summary:
          "Стаття передбачає wydanie polskiego dokumentu podróży dla cudzoziemca лише за одночасної відсутності доступного власного документа та наявності одного з прямо названих статусів.",
        rules: [
          {
            locator: "zdanie główne та pkt 1–2a, 3–4",
            explanation: foreignersLaw.text`Доведіть одночасно втрату, знищення або закінчення чинності власного dokumentu podróży, неможливість отримати новий і наявність саме статусу з ${foreignersLaw.article("252", "Art. 252")}; pobyt czasowy охоплює лише ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9.`,
          },
        ],
        legalEffect: foreignersLaw.text`За виконання всіх умов ${foreignersLaw.article("252", "Art. 252")} стаття передбачає wydanie документа, але сама відсутність паспорта або інший вид pobyt не достатні; тимчасовий дозвіл має відповідати ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9.`,
        foreignersCase: foreignersLaw.text`До wniosku додайте доказ статусу, інформацію про utrata, zniszczenie або wygaśnięcie власного dokumentu podróży та підтвердження, що новий документ неможливо отримати; для pobyt czasowy окремо перевірте ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-252a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument podróży може бути виданий також cudzoziemcowi, який має громадянство, визначене в rozporządzeniu, якщо він втратив, знищив або втратив чинність власний dokument podróży чи раніше його не мав, йому надано zezwolenie na pobyt stały, rezydenta długoterminowego UE, czasowy, ochronę uzupełniającą або zgodę humanitarną, а wniosek подано у період, визначений rozporządzeniem.",
            sourceLocator: "Art. 252a ust. 1 pkt 1–3",
          },
          {
            kind: "statute-text",
            text: "Minister właściwy do spraw wewnętrznych може визначити в drodze rozporządzenia громадянства, що дають право на цей режим, і період подання wniosków; під час цього враховуються потреби міграційної політики, правова та фактична ситуація осіб, які не можуть звернутися до влади своєї держави, значення для інтересу RP та sprawność postępowania.",
            sourceLocator: "Art. 252a ust. 2–3 pkt 1–4",
          },
        ],
        summary:
          "Стаття створює додатковий режим wydania polskiego dokumentu podróży для громадянств і періодів, які minister визначить у rozporządzenie.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Перевіряйте всі умови разом: громадянство з rozporządzenia, втрату, знищення, wygaśnięcie або відсутність власного документа, один із п’яти статусів і подання wniosku у спеціальний період.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Без актуального rozporządzenia не можна визначити охоплені громадянства та період. Критерії його підготовки включають міграційну політику, неможливість звернення до влади держави, інтерес RP і sprawność postępowania.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("252a", "Art. 252a")} не дає універсального права кожному власнику статусу: потрібні громадянство з чинного rozporządzenie, сукупність умов ust. 1 і подання wniosku у визначений період; формула «może być wydany» не гарантує результату.`,
        foreignersCase: foreignersLaw.text`Перед wnioskiem перевірте чинний текст rozporządzenia, своє громадянство та останній день періоду, а також докази відсутності власного документа і статусу. Не підміняйте спеціальний режим ${foreignersLaw.article("252a", "Art. 252a")} загальним ${foreignersLaw.article("252", "Art. 252")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-253",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument podróży dla cudzoziemca у період своєї чинності дає cudzoziemcowi право багаторазово перетинати кордон; документ чинний один рік від дня видачі.",
            sourceLocator: "Art. 253 ust. 1–2",
          },
        ],
        summary:
          "Стаття встановлює строк і прикордонне значення польського документа подорожі для іноземця.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Документ призначений для багаторазового перетину кордону лише протягом строку його чинності.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Базовий строк чинності становить один рік від дати видачі.",
          },
        ],
        legalEffect: foreignersLaw.text`Документ у межах річного строку дає право на багаторазове перетинання кордону за ${foreignersLaw.article("253", "Art. 253")}; він не змінює сам по собі підставу pobytu або інші умови в’їзду.`,
        foreignersCase:
          "Перед поїздкою перевірте дату видачі й закінчення року, а також чинність karty pobytu або іншої підстави. Для кожної поїздки майте чинний документ і перевіряйте вимоги країни в’їзду.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-254",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Видача polskiego dokumentu podróży dla cudzoziemca не звільняє cudzoziemca від обов’язку вживати заходів для отримання власного dokumentu podróży, крім випадку, коли польський документ видано на підставі ${foreignersLaw.article("252a", "Art. 252a")}.`,
            sourceLocator: "Art. 254",
          },
        ],
        summary: foreignersLaw.text`Стаття зберігає обов’язок отримувати власний dokument podróży після видачі польського документа, але встановлює виняток для ${foreignersLaw.article("252a", "Art. 252a")}.`,
        rules: [
          {
            locator: "zdanie 1",
            explanation: foreignersLaw.text`Після видачі документа за ${foreignersLaw.article("252", "Art. 252")} потрібно продовжувати дії для отримання документа своєї держави.`,
          },
          {
            locator: "wyjątek",
            explanation: foreignersLaw.text`Виняток прямо стосується документа, виданого на підставі ${foreignersLaw.article("252a", "Art. 252a")}.`,
          },
        ],
        legalEffect: foreignersLaw.text`За загальним правилом польський документ не замінює обов’язок домагатися власного dokumentu podróży; виняток діє лише для документа, виданого на підставі ${foreignersLaw.article("252a", "Art. 252a")}.`,
        foreignersCase: foreignersLaw.text`Зберігайте листування з консульством або інші докази дій для отримання власного документа, якщо ваш польський документ видано не за ${foreignersLaw.article("252a", "Art. 252a")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-255",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "У polskim dokumencie podróży dla cudzoziemca розміщують imię i nazwisko, дату, місце і країну народження, громадянство, стать, назву органу-видавця, дати wydania та upływu ważności і фотографію; документ містить також підпис posiadacza.",
            sourceLocator: "Art. 255 ust. 1 pkt 1–8, ust. 2",
          },
          {
            kind: "statute-text",
            text: "Документ може містити закодований запис даних з ust. 1 pkt 1–4 або 7; це технічний запис, а не додаткова підстава для pobytu.",
            sourceLocator: "Art. 255 ust. 2",
          },
        ],
        summary:
          "Стаття визначає основний набір персональних і документальних даних у польському документі подорожі.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Під час odbioru звірте особисті дані, фото, орган і дві дати з рішенням та заявою.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Підпис і закодовані дані є частиною технічного оформлення документа, а не новою підставою перебування.",
          },
        ],
        legalEffect:
          "Стаття стандартизує зміст документа; помилка в ньому є питанням документа та можливого обміну, а не автоматичним встановленням права на pobyt.",
        foreignersCase:
          "При отриманні документа перевірте написання імені, громадянство, фото та строк. Якщо дані неправильні, письмово повідомте орган, який документ видав.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-256",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument podróży dla cudzoziemca підлягає wymianie у разі зміни даних, зміни wizerunku twarzy настільки, що ідентифікація власника ускладнена або неможлива, utraty чи uszkodzenia документа.",
            sourceLocator: "Art. 256 pkt 1–4",
          },
        ],
        summary:
          "Стаття називає чотири обставини для обміну польського документа подорожі.",
        rules: [
          {
            locator: "pkt 1–4",
            explanation:
              "Зміна даних, проблеми з ідентифікацією, utrata та uszkodzenie є окремими підставами для подання на wymianę.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("256", "Art. 256")} визначає підстави wymiany конкретного документа; wymiana не є продовженням його строку за окремою процедурою і не змінює підстави pobytu.`,
        foreignersCase:
          "Порівняйте документ із актуальними даними та станом фото. Після втрати або пошкодження негайно повідомте орган і уточніть порядок отримання нового документа.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-257",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument podróży видає, обмінює або відмовляє у цьому wojewoda, właściwy за місцем перебування іноземця; відмова у видачі або обміні оформлюється decyzją.",
            sourceLocator: "Art. 257 ust. 1–2",
          },
        ],
        summary:
          "Стаття визначає wojewodę за місцем перебування компетентним щодо польського документа подорожі та вимагає decyzji для відмови.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Для компетенції важливе фактичне miejsce pobytu, а не лише місце, де іноземець колись подавав іншу заяву.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Відмова має бути рішенням, яке можна аналізувати за його мотивами та способом оскарження.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("257", "Art. 257")} визначає właściwość wojewody та вимагає decyzji для odmowa, але не встановлює матеріального права на позитивний результат поза умовами інших статей.`,
        foreignersCase:
          "Перед поданням перевірте właściwość wojewody за місцем перебування. При odmowie збережіть decyzję та дату doręczenia для перевірки доступного środka zaskarżenia.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-258",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Polski dokument podróży для cudzoziemca повертають органу-видавцю після набуття obywatelstwo polskie, stwierdzenia nieważności документа, cofnięcia zezwolenia na pobyt stały, rezydenta długoterminowego UE або zgody humanitarnej, pozbawienia ochrony uzupełniającej, спеціального cofnięcia zezwolenia na pobyt czasowy з ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9, якщо документ видано за ${foreignersLaw.article("252", "Art. 252")} pkt 2a, cofnięcia тимчасового дозволу у випадку ${foreignersLaw.article("252a", "Art. 252a")} ust. 1 pkt 2 lit. c, або отримання власного dokumentu podróży.`,
            sourceLocator: "Art. 258 ust. 1 pkt 1–5",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Документ повертають niezwłocznie, але не пізніше 14 днів від doręczenia документа про громадянство, doręczenia власного dokumentu podróży або дня, коли рішення з ust. 1 pkt 2–4b стало ostateczna; для інших питань zwrot застосовуються ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
            sourceLocator: "Art. 258 ust. 2–3",
          },
        ],
        summary: foreignersLaw.text`Стаття визначає спеціальні підстави zwrotu polskiego dokumentu podróży dla cudzoziemca, 14-денні події для відліку та відсилання до ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
        rules: [
          {
            locator: "ust. 1 pkt 1–5",
            explanation: foreignersLaw.text`Зіставте подію з точним пунктом: громадянство, nieważność, cofnięcie конкретного zezwolenia або zgody, pozbawienie ochrony uzupełniającej чи отримання власного документа; для pkt 4a–4b важливі ${foreignersLaw.article("252", "Art. 252")} pkt 2a та ${foreignersLaw.article("252a", "Art. 252a")} ust. 1 pkt 2 lit. c.`,
          },
          {
            locator: "ust. 2–3",
            explanation: foreignersLaw.text`Рахуйте 14 днів від події, прямо названої в ust. 2: doręczenia документа про громадянство, власного документа або ostateczność рішення; поховання і zaświadczenie регулює ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
          },
        ],
        legalEffect: foreignersLaw.text`Обов’язок zwrotu виникає з конкретної події ${foreignersLaw.article("258", "Art. 258")}, а не просто зі спливу строку дії документа; невиконання може впливати на його unieważnienie за ${foreignersLaw.article("259", "Art. 259")}.`,
        foreignersCase: foreignersLaw.text`Після отримання паспорта або остаточного рішення зафіксуйте дату й поверніть документ органу-видавцю. За потреби попросіть заświadczenie за правилами ${foreignersLaw.article("249", "Art. 249")} ust. 4.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-259",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument podróży unieważnia się: при utrata або uszkodzenie — від zgłoszenia; при wymiana через wizerunek або дані — від odbioru нового документа; після громадянства — зі спливом строку zwrotu; після рішень про cofnięcie, pozbawienie ochrony або nieważność — зі спливом строку zwrotu; при смерті — від інформації органу; при поверненні знайденого документа — від zwrotu; а при неповерненні після отримання власного документа — niezwłocznie після отримання інформації про це.",
            sourceLocator: "Art. 259 ust. 1 pkt 1–6",
          },
          {
            kind: "statute-text",
            text: "Unieważnienie здійснює organ, який видав документ, у випадках громадянства, смерті, ostateczność відповідних рішень, передачі знайденого або повернення відновленого документа чи отримання власного dokumentu podróży; organ, який wymienił документ, діє при zgłoszenie utraty або uszkodzenia та odbiór нового документа.",
            sourceLocator: "Art. 259 ust. 2 pkt 1–2",
          },
        ],
        summary:
          "Стаття розрізняє підстави й точні моменти unieważnienia polskiego dokumentu podróży та розподіляє дію між органом-видавцем і органом wymiany.",
        rules: [
          {
            locator: "ust. 1 pkt 1–6",
            explanation:
              "Не змішуйте подію і момент: закон окремо називає zgłoszenie, odbiór нового, сплив строку zwrotu, отримання інформації про смерть, zwrot знайденого документа та момент після інформації про власний документ.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Розрізняйте орган, який видав документ, і орган, який його обміняв: стаття розподіляє їхні дії.",
          },
        ],
        legalEffect:
          "Unieważnienie припиняє чинність polskiego dokumentu podróży як документа; це не є самостійним рішенням про право на pobyt або ochronę.",
        foreignersCase:
          "Після втрати негайно подайте zgłoszenie й використовуйте лише новий документ, якщо його видано. Якщо старий знайдено, не вважайте його автоматично чинним.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-260",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Polski dokument tożsamości cudzoziemca може бути виданий: małoletniemu, народженому в Польщі та перебуваючому без батьківської опіки, якщо цьому не суперечить interes RP і цього вимагає dobro dziecka; cudzoziemcowi, який перебуває за zaświadczeniem з ${foreignersLaw.article("170", "Art. 170")}; або cudzoziemcowi без жодного obywatelstwa, якщо цього вимагає interes RP. Для кожної категорії додатково потрібно не мати dokumentu podróży та не мати можливості отримати інший документ, що підтверджує tożsamość.`,
            sourceLocator: "Art. 260 ust. 1–2",
          },
        ],
        summary:
          "Стаття обмежує wydanie polskiego dokumentu tożsamości cudzoziemca трьома спеціальними категоріями та додатковою неможливістю отримати документ подорожі або інший доказ особи.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Спершу встановіть, до якої з трьох категорій належить заявник і чи відповідає видача його інтересам або dobry dziecka.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Відсутність документа подорожі та неможливість отримати інший документ особи є додатковою умовою.",
          },
        ],
        legalEffect: foreignersLaw.text`Документ є винятковим засобом підтвердження tożsamość для категорій ${foreignersLaw.article("260", "Art. 260")}; він не є загальним замінником паспорта і не підтверджує сам по собі легальний pobyt.`,
        foreignersCase:
          "У заяві поясніть спеціальну категорію, відсутність доступного документа подорожі та докази неможливості отримати інший документ особи.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-261",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument tożsamości cudzoziemca у період чинності підтверджує tożsamość під час перебування в Польщі, але не підтверджує obywatelstwo, не дає права перетинати кордон і не звільняє від обов’язку отримати wizę, zezwolenie na pobyt czasowy, stały або rezydenta długoterminowego UE.",
            sourceLocator: "Art. 261 ust. 1–3",
          },
        ],
        summary:
          "Стаття чітко відділяє підтвердження tożsamość польським документом особи від громадянства, перетину кордону та обов’язку мати потрібну підставу pobytu.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Документ доводить tożsamość, але не відповідає на питання, громадянином якої держави є особа.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Для перетину кордону та законного pobytu потрібні інші документи або підстави, якщо вони вимагаються.",
          },
        ],
        legalEffect:
          "Наявність документа не підтверджує obywatelstwo, не створює права на перетин кордону і не замінює wizę або прямо назване zezwolenie na pobyt.",
        foreignersCase:
          "Під час перевірки пред’являйте цей документ лише як доказ особи, а статус pobytu підтверджуйте окремою візою, картою або рішенням, якщо це потрібно.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-262",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument tożsamości cudzoziemca є чинним протягом одного року від дня його видачі.",
            sourceLocator: "Art. 262",
          },
        ],
        summary:
          "Стаття встановлює однорічний строк чинності польського документа особи.",
        rules: [
          {
            locator: "zdanie 1",
            explanation:
              "Дату закінчення визначайте від дати видачі, зазначеної в документі.",
          },
        ],
        legalEffect:
          "Після спливу року документ більше не підтверджує особу як чинний документ за цією статтею; питання нового документа потребує окремої заяви та підстави.",
        foreignersCase:
          "Запишіть дату видачі й завчасно перевірте потребу в новій заяві. Не використовуйте прострочений документ як єдиний доказ особи.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-263",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument tożsamości cudzoziemca містить імена та прізвище іноземця і його батьків, дані народження, адресу meldunku, стать, зріст, колір очей, орган-видавець, дати видачі та чинності, фотографію й попередження, що документ не підтверджує obywatelstwo, не дає права перетинати кордон і не є документом, що підтверджує legalny pobyt.",
            sourceLocator: "Art. 263 ust. 1 pkt 1–10",
          },
          {
            kind: "statute-text",
            text: "Документ містить підпис posiadacza і може містити закодований запис даних з ust. 1 pkt 1, 2, 4 або 8; дані про адресу не вміщують, якщо cudzoziemiec не zameldował się у місці pobyt czasowy понад 2 місяці.",
            sourceLocator: "Art. 263 ust. 2–3",
          },
        ],
        summary:
          "Стаття описує дані польського документа особи та прямо вимагає попередження про межі його доказового значення.",
        rules: [
          {
            locator: "ust. 1 pkt 1–9",
            explanation:
              "Звірте ім’я, дані народження, фото, орган і строки, а також адресу, якщо вона має бути вказана.",
          },
          {
            locator: "ust. 1 pkt 10",
            explanation:
              "Сам документ нагадує: він не є доказом громадянства, права на перетин кордону або legalnego pobytu.",
          },
        ],
        legalEffect:
          "Стандартизований зміст допомагає ідентифікації, але текст самої статті застерігає від використання документа як заміни паспорта чи підстави перебування.",
        foreignersCase:
          "Покажіть цей документ для підтвердження особи, а для кордону й pobytu підготуйте окремі документи. Помилки в реквізитах повідомляйте органу-видавцю.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-264",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument tożsamości cudzoziemca видає, обмінює або відмовляє у цьому wojewoda за місцем перебування іноземця; відмова у видачі чи обміні відбувається у формі decyzji.",
            sourceLocator: "Art. 264 ust. 1–2",
          },
        ],
        summary:
          "Стаття визначає компетентного wojewodę та форму негативного рішення щодо польського документа особи.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Заяву подають до wojewody, właściwego за місцем перебування, а не автоматично до органу за місцем народження чи громадянства.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Відмова має бути decyzją; з неї потрібно встановити мотиви та доступний засіб оскарження.",
          },
        ],
        legalEffect: foreignersLaw.text`Стаття встановлює процесуальну компетенцію й форму відмови, але не скасовує матеріальних умов ${foreignersLaw.article("260", "Art. 260")}.`,
        foreignersCase: foreignersLaw.text`Перевірте właściwość wojewody та збережіть decyzję про відмову разом із датою doręczenia. Окремо аналізуйте, яку умову ${foreignersLaw.article("260", "Art. 260")} орган вважав невиконаною.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-265",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`До wymiany polskiego dokumentu tożsamości cudzoziemca застосовується ${foreignersLaw.article("256", "Art. 256")}; cudzoziemiec повертає документ після набуття obywatelstwo polskie або якщо видано decyzję про stwierdzenie nieważności документа.`,
            sourceLocator: "Art. 265 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Документ повертають organowi, який його видав, niezwłocznie, але не пізніше 14 днів від doręczenia документа про громадянство або від дня, коли decyzja про nieważność стала ostateczna; інші правила zwrotu відсилають до ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
            sourceLocator: "Art. 265 ust. 3–4",
          },
        ],
        summary:
          "Стаття поєднує правила обміну документа особи з обов’язком його повернення у двох визначених випадках.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Для зміни даних, фото, втрати або пошкодження застосовуйте ${foreignersLaw.article("256", "Art. 256")}, а не вигадуйте окрему процедуру.`,
          },
          {
            locator: "ust. 2–4",
            explanation: foreignersLaw.text`Після громадянства або остаточного stwierdzenia nieważności діє 14-денний строк zwrotu та відсилання до ${foreignersLaw.article("249", "Art. 249")}.`,
          },
        ],
        legalEffect:
          "Норма не продовжує чинність документа після події, що вимагає повернення; вона визначає технічний порядок обміну й zwrotu.",
        foreignersCase: foreignersLaw.text`За зміни даних або втрати перевірте ${foreignersLaw.article("256", "Art. 256")}. За громадянства чи nieważności зафіксуйте дату події, поверніть документ і за потреби отримайте довідку.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-266",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Polski dokument tożsamości cudzoziemca unieważnia się: при utrata або uszkodzenie — від zgłoszenia; при wymiana через wizerunek або дані — від odbioru нового документа; після громадянства — зі спливом строку zwrotu; після смерті — від отримання органом інформації; при поверненні знайденого документа — від його zwrotu.",
            sourceLocator: "Art. 266 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Unieważnienie здійснює organ, який видав документ, при громадянстві або смерті, передачі знайденого чи поверненні відновленого документа або коли decyzja про stwierdzenie nieważności стала ostateczna; organ wymiany діє при zgłoszenie utraty або uszkodzenia та odbiór нового документа.",
            sourceLocator: "Art. 266 ust. 2",
          },
        ],
        summary:
          "Стаття визначає моменти та органи unieważnienia польського документа особи.",
        rules: [
          {
            locator: "ust. 1 pkt 1–5",
            explanation:
              "Дата недійсності залежить від події: zgłoszenie, odbiór нового документа, сплив строку zwrotu, інформація про смерть або zwrot знайденого документа.",
          },
          {
            locator: "ust. 2 pkt 1–2",
            explanation:
              "Розмежовуйте орган-видавець та орган, який здійснив wymianę.",
          },
        ],
        legalEffect:
          "Unieważnienie припиняє чинність цього документа як посвідчення особи; воно не створює і не припиняє окрему підставу легального pobytu.",
        foreignersCase:
          "Після zgłoszenia utraty не використовуйте знайдений старий документ без перевірки. При спорі попросіть орган пояснити дату й підставу unieważnienia.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-267",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Tymczasowy polski dokument podróży видають cudzoziemcowi, який має намір повернутися до Польщі, за кордоном втратив, знищив або втратив чинність власного dokumentu podróży і не може отримати новий, якщо йому надано zezwolenie na pobyt stały, zezwolenie na pobyt rezydenta długoterminowego UE, ochronę uzupełniającą або zgodę humanitarną, або якщо йому надано status uchodźcy.",
            sourceLocator: "Art. 267 pkt 1 lit. a–d, pkt 2",
          },
        ],
        summary:
          "Стаття визначає tymczasowy polski dokument podróży для одноразового повернення до Польщі з-за кордону, коли власний документ недоступний.",
        rules: [
          {
            locator: "zdanie główne",
            explanation:
              "Потрібні намір повернутися, перебування за кордоном, проблема з власним документом, неможливість отримати новий і одна з названих підстав.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("267", "Art. 267")} передбачає документ для конкретного повернення до Польщі з-за кордону; він не є загальною заміною паспорта або дозволом на необмежені поїздки.`,
        foreignersCase:
          "У заяві за кордоном покажіть свій статус у Польщі, обставини втрати або недійсності документа та неможливість отримати новий. Поясніть, що мета — повернення до Польщі.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-268",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Tymczasowy polski dokument podróży може бути виданий cudzoziemcowi, який не має dokumentu podróży і не може отримати новий, якщо підлягає relokacji або przesiedleniu чи має намір залишити територію RP або зобов’язаний її залишити.",
            sourceLocator: "Art. 268 pkt 1–2",
          },
        ],
        summary:
          "Стаття охоплює окремі ситуації видачі тимчасового документа для relokacji, przesiedlenia або виїзду з Польщі.",
        rules: [
          {
            locator: "zdanie główne",
            explanation:
              "Заявник має не мати документа подорожі, не мати можливості отримати новий і відповідати одній із двох названих ситуацій.",
          },
        ],
        legalEffect:
          "Норма не встановлює автоматичної видачі: слово «może» і сукупність умов вимагають оцінки компетентного органу.",
        foreignersCase:
          "Додайте докази relokacji, przesiedlenia, наміру виїзду або рішення про обов’язок залишити територію та документи про неможливість отримати паспорт.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-269",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У період чинності tymczasowy polski dokument podróży дає cudzoziemcowi з ${foreignersLaw.article("267", "Art. 267")} або ${foreignersLaw.article("268", "Art. 268")} pkt 1 право на одноразовий wjazd на територію RP, а cudzoziemcowi з ${foreignersLaw.article("268", "Art. 268")} pkt 2 — право на wyjazd з території RP.`,
            sourceLocator: "Art. 269 pkt 1–2",
          },
        ],
        summary:
          "Стаття прив’язує призначення тимчасового документа до підстави його видачі: одноразовий в’їзд або виїзд.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Для повернення за ${foreignersLaw.article("267", "Art. 267")} або relokacji чи przesiedlenia за ${foreignersLaw.article("268", "Art. 268")} pkt 1 документ дозволяє один в’їзд.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Для наміру або обов’язку залишити Польщу за ${foreignersLaw.article("268", "Art. 268")} pkt 2 документ дозволяє виїзд, а не багаторазове повернення.`,
          },
        ],
        legalEffect:
          "Документ не є багаторазовим проїзним документом: кількість і напрямок дії залежать від юридичної підстави.",
        foreignersCase:
          "Перед поїздкою прочитайте підставу видачі та напрямок, зазначений у документі. Не плануйте повторний в’їзд, якщо документ видано для одноразової дії.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-270",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Tymczasowy polski dokument podróży є чинним протягом строку, зазначеного в документі, але цей строк не може перевищувати 7 днів.",
            sourceLocator: "Art. 270",
          },
        ],
        summary:
          "Стаття встановлює короткий максимальний строк чинності тимчасового польського документа подорожі.",
        rules: [
          {
            locator: "zdanie 1",
            explanation:
              "Дивіться конкретну дату в документі, але в будь-якому разі строк не може перевищувати 7 днів.",
          },
        ],
        legalEffect: foreignersLaw.text`Після закінчення зазначеного строку документ не можна використовувати для передбаченої ${foreignersLaw.article("269", "Art. 269")} поїздки.`,
        foreignersCase:
          "Плануйте маршрут за датою чинності, а не лише за датою видачі. Якщо поїздка зірвалася, уточніть у органу, чи потрібен новий документ.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-271",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "У tymczasowym polskim dokumencie podróży зазначаються дані іноземця, зокрема imię i nazwisko, дані народження, obywatelstwo, стать, зріст і колір очей; дані супроводжуваних дітей або інших małoletnich під його опікою (імена, дати, місця й країна народження, стать); назва органу, дані й підпис службової особи, дати та фотографії іноземця і супроводжуваних неповнолітніх.",
            sourceLocator: "Art. 271 ust. 1 pkt 1–12",
          },
          {
            kind: "statute-text",
            text: "Документ містить підпис posiadacza і може містити закодований запис даних з ust. 1 pkt 1–4 або 10.",
            sourceLocator: "Art. 271 ust. 2",
          },
        ],
        summary:
          "Стаття визначає реквізити tymczasowego polskiego dokumentu podróży, включно з даними та фотографіями супроводжуваних неповнолітніх.",
        rules: [
          {
            locator: "ust. 1 pkt 1–12",
            explanation:
              "При отриманні звірте особисті дані, реквізити видавача, строк і фотографії всіх супроводжуваних неповнолітніх.",
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Підпис і закодовані дані є частиною оформлення; вони не розширюють напрямок чи строк дії документа за ${foreignersLaw.article("269", "Art. 269")}–270.`,
          },
        ],
        legalEffect:
          "Стаття стандартизує ідентифікаційний зміст документа для короткої поїздки та супроводжуваних неповнолітніх.",
        foreignersCase:
          "Перед виїздом перевірте написання даних кожної супроводжуваної дитини й строк документа. Помилку повідомте органу до спроби перетину кордону.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-272",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "У RP tymczasowy polski dokument podróży видає або відмовляє у видачі wojewoda за місцем pobytu, а якщо cudzoziemiec зобов’язаний залишити територію RP — komendant placówki Straży Granicznej; за межами RP це робить konsul.",
            sourceLocator: "Art. 272 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Відмова у видачі є decyzją; від decyzja konsula можна подати до того самого органу wniosek o ponowne rozpatrzenie протягом 7 днів від doręczenia, а органом вищого ступеня щодо komendanta placówki є Komendant Główny Straży Granicznej.",
            sourceLocator: "Art. 272 ust. 2–5",
          },
        ],
        summary:
          "Стаття розподіляє компетенцію щодо тимчасового документа між wojewoda, Strażą Graniczną та konsulem і встановлює спеціальний шлях перегляду рішення konsula.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Місце перебування та мета виїзду визначають, чи звертатися до wojewody, SG або konsula.",
          },
          {
            locator: "ust. 2–5",
            explanation:
              "Рішення про відмову є decyzją; для відмови konsula строк wniosku o ponowne rozpatrzenie становить 7 днів.",
          },
        ],
        legalEffect:
          "Належний засіб залежить від органу, який видав рішення: wniosek o ponowne rozpatrzenie за статтею прямо названий для рішення konsula.",
        foreignersCase:
          "На відмові визначте орган-видавець, дату doręczenia та назву środka zaskarżenia. Для рішення konsula не пропустіть 7-денний строк і подайте wniosek до того самого органу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-273",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Dokument «zgoda na pobyt tolerowany» видають cudzoziemcowi, якому надано zgodę na pobyt tolerowany на території RP.",
            sourceLocator: "Art. 273",
          },
        ],
        summary:
          "Стаття пов’язує видачу документа tolerowany з уже наданою згодою на tolerowany pobyt.",
        rules: [
          {
            locator: "zdanie 1",
            explanation:
              "Спочатку має існувати рішення про udzielenie zgody na pobyt tolerowany; ця стаття описує документ, а не підстави надання згоди.",
          },
        ],
        legalEffect: foreignersLaw.text`Документ підтверджує оформлення наданої згоди, але сам текст ${foreignersLaw.article("273", "Art. 273")} не визначає строку чи права на перетин кордону.`,
        foreignersCase:
          "Зіставте документ із рішенням про udzielenie zgody. Строк, дані, odbiór та наслідки втрати перевіряйте за наступними статтями.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-274",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Dokument «zgoda na pobyt tolerowany» у період своєї чинності підтверджує tożsamość cudzoziemca під час перебування на території RP, але не підтверджує obywatelstwo і не дає права перетинати кордон.",
            sourceLocator: "Art. 274 ust. 1–2",
          },
        ],
        summary:
          "Стаття визначає обмежене значення документа tolerowany: ідентифікація в Польщі без підтвердження громадянства чи права на кордон.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Документ використовується для підтвердження tożsamości лише протягом строку чинності.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Для перетину кордону цей документ сам по собі не підходить.",
          },
        ],
        legalEffect:
          "Документ не замінює паспорт і не створює права на виїзд та повернення через кордон.",
        foreignersCase:
          "Під час внутрішньої перевірки пред’являйте документ для ідентифікації, але перед будь-якою поїздкою отримайте окрему правову підставу та документ подорожі.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-275",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Dokument «zgoda na pobyt tolerowany» чинний два роки від дня видачі.",
            sourceLocator: "Art. 275",
          },
        ],
        summary:
          "Стаття встановлює дворічний строк чинності документа tolerowany.",
        rules: [
          {
            locator: "zdanie 1",
            explanation:
              "Строк рахується від дати видачі, зазначеної в документі, якщо інша юридична подія не спричинила його unieważnienie або zwrot.",
          },
        ],
        legalEffect:
          "Два роки — це строк документа, а не автоматичне продовження чи зміна самої zgody na pobyt tolerowany.",
        foreignersCase:
          "Звірте дату видачі з датою wygaśnięcia та перевірте, чи не було рішення про cofnięcie або інша подія, що впливає на документ.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-276",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "У документі «zgoda na pobyt tolerowany» зазначаються імена та прізвище і батьки, дані народження, адреса meldunku, obywatelstwo, стать, зріст, колір очей, PESEL за наявності, орган, дати, фотографія, obraz linii papilarnych та pouczenie, що документ не підтверджує obywatelstwo і не дає права перетинати кордон.",
            sourceLocator: "Art. 276 ust. 1 pkt 1–14",
          },
          {
            kind: "statute-text",
            text: "Документ містить підпис posiadacza і може містити закодований запис даних з ust. 1 pkt 1, 3, 5, 6 або 11; адреса не вміщується, якщо cudzoziemiec не zameldował się у місці pobyt czasowy понад 2 місяці.",
            sourceLocator: "Art. 276 ust. 2–3",
          },
        ],
        summary:
          "Стаття описує реквізити документа tolerowany та прямо фіксує межі його доказового значення.",
        rules: [
          {
            locator: "ust. 1 pkt 1–13",
            explanation:
              "Під час odbioru перевірте персональні дані, орган, строки, фото та відбитки пальців.",
          },
          {
            locator: "ust. 1 pkt 14",
            explanation:
              "Попередження в документі підтверджує: він не доводить громадянство й не дає права на перетин кордону.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Відсутність адреси може пояснюватися відсутністю потрібного meldunku.",
          },
        ],
        legalEffect: foreignersLaw.text`Реквізити дозволяють ідентифікувати власника та строк документа, але не розширюють права, прямо обмежені ${foreignersLaw.article("274", "Art. 274")}.`,
        foreignersCase:
          "Звірте документ із рішенням про згоду, особливо ім’я, фото, строк і відбитки. Для поїздки не покладайтеся на цей документ як на паспорт.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-277",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Dokument «zgoda na pobyt tolerowany» видає або відмовляє у видачі komendant oddziału Straży Granicznej або komendant placówki Straży Granicznej, який надав zgodę; wymianę або відмову у wymianie здійснює відповідний komendant SG за місцем pobytu. Відмова є decyzją.",
            sourceLocator: "Art. 277 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: "Органом вищого ступеня щодо komendanta oddziału або placówki SG є Komendant Główny Straży Granicznej, а odwołanie від decyzja подають протягом 7 днів від doręczenia. Якщо zgodę або рішення про документ прийняв Komendant Główny, документ видає або wymienia komendant першої інстанції.",
            sourceLocator: "Art. 277 ust. 3–4",
          },
        ],
        summary:
          "Стаття визначає органи видачі та обміну документа tolerowany і спеціальний 7-денний строк odwołania.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Для першої видачі дивіться на орган, який надав згоду; для wymiany — на SG за місцем перебування.",
          },
          {
            locator: "ust. 2–3a",
            explanation:
              "Відмова є decyzją, а odwołanie у визначених справах подається в 7-денний строк.",
          },
        ],
        legalEffect:
          "Компетенція та шлях оскарження залежать від того, який орган прийняв рішення і чи була справа в першій інстанції у Komendanta Głównego.",
        foreignersCase:
          "На decyzji про відмову встановіть орган, дату doręczenia та адресата odwołania. Для 7-денного строку підготуйте доказ дати отримання.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-278",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Орган, компетентний видати або обміняти документ «zgoda na pobyt tolerowany», бере odciski linii papilarnych; якщо з причин органу це неможливо в день особистої явки, призначається строк не коротший за 7 днів.",
            sourceLocator: "Art. 278 ust. 1–1a",
          },
          {
            kind: "statute-text",
            text: "Якщо іноземець не подав відбитки під час заяви або в призначений строк, йому відмовляють у wszczęciu postępowania щодо видачі або обміну документа.",
            sourceLocator: "Art. 278 ust. 2",
          },
        ],
        summary:
          "Стаття встановлює відбитки пальців як процесуальну умову видачі або обміну документа tolerowany.",
        rules: [
          {
            locator: "ust. 1–1a",
            explanation:
              "З’ясуйте, хто приймає заяву і чи отримано відбитки; при перешкоді органу строк має бути не меншим за 7 днів.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Неподання відбитків може спричинити odmowę wszczęcia, а не рішення про матеріальну відмову у згоді.",
          },
        ],
        legalEffect:
          "Порушення правила про відбитки перешкоджає початку документного провадження, якщо немає доведеного винятку в самій процедурі.",
        foreignersCase:
          "Збережіть підтвердження особистої явки й призначеного строку. Якщо відбитки не зняли з вини органу, письмово зафіксуйте це до кінця нового строку.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-279",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`До odbioru документа «zgoda na pobyt tolerowany» застосовуються положення ${foreignersLaw.article("248", "Art. 248")}.`,
            sourceLocator: "Art. 279",
          },
        ],
        summary:
          "Стаття відсилає питання отримання документа tolerowany до загальних правил odbioru karty pobytu.",
        rules: [
          {
            locator: "zdanie 1",
            explanation: foreignersLaw.text`Для особистого отримання, правила щодо дитини до 13 років і перевірки даних застосовуйте ${foreignersLaw.article("248", "Art. 248")} у межах цієї відсилки.`,
          },
        ],
        legalEffect: foreignersLaw.text`Стаття не дублює процедуру odbioru, а робить ${foreignersLaw.article("248", "Art. 248")} частиною правил для цього документа.`,
        foreignersCase: foreignersLaw.text`Перед odbiorem перевірте, хто має отримати документ, та звірте його дані за правилами ${foreignersLaw.article("248", "Art. 248")}. Помилку повідомте органу одразу.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-280",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`До wymiany документа «zgoda na pobyt tolerowany» застосовується ${foreignersLaw.article("256", "Art. 256")}; cudzoziemiec повертає документ після набуття obywatelstwo polskie, stwierdzenia nieważności документа, cofnięcia zgody або wygaśnięcia рішення про згоду за ${foreignersLaw.article("354", "Art. 354")} ust. 1 pkt 1, 3 чи 4 або ust. 2.`,
            sourceLocator: "Art. 280 ust. 1–2 pkt 1–4",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Документ повертають organowi-видавцю niezwłocznie, але не пізніше 14 днів від doręczenia документа про громадянство або від дня, коли рішення з ust. 2 pkt 2–4 стало ostateczna чи wygasło; інші правила zwrotu відсилають до ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
            sourceLocator: "Art. 280 ust. 3–4",
          },
        ],
        summary:
          "Стаття регулює wymianę і zwrot документа «zgoda na pobyt tolerowany», включно з повним переліком подій та 14-денним строком.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Причини зміни даних, фото, втрати або пошкодження оцінюйте за ${foreignersLaw.article("256", "Art. 256")}.`,
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Визначте pkt 2–4 і рахуйте 14 днів від doręczenia документа про громадянство або від ostateczność чи wygaśnięcie відповідного рішення.",
          },
        ],
        legalEffect:
          "Повернення документа пов’язане зі зміною чинності згоди або статусу, а не є добровільною відмовою від самого pobytu tolerowanego.",
        foreignersCase: foreignersLaw.text`Після рішення про cofnięcie чи wygaśnięcie перевірте дату його остаточності, поверніть документ органу-видавцю та попросіть підтвердження zwrotu за ${foreignersLaw.article("249", "Art. 249")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-281",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Dokument «zgoda na pobyt tolerowany» unieważnia się: при utrata або uszkodzenie — від zgłoszenia; при wymiana через wizerunek або дані — від odbioru нового; після громадянства — зі спливом строку zwrotu; після смерті — від інформації органу; при неповерненні за ${foreignersLaw.article("280", "Art. 280")} ust. 2 pkt 2–4 — від ostateczność або wygaśnięcia рішення; при передачі знайденого документа без попереднього zgłoszenie utraty — від передачі; при zwrot odzyskanego документа — від zwrotu.`,
            sourceLocator: "Art. 281 ust. 1 pkt 1–7",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Unieważnienie здійснює organ, який видав документ, при громадянстві або смерті, передачі знайденого чи поверненні відновленого документа, ostateczność рішення про cofnięcie zgody або nieważność документа та wygaśnięcie zgody за ${foreignersLaw.article("354", "Art. 354")}; organ wymiany діє при zgłoszenie utraty або uszkodzenia та odbiór нового документа.`,
            sourceLocator: "Art. 281 ust. 2",
          },
        ],
        summary:
          "Стаття визначає підстави, моменти й компетентні органи для unieważnienia документа tolerowany.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Не плутайте дату події, що робить документ недійсним, із датою пізнішого технічного запису органу.",
          },
          {
            locator: "ust. 2 pkt 1–2",
            explanation:
              "Перевірте, який орган видав або обміняв документ, бо стаття розподіляє між ними unieważnienie.",
          },
        ],
        legalEffect:
          "Unieważnienie стосується документа tolerowany; воно не замінює аналіз рішення про cofnięcie або wygaśnięcie zgody.",
        foreignersCase: foreignersLaw.text`При втраті негайно подайте zgłoszenie. Після рішення або wygaśnięcia поверніть документ у строк ${foreignersLaw.article("280", "Art. 280")} і зберігайте підтвердження.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-282",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`До odbioru польського документа подорожі, польського документа особи та тимчасового польського документа подорожі застосовуються ${foreignersLaw.article("248", "Art. 248")} ust. 1–2.`,
            sourceLocator: "Art. 282",
          },
        ],
        summary:
          "Стаття поширює базові правила особистого отримання та представництва дитини на три види документів.",
        rules: [
          {
            locator: "zdanie 1",
            explanation: foreignersLaw.text`Застосовуйте вимогу особистого odbioru; для особи до 13 років документ отримує przedstawiciel ustawowy або kurator за ${foreignersLaw.article("248", "Art. 248")} ust. 2.`,
          },
        ],
        legalEffect: foreignersLaw.text`Відсилання стосується лише ${foreignersLaw.article("248", "Art. 248")} ust. 1–2, а не всіх правил перевірки даних з ust. 3.`,
        foreignersCase: foreignersLaw.text`Перед отриманням конкретного документа уточніть, хто має прибути до органу. Не розширюйте відсилання автоматично на інші частини ${foreignersLaw.article("248", "Art. 248")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-283",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Якщо під час kontroli granicznej або kontroli legalności pobytu встановлено, що cudzoziemiec користується документом, який мав повернути за ${foreignersLaw.article("233", "Art. 233")} ust. 2, ${foreignersLaw.article("249", "Art. 249")} ust. 1, ${foreignersLaw.article("258", "Art. 258")} ust. 1, ${foreignersLaw.article("265", "Art. 265")} ust. 2 або ${foreignersLaw.article("280", "Art. 280")} ust. 2, organ zatrzymuje документ, безоплатно видає zaświadczenie про zatrzymanie, надсилає документ organowi-видавцю та dokumentuje ці дії.`,
            sourceLocator: "Art. 283 pkt 1–4",
          },
        ],
        summary:
          "Стаття встановлює обов’язкові дії органу під час контролю, якщо cudzoziemiec користується документом, який мав повернути за прямо названими статтями.",
        rules: [
          {
            locator: "pkt 1–2",
            explanation:
              "Документ затримують і видають безоплатне zaświadczenie про його zatrzymanie.",
          },
          {
            locator: "pkt 3–4",
            explanation:
              "Затриманий документ надсилають органу, який його видав, а проведені дії фіксують.",
          },
        ],
        legalEffect:
          "Наслідком користування документом після обов’язку zwrotu є його вилучення під час відповідного контролю; це не є новим рішенням про право на pobyt.",
        foreignersCase:
          "Після повернення документа не використовуйте його повторно, навіть якщо він фізично залишився у вас. Зберігайте видане zaświadczenie, щоб підтвердити, що саме було затримано.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-284",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Якщо cudzoziemiec, попри обов’язок zwrotu одного з документів ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 або 5, його не повернув або повідомив про utratę, organ, якому документ належало повернути або якому повідомили про utratę, вносить інформацію про документ до Systemu Informacyjnego Schengen для його zajęcia.`,
            sourceLocator: "Art. 284 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Орган, який вніс інформацію за ust. 1, видаляє її з SIS, коли документ повернуто.",
            sourceLocator: "Art. 284 ust. 2",
          },
        ],
        summary:
          "Стаття передбачає внесення документа до SIS для затримання, якщо його не повернули або заявили про втрату, та видалення запису після повернення.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Обов’язок zwrotu та факт utraty можуть мати наслідок у SIS; сам запис виникає для забезпечення zajęcia документа.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Після фактичного zwrotu саме орган має видалити інформацію з SIS.",
          },
        ],
        legalEffect:
          "Запис у SIS стосується конкретного документа й його вилучення, а не самостійно визначає легальність pobytu чи винуватість іноземця.",
        foreignersCase:
          "Якщо документ повернуто, отримайте доказ zwrotu та зверніться до органу щодо актуальності запису SIS. Не користуйтеся документом, про втрату якого повідомляли.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-285",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Minister właściwy do spraw wewnętrznych визначає w drodze rozporządzenia wzory karty pobytu, polskiego dokumentu podróży, polskiego dokumentu tożsamości, tymczasowego polskiego dokumentu podróży, документа «zgoda na pobyt tolerowany», форм zgłoszenia utraty або uszkodzenia та zaświadczeń o utracie, zwrocie і zatrzymaniu, а також wzory wniosków про видачу або wymianę названих документів.",
            sourceLocator: "Art. 285 ust. 1 pkt 1–2",
          },
          {
            kind: "statute-text",
            text: "Те саме rozporządzenie визначає кількість і технічні вимоги до фотографій, спосіб unieważniania, pobierania odcisków та передачі даних для персоналізації документів; ураховуються читабельність, необхідні персональні дані й усунення дефектного документа.",
            sourceLocator: "Art. 285 ust. 1 pkt 3–6, ust. 2",
          },
        ],
        summary:
          "Стаття делегує міністру технічне визначення форм документів, заяв, фото, відбитків, unieważniania та персоналізації.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation:
              "Актуальний wzór wniosku або dokumentu потрібно брати з чинного rozporządzenia, а не відтворювати за старим бланком.",
          },
          {
            locator: "ust. 1 pkt 3–6",
            explanation:
              "Технічні вимоги до фото, відбитків і передачі даних також належать до підзаконного регулювання.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Критерії розпорядження мають забезпечувати повноту, потрібний обсяг даних і можливість усунути wadliwy dokument.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("285", "Art. 285")} не встановлює всі деталі бланка безпосередньо; для подання треба перевірити актуальне розporządzenie та його перехідні правила.`,
        foreignersCase:
          "Перед заявою завантажте чинний офіційний formularz, перевірте кількість і технічні вимоги до фото та не використовуйте стару версію без перевірки.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-286",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Cudzoziemcy, які є учнями з państw trzecich і беруть участь у шкільній поїздці до іншої держави-члена UE за правилами decyzja Rady 94/795/WSiSW, можуть бути включені директором школи до listy podróżujących для поїздок у UE.",
            sourceLocator: "Art. 286 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Wojewoda за місцем осідку школи на заяву директора підтверджує персональні дані учнів і їхнє право на повторний в’їзд до Польщі; список складається на formularzu.",
            sourceLocator: "Art. 286 ust. 2–3",
          },
        ],
        summary:
          "Стаття створює спеціальний механізм listy podróżujących для учнів із państw trzecich і підтвердження їхніх даних та права на ponowny wjazd до RP.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Має йтися про учня з państwa trzeciego, шкільну поїздку до іншої держави ЄС і умови відповідного рішення Ради.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Звертається директор школи, а підтвердження надає wojewoda за місцем її сiedziby на встановленому formularzu.",
          },
        ],
        legalEffect:
          "Підтвердження стосується персональних даних і права на ponowny wjazd у межах цього механізму; воно не є загальним дозволом на будь-які поїздки.",
        foreignersCase:
          "Школа має заздалегідь зібрати дані учнів і подати wniosek wojewodzie за своєю siedzibą. Перед виїздом перевірте, що кожен учень включений до підтвердженої listy podróżujących.",
      },
    ],
  })
