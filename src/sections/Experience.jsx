import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle.jsx';
import { experience } from '../data/experience.js';

export default function Experience() {
  return (
    <div className="container-section py-20">
      <SectionTitle eyebrow="Experience" title="Experience" />
      <motion.div className="grid gap-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
        {experience.map((job, idx) => (
          <motion.div key={idx} className="glass rounded-2xl p-6" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-semibold text-lg">{job.role} • <span className="text-brand-400">{job.company}</span></div>
              <div className="text-sm text-slate-400">{job.start} – {job.end}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-300">
              {job.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
