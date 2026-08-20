# AG QR Portal — GitHub + Netlify weekly workflow

This folder is the **whole website**. Whatever is in it is what goes live.
Netlify watches your GitHub repo and redeploys automatically on every push.

---

## 0. One-time setup (do this once)

1. On github.com: **New repository** → name it `ag-qr-portal` → Private → **Create**.
   Do **not** add a README or .gitignore (this folder already has files).
2. On your computer, unzip this folder somewhere permanent, e.g.
   `~/Documents/ag-qr-portal`. This unzipped folder is now your working copy.
3. In Terminal:

   ```
   cd ~/Documents/ag-qr-portal
   git init
   git add .
   git commit -m "Portal through Week 09"
   git branch -M main
   git remote add origin https://github.com/YOURNAME/ag-qr-portal.git
   git push -u origin main
   ```

4. Netlify → your site → **Site configuration → Build & deploy → Link repository**
   → GitHub → pick `ag-qr-portal` → branch `main` → publish directory `.`
   (the included `netlify.toml` already sets this) → Save.

From now on: **push to GitHub = site updates.** No more drag-and-drop.

---

## 1. Every week (Week 09 and on)

Each week you add ONE newsletter and flip ONE switch.

1. `cd ~/Documents/ag-qr-portal` then `git pull` (gets any changes made elsewhere).
2. Copy the new week's files in:
   - `newsletters/WeekNN.html` (the page shell)
   - the new week's copy block in `newsletter-data.js`
   - new photos into `assets/masters/` and `assets/spotlight/`
3. In `newsletter-data.js`, add the week to the published list — this is the
   switch that makes it appear on the home page and in the library dropdown:

   ```js
   window.AG_PUBLISHED = ["01","02","03","04","05","06","07","08","09"];
   ```

4. Confirm the new page has the GA4 tag (see §3).
5. Commit and push:

   ```
   git add .
   git commit -m "Week 09 — Environmental graphics"
   git push
   ```

6. Netlify builds in ~30 seconds. Check the live URL, then check
   **GA4 → Reports → Realtime** while you click the new page.

---

## 2. Never change these (published links must keep working)

Live URLs are already printed on flyers, in emails, and in social posts.
Keep them permanent:

- **File names** — `newsletters/Week01.html` … `Week06.html`. Never rename,
  move, or delete a published newsletter file.
- **Folder structure** — `newsletters/`, `assets/`, root `index.html`.
- **The anchor** `index.html#faq-friday` (the library section).

**Titles and descriptions are safe to change.** They're display text, not
addresses. Week 05 is a good example: the page still lives at
`/newsletters/Week05.html`, but its title and card description now read
*"Can better print make your business look more valuable?"* instead of the
old *"Is print dead in 2026?"* — same link, corrected wording. That's exactly
the change that's fine to make any week.

To retitle a week, update it in both places:
- the `<title>` in `newsletters/WeekNN.html`
- the `## ` heading line in that week's block in `newsletter-data.js`
  (the home-page card text is generated from this)

Leave the `Slug:` line in `newsletter-data.js` alone — it's a recorded
identifier, not a live URL.

---

## 3. GA4 tag — every page, every week

Property **G-FB86280RK6**. This block sits just before `</head>` on every
`.html` page in this folder:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FB86280RK6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-FB86280RK6');
</script>
```

Currently tagged: `index.html`, `DEPLOY_MANUAL.html`, `newsletters/Week01–09.html`,
and the three `faq-friday/<slug>/index.html` pages — 14 pages.

Copy the block into each new week's page. To verify nothing was missed:

```
grep -rl "G-FB86280RK6" --include=*.html . | sort
```

Every `.html` file in the folder should be listed.

---

## 3b. Search + AI answer engines (AEO)

**First, set the domain.** Every canonical URL, the sitemap, and the structured
data use the placeholder `https://dashing-cascaron-3d4d6f.netlify.app`. One command replaces it:

```
cd ~/Documents/ag-qr-portal
grep -rl "YOURDOMAIN.com" . | xargs sed -i '' 's|https://dashing-cascaron-3d4d6f.netlify.app|https://your-real-domain.com|g'
```

(Drop the `''` after `-i` on Linux.) Do this before you submit anything to Google.

**Why the site needed this.** Both the home page and the newsletter pages build
their content with JavaScript. Google will usually render it eventually; ChatGPT,
Perplexity, Claude, and most AI crawlers will not — they read raw HTML. Before
this change those pages looked empty to them. Now every page carries:

- a `<meta name="description">`, canonical URL, and Open Graph tags
- **JSON-LD structured data** — see the full list below
- a `<noscript>` block holding the question, the short answer, the key stats,
  the sources, and the honest catch as plain text. Browsers ignore it; crawlers
  without JavaScript read it. This is the part that makes the answers quotable.

**`/answers/` is the new index page.** One static page with all six questions,
short answers, stats, and sources — no JavaScript required, marked up as a
`FAQPage`. This is the single most citable page on the site and the one to link
from your Google Business Profile, email signature, and social bios.

**`sitemap.xml` and `robots.txt`** are at the root. `robots.txt` explicitly
welcomes GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, and
Applebot-Extended, and points to the sitemap.

### Structured data on the site

The FAQ pattern matches the deployed service-page rollout on alphagraphics.com:
`FAQPage` with `dateModified`, `speakable` targeting `.speakable-lead`, and
`reviewedBy` (Chelsey, Account Manager). The visible short answer carries the
`speakable-lead` class in both the rendered article and the `<noscript>` copy, so
the selector resolves. **Change the reviewer per issue if someone else signs off**
— their rollout credits Mitch (Owner) on the direct mail pages.

