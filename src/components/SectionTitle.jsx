import React from 'react';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`${alignCls} mb-8`}>
      {eyebrow && <div className="badge mb-2">{eyebrow}</div>}
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 mt-2">{subtitle}</p>}
    </div>
  );
}
