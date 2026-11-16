import React from 'react';
import { Globe, Award, CheckCircle2 } from 'lucide-react';
import { collectionsData } from '../data/portfolio';

export const GlobalFootprints: React.FC = () => {
  return (
    <section id="exhibitions" className="py-20 md:py-28 relative bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span>PROVENANCE · PERMANENT COLLECTIONS &amp; EXHIBITIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
            Global Footprints &amp; Curated Recensions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed">
            The works of Sanjay Rai (Bantawa) reside in prestigious national archives, diplomatic missions, and discerning private collections across four continents.
          </p>
        </div>

        {/* 2-Column: Left = International Collections; Right = Institutional Honors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left: International Presence */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-ink-500 uppercase pb-3 border-b border-stone-200">
              <Globe className="w-4 h-4 text-sky-600" />
              <span>PERMANENT COLLECTIONS &amp; REPOSITORIES</span>
            </div>

            <div className="space-y-4">
              {collectionsData.map((col, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-stone-200/80 hover:border-sky-300 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-ink-900">
                      {col.country}
                    </h3>
                    <span className="text-[10px] font-mono text-sky-600 uppercase font-semibold">
                      Institutional Archive
                    </span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {col.institutions.map((inst, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-ink-600 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Institutional Honors & Public Monument Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-ink-500 uppercase pb-3 border-b border-stone-200">
              <Award className="w-4 h-4 text-sky-600" />
              <span>INSTITUTIONAL HONORS &amp; PUBLIC DISPLAYS</span>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-glass space-y-6">
              
              <div className="space-y-5">
                <div className="pb-4 border-b border-stone-100">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif text-lg font-bold text-ink-900">
                      National Fine Arts Laureate
                    </h4>
                    <span className="font-mono text-xs text-sky-600 font-bold">2004</span>
                  </div>
                  <p className="text-xs text-ink-600 mt-1 font-sans">
                    Awarded by Nepal Academy of Fine Arts (NAFA) for monumental stone sculptures installed in public parks.
                  </p>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif text-lg font-bold text-ink-900">
                      Kirat Cultural Heritage Civic Monument
                    </h4>
                    <span className="font-mono text-xs text-sky-600 font-bold">2012</span>
                  </div>
                  <p className="text-xs text-ink-600 mt-1 font-sans">
                    12-foot hand-chiseled granite memorial commemorating indigenous ancestral folklore, Dharan, Nepal.
                  </p>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif text-lg font-bold text-ink-900">
                      Himalayan Modernism Award of Excellence
                    </h4>
                    <span className="font-mono text-xs text-sky-600 font-bold">2018</span>
                  </div>
                  <p className="text-xs text-ink-600 mt-1 font-sans">
                    South Asian Contemporary Arts Summit, New Delhi &amp; Bangkok.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif text-lg font-bold text-ink-900">
                      State Commission: Emblem of Harmony
                    </h4>
                    <span className="font-mono text-xs text-sky-600 font-bold">2021</span>
                  </div>
                  <p className="text-xs text-ink-600 mt-1 font-sans">
                    Cast bronze architectural installation for the Supreme Court Cultural Pavilions, Kathmandu.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-amber-900 text-xs flex items-center justify-between">
                  <span>Inquiries for public monument commissions accepted</span>
                  <a
                    href="#contact"
                    className="font-bold underline hover:text-amber-950 ml-2"
                  >
                    Direct Inquiry →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
