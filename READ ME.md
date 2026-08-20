# Week 09 — 6 files to upload

Keep the folder structure. `newsletters/Week09.html` goes in `newsletters/`, the
`faq-friday/` file in its slug folder; the other four sit at the repo root.

| file | change |
|---|---|
| `index.html` | **the fix** — library list now generated from the data; Issue 09 card; stray `</button>` removed |
| `newsletter-data.js` | Week 09 `Publish:` corrected to August 21, 2026 |
| `sitemap.xml` | Week 09 `lastmod` → 2026-08-21 |
| `newsletters/Week09.html` | six date references → August 21 |
| `faq-friday/can-your-space-change-how-people-feel/index.html` | six date references → August 21 |
| `GITHUB_WORKFLOW.md` | documents the new weekly process |

Commit message: `Week 09 — data-driven library, date corrected to Aug 21`

Netlify redeploys in about 30 seconds. Hard-refresh (Ctrl+Shift+R) — the old
home page will otherwise persist in your browser cache.

## Why Week 09 was invisible

`newsletter-data.js` was never the problem. The home page **never read it**. Every
issue card was hardcoded in `index.html`, which is a 1.5 MB self-contained bundle
whose Week 09 copy was byte-identical to Week 08's. Flipping `AG_PUBLISHED` could
not have worked.

## The permanent fix

`index.html` now builds the FAQ Friday library from the data at page load:

- `AG_PUBLISHED` decides which issues appear, newest first
- `AG_NEWSLETTERS_RAW["NN"]` supplies the question (`## …`), the date
  (`Publish: …`), and the link (`Slug: …`)
- `AG_CAMPAIGN["NN"]` supplies the topic label and the pill colour (`pillar`)

**From Week 10 on, adding a week to `AG_PUBLISHED` is genuinely all it takes.** No
`index.html` edit.

Two details this surfaced, both now correct because they come from the data
rather than from me:

- Week 09's pill is **Marketing**, not Signs — `pillar: "marketing"` in
  `AG_CAMPAIGN`. My earlier hand-written card had it wrong.
- Issue 06's card now links to its slug rather than `newsletters/Week06.html`.
  Same destination, since `netlify.toml` already 301s one to the other, but the
  canonical URL is now the one in the link.

The old hardcoded cards remain in the file as a no-JavaScript fallback. They are
not what visitors see. They will drift out of date and that is fine — the live
list is generated.

## What it cannot check

That `faq-friday/<slug>/index.html` exists. Publish a week without creating its
folder and the card links to a 404. Creating the folder is still a manual step
each week, per `GITHUB_WORKFLOW.md` §3b.

## Two housekeeping items

- **Delete `READ ME.md` from the repo root.** My earlier fix folder's readme got
  uploaded and is now publicly served on the live site.
- **The placeholder domain is still everywhere** — canonicals, sitemap,
  `llms.txt`, and all structured data use
  `dashing-cascaron-3d4d6f.netlify.app`. The `sed` one-liner in
  `GITHUB_WORKFLOW.md` §3b replaces it in one pass. Worth doing before you
  submit anything to Search Console, because every canonical currently points at
  a domain you do not intend to rank.
