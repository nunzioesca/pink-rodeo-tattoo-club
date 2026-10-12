# SPEC: Pink Rodeo Tattoo Club one-page website

Project folder: `~/Desktop/pink-rodeo-tattoo-club`. Live at https://pinkrodeotattooclub.co.uk (GitHub Pages, public repository). This document records what the site is and why; the README explains how to run and update it.

## 1. Context

Federica Aiello is a fine line tattoo artist in North London. The page exists to get visitors to DM her on Instagram and follow her. It also has to rank for local searches and be measurable in GA4 and Search Console, as part of a marketing portfolio. Plain HTML, CSS and JavaScript. No build step, no framework.

## 2. Status of the material

| Item | Status |
|---|---|
| Logo | Done, in the hero |
| 12 photos of her work | Done, in the gallery (butterflies and pumpkin with bow added 11 October) |
| About text and portrait | Done |
| GA4 ID `G-WEJ9S352CD` | Done, in `script.js` |
| Link-preview image | Done, `assets/social-preview.jpg` |
| FAQ | Waiting for Federica's answers (`assets/faq.txt`) |

Decisions made with the user, overriding the original brief: the palette follows Federica's Instagram (pearl grey and rose); the copy is in first person and may say "female tattoo artist"; the butterflies photo is used; "since 2019" is included; the repository is public. Full-size originals live in `originals/`, which git ignores and the site never publishes (five originals contained GPS coordinates, so they must never be uploaded).

## 3. Page structure (single page, `index.html`)

