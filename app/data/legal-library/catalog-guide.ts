import type { LegalDocumentId } from "./contracts"

export const lawCatalogGuides = [
  {
    id: "ustawa-o-cudzoziemcach",
    title: "Умови перебування і дозволів",
    question: "На якій підставі людина може отримати дозвіл?",
    description:
      "Підстави pobytu, умови різних дозволів, документи перебування та наслідки зміни обставин.",
    boundary:
      "Наявність підстави перебування потребує окремої перевірки права працювати.",
  },
  {
    id: "kpa",
    title: "Як орган веде справу",
    question: "Що означає лист органу і як на нього реагувати?",
    description:
      "Заява, докази, doręczenie, строки, рішення та адміністративне оскарження.",
    boundary:
      "KPA пояснює процедуру. Умови конкретного дозволу шукають у законі, що його регулює.",
  },
  {
    id: "powierzanie-pracy",
    title: "Право працювати й обов’язки роботодавця",
    question: "Чи можна доручити цю роботу цій людині?",
    description:
      "Умови праці іноземців, дозволи, повідомлення та обов’язки podmiotu powierzającego pracę.",
    boundary:
      "Законність перебування і допустимість конкретної роботи перевіряють окремо.",
  },
  {
    id: "rozporzadzenie-wniosek-pobyt-czasowy",
    title: "Форми заяви та її додатків",
    question: "Яку форму готувати і хто має її заповнити?",
    description:
      "Формуляри pobytu czasowego, додатки, фото, цифрові копії, відбитки та взірець підпису.",
    boundary:
      "Розпорядження визначає форму подання. Воно не замінює умов дозволу з ustawy o cudzoziemcach.",
  },
  {
    id: "ppsa",
    title: "Судовий контроль",
    question: "Як адміністративний суд перевіряє дію або бездіяльність органу?",
    description:
      "Skarga до адміністративного суду, розгляд у WSA та провадження в NSA.",
    boundary:
      "Судове оскарження має власний порядок. Його не слід плутати з odwołaniem у межах адміністративної справи.",
  },
] as const satisfies readonly {
  id: LegalDocumentId
  title: string
  question: string
  description: string
  boundary: string
}[]

export function provisionCountLabel(
  count: number,
  kind: "article" | "paragraph" | "annex" | "mixed" = "mixed"
) {
  const forms =
    kind === "article"
      ? ["стаття", "статті", "статей"]
      : kind === "paragraph"
        ? ["параграф", "параграфи", "параграфів"]
        : kind === "annex"
          ? ["додаток", "додатки", "додатків"]
          : ["положення", "положення", "положень"]
  const last = count % 10,
    teen = count % 100 >= 11 && count % 100 <= 14
  return `${count} ${forms[!teen && last === 1 ? 0 : !teen && last >= 2 && last <= 4 ? 1 : 2]}`
}
