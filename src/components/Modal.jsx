import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div className="relative glass rounded-2xl max-w-2xl w-[92%] p-6 z-[61] border border-white/10 max-h-[85vh] overflow-y-auto" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <button className="btn-secondary p-2" onClick={onClose} aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-w-none">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
