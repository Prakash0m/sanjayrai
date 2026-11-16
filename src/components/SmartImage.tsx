import React, { useState, useEffect } from 'react';

interface SmartImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  category?: string;
  aspectRatio?: 'tall' | 'wide' | 'square' | 'auto';
  onImageClick?: () => void;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  imgClassName = '',
  objectFit = 'cover',
  category,
  aspectRatio = 'auto',
  onImageClick,
  priority = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasTriedFallback, setHasTriedFallback] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasTriedFallback && fallbackSrc && fallbackSrc !== currentSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'tall':
        return 'aspect-[3/4]';
      case 'wide':
        return 'aspect-[16/10]';
      case 'square':
        return 'aspect-square';
      default:
        return '';
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-stone-100 ${getAspectClass()} ${className}`}
      onClick={onImageClick}
    >
      {/* Render Artwork or Fallback */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : undefined}
          onError={handleError}
          className={`w-full h-full transition-transform duration-500 hover:scale-102 ${
            objectFit === 'contain' ? 'object-contain' : 'object-cover'
          } ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-[#FAF5EE] border border-stone-200/80">
          <div className="w-12 h-12 rounded-full bg-stone-200/70 flex items-center justify-center mb-3 text-stone-600">
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          {category && (
            <span className="text-[10px] uppercase font-mono tracking-widest text-accent-terracotta mb-1">
              {category}
            </span>
          )}
          <h4 className="font-serif italic text-stone-800 text-base">{alt}</h4>
        </div>
      )}
    </div>
  );
};
