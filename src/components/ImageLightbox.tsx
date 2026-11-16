import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { Artwork } from '../data/portfolio';
import { getWhatsAppUrl } from '../config/site';

interface ImageLightboxProps {
  artworks: Artwork[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  artworks,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const currentArtwork = artworks[currentIndex];

  const handleNext = useCallback(() => {
    setZoomLevel(1);
    onNavigate((currentIndex + 1) % artworks.length);
  }, [currentIndex, artworks.length, onNavigate]);

  const handlePrev = useCallback(() => {
    setZoomLevel(1);
    onNavigate((currentIndex - 1 + artworks.length) % artworks.length);
  }, [currentIndex, artworks.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !currentArtwork) return null;

  const handleWhatsAppInquiry = () => {
    const msg = `Hello Sanjay Rai, I am inquiring regarding the artwork "${currentArtwork.title}" (${currentArtwork.year}, ${currentArtwork.medium}). Is this piece currently available for acquisition or curated exhibition?`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const imageSrc = currentArtwork.image || currentArtwork.fallbackImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in p-4 sm:p-6 md:p-10">
      
      {/* Top Bar Controls */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20">
        
        {/* Counter & Category */}
        <div className="flex items-center space-x-3 text-white">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono tracking-widest uppercase border border-white/10">
            {currentArtwork.category}
          </span>
          <span className="text-xs font-mono text-stone-300">
            {currentIndex + 1} / {artworks.length}
          </span>
        </div>

        {/* Zoom & Close Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.3, 2.2))}
            aria-label="Zoom in"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.3, 1))}
            aria-label="Zoom out"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={() => setZoomLevel(1)}
            aria-label="Reset zoom"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors hidden sm:block"
            title="Reset Zoom"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-2.5 rounded-full bg-white/10 hover:bg-red-500/80 text-white backdrop-blur-md transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Lightbox Canvas & Metadata Grid */}
      <div className="w-full max-w-6xl max-h-[88vh] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left / Center: Artwork Image Display */}
        <div className="lg:col-span-8 relative flex items-center justify-center max-h-[65vh] lg:max-h-[82vh] overflow-hidden rounded-2xl bg-stone-950/60 p-2 border border-white/10">
          <div
            className="transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing max-h-full max-w-full flex items-center justify-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={imageSrc}
              alt={currentArtwork.title}
              onError={(e) => {
                // If original JPG fails, fall back to SVG
                if (currentArtwork.fallbackImage && e.currentTarget.src !== currentArtwork.fallbackImage) {
                  e.currentTarget.src = currentArtwork.fallbackImage;
                }
              }}
              className="max-h-[62vh] lg:max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
            />
          </div>

          {/* Navigation Arrows (Float on sides of artwork) */}
          <button
            onClick={handlePrev}
            aria-label="Previous artwork"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next artwork"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Right Column: Editorial Details & WhatsApp Action */}
        <div className="lg:col-span-4 glass-card-dark p-6 sm:p-7 rounded-3xl border border-white/10 text-white space-y-5 overflow-y-auto max-h-[40vh] lg:max-h-[82vh]">
          
          <div>
            <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase">
              {currentArtwork.category} · {currentArtwork.year}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 leading-tight">
              {currentArtwork.title}
            </h3>
          </div>

          {/* Artwork Specs */}
          <div className="space-y-2 py-3 border-y border-white/10 text-xs text-stone-300">
            <div className="flex justify-between">
              <span className="text-stone-400 font-mono">Medium:</span>
              <span className="font-medium text-right text-stone-200">{currentArtwork.medium}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400 font-mono">Dimensions:</span>
              <span className="font-medium text-right text-stone-200">{currentArtwork.dimensions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400 font-mono">Archive Code:</span>
              <span className="font-mono text-right text-sky-300 uppercase">SR-{currentArtwork.id}</span>
            </div>
          </div>

          {/* Description */}
          {currentArtwork.description && (
            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              {currentArtwork.description}
            </p>
          )}

          {/* Curator Notes */}
          {currentArtwork.curatorNotes && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-serif italic text-stone-300">
              Provenance: {currentArtwork.curatorNotes}
            </div>
          )}

          {/* Direct WhatsApp Inquiry Button */}
          <div className="pt-2">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full flex items-center justify-center space-x-2.5 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold tracking-wide shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Inquire on WhatsApp</span>
            </button>
            <p className="text-[10px] text-stone-400 text-center mt-2 font-mono">
              Direct connection with Sanjay Rai studio
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

