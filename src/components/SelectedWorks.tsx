import React, { useState, useEffect, useCallback, useRef } from 'react';
import { portfolioArtworks } from '../data/portfolio';
import { SmartImage } from './SmartImage';
import { ImageLightbox } from './ImageLightbox';
import { ChevronLeft, ChevronRight, MessageCircle, Eye } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

export const SelectedWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2); // Center on a striking piece initially
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedForLightbox, setSelectedForLightbox] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag / swipe states
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const totalWorks = portfolioArtworks.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalWorks);
  }, [totalWorks]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalWorks) % totalWorks);
  }, [totalWorks]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if lightbox is open
      if (lightboxOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, lightboxOpen]);

  // Touch / Drag events
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || startX === null) return;
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setIsDragging(false);
    setStartX(null);
  };

  const handleCardClick = (index: number) => {
    if (index === currentIndex) {
      // Open Lightbox
      setSelectedForLightbox(index);
      setLightboxOpen(true);
    } else {
      // Bring clicked card to center
      setCurrentIndex(index);
    }
  };

  const activeArtwork = portfolioArtworks[currentIndex];

  return (
    <section
      id="selected"
      className="relative py-20 md:py-28 bg-[#090E17] text-white overflow-hidden select-none"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-950/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-[350px] h-[350px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching the Reference Image style) */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-stone-300 uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>SELECTED WORK</span>
          </div>

          {/* Large Bold Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
            BROWSE ARCHIVAL MASTERPIECES
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-sans max-w-xl mx-auto">
            Interactive 3D Coverflow of iconic life studies, figurative sketches, and retrospective selections.
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div
          ref={containerRef}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing perspective-[1200px]"
          style={{ perspective: '1200px' }}
        >
          {/* Circular Left Nav Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous artwork"
            className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Circular Right Nav Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next artwork"
            className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Cards Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {portfolioArtworks.map((artwork, idx) => {
              // Calculate offset relative to currentIndex
              let offset = idx - currentIndex;
              if (offset > totalWorks / 2) offset -= totalWorks;
              if (offset < -totalWorks / 2) offset += totalWorks;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 3;

              if (!isVisible) return null;

              // Transform calculations for 3D Coverflow
              const translateX = offset * 210; // horizontal spacing in px
              const rotateY = offset > 0 ? -38 : offset < 0 ? 38 : 0;
              const scale = isCenter ? 1.05 : Math.max(0.65, 0.88 - Math.abs(offset) * 0.12);
              const zIndex = 30 - Math.abs(offset) * 5;
              const opacity = isCenter ? 1 : Math.max(0.4, 0.85 - Math.abs(offset) * 0.15);

              return (
                <div
                  key={artwork.id}
                  onClick={() => handleCardClick(idx)}
                  className="absolute w-[260px] h-[330px] sm:w-[320px] sm:h-[400px] md:w-[350px] md:h-[440px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-2xl"
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: isCenter ? 'drop-shadow(0 25px 35px rgba(0,0,0,0.85))' : 'brightness(0.75)',
                  }}
                >
                  {/* Card Container */}
                  <div className={`w-full h-full relative rounded-3xl overflow-hidden bg-stone-900 border ${
                    isCenter ? 'border-white/50 ring-2 ring-sky-400/30' : 'border-white/10'
                  }`}>
                    <SmartImage
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                      priority={isCenter}
                    />

                    {/* Top Pill on Card */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white border border-white/20">
                      {artwork.category}
                    </div>

                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-sky-300 border border-white/10">
                      {artwork.year}
                    </div>

                    {/* Active Center Card Bottom Info Gradient */}
                    {isCenter && (
                      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent text-white space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                          SR-ARCHIVE · TAP TO ZOOM
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                          {artwork.title}
                        </h3>
                        <p className="text-xs text-stone-300 font-sans truncate">
                          {artwork.medium}
                        </p>
                      </div>
                    )}

                    {/* Hover Inspect Pill */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-stone-950 text-xs font-semibold shadow-xl scale-95 hover:scale-105 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Full Details</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots Row (Matching Reference Image) */}
        <div className="flex items-center justify-center space-x-2 mt-8 md:mt-10">
          {portfolioArtworks.map((_, dotIdx) => {
            const isActive = dotIdx === currentIndex;
            return (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Jump to artwork ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-7 h-2 bg-white shadow-md'
                    : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            );
          })}
        </div>

        {/* Bottom Helper Bar (Matching Reference Image) */}
        <div className="text-center mt-4">
          <p className="text-[11px] font-mono tracking-widest text-stone-500 uppercase">
            ← DRAG · FLICK · ARROW KEYS →
          </p>
        </div>

        {/* Selected Artwork Action Ribbon */}
        {activeArtwork && (
          <div className="mt-8 max-w-xl mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs text-stone-400 font-mono">
                Currently Selected:
              </p>
              <h4 className="font-serif font-bold text-base text-white">
                {activeArtwork.title} ({activeArtwork.year})
              </h4>
            </div>

            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => {
                  setSelectedForLightbox(currentIndex);
                  setLightboxOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-all"
              >
                Inspect Lightbox
              </button>

              <a
                href={getWhatsAppUrl(`Hello Sanjay Rai, I am inquiring regarding the selected piece: "${activeArtwork.title}" (${activeArtwork.year}, ${activeArtwork.medium}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Interactive Lightbox for Fullscreen Inspection */}
      <ImageLightbox
        artworks={portfolioArtworks}
        currentIndex={selectedForLightbox}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setSelectedForLightbox(idx)}
      />
    </section>
  );
};
