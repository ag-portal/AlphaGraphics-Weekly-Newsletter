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
   switch that makes it appear on the home page and in the library list:

   ```js
   window.AG_PUBLISHED = ["01","02","03","04","05","06","07","08","09"];
   ```

   **The home page card list is generated from this array.** As of Week 09,
   `index.html` reads `AG_PUBLISHED`, `AG_NEWSLETTERS_RAW`, and `AG_CAMPAIGN`
   and builds the FAQ Friday library itself — issue number, question, topic,
   date, and pill colour all come from the data. You no longer edit
   `index.html` to add a week.

   It takes these from the week's copy block, so make sure they are right:
   - `## <the question>` — the card headline
   - `Publish: Friday, <Month D, YYYY>` — the card date
   - `Slug: /faq-friday/<slug>` — the card link, for Week 06 and later
   - `AG_CAMPAIGN["NN"].topic` and `.pillar` — the topic label and pill colour
     (`pillar` must be one of `signs`, `print`, `marketing`, `technology`)

   The old hardcoded cards are still in `index.html` as a no-JavaScript
   fallback. They are not what visitors see, and they do not need updating each
   week — but they will go stale, so refresh them occasionally if the no-JS view
   matters to you.

   One thing the generator cannot check: that
   `faq-friday/<slug>/index.html` actually exists. Publish a week without
   creating its folder and the card will link to a 404.

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

### Week 09 went live in two attempts — what went wrong

The first push looked fine but Week 09 never appeared on the home page. The
cause was not the data file: `index.html` **hardcoded every issue card** and
never read `AG_PUBLISHED` at all. It is also a 1.5 MB self-contained bundle, so
its real markup sits inside it as an escaped string — and the Week 09 copy was
byte-identical to Week 08's.

Fixed properly this time: the library list is generated from the data, so the
failure cannot recur. Also corrected in the same pass:

- The four Week 09 images were PNGs totalling **9.14 MB**, twelve times the
  payload of any previous week. Converted to JPG at quality 0.86 — **1.11 MB**,
  same dimensions. Weeks 01–08 masters are JPGs at about 0.2 MB; keep it that way.
- Week 09's date was **August 14** in four places and is now **August 21**,
  matching the weekly cadence. Issue 08 keeps August 14.
- A stray duplicate `</button>` in the library markup.

### Editing index.html by hand

Avoid it if you can. If you must: the markup lives in the
`<script type="__bundler/template">` block as a JSON string. Extract it, edit,
then re-serialise with every `</` written as `<\/` — a plain
`JSON.stringify` emits a literal `</script>` that closes the tag early and
corrupts the file silently.

### Uploading

The site is 112 files and GitHub's web uploader caps a single drag at 100. Upload
only what changed, or use the command line — which is also the only way to record
a deletion.

### Week 09 copy note

The pediatric office in this issue is written as a **hypothetical two-way
comparison**, not a client job. All portal imagery is a design concept. Do not
caption or describe any of it as work performed.

### Before you push

1. **Set the real domain.** Every canonical, the sitemap, llms.txt, and the
   structured data still use `dashing-cascaron-3d4d6f.netlify.app`. The sed
   command in §3b replaces it everywhere in one pass.
2. Confirm the GA4 tag on any new page:
   `grep -rl "G-FB86280RK6" --include=*.html . | sort`
3. Delete the stray `READ ME.md` sitting in the repo root — it is publicly served.
