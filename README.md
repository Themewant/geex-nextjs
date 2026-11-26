# Geex Next

Geex is a Next.js App Router dashboard template with TypeScript, Bootstrap, and plain CSS.

## Install and run

Install Node.js 20.9 or newer and npm. Open a terminal in the extracted `geex-next` folder.

```bash
npm ci
npm run dev
```

Open http://localhost:3000 for the dashboard or http://localhost:3000/landing for the showcase. The banking, crypto, and invoicing dashboards are at `/index-2`, `/index-3`, and `/index-4`.

To run a production preview, use `npm run build` and then `npm start`. `npm run lint` checks the source. Deploy the production build to a host that supports Next.js App Router. Use HTTPS for the live preview.

## Customize

| Path | What to change |
| --- | --- |
| `src/app` | Page routes and route-group layouts. Parenthesized group names do not appear in the URL. |
| `src/components` | Shared header, sidebar, theme customizer, resource loading, and demo forms. |
| `src/data/blog-posts.ts` | Article titles, categories, images, and paragraphs. Give every post a unique slug. The listing and detail pages use the same records. |
| `public/assets/css/style.css` | Dashboard styles and component rules. |
| `public/landing-assets/scss/style.css` | Showcase styles. |
| `public/assets/js/main.js` | Dashboard widget initialization and cleanup, chart series, and sample calendar events. |

Open the customizer to preview light and dark themes, LTR and RTL directions, and side or top navigation. Replace sample content and imagery before using the template for your own site.

## Demo behavior

- Tasks, contacts, calendar events, and article comments created in the demo are stored in the current browser. Clear the site's browser data to reset them. If embedded preview storage is blocked, the new entries stay available for that preview session.
- Chat messages appear in the open conversation for the current page session.
- Sign-in, registration, password reset, and verification demonstrate form behavior. Connect an authentication provider for a production account flow.
- Dashboard charts, invoice cards, file lists, and other sample displays use illustrative data.

## Third-party credits

- [Bootstrap](https://getbootstrap.com/) for CSS components, tabs, and accordions.
- [jQuery](https://jquery.com/) and [jQuery UI](https://jqueryui.com/) for dashboard controls and date pickers.
- [Swiper](https://swiperjs.com/), [ApexCharts](https://apexcharts.com/), [FullCalendar](https://fullcalendar.io/), [Dragula](https://github.com/bevacqua/dragula), and [Nice Select 2](https://github.com/bluzky/nice-select2) for interactive widgets.
- [GSAP](https://gsap.com/), [SplitType](https://github.com/lukePeavey/SplitType), and [Font Awesome](https://fontawesome.com/) for landing-page effects and icons.
- [Unicons](https://iconscout.com/unicons), [Jost](https://fonts.google.com/specimen/Jost), [Manrope](https://fonts.google.com/specimen/Manrope), and [Rubik](https://fonts.google.com/specimen/Rubik). Some styles and fonts use their original CDN URLs.
- Template artwork and sample images originate from Geex's source assets. Check redistribution terms separately from preview usage when preparing a marketplace package.

## Version notes

### 0.1.0 - 25 November 2026

- Converted the dashboard and showcase to the Next.js App Router.
- Added internal Link navigation, data-driven article routes, and local demo form behavior.
- Checked the production routes in desktop and mobile Chromium.
