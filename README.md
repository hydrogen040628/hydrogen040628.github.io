# hydrogen040628.github.io

Personal portfolio website built from the [Simplefolio](https://github.com/cobiwave/simplefolio) template
(by Jacobo Martínez), customized for [@hydrogen040628](https://github.com/hydrogen040628).

## Tech stack

- HTML5 + SCSS (Bootstrap 5)
- Vanilla JavaScript (ScrollReveal, Vanilla-Tilt)
- Bundled with [Parcel](https://parceljs.org/)

## Local development

```bash
npm install      # install dependencies
npm start        # run dev server (http://localhost:1234)
npm run build    # build the production site into ./dist
```

## Deployment

The site is deployed to GitHub Pages automatically by the
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow on every push to `main`.

To enable it once: in the repository **Settings → Pages**, set **Source** to **GitHub Actions**.

## Customization

Edit `src/index.html` to fill in your details, projects, and links, and replace the
images in `src/assets/` (`profile.jpg`, `project.jpg`, `resume.pdf`, `favicon.png`).

## Credits

Template: [Simplefolio](https://github.com/cobiwave/simplefolio) — MIT/ISC licensed. See `LICENSE.md`.
