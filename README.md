# Proximus — Subscription configuration (Step 1 prototype)

Interactive front-end-only prototype of Step 1 ("Select subscription") of the
MyProximus Enterprise subscription-configuration flow. No backend — all plan
data and filtering logic run client-side in `script.js`.

## Files
- `index.html` — markup
- `styles.css` — all styling (Lavender design tokens, Proximus colors)
- `script.js` — plan data, filter logic, and rendering

## Run locally
Just open `index.html` in a browser — no build step, no dependencies.

## Publish with GitHub Pages
1. Create a new repo (or use an existing one) and push these three files to it.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch (e.g. `main`) and folder `/ (root)`, then **Save**.
5. GitHub will publish at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two — that link is shareable for public testing.

## Notes
- The Proximus logo SVG is inlined directly in `index.html`.
- Everything (fonts fall back to system sans-serif, icons are inline SVG) is
  self-contained — nothing external is fetched, so it works on GitHub Pages
  with no extra config.
