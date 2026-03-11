# NovaCorp — Company & Website Design Overview

---

## 🏢 About NovaCorp

**NovaCorp** is a full-service digital solutions company founded in San Francisco, CA. We partner with startups, scale-ups, and enterprises to design, build, and launch digital products that are fast, beautiful, and built to scale.

We operate across six core disciplines:

| Service | What We Do |
|---|---|
| **Web Development** | Custom full-stack web apps using React, Next.js, and Node.js |
| **Mobile Apps** | Cross-platform iOS & Android with React Native |
| **Cloud & DevOps** | AWS / GCP / Azure architecture, CI/CD, Kubernetes |
| **AI Integration** | LLM pipelines, computer vision, ML-powered automation |
| **UI/UX Design** | Brand identity, design systems, Figma specs |
| **Digital Marketing** | SEO audits, content strategy, performance campaigns |

**Headquarters:** 340 Pine St, Suite 800, San Francisco, CA 94104
**Contact:** hello@novacorp.io · +1 (800) 555-0192
**Hours:** Monday – Friday, 9 AM – 6 PM PST

---

## 🎨 Website Design Overview

### Visual Identity

The NovaCorp website uses a **dark luxury** aesthetic — deep charcoal backgrounds with warm gold accents, conveying premium quality and technical sophistication.

| Design Token | Value | Purpose |
|---|---|---|
| `--bg` | `#0d0d0f` | Page background |
| `--surface` | `#141418` | Cards, sidebar, topbar |
| `--surface2` | `#1c1c22` | Hover states, inputs |
| `--accent` | `#e8c96d` | Primary gold — CTAs, active states |
| `--accent2` | `#f0a05a` | Warm orange — gradient partner |
| `--text` | `#e8e8f0` | Body text |
| `--muted` | `#7a7a90` | Labels, secondary text |

### Typography

- **Playfair Display** (Google Fonts) — headings, logo, stat numbers. Gives a refined, editorial feel.
- **DM Sans** (Google Fonts) — body copy, labels, buttons. Clean and highly legible at small sizes.

### Layout

The site uses a **fixed sidebar + main content** split layout:

```
┌─────────────────────────────────────────────────┐
│  SIDEBAR (260px fixed)  │  TOPBAR (60px tall)   │
│  ─ Logo                 ├───────────────────────│
│  ─ Nav links            │                       │
│  ─ Quick stats          │   PAGE CONTENT        │
│  ─ User profile         │   (scrollable)        │
└─────────────────────────┴───────────────────────┘
```

- Sidebar is **fixed width** (`260px`) and never scrolls
- Main content area is **fluid** and fills the rest of the viewport
- Content area scrolls independently — sidebar always stays visible

### Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero banner, stats row, features grid |
| Services | `pages/services.html` | 6 service cards with pricing |
| Portfolio | `pages/portfolio.html` | 6 project showcase cards |
| Contact | `pages/contact.html` | Contact details + enquiry form |

---

## 📁 Folder Structure

```
novacorp/
│
├── index.html              ← Home page (open this to launch the site)
│
├── pages/                  ← One .html file per page
│   ├── services.html
│   ├── portfolio.html
│   └── contact.html
│
├── css/
│   ├── styles.css          ← Global styles: sidebar, topbar, buttons, colors, fonts
│   └── pages.css           ← Page-specific styles: hero, cards, forms, grids
│
├── js/
│   └── main.js             ← Shared JS: auto active-nav, contact form handler
│
└── README.md               ← You are here
```

### What goes where

- **`css/styles.css`** — touch this for anything that appears on every page (sidebar, topbar, buttons, color variables, typography)
- **`css/pages.css`** — touch this for styles that only appear on one specific page (the hero banner, portfolio grid, contact form, etc.)
- **`js/main.js`** — touch this for any JavaScript behaviour shared across all pages

---

## 🚀 Running the Site

Open `index.html` directly in any browser — no server or build step required.

For live-reload during development, use **VS Code Live Server** or run:
```bash
npx serve .
```