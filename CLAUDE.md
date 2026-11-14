# EGM Usaha Website

 Static company website for EGM Usaha (Miri, Sarawak, Malaysia), a provider of fire & lifesaving systems, construction & engineering, energy & safety systems, and logistics, marine & trading across Sarawak, Sabah, Brunei and Indonesia.

 ## How to run
 No build step, no frameworks. Plain HTML, CSS and JavaScript. Open index.html in a browser, or use VS Code Live Server.

 ## Structure
 -index.html: one-page homepage(hero, about, our business, coverage, contact, footer)
 -pages/about.html, construction.html, safety-system.html, marine.html: inner pages
 -css/style.css: the single stylesheet shared by every page
 -js/script.js: hero slideshow, contact form (sends via Web3Forms), Leaflet coverage map, active nav link, header shadow, business card toggles, mobile menu
 -images/: logo and photos

 ## Conventions
 -Pages inside pages/ use ../ paths (e.g. ../css/style.css, ../images/...)
 -Header, nav and footer are copied into every page. When you change one, update index.html and all files in pages/
 -CSS and JS links use ?v=N for each cache-busting. Bump the number on every page after editing style.css or script.js.
 -Brand colours: green #1d4a2c, red #c8202b (CSS variables --green, --red)
 -Fonts: Montserrat(headings), Open Sans(body), from Google Fonts
 -Icons: Font Awesome 6.5.1 from cdnjs

 ## Contact details (keep these consistent everywhere)
 -Nigel Goh, Business Development Executive
 -nigelgkt@egmusaha.com | +60 17-217 9899
 -Lot 2911, Boulevard Commercial Centre, Miri, Sarawak, Malaysia

 ## Preferences
 -Keep it simpel: no frameworks or build tools unless I ask
 -Make sure every change works on mobile
 -Don't commit or push unless I ask