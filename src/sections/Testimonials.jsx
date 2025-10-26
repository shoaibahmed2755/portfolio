import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { testimonials } from '../data/testimonials.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="container-section py-20">
      <SectionTitle eyebrow="Testimonials" title="What People Say" />
      <div className="relative glass rounded-2xl p-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <button className="btn-secondary p-2" onClick={prev} aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div key={index} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
                <div className="flex flex-col items-center text-center">
                  <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="text-lg italic">“{testimonials[index].quote}”</p>
                  <div className="mt-3 font-semibold">{testimonials[index].name}</div>
                  <div className="text-sm text-slate-400">{testimonials[index].title}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button className="btn-secondary p-2" onClick={next} aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}
