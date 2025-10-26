import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle.jsx';
import { education } from '../data/education.js';

export default function Education() {
  return (
    <div className="container-section py-20">
      <SectionTitle eyebrow="Education" title="Education" />
      <div className="relative">
        <div className="pointer-events-none absolute left-3 sm:left-4 top-0 bottom-0">
          <div className="absolute top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-500/40 via-white/20 to-cyan-400/40" />
          <div className="absolute top-0 bottom-0 w-[8px] -translate-x-1/2 bg-gradient-to-b from-brand-500/10 via-white/5 to-cyan-400/10 blur-md rounded-full" />
        </div>
        <motion.ul className="space-y-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
          {education.map((e, i) => (
            <motion.li key={i} className="relative pl-10 sm:pl-14" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              <div className="absolute left-3 sm:left-4 top-2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 ring-2 ring-white/20 shadow-[0_0_18px_rgba(124,92,255,0.35)]" />
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  {e.logo && <img src={e.logo} alt={e.institution} className="w-8 h-8 rounded-md object-contain" />}
                  <div className="font-semibold">{e.degree}</div>
                </div>
                <div className="text-sm text-slate-400 mt-1">{e.institution} • {e.start} – {e.end}</div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
