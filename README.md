# Legalizacja: mapa prawa

`Legalizacja` — україномовний освітній правовий атлас про легалізацію перебування
іноземців у Польщі. Він допомагає пов’язати факти справи з польським правовим
поняттям, przepis, доказом, строком, наслідком і засобом оскарження. Це навчальний
інструмент, а не автоматизована система прийняття рішень і не заміна
індивідуальної юридичної консультації.

## Stack

Проєкт використовує React, TypeScript, React Router, Vite, Tailwind CSS і
shadcn/ui.

## Commands

```bash
npm install
npm run dev
npm run build
npm run verify
```

`npm run verify` послідовно запускає typecheck, lint, format:check, тести,
перевірки corpus/editorial/previews і production build.

## Legal corpus

Для побудови видання за конфігурацією використовуйте:

```bash
npm run corpus:build -- <config>
```

Життєвий цикл corpus:

```bash
npm run corpus:prepare
npm run corpus:validate
npm run corpus:diff
npm run corpus:generate
npm run corpus:promote
```

Promotion завжди є явною дією: нове видання не стає поточним автоматично після
завантаження чи побудови.

## Documentation

- [DESIGN.md](DESIGN.md) — дизайн і правила UX.
- [AGENTS.md](AGENTS.md) — правила проєкту та юридичного контенту.
- [Architecture docs](docs/architecture/) — архітектурні рішення.
- [Legal knowledge architecture plan](docs/plans/legal-knowledge.md) — єдиний активний план source-first перебудови знань.
