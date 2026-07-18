import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-37",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 37 § 1 встановлює: «Pełnomocnik obowiązany jest przy pierwszej czynności procesowej dołączyć do akt sprawy pełnomocnictwo z podpisem mocodawcy lub wierzytelny odpis pełnomocnictwa».",
          sourceLocator: "Art. 37 § 1",
        },
      ],
      summary:
        "Pełnomocnik при першій процесуальній дії додає до akt pełnomocnictwo з підписом mocodawcy або його wierzytelny odpis; стаття регулює також електронне засвідчення, усне надання доручення, можливість вимоги офіційного засвідчення підпису та виняток для доступного реєстру; електронні формулювання мають перехідні редакції.",
      rules: [
        {
          locator: "Art. 37 § 1",
          explanation:
            "Основне правило — додати документ про повноваження при першій czynność; adwokat, radca prawny, rzecznik patentowy або doradca podatkowy можуть самі засвідчувати odpis у межах тексту, а реєстрова перевірка може звільнити від подання документа. За сумніву sąd може вимагати urzędowe poświadczenie підпису strony.",
        },
        {
          locator: "Art. 37 § 1a",
          explanation:
            "Станом на 18.07.2026 чинна § 1a говорить про odpis, складений w formie dokumentu elektronicznego, та називає kwalifikowany podpis elektroniczny, podpis zaufany або podpis osobisty і встановлені формати даних. Варіант w postaci elektronicznej є майбутньою редакцією, що набуде чинності 1.10.2029; спосіб засвідчення треба звіряти з датою.",
        },
        {
          locator: "Art. 37 § 2",
          explanation:
            "У toku sprawy повноваження можна надати усно на posiedzeniu через заяву сторони, внесену до protokołu.",
        },
      ],
      legalEffect:
        "Стаття визначає доказ повноваження та момент його подання, але не розширює межі доручення понад його зміст.",
      foreignersCase:
        "Якщо pełnomocnik подає перше pismo у справі іноземця, долучіть підписане pełnomocnictwo або допустиме підтвердження з реєстру; для електронного odpis станом на 18.07.2026 перевірте, що він засвідчений допустимим підписом і оформлений w formie dokumentu elektronicznego, а не за майбутньою редакцією.",
    },
  ]),
})
