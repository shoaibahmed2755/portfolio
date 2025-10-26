import React, { useMemo } from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { certifications } from '../data/certifications.js';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {

  const grouped = useMemo(() => {
    const map = new Map();
    for (const c of certifications) {
      const list = map.get(c.year) || [];
      list.push(c);
      map.set(c.year, list);
    }
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, []);

  return (
    <div className="container-section py-20">
      <SectionTitle eyebrow="Certifications" title="Licenses & Certifications" subtitle="Official credentials, courses, and event recognitions" />
      <div className="space-y-10">
        {grouped.map(([year, items]) => (
          <div key={year}>
            <div className="mb-4 flex items-center gap-3">
              <div className="text-xl font-bold">{year}</div>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {items.map((c) => (
                <div key={c.id} className="glass rounded-2xl p-5 flex flex-col h-full">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 grid place-items-center w-10 h-10 rounded-lg bg-white/5 ring-1 ring-white/10">
                      <span className="text-xl leading-none" aria-hidden>{c.icon || '📜'}</span>
                    </div>
                    <div>
                      <div className="font-semibold leading-snug">{c.title}</div>
                      {c.provider && <div className="text-sm text-slate-400">{c.provider}</div>}
                      {c.credentialId && <div className="text-xs text-slate-400 mt-1">Credential ID: {c.credentialId}</div>}
                    </div>
                  </div>
                  {c.skills && c.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.skills.map((s) => <span key={s} className="badge">{s}</span>)}
                    </div>
                  )}
                  <div className="mt-auto pt-4">
                    {c.link ? (
                      <a className="btn-primary w-full justify-center" href={c.link} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4" /> Open</a>
                    ) : (
                      <button className="btn-secondary w-full justify-center" disabled title="Link not provided"><ExternalLink className="w-4 h-4" /> Open</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
