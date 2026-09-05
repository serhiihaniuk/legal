import { LegalLink } from "~/components/references"
export function LawReadingExample() {
  return (
    <div className="mt-5 border-y py-5">
      <p className="font-medium">Приклад: орган просить уточнити умови праці</p>
      <p>
        У справі про pobyt czasowy i pracę надійшло wezwanie. У ньому просять
        новий договір і уточнення винагороди. Одного акта для читання такого
        листа недостатньо.
      </p>
      <ol className="space-y-4">
        <li>
          <strong>Умова дозволу.</strong>{" "}
          <LegalLink
            reference={{
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            }}
          >
            Art. 114 ustawy o cudzoziemcach
          </LegalLink>{" "}
          допомагає встановити, яку умову щодо праці перевіряє орган.
        </li>
        <li>
          <strong>Процедурна вимога.</strong>{" "}
          <LegalLink
            reference={{
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-54",
            }}
          >
            Art. 54 KPA
          </LegalLink>{" "}
          пояснює зміст wezwania. Строк читають разом із доказом doręczenia.
        </li>
        <li>
          <strong>Документ у відповіді.</strong> Дані{" "}
          <LegalLink
            reference={{
              kind: "evidence-document",
              documentId: "employment-contract",
            }}
          >
            договору
          </LegalLink>{" "}
          зіставляють із{" "}
          <LegalLink
            reference={{
              kind: "evidence-document",
              documentId: "employment-annex-1",
            }}
          >
            додатком роботодавця
          </LegalLink>
          . У відповіді пояснюють розбіжність і вказують, що підтверджує новий
          матеріал.
        </li>
      </ol>
      <p className="mb-0">
        Так стає зрозуміло, яку умову треба довести, чому орган просить документ
        і що саме має пояснювати відповідь. Сам факт отримання wezwania ще не
        означає відмови в дозволі.
      </p>
    </div>
  )
}