1. **Skip link** (visible on focus): "Skip to content".
2. **Consent banner**: right after the skip link in the page order (so keyboard users meet it first), fixed to the bottom of the screen, minimal, Accept and Decline with equal prominence.
3. **Hero** `<header>`: Federica's logo image and the `<h1>`. No buttons here (the calls to action are only in the closing section).
4. **About** `<section>`: a light pink box with her tall oval portrait on its top edge; who she is, since when, what she does.
5. **My recent work** `<section>`: 12 framed photos (2 per row on phones and tablets, 3 on laptops from 900px, 4 from 1600px; an unfinished last row is centred).
6. *(FAQ: collapsible questions, before the closing section, once Federica's answers arrive.)*
7. **Ready for your tattoo?** `<section>`: what to send (four bullet points), two buttons, then the Instagram, TikTok and email icons.
8. **Footer** `<footer>` on light pink: copyright, "Cookie choices" button and the privacy notice.

Heading order: h1, then h2 "Hi, I'm Federica Aiello", "My recent work", ("FAQ" when added), "Ready for your tattoo?" and "Privacy".

## 4. Copy (British English, first person as Federica; last revised 12 October 2026)

**Title tag** (61 characters, 545 px wide in Google's title font, so it is not cut off): `Fine Line Tattoo Artist North London | Pink Rodeo Tattoo Club`

**Meta description** (148 characters): `I'm Federica Aiello, a fine line tattoo artist in North London. Delicate tattoos at Pink Rodeo Tattoo Club, by appointment. Message me on Instagram.`

**Hero**
- Logo: Federica's logo image
- h1: Fine line tattoo artist in North London

**About** (h2: Hi, I'm Federica Aiello), in a light pink box with her tall oval portrait on its top edge
> I'm a female tattoo artist, and I've been tattooing since 2019. I specialise in fine line: delicate details and clean lines, in tattoos that feel personal to the person wearing them.
>
> From a tiny tattoo that holds a memory to a design we create from scratch, every one is made with patience and a light touch.
>
> *Small tattoos with personal stories, made to be yours.* (closing line, in the heading font)

"Since 2019" was added at the user's request, overriding the original no-years rule.

**My recent work** (h2): 12 photos in frames, in a fixed order (cowboy boot, stars, pumpkin with bow, Luna, boots stamp, butterflies, clock tower, lemon stamp, two stars, four, numbers, forearm script). Clicking a photo opens a larger copy in a viewer (previous and next buttons, arrow keys, Escape or the close button to leave).

**Ready for your tattoo?** (h2, the closing section)
> I work by appointment in North London, on Wednesdays, Fridays and Saturdays. To enquire, send me a DM on Instagram with:

Four bullet points on one line (they wrap on narrow phones): Your idea, The placement, The approximate size, A reference picture, if you have one. No box.

> I'll get back to you with availability and a quote.

> You need to be 18 or over and bring photo ID to your appointment.

Buttons: **Message me on Instagram** and **Follow me on Instagram**. Under them, three round icon buttons: Instagram (Instagram gradient), TikTok (black with its red and cyan edges) and email (rose).

**Footer**
- One row: © 2026 Pink Rodeo Tattoo Club and the "Cookie choices" button.
- **Privacy** (h2, small, runs in with the text):
  > I use Google Analytics to count visits and link clicks, only if you press Accept; until then nothing is sent and no analytics cookies are set. This site has no forms and I collect no names or contact details. Your choice is saved on your device. Google Fonts sees your IP address when the page loads, and my host may keep standard server logs. The Instagram, TikTok and email links go to services with their own privacy policies.
- Note to you (not on the page): this is plain-English drafting, **not legal advice**.

**Consent banner**
> I use Google Analytics to see how this page is used. It only runs if you accept. [Accept] [Decline]

**404 page** (`404.html`, not indexed): "This page isn't here", one short line and a "Back to the home page" button.

## 5. Design (revised 7 October 2026 to match Federica's Instagram)

Her Instagram is very light cool grey and white, black-and-white photography and one bubblegum pink, with pink serif headlines and pink stars. The first version (bottle green, cream, gold) was replaced.

Tokens (CSS custom properties at the top of `styles.css`):
- `--grey: #EDEDEF` pearl grey page background.
- `--white: #FFFFFF` panels, photo mats, footer.
- `--blush: #FBEAF2` the footer, and a possible band elsewhere. `--pink-soft: #F3B8D2` light pink lines (frame inner line, footer borders).
- `--pink: #EE6FA6` her logo pink: main button fill, logo glow, stars.
- `--rose: #C42E73` deeper pink for all pink text (4.5:1 on grey, 5.3:1 on white). Bright pink is never used for text because it is only 2.4:1 on grey.
- `--ink: #222226` charcoal body text (13.6:1 on grey).
- `--silver: #7A7F8A` outer frame line and secondary button outline (3.4:1 on grey), `--silver-light: #A9ADB6` inner frame line.

Details:
- **Photo frame:** the first frame design again: square corners, a thick outer line (logo pink `#EE6FA6`), a thin inner line (light pink `#F3B8D2`) and a small deep rose star in each corner. Drawn as one tiny inline SVG used as a CSS `border-image` (no extra file to download). Photos sit on a white mat inside it. Used for every photo and in the photo viewer. On phones the photo frames are slimmer (11px) so two photos per row stay large enough.
- **Section titles:** deep rose Didot Bold with a small silver rule and a pink star beneath.
- **Buttons (3D):** a lit top edge, a solid lip underneath and a soft shadow, so they look pressable; on press they sink onto the lip. Primary: pink gradient (`#F47FB2` to `#E8639C`) with charcoal text (at least 5:1 contrast) and a deep-pink lip. Secondary: white-to-pale-grey face with a silver outline and silver lip. A tiny movement on hover and press, switched off for visitors who prefer reduced motion.
- **Logo:** Federica's logo file in a round crop with a soft static pink halo (no flicker).
- **Fonts:** headings use **Didot** (Federica's choice). Didot is a licensed font that is built into Macs, iPhones and iPads, so it shows there with no download. Everyone else gets **Bodoni Moda 400 and 700**, a free lookalike from Google Fonts (downloaded only when Didot is missing). Body text is Jost 400 and 500. One Google Fonts request with `display=swap`, `preconnect`, loaded without blocking the first paint. Showing the real Didot on every device would need a purchased web font licence.
- **Footer:** full-width strip in light pink (`--blush`, `#FBEAF2`). Social links and the copyright on one row, then the privacy notice across the whole page width in small type. On a laptop or desktop screen that is about two lines; on a phone it necessarily wraps more.
- **About:** at the top under the H1, in a light pink box (`--blush`, thin `--pink-soft` border, rounded corners). Federica's portrait is a tall oval (4:5) sitting centred on the top edge of the box, in a logo-pink ring with a thin light pink outer ring. The oval shows her from the head to the chest, which a circle could not do with a tall photo. It is not a link and never opens in the photo viewer. It is a 480x600 crop of her portrait with all hidden data removed (`assets/about/federica-oval-480.jpg`); the original stays in `originals/logo/`.
- Mobile first at 375px, buttons at least 48px tall, visible 3px rose focus rings, `prefers-reduced-motion` respected.

## 6. SEO

- `<html lang="en-GB">`, unique title and description (section 4), `<link rel="canonical" href="https://pinkrodeotattooclub.co.uk/">`.
- Open Graph (`og:type website`, title, description, url, site name, locale `en_GB`, image) and Twitter tags (`summary_large_image`). The 1200x630 share image is `assets/social-preview.jpg`: the logo on pearl grey with the h1 line.
- JSON-LD `@graph` with **Organization** (Pink Rodeo Tattoo Club, url, email, sameAs Instagram and TikTok) and **Person** (Federica Aiello, jobTitle "Tattoo artist", worksFor the Organization, sameAs Instagram and TikTok). No address, no LocalBusiness type. Organization `logo` added when a logo exists.
- Search phrases worked in naturally: fine line tattoo artist North London (title, description, h1), female tattoo artist (first sentence of About), delicate tattoos and tiny tattoo (About), fine line tattoo London (closing heading and description). See "How the search words work" in README.md.
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
| `click_dm` | "Message me on Instagram" button (closing section) | `booking` |
| `click_instagram_follow` | "Follow me on Instagram" button and the Instagram icon under the closing buttons | `booking`, `icons` |
| `click_email` | email icon under the closing buttons | `icons` |
| `click_tiktok` | TikTok icon under the closing buttons | `icons` |

- Events fire only when consent is granted. All external links open in a new tab with `rel="noopener noreferrer"`, so the visitor keeps the page open.

## 8. Files

```
index.html          the page (inline critical bits: consent default, JSON-LD)
404.html            branded page for addresses that do not exist (not indexed)
styles.css          design tokens, layout, frames, buttons, banner
script.js           GA ID block, consent logic, event tracking
robots.txt
sitemap.xml
assets/
  logo/             Federica's logo, cropped square and resized (480px)
  work/             12 photos, each in 640px, 960px and 1400px widths (the 1400px copy opens in the viewer)
  favicon-48/96/192.png, apple-touch-icon.png   the logo as a round icon (what Google shows beside the result)
favicon.ico         the same icon, at the site root where browsers and Google look first
README.md           plain-English guide
SPEC.md             this document
.gitignore          .DS_Store, editor files, node_modules, originals/
originals/          full-size photos and logo (not committed, not published)
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

The FAQ answers (`assets/faq.txt`).
