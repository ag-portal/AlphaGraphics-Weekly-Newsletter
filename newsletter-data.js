/* =====================================================================
   AlphaGraphics Shavano Park — FAQ Friday Newsletters
   Verbatim copy (Weeks 04–12) + campaign metadata + a small parser.

   Copy is set as written and MUST NOT be paraphrased. Source:
   AG_Newsletters_Wk04-12_DESIGN (issued 9 July 2026).
   ===================================================================== */

window.AG_CONTACT = {
  name: "AlphaGraphics Shavano Park",
  street: "16101 College Oak Drive",
  locale: "San Antonio, TX 78249",
  phone: "(210) 222-0580",
  tel: "2102220580",
  // VERIFIED CORRECT — do not "fix" this. The domain really is the phone
  // number; it is a live, working address, not a paste error from `tel`.
  email: "chelsey@2102220580.com",
  web: "alphagraphics.com/us-texas-san-antonio-us769",
  slogan: "Get Noticed. Get Business.",
  hours: "Same-day responses, Mon–Fri",
};

/* Per-week campaign metadata: pillar accent + the finished FAQ Friday
   social squares that exist in the project (used as brand imagery). */
window.AG_CAMPAIGN = {
  "01": { topic: "Vehicle Graphics",       pillar: "signs",      folder: "Week 01 - Vehicle Graphics - 2026-06-19" },
  "02": { topic: "Storefront Signage",     pillar: "signs",      folder: "Week 02 - Storefront Signage - 2026-06-26" },
  "03": { topic: "Brand Consistency",      pillar: "marketing",  folder: "Week 03 - Brand Consistency - 2026-07-03" },
  "04": { topic: "Trade Shows",            pillar: "signs",      folder: "Week 04 - Trade Shows - 2026-07-10" },
  "05": { topic: "Print Marketing",        pillar: "print",      folder: "Week 05 - Print Marketing - 2026-07-17" },
  "06": { topic: "Promotional Products",   pillar: "marketing",  folder: "Week 06 - Promotional Products - 2026-07-24" },
  "07": { topic: "QR Codes",               pillar: "technology", folder: "Week 07 - Print - Digital - 2026-07-31" },
  "08": { topic: "Large Format",           pillar: "signs",      folder: "Week 08 - Large Format - 2026-08-07" },
  "09": { topic: "Environmental Graphics", pillar: "marketing",  folder: "Week 09 - Environmental Graphics - 2026-08-14" },
  "10": { topic: "Collateral",             pillar: "print",      folder: "Week 10 - Collateral - 2026-08-21" },
  "11": { topic: "Window Graphics",        pillar: "signs",      folder: "Week 11 - Window Graphics - 2026-08-28" },
  "12": { topic: "Local Partner",          pillar: "technology", folder: "Week 12 - Local Partner - 2026-09-04" },
};

/* Which issues are live on the portal, newest last. The library dropdown and
   home-page list show only these. Add the new week's key here when it goes
   live (see DEPLOY_MANUAL §01). */
window.AG_PUBLISHED = ["01", "02", "03", "04", "05", "06", "07"];

/* Four square photo slots per week: one master + three spotlights.
   Captions come from the campaign photo brief (00_START_HERE). These
   render as branded placeholders until the real campaign photos are
   dropped in (set `.src` to swap). */
window.AG_PHOTOS = {
  "01": [ {role:"Master",   cap:"Blanco Bend Plumbing fleet"}, {role:"Spotlight",cap:"Embroidered shirts + caps"}, {role:"Spotlight",cap:"Branded NCR invoice forms"} ],
  "02": [ {role:"Master",   cap:"Cibolo Coffee Co. storefront"}, {role:"Spotlight",cap:"Illuminated channel letters"}, {role:"Spotlight",cap:"Projecting blade sign"}, {role:"Spotlight",cap:"Window graphics"} ],
  "03": [ {role:"Master",   cap:"Mission Verde brand system"}, {role:"Spotlight",cap:"Business cards, painted edge"}, {role:"Spotlight",cap:"Brochure + folder"}, {role:"Spotlight",cap:"Trade-show banner"} ],
  "04": [ {role:"Master",   cap:"Illuminated backwall + hanging ring"}, {role:"Spotlight",cap:"Retractable banner"}, {role:"Spotlight",cap:"Branded promo merch"}, {role:"Spotlight",cap:"Counter + literature stand"} ],
  "05": [ {role:"Master",   cap:"Cellar & Oak menu suite"}, {role:"Spotlight",cap:"Soft-touch + spot UV cards"}, {role:"Spotlight",cap:"Gold foil + painted edge"}, {role:"Spotlight",cap:"Foil + sculpted emboss booklet"} ],
  "06": [ {role:"Master",   cap:"Ascent Collective kit"}, {role:"Spotlight",cap:"Chalk bags + carabiners"}, {role:"Spotlight",cap:"Branded shirts, worn"}, {role:"Spotlight",cap:"Branded pens"} ],
  "07": [ {role:"Master",   cap:"Print piece with QR + offer"}, {role:"Spotlight",cap:"Sublimated fabric banner"}, {role:"Spotlight",cap:"Phone scanning QR"}, {role:"Spotlight",cap:"Museum interactive map"} ],
  "08": [ {role:"Master",   cap:"Grand-format banner (XXL)"}, {role:"Spotlight",cap:"Voltera Motors vehicle wrap"}, {role:"Spotlight",cap:"Environmental graphics"}, {role:"Spotlight",cap:"Illuminated channel letters"} ],
  "09": [ {role:"Master",   cap:"Woodland pediatric suite"}, {role:"Spotlight",cap:"Suite trailhead sign"}, {role:"Spotlight",cap:"Creek floor decals"}, {role:"Spotlight",cap:"Forest exam room"} ],
  "10": [ {role:"Master",   cap:"Business card stack, edges"}, {role:"Spotlight",cap:"Spot UV + painted edge"}, {role:"Spotlight",cap:"Gold foil cards"}, {role:"Spotlight",cap:"Embossed folded card, olive"} ],
  "11": [ {role:"Master",   cap:"Storefront window graphics"}, {role:"Spotlight",cap:"Cut white vinyl"}, {role:"Spotlight",cap:"Frosted inverse logo"}, {role:"Spotlight",cap:"Perforated storefront decal"} ],
  "12": [ {role:"Master",   cap:"Proof in hand, real light"}, {role:"Spotlight",cap:"Paper swatches"}, {role:"Spotlight",cap:"Acrylic seating chart"}, {role:"Spotlight",cap:"Invitation flatlay"} ],
};

/* Real master photography (assets/masters/wNN.png). The digital gallery
   frames each master into four square tiles via object-fit:cover + a
   per-week object-position ("pos") so the important products stay in view
   — no destructive cropping. Click a tile to see the full image.
   Tune `pos` per week for good framing. */
