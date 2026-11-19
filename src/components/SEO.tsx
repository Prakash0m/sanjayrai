import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  jsonLd?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = '/images/artist/portrait.jpg',
  ogType = 'website',
  jsonLd,
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `https://sanjayrai.art${currentPath === '/' ? '' : currentPath}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `https://sanjayrai.art${ogImage}`;

  const defaultKeywords = 
    "Sanjay Rai, Sanjay Rai Bantawa, Sanjay Bantawa, Nepali Artist, Nepali Sculptor, Contemporary Nepali Painting, Lalitpur Artist Studio, Imadol Art Studio, Nepal Art Council, Kathmandu Fine Art, Kirat Mundhum Art, Modern Himalayan Art, Terracotta Sculpture Nepal, Lokta Paper Drawing, Asian Contemporary Sculpture, South Asian Modern Art, Himalayan Stone Sculpture, Fine Arts Nepal, Nepal Heritage Art, Public Monuments Kathmandu, #SanjayRai, #SanjayRaiBantawa, #NepaliArt, #ContemporarySculpture, #HimalayanArt, #NepalFineArt, #KiratArt, #ImadolLalitpur, #AsianModernism";

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords || defaultKeywords);

    // 3. Canonical URL
    setLinkTag('canonical', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', fullImageUrl, true);
    setMetaTag('og:type', ogType, true);

    // 5. Twitter Card Tags
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', fullImageUrl);

    // 6. Dynamic JSON-LD Structured Data
    if (jsonLd) {
      const scriptId = 'dynamic-page-jsonld';
      let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, keywords, canonicalUrl, fullImageUrl, ogType, jsonLd]);

  return null;
};

