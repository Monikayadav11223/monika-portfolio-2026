# Monika Yadav — Portfolio

A premium personal portfolio website built with React + Vite + Tailwind CSS v4.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The production build will be in the `dist/` folder. You can deploy it to any static hosting (Vercel, Netlify, GitHub Pages, etc.).

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **React Icons** — Brand icons (GitHub, LinkedIn, etc.)
- **Wouter** — Lightweight routing

## Project Structure

```
src/
├── assets/          # Images (profile photo + project screenshots)
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, About, Skills, Projects, etc.
│   └── ui/          # Reusable components (particles, cursor, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── pages/           # Page components
```

## Customization

- **Profile photo**: Replace `src/assets/monika.jpeg`
- **Project images**: Replace files in `src/assets/project_*.jpg`
- **Content**: Edit the component files in `src/components/sections/`
- **Colors**: Modify CSS variables in `src/index.css` (`:root` block)
