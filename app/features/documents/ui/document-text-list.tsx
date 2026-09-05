import { LegalText } from "~/components/references"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"

export function DocumentTextList({
  items,
  ordered = false,
}: {
  items: readonly LegalTextValue[]
  ordered?: boolean
}) {
  const List = ordered ? "ol" : "ul"
  return (
    <List>
      {items.map((item) => (
        <li key={legalTextPlainText(item)}>
          <LegalText text={item} />
        </li>
      ))}
    </List>
  )
}