window.AG_GALLERY = {
  "01": { src: "assets/masters/w01.jpg", client: "Blanco Bend Plumbing", work: "Fleet wraps, branded apparel, and NCR forms", masterPos: "50% 42%", spots: [
    { src: "assets/spotlight/w1-apparel.jpg", cap: "Embroidered apparel + branded NCR forms" },
    { src: "assets/spotlight/w1-truck.jpg", cap: "Wrapped van + uniformed tech" }
  ] },
  "02": { src: "assets/masters/w02.jpg", client: "Cibolo Coffee Co.", work: "Storefront channel letters, drive-thru menu board, and interior branding", masterPos: "50% 40%", spots: [
    { src: "assets/spotlight/w2-menu-board.jpg", cap: "Drive-thru menu board" },
    { src: "assets/spotlight/w2-interior.jpg", cap: "Interior branding + counter" },
    { src: "assets/spotlight/w2-channel-letters.jpg", cap: "Channel letters — blueprint to reality" }
  ] },
  "03": { src: "assets/masters/w03.jpg", client: "Mission Verde Landscape Co.", work: "One identity across the proposal, folder, and collateral", masterPos: "50% 45%", spots: [
    { src: "assets/spotlight/w3-cards.jpg", cap: "Business cards, painted edge" },
    { src: "assets/spotlight/w3-collateral.jpg", cap: "Brochure + presentation folder" },
    { src: "assets/spotlight/w3-proposal.jpg", cap: "Proposal & investment summary" }
  ] },
  "04": { src: "assets/masters/w04.jpg", client: "Trade show booth system", work: "Illuminated backwall, retractable banners, and storage counter", masterPos: "50% 38%", spots: [
    { src: "assets/spotlight/w4-backwall.jpg", cap: "Illuminated backwall + hanging ring" },
    { src: "assets/spotlight/w4-banner.jpg", cap: "Retractable banner" },
    { src: "assets/spotlight/w4-merch.jpg", cap: "Branded promo merch" }
  ] },
  "05": { src: "assets/masters/w05.jpg", client: "Cellar & Oak Vineyards", work: "Tasting-menu suite — embossed, spot UV, and gold foil", masterPos: "50% 45%", spots: [
    { src: "assets/spotlight/w5-booklet.jpg", cap: "Embossed + foiled booklet, saddle-stitched" },
    { src: "assets/spotlight/w5-cards.jpg", cap: "Gold-foil business cards, painted edge" },
    { src: "assets/spotlight/w5-card-envelope.jpg", cap: "Foil-stamped card + envelope" }
  ] },
  "06": { src: "assets/masters/w06.jpg", client: "Ascent Collective", work: "Branded chalk bags, apparel, and pens", masterPos: "50% 45%", spots: [
    { src: "assets/spotlight/w6-chalk.jpg", cap: "Branded chalk bags + carabiners" },
    { src: "assets/spotlight/w6-apparel.jpg", cap: "Branded tees, worn on the wall" },
    { src: "assets/spotlight/w6-pens.jpg", cap: "Branded pens, by the boxful" }
  ] },
  "07": { src: "assets/masters/w07.jpg", client: "Meridian Contemporary Art Museum", work: "Print meets digital — map, signage, and mobile", masterPos: "50% 45%", spots: [
    { src: "assets/spotlight/w7-banner.jpg", cap: "Sublimated fabric hanging banner" },
    { src: "assets/spotlight/w7-accessibility.jpg", cap: "QR on print — accessibility for all" },
    { src: "assets/spotlight/w7-map.jpg", cap: "Printed map to live wayfinder" }
  ] },
  "08": { src: "assets/masters/w08.jpg", client: "Voltera Motors", work: "Grand-format banner, vehicle wrap, and environmental graphics", masterPos: "50% 45%", spots: [
    { src: "assets/spotlight/w8-banner.jpg", cap: "Grand-format banner (XXL)" },
    { src: "assets/spotlight/w8-wrap.jpg", cap: "Voltera Motors vehicle wrap" },
    { src: "assets/spotlight/w8-environmental.jpg", cap: "Environmental wall graphics" }
  ] },
  "09": { src: "assets/masters/w09.png", client: "Cedar & Sprout Pediatric Dentistry", work: "Bound book, suite placards, and floor decal", pos: ["2% 50%","36% 50%","64% 50%","98% 50%"] },
  "10": { src: "assets/masters/w10.png", client: "Halcyon Studio Architecture", work: "Business cards — gold foil, blind emboss, soft-touch spot UV", pos: ["2% 50%","36% 50%","64% 50%","98% 50%"] },
  "11": { src: "assets/masters/w11.png", client: "Rye & Honey Artisan Bakery", work: "Frosted, cut-vinyl, and printed window graphics", pos: ["2% 50%","36% 50%","64% 50%","98% 50%"] },
  "12": { src: "assets/masters/w12.png", client: "Wedding & event suite", work: "Acrylic seating chart, table numbers, and menus", pos: ["2% 50%","38% 50%","66% 50%","98% 50%"] },
};

/* Pull-quotes — newspaper-style highlights that lift a key line out of the
   story, digital edition only. Large text with **bold** highlights on the
   figure. One or more per issue; an `after` places it below that section
   (default: just under the short answer). Only crosschecked, sourced lines. */
window.AG_HEROSTAT = {
  "01": [
    { quote: "One wrapped vehicle draws up to **70,000 impressions a day** in a busy metro — at about **35¢ per 1,000 views,** the lowest cost per impression of any medium.", source: "OAAA / ARD outdoor study · 3M vehicle-wrap study" }
  ],
  "02": [
    { quote: "**76% of people** have walked into a business for the first time **simply because of its sign.**", source: "FedEx Office Signage Survey" }
  ],
  "03": [
    { quote: "A consistently presented brand sees an average **revenue lift of 23%** — same logo, same red, same type, everywhere.", source: "Marq (Lucidpress) Brand Consistency Report" }
  ],
  "04": [
    { quote: "**81% of the people** on a trade-show floor have the authority to **say yes to a purchase.**", source: "CEIR, The Spend Decision" },
    { after: "math question", quote: "Meeting a prospect at a show costs about **$96.** Meeting that same prospect out in the field runs **$1,039** — roughly **$943 saved** on every handshake.", source: "CEIR, Cost Effectiveness of Exhibition Participation" }
  ],
  "05": [
    { quote: "Embellished pieces are **2.5x more attractive** to consumers, and enhanced print is rated **46% higher quality** than standard.", source: "Foil & Specialty Effects Association" }
  ],
  "06": [
    { quote: "**85% of people** remember the advertiser on a promotional product they keep.", source: "2026 ASI Global Advertising Impressions Study" }
  ],
  "07": [
    { quote: "About **half of Gen Z and Millennial** consumers use a QR code at least **weekly** — 49% and 51% respectively.", source: "TEAM LEWIS Research, survey of 1,000 U.S. adults, 2024" }
  ],
  "08": [
    { quote: "You pay **once** for a sign you own — no media buy, no renewal, no four-week cycle." }
  ],
  "09": [
    { quote: "**Braced** is how most people walk in, and the room either makes the next twenty minutes easier or it doesn't." }
  ],
  "10": [
    { quote: "For most prospects, a business card is the **one** piece of your work they will ever hold." }
  ],
  "11": [
    { quote: "**100% of your storefront glass** is marketing space you already pay rent for." }
  ],
  "12": [
    { quote: "**One local partner** — concept, print, and install — does what an upload-and-pray website structurally can't." }
  ],
};

/* Raw, cleaned markdown per week. Verbatim body copy. --- separates sections. */
window.AG_NEWSLETTERS_RAW = {};

