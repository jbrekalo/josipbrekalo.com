# josipbrekalo.com

Source of my portfolio, live at [josipbrekalo.com](https://josipbrekalo.com).

It is a single static page: no framework, no build step, no dependencies.

## What is in here

- `index.html`: the whole page, semantic HTML with JSON-LD for the person behind it
- `assets/css/site.css`: one stylesheet, custom properties for the palette, grid and flex for layout
- `assets/js/site.js`: one custom element, `<before-after>`, that drives the screenshot comparison from a native range input, so it works with keyboard and screen readers
- `assets/fonts/`: Funnel Display and Funnel Sans, self-hosted under the SIL Open Font License, so no visitor data goes to a font CDN
- `assets/work/`: screenshots as WebP, served with `srcset`

## Run it locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Notes

Screenshots show stores of the PharmaSGP group. Brand names and campaign imagery belong to their owners.

The code is here to be read. The texts and images are not licensed for reuse.
