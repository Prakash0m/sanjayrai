import React, { useState, useEffect, useCallback, useRef } from 'react';
import { pastCommissions, Artwork } from '../data/portfolio';
import { SmartImage } from '../components/SmartImage';
import { ImageLightbox } from '../components/ImageLightbox';
import { getWhatsAppUrl } from '../config/site';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Send, 
  AlertCircle, 
  Eye, 
  Play,
  Pause
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const CommissionWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Drag / Swipe State
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const hasMovedRef = useRef<boolean>(false);

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

  const totalCommissions = pastCommissions.length;

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCommissions);
  }, [totalCommissions]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCommissions) % totalCommissions);
  }, [totalCommissions]);

  // AUTOMATIC AUTO-RUN / SPIN SLIDESHOW (Velvety Smooth Gliding Pace)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || isDragging || lightboxOpen) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2800);

    return () => clearInterval(interval);
  }, [handleNext, isAutoPlaying, isHovered, isDragging, lightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, lightboxOpen]);

  // Drag / Swipe handlers
  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setDragDelta(0);
    setIsDragging(true);
    hasMovedRef.current = false;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || startX === null) return;
    const delta = clientX - startX;
    setDragDelta(delta);
    if (Math.abs(delta) > 6) {
      hasMovedRef.current = true;
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    if (dragDelta > 45) {
      handlePrev();
    } else if (dragDelta < -45) {
      handleNext();
    }
    setIsDragging(false);
    setStartX(null);
    setDragDelta(0);
  };

  const handleCardClick = (index: number) => {
    if (hasMovedRef.current) return;
    if (index === currentIndex) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    } else {
      setCurrentIndex(index);
    }
  };

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

  // Form submission
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

    const waText = `Hello Sanjay Rai,\n\n*NEW COMMISSION ENQUIRY*\nName: ${formData.name}\nPhone: ${formData.phone}\nProject Details: ${formData.message}\n\nI would like to discuss commissioning an artwork.`;
    const waUrl = getWhatsAppUrl(waText);
    window.open(waUrl, '_blank');
  };

  // Responsive spacing between card centers in 3D perspective
  const cardSpacing = windowWidth < 640 ? 170 : windowWidth < 1024 ? 220 : 260;

  return (
    <div className="pt-24 pb-20 sm:pt-36 sm:pb-32 bg-[#FAF8F5] min-h-screen">
      <SEO
        title="Commission Public Monuments & Murals — Sanjay Rai (Bantawa) | Architectural Sculpture"
        description="Commission site-specific civic monuments, architectural terracotta reliefs, and corporate murals by master Nepali sculptor Sanjay Rai. Serving institutions, heritage spaces, and private collectors globally."
        keywords="Commission Sculpture Nepal, Public Monuments Kathmandu, Terracotta Relief Commission, Sanjay Rai Sculptor, Architectural Art Nepal, Civic Sculpture Imadol Lalitpur, #ContemporarySculpture, #PublicArtNepal"
        canonicalPath="/commission"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-tight">
            Commission Work
          </h1>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Monumental public sculptures, civic installations, architectural terracotta reliefs, and bespoke private salon commissions tailored to space and heritage.
          </p>
        </div>

        {/* 3D RUNNING / SPINNING CAROUSEL TRACK (BOX VITRA ONLY IMAGE) */}
        <div className="relative select-none">
          
          {/* Controls Bar: Play/Pause, Arrow Buttons */}
          <div className="flex items-center justify-end mb-4 px-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
                className="w-8 h-8 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/80 flex items-center justify-center transition-all shadow-xs"
                title={isAutoPlaying ? 'Pause auto-run' : 'Resume auto-run'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              <button
                onClick={handlePrev}
                aria-label="Previous commission"
                className="w-9 h-9 rounded-full bg-white hover:bg-ink-900 hover:text-white text-ink-900 border border-stone-200/80 flex items-center justify-center transition-all shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next commission"
                className="w-9 h-9 rounded-full bg-white hover:bg-ink-900 hover:text-white text-ink-900 border border-stone-200/80 flex items-center justify-center transition-all shadow-xs active:scale-95"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 3D Carousel Stage */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleEnd();
            }}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onTouchStart={(e) => {
              setIsHovered(true);
              handleStart(e.touches[0].clientX);
            }}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={() => {
              setIsHovered(false);
              handleEnd();
            }}
            className="relative h-[320px] sm:h-[380px] md:h-[430px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden py-4"
            style={{ perspective: '1100px' }}
          >
            {pastCommissions.map((commission, idx) => {
              let offset = idx - currentIndex;
              if (offset > totalCommissions / 2) offset -= totalCommissions;
              if (offset < -totalCommissions / 2) offset += totalCommissions;

              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 3.8;

              const translateX = offset * cardSpacing + (isDragging ? dragDelta : 0);
              const rotateY = offset > 0 ? -12 : offset < 0 ? 12 : 0;
              const scale = isCenter ? 1.04 : Math.max(0.74, 0.9 - absOffset * 0.08);
              const zIndex = 30 - Math.round(absOffset * 5);
              const opacity = isCenter 
                ? 1 
                : !isVisible 
                  ? 0 
                  : Math.max(0, 0.88 - absOffset * 0.22);

              return (
                <div
                  key={commission.id}
                  onClick={() => handleCardClick(idx)}
                  className={`group absolute w-[230px] h-[300px] sm:w-[270px] sm:h-[355px] md:w-[310px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer select-none ${
                    isDragging ? 'transition-none' : 'transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)]'
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: isCenter ? 'drop-shadow(0 18px 32px rgba(15,23,42,0.14))' : 'grayscale(10%)',
                    pointerEvents: isVisible ? 'auto' : 'none',
                    willChange: 'transform, opacity',
                  }}
                >
                  {/* BOX VITRA ONLY IMAGE (PURE ARTWORK PRESENTATION) */}
                  <div
                    className={`w-full h-full rounded-3xl overflow-hidden bg-white border p-3 flex items-center justify-center transition-all duration-800 ${
                      isCenter
                        ? 'border-stone-300 shadow-xl ring-2 ring-stone-900/10'
                        : 'border-stone-200/70 shadow-md'
                    }`}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#FAF8F5] flex items-center justify-center p-2.5">
                      <SmartImage
                        src={commission.image}
                        alt={commission.title}
                        objectFit="contain"
                        className="w-full h-full flex items-center justify-center bg-transparent"
                        imgClassName="object-contain w-full h-full filter drop-shadow-xs transition-all duration-700 ease-out group-hover:scale-105"
                        priority={isCenter}
                      />

                      {/* Subtle floating year badge */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-ink-900/80 backdrop-blur-md text-[10px] font-mono text-white shadow-xs">
                        {commission.year}
                      </div>

                      {/* Center Card Zoom Hover Prompt */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-ink-900 text-xs font-semibold flex items-center space-x-1.5 shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Click to Zoom</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-1.5 mt-3">
            {pastCommissions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to commission ${idx + 1}`}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex
                    ? 'w-6 h-1.5 bg-ink-900'
                    : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* COMMISSION ENQUIRY FORM */}
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
              Submissions directly notify Sanjay Rai’s studio desk in Imadol, Lalitpur.
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
