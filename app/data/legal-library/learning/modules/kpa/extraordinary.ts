import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "extraordinary",
  order: 14,
  title: "Надзвичайні режими",
  polish: "Wznowienie, nieważność, uchylenie lub zmiana decyzji",
  articles: kpaLaw.text`${kpaLaw.articleRange("145", "163", { start: "art. 145", end: "163" })} KPA`,
  outcome:
    "Ви не використовуєте tryb nadzwyczajny як запізніле odwołanie, а підбираєте його до конкретної вади.",
  layers: {
    beginner: {
      focus:
        "Після ostatecznej decyzji існують виняткові режими, але кожен має закриті або спеціальні підстави.",
      law: kpaLaw.text`Wznowienie з ${kpaLaw.article("145", "art. 145")} стосується визначених дефектів провадження; nieważność з ${kpaLaw.article("156", "art. 156")} — найтяжчих вад самої decyzji.`,
      practice:
        "Спочатку назвіть дефект одним реченням, потім шукайте режим. Не починайте з бажання «відкрити справу ще раз».",
      pitfall:
        "Незгода з оцінкою доказів сама по собі не стає rażącym naruszeniem prawa.",
    },
    practical: {
      focus: kpaLaw.text`Для wznowienia перевірте конкретний пункт ${kpaLaw.article("145", "art. 145")}, коли сторона дізналась про підставу, місячний строк ${kpaLaw.article("148", "art. 148")} і właściwy organ.`,
      law: kpaLaw.text`Нові докази за ${kpaLaw.article("145", "art. 145 § 1")} pkt 5 мають існувати в день decyzji та бути тоді невідомими organowi; це не просто документ, створений пізніше.`,
      practice:
        "Додайте до заяви таблицю: підстава → факт → дата знання → доказ → вплив на рішення.",
      pitfall: kpaLaw.text`Не змішуйте ${kpaLaw.article("154", "art. 154")}/155, які мають власні умови зміни decyzji ostatecznej, з контролем її первісної законності.`,
    },
    advanced: {
      focus:
        "Строки, незворотні наслідки та давність можуть обмежувати результат навіть за наявності вади.",
      law: kpaLaw.text`${kpaLaw.article("156", "Art. 156")} містить перелік підстав nieważności, а ${kpaLaw.article("156", "§ 2")} обмежує її встановлення після 10 років або при незворотних правових наслідках; ${kpaLaw.article("158", "art. 158 § 3")} містить 30-річну межу для wszczęcia.`,
      practice:
        "Перед вибором режиму перевірте, чи існує спеціальний механізм у ustawie o cudzoziemcach і який результат реально можливий сьогодні.",
      pitfall:
        "Tryb nadzwyczajny не повинен обходити пропущений строк odwołania, якщо заявлена вада не відповідає його законним підставам.",
    },
  },
  method: [
    "Назвіть точну ваду",
    "Зіставте з законною підставою",
    "Перевірте строк і organ",
    "Визначте можливий, а не бажаний результат",
  ],
  checklist: [
    "Є конкретний пункт підстави",
    "Строк підтверджено",
    "Режим не підміняє odwołania",
  ],
  questions: [
    {
      prompt: kpaLaw.text`Документ виник після ostatecznej decyzji. Чи це автоматично «новий доказ» для ${kpaLaw.article("145", "art. 145 § 1")} pkt 5?`,
      answer:
        "Ні. Ця підстава вимагає істотного факту або доказу, який існував у день рішення і був невідомий organowi.",
    },
  ],
  lesson: {
    paragraphs: [
      "Tryby nadzwyczajne захищають стабільність ostatecznych decyzji, одночасно дозволяючи реагувати на визначені тяжкі дефекти. Це не додаткова інстанція і не спосіб повторити пропущене odwołanie. Спочатку назвіть ваду, потім перевірте, чи вона точно входить до законної підстави конкретного режиму.",
      {
        kind: "authored-legal-text",
        plainText:
          "Wznowienie переважно повертається до дефекту провадження або нововиявленого матеріалу, який уже існував у день decyzji. Nieważność стосується закритого каталогу найтяжчих вад акта. Art. 154–155 мають іншу функцію: допускають зміну визначених ostatecznych decyzji за окремих умов, а не визнають їх первісно незаконними.",
        parts: [
          {
            text: "Wznowienie переважно повертається до дефекту провадження або нововиявленого матеріалу, який уже існував у день decyzji. Nieważność стосується закритого каталогу найтяжчих вад акта. ",
          },
          {
            text: "Art. 154",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-154",
            },
          },
          {
            text: "–",
          },
          {
            text: "155",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-155",
            },
          },
          {
            text: " мають іншу функцію: допускають зміну визначених ostatecznych decyzji за окремих умов, а не визнають їх первісно незаконними.",
          },
        ],
      },
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 145–152",
          parts: [
            {
              text: "art. 145",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-145",
              },
            },
            {
              text: "–",
            },
            {
              text: "152",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-152",
              },
            },
          ],
        },
        role: "Регулюють підстави, строки, właściwość, відкриття та результат wznowienia postępowania.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 154–155",
          parts: [
            {
              text: "art. 154",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-154",
              },
            },
            {
              text: "–",
            },
            {
              text: "155",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-155",
              },
            },
          ],
        },
        role: "Дозволяють зміну або uchylenie визначених ostatecznych decyzji залежно від набутого права, згоди та інтересів.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 156–159",
          parts: [
            {
              text: "art. 156",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-156",
              },
            },
            {
              text: "–",
            },
            {
              text: "159",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-159",
              },
            },
          ],
        },
        role: "Містять підстави й межі nieważności, właściwy organ, форму результату та можливість wstrzymania.",
      },
    ],
    terms: [
      {
        term: "wznowienie",
        meaning:
          "Повторне відкриття завершеної справи через одну з конкретних вад, перелічених законом.",
      },
      {
        term: "stwierdzenie nieważności",
        meaning:
          "Надзвичайний контроль ostatecznej decyzji через найтяжчі кваліфіковані дефекти.",
      },
      {
        term: "rażące naruszenie prawa",
        meaning:
          "Кваліфіковане, очевидне і серйозне порушення; не кожна правова помилка досягає цього рівня.",
      },
    ],
    caseExample: {
      title: "Сторона не знала про провадження",
      facts:
        "Decyzję ostateczną видано без реальної участі особи, яка була stroną, а про акт вона дізналась значно пізніше.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Перевіряємо brak winy, art. 145 § 1 pkt 4, дату знання про decyzję, місячний строк art. 148 і właściwy organ. Доказуємо не лише невручення, а втрату участі.",
        parts: [
          {
            text: "Перевіряємо brak winy, ",
          },
          {
            text: "art. 145 § 1",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-145",
            },
          },
          {
            text: " pkt 4, дату знання про decyzję, місячний строк ",
          },
          {
            text: "art. 148",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-148",
            },
          },
          {
            text: " і właściwy organ. Доказуємо не лише невручення, а втрату участі.",
          },
        ],
      },
      lesson:
        "Для wznowienia потрібні точна підстава та хронологія знання, а не загальне відчуття несправедливості.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Закритий перелік art. 145",
        parts: [
          {
            text: "Закритий перелік ",
          },
          {
            text: "art. 145",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-145",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Строки art. 148",
        parts: [
          {
            text: "Строки ",
          },
          {
            text: "art. 148",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-148",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Підстави і часові межі art. 156–158",
        parts: [
          {
            text: "Підстави і часові межі ",
          },
          {
            text: "art. 156",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-156",
            },
          },
          {
            text: "–",
          },
          {
            text: "158",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-158",
            },
          },
        ],
      },
    ],
  },
}

export const kpaExtraordinaryLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:extraordinary",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "extraordinary",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.articles,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "module articles",
          },
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
    body: moduleContent,
  })

export default kpaExtraordinaryLearningModuleTopic
