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
type DeclarationBody = LegalMapTopicBody

export const declarationTopic: KnowledgeUnit<DeclarationBody> =
  defineKnowledgeUnit({
    id: "map-topic:declaration",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "declaration" },
    },
    summary:
      "Спрощена електронна процедура лише в межах передбачених законом громадянств, робіт і умов; перевір реєстрацію та фактичний початок.",
    claims: [
      {
        id: "declaration-scope",
        kind: "requires-verification",
        text: workLaw.text`Oświadczenie є окремим режимом wpisu do ewidencji з власними громадянствами, строком і обов’язками за ${workLaw.article("61", "art. 61")}–${workLaw.articleRange("68", "71", { start: "art. 68", end: "71" })}.`,
        basis: [{ reference: workReference, locator: "Art. 61–71" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: {
      title: "Oświadczenie",
      polish: workLaw.text`${workLaw.articleRange("61", "71", { start: "art. 61", end: "71" })}`,
      sources: [mapTopicSources.work, mapTopicSources.workChange],
      guide: {
        introduction: [
          "Oświadczenie o powierzeniu pracy cudzoziemcowi — це спрощений електронний режим wpisu do ewidencji, а не приватна заява роботодавця, яка діє сама по собі. Право до праці виникає в межах зареєстрованих умов і разом із допустимим tytułem pobytowym.",
          "Від 01.12.2025 чинний перелік охоплює громадян Вірменії, Білорусі, Молдови та України; для громадян Грузії збережено лише перехідне продовження роботи за oświadczeniami, внесеними до ewidencji раніше.",
        ],
        regulated: [
          workLaw.text`${workLaw.article("61", "Art. 61")} визначає сферу oświadczenia: громадянство з чинного розпорядження, праця в Польщі поза sezonowymi działalnościami, строк до 24 місяців і початок не пізніше 6 місяців від подання.`,
          workLaw.text`${workLaw.articleRange("62", "67", { start: "Art. 62", end: "67" })} регулюють зміст, додатки, opłatę, właściwość starosty, відмову, строки wpisu та електронне оскарження.`,
          workLaw.text`${workLaw.articleRange("68", "71", { start: "Art. 68", end: "71" })} регулюють договір, передання його до системи, повідомлення про початок або непочаток праці, допустимі зміни та окреме продовження легальної роботи.`,
        ],
        appliesWhen: [
          "Oświadczenie застосовується до польського podmiotu та cudzoziemca з одного з чотирьох визначених громадянств, якщо робота не належить до сезонного переліку й не є виконанням функції, delegowaniem або іншою виключеною конструкцією.",
          "Для pracy tymczasowej oświadczenie подає agencja, а документ містить також дані pracodawcy użytkownika.",
        ],
        conditions: [
          "Період роботи в oświadczeniu не перевищує 24 місяців, а заявлена дата початку настає не пізніше 6 місяців від подання.",
          "Wynagrodzenie повинно бути не нижчим від порівнюваного та мінімального; oświadczenie містить stanowisko lub rodzaj pracy, miejsce, umowę, stawkę та час праці.",
          "До oświadczenia додаються документи за Dz.U. 2025 poz. 1629, а podmiot подає правдиві дані й oświadczenia під rygorem odpowiedzialności karnej.",
        ],
        exceptions: [
          "Praca w działalności з сезонного переліку не переходить до oświadczenia; для неї застосовується zezwolenie na pracę sezonową.",
          workLaw.text`Новий wpis не потрібний для змін, перелічених у ${workLaw.article("69", "art. 69")}, зокрема для окремих змін podmiotu, збільшення часу праці до повного, зміни назви stanowiska без зміни обов'язків і переходу на umowę o pracę за змінами чинними від 08.07.2026.`,
        ],
        consequences: [
          workLaw.text`Oświadczenie, яке не відповідає ${workLaw.article("61", "art. 61")}, залишається bez rozpoznania; підстави ${workLaw.article("65", "art. 65")} ведуть до decyzji o odmowie wpisu.`,
          workLaw.text`Powiadomienie, що cudzoziemiec не почне або достроково завершив роботу, у випадках ${workLaw.article("70", "art. 70")} ust. 2 анулює wpis z mocy prawa; невиконання obowiązków може спричинити штраф.`,
        ],
        procedure: [
          "Polski podmiot електронно подає oświadczenie з opłatą та документами до starosty, właściwego за siedzibą або stałym pobytem.",
          "Після wpisu podmiot укладає umowę на відповідних умовах, передає umowę або її копію через właściwy system до початку роботи та видає cudzoziemcowi зареєстроване oświadczenie.",
          "Про фактичний початок повідомляється протягом 7 днів, про непочаток — протягом 14 днів від заявленої дати; дострокове завершення або остаточний непочаток повідомляються окремо.",
        ],
        foreignersContext: [
          workLaw.text`Для громадянина України oświadczenie залишається можливим інструментом, але при ochronie czasowej зазвичай працює окреме powiadomienie за ${workLaw.article("5a", "art. 5a")}; це два різні правові режими.`,
          "Oświadczenie не продовжує саме по собі legalnego pobytu й не дозволяє працювати після втрати допустимого tytułu pobytowego.",
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default declarationTopic

export const declarationMapNode: LegalNode = {
  id: "declaration",
  title: declarationTopic.body.title,
  polish: declarationTopic.body.polish,
  summary: declarationTopic.summary,
  sources: [...declarationTopic.body.sources],
}
