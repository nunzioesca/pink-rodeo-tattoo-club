# Pink Rodeo Tattoo Club website

> **All rights reserved.** The photos, logo, text and design belong to Pink Rodeo Tattoo Club and Federica Aiello and may not be reused without permission (see `LICENSE`).

A one-page website for Pink Rodeo Tattoo Club, the fine line tattoo brand of Federica Aiello in North London. The page exists to get people to message Federica on Instagram and follow her.

The site is plain files: one page, one stylesheet, one small script. There is nothing to install and no host is chosen yet, so it will work on any ordinary web host.

## What is in this folder

| File or folder | What it is |
|---|---|
| `index.html` | The page itself: all the words, links and search engine information. |
| `styles.css` | Colours, fonts, spacing, the photo frames and the 3D buttons. |
| `script.js` | The cookie choice banner and the click counting for Google Analytics. **The GA4 ID goes at the top of this file.** |
| `robots.txt` | Tells search engines they may visit the site and where the sitemap is. |
| `sitemap.xml` | The list of pages for Google (there is only one). |
| `assets/` | `favicon.svg` (the small tab icon), the `logo` folder and the `work` folder with the web-sized photos. |
| `originals/` | Your full-size photos and logo. **Not published and not saved to GitHub.** See the note on photos below. |
| `SPEC.md` | The plan we agreed: structure, wording and tracking. |

## What is still missing

The page is complete and works, but these things need to arrive before it is finished:

1. ~~The GA4 measurement ID.~~ Done: `G-WEJ9S352CD` is in `script.js`. Analytics starts counting once the site is live and visitors press Accept.
2. ~~Federica's logo.~~ Done: it is in the hero.
3. ~~Photos of her work.~~ Done: 12 photos are in "My recent fine line tattoos". Click one on the page to see it larger.
4. ~~Federica's photo for the About section.~~ Done: a tall oval sits on the top edge of the light pink About box (and is not clickable).
5. **FAQ answers** in `assets/faq.txt`.

When you have any of these, put the files in the right folder and ask Claude to add them. It will write the alt text and wire them in. Tell Claude what each photo shows, in plain words.

## Preview the site on your computer

**The quick way:** in Finder, open the `pink-rodeo-tattoo-club` folder on your Desktop and double-click `index.html`. It opens in your browser. Google Analytics will not run this way, which is fine for checking how it looks.

**The accurate way** (behaves like a real website, and is what you want before running Lighthouse):

1. Press **Cmd + Space**, type **Terminal** and press **Return**.
2. Type this and press **Return**:
   ```
   cd ~/Desktop/pink-rodeo-tattoo-club
   ```
3. Type this and press **Return**:
   ```
   python3 -m http.server 8080
   ```
4. Open your browser and go to **http://localhost:8080**
5. When you have finished, go back to Terminal and press **Control + C** to stop it.

To see it as it looks on a phone: in Chrome, right-click the page, choose **Inspect**, then click the small phone and tablet icon at the top of the panel that opens.

## How the search words work (SEO in plain English)

Google reads the words on the page to decide which searches it should show the site for. It looks hardest at a few places, so those are where the main phrases sit. The rule is to write for people first: Google understands related wording, so the page does not need to repeat the same phrase.

| What people might search | Where it appears on the page |
|---|---|
| fine line tattoo artist North London | The page title, the main heading (H1) and the meta description (the grey text under the title on Google) |
| female tattoo artist London | The first sentence of the About section: "I'm a female tattoo artist in North London" |
| delicate tattoos / tiny tattoo | The About section ("delicate details", "a tiny tattoo that holds a memory") |
| fine line tattoo London | The closing heading, "Ready for your fine line tattoo?", and the meta description |
| Federica Aiello | The About heading, the description and the hidden data Google reads about the page |

Other things that help, all already done: a link to the one official address (the `.co.uk`), a description of every photo, a fast page, a phone-friendly layout, a sitemap, and hidden data saying the site belongs to Pink Rodeo Tattoo Club and to Federica, with her Instagram and TikTok. There is deliberately no address or phone number, so the site is not set up as a local shop listing.

Two honest limits: results take weeks to appear after the site goes live, and Search Console (set up below) is where you will see which searches actually bring people.

## A note on photos and privacy

Photos taken on a phone usually carry hidden data: the exact place and time they were taken. Five of Federica's photos had GPS coordinates inside them, and this site is not meant to show a location. So the website only uses copies that have been resized and stripped of all hidden data. Your originals sit in the `originals` folder, which is deliberately left out of GitHub and of the website.

**Never put original phone photos straight into `assets/work`.** Drop new photos in the `originals/work` folder and ask Claude to add them. It will resize them, remove the hidden data and write the descriptions.

## Set up GA4 (Google Analytics)