Per issue: `Article`/`BlogPosting` (with `wordCount`, `timeRequired`,
`articleSection`, and a `citation` entry for every named source), `WebPage` with
`speakable`, `BreadcrumbList`, `FAQPage`, and **`HowTo`** built from that issue's
"how to spec / how to choose" steps — that last one is what wins step-by-step
answer boxes.

Sitewide: `LocalBusiness` + `PrintShop` with address, geo coordinates, phone,
opening hours, `priceRange`, the 19-locality `areaServed` PostalAddress array
from the us769 franchise territory (matching the deployed service-page schema on
alphagraphics.com — do not add localities outside it; they belong to the other
four San Antonio franchises), `knowsAbout`, `parentOrganization`, and an
eight-service `OfferCatalog`. Home page adds `WebSite` + `Blog`.

`llms.txt` at the root is a plain-text version of the same index — an emerging
convention some AI crawlers read first.

### Descriptive URLs — Week 06 onward

Weeks 01–05 are published and keep their `/newsletters/WeekNN.html` URLs
forever. **From Week 06 every issue has a descriptive canonical slug:**

```
/faq-friday/do-promo-products-actually-work/
```

How it is wired, so you can repeat it:

- The page lives at `faq-friday/<slug>/index.html` — a copy of the WeekNN shell
  with `../` asset paths changed to `../../`, plus one line before `<main>`:
  `<script>window.NL_ROOT="../../";window.NL_LIB="../../newsletters/";</script>`
  (`newsletter-render.js` reads those so images and the library dropdown resolve
  from the deeper folder).
- `newsletters/Week06.html` still exists and `netlify.toml` **301-redirects** it
  to the slug, so the home-page card and anything already shared keep working
  while only one URL is canonical.
- Canonical, `og:url`, `sitemap.xml`, `llms.txt`, and the `/answers/` link all
  point at the slug.

For each new week, use the `Slug:` line already written into that week's copy in
`newsletter-data.js` (e.g. `/faq-friday/do-qr-codes-get-scanned`), create the
folder, and add a redirect block.

### Each week, three small additions

1. Copy the head block (description, canonical, OG, JSON-LD) from Week 06 into
   the new page and update the question, date, description, `citation` sources,
   and `HowTo` steps.
2. Copy the `<noscript>` block too — question, short answer, stats, sources,
   catch.
3. Add the question to `answers/index.html` (one `<article>`, one TOC line, one
   entry in that page's `FAQPage` JSON-LD), add the URL to `sitemap.xml`, and
   add a line to `llms.txt`.

### Once, after the first push

- **Google Search Console** — add the property, submit `sitemap.xml`,
  then use URL Inspection on `/answers/` and confirm the rendered HTML shows
  the questions.
- **Bing Webmaster Tools** — same; this is what feeds Copilot.
- **Google Business Profile** — link `/answers/` and post each new question.
  For a local business this does more for AI answers than anything on-site.
- **Rich Results Test** (search.google.com/test/rich-results) — paste the
  `/answers/` URL and confirm the FAQ schema validates.

### What actually gets you cited

Answer engines quote pages that state a claim plainly and attribute it. That is
already how these newsletters are written — question as a heading, direct answer
in the first sentence, a number, a named source. Keep doing exactly that.

---

## 4. Useful commands

| Need | Command |
|---|---|
| See what you changed | `git status` |
| See the actual edits | `git diff` |
| Undo an uncommitted file | `git restore path/to/file` |
| History | `git log --oneline` |
| Roll the site back | `git revert HEAD` then `git push` |

Netlify also keeps every past deploy — **Deploys → pick one → Publish deploy**
restores it instantly, no git required.

---

## 5. Rule of thumb

One commit per week, named for the week: `Week 10 — Business cards`.
If a commit touches a published newsletter's **file name**, stop and
double-check — that's the only edit that can break a link already in the wild.


---

## 6. State of this folder — Week 09

Pulled forward from `AG QR Portal - Week08 Deploy`. What changed:

- `newsletters/Week09.html` and `faq-friday/can-your-space-change-how-people-feel/`
- `netlify.toml` — 301 added for Week09.html → the slug
- `sitemap.xml`, `llms.txt`, `answers/index.html` — Week 09 entries added
- `newsletter-data.js` — refreshed from `FAQ Friday Newsletters/`, which brings
  **Weeks 10–16 copy along with it**. Only 01–09 are in `AG_PUBLISHED`, so the
  unpublished weeks do not render or appear in the library. They ship in the JS
  payload, though — if that matters, strip blocks 10–16 before pushing.
- `assets/masters/w09.jpg` plus three Week 09 spotlights

### Before you push

1. **Set the real domain.** Every canonical, the sitemap, llms.txt, and the
   structured data still use `dashing-cascaron-3d4d6f.netlify.app`. The sed
   command in §3b replaces it everywhere in one pass.
2. **Blog canonicals.** If the alphagraphics.com blog posts go live first, this
   portal's canonicals should point at them instead — see
   `Blog Rewrite/HANDOFF - Blog Posts.md` for the mapping. Do **not** 301 the
   portal pages: their URLs are on QR codes already printed.
3. Confirm the GA4 tag on both new pages:
   `grep -rl "G-FB86280RK6" --include=*.html . | sort`

### Week 09 copy note

The pediatric office in this issue is written as a **hypothetical two-way
comparison**, not a client job. All portal imagery is a design concept. Do not
caption or describe any of it as work performed.
