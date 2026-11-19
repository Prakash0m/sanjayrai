import React, { useState } from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message or enquiry.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Compose pre-filled WhatsApp message as well for instant delivery
    const text = `Hello Sanjay Rai,\n\n*CONTACT FORM MESSAGE*\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const waUrl = getWhatsAppUrl(text);

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-16 sm:pt-36 sm:pb-32 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Page Heading: Exact Requirement: "Get in Touch" */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs text-[11px] font-mono tracking-widest text-stone-700 uppercase">
            <Mail className="w-3 h-3 text-sky-600" />
            <span>CORRESPONDENCE & VISITS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-tight">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base text-ink-600 max-w-xl mx-auto font-sans leading-relaxed">
            Connect directly with Sanjay Rai’s studio archive in Kathmandu for acquisitions, museum curation, lectures, or private commissions.
          </p>
        </div>

        {/* 2-Column Grid: Left: Contact Details Block / Right: Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          
          {/* LEFT: CONTACT DETAILS BLOCK (Address/Location, Phone, Email) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-stone-200/70 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 font-semibold">
                  STUDIO ARCHIVE DESK
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink-900">
                  Contact Information
                </h3>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 pt-2">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                    Studio Location
                  </span>
                  <p className="text-xs sm:text-sm text-ink-800 font-sans font-medium leading-relaxed">
                    {siteConfig.studioLocation}
                  </p>
                  <p className="text-[11px] text-stone-400 font-mono">
                    Bagmati Province, Nepal
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                    Direct Phone / WhatsApp
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`tel:+${siteConfig.whatsAppNumber}`}
                      className="text-xs sm:text-sm text-ink-800 font-sans font-medium hover:text-emerald-700 transition-colors block"
                    >
                      {siteConfig.phoneFormatted}
                    </a>
                    <a
                      href={getWhatsAppUrl("Hello Sanjay Rai, I am calling / messaging from your portfolio website.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-medium hover:bg-emerald-200 transition-colors"
                    >
                      <WhatsAppIcon className="w-2.5 h-2.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-stone-400 font-mono">
                    Studio direct line & WhatsApp chat
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs sm:text-sm text-ink-800 font-sans font-medium hover:text-sky-700 transition-colors block"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-[11px] text-stone-400 font-mono">
                    Curatorial and acquisition inquiries
                  </p>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="flex items-start space-x-4 pt-2 border-t border-stone-100">
                <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                    Visiting Hours
                  </span>
                  <p className="text-xs text-ink-700 font-sans">
                    {siteConfig.studioHours}
                  </p>
                  <p className="text-[11px] text-stone-400 font-mono">
                    Studio visits by prior appointment
                  </p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="rounded-3xl bg-[#25D366] text-white p-6 shadow-lg shadow-emerald-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-100">
                  FASTEST RESPONSE
                </span>
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-serif text-xl font-bold">
                Instant WhatsApp Connection
              </h4>
              <p className="text-xs text-emerald-50 font-sans leading-relaxed">
                Connect directly with Sanjay Rai’s studio coordinator on WhatsApp for immediate availability and scheduling.
              </p>
              <a
                href={getWhatsAppUrl("Hello Sanjay Rai, I would like to get in touch with your studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-white text-emerald-900 font-semibold text-xs tracking-wide shadow-xs transition-all hover:bg-emerald-50 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM (Name, Email, Message, Submit Button) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border border-stone-200/70 shadow-lg space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 font-semibold">
                  SEND A DIRECT MESSAGE
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink-900">
                  Correspondence Form
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Please provide your contact information and details. We will respond promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4 pt-1">
                
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-semibold uppercase text-stone-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Ramesh Karki / Collector / Curator"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border text-ink-900 text-sm focus:outline-none transition-all ${
                      errors.name ? 'border-rose-400 ring-1 ring-rose-400' : 'border-stone-200 focus:border-ink-900'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center space-x-1 text-rose-600 text-xs mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-semibold uppercase text-stone-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. yourname@example.com"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border text-ink-900 text-sm focus:outline-none transition-all ${
                      errors.email ? 'border-rose-400 ring-1 ring-rose-400' : 'border-stone-200 focus:border-ink-900'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-1 text-rose-600 text-xs mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-semibold uppercase text-stone-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Share your inquiry, acquisition interest, or exhibition proposal..."
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border text-ink-900 text-sm focus:outline-none transition-all resize-none ${
                      errors.message ? 'border-rose-400 ring-1 ring-rose-400' : 'border-stone-200 focus:border-ink-900'
                    }`}
                  />
                  {errors.message && (
                    <div className="flex items-center space-x-1 text-rose-600 text-xs mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-ink-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg shadow-black/10 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

                {/* Success Banner */}
                {submitted && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your message has been composed and WhatsApp opened. We will get back to you shortly!</span>
                  </div>
                )}

                <p className="text-[11px] text-stone-400 text-center font-mono pt-1">
                  Confidential inquiry. Your email and message will never be shared.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