GA4 tells you how many people visit and, more importantly, how many tap "Message me on Instagram".

1. Go to **analytics.google.com** and sign in with a Google account.
2. If it is a new account, click **Start measuring** and follow the prompts. Otherwise click the cog (**Admin**) at the bottom left.
3. Create a **property**. Call it "Pink Rodeo Tattoo Club". Choose the United Kingdom, pounds and your time zone.
4. When asked to choose a platform, pick **Web**. For the website address, type `https://pinkrodeotattooclub.co.uk` and name the stream "Pink Rodeo website". You can leave "Enhanced measurement" on.
5. Click **Create stream**. At the top right you will see a **Measurement ID** that looks like `G-AB12CD34EF`. Click the copy icon.
6. Open `script.js` in a plain text editor (TextEdit works: choose **Format, Make Plain Text** first). Near the top, between the two long lines of equals signs, you will find:
   ```
   var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
   Replace `G-XXXXXXXXXX` with your ID. Keep the quote marks. Save the file.
7. The ID is never shown on the page, only in this file.

**How consent works:** when someone first visits, a small banner asks them to accept or decline analytics. Google's analytics code is not even downloaded until they press Accept. If they decline, nothing is sent to Google Analytics. The visitor's choice is remembered on their own device, and the "Cookie choices" link in the footer lets them change it.

Because of this, GA4 only counts visitors who press Accept. Your numbers will be lower than the true number of visitors. That is normal and is the price of respecting the choice.

**Check it works:** after the site is live, open it in your browser, press Accept, and tap "Message me on Instagram". In GA4 go to **Reports, Realtime**. You should see yourself, and within a few seconds an event called `click_dm`.

### Mark the DM click as a key event

A key event is Google's name for "this is a goal". Messaging Federica is the goal of this page.

1. In GA4, click **Admin** (the cog, bottom left).
2. Under your property, click **Data display**, then **Key events**.
3. Click **New key event**, type exactly `click_dm` and save.

(If you do not see "New key event", go to **Data display, Events**, wait until `click_dm` appears in the list after your first test click, and switch on the **Mark as key event** star next to it. Google sometimes moves these menus. If so, search the Admin page for "key events".)

You can do the same for `click_instagram_follow` if you want follows counted as a goal too.

### The four events the page records

| Event | When it fires |
|---|---|
| `click_dm` | Someone taps "Message me on Instagram". |
| `click_instagram_follow` | Someone taps "Follow me on Instagram", or the Instagram icon under the closing buttons. |
| `click_email` | Someone taps the email icon under the closing buttons. |
| `click_tiktok` | Someone taps the TikTok icon under the closing buttons. |

Each event also records where on the page it happened (`booking` for the two buttons, or `icons` for the round icons under them) in a field called `link_location`. To see it in reports: **Admin, Custom definitions, Create custom dimension**, choose scope **Event**, name it "Link location" and type `link_location` as the event parameter.

## Set up Search Console

Search Console shows what people typed into Google to find the site. Verify it with a DNS record, which covers every version of the address in one go.

1. Go to **search.google.com/search-console** and sign in.
2. Click **Add property**. Choose the **Domain** box (the left one) and type `pinkrodeotattooclub.co.uk`. Click **Continue**.
3. Google shows a long line of text starting with `google-site-verification=`. Click **Copy**.
4. In another tab, sign in to the company where you bought the domain (the "registrar") and find its **DNS settings**. It may be called "DNS records", "Advanced DNS" or "Manage DNS".
5. Add a new record with these values:
   - **Type:** TXT
   - **Host** (or Name): `@` (some registrars want the domain name, or leave it blank)
   - **Value:** paste the text you copied
   - **TTL:** leave the default
6. Save it. Go back to Search Console and click **Verify**. It can take a few minutes, sometimes a few hours. If it fails, wait and press Verify again.
7. Once verified, click **Sitemaps** in the left menu, type `sitemap.xml` and click **Submit**.

Leave the TXT record in place after verifying, or Google will unverify the site later.

Data takes a few days to appear. Search Console and GA4 can also be linked (GA4 Admin, **Product links, Search Console links**), which puts the search data inside your GA4 reports.

## Check quality: Lighthouse and the HTML validator

These two checks are free and take two minutes each.

**Lighthouse** (speed, accessibility, best practice and search checks, built into Chrome):

1. Start the preview as described above and open **http://localhost:8080** in Chrome. A private (Incognito) window gives the cleanest result because extensions are switched off.
2. Right-click the page and choose **Inspect**.
3. In the panel that opens, click the **Lighthouse** tab. If you cannot see it, click the **>>** arrow at the top of the panel.
4. Choose **Mobile**, tick all four categories (Performance, Accessibility, Best practices, SEO) and click **Analyze page load**.
5. The aim is 90 or more in all four. Send the scores, or a screenshot, to Claude if anything is lower.

Run it again once the site is live, as speed on a real host can differ.

**HTML validator:**

1. Go to **validator.w3.org** and click the **Validate by Direct Input** tab.
2. Open `index.html` in a text editor, select all, copy, and paste it into the box.
3. Click **Check**. Send anything it reports to Claude.

## Put the site online with GitHub Pages

The site is hosted by GitHub itself, for free, straight from this project. Every time you push a change in GitHub Desktop, the live site updates by itself within a minute or two. This needs the repository to be **public** (GitHub's free plan does not host private projects).

### 1. Switch on GitHub Pages

1. Go to your repository on github.com and click **Settings** (the tab on the right of the row of tabs).
2. In the left menu click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, choose **main** and the folder **/ (root)**, then click **Save**.
5. Wait a minute and refresh. At the top you will see "Your site is live at https://nunzioesca.github.io/pink-rodeo-tattoo-club/". Open it to check the site looks right.

### 2. Connect your own domain

1. Still in **Settings, Pages**, find **Custom domain**, type `pinkrodeotattooclub.co.uk` and click **Save**. GitHub adds a small file called `CNAME` to the project. In GitHub Desktop click **Fetch origin** and then **Pull origin** so your computer has it too.
2. Sign in to the company where you bought the domain and open its **DNS settings** (the same place you used for the Search Console record). Add these records:

| Type | Host (or Name) | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `nunzioesca.github.io` |

   Some providers also want the four IPv6 addresses as `AAAA` records on `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`. They are optional.
3. If your provider already has other `A` records on `@` (often a "parking page"), delete those so only the four above remain. Keep the TXT record from Search Console.
4. Back in **Settings, Pages**, wait for the green tick next to the domain (it can take from a few minutes up to a day). Then tick **Enforce HTTPS**.
5. Open `https://pinkrodeotattooclub.co.uk`. GitHub also sends `www.pinkrodeotattooclub.co.uk` to the main address automatically.

