# SPEC: Pink Rodeo Tattoo Club one-page website

Project folder: `~/Desktop/pink-rodeo-tattoo-club` (created, with empty `assets/logo` and `assets/work`).
On approval this document is saved as `SPEC.md` in that folder, and then I build.

## 1. Context

Federica Aiello is a fine line tattoo artist in North London. The page exists to get visitors to DM her on Instagram and follow her. It also has to rank for local searches and be measurable in GA4 and Search Console, as part of a marketing portfolio. Plain HTML, CSS and JavaScript. No build step, no framework, no host-specific files.

## 2. What is missing right now (sections left out, per the brief)

| Missing | Effect on the page |
|---|---|
| Logo in `assets/logo` | Brand name set in text, in Fraunces with the neon pink sign treatment. |
| Photos in `assets/work` | "Recent work" section is left out. The gold frame style is still built and ready. |
| `assets/why-i-tattoo.txt` | "Why I tattoo" (and so the cream section) is left out. |
| A social preview photo | No `og:image`. Twitter card type is `summary`. |
| Real GA4 ID | Placeholder `G-XXXXXXXXXX`. Analytics will not load until it is replaced. |

Decisions already made with you: strict reading of the cream rule (page is all green until her words arrive); name only, no pronouns and no "female tattoo artist" in the copy until you confirm; testing with Chrome's built-in Lighthouse.

## 3. Page structure (single page, `index.html`)

1. **Skip link** (visible on focus): "Skip to content".
2. **Hero** `<header>`: text logo (not a heading), `<h1>`, one line, two buttons.
3. **Federica's style** `<section>` with `<h2>`.
4. *(Recent work: omitted.)*
5. *(Why I tattoo: omitted.)*
6. **How to book** `<section>` with `<h2>`, gold double-frame panel, two buttons.
7. **Footer** `<footer>`: social and email links, privacy notice, "Cookie choices" button.
8. **Consent banner**: sits right after the skip link in the page order (so keyboard users meet it first), fixed to the bottom of the screen, minimal, Accept and Decline with equal prominence.

Heading order: h1, then h2 "Federica's style", then h2 "How to book". The footer uses a labelled `<nav>` and no extra headings except one h2 "Privacy".

## 4. Full draft copy (British English, for your approval)

**Title tag** (49 characters): `Fine Line Tattoo Artist North London | Pink Rodeo`

**Meta description** (about 150 characters): `Federica Aiello is a fine line tattoo artist in North London. Delicate tattoos at Pink Rodeo Tattoo Club, by appointment. Message Federica on Instagram.`

**Hero**
- Logo text: Pink Rodeo Tattoo Club
- h1: Fine line tattoo artist in North London
- Line: Delicate tattoos by Federica Aiello at Pink Rodeo Tattoo Club. By appointment.
- Primary button (filled pink): **Message Federica** (DM link)
- Secondary button (gold outline): **Follow on Instagram**

**Federica's style** (h2)
> Federica works in fine line: light, delicate lines with a soft, refined finish. A tiny tattoo suits the style as well as a larger piece. If you have an idea in mind, send it to Federica on Instagram.

**How to book** (h2)
> Federica works by appointment in North London, on Wednesdays, Fridays and Saturdays only. To book a fine line tattoo in London, send a message on Instagram.

Panel (gold double frame):
- **Days:** Wednesday, Friday and Saturday
- **Clients:** 18 or over, with photo ID

Buttons again: **Message Federica** and **Follow on Instagram**.

**Footer**
- Links: Instagram, TikTok, Email (hello@pinkrodeotattooclub.co.uk)
- Small line: © 2026 Pink Rodeo Tattoo Club
- **Privacy** (h2, small):
  > This site uses Google Analytics to count visits and see which links people use, but only if you choose Accept. Until then nothing is sent to Google Analytics and no analytics cookies are set. The site has no forms and does not ask for your name or contact details. Your accept or decline choice is saved on your own device so you are not asked again. The text fonts are loaded from Google Fonts, which means Google receives your IP address when the page loads. Whoever hosts the site may keep basic server logs, as most hosts do. Links to Instagram, TikTok and email take you to services with their own privacy policies. Use "Cookie choices" below to change your mind at any time.
- "Cookie choices" button reopens the banner.
- Note to you (not on the page): this is plain-English drafting, **not legal advice**. Have it checked if the site becomes a business site.

**Consent banner**
> We use Google Analytics to see how this page is used. It only runs if you accept. [Accept] [Decline]

## 5. Design

Tokens (CSS custom properties in `styles.css`):
- `--green: #0E2B22` page background, the only green.
- `--cream: #F3EBDD` text on green (and the future "Why I tattoo" section background).
- `--gold: #C9A24D` frames and secondary button outline.
- `--pink: #FF6FB5` primary button and logo sign glow.

Details:
- Gold double frame: `border: 2px solid gold`, then a 4px gap, then a 1px inner line (done with an `::before` inset 6px, no extra markup). Reused for the booking panel and, later, each photo.
- Pink sign treatment: text-shadow in layered pink, soft and static. No animation, no flicker.
- Primary button: pink fill, dark green text (5.9:1 contrast). Secondary: transparent, 2px gold border, cream text.
- Fonts: Fraunces (weights 400 and 600) for headings, Jost (400 and 500) for body, one Google Fonts request, `display=swap`, `preconnect` to both Google hosts.
- Mobile first at 375px. Buttons at least 48px tall and full width on small screens, side by side from about 600px. Body text 17px or more, large vertical spacing (about 5 to 6rem between sections), max content width about 38rem, centred.
- Visible focus: 3px cream outline with offset on all interactive elements. `prefers-reduced-motion` removes any transitions and smooth scroll.
- Contrast (all WCAG AA or better): cream on green 12.8:1, gold on green 6.3:1, dark green on pink 5.9:1, pink on green 5.9:1.

