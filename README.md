# Futuristic Portfolio (React + Vite + Tailwind + Framer Motion)

A modern, fully responsive personal portfolio with glass/gradient aesthetics, smooth animations, dark/light mode, and deploy-ready setup.

## Tech
- React 18, Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router (anchors based)
- react-helmet-async (SEO)
- lucide-react (icons)
- react-typed (hero typing)

## Getting Started
1. Install dependencies:
   - npm install
2. Start dev server:
   - npm run dev
3. Build for production:
   - npm run build
4. Preview build:
   - npm run preview

## Customize
- Edit `src/data/site.js` to set your name, title, bio, roles, social links, and resume URL.
- Add your projects in `src/data/projects.js`.
- Update education, experience, skills, and testimonials in `src/data/*`.
- Replace `public/favicon.svg` if you wish. Add an external resume link in `site.resumeUrl` or host a file at a public URL.
- For contact, set `formspreeId` in `src/data/site.js` or the form will fallback to a mailto link.

## Deploy
- Netlify: this project includes `public/_redirects` for SPA routing. Drag-and-drop the `dist` folder or connect repo.
- Vercel: just import the repo and use the default Vite settings.

## License
MIT
