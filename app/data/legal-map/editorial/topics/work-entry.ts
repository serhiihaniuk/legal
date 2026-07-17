import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const workReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const
const ukraineReference = {
  kind: "external",
  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
} as const
type WorkEntryBody = LegalMapTopicBody

export const workEntryTopic: KnowledgeUnit<WorkEntryBody> = defineKnowledgeUnit(
  {
    id: "map-topic:work-entry",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "work-entry" },
    },
    summary:
      "Спочатку перевір, чи особа має вільний доступ до ринку праці. Якщо ні — який інструмент потрібен: zezwolenie, oświadczenie, praca sezonowa або інша спеціальна підстава.",
    claims: [
      {
        id: "work-needs-two-keys",
        kind: "requires-verification",
        text: workLaw.text`Доступ до праці визначається поєднанням чинної підстави перебування та підстави виконання конкретної роботи за ${workLaw.article("3", "art. 3")} ustawy z 20.03.2025.`,
        basis: [
          { reference: workReference, locator: "Art. 3" },
          { reference: ukraineReference, locator: "Art. 5a" },
        ],
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
      title: "Карта доступу до праці",
      polish: workLaw.text`${workLaw.article("3", "art. 3")} ustawy z 20.03.2025`,
      sources: [
        mapTopicSources.work,
        mapTopicSources.workChange,
        mapTopicSources.ukraineSpecialCurrent,
      ],
      guide: {
        introduction: [
          workLaw.text`Доступ до польського ринку праці визначається не назвою документа, а поєднанням двох правових елементів: чинної підстави перебування та підстави виконання конкретної роботи. ${workLaw.article("3", "Art. 3")} ustawy z 20.03.2025 описує випадки вільного доступу, роботу в межах дозволів pobytowych, роботу на підставі zezwolenia або oświadczenia та окремі звільнення.`,
          "Тому одна й та сама особа може легально перебувати в Польщі, але не мати права виконувати заявлену роботу, або мати доступ до праці лише в межах умов, записаних у рішенні, дозволі чи oświadczeniu.",
        ],
        regulated: [
          workLaw.text`${workLaw.article("3", "Art. 3")} ust. 1 визначає категорії cudzoziemców зі swobodnym dostępem do rynku pracy, зокрема власників pobytu stałego, статусу rezydenta długoterminowego UE, міжнародного або тимчасового захисту та окремих zezwoleń na pobyt czasowy.`,
          workLaw.text`${workLaw.article("3", "Art. 3")} ust. 2–3 пов'язує право до праці з конкретним дозволом pobytowym, mobilnością або з zezwoleniem na pracę чи oświadczeniem і допустимою підставою перебування.`,
          workLaw.text`${workLaw.article("3", "Art. 3")} ust. 5–7 охоплює окремі звільнення від zezwolenia або oświadczenia, а ${workLaw.article("6", "art. 6")} розподіляє справи між звичайним дозволом, delegowaniem, pracą sezonową та oświadczeniem.`,
        ],
        appliesWhen: [
          "Цей інститут застосовується перед кожним допуском cudzoziemca до роботи та після зміни його документа pobytowego, роботодавця, виду договору, посади, часу праці або місця виконання роботи.",
          "Він також застосовується при аналізі продовження роботи під час очікування на наступне zezwolenie na pracę або zezwolenie na pobyt, бо право продовження виникає лише за умов, прямо передбачених законом.",
        ],
        conditions: [
          "Підстава перебування повинна дозволяти роботу в обраному режимі; не кожна віза, karta pobytu, ruch bezwizowy або штамп після подання заяви дає однаковий обсяг доступу.",
          "Якщо немає swobodnego dostępu, робота має відповідати właściwemu instrumentowi: podmiotowi, stanowisku lub rodzajowi pracy, umowie, wynagrodzeniu, wymiarowi czasu, okresowi та — для pracy tymczasowej — pracodawcy użytkownikowi.",
          "Окремі професії й види діяльності зберігають кваліфікаційні або реєстраційні вимоги незалежно від наявності міграційного документа.",
        ],
        exceptions: [
          "Swobodny dostęp або ustawowe zwolnienie означає відсутність потреби в zezwoleniu чи oświadczeniu, але не скасовує вимог щодо легального перебування, письмової умови, мінімальних стандартів праці, ZUS і податків.",
          workLaw.text`Для beneficjenta ochrony czasowej діє окреме powiadomienie do powiatowego urzędu pracy за ${foreignersLaw.external("art. 5a", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")}; це інший механізм, ніж zezwolenie або oświadczenie.`,
        ],
        consequences: [
          "Робота поза допустимою підставою або поза межами документа може бути визнана nielegalnym wykonywaniem pracy, а доручення такої роботи — nielegalnym powierzeniem pracy cudzoziemcowi.",
          "Невідповідність умов може спричинити штраф, відмову або uchylenie zezwolenia, наслідки для справи pobytowej та необхідність припинити або змінити модель роботи.",
        ],
        procedure: [
          workLaw.text`Podmiot спочатку встановлює особу та чинний tytuł pobytowy, а потім визначає, чи належить cudzoziemiec до ${workLaw.article("3", "art. 3")} ust. 1, окремого zwolnienia або режиму wymagającego zezwolenia чи oświadczenia.`,
          "Для режиму, що вимагає легалізації праці, відповідний podmiot електронно подає wniosek, oświadczenie або powiadomienie до właściwego organu.",
          "Перед допуском до роботи фактична umowa й організація праці мають бути узгоджені з документом, а подальші зміни оцінюються за правилами про допустиму зміну, повідомлення або новий документ.",
        ],
        foreignersContext: [
          "У sprawie o pobyt czasowy i pracę право до праці та право перебування можуть бути пов'язані одним рішенням, але законність попередньої й поточної роботи все одно оцінюється за фактичними датами та умовами.",
          workLaw.text`Для громадянина України після змін, чинних від 05.03.2026, робота на підставі ochrony czasowej оформлюється через ${foreignersLaw.external("art. 5a", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")} ustawy z 20.03.2025; powiadomienie подається протягом 7 днів від початку роботи та повторюється при визначених змінах умов.`,
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Чи статус особи звільняє від дозволу?",
        "Яка підстава pobytu?",
        "Хто доручає роботу?",
        "Який тип і місце роботи?",
        "Чи умови відповідають документу?",
      ],
      related: ["two-keys", "stay-work", "employer-duties"],
    },
  }
)

export default workEntryTopic

export const workEntryMapNode: LegalNode = {
  id: "work-entry",
  title: workEntryTopic.body.title,
  polish: workEntryTopic.body.polish,
  summary: workEntryTopic.summary,
  checkpoints: [...(workEntryTopic.body.checkpoints ?? [])],
  sources: [...workEntryTopic.body.sources],
  related: [...(workEntryTopic.body.related ?? [])],
}
