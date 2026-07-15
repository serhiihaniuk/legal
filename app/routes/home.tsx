import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Map,
  Scale,
} from "lucide-react"
import { useNavigate } from "react-router"

import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"

const atlasSections = [
  {
    icon: BookOpen,
    title: "KPA — процесуальна основа",
    description:
      "Тут вивчаємо, хто веде справу, як вона починається, як орган збирає докази, вручає письма, рахує строки та видає decyzję. Матеріальні умови конкретного pobytu шукаємо у спеціальному законі.",
    start: true,
  },
  {
    icon: Map,
    title: "Карта права — повна система",
    description:
      "Карта показує місце поняття у зв’язках pobyt, praca, KPA, dokumenty та praktyka. Використовуйте її, коли потрібно зрозуміти, до якої правової гілки належить питання.",
    action: "Відкрити карту",
    href: "/map",
  },
  {
    icon: FileText,
    title: "Документи — функція кожного доказу",
    description:
      "Каталог пояснює, хто видає або готує документ, коли він потрібний, що підтверджує, чого не доводить і з чим його потрібно звірити.",
    action: "Відкрити документи",
    href: "/documents",
  },
  {
    icon: Scale,
    title: "Прикладова справа — усе разом",
    description:
      "Повний кейс поєднує профіль особи, вибір маршруту, умови, докази, timeline, wezwanie, строки, рішення та негативні гілки.",
    action: "Відкрити справу",
    href: "/cases/cukr",
  },
  {
    icon: GraduationCap,
    title: "План навчання — порядок проходження",
    description:
      "Вісім модулів ведуть від перевірки актуального тексту права до самостійного аналізу повного dossier. Кожен модуль має завдання, результат і критерії перевірки.",
    action: "Відкрити план",
    href: "/study",
  },
] as const

const exampleFlow = [
  {
    label: "Факт",
    text: "Громадянка України перебуває у Польщі та працює на umowie o pracę.",
  },
  {
    label: "Два правові питання",
    text: "Окремо встановлюємо підставу pobytu і право виконувати конкретну роботу.",
  },
  {
    label: "Норма й умови",
    text: "Знаходимо матеріальну підставу, актуальну редакцію та процесуальні правила KPA.",
  },
  {
    label: "Докази",
    text: "До кожної істотної умови додаємо факт, документ, період і ризик суперечності.",
  },
  {
    label: "Дія",
    text: "Фіксуємо строк, комплект документів і наступну процесуальну дію.",
  },
] as const

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-6 lg:py-20">
      <Badge variant="secondary">
        Навчальний атлас для legalizacji cudzoziemców
      </Badge>
      <h1 className="mt-6 max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
        Навчіться переходити від юридичного тексту до контрольованого аналізу
        справи
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
        Атлас пояснює польські правові терміни простою українською і вчить
        працювати в одному порядку: факт → поняття → норма → доказ → строк → дія
        → наслідок.
      </p>
      <div className="mt-8">
        <Button
          type="button"
          size="lg"
          onClick={() => navigate("/guide/kpa?module=system")}
        >
          Розпочати з модуля 1 KPA
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>

      <Separator className="my-12" />

      <section aria-labelledby="atlas-structure-title">
        <p className="text-sm font-medium text-muted-foreground">
          Як влаштований атлас
        </p>
        <h2
          id="atlas-structure-title"
          className="mt-2 text-3xl font-semibold tracking-tight"
        >
          П’ять розділів виконують різні завдання
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          Не потрібно читати все одночасно. KPA дає процесуальну основу, карта
          орієнтує у системі, документи пояснюють докази, справа показує повний
          маршрут, а план навчання задає послідовність.
        </p>

        <ol className="mt-8 divide-y border-y">
          {atlasSections.map((section, index) => (
            <li
              key={section.title}
              className="grid gap-4 py-6 sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:items-start"
            >
              <span className="pt-1 text-sm text-muted-foreground">
                {index + 1}
              </span>
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <section.icon className="size-4" />
                  {section.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  {section.description}
                </p>
              </div>
              {"action" in section ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="justify-self-start sm:mt-0 sm:justify-self-end"
                  onClick={() => navigate(section.href)}
                >
                  {section.action}
                </Button>
              ) : (
                <Badge
                  variant="outline"
                  className="justify-self-start sm:justify-self-end"
                >
                  Старт тут
                </Badge>
              )}
            </li>
          ))}
        </ol>
      </section>

      <Separator className="my-12" />

      <section aria-labelledby="example-flow-title">
        <p className="text-sm font-medium text-muted-foreground">
          Як виглядає робочий аналіз
        </p>
        <h2
          id="example-flow-title"
          className="mt-2 text-3xl font-semibold tracking-tight"
        >
          Один факт проходить через п’ять кроків
        </h2>
        <div className="mt-8 border-l pl-6">
          <ol className="grid gap-6">
            {exampleFlow.map((step, index) => (
              <li
                key={step.label}
                className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
              >
                <p className="text-sm font-semibold">
                  {index + 1}. {step.label}
                </p>
                <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