window.AG_NEWSLETTERS_RAW["01"] = `# FAQ FRIDAY · ISSUE 01
## Does a wrapped vehicle pay for itself?
Publish: Friday, June 26, 2026
Slug: /faq-friday/does-a-vehicle-wrap-pay-for-itself
Read time: ~4 min
---
### The short answer
Your trucks already drive past your customers — a wrap just makes it count.

Out-of-home advertising is priced by cost per thousand views, and a wrapped vehicle sits at the very bottom of that scale. One wrapped vehicle draws up to **70,000 impressions a day** in a busy metro, earned while your crew is already on the road. Routine drive time turned into advertising you've mostly already paid for in gas.

*Source: OAAA / ARD outdoor advertising study*
---
### "Worth it" is a math question
Line a wrap up against every other medium and it wins on price. A vehicle wrap runs about **35 cents per 1,000 views** — the lowest cost per impression of any advertising medium, indoor or out.

And it compounds. A quality wrap keeps selling for **5–7 years**: you pay once and advertise for the life of the vehicle. Wraps also drive up to **15x higher name recognition** than other outdoor formats — people remember the truck they see on the same route every morning.

*Sources: 3M vehicle-wrap study; OAAA, 2024*
---
### Where a wrap beats a billboard
A billboard sits at one intersection and bills you every month it's up. Your vehicle doesn't stay put. It reaches the highway on the way to a job, the neighborhood while your crew is inside, and the grocery-store lot on the way home — a fresh set of streets every day, at no added media cost.

Parked at a job site, it doubles as a yard sign the whole block reads, and it keeps selling from the driveway long after the workday ends. The truck you already own becomes the one ad that follows your customers around town.
---
### What actually earns the glance
Three things decide whether a wrap works. None of them is the size of the truck.

**Legibility over decoration.** At 40 mph a driver gets about a two-second look. Cluttered art at that scale just spends your budget faster — the wrap has to read in one breath, from a lane away.

**One message, not five.** Logo, one offer, one way to reach you. The wraps that pull calls say a single thing clearly; the ones that try to say everything say nothing.

**Coverage that fits the budget.** A full wrap turns the whole vehicle into a billboard. A partial wrap or a set of cut-vinyl decals puts the essentials — name, number, service — on the panels people actually read, for a fraction of the cost.
---
### One honest catch
**It only works if the design earns the glance.**

Here's how we think about it: the vinyl is the easy part. Our goal isn't to sell you a wrap — it's to make your business look great going down the road. A wrap built around a busy, cluttered design is an expensive way to be forgotten at speed.

Bold, legible, on-brand is the whole game. A great wrap reads in one breath: logo, one offer, one way to reach you. Get that wrong and no amount of vinyl saves it.
---
### How to spec a wrap
1. **Start with the message.** One offer, one call to action — settled before any art.
2. **Match coverage to budget.** Full wrap, partial wrap, or a clean set of cut-vinyl decals.
3. **Design for distance.** Bold type, high contrast, legible at a glance.
4. **Check the lead time.** We measure, print, and install locally in Shavano Park, so turnaround stays tight.
5. **Plan for the whole fleet.** We can wrap every vehicle to match and keep your decals maintained and cohesive as trucks come and go over the years.
---
### Let's get your brand on the road
Full wraps, partial wraps, and cut-vinyl decals — designed, printed, and installed in Shavano Park. Whether it's one truck or a whole fleet, we'll help you land on the coverage that fits your routes and your budget.

**[Start a Quote ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["02"] = `# FAQ FRIDAY · ISSUE 02
## Will a new sign actually bring in customers?
Publish: Friday, July 3, 2026
Slug: /faq-friday/will-a-new-sign-bring-in-customers
Read time: ~4 min
---
### The short answer
Yes — your sign is the best-value salesperson you'll ever hire.

**76% of people have entered a business for the first time simply because of its sign.** Your storefront works 24/7, in front of every car and every pedestrian, whether or not you're open. A clear, well-built sign does the introducing before anyone reaches the door.

*Source: FedEx Office Signage Survey*
---
### What a sign is quietly telling people
A sign does more than mark the door. Before anyone walks in, it has already made a judgment call for them — about whether you're open, established, and worth the stop.

The research is blunt about how much rides on it: **68% of consumers judge a business's product and service quality by its signage**, and **60% say poor or missing signs have kept them from going in** at all.

*Source: FedEx Office Signage Survey*
---
### What makes a sign actually work
Three things separate a sign that pulls traffic from one that just hangs there. None of them is size.

**Legible before it's pretty.** If a driver can't read it at 35 mph, the design doesn't matter. Bold letterforms, real contrast, and enough breathing room are what get you seen from the road.

**Visible after dark.** Half your business hours may be at dusk or later. Illuminated channel letters or a lit cabinet keep you on the map when an unlit sign disappears — **50% of people say an unclear sign made a business hard to find.**

**On-brand, not one-off.** The sign is most people's first impression of your brand. It should match your truck, your card, and your window — same logo, same color, same type — so every touchpoint reinforces the last.
---
### One honest catch
**A sign gets them to the door once.**

Here's the part we won't dress up: a sign can't make a weak brand strong. The best ones make a promise the business behind them actually keeps.

Think of it plainly: a sign brings them in, your brand brings them back. If what's inside doesn't match the sign out front, the sign just helps more people find that out faster.
---
### How to spec a storefront sign
1. **Check your codes first.** City and landlord rules set size, height, and lighting — confirm before you design.
2. **Design for the road.** Legible at speed, readable after dark.
3. **Match your brand.** The same logo, color, and type you use everywhere else.
4. **Ask about install.** We'll survey, install, and manage production and permitting — a single contact for all your exterior signage needs.
---
### Let's get you noticed from the street
Channel letters, monument signs, blade signs, and lit cabinets — designed, managed, and installed in Shavano Park. We'll survey your storefront and land on the sign that reads clearly day or night, and fits your codes and your budget.

