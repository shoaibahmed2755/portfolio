import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Modal from '../components/Modal.jsx';
import { projects } from '../data/projects.js';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState('overview');
  useEffect(() => { setTab('overview'); }, [selected]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };
  return (
    <div className="container-section py-20">
      <SectionTitle eyebrow="Projects" title="Projects" subtitle="Some of my favorite works" />
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={setSelected} />
        ))}
      </motion.div>
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <div className="mb-4 flex items-center gap-2">
              <button onClick={() => setTab('overview')} className={`px-3 py-1.5 rounded-lg text-sm ${tab === 'overview' ? 'btn-primary !py-1.5' : 'btn-secondary'}`}>Overview</button>
              <button onClick={() => setTab('links')} className={`px-3 py-1.5 rounded-lg text-sm ${tab === 'links' ? 'btn-primary !py-1.5' : 'btn-secondary'}`}>Links</button>
            </div>
            {tab === 'overview' ? (
              <>
                <motion.img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-56 object-cover rounded-xl"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.p className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.25 }}>
                  {selected.long || selected.description}
                </motion.p>
                <motion.div className="mt-3 flex flex-wrap gap-2" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}>
                  {selected.tech.map((t) => (
                    <motion.span key={t} className="badge" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>{t}</motion.span>
                  ))}
                </motion.div>
              </>
            ) : (
              <div className="space-y-3">
                <div className="text-sm text-slate-400">Open links in a new tab</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    className={`btn-primary ${!selected.links?.demo || selected.links.demo === '#' ? 'pointer-events-none opacity-60' : ''}`}
                    href={selected.links?.demo && selected.links.demo !== '#' ? selected.links.demo : undefined}
                    target="_blank" rel="noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    className={`btn-secondary ${!selected.links?.source || selected.links.source === '#' ? 'pointer-events-none opacity-60' : ''}`}
                    href={selected.links?.source && selected.links.source !== '#' ? selected.links.source : undefined}
                    target="_blank" rel="noreferrer"
                  >
                    <Code className="w-4 h-4" /> Source Code
                  </a>
                </div>
                {(!selected.links?.demo || selected.links.demo === '#') && (!selected.links?.source || selected.links.source === '#') && (
                  <div className="text-sm text-slate-400">Links coming soon.</div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </Modal>
    </div>
  );
}
