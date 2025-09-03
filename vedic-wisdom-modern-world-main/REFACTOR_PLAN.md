Project: vedic-wisdom-modern-world-main

Current stack
- Vite + React 18 + TypeScript
- React Router v6 (SPA already)
- TailwindCSS + shadcn/ui components

Goal
- Keep SPA with minimal routes: /, /about, /articles, /contact
- Remove sections: Courses, Events, Books, Media
- Align theme to yogaformodernage.com (colors/typography/buttons)

Files to update
- src/App.tsx: prune routes to kept pages only; optionally introduce RootLayout
- src/components/Header.tsx: update nav items (Home, About, Articles, Contact)
- src/components/Footer.tsx: update quick links to match kept pages
- src/pages/Contact.tsx: remove categories for removed sections
- tailwind theme already present; record final tokens in THEME_TOKENS.json

Files to delete/archive
- src/pages/Courses.tsx
- src/pages/Events.tsx
- src/pages/Books.tsx
- src/pages/Media.tsx

Implementation steps
1) Router cleanup and RootLayout with Header/Footer and <Outlet />
2) Remove pages and all references (Header/Footer links, route imports)
3) Update Contact categories to remove deleted sections
4) Extract final theme tokens into THEME_TOKENS.json; ensure Tailwind config matches
5) Create IMPLEMENTATION_CHECKLIST.md and tick items as completed

Acceptance
- No references to Courses/Events/Books/Media in code or UI
- SPA navigation without full reloads
- Builds and dev server run cleanly

