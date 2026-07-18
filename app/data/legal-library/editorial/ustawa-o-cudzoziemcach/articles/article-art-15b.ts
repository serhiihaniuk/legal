import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-15b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("15b", "Art. 15b")} pkt 1 визначає перелік завдань, які Komendant Główny Policji реалізує за участю функціонерів Straży Granicznej щодо wpisów даних cudzoziemca до SIS для цілей повернення, названих у ${foreignersLaw.external("art. 3 ust. 1 rozporządzenia nr 2018/1860", "https://eur-lex.europa.eu/eli/reg/2018/1860/oj")}; він перелічує конкретні статті ustawa, зокрема ${foreignersLaw.article("109a", "art. 109a")} та ${foreignersLaw.article("109b", "art. 109b")}.`,
          sourceLocator: "Art. 15b pkt 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("15b", "Art. 15b")} pkt 2 охоплює інші перелічені в ustawa завдання щодо wpisów даних cudzoziemca до SIS для odmowy wjazdu i pobytu на підставі ${foreignersLaw.external("rozporządzenia nr 2018/1861", "https://eur-lex.europa.eu/eli/reg/2018/1861/oj")}.`,
          sourceLocator: "Art. 15b pkt 2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`У завершальній частині ${foreignersLaw.article("15b", "Art. 15b")} зазначено, що ці завдання Komendant Główny Policji реалізує за участю функціонерів Straży Granicznej, які служать у biurze SIRENE.`,
          sourceLocator: "Art. 15b zdanie końcowe",
        },
        {
          kind: "practical-inference",
          text: "Стаття розподіляє виконання SIS-завдань і розмежовує їхню мету: повернення або odmowa wjazdu i pobytu. Сам wpis у SIS не є документом на pobyt чи pracę та не доводить ці права.",
          sourceLocator: "Art. 15b pkt 1–2, zdanie końcowe",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("15b", "Art. 15b")} визначає, хто через biuro SIRENE виконує перелічені завдання щодо SIS-записів даних cudzoziemców, і відділяє записи для цілей повернення від записів для odmowy wjazdu i pobytu.`,
      rules: [
        {
          locator: "Art. 15b pkt 1",
          explanation:
            "Для першої групи встановіть, що завдання стосується SIS у контексті повернення, і знайдіть конкретну статтю ustawa, яка надає повноваження щодо відповідного wpis.",
        },
        {
          locator: "Art. 15b pkt 2",
          explanation:
            "Для другої групи перевірте, що йдеться про SIS для odmowy wjazdu i pobytu, а не про записи для цілей повернення.",
        },
        {
          locator: "Art. 15b zdanie końcowe",
          explanation:
            "Виконання організоване Komendant Główny Policji за участю визначених функціонерів Straży Granicznej у biurze SIRENE; це правило компетенції, а не матеріальна підстава для рішення.",
        },
      ],
      legalEffect:
        "Норма визначає інституційний спосіб реалізації окремих SIS-завдань. Вона сама не створює підстави для wpis, не скасовує процедурних гарантій і не надає висновку про legalny pobyt або prawo do pracy.",
      foreignersCase:
        "У справі визначте мету SIS-запису, державу й рішення, на якому він ґрунтується, а також конкретну статтю ustawa. Не робіть висновок про статус іноземця лише з запису SIS або з назви органу, який виконує технічне завдання.",
    },
  ]),
})
