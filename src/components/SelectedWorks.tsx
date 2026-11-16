import React, { useState, useEffect, useCallback, useRef } from 'react';
import { portfolioArtworks } from '../data/portfolio';
import { SmartImage } from './SmartImage';
import { ImageLightbox } from './ImageLightbox';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export const SelectedWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedForLightbox, setSelectedForLightbox] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Real-time drag / swipe sliding state
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const hasMovedRef = useRef<boolean>(false);

  const totalWorks = portfolioArtworks.length;

  // Window resize listener to calibrate card spacing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalWorks);
  }, [totalWorks]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalWorks) % totalWorks);
  }, [totalWorks]);

  // AUTOMATIC SLIDESHOW (Auto-advances smoothly)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || isDragging || lightboxOpen) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3200);

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

  // Drag / Swipe handlers with live movement
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
      setSelectedForLightbox(index);
      setLightboxOpen(true);
    } else {
      setCurrentIndex(index);
    }
  };

  // Responsive spacing between card centers
  const cardSpacing = windowWidth < 640 ? 155 : windowWidth < 1024 ? 185 : 210;

  return (
    <section
      id="selected"
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F8FBFF] border-t border-stone-200/50 text-ink-900 overflow-hidden select-none"
    >
      {/* Soft ethereal ambient lighting matching overall project aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-8 left-1/3 w-[300px] h-[240px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-7 sm:mb-9 md:mb-11">
          {/* Eyebrow Pill with Live Auto-run status */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/60 text-[11px] font-mono tracking-widest text-stone-700 uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SELECTED MASTERPIECES</span>
            <span className="text-stone-300">·</span>
            <span className="text-[10px] text-stone-500 font-sans normal-case">
              {isHovered ? 'Paused on hover' : 'Auto-sliding'}
            </span>
          </div>

          {/* Headline & Subtitle */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-ink-900 uppercase">
            Browse Archival Masterpieces
          </h2>
          <p className="text-ink-600 text-xs sm:text-sm font-sans max-w-lg mx-auto">
            Swipe, slide or click to inspect iconic life studies, Lokta paper drawings, and terracotta studies.
          </p>
        </div>

        {/* Compact Sliding Coverflow / Carousel Track */}
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
          className="relative h-[340px] sm:h-[385px] md:h-[425px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: '1100px' }}
        >
          {/* Circular Left Nav Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous artwork"
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-ink-900 backdrop-blur-md border border-stone-200/60 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Circular Right Nav Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next artwork"
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-ink-900 backdrop-blur-md border border-stone-200/60 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Cards Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {portfolioArtworks.map((artwork, idx) => {
              let offset = idx - currentIndex;
              if (offset > totalWorks / 2) offset -= totalWorks;
              if (offset < -totalWorks / 2) offset += totalWorks;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 3;

              if (!isVisible) return null;

              // Smooth real-time sliding offset
              const translateX = offset * cardSpacing + (isDragging ? dragDelta : 0);
              const rotateY = offset > 0 ? -20 : offset < 0 ? 20 : 0;
              const scale = isCenter ? 1.03 : Math.max(0.74, 0.88 - Math.abs(offset) * 0.1);
              const zIndex = 30 - Math.abs(offset) * 5;
              const opacity = isCenter ? 1 : Math.max(0.45, 0.85 - Math.abs(offset) * 0.18);

              return (
                <div
                  key={artwork.id}
                  onClick={() => handleCardClick(idx)}
                  className={`absolute w-[220px] h-[315px] sm:w-[250px] sm:h-[360px] md:w-[275px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl ${
                    isDragging ? 'transition-none' : 'transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)]'
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: isCenter ? 'drop-shadow(0 16px 30px rgba(15,23,42,0.12))' : 'grayscale(10%)',
                  }}
                >
                  {/* Card Container: Clean Minimal Border, Seamless Aesthetic */}
                  <div
                    className={`w-full h-full flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white transition-all ${
                      isCenter
                        ? 'shadow-xl shadow-stone-900/[0.08]'
                        : 'shadow-sm opacity-90'
                    }`}
                  >
                    {/* Artwork Presentation Canvas: 100% full view, zero head cutoff, warm archival mat */}
                    <div className="relative flex-1 w-full bg-[#FAF8F5] flex items-center justify-center p-2.5 sm:p-3 overflow-hidden">
                      <SmartImage
                        src={artwork.image}
                        alt={artwork.title}
                        objectFit="contain"
                        className="w-full h-full flex items-center justify-center bg-transparent"
                        imgClassName="object-contain w-full h-full filter drop-shadow-xs"
                        priority={isCenter}
                      />
                    </div>

                    {/* Dedicated Minimal Bottom Caption Bar (Zero heavy borders) */}
                    <div className="px-3.5 py-2.5 bg-white flex items-center justify-between gap-2 shrink-0">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-xs sm:text-sm font-bold text-ink-900 truncate">
                          {artwork.title}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 font-sans truncate">
                          {artwork.category} · {artwork.year}
                        </p>
                      </div>

                      <span className="text-[9px] font-mono tracking-wider text-stone-500 bg-stone-100 hover:bg-stone-200 px-2 py-0.5 rounded-full shrink-0 transition-colors">
                        ZOOM
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination & Play Controls Row */}
        <div className="flex items-center justify-center space-x-3 mt-6 sm:mt-7">
          {/* Play / Pause Toggle Button */}
          <button
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            aria-label={isAutoPlaying ? 'Pause automatic slideshow' : 'Start automatic slideshow'}
            className="w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors shadow-2xs"
            title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
          </button>

          {/* Dots Track */}
          <div className="flex items-center space-x-1.5">
            {portfolioArtworks.map((_, dotIdx) => {
              const isActive = dotIdx === currentIndex;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Jump to artwork ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-6 h-1.5 bg-ink-900 shadow-2xs'
                      : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              );
            })}
          </div>
        </div>

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
