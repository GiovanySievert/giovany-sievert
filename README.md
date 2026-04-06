# giovany-sievert.dev

Personal portfolio built with a VS Code-inspired interface — tabs, sidebar, syntax highlighting, and all.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**

## Running locally

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/          → Next.js app router (layout, page, global styles)
components/
  layout/     → AppShell, Header, Sidebars, StatusBar
  sections/   → Hero, About, Skills, Projects, Contact
  ui/         → Badge, Button, Cursor, syntax components
lib/          → data.ts (experience, projects, skills)
types/        → shared TypeScript interfaces
```

## License

MIT
