# Gearhouse — Mobile Bike Repair (Task 3)

**Domain:** Web Development — Front-End
**Project by:** Laiba Aftab
**Submitted for:** Inovegen Internship — Task 3

## Overview

Gearhouse is a responsive front-end website for a fictional mobile bicycle repair service. It's a single-page site built with plain HTML, CSS, and JavaScript, covering a home/hero section, service tiers, an about section, an FAQ, and a contact form — with a quick-quote booking modal.

**Live demo:** _add your deployed link here_
**Repository:** _add your GitHub repo link here_

## Project Structure

```
gearhouse-website/
├── index.html
├── style.css
├── script.js
├── favicon.svg
└── README.md
```

## How to Run Locally

1. Download or clone the project folder.
2. Open `index.html` in any modern browser — no build step or server required.

Fonts (Archivo, Inter) load via Google Fonts CDN in `index.html`; no other dependencies.

## Sections

- **Home** — hero with the service's value proposition and two calls to action
- **Services** — three service tiers (Mobile Tune-Up, Full Overhaul, Custom Build) with pricing and descriptions
- **About** — the business's short backstory and service scope
- **FAQ** — common questions in an accordion
- **Contact** — booking form with client-side validation

## JavaScript Interactivity

1. **Mobile menu toggle** — hamburger menu for nav on small screens
2. **FAQ accordion** — expandable question/answer items
3. **Quick-quote modal** — opens from two entry points (nav and hero), closes via button, backdrop click, or Escape key
4. **Contact form validation** — checks required fields and a valid email format before showing a success message, with inline error text per field

## Design Notes

- Color palette: charcoal (`#1C1F1D`), rust orange (`#C1440E`), safety yellow (`#F2B705`), warm paper (`#F5F2EA`), steel grey (`#4A5560`) — chosen to evoke a bike workshop rather than a generic tech palette
- Typography: Archivo for headings, Inter for body text
- One deliberate page-load animation (the hero wheel spins into place); no scroll-triggered effects elsewhere, to keep motion purposeful rather than decorative
- Visible focus states on all interactive elements; `prefers-reduced-motion` is respected

## Responsiveness

- Built with CSS Grid and Flexbox
- Breakpoints at 860px (hero/about stack to one column, service rows stack) and 640px (nav collapses to a hamburger menu)
- Tested across desktop, tablet, and mobile widths

## Tech Stack

- HTML5 (semantic elements: `header`, `nav`, `section`, `footer`, `form`)
- CSS3 (custom properties, Grid, Flexbox, media queries, keyframe animation)
- Vanilla JavaScript (no frameworks or libraries)

## Screenshots

_Add desktop, tablet, and mobile screenshots here before submission — all three breakpoints this time._

- Desktop: _(add screenshot)_
- Tablet: _(add screenshot)_
- Mobile: _(add screenshot)_
