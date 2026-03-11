# NovaCorp Website — Folder Structure Guide

## 📁 Project Structure

```
novacorp/
│
├── index.html              ← Home page (entry point)
│
├── pages/                  ← All other HTML pages live here
│   ├── services.html
│   ├── portfolio.html
│   └── contact.html
│
├── css/                    ← All stylesheets
│   ├── styles.css          ← Shared layout & component styles (sidebar, topbar, buttons…)
│   └── pages.css           ← Page-specific styles (hero, cards, forms…)
│
└── js/                     ← All JavaScript
    └── main.js             ← Shared logic (active nav highlight, form handler…)
```

---

## 🔗 How Path Links Work

| File location        | Link to CSS            | Link to JS            | Link to other pages        |
|----------------------|------------------------|-----------------------|----------------------------|
| `index.html` (root)  | `css/styles.css`       | `js/main.js`          | `pages/services.html`      |
| `pages/*.html`       | `../css/styles.css`    | `../js/main.js`       | `portfolio.html` (sibling) |

> **Rule:** Every time you go one folder deeper, add `../` before the path.

---

## ➕ How to Add a New Page

1. Create `pages/yourpage.html`
2. Copy the sidebar block from any existing page — it's identical on all pages
3. Add a new `<a class="nav-item">` entry pointing to `yourpage.html` in **every** page's sidebar
4. Add any new CSS classes to `css/pages.css`
5. Add any new JS functions to `js/main.js`

---

## 🎨 How to Add New CSS

- **Affects all pages** (layout, colors, buttons) → edit `css/styles.css`
- **Affects one specific page** (a unique card, section, widget) → add to `css/pages.css` with a comment header

---

## 📝 How the Active Nav Works

`js/main.js` reads `window.location.pathname` on every page load and automatically
adds the `.active` class to whichever sidebar link matches the current file name.
You don't need to add `active` manually to the HTML.

---

## 🚀 How to Open Locally

Just open `index.html` in your browser directly — no server needed.
All links are relative, so navigation works out of the box.

If you want live-reload during development, use VS Code's **Live Server** extension
or run:
```
npx serve .
```
