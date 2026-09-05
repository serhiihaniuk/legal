import { DocsLayout } from "~/components/layout"
import { LawLibraryNavigation } from "~/features/law-library"
import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { LawCatalogList } from "~/features/law-library/ui/catalog/law-catalog-list"
import { LawReadingExample } from "~/features/law-library/ui/catalog/law-reading-example"
const toc = [
  { href: "#law-library-overview", label: "Бібліотека права" },
  { href: "#law-library-documents", label: "Правові акти" },
  { href: "#law-library-example", label: "Як поєднувати акти" },
  { href: "#law-library-safety", label: "Пояснення і джерело" },
]
export function meta() {
  return [{ title: "Бібліотека права — Legalizacja" }]
}
export default function LawLibraryRoute() {
  return (
    <DocsLayout
      contentWidth="wide"
      navigation={<LawLibraryNavigation />}
      toc={toc}
    >
      <DocumentArticle width="grow">
        <DocumentHeader id="law-library-overview">
          <p className="text-sm text-muted-foreground">Правові акти Польщі</p>
          <h1>Бібліотека права</h1>
          <p className="lead">
            Відкрийте акт, оберіть статтю, параграф або додаток і прочитайте
            польський текст. Із кожного положення можна перейти до відповідної
            сторінки офіційного PDF.
          </p>
          <p>
            Пояснення українською допомагають розібрати зміст і значення норми
            для справи. Вони доступні поруч із текстом та в окремому розділі
            акта.
          </p>
        </DocumentHeader>
        <section id="law-library-documents">
          <h2>Правові акти</h2>
          <LawCatalogList />
        </section>
        <section id="law-library-example">
          <h2>Одна справа, кілька актів</h2>
          <LawReadingExample />
        </section>
        <section id="law-library-safety">
          <h2>Пояснення, текст і дата</h2>
          <dl className="space-y-5">
            <div>
              <dt className="font-medium">Пояснення українською</dt>
              <dd>
                Показує зміст норми, її умови та значення для справи. Дата
                перевірки стосується зазначеної редакції.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Польський текст і PDF</dt>
              <dd>
                Дають змогу прочитати точне формулювання та його місце в акті.
                Якщо норму змінено, перевіряйте також текст зміни.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Офіційна сторінка ELI</dt>
              <dd>
                Допомагає перевірити пізніші зміни та дату набрання чинності.
                Редакцію обирають за датою події й перехідними правилами, а не
                лише за датою відкриття сторінки.
              </dd>
            </div>
          </dl>
        </section>
      </DocumentArticle>
    </DocsLayout>
  )
}
