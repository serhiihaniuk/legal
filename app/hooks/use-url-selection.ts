import { useCallback } from "react"
import { useNavigate, type To } from "react-router"

export type UrlSelectionModel<Value> = {
  value: Value
  select: (value: Value) => void
}

export function useUrlSelection<Value>({
  value,
  to,
  scroll = "top",
}: {
  value: Value
  to: (value: Value) => To
  scroll?: "top" | false
}): UrlSelectionModel<Value> {
  const navigate = useNavigate()

  const select = useCallback(
    (nextValue: Value) => {
      void navigate(to(nextValue))
      if (scroll === "top") {
        requestAnimationFrame(() =>
          window.scrollTo({ top: 0, behavior: "auto" })
        )
      }
    },
    [navigate, scroll, to]
  )

  return { value, select }
}