**[Start a Quote ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["03"] = `# FAQ FRIDAY · ISSUE 03
## Does my brand have to look the same everywhere?
Publish: Friday, July 10, 2026
Slug: /faq-friday/does-my-brand-need-to-look-the-same-everywhere
Read time: ~4 min
---
### The short answer
Yes — and that consistency is worth up to 23% in revenue.

A consistently presented brand sees an average revenue lift of **23%**. Same logo, same red, same type — from your truck to your business card to your trade-show booth. The repetition is what makes people *remember* you, and memory is what turns a passer-by into a customer.

*Source: Marq (Lucidpress) Brand Consistency Report*
---
### Why sameness is the point
Consistency feels boring from the inside — you see your logo every day. But your customer sees it in fragments, weeks apart, and only recognizes you when the fragments match.

The compounding is real: consistent businesses see **3.5x more brand visibility**, it takes **5–7 impressions** before a buyer remembers you, and **81% of consumers say they must trust a brand before they'll buy.**

*Sources: Marq (Lucidpress); Edelman Trust Barometer*
---
### Where consistency actually lives
Consistency isn't one big rebrand. It's three small disciplines applied everywhere.

**One set of colors.** The same red, the same neutrals, every time — matched to real ink and vinyl values, not "close enough." A drifting color reads as a different company.

**One logo, used correctly.** Same file, same clear space, same proportions on a card as on a truck. Stretched, recolored, or low-res versions quietly erode the trust the rest of your work is building.

**One voice and type system.** The same fonts and the same tone across sign, mailer, and window. When the type matches, the pieces feel like chapters of one story instead of unrelated ads.
---
### One honest catch
**It only works when every piece matches.**

We'd happily print you a beautiful one-off — but we'd rather steer you right: one off-brand flyer or a faded sign quietly undoes the work everything else is doing.

Consistency isn't vanity — it's how trust compounds. Your brand is the 50th touchpoint matching the first. Miss the match and each piece starts over from zero instead of building on the last.
---
### How to keep a brand consistent
1. **Pin down the specs.** Exact color values, logo files, and fonts in one place.
2. **Audit what's already out there** — sign, truck, card, booth, mailer. Flag the mismatches.
3. **Fix the outliers first** — the faded sign or off-brand flyer doing the most damage.
4. **Produce from one source.** We keep your brand files on hand so every job matches the last.
---
### Let's make your brand unmistakable
Cards, signage, vehicle graphics, mailers, and booths — designed and managed from one place in Shavano Park, so every piece matches the last. We'll help you set the specs once and hold the line across everything you print.

**[Start a Quote ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["04"] = `# FAQ FRIDAY · ISSUE 04
## Are trade shows worth the investment?
Publish: Friday, July 17, 2026
Slug: /faq-friday/are-trade-show-displays-worth-it
Read time: ~4 min
---
### The short answer
The room is full of people who can say yes.

Most marketing spends money to *find* decision-makers. A trade show is one of the few channels where somebody else has already assembled them, checked their badges, and pointed them down an aisle toward you.

Roughly **four out of five attendees on that floor have buying authority** — 81%, per the Center for Exhibition Industry Research. That's a hit rate a cold email list never comes close to.
---
### "Worth it" is a math question
CEIR's research on exhibition cost-effectiveness put a price on the handshake. Meeting a prospect at a show costs about **$96**. Finding and meeting that same prospect in the field — cold calls, sales visits, outbound — runs about **$1,039**.

That works out to roughly $943 saved on every prospect. You're not paying to close anyone at a show; you're paying to *meet* them, and meeting them any other way costs about ten times more.

The advantage carries into the sales cycle. It takes an average of **3.5 sales calls to close a lead from a show, against 4.5 from anywhere else**, so the handshake shaves nearly a full call off the process.

*Sources: CEIR, Cost Effectiveness of Exhibition Participation; CEIR, The Spend Decision*
---
### What actually pulls people into a booth
Three pieces do most of the work, and none of them is exotic.

**The retractable banner — the foundation.** It rolls into its own case and sets up in under a minute. It's the most affordable to buy and the easiest to travel with, and it works just as well in a booth, a lobby, a registration table, or a sponsor wall. If you're doing one or two shows a year, this is very often the smart place to start and to stop. Nobody needs to talk you into more.

**Branded merch — the piece that leaves with them.** A bottle, a tote, a pen. What matters isn't the giveaway but whether the recipient chooses to keep it. Useful items become months of impressions on somebody's desk, while forgettable ones cost the same and do nothing. Pick for utility, not unit price.

**The illuminated backwall — the showpiece.** A backlit tension-fabric wall with a glowing hanging ring reads from across the hall, not just at the table. This is where the money goes, and it earns its keep only if you're exhibiting enough to amortize it. Larger displays can be rented or purchased, so let the calendar drive the decision. Shows all year? Build the curated setup piece by piece. One show on the books? Rent, or start smaller.

None of this requires the biggest booth on the floor. It requires the right pieces for the number of shows you're actually doing.
---
### One honest catch
**The booth gets you noticed. The follow-up gets you business.**

Here's the part most display companies won't volunteer: a great booth only starts the conversation. What you do in the 48 hours after the show is what decides whether it pays off.

So plan the follow-up before you order the backwall. Decide who's sending what, to whom, and on which day, before anyone argues fabric versus rigid panel. A modest booth with a disciplined follow-up beats a beautiful booth with none.
---
### If you're exhibiting this year
1. **Count your shows.** One or two? Rent, or build a banner-and-table setup. Four or more? A curated system pays for itself and looks deliberate rather than assembled.
2. **Write the follow-up plan first.** Who contacts leads, how fast, and with what offer. Put a name on it.
3. **Then design the booth.** Backwall, retractables, counter, literature, takeaway.
4. **Work back from the real deadline.** Find out when materials have to ship or be on-site, then build in room to design, proof, and handle incidentals. Rushing any of those is where quality and budget both slip.
---
### Let's plan it
Backwalls, retractables, counters, and literature, designed and managed in Shavano Park on your show timeline. Whether it's a full curated booth or a single banner that makes a small table look intentional, we'll help you land on the foundation that fits the shows you're actually attending.

**[Start a Quote ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["05"] = `# FAQ FRIDAY · ISSUE 05
## Can better print make your business look more valuable?
Publish: Friday, July 24, 2026
Slug: /faq-friday/print-finishes-that-elevate-your-brand
Read time: ~4 min
---
### The short answer
The finish tells people what you're worth before they read a word.

People price you by how a piece feels in the hand. A thin, flat card feels ordinary; a weighty one with foil and emboss feels like a business that sweats the details - and can charge for them. The piece makes that case before you say a word.
---
### Perceived value is the best-value lever you have
Hand someone an embossed, gold-foiled tasting menu and you've told them the evening is worth the price before the first pour. Hand them a photocopy and you've said something else. That's perceived value - and it's the highest-leverage way to raise what a customer thinks you're worth, before you've proved a thing.

The research backs the instinct: embellished pieces are **2.5x more attractive** to consumers and enhanced print is judged **46% higher quality** than the same design run flat. In a Clemson eye-tracking study, a foil-stamped package from an *unknown* brand pulled more attention - and more purchase intent - than national brands with decades of recognition.

*Sources: FSEA; Clemson Sonoco Institute / FSEA*
---
### The four finishes that make a piece feel luxurious
You can't judge these on a screen - each is a texture, and texture doesn't photograph. You have to hold it.

**Soft-touch laminate.** A velvet, almost suede feel the instant it's picked up - more luxurious than it cost, before a word is read.

**Spot UV.** Glossy varnish over matte, only where you want it. It hides straight-on and appears when the light catches it - rewarding a second look.

**Foil stamping.** Mirror-bright metallic that reads as premium across a table or from a wallet - why it survives on a card that lives in a pocket for years.

**Sculpted emboss.** The design pressed into the stock so a finger finds the relief. A screen can't do this at any resolution - which is exactly why it reads as craft.

Pair foil with emboss on a menu cover and the two compound. It's the standard move on wine lists and event stationery for that reason.
---
### Why the hand believes it
There's real neuroscience under it. In a Canada Post / TrueImpact study using EEG and eye-tracking, physical media took **21% less cognitive effort** to process - and afterward **75% could name the brand from the physical piece, against 44% from the digital ad.** It shows in response, too: an embellished postcard pulled a **16.8% response rate**, about **31% higher** than the same card run flat.

*Sources: Canada Post / TrueImpact; FSEA; JICMail, Q4 2024*
---
### One honest catch
**Finish raises perceived value. It can't rescue a weak offer.**

The paper elevates how a piece is received - it doesn't decide whether someone acts on it. A gorgeous foil-stamped piece with nothing worth saying is just a costly way to look nice. Get the message right first, then let the finish raise the ceiling on it.
---
### How to choose
1. **Decide the impression.** Premium and understated, or bold and unmissable? The finish should match the value you're signalling.
2. **Decide who touches it.** Handed over in person can be subtle - soft-touch, blind emboss. Competing in a stack needs foil.
3. **Pick the finish.** One is usually enough. Two is a choice. Three is usually budget better spent on quantity.
4. **Come feel the paper.** Fifteen minutes with a swatch book saves a reprint - and shows exactly how much value a finish buys.
---
### Let's make something worth keeping
Foil, emboss, soft-touch and spot UV - finishes that make a piece feel worth more the moment it's picked up. A full tasting-menu suite or a single card done properly, we'll help you land on the spec that elevates the piece and fits the budget - printed here in Shavano Park, with a proof in your hands before the run.

**[Start a Quote ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["06"] = `# FAQ FRIDAY · ISSUE 06
## Do branded promo products actually work?
Publish: Friday, July 31, 2026
Slug: /faq-friday/do-promo-products-actually-work
Read time: ~3 min
---
### The short answer
Yes - because people keep them, and remember you.

A promotional product is the rare ad someone chooses to keep. It earns a spot on a desk, in a bag, or by the door, and every time it's used it quietly repeats your name - no media spend, no scroll to interrupt. That's why the recall numbers dwarf anything a fleeting digital impression produces.

**85% of consumers remember the advertiser who gave them a logoed product.** Try getting that from a display ad.

*Source: 2026 ASI Global Advertising Impressions Study (~5,000 consumers)*
---
### What promo actually wins on
**Recall.** 85% remember the advertiser - not just the product.

**Retention.** People keep this stuff about a year on average; outerwear, bags and drinkware last longest, pens and hats the shortest.

**Reception.** 75% hold a positive opinion of branded merch - a higher share than any other form of advertising, TV and digital included. And **76% say they're more likely to do business with a brand that gave them merch.**

*Source: 2026 ASI Global Advertising Impressions Study*

Skip the cost-per-impression pitch our competitors lead with: a promo "impression" (how long you keep an item × people who see it) isn't the same unit as a logged Meta impression. Run the math anyway and promo (~\$6.00 CPM) roughly matches social (~\$5.69) - so exposure isn't the reason to do it. Recall, retention, and reception are.
---
### Why they keep it
**78% keep a promotional product because they find it useful** - not clever, not beautiful. Useful. That one stat names the failure mode: an item with no job lives in a drawer.

**Bags.** Best performer, and it isn't close. A tote gets carried into rooms full of people who never met you. If you order one thing, order this.

**Outerwear and drinkware.** The longest-kept items ASI measures - higher unit cost, but years of useful life, and people choose to be seen with them.

**Pens.** Useful and low-cost, but among the shortest-kept items. Order them for a trade-show floor, not as your one branded thing.

The pattern: the best-performing items are the ones people would have bought anyway.
---
### One honest catch
**It only works if it's worth keeping.**

Most promotional products are wasted, and we'd rather say so before you order a thousand. A forgettable giveaway costs the same as a good one - what matters is whether someone reaches for it next Tuesday. A \$1 pen used daily beats a \$12 gadget nobody understands. Buy fewer, better items.
---
### How to choose
1. **Name the job.** What will this item *do* for the person who takes it home? Can't say in five words? Pick something else.
2. **Check the retention.** Bags and outerwear stay; pens get discarded first.
3. **Match the item to the room.** Trade-show floor? Something that fits in a bag. Client gift? Something for the desk.
4. **Brand it cleanly.** Restraint reads as confidence.
---
### Let's put your brand in their hands
Apparel, drinkware, bags, and event swag - sourced, branded, and delivered. We'll help you pick items your customers will actually use, in quantities that fit the room you're walking into.

**[Start a Quote ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["07"] = `# FAQ FRIDAY · ISSUE 07
## Do QR codes on print actually get scanned?
Publish: Friday, August 7, 2026
Slug: /faq-friday/do-qr-codes-get-scanned
Read time: ~3 min
---
### The short answer
More than ever - when you give people a reason.

The old excuse for ignoring a code (needing a special app) is gone: every phone now scans straight from the camera. So codes get scanned far more than they did five years ago - but only when the reader knows what they'll get. For a restaurant, a clinic, or an event venue, that payoff is usually a menu, a booking, or a map. When a code is ignored, it's almost never the technology - it's that nothing told the reader why to bother.
---
### Why 2012 codes failed - and why that's over
If you're skeptical of QR codes, you earned it. The 2012 wave failed for three reasons: you needed a separate app to scan, codes were placed where scanning was impossible (highways, moving buses), and they led to unreadable desktop pages.

Two of those are now solved by the phone in every pocket. **Zero apps are required to scan a code today** - every phone (iOS 11+, Android 9+) reads one straight from the camera. The third reason, where the code leads, is still entirely up to you - and it's where most codes still fail.
---
### What the numbers actually say
Ignore the impressive scan rates vendors quote (18%, 26%, 38%) - every one comes from a company measuring scans of codes it sold, and they disagree wildly. **There is no independent, published scan rate for print QR codes.**

What is credible is how often people reach for one. In a survey of 1,000 U.S. adults, **about half of Gen Z and Millennial respondents said they use a QR code at least weekly** - 49% and 51% respectively - and **68% of all respondents had used one in the past year.**

The direction of travel is set too. **GS1 is targeting the end of 2027 to replace the traditional retail barcode with a QR code,** already testing in 48 countries representing 88% of world GDP. The code on the back of a package is becoming the same code you would put on a mailer.

None of which means yours gets scanned. People scan for the offer - not for you.

*Sources: TEAM LEWIS Research, survey of 1,000 U.S. adults, 2024; GS1 Sunrise 2027*
---
### One honest catch
**A code needs a reason to scan.**

"Scan me" does nothing. "Scan for 15% off" or "Scan to book" does. A bare code asks the reader to do work for an unspecified reward, and nobody takes that trade. Pair every code with a promise - then make sure the page behind it is mobile-first, fast, and about the thing the code promised. A code that resolves to your homepage has broken the promise it just made. The code is the easy part; the offer and the landing page are the job.
---
### Where codes actually earn their place
**On a mailer, next to an offer.** The recipient is holding the piece, phone within reach. "Scan to claim" is a complete sentence.

**On signage, where the reader is already waiting.** Lobbies, queues, tables. They fail where someone is moving.

**On a printed map or guide.** Paper can't tell you where you're standing; a scan turns it into a live wayfinder with real-time directions and accessibility info. The print sets the stage; the destination does the work.
---
### How to do it right
1. **Write the promise first.** Finish "Scan for..." before you generate the code. Can't? You don't need one.
2. **Use a dynamic code.** The destination can change after it's printed.
3. **Build the page for a phone.** Under two seconds to load, delivering exactly what the code promised.
4. **Print it big enough.** Below ~an inch square, reliability drops - test iOS and Android before the run.
5. **Track it.** A code is the lowest-cost attribution you'll ever buy - and the only honest reason to put one on print.
---
### Let's connect your print to your pipeline
Trackable QR campaigns on mailers, signs, and collateral - designed and built end to end. We'll help you write the promise, build the page, and read the numbers that come back.

**[Get a free QR campaign review ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["08"] = `# FAQ FRIDAY · ISSUE 08
## Does big, bold signage still get noticed?
Publish: Friday, August 14, 2026
Slug: /faq-friday/does-big-signage-still-get-noticed
Read time: ~3 min
---
### The short answer
Yes - if it says one thing, in a spot where the right people actually look.

Big doesn't earn attention. **Placement earns attention; clarity keeps it.** A bold sign on a wall nobody passes is a cost with no audience. Put the same sign where your customers already are - and give it one message they can read in a glance - and large format does what nothing else in your budget does: **you pay once, and it works every day after.**
---
### Start with the eyeballs, not the wall
The usual pitch - "you already rent the lobby, so brand it" - gets it backwards. A surface you own is only worth printing if people see it. Before you pick a format, answer one question: **where is my customer already looking?** Then put the sign there.

**High-traffic frontage and windows.** The glass you already have faces the sidewalk and the parking lot all day. Window graphics turn the busiest surface you own into a 24/7 salesperson - working after you've locked up.

**The vehicle you already drive.** The one most owners underestimate. Every other sign waits to be walked past; a wrap drives to where the customers are - the job site, the parking lot, the light at Loop 1604 and Blanco at 5:15pm. It's the only large-format piece that changes its own location to find its audience.

**The moment people are already waiting.** Lobbies, queues, exam rooms, checkout lines. Here a wall people *do* sit in front of becomes useful - not because you rent it, but because you have a captive, decision-ready audience with nothing else to read.

**Banners, where the event brings the crowd.** A grand opening, a seasonal push, a job site. The audience shows up for the occasion; the banner just has to be there and be clear.
---
### Match the format to how long the audience lasts
Once you know where the eyeballs are, the format almost picks itself - by how long that audience keeps coming.

**A day to a season → a banner.** Fast to produce, easy to swap when the message changes.

**A lease → window film or wall graphics.** Permanent enough to matter, changeable when you rebrand.

**Five to seven years on the move → a vehicle wrap.** Rolling exposure that compounds every mile.

**As long as the doors are open → channel letters.** Dimensional, lit, legible at dusk in February. This is what says *we're not going anywhere.*
---
### One honest catch
**Big only works when it's clear - and clarity beats size every time.**

Going bigger only makes bad design bigger. A cluttered banner is just a cluttered business card everyone in the parking lot can read. **One message, read from 100 feet.** Vehicles are the strictest version: nobody reads a wrap parked next to them - they read it at 40 mph, in a mirror, for two seconds. Name, what you do, one way to reach you. If you can't reduce it to one message, fix the message first - a smaller, better-placed sign will beat a bigger one every time.
---
### How to spec it
1. **Count the eyeballs first.** Where does your customer already look - and how many, how often? Put the sign there before you size it.
2. **Write the one sentence.** Name, category, or offer - pick one. Not all three.
3. **Set the reading distance.** 100 feet across a lot is a different piece than 15 feet in a lobby. Distance sets type size; type size sets how much copy fits.
4. **Match material to how long the audience lasts.** A day, a lease, or years? That picks the substrate before anyone discusses price.
5. **Check the install before you design.** Wind load, wall surface, permits - or for a wrap, the seams, handles, and curves that eat a logo. A file that can't be installed is a costly PDF.
---
### Let's put your sign where it pays off
Banners, window and wall graphics, vehicle wraps, channel letters, and grand-format printing - designed and produced in Shavano Park. We'll help you find where your customers already look, land on the one message, and match the material to how long it needs to work.

**[Start a Quote ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["09"] = `# FAQ FRIDAY · ISSUE 09
## Can your space change how people feel?
Publish: Friday, August 21, 2026
Slug: /faq-friday/can-your-space-change-how-people-feel
Read time: ~4 min
---
### The short answer
Most people walk into your business already braced for something.

Not because of you. Because of the category. Nobody looks forward to the dentist. Nobody enjoys the waiting room at the clinic, or the loan office, or the shop where they're about to find out what the noise under the hood costs.

The room meets them in that state. It either makes the next twenty minutes easier or it doesn't.

That's what environmental graphics are actually for. Not to look expensive. **To lower the temperature.**
---
### What a pediatric office taught us about every business
Picture a children's practice reimagined as a woodland.

The suite sign at the door isn't a name plate - it's a trailhead. Inside, a creek runs across the floor in cut vinyl, wandering from the waiting room toward the exam rooms. Children follow it, because children follow creeks. The exam room walls are a forest - not wallpaper, a forest, with depth, sized to the room.

Now think about what's happening on the floor at knee height.

A four-year-old comes through that door frightened. They have been told they are going to the doctor and they know what that means. And instead of a beige hallway with a scale in it, there is a creek. Something to follow. Something to look at that is not a needle.

**The graphics didn't make the appointment shorter. They gave the child somewhere to put their attention while it happened.**

That's the mechanism. And once you see it, you see it everywhere.
---
### Every business has a version of this
The pediatric office is just the clearest case. The same problem shows up wherever someone walks in slightly on edge:

**The dentist.** Adults are afraid too. They just hide it better.

**The clinic or the lab.** People sit in those chairs waiting for news.

**The bank or the loan office.** Nobody feels powerful walking in to ask for money.

**The auto shop.** Every customer is standing there wondering if they're about to be taken advantage of.

**The law office.** Nobody's day is going well when they arrive.

In every one of those rooms, the visitor is managing something. A well-designed space doesn't pretend that away. **It gives them something else to do with their eyes.** A wall worth looking at. A path worth following. A room that suggests the people here thought about what it's like to be you.

That is a real service, and it costs less than most people assume.
---
### The two surfaces you're already paying for
Here's what makes it an easy decision rather than a design decision. You are already paying rent on both of them.

**The walls.** The largest continuous surface in the building, usually beige and empty. It's the only medium in your marketing that a customer stands *inside* of - and for someone waiting, it's whatever is in front of them for twenty minutes.

**The floor.** Almost nobody uses it, which is exactly why it works. A floor graphic is the only sign people look at without deciding to, because they're already looking down to see where they're walking. For a frightened child, that's the difference between staring at a door and following a creek.

Walls and floor. **Zero additional square footage.** You're paying for both whether or not they're doing anything.
---
### One honest catch
**A nice room doesn't fix a bad visit.**

We'd love to help you transform that space. First, the honest part: the mural is not the problem.

Graphics can make a waiting room calmer. They cannot make the wait shorter, or the staff kinder, or the appointment start on time. If people leave your business feeling worse than when they arrived, a forest on the wall is an expensive way to be resented.

**Fix the visit first. Then the room will be telling the truth.**

When the space and the experience agree, the room does real work - it sets an expectation and the visit confirms it. When they disagree, people believe the visit, and the beautiful walls just make the gap more obvious.
---
### How to think about it
1. **Walk in through your own front door.** Actually do it. Park where a customer parks, walk the path they walk, and sit in the chair they sit in. Most owners haven't experienced their own entrance in years.
2. **Ask what the visitor is bracing for.** Pain? Cost? Bad news? Judgment? That answer is the brief. Everything else is decoration.
3. **Then ask where their eyes go.** While they wait. While they're nervous. That's the surface to start with - and it's usually not the one you'd guess. It's often the ceiling, or the floor.
4. **Start with one surface.** A single wall done well beats three done thinly.
5. **Measure before you dream.** Wall texture, vents, light switches, and door swings decide what's actually installable. A gorgeous file that dies on a cinderblock wall helps nobody.

Often the answer is smaller and more affordable than what people picture walking in. One wall changes a room.
---
### Let's make your space easier to walk into
Wall murals, floor graphics, lobby signage, and branded interiors - designed, printed, **and installed** in Shavano Park. We'll walk your space, find the surfaces you're already paying for, and figure out what the person sitting in that chair actually needs to be looking at.

**[Book a free walk-through ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["10"] = `# FAQ FRIDAY · ISSUE 10
## Do business cards still matter in 2026?
Publish: Friday, August 28, 2026
Slug: /faq-friday/do-business-cards-still-matter
Read time: ~4 min
---
### The short answer
Most business cards get thrown away. We help businesses make cards they're proud of, and we'll say it first: the majority of what we hand you will end up in a drawer or a trash can within the week.

That's not the argument against them. **It's the whole argument for doing them properly.**
---
### The one thing they'll actually hold
Here is what a business card is, stripped of nostalgia.

It is a physical object that you commissioned, that you chose the material for, that you are now placing into another person's hand.

For most prospects, **it is the only piece of your work they will ever touch.**

Not see. *Touch.* Before they've visited your shop, before they've read a proposal, before they've watched you do the thing you do - they are holding a small object you decided was good enough to put your name on.

A contractor's card. A designer's card. An attorney's card. A printer's card.

The object is a claim about the work.
---
### Why weight does what it does
There's real research on this, though not the kind that produces a tidy percentage.

Psychophysics researchers have spent decades mapping how touch shapes judgment. One finding holds up across studies: **thicker and heavier objects are perceived as more luxurious.** Not "look more expensive." *Are perceived as.* The hand reports to the brain before the eye finishes.

There's a related line of work on weight and importance. Hand someone a heavier clipboard and they rate the survey on it as more significant. Tell someone a book matters and they estimate it as heavier. The association runs in both directions.

None of that gives us a number to print on a slide, and we're not going to invent one. But it explains something every printer already knows: **people decide how they feel about a card in the two seconds before they read it.**
---
### The specs that actually matter
Three decisions do most of the work. None of them is design.

**Weight.** Standard cards run 14pt. At **16pt** a card stops feeling like paper and starts feeling like an object. At 32pt - two sheets bonded, often with a colored core showing at the edge - it stops feeling like a card and starts feeling like a gift. Most people should stop at 16pt. It's the largest perceptual jump for the smallest money.

**The edge.** Nobody thinks about the edge. Everybody feels it. A clean cut, a painted edge, a rounded corner - the edge is what your thumb finds while you're talking.

**The finish.** Soft-touch coating changes the card more than any color decision will. It's the one that makes people say *"oh"* out loud, and it costs less than most owners assume.

**And the back.** Most businesses print one side and leave the other blank. It's the lowest-cost square inch in your entire marketing budget and it's usually empty.
---
### One honest catch
**A card works when it feels intentional.**

A rushed layout reads as an afterthought. Six phone numbers, three email addresses, a QR code, a logo at 40% opacity behind the text, and a tagline nobody asked for - that card tells a story, and the story is *this was not important to me.*

A considered card is a small, repeatable proof that you care about quality. Not because it's expensive. Because it's *decided.*

**The card is a sample of your standards.**

So yes - most of them get thrown away. Print for the ones that don't. The card that survives is the one that felt like it cost something to make, and the person who kept it is the person who was going to call you anyway.

You are not printing 500 cards to reach 500 people. You're printing them to be ready for the twelve that matter.
---
### How to spec one
1. **Start at 16pt.** If it still feels thin, go up. Most don't need to.
2. **Use the back.** A single line of what you actually do beats a blank.
3. **Pick one finish, not three.** Soft-touch *or* spot gloss *or* foil. Stacking them reads as trying too hard.
4. **Hold it before you order 500.** We'll cut you a blank in the stock you're considering. Carry it in your pocket for a day.
5. **Reprint when the information changes** - not when you get bored. A card people kept is working.

Often the right answer is one step up in weight and nothing else. That's a real recommendation, and it barely moves the invoice.
---
### Let's make a card worth keeping
Business cards, letterhead, and collateral - printed in Shavano Park. Come hold the stocks, feel the edges, and decide with your hands instead of a screen.

**[See the stocks and finishes ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["11"] = `# FAQ FRIDAY · ISSUE 11
## Are window graphics worth it for a storefront?
Publish: Friday, September 4, 2026
Slug: /faq-friday/are-window-graphics-worth-it
Read time: ~4 min
---
### The short answer
It's the billboard you already pay rent for.

Look at your lease. You're paying for every square foot of that storefront, including the glass. Most businesses put hours on it in three-inch vinyl and leave the other forty square feet blank.

Nobody rents a billboard and leaves it empty.
---
### Glass is the only surface that faces both directions
That's what makes it strange, and what makes it valuable.

From the sidewalk, your window is signage. It's the thing a stranger reads while deciding whether to come in - and for a business without street frontage on a major road, it's the only advertisement most people will ever see.

From inside, the same pane is light, privacy, and mood. It's what your customers look at while they wait, and what your staff looks at all day.

**One surface. Two audiences. No additional square footage.**

Every other piece of marketing you buy is an added line item. This one you already own. The only question is whether it's currently doing anything.
---
### Three ways to use it, and they're not interchangeable
**Cut vinyl.** Individual letters and shapes, cut from solid colored film, applied directly to the glass. Your name, your hours, your phone number. It's the minimum viable window, it's the most affordable, and it leaves most of the pane clear.

If your window currently says nothing, this is where you start. It costs less than most owners expect and it can be done in an afternoon.

**Frosted film.** Etched-glass appearance without etching the glass. Nobody thinks of this one, and it does two jobs at once: it screens a conference room, a bathroom corridor, or a back office - and it carries your logo while doing it.

The best version is an inverse cut: the logo stays clear and the field around it is frosted. Your mark, rendered in nothing but light.

**Perforated film.** Full-color graphic on the outside, clear view from the inside. This is the one that sounds impossible, so here's how it actually works.
---
### The physics of one-way vision
Perforated film is solid vinyl with thousands of tiny holes punched through it - about **1.5 millimeters** across, evenly spaced.

You choose a ratio. **50/50** is half vinyl, half holes. **70/30** is seventy percent vinyl and thirty percent holes. Storefronts typically land somewhere in the 60/40 to 70/30 range, depending on whether you care more about the graphic or the view.

Here's why it works, and it isn't the film - it's the light.

From inside, the exterior is brighter. Your eye focuses *through* the holes toward that brightness, and the vinyl between them stops registering. From outside, the printed surface reflects far more light than those small dark holes absorb, so the graphic dominates.

**It's the same effect that turns a window into a mirror at night.** The film doesn't do anything clever. It just lets the light sort itself out.

That's the whole mechanism, and it's worth understanding before you spec a ratio. More vinyl means a richer graphic and a dimmer room. More holes mean a brighter room and a softer image. There is no correct answer, only a trade you should make on purpose.
---
### One honest catch
**Glass works when it's not cluttered.**

Cover every inch and you've built a wall.

The most common mistake with window graphics is buying too many of them. A storefront papered corner to corner reads as *closed*, or *going out of business*, or *there is nothing in here worth seeing.* You have spent money to make your business look empty.

Strategic graphics frame the view. They state the offer, carry the name, and leave a clear band at eye height so a person on the sidewalk can see the life inside - the staff, the light, the other customers, the thing you actually sell.

**Leave room to see in. Curiosity sells.**

A window is not a poster. It's a preview.
---
### How to spec it
1. **Stand on the sidewalk at your customer's eye height.** What can you see? What do you wish they could see? That's the band you leave clear.
2. **Decide what the window is for.** Finding you, or telling you something? Hours and a name are wayfinding. An offer is advertising. Don't ask one pane to do both.
3. **Pick one message.** The window competes with traffic, weather, and a phone in their hand. It gets one sentence.
4. **Measure before you design.** Mullions, frames, door swings, and the height of the sill will change the layout more than any aesthetic decision. Glass is the one substrate where a template fails.
5. **Check your city and your landlord.** Coverage limits are real, and they vary by municipality and by lease.

Very often the right answer is cut vinyl and nothing else. That's a real recommendation, and it's about the most affordable option there is.
---
### Let's put your windows to work
Window vinyl, frosted privacy graphics, hours, and promotions - measured, printed, and installed in Shavano Park. We'll come look at the glass, check the coverage rules, and tell you honestly if a hundred dollars of cut vinyl would do the job.

**[Book a free measure ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

window.AG_NEWSLETTERS_RAW["12"] = `# FAQ FRIDAY · ISSUE 12
## Why go local instead of an online printer?
Publish: Friday, September 11, 2026
Slug: /faq-friday/why-go-local-instead-of-an-online-printer
Read time: ~4 min
---
### The short answer
One team, one timeline, and a real proof in your hand.

But let's start somewhere most print shops won't.
---
### Sometimes the online printer is the right call
If you need 500 standard business cards on standard stock, and nothing is riding on them, upload the file and save the money.

We mean that. We'd rather tell you than take a job you didn't need us for.

There's a whole category of printing that is genuinely a commodity - flat, standard, low-stakes, no installation, no color matching, no deadline that anyone will remember. For that work, a website is a perfectly good answer, and we're not going to pretend otherwise to win a $79 order.

**The question is what happens when it isn't that.**
---
### The thing a website structurally cannot do
Look at what actually gets sold online versus what gets done locally.

You can buy printed wrap vinyl from a website. **You cannot buy the installation.** Every wrap company in the country - online or not - hands the vehicle to someone standing in your city with a heat gun and fifteen years of practice. The vinyl is the commodity. The install is the job.

You can buy a printed sign panel online. Nobody ships you the permit, the wind-load calculation, or a person on a ladder.

You can order window graphics online. **Nobody can measure your glass from Massachusetts.** Mullions, frames, sill height, door swing - a website will happily print exactly the file you sent, at exactly the size you guessed.

This is the actual dividing line, and it isn't about price or quality. It's about whether the job ends when the box ships.
---
### Three things that only happen in person
**Walking your storefront.** Before a single file is opened. What the glass actually measures. Where the sun hits at 3pm. Whether the neighboring tenant's awning eats your sightline. Which direction people approach from.

**Color-matching in your hand.** Not on your monitor, which is lying to you. Not in the PDF preview. A physical proof, on the actual stock, under the light you'll see it in. Every screen renders color differently, and none of them render paper.

**Fixing it before the deadline.** This is the one that matters. Something goes wrong the week of the event - it does, regularly - and the difference between a local partner and a support ticket is whether a human being who knows your name is already working on it.
---
### What "local" actually means here
There's a version of this argument that's just civic sentiment, and we're not making it. Buy local because it's local is not a business case.

Here's the structural one.

**An online printer gives you scale without a person. An independent shop gives you a person without scale.**

AlphaGraphics is a national network of locally owned shops. The equipment, the buying power, and the color standards come from the network. The person whose name is on the door lives in San Antonio.

That's not sentiment. That's why we can run a Canon Colorado and still answer the phone.
---
### One honest catch
**Accountability is the feature you can't download.**

We can't ship it, discount it, or put it in a cart. It's the thing that costs us money when we get it wrong, which is precisely what makes it worth something to you.

A reprint. A missed event. A color that's off by enough that the sign doesn't match the truck. When those happen with a website, you eat it. When they happen with us, we eat it - because we're standing in the same city you are, and you'll be back, and we know it.

**Call us when it has to be right. Or when it has to be installed.**
---
### What we actually commit to
Not aspirations. These are the standards:

**Same-day responses, Monday through Friday.** No ticket queue. A real person.

**One point of contact,** from the first quote through the finished install.

**A proof you can see and approve** before anything goes on press.

That's it. Three promises, small enough to keep.
---
### How to decide
1. **Is anything riding on it?** A date, a client, an event, a first impression? If no - upload the file.
2. **Does it need to be installed?** Then the printing was never the hard part.
3. **Does it need to match something?** A truck to a sign, a sign to a storefront, this year's brochure to last year's. Screens can't tell you that.
4. **Does someone need to measure something?** Glass, walls, vehicles, booths. A website prints what you send it.
5. **Would a mistake cost more than the job?** That's the whole calculation.

If you answered no to all five, you don't need us. Genuinely.
---
### Let's put a real proof in your hand
Signage, wraps, displays, and collateral - designed, printed, and **installed** in Shavano Park. Come by, hold the stock, see the color under real light, and talk to the person who'll still be here when it ships.

**[Come see a proof ->]**
---
FAQ Friday is a weekly answer to the questions San Antonio business owners actually ask. Free, every Friday.`;

/* ---------------------------------------------------------------------
   PARSER — turns raw markdown into a structured newsletter object.
   Block types: p (runs), lead (bold-led p), source, ol (steps), hr.
   --------------------------------------------------------------------- */
(function () {
  function parseRuns(text) {
    // splits **bold** and *italic* into runs [{t, b, i}]
    const runs = [];
    const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
    let last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) runs.push({ t: text.slice(last, m.index) });
      const tok = m[0];
      if (tok.startsWith("**")) runs.push({ t: tok.slice(2, -2), b: true });
      else runs.push({ t: tok.slice(1, -1), i: true });
      last = re.lastIndex;
    }
    if (last < text.length) runs.push({ t: text.slice(last) });
    return runs;
  }

  function parseSectionBody(body) {
    const blocks = [];
    const paras = body.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
    for (const para of paras) {
      if (/^\d+\.\s/.test(para)) {
        // numbered list — items may be multi-line joined
        const items = [];
        const parts = para.split(/\n(?=\d+\.\s)/);
        for (const it of parts) {
          const clean = it.replace(/^\d+\.\s/, "").replace(/\n\s*/g, " ").trim();
          items.push(parseRuns(clean));
        }
        blocks.push({ type: "ol", items });
      } else if (/^\*[^*].*\*$/.test(para) && /^\*(Source|Sources|That survey)/.test(para)) {
        blocks.push({ type: "source", runs: parseRuns(para.replace(/^\*|\*$/g, "")) });
      } else {
        const oneLine = para.replace(/\n\s*/g, " ").trim();
        const isLead = /^\*\*/.test(oneLine);
        blocks.push({ type: isLead ? "lead" : "p", runs: parseRuns(oneLine) });
      }
    }
    return blocks;
  }

  window.parseNewsletter = function (md) {
    const chunks = md.split(/\n---\n/).map((s) => s.trim());
    const head = chunks[0];
    const issue = (head.match(/ISSUE\s+(\d+)/) || [])[1] || "";
    const question = (head.match(/^##\s+(.+)$/m) || [])[1] || "";
    const publish = (head.match(/^Publish:\s*(.+)$/m) || [])[1] || "";
    const slug = (head.match(/^Slug:\s*(.+)$/m) || [])[1] || "";
    const readTime = (head.match(/^Read time:\s*(.+)$/m) || [])[1] || "";

    const sections = [];
    let cta = null, tagline = null;
    for (let i = 1; i < chunks.length; i++) {
      const c = chunks[i];
      const hm = c.match(/^###\s+(.+)$/m);
      if (!hm) {
        // trailing tagline chunk (no heading)
        tagline = c.replace(/\n\s*/g, " ").trim();
        continue;
      }
      const heading = hm[1].trim();
      let body = c.slice(c.indexOf("\n") + 1).trim();
      // Extract CTA button line **[Label ->]**
      const ctaMatch = body.match(/\*\*\[(.+?)\s*->\]\*\*/);
      let ctaLabel = null;
      if (ctaMatch) {
        ctaLabel = ctaMatch[1].trim();
        body = body.replace(/\*\*\[.+?->\]\*\*/, "").trim();
      }
      const blocks = parseSectionBody(body);
      const sec = { heading, blocks };
      if (ctaLabel) { sec.ctaLabel = ctaLabel; cta = { heading, blocks, ctaLabel }; }
      sections.push(sec);
    }
    return { issue, question, publish, slug, readTime, sections, cta, tagline };
  };

  window.AG_NEWSLETTERS = {};
  Object.keys(window.AG_NEWSLETTERS_RAW).forEach(function (k) {
    const data = window.parseNewsletter(window.AG_NEWSLETTERS_RAW[k]);
    data.week = k;
    data.campaign = window.AG_CAMPAIGN[k] || {};
    window.AG_NEWSLETTERS[k] = data;
  });
})();
