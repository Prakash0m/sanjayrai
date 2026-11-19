import React, { useState, useEffect, useCallback } from 'react';
import { pastCommissions, CommissionItem } from '../data/portfolio';
import { SmartImage } from '../components/SmartImage';
import { getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';
import { ChevronLeft, ChevronRight, Hammer, MapPin, Building, Check, Send, AlertCircle } from 'lucide-react';

export const CommissionWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Form State & Validation
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const totalCommissions = pastCommissions.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCommissions);
  }, [totalCommissions]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCommissions) % totalCommissions);
  }, [totalCommissions]);

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext, isAutoPlaying]);

  // Form validation & submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 7) {
      newErrors.phone = 'Phone number must contain at least 7 digits.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your commission project, location or ideas.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Pre-compose WhatsApp inquiry message
    const waText = `Hello Sanjay Rai,\n\n*NEW COMMISSION ENQUIRY*\nName: ${formData.name}\nPhone: ${formData.phone}\nProject Details: ${formData.message}\n\nI would like to discuss commissioning an artwork.`;
    const waUrl = getWhatsAppUrl(waText);

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank');
  };

  const activeCommission: CommissionItem = pastCommissions[currentIndex];

  return (
    <div className="pt-24 pb-16 sm:pt-36 sm:pb-32 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* TOP: Commission Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs text-[11px] font-mono tracking-widest text-stone-700 uppercase">
            <Hammer className="w-3 h-3 text-sky-600" />
            <span>SITE-SPECIFIC SCULPTURE & MONUMENTS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-tight">
            Commission Work
          </h1>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Monumental public sculptures, civic installations, architectural terracotta reliefs, and bespoke private salon commissions tailored to space and heritage.
          </p>
        </div>

        {/* TOP REQUIREMENT: HORIZONTAL IMAGE SLIDER / CAROUSEL OF PAST COMMISSIONS */}
        <div 
          className="relative max-w-5xl mx-auto rounded-3xl bg-white p-6 sm:p-10 border border-stone-200/70 shadow-xl overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Section Eyebrow within card */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-semibold">
                PAST COMMISSIONS SLIDER · PROJECT {currentIndex + 1} OF {totalCommissions}
              </span>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                aria-label="Previous commission"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-ink-900 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next commission"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-ink-900 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Slider Active Item Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Image Box */}
            <div className="md:col-span-6">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF8F5] p-3 shadow-inner">
                <SmartImage
                  src={activeCommission.image}
                  alt={activeCommission.title}
                  objectFit="contain"
                  className="w-full h-full flex items-center justify-center bg-transparent"
                  imgClassName="object-contain w-full h-full filter drop-shadow-sm"
                  priority={true}
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-ink-900/80 backdrop-blur-md text-[10px] font-mono text-white">
                  {activeCommission.year}
                </div>
              </div>
            </div>

            {/* Commission Information */}
            <div className="md:col-span-6 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[10px] font-mono tracking-wider uppercase font-semibold">
                {activeCommission.type}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 leading-snug">
                {activeCommission.title}
              </h3>

              <div className="space-y-2 text-xs font-mono text-stone-500 pt-1">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{activeCommission.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>Client: {activeCommission.client}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hammer className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>Medium: {activeCommission.medium}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed pt-2">
                {activeCommission.description}
              </p>

              <div className="pt-4 flex items-center space-x-3">
                <a
                  href={getWhatsAppUrl(`Hello Sanjay Rai, I am inquiring regarding a commission similar to your project: "${activeCommission.title}" (${activeCommission.location}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold shadow-sm transition-all hover:scale-105"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>Discuss Similar Project</span>
                </a>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-1.5 mt-8 pt-6 border-t border-stone-100">
            {pastCommissions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to commission ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-6 h-1.5 bg-ink-900'
                    : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* BELOW REQUIREMENT: COMMISSION ENQUIRY FORM WITH BASIC VALIDATION */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-white p-6 sm:p-10 border border-stone-200/70 shadow-lg space-y-6">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase">
              <span>CUSTOM PROJECTS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
              Commission Enquiry Form
            </h2>
            <p className="text-xs sm:text-sm text-ink-600 font-sans">
              Commission an original sculpture, monument, or bespoke painting. Please complete the details below to initiate direct correspondence with Sanjay Rai.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4 pt-2">
            
            {/* Name Field */}
            <div>
              <label htmlFor="comm-name" className="block text-xs font-mono font-semibold uppercase text-stone-700 mb-1.5">
                Full Name *
              </label>
              <input
                id="comm-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder="e.g. Maya Shrestha / Institution Name"
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

            {/* Phone Field */}
            <div>
              <label htmlFor="comm-phone" className="block text-xs font-mono font-semibold uppercase text-stone-700 mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                id="comm-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                placeholder="e.g. +977 9841 000000 / +1 (555) 000-0000"
                className={`w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border text-ink-900 text-sm focus:outline-none transition-all ${
                  errors.phone ? 'border-rose-400 ring-1 ring-rose-400' : 'border-stone-200 focus:border-ink-900'
                }`}
              />
              {errors.phone && (
                <div className="flex items-center space-x-1 text-rose-600 text-xs mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </div>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="comm-message" className="block text-xs font-mono font-semibold uppercase text-stone-700 mb-1.5">
                Commission Details & Vision *
              </label>
              <textarea
                id="comm-message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                placeholder="Describe your intended space (civic square, garden, residence), desired medium (granite, bronze, terracotta, paper), dimensions, and anticipated timeline..."
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
                <span>Submit Commission Enquiry</span>
              </button>
            </div>

            {/* Success Banner */}
            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Enquiry prepared! WhatsApp has been opened with your pre-filled inquiry. You can also send directly.</span>
              </div>
            )}

            <p className="text-[11px] text-stone-400 text-center font-mono pt-1">
              Submissions directly notify Sanjay Rai’s studio desk in Kathmandu.
            </p>

          </form>

        </div>

      </div>
    </div>
  );
};
