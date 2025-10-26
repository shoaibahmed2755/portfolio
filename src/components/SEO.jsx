import React from 'react';
import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

export default function SEO({ title, description, url }) {
  const t = title ? `${title} — ${site.name}` : `${site.name} — ${site.title}`;
  const d = description || site.bio;
  const u = url || '/';
  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={u} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
