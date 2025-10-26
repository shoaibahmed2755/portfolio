import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { site } from '../data/site.js';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', hp: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, success: null, error: 'Please fill out all fields.' });
      return;
    }
    if (form.hp) {
      return;
    }
    if (!site.formspreeId) {
      const subject = encodeURIComponent('Portfolio Contact from ' + form.name);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
      // Try Gmail web compose first
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${subject}&body=${body}`;
      const win = window.open(gmailUrl, '_blank');
      // If popup blocked or not available, fallback to default email client
      if (!win) {
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      }
      return;
    }
    try {
      setStatus({ loading: true, success: null, error: null });
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact — ${form.name}`,
          _subject: `Portfolio Contact — ${form.name}`,
          _replyto: form.email,
          page: typeof window !== 'undefined' ? window.location.href : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          referrer: typeof document !== 'undefined' ? document.referrer : ''
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ loading: false, success: 'Thanks! I will get back to you soon.', error: null });
        setForm({ name: '', email: '', message: '' });
      } else {
        const err = Array.isArray(data?.errors)
          ? data.errors.map((e) => e.message).join(', ')
          : (data?.error || 'Something went wrong. Please try again later.');
        setStatus({ loading: false, success: null, error: err });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Network error. Please try again later.' });
    }
  }

  return (
    <div id="contact" className="container-section py-20">
      <SectionTitle eyebrow="Contact" title="Get In Touch" subtitle="Have a project or role in mind? Let's talk." />
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
          {/* Honeypot (off-screen, not display:none so basic bots will see it) */}
          <div className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden opacity-0" aria-hidden>
            <label>Leave this field empty</label>
            <input name="hp" value={form.hp} onChange={onChange} tabIndex="-1" autoComplete="off" />
          </div>
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" value={form.name} onChange={onChange} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" placeholder="Your name" autoComplete="name" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" placeholder="you@example.com" autoComplete="email" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={onChange} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" placeholder="Tell me a bit about your project or question" required />
          </div>
          {status.error && <div className="text-sm text-red-400">{status.error}</div>}
          {status.success && <div className="text-sm text-green-400">{status.success}</div>}
          <button type="submit" className="btn-primary" disabled={status.loading}>
            <Send className="w-4 h-4" />
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="glass rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-brand-400" />
            <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-brand-400" />
            <span>{site.location || '—'}</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10">
            <div className="relative w-full aspect-video">
              <iframe
                title="Bangalore Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.45,12.8,77.85,13.15&layer=mapnik&marker=12.9716%2C77.5946"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
