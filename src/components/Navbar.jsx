import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { site } from '../data/site.js';

const links = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'education', label: 'Education' },
  { href: 'experience', label: 'Experience' },
  { href: 'projects', label: 'Projects' },
  { href: 'skills', label: 'Skills' },
  { href: 'certifications', label: 'Certifications' },
  { href: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }) => (
    <>
      {links.map((l) => (
        <a key={l.href} href={`#${l.href}`} onClick={() => onClick && onClick()} className="text-[13px] md:text-sm text-slate-300 hover:text-white transition">
          {l.label}
        </a>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="container-section py-3 sm:py-4">
        <div className="glass rounded-2xl px-3 sm:px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">{site.name}</a>
          <div className="hidden md:flex items-center gap-5">
            <NavLinks />
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={toggle} className="btn-secondary p-2">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            {site.resumeUrl && site.resumeUrl !== '#' && (
              <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary hidden sm:inline-flex">
                <Download className="w-4 h-4" /> Resume
              </a>
            )}
            <button className="md:hidden btn-secondary p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}
