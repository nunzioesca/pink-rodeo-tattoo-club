# Pink Rodeo Tattoo Club

Website for Pink Rodeo Tattoo Club, the fine line tattoo brand of Federica Aiello in North London.

**Live site:** https://pinkrodeotattooclub.co.uk

> **All rights reserved.** The photos, logo, text and design belong to Pink Rodeo Tattoo Club and Federica Aiello and may not be reused without written permission. See [LICENSE](LICENSE).

## About

The site has one job: to turn a visit into a message to Federica on Instagram. It is a fast, accessible, mobile-first site with two pages and no build step.

- **Home** (`/`): introduction, recent work in a photo viewer, and calls to action.
- **FAQ** (`/faq/`): 19 questions and answers written by Federica, grouped by topic.

## Features

- Responsive layout designed for phones first, with a retractable menu.
- Accessible markup: semantic headings, keyboard-friendly controls, descriptive alt text and visible focus states.
- Consent-first analytics: Google Analytics 4 with Consent Mode v2. Nothing is measured until the visitor presses Accept, and the choice can be changed from the footer.
- Click tracking on the main calls to action (`click_dm`, `click_instagram_follow`, `click_faq`, `click_email`, `click_tiktok`).
- Search-ready: structured data (WebSite, Organization, Person, FAQPage, BreadcrumbList), sitemap, canonical URLs, social preview image.
- Short redirect links (`/ig`, `/tiktok`, `/gbp`) that add campaign labels for use in social bios and the Google Business Profile.

## Tech

Plain HTML, CSS and a small amount of JavaScript. No frameworks, no dependencies and no build step. Fonts are Bodoni Moda and Jost from Google Fonts.

## Project structure

| Path | Purpose |
|---|---|
| `index.html` | Home page, including its structured data |
| `faq/index.html` | FAQ page and its FAQPage structured data |
| `styles.css` | All styles and design tokens (colours, fonts) |
| `script.js` | Consent banner, analytics loading and click tracking |
| `assets/` | Web-sized images, logo and favicon files |
| `404.html` | Branded not-found page |
| `ig/`, `tiktok/`, `gbp/` | Redirect pages for bio links (not indexed) |
| `sitemap.xml`, `robots.txt` | Search engine files |
| `CNAME` | Custom domain for GitHub Pages |
| `SPEC.md` | Design and content notes |

Full-size originals are kept outside the repository (`originals/` is git-ignored).

## Run locally

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080. Analytics only loads after consent, so it stays off during local checks.

## Deployment

The site is served by GitHub Pages from the `main` branch (repository root). Pushing to `main` publishes it. The custom domain is set by DNS at the registrar plus the `CNAME` file.

## Content and maintenance notes

- The FAQ page repeats every answer in its FAQPage structured data. Edit the visible text and the structured data together so they match.
- Images in `assets/work/` are exported at three widths (640, 960 and 1400 px) with location data removed.
- Content comes from Federica. Do not add claims about her work, prices or availability that she has not approved.

## Privacy

The privacy text in the page footer describes what the site actually does: optional analytics after consent, no forms, fonts loaded from Google Fonts, a consent choice stored on the visitor's device, and the host's server logs. If a form, booking tool, mailing list, advert or other tracker is added, the notice must be updated first.

## Contact

Instagram [@federicaiellotattoo](https://www.instagram.com/federicaiellotattoo/) or hello@pinkrodeotattooclub.co.uk.

Built and maintained by Nunzio Esca.
