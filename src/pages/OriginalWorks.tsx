import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { portfolioArtworks, artworkCategories, ArtworkCategory, Artwork } from '../data/portfolio';
import { SmartImage } from '../components/SmartImage';
import { ImageLightbox } from '../components/ImageLightbox';
import { getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';
import { Eye } from 'lucide-react';
import { SEO } from '../components/SEO';

export const OriginalWorks: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ArtworkCategory) || 'ALL DISCIPLINES';
  
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>(
    artworkCategories.includes(initialCategory) ? initialCategory : 'ALL DISCIPLINES'
  );
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeArtworkIndex, setActiveArtworkIndex] = useState<number>(0);

  // Sync category with URL query param if present
  useEffect(() => {
    const cat = searchParams.get('category') as ArtworkCategory;
    if (cat && artworkCategories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (category: ArtworkCategory) => {
    setSelectedCategory(category);
    if (category === 'ALL DISCIPLINES') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const filteredArtworks = selectedCategory === 'ALL DISCIPLINES'
    ? portfolioArtworks
    : portfolioArtworks.filter((art) => art.category === selectedCategory);

  const handleCardClick = (artwork: Artwork) => {
    const originalIndex = portfolioArtworks.findIndex((a) => a.id === artwork.id);
    setActiveArtworkIndex(originalIndex !== -1 ? originalIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-16 sm:pt-36 sm:pb-32 bg-[#FAF8F5] min-h-screen">
      <SEO
        title="Original Paintings & Life Studies — Sanjay Rai (Bantawa) | Studio Acquisitions"
        description="Acquire original paintings, Lokta paper drawings, and studies directly from Sanjay Rai's studio in Imadol, Lalitpur, Nepal. Featuring Mundhum mythology, figurative studies, and equine series."
        keywords="Sanjay Rai Original Paintings, Lokta Paper Art, Nepali Fine Art Acquisitions, Imadol Lalitpur Art Studio, Kirat Art, Himalayan Horses Series, #SanjayRai, #NepaliArt, #StudioAcquisitions"
        canonicalPath="/original-works"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-tight">
            Original Works & Paintings
          </h1>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Acquire documented original paintings, life studies on hand-beaten Lokta paper, and archival maquettes directly from Sanjay Rai's studio in Imadol, Lalitpur.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {artworkCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-ink-900 text-white shadow-md'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/70'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Artworks Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((artwork) => {
            return (
              <div
                key={artwork.id}
                onClick={() => handleCardClick(artwork)}
                className="group cursor-pointer rounded-3xl bg-white border border-stone-200/60 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Artwork Image Container (100% full view, zero head cutoff, no heavy borders) */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] mb-4 flex items-center justify-center p-3">
                  <SmartImage
                    src={artwork.image}
                    fallbackSrc={artwork.fallbackImage}
                    alt={artwork.title}
                    category={artwork.category}
                    objectFit="contain"
                    className="w-full h-full flex items-center justify-center bg-transparent"
                    imgClassName="object-contain w-full h-full filter drop-shadow-xs group-hover:scale-102 transition-transform duration-500"
                  />

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-ink-900/80 backdrop-blur-md text-[9px] font-mono text-white">
                    {artwork.year}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-mono tracking-wider uppercase text-ink-900 shadow-2xs">
                    {artwork.category}
                  </div>

                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <div className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white text-ink-900 text-xs font-semibold shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Fullscreen Lightbox</span>
                    </div>
                  </div>
                </div>

                {/* Card Editorial Info with REQUIRED PRICE BELOW IT */}
                <div className="px-1.5 pb-1 space-y-2">
                  
                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ink-900 group-hover:text-sky-600 transition-colors leading-snug line-clamp-1">
                    {artwork.title}
                  </h3>

                  {/* Medium & Dimensions */}
                  <p className="text-xs text-stone-500 font-sans line-clamp-1">
                    {artwork.medium}
                  </p>

                  <div className="text-[11px] font-mono text-stone-400">
                    {artwork.dimensions}
                  </div>

                  {/* EXPLICIT PRICE BLOCK (Placed prominently below title & medium) */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                        Acquisition Price
                      </span>
                      <span className="font-serif text-base sm:text-lg font-bold text-ink-900 text-emerald-800">
                        {artwork.price}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppUrl(`Hello Sanjay Rai, I am interested in acquiring the original piece "${artwork.title}" (${artwork.price}). Is it currently available?`)}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-medium border border-emerald-200 transition-all hover:scale-105"
                      aria-label="Inquire via WhatsApp"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquire</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Acquisition Guidance Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-stone-200/70 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink-900">
              Institutional Acquisitions & Global Shipping
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-sans">
              All original artworks are accompanied by an artist-signed Certificate of Authenticity, provenance archival documentation, and international museum-grade crating.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Sanjay Rai, I would like to inquire about international shipping and institutional acquisition of original works.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat Regarding Shipping</span>
          </a>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        artworks={portfolioArtworks}
        currentIndex={activeArtworkIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveArtworkIndex(idx)}
      />
    </div>
  );
};
