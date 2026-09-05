import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { externalLegalText } from "~/data/legal-library/legal-text"
import { documentSources, foreignersLaw, kpaLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "power-of-attorney",
  title: "Pełnomocnictwo",
  category: "procedure",
  aliases: ["pełnomocnictwo"],
  description:
    "Pełnomocnictwo є повноваженням діяти від імені іншої особи. Той, хто його надає, називається mocodawca, а уповноважена особа є pełnomocnikiem. У справі важливий обсяг цього повноваження: допомога з документами, представництво заявника та підписання додатка за роботодавця не є однією дією.",
  preparedBy:
    "Письмове повноваження підписує особа, яка його надає. Представник долучає його до матеріалів справи у належній формі.",
  purpose: [
    "Підтверджує право представника отримувати листи й виконувати дії в межах повноваження.",
  ],
  doesNotProve: [
    "Не дозволяє замінити заявника в особистих діях, які спеціальний закон залишає за ним.",
  ],
  explanation: [
    {
      id: "scope",
      title: "Чи охоплює повноваження саме цю дію",
      paragraphs: [
        kpaLaw.text`За ${kpaLaw.articleRange("32", "33", { start: "Art. 32", end: "33 KPA" })} сторона може діяти через представника, якщо характер дії не вимагає її особистої участі. Представником може бути фізична особа, яка має дієздатність. У документі має бути зрозуміло, хто кого уповноважив і в якій справі.`,
        "Договір із фірмою про супровід пояснює, за які послуги платять. Він не обов’язково містить повноваження конкретної особи представляти заявника перед органом. Так само повноваження від заявника не дозволяє підписати від імені роботодавця його дані про роботу.",
      ],
      example: {
        title: "Повноваження на ознайомлення з матеріалами",
        facts: [
          "Умовний приклад. Представник отримав письмове повноваження лише на ознайомлення з матеріалами справи. Після перегляду він збирається подати від імені заявника відповідь на wezwanie, вимогу органу.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Фрагмент обсягу pełnomocnictwa",
          note: "Вигаданий уривок. Дані сторін, реквізити справи, дата та підпис не відтворені. Це приклад обмеженого повноваження, не готовий формуляр.",
          paragraphs: [
            "Udzielam pełnomocnictwa wyłącznie do wglądu w akta mojej sprawy o udzielenie zezwolenia na pobyt czasowy oraz sporządzania z nich notatek i kopii.",
            "Pełnomocnictwo nie obejmuje składania w moim imieniu wyjaśnień ani środków zaskarżenia.",
          ],
        },
        reasoning: [
          "Слово wyłącznie обмежує повноваження названими діями. Право прочитати матеріали не охоплює подання пояснень. Заявник підписав відповідь сам; для подальшого представництва вони окремо оформили ширший обсяг і подали відповідний документ органу.",
        ],
        conclusion:
          "Ознайомлення з матеріалами мало належну підставу. Відповідь не підписували від імені заявника на підставі документа, який такої дії не охоплював.",
      },
    },
    {
      id: "filing-and-service",
      title: "Форма, подання органу та отримання листів",
      paragraphs: [
        kpaLaw.text`${kpaLaw.article("33", "Art. 33 § 2–3 KPA")} передбачає письмове повноваження або заявлення його до протоколу. Представник долучає оригінал чи офіційно засвідчений відпис. Названі в нормі професійні представники можуть самі засвідчити відпис свого повноваження. Звичайна копія не стає засвідченою лише через напис на файлі.`,
        kpaLaw.text`Коли у справі встановлено представника для відповідних дій, ${kpaLaw.article("40", "Art. 40 § 2 KPA")} передбачає вручення листів представникові. Це впливає на строк відповіді: пізніше пересилання листа клієнтові не створює нової дати вручення органом. Обмежене повноваження читають разом із його обсягом, а не автоматично поширюють на все листування.`,
        "Звільнення від оплати та відсутність потреби в документі про повноваження є різними питаннями. Родинний зв’язок може мати значення для оплати, але сам по собі не робить будь-яку дію родича належним представництвом.",
      ],
    },
    {
      id: "personal-actions",
      title: "Що представник не робить замість заявника",
      paragraphs: [
        foreignersLaw.text`У звичайній заяві повнолітнього дієздатного іноземця через MOS саме іноземець підписує заяву за ${foreignersLaw.article("106d", "Art. 106d ust. 3 ustawy o cudzoziemcach")}. Повноваження на супровід справи не замінює цього підпису. Для неповнолітніх та інших прямо названих у нормі осіб передбачені окремі правила законного представництва.`,
        "За правилами MOS представник може допомогти розібратися з полями в присутності заявника, але не користуватися його обліковими даними. Відбитки пальців і особисте пред’явлення документа також не виконують через звичайну довіреність.",
        "За подання документа про повноваження загальна ставка opłaty skarbowej становить 17 zł за кожне відношення представництва. Є звільнення, зокрема для повноваження подружжю, батькам або іншим висхідним родичам, дітям або іншим низхідним родичам, братам і сестрам. Обов’язок, звільнення та належного одержувача платежу встановлюють окремо від обсягу повноваження.",
      ],
    },
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("32", "33", { start: "Art. 32", end: "33" })} KPA.`,
    kpaLaw.text`${kpaLaw.article("40", "Art. 40 § 2 KPA")}: вручення представникові.`,
    foreignersLaw.text`${foreignersLaw.article("106d", "Art. 106d ust. 3")}: підписання заяви у MOS.`,
    externalLegalText(
      "Ustawa o opłacie skarbowej, art. 1, 6 і 12 та частина IV додатка: подання повноваження, одержувач оплати, ставка й звільнення.",
      "https://eli.gov.pl/eli/DU/2025/1154/ogl"
    ),
  ],
  keyChecks: [
    "Особа mocodawcy і представника, підпис, дата, обсяг, форма копії та opłata skarbowa.",
  ],
  sources: [
    documentSources.kpa,
    documentSources.aliens,
    documentSources.mosQa,
    documentSources.stampFee,
  ],
  relatedDocuments: [
    "mos-application",
    "delivery-proof",
    "employment-annex-1",
    "stamp-duty-proof",
  ],
  verifiedAt: "2026-09-05",
}

export const powerOfAttorneyTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:power-of-attorney",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "power-of-attorney" },
    },
    summary: guide.description,
    claims: [
      {
        id: "document-purpose",
        kind: "requires-verification",
        text: guide.description,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 32–33 KPA",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default powerOfAttorneyTopic