### 3. The `.com` address

GitHub Pages cannot redirect a second domain by itself. In your domain provider's settings, find **URL forwarding** or **redirect** for `pinkrodeotattooclub.com` and forward it, as a "permanent (301)" redirect, to `https://pinkrodeotattooclub.co.uk`.

### 4. After it is live

- Check that `https://pinkrodeotattooclub.co.uk/robots.txt` and `/sitemap.xml` open.
- Run Lighthouse again on the live address (steps above).
- Do the GA4 test (accept the banner, tap the main button, look in Realtime).
- Finish the Search Console steps and submit the sitemap.
- Paste the live address into a WhatsApp chat to check the link preview picture.

### Updating the site later

Change a file (or ask Claude to), commit in GitHub Desktop and click **Push origin**. GitHub rebuilds the site by itself.

### Suggestions from visitors

Because the project is public, anyone with a GitHub account can open an "issue" to suggest something. Nothing changes on the site unless you accept it. To switch this off: **Settings**, then under **Features** untick **Issues**.

## Privacy notice (not legal advice)

The privacy text at the bottom of the page describes what this site actually does: optional Google Analytics after consent, no forms, fonts loaded from Google Fonts, a choice saved on the visitor's device, and the host's server logs. **It is plain English written to be accurate. It is not legal advice.** If you add anything to the site (a form, a booking tool, a mailing list, adverts, another tracker) or you change host, the notice must change too. Consider having it checked by someone qualified if the site becomes part of a business.

One thing worth knowing: loading fonts from Google means Google sees each visitor's IP address when the page opens, before any cookie choice. The notice says so. If you would rather avoid this, ask Claude to host the two fonts on the site itself instead.

## Colours and fonts, if you ever want to change them

The look follows Federica's Instagram: light grey, white, one pink and silver details. At the very top of `styles.css` there are the colours and the two fonts, each with a label. Headings use Didot, which is built into Apple devices; other devices show Bodoni Moda, a free lookalike. Change them there and the whole page follows.

| Colour | Code | Used for |
|---|---|---|
| Pearl grey | `#EDEDEF` | Page background |
| White | `#FFFFFF` | Panels, photo mats, footer |
| Blush | `#FBEAF2` | The footer |
| Light pink | `#F3B8D2` | Thin light pink lines (frame inner line, footer borders) |
| Logo pink | `#EE6FA6` | Main button, logo glow, frame stars (never for text) |
| Deep rose | `#C42E73` | All pink text (the logo pink is too pale to read as text) |
| Charcoal | `#222226` | Body text |
| Silver | `#7A7F8A` and `#A9ADB6` | Frames, outlines, thin lines |

The frames around the photos are drawn in the stylesheet (no image files): a thick pink outer line, a thin light pink inner line, square corners and a small star in each corner. The buttons get their 3D look from the stylesheet too.
