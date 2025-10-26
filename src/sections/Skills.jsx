import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle.jsx';
import { skills } from '../data/skills.js';

export default function Skills() {
  return (
    <div className="container-section py-20">
      <SectionTitle eyebrow="Skills" title="Skills" subtitle="Tools and technologies I use" />
      <motion.div className="grid md:grid-cols-2 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }}>
        {Object.entries(skills).map(([group, items]) => (
          <motion.div key={group} className="glass rounded-2xl p-6" initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
            <div className="font-semibold text-lg mb-4">{group}</div>
            <div className="space-y-4">
              {items.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{s.name}</span>
                    <span className="text-slate-400">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
