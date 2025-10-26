import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle.jsx';
import { site } from '../data/site.js';
import { MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="container-section py-16 sm:py-20">
      <SectionTitle eyebrow="About" title="About Me" subtitle="A quick introduction" />
      <motion.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
        <motion.div className="glass rounded-2xl p-6" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
          <p className="leading-relaxed">{site.bio}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-500" />
              <div>
                <div className="text-sm text-slate-400">Location</div>
                <div className="font-medium">{site.location || '—'}</div>
              </div>
            </div>
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-brand-500" />
              <div>
                <div className="text-sm text-slate-400">Open to</div>
                <div className="font-medium">Full-time • Remote</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 gap-4" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">01</div>
            <div className="mt-2 font-semibold">Clean UI/UX</div>
            <p className="text-sm text-slate-400 mt-1">Modern, accessible, responsive interfaces.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">02</div>
            <div className="mt-2 font-semibold">Performance</div>
            <p className="text-sm text-slate-400 mt-1">Optimized builds and fast interactions.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">03</div>
            <div className="mt-2 font-semibold">Animations</div>
            <p className="text-sm text-slate-400 mt-1">Subtle motion for delightful UX.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">04</div>
            <div className="mt-2 font-semibold">Quality</div>
            <p className="text-sm text-slate-400 mt-1">Clean code, tests, and good DX.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
