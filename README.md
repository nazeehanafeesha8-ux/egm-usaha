# EGM Usaha Website

Company website for **EGM Usaha Sdn. Bhd.**, a Miri-based provider of fire & lifesaving systems, construction & engineering, energy & safety systems, and logistics, marine & trading services across Sarawak, Sabah, Brunei and Indonesia.

Live site: <https://egmusaha.com>

---

## Running the site locally

There is no build step and nothing to install. The site is plain HTML, CSS and JavaScript.

- **Quickest:** double-click `index.html` to open it in a browser.
- **Recommended:** open the folder in VS Code and use the **Live Server** extension (right-click `index.html` → *Open with Live Server*). The page reloads on its own when you save a file.

The contact form, map, icons and fonts load from the internet, so you need a connection for them to work.

## Project structure

```
egm-usaha/
├── index.html              Homepage (one page: hero, about, business, coverage, contact, footer)
├── pages/
│   ├── about.html          About Us
│   ├── construction.html   Construction & Engineering
│   ├── safety-system.html  Energy & Safety Systems
│   └── marine.html         Logistics, Marine & Trading
├── css/
│   └── style.css           The one stylesheet used by every page
├── js/
│   └── script.js           All interactive behaviour (see below)
├── images/                 Logo, favicon, social share image and photos
├── CNAME                   Custom domain for GitHub Pages (egmusaha.com)
└── CLAUDE.md               Notes for the Claude Code AI assistant
```

## What the JavaScript does

Everything is in [js/script.js](js/script.js). Each part checks that its elements exist first, so the same file runs safely on every page.

| Feature | What it does |
|---|---|
| Hero slideshow | Fades between the `.hero .slide` images every 5 seconds. |
| Contact form | Sends the enquiry to [Web3Forms](https://web3forms.com), which emails it to the company inbox. Shows "Sending…", then a success or error message. |
| Coverage map | Draws a fixed (non-draggable) [Leaflet](https://leafletjs.com) map with pins for Sarawak, Sabah, Brunei and Indonesia. |
| Active nav link | Highlights the menu link for the section currently on screen. |
| Header shadow | Adds a shadow to the header once you scroll down. |
| Business cards | The round icon on each business card opens its list of activities. Clicking elsewhere or pressing Esc closes it. |
| Mobile menu | The ☰ button opens and closes the menu on small screens. |

## Common tasks

### Change the contact details
The contact details appear in **several places**: the contact section and footer of `index.html`, the footer of every page in `pages/`, and the error message in `js/script.js`. Update all of them so they stay consistent:

- Nigel Goh, Business Development Executive
- nigelgkt@egmusaha.com | +60 17-217 9899
- Lot 2911, Boulevard Commercial Centre, 98000 Miri, Sarawak, Malaysia

### Change where enquiries are emailed
Enquiries go to the inbox linked to the Web3Forms **access key**, which is the hidden `access_key` field in the contact form in `index.html`. To send them to a different inbox, create a new key at web3forms.com and replace the value.

### Change the header, menu or footer
These are copied into every page, not shared. If you edit one, make the same edit in `index.html` **and** every file in `pages/`.

### Add a new inner page
1. Copy an existing page in `pages/` (e.g. `marine.html`) and rename it.
2. Keep the `../` at the start of every link to CSS, JS and images (e.g. `../css/style.css`, `../images/logo_egm_usaha.jpeg`).
3. Update the `<title>` and `<meta name="description">`.
4. Link to the new page from `index.html`.

### Replace a photo
Put the new image in `images/` and update the `src` (or `background-image` for the hero slides) in the HTML. Keep images reasonably small (ideally under 500 KB) so the site loads fast on mobile.

### After editing CSS or JS: bump the version number
Browsers cache `style.css` and `script.js`. Each page links them with a version number, for example:

```html
<link rel="stylesheet" href="css/style.css?v=6">
<script src="js/script.js?v=11"></script>
```

After you change either file, increase the number (`?v=6` → `?v=7`) on **every** page so visitors get the new version.

## Design

| | |
|---|---|
| Brand green | `#1d4a2c` (CSS variable `--green`) |
| Brand red | `#c8202b` (CSS variable `--red`) |
| Heading font | Montserrat (Google Fonts) |
| Body font | Open Sans (Google Fonts) |
| Icons | Font Awesome 6.5.1 (cdnjs) |
| Map | Leaflet 1.9.4 (unpkg) with OpenStreetMap tiles |

Check every change on a phone-sized screen too. In Chrome, press F12, then click the phone/tablet icon to preview mobile sizes.

## Publishing

The site is hosted on **GitHub Pages** from the `main` branch of this repository, and the `CNAME` file points it at **egmusaha.com**. Pushing to `main` updates the live site, usually within a minute or two. Do not delete or rename the `CNAME` file, or the custom domain will stop working.
