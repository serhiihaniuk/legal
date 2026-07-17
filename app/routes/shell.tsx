import { Outlet } from "react-router"

import { SiteHeader } from "~/components/layout"

export function meta() {
  return [{ title: "Legalizacja — навчальний атлас права" }]
}

export default function Shell() {
  return (
    <div
      data-slot="layout"
      className="relative z-10 flex min-h-svh flex-col bg-background"
    >
      <SiteHeader />
      <main className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  )
}
