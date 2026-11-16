import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Check, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { InstagramIcon, FacebookIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    interest: 'General Inquiry',
    artworkTitle: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-filled WhatsApp message
    const lines = [
      `*Inquiry for Sanjay Rai (Bantawa)*`,
      `*Name:* ${formData.name}`,
      `*Contact:* ${formData.emailOrPhone}`,
      `*Inquiry Type:* ${formData.interest}`,
      formData.artworkTitle ? `*Artwork:* ${formData.artworkTitle}` : null,
      `*Message:* ${formData.message || 'I am interested in discussing your artworks.'}`,
    ].filter(Boolean).join('\n');

    const whatsappUrl = getWhatsAppUrl(lines);
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span>ACQUISITIONS &amp; COMMISSIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
            Inquire Regarding the Bantawa's Works
          </h2>
          <p className="mt-3 text-base text-ink-600">
            For collectors, galleries, curators, and institutional acquisitions. Direct connection with Sanjay Rai’s studio in Kathmandu.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-stone-200/80 space-y-4">
              <h3 className="font-serif text-xl font-bold text-ink-900">
                Studio &amp; Archive Representation
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                Studio visits are arranged by prior appointment for curators, researchers, and prospective collectors.
              </p>

              <div className="space-y-3 pt-3 border-t border-stone-100 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-ink-700">
                  <MapPin className="w-4 h-4 text-sky-600 mt-1 flex-shrink-0" />
                  <span>{siteConfig.studioLocation}</span>
                </div>

                <div className="flex items-center space-x-3 text-ink-700">
                  <Mail className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-sky-600 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-ink-700">
                  <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>+{siteConfig.whatsAppNumber} (Direct Line)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-200">
                  Instant Response
                </span>
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>

              <h4 className="font-serif text-xl font-bold text-white">
                Chat Directly on WhatsApp
              </h4>

              <p className="text-xs text-emerald-100 leading-relaxed font-sans">
                Prefer immediate correspondence? Connect with our studio archive desk directly via WhatsApp.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center space-x-2 w-full py-3 rounded-2xl bg-white text-emerald-900 font-semibold text-xs tracking-wide shadow transition-all hover:bg-emerald-50 active:scale-95"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl glass-card text-xs font-medium text-ink-700 hover:text-ink-900 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl glass-card text-xs font-medium text-ink-700 hover:text-ink-900 transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-9 rounded-3xl border border-stone-200/80 shadow-glass">
              
              <h3 className="font-serif text-2xl font-bold text-ink-900 mb-1">
                Direct Studio Inquiry
              </h3>
              <p className="text-xs text-ink-500 mb-6 font-sans">
                Submissions automatically launch pre-formatted WhatsApp or email correspondence.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-ink-600 uppercase mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Arthur Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-stone-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-ink-600 uppercase mb-1.5">
                      Email or WhatsApp Phone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+977... or name@gallery.com"
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-stone-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-ink-600 uppercase mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-stone-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                    >
                      <option value="Artwork Acquisition">Artwork Acquisition</option>
                      <option value="Exhibition / Curatorial Loan">Exhibition / Curatorial Loan</option>
                      <option value="Monument Commission">Public Monument Commission</option>
                      <option value="Studio Monograph Request">Studio Monograph Request</option>
                      <option value="Press & Interview">Press &amp; Interview</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-ink-600 uppercase mb-1.5">
                      Specific Artwork (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Form and Being III"
                      value={formData.artworkTitle}
                      onChange={(e) => setFormData({ ...formData, artworkTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-stone-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-ink-600 uppercase mb-1.5">
                    Your Message / Institutional Context
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please mention your interest, collection details, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-stone-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-ink-900 hover:bg-black text-white text-xs font-semibold tracking-wider uppercase shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send Inquiry Directly via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-ink-400 text-center mt-2.5 font-mono">
                    This launches WhatsApp with your details pre-composed.
                  </p>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>WhatsApp launched! Please press Send in your WhatsApp chat window.</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
