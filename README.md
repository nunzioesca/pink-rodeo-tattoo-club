# Pink Rodeo Tattoo Club website

A one-page website for Pink Rodeo Tattoo Club, the fine line tattoo brand of Federica Aiello in North London. The page exists to get people to message Federica on Instagram and follow her.

The site is plain files: one page, one stylesheet, one small script. There is nothing to install and no host is chosen yet, so it will work on any ordinary web host.

## What is in this folder

| File or folder | What it is |
|---|---|
| `index.html` | The page itself: all the words, links and search engine information. |
| `styles.css` | Colours, fonts, spacing and the gold frames. |
| `script.js` | The cookie choice banner and the click counting for Google Analytics. **The GA4 ID goes at the top of this file.** |
| `robots.txt` | Tells search engines they may visit the site and where the sitemap is. |
| `sitemap.xml` | The list of pages for Google (there is only one). |
| `assets/` | `favicon.svg` (the small tab icon) plus two empty folders, `logo` and `work`, waiting for Federica's logo and photos. |
| `SPEC.md` | The plan we agreed: structure, wording and tracking. |

## What is still missing

The page is complete and works, but these things need to arrive before it is finished:

1. ~~The GA4 measurement ID.~~ Done: `G-WEJ9S352CD` is in `script.js`. Analytics starts counting once the site is live and visitors press Accept.
2. **Federica's logo** in `assets/logo`. For now the name is set in pink text.
3. **Photos of her work** in `assets/work`. Until they arrive there is no "Recent work" section.
4. **Her own words for "Why I tattoo"**, saved as `assets/why-i-tattoo.txt`. Until then that section (and the cream band) is not on the page.
5. **A social preview photo**, 1200 by 630 pixels, so links shared on social media show a picture.
6. **Confirmation** of whether the copy may say "female tattoo artist" and use she/her. For now the copy uses her name only.

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

## Set up GA4 (Google Analytics)

GA4 tells you how many people visit and, more importantly, how many tap "Message Federica".

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

**Check it works:** after the site is live, open it in your browser, press Accept, and tap "Message Federica". In GA4 go to **Reports, Realtime**. You should see yourself, and within a few seconds an event called `click_dm`.

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
| `click_dm` | Someone taps "Message Federica". |
| `click_instagram_follow` | Someone taps "Follow on Instagram", or the Instagram link in the footer. |
| `click_email` | Someone taps the email link in the footer. |
| `click_tiktok` | Someone taps the TikTok link in the footer. |

Each event also records where on the page it happened (`hero`, `booking` or `footer`) in a field called `link_location`. To see it in reports: **Admin, Custom definitions, Create custom dimension**, choose scope **Event**, name it "Link location" and type `link_location` as the event parameter.

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

## Put the site online (deploy)

You have not picked a host yet, and nothing here is tied to one. The site is a folder of ordinary files, so any "static" host will do. When you choose one:

- Upload or connect the whole folder so that `index.html` is the page at the very top of `pinkrodeotattooclub.co.uk`.
- Turn on HTTPS (every modern host does this for free).
- Make the `.com` address redirect to `https://pinkrodeotattooclub.co.uk` using the host's or registrar's redirect setting. The page already tells Google that the `.co.uk` address is the main one.
- Check that `https://pinkrodeotattooclub.co.uk/robots.txt` and `/sitemap.xml` open in your browser.
- Test the GA4 steps above on the live site.

Tell Claude which host you chose and it will give click-by-click steps.

## Privacy notice (not legal advice)

The privacy text at the bottom of the page describes what this site actually does: optional Google Analytics after consent, no forms, fonts loaded from Google Fonts, a choice saved on the visitor's device, and the host's server logs. **It is plain English written to be accurate. It is not legal advice.** If you add anything to the site (a form, a booking tool, a mailing list, adverts, another tracker) or you change host, the notice must change too. Consider having it checked by someone qualified if the site becomes part of a business.

One thing worth knowing: loading fonts from Google means Google sees each visitor's IP address when the page opens, before any cookie choice. The notice says so. If you would rather avoid this, ask Claude to host the two fonts on the site itself instead.

## Colours and fonts, if you ever want to change them

At the very top of `styles.css` there are four colours and two fonts, each with a label. Change them there and the whole page follows. The brand colours are bottle green `#0E2B22`, cream `#F3EBDD`, gold `#C9A24D` and neon pink `#FF6FB5`.
