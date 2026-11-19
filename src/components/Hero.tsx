import React from 'react';
import { ArrowDown, FileText, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { siteConfig, getWhatsAppUrl } from '../config/site';

interface HeroProps {
  onExploreClick?: () => void;
  onOpenTreatise?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-ambient-mesh">
      {/* Decorative blurred gradient blobs for Apple glass effect */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Quote, Metrics */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Archival Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/85 border border-stone-200/80 shadow-glass-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse flex-shrink-0" />
              <span className="text-[9px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-ink-700 uppercase truncate">
                RETROSPECTIVE &amp; ARCHIVE · 1994 – 2024 · KATHMANDU
              </span>
            </div>

            {/* Artist Main Title */}
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink-900 leading-[1.05]">
                SANJAY RAI
                <span className="block text-3xl sm:text-5xl md:text-6xl text-ink-600 font-light italic mt-1 font-serif">
                  (BANTAWA)
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-lg text-ink-600 max-w-xl font-normal leading-relaxed">
                An exploration into Nepalese modern art through monumental sculpture, life studies on Lokta paper, terracotta, and philosophical form.
              </p>
            </div>

            {/* Elegant Quote Block (as in the reference image) */}
            <div className="relative glass-card p-5 sm:p-7 rounded-3xl border border-stone-200/70 bg-white/80">
              <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-md bg-stone-900 text-[9px] sm:text-[10px] font-mono tracking-widest text-stone-200 uppercase">
                Artistic Philosophy
              </div>
              <p className="font-serif italic text-base sm:text-xl text-ink-800 leading-snug">
                “The soul of form breathes in quiet observation... Art is not merely representation; it is the transmutation of silence into living form.”
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-ink-500 gap-1">
                <span className="font-medium text-ink-700">Sanjay Rai (Bantawa)</span>
                <span className="font-mono text-[10px] sm:text-[11px]">Kathmandu Studio Monograph</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#gallery"
                onClick={onExploreClick}
                className="group inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-ink-900 hover:bg-black text-white text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Archival Works</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-ink-800 text-sm font-medium border border-stone-200/90 shadow-sm transition-all hover:scale-[1.02] group"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Contact via WhatsApp</span>
              </a>
            </div>

            {/* Stats Metric Row (Matching the 4 metric boxes from the design) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200/70">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="glass-panel p-3.5 rounded-2xl border border-stone-200/60 bg-white/70">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-ink-700 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-ink-400 font-mono mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Clean Artist Portrait (Perfect Fixed Proportions) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            
            {/* Clean Real Artist Portrait Card with Fixed Balanced Proportions (Full uncropped) */}
            <div className="w-full max-w-[380px] sm:max-w-[420px] bg-white p-3 sm:p-4 rounded-3xl border border-stone-200/80 shadow-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-[9/14] sm:aspect-[9/13.5] rounded-2xl overflow-hidden bg-[#F5F2ED] flex items-center justify-center p-2.5">
                <img
                  src="/images/artist/portrait.jpg"
                  alt="Sanjay Rai (Bantawa)"
                  className="w-full h-full object-contain filter drop-shadow-xs transition-transform duration-700 hover:scale-102"
                  loading="eager"
                />
              </div>

              <div className="pt-3 pb-1 px-1 flex flex-col space-y-1 text-left">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ink-900">
                  Sanjay Rai (Bantawa)
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Contemporary Nepali Sculptor &amp; Thinker
                </p>
              </div>
            </div>

            {/* Philosophical Treatise Download Card */}
            <a
              href="#about"
              className="w-full max-w-[380px] sm:max-w-[420px] glass-card p-4 rounded-2xl border border-stone-200/80 flex items-center justify-between hover:border-sky-400/50 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-sky-600 uppercase flex items-center space-x-1">
                    <span>Treatise</span>
                    <Sparkles className="w-2.5 h-2.5" />
                  </span>
                  <h4 className="font-serif font-bold text-sm text-ink-900 leading-tight group-hover:text-sky-700 transition-colors">
                    Form &amp; Being (Monograph PDF)
                  </h4>
                  <p className="text-[11px] text-ink-500 font-sans mt-0.5">Read Philosophical Foundation →</p>
                </div>
              </div>
              <span className="text-sky-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">→</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
