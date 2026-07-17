import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const workReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const
type WorkInstrumentsBody = LegalMapTopicBody

export const workInstrumentsTopic: KnowledgeUnit<WorkInstrumentsBody> =
  defineKnowledgeUnit({
    id: "map-topic:work-instruments",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "work-instruments" },
    },
    summary:
      "Різні моделі праці мають окремі процедури. Не використовуй oświadczenie або звичайний дозвіл лише тому, що він знайоміший.",
    claims: [
      {
        id: "instrument-follows-facts",
        kind: "practical-inference",
        text: workLaw.text`Zezwolenie, oświadczenie, zezwolenie na pracę sezonową і delegowanie мають окремі конструкції, органи та умови; їх вибір починається з фактичної моделі за ${workLaw.article("6", "art. 6")}.`,
        basis: [{ reference: workReference, locator: "Art. 6" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: {
      title: "Інструменти легалізації праці",
      polish: "zezwolenie, oświadczenie, praca sezonowa",
      sources: [mapTopicSources.work],
      guide: {
        introduction: [
          "Zezwolenie, oświadczenie, zezwolenie na pracę sezonową і delegowanie — це не взаємозамінні назви одного документа. Кожен інструмент відповідає іншій конструкції праці, іншому organowi, набору умов і способу фіксації роботодавця та фактичного користувача праці.",
          "Вибір інструменту починається з правової моделі: хто є роботодавцем, де він має siedzibę, хто керує роботою, чи робота сезонна та чи cudzoziemiec належить до громадянств, охоплених oświadczeniem.",
        ],
        regulated: [
          workLaw.text`${workLaw.article("6", "Art. 6")} ustawy z 20.03.2025 розподіляє zezwolenia між працею для польського podmiotu, виконанням функції, delegowaniem та pracą sezonową, а також визначає загальну сферу oświadczenia.`,
          "Rozdziały 2–6 встановлюють окремі органи, зміст заяви, підстави відмови, обсяг рішення, допустимі зміни та строки для кожного інструменту.",
          "Praca tymczasowa може бути реалізована всередині звичайного, сезонного або oświadczeniowego режиму, але podmiotem powierzającym є agencja, а pracodawca użytkownik має бути відкрито вказаний.",
        ],
        appliesWhen: [
          "Інструмент обирається тоді, коли cudzoziemiec не має swobodnego dostępu і робота не охоплена іншим ustawowym zwolnieniem.",
          "Повторна кваліфікація потрібна при зміні роботодавця, pracodawcy użytkownika, характеру праці, сезонного PKD, виду umowy або при переході від польського роботодавця до delegowania через podmiot zagraniczny.",
        ],
        conditions: [
          "Zezwolenie na rzecz polskiego podmiotu вимагає договору з польським podmiotem, належного wynagrodzenia та допустимого часу праці.",
          "Oświadczenie доступне лише для громадянств із чинного rozporządzenia, для несезонної праці та в межах установленого періоду.",
          "Zezwolenie sezonowe залежить від виду діяльності в чинному переліку PKD, а delegowanie — від реального трудового зв'язку з podmiotem zagranicznym і тимчасового направлення до Польщі.",
        ],
        exceptions: [
          "Особа зі swobodnym dostępem або іншим ustawowym zwolnieniem не переходить автоматично до одного з цих інструментів, хоча роботодавець зберігає загальні обов'язки щодо umowy та легальності перебування.",
          "Jednolity zezwolenie na pobyt czasowy i pracę є документом pobytowym із правом до праці в межах рішення; це інша процедура, ніж zezwolenie na pracę, стороною якої є podmiot powierzający.",
        ],
        consequences: [
          "Неправильний інструмент може призвести до pozostawienia bez rozpoznania, odmowy wszczęcia, odmowy wydania документа або до того, що фактична праця не буде охоплена отриманим документом.",
          workLaw.text`Приховане направлення людей до третьої особи через podmiot, який не є законною agencją pracy tymczasowej, створює окрему підставу відмови за ${workLaw.article("13", "art. 13")} ust. 1 pkt 7.`,
        ],
        procedure: [
          "Звичайне й delegacyjne zezwolenie видає właściwy wojewoda, сезонне zezwolenie і wpis oświadczenia здійснює właściwy starosta через powiatowy urząd pracy.",
          "Заяви, oświadczenia, додатки та środki zaskarżenia подаються через визначені законом системи teleinformatyczne.",
          "Після видачі документа podmiot укладає відповідну umowę, виконує обов'язок передання її до системи та контролює строки повідомлень і допустимих змін.",
        ],
        foreignersContext: [
          "Для cudzoziemca вирішальним є не лише наявність документа, а його зв'язок із конкретним podmiotem, pracodawcą użytkownikiem, видом праці й чинним tytułem pobytowym.",
          "У sprawie pobytowej документ легалізації праці є одним із доказів, але орган також зіставляє його з фактичним договором, ZUS, wynagrodzeniem та реальною організацією роботи.",
        ],
      } satisfies LegalNodeGuide,
      related: ["work-entry", "stay-work", "temporary-work"],
    },
  })

export default workInstrumentsTopic

export const workInstrumentsMapNode: LegalNode = {
  id: "work-instruments",
  title: workInstrumentsTopic.body.title,
  polish: workInstrumentsTopic.body.polish,
  summary: workInstrumentsTopic.summary,
  sources: [...workInstrumentsTopic.body.sources],
  related: [...(workInstrumentsTopic.body.related ?? [])],
}
