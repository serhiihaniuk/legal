import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router"

import type { Route } from "./+types/root"
import "./app.css"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uk"
      className="[--header-height:calc(var(--spacing)*14)] lg:[--header-height:calc(var(--spacing)*16)]"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="overscroll-none antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export const meta: Route.MetaFunction = () => [
  { title: "Legalizacja — навчальний атлас права" },
  {
    name: "description",
    content: "Інтерактивний гайд з KPA та легалізації іноземців у Польщі.",
  },
]

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Помилка"
  let details = "Сталася непередбачена помилка."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Помилка"
    details =
      error.status === 404
        ? "Запитану сторінку не знайдено."
        : "Не вдалося обробити цей запит."
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
