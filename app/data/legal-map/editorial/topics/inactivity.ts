import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import {
  residenceOfficeDeadlines,
  residenceOfficeDeadlineClaims,
} from "~/data/shared/residence-office-deadlines"

import { kpaLaw, mapTopicSources, ppsaLaw } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

export const inactivityTopic: KnowledgeUnit<LegalMapTopicBody> =
  defineKnowledgeUnit({
    id: "map-topic:inactivity",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "inactivity" },
    },
    summary:
      "Bezczynność означає незавершення справи в належний строк. Przewlekłość означає, що справу ведуть довше, ніж потрібно. У справах про перебування звичайні засоби захисту слід читати разом зі спеціальним зупиненням строків та судовою практикою.",
    claims: [
      ...residenceOfficeDeadlineClaims,
      {
        id: "delay-remedy",
        kind: "statute-text",
        text: kpaLaw.text`${kpaLaw.article("37", "Art. 37 KPA")} розрізняє бездіяльність і затягування та передбачає обґрунтоване ponaglenie.`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 35–38",
          },
          {
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
            locator: "Art. 53 § 2b, 54 § 1, 149",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-06",
      verifiedAt: "2026-09-06",
    },
    body: {
      title: "Бездіяльність і затягування справи",
      polish: "Bezczynność, przewlekłość, ponaglenie",
      sources: [
        mapTopicSources.kpa,
        mapTopicSources.ppsa,
        {
          label: "Спецзакон про допомогу громадянам України",
          url: "https://eli.gov.pl/eli/DU/2025/337/ogl",
          note: "Зупинення строків розгляду визначених справ wojewodą; перевірено 06.09.2026 разом зі змінами 2026 року.",
        },
        {
          label: "MSWiA: відповідь RPO від 30.06.2026",
          url: "https://bip.brpo.gov.pl/sites/default/files/2026-08/Odpowiedz_MSWiA_cudzoziemcy_legalizacja_pobytu_przewleklosc_30_06_2026.pdf",
          note: "Сторінки 7–9 пояснюють відмінність судової оцінки від застосування правила адміністрацією.",
        },
        {
          label: "WSA w Poznaniu, II SAB/Po 314/25",
          url: "https://orzeczenia.nsa.gov.pl/doc/1E120C483B",
          note: "Рішення від 12.03.2026. На дату перевірки 06.09.2026 у CBOSA позначене як неостаточне.",
        },
      ],
      guide: {
        introduction: [
          "Довге очікування може означати різні порушення. Bezczynność виникає, коли справу не завершено в законний або належно повідомлений додатковий строк. Przewlekłość стосується способу ведення справи: дії тривають довше, ніж необхідно. Постійне листування не виключає затягування, якщо орган повторно просить те, що вже має, і не пояснює потреби в новій перевірці.",
        ],
        regulated: [
          kpaLaw.text`Звичайний порядок за ${kpaLaw.articleRange("35", "38", { start: "art. 35", end: "38" })} KPA охоплює строк вирішення, повідомлення про затримку та ponaglenie, тобто обґрунтоване звернення про бездіяльність або затягування. Судовий контроль регулює PPSA.`,
        ],
        appliesWhen: [
          "Для висновку потрібні вид справи, компетентний орган, початок застосовного строку та хронологія дій. Кількість місяців від першого звернення без цих відомостей не встановлює порушення.",
        ],
        conditions: [
          kpaLaw.text`За ${kpaLaw.article("35", "art. 35 KPA")} справу вирішують без зайвої затримки, а за достатніх наявних доказів невідкладно. Загальні граничні строки становлять місяць для справи з пояснювальним провадженням, два місяці для особливо складної справи від початку провадження, місяць для апеляції від її отримання. Спеціальний закон може визначати інший строк.`,
          kpaLaw.text`${kpaLaw.article("35", "Art. 35 § 5 KPA")} виключає, зокрема, визначені законом періоди окремих дій, зупинення провадження, медіації та затримки з вини сторони або з незалежних від органу причин. Відомості про запит і відповідь пояснюють причину конкретної паузи; сам факт листування не виправдовує весь період очікування.`,
        ],
        exceptions: [
          residenceOfficeDeadlines.statutoryRule,
          residenceOfficeDeadlines.statutoryLimits,
        ],
        consequences: [
          kpaLaw.text`У звичайному порядку орган, що розглядає ponaglenie, установлює наявність порушення та чи було воно грубим; за умовами ${kpaLaw.article("37", "art. 37 KPA")} визначає строк завершення та заходи для з'ясування причин. За ${ppsaLaw.article("149", "art. 149 PPSA")} суд може встановити бездіяльність, зобов'язати орган до дії та окремо вирішує питання грубого порушення. Грошова санкція чи сума на користь заявника не присуджуються автоматично.`,
        ],
        procedure: [
          kpaLaw.text`Ponaglenie подають до вищого органу через орган, який веде справу, а якщо вищого немає, до самого органу. Обґрунтування показує конкретні дати, дії та невиправдані періоди очікування. За ${kpaLaw.article("37", "art. 37 § 3a KPA")} звернення до спливу строку зі звичайної або спеціальної норми залишають без розгляду.`,
          ppsaLaw.text`За ${ppsaLaw.article("53", "art. 53 § 2b PPSA")} скаргу на бездіяльність або затягування можна внести після подання ponaglenia до належного органу. Чекати позитивної відповіді на нього закон не вимагає. ${ppsaLaw.article("54", "Art. 54 § 1 PPSA")} передбачає подання скарги через орган, чию бездіяльність оскаржують.`,
        ],
        foreignersContext: [
          residenceOfficeDeadlines.courtDistinction,
          residenceOfficeDeadlines.courtExample,
          "Спір про затримку не замінює доказів умов дозволу. Доки справа триває, зміна роботи, доходу або сімейних обставин може вимагати нових матеріалів незалежно від розгляду ponaglenia чи судової скарги.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Чи хронологія відрізняє час роботи органу від періодів, які закон виключає?",
        "Чи є доказ внесення ponaglenia до належного органу?",
        "Чи пояснення враховує вид справи, орган та період затримки, а не тільки назву спецзакону?",
      ],
    },
  })

export default inactivityTopic

export const inactivityMapNode: LegalNode = {
  id: "inactivity",
  title: inactivityTopic.body.title,
  polish: inactivityTopic.body.polish,
  summary: inactivityTopic.summary,
  checkpoints: [...(inactivityTopic.body.checkpoints ?? [])],
  sources: [...inactivityTopic.body.sources],
}
