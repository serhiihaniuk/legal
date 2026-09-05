import { useEffect, useRef, useState, type ReactNode } from "react"
import { useLocation } from "react-router"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

export function CaseReferenceDisclosure({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  const location = useLocation()
  const sectionRef = useRef<HTMLElement>(null)
  const pendingTarget = useRef<HTMLElement | null>(null)
  const [value, setValue] = useState<string[]>([])

  useEffect(() => {
    let frame = 0
    function openTarget(hash: string) {
      const target = document.getElementById(hash.slice(1))
      if (!target || !sectionRef.current?.contains(target)) return
      pendingTarget.current = target
      setValue([id])
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          target.scrollIntoView?.({ block: "start", behavior: "instant" })
        })
      })
    }
    function onClick(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return
      const link =
        event.target instanceof Element ? event.target.closest("a[href]") : null
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank")
        return
      const url = new URL(link.href)
      if (
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        openTarget(url.hash)
      }
    }
    function onHashChange() {
      openTarget(window.location.hash)
    }
    openTarget(location.hash)
    document.addEventListener("click", onClick)
    window.addEventListener("hashchange", onHashChange)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("click", onClick)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [id, location.hash, location.key])

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-labelledby={`${id}-heading`}
      className="border-t"
    >
      <Accordion
        value={value}
        onValueChange={setValue}
        className="[&>div>h2]:m-0"
      >
        <AccordionItem value={id}>
          <AccordionTrigger
            headingLevel={2}
            id={`${id}-heading`}
            className="items-center gap-4"
          >
            {title}
          </AccordionTrigger>
          <AccordionContent
            keepMounted
            onAnimationEnd={(event) => {
              if (event.target !== event.currentTarget || !value.length) return
              pendingTarget.current?.scrollIntoView?.({
                block: "start",
                behavior: "instant",
              })
              pendingTarget.current = null
            }}
          >
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
