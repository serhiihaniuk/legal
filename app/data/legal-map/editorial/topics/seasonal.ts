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
type SeasonalBody = LegalMapTopicBody

export const seasonalTopic: KnowledgeUnit<SeasonalBody> = defineKnowledgeUnit({
  id: "map-topic:seasonal",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "seasonal" },
  },
  summary:
    "Окремий режим для визначених сезонних видів діяльності; не ототожнюй із будь-якою короткою роботою.",
  claims: [
    {
      id: "seasonal-is-pkd-specific",
      kind: "requires-verification",
      text: workLaw.text`Praca sezonowa залежить від діяльності в установленому переліку PKD та спеціальних умов ${workLaw.article("45", "art. 45")}–${workLaw.articleRange("56", "60", { start: "art. 56", end: "60" })}, а не лише від короткої тривалості роботи.`,
      basis: [{ reference: workReference, locator: "Art. 45–60" }],
    },
  ],
  relationships: [],
  review: {
    reviewStatus: "reviewed",
    language: "uk",
    legalStateDate: "2026-07-18",
    verifiedAt: "2026-07-18",
  },
  body: {
    title: "Praca sezonowa",
    polish: workLaw.text`${workLaw.articleRange("45", "60", { start: "art. 45", end: "60" })}`,
    sources: [mapTopicSources.work, mapTopicSources.workChange],
    guide: {
      introduction: [
        workLaw.text`Praca sezonowa — це спеціальний режим для робіт у działalnościach, прямо перелічених у розпорядженні за ${workLaw.article("45", "art. 45")} ust. 2. Короткий строк або літній період самі по собі не роблять роботу sezonową.`,
        "Від 01.12.2025 чинний перелік Dz.U. 2025 poz. 1654 ґрунтується на PKD 2025 і охоплює визначені види рослинництва, частину сільськогосподарських послуг, туристичне короткострокове розміщення, кемпінги та рухомі placówki gastronomiczne.",
      ],
      regulated: [
        workLaw.text`${workLaw.article("45", "Art. 45")} встановлює умови wydania: польський podmiot, порівнюване wynagrodzenie, робота в установленому PKD та максимум 9 місяців у календарному році.`,
        workLaw.text`${workLaw.articleRange("46", "55", { start: "Art. 46", end: "55" })} регулюють właściwość starosty, заяву, ewidencję wniosków, в'їзд, zgłoszenie się cudzoziemca, видачу й зміст zezwolenia.`,
        workLaw.text`${workLaw.articleRange("56", "60", { start: "Art. 56", end: "60" })} визначають допустимі зміни, przedłużenie, zakwaterowanie, uchylenie та спеціальні наслідки для cudzoziemca.`,
      ],
      appliesWhen: [
        "Режим застосовується, якщо фактична робота виконується в межах конкретної діяльності, зазначеної в чинному załączniku PKD, а не лише якщо роботодавець має такий код у реєстрі.",
        "Він застосовується як до cudzoziemca, який перебуває в Польщі на допустимій підставі, так і до особи, яка в'їжджає на сезонну роботу після wpisu wniosku do ewidencji.",
      ],
      conditions: [
        "Винагорода не може бути нижчою від wynagrodzenia працівників на порівнюваній роботі в тому самому часі праці.",
        "Сумарний сезонний період не перевищує 9 місяців у календарному році; для в'їзду на сезонну роботу обчислення пов'язане з першим в'їздом до Schengen після zaświadczenia o wpisie.",
        "Wniosek містить інформацію про pobyt, zakwaterowanie та płatny urlop, а пакет документів визначає Dz.U. 2025 poz. 1629.",
      ],
      exceptions: [
        workLaw.text`Для громадян Вірменії, Білорусі, Молдови та України ${workLaw.article("53", "art. 53")} і ${workLaw.article("56", "art. 56")} передбачають окремі полегшення, зокрема багаторічний wpis у визначених умовах та коротке доручення іншого виду праці.`,
        workLaw.text`${workLaw.article("56", "Art. 56")} допускає окремі зміни без нового zezwolenia, але праця іншого виду до 30 днів не доступна pracownikowi tymczasowemu й вимагає збереження умов закону.`,
      ],
      consequences: [
        "Використання сезонного режиму поза чинним PKD або понад ліміт часу означає, що zezwolenie не охоплює фактичну роботу.",
        workLaw.text`Неподання zgłoszenia cudzoziemca після в'їзду може призвести до umorzenia postępowania z mocy prawa; uchylenie zezwolenia може створити право cudzoziemca на відшкодування за ${workLaw.article("60", "art. 60")}.`,
      ],
      procedure: [
        "Polski podmiot подає електронний wniosek до właściwego starosty; для cudzoziemca, який має приїхати, starosta спершу вносить wniosek до ewidencji та видає zaświadczenie o wpisie.",
        "Після в'їзду podmiot подає oświadczenie o zgłoszeniu się cudzoziemca do pracy, копію dokumentu podróży і підтвердження дати в'їзду; від цієї дії може початися законна робота до рішення.",
        "Starosta видає zezwolenie із зазначенням часу праці, wynagrodzenia, підстави та строку, а для pracy tymczasowej також pracodawcy użytkownika.",
      ],
      foreignersContext: [
        "Віза сезонного призначення, ruch bezwizowy та zezwolenie sezonowe утворюють пов'язану конструкцію; дата першого в'їзду впливає на доступний дев'ятимісячний період.",
        workLaw.text`Для особи, яка вже легально перебуває в Польщі на іншій підставі, ${workLaw.article("49", "art. 49")} і ${workLaw.article("54", "art. 54")} ust. 3 встановлюють інші правила початку й обчислення дозволеного періоду.`,
      ],
    } satisfies LegalNodeGuide,
  },
})

export default seasonalTopic

export const seasonalMapNode: LegalNode = {
  id: "seasonal",
  title: seasonalTopic.body.title,
  polish: seasonalTopic.body.polish,
  summary: seasonalTopic.summary,
  sources: [...seasonalTopic.body.sources],
}
