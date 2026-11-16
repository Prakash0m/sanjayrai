import React, { useState } from 'react';
import { portfolioArtworks, artworkCategories, ArtworkCategory, Artwork } from '../data/portfolio';
import { SmartImage } from './SmartImage';
import { ImageLightbox } from './ImageLightbox';
import { ArrowUpRight, Filter, Eye } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

export const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('ALL DISCIPLINES');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeArtworkIndex, setActiveArtworkIndex] = useState<number>(0);

  const filteredArtworks = selectedCategory === 'ALL DISCIPLINES'
    ? portfolioArtworks
    : portfolioArtworks.filter((art) => art.category === selectedCategory);

  const handleCardClick = (artwork: Artwork) => {
    const originalIndex = portfolioArtworks.findIndex((a) => a.id === artwork.id);
    setActiveArtworkIndex(originalIndex !== -1 ? originalIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 relative bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase mb-4">
              <span>INVENTORY · ARCHIVAL CATALOGUE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
              Curated Archival Inventory
            </h2>
            <p className="mt-3 text-base text-ink-600 max-w-2xl">
              Spanning four decades of monumental stone and terracotta sculpture, life studies on Lokta paper, and raw mineral pigment canvases.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-500 flex items-center space-x-2">
            <span>Showing {filteredArtworks.length} of {portfolioArtworks.length} Catalogued Works</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-200/70">
          <div className="flex items-center space-x-1.5 text-xs text-stone-400 font-mono mr-2 hidden sm:flex">
            <Filter className="w-3.5 h-3.5" />
            <span>DISCIPLINE:</span>
          </div>
          {artworkCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-ink-900 text-white shadow-md scale-105'
                    : 'glass-pill text-ink-600 hover:text-ink-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Artworks Grid (Responsive Masonry/Editorial Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((artwork) => {
            return (
              <div
                key={artwork.id}
                onClick={() => handleCardClick(artwork)}
                className="group cursor-pointer glass-card rounded-3xl overflow-hidden border border-stone-200/80 p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image Container with category pill overlay */}
                <div className="relative rounded-2xl overflow-hidden bg-stone-100 mb-4">
                  <SmartImage
                    src={artwork.image}
                    fallbackSrc={artwork.fallbackImage}
                    alt={artwork.title}
                    category={artwork.category}
                    aspectRatio={artwork.aspectRatio || 'tall'}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Category Pill on top left */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-mono tracking-widest text-ink-800 uppercase shadow-sm border border-white/60">
                    {artwork.category}
                  </div>

                  {/* Year Tag on top right */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                    {artwork.year}
                  </div>

                  {/* Hover Overlay with View Action */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-ink-900 text-xs font-semibold shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Archival Details</span>
                    </div>
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div className="px-1.5 pb-2 space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 group-hover:text-sky-600 transition-colors leading-snug">
                      {artwork.title}
                    </h3>
                  </div>

                  <p className="text-xs text-ink-500 font-sans line-clamp-1">
                    {artwork.medium}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-[11px] font-mono text-stone-400">
                    <span>{artwork.dimensions}</span>
                    <span className="text-sky-600 group-hover:translate-x-0.5 transition-transform flex items-center space-x-0.5">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Inquiries Banner */}
        <div className="mt-16 glass-panel p-8 rounded-3xl border border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink-900">
              Seeking specific archival commissions or institutional loans?
            </h4>
            <p className="text-xs sm:text-sm text-ink-600 mt-1">
              The studio maintains an unreleased inventory of life drawings and monumental maquettes.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Sanjay Rai, I am looking for specific archival works / commissions.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3.5 rounded-full bg-ink-900 hover:bg-black text-white text-xs font-semibold tracking-wide shadow-md transition-all hover:scale-105"
          >
            Direct WhatsApp Studio Line →
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        artworks={portfolioArtworks}
        currentIndex={activeArtworkIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveArtworkIndex(idx)}
      />
    </section>
  );
};

