# Neerej Dev - Academic Website

Personal academic website for **Neerej Dev**, Doctoral Researcher at the University of Wolverhampton.

Modeled after modern academic portals (e.g., Hugo Blox Academic / [hanzhang.xyz](https://hanzhang.xyz/)), crafted with pure, zero-dependency modern HTML5, CSS3, and JavaScript for deployment on **GitHub Pages**.

## Features

- **Academic Persona & Research Strands**: Covers doctoral research (*Scripting the Settler Dream*), *Algorithmic Acculturation* in UK adult social care, and *Hybrid Poetics Framework*.
- **Full Publications Archive**: Categorized papers, DOIs, publisher links, local PDF attachments, collapsible abstracts, and one-click BibTeX copy modals.
- **Grants & International Fellowships**: Showcasing awards from the Swedish Collegium for Advanced Study (SCAS), Swedish Research Council (*Vetenskapsrådet*), European Sociological Association (ESA), ARL Leibniz Association / RSA, and SOAS University of London.
- **Dark / Light Theme**: Clean emerald/teal & slate design system with persistent `localStorage` toggle and system color scheme auto-detection.
- **Instant Live Search (`Cmd + K`)**: Fuzzy live search modal matching titles, venues, awards, and abstracts.
- **Mobile Responsive & Accessible**: Full mobile drawer menu, semantic HTML5, Schema.org Person JSON-LD, OpenGraph and Twitter card metadata.
- **Print-Ready CV**: Interactive web CV with embedded PDF reader, direct PDF download, and browser print stylesheet.

## Directory Structure

```
Website/
├── index.html            # Main academic portal
├── publications.html     # Comprehensive publications library
├── research.html         # Research strands, projects, & awards
├── talks.html            # Selected presentations & talks
├── writing.html          # Public commentary & op-eds
├── cv.html               # Online CV with embedded PDF reader
├── .nojekyll             # Bypasses Jekyll on GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css     # Design system, dark/light themes, typography
│   ├── js/
│   │   └── main.js       # Live search, BibTeX modals, theme switcher
│   └── images/
│       ├── neerej-avatar.webp # Web-optimized high-res profile photo
│       ├── neerej-avatar.png  # Full resolution fallback
│       └── favicon.png        # Site favicon
└── files/
    ├── Neerej_Dev_CV.pdf # Full Curriculum Vitae PDF
    └── *.pdf             # Published peer-reviewed papers
```

## GitHub Pages Deployment

To publish this website on GitHub Pages:

1. **Option A: Deploy to `neerejdev.github.io` (Recommended root personal domain)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of academic website"
   gh repo create neerejdev.github.io --public --source=. --remote=origin --push
   ```
   The site will be live immediately at: `https://neerejdev.github.io/`

2. **Option B: Deploy to a project repository (e.g. `website`)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of academic website"
   gh repo create website --public --source=. --remote=origin --push
   ```
   Enable GitHub Pages in Repo Settings -> Pages -> Source: `Deploy from a branch` -> `main` / `root`.
