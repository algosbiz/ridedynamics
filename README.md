# Ride Dynamics

A recreation of the Ride Dynamics website (<https://www.ridedynamics.com.au>) built
with Next.js. The design, wording and images all come from the original site.

This README assumes you are still learning Next.js, so it explains things step by step.

---

## Getting started

You need [Node.js](https://nodejs.org) 18.18 or newer installed.

Install the packages (only needed once, or after someone adds a new package):

```bash
npm install
```

Start the site on your own machine while you work on it:

```bash
npm run dev
```

Then open <http://localhost:3000>. Save a file and the page updates by itself.

Check that everything still builds before you deploy:

```bash
npm run build
```

If `npm run build` prints errors, fix them before deploying. Deployment target is
[Vercel](https://vercel.com): push to your Git repository and Vercel builds it.

---

## Where everything lives

| What you want to change | File to open |
| --- | --- |
| The homepage | `src/app/page.tsx` |
| Any other page | `src/app/<page-name>/page.tsx` |
| The menu links | `src/data/navigation.ts` |
| Phone number, address, email | `src/data/contact.ts` |
| The bar across the top | `src/components/layout/Header.tsx` |
| The drop-down menu on phones | `src/components/layout/MobileMenu.tsx` |
| The footer | `src/components/layout/Footer.tsx` |
| Colours and fonts | `src/app/globals.css` |
| Pictures | `public/images/` |
| Wording for a page | `src/data/<page-name>.ts` |
| Old `.html` web addresses | `next.config.ts` |

### The folders

```
public/images/        every picture, grouped by the page that uses it
  logo/               the Ride Dynamics logos
  common/             things used on more than one page
  home/ about/ ...    pictures for that one page

src/app/              one folder per page (this is how Next.js makes addresses)
  layout.tsx          the shell every page sits inside (header + footer)
  page.tsx            the homepage
  globals.css         colours, fonts and the page background
  robots.ts           builds /robots.txt
  sitemap.ts          builds /sitemap.xml

src/components/
  layout/             Header, MobileMenu, Footer
  ui/                 Container (page width) and PagePanel (the black panel)

src/data/             the wording and picture lists for each page
src/types/            a few small type definitions
```

---

## How to edit the text on a page

The wording lives in `src/data/`, separate from the layout, so you can change
words without touching any HTML.

1. Work out which page you want. The Services page is `/services`.
2. Open `src/data/services.ts`.
3. Find the sentence and edit it between the quote marks.
4. Save. The browser updates on its own.

For example, to change the Services introduction, edit `servicesIntro` in
`src/data/services.ts`.

Watch out for the quote marks: the text must stay inside `"` and `"`. If your
sentence contains a `"` character, write it as `\"`.

---

## How to replace a picture

1. Find the picture you want to replace in `public/images/`. The folders are
   named after the pages, so a Services picture is in `public/images/services/`.
2. Put your new file in the same folder. Give it a name that describes it, like
   `k-tech-rear-shock.jpg` — never `IMG_8842.jpg`.
3. Find where the old picture is used. Search the project for its file name.
   Pictures are usually listed in `src/data/`, for example `servicesSideImages`
   in `src/data/services.ts`.
4. Change the `src` to your new file name, and update `alt` to describe the new
   picture for people using a screen reader.
5. **Important:** also update `width` and `height` to the real pixel size of your
   new file. Next.js uses those numbers to reserve the right amount of space so
   the page does not jump around while the picture loads. You can see a file's
   size by right-clicking it and choosing Properties (Windows) or Get Info (Mac).

The easiest option is to keep the same file name as the old picture — then you
only have to change `width` and `height`.

---

## How to add a new page

Next.js turns folders inside `src/app/` into web addresses. A folder called
`warranty` containing a `page.tsx` becomes `/warranty`.

1. Make the folder `src/app/warranty/`.
2. Create `src/app/warranty/page.tsx` and paste this in as a starting point:

   ```tsx
   import type { Metadata } from "next";
   import PagePanel from "@/components/ui/PagePanel";

   export const metadata: Metadata = {
     title: "Warranty | Ride Dynamics",
     description: "A short sentence describing this page for Google.",
     alternates: { canonical: "/warranty" },
   };

   export default function WarrantyPage() {
     return (
       <PagePanel>
         <h1 className="text-rd-gray text-center text-[30px] leading-[36px]">
           Warranty
         </h1>
         <p className="text-rd-gray mt-[18px] text-justify text-[16px] leading-[19px]">
           Your words go here.
         </p>
       </PagePanel>
     );
   }
   ```

3. Add it to the menu in `src/data/navigation.ts`:

   ```ts
   { label: "WARRANTY", href: "/warranty" },
   ```

That is all. The header, the phone menu **and** `sitemap.xml` all read from that
same list, so they update together.

---

## Colours and fonts

All of them are defined once, at the top of `src/app/globals.css`:

| Name | Colour | Used for |
| --- | --- | --- |
| `rd-red` | `#ED1C24` | the current menu link, the red outlines, lead paragraphs |
| `rd-red-dark` | `#A41C24` | the bar at the very bottom |
| `rd-black` | `#0E0E0F` | the menu bar |
| `rd-panel` | `#000000` | the black panel each page sits on |
| `rd-gray` | `#8F8F8F` | body text and inactive menu links |
| `rd-yellow` | `#FDD900` | the footer service words and small links |

Use them as Tailwind classes: `text-rd-gray`, `bg-rd-panel`, `border-rd-red`.

Three font classes are available: `font-body` (Libre Franklin, the main text),
`font-cond` (Archivo Narrow, the footer headings) and `font-plain` (Arial, the
menu and the bottom credit line).

### A note on the fonts

The original site uses Adobe Fonts (Typekit) faces that are licensed to that one
domain and cannot be reused here, so this project loads the closest free
equivalents from Google Fonts:

| Original | Used here | Why |
| --- | --- | --- |
| `franklin-gothic-urw` | **Libre Franklin** | an open revival of the same typeface |
| `franklin-gothic-urw-cond` | **Archivo Narrow** | closest free condensed match |
| `open-sans`, `league-gothic`, `museo-sans` | **Arial** | these never load on the live site any more and already fall back to Arial there, so Arial is what visitors actually see |

Libre Franklin runs about 9% wider than the original face, so a few paragraphs
wrap onto one extra line. Everything else lines up.

---

## Screen sizes

The original site changes layout at three points, and this project uses the same
three so it reflows in the same places:

| Class prefix | Applies from | Original site calls it |
| --- | --- | --- |
| (none) | 0px | phone |
| `tablet:` | 676px | `bp_850` |
| `laptop:` | 851px | `bp_1150` |
| `desktop:` | 1151px | `bp_infinity` |

Write them like `desktop:flex-row`. The full menu appears at `desktop:`; below
that you get the hamburger button.

Tailwind's usual `sm:` / `md:` / `lg:` still work, but this project sticks to the
three above so the sizes match the original.

---

## Old web addresses

The old site used addresses ending in `.html`. Those links still exist out on the
web, so `next.config.ts` redirects each one to its new address:

| Old | New |
| --- | --- |
| `/index.html` | `/` |
| `/about.html` | `/about` |
| `/services.html` | `/services` |
| `/k-tech.html` | `/suspension-parts` |
| `/accossato.html` | `/brake-components` |
| `/rock-oil.html` | `/lubricants` |
| `/contact.html` | `/contact` |

These are permanent redirects, so search engines move their records to the new
address rather than listing the page twice. If you rename a page, add a redirect
here too so nobody hits a "page not found".

---

## Search engines

- Every page sets its own title, description and canonical address in the
  `metadata` block at the top of its `page.tsx`.
- `/sitemap.xml` and `/robots.txt` are generated by `src/app/sitemap.ts` and
  `src/app/robots.ts`.
- Only the real production deployment invites search engines in. Vercel preview
  builds and your local machine are blocked, so they never show up in Google as a
  duplicate of the live site.
- The live domain is set in `src/data/site.ts`. **Change `productionUrl` there if
  the site ever moves to a different domain.**

---

## Things worth knowing

**The online store link is hidden.** The original site has an
"ONLINE STORE / CART" menu item, but it is commented out in the live HTML, so
visitors never see it. This project matches that. To bring it back, open
`src/data/navigation.ts` and set `showOnlineStoreLink` to `true` — but check the
store address (`onlineStoreUrl`) is still correct first.

**The contact page is a picture.** On the original site the phone number, email
and ABN on the contact page are part of an image file, not text. That has been
kept as-is. The image has a text description for screen readers, and the footer
carries the same phone number as a real tap-to-call link. If you would like those
details as selectable text on the page as well, that is a small change worth
making — it would help both visitors and Google.

**Most components are Server Components.** Only `Header.tsx` and
`MobileMenu.tsx` start with `"use client"`, because they need to know which page
you are on and whether the menu is open. Leave the pages as they are — they do
not need it.

---

## Useful commands

```bash
npm run dev
```

```bash
npm run build
```

```bash
npx eslint src
```
