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
