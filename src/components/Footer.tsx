import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Copy, Check, Hash } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './Icons';

export const Footer: React.FC = () => {
  const [copiedTags, setCopiedTags] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const discoveryHashtags = [
    '#SanjayRai',
    '#SanjayRaiBantawa',
    '#NepaliArt',
    '#ContemporarySculpture',
    '#HimalayanArt',
    '#NepalFineArt',
    '#KiratArt',
    '#ModernSculpture',
    '#AsianModernism',
    '#StudioSanjayRai',
    '#ImadolLalitpur',
    '#LoktaPaperArt'
  ];

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(discoveryHashtags.join(' '));
    setCopiedTags(true);
    setTimeout(() => setCopiedTags(false), 2000);
  };

  return (
    <footer className="bg-[#0B0F17] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 shadow-sm flex-shrink-0 bg-stone-900">
                <img
                  src="/images/artist/avatar.jpg"
                  alt="Sanjay Rai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg tracking-tight uppercase">
                  {siteConfig.artistName}
                </h4>
                <p className="text-[11px] font-mono text-sky-400">
                  {siteConfig.artistSubtitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-sm">
              Archival inventory, life studies on Lokta paper, and monumental stone sculptures representing four decades of Nepalese modernist research.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Studio"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email Studio"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-sky-600 flex items-center justify-center text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Exactly 5 main navigation items */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-300 font-sans">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/original-works" className="hover:text-white transition-colors">
                  Original Works
                </Link>
              </li>
              <li>
                <Link to="/commission" className="hover:text-white transition-colors">
                  Commission Work
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-white transition-colors">
                  Media &amp; Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Studio &amp; Archive
            </h5>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              {siteConfig.studioLocation}
            </p>
            <p className="text-xs text-stone-400 font-mono">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors inline-flex items-center space-x-1"
              >
                <span>WhatsApp: {siteConfig.phoneFormatted}</span>
              </a>
            </p>
            <p className="text-xs text-stone-400 font-mono">
              {siteConfig.email}
            </p>
            <p className="text-[11px] text-stone-500 font-sans italic pt-1">
              Visits by prior curatorial appointment only.
            </p>
          </div>

          {/* Institutional Services */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Institutional Services
            </h5>
            <ul className="space-y-2 text-xs text-stone-300 font-sans">
              <li>• Museum &amp; Biennial Exhibition Loans</li>
              <li>• Public Monument Commissions</li>
              <li>• Private Collection Acquisitions</li>
              <li>• Academic Monograph Licensing</li>
              <li>• Archival Authentication Certificates</li>
            </ul>
          </div>

        </div>

        {/* Global SEO Discovery Tags & Social Hashtags */}
        <div className="py-8 border-b border-white/10 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-stone-400 text-xs font-mono">
              <Hash className="w-3.5 h-3.5 text-sky-400" />
              <span className="uppercase tracking-widest font-semibold text-stone-300">
                Official Archival Discovery Tags &amp; Hashtags
              </span>
            </div>

            <button
              onClick={handleCopyHashtags}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono transition-all self-start sm:self-auto cursor-pointer"
              title="Copy hashtags for Instagram, Twitter, and Social Posts"
            >
              {copiedTags ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-stone-300" />}
              <span>{copiedTags ? 'Hashtags Copied!' : 'Copy All Hashtags'}</span>
            </button>
          </div>

          {/* Hashtag Pills Grid */}
          <div className="flex flex-wrap gap-2 pt-1">
            {discoveryHashtags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white text-[11px] font-mono transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[11px] text-stone-500 font-sans leading-relaxed pt-1">
            Global Fine Arts Index: Nepali Modernist Sculpture · Terracotta Figurative Studies · Kirat Mundhum Mythology · Lokta Paper Art · Fine Art Acquisitions Nepal &amp; International.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Sanjay Rai (Bantawa). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
