import React, { useState, useRef, useCallback } from 'react';
import { pastCommissions, Artwork } from '../data/portfolio';
import { SmartImage } from '../components/SmartImage';
import { ImageLightbox } from '../components/ImageLightbox';
import { getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';
import { 
  ChevronLeft, 
  ChevronRight, 
  Hammer, 
  MapPin, 
  Building, 
  Check, 
  Send, 
  AlertCircle, 
  Eye, 
  Calendar
} from 'lucide-react';

export const CommissionWork: React.FC = () => {
  // Horizontal Scroll Container Ref
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  // Mouse Drag to Scroll State
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftState, setScrollLeftState] = useState<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Form State & Validation
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Convert commissions for ImageLightbox inspection
  const commissionArtworks: Artwork[] = pastCommissions.map((comm) => ({
    id: comm.id,
    title: comm.title,
    category: 'SCULPTURE',
    medium: comm.medium,
    dimensions: `${comm.location} · Client: ${comm.client}`,
    year: comm.year,
    price: comm.type,
    image: comm.image,
    description: comm.description,
  }));

  // Update arrow states based on scroll position
  const checkScrollability = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  // Smooth scroll handler
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.min(scrollContainerRef.current.clientWidth * 0.8, 480);
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollability, 350);
    }
  };

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    isDraggingRef.current = false;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.4; // Scroll speed multiplier
    if (Math.abs(walk) > 5) {
      isDraggingRef.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
    checkScrollability();
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  const handleCardImageClick = (index: number) => {
    if (isDraggingRef.current) return;
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
      newErrors.message = 'Please describe your commission project, space, or idea.';
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

  return (
    <div className="pt-24 pb-20 sm:pt-36 sm:pb-32 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-tight">
            Commission Work
          </h1>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Monumental public sculptures, civic installations, architectural terracotta reliefs, and bespoke private salon commissions tailored to space and heritage.
          </p>
        </div>

        {/* COMMISSION SHOWCASE HEADER & SCROLL CONTROLS (NO ENCLOSING BOX) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200/70 pb-5">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
                Documented Public & Private Commissions
              </h2>
              <p className="text-xs sm:text-sm text-ink-600 font-sans mt-1">
                Swipe or use controls to browse selected civic monuments, corporate murals, and private installations ({pastCommissions.length} projects).
              </p>
            </div>

            {/* Slider Navigation Arrows & Swipe Hint */}
            <div className="flex items-center space-x-3 shrink-0">
              <span className="text-[11px] font-mono text-stone-500 hidden md:inline">
                Drag / Swipe to explore
              </span>

              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'bg-white hover:bg-ink-900 hover:text-white text-ink-900 border border-stone-200 shadow-sm active:scale-95'
                    : 'bg-stone-200/50 text-stone-400 border border-transparent cursor-not-allowed opacity-60'
                }`}
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'bg-white hover:bg-ink-900 hover:text-white text-ink-900 border border-stone-200 shadow-sm active:scale-95'
                    : 'bg-stone-200/50 text-stone-400 border border-transparent cursor-not-allowed opacity-60'
                }`}
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* HORIZONTAL SCROLL TRACK (SEAMLESS - SAME BACKGROUND, NO BOX CONFINEMENT) */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory ${
              isMouseDown ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
          >
            {pastCommissions.map((commission, idx) => (
              <div
                key={commission.id}
                className="w-[84vw] sm:w-[420px] md:w-[460px] lg:w-[480px] shrink-0 snap-start flex flex-col justify-between rounded-3xl bg-white border border-stone-200/70 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Artwork Image Container */}
                <div>
                  <div
                    onClick={() => handleCardImageClick(idx)}
                    className="group/img relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#F5F2EB] cursor-pointer mb-5"
                  >
                    <SmartImage
                      src={commission.image}
                      alt={commission.title}
                      objectFit="cover"
                      className="w-full h-full"
                      imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />

                    {/* Floating Year Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-ink-900/85 backdrop-blur-md text-[11px] font-mono text-white shadow-sm flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-amber-300" />
                      <span>{commission.year}</span>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-ink-900 font-semibold shadow-xs">
                      {commission.type}
                    </div>

                    {/* Hover Inspect Indicator */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-ink-900 text-xs font-semibold flex items-center space-x-1.5 shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Full View</span>
                      </div>
                    </div>
                  </div>

                  {/* Commission Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 leading-snug mb-3">
                    {commission.title}
                  </h3>

                  {/* Metadata: Location, Client, Medium */}
                  <div className="space-y-1.5 text-xs font-mono text-stone-600 mb-4 bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/50">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{commission.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">Client: {commission.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Hammer className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">Medium: {commission.medium}</span>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed line-clamp-3">
                    {commission.description}
                  </p>
                </div>

                {/* Footer Actions */}
                <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(`Hello Sanjay Rai, I would like to inquire about a commission similar to your project: "${commission.title}" (${commission.location}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Discuss Similar Work</span>
                  </a>

                  <button
                    onClick={() => handleCardImageClick(idx)}
                    aria-label="Inspect artwork image"
                    className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-ink-900 transition-all hover:scale-105 active:scale-95"
                    title="View Fullscreen"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMMISSION METHODOLOGY & ARCHIVAL INTEGRITY */}
        <div className="py-8 border-y border-stone-200/70">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
              The Commission Journey
            </h2>
            <p className="text-xs sm:text-sm text-ink-600 font-sans">
              From site orientation and clay maquettes to permanent architectural anchoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-stone-200/60 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-ink-900 text-base">Space & Ethos Dialogue</h3>
              <p className="text-xs text-ink-600 font-sans leading-relaxed">
                Initial curatorial consultation examining spatial light, architectural context, and cultural narrative.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/60 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-ink-900 text-base">Maquettes & Studies</h3>
              <p className="text-xs text-ink-600 font-sans leading-relaxed">
                Scaled graphite studies and terracotta maquettes sculpted for architectural approval.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/60 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-serif font-bold text-ink-900 text-base">Direct Studio Execution</h3>
              <p className="text-xs text-ink-600 font-sans leading-relaxed">
                Sanjay Rai personally chisels, molds, or paints the work at his studio in Kathmandu.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/60 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-serif font-bold text-ink-900 text-base">Installation & Certificate</h3>
              <p className="text-xs text-ink-600 font-sans leading-relaxed">
                White-glove delivery, structural mounting, and a signed Archival Authenticity Certificate.
              </p>
            </div>
          </div>
        </div>

        {/* COMMISSION ENQUIRY FORM (BLENDED NATURALLY WITH SAME BACKGROUND) */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-white/90 backdrop-blur-md p-6 sm:p-10 border border-stone-200/70 shadow-sm space-y-6">
          
          <div className="text-center space-y-2">
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
                placeholder="e.g. Maya Shrestha / Heritage Institution"
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
                placeholder="Describe your intended space (civic square, garden, atrium, residence), desired medium (granite, bronze, terracotta, canvas), dimensions, and anticipated timeline..."
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

      {/* FULLSCREEN IMAGE LIGHTBOX */}
      <ImageLightbox
        artworks={commissionArtworks}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
