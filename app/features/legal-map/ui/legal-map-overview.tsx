import { ArrowRight } from "lucide-react"
import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { LegalText, OfficialSourceEntry } from "~/components/references"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { legalMapChapters, legalMapTopicCount } from "~/data/legal-map/journey"
import {
  createLegalTextAuthor,
  legalTextPlainText,
} from "~/data/legal-library/legal-text"
import { chapterNodes } from "../model/legal-map-model"

const kpa = createLegalTextAuthor("kpa")

export function LegalMapOverview({
  onNodeSelect,
  openChapterIds,
  onOpenChaptersChange,
}: {
  onNodeSelect: (nodeId: string) => void
  openChapterIds: string[]
  onOpenChaptersChange: (ids: string[]) => void
}) {
  return (
    <DocumentArticle>
      <DocumentHeader
        id="map-overview"
        badgeAlign="center"
        badges={
          <>
            <Badge variant="secondary">Карта права</Badge>
            <Badge variant="outline">Розділів: {legalMapChapters.length}</Badge>
            <Badge variant="outline">Тем: {legalMapTopicCount}</Badge>
          </>
        }
      >
        <h1>Як влаштована справа іноземця</h1>
        <p className="lead">
          Карта пояснює поняття, які зустрічаються у справах про перебування та
          працю в Польщі: підставу перебування, умову дозволу, доказ, подання,
          вручення, рішення й оскарження. Кожна тема розбирає окреме питання та
          його зв'язок з іншими частинами справи.
        </p>
        <p>
          Зміст поділено за предметом. До документів, строків або прав сторони
          можна звернутися одразу, коли вони потрібні. Номери розділів
          допомагають знайти тему; вони не визначають порядок дій у кожній
          справі.
        </p>
      </DocumentHeader>

      <section id="map-connections">
        <h2>Як пов'язані розділи</h2>
        <p>
          Поточне перебування описує становище людини сьогодні. Запитуваний
          дозвіл стосується результату, якого вона хоче досягти. Тому історія
          в'їздів, строк візи та подана заява належать до різних частин аналізу.
          Розділ про поточний статус пояснює перше питання, а порівняння підстав
          перебування допомагає розібрати друге.
        </p>
        <p>
          Праця додає ще одне питання: хто виконує роботу, для кого і в якій
          організації. У темах про перебування робота розглядається як мета
          заяви. У розділі про працю пояснено інструменти роботодавця, його
          обов'язки та відмінності між прямим наймом, агенцією і delegowaniem.
        </p>
        <p>
          Документи пов'язують ці обставини з умовами, які досліджують у справі.
          Наприклад, договір містить домовленості сторін, а підтвердження
          переказу показує конкретну виплату. Їхні відомості потрібно зіставити
          за періодом і предметом.{" "}
          <LegalText
            text={kpa.text`За ${kpa.article("77", "art. 77 § 1")} KPA орган збирає й розглядає весь доказовий матеріал, а за ${kpa.article("80", "art. 80")} оцінює на його основі, чи доведена обставина.`}
          />
        </p>
        <p>
          Процедура пояснює, як матеріали потрапляють до справи і як сторона
          може відреагувати на вимогу чи висновок органу. Тому докази,
          листування та строки з'являються повторно: під час подання, після
          wezwania і під час аналізу рішення. Розділ про засоби захисту
          пов'язаний також із бездіяльністю, коли рішення ще немає.
        </p>
      </section>

      <section id="map-example">
        <h2>Приклад із двома документами</h2>
        <p>
          Умовний приклад. У матеріалах справи є договір із зазначеною датою
          початку роботи 1 червня і довідка роботодавця, де вказано 1 липня.
          Обидва документи називають ту саму посаду. Працівник, який веде
          справу, отримав вимогу пояснити різні дати.
        </p>
        <p>
          Назва посади не усуває розбіжність. Спочатку в хронології залишають
          обидві дати з посиланням на відповідний документ. Роботодавець надає
          підписаний додаток, який переносить початок роботи на 1 липня, і
          пояснює, що довідка відображає цю зміну.
        </p>
        <p>
          У відповіді зіставлено початкову домовленість, її зміну і довідку.
          Висновок обмежений: розбіжність дат у цьому комплекті пояснена. Самі
          ці матеріали ще не дають висновку про всі умови дозволу або про право
          працювати.
        </p>
        <p>
          Цей розбір поєднує кілька розділів карти. Хронологія відділяє події
          від назв файлів, оцінка доказів пояснює зв'язок документів, а тема
          wezwania розглядає зміст вимоги та відповідь. Повний зразок матеріалу
          можна відкрити в модулі документів; послідовність подібної справи
          пояснюють відповідні кейси.
        </p>
        <OfficialSourceEntry
          source={{
            label: "KPA: збирання та оцінка доказів",
            url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
            note: "Джерело правила про оцінку матеріалу. Приклад вигаданий; він не є рішенням органу. Положення перевірено 06.09.2026.",
          }}
        />
      </section>

      <section aria-labelledby="map-stages-title">
        <h2 id="map-stages-title">Зміст карти</h2>
        <p>
          Кожен розділ об'єднує теми одного предмета. Його опис показує, що саме
          можна тут з'ясувати; перелік відкриває окремі статті.
        </p>
        <Accordion
          data-not-typeset
          className="not-typeset mt-8 border-y"
          value={openChapterIds}
          onValueChange={onOpenChaptersChange}
          multiple
        >
          {legalMapChapters.map((chapter) => (
            <AccordionItem
              key={chapter.id}
              id={`stage-${chapter.id}`}
              value={chapter.id}
              className="scroll-mt-24"
            >
              <AccordionTrigger className="gap-4 py-6 hover:no-underline">
                <span className="flex min-w-0 flex-1 gap-4 pr-3">
                  <span className="pt-0.5 text-xs text-muted-foreground">
                    {String(chapter.order).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <strong className="text-base font-medium">
                        {chapter.title}
                      </strong>
                      <Badge variant="outline">
                        Тем: {chapter.nodeIds.length}
                      </Badge>
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                      {chapter.description}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="border-t">
                  {chapterNodes(chapter).map((node) => (
                    <li key={node.id} className="border-b last:border-b-0">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => onNodeSelect(node.id)}
                        className="h-auto w-full justify-start rounded-none px-0 py-4 text-left whitespace-normal hover:bg-transparent"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm leading-5 font-medium">
                            {node.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                            {legalTextPlainText(node.polish)}
                          </span>
                          <span className="mt-1.5 block text-sm leading-6 text-muted-foreground">
                            {legalTextPlainText(node.summary)}
                          </span>
                        </span>
                        <ArrowRight data-icon="inline-end" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </DocumentArticle>
  )
}
