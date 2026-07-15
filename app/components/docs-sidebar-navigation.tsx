import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router"

import { Button } from "~/components/ui/button"

export function DocsSidebar({
  label,
  description,
  children,
  ariaLabel,
  className = "",
}: {
  label?: string
  description?: string
  children: ReactNode
  ariaLabel: string
  className?: string
}) {
  return (
    <nav aria-label={ariaLabel} className={`pb-10 ${className}`}>
      {label ? (
        <p className="px-2 text-xs font-medium text-muted-foreground">
          {label}
        </p>
      ) : null}
      {description ? (
        <p className="mt-1 px-2 text-xs leading-5 text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </nav>
  )
}

export function DocsSidebarBackLink({
  to,
  children,
}: {
  to: string
  children: ReactNode
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      nativeButton={false}
      render={<Link to={to} />}
      aria-label={typeof children === "string" ? children : undefined}
      className="mb-6 h-auto min-h-9 w-full justify-start px-2 py-2 text-left whitespace-normal"
    >
      <ArrowLeft data-icon="inline-start" aria-hidden="true" />
      {children}
    </Button>
  )
}

export function DocsSidebarSection({
  title,
  meta,
  children,
  className = "",
}: {
  title: string
  meta?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`mt-8 ${className}`}>
      <div className="flex items-start justify-between gap-2 px-2">
        <p className="min-w-0 text-xs font-medium text-muted-foreground">
          {title}
        </p>
        {meta ? (
          <span className="shrink-0 text-[0.65rem] leading-4 text-muted-foreground tabular-nums">
            {meta}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export function DocsSidebarList({
  children,
  ordered = false,
}: {
  children: ReactNode
  ordered?: boolean
}) {
  const List = ordered ? "ol" : "ul"
  return <List className="mt-2 grid gap-0.5">{children}</List>
}

export function DocsSidebarItem({
  children,
  href,
  active = false,
  onClick,
  disabled = false,
  size = "sm",
  className = "",
  ariaCurrent,
  ariaPressed,
  nested,
}: {
  children: ReactNode
  href?: string
  active?: boolean
  onClick?: () => void
  disabled?: boolean
  size?: "sm" | "default"
  className?: string
  ariaCurrent?: "page"
  ariaPressed?: boolean
  nested?: ReactNode
}) {
  return (
    <li>
      <Button
        type={href ? undefined : "button"}
        variant={active ? "secondary" : "ghost"}
        size={size}
        disabled={disabled}
        onClick={onClick}
        nativeButton={!href}
        render={href ? <Link to={href} /> : undefined}
        aria-current={
          href ? (ariaCurrent ?? (active ? "page" : undefined)) : undefined
        }
        aria-pressed={ariaPressed ?? (!href ? active : undefined)}
        className={`h-auto min-h-9 w-full justify-start px-2 py-1.5 text-left whitespace-normal ${className}`}
      >
        <span className="min-w-0 break-words">{children}</span>
      </Button>
      {nested}
    </li>
  )
}
