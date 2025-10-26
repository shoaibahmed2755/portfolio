import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.button
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative w-full text-left rounded-2xl p-[1px] bg-gradient-to-br from-brand-500/40 to-cyan-400/40"
      onClick={() => onClick?.(project)}
    >
      <div className="relative overflow-hidden rounded-2xl glass">
        <img src={project.image} alt={project.title} className="h-40 sm:h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-slate-300">{project.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
