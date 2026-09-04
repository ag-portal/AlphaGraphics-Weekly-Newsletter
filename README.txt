WEEK 10 - GITHUB UPLOAD PACKAGE
Do business cards matter in 2026?
Publish: Friday, September 4, 2026
Slug: /faq-friday/do-business-cards-matter

Everything needed to publish Week 10. Built after Stage 6 of
FAQ_FRIDAY_WORKFLOW.md. Nothing here is generated at upload time - what is in
this folder is what goes live.

CONTENTS
  README.txt ................ this file
  IMAGE-MANIFEST.txt ........ every image, its size before and after, its alt
  00-crosscheck.txt ......... the nine-stage report and the locked text
  01-post-body.html.txt ..... blog body markup for the CMS <> source view
  02-other-metadata.txt ..... schema block, 1961 chars (cap 2000)
  03-cms-fields.txt ......... every CMS field, in entry order
  04-publish-checklist.txt .. 14 steps, in order
  05-newsletter-online.txt .. digital newsletter copy
  06-newsletter-print.txt ... print sheet copy
  07-social-package.txt ..... 7 days of FB + IG copy, hashtags, alt text
  08-sources.txt ............ citations, rejections, pricing provenance
  images/ ................... 4 blog photos + 2 wordmarks, web-optimized
  social/ ................... 5 FAQ Friday squares, 1080 x 1080

IMAGES - THE PART THAT HAS BITTEN US BEFORE
  All six blog and slide images are IN this package. Nothing is referenced
  from outside it.
  Every photo is capped at 1600px on the long edge; the social squares are
  1080 x 1080. Total payload 1.1 MB, largest single file 203 KB.
  The wordmark PNG was 3601px wide and 156 KB - downscaled to 1200px and 53 KB
  with alpha preserved.
  Upload all four blog photos to the CMS media library BEFORE pasting the
  body, then confirm each URL loads in a browser tab. The CMS prepends its own
  domain to relative paths, so every src in 01-post-body.html.txt is a full
  CloudFront URL - do not shorten them.

ORDER OF OPERATIONS
  Follow 04-publish-checklist.txt top to bottom. Images first, body second,
  SEO tab third. The Title field builds the slug and is permanent once
  published.

OPEN ITEM
  The blog title is "Do business cards still matter in 2026?" while the
  newsletter question is "Do business cards matter in 2026?" The title sets
  the permanent URL. Settle it before step 3.
