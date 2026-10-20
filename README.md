# Ajolaye Dennis — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.

## Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + custom CSS
- **Email**: EmailJS
- **Hosting**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

## Project screenshots

Install Playwright's Chromium browser once, then capture full-page WebP previews
for the live project URLs in `src/data/projects.js`:

```bash
npx playwright install chromium
npm run screenshots
```

The script saves each preview to `public/projects/<slug>.webp`. Project cards
use those local images first and fall back to a hosted screenshot if an image
is unavailable. Replace `liveUrl` values in `src/data/projects.js` with the
final deployment URLs before capturing.

## Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

Then update `.env` with your actual keys from [emailjs.com](https://emailjs.com).
The contact form needs `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
and `VITE_EMAILJS_PUBLIC_KEY`. Until all three are configured, the form shows
an explicit message and the direct email link remains available.

## Project Structure

```
src/
  components/
    layout/     # Navbar, Footer
    sections/   # Hero, About, Projects, Skills, Contact
    ui/         # ProjectCard, SkillBar, SkillGroup, ContactForm, TechTag
  data/         # projects.js, skills.js, socials.js  ← update content here
  hooks/        # useScrollSpy.js
```

## Updating Content

All portfolio content lives in `src/data/`:
- **Projects**: edit `projects.js`
- **Skills**: edit `skills.js`
- **Social links**: edit `socials.js`

## Deployment

Deployed automatically to Vercel on push to `main`.

Add the three `VITE_EMAILJS_*` environment variables in your Vercel project settings.
