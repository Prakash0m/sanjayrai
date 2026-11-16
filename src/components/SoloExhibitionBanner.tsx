import React from 'react';
import { Calendar, MapPin, User, Download, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { SmartImage } from './SmartImage';

export const SoloExhibitionBanner: React.FC = () => {
  const { upcomingExhibition } = siteConfig;

  return (
    <section className="relative py-20 md:py-28 bg-[#0F172A] text-white overflow-hidden">
      {/* Subtle radial glow background accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Exhibition Announcement */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-sky-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>UPCOMING LANDMARK RETROSPECTIVE</span>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                {siteConfig.artistName}:
                <span className="block text-sky-400 italic font-light mt-1">
                  {upcomingExhibition.title}
                </span>
              </h2>
              <p className="mt-4 text-stone-300 text-base sm:text-lg max-w-xl font-sans leading-relaxed">
                {upcomingExhibition.subtitle}
              </p>
            </div>

            {/* Exhibition Key Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-sky-400 text-xs font-mono mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>DATES</span>
                </div>
                <div className="font-serif font-bold text-base text-white">
                  {upcomingExhibition.dates}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">Opening Gala 5:30 PM</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-sky-400 text-xs font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>VENUE</span>
                </div>
                <div className="font-serif font-bold text-base text-white">
                  Siddhartha Art Gallery
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">Baber Mahal, Kathmandu</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-sky-400 text-xs font-mono mb-1">
                  <User className="w-3.5 h-3.5" />
                  <span>CURATOR</span>
                </div>
                <div className="font-serif font-bold text-base text-white">
                  {upcomingExhibition.curator}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">Institutional Catalog</div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl(`Hello Sanjay Rai, I would like to RSVP / Reserve an Invitation for the exhibition: ${upcomingExhibition.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-stone-950 font-semibold text-xs tracking-wide shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Reserve VIP Invitation on WhatsApp</span>
              </a>

              <a
                href={getWhatsAppUrl(`Hello Sanjay Rai, please provide the digital exhibition catalog for "${upcomingExhibition.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 backdrop-blur-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Exhibition PDF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Featured Banner Card */}
          <div className="lg:col-span-5">
            <div className="glass-card-dark p-4 rounded-3xl border border-white/15 shadow-2xl space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <SmartImage
                  src="/images/artworks/himalayan-conversation.jpg"
                  alt="Paper, Grace & Clay Exhibition Feature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                    FEATURED RETROSPECTIVE PIECE
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    The Himalayan Conversation (1997)
                  </h4>
                  <p className="text-xs text-stone-300">Color pastel & gouache on paper, 24 × 36 in</p>
                </div>
              </div>

              <div className="p-2 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>Official Retrospective Archive</span>
                <span className="text-sky-400">Curated Exhibition</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
