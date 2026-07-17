import {
  createLegalTextAuthor,
  defineLegalTextContent,
} from "~/data/legal-library/legal-text"
import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"

const _kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const _workLaw = createLegalTextAuthor("powierzanie-pracy")
const _ppsaLaw = createLegalTextAuthor("ppsa")
const residenceLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
const _WORK_REGULATION_URL = "https://eli.gov.pl/eli/DU/2025/1629/ogl"
const UKRAINE_SPECIAL_ACT_URL =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"
const FOREIGNERS_2026_CHANGE_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"

export const legalNodeGuidesPobyt = defineLegalTextContent(
  {
    "stay-work": {
      introduction: [
        "Pobyt czasowy i praca поєднує мету перебування з виконанням праці, але залишається zezwoleniem pobytowym, за яким заявником і стороною є cudzoziemiec.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("114", "126", { start: "Art. 114", end: "126" })} регулюють позитивні умови, odmowę wszczęcia, odmowę, treść zezwolenia, зміну, втрату роботи та обов’язки.`,
      ],
      appliesWhen: [
        "Праця має бути реальною метою pobytu понад три місяці, а ситуація не повинна належати до іншої спеціальної процедури або виключення.",
      ],
      conditions: [
        foreignersLaw.text`Organ перевіряє, зокрема, umowę/${residenceLaw.annex("1", "Załącznik nr 1")}, винагороду, страхування за ${foreignersLaw.article("114", "art. 114")} ust. 1 pkt 1, реальність podmiotu та відповідність фактичної організації праці заявленій моделі.`,
      ],
      exceptions: [
        foreignersLaw.text`Для osoby zwolnionej z obowiązku posiadania zezwolenia na pracę treść decyzji за ${foreignersLaw.article("118", "art. 118")} може не містити всіх умов прив’язки; вирішальним є конкретне rozstrzygnięcie.`,
      ],
      consequences: [
        "Позитивна decyzja надає pobyt на визначений строк і встановлює межі праці; втрата або зміна роботи може активувати повідомлення, зміну дозволу або нову заяву.",
      ],
      procedure: [
        "Заявник подає MOS, роботодавець електронно підписує właściwy załącznik, organ проводить formalne і dowodowe postępowanie та формулює decyzję.",
      ],
      foreignersContext: [
        foreignersLaw.text`Для osoby з UKR у 2026 році доступ до цієї процедури може випливати з ${foreignersLaw.external("art. 45", UKRAINE_SPECIAL_ACT_URL)} ustawy Dz.U. 2026 poz. 203, але status UKR і powiadomienie pozostają окремими питаннями до надання дозволу.`,
      ],
    },
    "blue-card": {
      introduction: [
        "Niebieska Karta UE є pobytem czasowym для роботи, що вимагає високих кваліфікацій, із спеціальними правилами строку, mobilności та зміни праці.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("127", "138", { start: "Art. 127", end: "138" })} ustawy o cudzoziemcach після змін 2025–2026 визначають кваліфікації, umowę, мінімальний строк праці, wynagrodzenie, odmowy та mobilność w UE.`,
      ],
      appliesWhen: [
        "Робота повинна належати до zawodu wymagającego wysokich kwalifikacji, а заявник має довести kwalifikacje та законну umowę або wiążącą ofertę на потрібний період.",
      ],
      conditions: [
        "Винагорода повинна досягати актуального законного порогу, а строк і характер договору — відповідати спеціальній нормі; dokuments кваліфікації оцінюються за видом професії.",
      ],
      exceptions: [
        "Окремі regulowane zawody потребують формального визнання права виконувати професію; mobilność posiadacza Blue Card з іншої держави має власну процедуру.",
      ],
      consequences: [
        "Дозвіл документується kartą з adnotacją «Niebieska Karta UE» та дає спеціальні права mobilności й полегшення, але зміна обставин підлягає правилам цієї глави.",
      ],
      procedure: [
        "Заява і спеціальні załączniki подаються електронно через MOS, organ перевіряє роботодавця, умови, kwalifikacje та treść майбутнього zezwolenia.",
      ],
      foreignersContext: [
        "Blue Card може впливати на обчислення п’ятирічного періоду rezydenta UE та допустимі перерви, але ці переваги застосовуються лише за виконання спеціальних умов.",
      ],
    },
    "business-stay": {
      introduction: [
        "Pobyt czasowy w celu prowadzenia działalności gospodarczej спирається на реальну господарську діяльність, а не лише на реєстрацію firmy або володіння udziałami.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("142", "143", { start: "Art. 142", end: "143" })} визначають адресатів, економічні показники, zatrudnienie або здатність виконати ці умови в майбутньому та підстави odmowy.`,
      ],
      appliesWhen: [
        "Метою pobytu є prowadzenie działalności, управління визначеною spółką, ведення її справ як komplementariusz або дія як prokurent у передбачених законом випадках.",
      ],
      conditions: [
        "Доводяться реальна діяльність, дохід або потрібне zatrudnienie, або ресурси й дії, що дозволять досягти законних показників, зокрема інвестиції, інновації чи створення місць праці.",
      ],
      exceptions: [
        "Різні форми діяльності та функції в spółce змінюють набір dokumentów і можуть вимагати додаткового załącznika щодо праці.",
      ],
      consequences: [
        "Позитивний дозвіл легалізує pobyt у бізнесовій меті; фіктивна, zawieszona або економічно непідтверджена діяльність може вести до відмови чи cofnięcia.",
      ],
      procedure: [
        foreignersLaw.text`Через MOS подаються заява, реєстрові, фінансові, податкові, трудові та планові докази, після чого organ оцінює виконання альтернативних умов ${foreignersLaw.article("142", "art. 142")}.`,
      ],
      foreignersContext: [
        foreignersLaw.text`Для beneficjenta UKR доступність звичайної бізнесової процедури у 2026 році перевіряється через ${foreignersLaw.external("art. 45", FOREIGNERS_2026_CHANGE_URL)} ustawy Dz.U. 2026 poz. 203.`,
      ],
    },
    "study-research": {
      introduction: [
        "Studia, badania naukowe, staż і mobilność мають окремі підстави, бо закон оцінює не лише присутність у закладі, а статус установи, програму та реальну мету.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("144", "157f", { start: "Art. 144", end: "157f" })} охоплюють studia, mobilność studenta, badania naukowe, mobilność naukowca, staż та пов’язані процедури.`,
      ],
      appliesWhen: [
        "Підстава відповідає фактичній формі навчання, дослідження або стажу та належній установі.",
      ],
      conditions: [
        "Зазвичай потрібні прийняття або umowa з установою, оплата навчання за наявності, страхування та достатні засоби на утримання і powrót; спеціальні умови залежать від маршруту.",
      ],
      exceptions: [
        "Studia stacjonarne, інші форми навчання, badania і staż не є взаємозамінними; кожна категорія має власні правила праці та odmowy.",
      ],
      consequences: [
        "Дозвіл прив’язаний до освітньої або наукової мети; припинення навчання чи співпраці може активувати повідомлення або cofnięcie.",
      ],
      procedure: [
        "Через MOS подаються заява та документи установи, фінансування, страхування й проживання; organ перевіряє статус установи та реальність мети.",
      ],
      foreignersContext: [
        "Періоди studiów можуть зараховуватися до rezydenta UE частково, а доступ до праці визначається конкретною навчальною підставою та чинними правилами праці.",
      ],
    },
    "family-stay": {
      introduction: [
        "Rodzinny pobyt ґрунтується на конкретному сімейному зв’язку та правовому статусі особи, з якою następuje połączenie. Саме проживання разом не замінює категорії, визначеної законом.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("158", "169", { start: "Art. 158", end: "169" })} охоплюють małżonków, małoletnie dzieci, połączenie z cudzoziemcem або громадянином Польщі та інші сімейні ситуації.`,
      ],
      appliesWhen: [
        "Заявник належить до визначеної категорії, а сімейний зв’язок існує й має юридичне та фактичне підтвердження.",
      ],
      conditions: [
        "Залежно від підстави перевіряються akt stanu cywilnego, status sponsora, ubezpieczenie, dochód, mieszkanie та реальність więzi rodzinnej.",
      ],
      exceptions: [
        "Małżeństwo zawarte dla obejścia przepisów не створює права; дитина не набуває автоматично дозволу батька і часто потребує власної процедури.",
      ],
      consequences: [
        "Дозвіл легалізує pobyt у сімейній меті та може давати окремий доступ до праці; припинення зв’язку оцінюється за спеціальними нормами й фактичними обставинами.",
      ],
      procedure: [
        "Заява подається через MOS із документами стану cywilnego, статусу члена сім’ї та іншими доказами, після чого organ перевіряє достовірність і materialne przesłanki.",
      ],
      foreignersContext: [
        "Для członka rodziny obywatela UE може діяти інший правовий режим, тому спочатку визначається статус особи, з якою відбувається połączenie.",
      ],
    },
    "other-stay": {
      introduction: [
        "Інші обставини — це не одна залишкова підстава, а група окремих дозволів із самостійними адресатами та наслідками.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("170", "194", { start: "Art. 170", end: "194" })} охоплюють, серед іншого, ofiary handlu ludźmi, okoliczności wymagające krótkotrwałego pobytu, pracę sezonową, absolwentów та інші визначені ситуації.`,
      ],
      appliesWhen: [
        "Застосовується лише конкретна стаття, фактичний склад якої повністю відповідає ситуації особи.",
      ],
      conditions: [
        "Кожна підстава має власний документальний факт: співпрацю з organem, особисту явку, сезонну роботу, завершення studiów або іншу прямо названу обставину.",
      ],
      exceptions: [
        foreignersLaw.text`Короткотривалий pobyt за ${foreignersLaw.article("181", "art. 181")} надається на необхідний строк до шести місяців і не повинен використовуватися як загальна заміна звичайної легалізації.`,
      ],
      consequences: [
        "Строк, доступ до праці, можливість продовження та зарахування до rezydenta UE різняться залежно від конкретної статті.",
      ],
      procedure: [
        "Перед поданням визначається точний artykuł, після чого через MOS подаються докази саме його фактичного складу.",
      ],
      foreignersContext: [
        "Наявність гуманітарної або короткотривалої обставини не означає автоматичної доступності всіх інших pobytowych маршрутів.",
      ],
    },
    "permanent-resident": {
      introduction: [
        "Pobyt stały і rezydent długoterminowy UE є двома різними безстроковими zezwoleniami. Перший залежить від спеціальної категорії особи, другий — переважно від тривалості та якості попереднього pobytu.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("195", "206", { start: "Art. 195", end: "206" })} регулюють pobyt stały, а ${foreignersLaw.article("211", "art. 211")}–${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)} — rezydenta długoterminowego UE; спільною є електронна процедура MOS від 27.04.2026.`,
      ],
      appliesWhen: [
        foreignersLaw.text`Pobyt stały застосовується за однією з підстав ${foreignersLaw.article("195", "art. 195")}, rezydent UE — після належного періоду legalnego i nieprzerwanego pobytu та виконання додаткових умов.`,
      ],
      conditions: [
        "Обидва дозволи є безстроковими, але карти мають власний строк ważności та підлягають wymianie; матеріальні умови маршрутів не змішуються.",
      ],
      exceptions: [
        "П’ятирічний pobyt не є загальною умовою pobytu stałego, а родинне походження чи Karta Polaka не замінюють умов rezydenta UE.",
      ],
      consequences: [
        "Дозволи дають стабільну підставу pobytu та широкий доступ до праці, але можуть бути cofnięte за спеціальними підставами.",
      ],
      procedure: [
        "Спочатку обирається один із двох режимів, потім через MOS подається заява з доказами лише його przesłanek.",
      ],
      foreignersContext: [
        foreignersLaw.text`Період CUKR офіційно зараховується до періоду для rezydenta UE, тоді як сам status UKR і періоди інших режимів потребують оцінки за ${foreignersLaw.external("art. 212", UKRAINE_SPECIAL_ACT_URL)}.`,
      ],
    },
    permanent: {
      introduction: [
        foreignersLaw.text`Zezwolenie na pobyt stały надається на czas nieoznaczony особі, яка належить до однієї з точно визначених категорій ${foreignersLaw.article("195", "art. 195")}.`,
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} визначає підстави, а ${foreignersLaw.articleRange("196", "206", { start: "art. 196", end: "206" })} — odmowę wszczęcia, odmowę, cofnięcie, właściwość, заяву та перебування під час процедури.`,
      ],
      appliesWhen: [
        "Підстава може випливати, зокрема, з польського походження, Karty Polaka, сімейного зв’язку або визначеного захисного статусу — лише в законному обсязі конкретного punktu.",
      ],
      conditions: [
        "Заявник доводить усі елементи вибраної категорії, тривалість або безперервність pobytu, якщо вони потрібні, та документи rodzinne або statusowe.",
      ],
      exceptions: [
        foreignersLaw.text`Категорії ${foreignersLaw.article("195", "art. 195")} не можна поєднувати довільно; відсутність однієї умови конкретної підстави не компенсується загальною тривалістю pobytu.`,
      ],
      consequences: [
        "Позитивна decyzja створює безстроковий pobyt, а karta pobytu лише документує його протягом строку ważności документа.",
      ],
      procedure: [
        "Від 27.04.2026 заява подається через MOS; organ перевіряє formalne przesłanki, матеріальну категорію та підстави odmowy/cofnięcia.",
      ],
      foreignersContext: [
        "Для osoby польського походження або posiadacza Karty Polaka значення мають автентичні акти, deklaracje narodowości та інші докази, прямо пов’язані з відповідною підставою.",
      ],
    },
    "long-term-eu": {
      introduction: [
        "Zezwolenie na pobyt rezydenta długoterminowego UE є безстроковим статусом для osoby, яка накопичила належний legalny i nieprzerwany pobyt та стабільно виконує умови інтеграції й утримання.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.article("211", "Art. 211")} визначає основні умови, ${foreignersLaw.article("212", "art. 212")} — спосіб зарахування періодів і допустимі перерви, а ${foreignersLaw.article("213", "art. 213")}–${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)} — виключення, процедуру, відмову та cofnięcie.`,
      ],
      appliesWhen: [
        "Загальне правило вимагає щонайменше п’ять років legalnego i nieprzerwanego pobytu безпосередньо перед поданням.",
      ],
      conditions: [
        foreignersLaw.text`Потрібні stabilne i regularne źródło dochodu, ubezpieczenie zdrowotne, підтверджена польська мова та tytuł prawny do lokalu як необхідний додаток; періоди рахуються за ${foreignersLaw.article("212", "art. 212")}, а не лише календарно.`,
      ],
      exceptions: [
        "Окремі періоди не зараховуються або зараховуються наполовину; загалом одноразова відсутність до 6 місяців і сумарно до 10 місяців не перериває п’ятирічний період, а для визначених posiadaczy Blue Card діють ширші межі.",
      ],
      consequences: [
        "Zezwolenie надається безстроково, тоді як karta rezydenta має строк важності та підлягає wymianie; статус може бути втрачений за спеціальними підставами.",
      ],
      procedure: [
        "Заява подається через MOS; organ ретроспективно обчислює кожен період pobytu, доходи за потрібні роки, страхування, мову й tytuł do lokalu.",
      ],
      foreignersContext: [
        foreignersLaw.text`Період studiów зазвичай зараховується наполовину, CUKR за офіційною інформацією — повністю, а періоди ochrony або очікування оцінюються за точним текстом ${foreignersLaw.external("art. 212", UKRAINE_SPECIAL_ACT_URL)}.`,
      ],
    },
  },
  "legal-node-guides-pobyt"
) satisfies LegalNodeGuideMap
