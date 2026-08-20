# Week 09 — two files still to upload

Your push worked. The repo is at `059225a5` and 108 of the 110 files match your
local folder byte-for-byte, including all four converted Week 09 JPGs, both new
HTML pages, `netlify.toml`, `llms.txt`, and `answers/index.html`.

Two files did not make it. Upload just these two — not the whole folder.

| file | repo has | should be |
|---|---|---|
| `newsletter-data.js` | 69,258 bytes | 97,284 bytes |
| `sitemap.xml` | 1,887 bytes | 2,089 bytes |

## Why these two matter more than the rest

The repo's `newsletter-data.js` is the version from before the Week 09 work. It

- ends `AG_PUBLISHED` at `"08"`, so Week 09 does not appear on the home page or
  in the library dropdown, and
- still points at `assets/masters/w09.png` and the three `w9-*.png` spotlights,
  which no longer exist in the repo — only the `.jpg` versions were uploaded.

So Week 09 is currently invisible, and would show four broken images if it were
switched on. `sitemap.xml` is missing its Week 09 entry.

## Upload

On github.com, in `ag-portal/AlphaGraphics-Weekly-Newsletter`:

1. Click `newsletter-data.js` in the file list.
2. Pencil icon (Edit this file) — or the **⋯** menu → Upload to replace.
3. Select all, paste this folder's `newsletter-data.js`, commit.
4. Repeat for `sitemap.xml`.

Or drag both files onto the repo root from the **Add file → Upload files**
screen; matching names replace in place.

Commit message: `Week 09 — publish switch and sitemap entry`

## On the "too many files" limit

GitHub's web uploader caps a single drag at 100 files, and this site is 112. You
will hit it again on any full-folder upload. Two ways around it:

- **Upload only what changed.** Almost every week that is under ten files — one
  newsletter HTML, one slug folder, four images, five social posts, and the four
  files that get edited. That is what this folder does.
- **Use the command line instead**, which has no file-count limit. The sequence
  in `GITHUB_WORKFLOW.md` §1 is the one-time cost, and `git add -A` afterwards
  handles any number of files, including deletions — which the web uploader
  cannot do at all. The four Week 09 PNGs are still in the repo history but were
  correctly absent from this push, so nothing is stale there.

## After uploading

Netlify redeploys in about 30 seconds. Then check:

- `/` — the Week 09 card appears in the library
- `/faq-friday/can-your-space-change-how-people-feel/` — all four images load
- `/sitemap.xml` — the Week 09 URL is listed

Still outstanding and unrelated: every canonical, the sitemap, `llms.txt`, and
the structured data use the placeholder host
`dashing-cascaron-3d4d6f.netlify.app`. The `sed` command in `GITHUB_WORKFLOW.md`
§3b replaces it in one pass. Do that before submitting to Search Console.
