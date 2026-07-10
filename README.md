# Dropping A Log — Website

A single-page static site for the podcast. No build tools, no frameworks — just `index.html`, `style.css`, and `script.js`.

## How to put this on GitHub Pages

1. Copy these three files (`index.html`, `style.css`, `script.js`) into the root of your repo — the same repo that's already set up.
2. Commit and push:
   ```
   git add index.html style.css script.js
   git commit -m "Add podcast site"
   git push
   ```
3. On GitHub, go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment," set **Source** to `Deploy from a branch`, pick the branch (usually `main`), and folder `/ (root)`. Save.
5. GitHub will give you a URL like `https://yourusername.github.io/repo-name/` within a minute or two. That's the live site.

### Custom domain (optional)
If you want `droppingalog.com` (or similar) instead of the github.io URL:
- Add a `CNAME` file to the repo root containing just your domain, e.g. `droppingalog.com`
- Point your domain's DNS to GitHub Pages (an `A` record to GitHub's IPs, or a `CNAME` record if using a subdomain) — GitHub's Pages settings page will show you exactly what's needed once you type the domain in there.

## About the contact section
This is a static site, so the email on the Contact section is a plain `mailto:` link (opens the visitor's email app) rather than a working form — GitHub Pages can't run backend code to receive form submissions. If you want an actual on-page contact form later, a free service like Formspree or Getform can be plugged in with just a form `action` URL and no backend needed. Happy to add that when you're ready.

## Editing content
Everything text-wise lives in `index.html` — episode titles/descriptions, the about copy, the email address. Colors and fonts are all defined as CSS variables at the top of `style.css` under `:root` if you want to tweak the red/black palette later.
