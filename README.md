# Futuristic Portfolio
A sleek, animated developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Dark/light theme, smooth transitions, SEO tags, and an easy data-driven setup.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌐 Live Demo  
👉 https://shoaib-ahmed-portfolio.vercel.app/

---

## 🚀 Features

- **Modern UI** with glassmorphism, gradients, and section-based layout
- **Dark/Light mode** with persistent theme using context
- **Smooth animations** via Framer Motion
- **SEO ready** using `react-helmet-async`
- **Project, Skills, Experience, Education, Certifications, Testimonials, Contact** sections
- **Typed hero text** using `react-typed`
- **Data-driven content** from `src/data/*`
- **SPA routing ready** with `_redirects` for Netlify

---

## 🖼️ Preview

![Preview](https://github.com/shoaibahmed2755/portfolio/blob/main/Page.png)

> Replace with real UI screenshots when available.

---

## 🧩 Project Structure

```
root/
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   └── images/
│       └── shoaib.jpeg
├── src/
│   ├── components/
│   ├── context/            # ThemeContext (dark/light)
│   ├── data/               # site, projects, skills, etc.
│   ├── sections/           # Hero, Projects, Skills, Experience, ...
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ⚙️ Installation

```bash
# Clone
git clone https://github.com/shoaibahmed2755/portfolio.git
cd portfolio

# Install
npm install

# Dev
npm run dev

# Production build
npm run build

# Preview
npm run preview
```

Open:  
```
http://localhost:5173
```

---

## 🔧 Customize Content

Edit the data files to update the portfolio without touching components:

- `src/data/site.js` — name, title, roles, bio, socials, resume URL, contact form (Formspree)
- `src/data/projects.js` — featured projects
- `src/data/skills.js` — skills list
- `src/data/experience.js` — experience
- `src/data/education.js` — education
- `src/data/certifications.js` — certs
- `src/data/testimonials.js` — testimonials

> For contact form: set `formspreeId` in `src/data/site.js` to enable the form. If omitted, the form falls back to `mailto:`.

---

## 🛠️ Built With

- ⚛️ React 18 — UI
- ⚡ Vite 5 — build tool & dev server
- 🎨 Tailwind CSS 3 — styling
- 🕺 Framer Motion 11 — animations
- 🔍 react-helmet-async — SEO
- 🧭 React Router-style anchors — section navigation
- 🧰 lucide-react — icons
- ⌨️ react-typed — hero typing effect

---

## 📦 Deployment

- **Vercel**
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Node: 18+ (20/22 recommended)
  - Make sure `node_modules` and `dist` are NOT committed (see `.gitignore`).

- **Netlify**
  - `_redirects` is included for SPA routing
  - Publish directory: `dist`

---

## 👨‍💻 Contributors

| Name | Role | Photo | LinkedIn |
|------|------|-------|----------|
| **Shoaib Ahmed** | Developer & Designer | ![Shoaib](https://raw.githubusercontent.com/shoaibahmed2755/Twinenergy/main/Contri/Shoaib.png) | [LinkedIn](https://www.linkedin.com/in/shoaib-ahmed-b05973274/) |

---

## 🤝 Contributing

```bash
git fork https://github.com/shoaibahmed2755/portfolio.git
cd portfolio
git checkout -b feature-name
# make changes
git commit -m "feat: add new feature"
git push origin feature-name
```

Open a Pull Request on GitHub.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🌟 Acknowledgments

- Tailwind CSS for rapid styling
- Framer Motion for elegant animations
- The open-source community for inspiration

---

# Commit & Push in CMD
```bash
git add README.md
git commit -m "docs: enhanced README with badges, demo, features, and usage"
git push origin main
```
