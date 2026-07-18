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
type WorkPermitBody = LegalMapTopicBody

export const workPermitTopic: KnowledgeUnit<WorkPermitBody> =
  defineKnowledgeUnit({
    id: "map-topic:work-permit",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "work-permit" },
    },
    summary:
      "Процедура для роботи, яку доручає польський суб’єкт; у дозволі фіксуються ключові умови, а стороною справи є роботодавець.",
    claims: [
      {
        id: "work-permit-specific-party",
        kind: "requires-verification",
        text: workLaw.text`Zezwolenie na pracę є рішенням на wniosek podmiotu powierzającego, а його умови та підстави відмови визначаються, зокрема, ${workLaw.article("26", "art. 26")}, ${workLaw.article("30", "art. 30")} та ${workLaw.article("32", "art. 32")}.`,
        basis: [{ reference: workReference, locator: "Art. 26–34" }],
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
      title: "Zezwolenie — polski podmiot",
      polish: workLaw.text`${workLaw.articleRange("26", "34", { start: "art. 26", end: "34" })}`,
      sources: [mapTopicSources.work, mapTopicSources.workChange],
      guide: {
        introduction: [
          "Zezwolenie na pracę cudzoziemca na rzecz polskiego podmiotu є адміністративним рішенням, яке видається на wniosek роботодавця. Стороною цієї справи є виключно podmiot powierzający pracę, а не сам cudzoziemiec.",
          "Рішення не створює загального права працювати будь-де. Воно фіксує конкретні параметри роботи й діє разом із допустимим tytułem pobytowym.",
        ],
        regulated: [
          workLaw.text`${workLaw.article("26", "Art. 26")} визначає właściwość wojewody та випадки, коли звичайний режим не підходить, зокрема для pracy sezonowej.`,
          workLaw.text`${workLaw.article("30", "Art. 30")} встановлює умови договору, порівнюваного й мінімального wynagrodzenia та виміру часу праці; ${workLaw.article("32", "art. 32")} визначає елементи рішення.`,
          workLaw.text`${workLaw.articleRange("13", "14", { start: "Art. 13", end: "14" })} і ${workLaw.article("31", "art. 31")} містять підстави обов'язкової або можливої відмови, включно з реальністю діяльності podmiotu, забороненим направленням до третьої особи, позірністю праці та локальними listami zawodów.`,
        ],
        appliesWhen: [
          "Цей режим застосовується, коли cudzoziemiec має виконувати несезонну роботу за umową з польським podmiotem і не має swobodnego dostępu чи іншої достатньої підстави.",
          "Для pracy tymczasowej заявником залишається agencja pracy tymczasowej, а в рішенні додатково визначається pracodawca użytkownik.",
        ],
        conditions: [
          "Пропоноване wynagrodzenie не може бути нижчим від wynagrodzenia працівників на порівнюваній роботі та від мінімального wynagrodzenia; для неповного часу порівняння здійснюється пропорційно.",
          "Wymiar czasu pracy має бути не менше 1/4 і не більше повного часу, а podmiot повинен мати реальну діяльність та засоби для виконання зобов'язань.",
          "Для pracy tymczasowej agencja повинна діяти законно, мати потрібний wpis, узгодження з pracodawcą użytkownikiem і відобразити його в документах.",
        ],
        exceptions: [
          "Zezwolenie не потрібне, якщо cudzoziemiec має swobodny доступ або інше звільнення; воно також не замінює zezwolenia na pobyt.",
          workLaw.text`${workLaw.article("33", "Art. 33")} допускає окремі зміни без нового zezwolenia, зокрема деякі зміни часу праці, назви stanowiska без зміни обов'язків та — від 08.07.2026 — перехід з umowy cywilnoprawnej на umowę o pracę або встановлення stosunku pracy рішенням PIP.`,
        ],
        consequences: [
          "Відмова виникає не тільки через параметри роботи, а й через порушення, заборгованості, відсутність реальної діяльності, позірність zatrudnienia або фактичне направлення працівника до третьої особи поза режимом pracy tymczasowej.",
          "Після видачі zezwolenia зміна істотних параметрів поза ustawowym wyjątkiem може вимагати зміни або нового рішення; робота на інших умовах може бути не охоплена документом.",
        ],
        procedure: [
          "Polski podmiot подає електронний wniosek до wojewody, właściwego за його siedzibą або stałym pobytem, разом із документами з rozporządzenia Dz.U. 2025 poz. 1629 та opłatą.",
          workLaw.text`Wojewoda перевіряє формальні дані, умови ${workLaw.article("30", "art. 30")}, підстави відмови ${workLaw.articleRange("13", "14", { start: "art. 13", end: "14" })} і ${workLaw.article("31", "art. 31")} та видає decyzję з елементами ${workLaw.article("32", "art. 32")}.`,
          "Після рішення podmiot оформлює umowę відповідно до zezwolenia, передає її або копію через właściwy system до початку роботи й виконує подальші powiadomienia.",
        ],
        foreignersContext: [
          "Cudzoziemiec повинен отримати від podmiotu рішення, але не є стороною справи o zezwolenie na pracę; odwołanie подає podmiot powierzający.",
          "Для pobytu czasowego i pracy існування zezwolenia na pracę не усуває потреби довести умови відповідного zezwolenia pobytowego та реальність заявленої роботи.",
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default workPermitTopic

export const workPermitMapNode: LegalNode = {
  id: "work-permit",
  title: workPermitTopic.body.title,
  polish: workPermitTopic.body.polish,
  summary: workPermitTopic.summary,
  sources: [...workPermitTopic.body.sources],
}
