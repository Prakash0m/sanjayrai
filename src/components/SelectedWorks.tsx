import React, { useState, useEffect, useCallback, useRef } from 'react';
import { portfolioArtworks } from '../data/portfolio';
import { SmartImage } from './SmartImage';
import { ImageLightbox } from './ImageLightbox';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const SelectedWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedForLightbox, setSelectedForLightbox] = useState<number>(0);
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
    if (Math.abs(delta) > 5) {
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
    // If the user was dragging/sliding, don't trigger click action
    if (hasMovedRef.current) return;

    if (index === currentIndex) {
      setSelectedForLightbox(index);
      setLightboxOpen(true);
    } else {
      setCurrentIndex(index);
    }
  };

  // Responsive spacing between card centers
  const cardSpacing = windowWidth < 640 ? 150 : windowWidth < 1024 ? 180 : 205;

  return (
    <section
      id="selected"
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F8FBFF] border-t border-stone-200/60 text-ink-900 overflow-hidden select-none"
    >
      {/* Soft ethereal ambient lighting matching overall project aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-8 left-1/3 w-[300px] h-[240px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10 md:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 text-[11px] font-mono tracking-widest text-stone-700 uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            <span>SELECTED MASTERPIECES</span>
          </div>

          {/* Headline & Brief Description */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-ink-900 uppercase">
            Browse Archival Masterpieces
          </h2>
          <p className="text-ink-600 text-xs sm:text-sm font-sans max-w-lg mx-auto">
            Swipe or slide through select drawings, Lokta life studies, and sculptural forms from the 1994–2024 archive.
          </p>
        </div>

        {/* Compact Sliding Coverflow / Carousel Track */}
        <div
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
          className="relative h-[290px] sm:h-[330px] md:h-[370px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: '1100px' }}
        >
          {/* Circular Left Nav Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous artwork"
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-ink-900 backdrop-blur-md border border-stone-200/90 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
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
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-ink-900 backdrop-blur-md border border-stone-200/90 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
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
              const rotateY = offset > 0 ? -24 : offset < 0 ? 24 : 0;
              const scale = isCenter ? 1.04 : Math.max(0.72, 0.88 - Math.abs(offset) * 0.1);
              const zIndex = 30 - Math.abs(offset) * 5;
              const opacity = isCenter ? 1 : Math.max(0.45, 0.85 - Math.abs(offset) * 0.18);

              return (
                <div
                  key={artwork.id}
                  onClick={() => handleCardClick(idx)}
                  className={`absolute w-[205px] h-[260px] sm:w-[235px] sm:h-[305px] md:w-[265px] md:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xl ${
                    isDragging ? 'transition-none' : 'transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)]'
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: isCenter ? 'drop-shadow(0 15px 25px rgba(15,23,42,0.18))' : 'grayscale(15%)',
                  }}
                >
                  {/* Card Shell */}
                  <div
                    className={`w-full h-full relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 border ${
                      isCenter
                        ? 'border-sky-300 ring-2 ring-sky-400/40 shadow-xl'
                        : 'border-stone-200/90'
                    }`}
                  >
                    <SmartImage
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                      priority={isCenter}
                    />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-ink-900 border border-stone-200/70 shadow-xs">
                      {artwork.category}
                    </div>

                    {/* Top Year Badge */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-ink-900/80 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-white">
                      {artwork.year}
                    </div>

                    {/* Active Center Card Bottom Info Gradient */}
                    {isCenter && (
                      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-0.5">
                        <span className="text-[9px] font-mono tracking-widest text-sky-300 uppercase block">
                          SR ARCHIVE · TAP TO ZOOM
                        </span>
                        <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white truncate">
                          {artwork.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-stone-200 font-sans truncate">
                          {artwork.medium}
                        </p>
                      </div>
                    )}

                    {/* Center Hover Inspect Overlay */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white text-ink-900 text-xs font-medium shadow-lg scale-95 hover:scale-105 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Fullscreen</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots Row */}
        <div className="flex items-center justify-center space-x-1.5 mt-6 sm:mt-8">
          {portfolioArtworks.map((_, dotIdx) => {
            const isActive = dotIdx === currentIndex;
            return (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Jump to artwork ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-6 h-1.5 bg-ink-900 shadow-xs'
                    : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            );
          })}
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
