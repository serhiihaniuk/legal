import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import {
  LegalProvisionSource,
  type LegalProvisionSourceProps,
} from "./legal-provision-source"

export function ProvisionSourceReader({
  pdfUrl,
  preferPdf,
  ...source
}: LegalProvisionSourceProps & { pdfUrl: string; preferPdf: boolean }) {
  const [view, setView] = useState(preferPdf ? "pdf" : "text")
  useEffect(() => {
    let frame = 0
    function revealPassage() {
      const hash = window.location.hash
      if (!source.idPrefix || !hash.startsWith(`#${source.idPrefix}-`)) return
      setView("text")
      frame = requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ block: "start" })
      })
    }
    revealPassage()
    window.addEventListener("hashchange", revealPassage)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("hashchange", revealPassage)
    }
  }, [source.idPrefix])
  return (
    <Tabs
      key={pdfUrl}
      value={view}
      onValueChange={setView}
      data-not-typeset
      className="not-typeset mt-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <TabsList aria-label="Вигляд джерела">
          <TabsTrigger value="text">
            {preferPdf ? "Витяг із PDF" : "Текст для читання"}
          </TabsTrigger>
          <TabsTrigger value="pdf">Оригінал PDF</TabsTrigger>
        </TabsList>
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Відкрити PDF окремо"
            />
          }
        >
          Відкрити PDF окремо
        </Button>
      </div>
      <TabsContent value="text">
        {preferPdf && (
          <p className="my-4 text-sm leading-6 text-muted-foreground">
            Цей додаток має власний макет. Поля, таблиці та місця для підпису
            переглядайте в оригіналі PDF.
          </p>
        )}
        {preferPdf ? (
          <p lang="pl" className="text-base leading-7 whitespace-pre-wrap">
            {source.text}
          </p>
        ) : (
          <LegalProvisionSource {...source} />
        )}
      </TabsContent>
      <TabsContent value="pdf">
        <p className="my-3 text-sm leading-6 text-muted-foreground">
          {preferPdf
            ? "Оригінальний макет додатка з усіма полями, таблицями й примітками."
            : "Оригінальна сторінка джерела. Якщо текст враховує зміни з іншого акта, його PDF доступний біля назви статті."}
        </p>
        <iframe
          loading="lazy"
          src={`${pdfUrl}&navpanes=0`}
          title={`${source.locator}, оригінал PDF`}
          className="h-[75dvh] min-h-96 w-full rounded-md border bg-muted/20"
        />
      </TabsContent>
    </Tabs>
  )
}
