# Push — Week 10

17 files. GitHub's web uploader caps at 100 per drag, so this is the
Week 10 delta only: weeks 01–09 are already in the repo and unchanged.

Drop the contents of this folder onto the repo root **preserving folder
structure** (drag the folders, not the loose files). Everything here either
replaces a file of the same path or is new.

## What is in here and why

### Changed at the source
| File | Why |
|------|-----|
| `newsletter-data.js` | `AG_PUBLISHED` now ends at `"10"` — **this is what publishes the issue**. Also holds Week 10's copy and the new `[label](url)` parser support. |
| `newsletter-render.js` | Renders inline links, and no longer prints the per-image design-concept sentence. |

### New pages
| File | Why |
|------|-----|
| `newsletters/Week10.html` | The issue page. Replaces the noindex `Week10-REVIEW.html` — **delete that file in the repo if it is there.** |
| `faq-friday/do-business-cards-matter/index.html` | The canonical pretty URL. |

### Updated indexes and discovery
| File | Why |
|------|-----|
| `index.html` | Portal home; the library list is generated from `AG_PUBLISHED`. |
| `answers/index.html` | Issue 10 article block, print pillar accent. |
| `sitemap.xml` | New entry, `lastmod 2026-09-04`. |
| `llms.txt` | Answer entry carrying the source, the caveat, and the price. |

### Week 10 imagery
| Path | Count |
|------|-------|
| `assets/masters/w10.jpg` | 1 masthead |
| `assets/spotlight/w10-*.jpg` | 3 gallery |
| `FAQ Friday Posts/Week 10 - Collateral - 2026-09-04/` | 5 social squares |

## After the push

1. Delete `newsletters/Week10-REVIEW.html` from the repo if it is still there.
2. Let Netlify build, then check:
   - `/` lists Issue 10 at the top of the library
   - `/faq-friday/do-business-cards-matter/` renders
   - `/answers/` shows the Issue 10 block
   - the five social squares load on the issue page
3. Rich Results Test on the issue URL — expect Article + FAQ, 0 errors.

## If you would rather push the whole folder

Upload in two passes, under the 100-file cap each time:
- Pass 1 — `FAQ Friday Posts/` (55 files)
- Pass 2 — everything else (68 files)

## The lesson from this week

A week can have its page, its slug folder, its sitemap entry, and all its
images in place and still appear nowhere. `AG_PUBLISHED` gates the whole
library. Add the key first, not last.