## 6. SEO

- `<html lang="en-GB">`, unique title and description (section 4), `<link rel="canonical" href="https://pinkrodeotattooclub.co.uk/">`.
- Open Graph (`og:type website`, title, description, url, site name, locale `en_GB`) and Twitter tags. `og:image` and the 1200x630 image added only when you supply a photo.
- JSON-LD `@graph` with **Organization** (Pink Rodeo Tattoo Club, url, email, sameAs Instagram and TikTok) and **Person** (Federica Aiello, jobTitle "Tattoo artist", worksFor the Organization, sameAs Instagram and TikTok). No address, no LocalBusiness type. Organization `logo` added when a logo exists.
- Search phrases worked in once each: fine line tattoo artist North London (title, description, h1), fine line tattoo London and delicate tattoos (booking and hero copy), tiny tattoo (style copy). "Female tattoo artist London" left out for now.
- Images: width, height, descriptive alt, `loading="lazy"` below the fold, WebP where `sips` can make it (I will test). Nothing to apply yet.
- `robots.txt`: allow all, link to sitemap. `sitemap.xml`: the one URL `https://pinkrodeotattooclub.co.uk/` with today's date.

## 7. Analytics and consent

- `script.js` starts with one clearly marked block: `const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";`. The ID is never written into the visible page.
- Consent Mode v2: in `<head>`, a tiny inline script sets `dataLayer`, `gtag()` and `gtag("consent","default", {analytics_storage:"denied", ad_storage:"denied", ad_user_data:"denied", ad_personalization:"denied"})`.
- "Basic" mode: Google's `gtag.js` is only downloaded after the visitor accepts, then `consent update` sets analytics storage to granted. This keeps the privacy notice accurate (nothing leaves the browser before consent). Trade-off: no modelled data for people who decline.
- If the ID is still the placeholder, nothing loads at all.
- Choice stored in `localStorage` (wrapped in try/catch). Banner appears only if no choice is stored. "Cookie choices" reopens it.
- Events, set by `data-event` attributes and one delegated click listener:

| Event name | Element | Extra data (`data-location`) |
|---|---|---|
| `click_dm` | "Message Federica" buttons (hero, booking) | `hero`, `booking` |
| `click_instagram_follow` | "Follow on Instagram" buttons and footer Instagram link | `hero`, `booking`, `footer` |
| `click_email` | footer email link | `footer` |
| `click_tiktok` | footer TikTok link | `footer` |

- Events fire only when consent is granted. All external links open in a new tab with `rel="noopener noreferrer"`, so the visitor keeps the page open.

## 8. Files

```
index.html          the page (inline critical bits: consent default, JSON-LD)
styles.css          design tokens, layout, frames, buttons, banner
script.js           GA ID block, consent logic, event tracking
robots.txt
sitemap.xml
assets/
  logo/             (empty: waiting for Federica's logo)
  work/             (empty: waiting for her photos)
  favicon.svg       small pink "PR" on green, the only file I draw
README.md           plain-English guide
SPEC.md             this document
.gitignore          .DS_Store, editor files, node_modules
```
No deployment config. The `.com` redirect and host choice are left for later.

## 9. Process

1. **Git** (first use I explain in one sentence: `git init` creates a hidden history book in the folder so every change is saved and can be undone). Small commits: init + .gitignore; SPEC.md; index.html; styles.css; script.js; robots and sitemap; review fixes (two passes); README.
2. **Self-review twice.** Pass 1: list problems against every rule in the brief, fix nothing. Then fix. Pass 2: repeat. You see both lists.
3. **Tests.** Node.js and Homebrew are not installed, so I cannot run Lighthouse myself. I will check by script (title and description length, one h1, heading order, no hidden GA ID, no horizontal scroll at 375px, tap target sizes, contrast maths) and in the in-app browser at 375px. You run Chrome's built-in Lighthouse using my click-by-click steps, and the W3C validator by copy and paste. I report exactly what was and was not tested, and I will not guess scores.
4. **README.md**: preview on your computer (open `index.html` by double-clicking, or a one-line local server with Python), GA4 setup, marking `click_dm` as a key event, Search Console verification by DNS TXT record, adding photos and the "Why I tattoo" text later, deploying once you choose a host.
5. **GitHub.** `gh` is not installed. I give you two options: install the GitHub CLI from cli.github.com and sign in with one command (then I create and push the repo), or create an empty repository on github.com by clicking, and I give you the exact two `git` lines to paste. I will not push anything until you say yes.

## 10. Verification

- Open the site locally in the in-app browser at 375px and at desktop width: layout, buttons, banner, frames, focus rings.
- Console check: no errors, no requests to Google Analytics before Accept.
- A Python script check of every rule in the brief that can be machine-tested.
- Your Lighthouse run: all four categories should be 90 or above on mobile.
- Search Console and GA4 are verified by you after deployment (steps in README).

## 11. What I need from you later

Logo, photos (with a line on what each shows, for alt text), a 1200x630 social photo, `assets/why-i-tattoo.txt` in Federica's own words, the GA4 measurement ID, confirmation of "female" and pronouns, and your host choice.
